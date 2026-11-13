"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Counter, EASE_OUT, NeedleIcon } from "@/components/motion-primitives";
import { DEFAULT_WA_MESSAGE, SITE, STATS, waLink } from "@/lib/site";

type Segment = { text: string; gold?: boolean };

function HeadlineLine({ segments, delay }: { segments: Segment[]; delay: number }) {
  return (
    <span className="block overflow-hidden pb-1">
      {segments.map((seg, si) =>
        seg.text.split(" ").map((word, wi) => (
          <motion.span
            key={`${si}-${wi}-${word}`}
            className={`inline-block will-change-transform ${
              seg.gold ? "text-gold-gradient font-bold" : ""
            }`}
            initial={{ y: "115%", rotate: 4 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.95, ease: EASE_OUT, delay: delay + wi * 0.09 }}
          >
            {word}
            {"\u00A0"}
          </motion.span>
        ))
      )}
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Paralaks mouse untuk emblem
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });

  const onMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 26);
    my.set((e.clientY / innerHeight - 0.5) * 26);
  };

  return (
    <section
      id="beranda"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      role="region"
      aria-label="Pembuka"
    >
      {/* Latar atelier sinematik */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <motion.div
          className="absolute inset-[-3%]"
          initial={{ scale: 1.02 }}
          animate={{ scale: 1.14 }}
          transition={{ duration: 26, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          <Image
            src="/images/hero-atelier.png"
            alt="Interior atelier konveksi dengan mesin jahit dan kain premium dalam cahaya keemasan"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Overlay gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,10,7,0.55)_100%)]" aria-hidden="true" />

      {/* Cahaya bergerak */}
      <motion.div
        className="pointer-events-none absolute -top-1/4 left-1/3 h-[80vh] w-[45vw] rounded-full bg-gold/10 blur-[120px]"
        animate={{ x: [-40, 60, -40], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Emblem mengambang dengan paralaks mouse */}
      <motion.div
        className="pointer-events-none absolute right-[6%] top-[22%] hidden xl:block"
        style={{ x: smx, y: smy }}
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -14 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: EASE_OUT, delay: 2.7 }}
          className="animate-floaty"
        >
          <div className="relative h-44 w-44 overflow-hidden rounded-full border border-gold/35 shadow-[0_20px_60px_rgba(201,162,39,0.28)]">
            <Image
              src="/images/logo-emblem.png"
              alt=""
              fill
              sizes="176px"
              className="object-cover"
            />
          </div>
          <motion.div
            className="absolute -inset-3 rounded-full border border-dashed border-gold/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>

      {/* Konten */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-16 md:px-8"
        style={{ y: contentY, opacity: fade }}
      >
        <motion.div
          className="mb-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-gold/30 bg-ink/40 px-4 py-2 backdrop-blur-sm"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 2.45 }}
        >
          <NeedleIcon className="h-4 w-4 text-gold-2" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-2">
            Konveksi Premium · {SITE.city} · Est. {SITE.estYear}
          </span>
        </motion.div>

        <h1 className="font-display max-w-4xl text-[2.65rem] font-semibold leading-[1.06] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
          <HeadlineLine delay={2.55} segments={[{ text: "Menenun Kualitas," }]} />
          <HeadlineLine
            delay={2.8}
            segments={[{ text: "Merajut" }, { text: "Kepercayaan", gold: true }]}
          />
        </h1>

        <motion.p
          className="mt-7 max-w-xl text-base leading-relaxed text-sand md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 3.15 }}
        >
          {SITE.type} di jantung {SITE.city}. Dari seragam instansi hingga busana custom —
          setiap jahitan dikerjakan dengan presisi, integritas, dan garansi.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 3.35 }}
        >
          <motion.a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="shine-btn animate-glow inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-2 px-8 py-4 font-bold text-ink"
            whileHover={{ scale: 1.045 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.1.2-.3.3-.5v-.5L9.6 7.6c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2-.8 3.2.3 1.4 1.2 2.7 2 3.7a11 11 0 0 0 4.3 3.5c1.9.8 2.6.8 3.5.7.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.2-.5Z" />
            </svg>
            Konsultasi Gratis via WhatsApp
          </motion.a>

          <motion.a
            href="#portofolio"
            className="inline-flex items-center gap-2.5 rounded-full border border-ivory/25 px-8 py-4 font-semibold text-ivory backdrop-blur-sm transition-colors hover:border-gold/60 hover:text-gold-3"
            whileHover={{ scale: 1.045 }}
            whileTap={{ scale: 0.96 }}
          >
            Jelajahi Portofolio
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Statistik */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE_OUT, delay: 3.6 }}
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-ink/70 px-6 py-5 backdrop-blur-sm">
              <p className="font-display text-2xl font-bold text-gold-gradient md:text-3xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sand md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Indikator gulir */}
      <motion.a
        href="#tentang"
        aria-label="Gulir ke bagian tentang"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}
        style={{ opacity: fade }}
      >
        <span className="flex h-12 w-7 items-start justify-center rounded-full border border-gold/40 p-2">
          <span
            className="block h-2 w-1 rounded-full bg-gold-2"
            style={{ animation: "scroll-dot 1.8s ease-in-out infinite" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
