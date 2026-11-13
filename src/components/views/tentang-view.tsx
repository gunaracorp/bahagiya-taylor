"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { NeedleIcon, Reveal, SectionHeading, WaButton, EASE_OUT } from "@/components/motion-primitives";
import { PageHero } from "@/components/motion-primitives";
import { WorkshopGallery } from "@/components/workshop-gallery";
import { CtaBanner } from "@/components/cta-banner";
import { VALUES, TIMELINE, SITE, waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";

const MISI = [
  "Memberi kualitas jahitan yang bisa dipertanggungjawabkan di setiap pesanan, dari satu potong hingga ribuan.",
  "Menerapkan kontrol kualitas bertahap: pola, cutting, jahitan, hingga finishing.",
  "Menjaga komunikasi yang jujur tentang kemampuan, harga, dan waktu pengerjaan.",
  "Mendukung ekonomi lokal Tasikmalaya dengan penjahit-penjahit terampil setempat.",
];

export function TentangView() {
  const tlRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: tlRef,
    offset: ["start 0.72", "end 0.85"],
  });
  const spring = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const needleTop = useTransform(spring, (v) => `calc(${(v * 100).toFixed(2)}% - 10px)`);

  return (
    <>
      <PageHero page="tentang" />

      {/* ============ NARASI + KOLASE ============ */}
      <section className="relative pb-20 md:pb-28" aria-label="Kisah kami">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          {/* Kolase gambar */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <motion.div
              className="stitch-frame relative aspect-[4/3.4] overflow-hidden rounded-[2.5rem] border border-line bg-paper shadow-[0_30px_80px_rgba(28,42,34,0.16)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
            >
              <Image
                src="/images/about-hands-bright.png"
                alt="Tangan penjahit Mulya Konveksi mengarahkan kain di bawah jarum mesin"
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute -right-4 -bottom-10 w-[46%] overflow-hidden rounded-3xl border border-line shadow-[0_24px_60px_rgba(28,42,34,0.2)] md:-right-10"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.15 }}
            >
              <div className="relative aspect-[4/4.6]">
                <Image
                  src="/images/workshop/ws-produksi.jpg"
                  alt="Tim penjahit bekerja di ruang produksi workshop"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <Reveal delay={0.3} className="absolute -left-3 top-8 md:-left-8">
              <div className="animate-floaty rounded-2xl border border-line bg-paper px-5 py-4 shadow-[0_14px_36px_rgba(28,42,34,0.16)]">
                <p className="font-display text-3xl font-bold text-emerald">2025</p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft">
                  Fasilitas baru di Cibeureum
                </p>
              </div>
            </Reveal>
          </div>

          {/* Narasi */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Kisah Kami"
              title="Perjalanan Panjang"
              highlight="Seutas Benang"
              after=" — dan Rasa"
            />
            <Reveal delay={0.25}>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  {SITE.name} — {SITE.brandLine} — lahir di {SITE.city} pada tahun{" "}
                  {SITE.estYear} dari keyakinan sederhana: busana berkualitas tidak harus datang
                  dari kota besar. Dari ruang kerja yang sederhana, kami membangun reputasi satu
                  pesanan demi satu pesanan — hingga dipercaya sekolah, komunitas, brand owner,
                  dan pelanggan retail di sekitar Jawa Barat.
                </p>
                <p>
                  Tahun {SITE.moveYear} menjadi babak baru: kami pindah ke fasilitas baru di{" "}
                  <span className="font-semibold text-ink">
                    Jl. Karikil, Kp. Cibeureum, Kel. Cipari, Kec. Mangkubumi
                  </span>{" "}
                  — ruang produksi yang lebih luas, lebih terang, dan dirancang untuk standar
                  kualitas yang lebih tinggi lagi. Mesin bertambah, alur kerja lebih rapi, dan
                  semangatnya tetap sama seperti hari pertama.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 rounded-3xl border border-gold/40 bg-gold/10 p-6">
                <p className="font-display text-xl italic text-ink md:text-2xl">
                  &ldquo;Setiap order adalah amanah yang kami jaga hingga benang terakhir.&rdquo;
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-gold-deep">
                  — Prinsip kerja {SITE.shortName}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ LINIMASA ============ */}
      <section className="relative bg-cream-2 py-20 md:py-28" aria-label="Linimasa perusahaan">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Jejak Perjalanan"
            title="Dari 2020 Sampai"
            highlight="Hari Ini"
            desc="Empat babak yang membentuk cara kami bekerja."
          />

          <div ref={tlRef} className="relative mt-16">
            {/* Benang tengah yang dijahit mengikuti scroll */}
            <div className="absolute top-0 left-[27px] h-full md:left-1/2 md:-translate-x-1/2" aria-hidden="true">
              <div className="h-full w-[2px] bg-line" />
              <motion.div
                className="stitch-line absolute inset-x-0 top-0 h-full w-[2px] origin-top"
                style={{ scaleY: spring }}
              />
              <motion.span className="absolute -left-[9px] text-gold" style={{ top: needleTop }}>
                <NeedleIcon className="h-5 w-5 rotate-90 drop-shadow-[0_0_8px_rgba(201,150,43,0.8)]" />
              </motion.span>
            </div>

            <ol className="space-y-12 md:space-y-16">
              {TIMELINE.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <li key={item.year} className="relative md:grid md:grid-cols-2 md:gap-16">
                    <motion.span
                      className="absolute top-0 left-0 z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/60 bg-paper font-display text-[13px] font-bold text-gold-deep shadow-[0_0_24px_rgba(201,150,43,0.25)]"
                      initial={{ scale: 0, rotate: -120 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      aria-hidden="true"
                    >
                      {item.year.length > 4 ? "★" : item.year}
                    </motion.span>

                    <Reveal
                      className={`pl-20 md:pl-0 ${
                        isLeft ? "md:col-start-1 md:pr-4 md:text-right" : "md:col-start-2 md:pl-4"
                      }`}
                      y={28}
                    >
                      <div
                        className={`card-spotlight group max-w-xl rounded-3xl border border-line bg-paper p-7 transition-colors duration-500 hover:border-gold/50 ${
                          isLeft ? "md:ml-auto" : ""
                        }`}
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-deep">
                          {item.year}
                        </p>
                        <h3 className="font-display mt-2 text-2xl font-bold text-ink transition-colors group-hover:text-emerald">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ NILAI ============ */}
      <section className="relative py-20 md:py-28" aria-label="Nilai perusahaan">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Nilai yang Kami Jaga"
            title="Empat Pondasi di Balik"
            highlight="Setiap Jahitan"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} className="h-full">
                <div className="card-spotlight group h-full rounded-3xl border border-line bg-paper p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_20px_50px_rgba(201,150,43,0.16)]">
                  <span className="font-display mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/12 text-xl font-bold text-gold-deep transition-transform duration-500 group-hover:scale-110">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VISI MISI ============ */}
      <section className="relative bg-cream-2 py-20 md:py-28" aria-label="Visi dan misi">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="stitch-frame relative flex h-full flex-col justify-center rounded-[2.5rem] border border-line bg-night p-9 text-ivory shadow-[0_24px_60px_rgba(12,43,33,0.35)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-2">
                Visi Kami
              </p>
              <p className="font-display mt-5 text-2xl leading-snug font-semibold md:text-3xl">
                Menjadi konveksi yang paling dipercaya di Tasikmalaya — tempat kualitas,
                kejujuran, dan ketepatan waktu bertemu dalam setiap potong jahitan.
              </p>
              <span
                className="absolute right-8 bottom-8 h-16 w-16 rounded-full border border-dashed border-gold/40"
                aria-hidden="true"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="h-full rounded-[2.5rem] border border-line bg-paper p-9 shadow-[0_10px_40px_rgba(28,42,34,0.08)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-deep">
                Misi Kami
              </p>
              <ul className="mt-6 space-y-4">
                {MISI.map((m, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-display mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-tint text-sm font-bold text-emerald">
                      {i + 1}
                    </span>
                    <p className="leading-relaxed text-ink-soft">{m}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ GALERI WORKSHOP ASLI ============ */}
      <section className="relative py-20 md:py-28" aria-label="Dokumentasi workshop">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Bukti Nyata"
            title="Dari Workshop Kami"
            highlight="Langsung"
            desc="Potret asli keseharian produksi di Kp. Cibeureum — karena kepercayaan harus bisa dilihat."
          />
          <div className="mt-14">
            <WorkshopGallery />
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <WaButton href={waLink(DEFAULT_WA_MESSAGE)}>
                Jadwalkan Kunjungan ke Workshop
              </WaButton>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
