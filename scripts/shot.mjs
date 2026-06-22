import { chromium } from "playwright";
import { mkdirSync } from "fs";

mkdirSync("shots", { recursive: true });
const URL = "http://localhost:3100/";

async function settle(page) {
  // Scroll through to trigger whileInView reveal animations
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 500) {
      window.scrollTo(0, y);
      await sleep(90);
    }
    window.scrollTo(0, 0);
    await sleep(400);
  });
  await page.waitForTimeout(700);
}

const browser = await chromium.launch();

// Desktop
const dctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const dp = await dctx.newPage();
const errors = [];
dp.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
dp.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));
await dp.goto(URL, { waitUntil: "networkidle" });
await dp.waitForTimeout(800);
await settle(dp);
await dp.screenshot({ path: "shots/desktop-full.png", fullPage: true });

// Above-the-fold hero
await dp.evaluate(() => window.scrollTo(0, 0));
await dp.waitForTimeout(300);
await dp.screenshot({ path: "shots/desktop-hero.png" });

// Targeted sections
for (const id of ["solution", "features", "pricing", "stories"]) {
  const el = await dp.$("#" + id);
  if (el) {
    await el.scrollIntoViewIfNeeded();
    await dp.waitForTimeout(600);
    await el.screenshot({ path: `shots/desktop-${id}.png` }).catch(() => {});
  }
}

// Mobile
const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true });
const mp = await mctx.newPage();
await mp.goto(URL, { waitUntil: "networkidle" });
await mp.waitForTimeout(800);
await settle(mp);
await mp.screenshot({ path: "shots/mobile-full.png", fullPage: true });
await mp.evaluate(() => window.scrollTo(0, 0));
await mp.waitForTimeout(300);
await mp.screenshot({ path: "shots/mobile-hero.png" });

await browser.close();
console.log("CONSOLE_ERRORS:" + JSON.stringify(errors, null, 2));
console.log("DONE");
