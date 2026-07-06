# Ron Bot (AI-Powered Desk Companion)

**Sub Heading:** An interactive, AI-powered desktop companion robot with dual-transport synchronization, localized sensory interfaces, and real-time cloud management.

**Role:** Lead Developer, Hardware Prototyper, Firmware Engineer, Full Stack Developer, Mobile App Developer  
**Tech Stack:** C++, ESP32, Flutter, Dart, Next.js 16, TypeScript, Supabase, PostgreSQL, WebSockets, Phoenix Channels, Room DB, Kotlin  
**Platform:** Hardware (ESP32 Firmware), Windows Desktop App (Flutter), Android Mobile App (Flutter), Web App (Next.js Storefront)  

## Overview
Ron Bot (internal codename **Ron**) is a consumer hardware product featuring an AI-powered physical desktop companion robot. The product ecosystem communicates directly via localized peer-to-peer protocols and a cloud-assisted realtime broadcast system, completely bypassing intermediary server relays.

The physical robot runs a robust, low-latency firmware written in C++ on an **ESP32 microcontroller**, integrating multiple local sensors, auditory buzzer engines, memory storage, and full WiFi networking capabilities. It interacts with users via a potentiometer-driven 7-page display system (Expressive RoboEyes, Weather Dashboard, Retro Flip-Clock, Pomodoro Timer, Tasks Screen, System Settings, and WiFi QR Pairing) and capacitive touch.

The software layer consists of two client companion apps: a native **Flutter Windows Desktop Application** acting as the cockpit for the bot, and a portrait-locked **Flutter Android Mobile Application** with a redesigned Material 3 navigation shell. Both apps implement a Smart Connection Router with dual-transport sync (switching between local WebSockets and Supabase Realtime channels) and open-ended chatbot sessions via OpenRouter AI.

Additionally, a Next.js 16 storefront provides pre-ordering, waitlisting, and transactional administration, running completely serverless with a Supabase cloud database backend and localized Bangladeshi wallet payment integrations (RupantorPay).

## The Problems and Solutions
**Problem:** 
- **Complex Local & Remote Connectivity:** Microcontrollers usually require cloud servers for remote access, which introduces latency and operational overhead. Local offline sync is difficult to establish robustly alongside cloud channels.
- **Hardened Media Upload Constraints:** Microcontroller display hardware (like ESP32 ST7789 TFT screen) has strict LittleFS filesystem limits (~1–2MB) and decoders that cannot support raw high-res or high-fps GIFs/images.
- **Screen Jitter from Potentiometers:** Analog rotary potentiometers suffer from voltage noise, causing the display pages to rapidly flicker or jitter between selections.
- **Payment Idempotency & Redirect Collisions:** Bangladeshi local payment gateways (bKash/Nagad/Rocket via RupantorPay APK) suffer from timing delays and callback race conditions between the browser success page redirect and server webhook calls, leading to duplicate orders.

**Solution:** 
- **Smart Connection Router:** Designed a dual-transport sync system. The companion app attempts a direct handshake over local WebSocket (`ws://ronbot.local/ws`) with a 1.5s timeout. If successful, commands and files stream locally with zero lag. If offline locally, it falls back to SSL Cloud Broadcasts using Supabase's Phoenix WebSocket protocol. A background loop queries local availability every 30s to restore peer-to-peer sync.
- **Media Processing Pipeline (Hologram Deck):** Built a media optimization system on the companion applications. Large image and GIF files are resized dynamically to ≤240×240, frame rates are normalized to a 15fps cap (67ms min delay), and static images are converted to single-frame GIFs. Files are transferred chunk-by-chunk via WebSockets with an automatic retry block (3 attempts with exponential backoff) and base64 encoding to prevent corruption.
- **Hysteresis Filter on ESP32:** Implemented a software-based hysteresis filter (60 raw units threshold) on the ESP32 firmware. This stabilizes the reading, allowing the user to smoothly switch pages without screen vibration.
- **Database-Level Unique Constraint:** Enforced database-level unique constraints (`rupantor_transaction_id`) inside the PostgreSQL `orders` table. Any simultaneous write is aborted at the database layer, securing payment integrity, while Next.js routes use double confirmation hooks to handle user landing and server webhooks securely.

