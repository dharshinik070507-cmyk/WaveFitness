import fs from "fs";
import path from "path";
import sharp from "sharp";
import { gymImages } from "../src/content/gymImages";

export function runAuditChecks(): number {
  let errors = 0;

  function logCheck(label: string, count: number) {
    if (count === 0) {
      console.log(`  ✅ ${label}: 0`);
    } else {
      console.log(`  ❌ ${label}: ${count} matches found!`);
      errors += count;
    }
  }

  // 1. Consent true must be status "real" & real entries must point to existing public/ files
  let consentAndRealErrors = 0;
  const realFilePaths = new Set<string>();

  for (const [slotKey, entry] of Object.entries(gymImages)) {
    if (entry.consent && entry.status !== "real") {
      console.log(`     [Violation] Slot '${slotKey}' has consent: true but status: '${entry.status}'`);
      consentAndRealErrors++;
    }
    if (entry.status === "real" || entry.status === "demo") {
      if (entry.desktopSrc) {
        const fullPath = path.join(process.cwd(), "public", entry.desktopSrc.replace(/^\//, ""));
        realFilePaths.add(path.normalize(fullPath));
        if (entry.status === "real" && !fs.existsSync(fullPath)) {
          console.log(`     [Violation] Slot '${slotKey}' desktopSrc '${entry.desktopSrc}' file does not exist`);
          consentAndRealErrors++;
        }
      } else if (entry.status === "real") {
        console.log(`     [Violation] Slot '${slotKey}' is 'real' but missing desktopSrc`);
        consentAndRealErrors++;
      }
      if (entry.mobileSrc) {
        const fullPath = path.join(process.cwd(), "public", entry.mobileSrc.replace(/^\//, ""));
        realFilePaths.add(path.normalize(fullPath));
        if (entry.status === "real" && !fs.existsSync(fullPath)) {
          console.log(`     [Violation] Slot '${slotKey}' mobileSrc '${entry.mobileSrc}' file does not exist`);
          consentAndRealErrors++;
        }
      }
    }
  }
  logCheck("Consent & Real File Existence", consentAndRealErrors);

  // 2. No unreferenced images in public/images/ & zero deleted AI filenames
  let imageRefErrors = 0;
  const bannedAiNames = ["hero-gym", "coach-sugu", "coach-shimal", "cardio-suite", "free-weights"];
  const imagesDir = path.join(process.cwd(), "public", "images");

  if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      const baseName = path.basename(file, ext);

      if (bannedAiNames.includes(baseName)) {
        console.log(`     [Violation] Deleted AI image filename present: ${file}`);
        imageRefErrors++;
      }

      const fullFilePath = path.normalize(path.join(imagesDir, file));
      if (!realFilePaths.has(fullFilePath)) {
        console.log(`     [Violation] Unreferenced image file in public/images/: ${file}`);
        imageRefErrors++;
      }
    }
  }
  logCheck("Unreferenced Images & Removed AI Filenames", imageRefErrors);

  // 3. No hardcoded nav/footer labels in TSX outside copy.ts
  let hardcodedNavErrors = 0;
  const navTargets = ["Free trial pass", "Call Now", "WhatsApp Us"];
  // Note: "Programs" and "Pricing" as raw JSX text node like >Programs< or >Pricing<
  const srcDir = path.join(process.cwd(), "src");

  function scanDirectory(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts"))) {
        if (fullPath.includes(path.join("src", "content", "copy.ts"))) continue;

        const content = fs.readFileSync(fullPath, "utf-8");
        for (const target of navTargets) {
          if (content.includes(target)) {
            console.log(`     [Violation] Hardcoded '${target}' in ${path.relative(process.cwd(), fullPath)}`);
            hardcodedNavErrors++;
          }
        }
        // Check JSX text nodes for >Programs< or >Pricing<
        if (/>\s*Programs\s*</.test(content)) {
          console.log(`     [Violation] Hardcoded JSX '>Programs<' in ${path.relative(process.cwd(), fullPath)}`);
          hardcodedNavErrors++;
        }
        if (/>\s*Pricing\s*</.test(content)) {
          console.log(`     [Violation] Hardcoded JSX '>Pricing<' in ${path.relative(process.cwd(), fullPath)}`);
          hardcodedNavErrors++;
        }
      }
    }
  }
  scanDirectory(srcDir);
  logCheck("Hardcoded Nav/Footer Labels Outside copy.ts", hardcodedNavErrors);

  // 4. Restricted color classes (text-white, bg-white, text-black, bg-black, bg-ink)
  let colorClassErrors = 0;
  const allowedColorFiles = [
    path.normalize("src/components/Navbar.tsx"),
    path.normalize("src/components/ChatWidget.tsx"),
    path.normalize("src/components/ui/Button.tsx"),
  ];

  function scanColorClasses(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanColorClasses(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
        const relPath = path.normalize(path.relative(process.cwd(), fullPath));
        if (allowedColorFiles.includes(relPath)) continue;

        const content = fs.readFileSync(fullPath, "utf-8");
        const matches = content.match(/\b(text-white|bg-white|text-black|bg-black|bg-ink)\b/g);
        if (matches) {
          console.log(`     [Violation] Restricted color class ${matches.join(", ")} in ${relPath}`);
          colorClassErrors += matches.length;
        }
      }
    }
  }
  scanColorClasses(srcDir);
  logCheck("Restricted Color Utility Classes Outside Allowed Components", colorClassErrors);

  // 5. Structure rules: no vertical-label, no .zip under src/, no arbitrary bg-[# or text-[# or border-[#
  let structureErrors = 0;

  function scanStructure(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanStructure(fullPath);
      } else if (entry.isFile()) {
        if (entry.name.endsWith(".zip")) {
          console.log(`     [Violation] Stray .zip file in src: ${fullPath}`);
          structureErrors++;
        }
        if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
          const content = fs.readFileSync(fullPath, "utf-8");
          if (content.includes("vertical-label")) {
            console.log(`     [Violation] 'vertical-label' found in ${path.relative(process.cwd(), fullPath)}`);
            structureErrors++;
          }
          // Arbitrary color hex/rgb matches
          const arbitraryMatches = content.match(/\b(bg|text|border)-\[#(?:[0-9a-fA-F]{3}){1,2}\]|\b(bg|text|border)-\[rgba?\([^)]+\)\]/g);
          if (arbitraryMatches) {
            console.log(`     [Violation] Arbitrary color class ${arbitraryMatches.join(", ")} in ${path.relative(process.cwd(), fullPath)}`);
            structureErrors += arbitraryMatches.length;
          }
        }
      }
    }
  }
  scanStructure(srcDir);
  logCheck("Structure & Arbitrary Class Rules", structureErrors);

  // 6. Placeholder slots must not have alt text containing "Wave Fitness"
  let altTextErrors = 0;
  for (const [slotKey, entry] of Object.entries(gymImages)) {
    if (entry.status === "placeholder" && entry.alt) {
      const altStr = typeof entry.alt === "string" ? entry.alt : `${entry.alt.en} ${entry.alt.ta || ""}`;
      if (/Wave Fitness/i.test(altStr)) {
        console.log(`     [Violation] Placeholder slot '${slotKey}' contains 'Wave Fitness' in alt text: "${altStr}"`);
        altTextErrors++;
      }
    }
  }
  logCheck("Placeholder Alt Text Containing Wave Fitness", altTextErrors);

  // 7. Images directory size (< 2.5 MB) & Logo file validity
  let assetErrors = 0;

  let totalImagesBytes = 0;
  if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir);
    for (const f of files) {
      const stat = fs.statSync(path.join(imagesDir, f));
      totalImagesBytes += stat.size;
    }
  }
  const maxBytes = 2.5 * 1024 * 1024;
  if (totalImagesBytes > maxBytes) {
    console.log(`     [Violation] public/images total size (${(totalImagesBytes / 1024 / 1024).toFixed(2)} MB) exceeds 2.5 MB`);
    assetErrors++;
  }

  const logoPath = path.join(process.cwd(), "public", "brand", "logo-wf.png");
  if (!fs.existsSync(logoPath)) {
    console.log("     [Violation] public/brand/logo-wf.png does not exist");
    assetErrors++;
  }
  logCheck("Images Size (< 2.5 MB) & Logo File Existence", assetErrors);

  return errors;
}

if (require.main === module) {
  const errCount = runAuditChecks();
  process.exit(errCount > 0 ? 1 : 0);
}
