import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT = '/home/z/my-project/public/images';
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const STYLE = 'luxury editorial photography, warm amber cinematic lighting, deep dark charcoal background with golden highlights, shallow depth of field, high quality, ultra detailed, professional';

const ASSETS = [
  {
    name: 'logo-emblem.png',
    size: '1024x1024',
    prompt:
      'Elegant luxury garment brand emblem, ornate golden needle and flowing silk thread forming a symmetrical diamond crest monogram, metallic champagne gold gradient, deep black background, premium konveksi fashion house emblem, minimal, centered, high quality, detailed vector style, no text',
  },
  {
    name: 'hero-atelier.png',
    size: '1440x720',
    prompt:
      'Cinematic wide shot of premium garment atelier, rows of industrial sewing machines, rolls of luxurious emerald ivory and charcoal fabric, golden warm light streaming through tall windows, hanging finished garments, dust particles in light beams, dark moody atmosphere, ' + STYLE,
  },
  {
    name: 'about-hands.png',
    size: '1344x768',
    prompt:
      'Extreme close-up of skilled Indonesian tailor hands guiding emerald fabric under sewing machine needle, golden thread spool, measuring tape around wooden desk, shallow depth of field, warm cinematic light, craftsmanship, ' + STYLE,
  },
  {
    name: 'workshop-team.png',
    size: '1344x768',
    prompt:
      'Indonesian tailors in modern bright garment workshop inspecting quality of finished white shirts, clothing racks, professional documentary photography, warm natural light, ' + STYLE,
  },
  {
    name: 'product-polo.png',
    size: '1024x1024',
    prompt:
      'Premium charcoal black polo shirt on invisible mannequin, small gold embroidered emblem on chest, floating product photography, dark studio background, dramatic warm golden rim light, luxury apparel catalog, ' + STYLE,
  },
  {
    name: 'product-seragam.png',
    size: '1024x1024',
    prompt:
      'Elegant Indonesian school uniform set, crisp white short sleeve shirt with grey trousers neatly folded and displayed with leather shoes, studio product photography, warm cinematic lighting, dark elegant background, ' + STYLE,
  },
  {
    name: 'product-jersey.png',
    size: '1024x1024',
    prompt:
      'Professional futsal jersey and shorts set in deep emerald green with gold trim accents, dynamic floating sportswear product photography, dark studio background, dramatic warm rim lighting, ' + STYLE,
  },
  {
    name: 'product-jaket.png',
    size: '1024x1024',
    prompt:
      'Premium varsity bomber jacket and hoodie in obsidian black with champagne gold embroidery details, luxury streetwear product photography, dark studio, warm golden rim light, ' + STYLE,
  },
  {
    name: 'product-gamis.png',
    size: '1024x1024',
    prompt:
      'Elegant modest gamis dress and hijab set in soft ivory champagne silk on elegant mannequin, luxury modest fashion product photography, warm studio lighting, dark elegant background, flowing fabric, ' + STYLE,
  },
  {
    name: 'product-kaoskaki.png',
    size: '1024x1024',
    prompt:
      'Neatly folded stack of premium cotton fabrics in emerald ivory and charcoal tones with golden measuring tape and scissors, textile craftsmanship product photography, warm cinematic light, dark background, ' + STYLE,
  },
];

const zai = await ZAI.create();

for (const asset of ASSETS) {
  const outPath = path.join(OUT, asset.name);
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 10000) {
    console.log('skip (exists):', asset.name);
    continue;
  }
  let ok = false;
  for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
    try {
      const res = await zai.images.generations.create({ prompt: asset.prompt, size: asset.size });
      const b64 = res?.data?.[0]?.base64;
      if (!b64) throw new Error('empty base64');
      const buf = Buffer.from(b64, 'base64');
      if (buf.length < 5000) throw new Error('image too small');
      fs.writeFileSync(outPath, buf);
      console.log('OK:', asset.name, (buf.length / 1024).toFixed(0) + 'KB');
      ok = true;
    } catch (e) {
      console.error(`attempt ${attempt} failed for ${asset.name}:`, e.message);
      if (attempt < 3) await new Promise((r) => setTimeout(r, 1500 * attempt));
    }
  }
  if (!ok) console.error('FAILED permanently:', asset.name);
}
console.log('DONE');
