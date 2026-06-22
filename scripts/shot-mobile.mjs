import { chromium } from "playwright";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
await page.goto("http://localhost:3100/", { waitUntil: "networkidle" });
await page.waitForTimeout(700);
await page.evaluate(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const h = document.body.scrollHeight;
  for (let y = 0; y <= h; y += 200) { window.scrollTo(0, y); await sleep(180); }
  await sleep(700); window.scrollTo(0, 0); await sleep(500);
});
// horizontal overflow check
const overflow = await page.evaluate(() => ({
  scrollW: document.documentElement.scrollWidth,
  clientW: document.documentElement.clientWidth,
  overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
}));
console.log("OVERFLOW:" + JSON.stringify(overflow));
await page.screenshot({ path: "shots/mobile-full2.png", fullPage: true });
await browser.close();
console.log("DONE_MOBILE");
