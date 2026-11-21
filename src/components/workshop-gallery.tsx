"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/components/motion-primitives";

const PHOTOS = [
  {
    src: "/images/workshop/ws-produksi.jpg",
    alt: "Tim penjahit Bahagiya Taylor Groups bekerja di ruang produksi",
    caption: "Ruang produksi — meja jahit berjalan",
    span: "md:col-span-2",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/images/workshop/ws-bundle.jpg",
    alt: "Tumpukan paketan pakaian hasil produksi konveksi",
    caption: "Paketan potongan siap jahit",
    span: "",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/workshop/ws-cutting.jpg",
    alt: "Proses cutting kain di lantai workshop",
    caption: "Tahap cutting kain",
    span: "",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/workshop/ws-mesin.jpg",
    alt: "Mesin jahit dan area kerja penjahit",
    caption: "Meja kerja penjahit",
    span: "",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/workshop/ws-interior.jpg",
    alt: "Interior ruang workshop konveksi yang terang",
    caption: "Interior workshop",
    span: "md:col-span-2",
    ratio: "aspect-[16/10]",
  },
];

/** Galeri dokumentasi asli workshop — bukti nyata, bukan render */
export function WorkshopGallery({ compact = false }: { compact?: boolean }) {
  const photos = compact ? PHOTOS.slice(0, 4) : PHOTOS;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {photos.map((ph, i) => {
          const wide = i === 0 || i === photos.length - 1;
          return (
            <motion.figure
              key={ph.src}
              className={`group relative overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_4px_20px_rgba(28,42,34,0.08)] ${
                wide ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE_OUT }}
            >
              <div className={`relative ${wide ? "aspect-[16/10]" : "aspect-[3/4]"}`}>
                <Image
                  src={ph.src}
                  alt={ph.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 768px) 46vw, 24vw"
                  className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.08]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 px-4 pb-3.5 text-xs font-semibold text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {ph.caption}
                </figcaption>
              </div>
            </motion.figure>
          );
        })}
      </div>
      <p className="mt-5 text-center text-xs text-ink-soft">
        Dokumentasi asli workshop kami di Kp. Cisodong, Cikalong, Kabupaten Tasikmalaya — bukan
        render atau stok foto.
      </p>
    </div>
  );
}
