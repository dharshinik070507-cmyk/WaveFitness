"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PlanQuiz } from "@/components/PlanQuiz";
import { ProgramsGrid } from "@/components/ProgramsGrid";
import { PricingSection } from "@/components/PricingSection";
import { TrainersSection } from "@/components/TrainersSection";
import { NaturalTransformations } from "@/components/NaturalTransformations";
import { ReviewsWall } from "@/components/ReviewsWall";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { TimingsSchedule } from "@/components/TimingsSchedule";
import { BmiCalculator } from "@/components/BmiCalculator";
import { SocialFeeds } from "@/components/SocialFeeds";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BlogSection } from "@/components/BlogSection";
import { LocationContact } from "@/components/LocationContact";
import { Footer } from "@/components/Footer";
import { FreeTrialModal } from "@/components/FreeTrialModal";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [quizData, setQuizData] = useState<any>(null);

  const handleOpenTrial = () => {
    setSelectedPlan(undefined);
    setModalOpen(true);
  };

  const handleOpenTrialWithPlan = (planName: string) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  const handleOpenTrialWithTrainer = (trainerName: string) => {
    setSelectedPlan(`Personal Training with ${trainerName}`);
    setModalOpen(true);
  };

  const handleOpenTrialWithQuizData = (data: any) => {
    setQuizData(data);
    setSelectedPlan(data.recommendation);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-brand-dark">
      {/* Sticky Header */}
      <Navbar onOpenTrial={handleOpenTrial} />

      {/* Hero Section */}
      <Hero onOpenTrial={handleOpenTrial} />

      {/* Interactive Plan Quiz */}
      <PlanQuiz onOpenTrialWithData={handleOpenTrialWithQuizData} />

      {/* Programs Grid */}
      <ProgramsGrid onOpenTrial={handleOpenTrial} />

      {/* Pricing & Memberships */}
      <PricingSection onOpenTrialWithPlan={handleOpenTrialWithPlan} />

      {/* Certified Trainers */}
      <TrainersSection onOpenTrialWithTrainer={handleOpenTrialWithTrainer} />

      {/* Natural Transformations */}
      <NaturalTransformations onOpenTrial={handleOpenTrial} />

      {/* Seed Google Reviews Wall */}
      <ReviewsWall />

      {/* Gym Floor Facilities */}
      <FacilitiesSection />

      {/* Timings & Schedule */}
      <TimingsSchedule />

      {/* Health Calculator */}
      <BmiCalculator />

      {/* YouTube & Instagram Social Feeds */}
      <SocialFeeds />

      {/* FAQ Accordion */}
      <FaqAccordion />

      {/* Local SEO Blog Articles */}
      <BlogSection />

      {/* Contact & Map Location */}
      <LocationContact />

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Bottom Bar */}
      <StickyMobileBar onOpenTrial={handleOpenTrial} />

      {/* Free Trial Modal */}
      <FreeTrialModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefilledPlan={selectedPlan}
        prefilledQuizData={quizData}
      />
    </main>
  );
}
