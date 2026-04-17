import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'formattatore-testo-reddit';
const title = 'Formattatore Testo Reddit: Pulizia e Correzione Markdown';
const description =
  'Pulitore di testo avanzato per pubblicare su Reddit. Corregge le interruzioni di riga mancanti, rimuove spazi multipli e caratteri nascosti che interrompono il Markdown.';

const faqData = [
  {
    question: 'Perché il mio testo su Reddit perde le interruzioni di riga?',
    answer:
      'Reddit utilizza Markdown, che richiede di premere il doppio spazio alla fine di una riga prima di premere Invio per un normale a capo, oppure di premere Invio due volte per creare un nuovo paragrafo. Il nostro strumento gestisce tutto questo automaticamente inserendo doppie interruzioni di riga.',
  },
  {
    question: 'Cosa sono i caratteri nascosti o invisibili?',
    answer:
      'Quando si copia da elaboratori di testi complessi, spesso vengono allegati marcatori di formattazione a larghezza zero. Questi elementi sono invisibili sulle normali pagine web ma possono interrompere l\'ecosistema Markdown.',
  },
  {
    question: 'È sicuro usare questo pulitore di testo?',
    answer:
      'Completamente sicuro. Lo script viene eseguito interamente sul lato client (nel browser). Il testo non viene mai inviato a nessun server e nessun altro avrà mai accesso a ciò che incollate qui.',
  },
  {
    question: 'Posso usarlo per Twitter o altri social?',
    answer:
      'Sì, oltre a correggere i post di Reddit, la rimozione di spazi multipli e caratteri strani è utile per qualsiasi pubblicazione su blog, Twitter, vecchi forum phpBB o qualsiasi altra piattaforma social dove sia necessario un testo pulito e neutro.',
  },
];

