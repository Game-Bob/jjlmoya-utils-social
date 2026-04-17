import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'social-account-value-calculator';
const title = '社交账号价值计算器：TikTok 和 Instagram 推广定价';
const description =
  '了解您的赞助贴应该收多少钱。我们的计算器通过分析粉丝数、互动率和领域，为您提供公平的市场价值。';

const faqData = [
  {
    question: '账号价值计算器是免费的吗？',
    answer:
      '是的，我们的工具 100% 免费，不需要注册或连接您的社交媒体账号。您只需要输入您的公开指标。',
  },
  {
    question: '为什么 TikTok 的价值与 Instagram 不同？',
    answer:
      'TikTok 很大程度上依赖于算法分发和播放量，而 Instagram 仍然更看重社区规模和粉丝忠诚度。',
  },
  {
    question: '什么样的互动率可以收更高的费用？',
    answer:
      '通常，3% 以上的互动率被认为是健康的。互动率超过 10% 的账号被视为“优质账号”，可以收取显著的溢价。',
  },
  {
    question: '领域（Niche）真的对价格影响那么大吗？',
    answer:
      '绝对是的。相比于寻求快速娱乐或梗图的粉丝，对金融或管理软件感兴趣的粉丝对品牌具有更高的转化价值。',
  },
];

