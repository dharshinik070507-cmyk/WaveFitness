"use client";

import React from "react";
import { motion } from "framer-motion";
import { gymData } from "@/content/gymData";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { copy } from "@/content/copy";
import { Button, HeadingLockup, Container, Photo } from "@/components/ui";
import {
  EASE_CURVE,
  DURATION_SLOW,
  fadeInUpVariants,
} from "@/lib/motion";

interface HeroProps {
  onOpenTrial?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const { lang } = useLanguage();
  const { openTrialModal } = useTrial();

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Hero Pass");
    }
  };

  const textDeck = copy[lang].hero;

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-end overflow-hidden bg-bg border-b border-line pb-[clamp(3rem,6vw,5rem)] pt-[70px]" data-surface="ink">
      {/* Full-bleed Photo Background with Scrim */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Photo slotKey="hero" variant="hero" priority className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-bg/50 z-10 pointer-events-none" />

      <Container className="relative z-20 w-full">
        {/* Left Text Column (Cols 1-6 Desktop) */}
        <div className="max-w-2xl text-left">
          {/* Two-Tier Heading */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION_SLOW, ease: EASE_CURVE }}
          >
            <HeadingLockup
              as="h1"
              isHero
              lead={textDeck.lines[0]}
              lines={[textDeck.lines[1]]}
              onSurface="ink"
            />
          </motion.div>

          {/* ONE Subline */}
          <motion.p
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: DURATION_SLOW, ease: EASE_CURVE, delay: 0.15 }}
            className="font-body text-[clamp(1rem,1.15vw,1.375rem)] text-text-muted leading-relaxed mt-4 max-w-[34ch] line-clamp-2"
          >
            {textDeck.subline}
          </motion.p>

          {/* ONE Red Pill Action CTA */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: DURATION_SLOW, ease: EASE_CURVE, delay: 0.25 }}
            className="mt-8 flex items-center"
          >
            <Button variant="primary" size="md" onClick={handleClaimTrial}>
              {textDeck.cta}
            </Button>
          </motion.div>

          {/* ONE Reassurance Line */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: DURATION_SLOW, ease: EASE_CURVE, delay: 0.35 }}
            className="mt-6 font-body text-xs sm:text-sm text-text-muted font-normal"
          >
            <span>
              {gymData.rating.stars}★ on Google • {gymData.rating.reviewCount}+ reviews • Open from 6 AM
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
