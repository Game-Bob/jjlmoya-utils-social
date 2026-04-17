import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'youtube-thumbnail-extractor';
const title = 'YouTube 缩略图下载器 (HD)';
const description =
  '只需提供 URL，即可提取并下载任何 YouTube 视频的最佳分辨率原图，无水印。';

const faqData = [
  {
    question: '提取的缩略图分辨率是多少？',
    answer:
      "本工具始终尝试获取视频作者上传的最佳画质图，即 'MaxRes' (1280x720 或 1920x1080)。如果作者未上传 HD 缩略图，系统将自动显示当前可用的最高分辨率。 ",
  },
  {
    question: '支持哪些类型的链接？',
    answer:
      '支持传统的 youtube.com/watch URL、缩短链接 youtu.be、移动端链接，甚至是 YouTube Shorts 短视频链接。',
  },
  {
    question: '下载 YouTube 缩略图合法吗？',
    answer:
      '是的，出于个人使用、设计参考、模仿及引用（合理使用）目的的下载是完全合法的。但在将受版权保护的缩略图用于纯商业用途时请务必小心，这种情况下建议查看视频的授权许可。',
  },
  {
    question: '有每日使用限制吗？',
    answer:
      '没有每月或每日限制。由于本软件在客户端运行，通过在浏览器内部解析 URL 模式，我们不与传统的受限 API 进行交互。',
  },
];

const howToData = [
  {
    name: '复制视频 URL',
    text: '访问 YouTube 并从浏览器地址栏或通过“分享”按钮复制视频链接。',
  },
  {
    name: '粘贴链接',
    text: '在提取器的输入框中输入 URL，或使用“从剪贴板粘贴”按钮。',
  },
  {
    name: '选择画质',
    text: '工具将显示所有可用的分辨率，从最高画质 (1080p) 到最低画质。',
  },
  {
    name: '下载图片',
    text: '点击下载按钮将缩略图保存到您的设备。',
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

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '文档与参考资料',
  bibliography: [
    {
      name: 'YouTube 帮助：添加自定义视频缩略图',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube 创作者学院：如何制作高效的缩略图',
      url: 'https://creatoracademy.youtube.com/',
    },
    {
      name: 'Google Developers: YouTube Data API — Thumbnails',
      url: 'https://developers.google.com/youtube/v3/docs/thumbnails',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '免费下载 YouTube HD 高清缩略图',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '如果您需要以原始尺寸或最高画质（Full HD 或 4K）<strong>下载 YouTube 视频缩略图</strong>，这款免费工具是最快的解决方案。您可以获取任何频道的封面图片来获取灵感、创建自己的设计或在演示文稿中使用。',
    },
    {
      type: 'tip',
      title: '免安装程序提取封面图',
      html: '<p>无需安装软件，也无需注册。您只需复制并粘贴视频链接，即可将 <strong>YouTube 缩略图直接保存</strong>到您的电脑或手机中。</p>',
    },
    {
      type: 'title',
      text: '如何获取 YouTube 视频的缩略图？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '从 <strong>YouTube 视频中提取照片</strong>的过程非常简单。按照以下步骤，几秒钟内即可获得图片：',
    },
    {
      type: 'list',
      items: [
        '<strong>1. 复制 URL：</strong> 前往 YouTube 并复制视频链接（从浏览器地址栏或通过分享按钮）。',
        '<strong>2. 粘贴链接：</strong> 在我们的缩略图提取器搜索框中输入该 URL。',
        '<strong>3. 选择画质：</strong> 我们将向您展示所有可用的分辨率，从最高画质 (1080p) 到最低画质 (360p)。',
        '<strong>4. 下载图片：</strong> 点击下载按钮将 <i>缩略图</i> 保存到您的设备。',
      ],
    },
    {
      type: 'title',
      text: '支持的格式和分辨率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '下载 YouTube 视频封面从未如此简单。该工具会自动搜索最佳可能的图片（即 <strong>maxresdefault</strong>），这些图片通常是 YouTuber 在 Photoshop 中精心设计的。如果创作者未上传 HD 图片，我们将为您提供次优选项（<strong>hqdefault</strong> 或 <strong>mqdefault</strong>）。',
    },
    {
      type: 'paragraph',
      html: '这款工具非常适合社交媒体经理、平面设计师、内容创作者、表情包制作者，或任何需要为项目<strong>下载视频封面图</strong>的人。此外，它还兼容 <strong>YouTube Shorts</strong>，因此您也可以以同样的方式获取短视频缩略图。',
    },
    {
      type: 'title',
      text: 'YouTube 缩略图的专业用途',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'YouTube 缩略图是极具价值的视觉资产。它们代表了创作者数小时的设计工作、A/B 测试和 CTR 优化。了解如何获取并下载它们为您开启了各种专业可能性。',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '内容创作者',
          html: '<p>分析您所在领域的热门视频缩略图，了解哪些视觉元素更容易获得点击：排版、主色调、人脸或文字的使用。</p><ul><li><strong>视觉基准测试：</strong> 将您的缩略图与行业领先者进行对比。</li><li><strong>设计迭代：</strong> 下载缩略图并在 Photoshop 或 Canva 中作为参考使用。</li><li><strong>灵感库：</strong> 建立一个高转化率缩略图库。</li></ul>',
        },
        {
          type: 'card',
          title: '设计师与营销人员',
          html: '<p>对于平面设计师或社交媒体经理来说，快速访问 YouTube 缩略图对于演示、客户提案和视觉审计至关重要。</p><ul><li><strong>客户提案：</strong> 在您的提案中包含真实的竞品截图。</li><li><strong>品牌审计：</strong> 评估 YouTube 频道的视觉一致性。</li><li><strong>情绪板 (Moodboards)：</strong> 收集高质量的视觉参考，告别模糊的屏幕截图。</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: '兼容 YouTube Shorts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '提取器完美支持 <strong>YouTube Shorts</strong>。Shorts 有视频自动生成的独特垂直缩略图格式 (9:16)。此工具可识别 Shorts URL (<code>youtube.com/shorts/ID</code>)，并以与标准视频相同的方式提取最佳可用缩略图。',
    },
    {
      type: 'tip',
      title: '隐私保障',
      html: '<p>所有提取过程均在您的浏览器中完成。URL 和数据不会发送到任何外部服务器。</p>',
    },
  ],
  ui: {
    urlPlaceholder: '在此处粘贴 YouTube 链接...',
    pasteAriaLabel: '从剪贴板粘贴',
    helperText: '支持的格式：youtube.com, youtu.be, shorts.',
    ribbonLabel: '最高画质',
    downloadBtn: '以最高分辨率下载',
    qualityMedium: '中等画质',
    qualityStandard: '标准画质',
    qualityLow: '低画质',
    viewImage: '查看图片',
    errorInvalid: '无效的 YouTube URL。请仔细检查。',
    imgAlt: 'YouTube HD 缩略图',
  },
};
