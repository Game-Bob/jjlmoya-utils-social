import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'bildgroesse-social-media-anpassen';
const title = 'Bildgröße Social Media anpassen: Zuschneiden & Ändern für jede Plattform';
const description =
  'Passen Sie die Größe Ihrer Fotos für Instagram, TikTok, YouTube und mehr an. Intelligentes Zuschneiden mit aktualisierten offiziellen Maßen für 2026.';

const faqData = [
  {
    question: 'Geht beim Ändern der Bildgröße die Qualität verloren?',
    answer:
      'Nein, wir verwenden hochwertige Glättungsalgorithmen. Es wird empfohlen, ein Originalbild mit einer Auflösung hochzuladen, die mindestens so groß wie das Zielformat ist.',
  },
  {
    question: 'Ist es sicher, meine Fotos hier hochzuladen?',
    answer:
      'Absolut. Die Verarbeitung erfolgt lokal in Ihrem Browser mittels Canvas API. Ihre Fotos werden niemals an einen Server gesendet.',
  },
  {
    question: 'Welche Formate werden unterstützt?',
    answer:
      'Wir unterstützen JPG, PNG, WebP und AVIF für den Upload. Downloads werden als hochwertige JPGs für maximale Kompatibilität optimiert.',
  },
];

const howToData = [
  {
    name: 'Bild hochladen',
    text: 'Ziehen Sie Ihre Datei per Drag & Drop hierher oder wählen Sie sie auf Ihrem Gerät aus.',
  },
  {
    name: 'Format wählen',
    text: 'Wählen Sie das gewünschte soziale Netzwerk und die Art der Veröffentlichung aus dem Seitenmenü.',
  },
  {
    name: 'Anpassen und herunterladen',
    text: 'Richten Sie Ihr Foto durch Ziehen aus und nutzen Sie den Zoom für den perfekten Ausschnitt. Klicken Sie abschließend auf Herunterladen.',
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

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen',
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
      text: 'Social Media Bildgröße anpassen für jede Plattform',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Im heutigen digitalen Ökosystem ist der erste Eindruck visuell. Jedes soziale Netzwerk arbeitet mit spezifischen Algorithmen, die Inhalte bevorzugen, die nativ an ihre Proportionen angepasst sind. Unser Social Media Image Resizer ist nicht nur ein technisches Werkzeug – er ist Ihr Partner, um sicherzustellen, dass Ihre Botschaft ohne unerwünschte Zuschnitte oder Qualitätsverluste ankommt.',
    },
    {
      type: 'paragraph',
      html: 'Egal, ob Sie ein Landschaftsfoto in ein markantes Hochformat für Instagram Stories umwandeln oder ein Design für ein komplexes YouTube-Banner anpassen müssen: Unser Tool nutzt ein intelligentes Zuschnittsystem, mit dem Sie Ihr Bild direkt im Browser präzise positionieren und skalieren können.',
    },
    {
      type: 'title',
      text: 'Offizielle Social Media Bildgrößen 2026',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — Quadratischer Post', body: '1080 × 1080 px · Verhältnis 1:1' },
        { title: 'Instagram — Vertikaler Post', body: '1080 × 1350 px · Verhältnis 4:5' },
        { title: 'TikTok / Reels — Vertikal', body: '1080 × 1920 px · Verhältnis 9:16' },
        { title: 'YouTube — Thumbnail', body: '1280 × 720 px · Verhältnis 16:9' },
        { title: 'YouTube Kanal Banner', body: '2560 × 1440 px · Verhältnis 16:9' },
        { title: 'X (Twitter) Standard Post', body: '1200 × 675 px · Verhältnis 16:9' },
        { title: 'LinkedIn Profil Header', body: '1584 × 396 px · Verhältnis 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: 'Das quadratische Format (1:1) bleibt ein Klassiker, aber das Hochformat (4:5) nimmt mehr Bildschirmfläche ein und generiert im Feed bis zu 30 % mehr Interaktionen.',
        },
        {
          title: 'Short Form Content',
          body: 'Für TikTok und Reels ist der Standard 9:16. Dieses immersive Format erfordert die perfekte Ausrichtung des zentralen Motivs, damit es nicht von der App-UI verdeckt wird.',
        },
        {
          title: 'Visuelles Engagement',
          body: 'Von Thumbnails bis zu Bannern: Jedes Bild hat Einfluss auf die Klickrate. Ein präziser Zuschnitt stellt sicher, dass Texte und Schlüsselelemente immer lesbar sind.',
        },
        {
          title: 'Professionelles Branding',
          body: 'In Netzwerken wie LinkedIn bedeutet Schärfe Autorität. Header benötigen spezifische Verhältnisse, um auf hochauflösenden Bildschirmen nicht pixelig zu wirken.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Warum das Seitenverhältnis wichtig ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Seitenverhältnis ist das proportionale Verhältnis zwischen Breite und Höhe eines Bildes. Wird es ignoriert, müssen Plattformen zoomen oder schwarze Balken hinzufügen, was die Ästhetik und die organische Reichweite beeinträchtigt.',
    },
    {
      type: 'list',
      items: [
        'Verhindert, dass Texte oder Logos von App-Icons abgeschnitten werden.',
        'Erhält die optimale Pixeldichte ohne Verzerrung oder Streckung des Originalfotos.',
        'Spart Zeit, indem alle offiziellen Maße in einem einzigen Web-Tool zentralisiert werden.',
        'Verbessert die Ladegeschwindigkeit durch Erstellung von Dateien mit exakten Maßen.',
      ],
    },
    {
      type: 'tip',
      title: 'Tipp zur Bildkomposition',
      html: '<p>Nutzen Sie beim manuellen Verschieben die Drittel-Regel. Platzieren Sie das Hauptmotiv an einem der Schnittpunkte des Gitters für dynamischere und professionellere Ergebnisse.</p>',
    },
    {
      type: 'title',
      text: 'Schritte zum perfekten Bildausschnitt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Format wählen: Wählen Sie die Plattform und den Beitragstyp im Seitenmenü.',
        'Bild hochladen: Ziehen Sie Ihre Datei in das Fenster oder nutzen Sie die Dateiauswahl.',
        'Rahmen anpassen: Verschieben Sie das Foto im sichtbaren Bereich und nutzen Sie den Zoom.',
        'Sofortiger Export: Klicken Sie auf Herunterladen, um Ihr Bild sofort zu erhalten.',
      ],
    },
    {
      type: 'title',
      text: 'Datenschutz und lokale Verarbeitung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ihre Privatsphäre ist uns wichtig. Dieser Resizer verarbeitet Bilder lokal in Ihrem Browser mittels Canvas API. Ihre Fotos werden niemals auf einen externen Server hochgeladen.',
    },
    {
      type: 'title',
      text: 'Professionelle Optimierung für Social Media',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die professionelle Anpassung Ihrer visuellen Inhalte ist eine direkte Wachstumsstrategie. Unser Tool vereinfacht den Workflow für Ersteller und Community-Manager.',
    },
  ],
  ui: {
    sidebarTitle: 'Social Formate',
    uploadTitle: 'Bild hochladen',
    uploadSubtitle: 'Foto hierher ziehen oder für Auswahl klicken',
    btnReset: 'Zurücksetzen',
    btnDownload: 'Bild herunterladen',
  },
};
