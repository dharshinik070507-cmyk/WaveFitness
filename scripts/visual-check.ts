import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import http from "http";
import { spawn, ChildProcess } from "child_process";

interface ViewportResult {
  viewport: string;
  noOverflow: boolean;
  buttonsSingleLine: boolean;
  ringsNoIntersect: boolean;
  textNoOverflow: boolean;
  headingsAligned: boolean;
  onePillPerSection: boolean;
  bannedStringsZero: boolean;
  screenshotSaved: boolean;
  passed: boolean;
  errors: string[];
}

function checkServerReady(): Promise<boolean> {
  return new Promise((resolve) => {
    const req = http.get("http://localhost:3000", (res) => {
      resolve(res.statusCode === 200 || res.statusCode === 304);
    });
    req.on("error", () => resolve(false));
    req.end();
  });
}

async function ensureServerRunning(): Promise<ChildProcess | null> {
  const isReady = await checkServerReady();
  if (isReady) return null;

  console.log("🌐 Server not running on http://localhost:3000. Starting Next.js server...");
  const serverProcess = spawn("npx", ["next", "start"], {
    cwd: process.cwd(),
    shell: true,
    stdio: "ignore",
  });

  for (let i = 0; i < 30; i++) {
    await new Promise((res) => setTimeout(res, 1000));
    const ready = await checkServerReady();
    if (ready) {
      console.log("⚡ Server is ready at http://localhost:3000");
      return serverProcess;
    }
  }

  return serverProcess;
}

