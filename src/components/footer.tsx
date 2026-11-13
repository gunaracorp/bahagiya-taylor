"use client";

import { LogoMark } from "@/components/logo";
import { PageLink } from "@/components/page-link";
import { NAV_LINKS, PILLARS, SITE, PHONE_DISPLAY, waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-night text-ivory/70" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
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
          <p className="mt-5 text-sm leading-relaxed">
            Konveksi & produsen busana di {SITE.city}, {SITE.provinceShort} sejak{" "}
            {SITE.estYear}. Menjahit kualitas, merajut kepercayaan.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-night-2 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-2">
            Est. {SITE.estYear} · Tasikmalaya
          </p>
        </div>

        {/* Navigasi */}
        <nav aria-label="Navigasi footer">
          <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-gold-2">Jelajahi</h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.page}>
                <PageLink
                  page={l.page}
                  className="text-sm transition-colors hover:text-gold-3"
                >
                  {l.label}
                </PageLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Pilar usaha */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-gold-2">
            Pilar Usaha
          </h3>
          <ul className="mt-5 space-y-3">
            {PILLARS.map((p) => (
              <li key={p.title}>
                <PageLink page="layanan" className="text-sm transition-colors hover:text-gold-3">
                  {p.title}
                </PageLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-gold-2">Kontak</h3>
          <address className="mt-5 space-y-3 text-sm leading-relaxed not-italic">
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

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center md:flex-row md:px-8 md:text-left">
          <p className="text-xs">
            © {new Date().getFullYear()} {SITE.name} — {SITE.brandLine}. Seluruh hak cipta
            dilindungi.
          </p>
          <p className="text-xs">
            Dijahit dengan bangga di {SITE.city} · {SITE.provinceShort}
          </p>
        </div>
      </div>
    </footer>
  );
}
