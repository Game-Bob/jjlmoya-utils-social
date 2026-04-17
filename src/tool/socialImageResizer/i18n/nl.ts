import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'afbeelding-formaat-social-media-aanpassen';
const title = 'Social Media Image Resizer: Bijsnijden & Formaat Aanpassen voor Elk Platform';
const description =
  'Pas het formaat van uw foto\'s aan en snijd ze bij voor Instagram, TikTok, YouTube en meer. Slim bijsnijden met bijgewerkte officiële afmetingen voor 2026.';

const faqData = [
  {
    question: 'Gaat er beeldkwaliteit verloren bij het aanpassen van het formaat?',
    answer:
      'Nee, we gebruiken hoogwaardige algoritmen voor vloeiende beelden. Het wordt aanbevolen om een originele afbeelding te uploaden met een resolutie die gelijk is aan of groter is dan het doelformaat.',
  },
  {
    question: 'Is het veilig om mijn foto\'s hier te uploaden?',
    answer:
      'Volledig. De verwerking gebeurt lokaal in uw browser met behulp van de Canvas API. Uw foto\'s worden nooit naar een server verzonden.',
  },
  {
    question: 'Welke formaten worden ondersteund?',
    answer:
      'We ondersteunen JPG, PNG, WebP en AVIF voor uploaden. Downloads zijn geoptimaliseerd als hoogwaardige JPG voor maximale compatibiliteit.',
  },
];

const howToData = [
  {
    name: 'Upload uw afbeelding',
    text: 'Sleep uw bestand of blader door uw apparaat om het proces te starten.',
  },
  {
    name: 'Kies het formaat',
    text: 'Selecteer het sociale netwerk en het type publicatie dat u nodig heeft in het zijmenu.',
  },
  {
    name: 'Aanpassen en downloaden',
    text: 'Kader uw foto in door deze te slepen en gebruik de zoom voor een perfecte uitsnede. Klik op downloaden als u klaar bent.',
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

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Sprout Social: Social Media Image Sizes Guide 2026',
      url: 'https://sproutsocial.com/insights/social-media-image-sizes-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Social Media Image Resizer voor Elk Platform',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In het huidige digitale ecosysteem zijn eerste indrukken visueel. Elk sociaal netwerk werkt met specifieke algoritmen die prioriteit geven aan content die specifiek is aangepast aan de bijbehorende verhoudingen. Onze social media image resizer is niet alleen een technische tool — het is uw bondgenoot om ervoor te zorgen dat uw boodschap overkomt zonder ongewenste uitsneden of kwaliteitsverlies.',
    },
    {
      type: 'paragraph',
      html: 'Of u nu een landschapsfoto wilt converteren naar een opvallende verticale afbeelding voor Instagram Stories of een ontwerp wilt aanpassen voor een complex YouTube-banner, onze tool maakt gebruik van een slim bijsnijdsysteem waarmee u uw afbeelding met precisie rechtstreeks in uw browser kunt positioneren en schalen.',
    },
    {
      type: 'title',
      text: 'Officiële Social Media Afmetingen 2026',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — Vierkante Post', body: '1080 × 1080 px · Ratio 1:1' },
        { title: 'Instagram — Verticale Post', body: '1080 × 1350 px · Ratio 4:5' },
        { title: 'TikTok / Reels — Verticaal', body: '1080 × 1920 px · Ratio 9:16' },
        { title: 'YouTube — Thumbnail', body: '1280 × 720 px · Ratio 16:9' },
        { title: 'YouTube — Kanaalbanner', body: '2560 × 1440 px · Ratio 16:9' },
        { title: 'X (Twitter) — Standaard Post', body: '1200 × 675 px · Ratio 16:9' },
        { title: 'LinkedIn — Profielomslag', body: '1584 × 396 px · Ratio 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: 'Het vierkante 1:1 formaat blijft een klassieker, maar het verticale 4:5 formaat neemt meer schermruimte in beslag en genereert tot 30% meer engagement in de nieuwsfeed.',
        },
        {
          title: 'Short Form Content',
          body: 'Voor TikTok en Reels is de standaard 9:16. Dit meeslepende formaat vereist dat het middelpunt perfect is uitgelijnd om te voorkomen dat het wordt bedekt door de app-interface.',
        },
        {
          title: 'Visuele Engagement',
          body: 'Van thumbnails tot banners, elk onderdeel weegt mee in de doorklikratio. Nauwkeurig bijsnijden zorgt ervoor dat tekst en sleutelelementen altijd leesbaar zijn.',
        },
        {
          title: 'Professionele Branding',
          body: 'Op professionele netwerken zoals LinkedIn is scherpte gelijk aan autoriteit. Headers vereisen specifieke verhoudingen om te voorkomen dat ze korrelig lijken op schermen met een hoge dichtheid.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Waarom de Beeldverhouding Belangrijk Is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De beeldverhouding is de proportionele relatie tussen de breedte en de hoogte van een afbeelding. Door dit te negeren, worden platforms gedwongen om in te zoomen of zwarte balken toe te voegen, wat ten koste gaat van de esthetiek en het organische bereik.',
    },
    {
      type: 'list',
      items: [
        'Voorkomt dat teksten of logo\'s worden afgesneden door interface-iconen.',
        'Behoudt de optimale pixeldichtheid zonder de originele foto te vervormen of uit te rekken.',
        'Bespaart tijd door alle officiële afmetingen te centraliseren in één webtool.',
        'Verbetert de laadsnelheid door bestanden te genereren met de exacte grootte en afmetingen.',
      ],
    },
    {
      type: 'tip',
      title: 'Compositietip',
      html: "<p>Wanneer u onze handmatige sleepfunctie gebruikt, probeer dan het hoofdonderwerp van uw foto op een van de snijpunten van het raster te plaatsen. Dit zorgt voor meer dynamische en professionele composities voor uw sociale netwerken.</p>",
    },
    {
      type: 'title',
      text: 'Stappen voor een Perfecte Uitsnede',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Selecteer uw formaat: Kies het platform en het type publicatie in het zijmenu.',
        'Upload de afbeelding: Sleep uw bestand of gebruik de bestandskiezer om uw foto te importeren.',
        'Pas het kader aan: Sleep de foto binnen het zichtbare gebied en gebruik zoom voor precisie.',
        'Directe export: Klik op downloaden om uw afbeelding klaar voor publicatie te ontvangen.',
      ],
    },
    {
      type: 'title',
      text: 'Privacy en Lokale Verwerking',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uw privacy is gegarandeerd. Deze resizer verwerkt afbeeldingen lokaal in uw browser met behulp van de Canvas API. Uw foto\'s worden nooit naar een externe server geüpload, wat volledige veiligheid en onmiddellijke verwerkingssnelheid garandeert.',
    },
    {
      type: 'title',
      text: 'Professionele Optimalisatie voor Social Media',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het professioneel aanpassen van uw visuele content is een directe groeistrategie. Onze tool vereenvoudigt de workflow voor makers en community managers, zodat elke post er perfect uitziet op elk apparaat en platform.',
    },
  ],
  ui: {
    sidebarTitle: 'Sociale Formaten',
    uploadTitle: 'Upload Afbeelding',
    uploadSubtitle: 'Sleep uw foto hierheen of klik om te bladeren',
    btnReset: 'Reset',
    btnDownload: 'Download Afbeelding',
  },
};
