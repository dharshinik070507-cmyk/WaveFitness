"use client";

import React, { useState } from "react";
import { Dumbbell, UserCheck, Flame, Heart, Shield, Sparkles, ArrowRight } from "lucide-react";

interface ProgramsGridProps {
  onOpenTrial: () => void;
}

export const ProgramsGrid: React.FC<ProgramsGridProps> = ({ onOpenTrial }) => {
  const [activeModalProgram, setActiveModalProgram] = useState<any | null>(null);

  const programs = [
    {
      id: "weight-loss",
      title: "Weight Loss & Fat Burn",
      tag: "Most Popular",
      icon: Flame,
      whoFor: "Anyone wanting to shed body fat, tone up, and boost metabolic health naturally.",
      whatToExpect: "High-energy cardio circuits, progressive weight training, and simple Indian meal calorie guides.",
      sampleWeek: "Mon: Chest & HIIT Cardio • Tue: Back & Core • Wed: Active Recovery • Thu: Legs & Abs • Fri: Shoulders & Fat Burn",
      trainerInCharge: "Coach Shimal & Coach Sugumar",
      imgUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "natural-bodybuilding",
      title: "Natural Bodybuilding & Muscle Gain",
      tag: "100% Steroid-Free",
      icon: Dumbbell,
      whoFor: "Men & women looking to build dense muscle mass and physical strength 100% naturally.",
      whatToExpect: "Heavy compound lifting (squats, bench, deadlifts), progressive overload tracking, and protein intake targets.",
      sampleWeek: "Mon: Upper Body Hypertrophy • Tue: Lower Body Strength • Thu: Push Split • Fri: Pull Split • Sat: Weak Point Focus",
      trainerInCharge: "Head Coach Sugumar (Sugu Master)",
      imgUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "beginner-foundation",
      title: "Beginner Foundation (First 30 Days)",
      tag: "Form First",
      icon: Shield,
      whoFor: "Complete beginners who are new to lifting and want safe posture correction.",
      whatToExpect: "1-on-1 machine orientation, daily form checks, gradual strength progression, and zero pressure.",
      sampleWeek: "Mon: Full Body A • Wed: Full Body B • Fri: Full Body C (Focusing on movement mastery)",
      trainerInCharge: "Coach Sugumar & Coach Shimal",
      imgUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "personal-training",
      title: "Personal Training with Sugu Master",
      tag: "1-on-1 VIP",
      icon: UserCheck,
      whoFor: "Members seeking fast-tracked transformation, rehab assistance, or competitive prep.",
      whatToExpect: "Dedicated 1-on-1 coaching every workout session, custom macro nutrition, and weekly body scans.",
      sampleWeek: "Customized 5-day structured split tailored specifically to your body type and schedule.",
      trainerInCharge: "Sugumar Master (Head Coach)",
      imgUrl: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "womens-fitness",
      title: "Women's Toning & Core Strength",
      tag: "Unisex Comfort",
      icon: Heart,
      whoFor: "Women of all age groups looking for a supportive, hygienic, and respectful workout space.",
      whatToExpect: "Glute and core shaping, cardiovascular stamina, posture correction, and body confidence.",
      sampleWeek: "Mon: Lower Body Tone • Tue: Upper Body Mobility • Thu: Core & Cardio • Fri: Full Body Circuit",
      trainerInCharge: "Coach Shimal",
      imgUrl: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "strength-conditioning",
      title: "Strength & Athletic Mobility",
      tag: "Functional",
      icon: Sparkles,
      whoFor: "Athletes and fitness enthusiasts wanting functional power, joint stability, and endurance.",
      whatToExpect: "Kettlebell work, battle ropes, plyometrics, and heavy bar resistance training.",
      sampleWeek: "Mon: Explosive Power • Wed: Isometric Strength • Fri: Agility & Mobility Circuits",
      trainerInCharge: "Coach Sugumar",
      imgUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">
              Training Programs
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase">
              Targeted Programs For Real Results
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
            Every program includes personal form guidance from Sugu Master and Coach Shimal. No guesswork needed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.id}
                className="group rounded-3xl bg-brand-card border border-brand-border overflow-hidden hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Header */}
                  <div className="h-48 relative bg-slate-900 overflow-hidden">
                    <img
                      src={prog.imgUrl}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent"></div>
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-brand-red text-white font-extrabold text-[10px] uppercase tracking-wider rounded-md">
                      {prog.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase mb-2">
                      <Icon className="w-4 h-4" /> Program
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white uppercase">
                      {prog.title}
                    </h3>
                    <p className="mt-3 text-slate-300 text-xs leading-relaxed">
                      <strong className="text-white">Who it&apos;s for:</strong> {prog.whoFor}
                    </p>
                    <div className="mt-4 pt-3 border-t border-brand-border/60 text-[11px] text-brand-muted">
                      <span className="font-bold text-slate-200">Coach in Charge:</span> {prog.trainerInCharge}
                    </div>
                  </div>
                </div>

                {/* Card Footer Buttons */}
                <div className="p-6 pt-0 flex gap-3">
                  <button
                    onClick={() => setActiveModalProgram(prog)}
                    className="flex-1 py-2.5 bg-brand-dark border border-brand-border hover:border-slate-500 text-white font-bold text-xs uppercase rounded-xl transition-all"
                  >
                    View Details & Sample Week
                  </button>
                  <button
                    onClick={onOpenTrial}
                    className="px-4 py-2.5 bg-brand-red hover:bg-brand-red-hover text-white font-extrabold text-xs uppercase rounded-xl transition-all"
                    title="Claim Free Trial"
                  >
                    Join
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Detail Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-brand-card border border-brand-red/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <h3 className="font-display text-2xl font-bold text-white uppercase">
              {activeModalProgram.title}
            </h3>
            <p className="text-xs text-brand-red font-semibold uppercase mt-1">
              Led by {activeModalProgram.trainerInCharge}
            </p>

            <div className="my-6 space-y-4 text-xs text-slate-300">
              <div>
                <span className="font-bold text-white block uppercase mb-1">What To Expect:</span>
                <p>{activeModalProgram.whatToExpect}</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-dark border border-brand-border">
                <span className="font-bold text-cyan-400 block uppercase mb-1">Sample Week Structure:</span>
                <p className="text-slate-200">{activeModalProgram.sampleWeek}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setActiveModalProgram(null);
                  onOpenTrial();
                }}
                className="flex-1 py-3 bg-brand-red text-white font-extrabold text-xs uppercase rounded-xl shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2"
              >
                Book Free Trial Visit <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveModalProgram(null)}
                className="px-5 py-3 bg-brand-dark border border-brand-border text-slate-400 hover:text-white text-xs font-bold uppercase rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
