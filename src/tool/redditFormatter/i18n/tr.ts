import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'reddit-metin-bicimlendirici';
const title = 'Reddit Metin Biçimlendirici: Temizleyici ve Markdown Düzeltici';
const description =
  'Reddit\'te paylaşım yapmak için gelişmiş metin temizleyici. Eksik satır sonlarını düzeltir, Markdown\'ı bozan birden fazla boşluğu ve gizli karakterleri kaldırır.';

const faqData = [
  {
    question: 'Reddit\'teki metnim neden satır sonlarını kaybediyor?',
    answer:
      'Reddit, normal bir satır sonu için Enter\'a basmadan önce satırın sonuna çift boşluk bırakmanızı veya yeni bir paragraf oluşturmak için Enter\'a iki kez basmanızı gerektiren Markdown kullanır. Aracımız, çift satır sonu ekleyerek bunu otomatik olarak halleder.',
  },
  {
    question: 'Gizli veya görünmez karakterler nelerdir?',
    answer:
      'Karmaşık kelime işlemcilerden kopyalama yaparken, genellikle sıfır genişlikli biçimlendirme işaretçileri eklenir. Bu öğeler normal web sayfalarında görünmezdir ancak Markdown ekosistemini bozabilir.',
  },
  {
    question: 'Bu metin temizleyiciyi kullanmak güvenli mi?',
    answer:
      'Tamamen güvenli. Kod tamamen istemci tarafında (kendi tarayıcınızda) çalışır. Metniniz asla herhangi bir sunucuya gönderilmez ve buraya yapıştırdığınız metne başka kimse erişemez.',
  },
  {
    question: 'Bunu Twitter veya diğer ağlar için kullanabilir miyim?',
    answer:
      'Evet, Reddit gönderilerini düzeltmenin yanı sıra, birden fazla boşluğu ve garip karakterleri kaldırmak blaglarda, Twitter\'da, eski phpBB forumlarında veya temiz, nötr metne ihtiyaç duyduğunuz diğer sosyal platformlarda paylaşım yapmak için yararlıdır.',
  },
];

