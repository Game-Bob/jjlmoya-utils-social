import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialValueCalculatorUI } from '../ui';

const slug = 'calculateur-valeur-compte-reseaux-sociaux';
const title = 'Calculateur de Valeur de Compte TikTok & Instagram : Tarifs';
const description =
  "Découvrez combien facturer pour vos publications sponsorisées. Notre calculateur analyse les abonnés, l'engagement et le créneau pour vous donner une valeur de marché juste.";

const faqData = [
  {
    question: 'Le calculateur de valeur de compte est-il gratuit ?',
    answer:
      "Oui, notre outil est 100% gratuit et ne nécessite ni inscription ni connexion à vos réseaux sociaux. Vous n'avez qu'à saisir vos métriques publiques.",
  },
  {
    question: "Pourquoi la valeur TikTok est-elle différente de celle d'Instagram ?",
    answer:
      "TikTok repose énormément sur la portée algorithmique et les vues, tandis qu'Instagram accorde encore une grande importance à la taille de la communauté et à la fidélité des abonnés.",
  },
  {
    question: "Quel est un bon taux d'engagement pour facturer plus ?",
    answer:
      "En général, un engagement supérieur à 3% est considéré comme sain. Les comptes avec plus de 10% d'engagement sont considérés comme des 'profils premium' et peuvent facturer une majoration significative.",
  },
  {
    question: 'Le créneau affecte-t-il vraiment autant le prix ?',
    answer:
      "Absolument. Un abonné intéressé par la finance ou les logiciels de gestion a une valeur de conversion bien plus élevée pour une marque qu'un abonné cherchant du divertissement rapide ou des mèmes.",
  },
];

