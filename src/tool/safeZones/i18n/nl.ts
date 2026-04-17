import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'sociale-veilige-zones';
const title = 'Social Safe Zones: Videosimulator voor TikTok, Reels & Shorts';
const description =
  'Bekijk een voorbeeld van uw afbeeldingen en video\'s met de echte social media interface. Zorg ervoor dat uw content altijd zichtbaar is en voorkom dat deze per ongeluk wordt afgesneden.';

const faqData = [
  {
    question: "Wat zijn 'Safe Zones' op sociale media?",
    answer:
      "Dit zijn de delen van het scherm waar content zichtbaar is zonder het risico dat deze wordt bedekt door interface-elementen, zoals de gebruikersnaam, beschrijving, interactieknoppen (like, delen) of automatische uitsneden die door sommige apparaten worden toegepast.",
  },
  {
    question: 'Waarom lijkt mijn TikTok-video aan de boven- en onderkant afgesneden?',
    answer:
      'TikTok gebruikt een aspectratio van 9:16. Als uw video breder is, zal de app inzoomen om het scherm te vullen, wat resulteert in uitsnijden. Bovendien bedekt de interface aan de onderkant een deel van de video, dus belangrijke elementen moeten gecentreerd worden.',
  },
  {
    question: 'Is de safe zone hetzelfde voor Instagram Reels en YouTube Shorts?',
    answer:
      'Ze lijken erg op elkaar maar zijn niet identiek. De knoppen van YouTube Shorts zijn anders gepositioneerd dan die van Reels. Met onze tool kunt u schakelen tussen platforms om uw ontwerp op alle platforms te verifiëren.',
  },
  {
    question: 'Wat gebeurt er als ik tekst in de rechteronderhoek plaats?',
    answer:
      'Deze zal waarschijnlijk onzichtbaar of erg moeilijk leesbaar zijn, omdat daar de iconen voor profiel, hartje en reacties staan. Idealiter houdt u tekst en gezichten in het midden-bovengedeelte (Safe Zone).',
  },
];

