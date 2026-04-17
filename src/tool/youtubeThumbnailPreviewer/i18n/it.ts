import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'anteprima-miniature-youtube';
const title = 'Anteprima Miniature YouTube Online: Migliora il tuo CTR Gratis';
const description =
  'Carica la tua miniatura e visualizza come appare nel feed reale di YouTube su mobile e desktop. Simulatore di modalità chiara e scura per ottimizzare i clic istantaneamente.';

const faqData = [
  {
    question: 'Perché è fondamentale testare le miniature di YouTube?',
    answer:
      'La maggior parte degli utenti guarda YouTube su dispositivi mobili. Una miniatura che appare ottima sul tuo monitor potrebbe risultare illeggibile su uno schermo piccolo. Testarla in un simulatore assicura che il testo sia chiaro e che il soggetto principale risalti in qualsiasi dimensione.',
  },
  {
    question: 'Devo registrarmi per usare questo Previewer?',
    answer:
      'No. Il nostro strumento è gratuito al 100% e funziona direttamente nel tuo browser. Non è necessario creare un account né lasciare la tua email per ottimizzare le tue miniature.',
  },
  {
    question: 'I miei design vengono caricati sul vostro server?',
    answer:
      'Assolutamente no. La privacy è la nostra priorità numero uno. Quando selezioni un file, questo viene caricato localmente nella memoria del tuo browser tramite un URL temporaneo. Nessuno, tranne te, può vedere il design che stai testando.',
  },
  {
    question: 'In che modo questo strumento aiuta a migliorare il mio CTR?',
    answer:
      'Il CTR (Click-Through Rate) è la percentuale di persone che cliccano quando vedono la miniatura. Simulando l’ambiente reale (sfondo nero vs bianco, mobile vs desktop), puoi correggere errori di contrasto e composizione prima della pubblicazione, aumentando i tuoi clic.',
  },
  {
    question: 'Funziona con la Modalità Scura ufficiale di YouTube?',
    answer:
      'Sì. Abbiamo incluso un selettore di temi (Chiaro e Scuro) che imita esattamente i colori esadecimali utilizzati dall’app ufficiale di YouTube in entrambe le modalità.',
  },
];

