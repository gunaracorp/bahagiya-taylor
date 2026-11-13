"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { NeedleIcon, Reveal, SectionHeading } from "@/components/motion-primitives";
import { PROCESS_STEPS } from "@/lib/site";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.72", "end 0.85"],
  });
  const spring = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const needleTop = useTransform(spring, (v) => `calc(${(v * 100).toFixed(2)}% - 10px)`);

  return (
    <section
      id="proses"
      className="relative overflow-hidden bg-ink-2/40 py-24 md:py-32"
      role="region"
      aria-label="Alur proses produksi"
    >
      <div
        className="pointer-events-none absolute -left-52 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/5 blur-[110px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Alur Kerja"
          title="Lima Langkah Menuju"
          highlight="Kesempurnaan"
          desc="Proses yang terstruktur bukan sekadar rutinitas — ia adalah jaminan bahwa pesanan Anda akan identik dengan sampel yang Anda setujui."
        />

        <div ref={ref} className="relative mt-20">
          {/* Benang tengah yang dijahit mengikuti scroll */}
          <div
            className="absolute left-[27px] top-0 h-full md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          >
            <div className="h-full w-[2px] bg-ink-3" />
            <motion.div
              className="stitch-line absolute inset-x-0 top-0 h-full w-[2px] origin-top"
              style={{ scaleY: spring }}
            />
            <motion.span className="absolute -left-[9px] text-gold" style={{ top: needleTop }}>
              <NeedleIcon className="h-5 w-5 rotate-90 drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]" />
            </motion.span>
          </div>

          <ol className="space-y-14 md:space-y-20">
            {PROCESS_STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={step.step} className="relative md:grid md:grid-cols-2 md:gap-16">
                  <motion.span
                    className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-ink font-display text-lg font-bold text-gold-3 shadow-[0_0_24px_rgba(201,162,39,0.25)]"
                    initial={{ scale: 0, rotate: -120 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden="true"
                  >
                    {step.step}
                  </motion.span>

                  <Reveal
                    className={`pl-20 md:pl-0 ${
                      isLeft ? "md:col-start-1 md:pr-4 md:text-right" : "md:col-start-2 md:pl-4"
                    }`}
                    y={28}
                  >
                    <div
                      className={`card-spotlight group max-w-xl rounded-3xl border border-border bg-ink/70 p-7 backdrop-blur-sm transition-colors duration-500 hover:border-gold/45 ${
                        isLeft ? "md:ml-auto" : ""
                      }`}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/70">
                        Tahap {step.step}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-ivory transition-colors group-hover:text-gold-3">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-sand">{step.desc}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
