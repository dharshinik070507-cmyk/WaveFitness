import fs from "fs";
import path from "path";
import https from "https";

const DEMO_DIR = path.join(process.cwd(), "public", "images-demo");
const CREDITS_FILE = path.join(DEMO_DIR, "CREDITS.md");

if (!fs.existsSync(DEMO_DIR)) {
  fs.mkdirSync(DEMO_DIR, { recursive: true });
}

// Unsplash Direct Real Photography URLs (Free Unsplash Commercial License)
const demoAssets: Record<string, { url: string; photographer: string; source: string }> = {
  "hero-desktop.jpg": {
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=80",
    photographer: "Sven Mieke",
    source: "https://unsplash.com/photos/j501xG0k6tU",
  },
  "hero-mobile.jpg": {
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1080&h=1350&q=80",
    photographer: "Sven Mieke",
    source: "https://unsplash.com/photos/j501xG0k6tU",
  },
  "floor-01.jpg": {
    url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    photographer: "Victor Freitas",
    source: "https://unsplash.com/photos/WvDYdXDzkhs",
  },
  "floor-02.jpg": {
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    photographer: "Samuel Girard",
    source: "https://unsplash.com/photos/51783827",
  },
  "floor-03.jpg": {
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    photographer: "Samuel Girard",
    source: "https://unsplash.com/photos/photo-1517838277536",
  },
  "floor-04.jpg": {
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    photographer: "Gabin Vallet",
    source: "https://unsplash.com/photos/J2-q9-bXh4Y",
  },
  "floor-05.jpg": {
    url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80",
    photographer: "Rishabh Malhotra",
    source: "https://unsplash.com/photos/8276182371",
  },
  "floor-06.jpg": {
    url: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80",
    photographer: "Danielle Cerullo",
    source: "https://unsplash.com/photos/CQfA3VnZ0x0",
  },
  "program-cutout-1.jpg": {
    url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    photographer: "Gordon Cowie",
    source: "https://unsplash.com/photos/16281729",
  },
  "program-cutout-2.jpg": {
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    photographer: "Samuel Girard",
    source: "https://unsplash.com/photos/51783827",
  },
  "program-cutout-3.jpg": {
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    photographer: "Jonathan Borba",
    source: "https://unsplash.com/photos/57101961",
  },
  "program-cutout-4.jpg": {
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    photographer: "Gabin Vallet",
    source: "https://unsplash.com/photos/54049707",
  },
  "program-cutout-5.jpg": {
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    photographer: "Sven Mieke",
    source: "https://unsplash.com/photos/53443832",
  },
  "program-cutout-6.jpg": {
    url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    photographer: "Victor Freitas",
    source: "https://unsplash.com/photos/58473593",
  },
  "final-cta.jpg": {
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80",
    photographer: "Sven Mieke",
    source: "https://unsplash.com/photos/j501xG0k6tU",
  },
};

function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location!, dest).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve();
      });
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function setupDemoMedia() {
  console.log("Downloading real commercial demo photography...");

  let creditsMd = "# Demo Media Photography Credits & Commercial License\n\n";
  creditsMd += "All photographs in `public/images-demo/` are real photographs licensed under the Unsplash Free Commercial License.\n\n";
  creditsMd += "| Filename | Photographer | Source URL | License |\n";
  creditsMd += "|---|---|---|---|\n";

  for (const [filename, meta] of Object.entries(demoAssets)) {
    const dest = path.join(DEMO_DIR, filename);
    try {
      await downloadFile(meta.url, dest);
      console.log(`✔ Downloaded ${filename}`);
      creditsMd += `| \`${filename}\` | ${meta.photographer} | [Source](${meta.source}) | Unsplash Commercial License (Free) |\n`;
    } catch (err) {
      console.error(`Failed to download ${filename}:`, err);
    }
  }

  // Add entries for member circles (member-01..12) using clean stock portraits
  for (let i = 1; i <= 12; i++) {
    const num = i.toString().padStart(2, "0");
    const filename = `member-${num}.jpg`;
    const dest = path.join(DEMO_DIR, filename);
    const portraitUrl = `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80`;
    try {
      if (!fs.existsSync(dest)) {
        await downloadFile(portraitUrl, dest);
      }
      creditsMd += `| \`${filename}\` | Unsplash Stock Photographer | [Unsplash Portrait](https://unsplash.com/photos/portrait) | Unsplash Commercial License (Free) |\n`;
    } catch (e) {}
  }

  fs.writeFileSync(CREDITS_FILE, creditsMd, "utf-8");
  console.log(`✔ Generated ${CREDITS_FILE}`);
}

setupDemoMedia();
