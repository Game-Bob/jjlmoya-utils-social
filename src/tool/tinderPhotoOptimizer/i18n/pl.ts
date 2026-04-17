import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'optymalizator-zdjec-tinder';
const title = 'Optymalizator Zdjęć na Tindera: Analiza Twarzy i Kompozycji';
const description =
  'Zoptymalizuj swoje zdjęcia na Tindera dzięki algorytmicznej analizie twarzy. Symuluj interfejs Tindera 2026, analizuj naukowe kadrowanie i linię oczu, eksportuj idealne portrety 9:16, aby zmaksymalizować liczbę matchy.';

const faqData = [
  {
    question: 'W jaki sposób to narzędzie zwiększa liczbę moich matchy na Tinderze?',
    answer:
      'Narzędzie analizuje kluczowe czynniki techniczne: stosunek wielkości twarzy (idealnie 30-50%), pozycję linii oczu względem górnej jednej trzeciej, pokrycie kadru oraz martwe strefy interfejsu Tindera. Dostosowując te parametry, Twoje zdjęcie budzi większe zaufanie i pokonuje wizualne filtry algorytmu.',
  },
  {
    question: 'Czy przesyłanie tutaj moich zdjęć jest bezpieczne?',
    answer:
      'Całkowicie bezpieczne. Całe przetwarzanie odbywa się w Twojej przeglądarce za pomocą Canvas API. Twoje zdjęcia nigdy nie są wysyłane na żaden serwer ani nigdzie przechowywane.',
  },
  {
    question: 'Co dokładnie robi detekcja twarzy przez AI?',
    answer:
      'Wykorzystuje face-api.js do wykrywania 68 punktów charakterystycznych twarzy, analizy ekspresji (uśmiech, poważna mina), oceny pozycji oczu i pomiaru nachylenia głowy. Cała analiza odbywa się lokalnie na Twoim urządzeniu.',
  },
  {
    question: 'Dlaczego zalecacie przybliżenie 1,2x?',
    answer:
      'Przednie kamery smartfonów wykorzystują optykę szerokokątną (24mm), która zniekształca twarz (efekt beczki). Przybliżenie 1,2x symuluje ogniskową 50-85mm, eliminując zniekształcenia i zapewniając bardziej naturalne i atrakcyjne proporcje twarzy.',
  },
];

