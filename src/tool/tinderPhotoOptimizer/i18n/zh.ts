import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'tinder-photo-optimizer';
const title = 'Tinder 照片优化器：面部分析与构图诊断';
const description =
  '通过算法面部分析优化您的 Tinder 照片。模拟 2026 年 Tinder 界面，分析科学构图和视线，导出完美的 9:16 肖像，以最大化匹配成功率。';

const faqData = [
  {
    question: '此工具如何提高我的 Tinder 匹配率？',
    answer:
      '该工具分析关键的技术因素：脸部大小比例（理想值为 30-50%）、相对于上三分之一处的视线位置、构图覆盖范围以及 Tinder 界面的盲区。通过调整这些参数，您的照片可以传递出更多的信任感，并更容易突破算法的视觉筛选。',
  },
  {
    question: '在这里上传我的照片安全吗？',
    answer:
      '绝对安全。所有处理都在浏览器中通过 Canvas API 完成。您的照片绝不会发送到任何服务器，也不会存储在任何地方。',
  },
  {
    question: 'AI 面部检测具体在做什么？',
    answer:
      '它使用 face-api.js 检测 68 个面部特征点，分析表情（微笑、严肃）、评估眼睛位置以及测量头部倾斜度。所有分析都在设备本地进行。',
  },
  {
    question: '为什么要推荐 1.2 倍缩放？',
    answer:
      '智能手机前置摄像头使用广角镜头 (24mm)，这会导致面部出现桶形畸变。1.2 倍缩放可模拟 50-85mm 的焦距，消除畸变，提供更加自然且具有吸引力的面部比例。',
  },
];