## Key Features
- **7-Page Display System:** A 280×240 TFT color display running optimized `TFT_eSPI` driver with a potentiometer dial for page flipping (Expressive RoboEyes, Weather Dashboard, Retro Flip-Clock, Pomodoro Timer, Tasks Screen, System Settings, and WiFi QR Pairing).
- **Sensory & Haptic Interactions:** Top capacitive touch sensor (GPIO 27) tracks tap inputs (happy mood/chimes) and rapid pats (overrides into an angry mood with screen horizontal jitter and annoyance chirps), resetting to idle coordinates after a cool-down timer.
- **Dynamic Task & Pomodoro Sync:** Interactive To-Do list (up to 4 items) and Pomodoro focus timers synced in real-time between ESP32 hardware and companion applications, triggering buzzer chimes (eureka/alarm sirens) at deadlines.
- **OpenRouter AI Chatbot:** Context-aware assistant injecting bot telemetry (temperature, current task, active page, mood) into LLM system prompts, utilizing a resilient 5-model failover engine with auto-cooldowns (Llama-3.2, Phi-3, Gemma-2, Qwen-2.5, Mistral-7B).
- **Bento-style Dashboards:** Beautiful, height-locked dashboard apps for Windows Desktop and Android Mobile with clean grids, transparent glassmorphism widgets, and portrait-oriented bottom navigations.
- **E-Commerce & Admin Hub:** Next.js storefront for waitlisting and pre-ordering, integrated with RupantorPay wallet checkout, featuring interactive Recharts analytics graphs, waitlist email mailers (via Resend/React Email), and inventory management.

## Design Philosophy
- **Aesthetics & Micro-interactions:** Glassmorphism themed layouts with heavy backdrop filters, translucent panels, and subtle borders. High-pitch non-blocking audio chimes and expressive eye animations (11 states) bring the hardware to life.
- **Interruption & Friction-Based Feedback:** Incorporates mindful friction (such as manual clock potentiometer edits, touch overrides) and clear visual status indicators (online status dots, sync badges).
- **Platform-Optimized Design:** Clean geometric headers (Space Grotesk) and architectural layouts on desktop, transitioning to smooth vertical sliver scrolls and touch-friendly bottom sheets on mobile.

## Technical Highlights
- **Dual-Transport Phoenix & WS Client:** Direct C++ implementation on ESP32 of SSL WebSocket handshakes with Supabase Realtime using Phoenix serialization, keeping connections alive with 30s heartbeats.
- **Chunked Base64 Media Transfer:** Custom binary-to-chunk file streaming over local peer WebSockets with verification logic and ESP32 LittleFS flash writes.
- **Non-Blocking Tone Generation Frequencies:** ESP32 audio queue scheduler running chimes on dedicated ticks to ensure the main UI rendering thread never stutters during chimes.
- **Local DPAPI & Android Keystore Security:** Secure credential storage utilizing Windows Data Protection API (DPAPI) and Android `encryptedSharedPreferences` to safehouse API tokens.

## Project Outcome
- Successfully designed, programmed, and prototyped a fully functional AI-powered physical desktop bot with localized sensor systems and non-blocking buzzer engines.
- Created robust, premium desktop (Windows) and mobile (Android) companion apps featuring real-time telemetry streaming, file uploads, and contextual AI chat capabilities.
- Deployed a secure, transactionally idempotent pre-order storefront with Bangladeshi payment support, comprehensive admin charts, and role-based access middleware.

## What Makes it Different
It treats the product ecosystem as a unified, peer-to-peer cloud-assisted canvas rather than a disconnected set of apps and gadgets. Rather than relying on heavy server infrastructure, Ron Bot directly coordinates local WebSockets and cloud Realtime broadcast networks. With its resilient multi-model failover chatbot engine, interactive sensory feedback, and dedicated hardware integration, it feels like an organic, living desktop companion.
