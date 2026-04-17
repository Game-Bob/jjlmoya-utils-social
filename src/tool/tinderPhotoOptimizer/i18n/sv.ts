import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'tinder-foto-optimerare';
const title = 'Tinder Foto Optimerare: Ansiktsanalys och Komposition';
const description =
  'Optimera dina Tinder-foton med algoritmisk ansiktsanalys. Simulera Tinder-gränssnittet 2026, analysera vetenskaplig inramning och ögonlinje, och exportera perfekta 9:16-porträtt för att maximera antalet matches.';

const faqData = [
  {
    question: 'Hur förbättrar det här verktyget mina matches på Tinder?',
    answer:
      'Verktyget analyserar viktiga tekniska faktorer: ansiktsstorleksförhållandet (idealiskt 30-50%), ögonlinjens position i förhållande till den övre tredjedelen, inramningstäckning och döda zoner i Tinder-gränssnittet. Genom att justera dessa parametrar projicerar ditt foto mer förtroende och tar sig igenom algoritmens visuella filter.',
  },
  {
    question: 'Är det säkert att ladda upp mina foton här?',
    answer:
      'Helt säkert. All bearbetning sker i din webbläsare via Canvas API. Dina bilder skickas aldrig till någon server och lagras inte någonstans.',
  },
  {
    question: 'Vad exakt gör ansiktsdetektering med AI?',
    answer:
      'Det använder face-api.js för att upptäcka 68 ansiktspunkter, analysera uttryck (leende, seriöst uttryck), utvärdera ögonposition och mäta huvudets lutning. Hela analysen sker lokalt på din enhet.',
  },
  {
    question: 'Varför rekommenderar ni en zoom på 1,2x?',
    answer:
      'Frontkameror på smartphones använder vidvinkeloptik (24mm) som förvränger ansiktet. En zoom på 1,2x simulerar en brännvidd på 50-85mm, vilket eliminerar förvrängningen och ger naturligare och mer attraktiva ansiktsproportioner.',
  },
];

