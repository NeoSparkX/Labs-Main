# NSX Works Gallery — Full Implementation Plan
> Pillar Accordion Gallery for `neosparkx.com` Works Section  
> Target File: `src/components/WorksSection.tsx`  
> Stack: Vite + React 18 + TypeScript + Framer Motion v12 + Tailwind CSS v3

---

## 1. Executive Summary

We are replacing the current 2-column glass-panel grid in `WorksSection.tsx` with a **horizontal pillar accordion gallery** — a modern editorial UI pattern where project cards exist as narrow vertical pillars by default and **expand on hover** to reveal a full project thumbnail with a glassmorphic info overlay.

The template source is `D:\Website Templates\gallery feature`. The NSX adaptation:
- Ports the core pillar mechanic into the **existing Vite + React 18 codebase** (no framework change)
- Replaces pure CSS transitions with **Framer Motion** (already installed at v12.23.24) for tighter integration with the existing animation system on the site
- Wires into the **existing `projects[]` data array** at `src/data/projects.ts` (no new data layer needed)
- Uses the **existing NSX design tokens** from `src/index.css` (`--glass-panel`, `--glass-bg`, `--glass-border`, `--shadow-glow`, etc.)
- Adds a **custom cursor** that matches NSX's white/frosted aesthetic

---

## 2. Current State Analysis

### File: `src/components/WorksSection.tsx`
- **Pattern:** 2-column CSS Grid (`md:grid-cols-2`)
- **Card style:** `glass-panel rounded-2xl p-8 h-80 flex flex-col justify-between`
- **Animation:** Framer Motion `initial/whileInView` scroll reveals + `onHoverStart/onHoverEnd` for `y: -10, rotateY: 5` lift effect
- **Data:** `projects.slice(0, 4)` from `src/data/projects.ts`
- **Navigation:** Each card navigates to `/works/${project.slug}` on click
- **Gradient overlays:** Per-project `gradient` field used as bg on hover

### File: `src/data/projects.ts`
- Interface includes: `slug`, `title`, `category`, `description`, `gradient`, `images[]`, `liveUrl`, `tags[]`, `techStack[]`
- The `images[]` array holds paths like `/projects/peerhire/hero.png` — these are the thumbnails we'll use for the pillar gallery
- Current projects in array: PeerHire, + portfolio case studies

### Dependencies Already Available
```
framer-motion       ^12.23.24   ✅ Installed
tailwindcss         ^3.4.17     ✅ Installed
clsx                ^2.1.1      ✅ Installed
tailwind-merge      ^2.6.0      ✅ Installed
react-router-dom    ^6.30.1     ✅ Installed (for card click navigation)
lenis               ^1.3.17     ✅ Installed (smooth scroll, no conflict)
```

**Zero new `npm install` required.** Everything needed is already present.

---

## 3. Target State

### What We're Building

A full-width horizontal strip of **4 project pillar cards**:

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [PILLAR 1] [PILLAR 2] [PILLAR 3] [PILLAR 4]                            │
│   narrow     narrow     narrow     narrow       ← default (resting)      │
└──────────────────────────────────────────────────────────────────────────┘

                           ↕ hover PILLAR 2

