// Regenerasi jersey tanpa logo merek apa pun
import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT = path.join(process.cwd(), "public", "images");

async function main() {
  const zai = await ZAI.create();
  const outPath = path.join(OUT, "prod-jersey.png");
  let ok = false;
  for (let attempt = 1; attempt <= 4 && !ok; attempt++) {
    try {
      const res = await zai.images.generations.create({
        prompt:
          "Neat pile of folded sports jerseys made of lightweight dry-fit polyester fabric in emerald green, maroon, navy blue and white, plain blank fabric with simple collar details, studio product photography on soft light cream background, gentle shadows, bright airy, high quality, detailed, absolutely no brand logos, no swoosh, no crest, no badge, no emblem, no text, no letters, no numbers, no watermark, no writing anywhere",
        size: "1024x1024",
      });
      const b64 = res?.data?.[0]?.base64;
      if (!b64) throw new Error("empty base64");
      const buf = Buffer.from(b64, "base64");
      if (buf.length < 30000) throw new Error("too small");
      fs.writeFileSync(outPath, buf);
      console.log(`OK: prod-jersey.png (${(buf.length / 1024).toFixed(0)} KB)`);
      ok = true;
    } catch (e) {
      console.error(`FAIL attempt ${attempt}: ${e.message}`);
      if (attempt < 4) await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  if (!ok) process.exit(1);
}

main().catch((e) => { console.error("FATAL:", e); process.exit(1); });
