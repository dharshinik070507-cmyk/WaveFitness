"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Globe, Grid, CheckCircle2 } from "lucide-react";
import {
  Button,
  Card,
  PlanCard,
  Badge,
  Input,
  Accordion,
  SectionHeading,
} from "@/components/ui";

export default function StyleguidePage() {
  const [lang, setLang] = useState<"en" | "ta">("en");
  const [showGrid, setShowGrid] = useState(false);

  const colorSwatches = [
    { name: "--bg (Page)", hex: "#0b0b0c", usage: "Default Page Background", ratio: "Base (17.8:1 text contrast)" },
    { name: "--surface-1 (Cards)", hex: "#121214", usage: "Cards & Elevated Panels", ratio: "16.1:1 text contrast" },
    { name: "--surface-2 (Inputs)", hex: "#1a1a1d", usage: "Hover States & Form Inputs", ratio: "Surface Accent" },
    { name: "--line (Borders)", hex: "#2a2a2e", usage: "Hairline Borders (1px)", ratio: "Structural Line" },
    { name: "--text", hex: "#f5f5f3", usage: "Primary Warm Off-White Body", ratio: "17.8:1 AAA Pass" },
    { name: "--text-muted", hex: "#a1a1a6", usage: "Secondary Labels & Descriptions", ratio: "7.4:1 AAA Pass" },
    { name: "--red", hex: "#E10600", usage: "ACTION ONLY: Primary Buttons & Headlines", ratio: "5.2:1 (White text on Red)" },
    { name: "--red-text", hex: "#FF5A52", usage: "Small Red Text & Links (<18px bold)", ratio: "5.8:1 AA Pass" },
    { name: "--blue", hex: "#1E88D6", usage: "Logo Emblem & Focus Ring Accents", ratio: "4.8:1 AA Pass" },
  ];

  return (
    <main
      data-lang={lang}
      lang={lang}
      className="min-h-screen bg-bg text-text p-6 sm:p-12 font-body relative"
    >
      {/* 12-Column Grid Overlay Toggle */}
      {showGrid && (
        <div className="fixed inset-0 pointer-events-none z-50 max-w-[1280px] mx-auto px-4 grid grid-cols-4 sm:grid-cols-12 gap-4 opacity-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-red h-full border-x border-red"></div>
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-6">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-wordmark text-xs font-bold uppercase text-red-text mb-2 hover:underline tracking-poster"
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
              className={`flex items-center gap-1.5 px-3 py-2 rounded-r-1 text-xs font-wordmark font-bold uppercase border transition-all ${
                showGrid ? "bg-red text-white border-red" : "bg-surface-2 text-text border-line"
              }`}
            >
              <Grid className="w-4 h-4" /> Grid Overlay
            </button>

            <button
              onClick={() => setLang(lang === "en" ? "ta" : "en")}
              className="flex items-center gap-2 px-4 py-2 rounded-r-1 bg-surface-2 border border-line text-text font-wordmark font-bold text-xs uppercase hover:border-red transition-all"
            >
              <Globe className="w-4 h-4 text-blue" />
              <span>Language: {lang === "en" ? "English" : "தமிழ் (Tamil)"}</span>
            </button>
          </div>
        </div>

        {/* 1. COLOR TOKENS & CONTRAST VERIFICATION RATIOS */}
        <section className="space-y-6">
          <SectionHeading
            indexTag="01"
            eyebrow="COLOR TOKENS & CONTRAST TABLE"
            title="WCAG 2.1 AA Verified Color Palette"
            subtitle="Red is strictly reserved for primary actions (5-8% viewport coverage). Small red text uses --red-text (#FF5A52) to pass 4.5:1 AA contrast."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorSwatches.map((swatch, idx) => (
              <div key={idx} className="p-4 bg-surface-1 border border-line rounded-r-0 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-wordmark text-xs font-bold text-text uppercase">{swatch.name}</span>
                  <span className="font-mono text-xs text-text-muted">{swatch.hex}</span>
                </div>
                <div
                  className="h-10 w-full border border-line"
                  style={{ backgroundColor: swatch.hex }}
                ></div>
                <div className="text-[11px] text-text-muted font-body leading-tight">
                  <div>{swatch.usage}</div>
                  <div className="text-success font-bold mt-0.5">✓ {swatch.ratio}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. SPACING SCALE (4px Base Tokenized) */}
        <section className="space-y-6">
          <SectionHeading
            indexTag="02"
            eyebrow="SPACING SCALE (4PX BASE)"
            title="Tokenized Spacing Scale"
            subtitle="No arbitrary margin or padding values. Strict base-4 spacing token tokens s-1 through s-11."
          />

          <div className="p-6 bg-surface-1 border border-line rounded-r-0 space-y-3 font-mono text-xs">
            {[
              { token: "--space-1 (s-1)", px: "4px" },
              { token: "--space-2 (s-2)", px: "8px" },
              { token: "--space-3 (s-3)", px: "12px" },
              { token: "--space-4 (s-4)", px: "16px" },
              { token: "--space-5 (s-5)", px: "24px" },
              { token: "--space-6 (s-6)", px: "32px" },
              { token: "--space-7 (s-7)", px: "48px" },
              { token: "--space-8 (s-8)", px: "64px" },
            ].map((sp, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="w-36 text-text font-bold">{sp.token}</span>
                <div className="h-4 bg-red" style={{ width: sp.px }}></div>
                <span className="text-text-muted">{sp.px}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. COMPONENT STATES & HARD-EDGED SURFACES */}
        <section className="space-y-6">
          <SectionHeading
            indexTag="03"
            eyebrow="UI COMPONENTS & STATES"
            title="Buttons, Badges, Cards & Form Inputs"
            subtitle="Hard edges, flat surfaces, hairline 1px borders, press translateY(1px) feedback."
          />

          {/* Buttons */}
          <div className="p-6 bg-surface-1 border border-line space-y-4">
            <h4 className="font-wordmark text-xs font-bold text-text uppercase tracking-poster">Button Variants</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary Red Button</Button>
              <Button variant="secondary">Secondary Line Button</Button>
              <Button variant="ghost">Ghost Underline Link</Button>
              <Button variant="primary" disabled>Disabled State</Button>
            </div>
          </div>

          {/* Badges */}
          <div className="p-6 bg-surface-1 border border-line space-y-4">
            <h4 className="font-wordmark text-xs font-bold text-text uppercase tracking-poster">Badge Variants</h4>
            <div className="flex flex-wrap gap-3">
              <Badge variant="red">MOST POPULAR</Badge>
              <Badge variant="dark">100% NATURAL</Badge>
              <Badge variant="outline">VERIFIED GOOGLE 4.9★</Badge>
              <Badge variant="green">SAVE ₹498</Badge>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="p-6 bg-surface-1 border border-line space-y-4 max-w-xl">
            <h4 className="font-wordmark text-xs font-bold text-text uppercase tracking-poster">Form Inputs (56px Min-Height)</h4>
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
            <h4 className="font-wordmark text-xs font-bold text-text uppercase tracking-poster mb-4">Hairline Divider Accordion</h4>
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
