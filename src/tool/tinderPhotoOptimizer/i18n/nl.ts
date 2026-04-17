import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'tinder-foto-optimallisator';
const title = 'Tinder Foto Optimallisator: Gezichtsanalyse en Compositie';
const description =
  'Optimaliseer je Tinder-foto\'s met algoritmische gezichtsanalyse. Simuleer de Tinder-interface van 2026, analyseer wetenschappelijke framing en de ooglijn, en exporteer perfecte 9:16-portretten voor maximale matches.';

const faqData = [
  {
    question: 'Hoe verbetert deze tool mijn matches op Tinder?',
    answer:
      'De tool analyseert belangrijke technische factoren: de gezichtsgrootteverhouding (ideaal 30-50%), de positie van de ooglijn ten opzichte van het bovenste derde deel, de framing-dekking en de dode zones van de Tinder-interface. Door deze parameters aan te passen, straalt je foto meer vertrouwen uit en doorbreekt hij de visuele filters van het algoritme.',
  },
  {
    question: 'Is het veilig om mijn foto\'s hier te uploaden?',
    answer:
      'Volledig veilig. Alle verwerking vindt plaats in je browser via de Canvas API. Je foto\'s worden nooit naar een server verzonden of ergens opgeslagen.',
  },
  {
    question: 'Wat doet de gezichtsdetectie met AI precies?',
    answer:
      'Het gebruikt face-api.js om 68 gezichtspunten te detecteren, de expressie te analyseren (glimlach, serieuze blik), de oogpositie te evalueren en de hoofdkanteling te meten. De gehele analyse vindt lokaal plaats op jouw apparaat.',
  },
  {
    question: 'Waarom raden jullie een zoom van 1.2x aan?',
    answer:
      'Frontcamera\'s van smartphones gebruiken groothoeklenzen (24mm) die het gezicht vervormen met tonvervorming. Een zoom van 1.2x simuleert een brandpuntsafstand van 50-85mm, waardoor de vervorming wordt geëlimineerd en natuurlijkere en aantrekkelijkere gezichtsproporties ontstaan.',
  },
];

