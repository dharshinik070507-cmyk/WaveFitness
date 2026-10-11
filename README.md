# Wave Fitness — QA Enhanced Next.js

This is a complete Next.js App Router source project.

## Start

```powershell
npm install
npm run dev
```

Visit http://localhost:3000.

## QA

```powershell
npm run typecheck
npm run build
npm audit
npx playwright install chromium
npm run test:e2e
```

The Playwright test checks all seven routes at 320, 360, 375, 390, 414, 768 and 1024 pixels. Browser installation and npm registry access are required.

## Changes

- Fixed flex alignment compatibility warnings.
- Added explicit viewport metadata and security headers.
- Improved mobile typography, overflow containment, touch targets, form input types and reduced-motion fallbacks.
- Added gallery lightbox Escape-key close, close-button focus, scroll lock and focus restoration.
- Added mobile menu Escape-key close and aria-controls.
- Added responsive smoke tests.

## Launch caveats

This is a source-level improvement, not a certified production build. Replace external illustrative photos with approved gym assets; confirm pricing and trial terms; run all QA commands and test on real iOS/Android browsers before deployment. Contact submissions open WhatsApp rather than being stored in a backend.
