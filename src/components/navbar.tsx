"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoLockup, LogoMark } from "@/components/logo";
import { EASE_OUT } from "@/components/motion-primitives";
import { DEFAULT_WA_MESSAGE, NAV_LINKS, SITE, waLink } from "@/lib/site";

function useScrolled(threshold = 36) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE_OUT, delay: 2.3 }}
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled ? "glass border-b border-border py-2" : "bg-transparent py-4"
        }`}
        role="banner"
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8"
          aria-label="Navigasi utama"
        >
          <LogoLockup />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative rounded-full px-4 py-2 text-sm font-medium text-ivory/80 transition-colors hover:text-gold-3"
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-3 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <motion.a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-btn hidden rounded-full bg-gradient-to-r from-gold to-gold-2 px-5 py-2.5 text-sm font-bold text-ink shadow-[0_0_24px_rgba(201,162,39,0.3)] transition-shadow hover:shadow-[0_0_36px_rgba(201,162,39,0.55)] md:inline-flex"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Minta Penawaran
            </motion.a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ivory transition-colors hover:border-gold/50 hover:text-gold-3 lg:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M2 5h16M2 10h16M2 15h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Menu mobile fullscreen */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col bg-ink/97 backdrop-blur-xl"
            initial={{ opacity: 0, clipPath: "circle(0% at 92% 6%)" }}
            animate={{ opacity: 1, clipPath: "circle(140% at 92% 6%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.65, ease: EASE_OUT }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
          >
            <div className="flex items-center justify-between px-5 py-4 md:px-8">
              <div className="flex items-center gap-3">
                <LogoMark size={40} />
                <span className="font-display text-lg font-bold text-ivory">MJS Collection</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ivory transition-colors hover:border-gold/50 hover:text-gold-3"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8" aria-label="Navigasi seluler">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-2"
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: EASE_OUT }}
                >
                  <span className="font-display text-xs text-gold/70">0{i + 1}</span>
                  <span className="font-display text-4xl font-semibold text-ivory transition-colors group-hover:text-gold-3 sm:text-5xl">
                    {link.label}
                  </span>
                </motion.a>
              ))}

              <motion.a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-2 px-7 py-3.5 font-bold text-ink"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5, ease: EASE_OUT }}
              >
                WhatsApp Kami
              </motion.a>

              <motion.p
                className="mt-10 text-xs leading-relaxed text-sand"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                {SITE.addressOneLine}
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