const howToData = [
  {
    name: 'Metninizi yapıştırın',
    text: 'Metninizi Word, Google Dokümanlar veya herhangi bir kaynaktan kopyalayın ve giriş alanına yapıştırın.',
  },
  {
    name: 'Seçenekleri seçin',
    text: 'İhtiyacınıza göre seçenekleri açın veya kapatın: paragrafları düzeltin, boşlukları kaldırın veya gizli karakterleri temizleyin.',
  },
  {
    name: 'Sonucu inceleyin',
    text: 'Temiz metin, çıktı alanında gerçek zamanlı olarak görünür ve yayınlanmaya hazır hale gelir.',
  },
  {
    name: 'Kopyalayın ve paylaşın',
    text: '"Metni Kopyala"ya tıklayın ve doğrudan Reddit\'e veya herhangi bir forumda paylaşın.',
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

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    {
      name: 'Reddit Yardımı: Gönderilerde ve yorumlarda metni biçimlendirme',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Reddit Markdown kılavuzu',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Reddit ve Web Forumları İçin En İyi Biçimlendirme Aracı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Reddit\'te veya Markdown\'a dayanan herhangi bir platformda gönderi oluşturmak sinir bozucu olabilir. Karmaşık kelime işlemcilerden veya web sayfalarından metin kopyalayıp yapıştırırken karşılaşılan yaygın bir sorun, satır sonlarının değişmesidir. İçeriği gönderdiğinizde, genellikle orijinal paragraf yapısını görmezden gelen, okunması zor, katı bir blok haline gelir. Biçimlendirme aracımız bu sorunu kökten çözer.',
    },
    {
      type: 'title',
      text: 'Reddit Metin Temizleyici Nasıl Çalışır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'İşleme motoru, metniniz üzerinde gerçek zamanlı olarak birden fazla filtre çalıştırır. İlk olarak, satır sonlarını ele alır. Reddit, paragraf sonu için Markdown kaynak kodunda iki yeni satır gerektiren özel bir biçim gerektirir. Temizleyici metninizi analiz eder ve aşırı boşluk oluşmasını önlemek için mevcut paragrafları bozmadan tek satır sonlarını otomatik olarak çift satır sonuna dönüştürür.',
    },
    {
      type: 'paragraph',
      html: 'İkinci olarak, araç görünmez karakterleri ve birden fazla boşluğu kaldırır. Web sitelerinden metin kopyalarken, biçimlendirmeyi bozan veya forumlarda garip davranışlara neden olan sıfır genişlikli karakterlerin taşınması yaygındır. Temizleyici, bu araya giren web öğelerini temizler ve tekrarlanan boşlukları tek bir temiz boşluğa normalleştirir. İsteğe bağlı olarak, tamamen nötr bir metin paylaşmak için içeriğinizdeki tüm ham köprüleri kaldırabilirsiniz.',
    },
    {
      type: 'title',
      text: 'Uzman Metin Temizleyici Kullanmanın Faydaları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Optimize Edilmiş Okunabilirlik:</strong> Reddit\'teki okuyucularınızın, göz korkutucu bir kelime duvarı yerine düzgün yapılandırılmış bir metin görmesini sağlar.',
        '<strong>Zaman Tasarrufu:</strong> Bozuk biçimlendirmeyi düzeltmek için yüzlerce kez Enter\'a basmayı unutun. İçeriğinizi yapıştırın ve bir saniyeden kısa sürede hazır olanı kopyalayın.',
        '<strong>Meta Veri ve Web Gereksizlerinin Kaldırılması:</strong> Gönderinizi sıfır genişlikli boşlukların neden olduğu garip stillerden veya bozulmalardan korur.',
        '<strong>Yüksek Gizlilik:</strong> Tüm işlemler istemci tarafında gerçekleşir. Metin asla tarayıcınızdan çıkmaz veya harici sunucularda saklanmaz.',
      ],
    },
    {
      type: 'title',
      text: 'Kelime İşlemciler ve Reddit ile İlgili Sorun',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Microsoft Word veya Google Dokümanlar gibi uygulamalar, metinlerinin üzerine görünmez bir zengin biçimlendirme katmanı ekler. Bu içeriği doğrudan Reddit\'in temel düzenleyicisine veya Markdown moduna kopyalayıp yapıştırdığınızda, zengin biçimlendirme kaybolur ve geriye kalan genellikle yapısız bir karışım olur. Reddit oldukça katı bir Markdown varyantı kullanır. Reddit\'in sözdizimine aşina değilseniz veya makaleleri veya hikayeleri foruma aktarırken daha sorunsuz bir süreç istiyorsanız, metni önce burada temizlemek, gönderinizin sadece rahat okunamadığı için eksi oy almasını önler.',
    },
    {
      type: 'title',
      text: 'Forumlarda Paylaşım Yapmak İçin En İyi Uygulamalar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Doğru biçimlendirme, tartışma yaratmak ve topluluğun ilgisini çekmek için hayati önem taşır. Çok uzun satırlara veya olmayan paragraflara sahip gönderiler, genellikle ilk birkaç cümleden sonra terk edilir. Yapısal temelleri atmak için bu temizleme aracını kullanın. Ardından, ana fikirleri vurgulamak için Reddit düzenleyicisinin içinde stratejik olarak kalın ve italik gibi biçimlendirmeler ekleyin. Her zaman önizlemeyi gözden geçirin ve önemli noktaları veya ayrıntılı kılavuzları numaralandırmak için yapılandırılmış listelerden yararlanın.',
    },
    {
      type: 'title',
      text: 'Dönüşüm Örneği',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Biçimlendiriciden önce ve sonra',
      html: '<p><strong>Orijinal yapıştırılan metin:</strong></p><pre>Merhaba bu ilk satır\nve bunun ikinci satır olması gerekiyordu\nama Reddit\'te yapıştırdığınızda her şey birbirine giriyor.</pre><p><strong>Biçimlendirilmiş metin:</strong></p><pre>Merhaba bu ilk satır\n\nve bunun ikinci satır olması gerekiyordu\n\nama Reddit\'te yapıştırdığınızda her şey birbirine giriyor.</pre>',
    },
    {
      type: 'title',
      text: 'Reddit Metin Biçimlendirici hakkında Sıkça Sorulan Sorular',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Reddit\'in editoryal kurallarıyla nasıl etkileşim kurulacağına dair doğru cevapları bulmak her zaman açık değildir. Geçerli biçimler ve dev metin duvarları nedeniyle cezalandırılmaktan nasıl kaçınılacağı konusundaki ana soruları yanıtladığımız SSS bölümüne göz atın.',
    },
  ],
  ui: {
    labelInput: 'Orijinal Metin',
    placeholderInput: 'Orijinal metninizi buraya yapıştırın...',
    labelOptions: 'Biçimlendirme Seçenekleri',
    optionParagraphs: 'Reddit Tarzı Paragrafları Düzelt',
    optionSpaces: 'Birden fazla boşluğu kaldır',
    optionInvisible: 'Gizli web karakterlerini temizle',
    optionLinks: 'URL\'leri ayıkla (Yalnızca metin)',
    labelOutput: 'Temiz Metin',
    placeholderOutput: 'Temizleme sonucu burada görünecek...',
    btnCopy: 'Metni Kopyala',
    btnCopied: 'Kopyalandı',
  },
};
