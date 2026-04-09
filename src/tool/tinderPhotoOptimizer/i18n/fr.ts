import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'optimiseur-photos-tinder';
const title = "Optimiseur de Photos pour Tinder : Analyse de Visage et Composition";
const description =
  "Optimisez vos photos pour Tinder avec une analyse algorithmique du visage. Simule l'interface 2026, analyse le cadrage scientifique et la ligne des yeux, exporte des portraits 9:16 parfaits pour maximiser vos matchs.";

const faqData = [
  {
    question: "Comment cet outil améliore-t-il mes matchs sur Tinder ?",
    answer:
      "L'outil analyse des facteurs techniques clés : le ratio de taille du visage (idéal 30-50%), la position de la ligne des yeux par rapport au tiers supérieur, la couverture du cadre et les zones mortes de l'interface Tinder. En ajustant ces paramètres, votre photo projette plus de confiance et passe les filtres visuels de l'algorithme.",
  },
  {
    question: "Est-il sûr de télécharger mes photos ici ?",
    answer:
      "Complètement sûr. Tout le traitement se fait dans votre navigateur via l'API Canvas. Vos photos ne sont jamais envoyées à un serveur ni stockées nulle part.",
  },
  {
    question: "Que fait exactement la détection de visage par IA ?",
    answer:
      "Elle utilise face-api.js pour détecter 68 points de référence faciaux, analyser l'expression (sourire, air sérieux), évaluer la position des yeux et mesurer l'inclinaison de la tête. Toute l'analyse se fait localement sur votre appareil.",
  },
  {
    question: "Pourquoi recommande-t-il un zoom à 1,2x ?",
    answer:
      "Les caméras frontales des smartphones utilisent des optiques grand angle (24mm) qui déforment le visage avec l'aberration en barillet. Un zoom de 1,2x simule une focale de 50 à 85mm, éliminant la distorsion et offrant des proportions faciales plus naturelles et attrayantes.",
  },
];

