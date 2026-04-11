import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'youtube-thumbnail-previewer';
const title = 'YouTube Thumbnail Previewer Online: Boost Your CTR for Free';
const description =
  'Upload your thumbnail and see how it looks in the real YouTube feed on mobile and desktop. Dark and light mode simulator to optimize clicks instantly.';

const faqData = [
  {
    question: 'Why is it important to test YouTube thumbnails?',
    answer:
      'Most users watch YouTube on mobile devices. A thumbnail that looks great on your monitor can be unreadable on a small screen. Testing it in a simulator ensures the text is clear and the main subject stands out at any size.',
  },
  {
    question: 'Do I need to sign up to use this Previewer?',
    answer:
      'No. Our tool is 100% free and works directly in your browser. You do not need to create an account or provide your email to optimize your thumbnails.',
  },
  {
    question: 'Are my designs uploaded to your server?',
    answer:
      'Absolutely not. Privacy is our top priority. When you select a file, it is loaded locally in your browser memory via a temporary URL. No one except you can see the design you are testing.',
  },
  {
    question: 'How does this tool help improve my CTR?',
    answer:
      'CTR (Click-Through Rate) is the percentage of people who click when they see your thumbnail. By simulating the real environment (dark vs light background, mobile vs desktop), you can fix contrast and composition issues before publishing, increasing your clicks.',
  },
  {
    question: "Does it work with YouTube's official Dark Mode?",
    answer:
      'Yes. We have included a theme selector (Light and Dark) that exactly mimics the hex colors used by the official YouTube app in both modes.',
  },
];

