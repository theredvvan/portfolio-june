// Downloads all assets from norelltemplate.framer.website into public/images
// Run: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");

const BASE = "https://framerusercontent.com/images/";

// filename -> semantic local name
const ASSETS = {
  "Q2YK4XFlPAbwGlt6kZjyIyxVsE.svg": "logo-norell.svg",       // nav wordmark
  "hp79kGVk30AAL94dAOwv6yHXOk.svg": "logo-norell-footer.svg", // footer wordmark
  "olDO2litmNiw2PokCsklRVWZYtY.svg": "icon-r.svg",            // circled R
  "v6rp5cIZc3r5H45FIzN2w4771y0.png": "hero-portrait.png",
  "axbOIY5mooyqZV8vRe7GkyUdYDI.png": "contact-portrait.png",
  // work projects (bg + logo)
  "LMiQSWFAesL7nr6Rj3m4bXGjtY.png": "work-studiolink.png",
  "oyc6Z4i7CYCZjloOgUpZyFy8lI.svg": "work-studiolink-logo.svg",
  "ADa1bF6DGucsPyLdM5F7CTmOHA.png": "work-zentrox.png",
  "rfzNVjDGr6i0XoW9qdRO9AErL4.svg": "work-zentrox-logo.svg",
  "j8DW5aGQHlzOSQTfgITzCZxRI4.png": "work-corehue.png",
  "uK8bSBfkNY94V99kq22CQoFhCMo.svg": "work-corehue-logo.svg",
  "3qex0VNYjpqAa93SuPbcwxh2Fd4.png": "work-elevana.png",
  "wy8yM1PYeLi0VVTchU6ZXzqdK0.svg": "work-elevana-logo.svg",
  // testimonial
  "qWzEBhiVVM3OTxrtwReb9S2Bauc.png": "testimonial-portrait.png",
  // services
  "160MyzGohRBAz3DvtF579CgVDI.png": "service-branding.png",
  "fiwXujoW6MkaN8ymqQv0gbt4ok.png": "service-development.png",
  "LeTxjegpM0Db4FAKpLz86n8rNMA.png": "service-motion.png",
  "P2Bw6LtlooQC61LMadLhQz8fmMc.png": "service-uiux.png",
  // about
  "qwj1tdtit4mxSHdG2RubHFyjoY.png": "about-portrait.png",
  // video
  "f4taDzYQ7rbNmBdHg3SDmkeiI.png": "video-poster.png",
  // blog
  "NuBIXVzix21itlgdmGz4gElgVbo.png": "blog-1.png",
  "b9yIdcWr8uZJVQBUpPMwL4aP75g.png": "blog-2.png",
  "qk0r80O3NjcRw81IUP7FeLqg.png": "blog-3.png",
  // misc svgs (icons / decorations)
  "vLRodbFpwnFRy2PrzWNtrSeCRZQ.svg": "misc-1.svg",
  "WxOWoUKaL4fkgVlOKilQmfuNEwQ.svg": "misc-2.svg",
  "Q5hK1PuUQ0LxXqA33pOs8fsOg.svg": "misc-3.svg",
  "ANlI6HBv5tYBsO7wUmXi27qNlvc.svg": "misc-4.svg",
  "f4taDzYQ7rbNmBdHg3SDmkeiI.png ": "video-poster.png",
};

async function download(remoteFile, localName) {
  const url = BASE + remoteFile;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(join(OUT, localName), buf);
  return `${localName} (${(buf.length / 1024).toFixed(0)}kb)`;
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const entries = Object.entries(ASSETS).filter(([k]) => k.trim() === k);
  const batchSize = 4;
  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    const results = await Promise.allSettled(
      batch.map(([remote, local]) => download(remote, local))
    );
    results.forEach((r, idx) => {
      if (r.status === "fulfilled") console.log("✓", r.value);
      else console.error("✗", batch[idx][0], r.reason.message);
    });
  }
  console.log("Done.");
}

main();
