// ============================================================
//  DATA PUSAT — Mulya Juana Syifa Collection
//  Konveksi Premium Tasikmalaya, Jawa Barat
// ============================================================

// TODO: Ganti dengan nomor WhatsApp asli milik konveksi (format internasional tanpa "+")
export const WHATSAPP_NUMBER = "6281234567890";

export const SITE = {
  name: "Mulya Juana Syifa Collection",
  shortName: "MJS Collection",
  tagline: "Menenun Kualitas, Merajut Kepercayaan",
  estYear: 2020,
  moveYear: 2025,
  type: "Konveksi & Produsen Busana",
  city: "Tasikmalaya",
  province: "Jawa Barat",
  address: {
    street: "Jl. Karikil, Kp. Cibeureum RT 001/01",
    urbanVillage: "Kelurahan Cipari",
    district: "Kecamatan Mangkubumi",
    cityFull: "Kota Tasikmalaya",
    provinceShort: "Jawa Barat",
  },
  addressOneLine:
    "Jl. Karikil, Kp. Cibeureum RT 001/01, Kel. Cipari, Kec. Mangkubumi, Kota Tasikmalaya, Jawa Barat",
  operationalHours: "Senin – Sabtu, 08.00 – 17.00 WIB",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Mulya Juana Syifa Collection, Kp. Cibeureum, Cipari, Mangkubumi, Kota Tasikmalaya"
    ),
  // TODO: Ganti dengan akun sosial media asli
  instagram: "@mulyajuanasyifa",
} as const;

