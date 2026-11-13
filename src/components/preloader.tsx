"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/logo";
import { EASE_OUT } from "@/components/motion-primitives";
import { SITE } from "@/lib/site";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 2100);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  const word = SITE.name.toUpperCase().split("");

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          aria-hidden="true"
        >
          {/* benang menjahit dari atas */}
          <motion.div
            className="absolute top-0 left-1/2 w-px stitch-line origin-top"
            initial={{ height: 0 }}
            animate={{ height: "38%" }}
            transition={{ duration: 1.1, ease: EASE_OUT }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.25 }}
          >
            <LogoMark size={92} />
          </motion.div>

          <div className="mt-7 flex overflow-hidden">
            {word.map((ch, i) => (
              <motion.span
                key={`${ch}-${i}`}
                className="font-display text-sm md:text-base font-semibold tracking-[0.3em] text-ivory"
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.55 + i * 0.035 }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="mt-3 text-[10px] uppercase tracking-[0.5em] text-gold-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.6 }}
          >
            Tasikmalaya · Est. {SITE.estYear}
          </motion.p>

          <motion.div
            className="mt-8 h-px w-44 overflow-hidden bg-ink-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-gold-deep via-gold to-gold-3"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.45 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
