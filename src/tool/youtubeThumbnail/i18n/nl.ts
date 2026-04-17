import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'youtube-thumbnail-ophalen-hd';
const title = 'YouTube Thumbnail Downloader (HD)';
const description =
  'Extraheer en download de originele miniatuurafbeelding van elke YouTube-video in maximale resolutie en zonder watermerken met alleen de URL.';

const faqData = [
  {
    question: 'Op welke resolutie worden de thumbnails geëxtraheerd?',
    answer:
      "De tool probeert altijd de afbeelding te verkrijgen in 'MaxRes' resolutie (1280x720 of 1920x1080), wat de originele kwaliteit is die door de maker van de video is geüpload. Als de auteur geen HD-thumbnail heeft geüpload, wordt automatisch de eerstvolgende hoogst beschikbare resolutie getoond.",
  },
  {
    question: 'Welke soorten links worden ondersteund?',
    answer:
      'Het ondersteunt traditionele youtube.com/watch URL\'s, korte youtu.be links, mobiele links en zelfs YouTube Shorts URL\'s op een transparante manier.',
  },
  {
    question: 'Is het legaal om YouTube-thumbnails te downloaden?',
    answer:
      'Ja, downloaden is volledig legaal voor persoonlijk gebruik, ontwerp, parodieën en inspiratie (Fair Use). Wees voorzichtig als je thumbnails die door auteursrecht zijn beschermd gaat gebruiken voor puur commerciële doeleinden; in die gevallen is het belangrijk om de licentie van de video te controleren.',
  },
  {
    question: 'Is er een dagelijkse gebruikslimiet?',
    answer:
      'Er zijn geen maandelijkse of dagelijkse limieten. Omdat deze software aan de client-zijde werkt door het URL-patroon intern in je browser op te lossen, hebben we geen interactie met de traditionele beperkende API\'s.',
  },
];

