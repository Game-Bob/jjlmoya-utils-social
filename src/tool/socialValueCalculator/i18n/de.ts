import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'wertrechner-social-media-account';
const title = 'Social Media Account Wertrechner: TikTok & Instagram Preise';
const description =
  'Finden Sie heraus, wie viel Sie für gesponserte Beiträge verlangen können. Unser Rechner analysiert Follower, Engagement und Nische für einen fairen Marktwert.';

const faqData = [
  {
    question: 'Ist der Account-Wertrechner kostenlos?',
    answer:
      'Ja, unser Tool ist zu 100 % kostenlos und erfordert keine Registrierung oder Verbindung zu Ihren Social-Media-Konten. Sie müssen nur Ihre öffentlichen Kennzahlen eingeben.',
  },
  {
    question: 'Warum unterscheidet sich der Wert bei TikTok von Instagram?',
    answer:
      'TikTok verlässt sich stark auf algorithmische Reichweite und Aufrufe, während Instagram nach wie vor großen Wert auf die Community-Größe und die Loyalität der Follower legt.',
  },
  {
    question: 'Was ist eine gute Engagement-Rate, um mehr verlangen zu können?',
    answer:
      'Im Allgemeinen gilt ein Engagement von über 3 % als gesund. Konten mit mehr als 10 % Engagement gelten als „Premium-Profile“ und können einen deutlichen Aufschlag verlangen.',
  },
  {
    question: 'Beeinflusst die Nische den Preis wirklich so stark?',
    answer:
      'Absolut. Ein Follower, der sich für Finanzen oder Management-Software interessiert, hat für eine Marke einen viel höheren Konversionswert als ein Follower, der nach schneller Unterhaltung oder Memes sucht.',
  },
];

