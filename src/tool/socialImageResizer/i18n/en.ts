import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'social-media-image-resizer';
const title = 'Social Media Image Resizer: Crop & Resize for Every Platform';
const description =
  'Resize and crop your photos for Instagram, TikTok, YouTube and more. Smart cropping with updated official dimensions for 2026.';

const faqData = [
  {
    question: 'Will image quality be lost when resizing?',
    answer:
      'No, we use high-quality smoothing algorithms. It is recommended to upload an original image with a resolution equal to or greater than the target format.',
  },
  {
    question: 'Is it safe to upload my photos here?',
    answer:
      'Completely. Processing is done locally in your browser using the Canvas API. Your photos are never sent to any server.',
  },
  {
    question: 'Which formats are supported?',
    answer:
      'We support JPG, PNG, WebP and AVIF for upload. Downloads are optimized as high-quality JPG for maximum compatibility.',
  },
];

const howToData = [
  {
    name: 'Upload your image',
    text: 'Drag your file or browse your device to start the process.',
  },
  {
    name: 'Choose the format',
    text: 'Select the social network and publication type you need from the side menu.',
  },
  {
    name: 'Adjust and download',
    text: 'Frame your photo by dragging it and use the zoom for a perfect crop. When done, click download.',
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

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References',
  bibliography: [
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Sprout Social: Social Media Image Sizes Guide 2026',
      url: 'https://sproutsocial.com/insights/social-media-image-sizes-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Social Media Image Resizer for Every Platform',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "In today's digital ecosystem, first impressions are visual. Each social network operates under specific algorithms that prioritize content natively adapted to its proportions. Our social media image resizer is not just a technical tool — it is your ally to ensure your message arrives without unwanted crops or quality loss.",
    },
    {
      type: 'paragraph',
      html: 'Whether you need to convert a landscape photo into a striking vertical for Instagram Stories or adapt a design for a complex YouTube banner, our utility uses a smart cropping system that lets you position and scale your image with precision directly in your browser.',
    },
    {
      type: 'title',
      text: 'Official Social Media Image Sizes 2026',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — Square Post', body: '1080 × 1080 px · Ratio 1:1' },
        { title: 'Instagram — Vertical Post', body: '1080 × 1350 px · Ratio 4:5' },
        { title: 'TikTok / Reels — Vertical', body: '1080 × 1920 px · Ratio 9:16' },
        { title: 'YouTube — Thumbnail', body: '1280 × 720 px · Ratio 16:9' },
        { title: 'YouTube — Channel Banner', body: '2560 × 1440 px · Ratio 16:9' },
        { title: 'X (Twitter) — Standard Post', body: '1200 × 675 px · Ratio 16:9' },
        { title: 'LinkedIn — Profile Cover', body: '1584 × 396 px · Ratio 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: 'The 1:1 square format remains a classic, but the 4:5 vertical takes up more screen space and generates up to 30% more engagement in the news feed.',
        },
        {
          title: 'Short Form Content',
          body: 'For TikTok and Reels, the standard is 9:16. This immersive format requires the focal point to be perfectly aligned to avoid being covered by the app UI.',
        },
        {
          title: 'Visual Engagement',
          body: 'From thumbnails to banners, every asset carries a specific weight in the click-through rate. Precise cropping ensures text and key elements are always readable.',
        },
        {
          title: 'Professional Branding',
          body: 'On professional networks like LinkedIn, sharpness is authority. Headers require specific ratios to avoid appearing pixelated on high-density screens.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Why Aspect Ratio Matters',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The aspect ratio is the proportional relationship between the width and height of an image. Ignoring it forces platforms to zoom in or add black bars, which penalizes aesthetics and organic reach.',
    },
    {
      type: 'list',
      items: [
        'Prevents texts or logos from being cut off by native app icons.',
        'Maintains optimal pixel density without distorting or stretching the original photo.',
        'Saves time by centralizing all official measurements in a single web tool.',
        'Improves load speed by generating files with the exact weight and dimensions.',
      ],
    },
    {
      type: 'tip',
      title: 'Composition Tip',
      html: "<p>When using our manual drag feature, try placing the main subject of your photo at one of the grid's intersection points. This creates more dynamic and professional compositions for your social networks.</p>",
    },
    {
      type: 'title',
      text: 'Steps for a Perfect Crop',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Select your format: Choose the platform and publication type from the side menu.',
        'Upload the image: Drag your file or use the file picker to import your photo.',
        'Adjust the frame: Drag the photo within the visible area and use zoom for precision.',
        'Instant export: Click download to get your image ready to publish.',
      ],
    },
    {
      type: 'title',
      text: 'Privacy and Local Processing',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Your privacy is absolute. This resizer processes images locally in your browser using the Canvas API. Your photos are never uploaded to any external server, guaranteeing complete security and instant processing speed.',
    },
    {
      type: 'title',
      text: 'Professional Optimization for Social Media',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Adapting your visual content professionally is a direct growth strategy. Our tool simplifies the workflow for creators and community managers, ensuring every post looks perfect on any device and platform.',
    },
  ],
  ui: {
    sidebarTitle: 'Social Formats',
    uploadTitle: 'Upload Image',
    uploadSubtitle: 'Drag your photo here or click to browse',
    btnReset: 'Reset',
    btnDownload: 'Download Image',
  },
};
