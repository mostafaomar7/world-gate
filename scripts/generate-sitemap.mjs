// Runs after `vite build` via the postbuild npm hook; writes dist/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://worldgateksa.lovable.app";

const destinationSlugs = [
  "maldives", "paris", "istanbul", "bali", "georgia", "thailand",
  "malaysia", "singapore", "azerbaijan", "seychelles", "switzerland",
  "spain", "dubai", "morocco", "japan", "greece", "egypt", "sri-lanka",
];

const visaSlugs = [
  "american-visa", "british-visa", "canadian-visa", "schengen-visa",
  "turkish-visa", "russian-visa", "chinese-visa",
];

const entries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.8" },
  { path: "/destinations", changefreq: "weekly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.6" },
  { path: "/honeymoon", changefreq: "monthly", priority: "0.8" },
  { path: "/corporate", changefreq: "monthly", priority: "0.8" },
  { path: "/offers", changefreq: "weekly", priority: "0.9" },
  { path: "/eid-offers", changefreq: "weekly", priority: "0.9" },
  { path: "/markets", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/cruise", changefreq: "monthly", priority: "0.8" },
  { path: "/visa", changefreq: "monthly", priority: "0.8" },
  { path: "/flights", changefreq: "monthly", priority: "0.8" },
  { path: "/hotels", changefreq: "monthly", priority: "0.8" },
  ...destinationSlugs.map((s) => ({ path: `/destination/${s}`, changefreq: "monthly", priority: "0.7" })),
  ...visaSlugs.map((s) => ({ path: `/visa/${s}`, changefreq: "monthly", priority: "0.7" })),
];

function generateSitemap(entries) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("dist/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
