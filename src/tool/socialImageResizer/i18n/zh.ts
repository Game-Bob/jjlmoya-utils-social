import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'social-media-image-resizer';
const title = '社交媒体图像调整工具：适用于各个平台的剪裁与缩放';
const description =
  '为 Instagram、TikTok、YouTube 等平台调整照片尺寸并剪裁。基于 2026 年最新官方尺寸的智能剪裁。';

const faqData = [
  {
    question: '调整尺寸会损失图像质量吗？',
    answer:
      '不会，我们使用高质量的平滑算法。建议上传分辨率等于或大于目标格式的原始图像。',
  },
  {
    question: '在这里上传我的照片安全吗？',
    answer:
      '完全安全。处理过程通过 Canvas API 在您的浏览器本地完成。您的照片永远不会发送到任何服务器。',
  },
  {
    question: '支持哪些格式？',
    answer:
      '我们支持上传 JPG、PNG、WebP 和 AVIF 格式。下载时会优化为高质量 JPG，以确保最佳兼容性。',
  },
];

const howToData = [
  {
    name: '上传您的图像',
    text: '拖动文件或浏览您的设备以开始处理。',
  },
  {
    name: '选择格式',
    text: '从侧边菜单中选择您需要的社交网络和发布类型。',
  },
  {
    name: '调整并下载',
    text: '通过拖动照片来调整构图，并使用缩放功能进行完美剪裁。完成后，点击下载。',
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

const howToSchema: WithContext<HowToThing> = {
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

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Sprout Social: 2026 社交媒体图像尺寸指南',
      url: 'https://sproutsocial.com/insights/social-media-image-sizes-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '适用于各个平台的社交媒体图像调整工具',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在当今的数字生态系统中，第一印象是由视觉决定的。每个社交网络都运行在特定的算法下，这些算法优先考虑原生适应其比例的内容。我们的社交媒体图像调整工具不仅仅是一个技术工具，它是您的盟友，确保您的信息在没有意外剪裁或质量损失的情况下送达。',
    },
    {
      type: 'paragraph',
      html: '无论您是需要将横向照片转换为引人注目的 Instagram Stories 垂直照片，还是调整设计以适应复杂的 YouTube 橫幅，我们的实用工具都使用智能剪裁系统，让您直接在浏览器中精确地调整图像的位置和缩放比例。',
    },
    {
      type: 'title',
      text: '2026 官方社交媒体图像尺寸',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — 正方形帖子', body: '1080 × 1080 px · 比例 1:1' },
        { title: 'Instagram — 垂直帖子', body: '1080 × 1350 px · 比例 4:5' },
        { title: 'TikTok / Reels — 垂直', body: '1080 × 1920 px · 比例 9:16' },
        { title: 'YouTube — 缩略图', body: '1280 × 720 px · 比例 16:9' },
        { title: 'YouTube — 频道横幅', body: '2560 × 1440 px · 比例 16:9' },
        { title: 'X (Twitter) — 标准帖子', body: '1200 × 675 px · 比例 16:9' },
        { title: 'LinkedIn — 个人资料封面', body: '1584 × 396 px · 比例 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: '1:1 正方形格式仍然是经典，但 4:5 垂直格式占据更多屏幕空间，在动态消息中产生的互动量最高可增加 30%。',
        },
        {
          title: '短视频内容',
          body: '对于 TikTok 和 Reels，标准是 9:16。这种沉浸式格式要求焦点完美对齐，以避免被应用界面遮挡。',
        },
        {
          title: '视觉互动',
          body: '从缩略图到横幅，每个素材在点击率中都占有特定权重。精确的剪裁确保文字和关键元素始终清晰可读。',
        },
        {
          title: '专业化品牌建设',
          body: '在 LinkedIn 等专业网络上，清晰度意味着权威。页眉需要特定的比例，以避免在高密度屏幕上出现像素化。',
        },
      ],
    },
    {
      type: 'title',
      text: '为什么纵横比很重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '纵横比是图像宽度和高度之间的比例关系。忽略它会迫使平台进行缩放或添加黑边，这会损害美感和有机触达。',
    },
    {
      type: 'list',
      items: [
        '防止文字或徽标被应用原生图标切断。',
        '保持最佳像素密度，而不扭曲或拉伸原始照片。',
        '通过在单个 Web 工具中集中所有官方测量值来节省时间。',
        '通过生成具有精确大小和尺寸的文件来提高加载速度。',
      ],
    },
    {
      type: 'tip',
      title: '构图技巧',
      html: '<p>使用我们的手动拖动功能时，尝试将照片的主要主体放在网格的交叉点之一。这可以为您的社交网络创建更具活力和专业感的构图。</p>',
    },
    {
      type: 'title',
      text: '完美剪裁的步骤',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '选择您的格式：从侧边菜单中选择平台和发布类型。',
        '上传图像：拖动文件或使用文件选择器导入照片。',
        '调整框架：在可见区域内拖动照片，并使用缩放功能进行精确调整。',
        '即时导出：点击下载，获取准备好发布的图像。',
      ],
    },
    {
      type: 'title',
      text: '隐私和本地处理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '您的隐私是绝对的。此调整工具使用 Canvas API 在您的浏览器本地处理图像。您的照片永远不会上传到任何外部服务器，保证了完整的安全性和即时的处理速度。',
    },
    {
      type: 'title',
      text: '社交媒体专业化优化',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '专业地调整您的视觉内容是一种直接的增长策略。我们的工具简化了创作者和社区经理的工作流程，确保每条帖子在任何设备和平台上都看起来很完美。',
    },
  ],
  ui: {
    sidebarTitle: '社交格式',
    uploadTitle: '上传图像',
    uploadSubtitle: '将照片拖到此处或点击浏览',
    btnReset: '重置',
    btnDownload: '下载图像',
  },
};
