"use client";

import { motion } from "framer-motion";
import { Clock, Palette, ShieldCheck, Wallet, type LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
import { FEATURES } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  wallet: Wallet,
  shield: ShieldCheck,
  clock: Clock,
  palette: Palette,
};

export function WhyUs() {
  return (
    <section
      className="relative py-24 md:py-32"
      role="region"
      aria-label="Keunggulan kami"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Mengapa Kami"
          title="Kepercayaan yang"
          highlight="Dijahit Erat"
          desc="Empat janji yang kami pegang sejak hari pertama berdiri — dan menjadi alasan klien kami kembali."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <motion.div
                key={f.title}
                className="group relative"
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="card-spotlight relative h-full rounded-3xl border border-border bg-gradient-to-b from-ink-2/80 to-ink/60 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/45 hover:shadow-[0_24px_64px_rgba(201,162,39,0.14)]">
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-ink text-gold-2 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(201,162,39,0.35)]">
                    <Icon className="h-6.5 w-6.5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-ivory group-hover:text-gold-3">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand">{f.desc}</p>
                  <span
                    className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 stitch-border transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