const howToData = [
  {
    name: 'Carica il tuo design',
    text: 'Fai clic sull’area di caricamento o trascina il tuo file immagine (PNG, JPG o WebP) direttamente nello strumento.',
  },
  {
    name: 'Imposta il contesto',
    text: 'Inserisci il titolo del tuo video e il nome del tuo canale affinché la simulazione sia il più realistica possibile rispetto al feed reale.',
  },
  {
    name: 'Cambia dispositivo',
    text: "Alterna tra la vista 'Desktop' e 'Mobile' per verificare la leggibilità su schermi di diverse dimensioni.",
  },
  {
    name: 'Testa il contrasto',
    text: "Attiva il tema 'Scuro' per vedere se i colori risaltano correttamente contro lo sfondo nero di YouTube.",
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

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    {
      name: 'Guida di YouTube: Creare miniature personalizzate per i video',
      url: 'https://support.google.com/youtube/answer/141805',
    },
    {
      name: 'Nielsen Norman Group: Visual Processing and UX Design',
      url: 'https://www.nngroup.com/articles/visual-processing/',
    },
    {
      name: 'Derral Eves: The YouTube Formula (Thumbnail Strategy)',
      url: 'https://derraleves.com/the-youtube-formula/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Anteprima Miniature per YouTube: Domina il CTR del tuo Canale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nell’ecosistema di YouTube, la miniatura (o thumbnail) è la porta d’ingresso ai tuoi contenuti. Puoi avere il miglior video del mondo — montaggio da Hollywood, sceneggiatura da Oscar — ma se nessuno clicca, il tuo lavoro sarà invisibile per l’algoritmo. È qui che entra in gioco il <strong>CTR (Click-Through Rate)</strong>, e la miniatura è il fattore determinante.',
    },
    {
      type: 'title',
      text: 'Perché è necessario testare le miniature prima di caricarle',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Anteprima Reale:</strong> Guarda la tua miniatura esattamente come apparirà nel feed di YouTube.',
        '<strong>Modalità Scura e Chiara:</strong> Assicurati che i colori risaltino in qualsiasi configurazione dell’utente.',
        '<strong>Simulatore di Dispositivi:</strong> Controlla la leggibilità del testo sia su monitor che su piccoli schermi mobile.',
        '<strong>Ottimizzazione del CTR:</strong> Confronta il tuo design con l’interfaccia nativa per massimizzare i clic.',
        '<strong>Nessuna Registrazione:</strong> Carica la tua immagine e provala all’istante senza creare account.',
        '<strong>Privacy Garantita:</strong> I tuoi design vengono elaborati localmente e mai caricati sui server.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Molti creator commettono l’errore di progettare le proprie miniature su grandi monitor, visualizzandole a schermo intero nei loro editor preferiti. Il problema è che l’utente finale la vede raramente così. La maggior parte le consuma su un dispositivo mobile mentre scorre il feed, o in un angolo del monitor in modalità scura. Il nostro <strong>Anteprima Miniature di YouTube</strong> ti permette di rompere questa "illusione del designer" e vedere la realtà chirurgica del feed.',
    },
    {
      type: 'title',
      text: 'Metriche Tecniche e Prestazioni',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0,2 s', body: 'Tempo di Risposta' },
        { title: '4K', body: 'Risoluzione Massima' },
        { title: '100%', body: 'Privacy Locale' },
        { title: 'HD', body: 'Qualità Nativa' },
      ],
    },
    {
      type: 'title',
      text: 'La Psicologia del Clic: Perché le miniature falliscono',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il cervello umano elabora le immagini migliaia di volte più velocemente del testo. Tuttavia, su YouTube, la concorrenza è brutale. La tua miniatura non deve solo essere "bella" — deve essere <strong>leggibile</strong> e avere <strong>contrasto</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Un errore comune è usare colori che si fondono con lo sfondo di YouTube. Se usi grigi scuri e il tuo spettatore è in modalità scura, il tuo video scomparirà semplicemente dalla sua visione periferica. Usando questo tester, puoi alternare i temi e assicurarti che il tuo design "spicchi" in qualsiasi scenario.',
    },
    {
      type: 'title',
      text: 'Confronto Diretto: Design vs. Realtà',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vale la pena perdere 30 secondi per testare la miniatura? La risposta è un rotondo SÌ. Una miniatura ottimizzata può raddoppiare le tue visualizzazioni nelle prime 24 ore, indicando all’IA di YouTube che il tuo contenuto ha "presa".',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Design in Photoshop / Canva',
          body: 'Falsa sensazione delle dimensioni reali · Ignora il contrasto con lo sfondo dell’app · Il testo sembra leggibile ma forse non lo è · Non vedi gli elementi della UI (durata, avatar)',
        },
        {
          title: 'Anteprima Miniature YouTube',
          body: 'Vista reale nel feed Home · Contrasto verificato in Dark vs Light Mode · Leggibilità del testo garantita su mobile · Simulazione di titoli e nomi canale',
        },
      ],
    },
    {
      type: 'title',
      text: 'Checklist per una Miniatura con CTR Superiore al 10%',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Prima di esportare il tuo design finale, assicurati di passare attraverso questa lista di controllo utilizzando il nostro simulatore professionale:',
    },
    {
      type: 'list',
      items: [
        'Il testo è leggibile su uno schermo mobile piccolo?',
        'C’è abbastanza contrasto tra lo sfondo e il soggetto principale?',
        'La miniatura appare bene sullo sfondo nero della Modalità Scura?',
        'Il titolo del video copre informazioni vitali dell’immagine?',
        'Il badge della durata (il quadratino nero) nasconde qualcosa di importante?',
        'Il volto o l’oggetto principale trasmettono l’emozione desiderata a dimensioni ridotte?',
      ],
    },
    {
      type: 'title',
      text: 'Anatomia di una Miniatura ad Alto Impatto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Basandoci sull’analisi dei canali più grandi al mondo, una miniatura vincente segue solitamente questo schema strutturale:',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Soggetto Principale',
          body: 'Fuoco dell’attenzione primaria · Usa ritagli nitidi con un leggero bordo o saturazione extra.',
        },
        {
          title: 'Testo (Max 3 parole)',
          body: 'Contesto istantaneo · Usa font Sans Serif spessi e colori complementari.',
        },
        {
          title: 'Sfondo Sfocato',
          body: 'Separazione dei piani · Aggiunge profondità in modo che il soggetto principale "salti" fuori dallo schermo.',
        },
        {
          title: 'Spazio della Durata',
          body: 'Evitare errori · Non mettere volti o testo nell’angolo in basso a destra.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Il Trucco della Zona Morta',
      html: '<p>YouTube posiziona sempre un riquadro nero con la durata del video nell’angolo in basso a destra della miniatura. Migliaia di creator mettono elementi vitali in quella zona, solo per scoprire che l’app li copre. Il nostro strumento simula questo riquadro in modo da non coprire mai la tua inquadratura migliore.</p>',
    },
    {
      type: 'title',
      text: 'Vantaggi e Limitazioni dello Strumento',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Interfaccia ultra rapida e reattiva',
          body: 'Limitazione: Non permette l’editing dell’immagine (usare Canva/PS)',
        },
        {
          title: 'Mockup esatti dell’App e del Web',
          body: 'Limitazione: Non simula gli annunci Pre-roll',
        },
        {
          title: 'Gratis e senza pubblicità invasiva',
          body: 'Limitazione: Supporta solo file locali',
        },
      ],
    },
    {
      type: 'title',
      text: "Uso della Modalità 'Split' (Confronto Diretto)",
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Questa è la funzione di punta. Attivando la modalità Split, vedrai la tua miniatura attraverso la lente della Modalità Chiara e della Modalità Scura contemporaneamente. È il modo definitivo per verificare se la tua tavolozza di colori è universale o se necessita di regolazioni di luminosità e contrasto.',
    },
    {
      type: 'title',
      text: 'Privacy: I Tuoi Design non vengono Caricati sul Cloud',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sappiamo che le tue miniature sono parte della tua strategia segreta prima di un lancio. Per questo abbiamo progettato questa utilità affinché lavori esclusivamente nel motore del tuo browser. <strong>Nulla viene caricato su internet</strong>. Il file che selezioni viene caricato tramite un URL locale temporaneo che scompare alla chiusura della scheda. La tua proprietà intellettuale è al 100% sotto il tuo controllo.',
    },
    {
      type: 'title',
      text: 'Conclusione: Il Pixel Perfetto Garantito',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Smetti di tirare a indovinare e inizia a validare. L’<strong>Anteprima Miniature per YouTube</strong> di JJLMoya è lo strumento gratuito che separa i creator amatoriali dai professionisti dei contenuti. Un piccolo aggiustamento nella dimensione di un font o nella posizione del soggetto può fare la differenza tra un video che passa inosservato e un successo virale.',
    },
    {
      type: 'paragraph',
      html: 'Inizia a ottimizzare il tuo canale ora e dai ai tuoi video il tasso di clic che meritano!',
    },
  ],
  ui: {
    dropFeedTitle: 'Trascina la tua Miniatura',
    dropFeedSub: 'PNG, JPG o WebP · Immagini multiple',
    dropAvatarTitle: 'Trascina il tuo Avatar',
    dropAvatarSub: 'Immagine profilo del canale',
    labelTitle: 'Titolo del video',
    labelChannel: 'Nome del canale',
    defaultTitle: 'Il tuo Titolo Video Qui',
    defaultChannel: 'Nome del Canale',
    btnDesktop: 'Desktop',
    btnMobile: 'Mobile',
    btnClear: 'Pulisci',
    labelLight: 'Chiaro',
    labelDark: 'Scuro',
    views0: '1,2 mln di visualizzazioni · 1 ora fa',
    views1: '45 minuti fa',
    views2: '250.000 visualizzazioni · 1 giorno fa',
    views3: '3,1 mln di visualizzazioni · 1 settimana fa',
  },
};
