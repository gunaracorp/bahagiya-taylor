"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
import { SITE } from "@/lib/site";

const VALUES = [
  { title: "Presisi", desc: "Akurasi ukuran & pola di setiap potong" },
  { title: "Integritas", desc: "Transparan dari harga hingga bahan" },
  { title: "Tepat Waktu", desc: "Deadline adalah komitmen, bukan janji" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [90, -70]);

  return (
    <section id="tentang" className="relative overflow-hidden py-24 md:py-32" role="region" aria-label="Tentang kami">
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-gold/5 blur-[100px]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Kolase gambar paralaks */}
        <div ref={ref} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <motion.div
            style={{ y: y1 }}
            className="gold-frame relative aspect-[4/3.4] overflow-hidden rounded-3xl border border-gold/30 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="/images/about-hands.png"
              alt="Tangan penjahit terampil mengarahkan kain di bawah jarum mesin"
              fill
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="absolute -bottom-10 -right-4 w-[46%] overflow-hidden rounded-2xl border border-gold/40 shadow-[0_24px_60px_rgba(0,0,0,0.55)] md:-right-10"
          >
            <div className="relative aspect-square">
              <Image
                src="/images/workshop-team.png"
                alt="Tim penjahit melakukan pemeriksaan kualitas di workshop"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <Reveal delay={0.3} className="absolute -left-3 top-8 md:-left-8">
            <div className="animate-floaty rounded-2xl border border-gold/40 bg-ink/85 px-5 py-4 backdrop-blur-md">
              <p className="font-display text-3xl font-bold text-gold-gradient">2020</p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sand">
                Berdiri di Tasikmalaya
              </p>
            </div>
          </Reveal>
        </div>

        {/* Narasi */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Tentang Kami"
            title="Perjalanan Panjang"
            highlight="Seutas Benang"
            after=" — dan Rasa"
          />
          <Reveal delay={0.25}>
            <div className="mt-6 space-y-5 leading-relaxed text-sand">
              <p>
                {SITE.name} lahir di {SITE.city} pada tahun {SITE.estYear} dari keyakinan sederhana:
                busana berkualitas tidak harus datang dari kota besar. Dari ruang kerja yang
                sederhana, kami perlahan membangun reputasi satu pesanan demi satu pesanan —
                hingga dipercaya sekolah, instansi, komunitas, dan brand owner di sekitar
                Jawa Barat.
              </p>
              <p>
                Tahun {SITE.moveYear} menjadi babak baru: kami pindah ke fasilitas baru di{" "}
                <span className="font-semibold text-ivory">
                  Kp. Cibeureum, Kel. Cipari, Kec. Mangkubumi
                </span>{" "}
                — ruang produksi yang lebih besar, lebih terang, dan dirancang untuk melewati
                standar kualitas yang lebih tinggi lagi. Mesin lebih modern, alur kerja lebih rapi,
                semangatnya tetap sama seperti hari pertama.
              </p>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.15 * i} className="h-full">
                <div className="card-spotlight h-full rounded-2xl border border-border bg-ink-2/60 p-5 transition-colors duration-300 hover:border-gold/40">
                  <p className="font-display text-lg font-bold text-gold-3">✦ {v.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-sand">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <p className="mt-9 font-display text-2xl italic text-gold-2">
              &ldquo;Setiap order adalah amanah yang kami jaga hingga benang terakhir.&rdquo;
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
