"use client";

/**
 * SIGNATURE FOOTER — adaptasi desain "The World-Class Signature Footer"
 * dari muhdin.web.id (by digiman.id) ke tema Mulya Konveksi.
 *
 * Lapisan:
 *  1. Hairline emas beranimasi (.footer-divider-flow) + aurora ambient +
 *     watermark raksasa "MULYA" outline emas di dasar footer.
 *  2. 4 kolom: Brand / Jelajahi / Pilar Usaha / Kontak — heading berlian emas
 *     (ColHead) + link dengan garis emas merambat (FootLink).
 *  3. SIGNATURE PANEL digiman.id — logo SVG hexagon-orbit, wordmark gradasi
 *     berkilau, PT Digital Bisnis Manajemen, chip teknologi, tombol kunjungi,
 *     dan baris kredit "Support system" + "Design by muhdin.web.id".
 *  4. Bar kepercayaan (garansi, tepat waktu, harga produsen, est. 2020).
 *  5. Bar bawah: chip kredit Support system by digiman.id + Design by
 *     muhdin.web.id, hak cipta, tombol kembali ke atas.
 *
 * Semua animasi CSS murni + guard prefers-reduced-motion.
 */

import { ArrowUp, ExternalLink, HeartHandshake, MapPin, Server } from "lucide-react";
import type { ReactNode } from "react";
import { LogoMark } from "@/components/logo";
import { PageLink } from "@/components/page-link";
import { WaIcon } from "@/components/motion-primitives";
import {
  DEFAULT_WA_MESSAGE,
  INSTAGRAM_HANDLE,
  NAV_LINKS,
  PILLARS,
  PHONE_DISPLAY,
  SITE,
  waLink,
} from "@/lib/site";

const DIGIMAN_URL = "https://digiman.id";
const MUHDIN_URL = "https://muhdin.web.id/";

const STACK_CHIPS = ["NEXT.JS 15", "REACT 19", "TAILWIND 4", "FRAMER MOTION"];

/* ---------- Heading kolom: belahan berlian emas + garis rambut gradien ---------- */

function ColHead({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-5 flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.18em] text-ivory">
      <span
        aria-hidden
        className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold shadow-[0_0_10px_rgba(201,150,43,0.8)]"
      />
      <span>{children}</span>
      <span aria-hidden className="h-px w-6 bg-gradient-to-r from-gold/60 to-transparent" />
    </h3>
  );
}

/* ---------- Link footer: garis emas merambat masuk + underline sweep saat hover ---------- */

function FootLink({ page, children }: { page: "beranda" | "tentang" | "layanan" | "produk" | "kontak"; children: ReactNode }) {
  return (
    <PageLink
      page={page}
      className="group inline-flex max-w-full items-center text-start text-sm text-ivory/70 outline-none transition-colors hover:text-gold-2 focus-visible:text-gold-2"
    >
      <span
        aria-hidden
        className="h-px w-0 shrink-0 bg-gold-2/80 transition-all duration-300 group-hover:mr-2 group-hover:w-3"
      />
      <span className="relative break-words">
        {children}
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-2/50 transition-all duration-300 group-hover:w-full"
        />
      </span>
    </PageLink>
  );
}

/* ---------- Logo digiman.id — hexagon emerald + huruf "D" emas + orbit dashed berputar pelan ---------- */

function DigimanMark({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Logo digiman.id">
      <defs>
        <linearGradient id="digiman-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0D98A" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="digiman-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F7A50" />
          <stop offset="100%" stopColor="#0A4A30" />
        </linearGradient>
      </defs>
      {/* Orbit dashed — berputar pelan via CSS */}
      <circle
        cx="32"
        cy="32"
        r="27.5"
        fill="none"
        stroke="url(#digiman-gold)"
        strokeWidth="0.9"
        strokeDasharray="2.5 5"
        opacity="0.55"
        className="sig-orbit"
      />
      {/* Hexagon frame */}
      <polygon
        points="32,4.5 56,18 56,46 32,59.5 8,46 8,18"
        fill="url(#digiman-green)"
        stroke="url(#digiman-gold)"
        strokeWidth="2.4"
      />
      <polygon
        points="32,9 51.5,20.2 51.5,43.8 32,55 12.5,43.8 12.5,20.2"
        fill="none"
        stroke="url(#digiman-gold)"
        strokeWidth="0.8"
        opacity="0.55"
      />
      {/* Huruf D — identitas Digiman */}
      <path d="M23.5 19.5 h9.5 a12.5 12.5 0 0 1 0 25 h-9.5 z" fill="url(#digiman-gold)" />
      {/* Node digital di verteks */}
      <circle cx="8" cy="18" r="1.9" fill="url(#digiman-gold)" />
      <circle cx="56" cy="18" r="1.9" fill="url(#digiman-gold)" />
      <circle cx="8" cy="46" r="1.9" fill="url(#digiman-gold)" />
      <circle cx="56" cy="46" r="1.9" fill="url(#digiman-gold)" />
    </svg>
  );
}

