import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'soziale-sicherheitszonen';
const title = 'Social Safe Zones: Videosimulator für TikTok, Reels & Shorts';
const description =
  'Vorschau Ihrer Bilder und Videos mit der echten Social-Media-Oberfläche. Stellen Sie sicher, dass Ihr Inhalt immer sichtbar ist und vermeiden Sie versehentliches Zuschneiden.';

const faqData = [
  {
    question: "Was sind 'Safe Zones' in den sozialen Medien?",
    answer:
      "Dies sind die Bereiche des Bildschirms, in denen Inhalte sichtbar sind, ohne Gefahr zu laufen, von Schnittstellenelementen wie dem Benutzernamen, der Beschreibung, Interaktionsschaltflächen (Like, Teilen) oder dem von einigen Geräten angewendeten automatischen Zuschnitt verdeckt zu werden.",
  },
  {
    question: 'Warum sieht mein TikTok-Video oben und unten abgeschnitten aus?',
    answer:
      'TikTok verwendet ein Seitenverhältnis von 9:16. Wenn Ihr Video breiter ist, zoomt die App hinein, um den Bildschirm auszufüllen, was zum Abschneiden führt. Außerdem verdeckt die untere Benutzeroberfläche einen Teil des Videos, daher sollten wichtige Elemente zentriert werden.',
  },
  {
    question: 'Ist die Safe Zone für Instagram Reels und YouTube Shorts identisch?',
    answer:
      'Sie sind sehr ähnlich, aber nicht identisch. Die Schaltflächen bei YouTube Shorts sind anders positioniert als bei Reels. Unser Tool ermöglicht es Ihnen, zwischen den Plattformen zu wechseln, um Ihr Design auf allen zu überprüfen.',
  },
  {
    question: 'Was passiert, wenn ich Text in die untere rechte Ecke setze?',
    answer:
      'Er wird wahrscheinlich unsichtbar oder sehr schwer zu lesen sein, da sich dort die Symbole für Profil, Herz und Kommentare befinden. Idealerweise halten Sie Texte und Gesichter im mittleren bis oberen Bereich (Safe Zone).',
  },
];

