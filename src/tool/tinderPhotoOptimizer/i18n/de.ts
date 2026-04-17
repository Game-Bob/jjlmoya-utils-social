import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'tinder-foto-optimierer';
const title = 'Tinder Foto Optimierer: Analyse von Gesicht und Komposition';
const description =
  'Optimieren Sie Ihre Tinder-Fotos mit algorithmischer Gesichtsanalyse. Simulieren Sie die Tinder-Oberfläche, analysieren Sie wissenschaftliches Framing und die Augenlinie und exportieren Sie perfekte 9:16-Porträts für maximale Matches.';

const faqData = [
  {
    question: 'Wie verbessert dieses Tool meine Tinder-Matches?',
    answer:
      'Das Tool analysiert wichtige technische Faktoren: das Verhältnis der Gesichtsgröße (ideal 30–50 %), die Position der Augenlinie im Verhältnis zum oberen Drittel, die Abdeckung des Bildausschnitts und die Totzonen der Tinder-Benutzeroberfläche. Durch die Anpassung dieser Parameter projiziert Ihr Foto mehr Vertrauen und überwindet die visuellen Filter des Algorithmus.',
  },
  {
    question: 'Ist es sicher, meine Fotos hier hochzuladen?',
    answer:
      'Absolut sicher. Die gesamte Verarbeitung erfolgt in Ihrem Browser über die Canvas-API. Ihre Fotos werden niemals an einen Server gesendet oder irgendwo gespeichert.',
  },
  {
    question: 'Was genau bewirkt die KI-Gesichtserkennung?',
    answer:
      'Sie verwendet face-api.js, um 68 Gesichtspunkte zu erkennen, den Ausdruck (Lächeln, ernster Ausdruck) zu analysieren, die Augenposition zu bewerten und die Kopfneigung zu messen. Die gesamte Analyse findet lokal auf Ihrem Gerät statt.',
  },
  {
    question: 'Warum wird ein Zoom von 1,2x empfohlen?',
    answer:
      'Frontkameras von Smartphones verwenden Weitwinkeloptiken (24 mm), die das Gesicht durch Tonnenverzerrung verzerren. Ein Zoom von 1,2x simuliert eine Brennweite von 50–85 mm, wodurch die Verzerrung eliminiert wird und natürlichere und attraktivere Gesichtsproportionen entstehen.',
  },
];

