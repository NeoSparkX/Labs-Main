# Campaign Architecture — Main Site (neosparkx.com)
## Spark10 Free Client Campaign

**Project:** `Neura-Labs-Main` (Vite + React 18 + react-router-dom v6)
**Deployment:** Vercel
**Firebase Role:** Client SDK — public write to Firestore only

---

## Summary of Changes

This document covers every addition and change needed on the **main site only**.
The main site is a pure client-side Vite SPA with no server/API layer.
All new campaign functionality is added as new routes and components — zero changes to existing pages.

---

## 1. New Dependency

Add to `package.json`:

```json
"firebase": "^10.x.x"
```

Install:

```bash
bun add firebase
```

> Firebase Client SDK is used directly for the campaign form submission.

---

## 2. New Environment Variables

Add to `.env` (and `.env.example`):

```env
# Firebase Client SDK — safe to expose publicly
# Get these from: Firebase Console → dashboard-neosparkx → Project Settings → Your Apps → Web App
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=dashboard-neosparkx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=dashboard-neosparkx
VITE_FIREBASE_APP_ID=

# Campaign config
VITE_CAMPAIGN_ID=spark10-2026
VITE_CAMPAIGN_TOTAL_SLOTS=10
```

> These are public credentials — Firebase is designed for this.
> Security is enforced by Firestore Security Rules on the Firebase project side, not by hiding these keys.

---

## 3. New File Structure

All additions are inside `src/`. Nothing existing is modified.

```
src/
├── lib/
│   └── firebase/
│       └── client.ts              ← NEW: Firebase client SDK initializer
│
├── pages/
│   ├── Index.tsx                  (existing — untouched)
│   ├── Works.tsx                  (existing — untouched)
│   ├── ProjectDetail.tsx          (existing — untouched)
│   ├── Privacy.tsx                (existing — untouched)
│   ├── NotFound.tsx               (existing — untouched)
│   ├── Campaign.tsx               ← NEW: Campaign landing page
│   ├── CampaignApply.tsx          ← NEW: Multi-step application form
│   ├── CampaignSuccess.tsx        ← NEW: Post-submission confirmation
│   └── CampaignTerms.tsx          ← NEW: Full campaign T&C page
│
└── components/
    ├── (all existing components — untouched)
    └── campaign/                  ← NEW folder
        ├── index.ts               ← barrel export
        ├── CampaignHero.tsx
        ├── CampaignWhatYouGet.tsx
        ├── CampaignHowItWorks.tsx
        ├── CampaignSlotCounter.tsx
        ├── CampaignPortfolioPreview.tsx
        ├── CampaignTermsSummary.tsx
        ├── CampaignCTABanner.tsx
        └── form/
            ├── CampaignFormShell.tsx  ← step state manager + progress bar
            ├── StepOne.tsx            ← About You
            ├── StepTwo.tsx            ← Your Project
            ├── StepThree.tsx          ← Agreement + Submit
            └── schema.ts              ← Zod validation schemas for all 3 steps
```

---

## 4. Route Changes — `src/App.tsx`

**Only addition** — 4 new routes appended before the `*` catch-all:

```tsx
// Add these imports:
import Campaign        from "./pages/Campaign";
import CampaignApply  from "./pages/CampaignApply";
import CampaignSuccess from "./pages/CampaignSuccess";
import CampaignTerms  from "./pages/CampaignTerms";

// Add these routes inside <Routes> before the "*" route:
<Route path="/campaign"         element={<Campaign />} />
<Route path="/campaign/apply"   element={<CampaignApply />} />
<Route path="/campaign/success" element={<CampaignSuccess />} />
<Route path="/campaign/terms"   element={<CampaignTerms />} />
```

Existing routes are **not touched**.

---

## 5. Firebase Client Setup

**`src/lib/firebase/client.ts`** — new file:

```ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore }           from "firebase/firestore";

const firebaseConfig = {
  apiKey:    import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId:     import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

---

## 6. Firestore Collection Written by Main Site

Collection name: **`campaign_applications`**

Schema of each document written on form submit:

```ts
{
  // Meta
  campaign_id:   string,    // "spark10-2026" from VITE_CAMPAIGN_ID
  status:        "pending", // always "pending" on creation
  submitted_at:  Timestamp, // serverTimestamp()
  agreed_at:     Timestamp, // serverTimestamp()

  // Step 1 — About You
  full_name:      string,
  email:          string,
  phone:          string,
  business_name:  string,
  business_type:  string,   // dropdown selection
  website:        string | null,
  social_link:    string | null,
  location:       string,
  referral_source: string,  // "Facebook" | "WhatsApp" | "Instagram" | "Direct" | "Other"

  // Step 2 — Project
  service_types:        string[],  // ["Web Dev", "UI/UX", ...]
  project_brief:        string,    // 100–500 chars
  has_existing_brand:   boolean,
  timeline:             string,    // "ASAP" | "2 Weeks" | "1 Month" | "Flexible"
  reference_links:      string | null,

  // Step 3 — Agreement
  agreed_to_terms: true,           // must be true, enforced by Zod + Firestore Rules
}
```

**Submit logic** (inside `StepThree.tsx`):

```ts
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/client";

const docRef = await addDoc(collection(db, "campaign_applications"), {
  ...formData,
  campaign_id:  import.meta.env.VITE_CAMPAIGN_ID,
  status:       "pending",
  submitted_at: serverTimestamp(),
  agreed_at:    serverTimestamp(),
});

