import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'social-media-account-waarde-calculator';
const title = 'Social Media Account Waarde Calculator: TikTok & Instagram Prijzen';
const description =
  'Ontdek hoeveel u moet vragen voor gesponsorde berichten. Onze calculator analyseert volgers, engagement en niche om u een eerlijke marktwaarde te geven.';

const faqData = [
  {
    question: 'Is de accountwaarde calculator gratis?',
    answer:
      'Ja, onze tool is 100% gratis en vereist geen registratie of verbinding met uw sociale media accounts. U hoeft alleen uw openbare statistieken in te vullen.',
  },
  {
    question: 'Waarom is de waarde van TikTok anders dan die van Instagram?',
    answer:
      'TikTok leunt zwaar op algoritmisch bereik en weergaven, terwijl Instagram nog steeds veel gewicht toekent aan de omvang van de community en de loyaliteit van volgers.',
  },
  {
    question: 'Wat is een goede engagement rate om meer te kunnen vragen?',
    answer:
      'Over het algemeen wordt een engagement van boven de 3% als gezond beschouwd. Accounts met meer dan 10% engagement worden beschouwd als \'premium profielen\' en kunnen een aanzienlijke toeslag vragen.',
  },
  {
    question: 'Heeft de niche echt zoveel invloed op de prijs?',
    answer:
      'Absoluut. Een volger die geïnteresseerd is in financiën of managementsoftware heeft een veel hogere conversiewaarde voor een merk dan een volger die op zoek is naar snel entertainment of memes.',
  },
];