const howToData = [
  {
    name: 'Plattform wählen',
    text: 'Wählen Sie aus, ob Sie den Wert eines TikTok- oder Instagram-Accounts berechnen möchten.',
  },
  {
    name: 'Kennzahlen eingeben',
    text: 'Geben Sie Ihre Follower-Anzahl sowie die durchschnittlichen Aufrufe und Likes Ihrer letzten 10 Beiträge ein.',
  },
  {
    name: 'Nische auswählen',
    text: 'Wählen Sie die Kategorie, die Ihren Inhalt am besten beschreibt, um den Wert basierend auf der Marktnachfrage anzupassen.',
  },
  {
    name: 'Budget berechnen',
    text: 'Erhalten Sie eine geschätzte Preisspanne für eine professionelle Zusammenarbeit.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen & Marktstudien',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: Influencer Rates 2026',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: 'HypeAuditor: TikTok & Instagram Engagement Report',
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: Social Media Statistiken',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: 'In diesem Leitfaden lernen Sie',
      html: '<ul><li>Ihren <strong>echten Marktwert</strong> basierend auf Daten von 2026.</li><li>Unterschiede in der Wirkung von <strong>TikTok vs. Instagram</strong>.</li><li>Wie Ihre <strong>Nische</strong> den CPM drastisch beeinflusst.</li><li>Eine professionelle Vorlage für <strong>Verhandlungen mit Marken</strong>.</li></ul>',
    },
    {
      type: 'title',
      text: 'Account Wertrechner: Wie viel verlangt man für einen gesponsorten Post auf TikTok oder Instagram?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie Content Creator oder Influencer sind oder eine aktive Community haben, haben Sie sich sicher schon gefragt: <strong>Wie viel ist mein Account eigentlich wert?</strong> oder <strong>Wie viel sollte ich für eine Markenkooperation verlangen?</strong>.',
    },
    {
      type: 'title',
      text: 'Der Aufstieg der Creator Economy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Influencer Marketing ist erwachsen geworden; es geht nicht mehr nur um die Followerzahl. Marken suchen nach Ergebnissen und echter Verbindung. Unser Tool bietet einen soliden Ausgangspunkt basierend auf realen Marktdaten.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: '<p>Jährliches Wachstum der Investitionen im Influencer Marketing</p>',
        },
        {
          type: 'card',
          title: '3.2%',
          html: '<p>Durchschnittliche Engagement-Rate (gesunder Wert)</p>',
        },
        {
          type: 'card',
          title: '15€–50€',
          html: '<p>Durchschnittlicher CPM in wertvollen Nischen</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Faktoren, die den Wert Ihres Accounts bestimmen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Anders als früher angenommen, ist die Followerzahl nur die Spitze des Eisbergs. Hier sind die grundlegenden Komponenten:',
    },
    {
      type: 'title',
      text: '1. Engagement-Rate',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dies ist die wichtigste Kennzahl. Sie misst, wie viel Prozent Ihrer Community aktiv mit Ihren Inhalten interagiert. Ein kleiner Account mit hoher Interaktion ist weit wertvoller als ein großer "Geister"-Account.',
    },
    {
      type: 'tip',
      title: 'Engagement Tipp',
      html: '<p>Antworten Sie in den ersten Stunden nach dem Posten auf Kommentare, um dem Algorithmus positive Signale zu senden.</p>',
    },
    {
      type: 'title',
      text: '2. Durchschnittliche Reichweite',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bei TikTok ist die Reichweite aufgrund des Empfehlungsalgorithmus volatil. Bei Instagram haben Reels gegenüber statischen Fotos an Bedeutung gewonnen, um neue Zielgruppen zu erreichen.',
    },
    {
      type: 'title',
      text: '3. Niche oder Kategorie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nicht alle Zielgruppen sind gleich viel wert. Ein Creator im Bereich Tech oder Finanzen kann viel höhere Raten verlangen als ein Creator für allgemeine Unterhaltung, da der Wert des Endkunden höher ist.',
    },
    {
      type: 'title',
      text: 'Bestbezahlte Kategorien (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finanzen & Business:</strong> Die bestbezahlte Nische pro Beitrag.',
        '<strong>Technologie & Gadgets:</strong> Hohe unmittelbare Kaufabsicht.',
        '<strong>Gesundheit & Fitness:</strong> Großer Markt für Equipment und Apps.',
        '<strong>Haus & Renovierung:</strong> Hohe Projektkosten und hoher ROI.',
      ],
    },
    {
      type: 'title',
      text: 'TikTok vs. Instagram: Wo liegt das Geld?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Obwohl beide vertikales Video nutzen, unterscheiden sich die Monetarisierungsmodelle. Instagram steht für Branding; TikTok für pure Performance.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: '<p>Fokus auf Branding, Ästhetik und Loyalität. Ideal für langfristige Kampagnen.</p><ul><li>Gewichtet Community-Größe</li><li>Stories mit Direktverkauf</li><li>Stabiles Wachstum</li><li>Reiferes Publikum</li></ul>',
        },
        {
          type: 'card',
          title: 'TikTok',
          html: '<p>Das Land der extremen Viralität. Der Algorithmus herrscht über die Follower. Explosiver kurzfristiger ROI.</p><ul><li>Gewichtet massive Reichweite</li><li>Absolutes virales Potenzial</li><li>Geringe Produktionskosten</li><li>Sehr aktives Publikum</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Wie Sie die Ergebnisse für Verhandlungen nutzen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nutzen Sie die Preisspanne aus unserem Tool als Leitfaden. Präsentieren Sie Ihre Kennzahlen selbstbewusst mit dieser Vorlage:',
    },
    {
      type: 'tip',
      title: 'Verhandlungsvorlage',
      html: '<p>Hallo [Markenname], danke für die Anfrage. Basierend auf meinen aktuellen Reichweiten-Metriken (Durchschnitt von [X] Aufrufen) und meiner Engagement-Rate von [X] % liegt meine Rate für eine Integration in ein [Reel/TikTok] bei [Preis €]. Dies beinhaltet: Skripting und Produktion, 1 Bio-Link für 24h, 2 Stories zur Verstärkung, 30 Tage Nutzungsrechte.</p>',
    },
    {
      type: 'title',
      text: 'Strategien zur Steigerung Ihrer Rate',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Interaktion fördern:</strong> Antworten Sie auf jeden Kommentar.',
        '<strong>Qualität steigern:</strong> Audio macht 50 % eines guten Videos aus.',
        '<strong>Spezialisieren:</strong> Als Experte können Sie mehr verlangen.',
        '<strong>Media Kit erstellen:</strong> Dokumentieren Sie Erfolge mit Fakten.',
      ],
    },
    {
      type: 'title',
      text: 'Ist der geschätzte Wert verlässlich?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Unser Rechner nutzt aggregierte Daten internationaler Agenturen. Faktoren wie Saisonalität (Weihnachtskampagnen zahlen mehr) können den Endpreis jedoch variieren.',
    },
    {
      type: 'tip',
      title: 'Hinweis für Creator',
      html: '<p>Dieses Tool liefert Schätzwerte. Passen Sie den Preis immer an die Komplexität des angeforderten Inhalts an.</p>',
    },
  ],
  ui: {
    sectionTag: 'Audit-Parameter',
    labelFollowers: 'Community (Follower)',
    labelAvgViewsTiktok: 'Impact (Aufrufe pro Video)',
    labelAvgViewsIg: 'Reichweite (Profil-Reichweite)',
    tooltipViews: 'Addieren Sie die Aufrufe Ihrer letzten 10 Videos und teilen Sie sie durch 10.',
    labelEngagement: 'Loyalität (Likes + Kommentare)',
    tooltipEngagement: 'Summe der Likes und Kommentare der letzten 10 Posts geteilt durch 10.',
    labelNiche: 'Marktvertikale',
    nicheEntertainment: 'Unterhaltung',
    nicheFinance: 'Finanzen & Immobilien',
    nicheTech: 'Technologie & SaaS',
    nicheFitness: 'Lifestyle & Gesundheit',
    nicheFashion: 'Mode & Beauty',
    nicheTravel: 'Tourismus & Reisen',
    nicheFood: 'Essen & Gastronomie',
    nicheGaming: 'Gaming & eSports',
    nicheHome: 'Haus & Renovierung',
    btnCalculate: 'Wertbericht generieren',
    emptyTitle: 'Analyse der kommerziellen Machbarkeit',
    emptyDesc: 'Geben Sie die Profilmetriken ein, um den aktuellen Marktwert zu projizieren.',
    roiLabel: 'Bewertung der vorgeschlagenen Rate',
    rangeLabel: 'Vorgeschlagene Spanne:',
    audienceQuality: 'Qualität des Publikums',
    metricER: 'Engagement-Rate',
    investmentEfficiency: 'Investitionseffizienz',
    metricCPM: 'Projizierter CPM',
    insightText: 'Diese Bewertung basiert auf dem durchschnittlichen CPM des deutschsprachigen Marktes (2026).',
    currencySymbol: '€',
    numberLocale: 'de-DE',
  },
};
