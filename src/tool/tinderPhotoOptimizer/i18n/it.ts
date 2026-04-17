import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'ottimizzatore-foto-tinder';
const title = 'Ottimizzatore di Foto per Tinder: Analisi del Volto e Composizione';
const description =
  "Ottimizza le tue foto per Tinder con l'analisi algoritmica del volto. Simula l'interfaccia Tinder 2026, analizza l'inquadratura scientifica e la linea degli occhi, esporta ritratti 9:16 perfetti per massimizzare i match.";

const faqData = [
  {
    question: 'In che modo questo strumento migliora i miei match su Tinder?',
    answer:
      "Lo strumento analizza i fattori tecnici chiave: il rapporto delle dimensioni facciali (ideale 30-50%), la posizione della linea degli occhi rispetto al terzo superiore, la copertura dell'inquadratura e le zone morte dell'interfaccia di Tinder. Regolando questi parametri, la tua foto proietta più fiducia e supera i filtri visivi dell'algoritmo.",
  },
  {
    question: 'È sicuro caricare le mie foto qui?',
    answer:
      "Completamente sicuro. Tutto il processo avviene nel tuo browser tramite Canvas API. Le tue foto non vengono mai inviate a nessun server né memorizzate da nessuna parte.",
  },
  {
    question: "Cosa fa esattamente il rilevamento del volto con l'IA?",
    answer:
      "Utilizza face-api.js per rilevare 68 punti di riferimento facciali, analizzare l'espressione (sorriso, espressione seria), valutare la posizione degli occhi e misurare l'inclinazione della testa. Tutta l'analisi avviene localmente sul tuo dispositivo.",
  },
  {
    question: 'Perché raccomandate lo zoom a 1.2x?',
    answer:
      "Le fotocamere frontali degli smartphone usano ottiche grandangolari (24mm) che distorcono il volto con l'aberrazione a barilotto. Uno zoom di 1.2x simula una focale di 50-85mm, eliminando la distorsione e fornendo proporzioni facciali più naturali e attraenti.",
  },
];

