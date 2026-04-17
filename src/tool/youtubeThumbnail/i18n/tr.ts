import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'youtube-kucuk-resim-indir-hd';
const title = 'YouTube Küçük Resim İndirici (HD)';
const description =
  'Sadece URL\'yi kullanarak herhangi bir YouTube videosunun orijinal küçük resmini maksimum çözünürlükte ve filigransız olarak ayıklayın ve indirin.';

const faqData = [
  {
    question: 'Küçük resimler hangi çözünürlükte ayıklanıyor?',
    answer:
      "Araç her zaman, video oluşturucusu tarafından yüklenen orijinal kalite olan 'MaxRes' (1280x720 veya 1920x1080) çözünürlüğünde görseli almaya çalışır. Eğer içerik üreticisi HD bir küçük resim yüklemediyse, otomatik olarak mevcut olan bir sonraki en yüksek çözünürlüğü gösterecektir.",
  },
  {
    question: 'Hangi bağlantı türlerini destekliyor?',
    answer:
      'Geleneksel youtube.com/watch URL\'lerini, youtu.be kısa bağlantılarını, mobil bağlantıları ve hatta YouTube Shorts URL\'lerini sorunsuz bir şekilde destekler.',
  },
  {
    question: 'YouTube küçük resimlerini indirmek yasal mı?',
    answer:
      'Evet, kişisel kullanım, tasarım, parodi ve ilham (Adil Kullanım) amaçlı indirme tamamen yasaldır. Telif hakkıyla korunan küçük resimleri tamamen ticari amaçlarla kullanacaksanız dikkatli olun; bu durumlarda videonun lisansını kontrol etmek önemlidir.',
  },
  {
    question: 'Günlük kullanım sınırı var mı?',
    answer:
      'Aylık veya günlük bir sınır yoktur. Bu yazılım, URL desenini tarayıcınızın içinde dahili olarak çözerek istemci tarafında çalıştığı için geleneksel kısıtlayıcı API\'larla etkileşime girmiyoruz.',
  },
];

