import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'sociala-sakra-zoner';
const title = 'Social Safe Zones: Videosimulator för TikTok, Reels & Shorts';
const description =
  'Förhandsgranska dina bilder och videor med det riktiga gränssnittet för sociala medier. Säkerställ att ditt innehåll alltid är synligt och undvik oavsiktlig beskärning.';

const faqData = [
  {
    question: "Vad är 'Safe Zones' på sociala medier?",
    answer:
      "Det är de områden på skärmen där innehållet är synligt utan risk för att täckas av gränssnittselement, såsom användarnamn, beskrivning, interaktionsknappar (gilla, dela) eller automatisk beskärning som tillämpas av vissa enheter.",
  },
  {
    question: 'Varför ser min TikTok-video beskuren ut upptill och nertill?',
    answer:
      'TikTok använder bildförhållandet 9:16. Om din video är bredare kommer appen att zooma för att fylla skärmen, vilket orsakar beskärning. Dessutom täcker det nedre gränssnittet en del av videon, så viktiga element bör centreras.',
  },
  {
    question: 'Är den säkra zonen densamma för Instagram Reels och YouTube Shorts?',
    answer:
      'De är mycket lika men inte identiska. YouTube Shorts-knappar är placerade annorlunda än Reels. Vårt verktyg låter dig växla mellan plattformar för att verifiera din design på alla.',
  },
  {
    question: 'Vad händer om jag placerar text i det nedre högra hörnet?',
    answer:
      'Den kommer sannolikt att vara osynlig eller mycket svår att läsa, eftersom det är där ikonerna för profil, hjärta och kommentarer finns. Helst bör du hålla texter och ansikten i det centrala-övre området (Safe Zone).',
  },
];

