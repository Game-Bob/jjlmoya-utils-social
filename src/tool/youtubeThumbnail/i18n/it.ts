import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'estrattore-miniature-youtube';
const title = 'Estrattore di Miniature YouTube (HD)';
const description =
  "Estrai e scarica l'immagine in miniatura originale di qualsiasi video YouTube alla massima risoluzione e senza filigrana usando solo l'URL.";

const faqData = [
  {
    question: 'A quale risoluzione vengono estratte le miniature?',
    answer:
      "Lo strumento tenta sempre di ottenere l'immagine in risoluzione 'MaxRes' (1280x720 o 1920x1080), che è la qualità originale caricata dall'autore del video. Se l'autore non ha caricato una miniatura in HD, mostrerà automaticamente la successiva risoluzione più alta disponibile.",
  },
  {
    question: 'Quali tipi di link supporta?',
    answer:
      'Supporta URL tradizionali di youtube.com/watch, link brevi di youtu.be, link da mobile e persino URL di YouTube Shorts in modo trasparente.',
  },
  {
    question: 'È legale scaricare miniature da YouTube?',
    answer:
      'Sì, lo scaricamento è completamente legale per uso personale, design, parodie e ispirazione (Fair Use). Fai attenzione se intendi utilizzare miniature protette da copyright per scopi puramente commerciali; in questi casi è importante consultare la licenza del video.',
  },
  {
    question: "C'è un limite di utilizzo giornaliero?",
    answer:
      'Non ci sono limiti mensili né giornalieri. Poiché questo software opera lato client risolvendo il pattern dell\'URL internamente nel tuo browser, non interagiamo con le API restrittive tradizionali.',
  },
];

