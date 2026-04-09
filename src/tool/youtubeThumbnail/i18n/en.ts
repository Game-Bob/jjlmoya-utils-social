import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'youtube-thumbnail-extractor';
const title = 'YouTube Thumbnail Extractor (HD)';
const description =
  'Extract and download the original thumbnail image from any YouTube video at maximum resolution and without watermarks using just the URL.';

const faqData = [
  {
    question: 'At what resolution are thumbnails extracted?',
    answer:
      "The tool always tries to fetch the image at 'MaxRes' resolution (1280x720 or 1920x1080), which is the original quality uploaded by the video creator. If the author did not upload an HD thumbnail, it will automatically show the next highest available resolution.",
  },
  {
    question: 'What types of links are supported?',
    answer:
      'It supports traditional youtube.com/watch URLs, short youtu.be links, mobile links, and even YouTube Shorts URLs transparently.',
  },
  {
    question: 'Is it legal to download YouTube thumbnails?',
    answer:
      'Yes, downloading is completely legal for personal use, design, parodies and inspiration (Fair Use). Be careful if you plan to use copyright-protected thumbnails for purely commercial purposes — in those cases it is important to check the video licence.',
  },
  {
    question: 'Is there a daily usage limit?',
    answer:
      'There are no monthly or daily limits. Because this software operates client-side by resolving the URL pattern internally in your browser, we do not interact with traditional restrictive APIs.',
  },
];

const howToData = [
  {
    name: 'Copy the video URL',
    text: 'Go to YouTube and copy the video link from the browser address bar or the share button.',
  },
  {
    name: 'Paste the link',
    text: 'Enter the URL into the extractor field or use the paste-from-clipboard button.',
  },
  {
    name: 'Select the quality',
    text: 'The tool will display all available resolutions, from maximum quality (1080p) down to the lowest.',
  },
  {
    name: 'Download the image',
    text: 'Click the download button to save the thumbnail to your device.',
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

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Documentation & References',
  bibliography: [
    {
      name: 'YouTube Help: Add a custom video thumbnail',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube Creator Academy: Make great thumbnails',
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
      text: 'Download YouTube Thumbnails in HD for Free',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'If you need to <strong>download the thumbnail of a YouTube video</strong> at its original size or maximum quality (Full HD or 4K), this free tool is the fastest solution. You can get the cover image from any channel to find inspiration, create your own designs or use it in presentations.',
    },
    {
      type: 'tip',
      title: 'Extract Cover Images Without Software',
      html: '<p>No need to install software or register. Just copy and paste the video link and you can <strong>save the YouTube thumbnail</strong> directly to your computer or phone.</p>',
    },
    {
      type: 'title',
      text: 'How to Get the Thumbnail of a YouTube Video?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The process to <strong>grab the image from a YouTube video</strong> is very straightforward. Follow these steps to get the image in seconds:',
    },
    {
      type: 'list',
      items: [
        '<strong>1. Copy the URL:</strong> Go to YouTube and copy the video link (either from the browser address bar or the share button).',
        '<strong>2. Paste the link:</strong> Enter the URL into the search field of our thumbnail extractor.',
        '<strong>3. Select the quality:</strong> We will show all available resolutions, from maximum quality (1080p) down to the lowest (360p).',
        '<strong>4. Download the image:</strong> Click the download button to save the <i>thumbnail</i> to your device.',
      ],
    },
    {
      type: 'title',
      text: 'Supported Formats and Resolutions',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Downloading YouTube video covers has never been easier. The tool automatically fetches the best possible image (known as <strong>maxresdefault</strong>), which are usually designs crafted in Photoshop by YouTubers. If the creator did not upload an HD image, you will get the next best option (<strong>hqdefault</strong> or <strong>mqdefault</strong>).',
    },
    {
      type: 'paragraph',
      html: 'This utility is perfect for <i>Community Managers</i>, graphic designers, content creators, meme makers, or anyone who needs to <strong>download a video cover image</strong> for their projects. It is also compatible with <strong>YouTube Shorts</strong>, so you can grab their thumbnails in the same way.',
    },
    {
      type: 'title',
      text: 'Professional Uses for YouTube Thumbnails',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'YouTube thumbnails are high-value visual assets. They represent hours of design work, A/B testing and CTR optimisation by creators. Knowing how to access and download them opens up a wide range of professional possibilities.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Content Creators',
          html: '<p>Analyse the thumbnails of viral videos in your niche to understand which visual elements drive the most clicks: typography, dominant colours, use of faces or text.</p><ul><li><strong>Visual benchmarking:</strong> Compare your thumbnails against the leaders in your sector.</li><li><strong>Design iteration:</strong> Download thumbnails as reference material in Photoshop or Canva.</li><li><strong>Inspiration archive:</strong> Build a library of high-converting thumbnails.</li></ul>',
        },
        {
          type: 'card',
          title: 'Designers and Marketers',
          html: '<p>For a graphic designer or <i>social media manager</i>, quick access to YouTube thumbnails is essential for presentations, client proposals and visual audits.</p><ul><li><strong>Client presentations:</strong> Include real competitor screenshots in your proposals.</li><li><strong>Brand audits:</strong> Evaluate the visual consistency of a YouTube channel.</li><li><strong>Moodboards:</strong> Collect high-quality visual references without blurry screenshots.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Compatibility with YouTube Shorts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The extractor works perfectly with <strong>YouTube Shorts</strong>. Shorts have their own vertical (9:16) thumbnail format that is generated automatically from the video. This tool recognises Shorts URLs (<code>youtube.com/shorts/ID</code>) and extracts the best available thumbnail in exactly the same way as with standard videos.',
    },
    {
      type: 'tip',
      title: 'Privacy Guaranteed',
      html: '<p>All extraction happens in your browser. No URLs or data are sent to any external server.</p>',
    },
  ],
  ui: {
    urlPlaceholder: 'Paste the YouTube link here...',
    pasteAriaLabel: 'Paste from clipboard',
    helperText: 'Supported formats: youtube.com, youtu.be, shorts.',
    ribbonLabel: 'Maximum Quality',
    downloadBtn: 'Download at Maximum Resolution',
    qualityMedium: 'Medium Quality',
    qualityStandard: 'Standard Quality',
    qualityLow: 'Low Quality',
    viewImage: 'View Image',
    errorInvalid: 'Invalid YouTube URL. Please check and try again.',
    imgAlt: 'YouTube HD Thumbnail',
  },
};
