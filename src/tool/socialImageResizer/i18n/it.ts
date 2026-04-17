import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'ridimensiona-immagini-social-media';
const title = 'Social Media Image Resizer: Ritaglia e Ridimensiona per ogni Piattaforma';
const description =
  'Ridimensiona e ritaglia le tue foto per Instagram, TikTok, YouTube e altri. Ritaglio intelligente con dimensioni ufficiali aggiornate al 2026.';

const faqData = [
  {
    question: 'La qualità dell’immagine andrà persa durante il ridimensionamento?',
    answer:
      'No, utilizziamo algoritmi di smoothing ad alta qualità. Si raccomanda di caricare un’immagine originale con una risoluzione pari o superiore al formato di destinazione.',
  },
  {
    question: 'È sicuro caricare le mie foto qui?',
    answer:
      'Completamente. L’elaborazione avviene localmente nel tuo browser tramite le API Canvas. Le tue foto non vengono mai inviate ad alcun server.',
  },
  {
    question: 'Quali formati sono supportati?',
    answer:
      'Supportiamo il caricamento di JPG, PNG, WebP e AVIF. I download sono ottimizzati come JPG di alta qualità per la massima compatibilità.',
  },
];

const howToData = [
  {
    name: 'Carica la tua immagine',
    text: 'Trascina il tuo file o esplora il tuo dispositivo per iniziare il processo.',
  },
  {
    name: 'Scegli il formato',
    text: 'Seleziona il social network e il tipo di pubblicazione di cui hai bisogno dal menu laterale.',
  },
  {
    name: 'Regola e scarica',
    text: 'Inquadra la tua foto trascinandola e usa lo zoom per un ritaglio perfetto. Al termine, clicca su scarica.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti',
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
      text: 'Ridimensionatore di Immagini Social per ogni Piattaforma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Nell'ecosistema digitale odierno, la prima impressione è visiva. Ogni social network opera secondo algoritmi specifici che privilegiano contenuti adattati nativamente alle proprie proporzioni. Il nostro ridimensionatore di immagini social non è solo uno strumento tecnico: è il tuo alleato per garantire che il tuo messaggio arrivi senza ritagli indesiderati o perdite di qualità.",
    },
    {
      type: 'paragraph',
      html: 'Sia che tu debba convertire una foto orizzontale in una d’impatto verticale per le Instagram Stories, o adattare un design per un complesso banner di YouTube, la nostra utility utilizza un sistema di ritaglio intelligente che ti permette di posizionare e scalare la tua immagine con precisione direttamente nel tuo browser.',
    },
    {
      type: 'title',
      text: 'Dimensioni Ufficiali Immagini Social 2026',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — Post Quadrato', body: '1080 × 1080 px · Rapporto 1:1' },
        { title: 'Instagram — Post Verticale', body: '1080 × 1350 px · Rapporto 4:5' },
        { title: 'TikTok / Reels — Verticale', body: '1080 × 1920 px · Rapporto 9:16' },
        { title: 'YouTube — Thumbnail', body: '1280 × 720 px · Rapporto 16:9' },
        { title: 'YouTube — Banner Canale', body: '2560 × 1440 px · Rapporto 16:9' },
        { title: 'X (Twitter) — Post Standard', body: '1200 × 675 px · Rapporto 16:9' },
        { title: 'LinkedIn — Copertina Profilo', body: '1584 × 396 px · Rapporto 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: 'Il formato quadrato 1:1 rimane un classico, ma il verticale 4:5 occupa più spazio sullo schermo e genera fino al 30% in più di engagement nel feed.',
        },
        {
          title: 'Contenuti Short Form',
          body: 'Per TikTok e Reels, lo standard è 9:16. Questo formato immersivo richiede che il punto focale sia perfettamente allineato per evitare di essere coperto dalla UI dell’app.',
        },
        {
          title: 'Engagement Visivo',
          body: 'Dalle miniature ai banner, ogni asset ha un peso specifico nel tasso di clic. Un ritaglio preciso assicura che il testo e gli elementi chiave siano sempre leggibili.',
        },
        {
          title: 'Branding Professionale',
          body: 'Sui network professionali come LinkedIn, la nitidezza è autorità. Gli header richiedono rapporti specifici per evitare di apparire sgranati su schermi ad alta densità.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Perché il Rapporto d’Aspetto è Importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il rapporto d’aspetto è la relazione proporzionale tra la larghezza e l’altezza di un’immagine. Ignorarlo costringe le piattaforme a zoomare o aggiungere barre nere, il che penalizza l’estetica e la portata organica.',
    },
    {
      type: 'list',
      items: [
        'Impedisce che testi o loghi vengano tagliati dalle icone native delle app.',
        'Mantiene la densità di pixel ottimale senza distorcere o allungare la foto originale.',
        'Fa risparmiare tempo centralizzando tutte le misure ufficiali in un unico strumento web.',
        'Migliora la velocità di caricamento generando file con peso e dimensioni esatte.',
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio di Composizione',
      html: "<p>Quando usi la nostra funzione di trascinamento manuale, prova a posizionare il soggetto principale della tua foto in uno dei punti di intersezione della griglia. Questo crea composizioni più dinamiche e professionali per i tuoi social network.</p>",
    },
    {
      type: 'title',
      text: 'Passaggi per un Ritaglio Perfetto',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Seleziona il tuo formato: scegli la piattaforma e il tipo di pubblicazione dal menu laterale.',
        'Carica l’immagine: trascina il file o usa il selettore per importare la tua foto.',
        'Regola l’inquadratura: trascina la foto nell’area visibile e usa lo zoom per la precisione.',
        'Esportazione istantanea: clicca su scarica per avere la tua immagine pronta da pubblicare.',
      ],
    },
    {
      type: 'title',
      text: 'Privacy ed Elaborazione Locale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La tua privacy è assoluta. Questo ridimensionatore elabora le immagini localmente nel tuo browser usando le API Canvas. Le tue foto non vengono mai caricate su alcun server esterno, garantendo sicurezza completa e velocità di elaborazione istantanea.',
    },
    {
      type: 'title',
      text: 'Ottimizzazione Professionale per i Social Media',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Adattare i tuoi contenuti visivi in modo professionale è una strategia di crescita diretta. Il nostro strumento semplifica il flusso di lavoro per creatori e community manager, assicurando che ogni post appaia perfetto su ogni dispositivo e piattaforma.',
    },
  ],
  ui: {
    sidebarTitle: 'Formati Social',
    uploadTitle: 'Carica Immagine',
    uploadSubtitle: 'Trascina qui la tua foto o clicca per sfogliare',
    btnReset: 'Reset',
    btnDownload: 'Scarica Immagine',
  },
};
