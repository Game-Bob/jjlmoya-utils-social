import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RedditFormatterUI } from '../ui';

const slug = 'pemformat-teks-reddit';
const title = 'Pemformat Teks Reddit: Pembersih dan Perbaikan Markdown';
const description =
  'Pembersih teks canggih untuk posting di Reddit. Memperbaiki jeda baris yang hilang, menghapus spasi ganda dan karakter tersembunyi yang merusak Markdown.';

const faqData = [
  {
    question: 'Mengapa teks saya di Reddit kehilangan jeda barisnya?',
    answer:
      'Reddit menggunakan Markdown, yang mengharuskan Anda menekan spasi ganda di akhir baris sebelum menekan Enter untuk jeda baris normal, atau menekan Enter dua kali untuk membuat paragraf baru. Alat kami menangani ini secara otomatis dengan memasukkan jeda baris ganda.',
  },
  {
    question: 'Apa itu karakter tersembunyi atau tidak terlihat?',
    answer:
      'Saat menyalin dari pengolah kata yang kompleks, penanda pemformatan dengan lebar nol sering kali ikut terbawa. Elemen-elemen ini tidak terlihat pada halaman web normal tetapi dapat merusak ekosistem Markdown.',
  },
  {
    question: 'Apakah aman menggunakan pembersih teks ini?',
    answer:
      'Sangat aman. Skrip berjalan sepenuhnya di sisi klien (di browser Anda sendiri). Teks Anda tidak pernah dikirim ke server mana pun dan tidak ada orang lain yang akan memiliki akses ke apa yang Anda tempel di sini.',
  },
  {
    question: 'Dapatkah saya menggunakan ini untuk Twitter atau jejaring lainnya?',
    answer:
      'Ya, selain memperbaiki postingan Reddit, menghapus spasi ganda dan karakter aneh berguna untuk publikasi apa pun di blog, Twitter, forum phpBB lama atau platform sosial lainnya di mana Anda memerlukan teks yang bersih dan netral.',
  },
];

