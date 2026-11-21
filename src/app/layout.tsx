import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${SITE.name} ${SITE.brandLine} — Konveksi ${SITE.city} | Produksi, Kustom, Grosir & Retail`,
  description:
    "Konveksi & produsen busana di Kabupaten Tasikmalaya, Jawa Barat — badan hukum Perseroan Perorangan resmi Kemenkumham RI (2026). Produksi konveksi, pesanan khusus/kustom, grosir & distribusi, dan penjualan retail: seragam, kaos, polo, jersey, jaket, gamis, mukena, kebaya. Kualitas presisi, harga langsung produsen.",
  keywords: [
    "konveksi tasikmalaya",
    "konveksi cikalong",
    "produsen seragam tasikmalaya",
    "jahit seragam",
    "jersey custom tasikmalaya",
    "konveksi jawa barat",
    "grosir pakaian tasikmalaya",
    "kebaya custom",
    "bahagiya taylor groups",
    "bahagiya taylor",
  ],
  authors: [{ name: `${SITE.name} ${SITE.brandLine}` }],
  openGraph: {
    title: `${SITE.name} ${SITE.brandLine} — Konveksi ${SITE.city}`,
    description:
      "Menjahit Kualitas, Merajut Kepercayaan. Produksi konveksi, pesanan khusus, grosir & retail — berbadan hukum Perseroan Perorangan resmi (2026) di Kabupaten Tasikmalaya.",
    siteName: `${SITE.name} ${SITE.brandLine}`,
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf6ec",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: `${SITE.name} ${SITE.brandLine}`,
  description: SITE.tagline,
  foundingDate: String(SITE.estYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: `${SITE.address.urbanVillage}, ${SITE.address.district}`,
    addressRegion: SITE.address.cityFull,
    addressCountry: "ID",
  },
  areaServed: "Indonesia",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${jakarta.variable} antialiased bg-cream text-ink grain`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
