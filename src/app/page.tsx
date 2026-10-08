import React from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BenefitStrip } from "@/components/BenefitStrip";
import { ProgramsRow } from "@/components/ProgramsRow";
import { TrainersSection } from "@/components/TrainersSection";
import { PlanQuiz } from "@/components/PlanQuiz";
import { ReviewsWall } from "@/components/ReviewsWall";
import { PricingSection } from "@/components/PricingSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCtaBand } from "@/components/FinalCtaBand";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      {/* 0. Offer Bar & Translucent Sticky Header */}
      <AnnouncementBar />
      <Navbar />

      {/* 1. Hero (Ink) */}
      <Hero />

      {/* 2. Benefits Strip - 4 short items (Paper) */}
      <BenefitStrip />

      {/* 3. Programs Row (Ink) */}
      <ProgramsRow />

      {/* 4. Coaches / Trainers (Paper) */}
      <TrainersSection />

      {/* 5. Quiz Teaser with Program Collage (Ink) */}
      <PlanQuiz />

      {/* 6. Two-Tier Reviews Wall (Paper) */}
      <ReviewsWall />

      {/* 7. Pricing Section - Two Cards (Ink) */}
      <PricingSection />

      {/* 8. Short FAQ Accordion with Show All (Paper) */}
      <FaqAccordion />

      {/* 9. Closing Band with Address Block & Community Rings (Paper) */}
      <FinalCtaBand />

      {/* 10. Program-Listing Footer (Ink) */}
      <Footer />
    </main>
  );
}
