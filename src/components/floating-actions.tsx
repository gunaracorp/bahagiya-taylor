"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DEFAULT_WA_MESSAGE, waLink } from "@/lib/site";

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
          className="fixed bottom-5 right-5 z-[75] flex flex-col items-end gap-3 md:bottom-7 md:right-7"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Kembali ke atas */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Kembali ke atas"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ink/85 text-gold-2 backdrop-blur-md transition-colors hover:border-gold/70 hover:text-gold-3"
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
            aria-label="Chat WhatsApp Mulya Juana Syifa Collection"
            className="group relative"
          >
            <span
              className="absolute inset-0 rounded-full bg-emerald-brand"
              style={{ animation: "pulse-ring 2.2s ease-out infinite" }}
              aria-hidden="true"
            />
            <motion.span
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-soft to-emerald-brand text-ivory shadow-[0_10px_30px_rgba(30,92,70,0.45)]"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.1.2-.3.3-.5v-.5L9.6 7.6c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2-.8 3.2.3 1.4 1.2 2.7 2 3.7a11 11 0 0 0 4.3 3.5c1.9.8 2.6.8 3.5.7.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.2-.5Z" />
              </svg>
            </motion.span>
            <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-gold/30 bg-ink/90 px-4 py-2 text-xs font-semibold text-gold-2 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
              Konsultasi cepat di sini
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
