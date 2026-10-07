"use client";

import React from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { BenefitStrip } from "@/components/BenefitStrip";
import { WeekStrip } from "@/components/WeekStrip";
import { TimingsSchedule } from "@/components/TimingsSchedule";
import { NaturalStrength } from "@/components/NaturalStrength";
import { TrainersSection } from "@/components/TrainersSection";
import { NaturalTransformations } from "@/components/NaturalTransformations";
import { ProgramsRow } from "@/components/ProgramsRow";
import { PlanQuiz } from "@/components/PlanQuiz";
import { ReviewsWall } from "@/components/ReviewsWall";
import { PricingSection } from "@/components/PricingSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCtaBand } from "@/components/FinalCtaBand";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      {/* 0. AnnouncementBar and Sticky Header */}
      <AnnouncementBar />
      <Navbar />

      {/* 1. Hero: Full-bleed photo, flat scrim, giant uppercase headline, background text ticker, left-aligned lockup */}
      <Hero />

      {/* 2. TrustStrip: Google rating, YouTube, Instagram real numbers from gymData */}
      <TrustStrip />

      {/* 3. BenefitStrip: 4 columns (Personal attention / Clean equipment / Friendly unisex / Fees that make sense ₹999) */}
      <BenefitStrip />

      {/* 4. WeekStrip: Desktop sticky 250vh scroll-linked week split, mobile touch scroll-snap */}
      <WeekStrip />

      {/* 5. Timings: "Train on your schedule", verified 6 AM opening */}
      <TimingsSchedule />

      {/* 6. NaturalStrength: 3 feature panels (Form checks / Personal attention / Clean floor) with media */}
      <NaturalStrength />

      {/* 7. Coaches: Sugumar & Shimal portraits, specs, quotes */}
      <TrainersSection />

      {/* 8. Progress: Natural transformations with consent flags & diet guidance */}
      <NaturalTransformations />

      {/* 9. ProgramsRow: Desktop 55s infinite marquee loop, mobile touch scroll-snap */}
      <ProgramsRow />

      {/* 10. PlanQuiz Teaser: "Find the perfect plan for you" */}
      <PlanQuiz />

      {/* 11. Reviews: Top row quotes, full review cards below, Google review link */}
      <ReviewsWall />

      {/* 12. Plans: ₹999 monthly, ₹2,499 quarterly (Most Popular), free trial pass line */}
      <PricingSection />

      {/* 13. FAQ: Accordion, first 6 visible, Show All toggle */}
      <FaqAccordion />

      {/* 14. FinalCtaBand: "Join Team Wave", ONLY centered section, map/address block */}
      <FinalCtaBand />

      {/* 15. Footer: Logo, page links, programs, QR code, legal links, sticky mobile action bar */}
      <Footer />
    </main>
  );
}