┌──────────────────────────────────────────────────────────────────────────┐
│  [P1]  [═══════════════ PILLAR 2 ════════════════]  [P3]  [P4]          │
│  slim         expanded (shows image + overlay)        slim   slim        │
└──────────────────────────────────────────────────────────────────────────┘
```

**Resting state per pillar:**
- Narrow vertical bar (~180px min-width)
- Grayscale thumbnail image (full cover, dimmed)
- Project number + rotated category label in mono font
- No overlay, no details

**Hovered/Active state:**
- Expands to fill available space (flex ratio: 0.8 → 2.5)
- Image transitions to full color
- Glassmorphic info card slides up from bottom
- Info card contains: title, category, tech stack tags, year, CTA arrow
- Custom frosted cursor replaces system cursor inside the gallery zone

---

## 4. Architecture Decision Record

### ADR-001: Animation Engine — Framer Motion (not pure CSS)
**Decision:** Use Framer Motion for all animations.  
**Reasoning:** 
- The template used pure CSS flex transitions. That works, but the NSX site already uses Framer Motion extensively (`WorksSection`, `HeroSection`, `AboutSection`, etc.). Using CSS-only here would create an inconsistency in the animation philosophy.
- Framer Motion's `layout` prop handles flex-based accordion expansion with spring physics — no manual `cubic-bezier` strings needed.
- `AnimatePresence` handles the overlay mount/unmount gracefully.
- `useMotionValue` + `useSpring` will drive the custom cursor for buttery-smooth tracking.

**Trade-off:** Marginally heavier than pure CSS transitions. Acceptable given it's already in the bundle.

### ADR-002: Data Source — Existing `projects[]` Array
**Decision:** Consume `src/data/projects.ts` directly. No new data file.  
**Reasoning:** The data is already structured and used across the site. We need `title`, `category`, `images[0]` (hero thumbnail), `slug`, `techStack[]`, and optionally `tags[]`. All present.  
**Adaptation needed:** The current `projects[]` may not all have `images[]` filled in. We will add a `thumbnail` fallback field or populate `images[0]` per project.

### ADR-003: Project Images
**Decision:** Use static project images from projects pages according to the that project. when hovered, show image slideshow. 
**Reasoning:**
- NSX's 4 portfolio projects don't have screen-recording videos ready.
- Static images load instantly, zero layout shift, no autoplay policy issues.
- The visual impact of a full-bleed, high-quality project screenshot expanding on hover is already premium enough.

### ADR-004: Custom Cursor — Framer Motion + `useMotionValue`
**Decision:** Implement a custom frosted-glass cursor orb that activates inside the gallery zone.  
**Reasoning:** The template's RAF-based cursor is excellent for performance, but Framer Motion's `useMotionValue` + `useSpring` gives the same performance with a physics-based lag that feels premium. Matches NSX's existing animation language.

### ADR-005: Responsive Strategy — Mobile Fallback to Vertical Stack
**Decision:** Below `md` breakpoint (768px), the gallery falls back to a vertical card stack (similar to the current grid). The pillar pattern only activates on `md+`.  
**Reasoning:** Horizontal pillars are a desktop/laptop pattern. On mobile, they would be physically too narrow to read or interact with. The existing grid design already works well on mobile — we keep it.

### ADR-006: Scope — Replace `WorksSection` Content Only
**Decision:** Keep the section wrapper, heading, and "View All Projects" button. Replace only the card grid with the new gallery.  
**Reasoning:** The section heading animations (`initial/whileInView`) are already polished. No reason to rebuild them. Surgical replacement minimizes regression risk.

---

## 5. Component Architecture

```
src/
└── components/
    ├── WorksSection.tsx               ← MODIFIED (replace grid with <WorksGallery />)
    ├── works/
    │   ├── WorksGallery.tsx           ← NEW  (state orchestrator + layout wrapper)
    │   ├── PillarCard.tsx             ← NEW  (individual expandable pillar)
    │   └── GalleryCursor.tsx          ← NEW  (custom cursor orb, motion-powered)
```

---

## 6. Component Specifications

---

### 6.1 `WorksGallery.tsx` — State Orchestrator

**Responsibility:** Owns the `activeId` state. Renders the flex row. Manages cursor activation signal.

**State:**
```typescript
const [activeId, setActiveId] = useState<string | null>(null)
// string = project.slug of the currently hovered pillar
// null   = no pillar active (all in resting state)
```

**Props:** None (pulls data from `projects` import directly, slices first 4)

**Layout structure:**
```tsx
<section className="relative w-full overflow-hidden">
  <GalleryCursor isActive={activeId !== null} />
  <div className="flex gap-3 items-stretch px-4 md:px-8 lg:px-16">
    {featured.map((project) => (
      <PillarCard
        key={project.slug}
        project={project}
        isActive={activeId === project.slug}
        isAnyActive={activeId !== null}
        onEnter={() => setActiveId(project.slug)}
        onLeave={() => setActiveId(null)}
      />
    ))}
  </div>
</section>
```

**Height:** Fixed at `h-[580px]` (desktop). Cards stretch to fill.

---

### 6.2 `PillarCard.tsx` — The Pillar Unit

**Responsibility:** Renders a single project pillar. Handles all visual states (resting, active, dimmed-by-other).

**Props:**
```typescript
interface PillarCardProps {
  project: Project
  isActive: boolean          // this specific card is hovered
  isAnyActive: boolean       // any card in the gallery is hovered
  onEnter: () => void
  onLeave: () => void
}
```

**Framer Motion layout strategy:**

The flex expansion is driven by a CSS custom property + Framer Motion `animate`:

```tsx
<motion.div
  layout                          // Framer handles the flex reflow smoothly
  animate={{
    flexGrow: isActive ? 2.5 : isAnyActive ? 0.5 : 0.8,
    opacity: isAnyActive && !isActive ? 0.75 : 1,
  }}
  transition={{
    layout: { type: "spring", stiffness: 300, damping: 35 },
    opacity: { duration: 0.3 },
    flexGrow: { type: "spring", stiffness: 300, damping: 35 },
  }}
  style={{ minWidth: "140px", cursor: "none" }}
  onMouseEnter={onEnter}
  onMouseLeave={onLeave}
  className="relative rounded-[2rem] overflow-hidden h-full"
