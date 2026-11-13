"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark, LogoWordmark } from "@/components/logo";
import { PageLink } from "@/components/page-link";
import { EASE_OUT } from "@/components/motion-primitives";
import { NAV_LINKS, SITE } from "@/lib/site";
import type { PageId } from "@/lib/router";

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

export function Navbar({ page }: { page: PageId }) {
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
        transition={{ duration: 0.9, ease: EASE_OUT, delay: 1.55 }}
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "glass-light border-b border-line/80 shadow-[0_10px_40px_rgba(28,42,34,0.08)] py-2"
            : "bg-transparent py-4"
        }`}
        role="banner"
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8"
          aria-label="Navigasi utama"
        >
          <PageLink page="beranda" className="flex items-center">
            <span className="flex items-center gap-3">
              <LogoMark size={46} />
              <LogoWordmark />
            </span>
          </PageLink>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = page === link.page;
              return (
                <li key={link.page}>
                  <PageLink
                    page={link.page}
                    className={`relative block rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                      active ? "text-emerald" : "text-ink-soft hover:text-emerald"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-emerald-tint shadow-[inset_0_0_0_1.5px_rgba(14,91,67,0.25)]"
                        transition={{ duration: 0.45, ease: EASE_OUT }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </PageLink>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <PageLink
              page="kontak"
              className="shine-btn hidden rounded-full bg-gradient-to-r from-emerald to-emerald-soft px-5 py-2.5 text-sm font-bold text-ivory shadow-[0_8px_24px_rgba(14,91,67,0.3)] transition-shadow hover:shadow-[0_10px_30px_rgba(201,150,43,0.45)] md:inline-flex"
            >
              Minta Penawaran
            </PageLink>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-[0_2px_10px_rgba(28,42,34,0.08)] transition-colors hover:border-gold/60 hover:text-gold-deep lg:hidden"
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
            className="fixed inset-0 z-[90] flex flex-col bg-night"
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
                <span className="font-display text-lg font-bold text-ivory">{SITE.name}</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold-2 hover:text-gold-3"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8" aria-label="Navigasi seluler">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.page}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: EASE_OUT }}
                >
                  <PageLink
                    page={link.page}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-2"
                  >
                    <span className="font-display text-xs text-gold-2/80">0{i + 1}</span>
                    <span
                      className={`font-display text-4xl font-semibold transition-colors group-hover:text-gold-3 sm:text-5xl ${
                        page === link.page ? "text-gold-3" : "text-ivory"
                      }`}
                    >
                      {link.label}
                    </span>
                  </PageLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5, ease: EASE_OUT }}
              >
                <PageLink
                  page="kontak"
                  onClick={() => setOpen(false)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-2 px-7 py-3.5 font-bold text-night"
                >
                  Konsultasi Sekarang
                </PageLink>
              </motion.div>

              <motion.p
                className="mt-10 text-xs leading-relaxed text-ivory/60"
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
