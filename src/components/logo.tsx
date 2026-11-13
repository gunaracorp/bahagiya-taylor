"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/components/motion-primitives";

/**
 * Emblem Mulya Konveksi — monogram "M" dijahit dari benang emas,
 * dihiasi jarum, jahitan tusuk keliling, dan bintang kilau.
 * Vektor murni: tajam di semua ukuran.
 */
export function LogoMark({ size = 46, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className ?? ""}`}
    >
      <defs>
        <linearGradient id="mk-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2d492" />
          <stop offset="0.45" stopColor="#c9962b" />
          <stop offset="1" stopColor="#96701c" />
        </linearGradient>
        <linearGradient id="mk-emerald" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#15785a" />
          <stop offset="1" stopColor="#093f2f" />
        </linearGradient>
      </defs>

      {/* Cincin luar hijau zamrud */}
      <circle cx="48" cy="48" r="45" fill="none" stroke="url(#mk-emerald)" strokeWidth="3" />
      {/* Tusuk jahitan keliling emas */}
      <circle
        cx="48"
        cy="48"
        r="37.5"
        fill="none"
        stroke="url(#mk-gold)"
        strokeWidth="1.6"
        strokeDasharray="1.5 6.5"
        strokeLinecap="round"
      />

      {/* Monogram M — dijahit dengan benang emas */}
      <path
        d="M31 67 L31 37 L48 56 L65 37 L65 67"
        stroke="url(#mk-gold)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Garis benang ganda (efek tusuk ganda) */}
      <path
        d="M31 67 L31 37 L48 56 L65 37 L65 67"
        stroke="#f2d492"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
        transform="translate(0 -3.2)"
      />
      {/* Omboran benang di bawah M */}
      <path
        d="M30 74 Q 39 79 48 74 T 66 74"
        stroke="url(#mk-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />

      {/* Jarum menyilang di kanan atas */}
      <g strokeLinecap="round">
        <line x1="88" y1="9" x2="62" y2="34" stroke="url(#mk-gold)" strokeWidth="3.4" />
        <circle cx="84.6" cy="12.4" r="2.7" fill="none" stroke="#093f2f" strokeWidth="1.6" />
      </g>

      {/* Kilau bintang */}
      <path
        d="M20 22 l1.6 4.4 4.4 1.6 -4.4 1.6 -1.6 4.4 -1.6 -4.4 -4.4 -1.6 4.4 -1.6 z"
        fill="url(#mk-gold)"
        opacity="0.9"
      />
    </svg>
  );
}

export function LogoWordmark({ onDark = false, compact = false }: { onDark?: boolean; compact?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-display text-lg font-bold tracking-wide md:text-xl ${
          onDark ? "text-ivory" : "text-ink"
        }`}
      >
        Mulya Konveksi
      </span>
      {!compact && (
        <span
          className={`mt-1.5 text-[9px] font-bold uppercase tracking-[0.34em] md:text-[10px] ${
            onDark ? "text-gold-2" : "text-emerald"
          }`}
        >
          Ujang Juana Collection
        </span>
      )}
    </span>
  );
}

export function LogoLockup({ onDark = false }: { onDark?: boolean }) {
  return (
    <motion.a
      href="#/beranda"
      aria-label="Beranda — Mulya Konveksi, Ujang Juana Collection"
      className="group flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3, ease: EASE_OUT }}
    >
      <span className="relative">
        <LogoMark size={46} />
        <motion.span
          className="absolute inset-0 rounded-full border border-gold/50"
          animate={{ scale: [1, 1.3], opacity: [0.55, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          aria-hidden="true"
        />
      </span>
      <LogoWordmark onDark={onDark} />
    </motion.a>
  );
}
