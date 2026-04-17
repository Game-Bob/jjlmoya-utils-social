import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'calcolatore-valore-account-social';
const title = 'Social Media Account Value Calculator: Prezzi TikTok e Instagram';
const description =
  'Scopri quanto chiedere per post sponsorizzati. Il nostro calcolatore analizza follower, engagement e nicchia per offrirti un valore di mercato equo.';

const faqData = [
  {
    question: 'Il calcolatore del valore dell’account è gratuito?',
    answer:
      'Sì, il nostro strumento è gratuito al 100% e non richiede registrazione né connessione ai tuoi account social. Devi solo inserire le tue metriche pubbliche.',
  },
  {
    question: 'Perché il valore di TikTok è diverso da quello di Instagram?',
    answer:
      'TikTok si basa molto sulla portata algoritmica e sulle visualizzazioni, mentre Instagram dà ancora un peso forte alla dimensione della community e alla fedeltà dei follower.',
  },
  {
    question: 'Qual è un buon tasso di engagement per chiedere di più?',
    answer:
      'In generale, un engagement superiore al 3% è considerato sano. Gli account con più del 10% di engagement sono considerati "profili premium" e possono richiedere un sovrapprezzo significativo.',
  },
  {
    question: 'La nicchia influisce davvero così tanto sul prezzo?',
    answer:
      'Assolutamente sì. Un follower interessato alla finanza o ai software gestionali ha un valore di conversione molto più alto per un brand rispetto a un follower che cerca intrattenimento rapido o meme.',
  },
];