const howToData = [
  {
    name: 'Bild oder Video laden',
    text: 'Laden Sie die Datei hoch, die Sie in der Vorschau sehen möchten. Die Verarbeitung erfolgt lokal und privat – es wird nichts ins Internet hochgeladen.',
  },
  {
    name: 'Plattform auswählen',
    text: 'Wählen Sie zwischen TikTok, Instagram Reels oder YouTube Shorts, um das entsprechende Interface-Overlay zu aktivieren.',
  },
  {
    name: 'Lesbarkeit prüfen',
    text: 'Prüfen Sie, ob Texte, Untertitel oder wichtige Markenelemente von den Symbolen des sozialen Netzwerks verdeckt werden.',
  },
  {
    name: 'Anpassen und exportieren',
    text: 'Wenn etwas verdeckt ist, verschieben Sie das Element in Ihrem ursprünglichen Video-Editor und testen Sie erneut, bis alles perfekt passt.',
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

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Offizielle Plattform-Dokumentation',
  bibliography: [
    {
      name: 'TikTok Creator Portal: Video-Optimierung und Safe Zones',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: 'Instagram Business: Best Practices für Reels',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: 'YouTube Hilfe: YouTube Shorts erstellen',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: 'Meta for Creators: Safe Zones und Seitenverhältnisse für Videos',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Master Guide für Safe Zones: Optimieren Sie Ihre Reels, TikToks und Shorts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In der gesättigten Welt des vertikalen Contents ist der erste Eindruck technischer Natur. Der größte Fehler, den Ersteller machen, ist zu ignorieren, wie ihr <strong>Video oder Bild</strong> mit der nativen Oberfläche der Plattform interagiert. Jedes soziale Netzwerk (TikTok, Instagram Reels und YouTube Shorts) legt Ebenen aus Schaltflächen, Text und Profilen über das Video, die die visuelle Wirkung Ihrer Komposition zunichtemachen können.',
    },
    {
      type: 'paragraph',
      html: 'Mit diesem Tool können Sie Ihre Mediendateien laden und genau sehen, welche Teile Ihres Frames von der Benutzeroberfläche verdeckt werden. Es geht nicht nur um <strong>Untertitel</strong>; es geht darum sicherzustellen, dass Gesichter, Produkte oder Hauptaktionen in Ihrem Video nicht unter einem "Gefällt mir"-Button oder einer langen Beschreibung verschwinden.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'TikTok: Die invasivste Benutzeroberfläche',
          html: '<p>TikTok hat die dichteste Oberfläche. Auf der rechten Seite befindet sich eine Spalte mit Symbolen, die etwa 15 % der Breite einnimmt. Am unteren Rand kann sich die Beschreibung über 4 oder 5 Zeilen erstrecken und fast ein Drittel des Bildschirms von unten her verdecken.</p><ul><li><strong>Unterer Rand:</strong> Lassen Sie die letzten 250px frei, um den Beschreibungstext und den Benutzernamen zu vermeiden.</li><li><strong>Rechter Rand:</strong> Vermeiden Sie es, Text innerhalb von 100px vom rechten Rand zu platzieren.</li><li><strong>Oben:</strong> Die Schaltflächen "Folge ich" und "Für dich" belegen den oberen mittleren Streifen.</li></ul>',
        },
        {
          type: 'card',
          title: 'IG Reels: Der Feed Faktor',
          html: '<p>Im Gegensatz zu TikTok schneidet Instagram Reels das Video auf ein 4:5-Format zu, wenn es im Haupt-Feed angezeigt wird. Das bedeutet: Wenn Sie wichtige Informationen in den oberen oder unteren 15 % Ihres 9:16-Videos platzieren, verschwinden diese im Feed.</p><ul><li><strong>Die 4:5-Regel:</strong> Halten Sie Titel und Schlüsselelemente in der zentralen Zone für die Sichtbarkeit im Feed.</li><li><strong>Oberfläche:</strong> Reels-Symbole sind dezenter als die von TikTok und lassen etwas mehr seitlichen Spielraum zu.</li><li><strong>Audio-Button:</strong> Unten rechts platziert, verdeckt er meist viel weniger als die rotierende Scheibe bei TikTok.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts: Die rechte Seite im Blick',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube Shorts hat eine asymmetrische Oberfläche. Die Schaltfläche "Abonnieren" ist sehr prominent und einfarbig (meist schwarz oder weiß), was einen wichtigen visuellen toten Winkel unten rechts erzeugt.',
    },
    {
      type: 'list',
      items: [
        '<strong>Rechter Rand:</strong> Vermeiden Sie es, Text oder wichtige Elemente in den unteren rechten 20 % zu platzieren.',
        '<strong>Unterer Rand:</strong> Lassen Sie die letzten 150px frei, um den Beschreibungstext und den Benutzernamen zu vermeiden.',
        '<strong>Oben:</strong> Die Schaltflächen "Abonnieren" und "Mehr" belegen den oberen mittleren Streifen.',
      ],
    },
    {
      type: 'title',
      text: 'Kritische Fragen zum vertikalen Design',
      level: 2,
    },
    {
      type: 'title',
      text: 'Wo platziere ich Schlüsselelemente (Gesichter, Text, Produkt)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die "Goldene Zone" für die Hauptaktion ist das mittlere Drittel des Videos. Wenn Sie eine Person filmen, stellen Sie sicher, dass sich Augen und Mund in diesem Bereich befinden. Wichtige grafische Elemente sollten vom geometrischen Zentrum aus leicht nach oben verschoben werden, um die untere Beschreibung zu vermeiden.',
    },
    {
      type: 'title',
      text: 'Warum sieht mein Video nach dem Hochladen unscharf aus?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Oft liegt es nicht an der Qualität, sondern an der Skalierung. Nehmen Sie immer in 1080x1920 mit 30 oder 60 fps auf. Vermeiden Sie 4K, wenn Sie viele schwere Effekte anwenden, da die Plattformen große Dateien aggressiv komprimieren.',
    },
    {
      type: 'title',
      text: 'Was ist mit den Rändern des Telefons?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Denken Sie daran, dass moderne Telefone Kerben (Notches) oder Kameralöcher im Bildschirm haben. Dieses Tool enthält einen oberen Sicherheitsabstand, damit Ihr Inhalt nicht mit der Uhr oder den System-Icons (Batterie, Signal) kollidiert.',
    },
    {
      type: 'title',
      text: 'Anatomie eines viralen Videos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Design für soziale Medien ist nicht nur Ästhetik – es ist <strong>Benutzerfreundlichkeit</strong>. Wenn ein Benutzer kämpfen muss, um Text zu lesen, weil die Symbole der Plattform ihn verdecken, wischt er einfach zum nächsten Video weiter. Die Verweildauer (Watch Time) sinkt drastisch, wenn es visuelle Reibung gibt.',
    },
    {
      type: 'paragraph',
      html: 'Bei YouTube Shorts zum Beispiel ist die Oberfläche asymmetrisch. Die Schaltfläche "Abonnieren" ist sehr prominent. Durch die Verwendung dieses Simulators können Sie die Deckkraft anpassen, um zu verstehen, wie Ihre Farbpalette mit den nativen Farben der Benutzeroberfläche interagiert.',
    },
    {
      type: 'tip',
      title: 'Tool zur kreativen Qualitätskontrolle',
      html: '<p>Entwickelt für Ersteller, die nichts dem Zufall überlassen.</p>',
    },
  ],
  ui: {
    labelConfig: 'Einstellungen',
    labelPlatform: 'Zielplattform',
    labelUpload: 'Inhalt hochladen',
    uploadPrompt: 'Bild oder Video auswählen',
    uploadLink: 'Oder ein Beispiel verwenden',
    loadContent: 'Inhalt laden',
    labelOpacity: 'Schnittstellen-Relief',
    labelMask: 'Kritische Zonen grau hinterlegen',
    labelGrid: 'Drittel-Regel',
    btnReset: 'Leinwand zurücksetzen',
    bannerTiktok: 'Simulation von TikTok 9:16',
    bannerReels: 'Simulation von Instagram Reels 9:16',
    bannerShorts: 'Simulation von YouTube Shorts 9:16',
    nameTiktok: 'TikTok',
    nameReels: 'IG Reels',
    nameShorts: 'YT Shorts',
    ttFollowing: 'Folge ich',
    ttForYou: 'Für dich',
    ttDescription: 'Echtes Interface-Design für Content-Ersteller. #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - Original-Sound',
    ttNavHome: 'Home',
    ttNavFriends: 'Freunde',
    ttNavInbox: 'Postfach',
    ttNavProfile: 'Profil',
    reelsFollow: 'Folgen',
    reelsDescription: 'Dieses Interface ist identisch mit dem Original. #reels #ux #simulator',
    reelsAudio: 'Trending Music - Original-Audio',
    shortsSubscribe: 'ABONNIEREN',
    shortsDislike: 'Mag ich nicht',
    shortsShare: 'Teilen',
    shortsRemix: 'Remix',
    shortsDescription: 'Echte Schnittstellen für Shorts simulieren! #youtube #shorts',
  },
};
