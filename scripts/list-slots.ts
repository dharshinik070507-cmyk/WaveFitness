import fs from "fs";
import path from "path";
import { gymImages } from "../src/content/gymImages";

console.log("| Slot Key | Status | File Path | File Size | File Exists? |");
console.log("|---|---|---|---|---|");

for (const [key, entry] of Object.entries(gymImages)) {
  const relPath = entry.desktopSrc || "N/A";
  let sizeStr = "N/A";
  let exists = false;
  if (entry.desktopSrc) {
    const fullPath = path.join(process.cwd(), "public", entry.desktopSrc.replace(/^\//, ""));
    if (fs.existsSync(fullPath)) {
      exists = true;
      const stat = fs.statSync(fullPath);
      sizeStr = (stat.size / 1024).toFixed(1) + " KB";
    }
  }
  console.log(`| \`${key}\` | \`${entry.status}\` | \`${relPath}\` | ${sizeStr} | ${exists ? "Yes" : "No (Placeholder)"} |`);
}
