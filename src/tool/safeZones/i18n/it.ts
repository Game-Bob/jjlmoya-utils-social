import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'zone-sicure-social';
const title = 'Social Safe Zones: Simulatore Video per TikTok, Reels e Shorts';
const description =
  'Visualizza in anteprima le tue immagini e i tuoi video con la vera interfaccia dei social media. Assicurati che il tuo contenuto sia sempre visibile ed evita ritagli accidentali.';

const faqData = [
  {
    question: "Cosa sono le 'Zone Sicure' sui social media?",
    answer:
      "Sono le aree dello schermo in cui il contenuto è visibile senza il rischio di essere coperto da elementi dell'interfaccia, come il nome utente, la descrizione, i pulsanti di interazione (mi piace, condividi) o il ritaglio automatico applicato da alcuni dispositivi.",
  },
  {
    question: 'Perché il mio video TikTok sembra ritagliato in alto e in basso?',
    answer:
      "TikTok utilizza un formato 9:16. Se il tuo video è più largo, l'app applicherà uno zoom per riempire lo schermo, causando il ritaglio. Inoltre, l'interfaccia inferiore copre parte del video, quindi gli elementi importanti dovrebbero essere centrati.",
  },
  {
    question: 'La zona sicura è la stessa per Instagram Reels e YouTube Shorts?',
    answer:
      "Sono molto simili ma non identiche. I pulsanti di YouTube Shorts sono posizionati diversamente rispetto a quelli di Reels. Il nostro strumento ti consente di passare da una piattaforma all'altra per verificare il tuo design su ognuna di esse.",
  },
  {
    question: 'Cosa succede se metto del testo nell’angolo in basso a destra?',
    answer:
      "Probabilmente sarà invisibile o molto difficile da leggere, poiché è lì che si trovano le icone del profilo, del cuore e dei commenti. Idealmente, tieni testi e volti nell'area centrale superiore (Zona Sicura).",
  },
];

