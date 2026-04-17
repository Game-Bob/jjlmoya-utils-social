import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'sosyal-medya-resim-boyutlandirici';
const title = 'Sosyal Medya Resim Boyutlandırıcı: Her Platform İçin Kırp ve Boyutlandır';
const description =
  'Instagram, TikTok, YouTube ve daha fazlası için fotoğraflarınızı boyutlandırın ve kırpın. 2026 için güncellenmiş resmi boyutlarla akıllı kırpma.';

const faqData = [
  {
    question: 'Boyutlandırma sırasında görüntü kalitesi kaybolur mu?',
    answer:
      'Hayır, yüksek kaliteli yumuşatma algoritmaları kullanıyoruz. Hedef formata eşit veya bu formattan daha büyük çözünürlüğe sahip orijinal bir resim yüklemeniz önerilir.',
  },
  {
    question: 'Fotoğraflarımı buraya yüklemek güvenli mi?',
    answer:
      'Tamamen. İşleme, Canvas API kullanılarak tarayıcınızda yerel olarak yapılır. Fotoğraflarınız asla herhangi bir sunucuya gönderilmez.',
  },
  {
    question: 'Hangi formatlar destekleniyor?',
    answer:
      'Yükleme için JPG, PNG, WebP ve AVIF formatlarını destekliyoruz. İndirmeler, maksimum uyumluluk için yüksek kaliteli JPG olarak optimize edilir.',
  },
];

