import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import { seoPages, renderSeoHead } from "../src/seo/metadata.js";
import { organisation } from "../src/data/organisation.js";

const output = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", output), "utf8");
const marker = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
if (!marker.test(template)) throw new Error("SEO template markers are missing from the Vite output.");
for (const route of Object.keys(seoPages)) {
  const filename = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  await writeFile(new URL(filename, output), template.replace(marker, `<!--seo:start-->\n${renderSeoHead(route)}\n    <!--seo:end-->`));
}
await writeFile(new URL("404.html", output), template.replace(marker, `<!--seo:start-->\n${renderSeoHead("/404")}\n    <!--seo:end-->`));
const urls = Object.keys(seoPages).map((route) => `  <url><loc>${new URL(route, organisation.website).href}</loc></url>`).join("\n");
await writeFile(new URL("sitemap.xml", output), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
await writeFile(new URL("robots.txt", output), `User-agent: *\nAllow: /\n\nSitemap: ${organisation.website}/sitemap.xml\n`);
await mkdir(new URL("seo/", output), { recursive: true });
await copyFile(new URL("../src/assets/images/casdi-logo.png", import.meta.url), new URL("seo/casdi-logo.png", output));
await copyFile(new URL("../src/assets/images/tree-planting.jpg", import.meta.url), new URL("seo/community-tree-planting.jpg", output));
console.log(`Generated page metadata for ${Object.keys(seoPages).length} routes, sitemap.xml, robots.txt and social preview assets.`);
