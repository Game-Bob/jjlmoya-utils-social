import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'zmiana-rozmiaru-zdjec-social-media';
const title = 'Social Media Image Resizer: Kadrowanie i zmiana rozmiaru pod każdą platformę';
const description =
  'Zmieniaj rozmiar i kadruj zdjęcia na Instagram, TikTok, YouTube i inne serwisy. Inteligentne przycinanie z aktualnymi oficjalnymi wymiarami na rok 2026.';

const faqData = [
  {
    question: 'Czy podczas zmiany rozmiaru stracę na jakości zdjęcia?',
    answer:
      'Nie, używamy wysokiej jakości algorytmów wygładzania. Zalecamy jednak przesyłanie oryginalnego zdjęcia o rozdzielczości równej lub większej niż format docelowy.',
  },
  {
    question: 'Czy przesyłanie tutaj moich zdjęć jest bezpieczne?',
    answer:
      'Całkowicie. Przetwarzanie odbywa się lokalnie w Twojej przeglądarce przy użyciu Canvas API. Twoje zdjęcia nigdy nie są wysyłane na żaden serwer.',
  },
  {
    question: 'Jakie formaty plików są obsługiwane?',
    answer:
      'Obsługujemy przesyłanie plików JPG, PNG, WebP oraz AVIF. Pobrane pliki są optymalizowane jako wysokiej jakości JPG dla maksymalnej kompatybilności.',
  },
];

