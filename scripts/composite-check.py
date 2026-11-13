#!/usr/bin/env python3
"""Composite grid untuk verifikasi visual gambar-gambar website."""
from PIL import Image
import os

BASE = "/home/z/my-project/public/images"
FILES = [
    "prod-mukena.png",
    "prod-kebaya.png",
    "prod-jersey.png",
    "prod-jaket.png",
    "about-hands-bright.png",
    "kain-rolls.png",
]

CELL_W, CELL_H = 420, 420
COLS = 3
rows = (len(FILES) + COLS - 1) // COLS
canvas = Image.new("RGB", (COLS * CELL_W, rows * CELL_H), (250, 246, 236))

for i, f in enumerate(FILES):
    p = os.path.join(BASE, f)
    if not os.path.exists(p):
        print(f"MISSING: {f}")
        continue
    im = Image.open(p).convert("RGB")
    im.thumbnail((CELL_W, CELL_H))
    x = (i % COLS) * CELL_W + (CELL_W - im.width) // 2
    y = (i // COLS) * CELL_H + (CELL_H - im.height) // 2
    canvas.paste(im, (x, y))
    print(f"added: {f} {im.size}")

out = "/tmp/render/composite-check.jpg"
canvas.save(out, quality=82)
print("saved:", out, os.path.getsize(out) // 1024, "KB")
