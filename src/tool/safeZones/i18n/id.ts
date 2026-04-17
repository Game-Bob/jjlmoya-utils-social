import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SafeZonesUI } from '../ui';

const slug = 'zona-aman-sosial';
const title = 'Zona Aman Sosial: Simulator Video untuk TikTok, Reels & Shorts';
const description =
  'Pratinjau gambar dan video Anda dengan antarmuka media sosial yang nyata. Pastikan konten Anda selalu terlihat dan hindari pemotongan yang tidak disengaja.';

const faqData = [
  {
    question: "Apa itu 'Zona Aman' di media sosial?",
    answer:
      "Zona Aman adalah area layar di mana konten terlihat tanpa risiko tertutup oleh elemen antarmuka, seperti nama pengguna, deskripsi, tombol interaksi (suka, bagikan), atau pemotongan otomatis yang diterapkan oleh beberapa perangkat.",
  },
  {
    question: 'Mengapa video TikTok saya terlihat terpotong di bagian atas dan bawah?',
    answer:
      'TikTok menggunakan rasio aspek 9:16. Jika video Anda lebih lebar, aplikasi akan melakukan zoom untuk memenuhi layar, yang menyebabkan pemotongan. Selain itu, antarmuka bawah menutupi sebagian video, jadi elemen penting harus berada di tengah.',
  },
  {
    question: 'Apakah zona aman sama untuk Instagram Reels dan YouTube Shorts?',
    answer:
      'Sangat mirip tetapi tidak identik. Tombol YouTube Shorts diposisikan secara berbeda dari Reels. Alat kami memungkinkan Anda beralih di antara platform untuk memverifikasi desain Anda di semua platform tersebut.',
  },
  {
    question: 'Apa yang terjadi jika saya meletakkan teks di pojok kanan bawah?',
    answer:
      'Kemungkinan besar teks tersebut tidak akan terlihat atau sangat sulit dibaca, karena di sanalah ikon profil, hati, dan komentar berada. Idealnya, letakkan teks dan wajah di area tengah-atas (Zona Aman).',
  },
];

