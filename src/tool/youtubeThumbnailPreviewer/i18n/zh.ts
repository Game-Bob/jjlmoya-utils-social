import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'youtube-thumbnail-previewer';
const title = 'YouTube 缩略图在线预览：免费提升点击率 (CTR)';
const description =
  '上传您的缩略图，查看在手机和桌面端真实 YouTube 首页中的效果。暗黑和明亮模式模拟器，助您瞬间优化点击量。';

const faqData = [
  {
    question: '为什么测试 YouTube 缩略图至关重要？',
    answer:
      '大多数用户使用移动设备观看 YouTube。在您的显示器上看起来很棒的缩略图在小屏幕上可能无法辨认。在模拟器中进行测试可确保文字清晰，且无论图片大小如何，主要主体都足够醒目。',
  },
  {
    question: '使用此预览器需要注册吗？',
    answer:
      '不需要。我们的工具 100% 免费，可直接在您的浏览器中运行。您无需创建帐户或保留电子邮件即可优化缩略图。',
  },
  {
    question: '我的设计会上传到您的服务器吗？',
    answer:
      '绝对不会。隐私是我们的首要任务。当您选择文件时，它会通过临时 URL 本地加载到浏览器的内存中。除了您自己，没有人可以看到您正在测试的设计。',
  },
  {
    question: '此工具如何帮助提高我的 CTR？',
    answer:
      'CTR（点击率）是看到缩略图的人中，点击观看的百分比。通过模拟真实环境（黑底 vs 白底，手机 vs 电脑），您可以在发布前修正对比度和构图错误，从而增加点击量。',
  },
  {
    question: '它支持 YouTube 官方的暗黑模式吗？',
    answer:
      '是的。我们内置了主题切换器（明亮和暗黑），完全模拟了 YouTube 官方应用在两种模式下使用的色值。',
  },
];