async function runVisualCheck() {
  console.log("🎨 Starting Playwright Automated Visual Checks...");

  const serverProcess = await ensureServerRunning();

  const screenshotsDir = path.join(process.cwd(), "screenshots");
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const viewports = [
    { name: "1920x1080", width: 1920, height: 1080 },
    { name: "1440x900", width: 1440, height: 900 },
    { name: "390x844", width: 390, height: 844 },
  ];

  const results: ViewportResult[] = [];
  let totalErrors = 0;

  for (const vp of viewports) {
    console.log(`\n🔍 Checking viewport ${vp.name}...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    let navSuccess = false;
    try {
      await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 15000 });
      navSuccess = true;
    } catch {
      try {
        await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded", timeout: 15000 });
        navSuccess = true;
      } catch (err: any) {
        console.error(`❌ Failed to connect to http://localhost:3000: ${err.message}`);
      }
    }

    if (!navSuccess) {
      totalErrors++;
      results.push({
        viewport: vp.name,
        noOverflow: false,
        buttonsSingleLine: false,
        ringsNoIntersect: false,
        textNoOverflow: false,
        headingsAligned: false,
        onePillPerSection: false,
        bannedStringsZero: false,
        screenshotSaved: false,
        passed: false,
        errors: ["Server not reachable at http://localhost:3000"],
      });
      await context.close();
      continue;
    }

    // Give motion/animations 1s to settle
    await page.waitForTimeout(1000);

    const vpErrors: string[] = [];

    // 1. Check no horizontal overflow
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    const noOverflow = !overflow;
    if (overflow) vpErrors.push("Horizontal page overflow detected!");

    // 2. Check buttons: single line, height <= 85px, no intersection
    const buttonCheck = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll("button, a.rounded-pill, a[class*='rounded-pill']"));
      let singleLine = true;
      for (const b of buttons) {
        const rect = b.getBoundingClientRect();
        if (rect.height > 85 || b.scrollHeight > b.clientHeight + 4) {
          singleLine = false;
          break;
        }
      }
      return singleLine;
    });
    if (!buttonCheck) vpErrors.push("Button wrapped to multiple lines or exceeded 85px height!");

    // 3. Ring bounding box non-intersection
    const ringsCheck = await page.evaluate(() => {
      const circles = Array.from(document.querySelectorAll("#community .rounded-full"));
      if (circles.length < 2) return true;
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
          if (intersect) return false;
        }
      }
      return true;
    });
    if (!ringsCheck) vpErrors.push("Community ring bounding boxes intersect each other!");

    // 4. Check text overflow
    const textOverflowCheck = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll("h1, h2, h3, p"));
      for (const el of elements) {
        if (el.scrollWidth > el.clientWidth + 4) {
          if (el.closest(".animate-marquee") || el.closest("svg")) continue;
          return false;
        }
      }
      return true;
    });
    if (!textOverflowCheck) vpErrors.push("Text element overflowed container!");

    // 5. Headings left edge alignment within 3px
    const headingsAlignmentCheck = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll("section h1, section h2"));
      if (headings.length < 2) return true;
      const lefts = headings.map((h) => h.getBoundingClientRect().left);
      const first = lefts[0];
      return lefts.every((l) => Math.abs(l - first) <= 3.0);
    });
    if (!headingsAlignmentCheck) vpErrors.push("Section headings left edge misaligned (>3px difference)");

    // 6. Each section contains at most one primary CTA pill button
    const onePillCheck = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll("section"));
      for (const sec of sections) {
        if (sec.id === "plans" || sec.id === "reviews" || sec.id === "faq") continue;
        const mainCtas = Array.from(sec.querySelectorAll("button[class*='bg-red'], button[class*='bg-ink']"));
        if (mainCtas.length > 1) {
          return false;
        }
      }
      return true;
    });
    if (!onePillCheck) vpErrors.push("Section contains more than one primary CTA button!");

    // 7. Banned strings check
    const bannedStrings = ["[PHOTO", "[CUTOUT", "[TEAM WAVE", "STEP 0", "/ PLAN QUIZ"];
    const bannedCheck = await page.evaluate((banned) => {
      const text = document.body.innerText || "";
      for (const b of banned) {
        if (text.includes(b)) return false;
      }
      return true;
    }, bannedStrings);
    if (!bannedCheck) vpErrors.push("Banned debug label string found in DOM!");

    // 8. Screenshot
    const screenshotPath = path.join(screenshotsDir, `desktop-${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    const passed = vpErrors.length === 0;
    if (!passed) totalErrors += vpErrors.length;

    results.push({
      viewport: vp.name,
      noOverflow,
      buttonsSingleLine: buttonCheck,
      ringsNoIntersect: ringsCheck,
      textNoOverflow: textOverflowCheck,
      headingsAligned: headingsAlignmentCheck,
      onePillPerSection: onePillCheck,
      bannedStringsZero: bannedCheck,
      screenshotSaved: true,
      passed,
      errors: vpErrors,
    });

    await context.close();
  }

  await browser.close();
  if (serverProcess) {
    serverProcess.kill();
  }

  // Print Summary Table
  console.log("\n=======================================================");
  console.log("📊 AUTOMATED VISUAL CHECK RESULTS TABLE");
  console.log("=======================================================");
  console.table(
    results.map((r) => ({
      Viewport: r.viewport,
      "No Overflow": r.noOverflow ? "✅ PASS" : "❌ FAIL",
      "Buttons Single Line": r.buttonsSingleLine ? "✅ PASS" : "❌ FAIL",
      "Rings Non-Intersect": r.ringsNoIntersect ? "✅ PASS" : "❌ FAIL",
      "Headings Aligned": r.headingsAligned ? "✅ PASS" : "❌ FAIL",
      "One Pill/Section": r.onePillPerSection ? "✅ PASS" : "❌ FAIL",
      "Banned Strings 0": r.bannedStringsZero ? "✅ PASS" : "❌ FAIL",
      Status: r.passed ? "✅ PASS" : "❌ FAIL",
    }))
  );

  if (totalErrors > 0) {
    console.error(`\n❌ VISUAL CHECK FAILED WITH ${totalErrors} ERRORS!`);
    process.exit(1);
  } else {
    console.log("\n🎉 ALL VISUAL CHECKS PASSED WITH 0 ERRORS!");
    process.exit(0);
  }
}

runVisualCheck();
