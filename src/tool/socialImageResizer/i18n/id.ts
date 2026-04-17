import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SocialImageResizerUI } from '../ui';

const slug = 'pengubah-ukuran-gambar-media-sosial';
const title = 'Pengubah Ukuran Gambar Media Sosial: Potong & Ubah Ukuran untuk Setiap Platform';
const description =
  'Ubah ukuran dan potong foto Anda untuk Instagram, TikTok, YouTube, dan lainnya. Pemotongan cerdas dengan dimensi resmi terbaru untuk tahun 2026.';

const faqData = [
  {
    question: 'Apakah kualitas gambar akan hilang saat mengubah ukuran?',
    answer:
      'Tidak, kami menggunakan algoritma penghalusan berkualitas tinggi. Disarankan untuk mengunggah gambar asli dengan resolusi yang sama atau lebih besar dari format target.',
  },
  {
    question: 'Apakah aman mengunggah foto saya di sini?',
    answer:
      'Sangat aman. Pemrosesan dilakukan secara lokal di browser Anda menggunakan Canvas API. Foto Anda tidak pernah dikirim ke server mana pun.',
  },
  {
    question: 'Format apa saja yang didukung?',
    answer:
      'Kami mendukung JPG, PNG, WebP, dan AVIF untuk pengunggahan. Unduhan dioptimalkan sebagai JPG berkualitas tinggi untuk kompatibilitas maksimum.',
  },
];