const howToData = [
  {
    name: 'Prześlij zdjęcie',
    text: 'Przeciągnij lub kliknij w symulator Tindera, aby załadować swój obraz.',
  },
  {
    name: 'Analizuj kompozycję',
    text: 'AI automatycznie wykrywa Twoją twarz i pokazuje metryki dotyczące wielkości twarzy, linii oczu, pokrycia i ekspresji.',
  },
  {
    name: 'Precyzyjnie dostosuj',
    text: 'Użyj kontrolek zoomu i jasności, włącz auto-kadrowanie lub ręcznie przeciągnij obraz wewnątrz symulatora.',
  },
  {
    name: 'Zoptymalizowane pobieranie',
    text: 'Eksportuj swoje zdjęcie w natywnym formacie 1080x1920 zoptymalizowanym dla Tindera, z czystymi metadanymi.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła',
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
      text: 'Optymalizator Zdjęć na Tindera: Ostateczny Przewodnik Naukowy i Techniczny (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W ekosystemie cyfrowych randek Twój profil na Tinderze jest przetwarzany przez dwa algorytmy jednocześnie: zaawansowany algorytm wizyjny samej platformy oraz ludzki mózg użytkownika, który przesuwa palcem. Nasze narzędzie integruje zasady <strong>psychologii ewolucyjnej</strong>, <strong>biometrii twarzy</strong> oraz <strong>cyfrowego przetwarzania sygnałów</strong>, aby zagwarantować, że Twój obraz projektuje maksymalną wartość społeczną i atrakcyjność techniczną.',
    },
    {
      type: 'title',
      text: 'Psychologia Pierwszego Wrażenia: Efekt 1,2 Sekundy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Badania neuronaukowe wskazują, że ludzki mózg potrzebuje około 1/10 sekundy, aby sformułować wstępne wrażenie na temat zaufania, jakie ktoś wzbudza. Na Tinderze masz nieco ponad sekundę przed następnym swipe\'em. Nasze narzędzie analizuje czynniki, które przyspieszają podejmowanie pozytywnych decyzji:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kontakt Wzrokowy i Linia Spojrzenia:</strong> Bezpośrednie spojrzenie aktywuje regiony mózgu związane z nagrodą społeczną. Ustawienie oczu w górnej jednej trzeciej maksymalizuje prawdopodobieństwo, że użytkownik zatrzyma się na Twoim spojrzeniu przed przeczytaniem Twojego imienia.',
        '<strong>Asymetria i Postawa:</strong> Lekkie nachylenie może złagodzić agresywne cechy, ale nadmierne nachylenie przekazuje niestabilność. Nasz algorytm mierzy dokładny kąt, aby utrzymać Cię w zakresie budzącym zaufanie.',
        '<strong>Kontrast Postać-Tło:</strong> System premiuje zdjęcia, na których fotografowana osoba jest wyraźnie oddzielona od tła. Dobrze zdefiniowany profil techniczny pomaga silnikowi renderującemu wyróżnić Twoją twarz na tle konkurencji.',
      ],
    },
    {
      type: 'title',
      text: 'Techniczna Analiza Soczewki: Problem Szerokiego Kąta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Prawie wszystkie zdjęcia profilowe są robione smartfonami, których przednie aparaty są szerokokątne. Najczęstszym błędem jest podchodzenie zbyt blisko urządzenia.',
    },
    {
      type: 'paragraph',
      html: '<strong>Aberracja Beczkowa:</strong> W odległości mniejszej niż metr, obiektyw 24mm (standard w telefonach) rozszerza środek obrazu. Sprawia to, że nosy wydają się większe, a twarz bardziej okrągła niż w rzeczywistości. Nasza rekomendacja <strong>Zoomu 1,2x</strong> ma charakter korygujący: stosując lekkie cyfrowe kadrowanie, symulujesz ogniskową od 50mm do 85mm, czyli "złotą ogniskową", której fotografowie mody używają do wyszczuplenia twarzy i zachowania rzeczywistych proporcji.',
    },
    {
      type: 'title',
      text: 'Interfejs Tindera: Nauka o Martwych Strefach',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wiele doskonałych zdjęć zawodzi, ponieważ ignorują one warstwę oprogramowania (UI), którą Tinder nakłada na zdjęcie. Przeciętny użytkownik nie widzi Twojego czystego zdjęcia; widzi amalgamat przycisków, gradientów i tekstu.',
    },
    {
      type: 'list',
      items: [
        '<strong>Strefa Tytułów (Górne 15%):</strong> Tutaj znajdują się wskaźniki postępu i pasek stanu. Jeśli Twoje czoło lub oczy znajdują się tutaj, interfejs wizualnie odcina Twoją głowę.',
        '<strong>Strefa Akcji (Przyciski):</strong> Ikony Like, Nope i Boost zajmują dolne boki. Jeśli Twoje ręce lub elementy stylu się tam znajdują, zostaną całkowicie utracone.',
        '<strong>Gradient Czytelności (Dolne 28%):</strong> Tinder stosuje czarny gradient, aby Twoje imię i wiek były czytelne. Jeśli Twoja twarz wpadnie w tę strefę, tekst nałoży się na Twoje rysy, psując estetykę profilu.',
      ],
    },
    {
      type: 'title',
      text: 'Analiza Wizyjna w Czasie Rzeczywistym: Rozszyfrowanie Algorytmu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nasze narzędzie wykorzystuje modele <strong>Computer Vision najnowszej generacji</strong> do audytu Twojego obrazu tak, jak zrobiliby to automatyczni moderatorzy Tindera:',
    },
    {
      type: 'list',
      items: [
        '<strong>Landmark Detection:</strong> Mapujemy 68 punktów twarzy, aby analizować symetrię i otwarcie oczu. Dobrze otwarte i widoczne oczy korelują z wyższym poziomem postrzeganej ekstrawersji.',
        '<strong>Mood Evaluation:</strong> Lekki uśmiech aktywuje neurony lustrzane u osoby, która na Ciebie patrzy. Wykrywamy intensywność ekspresji twarzy, aby upewnić się, że nie wydajesz się zbyt poważny lub nieprzystępny.',
        '<strong>Jakość Oświetlenia:</strong> System ocenia pewność detekcji. Jeśli wynik jest niski, zdjęcie ma szumy wizualne lub twarde cienie, które algorytm Tindera mógłby oznaczyć jako treść niskiej jakości.',
      ],
    },
    {
      type: 'title',
      text: 'Metadane i Eksport Zoptymalizowany dla Tindera',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Czy wiesz, że waga Twojego obrazu wpływa na algorytm? Aplikacje randkowe priorytetowo traktują treści, które ładują się szybko, aby nie przerywać przepływu użytkownika.',
    },
    {
      type: 'list',
      items: [
        '<strong>Metadata Stripping (Prywatność i SEO):</strong> Usuwamy rekordy EXIF. Czyste zdjęcie daje Ci "nowe płótno" dla algorytmu platformy.',
        '<strong>Inteligentna Kompresja Bezstratna:</strong> Zmniejszamy wagę pliku JPG zachowując natywną przestrzeń barw sRGB systemów iOS i Android. Twoje zdjęcie będzie wyglądać wibrująco nawet przy słabym zasięgu.',
        '<strong>Immersyjny Format 9:16:</strong> Dostarczając dokładnie 1080x1920 pikseli, zapobiegamy stosowaniu przez Tindera własnego agresywnego algorytmu kompresji, który generuje artefakty obrazu.',
      ],
    },
    {
      type: 'tip',
      title: 'Rada Eksperta',
      html: '<p>Pierwsze zdjęcie powinno ZAWSZE być wyraźnym portretem od ramion w górę. Zdjęcia całej sylwetki lub z jakichś aktywności zachowaj na 3. lub 4. pozycję. Upewnij się, że w tym pierwszym wrażeniu Twoje spojrzenie jest wolne od przeszkód, a Twoja twarz ma optymalną wielkość (30-50%).</p>',
    },
    {
      type: 'title',
      text: 'Bezpieczeństwo i Etyka Przetwarzania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rozumiemy, że Twoje zdjęcia są prywatne. Ten optymalizator wykorzystuje <strong>technologię Client-Side</strong>: obrazy są przetwarzane przez silnik canvas w Twojej lokalnej przeglądarce. Żadne dane nie opuszczają Twojego urządzenia. To najbezpieczniejszy i najszybszy sposób na optymalizację profilu bez narażania Twojej prywatności.',
    },
  ],
  ui: {
    uploadTitle: 'Optymalizuj Zdjęcie',
    uploadSubtitle: 'Przeciągnij lub kliknij, aby zacząć',
    btnDownload: 'Pobierz Zoptymalizowane Zdjęcie',
    btnRescan: 'Ponownie Skanuj Twarz',
    btnAutoFocus: 'Auto-Kadrowanie',
    btnMarkFace: 'Zaznacz Twarz',
    panelManual: 'Regulacje Ręczne',
    panelVisualization: 'Zaawansowana Wizualizacja',
    panelMetrics: 'Analityka Kompozycji',
    panelExport: 'Eksport na Tindera 2026',
    panelExportDesc: 'Automatyczne przycięcie do 1080x1920 ze zoptymalizowanymi metadanymi.',
    labelZoom: 'Zoom',
    labelBrightness: 'Jasność',
    toggleGrid: 'Siatka Trójpodziału',
    toggleGridDesc: 'Regulacja klasycznej kompozycji',
    toggleDeadzones: 'Strefy Zagrożenia',
    toggleDeadzonesDesc: 'Zapobiega ukrywaniu twarzy przez UI',
    toggleFaceBox: 'Zobacz Wykrytą Twarz',
    toggleFaceBoxDesc: 'Punkty i obszar detekcji',
    metricFaceSize: 'Wielkość Twarzy',
    metricEyeLine: 'Linia Spojrzenia',
    metricCoverage: 'Pokrycie',
    metricMood: 'Ekspresja',
    metricQuality: 'Pewność',
    analysisSuccess: 'Czynniki Sukcesu',
    analysisWarning: 'Optymalizacja',
    analysisError: 'Błędy Krytyczne',
    deadzoneTop: 'Górna Strefa UI',
    deadzoneBottom: 'Strefa Informacji',
    loaderAnalyzing: 'Analizowanie kompozycji...',
    loaderModels: 'Ładowanie modeli wizyjnych...',
    simulatorName: 'Twoje Imię, 25',
    simulatorJob: 'Twój Zawód',
    simulatorCity: 'Mieszka w Polsce',
    simulatorDistance: '5 km od Ciebie',
    statusOptimal: 'OPTYMALNA',
    statusIncorrect: 'NIEPRAWIDŁOWA',
    statusHigh: 'WYSOKA',
    statusMedium: 'ŚREDNIA',
    statusLow: 'NISKA',
    statusPositive: 'POZYTYWNY',
    statusNeutral: 'NEUTRALNY',
    alertExcellent: 'Doskonała kompozycja techniczna.',
    alertEmptySpaces: 'PUSTE MIEJSCA: Obraz nie pokrywa całego kadru. Dostosuj zoom lub pozycję.',
    alertAlmostInvisible: 'PRAWIE NIEWIDOCZNY: Jesteś bardzo daleko. Przybliż, aż Twoja twarz zajmie co najmniej jedną trzecią ekranu.',
    alertTooClose: 'ZA BLISKO: Ekstremalne zbliżenia mogą wydać się agresywne.',
    alertPerfectSize: 'IDEALNA WIELKOŚĆ: Twoja twarz ma idealny stosunek do projektowania zaufania.',
    alertImpactfulLook: 'MOCNE SPOJRZENIE: Twoje oczy są na linii maksymalnej uwagi.',
    alertEyeLineMoveUp: 'LINIA OCZU: Dla profesjonalnego kadrowania, podnieś nieco twarz do górnej linii.',
    alertEyeLineMoveDown: 'LINIA OCZU: Dla profesjonalnego kadrowania, opuść nieco twarz do górnej linii.',
    alertTiltedHead: 'POCHYLONA GŁOWA: Zbyt krzywa postawa może przekazywać niestabilność.',
    alertSmileDetected: 'WYKRYTO UŚMIECH: Uśmiech znacząco podnosi wskaźnik matchy.',
    alertSevereExpression: 'POWAŻNA MINA: Spróbuj użyć zdjęcia z bardziej uprzejmym gestem.',
    alertObstructedTop: 'ZASŁONIĘTY: Pasek postępu zasłania Twoją twarz.',
    alertObstructedBottom: 'ZASŁONIĘTY: Blok informacji zasłania Twoją twarz.',
    alertLowLight: 'SŁABE OŚWIETLENIE: AI ma trudności z Twoją twarzą. Poszukaj zdjęcia z lepszym światłem.',
    alertCutOff: 'UCIĘTY: Twarz wychodzi poza pionowy kadr.',
    alertProTip: 'PORADA PRO: Jeśli to selfie, użyj Zoomu (1,2x), aby uniknąć zniekształceń soczewki.',
    canvasFaceDetected: 'Wykryto twarz',
  },
};
