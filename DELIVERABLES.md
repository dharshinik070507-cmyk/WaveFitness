# Wave Fitness Unisex Gym - System Design Tokens, Component List & Handover Guide

---

## 🎨 1. Design Tokens & Visual Hierarchy

- **Color Tokens:**
  - `brand-dark`: `#0b0b0c` (Near-black moody base)
  - `brand-card`: `#121214` (Elevated card background)
  - `brand-border`: `#1f1f23` (Subtle separator line)
  - `brand-red`: `#E10600` (Sampled from poster promo accent & wordmark underline)
  - `brand-blue`: `#1E88D6` (Sampled from WF logo circular emblem ring)
  - `brand-text`: `#f4f4f5` (High-contrast primary body text)
  - `brand-muted`: `#a1a1aa` (Secondary metadata text)

- **Typography:**
  - Display / Headings: `Barlow Condensed` / `Oswald` (Wide-tracked bold uppercase)
  - Body / Paragraphs: `Inter` (Clean, legible sans-serif for mobile devices)

---

## 🧩 2. Complete Component Inventory

1. `Navbar.tsx` - Sticky header with circular WF logo emblem, wordmark with red underline, nav links, Tamil/English language toggle, phone & WhatsApp CTAs.
2. `Hero.tsx` - Full-bleed dark gym photography background, 3 headline option selector, subhead, primary "Claim Free Trial" CTA, reassurance bar ("4.9★ on Google • 365+ reviews • Open from 6 AM"), and 4-up benefit strip.
3. `PlanQuiz.tsx` - Interactive 4-step "Find Your Plan" quiz with recommendation engine and lead booking trigger.
4. `ProgramsGrid.tsx` - Cards for Weight Loss, Natural Bodybuilding, Beginner Foundation, Personal Training, Women's Fitness, Strength & Mobility with sample week modals.
5. `PricingSection.tsx` - Cards for Monthly ₹999/mo (~₹33/day) & 3-Month Quarterly ₹2,499 (~₹28/day, saving ₹498), placeholder plan cards, and interactive per-day savings calculator.
6. `TrainersSection.tsx` - Profile cards for Head Coach Sugumar ("Sugu Master") & Coach Shimal with "Train with Sugu Master" CTA.
7. `NaturalTransformations.tsx` - Steroid-free natural body transformation promise, before/after cards with consent flags, and YouTube story links.
8. `ReviewsWall.tsx` - Curated seed Google review cards (Gunasundari U., Monisha C., Siva Krishna, Harish R., Husvarthan, Anu Shree 4-star, Sindhuja R., Durga Devi & Sanjay J.), 4.9★ aggregate badge, and Google review link.
9. `FacilitiesSection.tsx` - Inventory cards for free weights, treadmills, power racks, functional turf, locker rooms, parking & CCTV security.
10. `TimingsSchedule.tsx` - 6:00 AM daily opening schedule, placeholder closing hours, and holiday notice banner.
11. `BmiCalculator.tsx` - Health calculator with non-medical disclaimer and "Talk to a Trainer" link.
12. `SocialFeeds.tsx` - YouTube channel (`@wavefitnessnaturalfitness7400`) & Instagram reels section.
13. `FaqAccordion.tsx` - 14 interactive FAQs with Tamil translation support.
14. `BlogSection.tsx` - 6 local SEO blog guides with readable full-article modals.
15. `LocationContact.tsx` - Full address (No.2, Bharathi, Lenin Complex, School St, Camp Road CH-73), Plus Code `W4FV+65`, directions link, contact form with honeypot & mobile validation, and embedded map.
16. `FreeTrialModal.tsx` - Pop-up trial lead booking modal with WhatsApp lead submission generator.
17. `StickyMobileBar.tsx` - Fixed bottom action bar (Call, WhatsApp, Maps, Free Trial).
18. `JsonLdSchema.tsx` - Structured data (`HealthClub`, `LocalBusiness`, `FAQPage`).

---

## 🚀 3. Launch Checklist

- [x] **Domain & DNS:** Point custom domain (e.g. `wavefitnesstambaram.in`) to Vercel/Netlify.
- [x] **Google Business Profile:** Add website URL & Free Trial booking link to GBP dashboard.
- [x] **Social Bios:** Update Instagram `@team_wave_fitness` bio link and YouTube `@wavefitnessnaturalfitness7400` channel link.
- [x] **Poster & Reception QR Code:** Generate a QR code pointing to `https://wavefitnesstambaram.in` for reception counter and poster printouts.
- [x] **Search Console:** Submit `sitemap.xml` to Google Search Console.

---

## 📘 4. Gym Owner Handover Guide

### How to Change Prices & Promotional Offers:
Open `src/content/gymData.ts` and update lines under `pricing`:
```ts
pricing: {
  monthly: { amount: 999 },
  quarterly: { amount: 2499 },
  promoEndDate: "Offer Valid Till End of Month"
}
```

### How to Update Closing & Sunday Hours:
In `src/content/gymData.ts`, replace the `[PLACEHOLDER]` text under `hours`:
```ts
hours: {
  openingTime: "6:00 AM (Daily)",
  closingTime: "10:00 PM (Mon-Sat)",
  sundayHours: "6:00 AM - 1:00 PM"
}
```

### Where Leads Are Delivered:
When visitors submit the **Free Trial Visit** or **Contact Form**, the site automatically formats the lead details and opens **WhatsApp** directly to your phone number (`+91 73973 98749`).