const howToData = [
  {
    name: 'Unggah gambar Anda',
    text: 'Seret file Anda atau telusuri perangkat Anda untuk memulai proses.',
  },
  {
    name: 'Pilih format',
    text: 'Pilih jejaring sosial dan jenis publikasi yang Anda butuhkan dari menu samping.',
  },
  {
    name: 'Sesuaikan dan unduh',
    text: 'Bingkai foto Anda dengan menyeretnya dan gunakan zoom untuk pemotongan yang sempurna. Jika sudah selesai, klik unduh.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<SocialImageResizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    {
      name: 'MDN Web Docs: Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Sprout Social: Panduan Ukuran Gambar Media Sosial 2026',
      url: 'https://sproutsocial.com/insights/social-media-image-sizes-guide/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pengubah Ukuran Gambar Media Sosial untuk Setiap Platform',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam ekosistem digital saat ini, kesan pertama adalah visual. Setiap jejaring sosial beroperasi di bawah algoritma spesifik yang memprioritaskan konten yang diadaptasi secara asli ke proporsinya. Pengubah ukuran gambar media sosial kami bukan sekadar alat teknis — ini adalah sekutu Anda untuk memastikan pesan Anda sampai tanpa pemotongan yang tidak diinginkan atau kehilangan kualitas.',
    },
    {
      type: 'paragraph',
      html: 'Baik Anda perlu mengonversi foto lanskap menjadi vertikal yang mencolok untuk Instagram Stories atau mengadaptasi desain untuk banner YouTube yang kompleks, utilitas kami menggunakan sistem pemotongan cerdas yang memungkinkan Anda memposisikan dan menskalakan gambar dengan presisi langsung di browser Anda.',
    },
    {
      type: 'title',
      text: 'Ukuran Gambar Media Sosial Resmi 2026',
      level: 3,
    },
    {
      type: 'grid',
      columns: [
        { title: 'Instagram — Postingan Kotak', body: '1080 × 1080 px · Rasio 1:1' },
        { title: 'Instagram — Postingan Vertikal', body: '1080 × 1350 px · Rasio 4:5' },
        { title: 'TikTok / Reels — Vertikal', body: '1080 × 1920 px · Rasio 9:16' },
        { title: 'YouTube — Thumbnail', body: '1280 × 720 px · Rasio 16:9' },
        { title: 'YouTube — Banner Channel', body: '2560 × 1440 px · Rasio 16:9' },
        { title: 'X (Twitter) — Postingan Standar', body: '1200 × 675 px · Rasio 16:9' },
        { title: 'LinkedIn — Sampul Profil', body: '1584 × 396 px · Rasio 4:1' },
      ],
    },
    {
      type: 'grid',
      columns: [
        {
          title: 'Instagram',
          body: 'Format kotak 1:1 tetap menjadi klasik, tetapi vertikal 4:5 memakan lebih banyak ruang layar dan menghasilkan keterlibatan hingga 30% lebih banyak di feed berita.',
        },
        {
          title: 'Konten Bentuk Pendek',
          body: 'Untuk TikTok dan Reels, standarnya adalah 9:16. Format imersif ini menuntut titik fokus sejajar sempurna untuk menghindari tertutup oleh UI aplikasi.',
        },
        {
          title: 'Keterlibatan Visual',
          body: 'Dari thumbnail hingga banner, setiap aset memiliki bobot tertentu dalam rasio klik-tayang. Pemotongan yang tepat memastikan teks dan elemen kunci selalu terbaca.',
        },
        {
          title: 'Branding Profesional',
          body: 'Pada jaringan profesional seperti LinkedIn, ketajaman adalah otoritas. Header memerlukan rasio spesifik agar tidak terlihat pecah pada layar kepadatan tinggi.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Rasio Aspek Penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rasio aspek adalah hubungan proporsional antara lebar dan tinggi sebuah gambar. Mengabaikannya memaksa platform untuk melakukan zoom atau menambahkan bilah hitam, yang merusak estetika dan jangkauan organik.',
    },
    {
      type: 'list',
      items: [
        'Mencegah teks atau logo terpotong oleh ikon aplikasi asli.',
        'Mempertahankan kerapatan piksel optimal tanpa mendistorsi atau meregangkan foto asli.',
        'Menghemat waktu dengan memusatkan semua pengukuran resmi dalam satu alat web.',
        'Meningkatkan kecepatan pemuatan dengan menghasilkan file dengan berat dan dimensi yang tepat.',
      ],
    },
    {
      type: 'tip',
      title: 'Tips Komposisi',
      html: '<p>Saat menggunakan fitur seret manual kami, cobalah meletakkan subjek utama foto Anda di salah satu titik potong kisi. Ini menciptakan komposisi yang lebih dinamis dan profesional untuk jaringan sosial Anda.</p>',
    },
    {
      type: 'title',
      text: 'Langkah-langkah untuk Pemotongan Sempurna',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Pilih format Anda: Pilih platform dan jenis publikasi dari menu samping.',
        'Unggah gambar: Seret file Anda atau gunakan pemilih file untuk mengimpor foto Anda.',
        'Sesuaikan bingkai: Seret foto di dalam area yang terlihat dan gunakan zoom untuk presisi.',
        'Ekspor instan: Klik unduh untuk menyiapkan gambar Anda untuk diterbitkan.',
      ],
    },
    {
      type: 'title',
      text: 'Privasi dan Pemrosesan Lokal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Privasi Anda mutlak. Pengubah ukuran ini memproses gambar secara lokal di browser Anda menggunakan Canvas API. Foto Anda tidak pernah diunggah ke server eksternal mana pun, menjamin keamanan lengkap dan kecepatan pemrosesan instan.',
    },
    {
      type: 'title',
      text: 'Optimasi Profesional untuk Media Sosia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mengadaptasi konten visual Anda secara profesional adalah strategi pertumbuhan langsung. Alat kami menyederhanakan alur kerja bagi kreator dan manajer komunitas, memastikan setiap postingan terlihat sempurna di perangkat dan platform apa pun.',
    },
  ],
  ui: {
    sidebarTitle: 'Format Sosial',
    uploadTitle: 'Unggah Gambar',
    uploadSubtitle: 'Seret foto Anda ke sini atau klik untuk mencari',
    btnReset: 'Atur Ulang',
    btnDownload: 'Unduh Gambar',
  },
};
