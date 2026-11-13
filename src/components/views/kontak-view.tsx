"use client";

import { motion } from "framer-motion";
import { Clock, Instagram, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeading, WaIcon, EASE_OUT } from "@/components/motion-primitives";
import { PageHero } from "@/components/motion-primitives";
import { CtaBanner } from "@/components/cta-banner";
import { SITE, INSTAGRAM_HANDLE, waLink } from "@/lib/site";

const ORDER_TYPES = [
  "Seragam Sekolah / Instansi",
  "Kaos / Polo Shirt",
  "Jersey / Pakaian Olahraga",
  "Jaket / Hoodie",
  "Gamis / Mukena / Koko",
  "Kemeja / Seragam Kerja",
  "Kebaya / Pesanan Kustom",
  "Grosir / Suplai Toko",
  "Lainnya",
];

export function KontakView() {
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
    "w-full rounded-xl border border-line bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-all duration-300 focus:border-emerald/60 focus:ring-2 focus:ring-gold/25";

  return (
    <>
      <PageHero page="kontak" />

      <section className="relative pb-20 md:pb-28" aria-label="Informasi kontak dan formulir">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Info */}
            <div className="flex flex-col gap-5 lg:col-span-2">
              <Reveal>
                <address className="card-spotlight rounded-3xl border border-line bg-paper p-7 shadow-[0_6px_26px_rgba(28,42,34,0.07)] transition-colors duration-500 hover:border-gold/50 not-italic">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald/25 bg-emerald-tint text-emerald">
                    <MapPin className="h-5.5 w-5.5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">Alamat Workshop</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
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
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald transition-colors hover:text-gold-deep"
                  >
                    Buka di Google Maps
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </address>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="card-spotlight rounded-3xl border border-line bg-paper p-7 shadow-[0_6px_26px_rgba(28,42,34,0.07)] transition-colors duration-500 hover:border-gold/50">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald/25 bg-emerald-tint text-emerald">
                    <Clock className="h-5.5 w-5.5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">Jam Operasional</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {SITE.operationalHours}
                    <br />
                    <span className="text-xs">(Minggu &amp; hari besar libur)</span>
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="card-spotlight rounded-3xl border border-line bg-paper p-7 shadow-[0_6px_26px_rgba(28,42,34,0.07)] transition-colors duration-500 hover:border-gold/50">
                  <h3 className="font-display text-lg font-bold text-ink">Kanal Lainnya</h3>
                  <div className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
                    <a
                      href={waLink("Assalamualaikum, saya ingin bertanya tentang layanan konveksi.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 font-semibold text-emerald transition-colors hover:text-gold-deep"
                    >
                      <WaIcon className="h-4.5 w-4.5" />
                      WhatsApp — klik untuk chat
                    </a>
                    <span className="inline-flex items-center gap-3">
                      <Instagram className="h-4.5 w-4.5 text-emerald" aria-hidden="true" />
                      Instagram: {INSTAGRAM_HANDLE}
                    </span>
                  </div>
                  <p className="mt-4 rounded-xl bg-cream-2 px-4 py-3 text-[11px] leading-relaxed text-ink-soft">
                    Nomor telepon &amp; akun sosial media akan diperbarui oleh admin situs.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Formulir */}
            <Reveal delay={0.15} className="lg:col-span-3">
              <form
                onSubmit={submit}
                className="stitch-frame relative overflow-hidden rounded-[2.5rem] border border-line bg-paper p-7 shadow-[0_10px_40px_rgba(28,42,34,0.09)] md:p-9"
                aria-label="Formulir pesanan ke WhatsApp"
              >
                <div
                  className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-emerald-tint blur-[70px]"
                  aria-hidden="true"
                />
                <h3 className="font-display relative text-2xl font-bold text-ink">
                  Formulir Pesanan Cepat
                </h3>
                <p className="relative mt-2 text-sm text-ink-soft">
                  Isi detail singkat di bawah — tombol kirim akan membuka WhatsApp dengan pesan
                  yang sudah tersusun rapi.
                </p>

                <div className="relative mt-7 grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald">
                    Nama / Instansi
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="cth: SMKN 1 Tasikmalaya"
                      className={inputCls}
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald">
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
                  <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald">
                    Jenis Pesanan
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className={`${inputCls} appearance-none`}
                    >
                      {ORDER_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-paper text-ink">
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald">
                    Estimasi Jumlah (pcs)
                    <input
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="cth: 500"
                      inputMode="numeric"
                      className={inputCls}
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald sm:col-span-2">
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
                  className="shine-btn relative mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald via-emerald-soft to-emerald px-8 py-4 font-bold text-ivory shadow-[0_14px_34px_rgba(14,91,67,0.35)] sm:w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send className="h-4.5 w-4.5" aria-hidden="true" />
                  Kirim via WhatsApp
                </motion.button>
                <p className="mt-4 text-[11px] leading-relaxed text-ink-soft/80">
                  Dengan mengirim, Anda diarahkan ke WhatsApp — data tidak tersimpan di situs ini.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PETA ============ */}
      <section className="relative bg-cream-2 py-20 md:py-24" aria-label="Peta lokasi workshop">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Lokasi Kami"
            title="Mudah Ditemukan di"
            highlight="Mangkubumi"
            desc="Workshop kami berada di Jl. Karikil, Kp. Cibeureum, Kelurahan Cipari, Kecamatan Mangkubumi — dekat pusat Kota Tasikmalaya."
          />
          <Reveal delay={0.15}>
            <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-line bg-paper shadow-[0_16px_50px_rgba(28,42,34,0.12)]">
              <iframe
                title="Peta lokasi workshop Mulya Konveksi di Mangkubumi, Tasikmalaya"
                src={SITE.mapsEmbed}
                className="h-[380px] w-full border-0 md:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
