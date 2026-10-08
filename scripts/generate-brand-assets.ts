import fs from "fs";
import path from "path";
import sharp from "sharp";

const CLEAN_LOGO_PATH = path.join(process.cwd(), "public", "brand", "logo-wf-clean.png");
const RAW_LOGO_PATH = path.join(process.cwd(), "public", "brand", "logo-wf.png");
const PUBLIC_DIR = path.join(process.cwd(), "public");

async function generateBrandAssets() {
  console.log("Checking logo and generating brand assets...");

  const targetLogo = fs.existsSync(CLEAN_LOGO_PATH) ? CLEAN_LOGO_PATH : RAW_LOGO_PATH;

  if (!fs.existsSync(targetLogo)) {
    const errorMsg = "[ERROR] Missing required logo file at public/brand/logo-wf-clean.png or logo-wf.png!";
    if (process.env.NODE_ENV === "production" || process.env.CI) {
      console.error(errorMsg);
      process.exit(1);
    } else {
      console.warn("[WARNING] Logo missing in dev. Skipping asset generation.");
      return;
    }
  }

  try {
    // 1. Favicon 32x32 PNG & ICO fallback
    const fav32Path = path.join(PUBLIC_DIR, "favicon-32x32.png");
    const favIcoPath = path.join(PUBLIC_DIR, "favicon.ico");
    await sharp(targetLogo)
      .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(fav32Path);
    await sharp(targetLogo)
      .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(favIcoPath);
    console.log("✔ Generated favicon-32x32.png and favicon.ico");

    // 2. Apple Touch Icon (180x180)
    const appleTouchPath = path.join(PUBLIC_DIR, "apple-touch-icon.png");
    await sharp(targetLogo)
      .resize(180, 180, { fit: "contain", background: { r: 11, g: 11, b: 12, alpha: 1 } })
      .toFile(appleTouchPath);
    console.log("✔ Generated apple-touch-icon.png");

    // 3. Delete blurry android-chrome images per spec rule 6
    const icon192Path = path.join(PUBLIC_DIR, "android-chrome-192x192.png");
    const icon512Path = path.join(PUBLIC_DIR, "android-chrome-512x512.png");
    const ogImagePath = path.join(PUBLIC_DIR, "og-image.png");

    if (fs.existsSync(icon192Path)) fs.unlinkSync(icon192Path);
    if (fs.existsSync(icon512Path)) fs.unlinkSync(icon512Path);
    if (fs.existsSync(ogImagePath)) fs.unlinkSync(ogImagePath);
    console.log("✔ Purged legacy blurry android-chrome and static og-image.png files");

  } catch (err) {
    console.error("Failed to generate brand assets:", err);
    process.exit(1);
  }
}

generateBrandAssets();
