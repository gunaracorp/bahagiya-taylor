"use client";

import {
  motion,
  useInView,
  useMotionValue,
  animate,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { PAGE_TITLES, type PageId } from "@/lib/router";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_OUT, delay: i * 0.12 },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
  y = 34,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.85, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  value,
  suffix = "",
  duration = 2.2,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const unsub = mv.on("change", (v) => {
      setDisplay(Math.round(v).toLocaleString("id-ID"));
    });
    return unsub;
  }, [mv]);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [inView, value, duration, mv]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  after,
  desc,
  align = "center",
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  after?: string;
  desc?: string;
  align?: "center" | "left";
  onDark?: boolean;
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-5 ${alignCls}`}>
      <Reveal>
        <span
          className={`section-ornament text-[11px] font-bold uppercase tracking-[0.35em] ${
            onDark ? "text-gold-2" : "text-gold-deep"
          }`}
        >
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`font-display max-w-3xl text-4xl leading-[1.14] font-semibold md:text-5xl lg:text-[3.3rem] ${
            onDark ? "text-ivory" : "text-ink-gradient"
          }`}
        >
          {title}{" "}
          {highlight && (
            <em
              className={`font-bold not-italic ${
                onDark ? "text-gold-gradient" : "text-emerald-gradient"
              }`}
            >
              {highlight}
            </em>
          )}
          {after}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.2}>
          <p
            className={`max-w-2xl leading-relaxed ${
              onDark ? "text-ivory/70" : "text-ink-soft"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Hero kecil untuk halaman Tentang/Layanan/Produk/Kontak */
export function PageHero({ page, children }: { page: PageId; children?: ReactNode }) {
  const meta = PAGE_TITLES[page];
  return (
    <section className="pattern-soft relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-20">
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[380px] w-[380px] rounded-full bg-emerald-tint blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-60%] left-[-6%] h-[320px] w-[320px] rounded-full bg-terra-tint blur-[90px]"
        aria-hidden="true"
      />
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-6 mx-auto w-full max-w-4xl opacity-70"
        viewBox="0 0 800 60"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 44 C 130 10, 260 58, 400 30 S 660 8, 800 38"
          stroke="#c9962b"
          strokeWidth="1.6"
          strokeDasharray="1 8"
          strokeLinecap="round"
          className="thread-path"
        />
        <circle cx="400" cy="30" r="3" fill="#0e5b43" />
      </svg>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.span
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald/25 bg-paper px-4 py-2 shadow-[0_2px_14px_rgba(14,91,67,0.08)]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.05 }}
        >
          <NeedleIcon className="h-4 w-4 text-gold" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald">
            {meta.eyebrow}
          </span>
        </motion.span>
        <motion.h1
          className="font-display max-w-3xl text-5xl leading-[1.05] font-semibold text-ink-gradient md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE_OUT, delay: 0.14 }}
        >
          {meta.title.split(" ").slice(0, -1).join(" ")}{" "}
          <em className="text-emerald-gradient font-bold not-italic">
            {meta.title.split(" ").slice(-1)}
          </em>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl leading-relaxed text-ink-soft md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE_OUT, delay: 0.24 }}
        >
          {meta.desc}
        </motion.p>
        {children}
      </div>
    </section>
  );
}

/** Jarum & benang SVG — identitas visual brand */
export function NeedleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M21 3l-9.5 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="21" cy="3" r="1.4" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M11.5 12.5c-2.2 2.2-4.8 3.1-6.5 5.2M11.5 12.5c1.8-1.8 2.4-4 2-6.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

/** Ikon WhatsApp resmi (path publik) */
export function WaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.1.2-.3.3-.5v-.5L9.6 7.6c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2-.8 3.2.3 1.4 1.2 2.7 2 3.7a11 11 0 0 0 4.3 3.5c1.9.8 2.6.8 3.5.7.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.2-.5Z" />
    </svg>
  );
}

/** CTA WhatsApp yang dipakai berulang */
export function WaButton({
  href,
  children,
  className = "",
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "gold" | "outline-dark";
}) {
  const styles = {
    primary:
      "shine-btn bg-gradient-to-r from-emerald via-emerald-soft to-emerald text-ivory shadow-[0_14px_34px_rgba(14,91,67,0.35)]",
    gold: "shine-btn bg-gradient-to-r from-gold-deep via-gold to-gold-2 text-night shadow-[0_14px_34px_rgba(201,150,43,0.4)]",
    "outline-dark":
      "border border-ivory/30 text-ivory hover:border-gold-2 hover:text-gold-3",
  } as const;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 font-bold transition-transform ${styles[variant]} ${className}`}
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.96 }}
    >
      <WaIcon className="h-5 w-5" />
      {children}
    </motion.a>
  );
}
