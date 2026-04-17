import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'ladda-ner-youtube-miniatyr-hd';
const title = 'YouTube Thumbnail Downloader (HD)';
const description =
  'Extrahera och ladda ner den ursprungliga miniatyrbilden från valfri YouTube-video i högsta upplösning och utan vattenstämplar med hjälp av enbart URL:en.';

const faqData = [
  {
    question: 'Vilken upplösning extraheras miniatyrerna i?',
    answer:
      "Verktyget försöker alltid hämta bilden i 'MaxRes'-upplösning (1280x720 eller 1920x1080), vilket är den originalkvalitet som laddats upp av videoskaparen. Om skaparen inte har laddat upp en miniatyrbild i HD kommer den automatiskt att visa nästa högsta tillgängliga upplösning.",
  },
  {
    question: 'Vilka typer av länkar stöds?',
    answer:
      'Den stöder traditionella youtube.com/watch-URL:er, korta youtu.be-länkar, mobila länkar och till och med YouTube Shorts-URL:er på ett sömlöst sätt.',
  },
  {
    question: 'Är det lagligt att ladda ner YouTube-miniatyrer?',
    answer:
      'Ja, nedladdning är helt laglig för personligt bruk, design, parodier och inspiration (Fair Use). Var försiktig om du tänker använda upphovsrättsskyddade miniatyrer för rent kommersiella ändamål; i dessa fall är det viktigt att kontrollera videons licens.',
  },
  {
    question: 'Finns det någon daglig användningsgräns?',
    answer:
      'Det finns inga månatliga eller dagliga gränser. Eftersom denna programvara körs på klientsidan genom att tolka URL-mönstret internt i din webbläsare, interagerar vi inte med traditionella restriktiva API:er.',
  },
];

