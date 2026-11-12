#!/usr/bin/env node
// screenshot-deck.mjs — one PNG per slide of a Stage Deck, at its final state.
//
//   node screenshot-deck.mjs path/to/deck.html out-dir [options]
//
//   --size 1512x982     viewport (default 1512x982, a laptop screen)
//   --theme light|dark  colour scheme (default light)
//   --beats a,b,c       only these beat ids
//   --figure-only       hide the headline, description, evidence note and foot,
//                       so the image shows the diagram alone. This is the image
//                       for the cold read in verify.md §3.
//
// Needs Playwright, found the same way verify-deck.mjs finds it: in this file's
// directory, then the working directory and every ancestor.

import { existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const flags = new Set(["--size", "--theme", "--beats"]);
const positional = args.filter((a, i) => !a.startsWith("--") && !flags.has(args[i - 1]));
const [file, outDir] = positional;
if (!file || !outDir || args.includes("--help")) {
  console.error("usage: node screenshot-deck.mjs deck.html out-dir [--size WxH] [--theme light|dark] [--beats a,b] [--figure-only]");
  process.exit(2);
}
const path = resolve(file);
if (!existsSync(path)) {
  console.error(`no such file: ${path}`);
  process.exit(2);
}
const out = resolve(outDir);
mkdirSync(out, { recursive: true });
const size = opt("--size", "1512x982");
const [width, height] = size.split("x").map(Number);
const theme = opt("--theme", "light");
const only = opt("--beats", "").split(",").filter(Boolean);
const figureOnly = args.includes("--figure-only");

let chromium;
{
  const { createRequire } = await import("node:module");
  const requires = [createRequire(import.meta.url)];
  let dir = process.cwd();
  for (;;) {
    requires.push(createRequire(resolve(dir, "noop.js")));
    const up = dirname(dir);
    if (up === dir) break;
    dir = up;
  }
  for (const name of ["playwright", "@playwright/test", "playwright-core"]) {
    for (const req of requires) {
      if (chromium) break;
      try {
        const mod = await import(pathToFileURL(req.resolve(name)).href);
        chromium = mod.chromium ?? mod.default?.chromium;
      } catch {}
    }
    if (chromium) break;
  }
  if (!chromium) {
    console.error("Playwright not found. Run this from the package that owns it, or: npm i playwright && npx playwright install chromium");
    process.exit(2);
  }
}

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width, height }, colorScheme: theme });
const page = await ctx.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
const url = pathToFileURL(path).href;
await page.goto(url);

// Walk forward once and keep the last state seen for each beat: its final state.
const finals = new Map();
let last = null;
for (let i = 0; i < 400; i++) {
  const q = new URL(page.url()).search;
  if (q === last) break;
  last = q;
  finals.set(new URLSearchParams(q).get("beat") || `slide-${finals.size + 1}`, q);
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(30);
}

let n = 0;
for (const [id, q] of finals) {
  n++;
  if (only.length && !only.includes(id)) continue;
  await page.goto(url + q);
  if (figureOnly) {
    await page.addStyleTag({
      content: ".top,.claim,.desc,.basis,.foot,.rail{visibility:hidden!important}",
    });
  }
  await page.waitForTimeout(450);   // let the enter and reveal transitions finish
  const name = `${String(n).padStart(2, "0")}-${id}-${size}-${theme}${figureOnly ? "-figure" : ""}.png`;
  // A diagram-only image is cropped to the body region, so the reader is not
  // left wondering about the blank band where the headline was.
  let clip;
  if (figureOnly) {
    clip = await page.evaluate(() => {
      const b = document.querySelector(".body");
      if (!b) return undefined;
      const r = b.getBoundingClientRect();
      return r.width > 40 && r.height > 40
        ? { x: 0, y: Math.max(0, r.top), width: innerWidth, height: Math.min(innerHeight - r.top, r.height) }
        : undefined;
    });
  }
  await page.screenshot({ path: resolve(out, name), ...(clip ? { clip } : {}) });
  console.log(resolve(out, name));
}
await browser.close();
if (errors.length) {
  console.error(`page errors:\n  ${errors.join("\n  ")}`);
  process.exit(1);
}
