import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailPreviewerUI } from '../ui';

const slug = 'forhandsvisning-youtube-miniatyrer';
const title = 'Förhandsvisning av YouTube miniatyrer online: Förbättra din CTR gratis';
const description =
  'Ladda upp din miniatyrbild och se hur den ser ut i det riktiga YouTube-flödet på mobil och desktop. Simulator för mörkt och ljust läge för att optimera klick omedelbart.';

const faqData = [
  {
    question: 'Varför är det viktigt att testa YouTube-miniatyrer?',
    answer:
      'De flesta användare tittar på YouTube på mobila enheter. En miniatyrbild som ser bra ut på din skärm kan vara oläslig på en liten mobilskärm. Genom att testa den i en simulator säkerställer du att texten är tydlig och att huvudmotivet sticker ut i alla storlekar.',
  },
  {
    question: 'Måste jag registrera mig för att använda denna Previewer?',
    answer:
      'Nej. Vårt verktyg är 100 % gratis och fungerar direkt i din webbläsare. Du behöver inte skapa något konto eller lämna din e-postadress för att optimera dina miniatyrer.',
  },
  {
    question: 'Laddas mina designer upp till er server?',
    answer:
      'Absolut inte. Integritet är vår högsta prioritet. När du väljer en fil laddas den lokalt i din webbläsares minne via en tillfällig URL. Ingen utom du kan se den design du testar.',
  },
  {
    question: 'Hur hjälper det här verktyget till att förbättra min CTR?',
    answer:
      'CTR (Click-Through Rate) är den procentandel av personer som klickar när de ser miniatyrbilden. Genom att simulera den verkliga miljön (mörk vs ljus bakgrund, mobil vs desktop) kan du åtgärda kontrast- och kompositionsproblem innan du publicerar, vilket ökar dina klick.',
  },
  {
    question: 'Fungerar det med YouTubes officiella mörka läge?',
    answer:
      'Ja. Vi har inkluderat en temaväljare (Ljus och Mörk) som exakt efterliknar de hex-färger som används av den officiella YouTube-appen i båda lägena.',
  },
];

