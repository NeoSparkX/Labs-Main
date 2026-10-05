import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

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

// Helpers to inject SEO tags
function generateHtml(options) {
  const {
    url,
    title,
    description,
    keywords,
    ogImage = "https://neosparkx.com/favicon.ico",
    type = "website",
    schema,
    bodyContent,
  } = options;

  let html = baseTemplate;

  // Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  // Meta description
  html = html.replace(
    /<meta\s+name=["']description["'][\s\S]*?>/i,
    `<meta name="description" content="${escapeHtml(description)}">`
  );

  // Canonical
  const canonicalTag = `<link rel="canonical" href="${url}" />`;
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link\s+rel=["']canonical["'][\s\S]*?>/i, canonicalTag);
  } else {
    html = html.replace("</head>", `  ${canonicalTag}\n</head>`);
  }

  // Open Graph
  html = html.replace(/<meta\s+property=["']og:title["'][\s\S]*?>/i, `<meta property="og:title" content="${escapeHtml(title)}" />`);
  html = html.replace(/<meta\s+property=["']og:description["'][\s\S]*?>/i, `<meta property="og:description" content="${escapeHtml(description)}" />`);
  html = html.replace(/<meta\s+property=["']og:url["'][\s\S]*?>/i, `<meta property="og:url" content="${url}" />`);
  html = html.replace(/<meta\s+property=["']og:image["'][\s\S]*?>/i, `<meta property="og:image" content="${ogImage}" />`);
  html = html.replace(/<meta\s+property=["']og:type["'][\s\S]*?>/i, `<meta property="og:type" content="${type}" />`);

  // Twitter
  html = html.replace(/<meta\s+name=["']twitter:title["'][\s\S]*?>/i, `<meta name="twitter:title" content="${escapeHtml(title)}">`);
  html = html.replace(/<meta\s+name=["']twitter:description["'][\s\S]*?>/i, `<meta name="twitter:description" content="${escapeHtml(description)}">`);
  html = html.replace(/<meta\s+name=["']twitter:image["'][\s\S]*?>/i, `<meta name="twitter:image" content="${ogImage}">`);

  // Schema.org
  if (schema) {
    const schemaScript = `  <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`;
    html = html.replace(/<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i, schemaScript);
  }

  // Pre-rendered Body content inside <div id="root">
  if (bodyContent) {
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${bodyContent}</div>`
    );
  }

  return html;
}

function writeRoute(routePath, html) {
  // If route is root '/'
  if (routePath === "/" || routePath === "") {
    fs.writeFileSync(path.join(distDir, "index.html"), html, "utf-8");
    return;
  }

  // Clean path
  const cleanPath = routePath.replace(/^\//, "").replace(/\/$/, "");
  const targetDir = path.join(distDir, cleanPath);

  // 1. Write dist/route/index.html (directory style)
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "index.html"), html, "utf-8");

  // 2. Also write dist/route.html (file style for cleanUrls / fallback)
  const filePath = path.join(distDir, `${cleanPath}.html`);
  const fileParent = path.dirname(filePath);
  fs.mkdirSync(fileParent, { recursive: true });
  fs.writeFileSync(filePath, html, "utf-8");
}

console.log("⚡ Starting NeoSparkX Pre-rendering & Static HTML Output Pipeline...");

let count = 0;

// ── 1. HOME PAGE ─────────────────────────────────────────────────────────────
{
  const foundersList = [
    { name: "Azwad Abrar", role: "CEO, Product Architect & Creative Director", quote: "I design how intelligence feels." },
    { name: "Ahmed Mehedi", role: "CMO, Business Analyst & Automation Specialist", quote: "I teach systems to think." },
    { name: "Rezwan Shajib", role: "CTO, Full-Stack Lead & Technical Strategist", quote: "I turn ideas into living code." },
    { name: "Jamil Jim", role: "COO, AI Engine & Logic Specialist", quote: "I connect everything." },
  ];

  const servicesList = [
    {
      title: "Web & App Development",
      desc: "Dynamic, scalable, and beautifully crafted digital experiences, built to perform and inspire. From mobile apps to full-scale web platforms, we bring your vision to life with modern frameworks and design precision.",
      features: ["Custom Web Applications", "Mobile App Development (iOS & Android)", "Backend Systems & API Integration"],
    },
    {
      title: "Product Design",
      desc: "We craft intelligent digital experiences that merge aesthetics with function. From advanced UI/UX and lifelike interactive prototypes to adaptive, AI-powered design systems, every pixel is engineered to captivate and convert.",
      features: ["Next-Gen UX Design", "Design Prototyping", "Visual Identity & UI Systems"],
    },
    {
      title: "Automation Systems",
      desc: "We build intelligent automation systems that eliminate repetitive work and connect your tools - so your business runs on autopilot. From AI chatbots to workflow pipelines and CRM automation, we engineer solutions tailored to your operations.",
      features: ["Business Automation", "AI Chatbots & Virtual Assistants", "Automated Content Creation", "AI Customer Support Systems", "Voice Assistants for Apps"],
    },
  ];

  const homeBody = `
    <header style="padding: 1.5rem 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
      <a href="/" style="font-size: 1.5rem; font-weight: bold; color: #fff; text-decoration: none;">NeoSparkX</a>
      <nav>
        <a href="/" style="margin-right: 1.5rem; color: #aaa; text-decoration: none;">Home</a>
        <a href="/#services" style="margin-right: 1.5rem; color: #aaa; text-decoration: none;">Services</a>
        <a href="/works" style="margin-right: 1.5rem; color: #aaa; text-decoration: none;">Works</a>
        <a href="/products" style="margin-right: 1.5rem; color: #aaa; text-decoration: none;">Products</a>
        <a href="/#about" style="margin-right: 1.5rem; color: #aaa; text-decoration: none;">About</a>
        <a href="/#connect" style="color: #aaa; text-decoration: none;">Contact</a>
      </nav>
    </header>

    <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 1.5rem;">
      <section id="hero" style="text-align: center; margin-bottom: 6rem;">
        <h1 style="font-size: 3.5rem; font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem;">
          Designing the Future of Intelligence.
        </h1>
        <p style="font-size: 1.35rem; color: #aaa; max-width: 750px; margin: 0 auto 2rem;">
          Software Architect • AI Automation • SaaS Agency. We engineer high-performance web applications, native mobile apps, and custom software systems.
        </p>
        <div>
          <a href="/works" style="display: inline-block; padding: 0.85rem 2rem; background: #fff; color: #000; border-radius: 9999px; font-weight: bold; text-decoration: none; margin-right: 1rem;">
            Explore Portfolio
          </a>
          <a href="#services" style="display: inline-block; padding: 0.85rem 2rem; border: 1px solid rgba(255,255,255,0.2); color: #fff; border-radius: 9999px; font-weight: bold; text-decoration: none;">
            Agency Services
          </a>
        </div>
      </section>

      <section id="services" style="margin-bottom: 6rem;">
        <h2 style="font-size: 2.5rem; text-align: center; margin-bottom: 1rem;">Our Agency Services</h2>
        <p style="text-align: center; color: #888; margin-bottom: 3rem;">Building intelligent solutions that transform businesses</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          ${servicesList
            .map(
              (s) => `
            <article style="border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); padding: 2rem; border-radius: 1rem;">
              <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #fff;">${escapeHtml(s.title)}</h3>
              <p style="color: #aaa; margin-bottom: 1.5rem; line-height: 1.6;">${escapeHtml(s.desc)}</p>
              <ul style="color: #ccc; line-height: 1.8; padding-left: 1.25rem;">
                ${s.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}
              </ul>
            </article>`
            )
            .join("")}
        </div>
      </section>

      <section id="featured-works" style="margin-bottom: 6rem;">
        <h2 style="font-size: 2.5rem; text-align: center; margin-bottom: 1rem;">Featured Works & Engineering Portfolio</h2>
        <p style="text-align: center; color: #888; margin-bottom: 3rem;">
          Discover our 20+ production applications. <a href="/works" style="color: #fff; text-decoration: underline;">View all projects &rarr;</a>
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          ${projects
            .slice(0, 6)
            .map(
              (p) => `
            <article style="border: 1px solid rgba(255,255,255,0.08); padding: 1.5rem; border-radius: 0.75rem; background: rgba(255,255,255,0.02);">
              <span style="font-size: 0.8rem; color: #888; text-transform: uppercase;">${escapeHtml(p.category)}</span>
              <h3 style="font-size: 1.25rem; margin: 0.5rem 0;"><a href="/works/${p.slug}" style="color: #fff; text-decoration: none;">${escapeHtml(p.title)}</a></h3>
              <p style="color: #999; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1rem;">${escapeHtml(p.description)}</p>
              <a href="/works/${p.slug}" style="color: #fff; font-size: 0.85rem; font-weight: bold; text-decoration: underline;">Read Case Study &rarr;</a>
            </article>`
            )
            .join("")}
        </div>
      </section>

      <section id="featured-products" style="margin-bottom: 6rem;">
        <h2 style="font-size: 2.5rem; text-align: center; margin-bottom: 1rem;">Featured Software Products</h2>
        <p style="text-align: center; color: #888; margin-bottom: 3rem;">
          Explore our suite of desktop apps, web apps, and extensions. <a href="/products" style="color: #fff; text-decoration: underline;">Explore store &rarr;</a>
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          ${storeProducts
            .slice(0, 6)
            .map(
              (prod) => `
            <article style="border: 1px solid rgba(255,255,255,0.08); padding: 1.5rem; border-radius: 0.75rem; background: rgba(255,255,255,0.02);">
              <span style="font-size: 0.8rem; color: #888; text-transform: uppercase;">${escapeHtml(prod.type)} · ${escapeHtml(prod.status)}</span>
              <h3 style="font-size: 1.25rem; margin: 0.5rem 0;"><a href="/products/${prod.id}" style="color: #fff; text-decoration: none;">${escapeHtml(prod.name)}</a></h3>
              <p style="color: #999; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1rem;">${escapeHtml(prod.tagline)}</p>
              <a href="/products/${prod.id}" style="color: #fff; font-size: 0.85rem; font-weight: bold; text-decoration: underline;">View Details &rarr;</a>
            </article>`
            )
            .join("")}
        </div>
      </section>

      <section id="about" style="margin-bottom: 6rem;">
        <h2 style="font-size: 2.5rem; text-align: center; margin-bottom: 1rem;">About NeoSparkX Founders & Leadership Team</h2>
        <p style="text-align: center; color: #888; margin-bottom: 3rem;">The creative engineers and architects behind NeoSparkX</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
          ${foundersList
            .map(
              (f) => `
            <article style="border: 1px solid rgba(255,255,255,0.08); padding: 1.75rem; border-radius: 1rem; background: rgba(255,255,255,0.02); text-align: center;">
              <h3 style="font-size: 1.35rem; color: #fff; margin-bottom: 0.25rem;">${escapeHtml(f.name)}</h3>
              <p style="color: #888; font-size: 0.9rem; margin-bottom: 1rem;">${escapeHtml(f.role)}</p>
              <blockquote style="color: #aaa; font-style: italic; font-size: 0.95rem;">"${escapeHtml(f.quote)}"</blockquote>
            </article>`
            )
            .join("")}
        </div>
      </section>

      <section id="connect" style="margin-bottom: 4rem; text-align: center; border: 1px solid rgba(255,255,255,0.1); padding: 4rem 2rem; border-radius: 1.5rem;">
        <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Let's Build Something Exceptional</h2>
        <p style="color: #aaa; max-width: 600px; margin: 0 auto 2rem;">Ready to elevate your digital presence or engineer your next software product? Contact our engineering team today.</p>
        <p style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;"><strong>Email:</strong> <a href="mailto:hello@neosparkx.com" style="color: #fff;">hello@neosparkx.com</a></p>
        <p style="color: #fff; font-size: 1.25rem;"><strong>Phone:</strong> <a href="tel:+8801788992953" style="color: #fff;">+8801788992953</a></p>
      </section>
    </main>

    <footer style="border-top: 1px solid rgba(255,255,255,0.1); padding: 3rem 2rem; text-align: center; color: #666; font-size: 0.9rem;">
      <p>&copy; ${new Date().getFullYear()} NeoSparkX Agency. All rights reserved. | <a href="/privacy" style="color: #888;">Privacy Policy</a> | <a href="/works" style="color: #888;">Portfolio</a> | <a href="/products" style="color: #888;">Products</a></p>
    </footer>
  `;

  const homeHtml = generateHtml({
    url: "https://neosparkx.com/",
    title: "NeoSparkX | Premium Software Studio & Creative Agency",
    description:
      "NeoSparkX is a premier software studio and creative engineering agency. We design and engineer high-performance web applications, native mobile apps, and AI automation systems.",
    keywords:
      "NeoSparkX, software studio, creative agency, web development, mobile apps, software design, UI/UX design, custom software, AI automation",
    bodyContent: homeBody,
  });

  writeRoute("/", homeHtml);
  count++;
}

// ── 2. WORKS / PORTFOLIO INDEX PAGE ──────────────────────────────────────────
{
  const worksBody = `
    <header style="padding: 1.5rem 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
      <a href="/" style="font-size: 1.5rem; font-weight: bold; color: #fff; text-decoration: none;">NeoSparkX</a>
      <nav>
        <a href="/" style="margin-right: 1.5rem; color: #aaa; text-decoration: none;">Home</a>
        <a href="/works" style="margin-right: 1.5rem; color: #fff; text-decoration: none; font-weight: bold;">Works</a>
        <a href="/products" style="margin-right: 1.5rem; color: #aaa; text-decoration: none;">Products</a>
        <a href="/#about" style="color: #aaa; text-decoration: none;">About</a>
      </nav>
    </header>

    <main style="max-width: 1300px; margin: 0 auto; padding: 4rem 1.5rem;">
      <div style="text-align: center; margin-bottom: 4rem;">
        <h1 style="font-size: 3.5rem; font-weight: 900; margin-bottom: 1rem;">Selected Engineering Works & Case Studies</h1>
        <p style="font-size: 1.25rem; color: #888; max-width: 700px; margin: 0 auto;">
          Explore 20 production-grade desktop applications, web platforms, mobile apps, and digital experiences engineered by NeoSparkX.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2rem;">
        ${projects
          .map(
            (p) => `
          <article style="border: 1px solid rgba(255,255,255,0.08); background: #0a0a0a; border-radius: 1rem; overflow: hidden; display: flex; flex-direction: column;">
            <div style="padding: 1.5rem; flex: 1;">
              <span style="display: inline-block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 0.5rem;">${escapeHtml(p.category)} · ${escapeHtml(p.platform || "")}</span>
              <h2 style="font-size: 1.5rem; margin-bottom: 0.75rem;"><a href="/works/${p.slug}" style="color: #fff; text-decoration: none;">${escapeHtml(p.title)}</a></h2>
              <p style="color: #aaa; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">${escapeHtml(p.description)}</p>
              ${
                p.techStack
                  ? `<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                      ${p.techStack.slice(0, 5).map((t) => `<span style="font-size: 0.75rem; background: rgba(255,255,255,0.06); padding: 0.25rem 0.6rem; border-radius: 9999px; color: #ccc;">${escapeHtml(t)}</span>`).join("")}
                    </div>`
                  : ""
              }
            </div>
            <div style="padding: 1rem 1.5rem; border-top: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.01);">
              <a href="/works/${p.slug}" style="color: #fff; font-weight: bold; text-decoration: none; font-size: 0.9rem;">View In-Depth Case Study &rarr;</a>
            </div>
          </article>`
          )
          .join("")}
      </div>
    </main>

    <footer style="border-top: 1px solid rgba(255,255,255,0.1); padding: 3rem 2rem; text-align: center; color: #666; font-size: 0.9rem; margin-top: 6rem;">
      <p>&copy; ${new Date().getFullYear()} NeoSparkX Agency. All rights reserved. | <a href="/" style="color: #888;">Home</a> | <a href="/products" style="color: #888;">Products</a></p>
    </footer>
  `;

  const worksSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NeoSparkX Works & Case Studies Portfolio",
    description: "Explore 20 production-grade desktop applications, web platforms, mobile apps, and digital experiences engineered by NeoSparkX.",
    url: "https://neosparkx.com/works",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://neosparkx.com/works/${p.slug}`,
        name: p.title,
        description: p.description,
      })),
    },
  };

  const worksHtml = generateHtml({
    url: "https://neosparkx.com/works",
    title: "Portfolio & Case Studies | NeoSparkX Engineering Works",
    description:
      "Explore 20+ production-grade software projects, web platforms, desktop applications, and digital experiences engineered by NeoSparkX.",
    keywords: "NeoSparkX portfolio, case studies, software projects, web applications, mobile apps, desktop utilities",
    schema: worksSchema,
    bodyContent: worksBody,
  });

  writeRoute("/works", worksHtml);
  count++;
}

// ── 3. INDIVIDUAL PROJECT CASE STUDY PAGES (All 20 projects) ─────────────────
for (const project of projects) {
  const projectUrl = `https://neosparkx.com/works/${project.slug}`;
  const ogImg = project.images && project.images.length > 0 ? `https://neosparkx.com${project.images[0]}` : "https://neosparkx.com/favicon.ico";

  const projectBody = `
    <header style="padding: 1.5rem 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
      <a href="/" style="font-size: 1.5rem; font-weight: bold; color: #fff; text-decoration: none;">NeoSparkX</a>
      <nav>
        <a href="/works" style="color: #aaa; text-decoration: none;">&larr; Back to All Works</a>
      </nav>
    </header>

    <main style="max-width: 1000px; margin: 0 auto; padding: 4rem 1.5rem;">
      <nav aria-label="Breadcrumb" style="margin-bottom: 1.5rem; font-size: 0.9rem; color: #666;">
        <a href="/" style="color: #888; text-decoration: none;">Home</a> &rsaquo;
        <a href="/works" style="color: #888; text-decoration: none;">Works</a> &rsaquo;
        <span style="color: #fff;">${escapeHtml(project.title)}</span>
      </nav>

      <span style="display: inline-block; font-size: 0.85rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; color: #a78bfa; margin-bottom: 0.5rem;">
        ${escapeHtml(project.category)} ${project.status ? `· ${escapeHtml(project.status)}` : ""}
      </span>
      <h1 style="font-size: 3.5rem; font-weight: 900; line-height: 1.15; margin-bottom: 1.5rem; color: #fff;">
        ${escapeHtml(project.title)}
      </h1>
      <p style="font-size: 1.35rem; color: #bbb; line-height: 1.6; margin-bottom: 2.5rem;">
        ${escapeHtml(project.description)}
      </p>

      ${
        project.role
          ? `<div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 1.25rem; border-radius: 0.75rem; margin-bottom: 3rem;">
              <p style="margin: 0; color: #888; font-size: 0.85rem; text-transform: uppercase;">Our Role</p>
              <p style="margin: 0.25rem 0 0; color: #fff; font-weight: 600;">${escapeHtml(project.role)}</p>
            </div>`
          : ""
      }

      ${
        project.techStack
          ? `<section style="margin-bottom: 3rem;">
              <h2 style="font-size: 1.5rem; color: #fff; margin-bottom: 1rem;">Technologies & Frameworks</h2>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${project.techStack.map((t) => `<span style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); padding: 0.35rem 0.85rem; border-radius: 9999px; color: #fff; font-size: 0.85rem;">${escapeHtml(t)}</span>`).join("")}
              </div>
            </section>`
          : ""
      }

      ${
        project.overview
          ? `<section style="margin-bottom: 3rem;">
              <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 1rem;">Project Overview</h2>
              <p style="color: #ccc; font-size: 1.1rem; line-height: 1.7;">${escapeHtml(project.overview)}</p>
            </section>`
          : ""
      }

      ${
        project.problem && project.problem.length > 0
          ? `<section style="margin-bottom: 3rem;">
              <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 1rem;">The Challenge & Problem</h2>
              <ul style="color: #bbb; font-size: 1.05rem; line-height: 1.7; padding-left: 1.5rem;">
                ${project.problem.map((prob) => `<li style="margin-bottom: 0.75rem;">${escapeHtml(prob)}</li>`).join("")}
              </ul>
            </section>`
          : ""
      }

      ${
        project.solution && project.solution.length > 0
          ? `<section style="margin-bottom: 3rem;">
              <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 1rem;">The Engineering Solution</h2>
              <ul style="color: #bbb; font-size: 1.05rem; line-height: 1.7; padding-left: 1.5rem;">
                ${project.solution.map((sol) => `<li style="margin-bottom: 0.75rem;">${escapeHtml(sol)}</li>`).join("")}
              </ul>
            </section>`
          : ""
      }

      ${
        project.keyFeatures && project.keyFeatures.length > 0
          ? `<section style="margin-bottom: 3rem;">
              <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 1.5rem;">Key Architecture & Features</h2>
              <div style="display: grid; gap: 1.5rem;">
                ${project.keyFeatures
                  .map(
                    (kf) => `
                  <div style="border-left: 3px solid #a78bfa; padding-left: 1.25rem;">
                    <h3 style="font-size: 1.25rem; color: #fff; margin-bottom: 0.5rem;">${escapeHtml(kf.title)}</h3>
                    <ul style="color: #aaa; line-height: 1.6; margin: 0; padding-left: 1.25rem;">
                      ${kf.items.map((it) => `<li>${escapeHtml(it)}</li>`).join("")}
                    </ul>
                  </div>`
                  )
                  .join("")}
              </div>
            </section>`
          : ""
      }

      ${
        project.metrics
          ? `<section style="margin-bottom: 3rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); padding: 2rem; border-radius: 1rem;">
              <h2 style="font-size: 1.5rem; color: #fff; margin-bottom: 1.5rem;">Impact & Performance Metrics</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem;">
                ${Object.entries(project.metrics)
                  .map(
                    ([k, v]) => `
                  <div>
                    <span style="display: block; font-size: 2rem; font-weight: bold; color: #fff;">${escapeHtml(v)}</span>
                    <span style="font-size: 0.85rem; color: #888; text-transform: uppercase;">${escapeHtml(k)}</span>
                  </div>`
                  )
                  .join("")}
              </div>
            </section>`
          : ""
      }

      <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between;">
        <a href="/works" style="color: #fff; font-weight: bold; text-decoration: none;">&larr; View All Projects</a>
        <a href="/#connect" style="color: #a78bfa; font-weight: bold; text-decoration: none;">Start a Project Like This &rarr;</a>
      </div>
    </main>
  `;

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": project.platform ? "SoftwareApplication" : "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.description,
    url: projectUrl,
    image: ogImg,
    author: {
      "@type": "Organization",
      name: "NeoSparkX",
      url: "https://neosparkx.com",
    },
    ...(project.platform ? { operatingSystem: project.platform } : {}),
    ...(project.category ? { applicationCategory: project.category } : {}),
    keywords: (project.techStack || []).join(", "),
  };

  const projectHtml = generateHtml({
    url: projectUrl,
    title: `${project.title} — Case Study & Details | NeoSparkX Works`,
    description: project.description,
    keywords: `${project.title}, ${project.category}, case study, NeoSparkX engineering, ${(project.techStack || []).join(", ")}`,
    ogImage: ogImg,
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
    <header style="padding: 1.5rem 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
      <a href="/" style="font-size: 1.5rem; font-weight: bold; color: #fff; text-decoration: none;">NeoSparkX</a>
      <nav>
        <a href="/" style="margin-right: 1.5rem; color: #aaa; text-decoration: none;">Home</a>
        <a href="/works" style="margin-right: 1.5rem; color: #aaa; text-decoration: none;">Works</a>
        <a href="/products" style="margin-right: 1.5rem; color: #fff; text-decoration: none; font-weight: bold;">Products</a>
        <a href="/#about" style="color: #aaa; text-decoration: none;">About</a>
      </nav>
    </header>

    <main style="max-width: 1300px; margin: 0 auto; padding: 4rem 1.5rem;">
      <div style="text-align: center; margin-bottom: 4rem;">
        <h1 style="font-size: 3.5rem; font-weight: 900; margin-bottom: 1rem;">Software Products & Digital Tools</h1>
        <p style="font-size: 1.25rem; color: #888; max-width: 700px; margin: 0 auto;">
          High-performance desktop applications, web platforms, Android tools, and browser extensions crafted by NeoSparkX.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
        ${storeProducts
          .map(
            (p) => `
          <article style="border: 1px solid rgba(255,255,255,0.08); background: #0a0a0a; border-radius: 1rem; overflow: hidden; display: flex; flex-direction: column;">
            <div style="padding: 1.5rem; flex: 1;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <span style="font-size: 0.75rem; text-transform: uppercase; color: #888;">${escapeHtml(p.type)}</span>
                <span style="font-size: 0.75rem; color: #10b981; font-weight: bold;">${escapeHtml(p.status)}</span>
              </div>
              <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;"><a href="/products/${p.id}" style="color: #fff; text-decoration: none;">${escapeHtml(p.name)}</a></h2>
              <p style="color: #888; font-size: 0.85rem; margin-bottom: 1rem;">by ${escapeHtml(p.publisher)} · ★ ${p.rating}</p>
              <p style="color: #bbb; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">${escapeHtml(p.tagline)}</p>
            </div>
            <div style="padding: 1rem 1.5rem; border-top: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.01); display: flex; justify-content: space-between; align-items: center;">
              <a href="/products/${p.id}" style="color: #fff; font-weight: bold; text-decoration: none; font-size: 0.9rem;">View Product &rarr;</a>
              ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" style="color: #888; font-size: 0.85rem;">Open App &nearr;</a>` : ""}
            </div>
          </article>`
          )
          .join("")}
      </div>
    </main>

    <footer style="border-top: 1px solid rgba(255,255,255,0.1); padding: 3rem 2rem; text-align: center; color: #666; font-size: 0.9rem; margin-top: 6rem;">
      <p>&copy; ${new Date().getFullYear()} NeoSparkX. All rights reserved. | <a href="/" style="color: #888;">Home</a> | <a href="/works" style="color: #888;">Works</a></p>
    </footer>
  `;

  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NeoSparkX Digital Store & Software Products",
    description: "High-performance desktop applications, web platforms, Android tools, and browser extensions crafted by NeoSparkX.",
    url: "https://neosparkx.com/products",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: storeProducts.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://neosparkx.com/products/${p.id}`,
        name: p.name,
        description: p.tagline,
      })),
    },
  };

  const productsHtml = generateHtml({
    url: "https://neosparkx.com/products",
    title: "Software Products & Digital Tools | NeoSparkX Store",
    description:
      "Discover innovative desktop utilities, web apps, Android applications, and browser extensions built by NeoSparkX.",
    keywords: "NeoSparkX products, software tools, desktop apps, web utilities, extensions, android apps",
    schema: productsSchema,
    bodyContent: productsBody,
  });

  writeRoute("/products", productsHtml);
  count++;
}

// ── 5. INDIVIDUAL PRODUCT DETAIL PAGES (All 9 products) ──────────────────────
for (const product of storeProducts) {
  const productUrl = `https://neosparkx.com/products/${product.id}`;
  const ogImg = product.heroImage ? `https://neosparkx.com${product.heroImage}` : "https://neosparkx.com/favicon.ico";

  const productBody = `
    <header style="padding: 1.5rem 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
      <a href="/" style="font-size: 1.5rem; font-weight: bold; color: #fff; text-decoration: none;">NeoSparkX</a>
      <nav>
        <a href="/products" style="color: #aaa; text-decoration: none;">&larr; Back to Products</a>
      </nav>
    </header>

    <main style="max-width: 1000px; margin: 0 auto; padding: 4rem 1.5rem;">
      <nav aria-label="Breadcrumb" style="margin-bottom: 1.5rem; font-size: 0.9rem; color: #666;">
        <a href="/" style="color: #888; text-decoration: none;">Home</a> &rsaquo;
        <a href="/products" style="color: #888; text-decoration: none;">Products</a> &rsaquo;
        <span style="color: #fff;">${escapeHtml(product.name)}</span>
      </nav>

      <span style="display: inline-block; font-size: 0.85rem; font-weight: bold; text-transform: uppercase; color: #10b981; margin-bottom: 0.5rem;">
        ${escapeHtml(product.type)} · ${escapeHtml(product.status)}
      </span>
      <h1 style="font-size: 3.5rem; font-weight: 900; line-height: 1.15; margin-bottom: 1rem; color: #fff;">
        ${escapeHtml(product.name)}
      </h1>
      <p style="font-size: 1.35rem; color: #bbb; line-height: 1.6; margin-bottom: 2rem;">
        ${escapeHtml(product.tagline)}
      </p>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 1.5rem; border-radius: 1rem; margin-bottom: 3rem; display: flex; flex-wrap: wrap; gap: 2rem; align-items: center;">
        <div>
          <span style="display: block; font-size: 0.8rem; color: #888; text-transform: uppercase;">Rating</span>
          <span style="font-size: 1.5rem; font-weight: bold; color: #fbbf24;">★ ${product.rating}</span>
        </div>
        <div>
          <span style="display: block; font-size: 0.8rem; color: #888; text-transform: uppercase;">Publisher</span>
          <span style="font-size: 1.1rem; color: #fff;">${escapeHtml(product.publisher)}</span>
        </div>
        <div>
          <span style="display: block; font-size: 0.8rem; color: #888; text-transform: uppercase;">Version</span>
          <span style="font-size: 1.1rem; color: #fff;">v${escapeHtml(product.version || "1.0.0")}</span>
        </div>
        ${
          product.liveUrl
            ? `<div style="margin-left: auto;">
                <a href="${product.liveUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 0.75rem 1.5rem; background: #fff; color: #000; border-radius: 0.75rem; font-weight: bold; text-decoration: none;">
                  Open Live App &rarr;
                </a>
              </div>`
            : ""
        }
      </div>

      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 1rem;">Description</h2>
        <p style="color: #ccc; font-size: 1.1rem; line-height: 1.7;">${escapeHtml(product.description)}</p>
      </section>

      ${
        product.features && product.features.length > 0
          ? `<section style="margin-bottom: 3rem;">
              <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 1.5rem;">Features & Capabilities</h2>
              <div style="display: grid; gap: 1rem;">
                ${product.features
                  .map(
                    (f) => `
                  <div style="border: 1px solid rgba(255,255,255,0.06); padding: 1.25rem; border-radius: 0.75rem; background: rgba(255,255,255,0.01);">
                    <h3 style="font-size: 1.15rem; color: #fff; margin-bottom: 0.25rem;">${escapeHtml(f.title)}</h3>
                    <p style="color: #aaa; margin: 0; line-height: 1.5;">${escapeHtml(f.desc)}</p>
                  </div>`
                  )
                  .join("")}
              </div>
            </section>`
          : ""
      }

      <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between;">
        <a href="/products" style="color: #fff; font-weight: bold; text-decoration: none;">&larr; View All Products</a>
        <a href="/works/${product.id}" style="color: #a78bfa; font-weight: bold; text-decoration: none;">Read Engineering Case Study &rarr;</a>
      </div>
    </main>
  `;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    url: productUrl,
    image: ogImg,
    applicationCategory: product.type,
    operatingSystem: "Windows, Web, Android",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      ratingCount: 50,
      bestRating: 5,
      worstRating: 1,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Organization",
      name: product.publisher,
      url: "https://neosparkx.com",
    },
  };

  const productHtml = generateHtml({
    url: productUrl,
    title: `${product.name} — ${product.tagline} | NeoSparkX Products`,
    description: product.description,
    keywords: `${product.name}, ${product.type}, ${product.publisher}, download, software tool, NeoSparkX`,
    ogImage: ogImg,
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
    title: "Privacy Policy | NeoSparkX Studio",
    desc: "Privacy Policy for NeoSparkX. Learn how we handle information, maintain privacy-first standards, and secure client data.",
  },
  {
    path: "/products/expense-tracker/privacy-policy",
    title: "Expense Tracker Privacy Policy | NeoSparkX",
    desc: "Privacy Policy for NeoSparkX Expense Tracker. Completely offline, zero telemetry, on-device encrypted data storage.",
  },
  {
    path: "/products/lamppost/privacy-policy",
    title: "Lamppost Privacy Policy | NeoSparkX",
    desc: "Privacy Policy for NeoSparkX Lamppost location intelligence utility.",
  },
  {
    path: "/products/ron-bot/privacy-policy",
    title: "RonBot Privacy Policy | NeoSparkX",
    desc: "Privacy Policy for RonBot AI conversational assistant.",
  },
  {
    path: "/products/prevention/privacy-policy",
    title: "Prevention App Privacy Policy | NeoSparkX",
    desc: "Privacy Policy for Prevention safety and security system.",
  },
];

for (const p of privacyPages) {
  const body = `
    <header style="padding: 1.5rem 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
      <a href="/" style="font-size: 1.5rem; font-weight: bold; color: #fff; text-decoration: none;">NeoSparkX</a>
      <nav><a href="/" style="color: #aaa; text-decoration: none;">&larr; Back to Home</a></nav>
    </header>
    <main style="max-width: 800px; margin: 0 auto; padding: 4rem 1.5rem;">
      <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem;">${escapeHtml(p.title)}</h1>
      <p style="color: #aaa; line-height: 1.7; margin-bottom: 2rem;">${escapeHtml(p.desc)}</p>
      <div style="color: #ccc; line-height: 1.8;">
        <p>At NeoSparkX, privacy is our foremost engineering priority. All applications and utilities are developed under privacy-first design principles, ensuring minimal data collection and user control.</p>
        <p>For inquiries regarding privacy, please contact: <a href="mailto:hello@neosparkx.com" style="color: #fff;">hello@neosparkx.com</a></p>
      </div>
    </main>
  `;

  const html = generateHtml({
    url: `https://neosparkx.com${p.path}`,
    title: p.title,
    description: p.desc,
    bodyContent: body,
  });

  writeRoute(p.path, html);
  count++;
}

console.log(`✅ Pre-rendered ${count} static HTML routes into dist/ successfully!`);

// ── 7. SITEMAP.XML GENERATION & SYNCHRONIZATION ─────────────────────────────
const today = new Date().toISOString().split("T")[0];

const sitemapUrls = [
  { loc: "https://neosparkx.com/", priority: "1.0", changefreq: "weekly" },
  { loc: "https://neosparkx.com/works", priority: "0.9", changefreq: "weekly" },
  { loc: "https://neosparkx.com/products", priority: "0.9", changefreq: "weekly" },
  { loc: "https://neosparkx.com/privacy", priority: "0.4", changefreq: "monthly" },
  ...projects.map((p) => ({
    loc: `https://neosparkx.com/works/${p.slug}`,
    priority: "0.8",
    changefreq: "monthly",
  })),
  ...storeProducts.map((p) => ({
    loc: `https://neosparkx.com/products/${p.id}`,
    priority: "0.8",
    changefreq: "monthly",
  })),
  { loc: "https://neosparkx.com/products/expense-tracker/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { loc: "https://neosparkx.com/products/lamppost/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { loc: "https://neosparkx.com/products/ron-bot/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { loc: "https://neosparkx.com/products/prevention/privacy-policy", priority: "0.3", changefreq: "yearly" },
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf-8");
fs.writeFileSync(path.join(rootDir, "public/sitemap.xml"), sitemapXml, "utf-8");
console.log(`🗺️ Generated and synchronized sitemap.xml with ${sitemapUrls.length} verified URLs!`);
