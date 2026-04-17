import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'youtube-thumbnail-herunterladen-hd';
const title = 'YouTube Thumbnail Downloader (HD)';
const description =
  'Extrahieren und laden Sie das Original-Vorschaubild (Thumbnail) jedes YouTube-Videos in maximaler Auflösung und ohne Wasserzeichen herunter – einfach über die URL.';

const faqData = [
  {
    question: 'In welcher Auflösung werden die Thumbnails extrahiert?',
    answer:
      "Das Tool versucht immer, das Bild in 'MaxRes'-Auflösung (1280x720 oder 1920x1080) abzurufen, was der vom Videoersteller hochgeladenen Originalqualität entspricht. Wenn der Ersteller kein HD-Thumbnail hochgeladen hat, wird automatisch die nächsthöhere verfügbare Auflösung angezeigt.",
  },
  {
    question: 'Welche Link-Typen werden unterstützt?',
    answer:
      'Es unterstützt klassische youtube.com/watch-URLs, kurze youtu.be-Links, mobile Links und sogar YouTube Shorts-URLs auf transparente Weise.',
  },
  {
    question: 'Ist das Herunterladen von YouTube-Thumbnails legal?',
    answer:
      'Ja, das Herunterladen ist für den persönlichen Gebrauch, zu Designzwecken, für Parodien oder zur Inspiration (Fair Use) völlig legal. Seien Sie vorsichtig, wenn Sie urheberrechtlich geschützte Bilder für rein kommerzielle Zwecke verwenden möchten – in diesen Fällen ist es wichtig, die Lizenz des Videos zu prüfen.',
  },
  {
    question: 'Gibt es ein tägliches Nutzungslimit?',
    answer:
      'Es gibt keine monatlichen oder täglichen Limits. Da die Software clientseitig in Ihrem Browser läuft, indem sie das URL-Muster intern auflöst, interagieren wir nicht mit restriktiven APIs.',
  },
];

