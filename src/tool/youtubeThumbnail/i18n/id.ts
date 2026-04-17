import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { YoutubeThumbnailUI } from '../ui';

const slug = 'pengunduh-thumbnail-youtube-hd';
const title = 'Pengunduh Thumbnail YouTube (HD)';
const description =
  'Ekstrak dan unduh gambar thumbnail asli dari video YouTube apa pun dengan resolusi maksimum dan tanpa tanda air hanya menggunakan URL.';

const faqData = [
  {
    question: 'Berapa resolusi thumbnail yang diekstrak?',
    answer:
      "Alat ini selalu mencoba mendapatkan gambar dalam resolusi 'MaxRes' (1280x720 atau 1920x1080), yang merupakan kualitas asli yang diunggah oleh pembuat video. Jika pembuatnya tidak mengunggah thumbnail HD, secara otomatis akan menampilkan resolusi tertinggi berikutnya yang tersedia.",
  },
  {
    question: 'Jenis tautan apa yang didukung?',
    answer:
      'Mendukung URL youtube.com/watch tradisional, tautan pendek youtu.be, tautan dari ponsel, dan bahkan URL YouTube Shorts secara transparan.',
  },
  {
    question: 'Apakah legal mengunduh thumbnail YouTube?',
    answer:
      'Ya, mengunduh sepenuhnya legal untuk penggunaan pribadi, desain, parodi, dan inspirasi (Fair Use). Berhati-hatilah jika Anda akan menggunakan thumbnail yang dilindungi hak cipta untuk tujuan komersial murni, dalam kasus tersebut penting untuk memeriksa lisensi video.',
  },
  {
    question: 'Apakah ada batas penggunaan harian?',
    answer:
      'Tidak ada batas bulanan atau harian. Karena perangkat lunak ini beroperasi di sisi klien dengan menyelesaikan pola URL secara internal di browser Anda, kami tidak berinteraksi dengan API tradisional yang membatasi.',
  },
];

