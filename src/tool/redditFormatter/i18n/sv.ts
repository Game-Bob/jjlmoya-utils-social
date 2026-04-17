import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'reddit-text-formatterare';
const title = 'Reddit Text Formatter: Rensare och Markdown fixare';
const description =
  'Avancerad textrensare för inlägg på Reddit. Fixar saknade radbrytningar, tar bort multipla mellanslag och dolda tecken som förstör Markdown.';

const faqData = [
  {
    question: 'Varför försvinner mina radbrytningar i texten på Reddit?',
    answer:
      'Reddit använder Markdown, vilket kräver att du trycker dubbelt mellanslag i slutet av en rad innan du trycker på Enter för en normal radbrytning, eller trycker på Enter två gånger för att skapa ett nytt stycke. Vårt verktyg hanterar detta automatiskt genom att infoga dubbla radbrytningar.',
  },
  {
    question: 'Vad är dolda eller osynliga tecken?',
    answer:
      'När du kopierar från komplexa ordbehandlingsprogram följer ofta formateringsmarkörer med nollbredd med. Dessa element är osynliga på vanliga webbsidor men kan förstöra Markdown-ekosystemet.',
  },
  {
    question: 'Är det säkert att använda denna textrensare?',
    answer:
      'Helt säkert. Skriptet körs helt på klientsidan (i din egen webbläsare). Din text skickas aldrig till någon server och ingen annan kommer någonsin att ha tillgång till det du klistrar in här.',
  },
  {
    question: 'Kan jag använda detta för Twitter eller andra nätverk?',
    answer:
      'Ja, förutom att fixa Reddit-inlägg är borttagning av multipla mellanslag och märkliga tecken användbart för alla publiceringar på bloggar, Twitter, gamla phpBB-forum eller någon annan social plattform där du behöver ren, neutral text.',
  },
];

