"use client";

import React, { useState } from "react";
import { Dumbbell, UserCheck, Flame, Heart, Shield, Sparkles, ArrowRight, X } from "lucide-react";
import { useTrial } from "@/context/TrialContext";
import { Button } from "@/components/ui";

interface ProgramsGridProps {
  onOpenTrial?: () => void;
}

export const ProgramsGrid: React.FC<ProgramsGridProps> = ({ onOpenTrial }) => {
  const { openTrialModal } = useTrial();
  const [activeModalProgram, setActiveModalProgram] = useState<any | null>(null);

  const handleOpenTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal();
    }
  };

  const programs = [
    {
      id: "weight-loss",
      title: "Weight Loss & Fat Burn",
      tag: "Most Popular",
      icon: Flame,
      whoFor: "Anyone wanting to shed body fat, tone up, and boost metabolic health naturally.",
      whatToExpect: "High-energy cardio circuits, progressive weight training, and simple Indian meal calorie guides.",
      sampleWeek: "Mon: Chest & HIIT Cardio • Tue: Back & Core • Wed: Active Recovery • Thu: Legs & Abs • Fri: Shoulders & Fat Burn",
      trainerInCharge: "Coach Shimal & Coach Sugumar"
    },
    {
      id: "natural-bodybuilding",
      title: "Natural Bodybuilding & Muscle Gain",
      tag: "100% Steroid-Free",
      icon: Dumbbell,
      whoFor: "Men & women looking to build dense muscle mass and physical strength 100% naturally.",
      whatToExpect: "Heavy compound lifting (squats, bench, deadlifts), progressive overload tracking, and protein intake targets.",
      sampleWeek: "Mon: Upper Body Hypertrophy • Tue: Lower Body Strength • Thu: Push Split • Fri: Pull Split • Sat: Weak Point Focus",
      trainerInCharge: "Head Coach Sugumar (Sugu Master)"
    },
    {
      id: "beginner-foundation",
      title: "Beginner Foundation (First 30 Days)",
      tag: "Form First",
      icon: Shield,
      whoFor: "Complete beginners who are new to lifting and want safe posture correction.",
      whatToExpect: "1-on-1 machine orientation, daily form checks, gradual strength progression, and zero pressure.",
      sampleWeek: "Mon: Full Body A • Wed: Full Body B • Fri: Full Body C (Focusing on movement mastery)",
      trainerInCharge: "Coach Sugumar & Coach Shimal"
    },
    {
      id: "personal-training",
      title: "Personal Training with Sugu Master",
      tag: "1-on-1 VIP",
      icon: UserCheck,
      whoFor: "Members seeking fast-tracked transformation, rehab assistance, or competitive prep.",
      whatToExpect: "Dedicated 1-on-1 coaching every workout session, custom macro nutrition, and weekly body scans.",
      sampleWeek: "Customized 5-day structured split tailored specifically to your body type and schedule.",
      trainerInCharge: "Sugumar Master (Head Coach)"
    },
    {
      id: "womens-fitness",
      title: "Women's Toning & Core Strength",
      tag: "Unisex Comfort",
      icon: Heart,
      whoFor: "Women of all age groups looking for a supportive, hygienic, and respectful workout space.",
      whatToExpect: "Glute and core shaping, cardiovascular stamina, posture correction, and body confidence.",
      sampleWeek: "Mon: Lower Body Tone • Tue: Upper Body Mobility • Thu: Core & Cardio • Fri: Full Body Circuit",
      trainerInCharge: "Coach Shimal"
    },
    {
      id: "strength-conditioning",
      title: "Strength & Athletic Mobility",
      tag: "Functional",
      icon: Sparkles,
      whoFor: "Athletes and fitness enthusiasts wanting functional power, joint stability, and endurance.",
      whatToExpect: "Kettlebell work, battle ropes, plyometrics, and heavy bar resistance training.",
      sampleWeek: "Mon: Explosive Power • Wed: Isometric Strength • Fri: Agility & Mobility Circuits",
      trainerInCharge: "Coach Sugumar"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-bg relative border-b border-line">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-wordmark text-xs font-bold uppercase tracking-button text-blue mb-2 block">
              Training Programs
            </span>
            <h2 className="font-display text-h2 font-black text-text uppercase">
              Targeted Programs For Real Results
            </h2>
          </div>
          <p className="font-body text-xs text-text-muted max-w-md mt-4 md:mt-0">
            Every program includes personal form guidance from Sugu Master and Coach Shimal. No guesswork needed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.id}
                className="bg-surface-1 border border-line rounded-sm overflow-hidden flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-wordmark text-caption font-bold text-blue uppercase tracking-button border border-line px-2.5 py-1 bg-surface-2 rounded-sm">
                      {prog.tag}
                    </span>
                    <Icon className="w-5 h-5 text-blue" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-text uppercase mb-2">
                    {prog.title}
                  </h3>

                  <p className="font-body text-xs text-text-muted leading-relaxed mb-4">
                    <strong className="text-text">Who it&apos;s for:</strong> {prog.whoFor}
                  </p>

                  <div className="pt-3 border-t border-line text-meta text-text-muted font-body">
                    <span className="font-bold text-text font-wordmark uppercase">Coach:</span> {prog.trainerInCharge}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-6 pt-4 border-t border-line flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setActiveModalProgram(prog)}
                    className="flex-1"
                  >
                    View Details
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleOpenTrial}
                  >
                    Claim Free Trial
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Detail Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 bg-bg/80 flex items-center justify-center p-4">
          <div className="bg-surface-1 border border-line rounded-sm max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-4 right-4 p-2 text-text-muted hover:text-text"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display text-2xl font-bold text-text uppercase">
              {activeModalProgram.title}
            </h3>
            <p className="font-wordmark text-xs text-blue font-bold uppercase tracking-button mt-1">
              Led by {activeModalProgram.trainerInCharge}
            </p>

            <div className="my-6 space-y-4 font-body text-xs text-text-muted">
              <div>
                <span className="font-bold text-text block uppercase mb-1 font-wordmark">What To Expect:</span>
                <p className="leading-relaxed">{activeModalProgram.whatToExpect}</p>
              </div>
              <div className="p-4 rounded-sm bg-surface-2 border border-line">
                <span className="font-bold text-blue block uppercase mb-1 font-wordmark">Sample Week Structure:</span>
                <p className="text-text leading-relaxed">{activeModalProgram.sampleWeek}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setActiveModalProgram(null);
                  handleOpenTrial();
                }}
                className="flex-1"
              >
                Claim Free Trial <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => setActiveModalProgram(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
