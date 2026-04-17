import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'tinder-photo-optimizer';
const title = 'Tinder写真最適化ツール：顔分析と構図診断';
const description =
  'アルゴリズムによる顔分析でTinder写真を最適化。2026年最新インターフェースをシミュレートし、科学的なフレーミングとアイラインを分析。マッチ率を最大化する完璧な9:16ポートレートを書き出します。';

const faqData = [
  {
    question: 'このツールでどのようにTinderのマッチ率が向上しますか？',
    answer:
      '顔のサイズ比率（理想は30〜50%）、上部3分の1に対するアイラインの位置、フレーミングのカバー率、そしてTinder UIのデッドゾーンといった重要な技術的要因を分析します。これらのパラメータを調整することで、あなたの写真はより信頼感を与え、アルゴリズムの視覚フィルターをクリアしやすくなります。',
  },
  {
    question: 'ここに写真をアップロードしても安全ですか？',
    answer:
      '完全に安全です。すべての処理はブラウザ内のCanvas APIを使用して行われます。写真はサーバーに送信されることも、どこかに保存されることもありません。',
  },
  {
    question: 'AI顔認識では具体的に何をしていますか？',
    answer:
      'face-api.jsを使用して68の顔参照ポイントを検出し、表情（笑顔、真剣な表情）を分析し、目の位置を評価し、頭の傾きを測定します。すべての分析はデバイス内でローカルに実行されます。',
  },
  {
    question: 'なぜ1.2倍のズームが推奨されるのですか？',
    answer:
      'スマートフォンのフロントカメラは広角レンズ（24mm）を使用しており、樽型歪みによって顔が歪んで写ります。1.2倍のズームは50〜85mmの焦点距離をシミュレートし、歪みを取り除いて、より自然で魅力的な顔の比率を提供します。',
  },
];