const howToData = [
  {
    name: 'Carica la tua foto',
    text: "Trascina o fai clic sul simulatore di Tinder per caricare la tua immagine.",
  },
  {
    name: "Analizza la composizione",
    text: "L'IA rileva il tuo volto automaticamente e mostra metriche su dimensioni facciali, linea degli occhi, copertura ed espressione.",
  },
  {
    name: 'Regola con precisione',
    text: "Usa i controlli di zoom e luminosità, attiva l'auto-inquadratura o trascina manualmente l'immagine all'interno del simulatore.",
  },
  {
    name: 'Download ottimizzato',
    text: 'Esporta la tua foto nel formato nativo 1080x1920 ottimizzato per Tinder, con metadati puliti.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti',
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
      text: 'Ottimizzatore di Foto per Tinder: La Guida Scientifica e Tecnica Definitiva (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Nell'ecosistema degli appuntamenti digitali, il tuo profilo Tinder viene elaborato da due algoritmi contemporaneamente: l'algoritmo di visione avanzata della piattaforma stessa e il cervello umano dell'utente che scorre. Il nostro strumento integra principi di <strong>psicologia evoluzionistica</strong>, <strong>biometria facciale</strong> e <strong>elaborazione dei segnali digitali</strong> per garantire che la tua immagine proietti il massimo valore sociale e attrattiva tecnica.",
    },
    {
      type: 'title',
      text: 'La Psicologia della Prima Impressione: L\'Effetto degli 1.2 Secondi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Studi neuroscientifici indicano che il cervello umano impiega circa 1/10 di secondo per formarsi un'impressione iniziale sulla fiducia che qualcuno proietta. Su Tinder, hai poco più di un secondo prima del prossimo swipe. Il nostro strumento analizza i fattori che accelerano il processo decisionale positivo:",
    },
    {
      type: 'list',
      items: [
        "<strong>Contatto Visivo e Linea dello Sguardo:</strong> Lo sguardo diretto attiva regioni del cervello legate alla ricompensa sociale. Posizionare gli occhi nel terzo superiore massimizza la probabilità che l'utente si soffermi sul tuo sguardo prima di leggere il tuo nome.",
        "<strong>Asimmetria e Postura:</strong> Una leggera inclinazione può ammorbidire tratti aggressivi, ma un roll eccessivo trasmette instabilità. Il nostro algoritmo misura l'angolo esatto per mantenerti nel range di fiducia.",
        "<strong>Contrasto Figura-Sfondo:</strong> Il sistema premia le foto in cui il soggetto è chiaramente separato dallo sfondo. Un profilo tecnico ben definito aiuta il motore di rendering a far risaltare il tuo volto rispetto alla concorrenza.",
      ],
    },
    {
      type: 'title',
      text: "Analisi Tecnica della Lente: Il Problema del Grandangolo",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Quasi tutte le foto del profilo vengono scattate con smartphone, le cui fotocamere frontali sono grandangolari. L'errore più comune è avvicinarsi troppo al dispositivo.",
    },
    {
      type: 'paragraph',
      html: "<strong>L'Aberrazione a Barilotto:</strong> A meno di un metro di distanza, un obiettivo da 24mm (standard sui cellulari) espande il centro dell'immagine. Questo fa apparire i nasi più grandi e il viso più tondo di quanto sia in realtà. La nostra raccomandazione di <strong>Zoom 1.2x</strong> è correttiva: applicando un leggero ritaglio digitale, simuli una focale da 50mm a 85mm, la lunghezza focale d'oro che i fotografi di moda usano per snellire il volto e mantenere le proporzioni reali.",
    },
    {
      type: 'title',
      text: 'Interfaccia di Tinder: La Scienza delle Zone Morte',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Molte foto eccellenti falliscono perché ignorano lo strato software (UI) che Tinder sovrappone. Un utente medio non vede la tua foto pulita; vede un insieme di pulsanti, gradienti e testo.",
    },
    {
      type: 'list',
      items: [
        "<strong>Zona dei Titoli (Superiore 15%):</strong> Qui risiedono gli indicatori di progresso e la barra di stato. Se la tua fronte o i tuoi occhi sono qui, l'interfaccia taglia visivamente la tua testa.",
        "<strong>Zona di Azione (Pulsanti):</strong> Le icone Like, Nope e Boost occupano i laterali inferiori. Se le tue mani o elementi di stile sono lì, si perdono totalmente.",
        "<strong>Il Gradiente di Leggibilità (Inferiore 28%):</strong> Tinder applica una sfumatura nera perché il tuo nome e l'età siano leggibili. Se il tuo volto cade in questa zona, il testo si sovrapporrà ai tuoi lineamenti, rovinando l'estetica del profilo.",
      ],
    },
    {
      type: 'title',
      text: 'Analisi di Visione in Tempo Reale: Tradurre l\'Algoritmo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Il nostro strumento utilizza modelli di <strong>Computer Vision di ultima generazione</strong> per esaminare la tua immagine come farebbero i moderatori automatici di Tinder:",
    },
    {
      type: 'list',
      items: [
        "<strong>Landmark Detection:</strong> Mappiamo 68 punti facciali per analizzare la simmetria e l'apertura degli occhi. Occhi ben aperti e visibili correlano con livelli più alti di estroversione percepita.",
        "<strong>Mood Evaluation:</strong> Un sorriso leggero attiva i neuroni specchio in chi ti guarda. Rileviamo l'intensità dell'espressione facciale per assicurarci che tu non sembri troppo serio o inaccessibile.",
        "<strong>Qualità dell'Illuminazione:</strong> Il sistema valuta la fiducia del rilevamento. Se il punteggio è basso, la foto ha rumore visivo o ombre dure che l'algoritmo di Tinder potrebbe contrassegnare come contenuto di bassa qualità.",
      ],
    },
    {
      type: 'title',
      text: 'Metadati ed Esportazione Ottimizzata per Tinder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Sapevi che il peso della tua immagine influenza l'algoritmo? Le app di incontri danno priorità ai contenuti che caricano velocemente per non interrompere il flusso dell'utente.",
    },
    {
      type: 'list',
      items: [
        "<strong>Metadata Stripping (Privacy e SEO):</strong> Eliminiamo i record EXIF. Una foto pulita ti dà una tela bianca per l'algoritmo della piattaforma.",
        "<strong>Compressione Intelligente senza Perdita:</strong> Riduciamo il peso del file JPG mantenendo lo spazio colore sRGB nativo di iOS e Android. La tua foto apparirà vibrante anche con poca copertura.",
        "<strong>Formato 9:16 Immersivo:</strong> Fornendo esattamente 1080x1920 pixel, evitiamo che Tinder applichi il suo algoritmo di compressione aggressivo che genera artefatti d'immagine.",
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio dell\'Esperto',
      html: "<p>La prima foto deve essere SEMPRE un ritratto chiaro dalle spalle in su. Riserva le foto a figura intera o di attività per la 3ª o 4ª posizione. Assicurati che in quella prima impressione, il tuo sguardo sia libero da ostacoli e il tuo volto abbia la dimensione ottimale (30-50%).</p>",
    },
    {
      type: 'title',
      text: 'Sicurezza ed Etica del Processo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Comprendiamo che le tue foto siano private. Questo ottimizzatore utilizza <strong>tecnologia Client-Side</strong>: le immagini vengono elaborate tramite un motore canvas nel tuo browser locale. Nessun dato esce dal tuo dispositivo. È il modo più sicuro e veloce per ottimizzare il tuo profilo senza compromettere la tua privacy.",
    },
  ],
  ui: {
    uploadTitle: 'Ottimizza Foto',
    uploadSubtitle: 'Trascina o fai clic per iniziare',
    btnDownload: 'Scarica Foto Ottimizzata',
    btnRescan: 'Riscansiona Volto',
    btnAutoFocus: 'Auto-Inquadratura',
    btnMarkFace: 'Marca Volto',
    panelManual: 'Regolazioni Manuali',
    panelVisualization: 'Visualizzazione Avanzata',
    panelMetrics: 'Analitica della Composizione',
    panelExport: 'Esporta per Tinder 2026',
    panelExportDesc: 'Ritaglio automatico a 1080x1920 con metadati ottimizzati.',
    labelZoom: 'Zoom',
    labelBrightness: 'Luminosità',
    toggleGrid: 'Griglia dei Terzi',
    toggleGridDesc: 'Regolazione della composizione classica',
    toggleDeadzones: 'Zone di Pericolo',
    toggleDeadzonesDesc: 'Evita che la UI nasconda il tuo volto',
    toggleFaceBox: 'Vedi Volto Rilevato',
    toggleFaceBoxDesc: 'Landmarks e area di rilevamento',
    metricFaceSize: 'Rapporto Volto',
    metricEyeLine: 'Linea dello Sguardo',
    metricCoverage: 'Copertura',
    metricMood: 'Espressione',
    metricQuality: 'Fiducia',
    analysisSuccess: 'Fattori di Successo',
    analysisWarning: 'Ottimizzazione',
    analysisError: 'Errori Critici',
    deadzoneTop: 'Zona UI Superiore',
    deadzoneBottom: 'Zona Informazioni',
    loaderAnalyzing: 'Analisi della composizione...',
    loaderModels: 'Caricamento modelli di visione...',
    simulatorName: 'Il Tuo Nome, 25',
    simulatorJob: 'La Tua Professione',
    simulatorCity: 'Vive in Italia',
    simulatorDistance: 'A 5 km da te',
    statusOptimal: 'OTTIMALE',
    statusIncorrect: 'INCORRETTA',
    statusHigh: 'ALTA',
    statusMedium: 'MEDIA',
    statusLow: 'BASSA',
    statusPositive: 'POSITIVO',
    statusNeutral: 'NEUTRALE',
    alertExcellent: 'Composizione tecnica eccellente.',
    alertEmptySpaces: 'SPAZI VUOTI: L\'immagine non copre tutta l\'inquadratura. Regola lo zoom o la posizione.',
    alertAlmostInvisible: 'QUASI INVISIBILE: Sei molto lontano. Ingrandisci finché il tuo volto occupa almeno un terzo dello schermo.',
    alertTooClose: 'TROPPO VICINO: I primi piani estremi possono risultare aggressivi.',
    alertPerfectSize: 'DIMENSIONE PERFETTA: Il tuo volto ha il rapporto ideale per trasmettere fiducia.',
    alertImpactfulLook: 'SGUARDO IMPATTANTE: I tuoi occhi sono sulla linea di massima attenzione.',
    alertEyeLineMoveUp: 'LINEA DEGLI OCCHI: Per un\'inquadratura professionale, alza un po\' il volto verso la linea superiore.',
    alertEyeLineMoveDown: 'LINEA DEGLI OCCHI: Per un\'inquadratura professionale, abbassa un po\' il volto verso la linea superiore.',
    alertTiltedHead: 'TESTA INCLINATA: Una postura troppo storta può trasmettere instabilità.',
    alertSmileDetected: 'SORRISO RILEVATO: I sorrisi aumentano significativamente il tasso di match.',
    alertSevereExpression: 'ESPRESSIONE SEVERA: Prova a usare una foto con un gesto più gentile.',
    alertObstructedTop: 'OSTRUITO: La barra di avanzamento copre il tuo volto.',
    alertObstructedBottom: 'OSTRUITO: Il blocco delle informazioni copre il tuo volto.',
    alertLowLight: 'ILLUMINAZIONE DEFICIENTE: L\'IA ha difficoltà a vederti. Cerca una foto con luce migliore.',
    alertCutOff: 'TAGLIATO: Il volto esce dall\'inquadratura verticale.',
    alertProTip: 'CONSIGLIO PRO: Se è un selfie, usa lo Zoom (1.2x) per evitare distorsioni della lente.',
    canvasFaceDetected: 'Volto rilevato',
  },
};