const howToData = [
  {
    name: 'Klistra in din text',
    text: 'Kopiera din text från Word, Google Docs eller valfri källa och klistra in den i inmatningsfältet.',
  },
  {
    name: 'Välj alternativ',
    text: 'Slå på eller av alternativ beroende på vad du behöver: fixa stycken, ta bort mellanslag eller rensa dolda tecken.',
  },
  {
    name: 'Granska resultatet',
    text: 'Den rena texten visas i realtid i utmatningsfältet, redo att publiceras.',
  },
  {
    name: 'Kopiera och posta',
    text: 'Klicka på "Kopiera text" och klistra in den direkt på Reddit eller valfritt forum.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    {
      name: 'Reddit Help: Formatera text i inlägg och kommentarer',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Reddit Markdown-guide',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Det ultimata formateringsverktyget för Reddit och webbforum',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att skapa inlägg på Reddit eller någon plattform som förlitar sig på Markdown kan vara frustrerande. Ett vanligt problem när man kopierar och klistrar in text från komplexa ordbehandlingsprogram eller webbsidor är att radbrytningar ändras. När du skickar in innehållet blir det ofta ett massivt, svårläst block som ignorerar den ursprungliga styckestrukturen. Vårt formateringsverktyg löser detta problem vid källan.',
    },
    {
      type: 'title',
      text: 'Hur Reddit textrensaren fungerar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bearbetningsmotorn kör flera filter på din text i realtid. Först hanterar den radbrytningar. Reddit kräver ett specifikt format där ett styckebryt kräver två nya rader i Markdown-källkoden. Rensaren analyserar din text och konverterar automatiskt enkla radbrytningar till dubbla brytningar, samtidigt som befintliga stycken hålls intakta för att undvika överdrivet avstånd.',
    },
    {
      type: 'paragraph',
      html: 'För det andra tar verktyget bort osynliga tecken och multipla mellanslag. När man kopierar text från webbplatser är det vanligt att dra med sig nollbreddstecken som förstör formateringen eller orsakar märkligt beteende i forum. Rensaren tar bort dessa störande webbelement och normaliserar upprepade mellanslag till ett enda rent mellanslag. Som tillval kan du rensa bort alla råa hyperlänkar från ditt innehåll för att posta helt neutral text.',
    },
    {
      type: 'title',
      text: 'Fördelar med att använda en specialiserad textrensare',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Optimerad läsbarhet:</strong> Säkerställer att dina läsare på Reddit ser korrekt strukturerad text istället för en avskräckande vägg av ord.',
        '<strong>Tidsbesparing:</strong> Glöm att trycka på Enter hundratals gånger för att fixa trasig formatering. Klistra in ditt innehåll och kopiera det klart på under en sekund.',
        '<strong>Borttagning av metadata och webbskräp:</strong> Skyddar ditt inlägg från konstiga stilar eller brytningar orsakade av nollbreddsmellanslag.',
        '<strong>Hög integritet:</strong> All bearbetning sker på klientsidan. Texten lämnar aldrig din webbläsare och lagras inte på externa servrar.',
      ],
    },
    {
      type: 'title',
      text: 'Problemet med ordbehandlingsprogram och Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Applikationer som Microsoft Word eller Google Docs lägger till ett osynligt lager av rik formatering över sin text. När du kopierar och klistrar in det innehållet direkt i den enkla redigeraren eller Reddits Markdown-läge, försvinner den rika formateringen och det som återstår är ofta en strukturlös blandning. Reddit använder en ganska strikt variant av Markdown. Om du inte är bekant med Reddits syntax eller helt enkelt vill ha en smidigare process när du överför essäer eller berättelser till forumet, förhindrar rensning av texten här först att ditt inlägg får nedröster bara för att det är omöjligt att läsa bekvämt.',
    },
    {
      type: 'title',
      text: 'Bästa praxis för inlägg i forum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Korrekt formatering är avgörande för att skapa diskussion och behålla communityns uppmärksamhet. Inlägg med mycket långa rader eller icke-existerande stycken överges ofta efter de första meningarna. Använd detta rensningsverktyg för att lägga den strukturella grunden. Lägg sedan till formatering som fetstil och kursiv stil strategiskt i själva Reddit-redigeraren för att lyfta fram nyckelidéer. Granska alltid förhandsgranskningen och utnyttja strukturerade listor för att räkna upp viktiga punkter eller detaljerade guider.',
    },
    {
      type: 'title',
      text: 'Exempel på transformation',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Före och efter formatteraren',
      html: '<p><strong>Ursprunglig inklistrad text:</strong></p><pre>Hej det här är första raden\noch det här var tänkt att vara den andra\nmen på Reddit flyter allt ihop när man klistrar in det.</pre><p><strong>Formaterad text:</strong></p><pre>Hej det här är första raden\n\noch det här var tänkt att vara den andra\n\nmen på Reddit flyter allt ihop när man klistrar in det.</pre>',
    },
    {
      type: 'title',
      text: 'Vanliga frågor om Reddit Text Formatter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Att hitta rätt svar på hur man interagerar med Reddits redaktionella regler är inte alltid självklart. Kolla in FAQ-sektionen där vi tar upp de viktigaste frågorna om giltiga format och hur man undviker att straffas för massiva textväggar.',
    },
  ],
  ui: {
    labelInput: 'Originaltext',
    placeholderInput: 'Klistra in din originaltext här...',
    labelOptions: 'Formateringsalternativ',
    optionParagraphs: 'Fixa stycken i Reddit-stil',
    optionSpaces: 'Ta bort multipla mellanslag',
    optionInvisible: 'Rensa dolda webbtecken',
    optionLinks: 'Extrahera URL:er (endast text)',
    labelOutput: 'Ren text',
    placeholderOutput: 'Resultatet av rensningen kommer att visas här...',
    btnCopy: 'Kopiera text',
    btnCopied: 'Kopierad',
  },
};
