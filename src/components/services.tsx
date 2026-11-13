"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Dumbbell,
  Flower2,
  Handshake,
  School,
  Shirt,
  Sparkles,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/motion-primitives";
import { SERVICES } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  school: School,
  shirt: Shirt,
  dumbbell: Dumbbell,
  jacket: Layers,
  flower: Flower2,
  briefcase: Briefcase,
  sparkles: Sparkles,
  handshake: Handshake,
};

export function Services() {
  return (
    <section id="layanan" className="relative py-24 md:py-32" role="region" aria-label="Layanan">
      <div
        className="pointer-events-none absolute -right-48 top-24 h-[460px] w-[460px] rounded-full bg-emerald-brand/10 blur-[110px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Layanan Produksi"
          title="Delapan Jalur,"
          highlight="Satu Standar Emas"
          desc="Dari hulu ke hilir: pemilihan bahan, pola, jahitan, hingga pengemasan — semuanya melewati standar kontrol kualitas yang sama, apa pun skala pesanan Anda."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((svc, i) => {
            const Icon = ICONS[svc.icon];
            return (
              <motion.div
                key={svc.title}
                className="card-spotlight group relative flex flex-col rounded-3xl border border-border bg-ink-2/55 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold/45 hover:shadow-[0_24px_60px_rgba(201,162,39,0.13)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
                }}
              >
                <span className="pointer-events-none absolute right-5 top-5 font-display text-4xl font-bold text-ivory/5 transition-colors duration-500 group-hover:text-gold/15">
                  0{i + 1}
                </span>

                <span className="relative mb-5 flex h-13 w-13 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-ink-3 to-ink text-gold-2 transition-all duration-500 group-hover:scale-110 group-hover:border-gold/60 group-hover:shadow-[0_0_24px_rgba(201,162,39,0.3)]">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </span>

                <h3 className="font-display text-lg font-bold text-ivory transition-colors group-hover:text-gold-3">
                  {svc.title}
                </h3>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-sand">{svc.desc}</p>

                <a
                  href="#kontak"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold-2 opacity-70 transition-all duration-300 group-hover:gap-3 group-hover:opacity-100"
                >
                  Minta Quote
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