const howToData = [
  {
    name: 'Ladda upp ditt foto',
    text: 'Dra eller klicka i Tinder-simulatorn för att ladda din bild.',
  },
  {
    name: 'Analysera kompositionen',
    text: 'AI upptäcker ditt ansikte automatiskt och visar mätvärden för ansiktsstorlek, ögonlinje, täckning och uttryck.',
  },
  {
    name: 'Justera med precision',
    text: 'Använd zoom- och ljusstyrkekontrollerna, aktivera auto-framing eller dra bilden manuellt i simulatorn.',
  },
  {
    name: 'Optimerad nedladdning',
    text: 'Exportera ditt foto i det nativa formatet 1080x1920 optimerat för Tinder, med ren metadata.',
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

const howToSchema: WithContext<HowTo> = {
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

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    {
      name: 'face-api.js: JavaScript Face Recognition in the Browser',
      url: 'https://github.com/justadudewhohacks/face-api.js',
    },
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tinder Foto Optimerare: Den Ultimat Vetenskapliga och Tekniska Guiden (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I det digitala dejtingekosystemet bearbetas din Tinder-profil av två algoritmer samtidigt: plattformens egen avancerade visionsalgoritm och den mänskliga hjärnan hos användaren som swipar. Vårt verktyg integrerar principer från <strong>evolutionär psykologi</strong>, <strong>ansiktsbiometri</strong> och <strong>digital signalbehandling</strong> för att garantera att din bild projicerar maximalt socialt värde och teknisk attraktionskraft.',
    },
    {
      type: 'title',
      text: 'Psykologin bakom det första intrycket: 1,2-sekundereffekten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Neurovetenskapliga studier visar att den mänskliga hjärnan tar ungefär 1/10 sekund på sig att bilda en första uppfattning om den tillit någon projicerar. På Tinder har du drygt en sekund på dig innan nästa swipe. Vårt verktyg analyserar de faktorer som påskyndar ett positivt beslutsfattande:',
    },
    {
      type: 'list',
      items: [
        '<strong>Ögonkontakt och blicklinje:</strong> En direkt blick aktiverar regioner i hjärnan relaterade till social belöning. Att placera ögonen i den övre tredjedelen maximerar sannolikheten för att användaren stannar upp vid din blick innan de läser ditt namn.',
        '<strong>Asymmetri och hållning:</strong> En lätt lutning kan mjuka upp aggressiva drag, men en överdriven lutning förmedlar instabilitet. Vår algoritm mäter den exakta vinkeln för att hålla dig inom förtroendeintervallet.',
        '<strong>Figur-Bakgrundskontrast:</strong> Systemet premierar bilder där motivet är tydligt separerat från bakgrunden. En väl definierad teknisk profil hjälper renderingsmotorn att lyfta fram ditt ansikte mot konkurrenterna.',
      ],
    },
    {
      type: 'title',
      text: 'Teknisk Linsanalys: Problemet med vidvinkel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nästan alla profilbilder tas med smartphones, vars frontkameror är vidvinkel. Det vanligaste felet är att komma för nära enheten.',
    },
    {
      type: 'paragraph',
      html: '<strong>Tunnförvrängning:</strong> På mindre än en meters avstånd expanderar en 24mm lins (standard på mobiler) mitten av bilden. Detta gör att näsor ser större ut och ansiktet rundare än vad det är i verkligheten. Vår rekommendation av <strong>Zoom 1,2x</strong> är korrigerande: genom att använda en lätt digital beskärning simulerar du en brännvidd på 50mm till 85mm, den gyllene brännvidden som modefotografer använder för att smala av ansiktet och behålla verkliga proportioner.',
    },
    {
      type: 'title',
      text: 'Tinder-gränssnitt: Vetenskapen om döda zoner',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Många utmärkta bilder misslyckas för att de ignorerar mjukvarulagret (UI) som Tinder lägger ovanpå. En genomsnittlig användare ser inte ditt rena foto; de ser ett sammelsurium av knappar, gradienter och text.',
    },
    {
      type: 'list',
      items: [
        '<strong>Titelzon (Övre 15%):</strong> Här finns framstegsindikatorer och statusfältet. Om din panna eller dina ögon är här, klipper gränssnittet visuellt av ditt huvud.',
        '<strong>Actionzon (Knappar):</strong> Ikonerna för Like, Nope och Boost upptar de nedre sidorna. Om dina händer eller stilelement är där, går de helt förlorade.',
        '<strong>Läsbarhetsgradienten (Nedre 28%):</strong> Tinder applicerar en svart toning så att ditt namn och ålder kan läsas. Om ditt ansikte hamnar i denna zon kommer texten att överlappa dina drag, vilket förstör profilens estetik.',
      ],
    },
    {
      type: 'title',
      text: 'Visionsanalys i Realtid: Att tyda algoritmen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vårt verktyg använder <strong>senaste generationens Computer Vision-modeller</strong> för att granska din bild precis som Tinders automatiska moderatorer skulle göra:',
    },
    {
      type: 'list',
      items: [
        '<strong>Landmark detektering:</strong> Vi mappar 68 ansiktspunkter för att analysera symmetri och ögonens öppenhet. Väl öppna och synliga ögon korrelerar med högre nivåer av uppfattad extraversion.',
        '<strong>Mood-utvärdering:</strong> Ett lätt leende aktiverar spegelneuroner hos den som tittar på dig. Vi upptäcker intensiteten i ansiktsuttrycket för att se till att du inte ser för seriös eller otillgänglig ut.',
        '<strong>Belysningskvalitet:</strong> Systemet utvärderar detekteringsförtroendet. Om poängen är låg har fotot visuellt brus eller hårda skuggor som Tinders algoritm skulle kunna markera som innehåll av låg kvalitet.',
      ],
    },
    {
      type: 'title',
      text: 'MetaData och Optimerad Export för Tinder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Visste du att din bilds filstorlek påverkar algoritmen? Dejtingappar prioriterar innehåll som laddas snabbt för att inte avbryta användarens flow.',
    },
    {
      type: 'list',
      items: [
        '<strong>Metadata Stripping (Integritet och SEO):</strong> Vi tar bort EXIF-poster. Ett rent foto ger dig en ny duk för plattformens algoritm.',
        '<strong>Intelligent förlustfri komprimering:</strong> Vi minskar JPG-filstorleken samtidigt som vi behåller den nativa sRGB-färgrymd som används av iOS och Android. Ditt foto kommer att se levande ut även med sämre täckning.',
        '<strong>Immersivt 9:16-format:</strong> Genom att leverera exakt 1080x1920 pixlar förhindrar vi att Tinder applicerar sin egen aggressiva komprimeringsalgoritm som skapar bildartefakter.',
      ],
    },
    {
      type: 'tip',
      title: 'Expertens Råd',
      html: '<p>Det första fotot ska ALLTID vara ett tydligt porträtt från axlarna och uppåt. Spara helkroppsbilder eller bilder från aktiviteter till 3:e eller 4:e position. Se till att din blick i det första intrycket är fri från hinder och att ditt ansikte har den optimala storleken (30-50%).</p>',
    },
    {
      type: 'title',
      text: 'Säkerhet och etisk bearbetning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vi förstår att dina bilder är privata. Denna optimerare använder <strong>Client-Side-teknik</strong>: bilderna bearbetas via en canvas-motor i din lokala webbläsare. Inga data lämnar din enhet. Det är det säkraste och snabbaste sättet att optimera din profil utan att kompromissa med din integritet.',
    },
  ],
  ui: {
    uploadTitle: 'Optimera Foto',
    uploadSubtitle: 'Dra eller klicka för att börja',
    btnDownload: 'Ladda ner Optimerat Foto',
    btnRescan: 'Skanna ansikte igen',
    btnAutoFocus: 'Auto-Framing',
    btnMarkFace: 'Markera ansikte',
    panelManual: 'Manuella justeringar',
    panelVisualization: 'Avancerad visualisering',
    panelMetrics: 'Kompositionsanalys',
    panelExport: 'Exportera för Tinder 2026',
    panelExportDesc: 'Automatisk beskärning till 1080x1920 med optimerad metadata.',
    labelZoom: 'Zoom',
    labelBrightness: 'Ljusstyrka',
    toggleGrid: 'Tredjedelsrutnät',
    toggleGridDesc: 'Justering av klassisk komposition',
    toggleDeadzones: 'Farozoner',
    toggleDeadzonesDesc: 'Förhindrar att UI döljer ditt ansikte',
    toggleFaceBox: 'Se detekterat ansikte',
    toggleFaceBoxDesc: 'Landmärken och detekteringsområde',
    metricFaceSize: 'Ansiktskvot',
    metricEyeLine: 'Blicklinje',
    metricCoverage: 'Täckning',
    metricMood: 'Uttryck',
    metricQuality: 'Förtroende',
    analysisSuccess: 'Framgångsfaktorer',
    analysisWarning: 'Optimering',
    analysisError: 'Kritiska Fel',
    deadzoneTop: 'Övre UI-zon',
    deadzoneBottom: 'Informationszon',
    loaderAnalyzing: 'Analyserar komposition...',
    loaderModels: 'Laddar visionsmodeller...',
    simulatorName: 'Ditt Namn, 25',
    simulatorJob: 'Ditt Yrke',
    simulatorCity: 'Bor i Sverige',
    simulatorDistance: '5 km från dig',
    statusOptimal: 'OPTIMAL',
    statusIncorrect: 'FELAKTIG',
    statusHigh: 'HÖG',
    statusMedium: 'MEDEL',
    statusLow: 'LÅG',
    statusPositive: 'POSITIVT',
    statusNeutral: 'NEUTRALT',
    alertExcellent: 'Utmärkt teknisk komposition.',
    alertEmptySpaces: 'TOMMA YTOR: Bilden täcker inte hela ramen. Justera zoom eller position.',
    alertAlmostInvisible: 'NÄSTAN OSYNLIG: Du är väldigt långt borta. Zooma in tills ditt ansikte upptar minst en tredjedel av skärmen.',
    alertTooClose: 'FÖR NÄRA: Extrema närbilder kan upplevas som aggressiva.',
    alertPerfectSize: 'PERFEKT STORLEK: Ditt ansikte har det idealiska förhållandet för att förmedla förtroende.',
    alertImpactfulLook: 'KRAFTFULL BLICK: Dina ögon är på linjen för maximal uppmärksamhet.',
    alertEyeLineMoveUp: 'ÖGONLINJE: För en professionell inramning, höj ansiktet något till den övre linjen.',
    alertEyeLineMoveDown: 'ÖGONLINJE: För en professionell inramning, sänk ansiktet något till den övre linjen.',
    alertTiltedHead: 'LUTANDE HUVUD: En för sned hållning kan förmedla instabilitet.',
    alertSmileDetected: 'LEENDE UPPTÄCKT: Leenden ökar matchningsgraden avsevärt.',
    alertSevereExpression: 'ALLVARLIGT UTTRYCK: Försök använda ett foto med en vänligare gest.',
    alertObstructedTop: 'BLOCKERAD: Framstegsstapeln täcker ditt ansikte.',
    alertObstructedBottom: 'BLOCKERAD: Informationsblocket täcker ditt ansikte.',
    alertLowLight: 'DÅLIG BELYSNING: AI har svårt att se dig. Sök efter ett foto med bättre ljus.',
    alertCutOff: 'AVSKURIT: Ansiktet hamnar utanför den vertikala ramen.',
    alertProTip: 'PRO-TIPS: Om det är en selfie, använd Zoom (1,2x) för att undvika linsförvrängningar.',
    canvasFaceDetected: 'Ansikte detekterat',
  },
};
