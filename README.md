# WAVE FITNESS UNISEX (GYM) - Design System & Web Application

> **Brand Tagline:** *"Ride the Wave to Wellness"*  
> **Poster Location:** Tambaram Camp Road CH-73  
> **Google Maps Coordinates:** `12.9230144, 80.1429674` (Plus Code: `W4FV+65`)  
> **Verified Phone / WhatsApp:** `+91 73973 98749`  

---

## 🎨 Design System Architecture (Gritty Gym Poster Aesthetic)

The Wave Fitness website is built on a **hard-edged, flat color, gym poster design system**. It avoids soft rounded-2xl cards, decorative gradients, glassmorphism, or AI template tropes in favor of heavy scale contrast, hairline borders, and authentic photography.

### 1. Color Tokens & WCAG 2.1 AA Contrast Ratios

| Token Name | Hex Code | Purpose & Usage Rule | Contrast Ratio | WCAG 2.1 AA Status |
| :--- | :--- | :--- | :--- | :--- |
| `--bg` | `#0b0b0c` | Page Background Base | Base | Base |
| `--surface-1` | `#121214` | Card & Panel Surfaces | **16.1:1** on `--text` | Pass AAA |
| `--surface-2` | `#1a1a1d` | Form Inputs & Hover States | Structural Surface | Pass |
| `--line` | `#2a2a2e` | 1px Hairline Structural Dividers | Structural Line | Pass |
| `--text` | `#f5f5f3` | Primary Warm Off-White Text | **17.8:1** on `--bg` | Pass AAA |
| `--text-muted` | `#a1a1a6` | Secondary Metadata & Descriptions | **7.4:1** on `--bg` | Pass AAA |
| `--text-dim` | `#6b6b72` | Index Numbers (01/02) & Decorative Tags | **3.6:1** | Pass (Meta/Decorative) |
| `--red` | `#E10600` | **ACTION ONLY:** Primary Buttons & Headlines | **5.2:1** (White text on Red) | Pass AA |
| `--red-text` | `#FF5A52` | Small Red Text & Links (<18px bold) | **5.8:1** on `--bg` | Pass AA Small Text |
| `--blue` | `#1E88D6` | Logo Details, Secondary Links, Focus Ring | **4.8:1** on `--bg` | Pass AA |

---

### 🚨 The "Red Only For Action" Rule

- **Red (`#E10600`) is reserved strictly for primary conversion actions** (e.g. *"Claim Free Trial"*, main display headlines, price numerals, and red underline bars).
- Red occupies at most **5–8%** of any viewport.
- There is **only ONE primary red button per screen section**.
- **Small Red Text Constraint:** `#E10600` on `#0b0b0c` is ~4.1:1 (passes AA for large text >24px, but fails 4.5:1 for small text). Therefore, all small red text or links use `--red-text: #FF5A52` (which yields **5.8:1** contrast).

---

### 📌 DOs and DON'Ts Checklist

#### DO:
- ✅ **Hard Edges:** Use 0px radius (`var(--radius-0)`) for cards, images, and section wrappers.
- ✅ **Hairline Borders:** Separate panels and sections with 1px `--line` rules (`#2a2a2e`).
- ✅ **Extreme Scale Contrast:** Pair large condensed display headlines with small, quiet, wide-tracked labels.
- ✅ **Static Film Grain & Scrim Overlays:** Use linear dark overlays for text legibility over gym photography.
- ✅ **Tamil First-Class Support:** Ensure Tamil headings use `1.5` line-height and no uppercase transforms.

#### DON'T:
- ❌ **NO Rounded-2xl Cards:** Never use soft `rounded-2xl` or `rounded-3xl` corners.
- ❌ **NO Glassmorphism or Blur Glows:** Never use backdrop blurs or glowing drop shadows.
- ❌ **NO Decorative Gradients:** Never use purple-to-pink or multi-color gradient text.
- ❌ **NO Emoji Icons in Headings:** Use square-capped 1.5px stroke Lucide vector icons only.
- ❌ **NO Overuse of Red:** Never turn secondary buttons or large background blocks red.

---

### 🎨 Retheming in One Place

All design system tokens are defined in **`src/styles/tokens.css`**:
```css
:root {
  --bg: #0b0b0c;
  --surface-1: #121214;
  --red: #E10600;      /* Sampled from WF logo underline */
  --blue: #1E88D6;     /* Sampled from WF logo circular emblem */
}
```
Updating these values rethemes the entire site instantly!

---

### 🛠️ Development & Styleguide

- **Dev Server:** `npm run dev` (Runs on `http://localhost:3000`)
- **Interactive Styleguide:** Visit `http://localhost:3000/styleguide` to view all color swatches, contrast ratios, component states, and Tamil/English toggles.
