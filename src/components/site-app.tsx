"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Preloader } from "@/components/preloader";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { BerandaView } from "@/components/views/beranda-view";
import { TentangView } from "@/components/views/tentang-view";
import { LayananView } from "@/components/views/layanan-view";
import { ProdukView } from "@/components/views/produk-view";
import { KontakView } from "@/components/views/kontak-view";
import { useHashRouter, type PageId } from "@/lib/router";
import { EASE_OUT } from "@/components/motion-primitives";

const VIEWS: Record<PageId, React.ComponentType<{ base?: number }>> = {
  beranda: BerandaView,
  tentang: TentangView,
  layanan: LayananView,
  produk: ProdukView,
  kontak: KontakView,
};

export function SiteApp() {
  const { page } = useHashRouter();
  const [intro, setIntro] = useState(true);
  const [base, setBase] = useState(1.75);

  // Preloader sekali per sesi; kunjungan berikutnya langsung buka.
  // setState dipanggil di dalam callback agar tidak memicu render berantai.
  useEffect(() => {
    const seen = sessionStorage.getItem("mk-preloaded");
    if (seen) {
      const r = requestAnimationFrame(() => {
        setIntro(false);
        setBase(0);
      });
      return () => cancelAnimationFrame(r);
    }
    sessionStorage.setItem("mk-preloaded", "1");
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setIntro(false);
      document.body.style.overflow = "";
    }, 1600);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  // Setiap ganti halaman: mulai dari atas
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [page]);

  const View = VIEWS[page];

  return (
    <div className="flex min-h-screen flex-col">
      <Preloader visible={intro} />
      <Navbar page={page} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="relative"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            {page === "beranda" ? <BerandaView base={base} /> : <View />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