const howToData = [
  {
    name: 'Kopiera videons URL',
    text: 'Gå till YouTube och kopiera länken till videon från webbläsarens adressfält eller via dela-knappen.',
  },
  {
    name: 'Klistra in länken',
    text: 'Ange URL:en i extraheringsfältet eller använd knappen för att klistra in från urklipp.',
  },
  {
    name: 'Välj kvalitet',
    text: 'Verktyget visar alla tillgängliga upplösningar, från högsta kvalitet (1080p) till den lägsta.',
  },
  {
    name: 'Ladda ner bilden',
    text: 'Klicka på nedladdningsknappen för att spara miniatyrbilden på din enhet.',
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

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Dokumentation och referenser',
  bibliography: [
    {
      name: 'YouTube-hjälp: Lägg till en anpassad videominiatyr',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube Creator Academy: Så skapar du effektiva miniatyrer',
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
      text: 'Ladda ner YouTube-miniatyrer i HD gratis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Om du behöver <strong>ladda ner miniatyrbilden från en YouTube-video</strong> i dess originalstorlek eller högsta kvalitet (Full HD eller 4K), är detta kostnadsfria verktyg den snabbaste lösningen. Du kan hämta omslagsbilden från valfri kanal för att få inspiration, skapa dina egna designer eller använda den i presentationer.',
    },
    {
      type: 'tip',
      title: 'Extrahera omslagsbild utan program',
      html: '<p>Du behöver inte installera någon programvara eller registrera dig. Det är bara att kopiera och klistra in videolänken så kan du <strong>spara YouTube-miniatyrbilden</strong> direkt på din dator eller mobil.</p>',
    },
    {
      type: 'title',
      text: 'Hur får man tag på miniatyrbilden från en YouTube-video?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Processen för att <strong>ta ut bilden från en YouTube-video</strong> är mycket enkel. Följ dessa steg för att få bilden på några sekunder:',
    },
    {
      type: 'list',
      items: [
        '<strong>1. Kopiera URL:en:</strong> Gå till YouTube och kopiera videolänken (antingen från webbläsarens adressfält eller via dela-knappen).',
        '<strong>2. Klistra in länken:</strong> Ange URL:en i sökfältet i vår miniatyrextraherare.',
        '<strong>3. Välj kvalitet:</strong> Vi visar alla tillgängliga upplösningar, från högsta kvalitet (1080p) till den lägsta (360p).',
        '<strong>4. Ladda ner bilden:</strong> Klicka på nedladdningsknappen för att spara <i>thumbnailen</i> på din enhet.',
      ],
    },
    {
      type: 'title',
      text: 'Format och upplösningar som stöds',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Att ladda ner omslag till YouTube-videor har aldrig varit enklare. Verktyget söker automatiskt efter den bästa möjliga bilden (känd som <strong>maxresdefault</strong>), vilket vanligtvis är designer som skapats i Photoshop av YouTubers. Om skaparen inte har laddat upp en HD-bild ger vi dig det näst bästa alternativet (<strong>hqdefault</strong> eller <strong>mqdefault</strong>).',
    },
    {
      type: 'paragraph',
      html: 'Detta verktyg är perfekt för <i>Community Managers</i>, grafiska formgivare, innehållsskapare, mem-skapare eller vem som helst som behöver <strong>ladda ner ett videoomslag</strong> för sina projekt. Dessutom är det kompatibelt med <strong>YouTube Shorts</strong>, så du kan även hämta deras miniatyrer på samma sätt.',
    },
    {
      type: 'title',
      text: 'Professionell användning av YouTube-miniatyrer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'YouTube-miniatyrer är värdefulla visuella tillgångar. De representerar timmar av designarbete, A/B-testning och CTR-optimering av skaparna. Att veta hur man kommer åt dem och laddar ner dem öppnar upp en rad professionella möjligheter.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Innehållsskapare',
          html: '<p>Analysera miniatyrer från virala videor i din nisch för att förstå vilka visuella element som genererar flest klick: typografi, dominanta färger, användning av ansikten eller text.</p><ul><li><strong>Visuell benchmarking:</strong> Jämför dina miniatyrer med ledarna i din bransch.</li><li><strong>Designiteration:</strong> Ladda ner och använd miniatyrer som referens i Photoshop eller Canva.</li><li><strong>Inspirationsarkiv:</strong> Bygg upp ett bibliotek med miniatyrer som har hög konvertering.</li></ul>',
        },
        {
          type: 'card',
          title: 'Designers och marknadsförare',
          html: '<p>För en grafisk formgivare eller en <i>social media manager</i> är snabb åtkomst till YouTube-miniatyrer nödvändigt för presentationer, kundförslag och visuella revisioner.</p><ul><li><strong>Kundpresentationer:</strong> Inkludera riktiga skärmdumpar från konkurrenter i dina förslag.</li><li><strong>Varumärkesrevisioner:</strong> Utvärdera den visuella konsekvensen i en YouTube-kanal.</li><li><strong>Mood boards:</strong> Samla visuella referenser av hög kvalitet utan suddiga skärmdumpar.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kompatibilitet med YouTube Shorts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Extractor-verktyget fungerar perfekt med <strong>YouTube Shorts</strong>. Shorts har sitt eget vertikala miniatyrformat (9:16) som genereras automatiskt från videon. Det här verktyget känner igen Shorts-URL:er (<code>youtube.com/shorts/ID</code>) och extraherar den bästa tillgängliga miniatyrbilden på samma sätt som för standardvideor.',
    },
    {
      type: 'tip',
      title: 'Garanterad integritet',
      html: '<p>Hela extraheringen sker i din webbläsare. Inga URL:er eller data skickas till någon extern server.</p>',
    },
  ],
  ui: {
    urlPlaceholder: 'Klistra in YouTube-länken här...',
    pasteAriaLabel: 'Klistra in från urklipp',
    helperText: 'Format som stöds: youtube.com, youtu.be, shorts.',
    ribbonLabel: 'Högsta kvalitet',
    downloadBtn: 'Ladda ner i högsta upplösning',
    qualityMedium: 'Medelkvalitet',
    qualityStandard: 'Standardkvalitet',
    qualityLow: 'Låg kvalitet',
    viewImage: 'Visa bild',
    errorInvalid: 'Ogiltig YouTube-URL. Vänligen kontrollera den.',
    imgAlt: 'YouTube HD Miniatyrbild',
  },
};