const howToData = [
  {
    name: 'Video-URL kopieren',
    text: 'Gehen Sie zu YouTube und kopieren Sie den Link des Videos aus der Adressleiste des Browsers oder über den Teilen-Button.',
  },
  {
    name: 'Link einfügen',
    text: 'Geben Sie die URL in das Feld des Extractors ein oder nutzen Sie den Button zum Einfügen aus der Zwischenablage.',
  },
  {
    name: 'Qualität wählen',
    text: 'Das Tool zeigt alle verfügbaren Auflösungen an, von maximaler Qualität (1080p) bis zur niedrigsten.',
  },
  {
    name: 'Bild herunterladen',
    text: 'Klicken Sie auf den Download-Button, um das Thumbnail auf Ihrem Gerät zu speichern.',
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

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Dokumentation & Referenzen',
  bibliography: [
    {
      name: 'YouTube-Hilfe: Ein benutzerdefiniertes Video-Thumbnail hinzufügen',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube Creator Academy: Großartige Thumbnails erstellen',
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
      text: 'YouTube Thumbnails kostenlos in HD herunterladen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie das <strong>Vorschaubild eines YouTube-Videos herunterladen</strong> möchten (in Originalgröße oder maximaler Qualität wie Full HD oder 4K), ist dieses kostenlose Tool die schnellste Lösung. Holen Sie sich das Cover-Bild jedes Kanals zur Inspiration, für eigene Designs oder zur Verwendung in Präsentationen.',
    },
    {
      type: 'tip',
      title: 'Cover Bilder ohne Software extrahieren',
      html: '<p>Keine Installation nötig, keine Registrierung erforderlich. Einfach Link kopieren und das <strong>YouTube-Thumbnail speichern</strong> – direkt auf Ihrem PC oder Smartphone.</p>',
    },
    {
      type: 'title',
      text: 'Wie bekommt man das Thumbnail eines YouTube-Videos?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Vorgang, um das <strong>Foto eines YouTube-Videos zu extrahieren</strong>, ist denkbar einfach. Folgen Sie diesen Schritten, um das Bild in Sekunden zu erhalten:',
    },
    {
      type: 'list',
      items: [
        '<strong>1. URL kopieren:</strong> Gehen Sie zu YouTube und kopieren Sie den Link (aus der Adressleiste oder per Teilen-Button).',
        '<strong>2. Link einfügen:</strong> Geben Sie die URL in das Suchfeld unseres Thumbnail-Extractors ein.',
        '<strong>3. Qualität wählen:</strong> Wir zeigen Ihnen alle verfügbaren Auflösungen, von 1080p bis 360p.',
        '<strong>4. Herunterladen:</strong> Klicken Sie auf den Download-Button, um das <i>Thumbnail</i> zu speichern.',
      ],
    },
    {
      type: 'title',
      text: 'Unterstützte Formate und Auflösungen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube-Cover herunterzuladen war noch nie so einfach. Das Tool sucht automatisch nach dem bestmöglichen Bild (bekannt als <strong>maxresdefault</strong>), das oft aufwendige Photoshop-Designs der YouTuber enthält. Falls kein HD-Bild verfügbar ist, bieten wir die nächstbeste Option (<strong>hqdefault</strong> oder <strong>mqdefault</strong>).',
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool ist perfekt für <i>Community Manager</i>, Grafikdesigner, Content Creator, Meme-Ersteller oder jeden, der das <strong>Cover eines Videos</strong> für seine Projekte benötigt. Zudem ist es kompatibel mit <strong>YouTube Shorts</strong>, sodass Sie auch deren Miniaturansichten auf die gleiche Weise erhalten können.',
    },
    {
      type: 'title',
      text: 'Professionelle Nutzung von YouTube-Thumbnails',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'YouTube-Thumbnails sind wertvolle visuelle Assets. Sie repräsentieren Stunden an Designarbeit, A/B-Tests und CTR-Optimierung. Zu wissen, wie man darauf zugreift, eröffnet viele professionelle Möglichkeiten.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Content Creator',
          html: '<p>Analysieren Sie die Thumbnails viraler Videos in Ihrer Nische, um zu verstehen, welche visuellen Elemente Klicks generieren: Typografie, Farben, Gesichter oder Text.</p><ul><li><strong>Visuelles Benchmarking:</strong> Vergleichen Sie Ihre Bilder mit den Branchenführern.</li><li><strong>Design-Iteration:</strong> Nutzen Sie Thumbnails als Referenz in Photoshop oder Canva.</li><li><strong>Inspirationsarchiv:</strong> Bauen Sie eine Bibliothek konversionsstarker Thumbnails auf.</li></ul>',
        },
        {
          type: 'card',
          title: 'Designer & Marketer',
          html: '<p>Für Grafikdesigner oder <i>Social Media Manager</i> ist der schnelle Zugriff auf YouTube-Cover essenziell für Präsentationen und Audits.</p><ul><li><strong>Kundenpräsentationen:</strong> Fügen Sie reale Wettbewerbsbilder in Ihre Konzepte ein.</li><li><strong>Marken-Audits:</strong> Bewerten Sie die visuelle Konsistenz eines YouTube-Kanals.</li><li><strong>Moodboards:</strong> Sammeln Sie hochwertige visuelle Referenzen ohne unscharfe Screenshots.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kompatibilität mit YouTube Shorts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Extractor funktioniert perfekt mit <strong>YouTube Shorts</strong>. Shorts haben ihr eigenes vertikales Format (9:16), das automatisch generiert wird. Dieses Tool erkennt Shorts-URLs (<code>youtube.com/shorts/ID</code>) und extrahiert das beste verfügbare Bild genau wie bei Standardvideos.',
    },
    {
      type: 'tip',
      title: 'Garantierter Datenschutz',
      html: '<p>Die gesamte Extraktion findet in Ihrem Browser statt. Es werden keine URLs oder Daten an externe Server gesendet.</p>',
    },
  ],
  ui: {
    urlPlaceholder: 'YouTube-Link hier einfügen...',
    pasteAriaLabel: 'Aus Zwischenablage einfügen',
    helperText: 'Unterstützte Formate: youtube.com, youtu.be, shorts.',
    ribbonLabel: 'Maximale Qualität',
    downloadBtn: 'In maximaler Auflösung herunterladen',
    qualityMedium: 'Mittlere Qualität',
    qualityStandard: 'Standard-Qualität',
    qualityLow: 'Niedrige Qualität',
    viewImage: 'Bild ansehen',
    errorInvalid: 'Ungültige YouTube-URL. Bitte überprüfen.',
    imgAlt: 'YouTube HD Thumbnail',
  },
};
