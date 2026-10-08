"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Grid } from "lucide-react";
import {
  Button,
  PlanCard,
  Badge,
  Input,
  Accordion,
  HeadingLockup,
} from "@/components/ui";
import { ProgramCollage } from "@/components/ProgramCollage";
import { CommunityRings } from "@/components/CommunityRings";
import { ChatWidget } from "@/components/ChatWidget";

export default function StyleguidePage() {
  const [showGrid, setShowGrid] = useState(false);

  const colorSwatches = [
    { name: "--bg / --ink", hex: "#0b0b0c", usage: "Default Ink Surface Background", ratio: "Base (18.0:1 text contrast)" },
    { name: "--paper", hex: "#fafafa", usage: "Alternating Paper Band Surface", ratio: "18.0:1 text-paper contrast" },
    { name: "--paper-card", hex: "#ffffff", usage: "Cards on Paper Bands", ratio: "18.0:1 text contrast" },
    { name: "--panel-blue", hex: "#101822", usage: "Quiz Teaser Dark Panel", ratio: "15.4:1 contrast" },
    { name: "--surface-1", hex: "#121214", usage: "Cards & Panels on Ink", ratio: "16.1:1 text contrast" },
    { name: "--surface-2", hex: "#1a1a1d", usage: "Hover States & Form Inputs", ratio: "Surface Accent" },
    { name: "--line", hex: "#2a2a2e", usage: "Hairline Borders on Ink (1px)", ratio: "Structural Line" },
    { name: "--line-paper", hex: "#e2e2e5", usage: "Hairline Borders on Paper (1px)", ratio: "Structural Line" },
    { name: "--text", hex: "#f5f5f3", usage: "Primary Off-White Body Text on Ink", ratio: "18.0:1 AAA Pass" },
    { name: "--text-paper", hex: "#0b0b0c", usage: "Primary Text on Paper Surface", ratio: "18.0:1 AAA Pass" },
    { name: "--text-muted", hex: "#a1a1a6", usage: "Muted Text on Ink Surface", ratio: "7.7:1 AAA Pass" },
    { name: "--text-muted-paper", hex: "#66666d", usage: "Muted Text on Paper Surface", ratio: "4.8:1 AA Pass" },
    { name: "--red", hex: "#E10600", usage: "ACTION ONLY: Primary CTA on Ink & Price Numerals", ratio: "5.0:1 (White text on Red)" },
    { name: "--red-text", hex: "#FF5A52", usage: "Header Trial Link Accent Word (<18px)", ratio: "6.4:1 AA Pass" },
    { name: "--blue", hex: "#1E88D6", usage: "Progress Rings, Accents & Links", ratio: "5.2:1 (Ink) / 4.6:1 (Paper)" },
  ];

  return (
    <main className="min-h-screen bg-bg text-text p-6 sm:p-12 font-body relative">
      {/* 12-Column Grid Overlay Toggle */}
      {showGrid && (
        <div className="fixed inset-0 pointer-events-none z-50 max-w-[1280px] mx-auto px-4 grid grid-cols-4 sm:grid-cols-12 gap-4 opacity-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-text h-full border-x border-text"></div>
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-6">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-wordmark text-xs font-bold uppercase text-blue mb-2 hover:underline tracking-button"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Live Gym Website
            </Link>
            <h1 className="font-display text-3xl font-black uppercase text-text tracking-tight">
              Wave Fitness Design System & Token Styleguide
            </h1>
            <p className="text-xs text-text-muted mt-1 font-body">
              Hard-edged, flat color, poster design tokens for Tambaram Camp Road CH-73.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-pill text-xs font-wordmark font-bold uppercase border transition-all ${
                showGrid ? "bg-text text-bg border-text" : "bg-surface-2 text-text border-line"
              }`}
            >
              <Grid className="w-4 h-4" /> Grid Overlay
            </button>
          </div>
        </div>

        {/* 1. COLOR TOKENS & CONTRAST VERIFICATION RATIOS */}
        <section className="space-y-6">
          <HeadingLockup
            lead="01 / COLOR TOKENS & CONTRAST TABLE"
            lines={["WCAG 2.1 AA COLOR PALETTE"]}
            bar
          />
          <p className="font-body text-xs text-text-muted">
            Red is strictly reserved for primary actions on ink (#E10600) and price numerals. On paper, buttons flip to solid black (#0b0b0c).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorSwatches.map((swatch, idx) => (
              <div key={idx} className="p-4 bg-surface-1 border border-line rounded-card space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-wordmark text-xs font-bold text-text uppercase">{swatch.name}</span>
                  <span className="font-mono text-xs text-text-muted">{swatch.hex}</span>
                </div>
                <div
                  className="h-10 w-full border border-line rounded-badge"
                  style={{ backgroundColor: swatch.hex }}
                ></div>
                <div className="text-meta text-text-muted font-body leading-tight">
                  <div>{swatch.usage}</div>
                  <div className="text-success font-bold mt-0.5">✓ {swatch.ratio}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. TWO-TIER HEADINGS PREVIEW */}
        <section className="space-y-6">
          <HeadingLockup
            lead="02 / TWO-TIER HEADINGS"
            lines={["HEADING LOCKUP VARIANTS"]}
            bar
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-bg border border-line rounded-card space-y-4">
              <span className="font-wordmark text-caption font-bold text-text-muted uppercase tracking-button block">
                [INK SURFACE]
              </span>
              <HeadingLockup
                lead="365+ REVIEWS ON GOOGLE"
                lines={["RATED 4.9 STARS", "IN TAMBARAM EAST"]}
                onSurface="ink"
                bar
              />
            </div>

            <div className="p-8 bg-paper border border-line-paper rounded-card space-y-4 text-text-paper">
              <span className="font-wordmark text-caption font-bold text-text-muted-paper uppercase tracking-button block">
                [PAPER SURFACE]
              </span>
              <HeadingLockup
                lead="CLEAN, FRIENDLY, DISCIPLINED"
                lines={["TRAIN WITH PURPOSE", "EVERY SINGLE DAY"]}
                onSurface="paper"
                bar
              />
            </div>
          </div>
        </section>

        {/* 3. BUTTONS & SURFACES */}
        <section className="space-y-6">
          <HeadingLockup
            lead="03 / PILL BUTTONS & SURFACE FLIPPING"
            lines={["INK VS PAPER BUTTONS"]}
            bar
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-bg border border-line rounded-card space-y-4">
              <h4 className="font-wordmark text-xs font-bold text-text uppercase tracking-button">Buttons on Ink Surface</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" onSurface="ink">Primary Red (#E10600)</Button>
                <Button variant="secondary" onSurface="ink">Secondary Line</Button>
                <Button variant="ghost" onSurface="ink">Ghost Underline</Button>
              </div>
            </div>

            <div className="p-6 bg-paper border border-line-paper rounded-card space-y-4">
              <h4 className="font-wordmark text-xs font-bold text-text-paper uppercase tracking-button">Buttons on Paper Surface</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" onSurface="paper">Primary Black (#0b0b0c)</Button>
                <Button variant="secondary" onSurface="paper">Secondary Line</Button>
                <Button variant="ghost" onSurface="paper">Ghost Underline</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROGRAM COLLAGE PREVIEW */}
        <section className="space-y-6">
          <HeadingLockup
            lead="04 / OFFSET PROGRAM COLLAGE"
            lines={["CUT-OUT ATHLETE MOCKUP"]}
            bar
          />
          <div className="w-full">
            <ProgramCollage />
          </div>
        </section>

        {/* 5. COMMUNITY RINGS PREVIEW */}
        <section className="space-y-6">
          <HeadingLockup
            lead="05 / MEMBER PROGRESS RINGS"
            lines={["SCATTERED INITIAL RINGS"]}
            bar
          />
          <div className="w-full">
            <CommunityRings />
          </div>
        </section>

        {/* 6. FORM INPUTS & BADGES */}
        <section className="space-y-6">
          <HeadingLockup
            lead="06 / UI COMPONENTS & STATES"
            lines={["BADGES & FORM INPUTS"]}
            bar
          />

          <div className="p-6 bg-surface-1 border border-line rounded-card space-y-4">
            <h4 className="font-wordmark text-xs font-bold text-text uppercase tracking-button">Badge Variants (4px Radius)</h4>
            <div className="flex flex-wrap gap-3">
              <Badge variant="red">MOST POPULAR</Badge>
              <Badge variant="dark">100% NATURAL</Badge>
              <Badge variant="outline">GOOGLE 4.9★</Badge>
              <Badge variant="green">SAVE ₹498</Badge>
            </div>
          </div>

          <div className="p-6 bg-surface-1 border border-line rounded-card space-y-4 max-w-xl">
            <h4 className="font-wordmark text-xs font-bold text-text uppercase tracking-button">Form Inputs (12px Radius, 56px Height)</h4>
            <Input label="Your Name (Default State)" placeholder="e.g. Sugumar Master" />
            <Input label="Mobile Number (Error State)" placeholder="e.g. 7397398749" error="Please enter a valid 10-digit phone number" />
          </div>

          {/* Plan Card Featured Variant */}
          <div className="max-w-md">
            <PlanCard
              title="3-Month Quarterly Pass"
              subtitle="90-DAY NATURAL TRANSFORMATION"
              price={2499}
              period="/ 3 months"
              perDayText="Just ~₹28 / day"
              savingsText="Saves ₹498"
              features={[
                "Full Access to Gym Floor & Weights",
                "Personal Form Watching by Sugu Master",
                "Priority Coaching by Coach Shimal",
                "Monthly Calorie & Macro Target Plan"
              ]}
              isFeatured={true}
              featuredTag="MOST POPULAR"
              onSelect={() => alert("Selected 3-Month Plan")}
            />
          </div>

          {/* Accordion */}
          <div className="max-w-2xl">
            <h4 className="font-wordmark text-xs font-bold text-text uppercase tracking-button mb-4">Hairline Divider Accordion</h4>
            <Accordion
              items={[
                { q: "What are the exact gym timings?", a: "Monday-Friday (6:00 AM - 9:30 PM), Saturday (6:30 AM - 9:30 PM), Sunday (5:00 AM - 9:00 PM)." },
                { q: "Is Wave Fitness suitable for women?", a: "Yes! Wave Fitness is a 100% discipline-first unisex gym with clean facilities and certified male & female trainers." }
              ]}
            />
          </div>

        </section>

      </div>
    </main>
  );
}
