# 🏋️ WAVE FITNESS UNISEX (GYM)

> **"Ride the Wave to Wellness"**  
> Official web application for WAVE FITNESS UNISEX (GYM) located in Tambaram East (Camp Road Junction), Chennai.

[![Next.js 14](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?logo=framer)](https://www.framer.com/motion/)

---

## 📌 Verified Business Details

- **Gym Name:** WAVE FITNESS UNISEX (GYM)
- **Short Brand:** WAVE FITNESS
- **Address:** No.2, Bharathi, Lenin Complex, School St, Camp Road Junction, Selaiyur, Tambaram East, Chennai, Tamil Nadu 600073
- **Google Plus Code:** `W4FV+65 Tambaram, Tamil Nadu`
- **Coordinates:** `12.9230144, 80.1429674`
- **Phone / WhatsApp:** `+91 73973 98749`
- **Google Rating:** 4.9★ from 365+ Verified Reviews
- **Operating Hours:** Opens daily from 6:00 AM
- **Promotional Pricing:** ₹999/month (~₹33/day) | ₹2,499 3-Month Quarterly Pass (~₹28/day, saves ₹498)

---

## ✨ Features

- **Gritty Gym Poster Aesthetic:** Hard edges (`0px radius`), dark base (`#0b0b0c`), hairline borders (`#2a2a2e`), action-only red (`#E10600`), flat color, and static film-grain texture.
- **Motion System:** Hardware-accelerated Framer Motion reveals (`translateY` + `opacity`), masked text entrance, 250vh scroll-linked workout split, and 55s infinite marquee loops.
- **Bilingual (Tamil / English):** First-class Tamil support via `Anek Tamil` with scoped font scaling and zero layout jumps.
- **Lead Generation API (`/api/lead`):** Server-side Zod validation for Indian 10-digit mobile numbers, honeypot spam protection, and WhatsApp lead links.
- **Single Content Source (`gymData.ts`):** All business facts, pricing, timings, reviews, and FAQs are managed in one centralized data file.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn / pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/dharshinik070507-cmyk/WaveFitness.git
cd WaveFitness

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build & Production Server

```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 🗺️ Project Structure

```text
├── src/
│   ├── app/                # Next.js 14 App Router pages & API routes
│   │   ├── api/lead/       # Zod-validated lead generation route
│   │   ├── tools/bmi/      # BMI Calculator tool page
│   │   ├── blog/           # Local SEO fitness guide articles
│   │   ├── layout.tsx      # Root layout with self-hosted fonts
│   │   └── page.tsx        # 16-section conversion home page
│   ├── components/         # Modular UI & section components
│   │   ├── Hero.tsx        # Masked entrance & background text ticker
│   │   ├── WeekStrip.tsx   # Desktop 250vh sticky scroll split & mobile snap
│   │   ├── ProgramsRow.tsx # 55s infinite marquee program loop
│   │   └── ...             # TrustStrip, BenefitStrip, NaturalStrength, etc.
│   ├── content/
│   │   └── gymData.ts      # Single source of truth for all business content
│   ├── context/
│   │   ├── LanguageContext.tsx  # Tamil / English language provider
│   │   └── TrialContext.tsx     # Trial modal state manager
│   ├── lib/
│   │   └── motion.ts       # Shared Framer Motion configs & variants
│   └── styles/
│       └── tokens.css      # Design system CSS custom properties
└── README.md
```

---

## 📄 License & Attribution

Designed and developed for **WAVE FITNESS UNISEX (GYM)**, Tambaram East, Chennai.
