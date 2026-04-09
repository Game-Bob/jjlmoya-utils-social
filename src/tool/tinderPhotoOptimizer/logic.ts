import type { TinderPhotoOptimizerUI } from './ui';

interface FaceLandmark { x: number; y: number; }
interface FaceLandmarks { getLeftEye(): FaceLandmark[]; getRightEye(): FaceLandmark[]; positions: FaceLandmark[]; }
interface FaceExpressions { happy: number; angry: number; }
interface FaceBox { x: number; y: number; width: number; height: number; }
interface FaceNet { loadFromUri(url: string): Promise<void>; }
interface FaceApiGlobal {
  nets: { tinyFaceDetector: FaceNet; faceLandmark68Net: FaceNet; faceExpressionNet: FaceNet };
  TinyFaceDetectorOptions: new () => unknown;
  detectSingleFace(img: HTMLImageElement, opts: unknown): { withFaceLandmarks(): { withFaceExpressions(): Promise<FaceDetectionResult | undefined> } };
}
declare const faceapi: FaceApiGlobal;

export interface FaceDetectionResult { detection: { box: FaceBox; score: number }; landmarks: FaceLandmarks | null; expressions: FaceExpressions | null; }
export interface AnalysisAlert { type: 'success' | 'warning' | 'error'; textKey: keyof TinderPhotoOptimizerUI; }
type AnalysisCtx = { alerts: AnalysisAlert[]; metrics: Record<string, keyof TinderPhotoOptimizerUI | string> };
type ImgGeo = { x: number; y: number; w: number; h: number; canvasW: number; canvasH: number; r: number };
type FaceGeo = { fx: number; fy: number; fw: number; fh: number; faceHeightRatio: number };