const howToData = [
  {
    name: 'Carica la tua immagine o il tuo video',
    text: "Carica il file che desideri visualizzare in anteprima. L'elaborazione è locale e privata — nulla viene caricato su internet.",
  },
  {
    name: 'Seleziona la piattaforma',
    text: "Scegli tra TikTok, Instagram Reels o YouTube Shorts per attivare la relativa sovrapposizione dell'interfaccia.",
  },
  {
    name: 'Controlla la leggibilità',
    text: "Verifica se testi, sottotitoli o elementi chiave del brand sono coperti dalle icone del social network.",
  },
  {
    name: 'Regola ed esporta',
    text: "Se qualcosa è nascosto, sposta l'elemento nel tuo editor video originale e prova di nuovo finché non si adatta perfettamente.",
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

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Documentazione Ufficiale delle Piattaforme',
  bibliography: [
    {
      name: 'TikTok Creator Portal: Ottimizzazione video e zone sicure',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: 'Instagram Business: Best practice per i Reels',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: 'Guida di YouTube: Creare YouTube Shorts',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: 'Meta for Creators: Zone sicure e rapporti d’aspetto per i video',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guida Completa alle Zone Sicure: Ottimizza i tuoi Reels, TikTok e Shorts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Nel mondo saturo dei contenuti verticali, la prima impressione è tecnica. L'errore più grande che i creatori commettono è ignorare come il loro <strong>video o immagine</strong> interagisce con l'interfaccia nativa della piattaforma. Ogni social network (TikTok, Instagram Reels e YouTube Shorts) sovrappone strati di pulsanti, testo e profili che possono annullare l'impatto visivo della tua composizione.",
    },
    {
      type: 'paragraph',
      html: "Questo strumento ti consente di caricare i tuoi file multimediali e vedere in anteprima esattamente quali parti della tua inquadratura saranno coperte dall'interfaccia. Non si tratta solo di <strong>sottotitoli</strong>; si tratta di assicurarsi che i volti, i prodotti o le azioni principali nel tuo video non siano sepolti sotto un pulsante \"Mi piace\" o una lunga descrizione.",
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'TikTok: L’interfaccia più invasiva',
          html: "<p>TikTok ha l'interfaccia più densa. Sul lato destro, c’è una colonna di icone che occupa circa il 15% della larghezza. In basso, la descrizione può estendersi su 4 o 5 righe, coprendo quasi un terzo dello schermo dal basso.</p><ul><li><strong>Margine inferiore:</strong> Lascia liberi gli ultimi 250px per evitare il testo della descrizione e il nome utente.</li><li><strong>Margine destro:</strong> Evita di posizionare il testo entro 100px dal bordo destro.</li><li><strong>In alto:</strong> I pulsanti \"Seguiti\" e \"Per te\" occupano la fascia centrale superiore.</li></ul>",
        },
        {
          type: 'card',
          title: 'IG Reels: Il fattore feed',
          html: "<p>A differenza di TikTok, Instagram Reels ritaglia il video in un formato 4:5 quando visualizzato dal feed principale. Ciò significa che se inserisci informazioni vitali nel 15% superiore o inferiore del tuo video 9:16, queste scompariranno nel feed.</p><ul><li><strong>La regola del 4:5:</strong> Mantieni i titoli e gli elementi chiave nella zona centrale per la visibilità nel feed.</li><li><strong>Interfaccia:</strong> Le icone dei Reels sono più sottili di quelle di TikTok, consentendo un margine laterale leggermente maggiore.</li><li><strong>Pulsante audio:</strong> Situato in basso a destra, di solito copre molto meno rispetto al disco rotante di TikTok.</li></ul>",
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts: Attenzione al lato destro',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "YouTube Shorts ha un’interfaccia asimmetrica. Il pulsante iscriviti è molto visibile e di colore solido (solitamente nero o bianco), creando un importante punto cieco visivo in basso a destra.",
    },
    {
      type: 'list',
      items: [
        '<strong>Margine destro:</strong> Evita di posizionare testo o elementi importanti nel 20% in basso a destra.',
        '<strong>Margine inferiore:</strong> Lascia liberi gli ultimi 150px per evitare il testo della descrizione e il nome utente.',
        '<strong>In alto:</strong> I pulsanti \"Iscriviti\" e \"Altro\" occupano la fascia centrale superiore.',
      ],
    },
    {
      type: 'title',
      text: 'Domande Cruciali sul Design Verticale',
      level: 2,
    },
    {
      type: 'title',
      text: 'Dove posizionare gli elementi chiave (volti, testo, prodotto)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La "Zona d\'Oro" per l\'azione principale è il terzo centrale del video. Se stai riprendendo una persona, assicurati che i suoi occhi e la sua bocca siano all\'interno di questa zona. Gli elementi grafici importanti dovrebbero essere leggermente spostati verso l\'alto rispetto al centro geometrico per evitare la descrizione in basso.',
    },
    {
      type: 'title',
      text: 'Perché il mio video appare sfocato una volta caricato?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Spesso non è la qualità ma il ridimensionamento. Registra sempre in 1080x1920 a 30 o 60 fps. Evita il 4K se applichi molti effetti pesanti, poiché le piattaforme comprimono in modo aggressivo i file di grandi dimensioni.",
    },
    {
      type: 'title',
      text: 'E per quanto riguarda i bordi del telefono?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Ricorda che i telefoni moderni hanno tacche (notch) o fori per la fotocamera sullo schermo. Questo strumento include un margine di sicurezza superiore affinché il tuo contenuto non entri in conflitto con l'orologio o le icone di sistema (batteria, segnale).",
    },
    {
      type: 'title',
      text: 'Anatomia di un Video Virale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Progettare per i social media non è solo estetica — è <strong>usabilità</strong>. Se un utente deve sforzarsi per leggere il testo perché le icone della piattaforma lo coprono, passerà semplicemente al video successivo. La ritenzione (Watch Time) cala drasticamente quando c'è un attrito visivo.",
    },
    {
      type: 'paragraph',
      html: "Su YouTube Shorts, ad esempio, l'interfaccia è asimmetrica. Il pulsante iscriviti è molto evidente. Utilizzando questo simulatore, puoi regolare l'opacità per capire come la tua tavolozza di colori interagisce con i colori nativi della UI.",
    },
    {
      type: 'tip',
      title: 'Strumento di Controllo Qualità Creativo',
      html: '<p>Progettato per i creatori che non lasciano nulla al caso.</p>',
    },
  ],
  ui: {
    labelConfig: 'Impostazioni',
    labelPlatform: 'Piattaforma Target',
    labelUpload: 'Carica Contenuto',
    uploadPrompt: 'Seleziona immagine o video',
    uploadLink: 'O usa un esempio',
    loadContent: 'Carica il tuo contenuto',
    labelOpacity: 'Rilevanza Interfaccia',
    labelMask: 'Oscura Zone Critiche',
    labelGrid: 'Regola dei Terzi',
    btnReset: 'Resetta Canvas',
    bannerTiktok: 'Simulazione TikTok 9:16',
    bannerReels: 'Simulazione Instagram Reels 9:16',
    bannerShorts: 'Simulazione YouTube Shorts 9:16',
    nameTiktok: 'TikTok',
    nameReels: 'IG Reels',
    nameShorts: 'YT Shorts',
    ttFollowing: 'Seguiti',
    ttForYou: 'Per te',
    ttDescription: 'Design reale dell\'interfaccia per i creatori di contenuti. #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - Suono Originale',
    ttNavHome: 'Home',
    ttNavFriends: 'Amici',
    ttNavInbox: 'In arrivo',
    ttNavProfile: 'Profilo',
    reelsFollow: 'Segui',
    reelsDescription: 'Questa interfaccia è identica a quella reale. #reels #ux #simulator',
    reelsAudio: 'Trending Music - Audio Originale',
    shortsSubscribe: 'ISCRIVITI',
    shortsDislike: 'Non mi piace',
    shortsShare: 'Condividi',
    shortsRemix: 'Remix',
    shortsDescription: 'Simulazione di interfacce reali per gli Shorts! #youtube #shorts',
  },
};
