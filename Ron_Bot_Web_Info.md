# Ron Bot Web App (Next.js Hub)

**Sub Heading:** A high-performance, dark-themed pre-order storefront and administrative dashboard for the AI-powered Ron Bot companion.

**Role:** Lead Developer, Full Stack Developer, UI/UX Designer  
**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Radix UI, shadcn/ui, Supabase (Auth, Database, Storage, Realtime, Phoenix Channels), PostgreSQL, Resend, React Email, Recharts, Zustand  
**Platform:** Web App  

## Overview
The Ron Bot Web App (Next.js Hub) is the digital storefront, user pre-order platform, and administrative command center for the Ron Bot ecosystem. Built with Next.js 16 (App Router), React 19, and Supabase, it provides customers with an interactive, motion-rich experience to learn about, compare, and pre-order different Ron Bot models (Classic, Keychain, Ultra). 

Behind the scenes, the web application runs completely serverless, leveraging a PostgreSQL database on Supabase and integrating localized Bangladeshi payment wallets (RupantorPay) via an Android SMS APK relay. Authenticated users can manage their orders and register their physical devices in a personalized dashboard, while administrators can track waitlists, send batch templated updates using React Email and Resend, configure inventory, and view analytics charts built with Recharts.

## The Problems and Solutions
**Problem:** 
- **Payment Gateway Idempotency & Redirect Race Conditions:** In localized payment workflows like RupantorPay (an Android APK relay parsing bKash/Nagad bank SMS notifications), timing delays and concurrent callback notifications from browser redirect success and server webhooks can cause duplicate order records, double charging, and incorrect inventory depletion.
- **Server Overheads for Realtime Telemetry/Controls:** Connecting physical microcontrollers to web applications normally requires maintaining a persistent Express or Node.js WebSocket relay server, leading to scaling difficulties, high infrastructure costs, and latency.
- **Role-Based Security & Middleware Protection:** Gating administrative paths and protecting sensitive dashboards from unauthenticated users in a serverless, client-heavy architecture without introducing routing latency.

**Solution:** 
- **Database-Level Unique Constraint Guard:** Enforced a `UNIQUE` constraint on `rupantor_transaction_id` in the PostgreSQL `orders` table. Any concurrent write attempt from a duplicate callback is rejected at the database level. Next.js routes implement dual validation hooks (immediate client checkout success redirect check + server-to-server webhook endpoint returning `200 OK`) to safely handle purchase completions.
- **Serverless Direct Supabase Realtime Integration:** Bypassed custom backend server relays by using Supabase Realtime channels. The web app communicates directly with physical ESP32 bots using SSL-secured Phoenix WebSocket channels (`wss://`), syncing task matrix states and command queues with zero server infrastructure overhead.
- **JWT Middleware Session Verification:** Implemented `middleware.ts` to intercept Next.js routes. It decodes and validates the client's JWT session token against Supabase Auth, gating `/dashboard` and restricting `/admin` routes based on user roles configured in a triggered `profiles` table.

## Key Features
- **Bento-Style Storefront & Product Configurator:** A beautiful dark glassmorphic landing page featuring fluid typography, specs comparison tables, product detail pages, and an interactive FAQ deck.
- **RupantorPay Wallet Checkout:** Integrated support for Bangladeshi local payment options (bKash, Nagad, Rocket) with whole-integer BDT pricing to avoid floating-point rounding errors.
- **Unified User Dashboard:** A private dashboard for registered customers to track shipping stages (`Confirmed` ➔ `Processing` ➔ `Shipped` ➔ `Delivered`), update their profile avatars (stored in a gated Supabase bucket with RLS), and register their physical devices using unique hardware serial numbers.
- **Unified Admin Console (`/admin`):** A comprehensive administrative dashboard featuring Recharts analytics panels (pre-orders, gross revenue, user growth), inventory toggles (`preorder_open`, `is_listed`), and a waitlist queue.
- **Waitlist Batch Mailer:** An automated client notifier powered by Resend and React Email, enabling admins to dispatch beautifully styled email updates to waitlisted users with a single click.

## Design Philosophy
- **Dark Glassmorphism:** Translucent panels, blur backdrops, soft white and silver glow accents, and precise geometric layout lines (Space Grotesk font styling) that feel premium and modern.
- **Micro-interactions:** Seamless transitions, hover state changes, dynamic charts, and live order status tracker steps to make the experience feel highly responsive and polished.
- **Symmetric Bento Grid Layout:** Clean grid systems grouping metrics and features logically, optimizing user onboarding and checkout flows.

## Technical Highlights
- **Serverless Architecture:** A 100% serverless hosting structure on Next.js/Vercel and Supabase, removing the need for a separate API backend.
- **PostgreSQL RLS (Row Level Security):** Fine-grained data access control on `profiles`, `orders`, and `devices` tables, ensuring users can only read/write their own records while admins have global read/write access.
- **React Email templates & Resend integration:** Programmatic compilation and delivery of transactional emails without SMTP server dependencies.
- **Recharts Data Binding:** Live mapping of PostgreSQL aggregations onto interactive SVG graphs.

## Project Outcome
- Deployed a fully functional, highly secure, and aesthetically striking e-commerce pre-order storefront and device manager.
- Mitigated payment duplication errors completely by implementing database-level transaction guards.
- Established a serverless realtime connection system capable of sending direct intents and task checklists to hardware companions.

## What Makes it Different
It is not just a static catalog or marketing page; it is a fully integrated portal that interfaces directly with physical hardware. By combining serverless Supabase Realtime channels with localized wallet integrations and robust PostgreSQL transaction controls, the web app functions as a low-latency administrative console and storefront in one. It bridges the gap between hardware telemetry and web dashboards with zero server overhead.
