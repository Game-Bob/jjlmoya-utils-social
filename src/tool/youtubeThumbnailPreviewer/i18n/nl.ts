import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'youtube-thumbnail-preview';
const title = 'YouTube Thumbnail Previewer Online: Verbeter je CTR Gratis';
const description =
  'Upload je thumbnail en zie hoe deze eruitziet in de echte YouTube-feed op mobiel en desktop. Simulator voor donkere en lichte modus om klikken direct te optimaliseren.';

const faqData = [
  {
    question: 'Waarom is het belangrijk om YouTube-thumbnails te testen?',
    answer:
      'De meeste gebruikers bekijken YouTube op mobiele apparaten. Een thumbnail die er geweldig uitziet op je monitor, kan onleesbaar zijn op een klein scherm. Testen in een simulator zorgt ervoor dat de tekst helder is en het hoofdonderwerp op elk formaat opvalt.',
  },
  {
    question: 'Moet ik me registreren om deze Previewer te gebruiken?',
    answer:
      'Nee. Onze tool is 100% gratis en werkt direct in je browser. Je hoeft geen account aan te maken of je e-mailadres op te geven om je thumbnails te optimaliseren.',
  },
  {
    question: 'Worden mijn ontwerpen geüpload naar jullie server?',
    answer:
      'Absoluut niet. Privacy is onze hoogste prioriteit. Wanneer je een bestand selecteert, wordt dit lokaal in het geheugen van je browser geladen via een tijdelijke URL. Niemand behalve jij kan het ontwerp zien dat je aan het testen bent.',
  },
  {
    question: 'Hoe helpt deze tool mijn CTR te verbeteren?',
    answer:
      'De CTR (Click-Through Rate) is het percentage mensen dat klikt wanneer ze je thumbnail zien. Door de echte omgeving te simuleren (donkere vs. lichte achtergrond, mobiel vs. desktop), kun je contrast- en compositieproblemen oplossen voordat je publiceert, wat je klikken verhoogt.',
  },
  {
    question: 'Werkt het met de officiële donkere modus van YouTube?',
    answer:
      'Ja. We hebben een thema-selector (Licht en Donker) toegevoegd die exact de hex-kleuren nabootst die door de officiële YouTube-app in beide modi worden gebruikt.',
  },
];

