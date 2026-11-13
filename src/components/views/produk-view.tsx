"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal, SectionHeading, WaButton, EASE_OUT } from "@/components/motion-primitives";
import { PageHero } from "@/components/motion-primitives";
import { WorkshopGallery } from "@/components/workshop-gallery";
import { CtaBanner } from "@/components/cta-banner";
import { PRODUCT_FILTERS, PRODUCTS, SITE, waLink } from "@/lib/site";

type Filter = (typeof PRODUCT_FILTERS)[number];

export function ProdukView() {
  const [filter, setFilter] = useState<Filter>("Semua");
  const visible =
    filter === "Semua" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHero page="produk" />

      {/* ============ KATALOG ============ */}
      <section className="relative pb-20 md:pb-28" aria-label="Katalog produk">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {PRODUCT_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  filter === f
                    ? "text-ivory"
                    : "border border-line bg-paper text-ink-soft hover:border-emerald/50 hover:text-emerald"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald to-emerald-soft shadow-[0_8px_22px_rgba(14,91,67,0.3)]"
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
                  className="group relative overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_4px_20px_rgba(28,42,34,0.07)] transition-colors duration-500 hover:border-gold/55 hover:shadow-[0_24px_56px_rgba(201,150,43,0.18)]"
                >
                  <div className="relative aspect-[4/4.4] overflow-hidden bg-cream-2">
                    <Image
                      src={p.image}
                      alt={`${p.name} — produksi ${SITE.name} Tasikmalaya`}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                      className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                      aria-hidden="true"
                    />
                    <span className="absolute top-4 left-4 rounded-full border border-gold/40 bg-night/70 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-gold-2 backdrop-blur-sm">
                      {p.category}
                    </span>
                    {p.tag && (
                      <span className="absolute top-4 right-4 rounded-full bg-gold px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-night shadow-[0_4px_14px_rgba(201,150,43,0.4)]">
                        {p.tag}
                      </span>
                    )}

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-display text-xl font-bold text-ivory">{p.name}</h3>
                      <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-ivory/80 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <Reveal delay={0.1}>
            <p className="mt-12 text-center text-sm text-ink-soft">
              Ingin melihat sampel fisik atau katalog lengkap dengan pilihan bahan?{" "}
              <WaButton
                href={waLink(
                  "Assalamualaikum, saya ingin melihat katalog lengkap produk Mulya Konveksi.",
                )}
                className="ml-2 !px-6 !py-2.5 text-sm"
              >
                Minta Katalog
              </WaButton>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ DOKUMENTASI WORKSHOP ============ */}
      <section className="relative bg-cream-2 py-20 md:py-28" aria-label="Dokumentasi workshop">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Di Balik Setiap Potong"
            title="Langsung dari"
            highlight="Workshop Kami"
            desc="Semua produk di atas dijahit di workshop kami sendiri di Kp. Cibeureum — berikut potret aslinya."
          />
          <div className="mt-14">
            <WorkshopGallery compact />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
