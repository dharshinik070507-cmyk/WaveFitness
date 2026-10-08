"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gymData } from "@/content/gymData";
import { copy } from "@/content/copy";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { Dumbbell } from "lucide-react";
import { Button, HeadingLockup, Photo, Container } from "@/components/ui";
import { fadeInUpVariants, defaultViewport } from "@/lib/motion";

interface ProgramsRowProps {
  onOpenTrial?: () => void;
}

export const ProgramsRow: React.FC<ProgramsRowProps> = ({ onOpenTrial }) => {
  const { lang } = useLanguage();
  const { openTrialModal } = useTrial();
  const textDeck = copy[lang].programs;

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Program Inquiry");
    }
  };

  const programs = gymData.programs;
  const marqueeItems = [...programs, ...programs, ...programs];

  const getProgramSlot = (id: string) => {
    if (id === "weight-loss") return "program_weight_loss";
    if (id === "natural-bodybuilding") return "program_bodybuilding";
    if (id === "beginner-fitness") return "program_beginner";
    return "program_strength";
  };

  return (
    <section id="programs" className="py-[clamp(4rem,9vw,8rem)] bg-bg border-b border-line overflow-hidden">
      <Container className="mb-10">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-left max-w-2xl"
        >
          <HeadingLockup
            as="h2"
            eyebrow={textDeck.eyebrow}
            lines={textDeck.lines}
            onSurface="ink"
          />
          <p className="font-body text-[clamp(1rem,1.15vw,1.375rem)] text-text-muted leading-relaxed mt-3 max-w-[34ch] line-clamp-2">
            {textDeck.subline}
          </p>
        </motion.div>
      </Container>

      {/* DESKTOP AUTO-SCROLLING MARQUEE TRACK (55s linear loop, pauses on hover and focus-within) */}
      <div className="hidden md:block overflow-hidden py-4 border-y border-line bg-surface-1">
        <div className="animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] flex gap-6">
          {marqueeItems.map((prog, index) => (
            <Link
              key={`${prog.id}-${index}`}
              href={`/programs/${prog.id}`}
              className="w-80 shrink-0 bg-bg border border-line rounded-r-0 overflow-hidden flex flex-col justify-between group hover:border-surface-3 transition-colors"
            >
              <div className="relative">
                <Photo slotKey={getProgramSlot(prog.id)} variant="card" />
                <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-bg/90 border border-line text-text-muted font-wordmark text-caption font-bold uppercase tracking-button z-20">
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
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE TOUCH SCROLL-SNAP ROW */}
      <div className="md:hidden flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory no-scrollbar">
        {programs.map((prog) => (
          <Link
            key={prog.id}
            href={`/programs/${prog.id}`}
            className="snap-center shrink-0 w-72 bg-surface-1 border border-line rounded-r-0 overflow-hidden flex flex-col justify-between"
          >
            <div className="relative">
              <Photo slotKey={getProgramSlot(prog.id)} variant="card" />
              <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-bg/90 border border-line text-text-muted font-wordmark text-caption font-bold uppercase tracking-button z-20">
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
          </Link>
        ))}
      </div>

      {/* Standard Single CTA per Section */}
      <Container className="mt-8">
        <Button variant="primary" size="md" onClick={handleClaimTrial}>
          {textDeck.cta}
        </Button>
      </Container>
    </section>
  );
};