const howToData = [
  {
    name: 'Upload je ontwerp',
    text: 'Klik op het uploadgebied of sleep je afbeeldingsbestand (PNG, JPG of WebP) rechtstreeks naar de tool.',
  },
  {
    name: 'Stel de context in',
    text: 'Typ je videotitel en kanaalnaam in, zodat de simulatie zo realistisch mogelijk is ten opzichte van de echte feed.',
  },
  {
    name: 'Wissel van apparaat',
    text: 'Schakel tussen de desktop- en mobiele weergave om de leesbaarheid op schermen van verschillende formaten te verifiëren.',
  },
  {
    name: 'Test het contrast',
    text: 'Activeer het donkere thema om te controleren of de kleuren goed uitkomen tegen de zwarte YouTube-achtergrond.',
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

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    {
      name: 'YouTube Help: Aangepaste videothumbnails maken',
      url: 'https://support.google.com/youtube/answer/141805',
    },
    {
      name: 'Nielsen Norman Group: Visual Processing and UX Design',
      url: 'https://www.nngroup.com/articles/visual-processing/',
    },
    {
      name: 'Derral Eves: The YouTube Formula (Thumbnail Strategy)',
      url: 'https://derraleves.com/the-youtube-formula/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'YouTube Thumbnail Previewer: Beheers de CTR van je Kanaal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In het YouTube-ecosysteem is de thumbnail de toegangspoort tot je content. Je kunt de beste video ter wereld hebben — montage op Hollywood-niveau, een script dat een Oscar waard is — maar als niemand klikt, blijft je werk onzichtbaar voor het algoritme. Dit is waar <strong>CTR (Click-Through Rate)</strong> een rol speelt, en de thumbnail is de bepalende factor.',
    },
    {
      type: 'title',
      text: 'Waarom je Thumbnails moet Testen voor het Uploaden',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Echte Preview:</strong> Zie je thumbnail exact zoals deze verschijnt in de YouTube-feed.',
        '<strong>Donkere en Lichte Modus:</strong> Zorg ervoor dat kleuren opvallen bij elke gebruikersinstelling.',
        '<strong>Apparaatsimulator:</strong> Controleer de leesbaarheid van tekst op zowel monitors als kleine mobiele schermen.',
        '<strong>CTR-optimalisatie:</strong> Vergelijk je ontwerp met de eigen interface om klikken te maximaliseren.',
        '<strong>Geen Registratie Vereist:</strong> Upload je afbeelding en test direct zonder een account aan te maken.',
        '<strong>Privacy Gegarandeerd:</strong> Je ontwerpen worden lokaal verwerkt en nooit naar servers geüpload.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Veel makers maken de fout om thumbnails te ontwerpen op grote monitors en ze op volledig scherm te bekijken in hun favoriete editors. Het probleem is dat de eindgebruiker ze zelden zo ziet. De meesten consumeren content op een mobiel apparaat tijdens het oneindig scrollen, of in een hoek van de monitor in de donkere modus. Onze <strong>YouTube Thumbnail Previewer</strong> laat je die "ontwerpersillusie" doorbreken en de rauwe realiteit van de feed zien.',
    },
    {
      type: 'title',
      text: 'Technische Metrieken en Prestaties',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0,2s', body: 'Responstijd' },
        { title: '4K', body: 'Maximale Resolutie' },
        { title: '100%', body: 'Lokale Privacy' },
        { title: 'HD', body: 'Eigen Kwaliteit' },
      ],
    },
    {
      type: 'title',
      text: 'De Psychologie van de Klik: Waarom Thumbnails Falen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het menselijk brein verwerkt beelden duizenden keren sneller dan tekst. Toch is de concurrentie op YouTube moordend. Je thumbnail moet niet alleen "mooi" zijn — hij moet <strong>leesbaar</strong> zijn en <strong>contrast</strong> hebben.',
    },
    {
      type: 'paragraph',
      html: 'Een veelgemaakte fout is het gebruik van kleuren die opgaan in de YouTube-achtergrond. Als je donkergrijze tinten gebruikt en je kijker staat in de donkere modus, verdwijnt je video simpelweg uit hun perifere zicht. Met deze tester kun je tussen thema’s schakelen en ervoor zorgen dat je ontwerp in elk scenario "popt" (opvalt).',
    },
    {
      type: 'title',
      text: 'Directe Vergelijking: Ontwerp vs. Realiteit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Is het de moeite waard om 30 seconden te besteden aan het testen van de thumbnail? Het antwoord is een volmondig JA. Een geoptimaliseerde thumbnail kan je weergaven in de eerste 24 uur verdubbelen, wat de YouTube-AI vertelt dat je content een "hook" heeft.',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Ontwerpen in Photoshop / Canva',
          body: 'Vals gevoel van werkelijke grootte · Negeert contrast met de app-achtergrond · Tekst lijkt leesbaar maar is dat misschien niet · Je mist UI-elementen (duur-badge, avatars)',
        },
        {
          title: 'YouTube Thumbnail Previewer',
          body: 'Echte weergave in de Home-feed · Contrast geverifieerd in donkere vs. lichte modus · Tekstleesbaarheid gegarandeerd op mobiel · Simulatie van titel en kanaalnaam',
        },
      ],
    },
    {
      type: 'title',
      text: 'Checklist voor een Thumbnail met een CTR boven de 10%',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Voordat je je definitieve ontwerp exporteert, moet je deze checklist doornemen met onze professionele simulator:',
    },
    {
      type: 'list',
      items: [
        'Is de tekst leesbaar op een klein mobiel scherm?',
        'Is er voldoende contrast tussen de achtergrond en het hoofdonderwerp?',
        'Ziet de thumbnail er goed uit tegen de zwarte achtergrond van de donkere modus?',
        'Dekt de videotitel vitale informatie in de afbeelding af?',
        'Verbergt de duur-badge (het zwarte vakje) iets belangrijks?',
        'Draagt het gezicht of hoofdobject de gewenste emotie uit op verkleind formaat?',
      ],
    },
    {
      type: 'title',
      text: 'Anatomie van een High-Impact Thumbnail',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gebaseerd op analyses van de grootste kanalen ter wereld, volgt een winnende thumbnail meestal dit structurele patroon:',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Hoofdonderwerp',
          body: 'Primaire focus · Gebruik scherpe uitsneden met een lichte rand of extra verzadiging.',
        },
        {
          title: 'Tekst (Max 3 woorden)',
          body: 'Directe context · Gebruik vette Sans Serif lettertypen en complementaire kleuren.',
        },
        {
          title: 'Vervaagde Achtergrond',
          body: 'Vlakverdeling · Voegt diepte toe zodat het hoofdonderwerp van het scherm "springt".',
        },
        {
          title: 'Ruimte voor Duur',
          body: 'Fouten vermijden · Plaats geen gezichten of tekst in de rechteronderhoek.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'De Dode Zone Truc',
      html: '<p>YouTube plaatst altijd een zwart vakje met de videoduur in de rechteronderhoek van de thumbnail. Duizenden makers plaatsen vitale elementen in die zone, om er vervolgens achter te komen dat de app ze bedekt. Onze tool simuleert dit vakje, zodat je nooit je beste shot bedekt.</p>',
    },
    {
      type: 'title',
      text: 'Voordelen en Beperkingen van de Tool',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Ultrasnelle en reactieve interface',
          body: 'Beperking: Staat geen beeldbewerking toe (gebruik Canva/PS)',
        },
        {
          title: 'Exacte App en Web mockups',
          body: 'Beperking: Simuleert geen Pre-roll advertenties',
        },
        {
          title: 'Gratis en zonder irritante reclames',
          body: 'Beperking: Ondersteunt alleen lokale bestanden',
        },
      ],
    },
    {
      type: 'title',
      text: 'Gebruik van de "Split" Modus (Directe Vergelijking)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dit is de sterfunctie. Door de Split-modus te activeren, zie je je thumbnail tegelijkertijd door de bril van de lichte en donkere modus. Het is de ultieme manier om te controleren of je kleurenpalet universeel is of dat er aanpassingen in helderheid en contrast nodig zijn.',
    },
    {
      type: 'title',
      text: 'Privacy: Je Ontwerpen worden Niet Geüpload naar de Cloud',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'We weten dat je thumbnails deel uitmaken van je geheime strategie voor een lancering. Daarom hebben we deze utility zo ontworpen dat deze uitsluitend in je browserengine werkt. <strong>Niets wordt naar het internet geüpload</strong>. Het bestand dat je selecteert, wordt geladen via een lokale tijdelijke URL die verdwijnt wanneer je het tabblad sluit. Je intellectuele eigendom is 100% onder jouw controle.',
    },
    {
      type: 'title',
      text: 'Conclusie: De Perfecte Pixel Gegarandeerd',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stop met gissen en begin met valideren. De <strong>YouTube Thumbnail Previewer</strong> van JJLMoya is de gratis tool die amateur-makers onderscheidt van professionele contentcreators. Een kleine aanpassing in lettergrootte of positie van het onderwerp kan het verschil zijn tussen een video die onopgemerkt blijft en een viraal succes.',
    },
    {
      type: 'paragraph',
      html: 'Begin nu met het optimaliseren van je kanaal en geef je video’s de click-through rate die ze verdienen!',
    },
  ],
  ui: {
    dropFeedTitle: 'Sleep je Thumbnail hierheen',
    dropFeedSub: 'PNG, JPG of WebP · Meerdere afbeeldingen',
    dropAvatarTitle: 'Sleep je Avatar hierheen',
    dropAvatarSub: 'Kanaalprofielafbeelding',
    labelTitle: 'Videotitel',
    labelChannel: 'Kanaalnaam',
    defaultTitle: 'Je Videotitel Hier',
    defaultChannel: 'Kanaalnaam',
    btnDesktop: 'Desktop',
    btnMobile: 'Mobiel',
    btnClear: 'Wissen',
    labelLight: 'Licht',
    labelDark: 'Donker',
    views0: '1,2 mln. weergaven · 1 uur geleden',
    views1: '45 minuten geleden',
    views2: '250.000 weergaven · 1 dag geleden',
    views3: '3,1 mln. weergaven · 1 week geleden',
  },
};
