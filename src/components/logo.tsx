"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/components/motion-primitives";

/**
 * Emblem Bahagiya Taylor Groups — monogram "BT" dijahit dari benang emas,
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
        <linearGradient id="bt-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2d492" />
          <stop offset="0.45" stopColor="#c9962b" />
          <stop offset="1" stopColor="#96701c" />
        </linearGradient>
        <linearGradient id="bt-emerald" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#15785a" />
          <stop offset="1" stopColor="#093f2f" />
        </linearGradient>
      </defs>

      {/* Cincin luar hijau zamrud */}
      <circle cx="48" cy="48" r="45" fill="none" stroke="url(#bt-emerald)" strokeWidth="3" />
      {/* Tusuk jahitan keliling emas */}
      <circle
        cx="48"
        cy="48"
        r="37.5"
        fill="none"
        stroke="url(#bt-gold)"
        strokeWidth="1.6"
        strokeDasharray="1.5 6.5"
        strokeLinecap="round"
      />

      {/* Monogram BT — dijahit dengan benang emas */}
      <path
        d="M26 33 V65 M26 33 H34 A8 8 0 0 1 34 49 H26 M26 49 H36 A8 8 0 0 1 36 65 H26 M50 33 H70 M60 33 V65"
        stroke="url(#bt-gold)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Garis benang ganda (efek tusuk ganda) */}
      <path
        d="M26 33 V65 M26 33 H34 A8 8 0 0 1 34 49 H26 M26 49 H36 A8 8 0 0 1 36 65 H26 M50 33 H70 M60 33 V65"
        stroke="#f2d492"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
        transform="translate(0 -3.2)"
      />
      {/* Omboran benang di bawah monogram */}
      <path
        d="M26 74 Q 37 79 48 74 T 70 74"
        stroke="url(#bt-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />

      {/* Jarum menyilang di kanan atas */}
      <g strokeLinecap="round">
        <line x1="91" y1="8" x2="73" y2="26" stroke="url(#bt-gold)" strokeWidth="3.4" />
        <circle cx="87.4" cy="11.6" r="2.7" fill="none" stroke="#093f2f" strokeWidth="1.6" />
      </g>

      {/* Kilau bintang */}
      <path
        d="M18 24 l1.6 4.4 4.4 1.6 -4.4 1.6 -1.6 4.4 -1.6 -4.4 -4.4 -1.6 4.4 -1.6 z"
        fill="url(#bt-gold)"
        opacity="0.9"
      />
    </svg>
  );
}

export function LogoWordmark({ onDark = false, compact = false }: { onDark?: boolean; compact?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-display text-base font-bold tracking-wide sm:text-lg md:text-xl ${
          onDark ? "text-ivory" : "text-ink"
        }`}
      >
        Bahagiya Taylor Groups
      </span>
      {!compact && (
        <span
          className={`mt-1.5 text-[8px] font-bold uppercase tracking-[0.22em] sm:text-[9px] md:tracking-[0.3em] ${
            onDark ? "text-gold-2" : "text-emerald"
          }`}
        >
          Konveksi &amp; Produsen Busana
        </span>
      )}
    </span>
  );
}

export function LogoLockup({ onDark = false }: { onDark?: boolean }) {
  return (
    <motion.a
      href="#/beranda"
      aria-label="Beranda — Bahagiya Taylor Groups"
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