const howToData = [
  {
    name: 'Upload your design',
    text: 'Click the upload area or drag your image file (PNG, JPG or WebP) directly into the tool.',
  },
  {
    name: 'Set the context',
    text: 'Type your video title and channel name so the simulation is as realistic as possible against the real feed.',
  },
  {
    name: 'Switch device',
    text: "Toggle between 'Desktop' and 'Mobile' view to verify readability on screens of different sizes.",
  },
  {
    name: 'Test the contrast',
    text: "Activate the 'Dark' theme to check if the colors stand out correctly against the black YouTube background.",
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

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References',
  bibliography: [
    {
      name: 'YouTube Help: Create custom video thumbnails',
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
      text: 'YouTube Thumbnail Previewer: Master Your Channel CTR',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "In the YouTube ecosystem, the thumbnail is the gateway to your content. You could have the best video in the world — Hollywood-level editing, an Oscar-worthy script — but if no one clicks, your work will be invisible to the algorithm. This is where <strong>CTR (Click-Through Rate)</strong> comes in, and the thumbnail is the determining factor.",
    },
    {
      type: 'title',
      text: 'Why You Need to Test Thumbnails Before Uploading',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Real Preview:</strong> See your thumbnail exactly as it will appear in the YouTube feed.',
        '<strong>Dark and Light Mode:</strong> Ensure colors pop under any user configuration.',
        '<strong>Device Simulator:</strong> Check text readability on both monitors and small mobile screens.',
        '<strong>CTR Optimization:</strong> Compare your design against the native interface to maximize clicks.',
        '<strong>No Sign-up Required:</strong> Upload your image and test it instantly without creating accounts.',
        '<strong>Privacy Guaranteed:</strong> Your designs are processed locally and never uploaded to servers.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Many creators make the mistake of designing thumbnails on large monitors, viewing them full screen in their favorite editors. The problem is that the end user rarely sees them that way. Most consume content on a mobile device while doing infinite scroll, or in a corner of the monitor in dark mode. Our <strong>YouTube Thumbnail Previewer</strong> lets you break that "designer illusion" and see the surgical reality of the feed.',
    },
    {
      type: 'title',
      text: 'Technical Metrics and Performance',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0.2s', body: 'Response Time' },
        { title: '4K', body: 'Maximum Resolution' },
        { title: '100%', body: 'Local Privacy' },
        { title: 'HD', body: 'Native Quality' },
      ],
    },
    {
      type: 'title',
      text: 'The Psychology of the Click: Why Thumbnails Fail',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The human brain processes images thousands of times faster than text. Yet on YouTube, the competition is brutal. Your thumbnail must not only be "pretty" — it must be <strong>readable</strong> and have <strong>contrast</strong>.',
    },
    {
      type: 'paragraph',
      html: 'A common mistake is using colors that blend with the YouTube background. If you use dark greys and your viewer is in dark mode, your video will simply disappear from their peripheral vision. Using this tester, you can switch between themes and make sure your design "pops" in any scenario.',
    },
    {
      type: 'title',
      text: 'Head-to-Head Comparison: Design vs. Reality',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Is it worth spending 30 seconds testing the thumbnail? The answer is a resounding YES. An optimized thumbnail can double your views in the first 24 hours, signaling to YouTube AI that your content has "hook".',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Designing in Photoshop / Canva',
          body: 'False sense of real size · Ignores contrast with the app background · Text looks readable but may not be · You miss UI elements (duration badge, avatars)',
        },
        {
          title: 'YouTube Thumbnail Previewer',
          body: 'Real view in the Home feed · Contrast verified in Dark vs Light Mode · Text readability guaranteed on mobile · Title and channel name simulation',
        },
      ],
    },
    {
      type: 'title',
      text: 'Checklist for a Thumbnail with CTR Above 10%',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Before exporting your final design, make sure to go through this checklist using our professional simulator:',
    },
    {
      type: 'list',
      items: [
        'Is the text readable on a small mobile screen?',
        'Is there enough contrast between the background and the main subject?',
        'Does the thumbnail look good against the black background of Dark Mode?',
        'Does the video title cover vital information in the image?',
        'Does the video duration badge (the black box) hide anything important?',
        'Does the face or main object convey the desired emotion at reduced size?',
      ],
    },
    {
      type: 'title',
      text: 'Anatomy of a High-Impact Thumbnail',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Based on analysis of the biggest channels in the world, a winning thumbnail usually follows this structural pattern:',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Main Subject',
          body: 'Primary focus · Use sharp cutouts with a slight border or extra saturation.',
        },
        {
          title: 'Text (Max 3 words)',
          body: 'Instant context · Use bold Sans Serif fonts and complementary colors.',
        },
        {
          title: 'Blurred Background',
          body: 'Plane separation · Adds depth so the main subject "jumps" off the screen.',
        },
        {
          title: 'Duration Space',
          body: 'Avoid mistakes · Do not place faces or text in the bottom-right corner.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'The Dead Zone Trick',
      html: '<p>YouTube always places a black box with the video duration in the bottom-right corner of the thumbnail. Thousands of creators put vital elements in that zone, only to find out the App covers them. Our tool simulates this box so you never cover your best shot.</p>',
    },
    {
      type: 'title',
      text: 'Advantages and Limitations of the Tool',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Ultra fast and reactive interface',
          body: 'Limitation: Does not allow image editing (use Canva/PS)',
        },
        {
          title: 'Exact App and Web mockups',
          body: 'Limitation: Does not simulate Pre-roll ads',
        },
        {
          title: 'Free and without intrusive ads',
          body: 'Limitation: Only supports local files',
        },
      ],
    },
    {
      type: 'title',
      text: "Using the 'Split' Mode (Direct Comparison)",
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'This is the star feature. By activating Split mode, you will see your thumbnail through the lens of Light Mode and Dark Mode simultaneously. It is the definitive way to check whether your color palette is universal or needs brightness and contrast adjustments.',
    },
    {
      type: 'title',
      text: 'Privacy: Your Designs Are Not Uploaded to the Cloud',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'We know your thumbnails are part of your secret strategy before a launch. That is why we designed this utility to work exclusively in your browser engine. <strong>Nothing is uploaded to the internet</strong>. The file you select is loaded via a local temporary URL that disappears when you close the tab. Your intellectual property is 100% under your control.',
    },
    {
      type: 'title',
      text: 'Conclusion: The Perfect Pixel Guaranteed',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Stop guessing and start validating. JJLMoya's <strong>YouTube Thumbnail Previewer</strong> is the free tool that separates amateur creators from professional content makers. A small adjustment in font size or subject position can be the difference between a video that goes unnoticed and a viral success.",
    },
    {
      type: 'paragraph',
      html: 'Start optimizing your channel now and give your videos the click-through rate they deserve!',
    },
  ],
  ui: {
    dropFeedTitle: 'Drop Your Thumbnail',
    dropFeedSub: 'PNG, JPG or WebP · Multiple images',
    dropAvatarTitle: 'Drop Your Avatar',
    dropAvatarSub: 'Channel profile picture',
    labelTitle: 'Video title',
    labelChannel: 'Channel name',
    defaultTitle: 'Your Video Title Here',
    defaultChannel: 'Channel Name',
    btnDesktop: 'Desktop',
    btnMobile: 'Mobile',
    btnClear: 'Clear',
    labelLight: 'Light',
    labelDark: 'Dark',
    views0: '1.2M views · 1 hour ago',
    views1: '45 minutes ago',
    views2: '250K views · 1 day ago',
    views3: '3.1M views · 1 week ago',
  },
};
