import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'social-account-value-calculator';
const title = 'Social Media Account Value Calculator: TikTok & Instagram Pricing';
const description =
  'Find out how much to charge for sponsored posts. Our calculator analyses followers, engagement and niche to give you a fair market value.';

const faqData = [
  {
    question: 'Is the account value calculator free?',
    answer:
      'Yes, our tool is 100% free and requires no registration or connection to your social media accounts. You only need to enter your public metrics.',
  },
  {
    question: 'Why is the TikTok value different from Instagram?',
    answer:
      'TikTok relies heavily on algorithmic reach and views, whereas Instagram still places strong weight on community size and follower loyalty.',
  },
  {
    question: 'What is a good engagement rate for charging more?',
    answer:
      "Generally, an engagement above 3% is considered healthy. Accounts with more than 10% engagement are considered 'premium profiles' and can charge a significant premium.",
  },
  {
    question: 'Does niche really affect the price that much?',
    answer:
      'Absolutely. A follower interested in finance or management software has a much higher conversion value for a brand than a follower looking for quick entertainment or memes.',
  },
];

const howToData = [
  {
    name: 'Choose your platform',
    text: 'Select whether you want to calculate the value of a TikTok or Instagram account.',
  },
  {
    name: 'Enter your metrics',
    text: 'Enter your follower count and the average views and likes of your last 10 posts.',
  },
  {
    name: 'Select your niche',
    text: 'Choose the category that best describes your content to adjust the value based on market demand.',
  },
  {
    name: 'Get your budget',
    text: 'Receive an estimated range of what you should charge for a professional collaboration.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources & Market Studies',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: Influencer Rates 2026',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor: TikTok & Instagram Engagement Report',
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: Social Media Statistics',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: 'In this guide you will learn',
      html: '<ul><li>Your <strong>real market value</strong> based on 2026 data.</li><li>How to differentiate the impact of <strong>TikTok vs Instagram</strong>.</li><li>How your <strong>niche</strong> dramatically affects your CPM.</li><li>A professional template for <strong>negotiating with brands</strong>.</li></ul>',
    },
    {
      type: 'title',
      text: 'Account Value Calculator: How Much to Charge for a Sponsored Post on TikTok or Instagram?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'If you are a content creator, influencer, or simply have an active community on social media, you have probably wondered at some point: <strong>how much is my account actually worth?</strong> or <strong>how much should I ask for a brand collaboration?</strong>.',
    },
    {
      type: 'title',
      text: 'The rise of the creator economy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Influencer marketing has matured and is no longer just about follower counts. Brands are looking for results and deep connection. Our tool provides a solid starting point based on real market data.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: '<p>Annual growth in Influencer Marketing investment</p>',
        },
        {
          type: 'card',
          title: '3.2%',
          html: '<p>Average engagement rate considered healthy</p>',
        },
        {
          type: 'card',
          title: '$15–$50',
          html: '<p>Average CPM in high-value niches (stable)</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Factors that determine how much your account is worth',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Unlike what was believed a few years ago, follower count is just the tip of the iceberg. Here are the fundamental components:',
    },
    {
      type: 'title',
      text: '1. Engagement Rate',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'It is the key metric. It measures what percentage of your community actively interacts with your content. A small account with high interaction is far more valuable than a large "ghost" account.',
    },
    {
      type: 'tip',
      title: 'Engagement tip',
      html: '<p>Try to reply to comments in the first few hours after posting to send positive signals to the algorithm.</p>',
    },
    {
      type: 'title',
      text: '2. Average Reach',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "On TikTok, reach is volatile due to its recommendation algorithm. On Instagram, Reels have gained weight over static photos for capturing new audiences.",
    },
    {
      type: 'title',
      text: '3. Niche or Category',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Not all audiences are worth the same. A tech or finance creator can charge much higher rates than a general entertainment creator, due to the higher value of the end customer.',
    },
    {
      type: 'title',
      text: 'Highest-paying categories (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finance & Business:</strong> The best-paid niche per post.',
        '<strong>Technology & Gadgets:</strong> High immediate purchase intent.',
        '<strong>Health & Fitness:</strong> Large market for equipment and apps.',
        '<strong>Home Renovation:</strong> High project costs and elevated ROI.',
      ],
    },
    {
      type: 'title',
      text: 'TikTok vs Instagram: Where is the money?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Although both use vertical video, their monetisation models differ. Instagram is branding; TikTok is pure performance.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: '<p>Focus on branding, aesthetics and loyalty. Ideal for long-term campaigns and brand affinity.</p><ul><li>Values community size</li><li>Stories with direct sales</li><li>Stable growth</li><li>More mature audience</li></ul>',
        },
        {
          type: 'card',
          title: 'TikTok',
          html: '<p>The land of extreme virality. The algorithm rules over followers. Explosive short-term ROI.</p><ul><li>Values massive reach</li><li>Absolute viral potential</li><li>Low production costs</li><li>Very active audience</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'How to use the results to negotiate',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Get the price range from our tool and use it as a guide. Present your metrics with confidence using this template:',
    },
    {
      type: 'tip',
      title: 'Negotiation template',
      html: '<p>Hi [Brand Name], thank you for reaching out. Based on my current reach metrics (average of [X] views) and my engagement rate of [X]%, my rate for an integration in a [Reel/TikTok] is [Price $]. This includes: scripting and video production, 1 bio link for 24h, 2 amplification Stories, 30-day usage rights.</p>',
    },
    {
      type: 'title',
      text: 'Strategies to raise your rate',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Foster interaction:</strong> Reply to every comment.',
        '<strong>Raise the quality:</strong> Audio is 50% of a good video.',
        "<strong>Specialise:</strong> Being 'the expert' lets you charge more.",
        '<strong>Create a Media Kit:</strong> Document your successes with data.',
      ],
    },
    {
      type: 'title',
      text: 'Is the estimated value reliable?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Our calculator uses aggregated data from international agencies. However, factors such as seasonality (Christmas campaigns pay more) may vary the final price.',
    },
    {
      type: 'tip',
      title: 'Note for Creators',
      html: '<p>This tool is an estimate. Always adjust the price based on the complexity of the content requested by the brand.</p>',
    },
    {
      type: 'paragraph',
      html: 'In conclusion, knowing your value is the first step to professionalising your career as a creator. Run periodic checks with this calculator as your account grows to keep your prices up to date.',
    },
  ],
  ui: {
    sectionTag: 'Audit Parameters',
    labelFollowers: 'Community (Followers)',
    labelAvgViewsTiktok: 'Impact (Views per Video)',
    labelAvgViewsIg: 'Reach (Profile Reach)',
    tooltipViews: 'Add up the views from your last 10 videos and divide by 10 to get the real average.',
    labelEngagement: 'Loyalty (Likes + Comments)',
    tooltipEngagement: 'Add up total likes and comments from your last 10 posts and divide by 10.',
    labelNiche: 'Market Vertical',
    nicheEntertainment: 'Entertainment',
    nicheFinance: 'Finance & Real Estate',
    nicheTech: 'Technology & SaaS',
    nicheFitness: 'Lifestyle & Health',
    nicheFashion: 'Fashion & Beauty',
    nicheTravel: 'Tourism & Travel',
    nicheFood: 'Food & Gastronomy',
    nicheGaming: 'Gaming & eSports',
    nicheHome: 'Home & Renovation',
    btnCalculate: 'Generate Value Report',
    emptyTitle: 'Commercial Feasibility Analysis',
    emptyDesc: 'Enter the profile metrics to project the current market value.',
    roiLabel: 'Suggested Rate Evaluation',
    rangeLabel: 'Suggested range:',
    audienceQuality: 'Audience Quality',
    metricER: 'Engagement Rate',
    investmentEfficiency: 'Investment Efficiency',
    metricCPM: 'Projected CPM',
    insightText: 'This valuation is based on the average CPM of the English-speaking market (2026).',
    currencySymbol: '$',
    numberLocale: 'en-US',
  },
};
