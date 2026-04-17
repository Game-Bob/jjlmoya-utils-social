import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TinderPhotoOptimizerUI } from '../ui';

const slug = 'tinder-foto-iyilestirici';
const title = 'Tinder Fotoğraf İyileştirici: Yüz Analizi ve Kompozisyon';
const description =
  'Algoritmik yüz analizi ile Tinder fotoğraflarınızı optimize edin. 2026 Tinder arayüzünü simüle edin, bilimsel çerçeveleme ve göz çizgisini analiz edin, matchleri maksimize etmek için mükemmel 9:16 portreler dışa aktarın.';

const faqData = [
  {
    question: 'Bu araç Tinder\'daki match (eşleşme) oranımı nasıl artırır?',
    answer:
      'Araç temel teknik faktörleri analiz eder: yüz boyutu oranı (ideal %30-50), üst üçte bire göre göz çizgisinin konumu, çerçeveleme kapsamı ve Tinder arayüzündeki ölü bölgeler. Bu parametreleri ayarlayarak fotoğrafınız daha fazla güven yansıtır ve algoritmanın görsel filtrelerini daha kolay geçer.',
  },
  {
    question: 'Fotoğraflarımı buraya yüklemek güvenli mi?',
    answer:
      'Tamamen güvenli. Tüm işlemler Canvas API aracılığıyla tarayıcınızda gerçekleştirilir. Fotoğraflarınız asla herhangi bir sunucuya gönderilmez veya herhangi bir yerde saklanmaz.',
  },
  {
    question: 'Yapay zeka yüz algılama tam olarak ne yapar?',
    answer:
      '68 yüz referans noktasını tespit etmek, ifadeyi analiz etmek (gülümseme, ciddi ifade), göz konumunu değerlendirmek ve kafa eğikliğini ölçmek için face-api.js kullanır. Tüm analizler cihazınızda yerel olarak gerçekleşir.',
  },
  {
    question: 'Neden 1.2x yakınlaştırmayı öneriyorsunuz?',
    answer:
      'Akıllı telefon ön kameraları, yüzü balık gözü (barrel distortion) etkisiyle bozan geniş açılı lensler (24mm) kullanır. 1.2x yakınlaştırma, 50-85mm odağı simüle ederek bozulmayı giderir ve daha doğal ve çekici yüz oranları sağlar.',
  },
];