const howToData = [
  {
    name: 'Muat gambar atau video Anda',
    text: 'Unggah file yang ingin Anda pratinjau. Pemrosesan bersifat lokal dan pribadi — tidak ada yang diunggah ke internet.',
  },
  {
    name: 'Pilih platform',
    text: 'Pilih antara TikTok, Instagram Reels, atau YouTube Shorts untuk mengaktifkan overlay antarmuka yang sesuai.',
  },
  {
    name: 'Periksa keterbacaan',
    text: 'Verifikasi apakah teks, subtitle, atau elemen merek utama tertutup oleh ikon jejaring sosial.',
  },
  {
    name: 'Sesuaikan dan ekspor',
    text: 'Jika ada yang tersembunyi, pindahkan elemen di editor video asli Anda dan uji lagi hingga pas dengan sempurna.',
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

export const content: ToolLocaleContent<SafeZonesUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Dokumentasi Platform Resmi',
  bibliography: [
    {
      name: 'Portal Kreator TikTok: Optimasi video dan zona aman',
      url: 'https://www.tiktok.com/creators/creator-portal/en-us/foundation/video-optimization/',
    },
    {
      name: 'Instagram Business: Praktik terbaik untuk Reels',
      url: 'https://business.instagram.com/creators/reels-best-practices',
    },
    {
      name: 'Bantuan YouTube: Membuat YouTube Shorts',
      url: 'https://support.google.com/youtube/answer/10343433',
    },
    {
      name: 'Meta for Creators: Zona aman dan rasio aspek untuk video',
      url: 'https://www.facebook.com/business/help/103816146375741',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Panduan Utama Zona Aman: Optimalkan Reels, TikTok, dan Shorts Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam dunia konten vertikal yang jenuh, kesan pertama bersifat teknis. Kesalahan terbesar yang dilakukan pembuat konten adalah mengabaikan bagaimana <strong>video atau gambar</strong> mereka berinteraksi dengan antarmuka asli platform. Setiap jejaring sosial (TikTok, Instagram Reels, dan YouTube Shorts) menempatkan lapisan tombol, teks, dan profil yang dapat meniadakan dampak visual dari komposisi Anda.',
    },
    {
      type: 'paragraph',
      html: 'Alat ini memungkinkan Anda memuat file media dan melihat pratinjau bagian mana dari bingkai Anda yang akan tertutup oleh antarmuka. Ini bukan hanya tentang <strong>subtitle</strong>; ini tentang memastikan bahwa wajah, produk, atau aksi utama dalam video Anda tidak tertimbun di bawah tombol "Suka" atau deskripsi yang panjang.',
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'TikTok: Antarmuka yang paling invasif',
          html: '<p>TikTok memiliki antarmuka yang paling padat. Di sisi kanan, terdapat kolom ikon yang menempati sekitar 15% lebar layar. Di bagian bawah, deskripsi dapat memanjang hingga 4 atau 5 baris, menutupi hampir sepertiga layar dari bawah.</p><ul><li><strong>Margin bawah:</strong> Sisakan 250px terakhir agar bebas dari teks deskripsi dan nama pengguna.</li><li><strong>Margin kanan:</strong> Hindari meletakkan teks dalam jarak 100px dari tepi kanan.</li><li><strong>Atas:</strong> Tombol "Mengikuti" dan "Untuk Anda" menempati strip tengah atas.</li></ul>',
        },
        {
          type: 'card',
          title: 'IG Reels: Faktor feed',
          html: '<p>Berbeda dengan TikTok, Instagram Reels memotong video menjadi format 4:5 saat dilihat dari feed utama. Ini berarti jika Anda meletakkan informasi penting di 15% bagian atas atau bawah video 9:16 Anda, informasi tersebut akan hilang di feed.</p><ul><li><strong>Aturan 4:5:</strong> Letakkan judul dan elemen kunci di zona tengah untuk visibilitas feed.</li><li><strong>Antarmuka:</strong> Ikon Reels lebih halus daripada TikTok, memungkinkan sedikit lebih banyak margin lateral.</li><li><strong>Tombol audio:</strong> Terletak di kanan bawah, biasanya menutupi lebih sedikit daripada piringan berputar TikTok.</li></ul>',
        },
      ],
    },
    {
      type: 'title',
      text: 'YouTube Shorts: Perhatikan sisi kanan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'YouTube Shorts memiliki antarmuka yang asimetris. Tombol berlangganan sangat menonjol dan berwarna solid (biasanya hitam atau putih), menciptakan titik buta visual yang penting di kanan bawah.',
    },
    {
      type: 'list',
      items: [
        '<strong>Margin kanan:</strong> Hindari meletakkan teks atau elemen penting di 20% kanan bawah.',
        '<strong>Margin bawah:</strong> Sisakan 150px terakhir agar bebas dari teks deskripsi dan nama pengguna.',
        '<strong>Atas:</strong> Tombol "Berlangganan" dan "Lainnya" menempati strip tengah atas.',
      ],
    },
    {
      type: 'title',
      text: 'Pertanyaan Penting tentang Desain Vertikal',
      level: 2,
    },
    {
      type: 'title',
      text: 'Di mana meletakkan elemen kunci (wajah, teks, produk)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '"Zona Emas" untuk aksi utama adalah sepertiga tengah video. Jika Anda merekam seseorang, pastikan mata dan mulut mereka berada di zona ini. Elemen grafis penting harus sedikit digeser ke atas dari pusat geometris untuk menghindari deskripsi bawah.',
    },
    {
      type: 'title',
      text: 'Mengapa video saya terlihat buram setelah diunggah?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Seringkali ini bukan karena kualitas tetapi karena penskalaan. Selalu rekam dalam 1080x1920 pada 30 atau 60 fps. Hindari 4K jika Anda menerapkan banyak efek berat, karena platform mengompresi file besar secara agresif.',
    },
    {
      type: 'title',
      text: 'Bagaimana dengan bezel ponsel?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ingatlah bahwa ponsel modern memiliki notch atau lubang kamera pada layar. Alat ini menyertakan margin keamanan atas agar konten Anda tidak berbenturan dengan jam atau ikon sistem (baterai, sinyal).',
    },
    {
      type: 'title',
      text: 'Anatomi Video Viral',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mendesain untuk media sosial bukan hanya tentang estetika — ini tentang <strong>kegunaan</strong>. Jika pengguna harus berjuang untuk membaca teks karena ikon platform menutupinya, mereka akan langsung beralih ke video berikutnya. Retensi (Watch Time) turun tajam saat terjadi gesekan visual.',
    },
    {
      type: 'paragraph',
      html: 'Pada YouTube Shorts, misalnya, antarmukanya asimetris. Tombol berlangganan sangat menonjol. Dengan menggunakan simulator ini, Anda dapat menyesuaikan opasitas untuk memahami bagaimana palet warna Anda berinteraksi dengan warna UI asli.',
    },
    {
      type: 'tip',
      title: 'Alat Kontrol Kualitas Kreatif',
      html: '<p>Dirancang untuk pembuat konten yang tidak membiarkan apa pun terjadi secara kebetulan.</p>',
    },
  ],
  ui: {
    labelConfig: 'Pengaturan',
    labelPlatform: 'Platform Target',
    labelUpload: 'Unggah Konten',
    uploadPrompt: 'Pilih gambar atau video',
    uploadLink: 'Atau gunakan contoh',
    loadContent: 'Muat konten Anda',
    labelOpacity: 'Relief Antarmuka',
    labelMask: 'Gelapkan Zona Kritis',
    labelGrid: 'Aturan Sepertiga',
    btnReset: 'Atur Ulang Kanvas',
    bannerTiktok: 'Menyimulasikan TikTok 9:16',
    bannerReels: 'Menyimulasikan Instagram Reels 9:16',
    bannerShorts: 'Menyimulasikan YouTube Shorts 9:16',
    nameTiktok: 'TikTok',
    nameReels: 'IG Reels',
    nameShorts: 'YT Shorts',
    ttFollowing: 'Mengikuti',
    ttForYou: 'Untuk Anda',
    ttDescription: 'Desain antarmuka nyata untuk pembuat konten. #uxdesign #socialmedia',
    ttAudio: 'jjlmoya - Suara Asli',
    ttNavHome: 'Beranda',
    ttNavFriends: 'Teman',
    ttNavInbox: 'Kotak Masuk',
    ttNavProfile: 'Profil',
    reelsFollow: 'Ikuti',
    reelsDescription: 'Antarmuka ini identik dengan aslinya. #reels #ux #simulator',
    reelsAudio: 'Musik Sedang Tren - Audio Asli',
    shortsSubscribe: 'BERLANGGANAN',
    shortsDislike: 'Tidak Suka',
    shortsShare: 'Bagikan',
    shortsRemix: 'Remix',
    shortsDescription: 'Menyimulasikan antarmuka nyata untuk Shorts! #youtube #shorts',
  },
};