const howToData = [
  {
    name: '上传您的照片',
    text: '拖动或点击 Tinder 模拟器以加载您的图像。',
  },
  {
    name: '分析构图',
    text: 'AI 会自动检测您的面部，并显示脸部大小、视线、覆盖范围和表情等指标。',
  },
  {
    name: '精准调整',
    text: '使用缩放和亮度控制，开启自动构图，或在模拟器中手动拖动图像进行调整。',
  },
  {
    name: '优化后的下载',
    text: '以 1080x1920 的原生格式导出照片，专为 Tinder 优化，并清除冗余元数据。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'face-api.js: JavaScript Face Recognition in the Browser',
      url: 'https://github.com/justadudewhohacks/face-api.js',
    },
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tinder 照片优化器：科学与技术完全权威指南 (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在数字约会的生态系统中，您的 Tinder 资料会同时被两个算法处理：平台本身的高级视觉算法和正在滑动屏幕的用户的人大大脑。我们的工具集成了<strong>进化心理学</strong>、<strong>面部生物识别</strong>和<strong>数字信号处理</strong>原理，确保您的图像能投射出最大的社会价值和技术吸引力。',
    },
    {
      type: 'title',
      text: '第一印象心理学：1.2 秒效应',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '神经科学研究表明，大脑只需要大约 1/10 秒的时间就能形成关于某人投射出的信任的初步印象。在 Tinder 上，您只有一秒多钟的时间在用户进行下一次滑动之前。我们的工具分析了加速积极决策形成的各种因素：',
    },
    {
      type: 'list',
      items: [
        '<strong>眼神交流和视线方向：</strong> 直接注视能激活大脑中与社会奖励相关的区域。将眼睛放在上三分之一处可以最大限度地提高用户在阅读您名字之前就停留在您视线上的概率。',
        '<strong>非对称性和姿势：</strong> 轻微的倾斜可以柔化挑衅特征，但过度的侧偏则会传递不稳定感。我们的算法精确测量角度，确保您处于信任区间内。',
        '<strong>人像与背景对比：</strong> 系统更青睐被摄主体与背景清晰分离的照片。定义明确的技术侧写有助于渲染引擎在竞争对手中突出您的脸部。',
      ],
    },
    {
      type: 'title',
      text: '镜头技术分析：广角镜头的困扰',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '几乎所有的个人主页照片都是用智能手机拍摄的，而前置摄像头多为广角镜头。最常见的错误是离设备太近。',
    },
    {
      type: 'paragraph',
      html: '<strong>桶形畸变：</strong> 在不到一米的距离内，24mm 镜头（手机标准焦距）会使图像中心膨胀。这会导致鼻子看起来比实际大，脸部看起来比实际圆。我们推荐的 <strong>1.2 倍缩放</strong> 具有矫正作用：通过应用轻微的数字裁剪，可以模拟 50mm 到 85mm 的黄金焦距，这是时尚摄影师用来瘦脸并保持真实比例的焦距。',
    },
    {
      type: 'title',
      text: 'Tinder 界面：盲区科学',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '许多优秀的照片之所以失败，是因为忽略了 Tinder 在其上覆盖的软件层 (UI)。普通用户看到的不是您的原图，而是按钮、渐变和文字的混合体。',
    },
    {
      type: 'list',
      items: [
        '<strong>标题区（上部 15%）：</strong> 进度条和状态栏所在位置。如果您的额头或眼睛在这里，界面会在视觉上切断您的头部。',
        '<strong>动作区（按钮）：</strong> Like、Nope 和 Boost 图标占据了底部的侧边。如果您的手或造型元素在那里，将完全被遮挡。',
        '<strong>易读性渐变（底部 28%）：</strong> Tinder 会应用黑色虚化以确保您的名字和年龄可读。如果脸部落入这个区域，文字会叠加在面部特征上，破坏个人资料的美感。',
      ],
    },
    {
      type: 'title',
      text: '实时视觉分析：解读算法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '我们的工具使用<strong>最新一代的计算机视觉模型</strong>来审核您的图像，就像 Tinder 的自动审核员所做的一样：',
    },
    {
      type: 'list',
      items: [
        '<strong>关键点检测：</strong> 我们映射 68 个面部点来分析对称性和眼睛睁开程度。睁大且可见的眼睛与感知外向程度的提高呈正相关。',
        '<strong>情绪评估：</strong> 轻微的微笑可以激活观看者的镜像神经元。我们检测面部表情强度，确保您看起来不会过于严肃或难以接近。',
        '<strong>光照质量：</strong> 系统评估检测置信度。如果分值较低，说明照片存在视觉噪点或强烈的阴影，Tinder 算法可能会将其标记为低质量内容。',
      ],
    },
    {
      type: 'title',
      text: '专为 Tinder 优化的元数据和导出',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '您知道图片的“重量”也会影响算法吗？交友软件会优先考虑加载速度快的内容，以避免打断用户体验。',
    },
    {
      type: 'list',
      items: [
        '<strong>元数据剥离（隐私与 SEO）：</strong> 我们移除 EXIF 记录。一张干净的照片为平台算法提供了一块“新的画布”。',
        '<strong>智能无损压缩：</strong> 我们在保持 iOS 和 Android 原生 sRGB 色彩空间的同时减小 JPG 文件大小。即使在网络覆盖较差的情况下，您的照片也会看起来很鲜艳。',
        '<strong>沉浸式 9:16 格式：</strong> 通过精确交付 1080x1920 像素，我们防止了 Tinder 应用其自身会产生图像伪影的激进压缩算法。',
      ],
    },
    {
      type: 'tip',
      title: '专家建议',
      html: '<p>第一张照片应始终是肩膀以上的清晰肖像。将全身照或活动照放在第 3 或第 4 个位置。确保在第一印象中，您的视线没有障碍，且脸部占据最佳比例 (30-50%)。</p>',
    },
    {
      type: 'title',
      text: '处理过程的安全与伦理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '我们深知您的照片属于个人隐私。此优化器采用<strong>客户端技术</strong>：图像通过您本地浏览器中的 canvas 引擎进行处理。任何数据都不会离开您的设备。这是在不牺牲隐私的前提下优化个人资料的最安全、最快捷的方式。',
    },
  ],
  ui: {
    uploadTitle: '优化照片',
    uploadSubtitle: '拖动或点击开始',
    btnDownload: '下载优化后的照片',
    btnRescan: '重新扫描脸部',
    btnAutoFocus: '自动构图',
    btnMarkFace: '标记脸部',
    panelManual: '手动调整',
    panelVisualization: '高级可视化',
    panelMetrics: '构图分析',
    panelExport: '导出至 Tinder 2026',
    panelExportDesc: '自动裁剪为 1080x1920，元数据已优化。',
    labelZoom: '缩放',
    labelBrightness: '亮度',
    toggleGrid: '三分法网格',
    toggleGridDesc: '经典构图调整',
    toggleDeadzones: '危险区',
    toggleDeadzonesDesc: '防止界面遮挡您的脸部',
    toggleFaceBox: '查看检测到的脸部',
    toggleFaceBoxDesc: '特征点和检测区域',
    metricFaceSize: '脸部比例',
    metricEyeLine: '视线位置',
    metricCoverage: '覆盖率',
    metricMood: '表情',
    metricQuality: '置信度',
    analysisSuccess: '成功因素',
    analysisWarning: '可优化项',
    analysisError: '关键错误',
    deadzoneTop: '顶部 UI 区域',
    deadzoneBottom: '信息区域',
    loaderAnalyzing: '正在分析构图...',
    loaderModels: '正在加载视觉模型...',
    simulatorName: '您的名字, 25',
    simulatorJob: '您的职业',
    simulatorCity: '居住在中国',
    simulatorDistance: '距离您 5 公里',
    statusOptimal: '最佳',
    statusIncorrect: '不正确',
    statusHigh: '高',
    statusMedium: '中',
    statusLow: '低',
    statusPositive: '积极',
    statusNeutral: '中性',
    alertExcellent: '卓越的技术构图。',
    alertEmptySpaces: '存在空白：图像未覆盖整个框架。请调整缩放或位置。',
    alertAlmostInvisible: '几乎看不见：您离得太远了。请放大直到脸部占据屏幕至少三分之一。',
    alertTooClose: '太近了：极端的特写可能会产生攻击性。',
    alertPerfectSize: '完美尺寸：脸部占据理想比例，传递出信任感。',
    alertImpactfulLook: '有力的注视：您的眼睛位于最大注意力线上。',
    alertEyeLineMoveUp: '视线位置：为了达到专业构图，请将脸部向上移动至顶线处。',
    alertEyeLineMoveDown: '视线位置：为了达到专业构图，请将脸部向下移动至顶线处。',
    alertTiltedHead: '头部偏侧：过于倾斜的姿势可能会传递出不稳定感。',
    alertSmileDetected: '检测到微笑：微笑可以显著提高匹配率。',
    alertSevereExpression: '表情严肃：尝试使用带有更亲切手势的照片。',
    alertObstructedTop: '被遮挡：进度条遮住了您的脸。',
    alertObstructedBottom: '被遮挡：信息块遮住了您的脸。',
    alertLowLight: '光照不足：AI 很难看清您的脸。请寻找光线更好的照片。',
    alertCutOff: '超出边缘：脸部超出了垂直框架。',
    alertProTip: '专业建议：如果是自拍，请使用缩放 (1.2x) 以避免镜头畸变。',
    canvasFaceDetected: '检测到脸部',
  },
};
