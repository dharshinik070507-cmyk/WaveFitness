"use client";

import React from "react";
import { motion } from "framer-motion";
import { gymData } from "@/content/gymData";
import { useTrial } from "@/context/TrialContext";
import { ShieldAlert, Youtube, ArrowUpRight, Award, CheckCircle2, Dumbbell, Utensils } from "lucide-react";
import { Button } from "@/components/ui";
import { fadeInUpVariants, staggerContainerVariants, defaultViewport } from "@/lib/motion";

interface NaturalTransformationsProps {
  onOpenTrial?: () => void;
}

export const NaturalTransformations: React.FC<NaturalTransformationsProps> = ({ onOpenTrial }) => {
  const { openTrialModal } = useTrial();
  const { showTransformations, showDietGuidance, consentFlag, items } = gymData.transformations;

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Transformation Inquiry");
    }
  };

  if (!showTransformations) return null;

  return (
    <section id="progress" className="py-20 bg-bg border-b border-line relative">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-left max-w-3xl mb-12"
        >
          <span className="font-wordmark text-xs font-bold uppercase tracking-poster text-red block mb-2">
            08 / NATURAL MEMBER PROGRESS
          </span>
          <h2 className="font-display text-h2 font-black text-text uppercase leading-none">
            REAL NATURAL TRANSFORMATIONS
          </h2>
          <p className="font-body text-body text-text-muted mt-3">
            Built through progressive strength, consistent attendance, and clean Indian nutrition without dangerous shortcuts.
          </p>
        </motion.div>

        {/* Transformations Cards Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUpVariants}
              className="bg-surface-1 border border-line p-6 rounded-r-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-text uppercase">
                      {item.name}
                    </h3>
                    <span className="font-wordmark text-xs text-red font-bold uppercase block">
                      {item.duration}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-surface-2 border border-line text-red-text font-wordmark text-[10px] font-bold uppercase tracking-poster">
                    Verified Consent ✓
                  </span>
                </div>

                <div className="p-3 bg-surface-2 border border-line mb-4 font-body text-xs font-bold text-text">
                  Achievement: {item.achievement}
                </div>

                <p className="font-body text-xs text-text-muted leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Optional Diet Guidance Banner behind gymData toggle */}
              {showDietGuidance && (
                <div className="mt-4 pt-4 border-t border-line flex items-center gap-2 font-body text-xs text-text-muted">
                  <Utensils className="w-4 h-4 text-blue shrink-0" />
                  <span>Includes simple Indian diet calorie guidance & macro balance.</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Consent Note Banner */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-8 p-4 bg-surface-1 border border-line text-xs text-text-muted flex items-center justify-between flex-wrap gap-2"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-red shrink-0" />
            <span className="font-bold text-text">{consentFlag}</span>
          </div>
          <a
            href={gymData.social.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue hover:underline font-wordmark font-bold uppercase tracking-poster flex items-center gap-1"
          >
            <Youtube className="w-4 h-4 text-red" /> Watch Workout Vlogs on YouTube <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Standard Single CTA per Section */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-8"
        >
          <Button variant="primary" size="md" onClick={handleClaimTrial}>
            <Dumbbell className="w-4 h-4 mr-2" /> Claim Free Trial
          </Button>
        </motion.div>

      </div>
    </section>
  );
};
