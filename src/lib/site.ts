// ============================================================
//  DATA PUSAT — BAHAGIYA TAYLOR GROUPS
//  Konveksi, Pesanan Khusus, Grosir & Retail — Tasikmalaya
//  Identitas legal: Perseroan Perorangan BAHAGIYA TAYLOR GROUPS,
//  disahkan Kemenkumham RI (SK AHU-A138368.AH.01.30.Tahun 2026,
//  9 November 2026) — berkedudukan di Kab. Tasikmalaya.
//  Catatan: data perizinan/NPWP/KBLI/keuangan sifatnya RAHASIA dan
//  sengaja TIDAK dimuat di situs publik ini.
// ============================================================

// Nomor WhatsApp resmi (format internasional tanpa "+")
// Angka saja tanpa "+", contoh: 6281234567890
export const WHATSAPP_NUMBER = "6282120641493";

// Tampilan nomor telepon dengan format mudah dibaca
// ⚠️ Sinkronkan dengan WHATSAPP_NUMBER di atas.
export const PHONE_DISPLAY = "+62 821-2064-1493";

// TODO: Ganti dengan akun Instagram asli
export const INSTAGRAM_HANDLE = "@bahagiyataylorgroups";

export const SITE = {
  name: "Bahagiya Taylor Groups",
  brandLine: "Konveksi & Produsen Busana",
  shortName: "Bahagiya Taylor",
  tagline: "Menjahit Kualitas, Merajut Kepercayaan",
  estYear: 2026,
  type: "Konveksi & Produsen Busana",
  city: "Tasikmalaya",
  province: "Jawa Barat",
  provinceShort: "Jawa Barat",
  address: {
    street: "Kp. Cisodong, RT 008 / RW 004",
    urbanVillage: "Desa Cikalong",
    district: "Kecamatan Cikalong",
    cityFull: "Kabupaten Tasikmalaya",
    provinceShort: "Jawa Barat",
  },
  addressOneLine:
    "Kp. Cisodong RT 008 / RW 004, Cikalong, Kec. Cikalong, Kabupaten Tasikmalaya, Jawa Barat 46195",
  operationalHours: "Senin – Sabtu, 08.00 – 17.00 WIB",
  mapsQuery:
    "Kp.%20Cisodong%2C%20Cikalong%2C%20Kabupaten%20Tasikmalaya%2C%20Jawa%20Barat",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kp.%20Cisodong%2C%20Cikalong%2C%20Kabupaten%20Tasikmalaya%2C%20Jawa%20Barat",
  mapsEmbed:
    "https://maps.google.com/maps?q=Kp.%20Cisodong%2C%20Cikalong%2C%20Kabupaten%20Tasikmalaya%2C%20Jawa%20Barat&z=15&ie=UTF8&iwloc=&output=embed",
} as const;

