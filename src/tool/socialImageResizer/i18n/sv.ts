import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'andra-storlek-bilder-sociala-medier';
const title = 'Social Media Image Resizer: Beskär & Ändra storlek för varje plattform';
const description =
  'Ändra storlek och beskär dina foton för Instagram, TikTok, YouTube och mer. Smart beskärning med uppdaterade officiella mått för 2026.';

const faqData = [
  {
    question: 'Kommer bildkvaliteten att försämras vid storleksändring?',
    answer:
      'Nej, vi använder utjämningsalgoritmer av hög kvalitet. Det rekommenderas att ladda upp en originalbild med en upplösning som är lika med eller större än målformatet.',
  },
  {
    question: 'Är det säkert att ladda upp mina foton här?',
    answer:
      'Helt säkert. Bearbetningen sker lokalt i din webbläsare med hjälp av Canvas API. Dina bilder skickas aldrig till någon server.',
  },
  {
    question: 'Vilka format stöds?',
    answer:
      'Vi stödjer uppladdning av JPG, PNG, WebP och AVIF. Nedladdningar optimeras som högkvalitativa JPG-filer för maximal kompatibilitet.',
  },
];

const howToData = [
  {
    name: 'Ladda upp din bild',
    text: 'Dra din fil eller sök på din enhet för att starta processen.',
  },
  {
    name: 'Välj format',
    text: 'Välj den sociala nätverkstjänst och typ av publicering du behöver från sidomenyn.',
  },
  {
    name: 'Justera och ladda ner',
    text: 'Rama in ditt foto genom att dra det och använd zoom för en perfekt beskärning. När du är klar klickar du på ladda ner.',
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

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Sprout Social: Guide för bildstorlekar på sociala medier 2026',
      url: 'https://sproutsocial.com/insights/social-media-image-sizes-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Social Media Image Resizer för varje plattform',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I dagens digitala ekosystem är det första intrycket visuellt. Varje socialt nätverk arbetar under specifika algoritmer som prioriterar innehåll som är inbyggt anpassat till dess proportioner. Vår bildstorleksändrare för sociala medier är inte bara ett tekniskt verktyg – det är din partner för att säkerställa att ditt budskap når fram utan oönskad beskärning eller kvalitetsförlust.',
    },
    {
      type: 'paragraph',
      html: 'Oavsett om du behöver konvertera ett landskapsfoto till ett slående vertikalt format för Instagram Stories eller anpassa en design för en komplex YouTube-banner, använder vårt verktyg ett smart beskärningssystem som låter dig placera och skala din bild med precision direkt i din webbläsare.',
    },
    {
      type: 'title',
      text: 'Officiella bildstorlekar för sociala medier 2026',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — Kvadratiskt inlägg', body: '1080 × 1080 px · Ratio 1:1' },
        { title: 'Instagram — Vertikalt inlägg', body: '1080 × 1350 px · Ratio 4:5' },
        { title: 'TikTok / Reels — Vertikalt', body: '1080 × 1920 px · Ratio 9:16' },
        { title: 'YouTube — Miniatyrbild', body: '1280 × 720 px · Ratio 16:9' },
        { title: 'YouTube — Kanalbanner', body: '2560 × 1440 px · Ratio 16:9' },
        { title: 'X (Twitter) — Standardinlägg', body: '1200 × 675 px · Ratio 16:9' },
        { title: 'LinkedIn — Profilomslag', body: '1584 × 396 px · Ratio 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: 'Det kvadratiska 1:1-formatet förblir en klassiker, men det vertikala 4:5-formatet tar upp mer skärmyta och genererar upp till 30 % mer engagemang i nyhetsflödet.',
        },
        {
          title: 'Short Form innehåll',
          body: 'För TikTok och Reels är standarden 9:16. Detta uppslukande format kräver att motivet är perfekt centrerat för att undvika att täckas av appens gränssnitt.',
        },
        {
          title: 'Visuellt engagemang',
          body: 'Från miniatyrbilder till banners, varje bild spelar en viktig roll för klickfrekvensen. Exakt beskärning säkerställer att text och nyckelelement alltid är läsbara.',
        },
        {
          title: 'Professionell profilering',
          body: 'På professionella nätverk som LinkedIn innebär skärpa auktoritet. Rubriker kräver specifika förhållanden för att undvika att se pixliga ut på högupplösta skärmar.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Varför bildförhållandet är viktigt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bildförhållande (aspect ratio) är det proportionella förhållandet mellan en bilds bredd och höjd. Om man ignorerar det tvingas plattformar att zooma in eller lägga till svarta fält, vilket skadar estetiken och den organiska räckvidden.',
    },
    {
      type: 'list',
      items: [
        'Förhindrar att text eller logotyper särs av app-ikoner.',
        'Behåller optimal pixeltäthet utan att förvränga eller sträcka ut originalbilden.',
        'Sparar tid genom att samla alla officiella mått i ett enda webbverktyg.',
        'Förbättrar laddhastigheten genom att generera filer med exakt storlek och mått.',
      ],
    },
    {
      type: 'tip',
      title: 'Kompositionstips',
      html: '<p>När du använder vår manuella dra-funktion, försök placera bildens huvudmotiv vid en av stödlinjernas skärningspunkter. Detta skapar mer dynamiska och professionella kompositioner för dina sociala medier.</p>',
    },
    {
      type: 'title',
      text: 'Steg för en perfekt beskärning',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Välj format: Välj plattform och typ av inlägg från sidomenyn.',
        'Ladda upp bilden: Dra din fil eller använd filväljaren för att importera din bild.',
        'Justera ramen: Dra fotot inom det synliga området och använd zoom för precision.',
        'Snabb export: Klicka på ladda ner för att få din bild klar att publiceras.',
      ],
    },
    {
      type: 'title',
      text: 'Integritet och lokal bearbetning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Din integritet är total. Detta verktyg bearbetar bilder lokalt i din webbläsare med hjälp av Canvas API. Dina bilder laddas aldrig upp till någon extern server, vilket garanterar fullständig säkerhet och omedelbar snabbhet.',
    },
    {
      type: 'title',
      text: 'Professionell optimering för sociala medier',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Att anpassa ditt visuella innehåll professionellt är en direkt tillväxtstrategi. Vårt verktyg förenklar arbetsflödet för kreatörer och community managers, så att varje inlägg ser perfekt ut på alla enheter.',
    },
  ],
  ui: {
    sidebarTitle: 'Sociala format',
    uploadTitle: 'Ladda upp bild',
    uploadSubtitle: 'Dra ditt foto hit eller klicka för att välja',
    btnReset: 'Återställ',
    btnDownload: 'Ladda ner bild',
  },
};
