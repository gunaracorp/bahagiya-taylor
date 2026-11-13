"use client";

import Image from "next/image";
import { LogoMark } from "@/components/logo";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-ink-2/60" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <LogoMark size={52} />
            <span className="font-display text-lg font-bold leading-tight text-ivory">
              Mulya Juana
              <br />
              Syifa Collection
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-sand">
            Konveksi & produsen busana premium di {SITE.city}, {SITE.provinceShort} sejak{" "}
            {SITE.estYear}. Menenun kualitas, merajut kepercayaan.
          </p>
          <div className="mt-6 h-12 w-12 overflow-hidden rounded-full border border-gold/35">
            <Image
              src="/images/logo-emblem.png"
              alt="Lambang MJS Collection"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </div>

        {/* Navigasi */}
        <nav aria-label="Navigasi footer">
          <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-gold-2">Jelajahi</h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-sand transition-colors hover:text-gold-3"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Layanan */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-gold-2">Layanan</h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#layanan" className="text-sm text-sand transition-colors hover:text-gold-3">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-gold-2">Kontak</h3>
          <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-sand">
            <p>
              {SITE.address.street}
              <br />
              {SITE.address.urbanVillage}, {SITE.address.district}
              <br />
              {SITE.address.cityFull}, {SITE.address.provinceShort}
            </p>
            <p>{SITE.operationalHours}</p>
            <p>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-2 transition-colors hover:text-gold-3"
              >
                Petunjuk arah →
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center md:flex-row md:px-8 md:text-left">
          <p className="text-xs text-sand/80">
            © {new Date().getFullYear()} {SITE.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-xs text-sand/80">
            Dijahit dengan bangga di {SITE.city} · {SITE.provinceShort}
          </p>
        </div>
      </div>
    </footer>
  );
}
