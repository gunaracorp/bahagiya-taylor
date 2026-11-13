"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion-primitives";
import { TESTIMONIALS } from "@/lib/site";

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="Penilaian lima bintang">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section
      className="relative overflow-hidden border-y border-border bg-ink-2/40 py-24"
      role="region"
      aria-label="Testimoni pelanggan"
    >
      <div className="mx-auto mb-14 max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="section-ornament text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-2">
              Kata Mereka
            </span>
            <h2 className="font-display text-4xl font-semibold text-ivory-gradient md:text-5xl">
              Bisik-bisik dari <em className="text-gold-gradient font-bold not-italic">Pelanggan</em>
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="marquee-paused relative" aria-hidden="false">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-2 to-transparent md:w-40" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-2 to-transparent md:w-40" aria-hidden="true" />

        <div className="flex w-max animate-marquee-slow gap-6 px-6">
          {items.map((t, i) => (
            <figure
              key={i}
              className="relative flex w-[320px] shrink-0 flex-col gap-4 rounded-3xl border border-border bg-ink/75 p-7 backdrop-blur-sm md:w-[380px]"
            >
              <span className="absolute -top-4 right-8 opacity-25" aria-hidden="true">
                <Image src="/images/logo-emblem.png" alt="" width={38} height={38} className="rounded-full" />
              </span>
              <Stars />
              <blockquote className="flex-1 text-sm leading-relaxed text-ivory/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p className="font-display text-base font-bold text-gold-3">{t.name}</p>
                <p className="mt-1 text-xs text-sand">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
