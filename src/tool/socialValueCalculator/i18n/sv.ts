import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'kalkylator-varde-socialt-konto';
const title = 'Social Media Account Value Calculator: Pris för TikTok & Instagram';
const description =
  'Ta reda på hur mycket du ska ta betalt för sponsrade inlägg. Vår kalkylator analyserar följare, engagemang och nisch för att ge dig ett rättvist marknadsvärde.';

const faqData = [
  {
    question: 'Är värdekalkylatorn för konton gratis?',
    answer:
      'Ja, vårt verktyg är 100 % gratis och kräver ingen registrering eller koppling till dina sociala medier-konton. Du behöver bara fylla i din offentliga statistik.',
  },
  {
    question: 'Varför skiljer sig TikTok-värdet från Instagram?',
    answer:
      'TikTok förlitar sig mycket på algoritmisk räckvidd och visningar, medan Instagram fortfarande lägger stor vikt vid community-storlek och följarlojalitet.',
  },
  {
    question: 'Vad är en bra engagemangsgrad för att kunna ta mer betalt?',
    answer:
      'Generellt anses ett engagemang över 3 % vara hälsosamt. Konton med mer än 10 % engagemang betraktas som "premiumprofiler" och kan ta ut ett betydande pristillägg.',
  },
  {
    question: 'Påverkar nischen verkligen priset så mycket?',
    answer:
      'Absolut. En följare som är intresserad av ekonomi eller företagsmjukvara har ett mycket högre konverteringsvärde för ett varumärke än en följare som söker snabb underhållning eller memes.',
  },
];

