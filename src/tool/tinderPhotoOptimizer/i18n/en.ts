import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'tinder-photo-optimizer';
const title = 'Tinder Photo Optimizer: Face Analysis and Composition';
const description =
  'Optimize your Tinder photos with algorithmic face analysis. Simulates the 2026 interface, analyzes scientific framing and eye-line, exports perfect 9:16 portrait photos to maximize matches.';

const faqData = [
  {
    question: 'How does this tool improve my Tinder matches?',
    answer:
      'The tool analyzes key technical factors: face size ratio (ideal 30-50%), eye line position relative to the upper third, frame coverage and Tinder interface dead zones. By adjusting these parameters, your photo projects more confidence and passes the visual filters of the algorithm.',
  },
  {
    question: 'Is it safe to upload my photos here?',
    answer:
      'Completely safe. All processing happens in your browser via the Canvas API. Your photos are never sent to any server or stored anywhere.',
  },
  {
    question: 'What exactly does the AI face detection do?',
    answer:
      'It uses face-api.js to detect 68 facial landmarks, analyze expression (smile, serious look), evaluate eye position and measure head tilt. All analysis happens locally on your device.',
  },
  {
    question: 'Why does it recommend 1.2x zoom?',
    answer:
      'Smartphone front cameras use wide-angle optics (24mm) that distort faces with barrel aberration. A 1.2x zoom simulates a 50-85mm focal length, eliminating distortion and providing more natural and attractive facial proportions.',
  },
];

