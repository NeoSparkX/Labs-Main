export const config = { runtime: "edge" };

const MARKDOWN = `# NeoSparkX — Designing the Future of Intelligence

> Independent Software & AI Product Studio — Software Architectures, Context Tools for Claude, Autonomous Systems, and Privacy-First Consumer Applications.
> Website: <https://neosparkx.com>
> Full AI Directory: <https://neosparkx.com/llms.txt> | <https://neosparkx.com/llms-full.txt>

---

## About NeoSparkX

NeoSparkX (NeoSparkX Technologies) is an independent software and AI product studio founded in 2023 in Rangpur, Bangladesh, operating globally. Our 4-person founding team engineers high-performance desktop applications, full-stack web platforms, privacy-first Android apps, browser extensions, and intelligent automation pipelines.

### Founding Team

- **Azwad Abrar** — CEO, Product Architect & Creative Director (<https://www.linkedin.com/in/azwad-abrar/>)
- **Ahmed Mehedi** — CMO, Business Analyst & Automation Specialist (<https://www.linkedin.com/in/ahmed-mehedi/>)
- **Rezwan Shajib** — CTO, Full-Stack Lead & Technical Strategist (<https://www.linkedin.com/in/rezwan-shajib/>)
- **Jamil Jim** — COO, AI Engine & Logic Specialist (<https://www.linkedin.com/in/jamil-jim/>)

---

## Core Engineering Pillars

- **Web & App Development** — Custom full-stack web platforms, native Android (Kotlin/Jetpack Compose) and Windows desktop apps (.NET 10/WPF, Electron), and scalable backend APIs.
- **Product Design & Design Systems** — Next-gen UI/UX design, interactive motion prototyping, and Liquid Glass / dark glassmorphism design systems.
- **Automation Systems & AI Workflows** — Autonomous agents, Claude context-window tools, RAG pipelines, AI chatbots, and workflow automation.

---

## Products (12 Shipped Apps & Tools)

- **Marquee** (Windows Desktop) — All-in-one screen capture, 60-120 FPS recording, PixelSnap-style measurement, color picker, clipboard studio, and offline Windows Media OCR: <https://neosparkx.com/products/marquee>
- **uWidgets** (Windows Desktop, Pure Rust + Direct2D) — Ultra-lightweight, real-time Liquid Glass desktop widgets (~24 MB RAM, 16 widgets, Microsoft Store `9NDGKTPBF48G`): <https://neosparkx.com/products/uwidgets>
- **MarkItDown Companion** (Chrome / Firefox / Edge Extension) — Live Claude & ChatGPT token monitor, prompt cache inspector, and offline session PDF compiler: <https://neosparkx.com/products/markitdown-companion>
- **MarkItDown** (Web App & Windows Desktop) — Local-first document intelligence engine converting PDF, DOCX, PPTX, emails, images (Tesseract OCR), and audio (FFmpeg) into LLM-ready Markdown (Microsoft Store `9MZ9NJWT1H7F`): <https://neosparkx.com/products/markitdown>
- **PeerHire** (Web App) — AI-assisted university peer-to-peer talent marketplace: <https://neosparkx.com/products/peerhire>
- **SocialBlock** (Android) — 100% offline focus shield blocking Reels, Shorts, and algorithmic feeds with sanitized WebViews, local DNS VPN, and Sleep Shield: <https://neosparkx.com/products/socialblock>
- **Expense Tracker** (Android & Windows Desktop) — 100% offline personal finance & wealth manager with local SQLite storage and zero telemetry: <https://neosparkx.com/products/expense-tracker>
- **Quick-Pill** (Windows & Linux Desktop, Tauri v2 + Rust) — Dynamic Island companion with WASAPI audio mixer, Drop Shelf, and SMTC media scrubber (v6.1.1, Microsoft Store `9N371MQB4BS7`): <https://neosparkx.com/products/quick-pill>
- **Ron Bot Mobile** (Android / IoT) — Sub-50ms BLE companion app for the Ron Bot ESP32 desktop AI robot: <https://neosparkx.com/products/ron-bot>
- **Prevention** (Android) — Privacy-first digital wellness & sobriety shield with local WireGuard DNS VPN and AES-256 encrypted journal: <https://neosparkx.com/products/prevention>
- **TYVIK Robotics** (Web App) — Hardware pre-order and reservation storefront for the Ron Bot ecosystem: <https://neosparkx.com/products/tyvik-web>
- **Lamppost** (Android) — Local-first distraction-free Android document reader for PDF, Markdown, DOCX, and text: <https://neosparkx.com/products/lamppost>

---

## Works & Engineering Case Studies

Browse all 22 production case studies at: <https://neosparkx.com/works>

---

## Contact & Official Profiles

- **Email:** hello@neosparkx.com
- **Phone / WhatsApp:** +8801788992953
- **LinkedIn:** <https://www.linkedin.com/company/neosparkx/>
- **Behance:** <https://www.behance.net/neosparkx>
- **Instagram:** <https://www.instagram.com/neosparkx.agency/>
- **Facebook:** <https://www.facebook.com/profile.php?id=61584209024278>

---

## Key URLs

| Page | URL |
|---|---|
| Home | <https://neosparkx.com/> |
| Products Store | <https://neosparkx.com/products> |
| Engineering Works | <https://neosparkx.com/works> |
| Privacy & Legal Hub | <https://neosparkx.com/privacy> |
| LLMs Directory | <https://neosparkx.com/llms.txt> |
| Full Knowledge Base | <https://neosparkx.com/llms-full.txt> |
| XML Sitemap | <https://neosparkx.com/sitemap.xml> |

---

*Content-Type: text/markdown — served for AI agent content negotiation.*
*Source: <https://neosparkx.com/>*
`;

export default function handler(_req: Request): Response {
  const tokens = Math.ceil(MARKDOWN.length / 4);

  return new Response(MARKDOWN, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(tokens),
      "Vary": "Accept",
      "Link": '<https://neosparkx.com/llms.txt>; rel="describedby"',
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
