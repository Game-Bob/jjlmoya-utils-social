import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'pobieranie-miniaturek-youtube-hd';
const title = 'Pobieranie Miniaturek z YouTube (HD)';
const description =
  'Wyodrębnij i pobierz oryginalną miniaturę z dowolnego filmu na YouTube w maksymalnej rozdzielczości i bez znaków wodnych, używając tylko adresu URL.';

const faqData = [
  {
    question: 'W jakiej rozdzielczości wyodrębniane są miniaturki?',
    answer:
      "Narzędzie zawsze próbuje uzyskać obraz w rozdzielczości 'MaxRes' (1280x720 lub 1920x1080), co jest oryginalną jakością przesłaną przez twórcę filmu. Jeśli autor nie przesłał miniaturki w jakości HD, automatycznie wyświetlona zostanie kolejna najwyższa dostępna rozdzielczość.",
  },
  {
    question: 'Jakie typy linków są obsługiwane?',
    answer:
      'Obsługuje tradycyjne adresy URL youtube.com/watch, krótkie linki youtu.be, linki mobilne, a nawet adresy URL YouTube Shorts w sposób przejrzysty.',
  },
  {
    question: 'Czy pobieranie miniaturek z YouTube jest legalne?',
    answer:
      'Tak, pobieranie jest w pełni legalne do użytku osobistego, projektowania, parodii i inspiracji (Fair Use). Zachowaj ostrożność, jeśli zamierzasz używać miniaturek chronionych prawem autorskim do celów czysto komercyjnych; w takich przypadkach ważne jest sprawdzenie licencji filmu.',
  },
  {
    question: 'Czy istnieje dzienny limit użycia?',
    answer:
      'Nie ma limitów miesięcznych ani dziennych. Ponieważ to oprogramowanie działa po stronie klienta, rozwiązując wzorzec adresu URL wewnętrznie w przeglądarce, nie wchodzimy w interakcję z tradycyjnymi restrykcyjnymi interfejsami API.',
  },
];