const howToData = [
  {
    name: 'Upload your photo',
    text: 'Drag or click the Tinder simulator to load your image.',
  },
  {
    name: 'Analyze the composition',
    text: 'AI automatically detects your face and shows metrics for face size, eye line, coverage and expression.',
  },
  {
    name: 'Fine-tune',
    text: 'Use the zoom and brightness controls, activate auto-focus or manually drag the image inside the simulator.',
  },
  {
    name: 'Download optimized',
    text: 'Export your photo in native 1080x1920 format optimized for Tinder, with clean metadata.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References',
  bibliography: [
    {
      name: 'face-api.js: JavaScript Face Recognition in the Browser',
      url: 'https://github.com/justadudewhohacks/face-api.js',
    },
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tinder Photo Optimizer: The Definitive Scientific and Technical Guide (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "In the digital dating ecosystem, your Tinder profile is processed by two algorithms simultaneously: the platform's own advanced vision algorithm and the human brain of the user swiping. Our tool integrates principles of <strong>evolutionary psychology</strong>, <strong>facial biometrics</strong> and <strong>digital signal processing</strong> to ensure your image projects maximum social value and technical appeal.",
    },
    {
      type: 'title',
      text: 'The Psychology of First Impression: The 1.2-Second Effect',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Neuroscientific studies indicate that the human brain takes approximately 1/10 of a second to form an initial impression about how trustworthy someone appears. On Tinder, you have just over one second before the next swipe. Our tool analyzes the factors that accelerate positive decision-making:',
    },
    {
      type: 'list',
      items: [
        '<strong>Eye Contact and Gaze Line:</strong> Direct eye contact activates brain regions related to social reward. Positioning your eyes in the upper third maximizes the chance the user will pause at your gaze before reading your name.',
        '<strong>Asymmetry and Posture:</strong> A slight tilt can soften aggressive features, but excessive head roll conveys instability. Our algorithm measures the exact angle to keep you in the confidence range.',
        '<strong>Figure-Ground Contrast:</strong> The system rewards photos where the subject is clearly separated from the background. A well-defined technical profile helps the rendering engine highlight your face over competitors.',
      ],
    },
    {
      type: 'title',
      text: 'Technical Lens Analysis: The Wide-Angle Problem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Almost all profile photos are taken with smartphones, whose front cameras are wide-angle. The most common mistake is getting too close to the device.',
    },
    {
      type: 'paragraph',
      html: '<strong>Barrel Aberration:</strong> At less than one meter distance, a 24mm lens (standard on phones) expands the center of the image. This makes noses look bigger and faces rounder than they really are. Our <strong>1.2x Zoom</strong> recommendation is corrective: by applying a slight digital crop, you simulate a 50mm to 85mm focal length — the golden focal length photographers use to slim the face and maintain real proportions.',
    },
    {
      type: 'title',
      text: "Tinder's Interface: The Science of Dead Zones",
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Many excellent photos fail because they ignore the software layer (UI) that Tinder places on top. An average user does not see your clean photo; they see an amalgam of buttons, gradients and text.',
    },
    {
      type: 'list',
      items: [
        '<strong>Title Zone (Top 15%):</strong> This is where progress indicators and the status bar reside. If your forehead or eyes are here, the interface visually cuts your head.',
        '<strong>Action Zone (Buttons):</strong> Like, Nope and Boost icons occupy the lower sides. If your hands or style elements are there, they are completely lost.',
        "<strong>Readability Gradient (Bottom 28%):</strong> Tinder applies a black fade so your name and age are readable in white. If your face falls in this zone, the text overlaps your features, ruining the profile's aesthetics.",
      ],
    },
    {
      type: 'title',
      text: 'Real-Time Vision Analysis: Decoding the Algorithm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Our tool uses <strong>state-of-the-art Computer Vision models</strong> to audit your image the way Tinder's automatic moderators would:",
    },
    {
      type: 'list',
      items: [
        '<strong>Landmark Detection:</strong> We map 68 facial points to analyze symmetry and eye openness. Well-open and visible eyes correlate with higher perceived extroversion levels.',
        "<strong>Mood Evaluation:</strong> A light smile activates mirror neurons in the viewer. We detect facial expression intensity to ensure you don't appear too serious or unapproachable.",
        '<strong>Lighting Quality:</strong> The system evaluates detection confidence. A low score means the photo has visual noise or harsh shadows that the Tinder algorithm might flag as low-quality content.',
      ],
    },
    {
      type: 'title',
      text: 'Metadata and Optimized Export for Tinder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Did you know the weight of your image influences the algorithm? Dating apps prioritize fast-loading content to avoid interrupting user flow.',
    },
    {
      type: 'list',
      items: [
        '<strong>Metadata Stripping (Privacy and SEO):</strong> We remove EXIF records. A clean photo gives the platform algorithm a fresh slate.',
        "<strong>Smart Lossless Compression:</strong> We reduce the JPG file size while maintaining the native sRGB color space of iOS and Android. Your photo will look vibrant even with poor signal.",
        '<strong>9:16 Immersive Format:</strong> By delivering exactly 1080x1920 pixels, we prevent Tinder from applying its own aggressive compression algorithm that generates image artifacts.',
      ],
    },
    {
      type: 'tip',
      title: 'Expert Tip',
      html: '<p>Your first photo should ALWAYS be a clear portrait from the shoulders up. Save full-body shots or activity photos for the 3rd or 4th position. Make sure your gaze is unobstructed and your face has the optimal size (30-50%).</p>',
    },
    {
      type: 'title',
      text: 'Security and Processing Ethics',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'We understand your photos are private. This optimizer uses <strong>Client-Side technology</strong>: images are processed via a canvas engine in your local browser. No data leaves your device. It is the safest and fastest way to optimize your profile without compromising your privacy.',
    },
  ],
  ui: {
    uploadTitle: 'Optimize Photo',
    uploadSubtitle: 'Drag or click to start',
    btnDownload: 'Download Optimized Photo',
    btnRescan: 'Rescan Face',
    btnAutoFocus: 'Auto-Frame',
    btnMarkFace: 'Mark Face',
    panelManual: 'Manual Adjustments',
    panelVisualization: 'Advanced Visualization',
    panelMetrics: 'Composition Analytics',
    panelExport: 'Export for Tinder 2026',
    panelExportDesc: 'Auto crop to 1080x1920 with optimized metadata.',
    labelZoom: 'Zoom',
    labelBrightness: 'Brightness',
    toggleGrid: 'Rule of Thirds Grid',
    toggleGridDesc: 'Classic composition adjustment',
    toggleDeadzones: 'Danger Zones',
    toggleDeadzonesDesc: 'Prevent UI from hiding your face',
    toggleFaceBox: 'Show Detected Face',
    toggleFaceBoxDesc: 'Landmarks and detection area',
    metricFaceSize: 'Face Ratio',
    metricEyeLine: 'Eye Line',
    metricCoverage: 'Coverage',
    metricMood: 'Expression',
    metricQuality: 'Confidence',
    analysisSuccess: 'Success Factors',
    analysisWarning: 'Optimization',
    analysisError: 'Critical Errors',
    deadzoneTop: 'Top UI Zone',
    deadzoneBottom: 'Info Zone',
    loaderAnalyzing: 'Analyzing composition...',
    loaderModels: 'Loading vision models...',
    simulatorName: 'Your Name, 25',
    simulatorJob: 'Your Profession',
    simulatorCity: 'Lives in New York',
    simulatorDistance: '5 km away',

    statusOptimal: 'OPTIMAL',
    statusIncorrect: 'INCORRECT',
    statusHigh: 'HIGH',
    statusMedium: 'MEDIUM',
    statusLow: 'LOW',
    statusPositive: 'POSITIVE',
    statusNeutral: 'NEUTRAL',

    alertExcellent: 'Excellent technical composition.',
    alertEmptySpaces: 'EMPTY SPACES: The image does not cover the entire frame. Adjust zoom or position.',
    alertAlmostInvisible: 'ALMOST INVISIBLE: You are too far away. Zoom in until your face occupies at least a third of the screen.',
    alertTooClose: 'TOO CLOSE: Extreme close-ups can appear aggressive.',
    alertPerfectSize: 'PERFECT SIZE: Your face has the ideal ratio to convey confidence.',
    alertImpactfulLook: 'IMPACTFUL LOOK: Your eyes are on the maximum attention line.',
    alertEyeLineMoveUp: 'EYE LINE: For a professional frame, move your face up slightly to the top line.',
    alertEyeLineMoveDown: 'EYE LINE: For a professional frame, move your face down slightly to the top line.',
    alertTiltedHead: 'TILTED HEAD: A posture that is too tilted can convey instability.',
    alertSmileDetected: 'SMILE DETECTED: Smiles significantly increase the match rate.',
    alertSevereExpression: 'SEVERE EXPRESSION: Try using a photo with a friendlier gesture.',
    alertObstructedTop: 'OBSTRUCTED: The progress bar covers your face.',
    alertObstructedBottom: 'OBSTRUCTED: The information block covers your face.',
    alertLowLight: 'POOR LIGHTING: The AI has difficulty seeing you. Look for a photo with better light.',
    alertCutOff: 'CUT OFF: The face goes outside the vertical frame.',
    alertProTip: 'PRO TIP: If it is a selfie, use Zoom (1.2x) to avoid lens distortions.',

    canvasFaceDetected: 'Face detected',
  },
};
