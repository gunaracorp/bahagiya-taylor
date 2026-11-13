"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SectionHeading, EASE_OUT } from "@/components/motion-primitives";
import { PRODUCTS, type ProductCategory } from "@/lib/site";

const FILTERS = ["Semua", "Seragam", "Olahraga", "Fashion", "Kerja"] as const;
type Filter = (typeof FILTERS)[number];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("Semua");
  const visible =
    filter === "Semua" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section
      id="portofolio"
      className="relative overflow-hidden py-24 md:py-32"
      role="region"
      aria-label="Portofolio produk"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-5xl -translate-x-1/2 stitch-border"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Portofolio Unggulan"
          title="Karya yang"
          highlight="Bicara"
          desc="Sebagian dari ribuan potong yang telah kami selesaikan — setiap karya adalah referensi nyata dari klien yang kembali lagi."
        />

        {/* Filter */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                filter === f ? "text-ink" : "border border-border text-sand hover:border-gold/50 hover:text-gold-3"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-gold-2 shadow-[0_0_24px_rgba(201,162,39,0.35)]"
                  transition={{ duration: 0.45, ease: EASE_OUT }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>

        {/* Grid produk */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.name}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-ink-2/50 transition-colors duration-500 hover:border-gold/50"
              >
                <div className="relative aspect-[4/4.4] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                  <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-ink/70 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-2 backdrop-blur-sm">
                    {p.category}
                  </span>

                  {/* Overlay detail */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
                    <h3 className="font-display text-xl font-bold text-ivory">{p.name}</h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-sand opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.p
          className="mt-12 text-center text-sm text-sand"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ingin melihat sampel fisik atau katalog lengkap?{" "}
          <a
            href="#kontak"
            className="font-semibold text-gold-2 underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-3"
          >
            Hubungi kami di sini
          </a>
        </motion.p>
      </div>
    </section>
  );
}
