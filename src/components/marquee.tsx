"use client";

import { NeedleIcon } from "@/components/motion-primitives";
import { MARQUEE_ITEMS } from "@/lib/site";

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="marquee-paused relative -rotate-[0.6deg] overflow-hidden border-y border-gold/25 bg-ink-2/90 py-5 backdrop-blur-sm"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap font-display text-lg font-semibold italic text-ivory/85 md:text-xl">
              {item}
            </span>
            <NeedleIcon className="h-4.5 w-4.5 shrink-0 text-gold" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
