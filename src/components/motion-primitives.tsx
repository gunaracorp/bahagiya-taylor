"use client";

import {
  motion,
  useInView,
  useMotionValue,
  animate,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

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
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  after?: string;
  desc?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-5 ${alignCls}`}>
      <Reveal>
        <span className="section-ornament text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-2">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.12] font-semibold text-ivory-gradient max-w-3xl">
          {title}{" "}
          {highlight && <em className="text-gold-gradient font-bold not-italic">{highlight}</em>}
          {after}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.2}>
          <p className={`max-w-2xl text-sand leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
            {desc}
          </p>
        </Reveal>
      )}
    </div>
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