export const waLink = (customMessage?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    customMessage ? `?text=${encodeURIComponent(customMessage)}` : ""
  }`;

export const DEFAULT_WA_MESSAGE =
  "Assalamualaikum, saya ingin menanyakan penawaran produksi konveksi di Mulya Juana Syifa Collection.";

export const NAV_LINKS = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#proses", label: "Proses" },
  { href: "#kontak", label: "Kontak" },
] as const;

export const STATS = [
  { value: 5, suffix: "+", label: "Tahun Pengalaman" },
  { value: 15000, suffix: "+", label: "Potong Produksi" },
  { value: 120, suffix: "+", label: "Klien & Instansi" },
  { value: 98, suffix: "%", label: "Ketepatan Waktu" },
] as const;

export const MARQUEE_ITEMS = [
  "Seragam Sekolah & Instansi",
  "Kaos & Polo Shirt",
  "Jersey & Sportswear",
  "Jaket & Hoodie",
  "Gamis & Busana Muslim",
  "Seragam Kerja",
  "Bordir & Sablon",
  "Produksi Custom B2B",
] as const;

export const SERVICES = [
  {
    icon: "school",
    title: "Seragam Sekolah & Instansi",
    desc: "Produksi seragam SD–SMA, almamater, ospek, hingga seragam instansi pemerintah dengan standar ketelitian tinggi dan konsistensi warna lintas batch.",
  },
  {
    icon: "shirt",
    title: "Kaos & Polo Shirt",
    desc: "Kaos polos, polo bordir, dan kaos event menggunakan cotton combed 30s–24s, pique, hingga dry-fit yang nyaman dan tahan dicuci berulang.",
  },
  {
    icon: "dumbbell",
    title: "Jersey & Sportswear",
    desc: "Jersey futsal, basket, dan komunitas dengan printing nama–nomor punggung, desain sublimasi full color, serta bahan yang ringan menyerap keringat.",
  },
  {
    icon: "jacket",
    title: "Jaket & Hoodie",
    desc: "Jaket bomber, varsity, windbreaker, dan hoodie dengan jahitan kuat, resleting premium, serta detail bordir khas brand Anda.",
  },
  {
    icon: "flower",
    title: "Gamis & Busana Muslim",
    desc: "Gamis, tunik, dan setelan muslimah dengan potongan elegan dan bahan yang jatuh sempurna — cocok untuk retail, event, maupun pesanan personal.",
  },
  {
    icon: "briefcase",
    title: "Seragam Kerja & Marketing",
    desc: "Kemeja dan seragam lapangan untuk perusahaan, pabrik, hotel, dan tim marketing — dirancang awet, fungsional, dan melekatkan citra profesional.",
  },
  {
    icon: "sparkles",
    title: "Bordir & Sablon",
    desc: "Layanan bordir komputer, sablon manual, dan DTF dengan ketahanan tinggi. Logo dan desain Anda kami reproduce dengan akurat.",
  },
  {
    icon: "handshake",
    title: "Produksi Custom B2B",
    desc: "Kemitraan produksi untuk toko, brand owner, dan distributor: grosir, label custom, hangtag, hingga konsultasi pemilihan bahan dari hulu ke hilir.",
  },
] as const;

export type ProductCategory = "Seragam" | "Olahraga" | "Fashion" | "Kerja";

export const PRODUCTS: {
  name: string;
  category: ProductCategory;
  image: string;
  desc: string;
}[] = [
  {
    name: "Polo Shirt Premium",
    category: "Kerja",
    image: "/images/product-polo.png",
    desc: "Polo bordir emblem emas, bahan pique premium untuk tim korporat.",
  },
  {
    name: "Seragam Sekolah Lengkap",
    category: "Seragam",
    image: "/images/product-seragam.png",
    desc: "Putih bersih dengan potongan rapi — konsisten untuk satu angkatan.",
  },
  {
    name: "Jersey Futsal Custom",
    category: "Olahraga",
    image: "/images/product-jersey.png",
    desc: "Zamrud & emas, sublimasi full color dengan nama dan nomor punggung.",
  },
  {
    name: "Jaket & Hoodie Streetwear",
    category: "Fashion",
    image: "/images/product-jaket.png",
    desc: "Obsidian dengan detail bordir champagne — kelas brand apparel.",
  },
  {
    name: "Gamis & Hijab Set",
    category: "Fashion",
    image: "/images/product-gamis.png",
    desc: "Sutra ivory champagne dengan drape jatuh yang anggun.",
  },
  {
    name: "Paket Kain & Aksesoris",
    category: "Seragam",
    image: "/images/product-kaoskaki.png",
    desc: "Kurasi bahan cotton, fleece, dan aksesoris jahit berkualitas.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Konsultasi & Estimasi",
    desc: "Ceritakan kebutuhan Anda: jenis busana, jumlah, bahan, dan anggaran. Kami berikan estimasi transparan tanpa biaya tersembunyi.",
  },
  {
    step: "02",
    title: "Desain & Sampling",
    desc: "Tim kami menyiapkan desain beserta sampel fisik. Revisi dilakukan sampai Anda puas sebelum produksi massal dimulai.",
  },
  {
    step: "03",
    title: "Produksi Massal",
    desc: "Cutting, penjahitan, dan finishing dikerjakan oleh penjahit berpengalaman dengan kontrol kualitas di setiap tahap.",
  },
  {
    step: "04",
    title: "Quality Control",
    desc: "Setiap potong diperiksa: kesimetrian jahitan, warna, ukuran, dan kebersihan finishing. Produk cacat tidak pernah lolos.",
  },
  {
    step: "05",
    title: "Distribusi & Garansi",
    desc: "Pesanan dikemas rapi dan dikirim tepat waktu. Ada temuan jahitan? Kami perbaiki dengan garansi penuh.",
  },
] as const;

export const FEATURES = [
  {
    icon: "wallet",
    title: "Harga Produsen",
    desc: "Pesan langsung dari konveksi tanpa perantara — harga grosir dengan kualitas yang bisa dipertanggungjawabkan.",
  },
  {
    icon: "shield",
    title: "Garansi Jahitan",
    desc: "Temuan cacat jahitan atau sablon akan kami ganti dan perbaiki tanpa biaya tambahan. Kepercayaan Anda adalah prioritas kami.",
  },
  {
    icon: "clock",
    title: "Tepat Waktu",
    desc: "Timeline produksi disepakati di awal dan kami patuhi. Deadline acara Anda adalah komitmen kami.",
  },
  {
    icon: "palette",
    title: "Konsultasi Desain",
    desc: "Belum punya desain? Tim kreatif kami bantu menyusun konsep, memilih bahan, hingga mockup sebelum produksi.",
  },
] as const;

// Catatan: Testimoni di bawah adalah konten contoh — silakan ganti dengan
// testimoni pelanggan asli setelah situs berjalan.
export const TESTIMONIALS = [
  {
    name: "Bapak Hendra",
    role: "Pengelola Toko Seragam, Tasikmalaya",
    quote:
      "Pesanan 2.000 kaos selesai lebih cepat dari jadwal, jahitannya rapi dan konsisten. Partner produksi yang bisa diandalkan.",
  },
  {
    name: "Ibu Ratna",
    role: "Bendahara Komite Sekolah",
    quote:
      "Seragam satu angkatan selesai sebelum hari pertama masuk. Warna dan ukuran nyaris tanpa selisih — kami sangat puas.",
  },
  {
    name: "Bapak Dimas",
    role: "Manajer Klub Futsal",
    quote:
      "Desain jersey kami wujudkan dengan detail sempurna. Nama dan nomor punggungnya tajam, keren banget di lapangan!",
  },
  {
    name: "Ibu Salsabila",
    role: "Owner Brand Muslimah",
    quote:
      "Gamis-gamis produksi mereka selalu laku di toko saya. Kualitas bahan dan jahitannya pantas jual dengan harga premium.",
  },
  {
    name: "Bapak Agus",
    role: "HRD Pabrik, Ciamis",
    quote:
      "Seragam kerja 500 karyawan selesai tepat waktu. Komunikasinya enak, revisi sampel juga dilayani dengan sabar.",
  },
  {
    name: "Ibu Dewi",
    role: "Event Organizer",
    quote:
      "Kaos event 1.000 pcs dengan sablon kompleks — hasilnya bersih dan awet. Pesanan berikutnya pasti ke sini lagi.",
  },
] as const;
