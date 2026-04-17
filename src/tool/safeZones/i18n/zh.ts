import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'social-safe-zones';
const title = '社交安全区域：TikTok、Reels 和 Shorts 视频模拟器';
const description =
  '使用真实的社交媒体界面预览您的图片和视频。确保您的内容始终可见，避免意外裁剪。';

const faqData = [
  {
    question: '什么是社交媒体上的“安全区域”？',
    answer:
      '安全区域是指屏幕上内容可见且不会被界面元素（如用户名、描述、交互按钮（点赞、分享））或某些设备应用的自动裁剪所遮挡的区域。',
  },
  {
    question: '为什么我的 TikTok 视频顶部和底部看起来被裁剪了？',
    answer:
      'TikTok 使用 9:16 的纵横比。如果您的视频较宽，应用程序会缩放以填充屏幕，从而导致裁剪。此外，底部界面会遮挡部分视频，因此重要元素应放置在中心位置。',
  },
  {
    question: 'Instagram Reels 和 YouTube Shorts 的安全区域是一样的吗？',
    answer:
      '非常相似但并不完全相同。YouTube Shorts 的按钮位置与 Reels 不同。我们的工具允许您在不同平台之间切换，以验证您在所有平台上的设计。',
  },
  {
    question: '如果我把文字放在右下角会发生什么？',
    answer:
      '文字可能会不可见或非常难以阅读，因为那是个人资料、爱心和评论图标所在的位置。理想情况下，应将文字和面部保持在中央上部区域（安全区域）。',
  },
];