const howToData = [
  {
    name: 'Välj plattform',
    text: 'Välj om du vill beräkna värdet för ett TikTok- eller Instagram-konto.',
  },
  {
    name: 'Ange din statistik',
    text: 'Ange ditt antal följare och det genomsnittliga antalet visningar och likes för dina senaste 10 inlägg.',
  },
  {
    name: 'Välj nisch',
    text: 'Välj den kategori som bäst beskriver ditt innehåll för att justera värdet baserat på marknadens efterfrågan.',
  },
  {
    name: 'Få din budget',
    text: 'Få ett uppskattat prisintervall för vad du bör ta betalt för ett professionellt samarbete.',
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

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor & marknadsstudier',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: Influencer Rates 2026',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor: TikTok & Instagram Engagement Report',
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: Social Media Statistik',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: 'I den här guiden får du lära dig',
      html: '<ul><li>Ditt <strong>verkliga marknadsvärde</strong> baserat på data från 2026.</li><li>Hur du skiljer på effekten av <strong>TikTok kontra Instagram</strong>.</li><li>Hur din <strong>nisch</strong> dramatiskt påverkar ditt CPM.</li><li>En professionell mall för att <strong>förhandla med varumärken</strong>.</li></ul>',
    },
    {
      type: 'title',
      text: 'Värdekalkylator för konton: Hur mycket ska man ta betalt för ett sponsrat inlägg på TikTok eller Instagram?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Om du är en innehållsskapare, influencer eller helt enkelt har en aktiv community på sociala medier har du förmodligen frågat dig själv vid något tillfälle: <strong>vad är mitt konto egentligen värt?</strong> eller <strong>hur mycket ska jag be om för ett varumärkessamarbete?</strong>.',
    },
    {
      type: 'title',
      text: 'Framväxten av skaparekonomin',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Influencer marketing har mognat och handlar inte längre bara om antal följare. Varumärken letar efter resultat och djup kontakt. Vårt verktyg ger en solid utgångspunkt baserad på verklig marknadsdata.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: '<p>Årlig tillväxt i investeringar i Influencer Marketing</p>',
        },
        {
          type: 'card',
          title: '3.2%',
          html: '<p>Genomsnittlig engagemangsgrad som anses hälsosam</p>',
        },
        {
          type: 'card',
          title: '150kr–500kr',
          html: '<p>Genomsnittlig CPM i nischer med högt värde (stabilt)</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Faktorer som avgör hur mycket ditt konto är värt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Till skillnad från vad man trodde för några år sedan är antal följare bara toppen av isberget. Här är de grundläggande komponenterna:',
    },
    {
      type: 'title',
      text: '1. Engagemangsgrad (Engagement Rate)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Detta är det viktigaste nyckeltalet. Det mäter hur stor andel av din community som aktivt interagerar med ditt innehåll. Ett litet konto med hög interaktion är långt mer värdefullt än ett stort "spökkonto".',
    },
    {
      type: 'tip',
      title: 'Tips för engagemang',
      html: '<p>Försök svara på kommentarer under de första timmarna efter publicering för att skicka positiva signaler till algoritmen.</p>',
    },
    {
      type: 'title',
      text: '2. Genomsnittlig räckvidd',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "På TikTok är räckvidden volatil på grund av dess rekommendationsalgoritm. På Instagram har Reels fått större betydelse än statiska bilder för att nå nya målgrupper.",
    },
    {
      type: 'title',
      text: '3. Nisch eller kategori',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alla målgrupper är inte lika mycket värda. En skapare inom teknik eller ekonomi kan ta ut mycket högre arvoden än en skapare inom allmän underhållning, på grund av slutkundens högre värde.',
    },
    {
      type: 'title',
      text: 'Bäst betalda kategorier (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Ekonomi & Business:</strong> Den bäst betalda nischen per inlägg.',
        '<strong>Teknik & Prylar:</strong> Hög omedelbar köpintention.',
        '<strong>Hälsa & Fitness:</strong> Stor marknad för utrustning och appar.',
        '<strong>Hemrenovering:</strong> Höga projektkostnader och hög ROI.',
      ],
    },
    {
      type: 'title',
      text: 'TikTok mot Instagram: Var finns pengarna?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Även om båda använder vertikal video skiljer sig deras intäktsmodeller åt. Instagram är varumärkesbyggande; TikTok är ren prestation.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: '<p>Fokus på varumärkesbyggande, estetik och lojalitet. Perfekt för långsiktiga kampanjer.</p><ul><li>Värderar community-storlek</li><li>Stories med direktförsäljning</li><li>Stabil tillväxt</li><li>Mognare målgrupp</li></ul>',
        },
        {
          type: 'card',
          title: 'TikTok',
          html: '<p>Platsen för extrem viralitet. Algoritmen styr över följarna. Explosiv ROI på kort sikt.</p><ul><li>Värderar massiv räckvidd</li><li>Absolut viral potential</li><li>Låga produktionskostnader</li><li>Mycket aktiv målgrupp</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Hur man använder resultaten för att förhandla',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Använd prisintervallet från vårt verktyg som en vägledning. Presentera din statistik med självförtroende med hjälp av den här mallen:',
    },
    {
      type: 'tip',
      title: 'Förhandlingsmall',
      html: '<p>Hej [Varumärkets namn], tack för kontakten. Baserat på min nuvarande räckvidd (genomsnitt [X] visningar) och min engagemangsgrad på [X]%, är mitt arvode för en integration i en [Reel/TikTok] [Pris kr]. Detta inkluderar: manusskrivande och videoproduktion, 1 länk i bio i 24h, 2 Stories för förstärkning, 30 dagars användarrättigheter.</p>',
    },
    {
      type: 'title',
      text: 'Strategier för att höja ditt arvode',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Främja interaktion:</strong> Svara på varje kommentar.',
        '<strong>Höj kvaliteten:</strong> Ljudet är 50 % av en bra video.',
        '<strong>Specialisera dig:</strong> Genom att vara "experten" kan du ta mer betalt.',
        '<strong>Skapa ett Media Kit:</strong> Dokumentera dina framgångar med data.',
      ],
    },
    {
      type: 'title',
      text: 'Är det uppskattade värdet pålitligt?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vår kalkylator använder aggregerade data från internationella byråer. Faktorer som säsongsvariationer (julannonser betalar mer) kan dock variera det slutliga priset.',
    },
    {
      type: 'tip',
      title: 'Notering för skapare',
      html: '<p>Detta verktyg är en uppskattning. Justera alltid priset baserat på komplexiteten i det innehåll som varumärket efterfrågat.</p>',
    },
  ],
  ui: {
    sectionTag: 'Granskningsparametrar',
    labelFollowers: 'Community (Följare)',
    labelAvgViewsTiktok: 'Impact (Visningar per video)',
    labelAvgViewsIg: 'Räckvidd (Profilräckvidd)',
    tooltipViews: 'Summera visningarna från dina senaste 10 videor och dela med 10.',
    labelEngagement: 'Lojalitet (Likes + Kommentarer)',
    tooltipEngagement: 'Summan av likes och kommentarer från dina senaste 10 inlägg delat med 10.',
    labelNiche: 'Marknadsvertikal',
    nicheEntertainment: 'Underhållning',
    nicheFinance: 'Ekonomi & Fastigheter',
    nicheTech: 'Teknik & SaaS',
    nicheFitness: 'Livsstil & Hälsa',
    nicheFashion: 'Mode & Skönhet',
    nicheTravel: 'Turism & Resor',
    nicheFood: 'Mat & Gastronomi',
    nicheGaming: 'Gaming & eSport',
    nicheHome: 'Hem & Renovering',
    btnCalculate: 'Generera värderapport',
    emptyTitle: 'Kommersiell förstudie',
    emptyDesc: 'Ange kontots statistik för att beräkna det nuvarande marknadsvärdet.',
    roiLabel: 'Utvärdering av föreslaget arvode',
    rangeLabel: 'Föreslaget intervall:',
    audienceQuality: 'Målgruppskvalitet',
    metricER: 'Engagemangsgrad',
    investmentEfficiency: 'Investeringseffektivitet',
    metricCPM: 'Beräknat CPM',
    insightText: 'Denna värdering är baserad på genomsnittlig CPM för den svenska marknaden (2026).',
    currencySymbol: 'kr',
    numberLocale: 'sv-SE',
  },
};