const howToData = [
  {
    name: 'Laad uw afbeelding of video',
    text: 'Upload het bestand waarvan u een voorbeeld wilt zien. De verwerking is lokaal en privé — er wordt niets naar internet geüpload.',
  },
  {
    name: 'Selecteer het platform',
    text: 'Kies tussen TikTok, Instagram Reels of YouTube Shorts om de bijbehorende interface-overlay te activeren.',
  },
  {
    name: 'Controleer leesbaarheid',
    text: 'Controleer of teksten, ondertitels of belangrijke merkelementen worden bedekt door de iconen van het sociale netwerk.',
  },
  {
    name: 'Pas aan en exporteer',
    text: 'Als er iets verborgen is, verplaats het element dan in uw originele video-editor en test opnieuw totdat het perfect past.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Officiële Platform Documentatie',
  bibliography: [
    {
      name: 'TikTok Creator Portal: Video optimization and safe zones',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: 'Instagram Business: Best practices voor Reels',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: 'YouTube Help: YouTube Shorts maken',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: 'Meta for Creators: Veilige zones en aspectratio\'s voor video',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Master Gids voor Safe Zones: Optimaliseer uw Reels, TikToks en Shorts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In de verzadigde wereld van verticale content is de eerste indruk technisch. De grootste fout die makers maken is negeren hoe hun <strong>video of afbeelding</strong> reageert op de eigen interface van het platform. Elk sociaal netwerk (TikTok, Instagram Reels en YouTube Shorts) plaatst lagen knoppen, tekst en profielen over de video die de visuele impact van uw compositie teniet kunnen doen.',
    },
    {
      type: 'paragraph',
      html: 'Met deze tool kunt u uw mediabestanden laden en precies zien welke delen van uw frame door de interface worden bedekt. Het gaat niet alleen om <strong>ondertitels</strong>; het gaat erom dat gezichten, producten of belangrijke acties in uw video niet worden bedolven onder een "Like"-knop of een lange beschrijving.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'TikTok: De meest invasieve interface',
          html: '<p>TikTok heeft de drukste interface. Aan de rechterkant bevindt zich een kolom met iconen die ongeveer 15% van de breedte beslaat. Aan de onderkant kan de beschrijving tot 4 of 5 regels beslaan, waardoor bijna een derde van het scherm van onderaf wordt bedekt.</p><ul><li><strong>Ondermarge:</strong> Laat de laatste 250px vrij om de beschrijvingstekst en gebruikersnaam te vermijden.</li><li><strong>Rechtermarge:</strong> Plaats geen tekst binnen 100px van de rechterrand.</li><li><strong>Bovenkant:</strong> De knoppen "Volgend" en "Voor jou" beslaan de bovenste centrale strook.</li></ul>',
        },
        {
          type: 'card',
          title: 'IG Reels: De feed factor',
          html: '<p>In tegenstelling doTikTok snijdt Instagram Reels de video bij tot een 4:5 formaat wanneer deze in de feed wordt bekeken. Dit betekent dat als u vitale informatie in de bovenste of onderste 15% van uw 9:16 video plaatst, deze verdwijnt in de feed.</p><ul><li><strong>De 4:5 regel:</strong> Houd titels en sleutelelementen in de centrale zone voor zichtbaarheid in de feed.</li><li><strong>Interface:</strong> Reels-iconen zijn subtieler dan die van TikTok, waardoor er iets meer ruimte is aan de zijkanten.</li><li><strong>Audioknop:</strong> Geplaatst in de rechteronderhoek, deze bedekt meestal veel minder dan de draaiende schijf van TikTok.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts: Let op de rechterkant',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube Shorts heeft een asymmetrische interface. De abonneerknop is zeer prominent en effen gekleurd (meestal zwart of wit), wat een belangrijke visuele dode hoek creëert in de rechteronderhoek.',
    },
    {
      type: 'list',
      items: [
        '<strong>Rechtermarge:</strong> Plaats geen tekst of belangrijke elementen in de onderste 20% rechtsonder.',
        '<strong>Ondermarge:</strong> Laat de laatste 150px vrij om de beschrijvingstekst en gebruikersnaam te vermijden.',
        '<strong>Bovenkant:</strong> De knoppen voor abonneren en andere opties beslaan de bovenste centrale strook.',
      ],
    },
    {
      type: 'title',
      text: 'Cruciale Vragen over Verticaal Ontwerp',
      level: 2,
    },
    {
      type: 'title',
      text: 'Waar plaats je sleutelelementen (gezichten, tekst, product)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De "Gouden Zone" voor de belangrijkste actie is het middelste derde deel van de video. Als u een persoon filmt, zorg er dan voor dat hun ogen en mond zich in deze zone bevinden. Belangrijke grafische elementen moeten iets naar boven worden verschoven vanuit het geometrische midden om de beschrijving aan de onderkant te vermijden.',
    },
    {
      type: 'title',
      text: 'Waarom ziet mijn video er wazig uit na het uploaden?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het is vaak niet de kwaliteit maar de schaling. Neem altijd op in 1080x1920 bij 30 of 60 fps. Vermijd 4K als u veel zware effecten toepast, omdat platforms grote bestanden agressief comprimeren.',
    },
    {
      type: 'title',
      text: 'Hoe zit het met de schermranden?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Houd er rekening mee dat moderne telefoons inkepingen (notches) of cameragat in het scherm hebben. Deze tool bevat een veiligheidsmarge aan de bovenkant zodat uw content niet botst met de klok of systeemiconen (batterij, signaal).',
    },
    {
      type: 'title',
      text: 'Anatomie van een Virale Video',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ontwerpen voor sociale media gaat niet alleen over esthetiek — het gaat over <strong>gebruiksvriendelijkheid</strong>. Als een gebruiker moeite moet doen om tekst te lezen omdat de iconen van het platform deze bedekken, zullen ze simpelweg naar de volgende video swipen. Retentie (kijkduur) daalt scherp als er visuele wrijving is.',
    },
    {
      type: 'paragraph',
      html: 'In YouTube Shorts bijvoorbeeld is de interface asymmetrisch. De abonneerknop is zeer aanwezig. Door deze simulator te gebruiken, kunt u de transparantie aanpassen om te begrijpen hoe uw kleurenpalet reageert op de oorspronkelijke kleuren van de gebruikersinterface.',
    },
    {
      type: 'tip',
      title: 'Creatieve Kwaliteitscontrole Tool',
      html: '<p>Ontworpen voor makers die niets aan het toeval overlaten.</p>',
    },
  ],
  ui: {
    labelConfig: 'Instellingen',
    labelPlatform: 'Doelplatform',
    labelUpload: 'Content Uploaden',
    uploadPrompt: 'Selecteer afbeelding of video',
    uploadLink: 'Of gebruik een voorbeeld',
    loadContent: 'Laad uw content',
    labelOpacity: 'Interface Reliëf',
    labelMask: 'Grijze Kritieke Zones',
    labelGrid: 'Regel van Derden',
    btnReset: 'Canvas Herstellen',
    bannerTiktok: 'TikTok 9:16 simuleren',
    bannerReels: 'Instagram Reels 9:16 simuleren',
    bannerShorts: 'YouTube Shorts 9:16 simuleren',
    nameTiktok: 'TikTok',
    nameReels: 'IG Reels',
    nameShorts: 'YT Shorts',
    ttFollowing: 'Volgend',
    ttForYou: 'Voor jou',
    ttDescription: 'Echt interface-ontwerp voor contentmakers. #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - Origineel geluid',
    ttNavHome: 'Start',
    ttNavFriends: 'Vrienden',
    ttNavInbox: 'Inbox',
    ttNavProfile: 'Profiel',
    reelsFollow: 'Volgen',
    reelsDescription: 'Deze interface is identiek aan de echte. #reels #ux #simulator',
    reelsAudio: 'Trending Music - Originele audio',
    shortsSubscribe: 'ABONNEREN',
    shortsDislike: 'Niet leuk',
    shortsShare: 'Delen',
    shortsRemix: 'Remix',
    shortsDescription: 'Echte interfaces simuleren voor Shorts! #youtube #shorts',
  },
};