const howToData = [
  {
    name: 'Prześlij zdjęcie',
    text: 'Przeciągnij plik lub wybierz go z urządzenia, aby rozpocząć proces.',
  },
  {
    name: 'Wybierz format',
    text: 'Z menu bocznego wybierz serwis społecznościowy i typ publikacji, którego potrzebujesz.',
  },
  {
    name: 'Dostosuj i pobierz',
    text: 'Ustaw kadr, przeciągając zdjęcie, i użyj zoomu, aby idealnie je dopasować. Gdy skończysz, kliknij przycisk pobierania.',
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

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Sprout Social: Przewodnik po rozmiarach zdjęć w social media 2026',
      url: 'https://sproutsocial.com/insights/social-media-image-sizes-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Resizer zdjęć social media pod każdą platformę',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W dzisiejszym cyfrowym ekosystemie pierwsze wrażenie budowane jest wizualnie. Każdy serwis społecznościowy działa w oparciu o specyficzne algorytmy, które faworyzują treści natywnie dopasowane do ich proporcji. Nasz resizer to nie tylko techniczne narzędzie — to Twój sojusznik, dzięki któremu Twój przekaz dotrze do odbiorców bez niechcianych ucięć czy straty jakości.',
    },
    {
      type: 'paragraph',
      html: 'Niezależnie od tego, czy potrzebujesz zamienić zdjęcie poziome w efektowny pion na Instagram Stories, czy dostosować projekt pod złożony baner YouTube, nasza aplikacja korzysta z inteligentnego systemu kadrowania, który pozwala na precyzyjne ustawienie i skalowanie obrazu bezpośrednio w przeglądarce.',
    },
    {
      type: 'title',
      text: 'Oficjalne wymiary zdjęć social media 2026',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — Post Kwadratowy', body: '1080 × 1080 px · Proporcja 1:1' },
        { title: 'Instagram — Post Pionowy', body: '1080 × 1350 px · Proporcja 4:5' },
        { title: 'TikTok / Reels — Pion', body: '1080 × 1920 px · Proporcja 9:16' },
        { title: 'YouTube — Miniaturka', body: '1280 × 720 px · Proporcja 16:9' },
        { title: 'YouTube — Baner Kanału', body: '2560 × 1440 px · Proporcja 16:9' },
        { title: 'X (Twitter) — Standardowy Post', body: '1200 × 675 px · Proporcja 16:9' },
        { title: 'LinkedIn — Tło Profilu', body: '1584 × 396 px · Proporcja 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: 'Format kwadratowy 1:1 pozostaje klasykiem, ale pion 4:5 zajmuje więcej miejsca na ekranie i generuje do 30% większe zaangażowanie w feedzie.',
        },
        {
          title: 'Treści Short Form',
          body: 'Dla TikTok i Reels standardem jest 9:16. Ten immersyjny format wymaga idealnego wycentrowania głównego punktu zdjęcia, aby nie został zasłonięty przez UI aplikacji.',
        },
        {
          title: 'Wizualne Zaangażowanie',
          body: 'Od miniaturek po banery — każdy element graficzny ma wpływ na klikalność (CTR). Precyzyjne kadrowanie gwarantuje, że teksty i kluczowe elementy będą zawsze czytelne.',
        },
        {
          title: 'Profesjonalny Branding',
          body: 'W sieciach biznesowych jak LinkedIn ostrość to autorytet. Nagłówki wymagają specyficznych proporcji, aby nie wyglądały na rozpikselowane na ekranach o wysokiej gęstości.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego proporcje obrazu (Aspect Ratio) są ważne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Proporcje to zależność między szerokością a wysokością obrazu. Ignorowanie ich zmusza platformy do stosowania zoomu lub dodawania czarnych pasów, co obniża estetykę i zasięgi organiczne.',
    },
    {
      type: 'list',
      items: [
        'Zapobiega ucinaniu tekstów lub logo przez natywne ikony aplikacji.',
        'Zachowuje optymalną gęstość pikseli bez zniekształcania lub rozciągania oryginalnego zdjęcia.',
        'Oszczędza czas dzięki zebraniu wszystkich oficjalnych wymiarów w jednym narzędziu online.',
        'Poprawia szybkość ładowania dzięki generowaniu plików o dokładnej wadze i wymiarach.',
      ],
    },
    {
      type: 'tip',
      title: 'Wskazówka kompozycyjna',
      html: '<p>Korzystając z funkcji ręcznego ustawiania kadru, spróbuj umieścić główny temat zdjęcia w jednym z punktów przecięcia siatki (zasada trójpodziału). Tworzy to bardziej dynamiczne i profesjonalne kompozycje.</p>',
    },
    {
      type: 'title',
      text: 'Kroki do idealnego kadru',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Wybierz format: Wybierz platformę i typ publikacji z menu bocznego.',
        'Prześlij obraz: Przeciągnij plik lub wybierz go z dysku, aby zaimportować zdjęcie.',
        'Dostosuj kadr: Przesuń zdjęcie w obszarze widocznym i użyj zoomu dla precyzji.',
        'Natychmiastowy eksport: Kliknij pobierz, aby otrzymać obraz gotowy do publikacji.',
      ],
    },
    {
      type: 'title',
      text: 'Prywatność i lokalne przetwarzanie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Twoja prywatność jest dla nas priorytetem. Ten resizer przetwarza zdjęcia lokalnie w Twojej przeglądarce przy użyciu Canvas API. Twoje pliki nigdy nie trafiają na zewnętrzne serwery, co gwarantuje pełne bezpieczeństwo i natychmiastową prędkość działania.',
    },
    {
      type: 'title',
      text: 'Profesjonalna optymalizacja dla Social Media',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Profesjonalne dopasowanie treści wizualnych to bezpośrednia strategia wzrostu. Nasze narzędzie upraszcza pracę twórcom i community managerom, dbając o to, by każda publikacja wyglądała perfekcyjnie na każdym urządzeniu.',
    },
  ],
  ui: {
    sidebarTitle: 'Formaty Social',
    uploadTitle: 'Prześlij zdjęcie',
    uploadSubtitle: 'Przeciągnij zdjęcie tutaj lub kliknij, aby wybrać',
    btnReset: 'Resetuj',
    btnDownload: 'Pobierz zdjęcie',
  },
};