export const waLink = (customMessage?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    customMessage ? `?text=${encodeURIComponent(customMessage)}` : ""
  }`;

export const DEFAULT_WA_MESSAGE =
  "Assalamualaikum, saya ingin bertanya tentang layanan produksi di Bahagiya Taylor Groups.";

// ---------- Statistik (angka faktual & aman) ----------
export const STATS = [
  { value: 2026, suffix: "", label: "Tahun Berdiri", plain: true },
  { value: 4, suffix: "", label: "Pilar Usaha", plain: false },
  { value: 9, suffix: "+", label: "Kategori Produk", plain: false },
  { value: 18, suffix: "", label: "Bidang Usaha (KBLI)", plain: false },
] as const;

// ---------- Pita berjalan ----------
export const MARQUEE_ITEMS = [
  "Produksi Konveksi",
  "Pesanan Khusus & Kustom",
  "Grosir & Distribusi",
  "Penjualan Retail",
  "Seragam Sekolah & Instansi",
  "Kaos & Polo Shirt",
  "Jersey & Sportswear",
  "Jaket & Hoodie",
  "Gamis, Mukena & Koko",
  "Kebaya Custom",
  "Bordir & Sablon",
] as const;

// ---------- Empat Pilar Usaha ----------
export const PILLARS = [
  {
    num: "01",
    icon: "factory",
    title: "Produksi Konveksi",
    subtitle: "Produksi massal pakaian jadi",
    desc: "Produksi pakaian jadi dalam jumlah besar — kaos, seragam, kemeja, celana, jaket, hingga busana muslim — dengan jahitan rapi, warna konsisten antar batch, dan kontrol kualitas di setiap tahap.",
    points: ["Produksi massal & borongan", "Kontrol kualitas per batch", "Kapasitas menyesuaikan pesanan"],
  },
  {
    num: "02",
    icon: "scissors",
    title: "Pesanan Khusus",
    subtitle: "Penjahitan kustom & kustomisasi",
    desc: "Pakaian dibuat khusus mengikuti ukuran, desain, dan permintaan pelanggan — seragam khusus, kebaya, busana custom, hingga detail desain eksklusif yang tidak tersedia di pasaran.",
    points: ["Ukuran & desain khusus", "Sampel disetujui lebih dulu", "Konsultasi bahan & model"],
  },
  {
    num: "03",
    icon: "boxes",
    title: "Grosir & Distribusi",
    subtitle: "Penjualan partai besar",
    desc: "Suplai pakaian dalam jumlah besar untuk toko, agen, reseller, distributor, dan pelanggan bisnis — harga produsen langsung tanpa perantara, kemasan rapi siap kirim.",
    points: ["Harga langsung dari produsen", "Suplai rutin & stabil", "Siap kirim ke seluruh Indonesia"],
  },
  {
    num: "04",
    icon: "store",
    title: "Penjualan Retail",
    subtitle: "Penjualan langsung satuan",
    desc: "Belanja langsung satuan tanpa ribet — kaos, kemeja, celana, jaket, mukena, hingga pakaian olahraga. Datang ke workshop atau pesan lewat WhatsApp.",
    points: ["Beli satuan langsung", "Katalog produk lengkap", "Terbuka untuk umum"],
  },
] as const;

// ---------- Delapan jalur layanan produksi ----------
export const SERVICES = [
  {
    icon: "school",
    title: "Seragam Sekolah & Instansi",
    desc: "Seragam SD–SMA, almamater, ospek, hingga seragam instansi dengan ketelitian ukuran tinggi dan warna konsisten lintas batch.",
  },
  {
    icon: "shirt",
    title: "Kaos & Polo Shirt",
    desc: "Kaos polos, kaos event, dan polo bordir — cotton combed 30s/24s, pique, hingga bahan performance yang nyaman dan awet.",
  },
  {
    icon: "dumbbell",
    title: "Jersey & Pakaian Olahraga",
    desc: "Jersey futsal, basket, dan komunitas dengan desain full color, aksen nama & nomor, bahan ringan cepat kering.",
  },
  {
    icon: "jacket",
    title: "Jaket & Hoodie",
    desc: "Jaket bomber, varsity, windbreaker, dan hoodie dengan jahitan kuat, resleting halus, serta detail bordir khas brand Anda.",
  },
  {
    icon: "flower",
    title: "Gamis & Busana Muslim",
    desc: "Gamis, tunik, koko, dan mukena dengan potongan elegan dan bahan jatuh sempurna — untuk retail, event, maupun personal.",
  },
  {
    icon: "briefcase",
    title: "Seragam Kerja & Lapangan",
    desc: "Kemeja dan seragam lapangan untuk perusahaan, pabrik, hotel, dan tim marketing — awet, fungsional, dan profesional.",
  },
  {
    icon: "sparkles",
    title: "Bordir & Sablon",
    desc: "Bordir komputer, sablon manual, dan DTF dengan ketahanan tinggi. Logo dan desain Anda kami reproduksi akurat.",
  },
  {
    icon: "scissors",
    title: "Jahitan Kustom & Kebaya",
    desc: "Pesanan khusus per ukuran dan desain — kebaya, busana custom, dan pakaian yang dibuat benar-benar personal.",
  },
] as const;

// ---------- Katalog produk ----------
export type ProductCategory =
  | "Kaos & Atasan"
  | "Seragam"
  | "Olahraga"
  | "Busana Muslim"
  | "Outerwear"
  | "Kustom";

export const PRODUCT_FILTERS = [
  "Semua",
  "Kaos & Atasan",
  "Seragam",
  "Olahraga",
  "Busana Muslim",
  "Outerwear",
  "Kustom",
] as const;

export const PRODUCTS: {
  name: string;
  category: ProductCategory;
  image: string;
  desc: string;
  tag?: string;
}[] = [
  {
    name: "Kaos Polos & Sablon",
    category: "Kaos & Atasan",
    image: "/images/prod-kaos.png",
    desc: "Cotton combed yang lembut, jahitan rapi, pilihan warna lengkap — untuk event, komunitas, maupun brand Anda.",
    tag: "Terlaris",
  },
  {
    name: "Kemeja Pria & Wanita",
    category: "Kaos & Atasan",
    image: "/images/prod-kemeja.png",
    desc: "Kemeja kerja dan formal dengan potongan rapi, kancing kuat, dan bahan yang adem untuk iklim tropis.",
  },
  {
    name: "Polo Shirt Bordir",
    category: "Kaos & Atasan",
    image: "/images/prod-polo.png",
    desc: "Pique premium dengan bordir emblem — favorit seragam perusahaan, hotel, dan tim marketing.",
  },
  {
    name: "Seragam Sekolah & Instansi",
    category: "Seragam",
    image: "/images/prod-seragam.png",
    desc: "Putih bersih dengan potongan seragam presisi — konsisten untuk satu angkatan, dari SD hingga instansi.",
    tag: "Unggulan",
  },
  {
    name: "Jersey & Seragam Olahraga",
    category: "Olahraga",
    image: "/images/prod-jersey.png",
    desc: "Desain full color bebas ekspresi, bahan ringan menyerap keringat, siap untuk laga setiap pekan.",
  },
  {
    name: "Jaket & Hoodie",
    category: "Outerwear",
    image: "/images/prod-jaket.png",
    desc: "Bomber, varsity, dan hoodie dengan jahitan kuat serta finishing bersih kelas brand apparel.",
  },
  {
    name: "Gamis & Set Muslimah",
    category: "Busana Muslim",
    image: "/images/prod-gamis.png",
    desc: "Drape jatuh anggun dengan bahan nyaman — cocok untuk retail busana muslim maupun pesanan personal.",
  },
  {
    name: "Mukena & Koko",
    category: "Busana Muslim",
    image: "/images/prod-mukena.png",
    desc: "Mukena ber-detail dan koko premium — penjualan retail satuan maupun pesanan masjid dan pesantren.",
  },
  {
    name: "Kebaya & Busana Kustom",
    category: "Kustom",
    image: "/images/prod-kebaya.png",
    desc: "Pesanan khusus per ukuran dan desain — kebaya modern hingga tradisional, dibuat benar-benar personal.",
    tag: "Custom",
  },
];

// ---------- Alur kerja ----------
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Konsultasi & Estimasi",
    desc: "Ceritakan kebutuhan Anda: jenis busana, jumlah, bahan, dan target waktu. Kami berikan estimasi yang jelas dan transparan tanpa biaya tersembunyi.",
  },
  {
    step: "02",
    title: "Desain & Pemilihan Bahan",
    desc: "Tim kami menyiapkan desain, pola, dan rekomendasi bahan terbaik. Setiap detail dibicarakan bersama sebelum lanjut.",
  },
  {
    step: "03",
    title: "Sampel Disetujui",
    desc: "Sebelum produksi berjalan, sampel fisik dibuat untuk Anda nilai. Revisi dilakukan sampai Anda benar-benar puas.",
  },
  {
    step: "04",
    title: "Produksi & Quality Control",
    desc: "Cutting, penjahitan, dan finishing dikerjakan oleh penjahit berpengalaman. Setiap potong diperiksa: kesimetrian, warna, ukuran, dan kebersihan.",
  },
  {
    step: "05",
    title: "Penyerahan & Garansi",
    desc: "Pesanan dikemas rapi dan diselesaikan tepat waktu. Ada temuan cacat jahitan? Kami perbaiki dengan garansi penuh.",
  },
] as const;

// ---------- Nilai perusahaan ----------
export const VALUES = [
  { title: "Presisi", desc: "Akurasi ukuran, pola, dan jahitan di setiap potong produksi." },
  { title: "Integritas", desc: "Transparan dari harga, bahan, hingga kemampuan produksi." },
  { title: "Tepat Waktu", desc: "Deadline adalah komitmen yang kami jaga, bukan sekadar janji." },
  { title: "Amanah", desc: "Setiap order adalah titipan pelanggan yang kami rawat sampai benang terakhir." },
] as const;

// ---------- Linimasa ----------
export const TIMELINE = [
  {
    year: "2026",
    title: "Lahir di Tasikmalaya",
    desc: "BAHAGIYA TAYLOR GROUPS berdiri dengan keyakinan sederhana: busana berkualitas tidak harus datang dari kota besar. Pendirian disahkan oleh Kementerian Hukum RI sebagai badan hukum Perseroan Perorangan pada 9 November 2026.",
  },
  {
    year: "Nov 2026",
    title: "Legalitas Lengkap",
    desc: "NPWP badan terdaftar di KPP Pratama Tasikmalaya pada 10 November 2026 — dasar yang kokoh untuk melayani pesanan sekolah, instansi, dan korporat dengan surat-menyurat resmi.",
  },
  {
    year: "Berikutnya",
    title: "Bertumbuh Bersama Anda",
    desc: "Setiap pesanan adalah langkah tumbuh kami: memperluas kapasitas, menambah mesin, dan menghadirkan lebih banyak pilihan busana berkualitas untuk seluruh Indonesia.",
  },
  {
    year: "Hari Ini",
    title: "Empat Pilar, Satu Standar",
    desc: "Produksi konveksi, pesanan khusus, grosir & distribusi, dan penjualan retail berjalan di bawah standar kualitas yang sama: jahitan rapi, amanah, dan tepat waktu.",
  },
] as const;

// ---------- Segmen pelanggan ----------
export const SEGMENTS = [
  { icon: "school", title: "Sekolah & Komite", desc: "Seragam angkatan, almamater, dan keperluan sekolah." },
  { icon: "briefcase", title: "Instansi & Korporat", desc: "Seragam kerja, kemeja lapangan, dan apparel kantor." },
  { icon: "dumbbell", title: "Klub & Komunitas", desc: "Jersey tim, kaos komunitas, dan merchandising olahraga." },
  { icon: "store", title: "Brand Owner & Toko", desc: "Produksi brand apparel dengan label dan kemasan sendiri." },
  { icon: "boxes", title: "Reseller & Distributor", desc: "Suplai grosir rutin dengan harga langsung produsen." },
  { icon: "sparkles", title: "Event Organizer", desc: "Kaos dan apparel event dengan tenggat yang ketat." },
  { icon: "heart", title: "Pesanan Personal", desc: "Busana kustom per ukuran — kebaya, gamis, hingga seragam pribadi." },
] as const;

// ---------- Bahan & material ----------
export const MATERIALS = [
  "Cotton Combed 30s",
  "Cotton Combed 24s",
  "Pique",
  "CVC",
  "Drill",
  "Twil",
  "Fleece",
  "Hoodie Terry",
  "Satin",
  "Hotel",
  "Jersey Performance",
  "Sifon",
] as const;

// ---------- FAQ ----------
export const FAQ = [
  {
    q: "Apakah ada minimum order?",
    a: "Fleksibel. Kami melayani produksi massal untuk konveksi dan grosir, sekaligus penjualan retail satuan. Konsultasikan jumlah Anda — kami sesuaikan jalur pelayanannya.",
  },
  {
    q: "Berapa lama waktu pengerjaan?",
    a: "Tergantung jenis dan jumlah pesanan. Estimasi waktu yang jelas diberikan saat konsultasi awal dan kami patuhi — deadline acara Anda adalah komitmen kami.",
  },
  {
    q: "Bisa memakai desain sendiri?",
    a: "Tentu bisa. Kirimkan desain atau referensi Anda — tim kami membantu penyusunan pola, pemilihan bahan, sampel, hingga reproduksi logo untuk bordir dan sablon.",
  },
  {
    q: "Apakah bisa minta sampel dulu?",
    a: "Ya. Sampel fisik dibuat sebelum produksi massal dimulai, dan revisi dilakukan sampai Anda menyetujui hasilnya. Kepuasan Anda lebih penting daripada kecepatan kami.",
  },
] as const;

// ---------- Navigasi antar halaman ----------
export const NAV_LINKS = [
  { page: "beranda", label: "Beranda" },
  { page: "tentang", label: "Tentang" },
  { page: "layanan", label: "Layanan" },
  { page: "produk", label: "Produk" },
  { page: "kontak", label: "Kontak" },
] as const;
