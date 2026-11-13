"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Reveal, SectionHeading, NeedleIcon, WaButton, EASE_OUT, Counter } from "@/components/motion-primitives";
import { PageLink } from "@/components/page-link";
import { PillarGrid } from "@/components/pillar-cards";
import { CtaBanner } from "@/components/cta-banner";
import { DEFAULT_WA_MESSAGE, PRODUCTS, SEGMENTS, SITE, STATS, waLink } from "@/lib/site";
import {
  Boxes,
  Briefcase,
  Dumbbell,
  Heart,
  School,
  Sparkles,
  Store,
  type LucideIcon,
} from "lucide-react";

const SEGMENT_ICONS: Record<string, LucideIcon> = {
  school: School,
  briefcase: Briefcase,
  dumbbell: Dumbbell,
  store: Store,
  boxes: Boxes,
  sparkles: Sparkles,
  heart: Heart,
};

const PROMISES = ["Garansi Jahitan", "Harga Langsung Produsen", "Sampel Disetujui Dulu", "Tepat Waktu"];

function HeadlineWord({ text, gold, delay }: { text: string; gold?: boolean; delay: number }) {
  return (
    <motion.span
      className={`inline-block will-change-transform ${gold ? "text-emerald-gradient" : ""}`}
      initial={{ y: "115%", rotate: 4, opacity: 0 }}
      animate={{ y: 0, rotate: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay }}
    >
      {text}
      {"\u00A0"}
    </motion.span>
  );
}

