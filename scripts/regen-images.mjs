// Regenerasi gambar yang berisiko mengandung teks/watermark buatan AI
import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT = path.join(process.cwd(), "public", "images");

const JOBS = [
  {
    name: "prod-mukena.png",
    size: "1024x1024",
    prompt:
      "Elegant muslim prayer dress mukena set in soft ivory and sage green fabric displayed gracefully on a headless mannequin, plain clean fabric surface, bright cream studio background, soft natural light, fashion product photography, high quality, detailed, fabric must be completely plain with absolutely no text, no letters, no numbers, no watermark, no logo, no brand name, no store name, no writing anywhere",
  },
  {
    name: "prod-kebaya.png",
    size: "1024x1024",
    prompt:
      "Elegant Indonesian traditional kebaya blouse in ivory color with subtle gold floral embroidery paired with plain green batik sarong skirt, displayed on a headless mannequin, bright cream studio background, luxury traditional fashion product photography, high quality, detailed, absolutely no text, no letters, no watermark, no logo, no brand name, no writing anywhere",
  },
];

async function main() {
  const zai = await ZAI.create();
  for (const job of JOBS) {
    const outPath = path.join(OUT, job.name);
    let ok = false;
    for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
      try {
        const res = await zai.images.generations.create({ prompt: job.prompt, size: job.size });
        const b64 = res?.data?.[0]?.base64;
        if (!b64) throw new Error("empty base64");
        const buf = Buffer.from(b64, "base64");
        if (buf.length < 30000) throw new Error(`too small ${buf.length}`);
        fs.writeFileSync(outPath, buf);
        console.log(`OK: ${job.name} (${(buf.length / 1024).toFixed(0)} KB)`);
        ok = true;
      } catch (e) {
        console.error(`FAIL ${job.name} attempt ${attempt}: ${e.message}`);
        if (attempt < 3) await new Promise((r) => setTimeout(r, 2000 * attempt));
      }
    }
  }
}

main().catch((e) => { console.error("FATAL:", e); process.exit(1); });
