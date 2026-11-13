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
  title: `${SITE.name} — Konveksi Premium ${SITE.city}`,
  description:
    "Konveksi & produsen busana premium di Tasikmalaya, Jawa Barat sejak 2020. Produksi seragam sekolah & instansi, kaos & polo, jersey, jaket, gamis, bordir & sablon. Kualitas presisi, harga produsen, garansi jahitan.",
  keywords: [
    "konveksi tasikmalaya",
    "konveksi mangkubumi",
    "produsen seragam tasikmalaya",
    "jahit seragam",
    "jersey custom",
    "konveksi jawa barat",
    "Mulya Juana Syifa Collection",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — Konveksi Premium ${SITE.city}`,
    description:
      "Menenun Kualitas, Merajut Kepercayaan. Produsen busana premium sejak 2020 di Tasikmalaya.",
    siteName: SITE.name,
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a07",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${jakarta.variable} antialiased bg-ink text-ivory grain`}
      >
        {children}
      </body>
    </html>
  );
}
