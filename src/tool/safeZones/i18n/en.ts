import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'social-safe-zones';
const title = 'Social Safe Zones: Video Simulator for TikTok, Reels & Shorts';
const description =
  'Preview your images and videos with the real social media interface. Ensure your content is always visible and avoid accidental cropping.';

const faqData = [
  {
    question: "What are 'Safe Zones' on social media?",
    answer:
      "They are the areas of the screen where content is visible without risk of being covered by interface elements, such as the username, description, interaction buttons (like, share) or automatic cropping applied by some devices.",
  },
  {
    question: 'Why does my TikTok video look cropped top and bottom?',
    answer:
      'TikTok uses a 9:16 aspect ratio. If your video is wider, the app will zoom to fill the screen, causing cropping. Also, the bottom interface covers part of the video, so important elements should be centered.',
  },
  {
    question: 'Is the safe zone the same for Instagram Reels and YouTube Shorts?',
    answer:
      'They are very similar but not identical. YouTube Shorts buttons are positioned differently from Reels. Our tool lets you switch between platforms to verify your design across all of them.',
  },
  {
    question: 'What happens if I put text in the bottom right corner?',
    answer:
      'It will likely be invisible or very hard to read, as that is where the profile, heart and comment icons are located. Ideally, keep texts and faces in the central-upper area (Safe Zone).',
  },
];

