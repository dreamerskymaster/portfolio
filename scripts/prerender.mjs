/**
 * Post-build prerender.
 *
 * The app is a client-rendered SPA, so every route ships the same index.html
 * with an empty #root. Crawlers that do not execute JavaScript — which
 * includes GPTBot, ClaudeBot and PerplexityBot — therefore see no title, no
 * description and no content on any page but the homepage.
 *
 * This writes a real HTML file per route with that route's title,
 * description, canonical, Open Graph tags and JSON-LD, plus the page's key
 * content inside <noscript> so a non-JS crawler has something to read.
 * Vercel matches the filesystem before applying the SPA rewrite, so
 * /about is served dist/about/index.html while unknown paths still fall
 * through to the SPA.
 *
 * This is not full DOM prerendering: pages are React.lazy, so rendering them
 * server-side would emit the Suspense fallback rather than the page. Doing it
 * properly means reworking the lazy boundaries.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = (process.env.VITE_SITE_URL || 'https://manufx.vercel.app').replace(/\/$/, '');

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Pull real content out of the data layer rather than duplicating copy here.
const profileSrc = readFileSync(join(root, 'src/data/profile.ts'), 'utf8');
const jsonSlice = (key) => {
  const i = profileSrc.indexOf(`"${key}": [`);
  if (i === -1) return [];
  let d = 0, start = profileSrc.indexOf('[', i), j = start;
  for (; j < profileSrc.length; j++) {
    if (profileSrc[j] === '[') d++;
    else if (profileSrc[j] === ']' && --d === 0) break;
  }
  try { return JSON.parse(profileSrc.slice(start, j + 1)); } catch { return []; }
};
const projects = jsonSlice('projects');
const experience = jsonSlice('experience');

const NAME = 'Ajith Srikanth';
const routes = [
  { path: '/', title: `${NAME} | Manufacturing Engineer & Applied AI`, desc: 'Inventory Forecast Analyst at Van Dyk Recycling Solutions. Manufacturing engineering, spare parts forecasting and applied AI on the shop floor.' },
  { path: '/about', title: `About ${NAME}`, desc: 'Background, experience and work authorization for Ajith Srikanth, manufacturing engineer working on inventory analytics and applied AI.' },
  { path: '/projects', title: `Projects | ${NAME}`, desc: `${projects.length} engineering and applied-AI projects spanning inventory analytics, computer vision, PLC automation and manufacturing systems.` },
  { path: '/writings', title: `Writings | ${NAME}`, desc: 'Field notes on applied AI in manufacturing operations, maintenance and spare parts.' },
  { path: '/certifications', title: `Certifications | ${NAME}`, desc: 'Professional certifications in manufacturing, lean, automation and applied AI.' },
  { path: '/career-artifacts', title: `Career Artifacts | ${NAME}`, desc: 'Reports, recommendations and documentation from manufacturing and AI engineering work.' },
  { path: '/hobbies', title: `Hobbies | ${NAME}`, desc: 'Hiking, automotive work, music and cinema outside the shop floor.' },
  { path: '/contact', title: `Contact ${NAME}`, desc: 'Get in touch about manufacturing engineering, forecasting and applied AI roles or collaboration.' },
  { path: '/resume', title: `Resume | ${NAME}`, desc: 'Resume of Ajith Srikanth, Inventory Forecast Analyst and manufacturing engineer.' },
];

for (const p of projects) {
  routes.push({
    path: `/projects/${p.id}`,
    title: `${p.title} | ${NAME}`,
    desc: (p.summary || '').slice(0, 300),
    project: p,
  });
}

const bodyFor = (r) => {
  const out = [`<h1>${esc(r.title)}</h1>`, `<p>${esc(r.desc)}</p>`];
  if (r.project) {
    const p = r.project;
    if (p.technologies?.length) out.push(`<p>Technologies: ${esc(p.technologies.join(', '))}</p>`);
    if (p.impact?.length) out.push('<ul>' + p.impact.map((i) => `<li>${esc(i)}</li>`).join('') + '</ul>');
    if (p.businessContext) out.push(`<p>${esc(p.businessContext)}</p>`);
    if (p.challenge) out.push(`<p>${esc(p.challenge)}</p>`);
  }
  if (r.path === '/projects') {
    out.push('<ul>' + projects.map((p) => `<li><a href="/projects/${esc(p.id)}">${esc(p.title)}</a> — ${esc(p.summary || '')}</li>`).join('') + '</ul>');
  }
  if (r.path === '/about' || r.path === '/') {
    out.push('<ul>' + experience.map((e) => `<li>${esc(e.role)} — ${esc(e.company)} (${esc(e.start)} – ${esc(e.end)})</li>`).join('') + '</ul>');
  }
  return out.join('\n');
};

const template = readFileSync(join(dist, 'index.html'), 'utf8');
let written = 0;

for (const r of routes) {
  const canonical = `${SITE}${r.path}`;
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(r.desc)}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${esc(r.title)}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${esc(r.desc)}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${esc(canonical)}" />`);

  const extra = [`<link rel="canonical" href="${esc(canonical)}" />`];
  if (r.project) {
    extra.push(
      `<script type="application/ld+json">${JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: r.project.title,
        description: r.project.summary,
        url: canonical,
        dateCreated: r.project.date,
        keywords: (r.project.technologies || []).join(', '),
        author: { '@type': 'Person', name: NAME, url: SITE },
      })}</script>`
    );
  }
  html = html.replace('</head>', `  ${extra.join('\n    ')}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root"></div>\n    <noscript>\n${bodyFor(r)}\n    </noscript>`);

  const outDir = r.path === '/' ? dist : join(dist, r.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);
  written++;
}

// Regenerate sitemap.xml from the same route list so it can never drift
// from what actually ships.
const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .map((r) => {
    const loc = `${SITE}${r.path}`;
    const priority = r.path === '/' ? '1.0' : r.project ? '0.7' : '0.8';
    return `  <url>\n    <loc>${esc(loc)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);

console.log(`prerendered ${written} routes, sitemap has ${routes.length} urls`);