const howToData = [
  {
    name: 'Ladda upp din bild eller video',
    text: 'Ladda upp filen du vill förhandsgranska. Bearbetningen sker lokalt och privat – inget laddas upp till internet.',
  },
  {
    name: 'Välj plattform',
    text: 'Välj mellan TikTok, Instagram Reels eller YouTube Shorts för att aktivera motsvarande gränssnittsöverlagring.',
  },
  {
    name: 'Kontrollera läsbarheten',
    text: 'Verifiera om texter, undertexter eller viktiga varumärkeselement täcks av det sociala nätverkets ikoner.',
  },
  {
    name: 'Justera och exportera',
    text: 'Om något är dolt, flytta elementet i din ursprungliga videoredigerare och testa igen tills det passar perfekt.',
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

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Officiell plattformsdokumentation',
  bibliography: [
    {
      name: 'TikTok Creator Portal: Videooptimering och säkra zoner',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: 'Instagram Business: Best practices för Reels',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: 'YouTube Help: Skapa YouTube Shorts',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: 'Meta for Creators: Säkra zoner och bildförhållanden för video',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Mästarguide till Safe Zones: Optimera dina Reels, TikToks och Shorts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I den mättade världen av vertikalt innehåll är det första intrycket tekniskt. Det största misstaget skapare gör är att ignorera hur deras <strong>video eller bild</strong> interagerar med plattformens inbyggda gränssnitt. Varje socialt nätverk (TikTok, Instagram Reels och YouTube Shorts) lägger på lager av knappar, text och profiler som kan omintetgöra det visuella intrycket av din komposition.',
    },
    {
      type: 'paragraph',
      html: 'Detta verktyg låter dig ladda dina mediefiler och förhandsgranska exakt vilka delar av din bildruta som kommer att täckas av gränssnittet. Det handlar inte bara om <strong>undertexter</strong>; det handlar om att säkerställa att ansikten, produkter eller huvudaktioner i din video inte begravs under en "Gilla"-knapp eller en lång beskrivning.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'TikTok: Det mest påträngande gränssnittet',
          html: '<p>TikTok har det tätaste gränssnittet. På höger sida finns en kolumn med ikoner som upptar cirka 15 % av bredden. Längst ner kan beskrivningen sträcka sig över 4 eller 5 rader och täcka nästan en tredjedel av skärmen nerifrån.</p><ul><li><strong>Bottenmarginal:</strong> Lämna de sista 250px fria för att undvika beskrivningstexten och användarnamnet.</li><li><strong>Högermarginal:</strong> Undvik att placera text inom 100px från högerkanten.</li><li><strong>Topp:</strong> Knapparna "Följer" och "För dig" upptar det övre centrala fältet.</li></ul>',
        },
        {
          type: 'card',
          title: 'IG Reels Feed faktorn',
          html: '<p>Till skillnad från TikTok beskär Instagram Reels videon till ett 4:5-format när den visas i huvudflödet. Detta innebär att om du placerar viktig information i de översta eller nedersta 15 % av din 9:16-video, kommer den att försvinna i flödet.</p><ul><li><strong>4:5-regeln:</strong> Håll titlar och nyckelelement inom den centrala zonen för synlighet i flödet.</li><li><strong>Gränssnitt:</strong> Reels-ikonerna är mer subtila än TikToks, vilket tillåter lite mer marginal på sidorna.</li><li><strong>Ljudknapp:</strong> Placerad längst ner till höger, täcker den vanligtvis mycket mindre än TikToks snurrande skiva.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts: Håll koll på högersidan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube Shorts har ett asymmetriskt gränssnitt. Prenumerationsknappen är mycket framträdande och enfärgad (oftast svart eller vit), vilket skapar en viktig visuell död vinkel i det nedre högra hörnet.',
    },
    {
      type: 'list',
      items: [
        '<strong>Högermarginal:</strong> Undvik att placera text eller viktiga element i de nedre högra 20 %.',
        '<strong>Bottenmarginal:</strong> Lämna de sista 150px fria för att undvika beskrivningstexten och användarnamnet.',
        '<strong>Topp:</strong> Knapparna för prenumeration och annat upptar det övre centrala fältet.',
      ],
    },
    {
      type: 'title',
      text: 'Kritiska frågor om vertikal design',
      level: 2,
    },
    {
      type: 'title',
      text: 'Var ska man placera nyckelelement (ansikten, text, produkt)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '"Den gyllene zonen" för huvudaktionen är den centrala tredjedelen av videon. Om du filmar en person, se till att deras ögon och mun befinner sig inom denna zon. Viktiga grafiska element bör flyttas något uppåt från det geometriska centrumet för att undvika den nedre beskrivningen.',
    },
    {
      type: 'title',
      text: 'Varför ser min video suddig ut när den har laddats upp?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Det är ofta inte kvaliteten utan skalningen. Spela alltid in i 1080x1920 vid 30 eller 60 fps. Undvik 4K om du använder många tunga effekter, eftersom plattformar komprimerar stora filer aggressivt.',
    },
    {
      type: 'title',
      text: 'Vad sägs om telefonens kanter?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kom ihåg att moderna telefoner har flärpar (notches) eller kamerahål i skärmen. Detta verktyg inkluderar en övre säkerhetsmarginal så att ditt innehåll inte krockar med klockan eller systemikonerna (batteri, signal).',
    },
    {
      type: 'title',
      text: 'Anatomi av en viral video',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att designa för sociala medier handlar inte bara om estetik – det handlar om <strong>användbarhet</strong>. Om en användare måste kämpa för att läsa text för att plattformens ikoner täcker den, kommer de helt enkelt att svepa vidare till nästa video. Behållningen (Watch Time) sjunker kraftigt när det finns visuell friktion.',
    },
    {
      type: 'paragraph',
      html: 'På YouTube Shorts, till exempel, är gränssnittet asymmetriskt. Prenumerationsknappen är mycket tydlig. Genom att använda denna simulator kan du justera opaciteten för att förstå hur din färgpalett interagerar med de inbyggda UI-färgerna.',
    },
    {
      type: 'tip',
      title: 'Kreativt verktyg för kvalitetskontroll',
      html: '<p>Designad för skapare som inte lämnar något åt slumpen.</p>',
    },
  ],
  ui: {
    labelConfig: 'Inställningar',
    labelPlatform: 'Målplattform',
    labelUpload: 'Ladda upp innehåll',
    uploadPrompt: 'Välj bild eller video',
    uploadLink: 'Eller använd ett exempel',
    loadContent: 'Ladda ditt innehåll',
    labelOpacity: 'Gränssnittsrelief',
    labelMask: 'Gråa ut kritiska zoner',
    labelGrid: 'Tredjedelsregeln',
    btnReset: 'Återställ canvas',
    bannerTiktok: 'Simulerar TikTok 9:16',
    bannerReels: 'Simulerar Instagram Reels 9:16',
    bannerShorts: 'Simulerar YouTube Shorts 9:16',
    nameTiktok: 'TikTok',
    nameReels: 'IG Reels',
    nameShorts: 'YT Shorts',
    ttFollowing: 'Följer',
    ttForYou: 'För dig',
    ttDescription: 'Riktig gränssnittskonstruktion för innehållsskapare. #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - Originalljud',
    ttNavHome: 'Hem',
    ttNavFriends: 'Vänner',
    ttNavInbox: 'Inkorg',
    ttNavProfile: 'Profil',
    reelsFollow: 'Följ',
    reelsDescription: 'Detta gränssnitt är identiskt med det riktiga. #reels #ux #simulator',
    reelsAudio: 'Trending Music - Originalljud',
    shortsSubscribe: 'PRENUMERERA',
    shortsDislike: 'Ogilla',
    shortsShare: 'Dela',
    shortsRemix: 'Remixa',
    shortsDescription: 'Simulerar riktiga gränssnitt för Shorts! #youtube #shorts',
  },
};