const howToData = [
  {
    name: 'Load your image or video',
    text: 'Upload the file you want to preview. Processing is local and private — nothing is uploaded to the internet.',
  },
  {
    name: 'Select the platform',
    text: 'Choose between TikTok, Instagram Reels or YouTube Shorts to activate the corresponding interface overlay.',
  },
  {
    name: 'Check readability',
    text: "Verify whether texts, subtitles or key brand elements are covered by the social network's icons.",
  },
  {
    name: 'Adjust and export',
    text: "If something is hidden, move the element in your original video editor and test again until it fits perfectly.",
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

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Official Platform Documentation',
  bibliography: [
    {
      name: 'TikTok Creator Portal: Video optimization and safe zones',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: 'Instagram Business: Best practices for Reels',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: 'YouTube Help: Create YouTube Shorts',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: 'Meta for Creators: Safe zones and aspect ratios for video',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Master Guide to Safe Zones: Optimize your Reels, TikToks and Shorts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In the saturated world of vertical content, the first impression is technical. The biggest mistake creators make is ignoring how their <strong>video or image</strong> interacts with the platform\'s native interface. Each social network (TikTok, Instagram Reels and YouTube Shorts) overlays layers of buttons, text and profiles that can nullify the visual impact of your composition.',
    },
    {
      type: 'paragraph',
      html: 'This tool lets you load your media files and preview exactly which parts of your frame will be consumed by the interface. It\'s not just about <strong>subtitles</strong>; it\'s about ensuring that the faces, products or main actions in your video aren\'t buried under a "Like" button or a lengthy description.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'TikTok: The most invasive interface',
          html: '<p>TikTok has the densest interface. On the right side, there is a column of icons occupying approximately 15% of the width. At the bottom, the description can extend to 4 or 5 lines, covering nearly a third of the screen from below.</p><ul><li><strong>Bottom margin:</strong> Leave the last 250px free to avoid the description text and username.</li><li><strong>Right margin:</strong> Avoid placing text within 100px of the right edge.</li><li><strong>Top:</strong> The "Following" and "For You" buttons occupy the upper central strip.</li></ul>',
        },
        {
          type: 'card',
          title: 'IG Reels: The feed factor',
          html: '<p>Unlike TikTok, Instagram Reels crops the video to a 4:5 format when viewed from the main feed. This means that if you place vital information in the top or bottom 15% of your 9:16 video, it will disappear in the feed.</p><ul><li><strong>The 4:5 rule:</strong> Keep titles and key elements within the central zone for feed visibility.</li><li><strong>Interface:</strong> Reels icons are more subtle than TikTok\'s, allowing a bit more lateral margin.</li><li><strong>Audio button:</strong> Located bottom right, it usually covers much less than TikTok\'s spinning disc.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts: Watch the right side',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube Shorts has an asymmetric interface. The subscribe button is very prominent and solid-colored (usually black or white), creating an important visual blind spot in the bottom right.',
    },
    {
      type: 'list',
      items: [
        '<strong>Right margin:</strong> Avoid placing text or important elements in the bottom-right 20%.',
        '<strong>Bottom margin:</strong> Leave the last 150px free to avoid the description text and username.',
        '<strong>Top:</strong> The "Subscribe" and "More" buttons occupy the upper central strip.',
      ],
    },
    {
      type: 'title',
      text: 'Critical Questions on Vertical Design',
      level: 2,
    },
    {
      type: 'title',
      text: 'Where to place key elements (faces, text, product)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The "Golden Zone" for the main action is the central third of the video. If you are filming a person, make sure their eyes and mouth are within this zone. Important graphic elements should be slightly shifted upward from the geometric center to avoid the bottom description.',
    },
    {
      type: 'title',
      text: 'Why does my video look blurry once uploaded?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'It is often not the quality but the scaling. Always record in 1080x1920 at 30 or 60 fps. Avoid 4K if you are applying many heavy effects, as platforms aggressively compress large files.',
    },
    {
      type: 'title',
      text: 'What about phone bezels?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Remember that modern phones have notches or camera holes on screen. This tool includes a top safety margin so your content does not conflict with the clock or system icons (battery, signal).',
    },
    {
      type: 'title',
      text: 'Anatomy of a Viral Video',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Designing for social media is not just aesthetics — it is <strong>usability</strong>. If a user has to struggle to read text because the platform\'s icons are covering it, they will simply swipe to the next video. Retention (Watch Time) drops sharply when there is visual friction.',
    },
    {
      type: 'paragraph',
      html: 'On YouTube Shorts, for example, the interface is asymmetric. The subscribe button is very prominent and solid-colored (usually black or white), creating an important visual blind spot. By using this simulator, you can adjust the opacity to understand how your color palette interacts with the native UI colors.',
    },
    {
      type: 'tip',
      title: 'Creative Quality Control Tool',
      html: '<p>Designed for creators who leave nothing to chance.</p>',
    },
  ],
  ui: {
    labelConfig: 'Settings',
    labelPlatform: 'Target Platform',
    labelUpload: 'Upload Content',
    uploadPrompt: 'Select image or video',
    uploadLink: 'Or use an example',
    loadContent: 'Load your content',
    labelOpacity: 'Interface Relief',
    labelMask: 'Grey Out Critical Zones',
    labelGrid: 'Rule of Thirds',
    btnReset: 'Reset Canvas',
    bannerTiktok: 'Simulating TikTok 9:16',
    bannerReels: 'Simulating Instagram Reels 9:16',
    bannerShorts: 'Simulating YouTube Shorts 9:16',
    nameTiktok: 'TikTok',
    nameReels: 'IG Reels',
    nameShorts: 'YT Shorts',
    ttFollowing: 'Following',
    ttForYou: 'For You',
    ttDescription: 'Real interface design for content creators. #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - Original Sound',
    ttNavHome: 'Home',
    ttNavFriends: 'Friends',
    ttNavInbox: 'Inbox',
    ttNavProfile: 'Profile',
    reelsFollow: 'Follow',
    reelsDescription: 'This interface is identical to the real one. #reels #ux #simulator',
    reelsAudio: 'Trending Music - Original Audio',
    shortsSubscribe: 'SUBSCRIBE',
    shortsDislike: 'Dislike',
    shortsShare: 'Share',
    shortsRemix: 'Remix',
    shortsDescription: 'Simulating real interfaces for Shorts! #youtube #shorts',
  },
};
