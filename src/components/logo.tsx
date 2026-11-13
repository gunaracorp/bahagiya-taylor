"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/components/motion-primitives";

/** Monogram SVG MJS — lambang benang emas yang tajam di segala ukuran */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2d894" />
          <stop offset="0.5" stopColor="#c9a227" />
          <stop offset="1" stopColor="#8a6d1c" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="none" stroke="url(#lg)" strokeWidth="1.8" />
      <circle cx="32" cy="32" r="26" fill="none" stroke="url(#lg)" strokeWidth="0.8" opacity="0.65" />
      <text
        x="32"
        y="39.5"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="19"
        fontWeight="600"
        fill="url(#lg)"
        letterSpacing="0.5"
      >
        MJS
      </text>
    </svg>
  );
}

export function LogoWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-display text-lg md:text-xl font-bold tracking-wide text-ivory">
        Mulya Juana Syifa
      </span>
      {!compact && (
        <span className="mt-1 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.42em] text-gold-2">
          Collection · Konveksi
        </span>
      )}
    </span>
  );
}

export function LogoLockup() {
  return (
    <motion.a
      href="#beranda"
      aria-label="Beranda — Mulya Juana Syifa Collection"
      className="flex items-center gap-3 group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3, ease: EASE_OUT }}
    >
      <span className="relative">
        <LogoMark size={46} />
        <motion.span
          className="absolute inset-0 rounded-full border border-gold/40"
          animate={{ scale: [1, 1.28], opacity: [0.6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          aria-hidden="true"
        />
      </span>
      <LogoWordmark />
    </motion.a>
  );
}
