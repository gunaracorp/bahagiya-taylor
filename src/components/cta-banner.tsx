"use client";

import { motion } from "framer-motion";
import { EASE_OUT, WaButton } from "@/components/motion-primitives";
import { PageLink } from "@/components/page-link";
import { DEFAULT_WA_MESSAGE, SITE, waLink } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="relative px-5 py-20 md:px-8 md:py-28" aria-label="Ajakan mulai pesanan">
      <motion.div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-night shadow-[0_30px_80px_rgba(12,43,33,0.4)]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: EASE_OUT }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-night via-night-2 to-night"
          aria-hidden="true"
        />
        {/* Benang emas melengkung */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
          viewBox="0 0 900 400"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-20 320 C 180 260, 300 380, 480 300 S 780 180, 940 260"
            stroke="#c9962b"
            strokeWidth="1.6"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
          <path
            d="M-20 120 C 200 60, 380 160, 560 90 S 820 20, 940 90"
            stroke="#dfb34c"
            strokeWidth="1.2"
            strokeDasharray="2 12"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
        <div
          className="absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full bg-gold/15 blur-[90px]"
          aria-hidden="true"
        />
        <div
          className="absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full bg-emerald-soft/25 blur-[80px]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-16 text-center md:px-16 md:py-20">
          <span className="section-ornament text-[11px] font-bold uppercase tracking-[0.35em] text-gold-2">
            Mulai Hari Ini
          </span>
          <h2 className="font-display max-w-3xl text-4xl leading-tight font-semibold text-ivory md:text-5xl lg:text-6xl">
            Siap Menjahit <em className="text-gold-gradient font-bold not-italic">Ide Besar</em>{" "}
            Anda?
          </h2>
          <p className="max-w-2xl leading-relaxed text-ivory/70 md:text-lg">
            Ceritakan kebutuhan produksi Anda hari ini — konsultasi dan estimasi{" "}
            <span className="font-semibold text-ivory">gratis tanpa komitmen</span>. Tim{" "}
            {SITE.name} membalas cepat di jam operasional.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <WaButton href={waLink(DEFAULT_WA_MESSAGE)} variant="gold">
              Chat WhatsApp Sekarang
            </WaButton>
            <PageLink
              page="kontak"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-9 py-4 font-semibold text-ivory transition-colors hover:border-gold-2 hover:text-gold-3"
            >
              Isi Formulir Pesanan
            </PageLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