const howToData = [
  {
    name: 'Scegli la tua piattaforma',
    text: 'Seleziona se vuoi calcolare il valore di un account TikTok o Instagram.',
  },
  {
    name: 'Inserisci le tue metriche',
    text: 'Inserisci il numero di follower e la media di visualizzazioni e like dei tuoi ultimi 10 post.',
  },
  {
    name: 'Seleziona la tua nicchia',
    text: 'Scegli la categoria che meglio descrive i tuoi contenuti per regolare il valore in base alla domanda del mercato.',
  },
  {
    name: 'Ottieni il tuo preventivo',
    text: 'Ricevi un intervallo stimato di quanto dovresti chiedere per una collaborazione professionale.',
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

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Fonti e Studi di Mercato',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: Influencer Rates 2026',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor: Rapporto Engagement TikTok e Instagram',
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: Statistiche Social Media',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: 'In questa guida imparerai',
      html: '<ul><li>Il tuo <strong>reale valore di mercato</strong> basato sui dati 2026.</li><li>Come differenziare l’impatto di <strong>TikTok vs Instagram</strong>.</li><li>Come la tua <strong>nicchia</strong> influisce drasticamente sul tuo CPM.</li><li>Un modello professionale per <strong>negoziare con i brand</strong>.</li></ul>',
    },
    {
      type: 'title',
      text: 'Calcolatore Valore Account: Quanto Chiedere per un Post Sponsorizzato su TikTok o Instagram?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se sei un creatore di contenuti, un influencer o hai semplicemente una community attiva sui social, ti sarai chiesto più di una volta: <strong>quanto vale effettivamente il mio account?</strong> o <strong>quanto dovrei chiedere per una collaborazione con un brand?</strong>.',
    },
    {
      type: 'title',
      text: 'L’ascesa della creator economy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L’influencer marketing è maturato e non si tratta più solo di numero di follower. I brand cercano risultati e connessione profonda. Il nostro strumento offre un punto di partenza solido basato su dati reali di mercato.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: '<p>Crescita annuale degli investimenti in Influencer Marketing</p>',
        },
        {
          type: 'card',
          title: '3.2%',
          html: '<p>Tasso di engagement medio considerato sano</p>',
        },
        {
          type: 'card',
          title: '15€–50€',
          html: '<p>CPM medio in nicchie di alto valore (stabile)</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Fattori che determinano quanto vale il tuo account',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A differenza di quanto si credesse anni fa, il numero di follower è solo la punta dell’iceberg. Ecco le componenti fondamentali:',
    },
    {
      type: 'title',
      text: '1. Tasso di Engagement',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'È la metrica chiave. Misura quale percentuale della tua community interagisce attivamente con i tuoi contenuti. Un piccolo account con alta interazione è molto più prezioso di un grande account "fantasma".',
    },
    {
      type: 'tip',
      title: 'Consiglio engagement',
      html: '<p>Prova a rispondere ai commenti nelle prime ore dopo il post per inviare segnali positivi all’algoritmo.</p>',
    },
    {
      type: 'title',
      text: '2. Portata Media',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Su TikTok, la portata è volatile a causa del suo algoritmo di raccomandazione. Su Instagram, i Reel hanno guadagnato peso rispetto alle foto statiche per catturare nuove audience.",
    },
    {
      type: 'title',
      text: '3. Nicchia o Categoria',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Non tutte le audience valgono lo stesso. Un creatore tech o finance può chiedere tariffe molto più alte di un creatore di intrattenimento generale, a causa del maggior valore dell’utente finale.',
    },
    {
      type: 'title',
      text: 'Categorie più pagate (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finanza e Business:</strong> La nicchia meglio pagata per post.',
        '<strong>Tecnologia e Gadget:</strong> Alta intenzione di acquisto immediato.',
        '<strong>Salute e Fitness:</strong> Ampio mercato per attrezzature e app.',
        '<strong>Ristrutturazione Casa:</strong> Alti costi di progetto e ROI elevato.',
      ],
    },
    {
      type: 'title',
      text: 'TikTok vs Instagram: Dove sono i soldi?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sebbene entrambi usino video verticali, i loro modelli di monetizzazione differiscono. Instagram è branding; TikTok è pura performance.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: '<p>Focus su branding, estetica e fedeltà. Ideale per campagne a lungo termine.</p><ul><li>Valuta dimensione community</li><li>Stories con vendita diretta</li><li>Crescita stabile</li><li>Audience più matura</li></ul>',
        },
        {
          type: 'card',
          title: 'TikTok',
          html: '<p>La terra della viralità estrema. L’algoritmo regna sui follower. ROI esplosivo a breve termine.</p><ul><li>Valuta portata massiccia</li><li>Potenziale virale assoluto</li><li>Bassi costi di produzione</li><li>Audience molto attiva</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Come usare i risultati per negoziare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ottieni l’intervallo di prezzo dal nostro strumento e usalo come guida. Presenta le tue metriche con sicurezza usando questo modello:',
    },
    {
      type: 'tip',
      title: 'Modello di negoziazione',
      html: '<p>Ciao [Nome Brand], grazie per il contatto. In base alle mie attuali metriche di portata (media di [X] visualizzazioni) e al mio tasso di engagement del [X]%, la mia tariffa per un’integrazione in un [Reel/TikTok] è [Prezzo €]. Questo include: scripting e produzione video, 1 link in bio per 24h, 2 Stories di amplificazione, diritti d’uso per 30 giorni.</p>',
    },
    {
      type: 'title',
      text: 'Strategie per alzare la tua tariffa',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Fomenta l’interazione:</strong> Rispondi a ogni commento.',
        '<strong>Alza la qualità:</strong> L’audio è il 50% di un buon video.',
        '<strong>Specializzati:</strong> Essere "l’esperto" ti permette di chiedere di più.',
        '<strong>Crea un Media Kit:</strong> Documenta i tuoi successi con i dati.',
      ],
    },
    {
      type: 'title',
      text: 'Il valore stimato è affidabile?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il nostro calcolatore usa dati aggregati da agenzie internazionali. Tuttavia, fattori come la stagionalità (le campagne natalizie pagano di più) possono variare il prezzo finale.',
    },
    {
      type: 'tip',
      title: 'Nota per i Creatori',
      html: '<p>Questo strumento è una stima. Regola sempre il prezzo in base alla complessità dei contenuti richiesti dal brand.</p>',
    },
  ],
  ui: {
    sectionTag: 'Parametri Audit',
    labelFollowers: 'Community (Follower)',
    labelAvgViewsTiktok: 'Impatto (Visualizzazioni per Video)',
    labelAvgViewsIg: 'Portata (Portata Profilo)',
    tooltipViews: 'Somma le visualizzazioni dei tuoi ultimi 10 video e dividi per 10.',
    labelEngagement: 'Fedeltà (Like + Commenti)',
    tooltipEngagement: 'Somma dei like e commenti totali dei tuoi ultimi 10 post diviso 10.',
    labelNiche: 'Verticale di Mercato',
    nicheEntertainment: 'Intrattenimento',
    nicheFinance: 'Finanza e Immobiliare',
    nicheTech: 'Tecnologia e SaaS',
    nicheFitness: 'Lifestyle e Salute',
    nicheFashion: 'Moda e Beauty',
    nicheTravel: 'Turismo e Viaggi',
    nicheFood: 'Cibo e Gastronomia',
    nicheGaming: 'Gaming ed eSports',
    nicheHome: 'Casa e Ristrutturazione',
    btnCalculate: 'Genera Rapporto Valore',
    emptyTitle: 'Analisi di Fattibilità Commerciale',
    emptyDesc: 'Inserisci le metriche del profilo per proiettare il valore di mercato attuale.',
    roiLabel: 'Valutazione Tariffa Suggerita',
    rangeLabel: 'Intervallo suggerito:',
    audienceQuality: 'Qualità Audience',
    metricER: 'Engagement Rate',
    investmentEfficiency: 'Efficienza Investimento',
    metricCPM: 'CPM Proiettato',
    insightText: 'Questa valutazione si basa sul CPM medio del mercato italiano (2026).',
    currencySymbol: '€',
    numberLocale: 'it-IT',
  },
};
