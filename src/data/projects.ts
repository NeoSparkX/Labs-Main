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
    }
];