const howToData = [
  {
    name: '上传您的设计',
    text: '点击上传区域，或将您的图片文件（PNG、JPG 或 WebP）直接拖入工具。',
  },
  {
    name: '设置上下文',
    text: '输入您的视频标题和频道名称，使模拟效果尽可能贴近真实的首页反馈。',
  },
  {
    name: '切换设备',
    text: '在“桌面端”和“移动端”视图之间切换，验证在不同尺寸屏幕上的可读性。',
  },
  {
    name: '测试对比度',
    text: '开启“暗黑”主题，查看颜色在 YouTube 黑色背景下是否依然醒目。',
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

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [
    {
      name: 'YouTube 帮助：制作自定义视频缩略图',
      url: 'https://support.google.com/youtube/answer/141805',
    },
    {
      name: 'Nielsen Norman Group: Visual Processing and UX Design',
      url: 'https://www.nngroup.com/articles/visual-processing/',
    },
    {
      name: 'Derral Eves: The YouTube Formula (Thumbnail Strategy)',
      url: 'https://derraleves.com/the-youtube-formula/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'YouTube 缩略图预览器：掌握您频道的 CTR',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在 YouTube 生态系统中，缩略图是进入您内容的门户。您可能有世界上最好的视频——好莱坞级别的剪辑、奥斯卡级别的剧本——但如果没有人点击，您的工作在算法眼中就是透明的。这就是 <strong>CTR（点击率）</strong> 发挥作用的地方，而缩略图是决定性因素。',
    },
    {
      type: 'title',
      text: '为什么在上传前需要测试缩略图',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>真实预览：</strong> 查看您的缩略图在 YouTube 首页中的精确呈现效果。',
        '<strong>暗黑和明亮模式：</strong> 确保在任何用户设置下，颜色都能脱颖而出。',
        '<strong>设备模拟器：</strong> 检查文字在显示器和小型手机屏幕上的可读性。',
        '<strong>CTR 优化：</strong> 将您的设计与原生界面进行对比，从而实现点击量最大化。',
        '<strong>无需注册：</strong> 直接上传图片并立即测试，无需创建帐户。',
        '<strong>隐私保证：</strong> 您的设计在本地处理，绝不会上传到服务器。',
      ],
    },
    {
      type: 'paragraph',
      html: '许多创作者常犯的错误是在大显示器上进行缩略图设计，并在他们常用的编辑器中全屏查看。问题在于，终端用户很少这样看图片。大多数人是在手机上刷视频时，或者在暗黑模式下的显示器角落里看到它。我们的 <strong>YouTube 缩略图预览器</strong> 让您打破这种“设计师幻觉”，看到最真实的首页竞争环境。',
    },
    {
      type: 'title',
      text: '技术指标与性能',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0.2 秒', body: '响应时间' },
        { title: '4K', body: '最高分辨率' },
        { title: '100%', body: '本地隐私' },
        { title: 'HD', body: '原生画质' },
      ],
    },
    {
      type: 'title',
      text: '点击心理学：为什么缩略图会失败？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '人类大脑处理图片的速度比处理文字快数千倍。然而在 YouTube 上，竞争是残酷的。您的缩略图不仅要“好看”，还必须 <strong>易读</strong> 且具有 <strong>对比度</strong>。',
    },
    {
      type: 'paragraph',
      html: '一个常见的错误是使用的颜色与 YouTube 背景融为一体。如果您大量使用深灰色，而您的观众处于暗黑模式，您的视频就会从他们的余光中消失。通过使用此预览工具，您可以切换主题，确保您的设计在任何场景下都能“跳”出来。',
    },
    {
      type: 'title',
      text: '直接对比：设计 vs. 现实',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '花 30 秒测试缩略图值得吗？答案是肯定的“值得”。一个优化过的缩略图可以在最初的 24 小时内让浏览量翻倍，从而向 YouTube AI 发出信号，表明您的内容具有“吸引力”。',
    },
    {
      type: 'grid',
      columns: [
        {
          title: '在 Photoshop / Canva 中设计时',
          body: '对真实尺寸的错觉 · 忽略与应用背景的对比 · 文字看起来易读（实际可能不读） · 忽略了 UI 元素（视频时长标签、头像）',
        },
        {
          title: 'YouTube 缩略图预览器中',
          body: '首页中的真实视觉感受 · 在暗黑 vs 明亮模式下验证对比度 · 保证移动端的文字可读性 · 模拟视频标题和频道名',
        },
      ],
    },
    {
      type: 'title',
      text: '点击率 (CTR) 超过 10% 的缩略图清单',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在导出最终设计之前，请确保使用我们的专业模拟器检查以下清单：',
    },
    {
      type: 'list',
      items: [
        '文字在小型手机屏幕上清晰易读吗？',
        '背景和主要主体之间有足够的对比度吗？',
        '缩略图在暗黑模式的黑色背景下看起来好吗？',
        '视频标题是否覆盖了图片中的重要信息？',
        '视频时长标签（右下角黑框）是否遮挡了关键元素？',
        '人脸或主要物体在缩小后是否仍能传达您想要表达的情绪？',
      ],
    },
    {
      type: 'title',
      text: '高影响力缩略图的构成',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '根据对全球头部频道的分析，获胜的缩略图通常遵循这种结构模式：',
    },
    {
      type: 'grid',
      columns: [
        {
          title: '主要主体',
          body: '视觉焦点 · 使用边缘清晰的人物或物体，并配合轻微的描边或额外的饱和度。',
        },
        {
          title: '文字（最多 3 个词）',
          body: '秒懂文 context · 使用粗体无衬线字体和互补色。',
        },
        {
          title: '虚化背景',
          body: '画面分离感 · 增加深度，让主要主体从屏幕中“跃出”。',
        },
        {
          title: '时长标签预留位',
          body: '避坑事项 · 不要将人脸或文字放在右下角。',
        },
      ],
    },
    {
      type: 'tip',
      title: '避开“死区”小技巧',
      html: '<p>YouTube 总是在缩略图右下角放置一个黑色时长框。成千上万的创作者会在该位置放置关键元素，结果发现被 App 挡住了。我们的工具真实模拟了这个框，因此您永远不会挡住最好的镜头。</p>',
    },
    {
      type: 'title',
      text: '工具的优势与局限性',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: '极速响应的交互界面',
          body: '局限性：不支持图片编辑功能（请继续使用 Canva/PS）',
        },
        {
          title: '精确的 App 和网页版 Mockup',
          body: '局限性：不模拟插播广告效果',
        },
        {
          title: '完全免费且没有干扰性广告',
          body: '局限性：仅支持本地文件上传',
        },
      ],
    },
    {
      type: 'title',
      text: '使用“分屏 (Split)”模式（直接对比）',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '这是我们的核心功能。通过激活分屏模式，您可以同时查看到缩略图在明亮和暗黑模式下的效果。这是检查您的调色板是否具有通用性，以及是否需要调整亮度或对比度的终极方法。',
    },
    {
      type: 'title',
      text: '隐私：您的设计不会上传到云端',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '我们知道您的缩略图是发布前秘密策略的一部分。因此，我们将此工具设计为完全在您的浏览器引擎中运行。<strong>没有任何内容会上传到互联网</strong>。您选择的文件通过本地临时 URL 加载，关闭标签页后即消失。您的知识产权 100% 受您控制。',
    },
    {
      type: 'title',
      text: '结论：确保每个像素都完美',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '停止猜测，开始验证。JJLMoya 频道的 <strong>YouTube 缩略图预览器</strong> 是区分业余创作者和专业内容制作者的免费工具。字体大小或主体位置的一个微小调整，就可能决定一个视频是石沉大海，还是成为爆款。',
    },
    {
      type: 'paragraph',
      html: '现在就开始优化您的频道，给您的视频应有的点击率！',
    },
  ],
  ui: {
    dropFeedTitle: '将缩略图拖到此处',
    dropFeedSub: '支持 PNG, JPG 或 WebP · 多图上传',
    dropAvatarTitle: '将头像拖到此处',
    dropAvatarSub: '频道个人资料图片',
    labelTitle: '视频标题',
    labelChannel: '频道名称',
    defaultTitle: '在此处输入视频标题',
    defaultChannel: '频道名称',
    btnDesktop: '桌面端',
    btnMobile: '移动端',
    btnClear: '清空',
    labelLight: '明亮',
    labelDark: '暗黑',
    views0: '120 万次观看 · 1 小时前',
    views1: '45 分钟前',
    views2: '25 万次观看 · 1 天前',
    views3: '310 万次观看 · 1 周前',
  },
};
