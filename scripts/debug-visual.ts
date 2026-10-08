import { chromium } from "playwright";

async function debugVisual() {
  const browser = await chromium.launch({ headless: true });
  
  for (const vp of [{ name: "1920x1080", width: 1920, height: 1080 }, { name: "390x844", width: 390, height: 844 }]) {
    console.log(`\n================ Viewport ${vp.name} ================`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    // 1. Buttons
    const btns = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll("button, a.rounded-pill, a[class*='rounded-pill']"));
      return buttons.map((b) => {
        const rect = b.getBoundingClientRect();
        return {
          text: (b as HTMLElement).innerText.replace(/\n/g, " "),
          height: rect.height,
          scrollHeight: b.scrollHeight,
          clientHeight: b.clientHeight,
          overflow: rect.height > 85 || b.scrollHeight > b.clientHeight + 4,
          html: b.outerHTML.slice(0, 100),
        };
      });
    });

    console.log("Failed Buttons:");
    btns.filter(b => b.overflow).forEach(b => console.log(b));

    // 2. Rings
    const rings = await page.evaluate(() => {
      const circles = Array.from(document.querySelectorAll("#community .rounded-full"));
      const collisions: string[] = [];
      for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
          const r1 = circles[i].getBoundingClientRect();
          const r2 = circles[j].getBoundingClientRect();
          if (r1.width === 0 || r2.width === 0) continue;
          const intersect = !(
            r1.right < r2.left ||
            r1.left > r2.right ||
            r1.bottom < r2.top ||
            r1.top > r2.bottom
          );
          if (intersect) {
            collisions.push(`Collision between ${i} and ${j}: rect1=(${Math.round(r1.left)},${Math.round(r1.top)},${Math.round(r1.width)}x${Math.round(r1.height)}) vs rect2=(${Math.round(r2.left)},${Math.round(r2.top)},${Math.round(r2.width)}x${Math.round(r2.height)})`);
          }
        }
      }
      return { count: circles.length, collisions };
    });
    console.log("Rings analysis:", rings);

    // 3. Headings Alignment
    const headings = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll("section h1, section h2"));
      return elements.map((h) => ({
        text: (h as HTMLElement).innerText.replace(/\n/g, " "),
        left: h.getBoundingClientRect().left,
        tag: h.tagName,
        sectionId: h.closest("section")?.id || h.closest("section")?.getAttribute("data-surface"),
      }));
    });
    console.log("Headings left alignment:");
    console.table(headings);

    await page.close();
  }

  await browser.close();
}

debugVisual();