const howToData = [
  {
    name: 'Salin URL video',
    text: 'Buka YouTube dan salin tautan video dari bilah browser atau dari tombol bagikan.',
  },
  {
    name: 'Tempel tautan',
    text: 'Masukkan URL di kolom ekstraktor atau gunakan tombol tempel dari papan klip.',
  },
  {
    name: 'Pilih kualitas',
    text: 'Alat akan menampilkan semua resolusi yang tersedia, dari kualitas maksimum (1080p) hingga yang terendah.',
  },
  {
    name: 'Unduh gambar',
    text: 'Klik tombol unduh untuk menyimpan thumbnail di perangkat Anda.',
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

export const content: ToolLocaleContent<YoutubeThumbnailUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Dokumentation dan Referensi',
  bibliography: [
    {
      name: 'Bantuan YouTube: Menambahkan gambar thumbnail kustom',
      url: 'https://support.google.com/youtube/answer/72431',
    },
    {
      name: 'YouTube Creator Academy: Cara membuat thumbnail yang efektif',
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
      text: 'Unduh Thumbnail YouTube HD Gratis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda perlu <strong>mengunduh thumbnail video YouTube</strong> dalam ukuran asli atau kualitas maksimum (Full HD atau 4K), alat gratis ini adalah solusi tercepat. Anda bisa mendapatkan gambar sampul dari saluran mana pun untuk inspirasi, membuat desain Anda sendiri, atau menggunakannya dalam presentasi.',
    },
    {
      type: 'tip',
      title: 'Ekstrak Foto Sampul Tanpa Program',
      html: '<p>Tidak perlu menginstal perangkat lunak atau mendaftar. Anda hanya perlu menyalin dan menempelkan tautan video dan Anda dapat <strong>menyimpan thumbnail YouTube</strong> langsung di komputer atau ponsel Anda.</p>',
    },
    {
      type: 'title',
      text: 'Bagaimana cara mendapatkan thumbnail dari video YouTube?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Proses untuk <strong>mengambil foto dari video YouTube</strong> sangat sederhana. Ikuti langkah-langkah ini untuk mendapatkan gambar dalam hitungan detik:',
    },
    {
      type: 'list',
      items: [
        '<strong>1. Salin URL:</strong> Buka YouTube dan salin tautan video (baik dari bilah browser atau tombol bagikan).',
        '<strong>2. Tempel tautan:</strong> Masukkan URL ke kolom pencarian ekstraktor thumbnail kami.',
        '<strong>3. Pilih kualitas:</strong> Kami akan menunjukkan semua resolusi yang tersedia, dari kualitas maksimum (1080p) hingga terendah (360p).',
        '<strong>4. Unduh gambar:</strong> Klik tombol unduh untuk menyimpan <i>thumbnail</i> di perangkat Anda.',
      ],
    },
    {
      type: 'title',
      text: 'Format dan Resolusi yang Didukung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mengunduh sampul video YouTube belum pernah semudah ini. Alat ini secara otomatis mencari gambar terbaik yang mungkin (dikenal sebagai <strong>maxresdefault</strong>), yang biasanya merupakan desain hasil kerja Photoshop oleh para YouTuber. Jika pembuatnya tidak mengunggah gambar HD, kami akan memberikan opsi terbaik berikutnya (<strong>hqdefault</strong> atau <strong>mqdefault</strong>).',
    },
    {
      type: 'paragraph',
      html: 'Utilitas ini sangat cocok untuk <i>Community Manager</i>, desainer grafis, pembuat konten, pembuat meme, atau siapa pun yang perlu <strong>mengunduh sampul video</strong> untuk proyek mereka. Selain itu, ia kompatibel dengan <strong>YouTube Shorts</strong>, sehingga Anda juga bisa mendapatkan thumbnail-nya dengan cara yang sama.',
    },
    {
      type: 'title',
      text: 'Penggunaan Profesional Thumbnail YouTube',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Thumbnail YouTube adalah aset visual bernilai tinggi. Mereka mewakili jam kerja desain, pengujian A/B, dan optimasi CTR oleh para pembuat konten. Mengetahui cara mengakses dan mengunduhnya membuka berbagai kemungkinan profesional.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Pembuat Konten',
          html: '<p>Analisis thumbnail video viral di ceruk pasar Anda untuk memahami elemen visual apa yang menghasilkan lebih banyak klik: tipografi, warna dominan, penggunaan wajah, atau teks.</p><ul><li><strong>Benchmarking visual:</strong> Bandingkan thumbnail Anda dengan para pemimpin di sektor Anda.</li><li><strong>Iterasi desain:</strong> Unduh dan gunakan thumbnail sebagai referensi di Photoshop atau Canva.</li><li><strong>Arsip inspirasi:</strong> Bangun perpustakaan thumbnail dengan konversi tinggi.</li></ul>',
        },
        {
          type: 'card',
          title: 'Desainer dan Pemasar',
          html: '<p>Bagi seorang desainer grafis atau <i>social media manager</i>, mengakses thumbnail YouTube dengan cepat sangat penting untuk presentasi, proposal klien, dan audit visual.</p><ul><li><strong>Presentasi klien:</strong> Sertakan tangkapan layar nyata dari pesaing dalam proposal Anda.</li><li><strong>Audit merek:</strong> Evaluasi konsistensi visual saluran YouTube.</li><li><strong>Moodboards:</strong> Kumpulkan referensi visual berkualitas tinggi tanpa tangkapan layar yang buram.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kompatibilitas dengan YouTube Shorts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ekstraktor bekerja sempurna dengan <strong>YouTube Shorts</strong>. Shorts memiliki format thumbnail vertikal sendiri (9:16) yang dibuat secara otomatis dari video. Alat ini mengenali URL Shorts (<code>youtube.com/shorts/ID</code>) dan mengekstrak thumbnail terbaik yang tersedia dengan cara yang sama seperti video standar.',
    },
    {
      type: 'tip',
      title: 'Privasi Terjamin',
      html: '<p>Semua ekstraksi terjadi di browser Anda. Tidak ada URL atau data yang dikirim ke server eksternal mana pun.</p>',
    },
  ],
  ui: {
    urlPlaceholder: 'Tempel tautan YouTube di sini...',
    pasteAriaLabel: 'Tempel dari papan klip',
    helperText: 'Format yang didukung: youtube.com, youtu.be, shorts.',
    ribbonLabel: 'Kualitas Maksimum',
    downloadBtn: 'Unduh dalam Resolusi Maksimum',
    qualityMedium: 'Kualitas Sedang',
    qualityStandard: 'Kualitas Standar',
    qualityLow: 'Kualitas Rendah',
    viewImage: 'Lihat Gambar',
    errorInvalid: 'URL YouTube tidak valid. Harap periksa kembali.',
    imgAlt: 'Thumbnail HD YouTube',
  },
};