const howToData = [
  {
    name: 'Choisissez votre plateforme',
    text: "Sélectionnez si vous souhaitez calculer la valeur d'un compte TikTok ou Instagram.",
  },
  {
    name: 'Saisissez vos métriques',
    text: "Entrez votre nombre d'abonnés et la moyenne de vues et de likes de vos 10 derniers posts.",
  },
  {
    name: 'Sélectionnez votre créneau',
    text: 'Choisissez la catégorie qui décrit le mieux votre contenu pour ajuster la valeur selon la demande du marché.',
  },
  {
    name: 'Obtenez votre budget',
    text: 'Recevez une fourchette estimée de ce que vous devriez facturer pour une collaboration professionnelle.',
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

export const content: ToolLocaleContent<SocialValueCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Sources et Études de Marché',
  bibliography: [
    {
      name: 'Influencer Marketing Hub: Influencer Rates 2026',
      url: 'https://influencermarketinghub.com/influencer-rates/',
    },
    {
      name: "HypeAuditor: Rapport d'engagement TikTok & Instagram",
      url: 'https://hypeauditor.com/free-tools/tiktok-engagement-calculator/',
    },
    {
      name: 'Social Blade: Statistiques des réseaux sociaux',
      url: 'https://socialblade.com/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'tip',
      title: 'Dans ce guide vous apprendrez',
      html: "<ul><li>Votre <strong>valeur réelle de marché</strong> basée sur les données 2026.</li><li>À différencier l'impact de <strong>TikTok et Instagram</strong>.</li><li>Comment le <strong>créneau</strong> affecte drastiquement votre CPM.</li><li>Un modèle professionnel pour <strong>négocier avec les marques</strong>.</li></ul>",
    },
    {
      type: 'title',
      text: 'Calculateur de Valeur de Compte : Combien facturer une promotion sur TikTok ou Instagram ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si vous êtes créateur de contenu, influenceur ou simplement une communauté active sur les réseaux sociaux, vous vous êtes probablement demandé à un moment : <strong>combien vaut vraiment mon compte ?</strong> ou <strong>combien devrais-je demander pour une collaboration avec une marque ?</strong>.',
    },
    {
      type: 'title',
      text: "L'essor de l'économie des créateurs",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Le marketing d'influence a mûri et ne se résume plus uniquement au nombre d'abonnés. Les marques recherchent des résultats et une connexion profonde. Notre outil offre un point de départ solide basé sur des données de marché réelles.",
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: '+45%',
          html: "<p>Croissance annuelle de l'investissement en Influencer Marketing</p>",
        },
        {
          type: 'card',
          title: '3,2%',
          html: "<p>Taux d'engagement moyen considéré comme sain</p>",
        },
        {
          type: 'card',
          title: '15 €–50 €',
          html: '<p>CPM moyen dans les créneaux de haute valeur (stable)</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Facteurs qui déterminent la valeur de votre compte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Contrairement à ce que l'on croyait il y a quelques années, le nombre d'abonnés n'est que la partie émergée de l'iceberg. Voici les composantes fondamentales :",
    },
    {
      type: 'title',
      text: "1. Le Taux d'Engagement",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "C'est la métrique reine. Elle mesure quel pourcentage de votre communauté interagit activement avec votre contenu. Un petit compte avec une forte interaction est bien plus précieux qu'un grand compte \"fantôme\".",
    },
    {
      type: 'tip',
      title: "Astuce pour votre engagement",
      html: "<p>Essayez de répondre aux commentaires dans les premières heures après la publication pour envoyer des signaux positifs à l'algorithme.</p>",
    },
    {
      type: 'title',
      text: '2. La Portée Moyenne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Sur TikTok, la portée est volatile en raison de son algorithme de recommandation. Sur Instagram, les Reels ont pris de l'importance par rapport aux photos statiques pour capter de nouvelles audiences.",
    },
    {
      type: 'title',
      text: '3. Le Créneau ou Catégorie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Toutes les audiences ne se valent pas. Un créateur en technologie ou finance peut facturer des tarifs bien plus élevés qu'un créateur de divertissement généraliste, en raison de la valeur plus élevée du client final.",
    },
    {
      type: 'title',
      text: 'Catégories avec le meilleur retour (CPM)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finance & Immobilier :</strong> Le créneau le mieux payé par post.',
        "<strong>Technologie & Gadgets :</strong> Forte intention d'achat immédiate.",
        '<strong>Santé & Fitness :</strong> Grand marché pour les équipements et applications.',
        '<strong>Rénovation & Maison :</strong> Coûts de projets élevés et ROI important.',
      ],
    },
    {
      type: 'title',
      text: "TikTok vs Instagram : Où est l'argent ?",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Bien que les deux utilisent la vidéo verticale, leurs modèles de monétisation diffèrent. Instagram, c'est le branding ; TikTok, c'est la performance pure.",
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Instagram',
          html: "<p>Axé sur le branding, l'esthétique et la fidélité. Idéal pour les campagnes à long terme et la loyauté de marque.</p><ul><li>Valorise la taille de la communauté</li><li>Stories avec vente directe</li><li>Croissance stable</li><li>Audience plus mature</li></ul>",
        },
        {
          type: 'card',
          title: 'TikTok',
          html: "<p>Le terrain de la viralité extrême. L'algorithme prime sur les abonnés. ROI explosif à court terme.</p><ul><li>Valorise la portée massive</li><li>Potentiel viral absolu</li><li>Faibles coûts de production</li><li>Audience très active</li></ul>",
        },
      ],
    },
    {
      type: 'title',
      text: 'Comment utiliser les résultats pour négocier',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Obtenez la fourchette de prix de notre outil et utilisez-la comme guide. Présentez vos métriques avec confiance grâce à ce modèle :",
    },
    {
      type: 'tip',
      title: 'Modèle de négociation',
      html: "<p>Bonjour [Nom de la Marque], merci de m'avoir contacté. En me basant sur mes métriques actuelles de portée (moyenne de [X] vues) et mon taux d'engagement de [X]%, mon tarif pour une intégration dans un [Reel/TikTok] est de [Prix €]. Cela inclut : scénarisation et production vidéo, 1 lien en bio 24h, 2 Stories d'amplification, droits d'utilisation 30 jours.</p>",
    },
    {
      type: 'title',
      text: 'Stratégies pour augmenter votre tarif',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>Favorisez l'interaction :</strong> Répondez à chaque commentaire.",
        "<strong>Améliorez la qualité :</strong> L'audio représente 50% d'une bonne vidéo.",
        "<strong>Spécialisez-vous :</strong> Être 'l'expert' vous permet de demander plus.",
        "<strong>Créez un Media Kit :</strong> Documentez vos succès avec des données.",
      ],
    },
    {
      type: 'title',
      text: 'La valeur estimée est-elle fiable ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Notre calculateur utilise des données agrégées d'agences internationales. Cependant, des facteurs comme la saisonnalité (Noël paie plus) peuvent faire varier le prix final.",
    },
    {
      type: 'tip',
      title: 'Note pour les Créateurs',
      html: '<p>Cet outil est une estimation. Ajustez toujours le prix en fonction de la complexité du contenu demandé par la marque.</p>',
    },
    {
      type: 'paragraph',
      html: "En conclusion, connaître sa valeur est la première étape pour professionnaliser sa carrière de créateur. Effectuez des vérifications périodiques avec ce calculateur au fil de la croissance de votre compte pour maintenir vos tarifs toujours à jour.",
    },
  ],
  ui: {
    sectionTag: "Paramètres d'Audit",
    labelFollowers: 'Communauté (Abonnés)',
    labelAvgViewsTiktok: 'Impact (Vues par Vidéo)',
    labelAvgViewsIg: 'Portée (Reach du Profil)',
    tooltipViews: "Additionnez les vues de vos 10 dernières vidéos et divisez par 10 pour obtenir la moyenne réelle.",
    labelEngagement: 'Fidélité (Likes + Comm)',
    tooltipEngagement: 'Additionnez les likes et commentaires totaux de vos 10 derniers contenus et divisez par 10.',
    labelNiche: 'Vertical de Marché',
    nicheEntertainment: 'Divertissement',
    nicheFinance: 'Finance & Immobilier',
    nicheTech: 'Technologie & SaaS',
    nicheFitness: 'Lifestyle & Santé',
    nicheFashion: 'Mode & Esthétique',
    nicheTravel: 'Tourisme & Voyages',
    nicheFood: 'Gastronomie',
    nicheGaming: 'Gaming & eSports',
    nicheHome: 'Rénovation & Maison',
    btnCalculate: 'Générer le Rapport de Valeur',
    emptyTitle: 'Analyse de Viabilité Commerciale',
    emptyDesc: 'Entrez les métriques du profil pour projeter la valeur de marché actuelle.',
    roiLabel: 'Évaluation du Tarif Suggéré',
    rangeLabel: 'Plage suggérée :',
    audienceQuality: "Qualité d'Audience",
    metricER: "Taux d'Engagement",
    investmentEfficiency: "Efficacité d'Investissement",
    metricCPM: 'CPM Projeté',
    insightText: 'Cette valorisation est basée sur le CPM moyen du marché francophone (2026).',
    currencySymbol: '€',
    numberLocale: 'fr-FR',
  },
};