const howToData = [
  {
    name: '加载您的图片或视频',
    text: '上传您想要预览的文件。处理在本地私密进行，不会上传到互联网。',
  },
  {
    name: '选择平台',
    text: '在 TikTok、Instagram Reels 或 YouTube Shorts 之间进行选择，以激活相应的界面叠加层。',
  },
  {
    name: '检查可读性',
    text: '验证文字、字幕或关键品牌元素是否被社交网络的图标遮挡。',
  },
  {
    name: '调整并导出',
    text: '如果有内容被遮挡，请在原始视频编辑器中移动该元素，并再次测试，直到完美拟合。',
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

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '官方平台文档',
  bibliography: [
    {
      name: 'TikTok 创作者门户：视频优化和安全区域',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: 'Instagram 业务：Reels 最佳实践',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: 'YouTube 帮助：创建 YouTube Shorts',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: 'Meta for Creators：视频安全区域和纵横比',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '安全区域大师指南：优化您的 Reels、TikTok 和 Shorts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在垂直内容饱和的世界里，第一印象是技术性的。创作者犯的最大错误是忽略了他们的<strong>视频或图片</strong>如何与平台的原生界面交互。每个社交网络（TikTok、Instagram Reels 和 YouTube Shorts）都会在视频上方叠加按钮、文字和个人资料层，这可能会抵消构图的视觉冲击力。',
    },
    {
      type: 'paragraph',
      html: '此工具允许您加载媒体文件，并准确预览画面的哪些部分会被界面遮挡。这不仅仅关乎<strong>字幕</strong>；它还关乎确保视频中的脸部、产品或主要动作不会被嵌入“点赞”按钮或冗长的描述之下。',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'TikTok：最具侵入性的界面',
          html: '<p>TikTok 的界面最为密集。在右侧，有一列图标占据了约 15% 的宽度。在底部，描述可以扩展到 4 或 5 行，从下方遮挡了近三分之一的屏幕。</p><ul><li><strong>底部边距：</strong>保留最后 250px 的自由空间，以避开描述文字和用户名。</li><li><strong>右侧边距：</strong>避免在距离右边缘 100px 范围内放置文字。</li><li><strong>顶部：</strong>“关注”和“推荐”按钮占据了顶部中央条案。</li></ul>',
        },
        {
          type: 'card',
          title: 'IG Reels：Feed 流因素',
          html: '<p>与 TikTok 不同，从主 Feed 流查看时，Instagram Reels 会将视频裁剪为 4:5 格式。这意味着如果您在该 9:16 视频顶部或底部 15% 的位置放置关键信息，它将在 Feed 流中消失。</p><ul><li><strong>4:5 规则：</strong>将标题和关键元素保持在中央区域，以便在 Feed 流中可见。</li><li><strong>界面：</strong>Reels 的图标比 TikTok 的更精细，允许更多的侧边边距。</li><li><strong>音频按钮：</strong>位于右下角，通常比 TikTok 的旋转光盘遮挡得少得多。</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts：注意右侧',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube Shorts 具有不对称界面。订阅按钮非常突出且为纯色（通常为黑色或白色），在右下角形成了一个重要的视觉盲点。',
    },
    {
      type: 'list',
      items: [
        '<strong>右侧边距：</strong>避免在右下方 20% 的区域放置文字或重要元素。',
        '<strong>底部边距：</strong>保留最后 150px 的自由空间，以避开描述文字和用户名。',
        '<strong>顶部：</strong>订阅和其他按钮占据了顶部中央条案。',
      ],
    },
    {
      type: 'title',
      text: '垂直设计的关键问题',
      level: 2,
    },
    {
      type: 'title',
      text: '关键元素（脸部、文字、产品）应该放在哪里？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '主要动作的“黄金区域”是视频的中央三分之一。如果您正在拍摄人物，请确保他们的眼睛和嘴巴在这个区域内。重要的图形元素应从几何中心略微向上移动，以避开底部的描述。',
    },
    {
      type: 'title',
      text: '为什么我的视频在上传后看起来很模糊？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '这通常不是质量问题，而是缩放问题。请始终以 1080x1920、30 或 60 fps 进行录制。如果您应用了许多重度效果，请避免使用 4K，因为平台会激进地压缩大文件。',
    },
    {
      type: 'title',
      text: '手机边框怎么办？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '请记住，现代手机在屏幕上有刘海或摄像头孔位。此工具包含顶部安全边距，因此您的内容不会与时钟或系统图标（电池、信号）发生冲突。',
    },
    {
      type: 'title',
      text: '热门视频剖析',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '为社交媒体设计不仅仅是关于美学，更是关于<strong>可用性</strong>。如果用户因为平台图标遮挡而不得不费力阅读文字，他们会直接滑到下一个视频。当存在视觉摩擦时，留存率（观看时间）会大幅下降。',
    },
    {
      type: 'paragraph',
      html: '以 YouTube Shorts 为例，它的界面是不对称的。订阅按钮非常清晰。通过使用此模拟器，您可以调整不透明度，以了解您的调色板如何与原生 UI 颜色交互。',
    },
    {
      type: 'tip',
      title: '创意品质控制工具',
      html: '<p>专为不放过任何细节的创作者设计。</p>',
    },
  ],
  ui: {
    labelConfig: '设置',
    labelPlatform: '目标平台',
    labelUpload: '上传内容',
    uploadPrompt: '选择图片或视频',
    uploadLink: '或使用示例',
    loadContent: '加载您的内容',
    labelOpacity: '界面浮现度',
    labelMask: '灰置关键区域',
    labelGrid: '三分法网格',
    btnReset: '重置画布',
    bannerTiktok: '正在模拟 TikTok 9:16',
    bannerReels: '正在模拟 Instagram Reels 9:16',
    bannerShorts: '正在模拟 YouTube Shorts 9:16',
    nameTiktok: 'TikTok',
    nameReels: 'IG Reels',
    nameShorts: 'YT Shorts',
    ttFollowing: '关注',
    ttForYou: '推荐',
    ttDescription: '为内容创作者设计的真实界面设计。 #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - 原声音效',
    ttNavHome: '首页',
    ttNavFriends: '朋友',
    ttNavInbox: '收件箱',
    ttNavProfile: '个人主页',
    reelsFollow: '关注',
    reelsDescription: '此界面与真实的完全一致。 #reels #ux #simulator',
    reelsAudio: 'Trending Music - 原声音乐',
    shortsSubscribe: '订阅',
    shortsDislike: '不喜欢',
    shortsShare: '分享',
    shortsRemix: '重混',
    shortsDescription: '模拟真实的 Shorts 界面！ #youtube #shorts',
  },
};
