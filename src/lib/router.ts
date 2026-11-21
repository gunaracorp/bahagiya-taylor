"use client";

// ============================================================
//  Router hash sederhana — membuat situs terasa multi-halaman
//  (Beranda / Tentang / Layanan / Produk / Kontak) dalam satu
//  route "/" sesuai arsitektur sandbox. Mendukung tombol
//  back/forward browser dan deep-link (#/layanan).
// ============================================================

import { useCallback, useEffect, useState } from "react";

export const PAGE_IDS = ["beranda", "tentang", "layanan", "produk", "kontak"] as const;
export type PageId = (typeof PAGE_IDS)[number];

export const DEFAULT_PAGE: PageId = "beranda";

export function parseHash(): PageId {
  if (typeof window === "undefined") return DEFAULT_PAGE;
  const raw = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  return (PAGE_IDS as readonly string[]).includes(raw) ? (raw as PageId) : DEFAULT_PAGE;
}

export function useHashRouter() {
  const [page, setPage] = useState<PageId>(DEFAULT_PAGE);

  useEffect(() => {
    const sync = () => setPage(parseHash());
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const navigate = useCallback((target: PageId) => {
    if (parseHash() === target) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = `#/${target}`;
  }, []);

  return { page, navigate };
}

export const PAGE_TITLES: Record<PageId, { eyebrow: string; title: string; desc: string }> = {
  beranda: {
    eyebrow: "Beranda",
    title: "",
    desc: "",
  },
  tentang: {
    eyebrow: "Profil Perusahaan",
    title: "Tentang Kami",
    desc: "Perjalanan Bahagiya Taylor Groups — konveksi berbadan hukum Perseroan Perorangan, disahkan Kementerian Hukum RI pada 2026 dan berkedudukan di Kabupaten Tasikmalaya.",
  },
  layanan: {
    eyebrow: "Apa yang Kami Kerjakan",
    title: "Layanan Kami",
    desc: "Empat pilar usaha di bawah satu standar kualitas: produksi konveksi, pesanan khusus, grosir & distribusi, serta penjualan retail.",
  },
  produk: {
    eyebrow: "Katalog & Portofolio",
    title: "Produk Kami",
    desc: "Sembilan kategori busana yang kami produksi — dari kaos harian hingga kebaya kustom, semuanya dengan jahitan yang bisa Anda andalkan.",
  },
  kontak: {
    eyebrow: "Mari Terhubung",
    title: "Hubungi Kami",
    desc: "Konsultasikan kebutuhan produksi Anda — kami balas cepat di jam operasional, dan kami senang Anda berkunjung ke workshop.",
  },
};