const howToData = [
  {
    name: 'Tempel teks Anda',
    text: 'Salin teks Anda dari Word, Google Docs atau sumber mana pun dan tempelkan ke kolom input.',
  },
  {
    name: 'Pilih opsi',
    text: 'Aktifkan atau nonaktifkan opsi tergantung pada apa yang Anda butuhkan: perbaiki paragraf, hapus spasi, atau bersihkan karakter tersembunyi.',
  },
  {
    name: 'Tinjau hasilnya',
    text: 'Teks bersih muncul secara real time di kolom output, siap untuk dipublikasikan.',
  },
  {
    name: 'Salin dan posting',
    text: 'Klik "Salin Teks" dan tempelkan langsung ke Reddit atau forum apa pun.',
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

export const content: ToolLocaleContent<RedditFormatterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    {
      name: 'Bantuan Reddit: Memformat teks dalam postingan dan komentar',
      url: 'https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-text-in-posts-and-comments',
    },
    {
      name: 'Panduan Markdown Reddit',
      url: 'https://www.reddit.com/wiki/markdown/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Alat Pemformatan Utama untuk Reddit dan Forum Web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Membuat postingan di Reddit atau platform mana pun yang bergantung pada Markdown bisa membuat frustrasi. Masalah umum saat menyalin dan menempel teks dari pengolah kata yang kompleks atau halaman web adalah jeda baris yang berubah. Saat Anda mengirimkan konten, konten tersebut sering kali menjadi blok padat yang sulit dibaca, mengabaikan struktur paragraf aslinya. Alat pemformatan kami menyelesaikan masalah ini dari akarnya.',
    },
    {
      type: 'title',
      text: 'Cara Kerja Pembersih Teks Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mesin pemroses menjalankan beberapa filter pada teks Anda secara real time. Pertama, ia menangani jeda baris. Reddit membutuhkan format khusus di mana jeda paragraf membutuhkan dua baris baru dalam kode sumber Markdown. Pembersih menganalisis teks Anda dan secara otomatis mengubah jeda baris tunggal menjadi jeda ganda, menjaga paragraf yang ada tetap utuh untuk menghindari pembuatan spasi yang berlebihan.',
    },
    {
      type: 'paragraph',
      html: 'Kedua, alat ini menghapus karakter yang tidak terlihat dan spasi ganda. Saat menyalin teks dari situs web, karakter dengan lebar nol baisanya ikut terbawa yang merusak pemformatan atau menyebabkan perilaku aneh di forum. Pembersih membersihkan elemen web yang mengganggu ini dan menormalkan spasi berulang menjadi satu spasi bersih. Secara opsional, Anda dapat menghapus semua hyperlink mentah dari konten Anda untuk memposting teks yang sepenuhnya netral.',
    },
    {
      type: 'title',
      text: 'Manfaat Menggunakan Pembersih Teks Khusus',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Keterbacaan yang Dioptimalkan:</strong> Memastikan pembaca Anda di Reddit melihat teks yang terstruktur dengan baik, bukan dinding kata-kata yang mengintimidasi.',
        '<strong>Hemat Waktu:</strong> Lupakan menekan Enter ratusan kali untuk memperbaiki pemformatan yang rusak. Tempel konten Anda dan salin hasilnya dalam waktu kurang dari satu detik.',
        '<strong>Penghapusan Metadata dan Sampah Web:</strong> Melindungi postingan Anda dari gaya atau jeda aneh yang disebabkan oleh spasi lebar nol.',
        '<strong>Privasi Tinggi:</strong> Semua pemrosesan dilakukan di sisi klien. Teks tidak pernah meninggalkan browser Anda atau disimpan di server eksternal.',
      ],
    },
    {
      type: 'title',
      text: 'Masalah dengan Pengolah Kata dan Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aplikasi seperti Microsoft Word atau Google Docs menambahkan lapisan pemformatan kaya yang tidak terlihat pada teks mereka. Saat Anda menyalin dan menempelkan konten tersebut secara langsung ke editor dasar atau mode Markdown Reddit, pemformatan kaya tersebut menghilang dan yang tersisa sering kali merupakan amalgam tanpa struktur. Reddit menggunakan varian Markdown yang cukup ketat. Jika Anda tidak terbiasa dengan sintaksis Reddit atau hanya menginginkan proses yang lebih lancar saat mentransfer esai atau cerita ke forum, membersihkan teks di sini terlebih dahulu mencegah postingan Anda menerima downvote hanya karena tidak mungkin dibaca dengan nyaman.',
    },
    {
      type: 'title',
      text: 'Praktik Terbaik untuk Posting di Forum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pemformatan yang benar sangat penting untuk menghasilkan diskusi dan mempertahankan perhatian komunitas. Postingan dengan baris yang sangat panjang atau paragraf yang tidak ada sering kali ditinggalkan setelah beberapa kalimat pertama. Gunakan alat pembersih ini untuk membangun fondasi struktural. Kemudian, tambahkan pemformatan seperti tebal dan miring secara strategis di dalam editor Reddit itu sendiri untuk menyoroti ide-ide kunci. Selalu tinjau pratinjau dan manfaatkan daftar terstruktur untuk merinci poin-pon penting atau panduan mendetail.',
    },
    {
      type: 'title',
      text: 'Contoh Transformasi',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Sebelum dan sesudah pemformat',
      html: '<p><strong>Teks asli yang ditempel:</strong></p><pre>Halo ini baris pertama\ndan ini seharusnya menjadi baris kedua\ntapi di Reddit semuanya menyatu saat Anda menempelnya.</pre><p><strong>Teks yang diformat:</strong></p><pre>Halo ini baris pertama\n\ndan ini seharusnya menjadi baris kedua\n\ntapi di Reddit semuanya menyatu saat Anda menempelnya.</pre>',
    },
    {
      type: 'title',
      text: 'Pertanyaan yang Sering Diajukan tentang Pemformat Teks Reddit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Menemukan jawaban yang tepat tentang cara berinteraksi dengan aturan editorial Reddit tidak selalu jelas. Periksa bagian FAQ di mana kami membahas pertanyaan utama tentang format yang valid dan cara menghindari penalti karena dinding teks yang masif.',
    },
  ],
  ui: {
    labelInput: 'Teks Asli',
    placeholderInput: 'Tempel teks asli Anda di sini...',
    labelOptions: 'Opsi Pemformatan',
    optionParagraphs: 'Perbaiki Paragraf gaya Reddit',
    optionSpaces: 'Hapus spasi ganda',
    optionInvisible: 'Bersihkan karakter web tersembunyi',
    optionLinks: 'Ekstrak URL (Hanya teks)',
    labelOutput: 'Teks Bersih',
    placeholderOutput: 'Hasil pembersihan akan muncul di sini...',
    btnCopy: 'Salin Teks',
    btnCopied: 'Disalin',
  },
};
