"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "@/components/logo";
import { EASE_OUT } from "@/components/motion-primitives";
import { SITE } from "@/lib/site";

/** Preloader presentational — logika visibilitas diatur SiteApp */
export function Preloader({ visible }: { visible: boolean }) {
  const word = SITE.name.toUpperCase().split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute top-0 left-1/2 w-px stitch-line origin-top"
            initial={{ height: 0 }}
            animate={{ height: "34%" }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.2 }}
          >
            <LogoMark size={92} />
          </motion.div>

          <div className="mt-7 flex overflow-hidden">
            {word.map((ch, i) => (
              <motion.span
                key={`${ch}-${i}`}
                className="font-display text-sm font-semibold tracking-[0.3em] text-ink md:text-base"
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.45 + i * 0.035 }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="mt-3 text-[10px] font-semibold uppercase tracking-[0.5em] text-emerald"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.6 }}
          >
            {SITE.brandLine} · Est. {SITE.estYear}
          </motion.p>

          <motion.div
            className="mt-8 h-[3px] w-44 overflow-hidden rounded-full bg-cream-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald via-emerald-soft to-gold"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.05, ease: "easeInOut", delay: 0.35 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
