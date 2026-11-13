"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WaIcon } from "@/components/motion-primitives";
import { DEFAULT_WA_MESSAGE, waLink, SITE } from "@/lib/site";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed right-5 bottom-5 z-[75] flex flex-col items-end gap-3 md:right-7 md:bottom-7"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Kembali ke atas */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Kembali ke atas"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald/30 bg-paper text-emerald shadow-[0_6px_20px_rgba(28,42,34,0.14)] transition-colors hover:border-gold/60 hover:text-gold-deep"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 13V3M3.5 7.5L8 3l4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          {/* WhatsApp mengambang */}
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat WhatsApp ${SITE.name}`}
            className="group relative"
          >
            <span
              className="absolute inset-0 rounded-full bg-emerald-soft"
              style={{ animation: "pulse-ring 2.2s ease-out infinite" }}
              aria-hidden="true"
            />
            <motion.span
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-soft to-emerald-deep text-ivory shadow-[0_10px_30px_rgba(9,63,47,0.5)]"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <WaIcon className="h-7 w-7" />
            </motion.span>
            <span className="pointer-events-none absolute top-1/2 right-16 -translate-y-1/2 rounded-full border border-emerald/25 bg-paper px-4 py-2 text-xs font-semibold whitespace-nowrap text-emerald opacity-0 shadow-[0_6px_20px_rgba(28,42,34,0.12)] transition-all duration-300 group-hover:opacity-100">
              Konsultasi cepat di sini
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