const howToData = [
  {
    name: 'Video URL\'sini kopyalayın',
    text: 'YouTube\'a gidin ve tarayıcı çubuğundan veya paylaş düğmesinden video bağlantısını kopyalayın.',
  },
  {
    name: 'Bağlantıyı yapıştırın',
    text: 'URL\'yi ayıklayıcı alanına girin veya panodan yapıştır düğmesini kullanın.',
  },
  {
    name: 'Kaliteyi seçin',
    text: 'Araç, maksimum kaliteden (1080p) en düşüğe kadar mevcut tüm çözünürlükleri gösterecektir.',
  },
  {
    name: 'Görseli indirin',
    text: 'Küçük resmi cihazınıza kaydetmek için indir düğmesine tıklayın.',
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

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Dökümantasyon ve Referanslar',
  bibliography: [
    {
      name: 'YouTube Yardımı: Özel video küçük resmi ekleme',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube Creator Academy: Etkili küçük resimler nasıl oluşturulur',
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
      text: 'HD YouTube Küçük Resimlerini Ücretsiz İndirin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir <strong>YouTube videosunun küçük resmini</strong> orijinal boyutunda veya maksimum kalitede (Full HD veya 4K) indirmeniz gerekiyorsa, bu ücretsiz araç en hızlı çözümdür. İlham almak, kendi tasarımlarınızı oluşturmak veya sunumlarda kullanmak için herhangi bir kanalın kapak görselini alabilirsiniz.',
    },
    {
      type: 'tip',
      title: 'Programsız Kapak Fotoğrafı Ayıklama',
      html: '<p>Yazılım yüklemeye veya kayıt olmaya gerek yoktur. Sadece video bağlantısını kopyalayıp yapıştırmanız yeterlidir; <strong>YouTube küçük resmini</strong> doğrudan bilgisayarınıza veya cep telefonunuza kaydedebilirsiniz.</p>',
    },
    {
      type: 'title',
      text: 'Bir YouTube videosunun küçük resmi nasıl alınır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir <strong>YouTube videosundan fotoğraf çıkarma</strong> işlemi çok basittir. Görseli saniyeler içinde almak için şu adımları izleyin:',
    },
    {
      type: 'list',
      items: [
        '<strong>1. URL\'yi Kopyalayın:</strong> YouTube\'a gidin ve video bağlantısını kopyalayın (tarayıcı çubuğundan veya paylaş düğmesinden).',
        '<strong>2. Bağlantıyı Yapıştırın:</strong> URL\'yi küçük resim ayıklayıcımızın arama alanına girin.',
        '<strong>3. Kaliteyi Seçin:</strong> Maksimum kaliteden (1080p) en düşüğe (360p) kadar mevcut tüm çözünürlükleri size göstereceğiz.',
        '<strong>4. Görseli İndirin:</strong> <i>Küçük resmi</i> cihazınıza kaydetmek için indir düğmesine tıklayın.',
      ],
    },
    {
      type: 'title',
      text: 'Desteklenen Formatlar ve Çözünürlükler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube video kapaklarını indirmek hiç bu kadar kolay olmamıştı. Araç, genellikle YouTuber\'lar tarafından Photoshop\'ta üzerinde çalışılmış tasarımlar olan mümkün olan en iyi görseli (<strong>maxresdefault</strong> olarak bilinir) otomatik olarak arar. İçerik oluşturucu HD bir görsel yüklemediyse, size mevcut olan bir sonraki en iyi seçeneği (<strong>hqdefault</strong> veya <strong>mqdefault</strong>) sunacağız.',
    },
    {
      type: 'paragraph',
      html: 'Bu yardımcı program <i>Topluluk Yöneticileri</i>, grafik tasarımcılar, içerik üreticileri, meme yapımcıları veya projeleri için bir <strong>video kapağını indirmesi</strong> gereken herkes için mükemmeldir. Ayrıca, <strong>YouTube Shorts</strong> ile de uyumludur, böylece onların küçük resimlerini de aynı şekilde alabilirsiniz.',
    },
    {
      type: 'title',
      text: 'YouTube Küçük Resimlerinin Profesyonel Kullanımları',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'YouTube küçük resimleri yüksek değerli görsel varlıklardır. İçerik üreticileri tarafından harcanan saatlerce tasarım çalışmasını, A/B testlerini ve CTR optimizasyonunu temsil ederler. Bunlara nasıl erişeceğinizi ve indireceğinizi bilmek, profesyonel olasılıklar yelpazesini açar.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'İçerik Üreticileri',
          html: '<p>Hangi görsel öğelerin daha fazla tıklama sağladığını anlamak için nişinizdeki viral videoların küçük resimlerini analiz edin: tipografi, baskın renkler, yüz veya metin kullanımı.</p><ul><li><strong>Görsel kıyaslama:</strong> Küçük resimlerinizi sektörünüzdeki liderlerle karşılaştırın.</li><li><strong>Tasarım yinelemesi:</strong> Küçük resimleri indirin ve Photoshop veya Canva\'da referans olarak kullanın.</li><li><strong>İlham arşivi:</strong> Yüksek dönüşümlü küçük resimlerden oluşan bir kütüphane oluşturun.</li></ul>',
        },
        {
          type: 'card',
          title: 'Tasarımcılar ve Pazarlamacılar',
          html: '<p>Bir grafik tasarımcı veya <i>sosyal medya yöneticisi</i> için YouTube küçük resimlerine hızlıca erişmek sunumlar, müşteri teklifleri ve görsel denetimler için gereklidir.</p><ul><li><strong>Müşteri sunumları:</strong> Tekliflerinize rakiplerin gerçek ekran görüntülerini ekleyin.</li><li><strong>Marka denetimleri:</strong> Bir YouTube kanalının görsel tutarlılığını değerlendirin.</li><li><strong>Moodboard\'lar:</strong> Bulanık ekran görüntüleri yerine yüksek kaliteli görsel referanslar toplayın.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts Uyumluluğu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ayıklayıcı, <strong>YouTube Shorts</strong> ile mükemmel çalışır. Shorts videoları, videodan otomatik olarak oluşturulan kendi dikey küçük resim formatına (9:16) sahiptir. Bu araç Shorts URL\'lerini (<code>youtube.com/shorts/ID</code>) tanır ve standart videolarda olduğu gibi mevcut en iyi küçük resmi çıkarır.',
    },
    {
      type: 'tip',
      title: 'Gizlilik Garantili',
      html: '<p>Tüm ayıklama işlemi tarayıcınızda gerçekleşir. Hiçbir URL veya veri harici bir sunucuya gönderilmez.</p>',
    },
  ],
  ui: {
    urlPlaceholder: 'YouTube bağlantısını buraya yapıştırın...',
    pasteAriaLabel: 'Panodan yapıştır',
    helperText: 'Desteklenen formatlar: youtube.com, youtu.be, shorts.',
    ribbonLabel: 'Maksimum Kalite',
    downloadBtn: 'Maksimum Çözünürlükte İndir',
    qualityMedium: 'Orta Kalite',
    qualityStandard: 'Standart Kalite',
    qualityLow: 'Düşük Kalite',
    viewImage: 'Resmi Görüntüle',
    errorInvalid: 'Geçersiz YouTube URL\'si. Lütfen kontrol edin.',
    imgAlt: 'YouTube HD Küçük Resim',
  },
};