const howToData = [
  {
    name: 'Fotoğrafınızı yükleyin',
    text: 'Resminizi yüklemek için Tinder simülatörüne sürükleyin veya tıklayın.',
  },
  {
    name: 'Kompozisyonu analiz edin',
    text: 'Yapay zeka yüzünüzü otomatik olarak algılar ve yüz boyutu, göz çizgisi, kapsam ve ifade metriklerini gösterir.',
  },
  {
    name: 'Hassas bir şekilde ayarlayın',
    text: 'Yakınlaştırma ve parlaklık kontrollerini kullanın, otomatik çerçevelemeyi etkinleştirin veya resmi simülatör içinde manuel olarak sürükleyin.',
  },
  {
    name: 'Optimize edilmiş indirme',
    text: 'Fotoğrafınızı temiz meta verilerle, Tinder için optimize edilmiş 1080x1920 yerel formatında dışa aktarın.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<TinderPhotoOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
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
      text: 'Tinder Fotoğraf İyileştirici: Bilimsel ve Teknik Kesin Kılavuz (2026)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dijital flört ekosisteminde Tinder profiliniz aynı anda iki algoritma tarafından işlenir: platformun kendi gelişmiş vizyon algoritması ve kaydıran kullanıcının insan beyni. Aracımız, görüntünüzün maksimum sosyal değer ve teknik çekicilik yansıtmasını sağlamak için <strong>evrimsel psikoloji</strong>, <strong>yüz biyometrisi</strong> ve <strong>dijital sinyal işleme</strong> ilkelerini entegre eder.',
    },
    {
      type: 'title',
      text: 'İlk İzlenim Psikolojisi: 1.2 Saniye Etkisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sinirbilimsel çalışmalar, insan beyninin birinin yansıttığı güven hakkında ilk izlenimi oluşturmasının yaklaşık 1/10 saniye sürdüğünü göstermektedir. Tinder\'da bir sonraki kaydırmadan önce bir saniyeden biraz fazla zamanınız vardır. Aracımız olumlu karar vermeyi hızlandıran faktörleri analiz eder:',
    },
    {
      type: 'list',
      items: [
        '<strong>Göz Teması ve Bakış Çizgisi:</strong> Doğrudan bakış, beynin sosyal ödül ile ilgili bölgelerini harekete geçirir. Gözleri üst üçte bire yerleştirmek, kullanıcının adınızı okumadan önce bakışınızda durma olasılığını maksimize eder.',
        '<strong>Asimetri ve Duruş:</strong> Hafif bir eğim agresif özellikleri yumuşatabilir, ancak aşırı yana yatma istikrarsızlık hissi verir. Algoritmamız sizi güven aralığında tutmak için tam açıyı ölçer.',
        '<strong>Figür-Arka Plan Kontrastı:</strong> Sistem, öznenin arka plandan net bir şekilde ayrıldığı fotoğrafları ödüllendirir. İyi tanımlanmış bir teknik profil, oluşturma motorunun yüzünüzü rakiplerinkinden ayırmasına yardımcı olur.',
      ],
    },
    {
      type: 'title',
      text: 'Lensin Teknik Analizi: Geniş Açı Sorunu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Neredeyse tüm profil fotoğrafları, ön kameraları geniş açılı olan akıllı telefonlarla çekilir. En yaygın hata cihaza çok yaklaşmaktır.',
    },
    {
      type: 'paragraph',
      html: '<strong>Balık Gözü Bozulması:</strong> Bir metreden daha kısa bir mesafede, 24mm\'lik bir lens (telefonlarda standart) görüntünün merkezini genişletir. Bu, burunların gerçekte olduğundan daha büyük ve yüzün daha yuvarlak görünmesine neden olur. <strong>1.2x Yakınlaştırma</strong> önerimiz düzelticidir: hafif bir dijital kırpma uygulayarak moda fotoğrafçılarının yüzü inceltmek ve gerçek oranları korumak için kullandığı altın odak uzaklığı olan 50mm ila 85mm odağı simüle edersiniz.',
    },
    {
      type: 'title',
      text: 'Tinder Arayüzü: Ölü Bölgeler Bilimi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pek çok harika fotoğraf, Tinder\'ın üzerine yerleştirdiği yazılım katmanını (UI) görmezden geldiği için başarısız olur. Ortalama bir kullanıcı temiz fotoğrafınızı görmez; düğmelerin, gradyanların ve metinlerin bir karışımını görür.',
    },
    {
      type: 'list',
      items: [
        '<strong>Başlık Bölgesi (Üst %15):</strong> İlerleme göstergeleri ve durum çubuğu burada yer alır. Alnınız veya gözleriniz buradaysa, arayüz kafanızı görsel olarak keser.',
        '<strong>Aksiyon Bölgesi (Düğmeler):</strong> Like, Nope ve Boost simgeleri alt yanları kaplar. Elleriniz veya stil öğeleriniz oradaysa tamamen kaybolurlar.',
        '<strong>Okunabilirlik Gradyanı (Alt %28):</strong> Tinder adınızın ve yaşınızın okunabilmesi için siyah bir geçiş uygular. Yüzünüz bu bölgeye düşerse, metin yüz hatlarınızla örtüşür ve profilin estetiğini bozar.',
      ],
    },
    {
      type: 'title',
      text: 'Gerçek Zamanlı Vizyon Analizi: Algoritmayı Anlamak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aracımız, görüntünüzü Tinder\'ın otomatik moderatörlerinin yapacağı gibi denetlemek için <strong>son nesil Bilgisayarlı Görü modellerini</strong> kullanır:',
    },
    {
      type: 'list',
      items: [
        '<strong>Nokta Tespiti:</strong> Simetriyi ve göz açıklığını analiz etmek için 68 yüz noktasını haritalandırıyoruz. İyi açılmış ve görünür gözler, daha yüksek algılanan dışadönüklük seviyeleriyle koreledir.',
        '<strong>Duygu Değerlendirmesi:</strong> Hafif bir gülümseme, size bakan kişide ayna nöronlarını harekete geçirir. Çok ciddi veya ulaşılmaz görünmediğinizden emin olmak için yüz ifadesinin yoğunluğunu tespit ediyoruz.',
        '<strong>Aydınlatma Kalitesi:</strong> Sistem tespit güvenini değerlendirir. Puan düşükse, fotoğraf görsel gürültüye veya Tinder algoritmasının düşük kaliteli içerik olarak işaretleyebileceği sert gölgelere sahiptir.',
      ],
    },
    {
      type: 'title',
      text: 'Tinder İçin Optimize Edilmiş Meta Veriler ve Dışa Aktarma',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Görüntünüzün boyutunun algoritmayı etkilediğini biliyor muydunuz? Flört uygulamaları, kullanıcı akışını bölmemek için hızlı yüklenen içeriğe öncelik verir.',
    },
    {
      type: 'list',
      items: [
        '<strong>Meta Veri Temizleme (Gizlilik ve SEO):</strong> EXIF kayıtlarını siliyoruz. Temiz bir fotoğraf size platformun algoritması için yeni bir tuval sunar.',
        '<strong>Akıllı Kayıpsız Sıkıştırma:</strong> iOS ve Android\'in yerel sRGB renk alanını korurken JPG dosya boyutunu azaltıyoruz. Fotoğrafınız az çekim gücü varken bile canlı görünecektir.',
        '<strong>Sürükleyici 9:16 Formatı:</strong> Tam olarak 1080x1920 piksel sunarak Tinder\'ın görüntü bozulmalarına neden olan kendi agresif sıkıştırma algoritmasını uygulamasını önlüyoruz.',
      ],
    },
    {
      type: 'tip',
      title: 'Uzman Tavsiyesi',
      html: '<p>İlk fotoğraf DAİMA omuzlardan yukarı doğru çekilmiş net bir portre olmalıdır. Boydan çekilmiş fotoğrafları veya aktivite fotoğraflarını 3. veya 4. sıraya saklayın. Bu ilk izlenimde bakışınızın engellerden uzak olduğundan ve yüzünüzün optimal boyutta (%30-50) olduğundan emin olun.</p>',
    },
    {
      type: 'title',
      text: 'İşleme Güvenliği ve Etiği',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fotoğraflarınızın özel olduğunu anlıyoruz. Bu optimize edici <strong>İstemci Tarafı teknolojisini</strong> kullanır: görüntüler yerel tarayıcınızdaki bir canvas motoru aracılığıyla işlenir. Cihazınızdan hiçbir veri çıkmaz. Gizliliğinizden ödün vermeden profilinizi optimize etmenin en güvenli ve en hızlı yoludur.',
    },
  ],
  ui: {
    uploadTitle: 'Fotoğrafı Optimize Et',
    uploadSubtitle: 'Başlamak için sürükleyin veya tıklayın',
    btnDownload: 'Optimize Edilmiş Fotoğrafı İndir',
    btnRescan: 'Yüzü Yeniden Tara',
    btnAutoFocus: 'Otomatik Çerçeve',
    btnMarkFace: 'Yüzü İşaretle',
    panelManual: 'Manuel Ayarlar',
    panelVisualization: 'Gelişmiş Görselleştirme',
    panelMetrics: 'Kompozisyon Analitiği',
    panelExport: 'Tinder 2026 İçin Dışa Aktar',
    panelExportDesc: 'Optimize edilmiş meta verilerle 1080x1920\'ye otomatik kırpma.',
    labelZoom: 'Zoom',
    labelBrightness: 'Parlaklık',
    toggleGrid: 'Üçte Bir Kılavuzu',
    toggleGridDesc: 'Klasik kompozisyon ayarı',
    toggleDeadzones: 'Tehlike Bölgeleri',
    toggleDeadzonesDesc: 'Arayüzün yüzünüzü gizlemesini engeller',
    toggleFaceBox: 'Algılanan Yüzü Gör',
    toggleFaceBoxDesc: 'Noktalar ve algılama alanı',
    metricFaceSize: 'Yüz Oranı',
    metricEyeLine: 'Bakış Çizgisi',
    metricCoverage: 'Kapsam',
    metricMood: 'İfade',
    metricQuality: 'Güven',
    analysisSuccess: 'Başarı Faktörleri',
    analysisWarning: 'Optimizasyon',
    analysisError: 'Kritik Hatalar',
    deadzoneTop: 'Üst UI Bölgesi',
    deadzoneBottom: 'Bilgi Bölgesi',
    loaderAnalyzing: 'Kompozisyon analiz ediliyor...',
    loaderModels: 'Vizyon modelleri yükleniyor...',
    simulatorName: 'İsim, 25',
    simulatorJob: 'Meslek',
    simulatorCity: 'Türkiye\'de yaşıyor',
    simulatorDistance: 'Senden 5 km uzakta',
    statusOptimal: 'OPTIMAL',
    statusIncorrect: 'YANLIŞ',
    statusHigh: 'YÜKSEK',
    statusMedium: 'ORTA',
    statusLow: 'DÜŞÜK',
    statusPositive: 'POZİTİF',
    statusNeutral: 'NÖTR',
    alertExcellent: 'Mükemmel teknik kompozisyon.',
    alertEmptySpaces: 'BOŞ ALANLAR: Resim tüm çerçeveyi kaplamıyor. Yakınlaştırmayı veya konumu ayarlayın.',
    alertAlmostInvisible: 'NEREDEYSE GÖRÜNMEZ: Çok uzaktasınız. Yüzünüz ekranın en az üçte birini kaplayana kadar yakınlaştırın.',
    alertTooClose: 'ÇOK YAKIN: Aşırı yakın planlar agresif görünebilir.',
    alertPerfectSize: 'MÜKEMMEL BOYUT: Yüzünüz güven yansıtmak için ideal orana sahip.',
    alertImpactfulLook: 'ETKİLEYİCİ BAKIŞ: Gözleriniz maksimum dikkat çizgisinde.',
    alertEyeLineMoveUp: 'GÖZ ÇİZGİSİ: Profesyonel bir çerçeveleme için yüzü biraz üst çizgiye doğru kaldırın.',
    alertEyeLineMoveDown: 'GÖZ ÇİZGİSİ: Profesyonel bir çerçeveleme için yüzü biraz üst çizgiye doğru indirin.',
    alertTiltedHead: 'EĞİK KAFA: Çok eğri bir duruş istikrarsızlık hissi verebilir.',
    alertSmileDetected: 'GÜLÜMSEME ALGILANDI: Gülümsemeler eşleşme oranını önemli ölçüde artırır.',
    alertSevereExpression: 'SERT İFADE: Daha nazik bir jestle çekilmiş bir fotoğraf kullanmayı deneyin.',
    alertObstructedTop: 'ENGELLENMİŞ: İlerleme çubuğu yüzünüzü kapatıyor.',
    alertObstructedBottom: 'ENGELLENMİŞ: Bilgi bloğu yüzünüzü kapatıyor.',
    alertLowLight: 'YETERSİZ AYDINLATMA: Yapay zeka sizi görmekte zorlanıyor. Daha iyi ışıklı bir fotoğraf bulun.',
    alertCutOff: 'KESİLMİŞ: Yüz dikey çerçevenin dışına çıkıyor.',
    alertProTip: 'UZMAN İPUCU: Eğer bu bir selfie ise, lens bozulmalarını önlemek için Yakınlaştırmayı (1.2x) kullanın.',
    canvasFaceDetected: 'Yüz algılandı',
  },
};