const howToData = [
  {
    name: 'Kies uw platform',
    text: 'Selecteer of u de waarde van een TikTok- of Instagram-account wilt berekenen.',
  },
  {
    name: 'Vul uw statistieken in',
    text: 'Voer uw aantal volgers in en het gemiddelde aantal weergaven en likes van uw laatste 10 berichten.',
  },
  {
    name: 'Selecteer uw niche',
    text: 'Kies de categorie die uw content het beste beschrijft om de waarde aan te passen aan de marktvraag.',
  },
  {
    name: 'Ontvang uw budget',
    text: 'Ontvang een geschatte prijsklasse van wat u zou moeten vragen voor een professionele samenwerking.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen & Marktstudies',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: Influencer Rates 2026',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor: TikTok & Instagram Engagement Rapport',
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: Social Media Statistieken',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: 'In deze gids leert u',
      html: '<ul><li>Uw <strong>echte marktwaarde</strong> op basis van data uit 2026.</li><li>Hoe u de impact van <strong>TikTok vs Instagram</strong> kunt onderscheiden.</li><li>Hoe uw <strong>niche</strong> uw CPM drastisch beïnvloedt.</li><li>Een professionele template voor <strong>onderhandelingen met merken</strong>.</li></ul>',
    },
    {
      type: 'title',
      text: 'Account Waarde Calculator: Hoeveel vragen voor een gesponsorde post op TikTok of Instagram?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Als u een content creator of influencer bent, of gewoon een actieve community heeft op sociale media, heeft u zich waarschijnlijk wel eens afgevraagd: <strong>hoeveel is mijn account eigenlijk waard?</strong> of <strong>hoeveel moet ik vragen voor een samenwerking met een merk?</strong>.',
    },
    {
      type: 'title',
      text: 'De opkomst van de creator economy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Influencer marketing is volwassen geworden en het draait niet meer alleen om het aantal volgers. Merken zoeken naar resultaten en een diepe connectie. Onze tool biedt een solide startpunt op basis van echte marktgegevens.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: '<p>Jaarlijkse groei in investeringen in Influencer Marketing</p>',
        },
        {
          type: 'card',
          title: '3.2%',
          html: '<p>Gemiddelde engagement rate die als gezond wordt beschouwd</p>',
        },
        {
          type: 'card',
          title: '€15–€50',
          html: '<p>Gemiddelde CPM in niches met hoge waarde (stabiel)</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Factoren die bepalen hoeveel uw account waard is',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In tegenstelling tot wat enkele jaren geleden werd gedacht, is het aantal volgers slechts het topje van de ijsberg. Hier zijn de fundamentele componenten:',
    },
    {
      type: 'title',
      text: '1. Engagement Rate',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dit is de belangrijkste statistiek. Het meet welk percentage van uw community actief interactie heeft met uw content. Een klein account met hoge interactie is veel waardevoller dan un groot "spook" account.',
    },
    {
      type: 'tip',
      title: 'Engagement tip',
      html: '<p>Probeer binnen de eerste uren na het plaatsen op reacties te antwoorden om positieve signalen naar het algoritme te sturen.</p>',
    },
    {
      type: 'title',
      text: '2. Gemiddeld Bereik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Op TikTok is het bereik volatiel vanwege het aanbevelingsalgoritme. Op Instagram hebben Reels meer gewicht gekregen dan statische foto's voor het bereiken van nieuw publiek.",
    },
    {
      type: 'title',
      text: '3. Niche of Categorie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Niet alle doelgroepen zijn evenveel waard. Een tech- of finance creator kan veel hogere tarieven vragen dan een algemene entertainment creator, vanwege de hogere waarde van de eindklant.',
    },
    {
      type: 'title',
      text: 'Best betalende categorieën (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Financiën & Zakelijk:</strong> De best betaalde niche per bericht.',
        '<strong>Technologie & Gadgets:</strong> Hoge directe koopintentie.',
        '<strong>Gezondheid & Fitness:</strong> Grote markt voor apparatuur en apps.',
        '<strong>Huisrenovatie:</strong> Hoge projectkosten en verhoogde ROI.',
      ],
    },
    {
      type: 'title',
      text: 'TikTok vs Instagram: Waar zit het geld?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hoewel beide verticale video gebruiken, verschillen hun verdienmodellen. Instagram is branding; TikTok is pure performance.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: '<p>Focus op branding, esthetiek en loyaliteit. Ideaal voor langetermijncampagnes.</p><ul><li>Hecht waarde aan communitygrootte</li><li>Stories met directe verkoop</li><li>Stabiele groei</li><li>Rijper publiek</li></ul>',
        },
        {
          type: 'card',
          title: 'TikTok',
          html: '<p>Het land van extreme viraliteit. Het algoritme heerst over de volgers. Explosieve ROI op korte termijn.</p><ul><li>Hecht waarde aan massaal bereik</li><li>Absoluut viraal potentieel</li><li>Lage productiekosten</li><li>Zeer actief publiek</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Hoe de resultaten te gebruiken bij onderhandelingen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gebruik de prijsrange van onze tool als leidraad. Presenteer uw statistieken met vertrouwen met behulp van dit template:',
    },
    {
      type: 'tip',
      title: 'Onderhandelingstemplate',
      html: '<p>Beste [Naam merk], bedankt voor het contact opnemen. Op basis van mijn huidige bereikstatistieken (gemiddeld [X] weergaven) und mijn engagement rate van [X]%, is mijn tarief voor een integratie in een [Reel/TikTok] [Prijs €]. Dit is inclusief: scripting en videoproductie, 1 bio-link gedurende 24u, 2 Stories ter versterking, gebruiksrechten voor 30 dagen.</p>',
    },
    {
      type: 'title',
      text: 'Strategieën om uw tarief te verhogen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Stimuleer interactie:</strong> Reageer op elke reactie.',
        '<strong>Verhoog de kwaliteit:</strong> Audio is 50% van een goede video.',
        '<strong>Specialiseer:</strong> Door "de expert" te zijn, kunt u meer vragen.',
        '<strong>Maak een Media Kit:</strong> Documenteer uw successen met data.',
      ],
    },
    {
      type: 'title',
      text: 'Is de geschatte waarde betrouwbaar?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Onze calculator maakt gebruik van geaggregeerde gegevens van internationale bureaus. Factoren zoals seizoensgebondenheid (kerstcampagnes betalen meer) kunnen de uiteindelijke prijs echter doen variëren.',
    },
    {
      type: 'tip',
      title: 'Opmerking voor Creators',
      html: '<p>Deze tool is een schatting. Pas de prijs altijd aan op basis van de complexiteit van de door het merk gevraagde content.</p>',
    },
  ],
  ui: {
    sectionTag: 'Audit Parameters',
    labelFollowers: 'Community (Volgers)',
    labelAvgViewsTiktok: 'Impact (Weergaven per Video)',
    labelAvgViewsIg: 'Bereik (Profielbereik)',
    tooltipViews: 'Tel de weergaven van uw laatste 10 video\'s bij elkaar op en deel door 10.',
    labelEngagement: 'Loyaliteit (Likes + Reacties)',
    tooltipEngagement: 'Tel de totale likes en reacties van uw laatste 10 berichten bij elkaar op en deel door 10.',
    labelNiche: 'Marktverticale',
    nicheEntertainment: 'Entertainment',
    nicheFinance: 'Financiën & Vastgoed',
    nicheTech: 'Technologie & SaaS',
    nicheFitness: 'Lifestyle & Gezondheid',
    nicheFashion: 'Mode & Beauty',
    nicheTravel: 'Toerisme & Reizen',
    nicheFood: 'Eten & Gastronomie',
    nicheGaming: 'Gaming & eSports',
    nicheHome: 'Huis & Renovatie',
    btnCalculate: 'Genereer Waarderapport',
    emptyTitle: 'Commerciële Haalbaarheidsanalyse',
    emptyDesc: 'Vul de profielstatistieken in om de huidige marktwaarde te projecteren.',
    roiLabel: 'Evaluatie Voorgesteld Tarief',
    rangeLabel: 'Voorgestelde range:',
    audienceQuality: 'Kwaliteit Publiek',
    metricER: 'Engagement Rate',
    investmentEfficiency: 'Investeringsefficiëntie',
    metricCPM: 'Geprojecteerde CPM',
    insightText: 'Deze waardering is gebaseerd op de gemiddelde CPM van de Nederlandse markt (2026).',
    currencySymbol: '€',
    numberLocale: 'nl-NL',
  },
};
