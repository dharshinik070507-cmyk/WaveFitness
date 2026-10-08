import path from "path";
import sharp from "sharp";
import fs from "fs";

const inputPath = path.join(process.cwd(), "public", "brand", "logo-wf.png");
const outputPath = path.join(process.cwd(), "public", "brand", "logo-wf-clean.png");

async function cleanLogo() {
  if (!fs.existsSync(inputPath)) {
    console.error("Input logo missing at public/brand/logo-wf.png");
    return;
  }

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const cx = w / 2;
  const cy = h / 2;
  const radius = 46;

  const outBuffer = Buffer.from(data);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * info.channels;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > radius) {
        outBuffer[idx + 3] = 0; // Soft edge / transparent
      }
    }
  }

  await sharp(outBuffer, { raw: { width: w, height: h, channels: info.channels } })
    .trim()
    .png()
    .toFile(outputPath);

  console.log("✔ Successfully created clean emblem logo at public/brand/logo-wf-clean.png");
}

cleanLogo();
