import { chromium } from "playwright";
import { mkdirSync } from "fs";

mkdirSync("shots", { recursive: true });
const URL = "http://localhost:3100/";

async function slowScroll(page) {
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += 250) {
      window.scrollTo(0, y);
      await sleep(200);
    }
    await sleep(800);
    window.scrollTo(0, 0);
    await sleep(600);
  });
}

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await slowScroll(page);
await page.waitForTimeout(500);
await page.screenshot({ path: "shots/desktop-full2.png", fullPage: true });

// Capture each direct child section of <main> + footer at full res
const labels = await page.evaluate(() => {
  const out = [];
  const main = document.querySelector("main");
  if (main) [...main.children].forEach((c, i) => out.push({ i, tag: c.tagName, cls: c.className.slice(0, 30) }));
  return out;
});
console.log("MAIN_CHILDREN:" + JSON.stringify(labels));

const kids = await page.$$("main > *");
for (let i = 0; i < kids.length; i++) {
  await kids[i].scrollIntoViewIfNeeded().catch(() => {});
  await page.waitForTimeout(700);
  await kids[i].screenshot({ path: `shots/sec-${String(i).padStart(2, "0")}.png` }).catch((e) => console.log("skip " + i + ": " + e.message));
}
const footer = await page.$("footer");
if (footer) { await footer.scrollIntoViewIfNeeded(); await page.waitForTimeout(500); await footer.screenshot({ path: "shots/sec-footer.png" }).catch(() => {}); }

await browser.close();
console.log("DONE2");