const howToData = [
  {
    name: 'Kopieer de video-URL',
    text: 'Ga naar YouTube en kopieer de link van de video vanuit de browserbalk of via de deelknop.',
  },
  {
    name: 'Plak de link',
    text: 'Voer de URL in het veld van de extractor in of gebruik de plakknop vanaf het klembord.',
  },
  {
    name: 'Selecteer de kwaliteit',
    text: 'De tool toont alle beschikbare resoluties, van maximale kwaliteit (1080p) tot de laagste.',
  },
  {
    name: 'Download de afbeelding',
    text: 'Klik op de downloadknop om de thumbnail op je apparaat op te slaan.',
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

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Documentatie en Referenties',
  bibliography: [
    {
      name: 'YouTube Help: Een aangepaste miniatuurafbeelding toevoegen',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube Creator Academy: Hoe maak je effectieve thumbnails',
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
      text: 'YouTube Thumbnails Gratis Downloaden in HD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Als je de <strong>thumbnail van een YouTube-video wilt downloaden</strong> in zijn originele formaat of maximale kwaliteit (Full HD of 4K), dan is deze gratis tool de snelste oplossing. Je kunt de omslagfoto van elk kanaal verkrijgen ter inspiratie, om je eigen ontwerpen te maken of om te gebruiken in presentaties.',
    },
    {
      type: 'tip',
      title: 'Omslagfoto Extraheren zonder Programma\'s',
      html: '<p>Het is niet nodig om software te installeren of je te registreren. Je hoeft alleen maar de link van de video te kopiëren en te plakken en je kunt de <strong>YouTube thumbnail direct opslaan</strong> op je computer of mobiel.</p>',
    },
    {
      type: 'title',
      text: 'Hoe krijg je de thumbnail van een YouTube-video?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het proces om de <strong>foto van een YouTube-video te halen</strong> is heel eenvoudig. Volg deze stappen om de afbeelding in seconden te verkrijgen:',
    },
    {
      type: 'list',
      items: [
        '<strong>1. Kopieer de URL:</strong> Ga naar YouTube en kopieer de link van de video (vanuit de browserbalk of via de deelknop).',
        '<strong>2. Plak de link:</strong> Voer de URL in het zoekveld van onze thumbnail extractor in.',
        '<strong>3. Selecteer de kwaliteit:</strong> We tonen je alle beschikbare resoluties, van maximale kwaliteit (1080p) tot de laagste (360p).',
        '<strong>4. Download de afbeelding:</strong> Klik op de downloadknop om de <i>thumbnail</i> op je apparaat op te slaan.',
      ],
    },
    {
      type: 'title',
      text: 'Ondersteunde Formaten en Resoluties',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Omslagfoto\'s van YouTube-video\'s downloaden was nog nooit zo makkelijk. De tool zoekt automatisch naar de best mogelijke afbeelding (bekend als <strong>maxresdefault</strong>), wat meestal ontwerpen zijn die door YouTubers in Photoshop zijn gemaakt. Als de maker geen afbeelding in HD heeft geüpload, geven we je de eerstvolgende beste optie (<strong>hqdefault</strong> of <strong>mqdefault</strong>).',
    },
    {
      type: 'paragraph',
      html: 'Deze tool is perfect voor <i>Community Managers</i>, grafisch ontwerpers, content creators, meme-makers of iedereen die de <strong>cover van een video</strong> nodig heeft voor hun projecten. Bovendien is het compatibel met <strong>YouTube Shorts</strong>, dus je kunt hun thumbnails op dezelfde manier verkrijgen.',
    },
    {
      type: 'title',
      text: 'Professioneel Gebruik van YouTube Thumbnails',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'YouTube thumbnails zijn visuele activa van hoge waarde. Ze vertegenwoordigen uren aan ontwerpwerk, A/B-tests en CTR-optimalisatie door de makers. Weten hoe je ze kunt benaderen en downloaden opent een scala aan professionele mogelijkheden.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Content Creators',
          html: '<p>Analyseer de thumbnails van virale video\'s in jouw niche om te begrijpen welke visuele elementen meer klikken genereren: typografie, dominante kleuren, gebruik van gezichten of tekst.</p><ul><li><strong>Visuele benchmarking:</strong> Vergelijk jouw thumbnails met die van de leiders in jouw sector.</li><li><strong>Ontwerp-iteratie:</strong> Download en gebruik thumbnails als referentie in Photoshop of Canva.</li><li><strong>Inspiratie-archief:</strong> Bouw een bibliotheek op van thumbnails met een hoge conversie.</li></ul>',
        },
        {
          type: 'card',
          title: 'Ontwerpers en Marketeers',
          html: '<p>Voor een grafisch ontwerper of een <i>social media manager</i> is snelle toegang tot YouTube thumbnails essentieel voor presentaties, klantvoorstellen en visuele audits.</p><ul><li><strong>Klantpresentaties:</strong> Voeg echte screenshots van de concurrentie toe aan je voorstellen.</li><li><strong>Merk-audits:</strong> Evalueer de visuele consistentie van een YouTube-kanaal.</li><li><strong>Mood boards:</strong> Verzamel visuele referenties van hoge kwaliteit zonder wazige screenshots.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Compatibiliteit met YouTube Shorts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De extractor werkt perfect met <strong>YouTube Shorts</strong>. Shorts hebben hun eigen verticale thumbnail-formaat (9:16) dat automatisch vanuit de video wordt gegenereerd. Deze tool herkent de URL\'s van Shorts (<code>youtube.com/shorts/ID</code>) en extraheert de beste beschikbare thumbnail op dezelfde manier als bij standaard video\'s.',
    },
    {
      type: 'tip',
      title: 'Gegarandeerde Privacy',
      html: '<p>De gehele extractie vindt plaats in je browser. Er worden geen URL\'s of gegevens naar een externe server verzonden.</p>',
    },
  ],
  ui: {
    urlPlaceholder: 'Plak de YouTube-link hier...',
    pasteAriaLabel: 'Plakken vanaf klembord',
    helperText: 'Ondersteunde formaten: youtube.com, youtu.be, shorts.',
    ribbonLabel: 'Maximale Kwaliteit',
    downloadBtn: 'Downloaden in Maximale Resolutie',
    qualityMedium: 'Gemiddelde Kwaliteit',
    qualityStandard: 'Standaard Kwaliteit',
    qualityLow: 'Lage Kwaliteit',
    viewImage: 'Bekijk Afbeelding',
    errorInvalid: 'Ongeldige YouTube URL. Controleer deze a.u.b.',
    imgAlt: 'YouTube HD Thumbnail',
  },
};
