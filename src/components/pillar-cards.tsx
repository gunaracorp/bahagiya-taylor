"use client";

import { motion } from "framer-motion";
import { Boxes, Factory, Scissors, Store, type LucideIcon } from "lucide-react";
import { PILLARS } from "@/lib/site";

const PILLAR_ICONS: Record<string, LucideIcon> = {
  factory: Factory,
  scissors: Scissors,
  boxes: Boxes,
  store: Store,
};

/** Kartu pilar usaha — dipakai di Beranda (compact) & Layanan (detailed) */
export function PillarCard({
  index,
  detailed = false,
}: {
  index: number;
  detailed?: boolean;
}) {
  const pillar = PILLARS[index];
  const Icon = PILLAR_ICONS[pillar.icon];

  return (
    <motion.article
      className="card-spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper p-6 shadow-[0_4px_24px_rgba(28,42,34,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_24px_60px_rgba(201,150,43,0.18)] md:p-7"
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }}
    >
      {/* Garis jahit emas di tepi atas */}
      <span
        className="stitch-border absolute inset-x-6 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <span
        className="font-display pointer-events-none absolute -top-2 right-4 text-6xl font-bold text-emerald/6 transition-colors duration-500 group-hover:text-gold/15"
        aria-hidden="true"
      >
        {pillar.num}
      </span>

      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald/25 bg-emerald-tint text-emerald transition-all duration-500 group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-gold/15 group-hover:text-gold-deep">
        <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
      </span>

      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold-deep">
        Pilar {pillar.num}
      </p>
      <h3 className="font-display mt-1.5 text-xl font-bold text-ink transition-colors group-hover:text-emerald md:text-2xl">
        {pillar.title}
      </h3>
      <p className="mt-0.5 text-xs font-semibold text-emerald-soft">{pillar.subtitle}</p>
      <p className={`mt-3 leading-relaxed text-ink-soft ${detailed ? "text-sm" : "text-[13px]"}`}>
        {pillar.desc}
      </p>

      {detailed && (
        <ul className="mt-4 space-y-2">
          {pillar.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2.5 text-sm text-ink-soft">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {pt}
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}

export function PillarGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div
      className={`grid gap-5 sm:grid-cols-2 ${detailed ? "lg:grid-cols-2" : "lg:grid-cols-4"}`}
    >
      {PILLARS.map((_, i) => (
        <PillarCard key={PILLARS[i].title} index={i} detailed={detailed} />
      ))}
    </div>
  );
}
