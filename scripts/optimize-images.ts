import fs from "fs";
import path from "path";
import sharp from "sharp";

const SOURCE_DIR = path.join(process.cwd(), "public", "images-source");
const DEMO_DIR = path.join(process.cwd(), "public", "images-demo");
const OUTPUT_DIR = path.join(process.cwd(), "public", "images");

async function optimizeImages() {
  console.log("Starting real photo optimization pipeline...");

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Determine source folder: priority to images-source, fallback to images-demo
  let activeDir = SOURCE_DIR;
  if (!fs.existsSync(SOURCE_DIR) || fs.readdirSync(SOURCE_DIR).length === 0) {
    activeDir = DEMO_DIR;
    console.log("Using public/images-demo/ for photo optimization...");
  } else {
    console.log("Using public/images-source/ for photo optimization...");
  }

  if (!fs.existsSync(activeDir)) {
    console.log("No source or demo images found.");
    return;
  }

  const files = fs.readdirSync(activeDir).filter((file) =>
    /\.(jpg|jpeg|png|webp|avif|tiff)$/i.test(file)
  );

  for (const file of files) {
    const filePath = path.join(activeDir, file);
    const parsed = path.parse(file);
    const name = parsed.name;

    try {
      if (name.includes("hero-desktop")) {
        // Hero Desktop max 2400w (target < 200 KB, strip EXIF metadata)
        await sharp(filePath)
          .rotate()
          .resize({ width: 2400, withoutEnlargement: true })
          .webp({ quality: 78, effort: 6 })
          .toFile(path.join(OUTPUT_DIR, "hero-desktop.webp"));
        console.log(`✔ Optimized hero desktop: ${name}`);
      } else if (name.includes("hero-mobile")) {
        // Hero Mobile 4:5 crop max 1080w (target < 120 KB, strip EXIF metadata)
        await sharp(filePath)
          .rotate()
          .resize({ width: 1080, height: 1350, fit: "cover" })
          .webp({ quality: 75, effort: 6 })
          .toFile(path.join(OUTPUT_DIR, "hero-mobile.webp"));
        console.log(`✔ Optimized hero mobile: ${name}`);
      } else {
        // Standard panel/card photos max 1200w
        await sharp(filePath)
          .rotate()
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 78 })
          .toFile(path.join(OUTPUT_DIR, `${name}.webp`));
        console.log(`✔ Optimized standard image: ${name}`);
      }
    } catch (err) {
      console.error(`Failed to process ${file}:`, err);
    }
  }

  console.log("Photo optimization complete!");
}

optimizeImages();