/* ---------- Tombol melayang kembali ke atas ---------- */

function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold-2 outline-none transition-all hover:-translate-y-0.5 hover:bg-gold/20 hover:shadow-[0_8px_20px_-6px_rgba(201,150,43,0.45)] focus-visible:ring-2 focus-visible:ring-gold/60"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

/* ---------- SIGNATURE PANEL — panggung developer: digiman.id (PT Digital Bisnis Manajemen) ---------- */

function SignaturePanel() {
  return (
    <section aria-label="Sistem pendukung dan desain situs" className="mt-14">
      <div className="mb-5 flex items-center gap-4" aria-hidden="true">
        <span className="footer-divider-flow flex-1 rounded-full" />
        <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.3em] text-gold-2">
          Sistem &amp; Desain
        </p>
        <span className="footer-divider-flow flex-1 rounded-full" />
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold/40 via-emerald/30 to-gold/10 p-px shadow-[0_34px_90px_-32px_rgba(0,0,0,0.75)]">
        <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-white/[0.04] px-6 py-8 sm:px-10">
          {/* Sapuan cahaya + aurora */}
          <div
            aria-hidden="true"
            className="sig-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="animate-float-soft pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-emerald/25 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            {/* Identitas developer */}
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-2/80">
                Support System
              </p>
              <div className="mt-4 flex items-center gap-4 sm:gap-5">
                <div className="relative shrink-0">
                  <div aria-hidden="true" className="absolute inset-0 rounded-2xl bg-gold/25 blur-xl" />
                  <DigimanMark className="relative h-16 w-16 sm:h-20 sm:w-20" />
                </div>
                <div className="min-w-0">
                  <p className="text-3xl leading-none font-black tracking-tight sm:text-4xl">
                    <span className="text-ivory">digiman</span>
                    <span className="text-gold-gradient">.id</span>
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ivory/80">
                    PT Digital Bisnis Manajemen
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/60">
                Infrastruktur sistem, pengelolaan konten, dan dukungan teknis yang menopang situs
                Mulya Konveksi — Ujang Juana Collection.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-2">
                  Sistem Resmi Situs Ini
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ivory/10 bg-white/5 px-3 py-1 text-[10px] font-semibold text-ivory/70">
                  <MapPin className="h-3 w-3 text-gold-2" aria-hidden="true" />
                  Bangga Buatan Indonesia
                </span>
              </div>
            </div>

            {/* Stack teknologi + CTA ke situs developer */}
            <div className="space-y-4 lg:w-64 lg:border-l lg:border-ivory/10 lg:ps-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-2/70">
                Teknologi
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {STACK_CHIPS.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-gold/25 bg-gold/10 px-2 py-1 font-mono text-[10px] tracking-wider text-gold-2/90"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href={DIGIMAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-bold text-night transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(201,150,43,0.55)]"
              >
                Kunjungi digiman.id
                <ExternalLink
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Baris kredit: design by + support system */}
          <div className="relative mt-8 flex flex-col items-center justify-between gap-3 border-t border-ivory/10 pt-5 text-center sm:flex-row sm:text-start">
            <p className="flex items-center gap-2 text-xs text-ivory/60">
              <HeartHandshake className="h-4 w-4 shrink-0 text-gold-2" aria-hidden="true" />
              Design by —{" "}
              <a
                href={MUHDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gold-2 underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-3"
              >
                muhdin.web.id
              </a>
            </p>
            <p className="flex items-center gap-2 text-xs text-ivory/60">
              <Server className="h-4 w-4 shrink-0 text-gold-2" aria-hidden="true" />
              Support system by{" "}
              <span className="font-bold text-ivory/85">
                PT Digital Bisnis Manajemen —{" "}
                <a
                  href={DIGIMAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-2 transition-colors hover:text-gold-3"
                >
                  digiman.id
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER UTAMA ---------- */

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-night text-ivory/70" role="contentinfo">
      {/* 1 — Hairline emas beranimasi + watermark raksasa + glow ambient */}
      <div className="footer-divider-flow relative z-10" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="footer-watermark pointer-events-none absolute inset-x-0 bottom-0 z-0 translate-y-[22%] text-center font-black leading-[0.78] tracking-tight text-[clamp(5.5rem,19vw,15rem)]"
      >
        MULYA
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-[10%] h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-[8%] h-80 w-80 rounded-full bg-emerald/25 blur-3xl"
      />

      <div className="relative z-10">
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8">
          {/* 2 — Kolom utama */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <LogoMark size={52} />
                <span className="font-display text-lg leading-tight font-bold text-ivory">
                  Mulya Konveksi
                  <br />
                  <span className="text-sm font-semibold tracking-[0.18em] text-gold-2">
                    UJANG JUANA COLLECTION
                  </span>
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Konveksi &amp; produsen busana di {SITE.city}, {SITE.provinceShort} sejak{" "}
                {SITE.estYear}. Menjahit kualitas, merajut kepercayaan.
              </p>
              <p className="text-gold-gradient inline-block text-sm font-extrabold tracking-wide">
                ✦ {SITE.tagline}
              </p>
              <div className="flex gap-2 pt-1">
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Mulya Konveksi"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-ivory/10 bg-white/5 text-ivory/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/15 hover:text-gold-2 hover:shadow-[0_8px_20px_-6px_rgba(201,150,43,0.4)]"
                >
                  <WaIcon className="h-4.5 w-4.5" />
                </a>
                <span
                  title="Instagram Mulya Konveksi"
                  className="grid h-10 w-10 cursor-default place-items-center rounded-xl border border-ivory/10 bg-white/5 text-ivory/70"
                >
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span
                  title={INSTAGRAM_HANDLE}
                  className="inline-flex items-center rounded-xl border border-ivory/10 bg-white/5 px-3 text-[11px] text-ivory/60"
                >
                  {INSTAGRAM_HANDLE}
                </span>
              </div>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-night-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-2">
                Est. {SITE.estYear} · Tasikmalaya
              </p>
            </div>

            {/* Jelajahi */}
            <nav aria-label="Navigasi footer">
              <ColHead>Jelajahi</ColHead>
              <ul className="space-y-3">
                {NAV_LINKS.map((l) => (
                  <li key={l.page}>
                    <FootLink page={l.page}>{l.label}</FootLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Pilar usaha */}
            <div>
              <ColHead>Pilar Usaha</ColHead>
              <ul className="space-y-3">
                {PILLARS.map((p) => (
                  <li key={p.title}>
                    <FootLink page="layanan">{p.title}</FootLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontak */}
            <div>
              <ColHead>Kontak</ColHead>
              <address className="space-y-3 text-sm leading-relaxed not-italic">
                <p>{SITE.addressOneLine}</p>
                <p>{SITE.operationalHours}</p>
                <p className="flex flex-col gap-2">
                  <a
                    href={waLink(DEFAULT_WA_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-gold-2 transition-colors hover:text-gold-3"
                  >
                    WhatsApp — {PHONE_DISPLAY}
                  </a>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-gold-2 transition-colors hover:text-gold-3"
                  >
                    Petunjuk arah Google Maps
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* 3 — Signature panel digiman.id */}
          <SignaturePanel />

          {/* 4 — Bar kepercayaan */}
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {[
              ["Garansi Jahitan", "M4 5h16v3H4z M6 8v8a6 6 0 0 0 12 0V8"],
              ["Tepat Waktu", "M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9z M12 7v5l3.5 2"],
              ["Harga Produsen", "M4 8h16v12H4z M4 8l4-4h8l4 4 M9 12h6"],
              [`Est. ${SITE.estYear} · Tasikmalaya`, "M12 3l2.5 5.5L20 9l-4 4 1 6-5-2.7L7 19l1-6-4-4 5.5-.5z"],
            ].map(([label, path]) => (
              <div
                key={label}
                className="flex items-center justify-center gap-2 rounded-xl border border-ivory/10 bg-white/5 px-3 py-2.5 text-[11px] font-semibold text-ivory/80 transition-colors hover:border-gold/30 hover:text-ivory sm:text-xs"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-gold-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={path} />
                </svg>
                <span className="truncate">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5 — Bar bawah */}
      <div className="relative z-10 border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={DIGIMAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-[11px] font-semibold text-gold-2 transition-colors hover:bg-gold/20"
              >
                Support system by
                <span className="font-extrabold">digiman.id</span>
              </a>
              <a
                href={MUHDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-ivory/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-ivory/70 transition-colors hover:border-gold/40 hover:text-gold-2"
              >
                Design by
                <span className="font-extrabold">muhdin.web.id</span>
              </a>
            </div>
            <BackToTop />
          </div>
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-ivory/60 sm:flex-row">
            <p className="text-center sm:text-start">
              © {new Date().getFullYear()} {SITE.name} — {SITE.brandLine}. Seluruh hak cipta
              dilindungi.
            </p>
            <p className="text-xs">Dijahit dengan bangga di {SITE.city} · {SITE.provinceShort}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