const howToData = [
  {
    name: 'Upload je foto',
    text: 'Sleep je afbeelding naar de Tinder-simulator of klik erop om deze te laden.',
  },
  {
    name: 'Analyseer de compositie',
    text: 'De AI detecteert je gezicht automatisch en toont statistieken over gezichtsgrootte, ooglijn, dekking en expressie.',
  },
  {
    name: 'Stem nauwkeurig af',
    text: 'Gebruik de zoom- en helderheidsregelaars, activeer auto-framing of sleep de afbeelding handmatig binnen de simulator.',
  },
  {
    name: 'Geoptimaliseerde download',
    text: 'Exporteer je foto in het native formaat 1080x1920, geoptimaliseerd voor Tinder, met schone metadata.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties',
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
      text: 'Tinder Foto Optimallisator: De Definitieve Wetenschappelijke en Technische Gids (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In het ecosysteem van digitaal daten wordt je Tinder-profiel tegelijkertijd door twee algoritmen verwerkt: het geavanceerde visie-algoritme van het platform zelf en het menselijke brein van de gebruiker die swipet. Onze tool integreert principes van <strong>evolutionaire psychologie</strong>, <strong>biometrie van het gezicht</strong> en <strong>digitale signaalverwerking</strong> om ervoor te zorgen dat jouw afbeelding de maximale sociale waarde en technische aantrekkingskracht uitstraalt.',
    },
    {
      type: 'title',
      text: 'De Psychologie van de Eerste Indruk: Het 1.2 Seconden Effect',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Neurowetenschappelijke studies tonen aan dat het menselijke brein ongeveer 1/10 van een seconde nodig heeft om een eerste indruk te vormen over het vertrouwen dat iemand uitstraalt. Op Tinder heb je iets meer dan een seconde voordat de volgende swipe plaatsvindt. Onze tool analyseert de factoren die een positieve besluitvorming versnellen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Oogcontact en Kijklijn:</strong> Een directe blik activeert hersengebieden die gerelateerd zijn aan sociale beloning. Door de ogen in het bovenste derde deel te positioneren, maximaliseer je de kans dat de gebruiker stopt bij jouw blik voordat hij je naam leest.',
        '<strong>Asymmetrie en Houding:</strong> Een lichte kanteling kan agressieve trekken verzachten, maar een overmatige rol straalt instabiliteit uit. Ons algoritme meet de exacte hoek om je binnen het vertrouwde bereik te houden.',
        '<strong>Figuur-Achtergrond Contrast:</strong> Het systeem beloont foto\'s waarbij het onderwerp duidelijk gescheiden is van de achtergrond. Een goed gedefinieerd technisch profiel helpt de rendering-engine om jouw gezicht te laten opvallen tussen de concurrentie.',
      ],
    },
    {
      type: 'title',
      text: 'Technische Lensanalyse: Het Probleem van de Groothoek',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bijna alle profielfoto\'s worden genomen met smartphones, waarvan de frontcamera\'s groothoeklenzen zijn. De meest voorkomende fout is om te dicht bij het apparaat te komen.',
    },
    {
      type: 'paragraph',
      html: '<strong>De Tonvervorming:</strong> Op een afstand van minder dan een meter zet een 24mm lens (standaard op mobieltjes) het midden van het beeld uit. Hierdoor lijken neuzen groter en lijkt het gezicht ronder dan het in werkelijkheid is. Onze aanbeveling van <strong>1.2x Zoom</strong> is corrigerend: door een lichte digitale uitsnede toe te passen, simuleer je een brandpuntsafstand van 50mm tot 85mm, de gouden brandpuntsafstand die modefotografen gebruiken om het gezicht slanker te maken en de werkelijke proporties te behouden.',
    },
    {
      type: 'title',
      text: 'Tinder-interface: De Wetenschap van de Dode Zones',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Veel uitstekende foto\'s mislukken omdat ze de softwarelaag (UI) negeren die Tinder erbovenop plaatst. Een gemiddelde gebruiker ziet niet je schone foto; hij ziet een mengeling van knoppen, gradiënten en tekst.',
    },
    {
      type: 'list',
      items: [
        '<strong>Titelzone (Bovenste 15%):</strong> Hier bevinden zich de voortgangsindicatoren en de statusbalk. Als je voorhoofd of je ogen zich hier bevinden, snijdt de interface je hoofd visueel af.',
        '<strong>Actiezone (Knoppen):</strong> De iconen voor Like, Nope en Boost nemen de onderste zijkanten in beslag. Als je handen of stijlelementen zich daar bevinden, gaan ze volledig verloren.',
        '<strong>Het Leesbaarheidsgradiënt (Onderste 28%):</strong> Tinder past een zwarte fade toe zodat je naam en leeftijd leesbaar zijn. Als je gezicht in deze zone valt, overlapt de tekst je gelaatstrekken, wat de esthetiek van het profiel ruïneert.',
      ],
    },
    {
      type: 'title',
      text: 'Real-time Visie-analyse: Het Algoritme Begrijpen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Onze tool maakt gebruik van de <strong>nieuwste generatie Computer Vision-modellen</strong> om je afbeelding te controleren zoals de automatische moderators van Tinder dat zouden doen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Landmark detectie:</strong> We brengen 68 gezichtspunten in kaart om de symmetrie en de opening van de ogen te analyseren. Goed geopende en zichtbare ogen correleren met hogere niveaus van waargenomen extraversie.',
        '<strong>Gemoedstoestand evaluatie:</strong> Een lichte glimlach activeert spiegelneuronen bij degene die naar je kijkt. We detecteren de intensiteit van de gezichtsuitdrukking om er zeker van te zijn dat je niet te serieus of ongenaakbaar overkomt.',
        '<strong>Verlichtingskwaliteit:</strong> Het systeem evalueert het betrouwbaarheidsniveau van de detectie. Als de score laag is, heeft de foto visuele ruis of harde schaduwen die het algoritme van Tinder zou kunnen markeren als inhoud van lage kwaliteit.',
      ],
    },
    {
      type: 'title',
      text: 'Metadata en Geoptimaliseerde Export voor Tinder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wist je dat de bestandsgrootte van je afbeelding het algoritme beïnvloedt? Dating-apps geven voorrang aan inhoud die snel laadt om de gebruikersstroom niet te onderbreken.',
    },
    {
      type: 'list',
      items: [
        '<strong>Metadata verwijderen (Privacy en SEO):</strong> We verwijderen EXIF-gegevens. Een schone foto geeft je een nieuw canvas voor het algoritme van het platform.',
        '<strong>Intelligente compressie zonder verlies:</strong> We verminderen de grootte van het JPG-bestand terwijl we de native sRGB-kleurruimte van iOS en Android behouden. Je foto ziet er levendig uit, zelfs bij een slechte verbinding.',
        '<strong>Immersief 9:16 formaat:</strong> Door exact 1080x1920 pixels te leveren, voorkomen we dat Tinder zijn eigen agressieve compressie-algoritme toepast dat beeldartefacten genereert.',
      ],
    },
    {
      type: 'tip',
      title: 'Expertadvies',
      html: '<p>De eerste foto moet ALTIJD een duidelijk portret van de schouders omhoog zijn. Bewaar foto\'s van je volledige lichaam of van activiteiten voor de 3e of 4e positie. Zorg ervoor dat bij die eerste indruk je blik vrij is van obstakels en je gezicht de optimale grootte heeft (30-50%).</p>',
    },
    {
      type: 'title',
      text: 'Veiligheid en Ethiek bij Verwerking',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'We begrijpen dat je foto\'s privé zijn. Deze optimallisator maakt gebruik van <strong>Client-Side technologie</strong>: de afbeeldingen worden verwerkt door een canvas-engine in je lokale browser. Er gaan geen gegevens je apparaat uit. Het is de veiligste en snelste manier om je profiel te optimaliseren zonder je privacy in gevaar te brengen.',
    },
  ],
  ui: {
    uploadTitle: 'Foto Optimaliseren',
    uploadSubtitle: 'Sleep of klik om te beginnen',
    btnDownload: 'Geoptimaliseerde Foto Downloaden',
    btnRescan: 'Gezicht Opnieuw Scannen',
    btnAutoFocus: 'Auto-Framing',
    btnMarkFace: 'Gezicht Markeren',
    panelManual: 'Handmatige Aanpassingen',
    panelVisualization: 'Geavanceerde Visualisatie',
    panelMetrics: 'Compositie-analyse',
    panelExport: 'Exporteren voor Tinder 2026',
    panelExportDesc: 'Automatisch bijsnijden naar 1080x1920 met geoptimaliseerde metadata.',
    labelZoom: 'Zoom',
    labelBrightness: 'Helderheid',
    toggleGrid: 'Raster van Derden',
    toggleGridDesc: 'Aanpassing van klassieke compositie',
    toggleDeadzones: 'Gevarenzones',
    toggleDeadzonesDesc: 'Voorkomt dat de UI je gezicht verbergt',
    toggleFaceBox: 'Bekijk Gedetecteerd Gezicht',
    toggleFaceBoxDesc: 'Punten en detectiegebied',
    metricFaceSize: 'Gezichtsverhouding',
    metricEyeLine: 'Kijklijn',
    metricCoverage: 'Dekking',
    metricMood: 'Expressie',
    metricQuality: 'Vertrouwen',
    analysisSuccess: 'Succesfactoren',
    analysisWarning: 'Optimalisatie',
    analysisError: 'Kritieke Fouten',
    deadzoneTop: 'Bovenste UI-zone',
    deadzoneBottom: 'Informatiezone',
    loaderAnalyzing: 'Compositie analyseren...',
    loaderModels: 'Visiemodellen laden...',
    simulatorName: 'Je Naam, 25',
    simulatorJob: 'Je Beroep',
    simulatorCity: 'Woont in Nederland',
    simulatorDistance: '5 km bij jou vandaan',
    statusOptimal: 'OPTIMAAL',
    statusIncorrect: 'INCORRECT',
    statusHigh: 'HOOG',
    statusMedium: 'GEMIDDELD',
    statusLow: 'LAAG',
    statusPositive: 'POSITIEF',
    statusNeutral: 'NEUTRAAL',
    alertExcellent: 'Uitstekende technische compositie.',
    alertEmptySpaces: 'LEGE RUIMTES: De afbeelding vult niet het hele kader. Pas de zoom of positie aan.',
    alertAlmostInvisible: 'BIJNA ONZICHTBAAR: Je bent erg ver weg. Zoom in tot je gezicht minstens een derde van het scherm beslaat.',
    alertTooClose: 'TE DICHTBIJ: Extreme close-ups kunnen agressief overkomen.',
    alertPerfectSize: 'PERFECTE GROOTTE: Je gezicht heeft de ideale verhouding om vertrouwen uit te stralen.',
    alertImpactfulLook: 'IMPACTVOLLE BLIK: Je ogen bevinden zich op de lijn van maximale aandacht.',
    alertEyeLineMoveUp: 'OOGLIJN: Voor een professionele framing schuif je het gezicht iets omhoog naar de bovenste lijn.',
    alertEyeLineMoveDown: 'OOGLIJN: Voor een professionele framing schuif je het gezicht iets omlaag naar de bovenste lijn.',
    alertTiltedHead: 'GEKANTELD HOOFD: Een te schuine houding kan instabiliteit uitstralen.',
    alertSmileDetected: 'GLIMLACH GEDETECTEERD: Een glimlach verhoogt de match-rate aanzienlijk.',
    alertSevereExpression: 'SERIEUZE EXPRESSIE: Probeer een foto met een vriendelijkere uitstraling.',
    alertObstructedTop: 'GEBLOKKEERD: De voortgangsbalk bedekt je gezicht.',
    alertObstructedBottom: 'GEBLOKKEERD: Het informatieblok bedekt je gezicht.',
    alertLowLight: 'SLECHTE VERLICHTING: De AI heeft moeite om je te zien. Zoek een foto met beter licht.',
    alertCutOff: 'AFGESNEDEN: Het gezicht valt buiten het verticale kader.',
    alertProTip: 'PRO TIP: Als het een selfie is, gebruik dan Zoom (1.2x) om lensvervorming te voorkomen.',
    canvasFaceDetected: 'Gezicht gedetecteerd',
  },
};
