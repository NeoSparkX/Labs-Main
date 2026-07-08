export interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    gradient: string;
    role?: string;
    techStack?: string[];
    status?: string;
    platform?: string;
    overview?: string;
    problem?: string[];
    solution?: string[];
    keyFeatures?: {
        title: string;
        items: string[];
    }[];
    designPhilosophy?: string[];
    technicalHighlights?: string[];
    outcome?: string[];
    whyDifferent?: string[];
    metrics?: Record<string, string>;
    tags?: string[];
    liveUrl?: string;
    behanceUrl?: string;
    images?: string[];
}

export const projects: Project[] = [
    {
        slug: "interactive-futuristic",
        title: "Interactive Futuristic Portfolio Template",
        category: "Web App",
        description: "A premium, type-led, motion-driven design lab and portfolio for modern web experiences.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        role: "UI/UX Designer, Frontend Engineer, Creative Developer",
        techStack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "Radix UI",
            "shadcn/ui",
            "Lenis",
            "React Router DOM"
        ],
        platform: "Web App (Portfolio / Agency Studio)",
        images: [
            "/projects/interactive-futuristic/port futuristic_compressed.gif",
            "/projects/interactive-futuristic/Screenshot 2026-07-06 231347.png",
            "/projects/interactive-futuristic/Screenshot 2026-07-06 231413.png",
            "/projects/interactive-futuristic/Screenshot 2026-07-06 231434.png"
        ],
        overview: "This project is a highly interactive digital studio and portfolio. Built as a living showcase of capabilities in web design, frontend development, and creative coding, the platform highlights selected works and technical prowess through an immersive, motion-driven interface.",
        problem: [
            "Standard web portfolios are often static, failing to communicate a developer's or agency's full range of skills in interaction, animation, and modern UI engineering. They merely list skills without actually proving them in the user experience."
        ],
        solution: [
            "Developed a highly interactive \"Design Lab\" experience featuring fluid typography, smooth scrolling, and custom micro-interactions. This approach immediately demonstrates technical expertise and design sensibility, turning the portfolio itself into the strongest case study."
        ],
        keyFeatures: [
            {
                title: "Immersive Micro-interactions",
                items: ["Magnetic custom cursors, noise overlays, and seamless hover states that make the interface feel alive."]
            },
            {
                title: "Advanced Animations & Smooth Scrolling",
                items: ["Integrated Framer Motion and Lenis for physics-based transitions and a butter-smooth scroll experience."]
            },
            {
                title: "Dynamic Project Archive",
                items: ["A beautifully structured showcase of case studies with detailed overviews, tech stacks, and outcome metrics."]
            },
            {
                title: "Accessible Modern UI",
                items: ["Built with Radix UI and shadcn/ui components, ensuring the site is fully accessible without sacrificing its premium design."]
            }
        ],
        designPhilosophy: [
            "\"White Walls, Sharpened by Built\" & \"Weird by default.\" The design approach is obsessive, type-led, and motion-driven. It prioritizes bold, precise, and premium aesthetics—avoiding generic templates in favor of engineered, bespoke interfaces that refuse to look like everyone else."
        ],
        technicalHighlights: [
            "Modern React Architecture: Powered by Vite, React, and React Router DOM for robust client-side routing, quick hot-module reloading, and optimized builds.",
            "Performance Optimization: Optimized rendering and tailored animation hooks to maintain high frame rates (60fps) despite heavy DOM animations.",
            "Component-Driven Styling: Streamlined, scalable styling using Tailwind CSS, tailwind-merge, and Class Variance Authority (CVA).",
            "Headless UI Integration: Deep integration with Radix UI primitives to ensure that all interactive elements (accordions, dialogs, dropdowns) meet strict WAI-ARIA standards seamlessly."
        ],
        outcome: [
            "A stunning, high-performance digital presence that successfully positions Neura Labs as a premium creative entity. It acts as a powerful conversion tool for freelance work and agency collaborations, showcasing end-to-end capabilities from concept and design to polished code."
        ],
        whyDifferent: [
            "It treats the web browser as a canvas rather than a static document. Instead of a traditional grid of images, the site is a sensory experience—combining a distinctive aesthetic, motion-driven layouts, and highly customized components. It doesn't just show the work; it is the work."
        ],
        liveUrl: "https://portfolio-futuristic.vercel.app/",
        tags: ["UI/UX Design", "Creative Dev", "Three.js"]
    },
    {
        slug: "interactive-portfolio",
        title: "Interactive Portfolio Design",
        category: "Web App",
        description: "Type-led, motion-driven design lab and portfolio for premium web experiences.",
        gradient: "from-purple-500/20 to-pink-500/20",
        role: "Portfolio Template",
        techStack: [
            "React 19",
            "Vite",
            "Tailwind CSS 4",
            "TanStack Router",
            "Three.js",
            "Radix UI",
            "Framer Motion / GSAP",
            "Lenis"
        ],
        platform: "Web App (Portfolio / Demo Studio)",
        images: [
            "/projects/interactive-portfolio/stay weird site_compressed.gif",
            "/projects/interactive-portfolio/Screenshot 2026-07-06 224535.png",
            "/projects/interactive-portfolio/Screenshot 2026-07-06 222525.png",
            "/projects/interactive-portfolio/Screenshot 2026-07-06 222613.png",
            "/projects/interactive-portfolio/Screenshot 2026-07-06 224552.png"
        ],
        overview: "This is a highly interactive personal portfolio and digital studio. Built as a living showcase of capabilities in web design, frontend development, and creative coding, the platform highlights selected works and technical prowess through an immersive, motion-driven interface.",
        problem: [
            "Standard web portfolios are often static, failing to communicate a developer's full range of skills in interaction, animation, and 3D rendering. They list skills without proving them."
        ],
        solution: [
            "Developed a highly interactive \"Design Lab\" experience featuring a custom boot sequence, physics-based 3D components, and fluid typography. This approach immediately demonstrates technical expertise and design sensibility, turning the portfolio itself into the strongest case study."
        ],
        keyFeatures: [
            {
                title: "Custom Boot Sequence",
                items: ["An immersive loading screen that sets the \"Lab\" tone and builds anticipation before revealing the content."]
            },
            {
                title: "Physics-Based 3D Elements",
                items: ["An interactive 3D lanyard component built with React Three Fiber and Rapier3D that responds to gravity and user interaction."]
            },
            {
                title: "Advanced Typography",
                items: ["Fluid, particle-based text rendering and dynamic pressure typography that responds to the environment."]
            },
            {
                title: "Micro-interactions",
                items: ["Magnetic custom cursors, noise overlays, and seamless hover states that make the interface feel alive."]
            },
            {
                title: "Dynamic Project Archive",
                items: ["A smooth scrolling showcase of case studies with distinct typographic styles (sans, serif, script) tailored to each project's vibe."]
            }
        ],
        designPhilosophy: [
            "\"White Walls, Sharpened by Built\" & \"Weird by default.\" The design approach is obsessive, type-led, and motion-driven. It prioritizes bold, precise, and premium aesthetics—avoiding generic templates in favor of engineered, bespoke interfaces that refuse to look like everyone else."
        ],
        technicalHighlights: [
            "Creative Dev Integration: Seamlessly blending standard DOM elements with WebGL/Canvas using Three.js and React Three Fiber.",
            "Physics Engine: Utilizing @react-three/rapier for realistic gravity, collision, and drag interactions on 3D objects in the hero section.",
            "Modern React Architecture: Powered by Vite, React 19, and the TanStack ecosystem for robust routing, data fetching, and state management.",
            "Performance: Optimized particle text systems and custom ticker hooks to maintain high frame rates (60fps) despite heavy animations and WebGL contexts."
        ],
        outcome: [
            "A stunning, high-performance digital presence that successfully positions the creator as a premium creative developer. It acts as a powerful conversion tool for freelance work and agency collaborations, showcasing end-to-end capabilities from concept and design to polished code."
        ],
        whyDifferent: [
            "It treats the web browser as a canvas rather than a static document. Instead of a traditional grid of images, the site is a sensory experience—combining physics-based interactions, a distinctive \"system boot\" aesthetic, and highly customized components. It doesn't just show work; it is the work."
        ],
        liveUrl: "https://stay-weird-portfolio-design.vercel.app/",
        tags: ["Three.js", "Framer Motion", "React 19"]
    },
    {
        slug: "markitdown",
        title: "MarkItDown",
        category: "Web App",
        description: "A privacy-first, serverless client-side document converter that instantly transforms local files into clean, LLM-ready Markdown text without external cloud uploads.",
        gradient: "from-yellow-500/20 to-amber-500/20",
        role: "Lead Developer, UI/UX Designer, Full Stack Developer",
        techStack: [
            "React 19",
            "Vite",
            "Tailwind CSS v4",
            "Supabase",
            "React Router v7",
            "Mammoth.js",
            "PDF.js (pdfjs-dist)",
            "SheetJS (XLSX)",
            "JSZip",
            "GSAP"
        ],
        platform: "Web Application (Document Converter Dashboard)",
        images: [
            "/projects/markitdown/markitdown_compressed.gif",
            "/projects/markitdown/Screenshot 2026-07-07 001925.png",
            "/projects/markitdown/Screenshot 2026-07-07 001945.png",
            "/projects/markitdown/Screenshot 2026-07-07 001955.png",
            "/projects/markitdown/Screenshot 2026-07-07 002024.png"
        ],
        overview: "MarkItDown is a privacy-first web application designed to convert document formats like PDF, DOCX, PPTX, XLSX, CSV, HTML, XML, JSON, and EPUB into clean, structured Markdown. Built to satisfy the data input needs of modern Large Language Models (LLMs), it focuses on utility, data privacy, and a bold Neo-Brutalist design. All core parsing algorithms execute 100% locally in the user's browser, bypassing the need to upload files to external servers. An optional integration with Supabase provides persistent history tracking for premium accounts, while a seamless postMessage bridge securely connects the web app with the Companion Extension.",
        problem: [
            "Cloud-based File Exposure: Uploading corporate documents or proprietary PDFs to external servers for conversion risks data leaks, violating compliance guidelines.",
            "LLM Input Noise (Token Waste): Raw document conversions often inject verbose HTML styles, empty table cells, layout grids, or duplicate line breaks, causing LLMs to waste valuable context window tokens.",
            "Complex File Formats (EPUB, PPTX, XLSX): Reading slides, multi-sheet spreadsheets, or packaged book volumes directly in the browser is traditionally slow and lacks structural mapping."
        ],
        solution: [
            "Client-Side Local Processing: Implemented document parsing libraries (pdfjs-dist for PDF, mammoth for DOCX, xlsx for Excel, jszip for slide/EPUB contents) to execute entirely inside the client browser sandbox using Web Workers and local array buffers, ensuring zero server-side exposure.",
            "Custom HTML-to-Markdown and Text Sanitization Pipeline: Developed a rule-based parser that cleans metadata, merges fragmented layout lines, strips inline styling, formats multi-sheet tables with correct alignment, and outputs standard GFM (GitHub Flavored Markdown) to save up to 93% on token consumption.",
            "Binary Archive and DOM Walking Parsers: Created a slide extractor that reads the internal XML structure of slide objects using jszip, matching slide titles to headings, and an EPUB parser that traverses the container.xml spine list to compile chapters sequentially in Markdown."
        ],
        keyFeatures: [
            {
                title: "100% Browser-Native Conversion Suite",
                items: ["Direct drag-and-drop parsing of PDF, DOCX, XLSX, PPTX, CSV, JSON, XML, HTML, EPUB, and TXT files locally."]
            },
            {
                title: "Advanced PDF Table Detection",
                items: ["Evaluates Y-coordinate positions of text strings to dynamically reconstruct structured tables from PDF documents."]
            },
            {
                title: "Interactive Token Estimation Sandbox",
                items: ["A calculator on the landing page that estimates raw token sizes, clean Markdown token sizes, and dollar savings based on pricing models."]
            },
            {
                title: "Supabase-Backed Conversion History",
                items: ["Optional account sync that saves processed metadata (file size, page counts, processing speeds) and clean Markdown outputs in a PostgreSQL database under Row-Level Security (RLS)."]
            },
            {
                title: "One-Click LLM Export & Copy",
                items: ["Actions to instantly copy Markdown code or deep-link redirect to popular AI interfaces (Claude, ChatGPT, Gemini) pre-filled with the converted text."]
            },
            {
                title: "Neo-Brutalist Dashboard",
                items: ["A bold, high-contrast, utility-first workspace characterized by stark borders, bright accents, and sharp corners."]
            }
        ],
        designPhilosophy: [
            "Aesthetics & Micro-interactions: Stark borders, warm cream background (#F4F4F0), high-contrast colors, and zero border-radius (border-radius: 0 !important globally reset). Monospace metadata readouts (JetBrains Mono) are paired with bold geometric headings (Libre Franklin).",
            "Engine Sandbox & Interactive Feedback: An interactive simulator on the landing page showcases real-time token reduction and dollar savings.",
            "Platform-Optimized Design: Large drag-and-drop landing cards, structured file lists, and a modular side-by-side dashboard editor for checking converted text."
        ],
        technicalHighlights: [
            "Multi-Format Browser Parser System: Uses modern Web APIs (DOMParser, ArrayBuffer, Web Workers) to handle heavy file operations asynchronously without crashing the main UI thread.",
            "Mammoth Style-Mapping: Configured Mammoth.js with custom style maps to enforce clean heading levels (h1:fresh, h2:fresh) during DOCX translation, eliminating unnecessary paragraph wrappers.",
            "Wrangler & Cloudflare Pages Deployment: Completely serverless web deployment integrated with Cloudflare Pages and Wrangler, allowing sub-second global delivery."
        ],
        outcome: [
            "Delivered a robust, high-fidelity local document converter that handles complex, multi-format parsing directly in the browser.",
            "Created a highly secure environment where corporate documents are processed with 100% confidentiality, resulting in widespread user trust.",
            "Reduced token overhead for AI prompt engineering by up to 93%, saving developers significant API call costs."
        ],
        whyDifferent: [
            "Unlike server-reliant cloud converters, MarkItDown executes complex parsing pipelines (including ZIP decompression and tabular alignment) entirely in the client-side browser sandbox. It pairs functional processing with a striking Neo-Brutalist layout, turning a boring utility into a fast, premium, and visually engaging developer tool."
        ],
        liveUrl: "https://markitdown.neosparkx.com/",
        tags: ["Doc Converter", "React 19", "Neo-Brutalist"]
    },
    {
        slug: "markitdown-companion",
        title: "MarkItDown Companion (Chrome Extension)",
        category: "Automation",
        description: "A browser companion to sync markdown files, track real-time AI token usage, and locally export conversations from Claude, ChatGPT, Gemini, DeepSeek, and Grok.",
        gradient: "from-emerald-500/20 to-teal-500/20",
        role: "Lead Browser Extension Developer, Content Script Engineer, Security Architect",
        techStack: [
            "Vanilla JavaScript (ES6+)",
            "Chrome Extension APIs (Manifest V3)",
            "Tiktoken",
            "Offscreen Documents",
            "chrome.storage",
            "CSS3"
        ],
        platform: "Chrome Extension (Developer Tool / Companion Utility)",
        images: [
            "/projects/markitdown-companion/ChatGPT Image Jul 5, 2026, 10_36_21 PM (1).png",
            "/projects/markitdown-companion/Screenshot_2026-06-30_234911_with_bgc.png",
            "/projects/markitdown-companion/Screenshot_2026-06-30_234919_with_bgc.png",
            "/projects/markitdown-companion/Screenshot 2026-06-30 234836.png",
            "/projects/markitdown-companion/Screenshot 2026-06-30 234943.png",
            "/projects/markitdown-companion/Screenshot 2026-06-30 235124.png"
        ],
        overview: "The MarkItDown Companion is a browser extension (Manifest V3) designed to bridge the user's live AI web conversations with their local Markdown editing workspace. It injects a floating control overlay and status badges directly into the interfaces of Claude, ChatGPT, Gemini, DeepSeek, and Grok. Users can track their session token usage in real time, extract fully formatted chat logs as clean Markdown or high-quality PDFs locally, and queue document payloads. Through a secure cross-origin bridge, the extension syncs queued items directly into the user's active MarkItDown web app workspace without intermediate database storage.",
        problem: [
            "Hard AI Platform Context Limits: Users frequently hit context windows mid-conversation on Claude or ChatGPT without warning, resulting in memory loss or sluggish responses.",
            "Fragmented AI Chat Logs: Exporting conversations usually results in messy web scrapes containing avatars, timestamps, SVG buttons, and bad spacing.",
            "Document Export Interruptions: Generating PDF blobs or handling massive file downloads in background scripts can crash Manifest V3 service workers due to memory isolation or lack of DOM access."
        ],
        solution: [
            "Real-time Token Tracking & Warning Badges: Integrated the o200k_base Tiktoken tokenizer script into the injected content script context. It actively monitors DOM mutations in chat bubbles, counts active tokens, updates the browser action badge icon with color-coded alerts (Yellow at 70% capacity, Red at 90% capacity), and warns the user before limits are reached.",
            "Semantic DOM Scraper Engine: Wrote platform-specific injectors (claude.js, chatgpt.js, etc.) that isolate chat container nodes, identify user prompts vs. assistant outputs, parse nested code blocks, and output structured Markdown.",
            "Offscreen Documents & Background Sync: Utilized Chrome's offscreen API to spin up a temporary headless document context that generates PDF files. Used the chrome.downloads API to save files directly, and a postMessage-driven content bridge to transmit stored chunks securely to markitdown.neosparkx.com."
        ],
        keyFeatures: [
            {
                title: "Multi-Platform Injection Support",
                items: ["Seamlessly attaches to Claude.ai, ChatGPT.com, Gemini.google.com, Chat.deepseek.com, and Grok.com."]
            },
            {
                title: "Live Token Tracker Overlay",
                items: ["Injected floating badges displaying current session token consumption, weekly limits, and token efficiency."]
            },
            {
                title: "Handoff & Resume Snapshot Generator",
                items: ["Generates automated markdown handoff prompts (Dev Projects, Study Sessions, Exam Prep) designed to catch a fresh AI session up on previous context with zero loss."]
            },
            {
                title: "Local Storage File Queue",
                items: ["Stores up to 50 exported chat logs or text snippets locally in chrome.storage.local with automatic 7-day expiration cleanup."]
            },
            {
                title: "Cross-Origin Web App Bridge",
                items: ["A secure communication script that establishes handshake channels between localhost/production web app and extension to sync queued files in one click."]
            },
            {
                title: "Offscreen PDF Compilation",
                items: ["In-browser compilation of chat records into printable PDFs using headless offscreen contexts."]
            }
        ],
        designPhilosophy: [
            "Aesthetics & Micro-interactions: Extends the parent app's Neo-Brutalist design language. Floating overlays and status badges use monospace text (JetBrains Mono), stark black boxes, and vibrant warning/alert colors.",
            "Overlay State Awareness: Overlays slide cleanly out of view when the user is drafting prompts, minimizing interface clutter.",
            "Privacy Alerts: Local processing notifications confirm that data remains strictly on-device."
        ],
        technicalHighlights: [
            "Manifest V3 Service Worker Lifecycle: Handled message passing, state sync, downloads, and offscreen context management within the strict constraints of service worker execution.",
            "DOM Mutation Observation: Leveraged MutationObserver to watch chat logs and dynamically update token counts as the AI assistant streams responses, maintaining performance without lagging the browser tab.",
            "Secure Host Permissions: Limited host requests strictly to official chat URLs and the core web app domain (https://markitdown.neosparkx.com/*) to guarantee privacy and security."
        ],
        outcome: [
            "Developed a highly reviewed, local-first developer tool that connects browser AI workflows with file systems.",
            "Allowed developers and students to effortlessly archive conversations, backup local notes, and continue heavy chat sessions across new tabs.",
            "Enabled active context tracking, preventing mid-chat lockouts and saving users context-limit headaches."
        ],
        whyDifferent: [
            "Most exporters rely on remote servers or simple text copy-paste. The MarkItDown Companion compiles full, high-fidelity GFM logs and generates context handoff files completely locally. With built-in tokenizers and automatic context snapshots, it bridges the gap between active chat sessions and the MarkItDown web application workspace."
        ],
        tags: ["Extension", "MV3", "Automation"]
    },
    {
        slug: "personal-brain-trainer",
        title: "PERSONAL BRAIN TRAINER (Business Site Template)",
        category: "Web App",
        description: "A modern, dark glassmorphism themed portfolio for a creative SaaS agency.",
        gradient: "from-orange-500/20 to-amber-500/20",
        role: "Full Stack Developer / UI/UX Designer",
        techStack: [
            "React 18",
            "Vite",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Radix UI",
            "shadcn/ui",
            "Lenis",
            "React Router v6",
            "Supabase",
            "Embla Carousel"
        ],
        platform: "Web App (SaaS Agency Portfolio)",
        images: [
            "/projects/personal-brain-trainer/Screenshot 2026-07-06 232719.png",
            "/projects/personal-brain-trainer/Screenshot 2026-07-06 232747.png",
            "/projects/personal-brain-trainer/Screenshot 2026-07-06 232709.png",
            "/projects/personal-brain-trainer/Screenshot 2026-07-06 232737.png"
        ],
        overview: "Neura Labs is a modern, dark-themed portfolio website built for a creative/SaaS agency. It serves as an interactive digital studio, showcasing capabilities in web design, frontend development, and creative coding. Built with React, TypeScript, and Tailwind CSS, the platform features a dark glassmorphism theme with smooth animations to deliver a premium user experience.",
        problem: [
            "Traditional web portfolios are often static and fail to effectively demonstrate an agency's or developer's skills in modern UI engineering, interaction, and animation. They list skills without proving them through the user experience."
        ],
        solution: [
            "Developed a highly interactive experience that incorporates fluid typography, smooth scrolling, and modern micro-interactions. The portfolio itself acts as a living case study, proving technical expertise and design sensibility immediately through its UX."
        ],
        keyFeatures: [
            {
                title: "Immersive Dark Theme",
                items: ["Dark glassmorphism aesthetic with translucent glass elements and soft white/silver glow accents."]
            },
            {
                title: "Advanced Animations",
                items: ["Physics-based animations and page transitions powered by Framer Motion."]
            },
            {
                title: "Smooth Scrolling",
                items: ["Integrated Lenis for a butter-smooth scroll experience."]
            },
            {
                title: "Dynamic Project Showcase",
                items: ["A structured gallery (/works) to highlight case studies, tech stacks, and outcome metrics."]
            },
            {
                title: "Accessible UI",
                items: ["Built with Radix UI and shadcn/ui components, ensuring the site is fully accessible without sacrificing design."]
            },
            {
                title: "Backend Ready",
                items: ["Configured with Supabase for data management and backend capabilities."]
            },
            {
                title: "Responsive Design",
                items: ["Fully optimized for mobile, tablet, and desktop devices."]
            }
        ],
        designPhilosophy: [
            "The design prioritizes a premium, bespoke aesthetic characterized by a \"dark glassmorphism\" theme and bold orange/amber (#FF6B00) accents. It focuses on being type-led and motion-driven, ensuring the interface feels responsive, alive, and distinct from generic templates. \"Weird by default\" and obsessive in detail."
        ],
        technicalHighlights: [
            "Modern React Architecture: Utilizes Vite, React 18, TypeScript, and React Router v6 for fast client-side routing, strong type safety, and optimized production builds.",
            "Performance Optimization: Integrated animation hooks and rendering optimizations to maintain smooth 60fps animations despite heavy DOM interactions.",
            "Component-Driven Styling: Scalable and maintainable styling using Tailwind CSS, tailwind-merge, and Class Variance Authority (CVA).",
            "Headless UI Integration: Deep integration with Radix UI primitives ensuring that interactive elements like accordions, dialogs, and dropdowns meet strict WAI-ARIA standards."
        ],
        outcome: [
            "A stunning, high-performance digital presence that successfully positions the agency as a premium creative entity. It acts as a powerful conversion tool for client work and collaborations, showcasing end-to-end capabilities from concept to polished code."
        ],
        whyDifferent: [
            "It treats the web browser as a canvas rather than a static document. Instead of a traditional grid of images, the site is a sensory experience—combining a distinctive aesthetic, motion-driven layouts, and highly customized components. It doesn't just show the work; it is the work."
        ],
        liveUrl: "https://first-personal-brain-trainer.vercel.app/",
        tags: ["SaaS", "TypeScript", "Supabase"]
    },
    {
        slug: "prevention",
        title: "Prevention",
        category: "Mobile App",
        description: "A privacy-first, security-hardened Islamic mobile app for overcoming pornography addiction.",
        gradient: "from-emerald-500/20 to-teal-500/20",
        role: "Lead Mobile Developer, Security Architect, Full Stack Developer",
        techStack: [
            "Flutter",
            "Dart",
            "Kotlin",
            "Supabase",
            "PostgreSQL",
            "Android VpnService"
        ],
        status: "Live (v5.1.0)",
        platform: "Mobile App (Android)",
        images: [
            "/projects/prevention/screenshot1.png",
            "/projects/prevention/screenshot2.png",
            "/projects/prevention/screenshot3.png",
            "/projects/prevention/screenshot4.png",
            "/projects/prevention/screenshot5.png",
            "/projects/prevention/screenshot6.png"
        ],
        overview: "Prevention is a privacy-first, security-hardened Android application designed to help Muslims overcome pornography addiction. Unlike standard generic blocking or habit-tracking apps, Prevention builds a holistic recovery ecosystem. It blends technical safeguards (DNS-based VPN content blocking), behavioral accountability (daily check-ins and streak logs), spiritual motivation (Islamic teachings, Quran, Hadith, and supplications), and a reflective relapse flow. Built with security in mind, the platform uses enterprise-grade database rate limiting, device-fingerprinted offline sync validation, and tamper-resistant native features to ensure the user's path to sobriety remains secure, private, and consistent.",
        problem: [
            "Lack of Islamic Framework: Generic recovery apps lack a spiritual context, ignoring the deep conflict with Islamic teachings, modesty (taqwa), and spiritual guilt.",
            "Easy Circumvention: Basic web blockers are easily disabled, bypassable via third-party VPNs, or hacked on the client side.",
            "No Offline Integrity: Users can manipulate device clocks or logs offline to artificially protect or inflate their streaks.",
            "Shame-Inducing Relapse Cycle: Common solutions either ignore relapses or trigger feelings of despair, leading to binge cycles.",
            "No Emergency Intervention: Users have no immediate friction to break the impulse during moments of intense temptation."
        ],
        solution: [
            "Islamic-First Approach: Reframes recovery as a spiritual journey. Integrates curated Quranic verses, Hadith, and Duas to provide hope and internal spiritual grounding.",
            "Hardened VPN & Tampering Safeguards: Active split-tunneling DNS VPN (Cloudflare Family 1.1.1.3) with anti-tamper detection, emulator checks, and third-party VPN detection.",
            "Secure Offline Sync: Validates and queues offline check-ins with device fingerprint tracking and server-side verification to prevent time tampering.",
            "Compassionate & Reflective Relapse Flow: Enforces a structured 3-step relapse process (shame awareness, trigger categorization, and mandatory reflection) to turn failures into learning.",
            "Panic Mode Screen Pinning: Implements Android's native startLockTask() to lock the user into a 4-minute reflection screen, disrupting the impulse."
        ],
        keyFeatures: [
            {
                title: "DNS-Based Content Blocking (Always-On VPN)",
                items: [
                    "Uses Android VpnService API to force system traffic through Cloudflare Family DNS (1.1.1.3 & 1.0.0.3)",
                    "Split Tunneling selectively routes only web-browser apps, preventing general network breakage",
                    "Foreground persistence to avoid OS kills via startForeground() and custom notifications"
                ]
            },
            {
                title: "Tamper-Proof Streak Tracking",
                items: [
                    "Daily check-in captures mood and optional reflection notes",
                    "Server-side verification using recursive SQL queries (log_daily_checkin RPC) to block client clock tampering",
                    "Status locking prevents concurrent check-ins or contradictory relapse logging"
                ]
            },
            {
                title: "Panic Mode Screen Pinning Lockdown",
                items: [
                    "Locks users into a reflection screen for 4 minutes with skip/exit buttons disabled",
                    "Bridges to native Android startLockTask() to block Home, Recents, and Back button inputs",
                    "Displays randomized Islamic Duas and spiritual grounding prompts"
                ]
            },
            {
                title: "Islamic Motivation Content",
                items: [
                    "Curated libraries of Quranic verses, Hadiths, and supplications categorized specifically for recovery",
                    "Randomized Carousel swipeable views with page indicators to encourage content interaction"
                ]
            },
            {
                title: "Relapse Accountability Flow",
                items: [
                    "Shame Awareness warnings that deliver non-judgmental reminders of spiritual gravity",
                    "Trigger analysis allowing users to categorize relapse sources (Stress, Boredom, Loneliness, Curiosity, Social Media, etc.)",
                    "Enforces 50-character minimum text reflection before resetting the streak"
                ]
            },
            {
                title: "Secured Offline Syncing",
                items: [
                    "Device fingerprinting links check-ins to unique device IDs to prevent multi-device spoofing",
                    "Timestamp integrity validation to reject future-dated check-ins or excessive time drift"
                ]
            }
        ],
        designPhilosophy: [
            "Compassion over Condemnation: The application avoids judgmental styling or 'haraam policing,' framing recovery as a gradual, hopeful process of self-improvement and spiritual realignment.",
            "Privacy-First Experience: Absolute privacy is maintained with no public confessions. User data is protected by PostgreSQL Row Level Security (RLS) so that users' struggles remain strictly confidential.",
            "Interruption through Friction: The UI purposely injects mindful friction (e.g., the 4-minute Panic Mode timer, the 50-character relapse reflection) to encourage deliberate behavior over impulse.",
            "Aesthetic Serenity: A beautiful, calm visual palette combining deep dark backgrounds with clean, supportive gradients, modern custom typography (Google Fonts), and responsive micro-interactions to foster peace of mind."
        ],
        technicalHighlights: [
            "Android VpnService & Split Tunneling: Implements a native VPN service in Kotlin that selectively routes only web-browser apps, preventing general network breakage while maintaining robust web filtering.",
            "Server-Side Validation Engine: Utilizes PostgreSQL functions and RPCs in Supabase, keeping business rules out of the client to block database spoofing.",
            "Recursive CTE Streak Logic: Computes streaks dynamically on the database using recursive SQL queries, guaranteeing high accuracy and performance.",
            "Device Fingerprinting & Time Validation: Uses hardware identifiers combined with strict NTP/server-time validation during offline sync, rendering clock manipulation hacks ineffective.",
            "System-Level Screen Pinning: Bridges Flutter and Kotlin via Platform Channels to invoke the native Android Screen Pinning API for emergency lockdowns."
        ],
        outcome: [
            "Vast Security Hardening: Successfully closed 18 critical security holes, including VPN background kill issues, external VPN bypasses, and database tampering.",
            "Stable Sobriety Ecosystem: Established a fully functional MVP with high VPN uptime, server-validated streak tracking, and secure database architecture.",
            "Insightful Relapse Analytics: Provided support coordinators and users with valuable trigger and behavioral logs to map vulnerability trends (e.g., stress, loneliness, evening peaks).",
            "Scale-Ready Architecture: Built the groundwork using clean layer separation (Presentation, Business Logic, Data Layer) to support the upcoming Phase 2 (iOS, Web, and browser extensions)."
        ],
        whyDifferent: [
            "Spiritual-Behavioral Synergy",
            "Uncompromised Security",
            "No Paywalls",
            "Zero-Bypass Architecture"
        ],
        metrics: { Version: "v5.1.0", Type: "Open Source", Industries: "Mental Health · Spiritual Recovery · Security" },
        tags: ["Mental Health", "Spiritual Recovery", "VPN Blocking", "Open Source"]
    },
    {
        slug: "jilani-home",
        title: "Jilani Home",
        category: "Web App",
        description: "A premium, high-performance real estate marketplace designed to connect users directly with verified office spaces, event halls, and residential properties.",
        gradient: "from-orange-500/20 to-amber-500/20",
        role: "Product Design, UI/UX Design, Frontend Engineering, Database Architecture, Full-Stack Developer",
        techStack: [
            "Next.js 15 (App Router)",
            "TypeScript",
            "TailwindCSS v4 (via PostCSS)",
            "Drizzle ORM",
            "PostgreSQL (via Neon)",
            "NextAuth.js (v5 Beta)",
            "Framer Motion",
            "shadcn/ui",
            "Radix UI",
            "Material-UI (MUI)",
            "Recharts",
            "Resend",
            "AWS SDK S3",
            "React PDF Renderer",
            "XLSX"
        ],
        status: "Live",
        platform: "Web App (Responsive Desktop, Tablet & Mobile Views)",
        images: [
            "/projects/jilani-home/screenshot1.png",
            "/projects/jilani-home/screenshot2.png",
            "/projects/jilani-home/screenshot3.png",
            "/projects/jilani-home/screenshot4.png",
            "/projects/jilani-home/screenshot5.png",
            "/projects/jilani-home/screenshot6.png"
        ],
        overview: "Jilani Home is a state-of-the-art, peer-to-peer real estate and property listings marketplace designed to bypass traditional brokers. It connects owners directly with tenants and buyers looking for high-quality residential apartments, workspaces, and event spaces. Unlike conventional real estate listing platforms that charge heavy brokerage commissions, Jilani Home operates on a micro-transaction points system. Users buy point packages through local payment gateways (bKash, Nagad, Rocket) and spend small point amounts to unlock private property listings, giving them 2-month access to verified physical addresses (house, road, block, landmark) and direct contact details of hosts (phone, WhatsApp). The front-facing landing page features a cutting-edge \"Liquid Glass\" visual style with heavy background blurs and soft rounded bento panels, offering a highly exclusive and premium experience, complemented by two dedicated client-side dashboard panels for standard members and site administrators.",
        problem: [
            "Exorbitant Brokerage Commissions: Traditional real estate websites act as middlemen, taking significant agent fees (often 1-2 months' rent) from both hosts and renters.",
            "Privacy Violations & Contact Spam: Listing hosts hesitate to post properties publicly due to automated scrapers, cold callers, and security hazards associated with showing exact locations.",
            "Dynamic SSR Hydration Failures: Next.js sites frequently suffer layout shifts and hydration mismatches when managing dark/light theme triggers synced with client-side localStorage.",
            "Cluttered, Distracting Dashboard Layouts: Conventional admin dashboards suffer from floating elements, scrolling menus that overlap views, and generic UI styling."
        ],
        solution: [
            "Points-Based Paywall Unlock: A micro-transaction structure where users spend a negligible amount of pre-purchased points to unlock direct contact info for 2 months, cutting out agents completely.",
            "Two-Tier Listing Security: Public property pages only display general zone locations and features. Exact addresses and contact info are encrypted and hidden behind a secure unlock mechanism.",
            "Hydration-Guarded Layouts: Robust custom storage polyfills and hydration filters bypass Node SSR collisions, allowing a seamless light-mode fallback without visual delays.",
            "Executive Fixed-Sidebar UX: A modern, height-locked (h-screen overflow-hidden) dashboard architecture with a fixed navigation rail and independently scrollable content workspace."
        ],
        keyFeatures: [
            {
                title: "Direct Host Connectivity",
                items: [
                    "Bypasses agents by allowing clients to unlock and contact verified property owners",
                    "Direct communication via phone or integrated WhatsApp shortcuts",
                    "Ensures no broker fees or hidden agent commissions are charged"
                ]
            },
            {
                title: "Bento-Box Glassmorphism",
                items: [
                    "Visual interfaces built using translucent frosted panels",
                    "Subtle micro-borders and high-blur backdrop filters",
                    "Modern, layout-optimized design patterns that provide high aesthetic appeal"
                ]
            },
            {
                title: "Command Center Admin Panel",
                items: [
                    "Advanced overview interface for administrators",
                    "Transactional audits, user list management, and custom verification queues",
                    "Centralized moderation controls for site sanity"
                ]
            },
            {
                title: "Security Sentinel",
                items: [
                    "Dedicated system-monitoring dashboard component",
                    "Tracks server health, data integrity metrics, and real-time active tasks",
                    "Visual state indicators and warning triggers for quick operational response"
                ]
            },
            {
                title: "Analytics Dashboard",
                items: [
                    "Data-rich charts mapping transaction volumes and daily trends using Recharts",
                    "Growth indicators and customized tooltip layers",
                    "Interactive filters for detailed platform metrics review"
                ]
            },
            {
                title: "BDT (৳) Currency Handling",
                items: [
                    "Fully localized financial reporting and checkout pages",
                    "Recent payout grids supporting Bangladesh Taka natively",
                    "Points package pricing adjusted for regional affordability"
                ]
            },
            {
                title: "Interactive Saved Gallery",
                items: [
                    "Specialized horizontal gallery layout for saved listings",
                    "Interactive thumbnail carousels and direct status indicators",
                    "Quick action triggers to unlock or view listing details"
                ]
            }
        ],
        designPhilosophy: [
            "Light-Mode First with Dark Alternative: A highly legibility-optimized light interface alongside a custom 'Executive Dark' variant for administrative sections.",
            "The 'Glass' Formula: Depth is established by using semi-transparent panel backdrops (bg-white/5 or bg-black/40), heavy blurring (backdrop-blur-xl), and soft boundaries (border-white/10).",
            "Dynamic Typography: Uses Space Grotesk (geometric, architectural) for headers and branding, paired with Inter (neutral, clean) for body paragraphs and micro-copy.",
            "Framer Motion Transitions: Physics-based springs and ease-out cubic bezier paths ensure that cards, modal windows, and layouts slide or scale into view without linear stiffness."
        ],
        technicalHighlights: [
            "Next.js 15 App Router: Clean, file-system routed codebase utilizing page layouts, route handlers, and optimization algorithms.",
            "Tailwind v4 PostCSS Pipeline: Streamlined styling using the latest Tailwind CSS v4 directives compiled via @tailwindcss/postcss.",
            "Drizzle ORM & Postgres Database: Schema definitions mapping roles (admin, owner, user), point balances, unlock histories, reviews, and ticketing.",
            "Hydration Mismatch Mitigation: Standardized Next.js layout configurations featuring suppressHydrationWarning and safe client state initialization.",
            "Email & Storage integrations: Uses Resend for transactional notifications (payment successes, support responses) and AWS S3 client configs for secure upload and retrieval of property listings."
        ],
        outcome: [
            "Zero-Hydration Mismatch Builds: Achieved clean server-side rendering and client-side theme transitions.",
            "High Student/Professional Engagement: Provided a frictionless direct marketplace that eliminates expensive leasing agents.",
            "Operational Control Center: Equipped administrators with real-time financial tracking, localized payouts (BDT ৳), and system-wide security diagnostics via the Security Sentinel.",
            "Ergonomic Mobile Usability: Responsive button groupings, touch-friendly swipeable listings, and high-contrast readability elements."
        ],
        whyDifferent: [
            "Zero Agent Commissions",
            "Point-Unlock Monetization",
            "Premium Liquid Glass Look",
            "Integrated Security Sentinel"
        ],
        metrics: { PriceRange: "BDT 20K+", Duration: "2 Months", Industries: "Real Estate · P2P Marketplace · PropTech" },
        liveUrl: "https://jilanihome.vercel.app/",
        tags: ["PropTech", "P2P Marketplace", "Next.js 15"]
    },
    {
        slug: "expense-tracker",
        title: "Expense Tracker",
        category: "Mobile App",
        description: "A premium offline-first personal finance and expense tracking Android application.",
        gradient: "from-emerald-500/20 to-teal-500/20",
        role: "Native Android Developer, UI/UX Designer, Database Architect",
        techStack: [
            "Kotlin",
            "Jetpack Compose",
            "SQLite",
            "Room DB",
            "Kotlin Coroutines",
            "StateFlow",
            "Android Biometric SDK",
            "Apache POI",
            "Android PdfDocument",
            "MVVM Architecture"
        ],
        status: "Live (v5.0.0)",
        platform: "Mobile Application (Android App)",
        images: [
            "/projects/expense-tracker/1.png",
            "/projects/expense-tracker/2.png",
            "/projects/expense-tracker/3.png",
            "/projects/expense-tracker/4.png",
            "/projects/expense-tracker/5.png",
            "/projects/expense-tracker/6.png"
        ],
        overview: "Expense Tracker (v5.0.0) is a premium, offline-first personal finance and wealth management application developed natively for the Android platform. By running 100% locally and device-bound, it guarantees absolute privacy for the user's financial ledger. The application allows users to orchestrate their budgets, manage multiple accounts/wallets (like Cash, Credit Cards, Bank Accounts, and Savings), log transactions with an integrated arithmetic calculator, track loans and borrowing, and schedule recurring expenses or income. The application is built on modern Android development standards, utilizing Jetpack Compose for reactive, declarative layouts, Kotlin Coroutines & Flow for asynchronous stream handling, Room Database for persistent storage, and local biometric sensors for hardware-level app lock security.",
        problem: [
            "Modern personal finance applications heavily depend on cloud servers, requiring constant internet connectivity, exposing sensitive financial logs to data breaches, and forcing users to link their private bank credentials.",
            "Manual entry interfaces introduce high friction: standard numeric keypads force users to bounce back and forth to external calculator apps to compute shared bills or split costs, and fixed calendar budgets fail to align with real-world, non-monthly payroll cycles."
        ],
        solution: [
            "Developed a native Android app that runs entirely offline, storing data locally inside a secured SQLite database.",
            "The project introduces an integrated arithmetic compiler directly inside the transaction input keyboard (enabling operations like 250 + 120 * 1.05), allowing users to split and compute expenses inline.",
            "The application supports custom budget periods (Weekly, Monthly, or Custom Date Ranges) that sync with the user's real payroll cycles, and protects all sensitive data behind local biometric authentication and a fast screen-masking privacy mode."
        ],
        keyFeatures: [
            {
                title: "Dynamic Dashboard & Budget Controller",
                items: ["High-visibility spending indicators displaying remaining funds relative to budget intervals (Weekly, Monthly, Custom) along with smooth, interactive 7-day spending line charts."]
            },
            {
                title: "Multi-Wallet Account System",
                items: ["Creation and customization of distinct financial pools (Cash, Credit Cards, Savings) with custom color hexes, bank names, starting balances, and icons. Balances automatically adjust during inter-account transfers."]
            },
            {
                title: "Arithmetic Input Parser",
                items: ["An inline math evaluation keyboard that parses arithmetic strings directly in the transaction amount field, displaying a live preview prior to confirmation."]
            },
            {
                title: "Planned Transactions & Automation",
                items: ["Cycle-based planners (Daily, Weekly, Monthly, Yearly) for fixed bills and recurring subscriptions. Automatically triggers income deposits in the background and highlights overdue bills in red."]
            },
            {
                title: "Lending & Borrowing Ledger",
                items: ["Track debts (what you owe) and dues (what others owe you) linked to contacts, with due dates and a toggle to log payments directly to the main transaction history."]
            },
            {
                title: "Advanced Filtering & Tag Search",
                items: ["Multi-criteria transaction history lookup enabling searches by description, category, tags, and date ranges."]
            },
            {
                title: "Privacy Masking Mode",
                items: ["One-tap toggle that masks balances and income (displaying them as ••••) to prevent shoulder-surfing in public."]
            },
            {
                title: "Hardware Biometric Lock",
                items: ["Security integration leveraging fingerprint/facial recognition to lock financial logs."]
            },
            {
                title: "Data Portability & Local Backups",
                items: ["JSON and CSV export/import systems, Excel workbook creation using Apache POI, and native PDF invoice printing."]
            }
        ],
        designPhilosophy: [
            "The user interface is designed on top of modern Material Design 3 patterns, adopting a sleek design system tailored for readability, focus, and rapid input. It employs horizontal category scroll hubs and custom color codes to minimize cognitive overload when scanning financial categories. Modern glassmorphism card properties, dynamic list expansions, and responsive button states provide immediate tactile feedback.",
            "To maximize accessibility, the app adopts clean typography, high-contrast text fields, and soft-colored chips for tag organization. A key UX detail is the Privacy Masking Toggle which replaces numerical balances with blurred masking blocks, allowing users to log transactions discreetly in crowded public spaces."
        ],
        technicalHighlights: [
            "Declarative Compose UI: Uses declarative Jetpack Compose UI structures, utilizing state lifting, reactive theme adapters, and state flows within screens and components.",
            "Architecture & ViewModel State Management: Implements the MVVM architecture pattern. The MainViewModel coordinates data flows from repositories to UI views using Kotlin StateFlow and structured coroutines, preventing state mismatch or memory leaks.",
            "Local Persistence with Room DB Schema Migrations: Leverages AppDatabase.kt to manage a relational SQLite schema consisting of Expense, DebtDue, Account, and PlannedTransaction entities. Features robust migration paths (supporting up to database version 6) to guard user data when modifying schemas.",
            "Asynchronous Flow Collections: Collects database records as live flows using coroutine channels (SharingStarted.WhileSubscribed), running automated events (such as background salary deposits on planned dates) without blocking UI rendering.",
            "On-Device Biometric Lock: Connects natively to the Android Biometric prompt library, linking local cryptographic keys to the device's hardware-backed keymaster (Keystore).",
            "Client-Side Document Compilers: Embeds Apache POI directly inside the compilation dependencies to generate Excel files locally, and utilizes Android's native PdfDocument API to compile visual transaction grids to PDF files without utilizing external servers."
        ],
        outcome: [
            "The application succeeds in delivering a fully offline personal finance management system. By eliminating the necessity of web servers, transaction logging is instantaneous. Users gain absolute visibility over their actual net worth, track outstanding liabilities, and avoid overspending via alerts. The project proves that high-performance, complex utility apps can be written entirely client-side, reducing security risks to zero."
        ],
        whyDifferent: [
            "Unlike typical commercial money trackers that sell user data, track locations, or display disruptive third-party advertisements, Expense Tracker is built strictly offline-first. Features like the mathematical syntax parser inside the amount input field, customizable budget timelines tied to real income cycles instead of calendar months, inter-account transfers, and native Excel/PDF compilation make it a secure power-user tool."
        ],
        tags: ["Finance", "Kotlin", "Room DB"]
    },
    {
        slug: "ron-bot",
        title: "Ron Bot Mobile",
        category: "Mobile App",
        description: "An interactive, AI-powered desktop companion robot with dual-transport synchronization, localized sensory interfaces, and real-time cloud management.",
        gradient: "from-amber-500/20 to-orange-500/20",
        role: "Lead Developer, Hardware Prototyper, Firmware Engineer, Full Stack Developer, Mobile App Developer",
        techStack: [
            "C++",
            "ESP32",
            "Flutter",
            "Dart",
            "Next.js 16",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "WebSockets",
            "Phoenix Channels",
            "Room DB",
            "Kotlin"
        ],
        status: "Completed Prototype & Storefront",
        platform: "Hardware (ESP32), Desktop (Windows), Mobile (Android)",
        images: [
            "/projects/ron-bot/1.png",
            "/projects/ron-bot/2.png",
            "/projects/ron-bot/3.png",
            "/projects/ron-bot/4.png",
            "/projects/ron-bot/5.png",
            "/projects/ron-bot/6.png"
        ],
        overview: "Ron Bot (internal codename Ron) is a consumer hardware product featuring an AI-powered physical desktop companion robot. The product ecosystem communicates directly via localized peer-to-peer protocols and a cloud-assisted realtime broadcast system, completely bypassing intermediary server relays. The physical robot runs a robust, low-latency firmware written in C++ on an ESP32 microcontroller, integrating multiple local sensors, auditory buzzer engines, memory storage, and full WiFi networking capabilities. It interacts with users via a potentiometer-driven 7-page display system (Expressive RoboEyes, Weather Dashboard, Retro Flip-Clock, Pomodoro Timer, Tasks Screen, System Settings, and WiFi QR Pairing) and capacitive touch. The software layer consists of two client companion apps: a native Flutter Windows Desktop Application acting as the cockpit for the bot, and a portrait-locked Flutter Android Mobile Application with a redesigned Material 3 navigation shell. Both apps implement a Smart Connection Router with dual-transport sync (switching between local WebSockets and Supabase Realtime channels) and open-ended chatbot sessions via OpenRouter AI. Additionally, a Next.js 16 storefront provides pre-ordering, waitlisting, and transactional administration, running completely serverless with a Supabase cloud database backend and localized Bangladeshi wallet payment integrations (RupantorPay).",
        problem: [
            "Complex Local & Remote Connectivity: Microcontrollers usually require cloud servers for remote access, which introduces latency and operational overhead. Local offline sync is difficult to establish robustly alongside cloud channels.",
            "Hardened Media Upload Constraints: Microcontroller display hardware (like ESP32 ST7789 TFT screen) has strict LittleFS filesystem limits (~1–2MB) and decoders that cannot support raw high-res or high-fps GIFs/images.",
            "Screen Jitter from Potentiometers: Analog rotary potentiometers suffer from voltage noise, causing the display pages to rapidly flicker or jitter between selections.",
            "Payment Idempotency & Redirect Collisions: Bangladeshi local payment gateways (bKash/Nagad/Rocket via RupantorPay APK) suffer from timing delays and callback race conditions between the browser success page redirect and server webhook calls, leading to duplicate orders."
        ],
        solution: [
            "Smart Connection Router: Designed a dual-transport sync system. The companion app attempts a direct handshake over local WebSocket (ws://ronbot.local/ws) with a 1.5s timeout. If successful, commands and files stream locally with zero lag. If offline locally, it falls back to SSL Cloud Broadcasts using Supabase's Phoenix WebSocket protocol. A background loop queries local availability every 30s to restore peer-to-peer sync.",
            "Media Processing Pipeline (Hologram Deck): Built a media optimization system on the companion applications. Large image and GIF files are resized dynamically to ≤240×240, frame rates are normalized to a 15fps cap (67ms min delay), and static images are converted to single-frame GIFs. Files are transferred chunk-by-chunk via WebSockets with an automatic retry block (3 attempts with exponential backoff) and base64 encoding to prevent corruption.",
            "Hysteresis Filter on ESP32: Implemented a software-based hysteresis filter (60 raw units threshold) on the ESP32 firmware. This stabilizes the reading, allowing the user to smoothly switch pages without screen vibration.",
            "Database-Level Unique Constraint: Enforced database-level unique constraints (rupantor_transaction_id) inside the PostgreSQL orders table. Any simultaneous write is aborted at the database layer, securing payment integrity, while Next.js routes use double confirmation hooks to handle user landing and server webhooks securely."
        ],
        keyFeatures: [
            {
                title: "7-Page Display System",
                items: [
                    "A 280×240 TFT color display running optimized TFT_eSPI driver with a potentiometer dial for page flipping (Expressive RoboEyes, Weather Dashboard, Retro Flip-Clock, Pomodoro Timer, Tasks Screen, System Settings, and WiFi QR Pairing)."
                ]
            },
            {
                title: "Sensory & Haptic Interactions",
                items: [
                    "Top capacitive touch sensor (GPIO 27) tracks tap inputs (happy mood/chimes) and rapid pats (overrides into an angry mood with screen horizontal jitter and annoyance chirps), resetting to idle coordinates after a cool-down timer."
                ]
            },
            {
                title: "Dynamic Task & Pomodoro Sync",
                items: [
                    "Interactive To-Do list (up to 4 items) and Pomodoro focus timers synced in real-time between ESP32 hardware and companion applications, triggering buzzer chimes (eureka/alarm sirens) at deadlines."
                ]
            },
            {
                title: "OpenRouter AI Chatbot",
                items: [
                    "Context-aware assistant injecting bot telemetry (temperature, current task, active page, mood) into LLM system prompts, utilizing a resilient 5-model failover engine with auto-cooldowns (Llama-3.2, Phi-3, Gemma-2, Qwen-2.5, Mistral-7B)."
                ]
            },
            {
                title: "Bento-style Dashboards",
                items: [
                    "Beautiful, height-locked dashboard apps for Windows Desktop and Android Mobile with clean grids, transparent glassmorphism widgets, and portrait-oriented bottom navigations."
                ]
            },
            {
                title: "E-Commerce & Admin Hub",
                items: [
                    "Next.js storefront for waitlisting and pre-ordering, integrated with RupantorPay wallet checkout, featuring interactive Recharts analytics graphs, waitlist email mailers (via Resend/React Email), and inventory management."
                ]
            }
        ],
        designPhilosophy: [
            "Aesthetics & Micro-interactions: Glassmorphism themed layouts with heavy backdrop filters, translucent panels, and subtle borders. High-pitch non-blocking audio chimes and expressive eye animations (11 states) bring the hardware to life.",
            "Interruption & Friction-Based Feedback: Incorporates mindful friction (such as manual clock potentiometer edits, touch overrides) and clear visual status indicators (online status dots, sync badges).",
            "Platform-Optimized Design: Clean geometric headers (Space Grotesk) and architectural layouts on desktop, transitioning to smooth vertical sliver scrolls and touch-friendly bottom sheets on mobile."
        ],
        technicalHighlights: [
            "Dual-Transport Phoenix & WS Client: Direct C++ implementation on ESP32 of SSL WebSocket handshakes with Supabase Realtime using Phoenix serialization, keeping connections alive with 30s heartbeats.",
            "Chunked Base64 Media Transfer: Custom binary-to-chunk file streaming over local peer WebSockets with verification logic and ESP32 LittleFS flash writes.",
            "Non-Blocking Tone Generation Frequencies: ESP32 audio queue scheduler running chimes on dedicated ticks to ensure the main UI rendering thread never stutters during chimes.",
            "Local DPAPI & Android Keystore Security: Secure credential storage utilizing Windows Data Protection API (DPAPI) and Android encryptedSharedPreferences to safehouse API tokens."
        ],
        outcome: [
            "Successfully designed, programmed, and prototyped a fully functional AI-powered physical desktop bot with localized sensor systems and non-blocking buzzer engines.",
            "Created robust, premium desktop (Windows) and mobile (Android) companion apps featuring real-time telemetry streaming, file uploads, and contextual AI chat capabilities.",
            "Deployed a secure, transactionally idempotent pre-order storefront with Bangladeshi payment support, comprehensive admin charts, and role-based access middleware."
        ],
        whyDifferent: [
            "It treats the product ecosystem as a unified, peer-to-peer cloud-assisted canvas rather than a disconnected set of apps and gadgets. Rather than relying on heavy server infrastructure, Ron Bot directly coordinates local WebSockets and cloud Realtime broadcast networks. With its resilient multi-model failover chatbot engine, interactive sensory feedback, and dedicated hardware integration, it feels like an organic, living desktop companion."
        ],
        tags: ["Hardware", "Flutter", "AI"]
    },
    {
        slug: "tyvik-web",
        title: "TYVIK ROBOTICS",
        category: "Web App",
        description: "A high-performance, dark-themed pre-order storefront and administrative dashboard for the AI-powered Ron Bot companion.",
        gradient: "from-purple-500/20 to-indigo-500/20",
        role: "Lead Developer, Full Stack Developer, UI/UX Designer",
        techStack: [
            "Next.js 16 (App Router)",
            "React 19",
            "TypeScript",
            "Tailwind CSS v4",
            "Framer Motion",
            "Radix UI",
            "shadcn/ui",
            "Supabase",
            "PostgreSQL",
            "Resend",
            "React Email",
            "Recharts",
            "Zustand"
        ],
        status: "Completed Prototype & Storefront",
        platform: "Web App",
        images: [
            "/projects/ron-bot-web/Screenshot 2026-07-07 000454.png",
            "/projects/ron-bot-web/Screenshot 2026-07-07 000514.png",
            "/projects/ron-bot-web/Screenshot 2026-07-07 000541.png",
            "/projects/ron-bot-web/Screenshot 2026-07-07 000616.png",
            "/projects/ron-bot-web/Screenshot 2026-07-07 000655.png"
        ],
        overview: "The Ron Bot Web App (Next.js Hub) is the digital storefront, user pre-order platform, and administrative command center for the Ron Bot ecosystem. Built with Next.js 16 (App Router), React 19, and Supabase, it provides customers with an interactive, motion-rich experience to learn about, compare, and pre-order different Ron Bot models (Classic, Keychain, Ultra). Behind the scenes, the web application runs completely serverless, leveraging a PostgreSQL database on Supabase and integrating localized Bangladeshi payment wallets (RupantorPay) via an Android SMS APK relay. Authenticated users can manage their orders and register their physical devices in a personalized dashboard, while administrators can track waitlists, send batch templated updates using React Email and Resend, configure inventory, and view analytics charts built with Recharts.",
        problem: [
            "Payment Gateway Idempotency & Redirect Race Conditions: In localized payment workflows like RupantorPay (an Android APK relay parsing bKash/Nagad bank SMS notifications), timing delays and concurrent callback notifications from browser redirect success and server webhooks can cause duplicate order records, double charging, and incorrect inventory depletion.",
            "Server Overheads for Realtime Telemetry/Controls: Connecting physical microcontrollers to web applications normally requires maintaining a persistent Express or Node.js WebSocket relay server, leading to scaling difficulties, high infrastructure costs, and latency.",
            "Role-Based Security & Middleware Protection: Gating administrative paths and protecting sensitive dashboards from unauthenticated users in a serverless, client-heavy architecture without introducing routing latency."
        ],
        solution: [
            "Database-Level Unique Constraint Guard: Enforced a UNIQUE constraint on rupantor_transaction_id in the PostgreSQL orders table. Any concurrent write attempt from a duplicate callback is rejected at the database level. Next.js routes implement dual validation hooks (immediate client checkout success redirect check + server-to-server webhook endpoint returning 200 OK) to safely handle purchase completions.",
            "Serverless Direct Supabase Integration: Bypassed custom backend server relays by using Supabase Realtime channels. The web app communicates directly with physical ESP32 bots using SSL-secured Phoenix WebSocket channels (wss://), syncing task matrix states and command queues with zero server infrastructure overhead.",
            "JWT Middleware Session Verification: Implemented middleware.ts to intercept Next.js routes. It decodes and validates the client's JWT session token against Supabase Auth, gating /dashboard and restricting /admin routes based on user roles configured in a triggered profiles table."
        ],
        keyFeatures: [
            {
                title: "Bento-Style Storefront & Product Configurator",
                items: ["A beautiful dark glassmorphic landing page featuring fluid typography, specs comparison tables, product detail pages, and an interactive FAQ deck."]
            },
            {
                title: "RupantorPay Wallet Checkout",
                items: ["Integrated support for Bangladeshi local payment options (bKash, Nagad, Rocket) with whole-integer BDT pricing to avoid floating-point rounding errors."]
            },
            {
                title: "Unified User Dashboard",
                items: ["A private dashboard for registered customers to track shipping stages (Confirmed ➔ Processing ➔ Shipped ➔ Delivered), update their profile avatars (stored in a gated Supabase bucket with RLS), and register their physical devices using unique hardware serial numbers."]
            },
            {
                title: "Unified Admin Console (/admin)",
                items: ["A comprehensive administrative dashboard featuring Recharts analytics panels (pre-orders, gross revenue, user growth), inventory toggles (preorder_open, is_listed), and a waitlist queue."]
            },
            {
                title: "Waitlist Batch Mailer",
                items: ["An automated client notifier powered by Resend and React Email, enabling admins to dispatch beautifully styled email updates to waitlisted users with a single click."]
            }
        ],
        designPhilosophy: [
            "Dark Glassmorphism: Translucent panels, blur backdrops, soft white and silver glow accents, and precise geometric layout lines (Space Grotesk font styling) that feel premium and modern.",
            "Micro-interactions: Seamless transitions, hover state changes, dynamic charts, and live order status tracker steps to make the experience feel highly responsive and polished.",
            "Symmetric Bento Grid Layout: Clean grid systems grouping metrics and features logically, optimizing user onboarding and checkout flows."
        ],
        technicalHighlights: [
            "Serverless Architecture: A 100% serverless hosting structure on Next.js/Vercel and Supabase, removing the need for a separate API backend.",
            "PostgreSQL RLS (Row Level Security): Fine-grained data access control on profiles, orders, and devices tables, ensuring users can only read/write their own records while admins have global read/write access.",
            "React Email templates & Resend integration: Programmatic compilation and delivery of transactional emails without SMTP server dependencies.",
            "Recharts Data Binding: Live mapping of PostgreSQL aggregations onto interactive SVG graphs."
        ],
        outcome: [
            "Deployed a fully functional, highly secure, and aesthetically striking e-commerce pre-order storefront and device manager.",
            "Mitigated payment duplication errors completely by implementing database-level transaction guards.",
            "Established a serverless realtime connection system capable of sending direct intents and task checklists to hardware companions."
        ],
        whyDifferent: [
            "It is not just a static catalog or marketing page; it is a fully integrated portal that interfaces directly with physical hardware. By combining serverless Supabase Realtime channels with localized wallet integrations and robust PostgreSQL transaction controls, the web app functions as a low-latency administrative console and storefront in one. It bridges the gap between hardware telemetry and web dashboards with zero server overhead."
        ],
        liveUrl: "https://tyvik.neosparkx.com/",
        tags: ["Next.js 16", "E-commerce", "Real-time"]
    },
    {
        slug: "peerhire",
        title: "PeerHire",
        category: "Web App",
        description: "A university-exclusive platform for outsourcing varsity work",
        gradient: "from-blue-500/20 to-purple-500/20",
        role: "Product Design, UI/UX Design, Frontend Engineering, Backend Architecture",
        techStack: ["Next.js", "React", "PostgreSQL", "Framer Motion", "Tailwind CSS"],
        status: "Live (Real Users)",
        platform: "Web App",
        liveUrl: "https://peerhireaaub.vercel.app",
        behanceUrl: "https://www.behance.net/neuralabs-projects",
        images: [
            "/projects/peerhire/hero.png",
            "/projects/peerhire/services.png",
            "/projects/peerhire/freelancers.png",
            "/projects/peerhire/signup.png"
        ],
        overview: "PeerHire is a university-exclusive freelancing platform designed to connect students who need academic assistance with fellow students who can provide it. Unlike generic freelancing platforms, PeerHire is purpose-built for varsity-level work—including assignments, lab reports, documentation, and academic writing—within a trusted campus environment. The platform enables students to act as hirers, freelancers, or both using a single verified university email. With real-time dashboards, live availability boards, messaging, and reputation-based ratings, PeerHire transforms informal peer help into a structured, professional, and scalable ecosystem.",
        problem: [
            "No trusted, university-verified marketplace",
            "Informal Facebook/WhatsApp groups with no accountability",
            "No transparency in pricing, quality, or deadlines",
            "No reputation or rating system",
            "Lack of real-time availability visibility",
            "Traditional platforms like Fiverr or Upwork are overkill, unsafe for academic contexts, and disconnected from campus realities."
        ],
        solution: [
            "Only students with a valid @aaub.edu.bd email can join",
            "Users can seamlessly switch between Hirer and Freelancer roles",
            "Tasks, payments, messages, and review are handled inside one system",
            "Reputation and ratings follow freelancers everywhere on the platform",
            "This creates trust, fairness, and professionalism inside the campus economy."
        ],
        keyFeatures: [
            {
                title: "Dual-Role Accounts",
                items: [
                    "One account, one email",
                    "Students can hire and work as freelancers without creating multiple profiles",
                    "Role switching is instant and UI-driven"
                ]
            },
            {
                title: "Role-Based Dashboards",
                items: [
                    "Hirer dashboard: tasks posted, progress, spending, freelancer ratings",
                    "Freelancer dashboard: active jobs, completed work, earnings, reputation",
                    "All stats are powered by real backend data, not demos"
                ]
            },
            {
                title: "Live Freelancer Board",
                items: [
                    "Real-time list of freelancers showing availability status",
                    "Rating and completed job count",
                    "Instant messaging from live cards"
                ]
            },
            {
                title: "Real-Time Messaging",
                items: [
                    "Messenger-style chat system",
                    "Supports file sharing and job-linked conversations",
                    "Integrated across dashboards, jobs, and live board"
                ]
            },
            {
                title: "Task Completion & Review System",
                items: [
                    "Hirers mark tasks as completed",
                    "Review popup appears immediately",
                    "Ratings propagate everywhere: Freelancer dashboard, Profile, Live board, Search results"
                ]
            },
            {
                title: "Mobile-First Design",
                items: [
                    "Fully responsive across all pages",
                    "Sidebar adapts to drawer / bottom navigation on mobile",
                    "Chat experience optimized for touch devices"
                ]
            }
        ],
        designPhilosophy: [
            "PeerHire follows a futuristic minimal dark UI inspired by modern SaaS products:",
            "High-contrast dark theme for focus",
            "Subtle motion and micro-interactions",
            "Card-based layouts with clear hierarchy",
            "Mobile usability prioritized from day one",
            "The goal was to make the platform feel professional, calm, and trustworthy, not experimental or gimmicky."
        ],
        technicalHighlights: [
            "Lovable Cloud backend with real users and production data",
            "Strong role-based access control",
            "Realtime updates for messages, availability, and ratings",
            "Secure object storage for job files and handwriting samples",
            "Scalable database design for future payment automation (bKash integration planned)"
        ],
        outcome: [
            "PeerHire evolved from a showcase concept into a real, production-ready platform:",
            "No demo or fake data",
            "Real hirers and freelancers onboarded",
            "Fully live dashboards, live board, and messaging",
            "A foundation ready for payment automation and growth"
        ],
        whyDifferent: [
            "Campus-verified trust model",
            "Academic-specific workflows",
            "Dual-role user architecture",
            "Real-time visibility and accountability",
            "Designed for real student usage, not just presentation"
        ],
        metrics: { Projects: "100+", StudentBase: "400+", AvgRating: "4.8/5" },
        tags: ["Assignment", "Ratings", "Live"]
    },
    {
        slug: "enterprise-analytics-dashboard",
        title: "Enterprise Analytics Dashboard",
        category: "Web App / Analytics",
        description: "A real-time business intelligence platform for data-driven decision making",
        gradient: "from-zinc-500/20 to-blue-500/20",
        role: "Product Design, UI/UX Design, Frontend Engineering, Backend Architecture",
        techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Recharts", "TailwindCSS", "Prisma"],
        status: "Live (Real Users)",
        platform: "Web App / Analytics",
        images: [
            "/projects/enterprise-analytics/screenshot1.png",
            "/projects/enterprise-analytics/screenshot2.png",
            "/projects/enterprise-analytics/screenshot3.png",
            "/projects/enterprise-analytics/screenshot4.png",
            "/projects/enterprise-analytics/screenshot5.png"
        ],
        overview: "Enterprise Analytics Dashboard is a production-grade SaaS platform built for operations teams and C-level executives who need real-time visibility into business KPIs—without the complexity of tools like Tableau or Looker. Designed as a white-label solution, it consolidates revenue metrics, user acquisition funnels, team performance, and infrastructure health into a single, role-aware interface. With customizable widget layouts, automated PDF reporting, multi-workspace support, and granular RBAC, it transforms raw data into executive-ready intelligence. Built by NeosparkX with a design-first philosophy, the dashboard redefines what enterprise tooling should feel like—fast, clean, and brutally useful.",
        problem: [
            "No unified view — teams juggling 4–6 separate tools for metrics",
            "Generic BI tools require data engineering expertise to configure",
            "No role-based access → sensitive financial data exposed across teams",
            "Static reports with no real-time update capability",
            "Expensive enterprise tools (Tableau, Mixpanel) priced out of SME reach",
            "No white-label option for agencies reselling analytics to clients"
        ],
        solution: [
            "Any workspace can be provisioned in under 5 minutes with CSV or API connectors",
            "Role-aware dashboards — Admins, Analysts, and Executives each see exactly what they need",
            "Real-time data pipeline via WebSockets + Redis pub/sub — zero page refresh needed",
            "Drag-and-drop widget builder — no SQL or code required for custom views",
            "Automated scheduled reports delivered via email as styled PDFs",
            "White-label ready — custom domain, logo, and color theme per client workspace"
        ],
        keyFeatures: [
            {
                title: "Multi-Workspace Architecture",
                items: [
                    "Isolated workspaces per client",
                    "Shared infrastructure, zero data leakage",
                    "Invite-based member management"
                ]
            },
            {
                title: "Role-Based Dashboards",
                items: [
                    "Admin: full analytics + team mgmt",
                    "Analyst: data exploration + exports",
                    "Executive: KPI summary + trend view"
                ]
            },
            {
                title: "Real-Time Data Engine",
                items: [
                    "WebSocket-powered live updates",
                    "Redis caching layer for sub-100ms loads",
                    "Configurable refresh intervals"
                ]
            },
            {
                title: "Drag-and-Drop Builder",
                items: [
                    "Modular widget canvas",
                    "Resize, reorder, and pin widgets",
                    "Saved layout profiles per role"
                ]
            },
            {
                title: "Automated Reporting",
                items: [
                    "Scheduled PDF reports via email",
                    "Custom date ranges and metric filters",
                    "Branded cover pages"
                ]
            },
            {
                title: "Multi-Source Connectors",
                items: [
                    "CSV upload",
                    "REST API integration",
                    "PostgreSQL direct connect",
                    "Google Sheets sync (planned)"
                ]
            }
        ],
        designPhilosophy: [
            "High-contrast dark UI with zinc/slate palette and electric blue accents",
            "Data density without visual noise — information hierarchy drives layout",
            "Micro-interactions on every chart interaction (hover, drill-down, zoom)",
            "Card-based grid with 8px spacing system for tight visual rhythm",
            "Accessibility-first: WCAG 2.1 AA compliant, keyboard navigable throughout",
            "The goal: make complex data feel calm, not overwhelming"
        ],
        technicalHighlights: [
            "Next.js App Router with server components for zero-JS dashboard shells",
            "PostgreSQL + Prisma ORM with multi-tenant row-level security",
            "Redis for real-time pub/sub and query result caching",
            "Recharts + D3 hybrid for custom visualization primitives",
            "Automated PDF generation via Puppeteer (headless Chrome)",
            "Clerk-based auth with workspace-scoped JWT sessions"
        ],
        outcome: [
            "Enterprise Analytics Dashboard evolved from a client request into a fully productized SaaS template:",
            "No mock or placeholder data — all metrics pulled from live PostgreSQL instances",
            "Real workspaces onboarded with active daily users",
            "6 fully functional dashboard views, real-time sync, and automated reporting pipeline",
            "A foundation ready for billing integration (Stripe), usage-based limits, and API access tier"
        ],
        whyDifferent: [
            "White-label ready architecture",
            "Real-time WebSocket data sync",
            "Role-aware multi-workspace system",
            "Zero-SQL widget builder",
            "Designed for non-technical executives"
        ],
        metrics: { Workspaces: "20+", AutomatedReports: "1000+", DashboardViews: "6" },
        tags: ["B2B", "Analytics", "SaaS"]
    },
    {
        slug: "uhfc-sports-complex",
        title: "UHFC Sports Complex",
        category: "Web App",
        description: "A premium sports facility website with real-time multi-pitch booking for 200+ weekly athletes",
        gradient: "from-green-500/20 to-emerald-500/20",
        role: "Product Design, UI/UX Design, Frontend Engineering, Backend Architecture",
        techStack: ["Next.js 14", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "TailwindCSS", "Framer Motion", "Stripe", "Vercel", "Cloudflare"],
        status: "Live (Real Users)",
        platform: "Web App",
        liveUrl: "https://uhfcsportscomplex-murex.vercel.app",
        images: [
            "/projects/uhfc-sports/screenshot1.png",
            "/projects/uhfc-sports/screenshot2.jpg",
            "/projects/uhfc-sports/screenshot3.png",
            "/projects/uhfc-sports/screenshot4.png",
            "/projects/uhfc-sports/screenshot5.png"
        ],
        overview: "UHFC Sports Complex is Dhaka's premier multi-sport facility — established 2012 — offering football turf, cricket grounds, and indoor badminton courts. NeosparkX was brought in to solve a critical operational crisis: a phone-based booking system causing double-bookings and consuming 15 hours of admin time per week. We delivered a fully designed and engineered sports platform with real-time slot availability, Stripe-integrated payment, automated confirmations, and an admin scheduling dashboard — transforming how UHFC operates and grows. The result: a 247% booking increase in 60 days, zero double-bookings, and a facility that now ranks #1 in local search.",
        problem: [
            "Phone-based bookings caused repeated double-booking incidents",
            "15 hours/week lost to manual scheduling and confirmation calls",
            "Zero online presence — losing clients to digitally-visible competitors",
            "No payment infrastructure — cash-only created operational friction",
            "No visibility into revenue, occupancy rates, or peak demand patterns",
            "Tournament and multi-pitch coordination handled entirely on paper"
        ],
        solution: [
            "Only verified users with a real-time slot system can book — zero double-booking by architecture",
            "Automated email confirmations sent instantly on payment — no manual follow-up needed",
            "Full SEO setup + Google Business optimization — ranked #1 in local search within 45 days",
            "Stripe-integrated payment processing — fully cashless, automated, and auditable",
            "Admin dashboard gives real-time visibility into bookings, revenue, and scheduling gaps",
            "Multi-pitch tournament booking flow handles group reservations in a single checkout session"
        ],
        keyFeatures: [
            {
                title: "Real-Time Availability Calendar",
                items: [
                    "Live slot grid by venue",
                    "Morning/Day/Night session blocks",
                    "Instant lock on selection to prevent conflicts"
                ]
            },
            {
                title: "Multi-Sport Booking System",
                items: [
                    "Football Turf",
                    "Cricket Field",
                    "Badminton Court",
                    "Each pitch independently bookable with its own schedule"
                ]
            },
            {
                title: "Stripe Payment Integration",
                items: [
                    "Secure online payment at checkout",
                    "Booking confirmed only on payment success",
                    "Refund flow built-in"
                ]
            },
            {
                title: "Automated Email Confirmations",
                items: [
                    "Instant booking receipt on payment",
                    "Reminder 2 hours before slot",
                    "63% reduction in no-shows"
                ]
            },
            {
                title: "Admin Scheduling Dashboard",
                items: [
                    "Full booking overview",
                    "Revenue tracking by pitch and date",
                    "Manual override and cancellation controls"
                ]
            },
            {
                title: "Multi-Pitch Tournament Mode",
                items: [
                    "Bulk slot reservation for events",
                    "Team registration flow",
                    "Cash prize and slot count displayed live"
                ]
            }
        ],
        designPhilosophy: [
            "Dark theme with neon green accents — high-energy sports aesthetic that commands attention",
            "Mobile-first responsive design built for the 67% of traffic arriving on phones",
            "Real facility photography (aerial drone + floodlit night shots) replacing generic stock imagery",
            "Scroll-triggered animations via Framer Motion — increased engagement by 28%",
            "Card-based layout with strong typographic hierarchy — EST. 2012 editorial voice throughout",
            "Goal: make the facility feel world-class online before the athlete steps on the pitch"
        ],
        technicalHighlights: [
            "Next.js 14 App Router — 0.9s page load, fully performance-optimized on Vercel edge",
            "PostgreSQL + Prisma with slot-locking logic to guarantee zero double-booking at DB level",
            "Framer Motion scroll animations and entrance transitions throughout",
            "Stripe API for end-to-end payment flow with webhook-triggered confirmation emails",
            "Cloudflare CDN for asset delivery and DDoS protection",
            "Complete Figma design system delivered — components, tokens, and responsive breakpoints documented"
        ],
        outcome: [
            "UHFC went from a phone-and-paper operation to a fully automated sports platform:",
            "247% increase in bookings within 60 days of launch",
            "Admin scheduling time reduced from 15 hours → 3 hours/week",
            "34% higher average booking value post-launch",
            "Zero double-bookings since go-live",
            "Ranked #1 for local sports facility search within 45 days",
            "63% reduction in no-shows via automated email reminders"
        ],
        whyDifferent: [
            "Real-time slot-locking architecture",
            "Mobile-first for athlete audiences",
            "Full payment-to-confirmation automation",
            "Multi-sport single-platform booking",
            "Operational transformation, not just a website"
        ],
        metrics: { PriceRange: "$1,000 – $2,500", Duration: "1–7 days", Industries: "Sports Facility · Booking Platform · Local Business" },
        tags: ["Real-time", "Booking", "Automation"]
    },
    {
        slug: "north-king",
        title: "North King Restaurant",
        category: "Web App",
        description: "An elegant dining website with real-time table reservation for a premium restaurant establishment",
        gradient: "from-amber-500/20 to-yellow-500/20",
        role: "Product Design, UI/UX Design, Frontend Engineering",
        techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Google Maps API", "Vercel"],
        status: "Live (Real Users)",
        platform: "Web App",
        images: [
            "/projects/north-king-restaurant/screenshot1.png",
            "/projects/north-king-restaurant/screenshot2.png",
            "/projects/north-king-restaurant/screenshot3.png",
            "/projects/north-king-restaurant/screenshot4.png",
            "/projects/north-king-restaurant/screenshot5.png"
        ],
        overview: "North King is a premium dining establishment that relied entirely on walk-in service and phone calls — leaving revenue on the table during every peak hour. NeosparkX designed and engineered a luxury restaurant website that communicates exclusivity from the first scroll and converts visitors into confirmed reservations. With a real-time table booking system, curated signature dish showcase, interactive menu categories, and Google Maps integration, North King now has a digital presence that matches the quality of their kitchen. The result: a 215% surge in reservations, a 31% revenue boost, and 72% of bookings arriving from mobile — all within weeks of launch.",
        problem: [
            "Walk-in only model caused consistent booking losses during Friday–Saturday peak hours",
            "Phone-based reservations were missed after hours — no fallback system",
            "Zero online presence meant younger demographics defaulted to competitors",
            "No digital menu made pre-visit discovery impossible",
            "Staff time wasted on repeated phone inquiries about location, hours, and availability",
            "No data on party sizes, peak times, or customer return rates"
        ],
        solution: [
            "Real-time table reservation system lets customers book 24/7 — no phone call required",
            "Mobile-first design built for the 72% of users booking on smartphones",
            "Luxury dark + gold aesthetic communicates premium positioning before a single dish is served",
            "Interactive digital menu with category filters reduces pre-visit phone inquiries by 48%",
            "Google Maps integration removes friction for first-time visitors finding the location",
            "Customer testimonials with star ratings build social proof and drive conversion"
        ],
        keyFeatures: [
            {
                title: "Real-Time Table Reservation",
                items: [
                    "Live availability by date and party size",
                    "Instant booking confirmation",
                    "24/7 self-service for guests"
                ]
            },
            {
                title: "Signature Dish Showcase",
                items: [
                    "Professional food photography",
                    "Dish names and pricing",
                    "Curated selection driving aspirational ordering"
                ]
            },
            {
                title: "Interactive Menu Categories",
                items: [
                    "Filter by Starters / Mains / Desserts / Drinks",
                    "No page reload",
                    "Mobile-optimized tab navigation"
                ]
            },
            {
                title: "Google Maps Integration",
                items: [
                    "Embedded live map",
                    "Full address, phone, and email in footer",
                    "One-tap directions on mobile"
                ]
            },
            {
                title: "Testimonials & Ratings",
                items: [
                    "Star-rated customer reviews",
                    "4.6/5 aggregate displayed",
                    "Social proof above the reservation CTA"
                ]
            },
            {
                title: "Contact Form",
                items: [
                    "Direct inquiry submission",
                    "Ideal for large group bookings, corporate events, and private dining requests"
                ]
            }
        ],
        designPhilosophy: [
            "Luxury dark theme with gold accent palette — communicates premium before any content is read",
            "Professional food photography as the primary visual language — no generic stock imagery",
            "Elegant serif typography paired with refined spacing — every detail signals fine dining",
            "Framer Motion entrance animations and scroll transitions — smooth, unhurried, and intentional",
            "Mobile-first layout — 72% of reservations completed on phone, so the booking flow is thumb-native",
            "Goal: make the website feel like the restaurant's dining room — warm, refined, and trustworthy"
        ],
        technicalHighlights: [
            "Next.js App Router with SSG for near-instant page loads and strong Core Web Vitals scores",
            "Framer Motion scroll and entrance animations for luxury-feel micro-interactions throughout",
            "Google Maps API embedded with custom dark map styling matching the site theme",
            "TypeScript across the full codebase — type-safe props, form handling, and API contracts",
            "Vercel edge deployment — globally distributed, zero cold starts",
            "Open-source template on GitHub — reusable foundation for restaurants and hospitality businesses"
        ],
        outcome: [
            "North King went from a walk-in-only establishment to a 24/7 reservations operation:",
            "215% increase in reservations post-launch",
            "48% fewer phone inquiries — menu and info now self-serve online",
            "22% larger average party sizes — online booking removes hesitation for group reservations",
            "4.6/5 customer satisfaction rating established through testimonial module",
            "31% revenue boost attributed directly to the digital booking channel"
        ],
        whyDifferent: [
            "Luxury hospitality design language",
            "24/7 self-serve reservation system",
            "Mobile-first for dining audiences",
            "Open-source hospitality template",
            "Designed for premium brand perception"
        ],
        metrics: { PriceRange: "$1,000 – $2,500", Duration: "1–7 days", Industries: "Food & Beverage · Hospitality" },
        tags: ["Real-time", "Booking", "Hospitality"],
        liveUrl: "https://northking.vercel.app"
    },
    {
        slug: "carewell-dental",
        title: "Carewell Dental Clinic",
        category: "Web App",
        description: "A patient-friendly dental website with multi-step appointment booking for 100+ weekly patients",
        gradient: "from-pink-500/20 to-rose-500/20",
        role: "Product Design, UI/UX Design, Frontend Engineering",
        techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Google Maps API", "Vercel"],
        status: "Live (Real Users)",
        platform: "Web App",
        images: [
            "/projects/carewell-dental/screenshot1.png",
            "/projects/carewell-dental/screenshot2.png",
            "/projects/carewell-dental/screenshot3.png",
            "/projects/carewell-dental/screenshot4.png",
            "/projects/carewell-dental/screenshot5.png"
        ],
        overview: "Carewell Dental Clinic serves 100+ patients weekly — but was running entirely on manual phone scheduling, causing missed bookings, front-desk overload, and zero digital discoverability. NeosparkX designed and engineered a clean, medically trustworthy website that makes booking an appointment as frictionless as possible. With a multi-step booking wizard across 6 dental specialties, WCAG 2.1 accessibility compliance, automated confirmation emails, and a warm-but-clinical aesthetic, Carewell now operates a 24/7 patient acquisition channel. The result: 180% more online appointments, 55% fewer front-desk calls, and a #2 local search ranking — all from a platform patients actually trust.",
        problem: [
            "Phone-only scheduling caused missed bookings outside office hours",
            "Front desk staff handling 55%+ of their workload on inbound call management",
            "No online presence meant tech-savvy patients defaulting to competitor clinics",
            "No way to surface the clinic's 6 specialty services to prospective patients digitally",
            "Patient education resources scattered or nonexistent — trust gap with new visitors",
            "Zero data on appointment distribution, peak days, or service-level demand"
        ],
        solution: [
            "Multi-step booking wizard handles service selection, date, time, and patient details in one flow",
            "Automated email confirmations sent instantly — no manual follow-up from front desk",
            "WCAG 2.1 compliant design ensures accessibility for all patient demographics, including elderly",
            "Service categorization across 6 dental specialties improves discoverability and reduces inquiry friction",
            "Educational oral health content builds trust before a patient ever books",
            "Google Maps integration with one-tap mobile directions removes location friction for first visits"
        ],
        keyFeatures: [
            {
                title: "Multi-Step Booking Wizard",
                items: [
                    "Service → Date → Time → Patient details",
                    "Progress indicator",
                    "Mobile-thumb-friendly input"
                ]
            },
            {
                title: "6 Dental Specialty Categories",
                items: [
                    "General · Cosmetic · Orthodontics · Implants · Pediatric · Emergency",
                    "Each with dedicated description"
                ]
            },
            {
                title: "Automated Email Notifications",
                items: [
                    "Instant confirmation on booking",
                    "Appointment reminder before visit",
                    "Reduces no-shows and call volume"
                ]
            },
            {
                title: "Patient Testimonials",
                items: [
                    "Star-rated reviews",
                    "4.7/5 aggregate rating",
                    "Patient name and treatment type displayed"
                ]
            },
            {
                title: "Educational Content Sections",
                items: [
                    "Oral health tips and procedure explainers",
                    "Builds trust with first-time visitors",
                    "SEO-positive"
                ]
            },
            {
                title: "Google Maps Integration",
                items: [
                    "Embedded live map",
                    "Custom styling",
                    "Full contact block — phone, email, address, clinic hours"
                ]
            }
        ],
        designPhilosophy: [
            "Clean medical aesthetic — white base with warm pink accents communicating care and approachability",
            "Service-focused navigation with persistent CTAs — every page section leads back to booking",
            "High-quality clinic interior photography replacing generic stock — trust built through reality",
            "WCAG 2.1 compliance throughout — contrast ratios, focus states, and screen reader structure",
            "Framer Motion animations kept subtle and calm — medical contexts demand comfort, not spectacle",
            "Mobile-first booking flow — optimized for patients scheduling on the go between appointments"
        ],
        technicalHighlights: [
            "Next.js App Router with SSG — fast initial load, strong Core Web Vitals for healthcare SEO",
            "Multi-step form wizard with validated state management — no data loss between steps",
            "Google Maps API with custom map styling matching the clean clinic aesthetic",
            "TypeScript across full codebase — type-safe form handling, API contracts, and component props",
            "Framer Motion for entrance animations and step transitions within the booking wizard",
            "Open-source template on GitHub — reusable, rapid-deployment foundation for any healthcare provider"
        ],
        outcome: [
            "Carewell went from a phone-and-paper operation to a 24/7 patient acquisition system:",
            "180% increase in online appointments post-launch",
            "55% reduction in front-desk call volume — staff now focused on in-clinic care",
            "24/7 booking availability — patients book during evenings, weekends, and holidays",
            "4.7/5 patient satisfaction rating established via testimonial module",
            "Ranked #2 for local dental clinic searches within weeks of launch"
        ],
        whyDifferent: [
            "WCAG 2.1 accessibility compliant",
            "Multi-step booking wizard UX",
            "Medical trust-first design language",
            "6-specialty service architecture",
            "Open-source healthcare template"
        ],
        metrics: { PriceRange: "$600 – $800", Duration: "1–7 days", Industries: "Dental Care · Healthcare · Medical Services" },
        tags: ["Booking", "Healthcare", "Medical"],
        liveUrl: "https://carewelldental.vercel.app"
    },
    {
        slug: "nexus-commerce",
        title: "Nexus Commerce",
        category: "Web App",
        description: "A multi-vendor e-commerce platform built for real sellers and real buyers.",
        gradient: "from-lime-500/20 to-green-500/20",
        role: "Product Design, Full-Stack Development, Firebase Architecture, UI/UX Design",
        techStack: ["React 18", "TypeScript", "Vite", "Firebase", "TanStack Query", "Zustand", "Framer Motion"],
        status: "Live - All functions are working",
        platform: "Web App",
        images: [
            "/projects/nexus-commerce/screenshot1.png",
            "/projects/nexus-commerce/screenshot2.png",
            "/projects/nexus-commerce/screenshot3.png",
            "/projects/nexus-commerce/screenshot4.png",
            "/projects/nexus-commerce/screenshot5.png"
        ],
        overview: "Nexus Commerce is a full-featured multi-vendor e-commerce platform built to support both buyers and sellers within a single unified system. Unlike template-based storefronts, Nexus is purpose-built with a complete seller dashboard covering product management, inventory, discounts, reviews, and analytics — all powered by Firebase with real-time data. Customers get a premium shopping experience with URL-synced filters, wishlist, protected checkout with discount code validation, and a full order history with item-level detail. The platform follows a strict design system — Cabinet Grotesk / Instrument Sans typography, neon lime accent (#E8FF47), and an editorial dark aesthetic inspired by premium SaaS and luxury product brands.",
        problem: [
            "No unified multi-vendor platform with proper seller dashboards for indie sellers",
            "Existing products (Shopify, WooCommerce) are bloated and expensive for small merchants",
            "No role-based access (buyer ↔ seller switch) within a single account",
            "No real-time inventory management tied to actual order flow",
            "Discount code systems disconnected from order totals",
            "No live analytics for sellers — just static order lists"
        ],
        solution: [
            "Dual-role accounts: one account switches seamlessly between buyer and seller without re-authentication",
            "Role-based dashboards: seller dashboard only accessible after role assignment — no unauthorized access",
            "Firestore-backed real-time order, inventory, and analytics data — no mock/demo data",
            "Discount validation system: code lookup → expiry check → usage cap → min order → apply to total",
            "Inventory auto-decrements on each successful checkout",
            "Protected route architecture using <ProtectedRoute> — centralized auth gate across all sensitive flows"
        ],
        keyFeatures: [
            {
                title: "Dual-Role Accounts",
                items: [
                    "One account, two roles. Switch between buyer and seller instantly.",
                    "Role assignment via Firestore with live context refresh — no page reload."
                ]
            },
            {
                title: "Seller Dashboard",
                items: [
                    "Full suite: product CRUD with image uploads, inventory management, order tracking",
                    "Discount codes, review moderation, and analytics charts."
                ]
            },
            {
                title: "Real-Time Inventory",
                items: [
                    "Inventory decrements automatically on every completed checkout.",
                    "Inline editing available from the Seller Inventory panel."
                ]
            },
            {
                title: "Discount Code Engine",
                items: [
                    "Full validation: code lookup, expiry check, usage cap enforcement, minimum order requirement, percentage or fixed-amount types."
                ]
            },
            {
                title: "Protected Route Architecture",
                items: [
                    "Centralized <ProtectedRoute> wrapper on all customer and seller routes.",
                    "Seller-only guard requires isSeller || isAdmin role."
                ]
            },
            {
                title: "Mobile-First Design",
                items: [
                    "Fully responsive across all breakpoints.",
                    "Cart drawer, checkout, and seller dashboard optimized for touch with Framer Motion transitions."
                ]
            }
        ],
        designPhilosophy: [
            "Colors: Ink #0A0A0A, Paper #F5F4F0, Accent Lime #E8FF47, Accent Warm #FF4D1C",
            "Typography: Cabinet Grotesk (display) · Instrument Sans (body) · JetBrains Mono (mono/prices)",
            "Grid: 8pt spacing system, shadow scale, border radius scale",
            "Components: Radix primitives via shadcn/ui, custom design tokens, dark mode support",
            "Inspiration: Editorial premium (Harmony, Devialet) × functional density (Clexy, Mobile Universe)"
        ],
        technicalHighlights: [
            "Firebase Auth + Firestore + Storage with production security rules",
            "TanStack Query — 5min staleTime, 10min gcTime, queryClient.clear() on sign-out",
            "Zustand cart store with storeId in CartItem for multi-vendor checkout grouping",
            "Firestore composite indexes for wishlists, products, orders, discounts",
            "React Hook Form + Zod validation on all forms",
            "Error boundary, loading skeletons, 300ms debounced search",
            "Playwright + Vitest configured for E2E and unit testing"
        ],
        outcome: [
            "22 confirmed defects tracked, triaged, and resolved across 4 phases",
            "All foundation bugs fixed: user?.id → user?.uid in 3 hooks, role refresh, auth guard, cart grouping",
            "Full customer flow: browse → filter → wishlist → checkout with discount → order history",
            "Full seller flow: create store → manage products + inventory → process orders → review analytics",
            "Production-ready Firestore security rules and Storage rules deployed",
            "Demo product fallback for offline/empty Firestore state"
        ],
        whyDifferent: [
            "Multi-vendor architecture",
            "Real role-based access control",
            "Live inventory tied to orders",
            "Discount engine with validation",
            "Dual-role single account",
            "Production Firebase with expiring rules replaced"
        ],
        metrics: { PriceRange: "$800 – $1,500", Duration: "2–4 weeks", Industries: "E-commerce · Multi-vendor" },
        tags: ["E-commerce", "Firebase", "Live"],
        liveUrl: "https://nexus-drab-iota.vercel.app/"
    },
    {
        slug: "plumber-template",
        title: "Plumber Website Template",
        category: "Web App",
        description: "A modern, high-performance web template built for plumbing and home service businesses.",
        gradient: "from-blue-500/20 to-sky-500/20",
        role: "Full-Stack Developer / Web Developer",
        techStack: [
            "React 19",
            "TypeScript",
            "Vite",
            "Tailwind CSS v4",
            "TanStack Start",
            "TanStack Router",
            "TanStack Query",
            "Radix UI",
            "shadcn/ui",
            "Zod",
            "React Hook Form"
        ],
        platform: "Web Application / Website Template",
        images: [
            "/projects/plumber-template/Screenshot 2026-07-06 233136.png",
            "/projects/plumber-template/Screenshot 2026-07-06 233159.png",
            "/projects/plumber-template/Screenshot 2026-07-06 233209.png",
            "/projects/plumber-template/Screenshot 2026-07-06 233221.png"
        ],
        overview: "This project is a comprehensive and modern website template tailored specifically for plumbers and local service providers. Built with a focus on speed, SEO, and user experience, it provides a solid foundation for businesses to showcase their services, highlight customer reviews, and capture leads. The template includes dynamic pages for specific services and service areas, making it highly adaptable for localized marketing.",
        problem: [
            "Local service businesses often struggle with slow, outdated websites that are difficult to update and perform poorly on search engines, especially for specific service areas."
        ],
        solution: [
            "By leveraging TanStack Start and React 19, the template delivers lightning-fast, SEO-optimized pages. Dynamic routing for services (/services/$slug) and locations (/areas/$slug) allows businesses to easily scale their content and target local search queries effectively."
        ],
        keyFeatures: [
            {
                title: "Dynamic Service & Area Pages",
                items: ["Easily create and manage pages for specific plumbing services and coverage areas."]
            },
            {
                title: "Lead Generation",
                items: ["Integrated contact and inquiry forms with robust validation using Zod and React Hook Form."]
            },
            {
                title: "Social Proof",
                items: ["Dedicated sections for customer reviews and testimonials."]
            },
            {
                title: "SEO Optimized",
                items: ["Includes automated sitemap generation (sitemap.xml.ts) and structured metadata."]
            },
            {
                title: "Responsive Design",
                items: ["Fully mobile-optimized layout using Tailwind CSS to ensure a great experience on any device."]
            }
        ],
        designPhilosophy: [
            "The design philosophy centers around trust, clarity, and conversion. A professional, clean aesthetic is paired with highly visible calls-to-action (CTAs) to guide users toward booking a service. Utilizing shadcn/ui and Radix UI ensures that all interactive components are accessible, consistent, and intuitive."
        ],
        technicalHighlights: [
            "Modern React Ecosystem: Built on the bleeding edge using React 19 and TanStack Start for server-side capabilities and fast loading.",
            "Type-Safe Routing: Implements TanStack Router for 100% type-safe navigation and data fetching.",
            "Next-Gen Styling: Uses the newly released Tailwind CSS v4 for streamlined, utility-first styling.",
            "Component-Driven Architecture: Highly modular design utilizing shadcn/ui for reusable, customizable UI components."
        ],
        outcome: [
            "A production-ready, highly customizable website template that drastically reduces the time to market for web developers and agencies building sites for home service professionals, while providing a superior end-user experience."
        ],
        whyDifferent: [
            "Unlike traditional, monolithic themes (like standard WordPress templates), this project uses a modern, type-safe JavaScript stack. The combination of TanStack Start and Vite offers unmatched developer experience and performance, resulting in a site that is significantly faster, more secure, and easier to scale or customize over time."
        ],
        liveUrl: "https://meridian-plumber.vercel.app/",
        tags: ["Vite", "Tailwind v4", "TanStack"]
    },
    {
        slug: "ui-anatomy",
        title: "UI Anatomy",
        category: "Web App",
        description: "A premium UX research showcase website and admin management system analyzing real-world product interfaces.",
        gradient: "from-orange-600/20 to-amber-600/20",
        role: "Full-Stack Developer, UX Researcher, Database Administrator",
        techStack: [
            "Next.js 16 (App Router)",
            "React 19",
            "Supabase",
            "TailwindCSS 4",
            "TypeScript 5",
            "ReactMarkdown",
            "remark-gfm",
            "EmailJS"
        ],
        platform: "Web Application (UX Research Platform & Admin CMS)",
        images: [
            "/projects/ui-anatomy/uianatomy-casestudy.png",
            "/projects/ui-anatomy/uianatomy-dashboard.png",
            "/projects/ui-anatomy/uianatomy-newsletter.png",
            "/projects/ui-anatomy/uianatomy-footer.png"
        ],
        overview: "UI Anatomy is a premium UX research and analysis platform focused on dissecting the user experience and behavioral psychology of popular digital products (e.g., Duolingo, Spotify, Notion, Calm, and LinkedIn). The website functions as an educational library containing deep-dive case studies on user onboarding, engagement retention, monetization strategies, and ethical design patterns (including growth hacks and dark patterns).",
        problem: [
            "Standard product design case studies are often superficial, lack technical context, or are scattered across disparate static blogs. Content creators and researchers also lack an easy-to-use content management system (CMS) that gives them complete visual control over long-form markdown formatting, tables, and psychological analysis matrices without needing to redeploy code."
        ],
        solution: [
            "Developed a bespoke full-stack Next.js web application integrated directly with Supabase. For readers, the application delivers a premium, distraction-free typographic reading experience optimized for technical analysis. For administrators, it offers a secure, integrated workspace to write and manage case studies using standard Markdown, update database records dynamically, and manage subscribers—all styled cohesively within a modern, custom glassmorphic layout."
        ],
        keyFeatures: [
            {
                title: "Interactive Case Study Explorer",
                items: ["A lightning-fast, client-side searchable catalog with custom multi-tag filtering (e.g., Onboarding, Retention, Gamification, Ethics) to browse studies instantly."]
            },
            {
                title: "Typographically Optimized Markdown Reader",
                items: ["Detailed case study pages designed for readability (max-width of 70ch, 1.8 line-height) that compile Markdown documents into custom-styled HTML tables, lists, alerts, and inline code blocks."]
            },
            {
                title: "Secure Admin Panel & Dashboard",
                items: ["A protected space /admin displaying project metrics (total case studies, tag counts, and published rates) along with subscriber lists and CRUD tools."]
            },
            {
                title: "Dynamic Content Management Form",
                items: ["A rich, validated case study editor interface featuring Markdown preview support, tag tagging arrays, and slug generation."]
            },
            {
                title: "Automated Email Subscription",
                items: ["A footer newsletter form integrated directly with EmailJS to capture user interest and grow a community of UX practitioners."]
            }
        ],
        designPhilosophy: [
            "The UI follows a sleek, dark-themed \"design clinic\" aesthetic. It leverages a curated color scheme consisting of a deep background (#0F1113), clean neutral text colors (#F5F5F5 and #B8B8B8), and a vibrant orange accent (#F46D33). Bold, geometric headers styled in Manrope contrast with body paragraphs set in Inter. Modern glassmorphism properties (.glass), smooth transitions, and tactile hover states (.card-hover) are utilized throughout the interface to keep it feeling premium, fluid, and responsive."
        ],
        technicalHighlights: [
            "Modern Next.js 16 App Router: Structured using public/private route groups ((public)/, /admin, /login, /api) with optimized server-side rendering (SSR) and client-side hydration.",
            "Supabase Backend with Row Level Security (RLS): Employs Supabase's PostgreSQL database protected by strict RLS policies, ensuring public users have read-only access to published articles, while only authenticated admin users can perform write, edit, or delete operations.",
            "Client-Side Markdown Compilation: Combines ReactMarkdown and remark-gfm to parse markdown content directly on the page, rendering tables, blockquotes, and lists dynamically.",
            "React 19 & React Compiler: Built on the React 19 release candidate, using the Babel React Compiler plugin to automate component optimization and memoization.",
            "Modular Context Architecture: Separates application concerns into React Context providers (AuthContext.tsx for Supabase authentication state and CaseStudyContext.tsx for shared state data operations)."
        ],
        outcome: [
            "A fully operational, high-performance publishing hub that serves as a premium educational asset. The administrative workflow is fully decoupled from the deployment cycle, allowing researchers to write, edit, and publish content instantly. Readers receive a fast, beautifully rendered layout that represents the pinnacle of modern web aesthetics and usability."
        ],
        whyDifferent: [
            "Instead of relying on a standard WordPress site or Medium blog, UI Anatomy is built specifically to present design analysis. The site structure treats long-form text as a primary user interface element—blending markdown prose with interactive data tables, research breakdowns, and specific behavioral psychology categorization. The portfolio doesn't just discuss high-quality user experience; it lives it through its own implementation."
        ],
        liveUrl: "https://uianatomy.vercel.app/",
        tags: ["UX Research", "Next.js 16", "Supabase"]
    }
];
