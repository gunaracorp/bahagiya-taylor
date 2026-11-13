// Generator aset visual tema terang — Mulya Konveksi (Ujang Juana Collection)
// Semua gambar: bright, clean, studio cream, tanpa teks/logo.
import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT = path.join(process.cwd(), "public", "images");
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const QUALITY =
  "photorealistic, professional commercial photography, high quality, detailed, sharp focus, no text, no words, no letters, no watermark, no logo";
const BRIGHT =
  "bright airy atmosphere, warm natural sunlight, light cream tones, clean and tidy, color palette of cream, emerald green, terracotta and warm gold";

const JOBS = [
  {
    name: "hero-workshop.png",
    size: "1440x832",
    prompt:
      "Bright modern Indonesian garment konveksi workshop interior, neat rows of clean industrial sewing machines on tidy tables, stacks of folded colorful fabrics, cream white walls, large windows with warm morning sunlight streaming in, airy professional sewing factory floor, depth of field, " +
      BRIGHT + ", " + QUALITY,
  },
  {
    name: "prod-kaos.png",
    size: "1024x1024",
    prompt:
      "Neat pile of folded premium cotton t-shirts in navy, white, sage green and terracotta colors, studio product photography on soft light cream background, gentle shadows, " + BRIGHT + ", " + QUALITY,
  },
  {
    name: "prod-kemeja.png",
    size: "1024x1024",
    prompt:
      "Neatly folded crisp button-up shirts in white, light blue and pastel stripes stacked in a pile, studio product photography on soft light cream background, " + BRIGHT + ", " + QUALITY,
  },
  {
    name: "prod-polo.png",
    size: "1024x1024",
    prompt:
      "Three premium pique polo shirts in navy, maroon and forest green with small embroidered chest detail, displayed on wooden hangers against light cream studio wall, product photography, " + BRIGHT + ", " + QUALITY,
  },
  {
    name: "prod-seragam.png",
    size: "1024x1024",
    prompt:
      "School uniform display, crisp white short sleeve shirts with navy blue skirts and trousers on two mannequins, bright cream studio background, professional retail display photography, " + BRIGHT + ", " + QUALITY,
  },
  {
    name: "prod-jersey.png",
    size: "1024x1024",
    prompt:
      "Sports futsal jersey set with shorts, vibrant emerald green and gold panels design with dynamic stripes, blank jersey with no text and no numbers, flat lay on light cream background, sportswear product photography, " + QUALITY,
  },
  {
    name: "prod-jaket.png",
    size: "1024x1024",
    prompt:
      "Olive green bomber jacket and charcoal hoodie displayed on mannequins, bright cream studio background, outerwear product photography, " + BRIGHT + ", " + QUALITY,
  },
  {
    name: "prod-gamis.png",
    size: "1024x1024",
    prompt:
      "Elegant modest muslim women maxi dress gamis in dusty mauve with flowing drape fabric on a mannequin, matching soft hijab, bright cream studio background, elegant fashion product photography, " + BRIGHT + ", " + QUALITY,
  },
  {
    name: "prod-mukena.png",
    size: "1024x1024",
    prompt:
      "Elegant muslim prayer dress set mukena in soft ivory lace and sage green on a mannequin, serene bright cream studio background, delicate fabric drape, fashion product photography, " + BRIGHT + ", " + QUALITY,
  },
  {
    name: "prod-kebaya.png",
    size: "1024x1024",
    prompt:
      "Elegant Indonesian traditional kebaya in ivory with gold embroidery paired with batik sarong displayed on a mannequin, bright cream studio background, luxury traditional fashion photography, " + BRIGHT + ", " + QUALITY,
  },
  {
    name: "about-hands-bright.png",
    size: "1152x864",
    prompt:
      "Close-up of skilled tailor hands guiding emerald green fabric under a sewing machine needle with golden thread spool, warm bright natural window light, shallow depth of field, artisan craftsmanship, " + BRIGHT + ", " + QUALITY,
  },
  {
    name: "grosir-warehouse.png",
    size: "1344x768",
    prompt:
      "Wholesale garment distribution scene, tall neat stacks of folded clothing piles and cardboard shipping boxes in a bright clean room, bulk apparel ready for delivery, " + BRIGHT + ", " + QUALITY,
  },
  {
    name: "kain-rolls.png",
    size: "1344x768",
    prompt:
      "Colorful rolls of cotton and textile fabric arranged on wooden shelves, emerald, terracotta, cream, mustard and navy tones, bright textile store display, warm light, " + BRIGHT + ", " + QUALITY,
  },
];

async function main() {
  const zai = await ZAI.create();
  const results = [];
  for (const job of JOBS) {
    const outPath = path.join(OUT, job.name);
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 40000) {
      console.log(`SKIP (exists): ${job.name}`);
      results.push({ name: job.name, ok: true, skipped: true });
      continue;
    }
    let ok = false;
    for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
      try {
        const res = await zai.images.generations.create({
          prompt: job.prompt,
          size: job.size,
        });
        const b64 = res?.data?.[0]?.base64;
        if (!b64) throw new Error("empty base64");
        const buf = Buffer.from(b64, "base64");
        if (buf.length < 30000) throw new Error(`suspiciously small file ${buf.length}`);
        fs.writeFileSync(outPath, buf);
        console.log(`OK: ${job.name} (${(buf.length / 1024).toFixed(0)} KB)`);
        ok = true;
      } catch (err) {
        console.error(`FAIL ${job.name} attempt ${attempt}: ${err.message}`);
        if (attempt < 3) await new Promise((r) => setTimeout(r, 2500 * attempt));
      }
    }
    results.push({ name: job.name, ok });
  }
  const failed = results.filter((r) => !r.ok);
  console.log("==== SUMMARY ====");
  console.log(`total: ${results.length}, ok: ${results.length - failed.length}, failed: ${failed.length}`);
  if (failed.length) console.log("FAILED:", failed.map((f) => f.name).join(", "));
}

main().catch((e) => {
  console.error("FATAL:", e);
  process.exit(1);
});