export class TinderOptimizerEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  public image: HTMLImageElement | null = null;
  public faceDetection: FaceDetectionResult | null = null;
  public zoom = 1;
  public offset = { x: 0, y: 0 };
  public brightness = 100;
  private isFaceApiLoaded = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  async loadModels() {
    if (this.isFaceApiLoaded) return;
    const MODEL_URL = 'https://justadudewhohacks.github.io/face-api.js/models';
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    ]);
    this.isFaceApiLoaded = true;
  }

  async detect(image: HTMLImageElement) {
    this.image = image;
    const detections = await faceapi
      .detectSingleFace(image, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
    this.faceDetection = detections ?? null;
    return detections;
  }

  setManualFace(rect: { x: number; y: number; w: number; h: number }) {
    if (!this.image) return;
    const r = Math.max(this.canvas.width / this.image.width, this.canvas.height / this.image.height);
    const w = this.image.width * r * this.zoom, h = this.image.height * r * this.zoom;
    const imgX = (this.canvas.width - w) / 2 + this.offset.x;
    const imgY = (this.canvas.height - h) / 2 + this.offset.y;
    this.faceDetection = {
      detection: { box: { x: (rect.x - imgX) / (r * this.zoom), y: (rect.y - imgY) / (r * this.zoom), width: rect.w / (r * this.zoom), height: rect.h / (r * this.zoom) }, score: 1 },
      landmarks: null, expressions: null,
    };
  }

  updateState(zoom: number, offset: { x: number; y: number }, brightness: number) {
    this.zoom = zoom;
    this.offset = offset;
    this.brightness = brightness;
  }

  private computeImgGeo(): ImgGeo {
    const iw = this.image!.width, ih = this.image!.height;
    const canvasW = this.canvas.width, canvasH = this.canvas.height;
    const r = Math.max(canvasW / iw, canvasH / ih);
    const w = iw * r * this.zoom, h = ih * r * this.zoom;
    return { x: (canvasW - w) / 2 + this.offset.x, y: (canvasH - h) / 2 + this.offset.y, w, h, canvasW, canvasH, r };
  }

  private checkCoverage(ctx: AnalysisCtx, geo: ImgGeo) {
    const { x, y, w, h, canvasW, canvasH } = geo;
    const ok = !(x > 0 || y > 0 || x + w < canvasW || y + h < canvasH);
    ctx.metrics.coverage = ok ? '100%' : 'statusIncorrect';
    if (!ok) ctx.alerts.push({ type: 'error', textKey: 'alertEmptySpaces' });
  }

  private getFaceGeo(box: FaceBox, geo: ImgGeo): FaceGeo {
    const { x, y, r } = geo;
    const fx = x + box.x * r * this.zoom, fy = y + box.y * r * this.zoom;
    const fw = box.width * r * this.zoom, fh = box.height * r * this.zoom;
    return { fx, fy, fw, fh, faceHeightRatio: fh / geo.canvasH };
  }

  private analyzeFaceSize(ctx: AnalysisCtx, ratio: number) {
    ctx.metrics.faceSize = `${(ratio * 100).toFixed(1)}%`;
    if (ratio < 0.2) ctx.alerts.push({ type: 'error', textKey: 'alertAlmostInvisible' });
    else if (ratio > 0.6) ctx.alerts.push({ type: 'warning', textKey: 'alertTooClose' });
    else if (ratio >= 0.3 && ratio <= 0.5) ctx.alerts.push({ type: 'success', textKey: 'alertPerfectSize' });
  }

  private analyzeEyeLine(ctx: AnalysisCtx, landmarks: FaceLandmarks, geo: ImgGeo) {
    const leftEye = landmarks.getLeftEye(), rightEye = landmarks.getRightEye();
    if (!leftEye || !leftEye.length || !rightEye || !rightEye.length) return;
    const avgY = (leftEye[0].y + rightEye[0].y) / 2;
    const eyeDiff = (geo.y + avgY * geo.r * this.zoom) - 640;
    this.setEyeMetric(ctx, eyeDiff);
    if (Math.abs(this.estimateRoll(landmarks)) > 15) ctx.alerts.push({ type: 'warning', textKey: 'alertTiltedHead' });
  }

  private setEyeMetric(ctx: AnalysisCtx, eyeDiff: number) {
    if (Math.abs(eyeDiff) < 150) {
      ctx.metrics.eyeLine = 'statusOptimal';
      ctx.alerts.push({ type: 'success', textKey: 'alertImpactfulLook' });
    } else {
      ctx.metrics.eyeLine = eyeDiff > 0 ? 'statusLow' : 'statusHigh';
      ctx.alerts.push({ type: 'warning', textKey: eyeDiff > 0 ? 'alertEyeLineMoveUp' : 'alertEyeLineMoveDown' });
    }
  }

  private analyzeMood(ctx: AnalysisCtx, expr: FaceExpressions) {
    const happy = expr.happy || 0;
    ctx.metrics.mood = happy > 0.7 ? 'statusPositive' : 'statusNeutral';
    if (happy > 0.7) ctx.alerts.push({ type: 'success', textKey: 'alertSmileDetected' });
    else if (expr.angry > 0.4) ctx.alerts.push({ type: 'warning', textKey: 'alertSevereExpression' });
  }

  private checkFaceObstruction(ctx: AnalysisCtx, fy: number, fh: number) {
    if (fy < 300) ctx.alerts.push({ type: 'error', textKey: 'alertObstructedTop' });
    else if (fy + fh > 1400) ctx.alerts.push({ type: 'error', textKey: 'alertObstructedBottom' });
  }

  private checkFaceOut(ctx: AnalysisCtx, fg: FaceGeo, canvasW: number, canvasH: number) {
    if (!this.faceDetection) return;
    const confidence = this.faceDetection.detection.score;
    ctx.metrics.quality = confidence > 0.8 ? 'statusHigh' : 'statusMedium';
    if (confidence < 0.6) ctx.alerts.push({ type: 'warning', textKey: 'alertLowLight' });
    const { fx, fy, fw, fh } = fg;
    if (fx < 0 || fx + fw > canvasW || fy < 0 || fy + fh > canvasH) ctx.alerts.push({ type: 'error', textKey: 'alertCutOff' });
    this.checkFaceObstruction(ctx, fy, fh);
  }

  getAnalysis() {
    const alerts: AnalysisAlert[] = [];
    const metrics: Record<string, keyof TinderPhotoOptimizerUI | string> = { faceSize: '0%', eyeLine: '--', coverage: '0%', mood: '--', quality: '--' };
    if (!this.image) return { alerts, metrics };
    const ctx: AnalysisCtx = { alerts, metrics }, geo = this.computeImgGeo();
    this.checkCoverage(ctx, geo);
    if (this.faceDetection) {
      const fg = this.getFaceGeo(this.faceDetection.detection.box, geo);
      this.analyzeFaceSize(ctx, fg.faceHeightRatio);
      if (this.faceDetection.landmarks) this.analyzeEyeLine(ctx, this.faceDetection.landmarks, geo);
      if (this.faceDetection.expressions) this.analyzeMood(ctx, this.faceDetection.expressions);
      this.checkFaceOut(ctx, fg, geo.canvasW, geo.canvasH);
    }
    if (this.zoom < 1.15) alerts.push({ type: 'warning', textKey: 'alertProTip' });
    return { alerts, metrics };
  }

  private estimateRoll(landmarks: FaceLandmarks): number {
    const leftEye = landmarks.getLeftEye(), rightEye = landmarks.getRightEye();
    if (!leftEye || !leftEye.length || !rightEye || !rightEye.length) return 0;
    const l = leftEye[0], r = rightEye[0];
    return Math.atan2(r.y - l.y, r.x - l.x) * (180 / Math.PI);
  }

  getOptimalTransform() {
    if (!this.image || !this.faceDetection) return null;
    const box = this.faceDetection.detection.box, r = Math.max(this.canvas.width / this.image.width, this.canvas.height / this.image.height);
    const optimalZoom = Math.min(Math.max((this.canvas.height * 0.25) / (box.height * r), 1), 3);
    const faceCX = box.x + box.width / 2, faceCY = box.y + box.height / 2;
    const w = this.image.width * r * optimalZoom, h = this.image.height * r * optimalZoom;
    return { zoom: optimalZoom, x: 540 - (this.canvas.width - w) / 2 - faceCX * r * optimalZoom, y: 800 - (this.canvas.height - h) / 2 - faceCY * r * optimalZoom };
  }

  private drawFaceBox(x: number, y: number, r: number, label: string) {
    if (!this.faceDetection) return;
    const box = this.faceDetection.detection.box;
    const fx = x + box.x * r * this.zoom, fy = y + box.y * r * this.zoom;
    const fw = box.width * r * this.zoom, fh = box.height * r * this.zoom;
    this.ctx.strokeStyle = '#00ff00'; this.ctx.lineWidth = 6; this.ctx.strokeRect(fx, fy, fw, fh);
    this.ctx.fillStyle = '#00ff00'; this.ctx.font = 'bold 40px Arial'; this.ctx.fillText(label, fx, fy - 10);
    const landmarks = this.faceDetection.landmarks;
    if (landmarks) {
      this.ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
      landmarks.positions.forEach((p: FaceLandmark) => {
        this.ctx.beginPath(); this.ctx.arc(x + p.x * r * this.zoom, y + p.y * r * this.zoom, 2, 0, 2 * Math.PI); this.ctx.fill();
      });
    }
  }

  draw(showFaceBox: boolean, label?: string) {
    if (!this.image) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.filter = `brightness(${this.brightness}%)`;
    const iw = this.image.width, ih = this.image.height;
    const r = Math.max(this.canvas.width / iw, this.canvas.height / ih);
    const w = iw * r * this.zoom, h = ih * r * this.zoom;
    const x = (this.canvas.width - w) / 2 + this.offset.x, y = (this.canvas.height - h) / 2 + this.offset.y;
    this.ctx.drawImage(this.image, x, y, w, h);
    if (showFaceBox && this.faceDetection) this.drawFaceBox(x, y, r, label || '');
  }
}
