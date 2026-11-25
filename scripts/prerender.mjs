import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const SITE_URL = "https://neosparkx.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const LOGO_URL = `${SITE_URL}/logo.png`;

// Load data using file:// URL on Windows
const { projects } = await import(pathToFileURL(path.join(rootDir, "src/data/projects.ts")).href);
const { storeProducts } = await import(pathToFileURL(path.join(rootDir, "src/data/storeProducts.ts")).href);

const templatePath = path.join(distDir, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html not found! Run 'vite build' first.");
  process.exit(1);
}

const baseTemplate = fs.readFileSync(templatePath, "utf-8");

const escapeHtml = (str) =>
  String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const escapeXml = (str) =>
  String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const toAbsoluteMediaUrl = (p) => {
  if (!p) return DEFAULT_OG_IMAGE;
  if (p.startsWith("http://") || p.startsWith("https://")) return encodeURI(p);
  return encodeURI(`${SITE_URL}${p.startsWith("/") ? p : `/${p}`}`);
};

const breadcrumbSchema = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.name,
    item: item.url,
  })),
});

const organizationRef = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "NeoSparkX Technologies",
  alternateName: "NeoSparkX",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
};

// Inject SEO meta tags, JSON-LD, and crawlable semantic HTML shell
function generateHtml(options) {
  const {
    url,
    title,
    description,
    keywords,
    ogImage = DEFAULT_OG_IMAGE,
    ogImageAlt,
    type = "website",
    noIndex = false,
    schema,
    bodyContent,
  } = options;

  const resolvedOgImage = toAbsoluteMediaUrl(ogImage);
  const resolvedOgAlt = ogImageAlt || title;

  let html = baseTemplate;

  // Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  // Meta description
  html = html.replace(
    /<meta\s+name=["']description["'][\s\S]*?>/i,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );

  // Robots
  const robotsContent = noIndex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  html = html.replace(
    /<meta\s+name=["']robots["'][\s\S]*?>/i,
    `<meta name="robots" content="${robotsContent}" />`
  );

  // Keywords (optional)
  if (keywords) {
    const kwTag = `<meta name="keywords" content="${escapeHtml(keywords)}" />`;
    if (/<meta\s+name=["']keywords["']/i.test(html)) {
      html = html.replace(/<meta\s+name=["']keywords["'][\s\S]*?>/i, kwTag);
    } else {
      html = html.replace(/<meta\s+name=["']author["'][\s\S]*?>/i, (m) => `${kwTag}\n  ${m}`);
    }
  }

  // Canonical
  const canonicalTag = `<link rel="canonical" href="${url}" />`;
  if (/<link\s+rel=["']canonical["']/i.test(html)) {
    html = html.replace(/<link\s+rel=["']canonical["'][\s\S]*?>/i, canonicalTag);
  } else {
    html = html.replace("</head>", `  ${canonicalTag}\n</head>`);
  }

  // Open Graph
  html = html.replace(/<meta\s+property=["']og:title["'][\s\S]*?>/i, `<meta property="og:title" content="${escapeHtml(title)}" />`);
  html = html.replace(/<meta\s+property=["']og:description["'][\s\S]*?>/i, `<meta property="og:description" content="${escapeHtml(description)}" />`);
  html = html.replace(/<meta\s+property=["']og:url["'][\s\S]*?>/i, `<meta property="og:url" content="${url}" />`);
  html = html.replace(/<meta\s+property=["']og:image["'][\s\S]*?>/i, `<meta property="og:image" content="${resolvedOgImage}" />`);
  html = html.replace(/<meta\s+property=["']og:image:alt["'][\s\S]*?>/i, `<meta property="og:image:alt" content="${escapeHtml(resolvedOgAlt)}" />`);
  html = html.replace(/<meta\s+property=["']og:type["'][\s\S]*?>/i, `<meta property="og:type" content="${type}" />`);

  // Strip default og:image:width/height when using custom screenshot images so dimensions aren't mismatched
  if (resolvedOgImage !== DEFAULT_OG_IMAGE) {
    html = html.replace(/\s*<meta\s+property=["']og:image:width["'][\s\S]*?>/i, "");
    html = html.replace(/\s*<meta\s+property=["']og:image:height["'][\s\S]*?>/i, "");
  }

  // Twitter
  html = html.replace(/<meta\s+name=["']twitter:title["'][\s\S]*?>/i, `<meta name="twitter:title" content="${escapeHtml(title)}" />`);
  html = html.replace(/<meta\s+name=["']twitter:description["'][\s\S]*?>/i, `<meta name="twitter:description" content="${escapeHtml(description)}" />`);
  html = html.replace(/<meta\s+name=["']twitter:image["'][\s\S]*?>/i, `<meta name="twitter:image" content="${resolvedOgImage}" />`);
  html = html.replace(/<meta\s+name=["']twitter:image:alt["'][\s\S]*?>/i, `<meta name="twitter:image:alt" content="${escapeHtml(resolvedOgAlt)}" />`);

  // Schema.org JSON-LD
  if (schema) {
    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`;
    html = html.replace(/<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i, schemaScript);
  }

  // Inject crawlable semantic HTML inside <div id="root">...</div>.
  // React 18 createRoot() cleanly replaces #root on mount while giving search engines
  // and AI crawlers complete semantic headings, text, links, and structured content immediately.
  if (bodyContent) {
    const shell = `<div id="root"><div data-seo-shell style="min-height:100vh;background:#07080a;color:#ffffff;font-family:Inter,system-ui,-apple-system,sans-serif;">${bodyContent}</div></div>`;
    html = html.replace(/<div\s+id=["']root["']\s*><\/div>/i, shell);
  }

  return html;
}

function writeRoute(routePath, html) {
  if (routePath === "/" || routePath === "") {
    fs.writeFileSync(path.join(distDir, "index.html"), html, "utf-8");
    return;
  }

  const cleanPath = routePath.replace(/^\//, "").replace(/\/$/, "");
  const targetDir = path.join(distDir, cleanPath);

  // 1. Write dist/route/index.html
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "index.html"), html, "utf-8");

  // 2. Write dist/route.html (for cleanUrls)
  const filePath = path.join(distDir, `${cleanPath}.html`);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, "utf-8");
}

console.log("⚡ Starting NeoSparkX Pre-rendering, Schema, Sitemap & AI Discovery Pipeline...");

let count = 0;

// ── 1. HOME PAGE ─────────────────────────────────────────────────────────────
{
  const foundersList = [
    { name: "Azwad Abrar", role: "CEO, Product Architect & Creative Director", quote: "I design how intelligence feels.", linkedin: "https://www.linkedin.com/in/azwad-abrar/" },
    { name: "Ahmed Mehedi", role: "CMO, Business Analyst & Automation Specialist", quote: "I teach systems to think.", linkedin: "https://www.linkedin.com/in/ahmed-mehedi/" },
    { name: "Rezwan Shajib", role: "CTO, Full-Stack Lead & Technical Strategist", quote: "I turn ideas into living code.", linkedin: "https://www.linkedin.com/in/rezwan-shajib/" },
    { name: "Jamil Jim", role: "COO, AI Engine & Logic Specialist", quote: "I connect everything.", linkedin: "https://www.linkedin.com/in/jamil-jim/" },
  ];

  const servicesList = [
    {
      title: "Web & App Development",
      desc: "Dynamic, scalable, and beautifully crafted digital experiences built to perform and inspire. From native mobile apps to full-scale web platforms, we engineer systems with modern frameworks and design precision.",
      features: ["Custom Web Applications", "Mobile App Development (iOS & Android)", "Backend Systems & API Integration"],
    },
    {
      title: "Product Design",
      desc: "We craft intelligent digital experiences that merge aesthetics with function. From advanced UI/UX and lifelike interactive prototypes to adaptive design systems, every pixel is engineered to captivate and convert.",
      features: ["Next-Gen UX Design", "Design Prototyping", "Visual Identity & UI Systems"],
    },
    {
      title: "Automation Systems & AI",
      desc: "We build intelligent automation systems that eliminate repetitive work and connect your tools so your business runs on autopilot — from AI chatbots and workflow pipelines to Claude context-window tools.",
      features: ["Autonomous Agents & Pipelines", "Claude Context Window Tools", "Automated Content Workflows", "AI Support & Voice Systems"],
    },
  ];

  const homeBody = `
    <header style="padding:1.5rem 2rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
      <a href="/" style="font-size:1.5rem;font-weight:bold;color:#fff;text-decoration:none;">NeoSparkX</a>
      <nav aria-label="Main Navigation">
        <a href="/" style="margin-right:1.5rem;color:#fff;text-decoration:none;">Home</a>
        <a href="/products" style="margin-right:1.5rem;color:#aaa;text-decoration:none;">Products</a>
        <a href="/#services" style="margin-right:1.5rem;color:#aaa;text-decoration:none;">Pillars</a>
        <a href="/works" style="margin-right:1.5rem;color:#aaa;text-decoration:none;">Our Works</a>
        <a href="/#about" style="margin-right:1.5rem;color:#aaa;text-decoration:none;">About</a>
        <a href="/#connect" style="color:#aaa;text-decoration:none;">Contact</a>
      </nav>
    </header>

    <main style="max-width:1200px;margin:0 auto;padding:4rem 1.5rem;">
      <section id="home" style="text-align:center;margin-bottom:6rem;">
        <h1 style="font-size:3.5rem;font-weight:900;line-height:1.1;margin-bottom:1.5rem;">
          Designing the Future of Intelligence.
        </h1>
        <p style="font-size:1.1rem;color:#aaa;max-width:640px;margin:0 auto 2rem;line-height:1.6;">
          Software Architecture • AI Products • Autonomous Systems — Founded in 2023 in Rangpur, Bangladesh.
        </p>

        <div style="display:flex;justify-content:center;gap:2rem;margin:2rem auto;max-width:760px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-radius:1rem;padding:1.25rem;">
          <div><strong style="font-size:1.75rem;color:#fff;">4</strong><br/><small style="color:#aaa;">Founders</small></div>
          <div style="border-left:1px solid rgba(255,255,255,0.1);padding-left:1.5rem;"><strong style="font-size:1.75rem;color:#fff;">2023</strong><br/><small style="color:#aaa;">Founded (Rangpur, BD)</small></div>
          <div style="border-left:1px solid rgba(255,255,255,0.1);padding-left:1.5rem;"><strong style="font-size:1.75rem;color:#fff;">${storeProducts.length}</strong><br/><small style="color:#aaa;">Shipped Products</small></div>
          <div style="border-left:1px solid rgba(255,255,255,0.1);padding-left:1.5rem;"><strong style="font-size:1.75rem;color:#fff;">${projects.length}+</strong><br/><small style="color:#aaa;">Engineered Works</small></div>
        </div>

        <div>
          <a href="/products" style="display:inline-block;padding:0.85rem 2rem;background:#fff;color:#000;border-radius:0.75rem;font-weight:bold;text-decoration:none;margin-right:1rem;">
            Explore Our Products &rarr;
          </a>
          <a href="/works" style="display:inline-block;padding:0.85rem 2rem;border:1px solid rgba(255,255,255,0.2);color:#fff;border-radius:0.75rem;font-weight:bold;text-decoration:none;">
            Explore Case Studies
          </a>
        </div>
      </section>

      <section id="products-showcase" style="margin-bottom:6rem;">
        <h2 style="font-size:2.5rem;text-align:center;margin-bottom:1rem;">Flagship Products</h2>
        <p style="text-align:center;color:#aaa;margin-bottom:3rem;">
          Engineered for the Claude ecosystem, developer productivity, and desktop workflows. <a href="/products" style="color:#fff;text-decoration:underline;">View all ${storeProducts.length} products &rarr;</a>
        </p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;">
          ${storeProducts
            .filter((p) => p.isFlagship)
            .map(
              (prod) => `
            <article style="border:1px solid rgba(255,255,255,0.12);padding:2rem;border-radius:1rem;background:rgba(255,255,255,0.03);">
              <span style="display:inline-block;padding:0.2rem 0.6rem;border-radius:0.375rem;font-size:0.75rem;font-weight:bold;background:rgba(255,255,255,0.1);color:#fff;margin-bottom:0.75rem;">★ Flagship · ${escapeHtml(prod.platform)}</span>
              <h3 style="font-size:1.4rem;margin:0.5rem 0;"><a href="/products/${prod.id}" style="color:#fff;text-decoration:none;">${escapeHtml(prod.name)}</a></h3>
              <p style="color:#ccc;font-size:0.95rem;line-height:1.5;margin-bottom:1rem;">${escapeHtml(prod.description)}</p>
              ${prod.claudeIntegration ? `<p style="font-size:0.85rem;color:#aaa;margin-bottom:1rem;"><strong style="color:#fff;">Claude Integration:</strong> ${escapeHtml(prod.claudeIntegration)}</p>` : ""}
              <a href="/products/${prod.id}" style="color:#fff;font-size:0.9rem;font-weight:bold;text-decoration:underline;">View ${escapeHtml(prod.name)} Details &rarr;</a>
            </article>`
            )
            .join("")}
        </div>
      </section>

      <section id="services" style="margin-bottom:6rem;">
        <h2 style="font-size:2.5rem;text-align:center;margin-bottom:1rem;">Engineering Pillars</h2>
        <p style="text-align:center;color:#aaa;margin-bottom:3rem;">Architecting modern systems, frontier applications, and consumer products.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;">
          ${servicesList
            .map(
              (s) => `
            <article style="border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.02);padding:2rem;border-radius:1rem;">
              <h3 style="font-size:1.5rem;margin-bottom:1rem;color:#fff;">${escapeHtml(s.title)}</h3>
              <p style="color:#aaa;margin-bottom:1.5rem;line-height:1.6;">${escapeHtml(s.desc)}</p>
              <ul style="color:#ccc;line-height:1.8;padding-left:1.25rem;">
                ${s.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}
              </ul>
            </article>`
            )
            .join("")}
        </div>
      </section>

      <section id="about" style="margin-bottom:6rem;">
        <h2 style="font-size:2.5rem;text-align:center;margin-bottom:0.5rem;">Four Minds. One Vision.</h2>
        <p style="text-align:center;color:#aaa;margin-bottom:3rem;">Founded in 2023 in Rangpur, Bangladesh — The co-founders behind NeoSparkX</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.5rem;">
          ${foundersList
            .map(
              (f) => `
            <article style="border:1px solid rgba(255,255,255,0.08);padding:1.75rem;border-radius:1rem;background:rgba(255,255,255,0.02);text-align:center;">
              <h3 style="font-size:1.3rem;color:#fff;margin-bottom:0.25rem;">${escapeHtml(f.name)}</h3>
              <p style="color:#aaa;font-size:0.9rem;margin-bottom:0.5rem;">${escapeHtml(f.role)}</p>
              <a href="${f.linkedin}" target="_blank" rel="noopener noreferrer" style="display:inline-block;color:#70B5F9;font-size:0.85rem;margin-bottom:1rem;text-decoration:none;">LinkedIn Profile &rarr;</a>
              <blockquote style="color:#ccc;font-style:italic;font-size:0.95rem;margin:0;">"${escapeHtml(f.quote)}"</blockquote>
            </article>`
            )
            .join("")}
        </div>
      </section>

      <section id="connect" style="margin-bottom:4rem;text-align:center;border:1px solid rgba(255,255,255,0.1);padding:3rem 2rem;border-radius:1.5rem;">
        <h2 style="font-size:2.5rem;margin-bottom:1rem;">Let's Build Intelligence Together</h2>
        <p style="color:#aaa;max-width:600px;margin:0 auto 2rem;">Ready to automate a workflow, design an AI product, or collaborate? Connect with the NeoSparkX founders.</p>
        <p style="color:#fff;font-size:1.15rem;margin-bottom:0.5rem;"><strong>Email:</strong> <a href="mailto:hello@neosparkx.com" style="color:#fff;">hello@neosparkx.com</a></p>
        <p style="color:#fff;font-size:1.15rem;"><strong>Phone / WhatsApp:</strong> <a href="tel:+8801788992953" style="color:#fff;">+8801788992953</a></p>
      </section>
    </main>

    <footer style="border-top:1px solid rgba(255,255,255,0.1);padding:3rem 2rem;text-align:center;color:#aaa;font-size:0.9rem;">
      <p style="margin-bottom:0.5rem;"><strong>NeoSparkX Technologies</strong> • Founded 2023, Rangpur, Bangladesh</p>
      <p>&copy; ${new Date().getFullYear()} NeoSparkX Technologies. All rights reserved. | <a href="/privacy" style="color:#fff;">Privacy Policy</a> | <a href="/works" style="color:#fff;">Our Works</a> | <a href="/products" style="color:#fff;">Products</a> | <a href="/llms.txt" style="color:#fff;">llms.txt</a></p>
    </footer>
  `;

  const homeHtml = generateHtml({
    url: `${SITE_URL}/`,
    title: "NeoSparkX | Software & AI Product Studio",
    description:
      "NeoSparkX is an independent software and AI product studio founded in 2023 in Rangpur, Bangladesh. We build context tools for Claude, intelligent software architectures, and privacy-first desktop, web, and Android apps.",
    keywords:
      "NeoSparkX, software studio, AI product startup, Claude context tools, MarkItDown, Marquee, SocialBlock, PeerHire, autonomous systems, software architecture, Rangpur Bangladesh",
    bodyContent: homeBody,
  });

  writeRoute("/", homeHtml);
  count++;
}

// ── 2. WORKS / PORTFOLIO INDEX PAGE ──────────────────────────────────────────
{
  const worksBody = `
    <header style="padding:1.5rem 2rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
      <a href="/" style="font-size:1.5rem;font-weight:bold;color:#fff;text-decoration:none;">NeoSparkX</a>
      <nav aria-label="Main Navigation">
        <a href="/" style="margin-right:1.5rem;color:#aaa;text-decoration:none;">Home</a>
        <a href="/works" style="margin-right:1.5rem;color:#fff;text-decoration:none;font-weight:bold;">Works</a>
        <a href="/products" style="margin-right:1.5rem;color:#aaa;text-decoration:none;">Products</a>
        <a href="/#about" style="color:#aaa;text-decoration:none;">About</a>
      </nav>
    </header>

    <main style="max-width:1300px;margin:0 auto;padding:4rem 1.5rem;">
      <div style="text-align:center;margin-bottom:4rem;">
        <h1 style="font-size:3.5rem;font-weight:900;margin-bottom:1rem;">Selected Engineering Works &amp; Case Studies</h1>
        <p style="font-size:1.2rem;color:#aaa;max-width:720px;margin:0 auto;">
          Explore ${projects.length} production-grade desktop applications, web platforms, mobile apps, and digital experiences engineered by NeoSparkX.
        </p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:2rem;">
        ${projects
          .map(
            (p) => `
          <article style="border:1px solid rgba(255,255,255,0.08);background:#0a0a0a;border-radius:1rem;overflow:hidden;display:flex;flex-direction:column;">
            <div style="padding:1.5rem;flex:1;">
              <span style="display:inline-block;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:#aaa;margin-bottom:0.5rem;">${escapeHtml(p.category)}${p.platform ? ` · ${escapeHtml(p.platform)}` : ""}</span>
              <h2 style="font-size:1.5rem;margin-bottom:0.75rem;"><a href="/works/${p.slug}" style="color:#fff;text-decoration:none;">${escapeHtml(p.title)}</a></h2>
              <p style="color:#bbb;font-size:0.95rem;line-height:1.6;margin-bottom:1.5rem;">${escapeHtml(p.description)}</p>
              ${
                p.techStack
                  ? `<div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;">
                      ${p.techStack.slice(0, 5).map((t) => `<span style="font-size:0.75rem;background:rgba(255,255,255,0.06);padding:0.25rem 0.6rem;border-radius:9999px;color:#ccc;">${escapeHtml(t)}</span>`).join("")}
                    </div>`
                  : ""
              }
            </div>
            <div style="padding:1rem 1.5rem;border-top:1px solid rgba(255,255,255,0.05);">
              <a href="/works/${p.slug}" style="color:#fff;font-weight:bold;text-decoration:none;font-size:0.9rem;">View ${escapeHtml(p.title)} Case Study &rarr;</a>
            </div>
          </article>`
          )
          .join("")}
      </div>
    </main>

    <footer style="border-top:1px solid rgba(255,255,255,0.1);padding:3rem 2rem;text-align:center;color:#aaa;font-size:0.9rem;margin-top:4rem;">
      <p>&copy; ${new Date().getFullYear()} NeoSparkX Technologies. All rights reserved. | <a href="/" style="color:#fff;">Home</a> | <a href="/products" style="color:#fff;">Products</a> | <a href="/privacy" style="color:#fff;">Privacy</a></p>
    </footer>
  `;

  const worksSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "NeoSparkX Works & Case Studies Portfolio",
        description: `Explore ${projects.length} production-grade desktop applications, web platforms, mobile apps, and digital experiences engineered by NeoSparkX.`,
        url: `${SITE_URL}/works`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: projects.length,
          itemListElement: projects.map((p, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            url: `${SITE_URL}/works/${p.slug}`,
            name: p.title,
            description: p.description,
          })),
        },
      },
      breadcrumbSchema([
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Works", url: `${SITE_URL}/works` },
      ]),
    ],
  };

  const worksHtml = generateHtml({
    url: `${SITE_URL}/works`,
    title: "Portfolio & Case Studies | NeoSparkX Engineering Works",
    description: `Explore ${projects.length}+ production-grade software projects, web platforms, desktop utilities, and Android apps engineered by NeoSparkX.`,
    keywords: "NeoSparkX portfolio, case studies, software projects, web applications, Android apps, desktop utilities",
    schema: worksSchema,
    bodyContent: worksBody,
  });

  writeRoute("/works", worksHtml);
  count++;
}

// ── 3. INDIVIDUAL PROJECT CASE STUDY PAGES ───────────────────────────────────
for (const project of projects) {
  const projectUrl = `${SITE_URL}/works/${project.slug}`;
  const ogImg = project.images && project.images.length > 0 ? toAbsoluteMediaUrl(project.images[0]) : DEFAULT_OG_IMAGE;
  const linkedProduct = storeProducts.find((sp) => sp.worksSlug === project.slug);

  const projectBody = `
    <header style="padding:1.5rem 2rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
      <a href="/" style="font-size:1.5rem;font-weight:bold;color:#fff;text-decoration:none;">NeoSparkX</a>
      <nav aria-label="Main Navigation">
        <a href="/works" style="color:#aaa;text-decoration:none;margin-right:1.5rem;">&larr; All Works</a>
        <a href="/products" style="color:#aaa;text-decoration:none;">Products</a>
      </nav>
    </header>

    <main style="max-width:1000px;margin:0 auto;padding:4rem 1.5rem;">
      <nav aria-label="Breadcrumb" style="margin-bottom:1.5rem;font-size:0.9rem;color:#888;">
        <a href="/" style="color:#aaa;text-decoration:none;">Home</a> &rsaquo;
        <a href="/works" style="color:#aaa;text-decoration:none;">Works</a> &rsaquo;
        <span style="color:#fff;">${escapeHtml(project.title)}</span>
      </nav>

      <span style="display:inline-block;font-size:0.85rem;font-weight:bold;text-transform:uppercase;letter-spacing:0.1em;color:#a78bfa;margin-bottom:0.5rem;">
        ${escapeHtml(project.category)}${project.status ? ` · ${escapeHtml(project.status)}` : ""}
      </span>
      <h1 style="font-size:3rem;font-weight:900;line-height:1.15;margin-bottom:1.5rem;color:#fff;">
        ${escapeHtml(project.title)}
      </h1>
      <p style="font-size:1.25rem;color:#ccc;line-height:1.6;margin-bottom:2.5rem;">
        ${escapeHtml(project.description)}
      </p>

      ${
        project.role
          ? `<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:1.25rem;border-radius:0.75rem;margin-bottom:2.5rem;">
              <p style="margin:0;color:#888;font-size:0.85rem;text-transform:uppercase;">Our Role</p>
              <p style="margin:0.25rem 0 0;color:#fff;font-weight:600;">${escapeHtml(project.role)}</p>
            </div>`
          : ""
      }

      ${
        project.techStack && project.techStack.length > 0
          ? `<section style="margin-bottom:2.5rem;">
              <h2 style="font-size:1.5rem;color:#fff;margin-bottom:1rem;">Technologies &amp; Frameworks</h2>
              <p style="color:#ccc;">${project.techStack.map((t) => escapeHtml(t)).join(" · ")}</p>
            </section>`
          : ""
      }

      ${
        project.overview
          ? `<section style="margin-bottom:2.5rem;">
              <h2 style="font-size:1.75rem;color:#fff;margin-bottom:1rem;">Project Overview</h2>
              <p style="color:#ccc;font-size:1.05rem;line-height:1.7;">${escapeHtml(project.overview)}</p>
            </section>`
          : ""
      }

      ${
        project.problem && project.problem.length > 0
          ? `<section style="margin-bottom:2.5rem;">
              <h2 style="font-size:1.75rem;color:#fff;margin-bottom:1rem;">The Problem</h2>
              <ul style="color:#bbb;font-size:1rem;line-height:1.7;padding-left:1.5rem;">
                ${project.problem.map((prob) => `<li style="margin-bottom:0.5rem;">${escapeHtml(prob)}</li>`).join("")}
              </ul>
            </section>`
          : ""
      }

      ${
        project.solution && project.solution.length > 0
          ? `<section style="margin-bottom:2.5rem;">
              <h2 style="font-size:1.75rem;color:#fff;margin-bottom:1rem;">The Engineering Solution</h2>
              <ul style="color:#bbb;font-size:1rem;line-height:1.7;padding-left:1.5rem;">
                ${project.solution.map((sol) => `<li style="margin-bottom:0.5rem;">${escapeHtml(sol)}</li>`).join("")}
              </ul>
            </section>`
          : ""
      }

      ${
        project.keyFeatures && project.keyFeatures.length > 0
          ? `<section style="margin-bottom:2.5rem;">
              <h2 style="font-size:1.75rem;color:#fff;margin-bottom:1.25rem;">Key Architecture &amp; Features</h2>
              ${project.keyFeatures
                .map(
                  (kf) => `
                <div style="border-left:3px solid #a78bfa;padding-left:1.25rem;margin-bottom:1.25rem;">
                  <h3 style="font-size:1.2rem;color:#fff;margin-bottom:0.5rem;">${escapeHtml(kf.title)}</h3>
                  <ul style="color:#bbb;line-height:1.6;margin:0;padding-left:1.25rem;">
                    ${kf.items.map((it) => `<li>${escapeHtml(it)}</li>`).join("")}
                  </ul>
                </div>`
                )
                .join("")}
            </section>`
          : ""
      }

      <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:space-between;">
        <a href="/works" style="color:#fff;font-weight:bold;text-decoration:none;">&larr; View All Projects</a>
        ${linkedProduct ? `<a href="/products/${linkedProduct.id}" style="color:#fff;font-weight:bold;text-decoration:underline;">View ${escapeHtml(linkedProduct.name)} in Product Store &rarr;</a>` : ""}
        <a href="/#connect" style="color:#a78bfa;font-weight:bold;text-decoration:none;">Start a Project Like This &rarr;</a>
      </div>
    </main>
  `;

  const isSoftware = Boolean(project.platform);
  const projectEntity = {
    "@type": isSoftware ? "SoftwareApplication" : "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.description,
    url: projectUrl,
    image: ogImg,
    author: organizationRef,
    publisher: organizationRef,
    ...(isSoftware ? { operatingSystem: project.platform } : {}),
    ...(isSoftware && project.category ? { applicationCategory: project.category } : {}),
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
    keywords: (project.techStack || []).join(", "),
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      projectEntity,
      breadcrumbSchema([
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Works", url: `${SITE_URL}/works` },
        { name: project.title, url: projectUrl },
      ]),
    ],
  };

  const projectHtml = generateHtml({
    url: projectUrl,
    title: `${project.title} — Case Study & Details | NeoSparkX Works`,
    description: project.description,
    keywords: `${project.title}, ${project.category}, case study, NeoSparkX engineering, ${(project.techStack || []).join(", ")}`,
    ogImage: ogImg,
    ogImageAlt: `${project.title} — NeoSparkX Case Study`,
    type: "article",
    schema: projectSchema,
    bodyContent: projectBody,
  });

  writeRoute(`/works/${project.slug}`, projectHtml);
  count++;
}

// ── 4. PRODUCTS INDEX PAGE ───────────────────────────────────────────────────
{
  const productsBody = `
    <header style="padding:1.5rem 2rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
      <a href="/" style="font-size:1.5rem;font-weight:bold;color:#fff;text-decoration:none;">NeoSparkX</a>
      <nav aria-label="Main Navigation">
        <a href="/" style="margin-right:1.5rem;color:#aaa;text-decoration:none;">Home</a>
        <a href="/works" style="margin-right:1.5rem;color:#aaa;text-decoration:none;">Works</a>
        <a href="/products" style="margin-right:1.5rem;color:#fff;text-decoration:none;font-weight:bold;">Products</a>
        <a href="/#about" style="color:#aaa;text-decoration:none;">About</a>
      </nav>
    </header>

    <main style="max-width:1300px;margin:0 auto;padding:4rem 1.5rem;">
      <div style="text-align:center;margin-bottom:4rem;">
        <h1 style="font-size:3.5rem;font-weight:900;margin-bottom:1rem;">Software Products &amp; Digital Tools</h1>
        <p style="font-size:1.2rem;color:#aaa;max-width:720px;margin:0 auto;">
          High-performance desktop applications, web platforms, Android apps, and browser extensions crafted by NeoSparkX.
        </p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:2rem;">
        ${storeProducts
          .map(
            (p) => `
          <article style="border:1px solid rgba(255,255,255,0.08);background:#0a0a0a;border-radius:1rem;overflow:hidden;display:flex;flex-direction:column;">
            <div style="padding:1.5rem;flex:1;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
                <span style="font-size:0.75rem;text-transform:uppercase;color:#aaa;">${escapeHtml(p.platform)}</span>
                <span style="font-size:0.75rem;color:#10b981;font-weight:bold;">${escapeHtml(p.status)}</span>
              </div>
              <h2 style="font-size:1.5rem;margin-bottom:0.5rem;"><a href="/products/${p.id}" style="color:#fff;text-decoration:none;">${escapeHtml(p.name)}</a></h2>
              <p style="color:#888;font-size:0.85rem;margin-bottom:1rem;">by ${escapeHtml(p.publisher)} · v${escapeHtml(p.version)}</p>
              <p style="color:#ccc;font-size:0.95rem;line-height:1.6;margin-bottom:1.5rem;">${escapeHtml(p.tagline)}</p>
            </div>
            <div style="padding:1rem 1.5rem;border-top:1px solid rgba(255,255,255,0.05);display:flex;justify-content:space-between;align-items:center;">
              <a href="/products/${p.id}" style="color:#fff;font-weight:bold;text-decoration:none;font-size:0.9rem;">View ${escapeHtml(p.name)} &rarr;</a>
              ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" style="color:#aaa;font-size:0.85rem;">Open App &nearr;</a>` : ""}
            </div>
          </article>`
          )
          .join("")}
      </div>
    </main>

    <footer style="border-top:1px solid rgba(255,255,255,0.1);padding:3rem 2rem;text-align:center;color:#aaa;font-size:0.9rem;margin-top:4rem;">
      <p>&copy; ${new Date().getFullYear()} NeoSparkX Technologies. All rights reserved. | <a href="/" style="color:#fff;">Home</a> | <a href="/works" style="color:#fff;">Works</a> | <a href="/privacy" style="color:#fff;">Privacy</a></p>
    </footer>
  `;

  const productsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "NeoSparkX Software Products & Digital Tools",
        description: "High-performance desktop applications, web platforms, Android apps, and browser extensions crafted by NeoSparkX.",
        url: `${SITE_URL}/products`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: storeProducts.length,
          itemListElement: storeProducts.map((p, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            url: `${SITE_URL}/products/${p.id}`,
            name: p.name,
            description: p.tagline,
          })),
        },
      },
      breadcrumbSchema([
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Products", url: `${SITE_URL}/products` },
      ]),
    ],
  };

  const productsHtml = generateHtml({
    url: `${SITE_URL}/products`,
    title: "Software Products & Digital Tools | NeoSparkX Store",
    description:
      "Discover desktop utilities, Claude context tools, browser extensions, Android apps, and privacy-first web platforms built by NeoSparkX.",
    keywords: "NeoSparkX products, Marquee, MarkItDown, Quick-Pill, SocialBlock, Expense Tracker, browser extensions, Android apps, desktop tools",
    schema: productsSchema,
    bodyContent: productsBody,
  });

  writeRoute("/products", productsHtml);
  count++;
}

// ── 5. INDIVIDUAL PRODUCT DETAIL PAGES ───────────────────────────────────────
const appCategoryMap = {
  desktop: "DesktopEnhancementApplication",
  web: "WebApplication",
  mobile: "UtilitiesApplication",
  extension: "BrowserApplication",
};

for (const product of storeProducts) {
  const productUrl = `${SITE_URL}/products/${product.id}`;
  const ogImg = product.heroImage ? toAbsoluteMediaUrl(product.heroImage) : DEFAULT_OG_IMAGE;

  const productBody = `
    <header style="padding:1.5rem 2rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
      <a href="/" style="font-size:1.5rem;font-weight:bold;color:#fff;text-decoration:none;">NeoSparkX</a>
      <nav aria-label="Main Navigation">
        <a href="/products" style="color:#aaa;text-decoration:none;margin-right:1.5rem;">&larr; All Products</a>
        <a href="/works" style="color:#aaa;text-decoration:none;">Works</a>
      </nav>
    </header>

    <main style="max-width:1000px;margin:0 auto;padding:4rem 1.5rem;">
      <nav aria-label="Breadcrumb" style="margin-bottom:1.5rem;font-size:0.9rem;color:#888;">
        <a href="/" style="color:#aaa;text-decoration:none;">Home</a> &rsaquo;
        <a href="/products" style="color:#aaa;text-decoration:none;">Products</a> &rsaquo;
        <span style="color:#fff;">${escapeHtml(product.name)}</span>
      </nav>

      <span style="display:inline-block;font-size:0.85rem;font-weight:bold;text-transform:uppercase;color:#10b981;margin-bottom:0.5rem;">
        ${escapeHtml(product.platform)} · ${escapeHtml(product.status)} · v${escapeHtml(product.version || "1.0.0")}
      </span>
      <h1 style="font-size:3rem;font-weight:900;line-height:1.15;margin-bottom:1rem;color:#fff;">
        ${escapeHtml(product.name)}
      </h1>
      <p style="font-size:1.25rem;color:#ccc;line-height:1.6;margin-bottom:2rem;">
        ${escapeHtml(product.tagline)}
      </p>

      <section style="margin-bottom:2.5rem;">
        <h2 style="font-size:1.75rem;color:#fff;margin-bottom:1rem;">About ${escapeHtml(product.name)}</h2>
        <p style="color:#ccc;font-size:1.05rem;line-height:1.7;">${escapeHtml(product.description)}</p>
      </section>

      ${
        product.highlights && product.highlights.length > 0
          ? `<section style="margin-bottom:2.5rem;">
              <h2 style="font-size:1.5rem;color:#fff;margin-bottom:1rem;">Highlights</h2>
              <ul style="color:#ccc;line-height:1.8;padding-left:1.5rem;">
                ${product.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
              </ul>
            </section>`
          : ""
      }

      ${
        product.features && product.features.length > 0
          ? `<section style="margin-bottom:2.5rem;">
              <h2 style="font-size:1.75rem;color:#fff;margin-bottom:1.25rem;">Features &amp; Capabilities</h2>
              <div style="display:grid;gap:1rem;">
                ${product.features
                  .map(
                    (f) => `
                  <div style="border:1px solid rgba(255,255,255,0.08);padding:1.25rem;border-radius:0.75rem;background:rgba(255,255,255,0.02);">
                    <h3 style="font-size:1.15rem;color:#fff;margin-bottom:0.35rem;">${escapeHtml(f.title)}</h3>
                    <p style="color:#bbb;margin:0;line-height:1.5;">${escapeHtml(f.desc)}</p>
                  </div>`
                  )
                  .join("")}
              </div>
            </section>`
          : ""
      }

      ${
        product.techStack && product.techStack.length > 0
          ? `<section style="margin-bottom:2.5rem;">
              <h2 style="font-size:1.5rem;color:#fff;margin-bottom:0.75rem;">Technology Stack</h2>
              <p style="color:#bbb;">${product.techStack.map((t) => escapeHtml(t)).join(" · ")}</p>
            </section>`
          : ""
      }

      <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:space-between;">
        <a href="/products" style="color:#fff;font-weight:bold;text-decoration:none;">&larr; View All Products</a>
        ${product.privacyPolicyUrl ? `<a href="${product.privacyPolicyUrl}" style="color:#ccc;text-decoration:underline;">Privacy Policy</a>` : ""}
        ${product.worksSlug ? `<a href="/works/${product.worksSlug}" style="color:#a78bfa;font-weight:bold;text-decoration:none;">Read Engineering Case Study &rarr;</a>` : ""}
      </div>
    </main>
  `;

  const installUrl = product.microsoftStoreUrl || product.downloadUrl || product.playStoreUrl || product.chromeStoreUrl || product.liveUrl;
  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: product.name,
        description: product.description,
        url: productUrl,
        image: ogImg,
        screenshot: (product.screenshots || []).map(toAbsoluteMediaUrl),
        applicationCategory: appCategoryMap[product.type] || "SoftwareApplication",
        operatingSystem: product.platform,
        softwareVersion: product.version || "1.0.0",
        ...(product.size ? { fileSize: product.size } : {}),
        ...(product.downloadUrl ? { downloadUrl: product.downloadUrl } : {}),
        ...(installUrl ? { installUrl } : {}),
        ...(product.microsoftStoreUrl ? { sameAs: product.microsoftStoreUrl } : {}),
        featureList: (product.features || []).map((f) => f.title),
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        author: organizationRef,
        publisher: organizationRef,
      },
      breadcrumbSchema([
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Products", url: `${SITE_URL}/products` },
        { name: product.name, url: productUrl },
      ]),
    ],
  };

  const productHtml = generateHtml({
    url: productUrl,
    title: `${product.name} — ${product.tagline} | NeoSparkX Products`,
    description: product.description,
    keywords: `${product.name}, ${product.platform}, ${product.type}, ${product.publisher}, ${(product.tags || []).join(", ")}, NeoSparkX`,
    ogImage: ogImg,
    ogImageAlt: `${product.name} — ${product.tagline}`,
    type: "product",
    schema: productSchema,
    bodyContent: productBody,
  });

  writeRoute(`/products/${product.id}`, productHtml);
  count++;
}

// ── 6. PRIVACY POLICIES ──────────────────────────────────────────────────────
const privacyPages = [
  {
    path: "/privacy",
    title: "Privacy Policy & Terms of Service | NeoSparkX",
    desc: "Read the privacy policy, data practices, and terms of service guidelines for NeoSparkX clients and digital product users.",
  },
  {
    path: "/products/expense-tracker/privacy-policy",
    title: "Expense Tracker Privacy Policy | NeoSparkX",
    desc: "Privacy Policy for NeoSparkX Expense Tracker. Completely offline, zero telemetry, on-device encrypted SQLite data storage.",
  },
  {
    path: "/products/lamppost/privacy-policy",
    title: "Lamppost Document Reader Privacy Policy | NeoSparkX",
    desc: "Privacy Policy for Lamppost, NeoSparkX's local-first Android document reader for PDF, Markdown, and Word files.",
  },
  {
    path: "/products/ron-bot/privacy-policy",
    title: "Ron Bot Mobile Privacy Policy | NeoSparkX",
    desc: "Privacy Policy and Google Play Families Policy compliance disclosures for the Ron Bot Mobile companion application.",
  },
  {
    path: "/products/prevention/privacy-policy",
    title: "Prevention Privacy Policy | NeoSparkX",
    desc: "Privacy Policy for Prevention: on-device WireGuard DNS VPN filtering, encrypted local journaling, and zero telemetry.",
  },
  {
    path: "/products/mudilagbe/privacy-policy",
    title: "Mudi Lagbe Privacy Policy | NeoSparkX",
    desc: "Privacy Policy for the Mudi Lagbe customer mobile application (com.mudilagbe.customer).",
  },
  {
    path: "/products/socialblock/privacy-policy",
    title: "SocialBlock Privacy Policy | NeoSparkX",
    desc: "Privacy Policy for SocialBlock (com.neosparkx.socialblock): 100% on-device Android focus shield, AccessibilityService disclosure, and local DNS VPN with zero telemetry.",
  },
];

for (const p of privacyPages) {
  const pageUrl = `${SITE_URL}${p.path}`;
  const isRootPrivacy = p.path === "/privacy";
  const crumbs = isRootPrivacy
    ? [
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Privacy Policy", url: pageUrl },
      ]
    : [
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Privacy Policy", url: `${SITE_URL}/privacy` },
        { name: p.title.replace(/\s*\|\s*NeoSparkX$/, ""), url: pageUrl },
      ];

  const body = `
    <header style="padding:1.5rem 2rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
      <a href="/" style="font-size:1.5rem;font-weight:bold;color:#fff;text-decoration:none;">NeoSparkX</a>
      <nav aria-label="Main Navigation">
        <a href="/" style="color:#aaa;text-decoration:none;margin-right:1.5rem;">Home</a>
        <a href="/privacy" style="color:#aaa;text-decoration:none;">All Privacy Policies</a>
      </nav>
    </header>
    <main style="max-width:800px;margin:0 auto;padding:4rem 1.5rem;">
      <h1 style="font-size:2.5rem;font-weight:800;margin-bottom:1.5rem;">${escapeHtml(p.title.replace(/\s*\|\s*NeoSparkX$/, ""))}</h1>
      <p style="color:#ccc;line-height:1.7;margin-bottom:2rem;">${escapeHtml(p.desc)}</p>
      <div style="color:#bbb;line-height:1.8;">
        <p>At NeoSparkX, privacy is a core engineering priority. Our applications and utilities are designed with local-first principles, minimal data collection, and transparent user control.</p>
        <p>For privacy inquiries, contact <a href="mailto:privacy@neosparkx.com" style="color:#fff;">privacy@neosparkx.com</a> or <a href="mailto:hello@neosparkx.com" style="color:#fff;">hello@neosparkx.com</a>.</p>
      </div>
    </main>
  `;

  const privacySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: p.title,
        description: p.desc,
        url: pageUrl,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: organizationRef,
      },
      breadcrumbSchema(crumbs),
    ],
  };

  const html = generateHtml({
    url: pageUrl,
    title: p.title,
    description: p.desc,
    schema: privacySchema,
    bodyContent: body,
  });

  writeRoute(p.path, html);
  count++;
}

// ── 7. STATIC 404 PAGE (noindex) ─────────────────────────────────────────────
{
  const notFoundHtml = generateHtml({
    url: `${SITE_URL}/404`,
    title: "404 Page Not Found | NeoSparkX",
    description: "The requested page could not be found on NeoSparkX.",
    noIndex: true,
    bodyContent: `
      <main style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem;">
        <h1 style="font-size:5rem;font-weight:900;margin:0 0 1rem;">404</h1>
        <p style="color:#aaa;margin-bottom:2rem;">The page you requested could not be found.</p>
        <nav><a href="/" style="color:#fff;margin-right:1.5rem;">Home</a><a href="/products" style="color:#fff;margin-right:1.5rem;">Products</a><a href="/works" style="color:#fff;">Works</a></nav>
      </main>
    `,
  });
  fs.writeFileSync(path.join(distDir, "404.html"), notFoundHtml, "utf-8");
  count++;
}

console.log(`✅ Pre-rendered ${count} static HTML routes (including 404.html) into dist/ successfully!`);

// ── 8. SITEMAP.XML WITH IMAGE SITEMAP EXTENSION ──────────────────────────────
const today = new Date().toISOString().split("T")[0];

const sitemapUrls = [
  {
    loc: `${SITE_URL}/`,
    priority: "1.0",
    changefreq: "weekly",
    images: [{ loc: DEFAULT_OG_IMAGE, title: "NeoSparkX — Designing the Future of Intelligence" }],
  },
  { loc: `${SITE_URL}/works`, priority: "0.9", changefreq: "weekly", images: [] },
  { loc: `${SITE_URL}/products`, priority: "0.9", changefreq: "weekly", images: [] },
  { loc: `${SITE_URL}/privacy`, priority: "0.4", changefreq: "monthly", images: [] },
  ...projects.map((p) => ({
    loc: `${SITE_URL}/works/${p.slug}`,
    priority: "0.8",
    changefreq: "monthly",
    images: (p.images || []).slice(0, 5).map((img, i) => ({
      loc: toAbsoluteMediaUrl(img),
      title: `${p.title} — Screenshot ${i + 1}`,
    })),
  })),
  ...storeProducts.map((p) => ({
    loc: `${SITE_URL}/products/${p.id}`,
    priority: "0.85",
    changefreq: "monthly",
    images: [p.heroImage, ...(p.screenshots || []).slice(0, 4)]
      .filter(Boolean)
      .filter((v, idx, arr) => arr.indexOf(v) === idx)
      .map((img, i) => ({
        loc: toAbsoluteMediaUrl(img),
        title: `${p.name} — Preview ${i + 1}`,
      })),
  })),
  ...privacyPages
    .filter((p) => p.path !== "/privacy")
    .map((p) => ({
      loc: `${SITE_URL}${p.path}`,
      priority: "0.3",
      changefreq: "yearly",
      images: [],
    })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapUrls
  .map((u) => {
    const imgXml = (u.images || [])
      .map(
        (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
    </image:image>`
      )
      .join("\n");
    return `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${imgXml ? `\n${imgXml}` : ""}
  </url>`;
  })
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf-8");
fs.writeFileSync(path.join(rootDir, "public/sitemap.xml"), sitemapXml, "utf-8");
console.log(`🗺️ Generated sitemap.xml with ${sitemapUrls.length} URLs and Image Sitemap entries!`);

// ── 9. LLMS.TXT & LLMS-FULL.TXT (AI Search & GEO Discovery) ─────────────────
const llmsTxt = `# NeoSparkX

> NeoSparkX (NeoSparkX Technologies) is an independent software and AI product studio founded in 2023 in Rangpur, Bangladesh. We engineer Claude context-window tools, privacy-first desktop and Android applications, full-stack web platforms, and autonomous AI workflows.

- Website: ${SITE_URL}/
- Contact: hello@neosparkx.com | +8801788992953
- LinkedIn: https://www.linkedin.com/company/neosparkx/
- Behance: https://www.behance.net/neosparkx
- Full Knowledge Base: ${SITE_URL}/llms-full.txt
- Markdown Endpoint: ${SITE_URL}/api/md

## Core Pages

- [Home](${SITE_URL}/): Company overview, flagship products, engineering pillars, founding team, and contact.
- [Products Store](${SITE_URL}/products): Showcase of all ${storeProducts.length} shipped desktop, web, mobile, and browser extension products.
- [Engineering Works & Case Studies](${SITE_URL}/works): Deep-dive engineering case studies across ${projects.length} projects.
- [Privacy Policy & Terms](${SITE_URL}/privacy): Legal hub and app-specific privacy policies.

## Shipped Products (${storeProducts.length})

${storeProducts
  .map((p) => `- [${p.name}](${SITE_URL}/products/${p.id}) (${p.platform}, v${p.version}, ${p.status}): ${p.tagline}`)
  .join("\n")}

## Engineering Case Studies (${projects.length})

${projects
  .map((p) => `- [${p.title}](${SITE_URL}/works/${p.slug}) (${p.category}): ${p.description}`)
  .join("\n")}

## Product Privacy Policies

${privacyPages
  .filter((p) => p.path !== "/privacy")
  .map((p) => `- [${p.title.replace(/\s*\|\s*NeoSparkX$/, "")}](${SITE_URL}${p.path}): ${p.desc}`)
  .join("\n")}
`;

const llmsFullTxt = `# NeoSparkX Technologies — Complete Knowledge Base

> Designing the Future of Intelligence. Independent Software & AI Product Studio founded in 2023 in Rangpur, Bangladesh.
> Canonical URL: ${SITE_URL}/
> Contact: hello@neosparkx.com | +8801788992953

## Founding Team

- **Azwad Abrar** — CEO, Product Architect & Creative Director (https://www.linkedin.com/in/azwad-abrar/)
- **Ahmed Mehedi** — CMO, Business Analyst & Automation Specialist (https://www.linkedin.com/in/ahmed-mehedi/)
- **Rezwan Shajib** — CTO, Full-Stack Lead & Technical Strategist (https://www.linkedin.com/in/rezwan-shajib/)
- **Jamil Jim** — COO, AI Engine & Logic Specialist (https://www.linkedin.com/in/jamil-jim/)

## Services & Engineering Pillars

1. **Web & App Development**: Custom full-stack web platforms, native Android apps (Kotlin/Jetpack Compose), Windows desktop software (.NET 10/WPF, Electron), and backend API architecture.
2. **Product Design & Design Systems**: High-craft UI/UX design, interactive motion prototypes, Liquid Glass and dark glassmorphism systems.
3. **Automation Systems & AI Workflows**: Claude context-window tooling, autonomous agents, RAG pipelines, AI customer support, and business process automation.

---

## Products Catalog (${storeProducts.length} Shipped Applications)

${storeProducts
  .map(
    (p) => `### ${p.name}
- **URL**: ${SITE_URL}/products/${p.id}
- **Platform**: ${p.platform} (${p.type}) | **Version**: ${p.version} | **Status**: ${p.status}
- **Tagline**: ${p.tagline}
- **Description**: ${p.description}
- **Tech Stack**: ${(p.techStack || []).join(", ")}
${p.claudeIntegration ? `- **AI / Claude Integration**: ${p.claudeIntegration}` : ""}
${p.liveUrl ? `- **Live URL**: ${p.liveUrl}` : ""}
${p.microsoftStoreUrl ? `- **Microsoft Store**: ${p.microsoftStoreUrl}` : ""}
${p.downloadUrl ? `- **Download**: ${p.downloadUrl}` : ""}
${p.playStoreUrl ? `- **Google Play**: ${p.playStoreUrl}` : ""}
${p.chromeStoreUrl ? `- **Chrome Web Store**: ${p.chromeStoreUrl}` : ""}
- **Key Features**:
${(p.features || []).map((f) => `  - **${f.title}**: ${f.desc}`).join("\n")}
`
  )
  .join("\n")}

---

## Engineering Works & Case Studies (${projects.length} Projects)

${projects
  .map(
    (p) => `### ${p.title}
- **URL**: ${SITE_URL}/works/${p.slug}
- **Category**: ${p.category}${p.platform ? ` | **Platform**: ${p.platform}` : ""}${p.role ? ` | **Role**: ${p.role}` : ""}
- **Summary**: ${p.description}
${p.overview ? `- **Overview**: ${p.overview}` : ""}
${p.techStack ? `- **Tech Stack**: ${p.techStack.join(", ")}` : ""}
`
  )
  .join("\n")}
`;

fs.writeFileSync(path.join(distDir, "llms.txt"), llmsTxt, "utf-8");
fs.writeFileSync(path.join(rootDir, "public/llms.txt"), llmsTxt, "utf-8");
fs.writeFileSync(path.join(distDir, "llms-full.txt"), llmsFullTxt, "utf-8");
fs.writeFileSync(path.join(rootDir, "public/llms-full.txt"), llmsFullTxt, "utf-8");
console.log("🤖 Generated llms.txt and llms-full.txt in public/ and dist/!");
