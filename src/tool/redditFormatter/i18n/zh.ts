import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'reddit-text-formatter';
const title = 'Reddit 文本格式化工具：Markdown 清理与修复器';
const description =
  '用于在 Reddit 上发布内容的文本清理工具。修复缺失的换行符，移除破坏 Markdown 格式的多余空格和隐藏字符。';

const faqData = [
  {
    question: '为什么我在 Reddit 上的文本会丢失换行符？',
    answer:
      'Reddit 使用 Markdown，这要求你在行尾输入两个空格后再按回车键才能实现正常换行，或者按两次回车键创建新段落。我们的工具通过自动插入双换行符来处理这一问题。',
  },
  {
    question: '什么是隐藏或不可见字符？',
    answer:
      '从复杂的文字处理器复制时，通常会附带零宽格式标记。这些元素在普通网页上不可见，但会破坏 Markdown 生态系统。',
  },
  {
    question: '使用这个文本清理工具安全吗？',
    answer:
      '非常安全。脚本完全在客户端（你自己的浏览器中）运行。你的文本永远不会发送到任何服务器，也没有人能访问你粘贴在这里的内容。',
  },
  {
    question: '我可以将它用于 Twitter 或其他社交网络吗？',
    answer:
      '可以。除了修复 Reddit 帖子外，移除多余空格和奇怪字符对于在博客、Twitter、旧版 phpBB 论坛或任何其他需要简洁中性文本的社交平台上发布内容都很有用。',
  },
];

const howToData = [
  {
    name: '粘贴文本',
    text: '从 Word、Google Docs 或任何来源复制文本并将其粘贴到输入框中。',
  },
  {
    name: '选择选项',
    text: '根据需要开启或关闭选项：修复段落、移除空格或清理隐藏字符。',
  },
  {
    name: '查看结果',
    text: '清理后的文本会实时出现在输出框中，随时可以发布。',
  },
  {
    name: '复制并发布',
    text: '点击“复制文本”并直接粘贴到 Reddit 或任何论坛。',
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

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [
    {
      name: 'Reddit 帮助：在帖子和评论中格式化文本',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Reddit Markdown 指南',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '适用于 Reddit 和 Web 论坛的多功能格式化工具',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在 Reddit 或任何依赖 Markdown 的平台发布内容可能会令人沮丧。从复杂的文字处理器或网页复制粘贴文本时，常见的问是换行符会被改变。提交内容时，由于忽略了原始段落结构，往往会变成难以阅读的一整块。我们的格式化工具从根本上解决了这个问题。',
    },
    {
      type: 'title',
      text: 'Reddit 文本清理工具的工作原理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '处理引擎对您的文本进行实时过滤。首先处理换行符。Reddit 要求特定格式，段落换行在 Markdown 源代码中需要两个新行。清理器会分析您的文本，自动将单换行符转换为双换行符，保持现有段落完整，避免产生过多间距。',
    },
    {
      type: 'paragraph',
      html: '其次，该工具会移除不可见字符和多余空格。从网站复制文本时，通常会带入零宽字符，这会破坏格式或导致论坛出现异常。清理器会清除这些干扰性的 Web 元素，并将重复空格标准化为单个空格。此外，您还可以选择从内容中剥离所有原始超链接，发布完全中性的文本。',
    },
    {
      type: 'title',
      text: '使用专用文本清理工具的好处',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>优化可读性：</strong>确保您的 Reddit 读者看到结构良好的文本，而不是令人感到压抑的文字墙。',
        '<strong>节省时间：</strong>无需按数百次回车来修复损坏的格式。粘贴内容，不到一秒钟即可完成复制。',
        '<strong>移除元数据和 Web 垃圾：</strong>保护您的帖子免受零宽空格导致的奇怪样式或断行影响。',
        '<strong>高度隐私：</strong>所有处理都在客户端完成。文本永远不会离开浏览器或存储在外部服务器上。',
      ],
    },
    {
      type: 'title',
      text: '文字处理器与 Reddit 的冲突',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '像 Microsoft Word 或 Google Docs 这样的应用程序会在文本上添加一层不可见的富文本格式。当您直接将内容复制粘贴到基本编辑器或 Reddit 的 Markdown 模式时，富文本格式会消失，剩下的往往是无结构的混杂物。Reddit 使用的是相当严格的 Markdown 变体。如果您不熟悉 Reddit 的语法，或者只是想在将文章或故事发布到论坛时过程更顺畅，先在这里清理文本可以防止您的帖子因难以阅读而被点踩。',
    },
    {
      type: 'title',
      text: '在论坛发布内容的最佳实践',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '正确的格式对于引发讨论和保持社区关注至关重要。行数极长或没有段落的帖子往往在读完前几句后就被放弃了。使用此清理工具建立结构基础，然后在 Reddit 编辑器中策略性地添粗体和斜体等格式以突出关键思想。务必查看预览，并利用结构化列表来列举要点或详细指南。',
    },
    {
      type: 'title',
      text: '转换示例',
      level: 3,
    },
    {
      type: 'tip',
      title: '格式化前后对比',
      html: '<p><strong>原始粘贴文本：</strong></p><pre>你好，这是第一行\n这本该是第二行\n但在粘贴到 Reddit 时，所有内容都连在了一起。</pre><p><strong>格式化后的文本：</strong></p><pre>你好，这是第一行\n\n这本该是第二行\n\n但在粘贴到 Reddit 时，所有内容都连在了一起。</pre>',
    },
    {
      type: 'title',
      text: '关于 Reddit 文本格式化工具的常见问题',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '了解如何遵循 Reddit 的编辑规则并不容易。请查看常见问题解答 (FAQ) 部分，我们在那里解答了有关格式要求以及如何避免因产生大量文字墙而被惩罚的主要问题。',
    },
  ],
  ui: {
    labelInput: '原文',
    placeholderInput: '请在此处粘贴原文...',
    labelOptions: '格式化选项',
    optionParagraphs: '修复 Reddit 风格段落',
    optionSpaces: '移除多余空格',
    optionInvisible: '清理隐藏 Web 字符',
    optionLinks: '提取 URL（仅限文本）',
    labelOutput: '清理后的文本',
    placeholderOutput: '清理结果将显示在此处...',
    btnCopy: '复制文本',
    btnCopied: '已复制',
  },
};
