import http from "http";
import { readFile } from "fs/promises";
import { existsSync, statSync } from "fs";
import { extname, join, normalize } from "path";
import { chromium } from "playwright";

const ROOT = join(process.cwd(), "out");
const TYPES = { ".html":"text/html", ".css":"text/css", ".js":"text/javascript", ".svg":"image/svg+xml", ".json":"application/json", ".txt":"text/plain", ".woff2":"font/woff2", ".ico":"image/x-icon" };

const server = http.createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(req.url.split("?")[0]);
    let fp = normalize(join(ROOT, p));
    if (!fp.startsWith(ROOT)) { res.writeHead(403).end(); return; }
    if (existsSync(fp) && statSync(fp).isDirectory()) fp = join(fp, "index.html");
    if (!existsSync(fp) && existsSync(fp + ".html")) fp = fp + ".html";
    if (!existsSync(fp)) { res.writeHead(404).end("404"); return; }
    const buf = await readFile(fp);
    res.writeHead(200, { "Content-Type": TYPES[extname(fp)] || "application/octet-stream" });
    res.end(buf);
  } catch (e) { res.writeHead(500).end(String(e)); }
});

await new Promise((r) => server.listen(3200, r));
const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1440, height: 900 } }).then(c => c.newPage());
const bad = [];
page.on("response", r => { if (r.status() >= 400) bad.push(r.status() + " " + r.url()); });
await page.goto("http://localhost:3200/", { waitUntil: "networkidle" });
await page.waitForTimeout(700);
const h1 = await page.evaluate(() => { const h = document.querySelector("h1"); return h ? getComputedStyle(h).fontSize : "NO-H1"; });
await page.screenshot({ path: "scripts/export-hero.png" });
await browser.close();
server.close();
console.log("H1_FONT_SIZE:" + h1);
console.log("BAD_RESPONSES:" + JSON.stringify(bad));