>
```

**Internal layer stack (all `absolute inset-0`):**

```
Layer 0: Thumbnail <img>            always mounted
Layer 1: Grayscale + dim overlay    opacity 1 when !isActive, opacity 0 when isActive
Layer 2: Resting label strip        (rotated category + project number) visible when !isActive
Layer 3: Active overlay             AnimatePresence — mounts only when isActive
```

**Layer 0 — Thumbnail:**
```tsx
<img
  src={project.images?.[0] ?? "/placeholder.svg"}
  alt={project.title}
  className="absolute inset-0 w-full h-full object-cover"
/>
```

**Layer 1 — Grayscale/dim overlay:**
```tsx
<motion.div
  animate={{
    opacity: isActive ? 0 : 1,
    filter: isActive ? "grayscale(0%) brightness(100%)" : "grayscale(100%) brightness(60%)",
  }}
  transition={{ duration: 0.5 }}
  className="absolute inset-0 w-full h-full"
  style={{ backdropFilter: "none" }}
/>
// Note: filter applied to <img> directly is cleaner (see implementation detail)
```

Actually applied directly to the img tag via motion.img:
```tsx
<motion.img
  src={project.images?.[0] ?? "/placeholder.svg"}
  alt={project.title}
  className="absolute inset-0 w-full h-full object-cover"
  animate={{
    filter: isActive
      ? "grayscale(0%) brightness(100%)"
      : "grayscale(100%) brightness(55%)",
  }}
  transition={{ duration: 0.6 }}
/>
```

**Layer 2 — Resting label (vertical text):**
```tsx
// Only visible when !isActive and !isAnyActive (clean resting state)
<motion.div
  animate={{ opacity: isActive ? 0 : 1 }}
  transition={{ duration: 0.3 }}
  className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2"
>
  <span className="font-mono text-xs tracking-[0.25em] text-white/40 uppercase"
    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
  >
    {project.category}
  </span>
  <span className="font-mono text-xs text-white/20">
    {String(index + 1).padStart(2, "0")}
  </span>