const howToData = [
  {
    name: 'Skopiuj adres URL filmu',
    text: 'Przejdź do YouTube i skopiuj link do filmu z paska przeglądarki lub za pomocą przycisku udostępniania.',
  },
  {
    name: 'Wklej link',
    text: 'Wprowadź adres URL w polu ekstraktora lub użyj przycisku wklejania ze schowka.',
  },
  {
    name: 'Wybierz jakość',
    text: 'Narzędzie wyświetli wszystkie dostępne rozdzielczości, od maksymalnej jakości (1080p) do najniższej.',
  },
  {
    name: 'Pobierz obraz',
    text: 'Kliknij przycisk pobierania, aby zapisać miniaturkę na swoim urządzeniu.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Dokumentacja i źródła',
  bibliography: [
    {
      name: 'Pomoc YouTube: Dodawanie niestandardowej miniatury filmu',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube Creator Academy: Jak tworzyć skuteczne miniaturki',
      url: 'https://creatoracademy.youtube.com/',
    },
    {
      name: 'Google Developers: YouTube Data API — Thumbnails',
      url: 'https://developers.google.com/youtube/v3/docs/thumbnails',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pobieraj Miniaturki z YouTube w HD za darmo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jeśli potrzebujesz <strong>pobrać miniaturkę z filmu na YouTube</strong> w jej oryginalnym rozmiarze lub maksymalnej jakości (Full HD lub 4K), to darmowe narzędzie jest najszybszym rozwiązaniem. Możesz uzyskać obraz okładki z dowolnego kanału, aby się zainspirować, stworzyć własne projekty lub wykorzystać go w prezentacjach.',
    },
    {
      type: 'tip',
      title: 'Wyodrębnij Zdjęcie Okładkowe bez Programów',
      html: '<p>Nie trzeba instalować oprogramowania ani się rejestrować. Wystarczy skopiować i wkleić link do filmu, a będziesz mógł <strong>zapisać miniaturkę z YouTube</strong> bezpośrednio na swoim komputerze lub telefonie.</p>',
    },
    {
      type: 'title',
      text: 'Jak uzyskać miniaturkę z filmu na YouTube?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Proces <strong>wyciągania zdjęcia z filmu na YouTube</strong> jest bardzo prosty. Wykonaj poniższe kroki, aby uzyskać obraz w kilka sekund:',
    },
    {
      type: 'list',
      items: [
        '<strong>1. Skopiuj adres URL:</strong> Przejdź do YouTube i skopiuj link do filmu (z paska przeglądarki lub przycisku udostępniania).',
        '<strong>2. Wklej link:</strong> Wprowadź adres URL w polu wyszukiwania naszego ekstraktora miniaturek.',
        '<strong>3. Wybierz jakość:</strong> Pokażemy Ci wszystkie dostępne rozdzielczości, od maksymalnej jakości (1080p) do najniższej (360p).',
        '<strong>4. Pobierz obraz:</strong> Kliknij przycisk pobierania, aby zapisać <i>thumbnail</i> na swoim urządzeniu.',
      ],
    },
    {
      type: 'title',
      text: 'Obsługiwane Formaty i Rozdzielczości',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pobieranie okładek z filmów na YouTube nigdy nie było tak łatwe. Narzędzie automatycznie szuka najlepszego możliwego obrazu (znanego jako <strong>maxresdefault</strong>), którym zazwyczaj są projekty dopracowane w Photoshopie przez YouTuberów. Jeśli twórca nie przesłał obrazu w jakości HD, damy Ci kolejną najlepszą opcję (<strong>hqdefault</strong> lub <strong>mqdefault</strong>).',
    },
    {
      type: 'paragraph',
      html: 'To narzędzie jest idealne dla <i>Community Managerów</i>, grafików, twórców treści, twórców memów lub każdego, kto potrzebuje <strong>pobrać okładkę filmu</strong> do swoich projektów. Co więcej, jest kompatybilne z <strong>YouTube Shorts</strong>, więc możesz pobrać ich miniaturki w ten sam sposób.',
    },
    {
      type: 'title',
      text: 'Profesjonalne Zastosowania Miniaturek z YouTube',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Miniaturki na YouTube to zasoby wizualne o wysokiej wartości. Reprezentują godziny pracy nad projektem, testy A/B i optymalizację CTR przez twórców. Wiedza o tym, jak uzyskać do nich dostęp i jak je pobierać, otwiera szereg profesjonalnych możliwości.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Twórcy Treści',
          html: '<p>Analizuj miniaturki wiralowych filmów w swojej niszy, aby zrozumieć, jakie elementy wizualne generują najwięcej kliknięć: typografia, dominujące kolory, wykorzystanie twarzy lub tekstu.</p><ul><li><strong>Benchmarking wizualny:</strong> Porównuj swoje miniaturki z liderami w Twoim sektorze.</li><li><strong>Iteracja projektu:</strong> Pobieraj i używaj miniaturek jako odniesienia w Photoshopie lub Canvie.</li><li><strong>Archiwum inspiracji:</strong> Buduj bibliotekę miniaturek o wysokiej konwersji.</li></ul>',
        },
        {
          type: 'card',
          title: 'Projektanci i Marketerzy',
          html: '<p>Dla grafika lub <i>social media managera</i> szybki dostęp do miniaturek z YouTube jest niezbędny do prezentacji, ofert dla klientów i audytów wizualnych.</p><ul><li><strong>Prezentacje dla klientów:</strong> Dołączaj prawdziwe zrzuty ekranu konkurencji do swoich ofert.</li><li><strong>Audyty marki:</strong> Oceniaj spójność wizualną kanału na YouTube.</li><li><strong>Moodboardy:</strong> Zbieraj wysokiej jakości referencje wizualne bez rozmytych zrzutów ekranu.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kompatybilność z YouTube Shorts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ekstraktor działa idealnie z <strong>YouTube Shorts</strong>. Shortsy mają swój własny pionowy format miniaturki (9:16), który jest generowany automatycznie z filmu. To narzędzie rozpoznaje adresy URL Shorts (<code>youtube.com/shorts/ID</code>) i wyodrębnia najlepszą dostępną miniaturkę w taki sam sposób, jak w przypadku standardowych filmów.',
    },
    {
      type: 'tip',
      title: 'Prywatność Gwarantowana',
      html: '<p>Całe wyodrębnianie odbywa się w Twojej przeglądarce. Żadne adresy URL ani dane nie są wysyłane do żadnego zewnętrznego serwera.</p>',
    },
  ],
  ui: {
    urlPlaceholder: 'Wklej link z YouTube tutaj...',
    pasteAriaLabel: 'Wklej ze schowka',
    helperText: 'Obsługiwane formaty: youtube.com, youtu.be, shorts.',
    ribbonLabel: 'Maksymalna Jakość',
    downloadBtn: 'Pobierz w Maksymalnej Rozdzielczości',
    qualityMedium: 'Średnia Jakość',
    qualityStandard: 'Standardowa Jakość',
    qualityLow: 'Niska Jakość',
    viewImage: 'Zobacz Obraz',
    errorInvalid: 'Nieprawidłowy adres URL YouTube. Proszę go sprawdzić.',
    imgAlt: 'Miniaturka HD z YouTube',
  },
};