const howToData = [
  {
    name: '选择您的平台',
    text: '选择您想要计算 TikTok 还是 Instagram 账号的价值。',
  },
  {
    name: '输入您的指标',
    text: '输入您的粉丝数量以及最近 10 个帖子的平均播放量和点赞数。',
  },
  {
    name: '选择您的领域',
    text: '选择最能描述您内容的类别，以便根据市场需求调整价值。',
  },
  {
    name: '获取您的预算',
    text: '获取专业合作应收取的估计价格范围。',
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

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源与市场研究',
  bibliography: [
    {
      name: 'Influencer Marketing Hub：2026 红人定价',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor：TikTok 和 Instagram 互动报告',
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade：社交媒体统计数据',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: '在本指南中，您将了解到',
      html: '<ul><li>基于 2026 年数据的<strong>真实市场价值</strong>。</li><li>如何区分 <strong>TikTok 与 Instagram</strong> 的影响。</li><li>您的<strong>垂直领域</strong>如何显著影响您的 CPM。</li><li>用于<strong>与品牌谈判</strong>的专业模板。</li></ul>',
    },
    {
      type: 'title',
      text: '账号价值计算器：在 TikTok 或 Instagram 上发布赞助贴应该收多少钱？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '如果您是一名内容创作者、红人，或者只是在社交媒体上拥有一个活跃的社区，您可能在某个时候想过：<strong>我的账号到底值多少钱？</strong> 或者 <strong>我应该向品牌合作方报多少价？</strong>',
    },
    {
      type: 'title',
      text: '创作者经济的兴起',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '红人营销已经成熟，不再仅仅关注粉丝数量。品牌正在寻找结果和深层联系。我们的工具基于真实的市场数据提供了一个可靠的起点。',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: '<p>红人营销投资的年度增长</p>',
        },
        {
          type: 'card',
          title: '3.2%',
          html: '<p>被视为健康的平均互动率</p>',
        },
        {
          type: 'card',
          title: '¥100–¥400',
          html: '<p>高价值领域的平均 CPM（预计）</p>',
        },
      ],
    },
    {
      type: 'title',
      text: '决定您账号价值的因素',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '与几年前人们所相信的不同，粉丝数量只是冰山一角。以下是核心组成部分：',
    },
    {
      type: 'title',
      text: '1. 互动率 (Engagement Rate)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '这是关键指标。它衡量您的社区中有多大比例的人在积极与您的内容互动。一个互动量高的小账号远比一个毫无反应的“僵尸”大号更有价值。',
    },
    {
      type: 'tip',
      title: '互动技巧',
      html: '<p>尝试在发布后的头几个小时内回复评论，以便向算法发送积极信号。</p>',
    },
    {
      type: 'title',
      text: '2. 平均触达量',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在 TikTok 上，由于其推荐算法，触达量是不稳定的。在 Instagram 上，Reels 短视频在吸引新观众方面比静态照片更具权重。',
    },
    {
      type: 'title',
      text: '3. 垂直领域或类别',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '并非所有受众的价值都相同。由于终端客户的价值更高，科技或金融类的创作者可以收取的费用远高于普通娱乐类创作者。',
    },
    {
      type: 'title',
      text: '报酬最高的类别 (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>金融与商业：</strong> 每篇贴子报酬最高的领域。',
        '<strong>科技与数码：</strong> 具有很强的即时购买意向。',
        '<strong>健康与健身：</strong> 器材和应用的庞大市场。',
        '<strong>家居装修：</strong> 项目成本高，投资回报率（ROI）高。',
      ],
    },
    {
      type: 'title',
      text: 'TikTok vs Instagram：钱在哪里？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '虽然两者都使用垂直视频，但它们的变现模式有所不同。Instagram 侧重于品牌建设；TikTok 则纯粹看效果。',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: '<p>专注于品牌、美感和忠诚度。适合长期活动。</p><ul><li>看重社区规模</li><li>具有直接销售能力的 Stories</li><li>增长稳定</li><li>受众更成熟</li></ul>',
        },
        {
          type: 'card',
          title: 'TikTok',
          html: '<p>极端病毒式传播的领地。算法决定了一切。爆发性的短期 ROI。</p><ul><li>看重海量触达</li><li>绝对的爆款潜力</li><li>制作成本低</li><li>受众非常活跃</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: '如何利用结果进行谈判',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '以我们工具给出的价格范围作为参考。利用此模板自信地展示您的指标：',
    },
    {
      type: 'tip',
      title: '谈判模板',
      html: '<p>您好 [品牌名称]，感谢您的联系。根据我目前的触达指标（平均 [X] 次播放）和 [X]% 的互动率，我在 [Reel/TikTok] 中的单条报价为 [价格 ¥]。这包括：脚本编写和视频制作、24 小时的 bio 链接、2 条增强曝光的 Stories、30 天的使用权。</p>',
    },
    {
      type: 'title',
      text: '提高报价的策略',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>鼓励互动：</strong> 回复每一条评论。',
        '<strong>提高质量：</strong> 音频占好视频成功因素的 50%。',
        '<strong>专业化：</strong> 成为“专家”能让您收更多钱。',
        '<strong>制作媒体手册 (Media Kit)：</strong> 用数据记录您的成功案例。',
      ],
    },
    {
      type: 'title',
      text: '估计价值可靠吗？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '我们的计算器使用来自国际机构的汇总数据。然而，季节性因素（圣诞节活动的报酬更高）等因素可能会改变最终价格。',
    },
    {
      type: 'tip',
      title: '创作者注',
      html: '<p>此工具仅为估算值。请务必根据品牌方要求的内容复杂程度调整价格。</p>',
    },
  ],
  ui: {
    sectionTag: '审计参数',
    labelFollowers: '社区（粉丝）',
    labelAvgViewsTiktok: '影响力（单条视频播放量）',
    labelAvgViewsIg: '触达（个人资料触达）',
    tooltipViews: '将您最近 10 个视频的播放量相加并除以 10。',
    labelEngagement: '忠诚度（点赞+评论）',
    tooltipEngagement: '最近 10 个帖子的点赞和评论总数相加并除以 10。',
    labelNiche: '市场领域',
    nicheEntertainment: '娱乐',
    nicheFinance: '金融与房地产',
    nicheTech: '科技与 SaaS',
    nicheFitness: '生活方式与健康',
    nicheFashion: '时尚与美容',
    nicheTravel: '旅游与旅行',
    nicheFood: '美食与餐饮',
    nicheGaming: '游戏与电竞',
    nicheHome: '家居与装修',
    btnCalculate: '生成价值报告',
    emptyTitle: '商业可行性分析',
    emptyDesc: '输入账号指标以预测当前市场价值。',
    roiLabel: '建议价格评估',
    rangeLabel: '建议范围：',
    audienceQuality: '受众质量',
    metricER: '互动率',
    investmentEfficiency: '投资效率',
    metricCPM: '预计 CPM',
    insightText: '此估值基于 2026 年中国市场的平均 CPM。',
    currencySymbol: '¥',
    numberLocale: 'zh-CN',
  },
};
