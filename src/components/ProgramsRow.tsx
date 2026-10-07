"use client";

import React from "react";
import { motion } from "framer-motion";
import { gymData } from "@/content/gymData";
import { useTrial } from "@/context/TrialContext";
import { Dumbbell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { fadeInUpVariants, defaultViewport } from "@/lib/motion";

interface ProgramsRowProps {
  onOpenTrial?: () => void;
}

export const ProgramsRow: React.FC<ProgramsRowProps> = ({ onOpenTrial }) => {
  const { openTrialModal } = useTrial();

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Program Inquiry");
    }
  };

  const programs = gymData.programs;
  // Duplicate array for infinite seamless marquee loop
  const marqueeItems = [...programs, ...programs, ...programs];

  return (
    <section id="programs" className="py-20 bg-bg border-b border-line overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] mb-10">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-left max-w-3xl"
        >
          <span className="font-wordmark text-xs font-bold uppercase tracking-poster text-red block mb-2">
            09 / TRAINING PROGRAMS
          </span>
          <h2 className="font-display text-h2 font-black text-text uppercase leading-none">
            SPECIFIC PROGRAMS FOR EVERY GOAL
          </h2>
          <p className="font-body text-body text-text-muted mt-3">
            Designed for real results in Tambaram. Pause on hover to inspect any program.
          </p>
        </motion.div>
      </div>

      {/* DESKTOP AUTO-SCROLLING MARQUEE TRACK (55s linear loop, pauses on hover) */}
      <div className="hidden md:block overflow-hidden py-4 border-y border-line bg-surface-1">
        <div className="animate-marquee hover:[animation-play-state:paused] flex gap-6">
          {marqueeItems.map((prog, index) => (
            <div
              key={`${prog.id}-${index}`}
              className="w-80 shrink-0 bg-bg border border-line rounded-r-0 overflow-hidden flex flex-col justify-between"
            >
              <div className="h-44 relative bg-surface-2 overflow-hidden border-b border-line">
                <img
                  src={prog.imgUrl}
                  alt={prog.title}
                  className="w-full h-full object-cover"
                />
                <div className="photo-scrim" />
                <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-bg/90 border border-line text-red font-wordmark text-[10px] font-bold uppercase tracking-poster">
                  {prog.trainer}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-text uppercase mb-2">
                  {prog.title}
                </h3>
                <p className="font-body text-xs text-text-muted leading-relaxed line-clamp-2">
                  {prog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE TOUCH SCROLL-SNAP ROW */}
      <div className="md:hidden flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory no-scrollbar">
        {programs.map((prog) => (
          <div
            key={prog.id}
            className="snap-center shrink-0 w-72 bg-surface-1 border border-line rounded-r-0 overflow-hidden flex flex-col justify-between"
          >
            <div className="h-40 relative bg-surface-2 overflow-hidden border-b border-line">
              <img
                src={prog.imgUrl}
                alt={prog.title}
                className="w-full h-full object-cover"
              />
              <div className="photo-scrim" />
              <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-bg/90 border border-line text-red font-wordmark text-[10px] font-bold uppercase tracking-poster">
                {prog.trainer}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-display text-base font-bold text-text uppercase mb-1">
                {prog.title}
              </h3>
              <p className="font-body text-xs text-text-muted leading-relaxed">
                {prog.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Standard Single CTA per Section */}
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] mt-8">
        <Button variant="primary" size="md" onClick={handleClaimTrial}>
          <Dumbbell className="w-4 h-4 mr-2" /> Claim Free Trial
        </Button>
      </div>
    </section>
  );
};
