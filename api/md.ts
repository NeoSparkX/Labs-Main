export const config = { runtime: "edge" };

const MARKDOWN = `# NeoSparkX — Intelligence In Design

> AI Engineering, Automation, and Intelligent Systems.
> Website: <https://neosparkx.com>

---

## About

NeoSparkX is an AI-focused design and engineering studio that builds
intelligent systems, automation pipelines, and production-grade AI products.
We combine deep technical expertise with premium design to deliver solutions
that are both powerful and beautiful.

---

## Services

- **AI Engineering** — Custom LLM integrations, RAG pipelines, and agent systems
- **Automation** — Workflow automation and intelligent process optimization
- **Product Design** — UI/UX design for AI-native products
- **Intelligent Systems** — End-to-end development of AI-powered applications

---

## Products

- **RonBot** — AI-powered conversational assistant
- **Lamppost** — Smart location intelligence platform
- **Expense Tracker** — AI-assisted personal finance management
- **Prevention** — Proactive threat detection system

---

## Works / Portfolio

Browse our project portfolio at: <https://neosparkx.com/works>

---

## Contact

- **Email:** hello@neosparkx.com
- **Phone:** +8801788992953
- **LinkedIn:** <https://www.linkedin.com/company/neosparkx/>
- **Instagram:** <https://www.instagram.com/neosparkx.agency/>
- **Behance:** <https://www.behance.net/neuralabs-projects>

---

## Site Map

| Page | URL |
|---|---|
| Home | <https://neosparkx.com/> |
| Works | <https://neosparkx.com/works> |
| Products | <https://neosparkx.com/products> |
| Privacy Policy | <https://neosparkx.com/privacy> |

---

*Content-Type: text/markdown — served for AI agent content negotiation.*
*Source: <https://neosparkx.com/>*
`;

export default function handler(req: Request): Response {
  const tokens = Math.ceil(MARKDOWN.length / 4);

  return new Response(MARKDOWN, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(tokens),
      "Vary": "Accept",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