const howToData = [
  {
    name: "Téléchargez votre photo",
    text: "Faites glisser ou cliquez sur le simulateur Tinder pour charger votre image.",
  },
  {
    name: "Analysez la composition",
    text: "L'IA détecte automatiquement votre visage et affiche les métriques de taille du visage, ligne des yeux, couverture et expression.",
  },
  {
    name: "Ajustez avec précision",
    text: "Utilisez les contrôles de zoom et luminosité, activez le cadrage automatique ou faites glisser manuellement l'image dans le simulateur.",
  },
  {
    name: "Téléchargez optimisé",
    text: "Exportez votre photo au format natif 1080x1920 optimisé pour Tinder, avec des métadonnées propres.",
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références',
  bibliography: [
    {
      name: 'face-api.js: JavaScript Face Recognition in the Browser',
      url: 'https://github.com/justadudewhohacks/face-api.js',
    },
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/fr/docs/Web/API/Canvas_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "Optimiseur de Photos pour Tinder : Le Guide Scientifique et Technique Définitif (2026)",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Dans l'écosystème des rencontres numériques, votre profil Tinder est traité par deux algorithmes simultanément : l'algorithme de vision avancée de la plateforme elle-même et le cerveau humain de l'utilisateur qui fait glisser. Notre outil intègre des principes de <strong>psychologie évolutive</strong>, de <strong>biométrie faciale</strong> et de <strong>traitement du signal numérique</strong> pour garantir que votre image projette une valeur sociale et un attrait technique maximum.",
    },
    {
      type: 'title',
      text: "La Psychologie de la Première Impression : L'Effet des 1,2 Secondes",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Des études neuroscientifiques indiquent que le cerveau humain met environ 1/10 de seconde pour se former une impression initiale sur la confiance que quelqu'un projette. Sur Tinder, vous disposez d'un peu plus d'une seconde avant le prochain swipe. Notre outil analyse les facteurs qui accélèrent la prise de décision positive :",
    },
    {
      type: 'list',
      items: [
        "<strong>Contact Visuel et Ligne du Regard :</strong> Le contact visuel direct active les régions du cerveau liées à la récompense sociale. Positionner les yeux dans le tiers supérieur maximise la probabilité que l'utilisateur s'arrête sur votre regard avant de lire votre nom.",
        "<strong>Asymétrie et Posture :</strong> Une légère inclinaison peut adoucir des traits agressifs, mais un roll excessif transmet de l'instabilité. Notre algorithme mesure l'angle exact pour vous maintenir dans la plage de confiance.",
        "<strong>Contraste Figure-Fond :</strong> Le système récompense les photos où le sujet est clairement séparé du fond. Un profil technique bien défini aide le moteur de rendu à mettre votre visage en valeur face à la concurrence.",
      ],
    },
    {
      type: 'title',
      text: "Analyse Technique de l'Objectif : Le Problème du Grand Angle",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Presque toutes les photos de profil sont prises avec des smartphones, dont les caméras frontales sont grand angle. L'erreur la plus courante est de se rapprocher trop de l'appareil.",
    },
    {
      type: 'paragraph',
      html: "<strong>L'Aberration en Barillet :</strong> À moins d'un mètre de distance, un objectif de 24mm (standard sur mobile) élargit le centre de l'image. Cela fait paraître les nez plus grands et le visage plus rond que dans la réalité. Notre recommandation de <strong>Zoom 1,2x</strong> est corrective : en appliquant un léger recadrage numérique, vous simulez une focale de 50mm à 85mm, la focale dorée que les photographes de mode utilisent pour affiner le visage et maintenir les proportions réelles.",
    },
    {
      type: 'title',
      text: "L'Interface Tinder : La Science des Zones Mortes",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "De nombreuses excellentes photos échouent parce qu'elles ignorent la couche logicielle (UI) que Tinder place par-dessus. Un utilisateur moyen ne voit pas votre photo propre ; il voit un amalgame de boutons, de dégradés et de texte.",
    },
    {
      type: 'list',
      items: [
        "<strong>Zone de Titre (15% supérieur) :</strong> C'est là que se trouvent les indicateurs de progression et la barre d'état. Si votre front ou vos yeux sont là, l'interface coupe visuellement votre tête.",
        "<strong>Zone d'Action (Boutons) :</strong> Les icônes Like, Nope et Boost occupent les côtés inférieurs. Si vos mains ou éléments de style sont là, ils sont totalement perdus.",
        "<strong>Le Dégradé de Lisibilité (28% inférieur) :</strong> Tinder applique un fondu noir pour que votre nom et votre âge soient lisibles. Si votre visage tombe dans cette zone, le texte se superpose à vos traits, ruinant l'esthétique du profil.",
      ],
    },
    {
      type: 'title',
      text: "Analyse Visuelle en Temps Réel : Décoder l'Algorithme",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Notre outil utilise des <strong>modèles de Computer Vision de dernière génération</strong> pour auditer votre image comme le feraient les modérateurs automatiques de Tinder :",
    },
    {
      type: 'list',
      items: [
        "<strong>Landmark Detection :</strong> Nous cartographions 68 points faciaux pour analyser la symétrie et l'ouverture des yeux. Des yeux bien ouverts et visibles se corrèlent avec des niveaux plus élevés d'extraversion perçue.",
        "<strong>Mood Evaluation :</strong> Un léger sourire active les neurones miroirs chez la personne qui vous regarde. Nous détectons l'intensité de l'expression faciale pour s'assurer que vous ne semblez pas trop sérieux ou inaccessible.",
        "<strong>Qualité d'Éclairage :</strong> Le système évalue la confiance de détection. Un score faible signifie que la photo a du bruit visuel ou des ombres dures que l'algorithme Tinder pourrait signaler comme contenu de mauvaise qualité.",
      ],
    },
    {
      type: 'title',
      text: "Métadonnées et Export Optimisé pour Tinder",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Saviez-vous que le poids de votre image influence l'algorithme ? Les applications de rencontres privilégient le contenu qui se charge rapidement pour ne pas interrompre le flux de l'utilisateur.",
    },
    {
      type: 'list',
      items: [
        "<strong>Suppression des Métadonnées (Confidentialité et SEO) :</strong> Nous supprimons les enregistrements EXIF. Une photo propre donne à l'algorithme de la plateforme une ardoise vierge.",
        "<strong>Compression Intelligente sans Perte :</strong> Nous réduisons le poids du fichier JPG tout en maintenant l'espace colorimétrique sRGB natif d'iOS et Android. Votre photo sera vibrante même avec peu de signal.",
        "<strong>Format 9:16 Immersif :</strong> En livrant exactement 1080x1920 pixels, nous évitons que Tinder n'applique son propre algorithme de compression agressif qui génère des artefacts d'image.",
      ],
    },
    {
      type: 'tip',
      title: "Conseil d'Expert",
      html: "<p>La première photo doit TOUJOURS être un portrait clair des épaules vers le haut. Gardez les photos plein corps ou d'activités pour la 3ème ou 4ème position. Assurez-vous que votre regard est dégagé et que votre visage a la taille optimale (30-50%).</p>",
    },
    {
      type: 'title',
      text: "Sécurité et Éthique du Traitement",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Nous comprenons que vos photos sont privées. Cet optimiseur utilise la <strong>technologie Client-Side</strong> : les images sont traitées via un moteur canvas dans votre navigateur local. Aucune donnée ne quitte votre appareil. C'est la façon la plus sûre et la plus rapide d'optimiser votre profil sans compromettre votre vie privée.",
    },
  ],
  ui: {
    uploadTitle: 'Optimiser la Photo',
    uploadSubtitle: 'Faites glisser ou cliquez pour commencer',
    btnDownload: 'Télécharger la Photo Optimisée',
    btnRescan: 'Rescanner le Visage',
    btnAutoFocus: 'Cadrage Auto',
    btnMarkFace: 'Marquer le Visage',
    panelManual: 'Ajustements Manuels',
    panelVisualization: 'Visualisation Avancée',
    panelMetrics: "Analytique de Composition",
    panelExport: 'Exporter pour Tinder 2026',
    panelExportDesc: 'Recadrage automatique en 1080x1920 avec métadonnées optimisées.',
    labelZoom: 'Zoom',
    labelBrightness: 'Luminosité',
    toggleGrid: 'Grille des Tiers',
    toggleGridDesc: 'Ajustement de composition classique',
    toggleDeadzones: 'Zones Dangereuses',
    toggleDeadzonesDesc: "Évite que l'UI cache votre visage",
    toggleFaceBox: 'Voir le Visage Détecté',
    toggleFaceBoxDesc: 'Landmarks et zone de détection',
    metricFaceSize: 'Ratio Visage',
    metricEyeLine: 'Ligne du Regard',
    metricCoverage: 'Couverture',
    metricMood: 'Expression',
    metricQuality: 'Confiance',
    analysisSuccess: 'Facteurs de Succès',
    analysisWarning: 'Optimisation',
    analysisError: 'Erreurs Critiques',
    deadzoneTop: "Zone UI Supérieure",
    deadzoneBottom: "Zone d'Information",
    loaderAnalyzing: 'Analyse de la composition...',
    loaderModels: 'Chargement des modèles de vision...',
    simulatorName: 'Votre Nom, 25',
    simulatorJob: 'Votre Profession',
    simulatorCity: 'Vit à Paris',
    simulatorDistance: 'À 5 km de vous',
  },
};