// On success → navigate("/campaign/success")
```

---

## 7. Campaign Landing Page (`/campaign`)

Page file: `src/pages/Campaign.tsx`

Scroll section order:

```
[1] CampaignHero
      Headline, sub-copy, CTA button → /campaign/apply
      CampaignSlotCounter (live Firestore read)

[2] CampaignWhatYouGet
      Service cards — reuses services data already in the site

[3] CampaignPortfolioPreview
      3–4 portfolio cards — reuses src/data/projects.ts (same data as WorksSection)
      "See all work →" link to /works

[4] TestimonialsSection
      Direct import and reuse of existing component

[5] CampaignHowItWorks
      3 steps: Apply → Verified → We Build

[6] CampaignTermsSummary
      Key bullet points. "Read full terms →" links to /campaign/terms

[7] CampaignCTABanner
      "X of 10 spots remaining — Apply Now"

[8] Footer
      Direct import and reuse of existing Footer component
```

---

## 8. Slot Counter Component

`src/components/campaign/CampaignSlotCounter.tsx`

Real-time read using Firebase Client SDK:

```ts
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase/client";

// Count accepted applications for this campaign
const q = query(
  collection(db, "campaign_applications"),
  where("campaign_id", "==", import.meta.env.VITE_CAMPAIGN_ID),
  where("status", "==", "accepted")
);

onSnapshot(q, (snap) => {
  const acceptedCount = snap.size;
  const remaining = TOTAL_SLOTS - acceptedCount;
  setRemaining(remaining);
});
```

Display: `"7 of 10 spots remaining"` — updates in real-time as co-founders accept applications on the dashboard.

---

## 9. Multi-Step Form — `CampaignApply.tsx`

Dependencies used (all already in `package.json`):
- `react-hook-form` + `@hookform/resolvers`
- `zod`
- All `shadcn/ui` components (Input, Select, Checkbox, Textarea, Switch, Button — all already installed)
- `framer-motion` for step transitions (already installed)

### Form Schema (`form/schema.ts`)

```ts
import { z } from "zod";

export const stepOneSchema = z.object({
  full_name:      z.string().min(2),
  email:          z.string().email(),
  phone:          z.string().min(7),
  business_name:  z.string().min(2),
  business_type:  z.string().min(1, "Select a business type"),
  website:        z.string().url().optional().or(z.literal("")),
  social_link:    z.string().optional(),
  location:       z.string().min(2),
  referral_source: z.string().min(1, "Select how you heard about us"),
});

export const stepTwoSchema = z.object({
  service_types:      z.array(z.string()).min(1, "Select at least one service"),
  project_brief:      z.string().min(100).max(500),
  has_existing_brand: z.boolean(),
  timeline:           z.string().min(1),
  reference_links:    z.string().optional(),
});

export const stepThreeSchema = z.object({
  agreed_to_terms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms to proceed" }),
  }),
});
```

### State Management (`CampaignFormShell.tsx`)

```ts
// Local state only — no external state library needed
const [step, setStep] = useState<1 | 2 | 3>(1);
const [formData, setFormData] = useState<Partial<CampaignFormData>>({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [error, setError] = useState<string | null>(null);

// On each step's "Next": merge into formData, advance step
// On step 3 Submit: merge final data + write to Firestore
```

---

## 10. Post-Submission Page — `CampaignSuccess.tsx`

- Confirmation message with applicant's name (passed via router state)
- "What happens next" — 3 step explainer (verification → email → kickoff)
- CTA: "Explore our work" → /works
- No Firestore reads needed on this page

---

## 11. Terms Page — `CampaignTerms.tsx`

- Full campaign T&C document (static content)
- Navigation component (reuse existing `Navigation`)
- Footer (reuse existing `Footer`)
- Back link → /campaign

---

## 12. Components That Are Reused (No Changes)

| Existing Component | Used In |
|---|---|
| `TestimonialsSection` | Campaign landing page |
| `Footer` | Campaign, Apply, Success, Terms |
| `Navigation` | Campaign, Apply, Terms |
| `src/data/projects.ts` | CampaignPortfolioPreview |
| All `shadcn/ui` components | Campaign form |
| `framer-motion` | Form step transitions |

---

## 13. Build & Deploy Notes

No changes to `vite.config.ts`, `tailwind.config.ts`, `netlify.toml`, or `vercel.json`.

The 4 new routes (`/campaign`, `/campaign/apply`, `/campaign/success`, `/campaign/terms`) are handled by react-router-dom client-side. The existing `_redirects` file (which routes all paths to `index.html`) handles them automatically — no new redirect rules needed.

---

## Implementation Order

```
Step 1  Install firebase client SDK (bun add firebase)
Step 2  Add VITE_FIREBASE_* env vars
Step 3  Create src/lib/firebase/client.ts + verify test write to Firestore
Step 4  Build /campaign landing page (static, no Firebase reads yet)
Step 5  Add CampaignSlotCounter with live Firestore read
Step 6  Build 3-step form with Zod validation (no submit yet)
Step 7  Wire form submit → Firestore write
Step 8  Build /campaign/success page
Step 9  Build /campaign/terms page
Step 10 Add routes to App.tsx
Step 11 Test full flow end-to-end
```