const howToData = [
  {
    name: 'Laden Sie Ihr Foto hoch',
    text: 'Ziehen Sie Ihr Bild in den Tinder-Simulator oder klicken Sie darauf, um es zu laden.',
  },
  {
    name: 'Analysieren Sie die Komposition',
    text: 'Die KI erkennt Ihr Gesicht automatisch und zeigt Metriken zu Gesichtsgröße, Augenlinie, Abdeckung und Ausdruck an.',
  },
  {
    name: 'Präzise anpassen',
    text: 'Verwenden Sie die Zoom- und Helligkeitsregler, aktivieren Sie das Auto-Framing oder ziehen Sie das Bild manuell im Simulator.',
  },
  {
    name: 'Optimierter Download',
    text: 'Exportieren Sie Ihr Foto im nativen Format 1080x1920, das für Tinder optimiert ist, mit sauberen Metadaten.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen',
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
      text: 'Tinder Foto Optimierer: Der ultimative wissenschaftliche und technische Leitfaden (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Im Ökosystem des digitalen Datings wird Ihr Tinder-Profil gleichzeitig von zwei Algorithmen verarbeitet: dem fortschrittlichen Visions-Algorithmus der Plattform selbst und dem menschlichen Gehirn des Nutzers, der wischt. Unser Tool integriert Prinzipien der <strong>Evolutionspsychologie</strong>, <strong>Gesichtsbiometrie</strong> und <strong>digitalen Signalverarbeitung</strong>, um sicherzustellen, dass Ihr Bild maximalen sozialen Wert und technische Attraktivität ausstrahlt.',
    },
    {
      type: 'title',
      text: 'Die Psychologie des ersten Eindrucks: Der 1,2-Sekunden-Effekt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Neurowissenschaftliche Studien zeigen, dass das menschliche Gehirn etwa eine Zehntelsekunde benötigt, um einen ersten Eindruck davon zu gewinnen, wie viel Vertrauen jemand ausstrahlt. Bei Tinder haben Sie kaum mehr als eine Sekunde Zeit vor dem nächsten Swipe. Unser Tool analysiert die Faktoren, die eine positive Entscheidungsfindung beschleunigen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Augenkontakt und Blicklinie:</strong> Direkter Blick aktiviert Gehirnregionen, die mit sozialer Belohnung zusammenhängen. Die Positionierung der Augen im oberen Drittel maximiert die Wahrscheinlichkeit, dass der Nutzer bei Ihrem Blick hängen bleibt, bevor er Ihren Namen liest.',
        '<strong>Asymmetrie und Haltung:</strong> Eine leichte Neigung kann aggressive Züge abmildern, aber ein übermäßiger Roll vermittelt Instabilität. Unser Algorithmus misst den genauen Winkel, um Sie im Vertrauensbereich zu halten.',
        '<strong>Figur-Grund-Kontrast:</strong> Das System bevorzugt Fotos, auf denen das Subjekt deutlich vom Hintergrund getrennt ist. Ein gut definiertes technisches Profil hilft der Rendering-Engine, Ihr Gesicht gegenüber der Konkurrenz hervorzuheben.',
      ],
    },
    {
      type: 'title',
      text: 'Technische Objektivanalyse: Das Problem des Weitwinkels',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fast alle Profilbilder werden mit Smartphones aufgenommen, deren Frontkameras Weitwinkelobjektive sind. Der häufigste Fehler ist es, zu nah an das Gerät heranzugehen.',
    },
    {
      type: 'paragraph',
      html: '<strong>Die Tonnenverzerrung:</strong> Bei einer Entfernung von weniger als einem Meter dehnt ein 24-mm-Objektiv (Standard bei Handys) die Bildmitte aus. Dadurch wirken Nasen größer und Gesichter runder, als sie in Wirklichkeit sind. Unsere Empfehlung von <strong>1,2x Zoom</strong> ist korrigierend: Durch einen leichten digitalen Zuschnitt simulieren Sie eine Brennweite von 50 mm bis 85 mm, die goldene Brennweite, die Modefotografen verwenden, um das Gesicht schmaler erscheinen zu lassen und reale Proportionen beizubehalten.',
    },
    {
      type: 'title',
      text: 'Tinder-Oberfläche: Die Wissenschaft der Totzonen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Viele hervorragende Fotos scheitern, weil sie die Softwareebene (UI) ignorieren, die Tinder darüberlegt. Ein durchschnittlicher Nutzer sieht nicht Ihr reines Foto; er sieht eine Mischung aus Buttons, Gradienten und Text.',
    },
    {
      type: 'list',
      items: [
        '<strong>Titelbereich (obere 15 %):</strong> Hier befinden sich die Fortschrittsanzeigen und die Statusleiste. Wenn Ihre Stirn oder Ihre Augen hier liegen, schneidet die Oberfläche Ihren Kopf visuell ab.',
        '<strong>Aktionsbereich (Buttons):</strong> Die Icons für Like, Nope und Boost belegen die unteren Seiten. Wenn Ihre Hände oder Stilelemente dort liegen, gehen sie völlig verloren.',
        '<strong>Der Lesbarkeits-Gradient (untere 28 %):</strong> Tinder wendet eine schwarze Überblendung an, damit Ihr Name und Alter lesbar sind. Wenn Ihr Gesicht in diesen Bereich fällt, überlagert der Text Ihre Züge und ruiniert die Ästhetik des Profils.',
      ],
    },
    {
      type: 'title',
      text: 'Echtzeit-Visionsanalyse: Den Algorithmus verstehen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Unser Tool verwendet modernste <strong>Computer Vision Modelle</strong>, um Ihr Bild so zu prüfen, wie es die automatischen Moderatoren von Tinder tun würden:',
    },
    {
      type: 'list',
      items: [
        '<strong>Landmark Detection:</strong> Wir erfassen 68 Gesichtspunkte, um Symmetrie und Augenöffnung zu analysieren. Weit geöffnete und sichtbare Augen korrelieren mit einer höheren wahrgenommenen Extrovertiertheit.',
        '<strong>Mood Evaluation:</strong> Ein leichtes Lächeln aktiviert Spiegelneuronen beim Betrachter. Wir erkennen die Intensität des Gesichtsausdrucks, um sicherzustellen, dass Sie nicht zu ernst oder unnahbar wirken.',
        '<strong>Beleuchtungsqualität:</strong> Das System bewertet die Erkennungssicherheit. Wenn der Score niedrig ist, weist das Foto visuelles Rauschen oder harte Schatten auf, die der Tinder-Algorithmus als minderwertigen Inhalt markieren könnte.',
      ],
    },
    {
      type: 'title',
      text: 'Metadaten und optimierter Export für Tinder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wussten Sie, dass die Dateigröße Ihres Bildes den Algorithmus beeinflusst? Dating-Apps priorisieren Inhalte, die schnell laden, um den Nutzerfluss nicht zu unterbrechen.',
    },
    {
      type: 'list',
      items: [
        '<strong>Metadaten-Entfernung (Datenschutz & SEO):</strong> Wir entfernen EXIF-Daten. Ein sauberes Foto gibt Ihnen eine neue Leinwand für den Plattform-Algorithmus.',
        '<strong>Intelligente verlustfreie Kompression:</strong> Wir reduzieren die JPG-Dateigröße unter Beibehaltung des nativen sRGB-Farbraums von iOS und Android. Ihr Foto wird auch bei schlechter Verbindung brillant aussehen.',
        '<strong>Immersives 9:16 Format:</strong> Durch die Lieferung von exakt 1080x1920 Pixeln verhindern wir, dass Tinder seinen eigenen aggressiven Kompressionsalgorithmus anwendet, der Bildartefakte erzeugt.',
      ],
    },
    {
      type: 'tip',
      title: 'Expertenrat',
      html: '<p>Das erste Foto sollte IMMER ein klares Porträt ab den Schultern aufwärts sein. Heben Sie Ganzkörperfotos oder Aktivitätsfotos für die 3. oder 4. Position auf. Stellen Sie sicher, dass Ihr Blick beim ersten Eindruck frei von Hindernissen ist und Ihr Gesicht die optimale Größe (30–50 %) hat.</p>',
    },
    {
      type: 'title',
      text: 'Sicherheit und Ethik bei der Verarbeitung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wir wissen, dass Ihre Fotos privat sind. Dieser Optimierer nutzt <strong>Client-Side Technologie</strong>: Bilder werden über eine Canvas-Engine lokal in Ihrem Browser verarbeitet. Keine Daten verlassen Ihr Gerät. Dies ist der sicherste und schnellste Weg, Ihr Profil zu optimieren, ohne Ihre Privatsphäre zu gefährden.',
    },
  ],
  ui: {
    uploadTitle: 'Foto optimieren',
    uploadSubtitle: 'Ziehen oder klicken Sie zum Starten',
    btnDownload: 'Optimiertes Foto herunterladen',
    btnRescan: 'Gesicht neu scannen',
    btnAutoFocus: 'Auto-Framing',
    btnMarkFace: 'Gesicht markieren',
    panelManual: 'Manuelle Anpassungen',
    panelVisualization: 'Erweiterte Visualisierung',
    panelMetrics: 'Kompositionsanalyse',
    panelExport: 'Export für Tinder 2026',
    panelExportDesc: 'Automatischer Zuschnitt auf 1080x1920 mit optimierten Metadaten.',
    labelZoom: 'Zoom',
    labelBrightness: 'Helligkeit',
    toggleGrid: 'Drittel-Gitter',
    toggleGridDesc: 'Anpassung der klassischen Komposition',
    toggleDeadzones: 'Gefahrenzonen',
    toggleDeadzonesDesc: 'Verhindert, dass das UI Ihr Gesicht verdeckt',
    toggleFaceBox: 'Erkanntes Gesicht anzeigen',
    toggleFaceBoxDesc: 'Landmarks und Erkennungsbereich',
    metricFaceSize: 'Gesichtsverhältnis',
    metricEyeLine: 'Blicklinie',
    metricCoverage: 'Abdeckung',
    metricMood: 'Ausdruck',
    metricQuality: 'Vertrauen',
    analysisSuccess: 'Erfolgsfaktoren',
    analysisWarning: 'Optimierung',
    analysisError: 'Kritische Fehler',
    deadzoneTop: 'Oberer UI-Bereich',
    deadzoneBottom: 'Informationsbereich',
    loaderAnalyzing: 'Komposition wird analysiert...',
    loaderModels: 'Visionsmodelle werden geladen...',
    simulatorName: 'Dein Name, 25',
    simulatorJob: 'Dein Beruf',
    simulatorCity: 'Wohnt in Deutschland',
    simulatorDistance: '5 km von dir entfernt',
    statusOptimal: 'OPTIMAL',
    statusIncorrect: 'INKORREKT',
    statusHigh: 'HOCH',
    statusMedium: 'MITTEL',
    statusLow: 'NIEDRIG',
    statusPositive: 'POSITIV',
    statusNeutral: 'NEUTRAL',
    alertExcellent: 'Exzellente technische Komposition.',
    alertEmptySpaces: 'LEERSTELLEN: Das Bild deckt nicht den gesamten Bildausschnitt ab. Passen Sie Zoom oder Position an.',
    alertAlmostInvisible: 'FAST UNSICHTBAR: Sie sind sehr weit weg. Zoomen Sie heran, bis Ihr Gesicht mindestens ein Drittel des Bildschirms einnimmt.',
    alertTooClose: 'ZU NAH: Extreme Nahaufnahmen können aggressiv wirken.',
    alertPerfectSize: 'PERFEKTE GRÖSSE: Ihr Gesicht hat das ideale Verhältnis, um Vertrauen zu vermitteln.',
    alertImpactfulLook: 'EINDRUCKSVOLLER BLICK: Ihre Augen liegen auf der maximalen Aufmerksamkeitslinie.',
    alertEyeLineMoveUp: 'AUGENLINIE: Für ein professionelles Framing schieben Sie das Gesicht ein Stück nach oben zur oberen Linie.',
    alertEyeLineMoveDown: 'AUGENLINIE: Für ein professionelles Framing schieben Sie das Gesicht ein Stück nach unten zur oberen Linie.',
    alertTiltedHead: 'GENEIGTER KOPF: Eine zu schräge Haltung kann Instabilität vermitteln.',
    alertSmileDetected: 'LÄCHELN ERKANNT: Lächeln erhöht die Match-Rate signifikant.',
    alertSevereExpression: 'ERNSTER AUSDRUCK: Versuchen Sie es mit einem Foto mit einem freundlicheren Gestus.',
    alertObstructedTop: 'BLOCKIERT: Die Fortschrittsleiste verdeckt Ihr Gesicht.',
    alertObstructedBottom: 'BLOCKIERT: Der Informationsblock verdeckt Ihr Gesicht.',
    alertLowLight: 'SCHLECHTE BELEUCHTUNG: Die KI hat Schwierigkeiten, Sie zu sehen. Suchen Sie nach einem Foto mit besserem Licht.',
    alertCutOff: 'ABGESCHNITTEN: Das Gesicht liegt außerhalb des vertikalen Rahmens.',
    alertProTip: 'PRO-TIPP: Wenn es ein Selfie ist, nutzen Sie den Zoom (1,2x), um Linsenverzerrungen zu vermeiden.',
    canvasFaceDetected: 'Gesicht erkannt',
  },
};