const howToData = [
  {
    name: 'Ladda upp din design',
    text: 'Klicka på uppladdningsområdet eller dra din bildfil (PNG, JPG eller WebP) direkt till verktyget.',
  },
  {
    name: 'Ställ in kontext',
    text: 'Skriv in din videotitel och ditt kanalnamn så att simuleringen blir så realistisk som möjligt jämfört med det riktiga flödet.',
  },
  {
    name: 'Byt enhet',
    text: "Växla mellan 'Desktop'- och 'Mobil'-vy för att kontrollera läsbarheten på skärmar av olika storlekar.",
  },
  {
    name: 'Testa kontrasten',
    text: "Aktivera det mörka temat för att se om färgerna sticker ut korrekt mot YouTubes svarta bakgrund.",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<YoutubeThumbnailPreviewerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    {
      name: 'YouTube-hjälp: Skapa anpassade videominiatyrer',
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
      text: 'YouTube Thumbnail Previewer: Bemästra din kanals CTR',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I YouTubes ekosystem är miniatyrbilden (eller thumbnailen) ingången till ditt innehåll. Du kan ha världens bästa video — med redigering i Hollywood-klass och ett manus värdigt en Oscar — men om ingen klickar kommer ditt arbete att vara osynligt för algoritmen. Det är här <strong>CTR (Click-Through Rate)</strong> kommer in, och miniatyrbilden är den avgörande faktorn.',
    },
    {
      type: 'title',
      text: 'Varför du behöver testa miniatyrer innan du laddar upp dem',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Riktig förhandsvisning:</strong> Se din miniatyrbild exakt så som den kommer att se ut i YouTube-flödet.',
        '<strong>Mörkt och ljust läge:</strong> Säkerställ att färgerna sticker ut oavsett användarens inställning.',
        '<strong>Enhetssimulator:</strong> Kontrollera textens läsbarhet på både monitorer och små mobilskärmar.',
        '<strong>CTR-optimering:</strong> Jämför din design med det naturliga gränssnittet för att maximera klick.',
        '<strong>Ingen registrering krävs:</strong> Ladda upp din bild och testa den direkt utan att skapa konto.',
        '<strong>Garanterad integritet:</strong> Dina designer bearbetas lokalt och laddas aldrig upp till servrar.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Många kreatörer gör misstaget att designa miniatyrer på stora monitorer och se dem i helskärm i sina favoritredigerare. Problemet är att slutanvändaren sällan ser dem på det sättet. De flesta konsumerar innehåll på en mobil enhet medan de skrollar oändligt, eller i ett hörn av monitorn i mörkt läge. Vår <strong>YouTube Thumbnail Previewer</strong> låter dig bryta den "designillusionen" och se flödets krassa verklighet.',
    },
    {
      type: 'title',
      text: 'Tekniska mätvärden och prestanda',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: '0,2 s', body: 'Responstid' },
        { title: '4K', body: 'Maximal upplösning' },
        { title: '100%', body: 'Lokal integritet' },
        { title: 'HD', body: 'Naturlig kvalitet' },
      ],
    },
    {
      type: 'title',
      text: 'Klickets psykologi: Varför miniatyrer misslyckas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den mänskliga hjärnan bearbetar bilder tusentals gånger snabbare än text. Men på YouTube är konkurrensen brutal. Din miniatyrbild får inte bara vara "snygg" — den måste vara <strong>läsbar</strong> och ha <strong>kontrast</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Ett vanligt misstag är att använda färger som smälter in i YouTubes bakgrund. Om du använder mörkgråa toner och din tittare har mörkt läge, kommer din video helt enkelt att försvinna ur deras perifera seende. Med det här testverktyget kan du växla mellan teman och se till att din design "poppar" (sticker ut) i alla scenarier.',
    },
    {
      type: 'title',
      text: 'Direkt jämförelse: Design vs Verklighet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Är det värt att lägga 30 sekunder på att testa miniatyrbilden? Svaret är ett rungande JA. En optimerad miniatyrbild kan fördubbla dina visningar under de första 24 timmarna, vilket signalerar till YouTubes AI att ditt innehåll har en "krok".',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Design i Photoshop / Canva',
          body: 'Falsk känsla av verklig storlek · Ignorerar kontrast mot app-bakgrunden · Text ser läsbar ut men är det kanske inte · Du missar UI-element (tidsmarkeringar, avatarer)',
        },
        {
          title: 'YouTube Thumbnail Previewer',
          body: 'Riktig vy i hemflödet · Kontrast verifierad i mörkt vs ljust läge · Garanterad textläsbarhet på mobilen · Simulering av titlar och kanalnamn',
        },
      ],
    },
    {
      type: 'title',
      text: 'Checklista för en miniatyr med CTR över 10 %',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Innan du exporterar din slutgiltiga design, se till att gå igenom denna lista i vår professionella simulator:',
    },
    {
      type: 'list',
      items: [
        'Är texten läsbar på en liten mobilskärm?',
        'Finns det tillräckligt med kontrast mellan bakgrunden och huvudmotivet?',
        'Ser miniatyrbilden bra ut mot den svarta bakgrunden i mörkt läge?',
        'Täcker videotiteln viktig information i bilden?',
        'Döljer tidstämpeln (den svarta rutan) något viktigt?',
        'Förmedlar ansiktet eller huvudobjektet den önskade känslan i minskad storlek?',
      ],
    },
    {
      type: 'title',
      text: 'Anatomi av en miniatyrbild med hög effekt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Baserat på analyser av världens största kanaler följer en vinnande miniatyrbild vanligtvis detta strukturella mönster:',
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Huvudmotiv',
          body: 'Primärt fokus · Använd skarpa utskärningar med en lätt kant eller extra mättnad.',
        },
        {
          title: 'Text (Max 3 ord)',
          body: 'Omedelbar kontext · Använd feta Sans Serif-typsnitt och komplementfärger.',
        },
        {
          title: 'Suddig bakgrund',
          body: 'Planseparation · Ger djup så att huvudmotivet "hoppar ut" från skärmen.',
        },
        {
          title: 'Utrymme för tidstämpel',
          body: 'Undvik misstag · Placera inte ansikten eller text i det nedre högra hörnet.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Tricket med "döda zonen"',
      html: '<p>YouTube placerar alltid en svart ruta med videons längd i det nedre högra hörnet av miniatyrbilden. Tusentals kreatörer placerar viktiga element i den zonen, bara för att upptäcka att appen täcker dem. Vårt verktyg simulerar denna ruta så att du aldrig täcker din bästa bild.</p>',
    },
    {
      type: 'title',
      text: 'Verktygets fördelar och begränsningar',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Ultrasnabbt och responsivt gränssnitt',
          body: 'Begränsning: Tillåter inte bildredigering (använd Canva/PS)',
        },
        {
          title: 'Exakta app och web mockups',
          body: 'Begränsning: Simulerar inte pre-roll-annonser',
        },
        {
          title: 'Gratis och utan störande reklam',
          body: 'Begränsning: Stöder endast lokala filer',
        },
      ],
    },
    {
      type: 'title',
      text: 'Användning av "Split"-läget (direkt jämförelse)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Detta är stjärnfunktionen. Genom att aktivera Split-läget ser du din miniatyrbild genom både ljust och mörkt läge samtidigt. Det är det definitiva sättet att kontrollera om din färgpalett fungerar universellt eller om den behöver justeras vad gäller ljusstyrka och kontrast.',
    },
    {
      type: 'title',
      text: 'Integritet: Dina designer laddas inte upp till molnet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vi vet att dina miniatyrer är en del av din hemliga strategi före en lansering. Därför har vi designat det här verktyget så att det enbart arbetar i din webbläsare. <strong>Ingenting laddas upp till internet</strong>. Filen du väljer laddas via en lokal tillfällig URL som försvinner när du stänger fliken. Din immateriella egendom är 100 % under din kontroll.',
    },
    {
      type: 'title',
      text: 'Slutsats: Garanterat perfekt i varje pixel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sluta gissa och börja validera. JJLMoyas <strong>YouTube Thumbnail Previewer</strong> är det kostnadsfria verktyget som skiljer amatörkreatörer från proffsen. En liten justering av typsnittsstorlek eller motivets position kan vara skillnaden mellan en video som går obemärkt förbi och en viral succé.',
    },
    {
      type: 'paragraph',
      html: 'Börja optimera din kanal nu och ge dina videor den klickfrekvens de förtjänar!',
    },
  ],
  ui: {
    dropFeedTitle: 'Dra din miniatyrbild hit',
    dropFeedSub: 'PNG, JPG eller WebP · Flera bilder',
    dropAvatarTitle: 'Dra din avatar hit',
    dropAvatarSub: 'Kanalens profilbild',
    labelTitle: 'Videotitel',
    labelChannel: 'Kanalnamn',
    defaultTitle: 'Din videotitel här',
    defaultChannel: 'Kanalnamn',
    btnDesktop: 'Desktop',
    btnMobile: 'Mobil',
    btnClear: 'Rensa',
    labelLight: 'Ljust',
    labelDark: 'Mörkt',
    views0: '1,2 mn visningar · för 1 timme sedan',
    views1: 'för 45 minuter sedan',
    views2: '250 000 visningar · för 1 dag sedan',
    views3: '3,1 mn visningar · för 1 vecka sedan',
  },
};
