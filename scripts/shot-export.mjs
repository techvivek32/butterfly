import http from "http";
import { readFile } from "fs/promises";
import { existsSync, statSync, mkdirSync } from "fs";
import { extname, join, normalize } from "path";
import { chromium } from "playwright";

mkdirSync("shots", { recursive: true });
const ROOT = join(process.cwd(), "out");
const TYPES = { ".html":"text/html",".css":"text/css",".js":"text/javascript",".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain",".woff2":"font/woff2",".ico":"image/x-icon" };
const server = http.createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(req.url.split("?")[0]);
    let fp = normalize(join(ROOT, p));
    if (!fp.startsWith(ROOT)) return res.writeHead(403).end();
    if (existsSync(fp) && statSync(fp).isDirectory()) fp = join(fp, "index.html");
    if (!existsSync(fp) && existsSync(fp + ".html")) fp = fp + ".html";
    if (!existsSync(fp)) return res.writeHead(404).end("404");
    res.writeHead(200, { "Content-Type": TYPES[extname(fp)] || "application/octet-stream" });
    res.end(await readFile(fp));
  } catch (e) { res.writeHead(500).end(String(e)); }
});
await new Promise((r) => server.listen(3300, r));

async function settle(page) {
  await page.evaluate(async () => {
    const s = (ms) => new Promise((r) => setTimeout(r, ms));
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += 220) { window.scrollTo(0, y); await s(160); }
    await s(700); window.scrollTo(0, 0); await s(500);
  });
}
const b = await chromium.launch();
// desktop
const d = await b.newContext({ viewport: { width: 1440, height: 900 } }).then(c => c.newPage());
await d.goto("http://localhost:3300/", { waitUntil: "networkidle" });
await d.waitForTimeout(700); await settle(d);
await d.screenshot({ path: "shots/v2-desktop-full.png", fullPage: true });
for (const id of ["solution","included","pricing","stories"]) {
  const el = await d.$("#" + id);
  if (el) { await el.scrollIntoViewIfNeeded(); await d.waitForTimeout(500); await el.screenshot({ path: `shots/v2-${id}.png` }).catch(()=>{}); }
}
const footer = await d.$("footer");
if (footer) { await footer.scrollIntoViewIfNeeded(); await d.waitForTimeout(400); await footer.screenshot({ path: "shots/v2-footer.png" }).catch(()=>{}); }
// mobile
const m = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true }).then(c => c.newPage());
await m.goto("http://localhost:3300/", { waitUntil: "networkidle" });
await m.waitForTimeout(700); await settle(m);
await m.screenshot({ path: "shots/v2-mobile-full.png", fullPage: true });
await b.close(); server.close();
console.log("DONE");
