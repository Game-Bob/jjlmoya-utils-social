import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'reddit-text-formatter';
const title = 'Reddit Text Formatter - Cleaner and Markdown Fixer';
const description =
  'Advanced text cleaner for posting on Reddit. Fixes missing line breaks, removes multiple spaces and hidden characters that break Markdown.';

const faqData = [
  {
    question: 'Why does my text on Reddit lose its line breaks?',
    answer:
      'Reddit uses Markdown, which requires you to press double space at the end of a line before pressing Enter for a normal line break, or press Enter twice to create a new paragraph. Our tool handles this automatically by inserting double line breaks.',
  },
  {
    question: 'What are hidden or invisible characters?',
    answer:
      'When copying from complex word processors, zero-width formatting markers often get attached. These elements are invisible on normal web pages but can break the Markdown ecosystem.',
  },
  {
    question: 'Is it safe to use this text cleaner?',
    answer:
      'Completely safe. The script runs entirely on the client side (in your own browser). Your text is never sent to any server and no one else will ever have access to what you paste here.',
  },
  {
    question: 'Can I use this for Twitter or other networks?',
    answer:
      'Yes, in addition to fixing Reddit posts, removing multiple spaces and strange characters is useful for any publication on blogs, Twitter, old phpBB forums or any other social platform where you need clean, neutral text.',
  },
];

const howToData = [
  {
    name: 'Paste your text',
    text: 'Copy your text from Word, Google Docs or any source and paste it into the input field.',
  },
  {
    name: 'Choose the options',
    text: 'Toggle options on or off depending on what you need: fix paragraphs, remove spaces, or clean hidden characters.',
  },
  {
    name: 'Review the result',
    text: 'The clean text appears in real time in the output field, ready to publish.',
  },
  {
    name: 'Copy and post',
    text: 'Click "Copy Text" and paste it directly into Reddit or any forum.',
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

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References',
  bibliography: [
    {
      name: 'Reddit Help: Formatting text in posts and comments',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Reddit Markdown guide',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Ultimate Formatting Tool for Reddit and Web Forums',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Creating posts on Reddit or any platform that relies on Markdown can be frustrating. A common problem when copying and pasting text from complex word processors or web pages is that line breaks get altered. When you submit the content, it often becomes a solid, hard-to-read block, ignoring the original paragraph structure. Our formatting tool solves this problem at its root.',
    },
    {
      type: 'title',
      text: 'How the Reddit Text Cleaner Works',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The processing engine runs multiple filters on your text in real time. First, it addresses line breaks. Reddit requires a specific format where a paragraph break needs two new lines in the Markdown source code. The cleaner analyzes your text and automatically converts single line breaks into double breaks, keeping existing paragraphs intact to avoid generating excessive spacing.',
    },
    {
      type: 'paragraph',
      html: 'Second, the tool removes invisible characters and multiple spaces. When copying text from websites, it is common to drag along zero-width characters that break formatting or cause strange behavior in forums. The cleaner purges these intrusive web elements and normalizes repeated spaces into a single clean space. Optionally, you can strip and remove all raw hyperlinks from your content to post completely neutral text.',
    },
    {
      type: 'title',
      text: 'Benefits of Using a Specialized Text Cleaner',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Optimized Readability:</strong> Ensures your readers on Reddit see properly structured text instead of an intimidating wall of words.',
        '<strong>Time Saving:</strong> Forget pressing Enter hundreds of times to fix broken formatting. Paste your content and copy it ready in under a second.',
        '<strong>Metadata and Web Junk Removal:</strong> Protects your post from weird styles or breaks caused by zero-width spaces.',
        '<strong>High Privacy:</strong> All processing is client-side. The text never leaves your browser or gets stored on external servers.',
      ],
    },
    {
      type: 'title',
      text: 'The Problem with Word Processors and Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Applications like Microsoft Word or Google Docs add an invisible layer of rich formatting over their text. When you copy and paste that content directly into the basic editor or Reddit\'s Markdown mode, the rich formatting disappears and what remains is often a structureless amalgam. Reddit uses a fairly strict variant of Markdown. If you are not familiar with Reddit\'s syntax or simply want a smoother process when transferring essays or stories to the forum, cleaning the text here first prevents your post from receiving downvotes simply because it is impossible to read comfortably.',
    },
    {
      type: 'title',
      text: 'Best Practices for Posting in Forums',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Correct formatting is vital for generating discussion and maintaining community attention. Posts with very long lines or nonexistent paragraphs are often abandoned after the first few sentences. Use this cleaning tool to lay the structural foundations. Then, add formatting like bold and italics strategically within the Reddit editor itself to highlight key ideas. Always review the preview and take advantage of structured lists to enumerate important points or detailed guides.',
    },
    {
      type: 'title',
      text: 'Transformation Example',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Before and after the formatter',
      html: '<p><strong>Original pasted text:</strong></p><pre>Hello this is the first line\nand this was supposed to be the second\nbut on Reddit everything runs together when you paste it.</pre><p><strong>Formatted text:</strong></p><pre>Hello this is the first line\n\nand this was supposed to be the second\n\nbut on Reddit everything runs together when you paste it.</pre>',
    },
    {
      type: 'title',
      text: 'Frequently Asked Questions about the Reddit Text Formatter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Finding the right answers about how to interact with Reddit's editorial rules is not always obvious. Check the FAQ section where we address the main questions about valid formats and how to avoid being penalized for massive walls of text.",
    },
  ],
  ui: {
    labelInput: 'Original Text',
    placeholderInput: 'Paste your original text here...',
    labelOptions: 'Formatting Options',
    optionParagraphs: 'Fix Reddit-style Paragraphs',
    optionSpaces: 'Remove multiple spaces',
    optionInvisible: 'Clean hidden web characters',
    optionLinks: 'Extract URLs (Text only)',
    labelOutput: 'Clean Text',
    placeholderOutput: 'The cleaning result will appear here...',
    btnCopy: 'Copy Text',
    btnCopied: 'Copied',
  },
};