const howToData = [
  {
    name: '写真をアップロード',
    text: 'Tinderシミュレーターに画像をドラッグまたはクリックして読み込みます。',
  },
  {
    name: '構図を分析',
    text: 'AIが自動的に顔を検出し、顔のサイズ、アイライン、カバー率、表情の指標を表示します。',
  },
  {
    name: '精密に調整',
    text: 'ズームと明るさのコントロールを使用したり、オートフレーミングを有効にしたり、シミュレーター内で手動でドラッグして調整します。',
  },
  {
    name: '最適化されたダウンロード',
    text: 'Tinderに最適化されたネイティブ形式の1080x1920で、クリーンなメタデータと共に写真を書き出します。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'face-api.js: JavaScript Face Recognition in the Browser',
      url: 'https://github.com/justadudewhohacks/face-api.js',
    },
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/ja/docs/Web/API/Canvas_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tinder写真最適化：科学的・技術的完全ガイド (2026年版)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'デジタルデートのエコシステムにおいて、あなたのTinderプロフィールは2つのアルゴリズムによって同時に処理されます。1つはプラットフォーム独自の高度なビジョンアルゴリズム、もう1つはスワイプするユーザーの脳です。当ツールは、<strong>進化心理学</strong>、<strong>顔生体認証</strong>、<strong>デジタル信号処理</strong>の原則を統合し、あなたの画像が最大の社会的価値と技術的魅力を放つように保証します。',
    },
    {
      type: 'title',
      text: '第一印象の心理学：1.2秒の効果',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '神経科学の研究によると、人間の脳が相手の信頼性を判断して第一印象を形成するのにかかる時間はわずか約10分の1秒です。Tinderでは、次のスワイプまでに与えられた時間はせいぜい1秒強です。当ツールは、ポジティブな意思決定を加速させる要因を分析します：',
    },
    {
      type: 'list',
      items: [
        '<strong>アイコンタクトと視線：</strong> 直接的な視線は、社会的報酬に関連する脳領域を活性化させます。目を上部3分の1に配置することで、ユーザーが名前を読む前にあなたの視線で指を止める確率を最大化します。',
        '<strong>非対称性とポーズ：</strong> わずかな傾きは攻撃的な印象を和らげますが、過度な傾きは不安定さを伝えてしまいます。アルゴリズムが正確な角度を測定し、信頼される範囲内に収めます。',
        '<strong>図と地のコントラスト：</strong> 被写体が背景から明確に分離されている写真が評価されます。定義された技術的プロファイルは、レンダリングエンジンが競合他社の中であなたの顔を際立たせるのに役立ちます。',
      ],
    },
    {
      type: 'title',
      text: 'レンズの技術分析：広角レンズの問題点',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ほとんどのプロフィール写真はスマートフォンで撮影されますが、そのフロントカメラは広角レンズです。最も一般的な間違いは、デバイスに近づきすぎることです。',
    },
    {
      type: 'paragraph',
      html: '<strong>樽型歪み：</strong> 1メートル以内の距離では、24mmレンズ（スマホの標準）は画像の中央を膨らませます。これにより、鼻が大きく見えたり、顔が実際よりも丸く見えたりします。当ツールの<strong>1.2倍ズーム</strong>推奨は補正的なものです。わずかなデジタルクロップを適用することで、50mmから85mmの焦点距離をシミュレートします。これはファッションフォトグラファーが顔を細く見せ、正確な比率を保つために使用する「黄金の焦点距離」です。',
    },
    {
      type: 'title',
      text: 'Tinderインターフェース：デッドゾーンの科学',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '多くの優れた写真が、Tinderが上に重ねるソフトウェアレイヤー（UI）を無視しているために失敗しています。平均的なユーザーはあなたの生の画像を見ているのではなく、ボタン、グラデーション、テキストの混合物を見ています。',
    },
    {
      type: 'list',
      items: [
        '<strong>タイトルゾーン（上部15%）：</strong> 進捗インジケーターとステータスバーが表示される場所です。額や目がここにあると、インターフェースがあなたの頭を視覚的に切断してしまいます。',
        '<strong>アクションゾーン（ボタン）：</strong> Like、Nope、Boostのアイコンが下部の両脇を占めています。手やスタイル要素がそこにあると、完全に隠れてしまいます。',
        '<strong>視認性グラデーション（下部28%）：</strong> Tinderは名前と年齢を読みやすくするために黒いフェードを適用します。顔がこのゾーンに入ると、テキストが顔の特徴と重なり、プロフィールの美観を損ないます。',
      ],
    },
    {
      type: 'title',
      text: 'リアルタイムビジョン分析：アルゴリズムの解読',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当ツールは、<strong>最新世代のコンピュータービジョンモデル</strong>を使用して、Tinderの自動モデレーターと同じように画像を監査します：',
    },
    {
      type: 'list',
      items: [
        '<strong>ランドマーク検出：</strong> 68の顔のポイントをマッピングして、対称性と目の開き具合を分析します。大きく開かれ視認性の高い目は、知覚される外向性の高さと相関します。',
        '<strong>表情評価：</strong> わずかな笑顔は、見ている人のミラーニューロンを活性化させます。顔の表情の強さを検出し、真剣すぎて近寄りがたく見えないかを確認します。',
        '<strong>照明の質：</strong> 検出の自信度を評価します。スコアが低い場合、写真にノイズや強い影があり、Tinderのアルゴリズムによって低品質コンテンツとしてフラグを立てられる可能性があります。',
      ],
    },
    {
      type: 'title',
      text: 'Tinderに最適化されたメタデータとエクスポート',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '画像のデータサイズがアルゴリズムに影響することをご存知ですか？マッチングアプリは、ユーザーの流れを妨げないように、読み込みの速いコンテンツを優先します。',
    },
    {
      type: 'list',
      items: [
        '<strong>メタデータの削除（プライバシーとSEO）：</strong> EXIF記録を削除します。クリーンな写真は、プラットフォームのアルゴリズムにとって「新しいキャンバス」となります。',
        '<strong>インテリジェントな無劣化圧縮：</strong> iOSやAndroidのネイティブsRGB色空間を維持しながら、JPGファイルサイズを削減します。電波の悪い状況でもあなたの写真は鮮やかに表示されます。',
        '<strong>没入型9:16フォーマット：</strong> 正確に1080x1920ピクセルで提供することで、画像アーチファクトを生成するTinder独自の攻撃的な圧縮アルゴリズムの適用を防ぎます。',
      ],
    },
    {
      type: 'tip',
      title: 'エキスパートのアドバイス',
      html: '<p>1枚目の写真は、常に肩から上のクリアなポートレートであるべきです。全身写真や活動中の写真は3枚目以降に取っておきましょう。その第一印象において、視線が障害物に遮られず、顔が最適なサイズ（30〜50%）であることを確認してください。</p>',
    },
    {
      type: 'title',
      text: '処理の安全性と倫理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'あなたの写真がプライベートなものであることを私たちは理解しています。この最適化ツールは<strong>クライアントサイド技術</strong>を使用しています。画像はローカルブラウザのcanvasエンジンによって処理されます。データがデバイスの外に出ることはありません。プライバシーを損なうことなく、プロフィールを最適化する最も安全で迅速な方法です。',
    },
  ],
  ui: {
    uploadTitle: '写真を最適化',
    uploadSubtitle: 'ドラッグまたはクリックして開始',
    btnDownload: '最適化された写真をダウンロード',
    btnRescan: '顔を再スキャン',
    btnAutoFocus: 'オートフレーミング',
    btnMarkFace: '顔をマーキング',
    panelManual: '手動調整',
    panelVisualization: '高度な視覚化',
    panelMetrics: '構図分析',
    panelExport: 'Tinder 2026用に書き出し',
    panelExportDesc: '1080x1920への自動クロップと最適化されたメタデータ。',
    labelZoom: 'ズーム',
    labelBrightness: '明るさ',
    toggleGrid: '三分割グリッド',
    toggleGridDesc: '古典的な構図調整',
    toggleDeadzones: '危険ゾーン',
    toggleDeadzonesDesc: 'UIが顔を隠すのを防ぐ',
    toggleFaceBox: '検出された顔を表示',
    toggleFaceBoxDesc: 'ランドマークと検出エリア',
    metricFaceSize: '顔比率',
    metricEyeLine: 'アイライン',
    metricCoverage: 'カバー率',
    metricMood: '表情',
    metricQuality: '自信度',
    analysisSuccess: '成功要因',
    analysisWarning: '最適化が必要',
    analysisError: '致命的なエラー',
    deadzoneTop: '上部UIゾーン',
    deadzoneBottom: '情報ゾーン',
    loaderAnalyzing: '構図を分析中...',
    loaderModels: 'ビジョンモデルを読み込み中...',
    simulatorName: 'お名前, 25',
    simulatorJob: 'ご職業',
    simulatorCity: '日本在住',
    simulatorDistance: '5 km 以内',
    statusOptimal: '最適',
    statusIncorrect: '不適切',
    statusHigh: '高い',
    statusMedium: '普通',
    statusLow: '低い',
    statusPositive: 'ポジティブ',
    statusNeutral: 'ニュートラル',
    alertExcellent: '技術的な構図が優れています。',
    alertEmptySpaces: '空きスペース：画像がフレーム全体を覆っていません。ズームや位置を調整してください。',
    alertAlmostInvisible: 'ほとんど見えません：遠すぎます。顔が画面の少なくとも3分の1を占めるまでズームしてください。',
    alertTooClose: '近すぎます：極端なクローズアップは攻撃的な印象を与える可能性があります。',
    alertPerfectSize: '完璧なサイズ：あなたの顔は信頼感を与える理想的な比率です。',
    alertImpactfulLook: '印象的な視線：目が最大注目ライン上にあります。',
    alertEyeLineMoveUp: 'アイライン：プロフェッショナルなフレーミングにするには、顔を上のラインまで少し上げてください。',
    alertEyeLineMoveDown: 'アイライン：プロフェッショナルなフレーミングにするには、顔を上のラインまで少し下げてください。',
    alertTiltedHead: '頭の傾き：傾きすぎたポーズは不安定さを伝える可能性があります。',
    alertSmileDetected: '笑顔を検出：笑顔はマッチ率を大幅に向上させます。',
    alertSevereExpression: '厳しい表情：より親しみやすい表情の写真を使ってみてください。',
    alertObstructedTop: '遮蔽：進捗バーが顔に重なっています。',
    alertObstructedBottom: '遮蔽：情報ブロックが顔に重なっています。',
    alertLowLight: '照明不足：AIが顔を認識しにくいです。より明るい写真を探してください。',
    alertCutOff: '見切れ：顔が垂直フレームからはみ出しています。',
    alertProTip: 'プロのコツ：自撮りの場合は、レンズの歪みを避けるためにズーム（1.2倍）を使用してください。',
    canvasFaceDetected: '顔を検出しました',
  },
};