export function BerandaView({ base }: { base: number }) {
  // Paralaks mouse lembut untuk komposisi gambar
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });

  const onMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 18);
    my.set((e.clientY / innerHeight - 0.5) * 18);
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="pattern-soft relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
        role="region"
        aria-label="Pembuka"
        onMouseMove={onMouseMove}
      >
        <div
          className="pointer-events-none absolute -top-40 right-[-8%] h-[460px] w-[460px] rounded-full bg-emerald-tint blur-[110px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-terra-tint blur-[110px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-10">
          {/* Konten kiri */}
          <div>
            <motion.div
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald/25 bg-paper px-4 py-2 shadow-[0_2px_14px_rgba(14,91,67,0.08)]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: base }}
            >
              <NeedleIcon className="h-4 w-4 text-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald">
                Konveksi · {SITE.city} · Est. {SITE.estYear}
              </span>
            </motion.div>

            <h1 className="font-display max-w-2xl text-[2.7rem] leading-[1.06] font-semibold text-ink sm:text-6xl lg:text-[4.4rem]">
              <span className="block overflow-hidden pb-1">
                <HeadlineWord text="Menjahit" delay={base + 0.1} />
                <HeadlineWord text="Kualitas," delay={base + 0.2} />
              </span>
              <span className="block overflow-hidden pb-2">
                <HeadlineWord text="Merajut" delay={base + 0.32} />
                <HeadlineWord text="Kepercayaan." gold delay={base + 0.42} />
              </span>
            </h1>

            <motion.p
              className="mt-6 max-w-xl leading-relaxed text-ink-soft md:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE_OUT, delay: base + 0.55 }}
            >
              <span className="font-semibold text-ink">{SITE.name} — {SITE.brandLine}</span>.
              Produsen busana di jantung {SITE.city} sejak {SITE.estYear}:{" "}
              <span className="font-semibold text-emerald">
                produksi konveksi, pesanan khusus, grosir &amp; distribusi, hingga penjualan
                retail
              </span>{" "}
              — semua dengan jahitan presisi dan garansi.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE_OUT, delay: base + 0.7 }}
            >
              <WaButton href={waLink(DEFAULT_WA_MESSAGE)}>Konsultasi Gratis</WaButton>
              <PageLink
                page="produk"
                className="inline-flex items-center gap-2.5 rounded-full border border-emerald/30 bg-paper px-8 py-4 font-bold text-emerald shadow-[0_2px_14px_rgba(14,91,67,0.08)] transition-colors hover:border-gold/60 hover:text-gold-deep"
              >
                Jelajahi Produk
              </PageLink>
            </motion.div>

            <motion.ul
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: base + 0.9 }}
            >
              {PROMISES.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm font-semibold text-ink-soft">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-emerald">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M5 8.2l2 2 4-4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Komposisi gambar kanan */}
          <motion.div
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE_OUT, delay: base + 0.35 }}
          >
            <motion.div style={{ x: smx, y: smy }} className="relative">
              {/* Benang menggambar di belakang */}
              <svg
                className="pointer-events-none absolute -top-10 -left-10 w-[120%] opacity-80"
                viewBox="0 0 600 240"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 200 C 120 60, 260 240, 380 110 S 560 40, 600 90"
                  stroke="#c9962b"
                  strokeWidth="1.8"
                  strokeDasharray="1.5 9"
                  strokeLinecap="round"
                  className="thread-path"
                />
              </svg>

              <div className="stitch-frame relative aspect-[4/3] overflow-hidden rounded-[3rem] border border-line bg-paper shadow-[0_30px_80px_rgba(28,42,34,0.18)]">
                <Image
                  src="/images/hero-workshop.png"
                  alt="Ruang produksi konveksi Mulya Konveksi yang terang dengan deretan mesin jahit"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover"
                />
              </div>

              {/* Kartu melayang: Est 2020 */}
              <div className="animate-floaty absolute -left-4 top-8 rounded-2xl border border-line bg-paper px-5 py-3.5 shadow-[0_14px_36px_rgba(28,42,34,0.16)] md:-left-8">
                <p className="font-display text-2xl font-bold text-emerald">2020</p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft">
                  Berdiri di Tasikmalaya
                </p>
              </div>

              {/* Kartu melayang: kategori produk */}
              <div className="animate-floaty-late absolute -bottom-8 right-2 flex items-center gap-3 rounded-2xl border border-line bg-paper p-3 pr-5 shadow-[0_14px_36px_rgba(28,42,34,0.16)] md:-right-6">
                <span className="relative block h-12 w-12 overflow-hidden rounded-xl border border-line">
                  <Image
                    src="/images/prod-kaos.png"
                    alt="Contoh produk kaos produksi"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="font-display block text-lg leading-tight font-bold text-ink">
                    9+ Kategori
                  </span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">
                    Busana Diproduksi
                  </span>
                </span>
              </div>

              {/* Jarum melayang */}
              <span className="animate-spin-slower absolute -top-8 right-10 hidden h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-paper text-gold shadow-[0_10px_26px_rgba(201,150,43,0.25)] md:flex">
                <NeedleIcon className="h-6 w-6" />
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Statistik */}
        <div className="relative mx-auto mt-20 max-w-7xl px-5 md:mt-28 md:px-8">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-[0_10px_40px_rgba(28,42,34,0.08)] md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-paper px-6 py-6 text-center">
                  <p className="font-display text-3xl font-bold text-emerald md:text-4xl">
                    {stat.plain ? (
                      <span>{stat.value}</span>
                    ) : (
                      <Counter value={stat.value} suffix={stat.suffix} />
                    )}
                  </p>
                  <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft md:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= PILAR USAHA ================= */}
      <section className="relative py-20 md:py-28" role="region" aria-label="Empat pilar usaha">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Empat Pilar Usaha"
            title="Satu Rumah Produksi,"
            highlight="Empat Keunggulan"
            desc="Produksi konveksi, pesanan khusus, grosir & distribusi, dan penjualan retail — Anda bisa mulai dari satu potong sampai ribuan, semua ditangani dengan standar yang sama."
          />
          <div className="mt-14">
            <PillarGrid />
          </div>
        </div>
      </section>

      {/* ================= PRODUK UNGGULAN ================= */}
      <section className="relative bg-cream-2 py-20 md:py-28" role="region" aria-label="Produk unggulan">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Produk Unggulan"
              title="Karya yang"
              highlight="Bicara"
              desc="Sebagian kategori yang paling sering dipesan — dari seragam sekolah hingga busana kustom."
            />
            <Reveal delay={0.2}>
              <PageLink
                page="produk"
                className="group inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-paper px-6 py-3 text-sm font-bold text-emerald transition-colors hover:border-gold/60 hover:text-gold-deep"
              >
                Lihat Semua Produk
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </PageLink>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.slice(0, 4).map((p, i) => (
              <motion.article
                key={p.name}
                className="group relative overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_4px_20px_rgba(28,42,34,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_24px_56px_rgba(201,150,43,0.2)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE_OUT }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.name} — produksi ${SITE.name}`}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 24vw"
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                  />
                  {p.tag && (
                    <span className="absolute left-4 top-4 rounded-full bg-night/85 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-gold-2 backdrop-blur-sm">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-deep">
                    {p.category}
                  </p>
                  <h3 className="font-display mt-1 text-lg font-bold text-ink">{p.name}</h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ink-soft">
                    {p.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ALUR KERJA ================= */}
      <section className="relative py-20 md:py-28" role="region" aria-label="Alur kerja produksi">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Alur Kerja"
            title="Lima Langkah Menuju"
            highlight="Pesanan Sempurna"
            desc="Proses yang terstruktur adalah jaminan bahwa hasil produksi Anda identik dengan sampel yang Anda setujui."
          />

          <div className="relative mt-16">
            <div
              className="stitch-border absolute inset-x-16 top-9 hidden h-[2px] lg:block"
              aria-hidden="true"
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {[
                { n: "01", t: "Konsultasi", d: "Ceritakan kebutuhan & target Anda" },
                { n: "02", t: "Desain & Bahan", d: "Pola, bahan, dan detail disepakati" },
                { n: "03", t: "Sampel", d: "Sampel fisik direvisi sampai puas" },
                { n: "04", t: "Produksi & QC", d: "Dikerjakan & diperiksa per potong" },
                { n: "05", t: "Penyerahan", d: "Rapi, tepat waktu, bergaransi" },
              ].map((s, i) => (
                <motion.div
                  key={s.n}
                  className="relative text-center lg:text-left"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: EASE_OUT }}
                >
                  <span className="mx-auto mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-emerald/25 bg-paper font-display text-xl font-bold text-emerald shadow-[0_8px_24px_rgba(14,91,67,0.12)] lg:mx-0">
                    {s.n}
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">{s.t}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <p className="mt-12 text-center text-sm text-ink-soft">
              Ingin melihat alur kerja lengkap beserta detailnya?{" "}
              <PageLink
                page="layanan"
                className="font-bold text-emerald underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold-deep"
              >
                Buka halaman Layanan
              </PageLink>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= SEGMENTASI ================= */}
      <section className="relative bg-cream-2 py-20 md:py-28" role="region" aria-label="Siapa yang kami layani">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Melayani Berbagai Kebutuhan"
            title="Dari Sekolah Sampai"
            highlight="Brand Owner"
            desc="Tujuh segmen pelanggan yang rutin kami layani — masing-masing dengan jalur produksi yang disesuaikan."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 xl:gap-3">
            {SEGMENTS.map((seg, i) => {
              const Icon = SEGMENT_ICONS[seg.icon];
              return (
                <motion.div
                  key={seg.title}
                  className="card-spotlight group flex flex-col items-center rounded-3xl border border-line bg-paper p-5 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50"
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.65, delay: i * 0.07, ease: EASE_OUT }}
                  onMouseMove={(e) => {
                    const el = e.currentTarget;
                    const rect = el.getBoundingClientRect();
                    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
                  }}
                >
                  <span className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-full border border-emerald/25 bg-emerald-tint text-emerald transition-colors duration-500 group-hover:bg-gold/15 group-hover:text-gold-deep">
                    <Icon className="h-5.5 w-5.5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-[15px] leading-tight font-bold text-ink">
                    {seg.title}
                  </h3>
                  <p className="mt-2 text-[11.5px] leading-relaxed text-ink-soft">{seg.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