const howToData = [
  {
    name: "Copia l'URL del video",
    text: "Vai su YouTube e copia il link del video dalla barra del browser o dal pulsante di condivisione.",
  },
  {
    name: 'Incolla il link',
    text: "Inserisci l'URL nel campo dell'estrattore o usa il pulsante per incollare dagli appunti.",
  },
  {
    name: 'Seleziona la qualità',
    text: 'Lo strumento mostrerà tutte le risoluzioni disponibili, dalla massima qualità (1080p) fino alla più bassa.',
  },
  {
    name: "Scarica l'immagine",
    text: "Fai clic sul pulsante di download per salvare la miniatura sul tuo dispositivo.",
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

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Documentazione e Riferimenti',
  bibliography: [
    {
      name: 'Guida di YouTube: Aggiungere un\'immagine in miniatura personalizzata',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube Creator Academy: Come creare miniature efficaci',
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
      text: 'Scaricare Miniature di YouTube in HD Gratis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se hai bisogno di <strong>scaricare la miniatura di un video di YouTube</strong> nella sua dimensione originale o alla massima qualità (Full HD o 4K), questo strumento gratuito è la soluzione più rapida. Potrai ottenere l\'immagine di copertina di qualsiasi canale per trarre ispirazione, creare i tuoi design o utilizzarla in presentazioni.',
    },
    {
      type: 'tip',
      title: 'Estrarre Foto di Copertina senza Programmi',
      html: '<p>Non è necessario installare software né registrarsi. Devi solo copiare e incollare il link del video e potrai <strong>salvare la miniatura di YouTube</strong> direttamente sul tuo computer o cellulare.</p>',
    },
    {
      type: 'title',
      text: 'Come ottenere la miniatura di un video di YouTube?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il processo per <strong>estrarre la foto da un video di YouTube</strong> è molto semplice. Segui questi passaggi per ottenere l\'immagine in pochi secondi:',
    },
    {
      type: 'list',
      items: [
        '<strong>1. Copia l\'URL:</strong> Vai su YouTube e copia il link del video (dalla barra del browser o dal pulsante di condivisione).',
        '<strong>2. Incolla il link:</strong> Inserisci l\'URL nel campo di ricerca del nostro estrattore di miniature.',
        '<strong>3. Seleziona la qualità:</strong> Ti mostreremo tutte le risoluzioni disponibili, dalla massima qualità (1080p) alla più bassa (360p).',
        '<strong>4. Scarica l\'immagine:</strong> Fai clic sul pulsante di download per salvare la <i>thumbnail</i> sul tuo dispositivo.',
      ],
    },
    {
      type: 'title',
      text: 'Formati e Risoluzioni Supportati',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Scaricare copertine di video YouTube non è mai stato così facile. Lo strumento cerca automaticamente la migliore immagine possibile (nota come <strong>maxresdefault</strong>), che di solito sono design curati su Photoshop dagli YouTuber. Se il creatore non ha caricato un\'immagine in HD, ti daremo la migliore opzione successiva (<strong>hqdefault</strong> o <strong>mqdefault</strong>).',
    },
    {
      type: 'paragraph',
      html: 'Questa utility è perfetta per <i>Community Manager</i>, graphic designer, creatori di contenuti, creatori di meme o chiunque abbia bisogno di <strong>scaricare la copertina di un video</strong> per i propri progetti. Inoltre, è compatibile con i <strong>YouTube Shorts</strong>, quindi potrai ottenere anche le loro miniature nello stesso modo.',
    },
    {
      type: 'title',
      text: 'Usi Professionali delle Miniature di YouTube',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le miniature di YouTube sono asset visivi di alto valore. Rappresentano ore di lavoro di design, test A/B e ottimizzazione del CTR da parte dei creatori. Sapere come accedervi e scaricarle apre un ventaglio di possibilità professionali.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Creatori di Contenuti',
          html: '<p>Analizza le miniature di video virali nella tua nicchia per capire quali elementi visivi generano più clic: tipografia, colori dominanti, uso di volti o testo.</p><ul><li><strong>Benchmarking visivo:</strong> Confronta le tue miniature con quelle dei leader del tuo settore.</li><li><strong>Iterazione di design:</strong> Scarica e usa le miniature come riferimento in Photoshop o Canva.</li><li><strong>Archivio di ispirazione:</strong> Costruisci una libreria di miniature ad alta conversione.</li></ul>',
        },
        {
          type: 'card',
          title: 'Designer e Marketer',
          html: '<p>Per un graphic designer o un <i>social media manager</i>, accedere rapidamente alle miniature di YouTube è essenziale per presentazioni, proposte ai clienti e audit visivi.</p><ul><li><strong>Presentazioni clienti:</strong> Includi screenshot reali della concorrenza nelle tue proposte.</li><li><strong>Audit del brand:</strong> Valuta la coerenza visiva di un canale YouTube.</li><li><strong>Moodboard:</strong> Raccogli riferimenti visivi di alta qualità senza screenshot sfuocati.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Compatibilità con YouTube Shorts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'estrattore funziona perfettamente con i <strong>YouTube Shorts</strong>. Gli Shorts hanno il loro formato di miniatura verticale (9:16) che viene generato automaticamente dal video. Questo strumento riconosce gli URL degli Shorts (<code>youtube.com/shorts/ID</code>) ed estrae la migliore miniatura disponibile nello stesso modo dei video standard.',
    },
    {
      type: 'tip',
      title: 'Privacy Garantita',
      html: '<p>Tutta l\'estrazione avviene nel tuo browser. Nessun URL o dato viene inviato a server esterni.</p>',
    },
  ],
  ui: {
    urlPlaceholder: 'Incolla il link di YouTube qui...',
    pasteAriaLabel: 'Incolla dagli appunti',
    helperText: 'Formati supportati: youtube.com, youtu.be, shorts.',
    ribbonLabel: 'Massima Qualità',
    downloadBtn: 'Scarica alla Massima Risoluzione',
    qualityMedium: 'Qualità Media',
    qualityStandard: 'Qualità Standard',
    qualityLow: 'Bassa Qualità',
    viewImage: 'Vedi Immagine',
    errorInvalid: 'URL di YouTube non valido. Per favore, controllalo.',
    imgAlt: 'Miniatura HD di YouTube',
  },
};
