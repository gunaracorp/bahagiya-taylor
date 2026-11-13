"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Reveal,
  SectionHeading,
  NeedleIcon,
  WaButton,
  EASE_OUT,
} from "@/components/motion-primitives";
import { PageHero } from "@/components/motion-primitives";
import { PillarGrid } from "@/components/pillar-cards";
import { CtaBanner } from "@/components/cta-banner";
import { FAQ, MATERIALS, PROCESS_STEPS, SERVICES, waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";
import {
  Briefcase,
  Dumbbell,
  Flower2,
  Layers,
  Scissors,
  School,
  Shirt,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  school: School,
  shirt: Shirt,
  dumbbell: Dumbbell,
  jacket: Layers,
  flower: Flower2,
  briefcase: Briefcase,
  sparkles: Sparkles,
  scissors: Scissors,
};

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border transition-colors duration-300 ${
        open ? "border-gold/60 bg-paper shadow-[0_10px_30px_rgba(201,150,43,0.14)]" : "border-line bg-paper hover:border-emerald/40"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-bold text-ink md:text-lg">{q}</span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open ? "rotate-45 border-gold bg-gold/15 text-gold-deep" : "border-emerald/30 text-emerald"
          }`}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function LayananView() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <PageHero page="layanan" />

      {/* ============ 4 PILAR DETAIL ============ */}
      <section className="relative pb-20 md:pb-24" aria-label="Empat pilar layanan">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Empat Pilar Usaha"
            title="Pilih Jalur yang"
            highlight="Cocok untuk Anda"
            desc="Empat jalur pelayanan yang berdiri di atas standar produksi yang sama — fleksibel untuk kebutuhan sekecil apa pun hingga partai besar."
          />
          <div className="mt-14">
            <PillarGrid detailed />
          </div>
        </div>
      </section>

      {/* ============ BENDA BAHAN (strip paralaks) ============ */}
      <section className="relative overflow-hidden" aria-label="Bahan berkualitas">
        <div className="relative h-[340px] md:h-[420px]">
          <Image
            src="/images/kain-rolls.png"
            alt="Rak gulungan kain warna-warni siap produksi"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night/80 via-night/40 to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
              <div className="max-w-xl text-ivory">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-2">
                  Bahan &amp; Material
                </p>
                <h2 className="font-display mt-4 text-3xl leading-tight font-semibold md:text-4xl">
                  Kain terkurasi, <em className="text-gold-gradient font-bold not-italic">warna konsisten</em>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ivory/80 md:text-base">
                  Kami membantu memilih bahan yang paling cocok untuk fungsi busana Anda — dari
                  cotton combed yang lembut hingga bahan performa yang cepat kering, lengkap dengan
                  konsultasi sebelum sampel dibuat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 8 JALUR LAYANAN ============ */}
      <section className="relative py-20 md:py-28" aria-label="Jalur layanan produksi">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Jalur Produksi"
            title="Delapan Jalur,"
            highlight="Satu Standar Emas"
            desc="Dari pemilihan bahan, pola, jahitan, hingga pengemasan — semuanya melewati kontrol kualitas yang sama, apa pun skala pesanan Anda."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((svc, i) => {
              const Icon = SERVICE_ICONS[svc.icon];
              return (
                <motion.div
                  key={svc.title}
                  className="card-spotlight group relative flex flex-col rounded-3xl border border-line bg-paper p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold/55 hover:shadow-[0_24px_56px_rgba(201,150,43,0.16)]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: (i % 4) * 0.1, ease: EASE_OUT }}
                  onMouseMove={(e) => {
                    const el = e.currentTarget;
                    const rect = el.getBoundingClientRect();
                    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
                  }}
                >
                  <span
                    className="font-display pointer-events-none absolute top-4 right-5 text-4xl font-bold text-emerald/5 transition-colors duration-500 group-hover:text-gold/15"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <span className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl border border-emerald/25 bg-emerald-tint text-emerald transition-all duration-500 group-hover:scale-110 group-hover:border-gold/55 group-hover:bg-gold/12 group-hover:text-gold-deep">
                    <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg leading-snug font-bold text-ink transition-colors group-hover:text-emerald">
                    {svc.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-soft">{svc.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Chip bahan */}
          <Reveal delay={0.1}>
            <div className="mt-14 rounded-3xl border border-line bg-cream-2 p-7 md:p-9">
              <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                Pilihan bahan yang rutin kami kerjakan
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {MATERIALS.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-emerald/25 bg-paper px-4 py-2 text-xs font-semibold text-emerald transition-colors hover:border-gold/50 hover:text-gold-deep"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-ink-soft">
                Butuh bahan di luar daftar? Konsultasikan — kami bantu mencarikan dari jaringan
                supplier tekstil Jawa Barat.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ GROSIR BAND ============ */}
      <section className="relative bg-cream-2 py-20 md:py-28" aria-label="Grosir dan distribusi">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="stitch-frame relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-line bg-paper shadow-[0_24px_60px_rgba(28,42,34,0.14)]">
              <Image
                src="/images/grosir-warehouse.png"
                alt="Tumpukan pakaian terlipat dan kardus pengiriman untuk distribusi grosir"
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Grosir & Distribusi"
              title="Suplai Rutin untuk"
              highlight="Toko & Reseller"
              desc="Anda menjual, kami yang memproduksi. Skema kemitraan grosir dirancang agar stok toko Anda selalu terisi dengan harga langsung dari produsen."
            />
            <div className="mt-7 space-y-4">
              {[
                ["Harga produsen", "Tanpa perantara — margin bisnis Anda lebih sehat."],
                ["Konsistensi batch", "Warna & ukuran seragam antar pengiriman."],
                ["Kemasan siap kirim", "Rapi, tercatat, dan siap difoto untuk katalog Anda."],
                ["Pengiriman luas", "Melayani pengiriman ke berbagai kota di Indonesia."],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.08}>
                  <div className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-5">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-tint text-emerald">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8.5l3.2 3.2L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink">{t}</h3>
                      <p className="mt-1 text-sm text-ink-soft">{d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ALUR KERJA LENGKAP ============ */}
      <section className="relative py-20 md:py-28" aria-label="Alur kerja lengkap">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Alur Kerja"
            title="Lima Langkah Menuju"
            highlight="Kesempurnaan"
            desc="Proses yang terstruktur bukan sekadar rutinitas — ia adalah jaminan bahwa pesanan Anda akan identik dengan sampel yang Anda setujui."
          />

          <ol className="mt-16 space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.step}>
                <Reveal delay={i * 0.05} y={28}>
                  <div className="card-spotlight group relative flex flex-col gap-5 rounded-3xl border border-line bg-paper p-7 transition-all duration-500 hover:border-gold/50 md:flex-row md:items-center">
                    <span className="font-display flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald to-emerald-deep text-2xl font-bold text-ivory shadow-[0_10px_26px_rgba(14,91,67,0.3)] transition-transform duration-500 group-hover:scale-110">
                      {step.step}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-emerald md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-ink-soft">{step.desc}</p>
                    </div>
                    <NeedleIcon className="hidden h-6 w-6 shrink-0 text-gold/60 md:block" />
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="relative bg-cream-2 py-20 md:py-28" aria-label="Pertanyaan umum">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Tanya Jawab"
            title="Hal yang Paling Sering"
            highlight="Ditanyakan"
          />
          <div className="mt-12 space-y-4">
            {FAQ.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-10 text-center">
              <p className="text-sm text-ink-soft">
                Pertanyaan lain? Kami jawab langsung — cepat dan jelas.
              </p>
              <div className="mt-5">
                <WaButton href={waLink(DEFAULT_WA_MESSAGE)}>Tanya via WhatsApp</WaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