const howToData = [
  {
    name: 'Incolla il tuo testo',
    text: 'Copia il tuo testo da Word, Google Docs o qualsiasi altra fonte e incollalo nel campo di input.',
  },
  {
    name: 'Scegli le opzioni',
    text: 'Attiva o disattiva le opzioni a seconda delle tue necessità: correggi i paragrafi, rimuovi gli spazi o pulisci i caratteri nascosti.',
  },
  {
    name: 'Controlla il risultato',
    text: 'Il testo pulito appare in tempo reale nel campo di output, pronto per essere pubblicato.',
  },
  {
    name: 'Copia e pubblica',
    text: 'Clicca su "Copia Testo" e incollalo direttamente su Reddit o in qualsiasi forum.',
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

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    {
      name: 'Aiuto di Reddit: Formattazione del testo nei post e nei commenti',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Guida al Markdown di Reddit',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Lo strumento definitivo per la formattazione di Reddit e forum web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Creare post su Reddit o su qualsiasi piattaforma che si basi sul Markdown può essere frustrante. Un problema comune quando si copia e incolla testo da elaboratori di testi complessi o pagine web è che le interruzioni di riga vengono alterate. Quando si invia il contenuto, spesso diventa un blocco solido e difficile da leggere, ignorando la struttura originale dei paragrafi. Il nostro strumento di formattazione risolve questo problema alla radice.',
    },
    {
      type: 'title',
      text: 'Come funziona il pulitore di testo di Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il motore di elaborazione esegue diversi filtri sul testo in tempo reale. Innanzitutto, si occupa delle interruzioni di riga. Reddit richiede un formato specifico in cui un\'interruzione di paragrafo necessita di due nuove righe nel codice sorgente Markdown. Il pulitore analizza il testo e converte automaticamente le interruzioni di riga singole in interruzioni doppie, mantenendo intatti i paragrafi esistenti per evitare di generare spaziatura eccessiva.',
    },
    {
      type: 'paragraph',
      html: 'In secondo luogo, lo strumento rimuove i caratteri invisibili e gli spazi multipli. Quando si copia testo dai siti web, è comune trascinare caratteri a larghezza zero che interrompono la formattazione o causano comportamenti strani nei forum. Il pulitore elimina questi elementi web intrusivi e normalizza gli spazi ripetuti in un unico spazio pulito. Facoltativamente, è possibile rimuovere tutti i collegamenti ipertestuali grezzi dal contenuto per pubblicare un testo completamente neutro.',
    },
    {
      type: 'title',
      text: 'Vantaggi dell\'utilizzo di un pulitore di testo specializzato',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Leggibilità ottimizzata:</strong> assicura che i lettori su Reddit vedano un testo correttamente strutturato invece di un intimidatorio muro di parole.',
        '<strong>Risparmio di tempo:</strong> dimentica di premere Invio centinaia di volte per correggere la formattazione interrotta. Incolla il contenuto e copialo pronto in meno di un secondo.',
        '<strong>Rimozione di metadati e spazzatura web:</strong> protegge il post da stili strani o interruzioni causate da spazi a larghezza zero.',
        '<strong>Elevata privacy:</strong> tutta l\'elaborazione è lato client. Il testo non lascia mai il browser né viene memorizzato su server esterni.',
      ],
    },
    {
      type: 'title',
      text: 'Il problema con gli elaboratori di testi e Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Applicazioni come Microsoft Word o Google Docs aggiungono uno strato invisibile di formattazione ricca al testo. Quando si copia e incolla quel contenuto direttamente nell\'editor di base o nella modalità Markdown di Reddit, la formattazione ricca scompare e ciò che rimane è spesso un amalgama senza struttura. Reddit utilizza una variante di Markdown piuttosto rigorosa. Se non si ha familiarità con la sintassi di Reddit o se si desidera semplicemente un processo più fluido nel trasferire saggi o storie sul forum, pulire prima il testo qui evita che il post riceva voti negativi semplicemente perché è impossibile da leggere comodamente.',
    },
    {
      type: 'title',
      text: 'Migliori pratiche per la pubblicazione nei forum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una formattazione corretta è fondamentale per generare discussione e mantenere l\'attenzione della comunità. I post con righe molto lunghe o paragrafi inesistenti vengono spesso abbandonati dopo le prime frasi. Utilizzate questo strumento di pulizia per gettare le basi strutturali. Quindi, aggiungete formattazioni come il grassetto e il corsivo in modo strategico all\'interno dell\'editor di Reddit stesso per evidenziare le idee chiave. Controllate sempre l\'anteprima e approfittate degli elenchi strutturati per elencare punti importanti o guide dettagliate.',
    },
    {
      type: 'title',
      text: 'Esempio di trasformazione',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Prima e dopo il formattatore',
      html: '<p><strong>Testo originale incollato:</strong></p><pre>Ciao, questa è la prima riga\ne questa doveva essere la seconda\nma su Reddit tutto si unisce quando viene incollato.</pre><p><strong>Testo formattato:</strong></p><pre>Ciao, questa è la prima riga\n\ne questa doveva essere la seconda\n\nma su Reddit tutto si unisce quando viene incollato.</pre>',
    },
    {
      type: 'title',
      text: 'Domande frequenti sul formattatore di testo di Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Trovare le risposte giuste su come interagire con le regole editoriali di Reddit non è sempre ovvio. Controllate la sezione FAQ dove affrontiamo le principali domande sui formati validi e su come evitare di essere penalizzati per enormi muri di testo.',
    },
  ],
  ui: {
    labelInput: 'Testo Originale',
    placeholderInput: 'Incolla qui il tuo testo originale...',
    labelOptions: 'Opzioni di Formattazione',
    optionParagraphs: 'Correggi paragrafi in stile Reddit',
    optionSpaces: 'Rimuovi spazi multipli',
    optionInvisible: 'Pulisci caratteri web nascosti',
    optionLinks: 'Estrai URL (solo testo)',
    labelOutput: 'Testo Pulito',
    placeholderOutput: 'Il risultato della pulizia apparirà qui...',
    btnCopy: 'Copia Testo',
    btnCopied: 'Copiato',
  },
};
