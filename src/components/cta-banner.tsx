"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EASE_OUT } from "@/components/motion-primitives";
import { DEFAULT_WA_MESSAGE, SITE, waLink } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="relative px-5 py-24 md:px-8 md:py-32" aria-label="Ajakan mulai pesanan">
      <motion.div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-gold/40"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: EASE_OUT }}
      >
        {/* Latar emblem raksasa */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink-2 via-ink-3 to-ink" aria-hidden="true" />
        <motion.div
          className="absolute -right-24 -top-24 h-[420px] w-[420px] opacity-15"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        >
          <Image src="/images/logo-emblem.png" alt="" fill sizes="420px" className="object-contain" />
        </motion.div>
        <div
          className="absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full bg-gold/15 blur-[90px]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-16 text-center md:px-16 md:py-20">
          <span className="section-ornament text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-2">
            Mulai Hari Ini
          </span>
          <h2 className="font-display max-w-3xl text-4xl font-semibold leading-tight text-ivory-gradient md:text-5xl lg:text-6xl">
            Siap Menjahit{" "}
            <em className="text-gold-gradient font-bold not-italic">Ide Besar</em> Anda?
          </h2>
          <p className="max-w-2xl leading-relaxed text-sand md:text-lg">
            Ceritakan kebutuhan produksi Anda hari ini — konsultasi dan estimasi{" "}
            <span className="font-semibold text-ivory">gratis tanpa komitmen</span>. Tim{" "}
            {SITE.shortName} membalas cepat di jam operasional.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-btn animate-glow inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-2 px-9 py-4 font-bold text-ink"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.1.2-.3.3-.5v-.5L9.6 7.6c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2-.8 3.2.3 1.4 1.2 2.7 2 3.7a11 11 0 0 0 4.3 3.5c1.9.8 2.6.8 3.5.7.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.2-.5Z" />
              </svg>
              Chat WhatsApp Sekarang
            </motion.a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-9 py-4 font-semibold text-ivory transition-colors hover:border-gold/60 hover:text-gold-3"
            >
              Isi Formulir Pesanan
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