</motion.div>
```

**Layer 3 — Active overlay (AnimatePresence):**
```tsx
<AnimatePresence>
  {isActive && (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0"
    >
      {/* Gradient scrim — bottom 50% dark fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Info card — slides up from bottom */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 16, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute bottom-0 left-0 right-0 p-6"
      >
        <div className="
          backdrop-blur-xl
          bg-white/5
          border border-white/10
          rounded-2xl
          p-5
          shadow-2xl
        ">
          {/* Category badge */}
          <span className="inline-block px-2 py-0.5 rounded-full bg-white/10 
                           text-white/70 font-mono text-[10px] tracking-[0.2em] 
                           uppercase mb-3">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="font-bold text-white text-lg leading-tight mb-2 
                         tracking-tight font-['Space_Grotesk']">
            {project.title}
          </h3>

          {/* Description — 1 line truncated */}
          <p className="text-white/60 text-xs font-mono leading-relaxed mb-3 
                        line-clamp-2">
            {project.description}
          </p>

          {/* Tech tags */}
          {project.techStack && (
            <div className="flex flex-wrap gap-1 mb-4">
              {project.techStack.slice(0, 3).map((tech) => (
                <span key={tech}
                  className="text-[10px] font-mono text-white/40 
                             border border-white/10 rounded-full px-2 py-0.5">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Separator + CTA */}
          <div className="flex items-center justify-between 
                          border-t border-white/10 pt-3">
            <span className="font-mono text-[10px] text-white/30 tracking-widest">
              {new Date().getFullYear()}
            </span>
            <span className="font-mono text-xs text-white/70 
                             flex items-center gap-1 group-hover:gap-2 transition-all">
              View Case Study
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
```

**Click handler** (navigate to case study):
```tsx
onClick={() => {
  navigate(`/works/${project.slug}`)
  window.scrollTo(0, 0)
}}
```

---

### 6.3 `GalleryCursor.tsx` — Custom Cursor Orb

**Responsibility:** A frosted-white orb that follows the mouse, activates only when hovering the gallery zone.

**Why Framer Motion here:** `useMotionValue` + `useSpring` gives a physics-based lag (stiffness: 500, damping: 40) that feels like the cursor has weight — more premium than RAF snapping.

```typescript
const mouseX = useMotionValue(-100)
const mouseY = useMotionValue(-100)

const springX = useSpring(mouseX, { stiffness: 500, damping: 40 })
const springY = useSpring(mouseY, { stiffness: 500, damping: 40 })

useEffect(() => {
  const move = (e: MouseEvent) => {
    mouseX.set(e.clientX - 12)
    mouseY.set(e.clientY - 12)
  }
  window.addEventListener("mousemove", move)
  return () => window.removeEventListener("mousemove", move)
}, [])
```

**Render:**
```tsx
<motion.div
  className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]
             bg-white/80 shadow-lg shadow-white/20 will-change-transform"
  style={{ x: springX, y: springY }}
  animate={{ opacity: isActive ? 1 : 0 }}
  transition={{ opacity: { duration: 0.2 } }}
/>
```

---

## 7. NSX Design System Integration

All styling maps to **existing** CSS tokens from `src/index.css`:

| Token | Value | Used For |
|---|---|---|
| `--glass-bg` | `hsl(220 15% 10%)` | Overlay card bg base |
| `--glass-border` | `hsl(0 0% 25%)` | Overlay card border |
| `--glass-blur` | `blur(20px)` | Overlay backdrop filter |
| `--shadow-glow` | `0 0 40px hsl(white/0.1)` | Active card glow |
| `--glow-white` | `hsl(0 0% 100%)` | Cursor color |
| `--frosted-white` | `hsl(0 0% 93%)` | Title text |
| Space Grotesk | font-family | Card title |
| Monospace (Inter mono) | font-family | Category, labels, tags |

**No new design tokens required.**

---

## 8. Data Layer Adaptation

### Current `Project` interface fields we consume:

```typescript
project.slug          // → navigate(`/works/${slug}`) on click
project.title         // → card title in overlay
project.category      // → badge + vertical resting label
project.description   // → subtitle line in overlay
project.techStack     // → tech tags (first 3)
project.images[0]     // → thumbnail (full cover image)
```

### Action Required — Populate `images[]` per project:

The 4 featured projects need `images[0]` set to a high-quality thumbnail.  
Suggested mapping:

| Slug | `images[0]` path | Source |
|---|---|---|
| `enterprise-analytics` | `/projects/analytics/hero.png` | Figma export / screenshot |
| `uhfc-sports-complex` | `/projects/uhfc/hero.png` | Figma export / screenshot |
| `north-king-restaurant` | `/projects/northking/hero.png` | Figma export / screenshot |
| `carewell-dental` | `/projects/carewell/hero.png` | Figma export / screenshot |

All images go in `public/projects/<slug>/hero.png`.  
**Recommended size:** 1200×1800px (portrait, vertical card fill)  
**Format:** WebP preferred (quality 85), JPEG fallback

---

## 9. Responsive Strategy

### Desktop (≥ 1024px) — Full Pillar Gallery
```
flex-row | gap-3 | h-[580px] | min-w-[140px] per pillar
```
All 4 pillars visible side by side. Hover expansion active.

### Tablet (768px–1023px) — Reduced Pillar Gallery  
```
flex-row | gap-2 | h-[460px] | min-w-[100px] per pillar
```
Same pattern, smaller scale. Hover still works via touch-equivalent.

### Mobile (< 768px) — Vertical Stack Fallback
```
flex-col | gap-4 | each card: aspect-[4/3] | full width
```
Cards stack vertically. Static image (color, no grayscale). Tap to navigate.  
No custom cursor on mobile. Overlay always partially visible.

**Implementation:** Tailwind responsive classes + a `useMediaQuery("(min-width: 768px)")` hook to conditionally render `GalleryCursor`.

---

## 10. Performance Considerations

| Concern | Mitigation |
|---|---|
| Image loading causing layout shift | `width` + `height` attributes on `<img>`, `object-cover` |
| Large hero images | Use WebP, max 300KB per image at 1200×1800 |
| Framer Motion bundle | Already in bundle — no additional cost |
| Cursor jank | `will-change: transform` on cursor div, `useMotionValue` skips React render cycle |
| Filter transitions (grayscale) | GPU-accelerated on all modern browsers, `will-change: filter` on `<motion.img>` |
| `AnimatePresence` mount/unmount | Only the overlay mounts — `<img>` always stays mounted, no flicker |
| Flex reflow during animation | Framer `layout` uses `transform: scaleX` under the hood — no actual reflow |

---

## 11. Full File Structure

```
src/
├── components/
│   ├── WorksSection.tsx                ← MODIFIED
│   └── works/
│       ├── WorksGallery.tsx            ← NEW
│       ├── PillarCard.tsx              ← NEW
│       └── GalleryCursor.tsx           ← NEW
├── data/
│   └── projects.ts                     ← MODIFIED (add images[] per project)
├── hooks/
│   └── useMediaQuery.ts                ← NEW (or reuse existing if present)
└── public/
    └── projects/
        ├── analytics/
        │   └── hero.png (or .webp)     ← ADD
        ├── uhfc/
        │   └── hero.png                ← ADD
        ├── northking/
        │   └── hero.png                ← ADD
        └── carewell/
            └── hero.png                ← ADD
```

---

## 12. WorksSection.tsx Migration Plan

### Step 1 — Preserve existing section wrapper and heading

Keep this untouched:
```tsx
<section id="works" className="py-32 relative overflow-hidden">
  <div className="container mx-auto px-4">
    <motion.div ...>  {/* heading + "View All Projects" button */}
      ...
    </motion.div>

    {/* ↓ REPLACE THIS BLOCK ↓ */}
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      ...old cards...
    </div>
    {/* ↑ WITH ↑ */}
    <WorksGallery />

  </div>
</section>
```

### Step 2 — Remove from WorksSection.tsx
- The `useState(hoveredIndex)` — state moves into `WorksGallery`
- The `map` over `featuredProjects` — moves into `WorksGallery`
- The `motion.div` card JSX — replaced by `PillarCard`
- The `gradient` overlay logic — not needed (we use image thumbnails)

### Step 3 — Add import
```tsx
import { WorksGallery } from "./works/WorksGallery"
```

---


## 14. Accessibility Checklist

- [ ] Each `PillarCard` has `role="button"` + `tabIndex={0}`
- [ ] `onKeyDown` handler: Enter/Space triggers navigation (same as click)
- [ ] `aria-label` on each card: `"View ${project.title} case study"`
- [ ] Image `alt` text: `${project.title} project thumbnail`
- [ ] `prefers-reduced-motion`: Wrap all `animate` props with `useReducedMotion()` hook — fall back to instant opacity change, no position/scale animation
- [ ] Custom cursor: hidden from screen readers (cursor is decorative)
- [ ] Contrast: white text on dark-blurred glass overlay meets WCAG AA at all blur levels

---

## 15. Optional Enhancements (Post-Launch)

| Enhancement | Complexity | Priority |
|---|---|---|
| Video per card (autoplay on hover, muted) | Medium | Low |
| Neon accent glow on active card border | Low | Medium |
| Project count badge on resting pillar | Low | High |
| Keyboard arrow key navigation between pillars | Low | Medium |
| Touch/swipe support on mobile (replace vertical stack) | High | Low |
| "WORKS" vertical text on section left edge | Low | High |
| Stagger entrance animation when section scrolls into view | Low | High |

---

## 16. Dependencies Audit

| Package | Version | Status | Purpose |
|---|---|---|---|
| `framer-motion` | ^12.23.24 | ✅ Installed | All animations |
| `tailwindcss` | ^3.4.17 | ✅ Installed | Layout + utilities |
| `clsx` | ^2.1.1 | ✅ Installed | Conditional classes |
| `tailwind-merge` | ^2.6.0 | ✅ Installed | Class merging |
| `react-router-dom` | ^6.30.1 | ✅ Installed | Card click navigation |
| `lucide-react` | ^0.462.0 | ✅ Installed | Optional arrow icon |
| No new packages | — | ✅ | Zero `npm install` needed |

---

## 17. Key Design Decisions Summary

| Decision | Choice | Reason |
|---|---|---|
| Animation engine | Framer Motion (not pure CSS) | Already in bundle, physics springs, AnimatePresence |
| Media type | Image only | No videos ready, faster, cleaner |
| Data source | Existing `projects.ts` | No duplicate data, single source of truth |
| Cursor | Framer `useSpring` (not RAF) | Consistent with NSX animation language |
| Mobile | Vertical stack fallback | Pillar pattern is desktop-only UX |
| Scope | Replace grid block only | Minimize regression, keep heading animations |
| Image orientation | Portrait 1200×1800px | Fills tall card column naturally |
| Card corner radius | `rounded-[2rem]` | Matches template; softer than NSX's current `rounded-2xl` |

---