const howToData = [
  {
    name: 'Resminizi yükleyin',
    text: 'İşlemi başlatmak için dosyanızı sürükleyin veya cihazınıza göz atın.',
  },
  {
    name: 'Formatı seçin',
    text: 'Yan menüden ihtiyacınız olan sosyal ağı ve yayın türünü seçin.',
  },
  {
    name: 'Ayarla ve indir',
    text: 'Fotoğrafınızı sürükleyerek çerçeveleyin ve mükemmel bir kırpma için yakınlaştırmayı kullanın. Bittiğinde indire tıklayın.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Sprout Social: Sosyal Medya Resim Boyutları Kılavuzu 2026',
      url: 'https://sproutsocial.com/insights/social-media-image-sizes-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Her Platform İçin Sosyal Medya Resim Boyutlandırıcı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Günümüzün dijital ekosisteminde ilk izlenimler görseldir. Her sosyal ağ, kendi oranlarına doğal olarak uyarlanmış içeriğe öncelik veren belirli algoritmalar altında çalışır. Sosyal medya resim boyutlandırıcımız sadece teknik bir araç değil; mesajınızın istenmeyen kırpmalar veya kalite kaybı olmadan ulaşmasını sağlamak için müttefikinizdir.",
    },
    {
      type: 'paragraph',
      html: 'İster bir manzara fotoğrafını Instagram Hikayeleri için çarpıcı bir dikey resme dönüştürmeniz, ister bir tasarımı karmaşık bir YouTube banner\'ına uyarlamanız gereksin, aracımız resminizi doğrudan tarayıcınızda hassasiyetle konumlandırmanıza ve ölçeklendirmenize olanak tanıyan akıllı bir kırpma sistemi kullanır.',
    },
    {
      type: 'title',
      text: 'Resmi Sosyal Medya Resim Boyutları 2026',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — Kare Gönderi', body: '1080 × 1080 px · Oran 1:1' },
        { title: 'Instagram — Dikey Gönderi', body: '1080 × 1350 px · Oran 4:5' },
        { title: 'TikTok / Reels — Dikey', body: '1080 × 1920 px · Oran 9:16' },
        { title: 'YouTube — Küçük Resim', body: '1280 × 720 px · Oran 16:9' },
        { title: 'YouTube — Kanal Banner\'ı', body: '2560 × 1440 px · Oran 16:9' },
        { title: 'X (Twitter) — Standart Gönderi', body: '1200 × 675 px · Oran 16:9' },
        { title: 'LinkedIn — Profil Kapağı', body: '1584 × 396 px · Oran 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: '1:1 kare formatı bir klasik olmaya devam ediyor, ancak 4:5 dikey format daha fazla ekran alanı kaplıyor ve haber akışında %30\'a kadar daha fazla etkileşim sağlıyor.',
        },
        {
          title: 'Kısa Format İçerik',
          body: 'TikTok ve Reels için standart 9:16\'dır. Bu sürükleyici format, odak noktasının uygulama arayüzü tarafından kapatılmasını önlemek için mükemmel şekilde hizalanmasını gerektirir.',
        },
        {
          title: 'Görsel Etkileşim',
          body: 'Küçük resimlerden bannerlara kadar her varlık, tıklama oranında belirli bir ağırlık taşır. Hassas kırpma, metnin ve anahtar öğelerin her zaman okunabilir olmasını sağlar.',
        },
        {
          title: 'Profesyonel Markalaşma',
          body: 'LinkedIn gibi profesyonel ağlarda netlik, otoritedir. Üstbilgiler, yüksek yoğunluklu ekranlarda pikselli görünmemek için belirli oranlar gerektirir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'En Boy Oranı Neden Önemlidir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En boy oranı, bir görüntünün genişliği ile yüksekliği arasındaki orantılı ilişkidir. Bunu görmezden gelmek, platformları yakınlaştırmaya veya siyah çubuklar eklemeye zorlar, bu da estetiği ve organik erişimi olumsuz etkiler.',
    },
    {
      type: 'list',
      items: [
        'Metinlerin veya logoların yerel uygulama simgeleri tarafından kesilmesini önler.',
        'Orijinal fotoğrafı bozmadan veya germeden optimum piksel yoğunluğunu korur.',
        'Tüm resmi ölçüleri tek bir web aracında merkezileştirerek zaman kazandırır.',
        'Tam ağırlık ve boyutlarda dosyalar oluşturarak yükleme hızını iyileştirir.',
      ],
    },
    {
      type: 'tip',
      title: 'Kompozisyon İpucu',
      html: '<p>Manuel sürükleme özelliğimizi kullanırken, fotoğrafınızın ana konusunu ızgaranın kesişme noktalarından birine yerleştirmeyi deneyin. Bu, sosyal ağlarınız için daha dinamik ve profesyonel kompozisyonlar oluşturur.</p>',
    },
    {
      type: 'title',
      text: 'Mükemmel Bir Kırpma İçin Adımlar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Formatınızı seçin: Yan menüden platformu ve yayın türünü seçin.',
        'Resmi yükleyin: Dosyanızı sürükleyin veya fotoğrafınızı içe aktarmak için dosya seçiciyi kullanın.',
        'Çerçeveyi ayarlayın: Fotoğrafı görünür alan içinde sürükleyin ve hassasiyet için yakınlaştırmayı kullanın.',
        'Anında dışa aktarma: Resminizi yayınlanmaya hazır hale getirmek için indire tıklayın.',
      ],
    },
    {
      type: 'title',
      text: 'Gizlilik ve Yerel İşleme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gizliliğiniz mutlaktır. Bu boyutlandırıcı, Canvas API kullanarak tarayıcınızda resimleri yerel olarak işler. Fotoğraflarınız asla harici bir sunucuya yüklenmez, tam güvenlik ve anında işlem hızı garanti edilir.',
    },
    {
      type: 'title',
      text: 'Sosyal Medya İçin Profesyonel Optimizasyon',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Görsel içeriğinizi profesyonelce uyarlamak doğrudan bir büyüme stratejisidir. Aracımız, içerik üreticileri ve topluluk yöneticileri için iş akışını basitleştirerek her gönderinin her cihazda ve platformda mükemmel görünmesini sağlar.',
    },
  ],
  ui: {
    sidebarTitle: 'Sosyal Formatlar',
    uploadTitle: 'Resim Yükle',
    uploadSubtitle: 'Fotoğrafınızı buraya sürükleyin veya göz atmak için tıklayın',
    btnReset: 'Sıfırla',
    btnDownload: 'Resmi İndir',
  },
};
