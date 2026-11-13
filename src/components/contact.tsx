"use client";

import { motion } from "framer-motion";
import { Clock, Instagram, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
import { SITE, waLink } from "@/lib/site";

const ORDER_TYPES = [
  "Seragam Sekolah / Instansi",
  "Kaos / Polo Shirt",
  "Jersey / Sportswear",
  "Jaket / Hoodie",
  "Gamis / Busana Muslim",
  "Seragam Kerja",
  "Lainnya / Custom",
];

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(ORDER_TYPES[0]);
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Assalamualaikum, saya ingin memesan produksi konveksi:",
      "",
      `Nama: ${name || "-"}`,
      `No. WhatsApp: ${phone || "-"}`,
      `Jenis Pesanan: ${type}`,
      `Estimasi Jumlah: ${quantity || "-"}`,
      `Keterangan: ${message || "-"}`,
    ].join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-ink/70 px-4 py-3 text-sm text-ivory placeholder:text-sand/60 outline-none transition-all duration-300 focus:border-gold/60 focus:ring-2 focus:ring-gold/20";

  return (
    <section id="kontak" className="relative py-24 md:py-32" role="region" aria-label="Kontak">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Hubungi Kami"
          title="Benang Merah:"
          highlight="Komunikasi Jelas"
          desc="Datang langsung ke workshop kami di Mangkubumi, atau kirim detail pesanan lewat formulir — pesanmu langsung terusan ke WhatsApp kami."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <Reveal>
              <address className="card-spotlight rounded-3xl border border-border bg-ink-2/60 p-7 not-italic transition-colors duration-500 hover:border-gold/45">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/35 bg-ink text-gold-2">
                  <MapPin className="h-5.5 w-5.5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold text-ivory">Alamat Workshop</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand">
                  {SITE.address.street}
                  <br />
                  {SITE.address.urbanVillage}, {SITE.address.district}
                  <br />
                  {SITE.address.cityFull}, {SITE.address.provinceShort}
                </p>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-2 transition-colors hover:text-gold-3"
                >
                  Buka di Google Maps
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </address>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="card-spotlight rounded-3xl border border-border bg-ink-2/60 p-7 transition-colors duration-500 hover:border-gold/45">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/35 bg-ink text-gold-2">
                  <Clock className="h-5.5 w-5.5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold text-ivory">Jam Operasional</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand">
                  {SITE.operationalHours}
                  <br />
                  <span className="text-xs">(Minggu & hari besar libur)</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="card-spotlight rounded-3xl border border-border bg-ink-2/60 p-7 transition-colors duration-500 hover:border-gold/45">
                <h3 className="font-display text-lg font-bold text-ivory">Kanal Lainnya</h3>
                <div className="mt-4 flex flex-col gap-3 text-sm text-sand">
                  <a
                    href={waLink("Assalamualaikum, saya ingin bertanya tentang produksi konveksi.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 transition-colors hover:text-gold-3"
                  >
                    <Phone className="h-4 w-4 text-gold-2" aria-hidden="true" />
                    WhatsApp: 0812-3456-7890
                  </a>
                  <span className="inline-flex items-center gap-3">
                    <Instagram className="h-4 w-4 text-gold-2" aria-hidden="true" />
                    Instagram: {SITE.instagram}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Formulir */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={submit}
              className="relative overflow-hidden rounded-3xl border border-gold/30 bg-ink-2/60 p-7 md:p-9"
              aria-label="Formulir pesanan ke WhatsApp"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/10 blur-[70px]" aria-hidden="true" />
              <h3 className="font-display text-2xl font-bold text-ivory">
                Formulir Pesanan Cepat
              </h3>
              <p className="mt-2 text-sm text-sand">
                Isi detail singkat di bawah — tombol kirim akan membuka WhatsApp dengan pesan yang
                sudah tersusun rapi.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-2">
                  Nama / Instansi
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="cth: SMKN 1 Tasikmalaya"
                    className={inputCls}
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-2">
                  No. WhatsApp
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="cth: 0812xxxxxx"
                    className={inputCls}
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-2">
                  Jenis Pesanan
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={`${inputCls} appearance-none`}
                  >
                    {ORDER_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-ink-2 text-ivory">
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-2">
                  Estimasi Jumlah (pcs)
                  <input
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="cth: 500"
                    inputMode="numeric"
                    className={inputCls}
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-2 sm:col-span-2">
                  Keterangan Tambahan
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Bahan yang diinginkan, warna, target selesai, tautan desain, dll."
                    className={`${inputCls} resize-none`}
                  />
                </label>
              </div>

              <motion.button
                type="submit"
                className="shine-btn mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-2 px-8 py-4 font-bold text-ink sm:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send className="h-4.5 w-4.5" aria-hidden="true" />
                Kirim via WhatsApp
              </motion.button>
              <p className="mt-4 text-[11px] leading-relaxed text-sand/70">
                Dengan mengirim, Anda akan diarahkan ke WhatsApp tanpa data tersimpan di situs ini.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
