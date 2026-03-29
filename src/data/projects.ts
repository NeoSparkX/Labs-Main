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
        category: "Web App / SaaS",
        description: "A real-time business intelligence platform for data-driven decision making",
        gradient: "from-zinc-500/20 to-blue-500/20",
        role: "Product Design, UI/UX Design, Frontend Engineering, Backend Architecture",
        techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Recharts", "TailwindCSS", "Prisma"],
        status: "Live (Real Users)",
        platform: "Web App / SaaS",
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
    }
];
