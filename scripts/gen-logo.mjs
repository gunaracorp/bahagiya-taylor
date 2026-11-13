import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const zai = await ZAI.create();
const res = await zai.images.generations.create({
  prompt:
    'Luxury circular emblem logo with elegant serif monogram letters MJS in the center, surrounded by a golden ring of laurel and a sewing needle with curved thread wrapping around the circle, metallic champagne gold gradient, deep matte black background, premium fashion house badge, perfectly centered, balanced, crisp clean lines, high quality, no ribbon, no other text',
  size: '1024x1024',
});
fs.writeFileSync(
  '/home/z/my-project/public/images/logo-emblem.png',
  Buffer.from(res.data[0].base64, 'base64')
);
console.log('LOGO OK');
