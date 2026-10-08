"use client";

import React from "react";
import { motion } from "framer-motion";
import { gymData } from "@/content/gymData";
import { useTrial } from "@/context/TrialContext";
import { Dumbbell, ShieldCheck, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui";
import { fadeInUpVariants, staggerContainerVariants, defaultViewport } from "@/lib/motion";

interface NaturalStrengthProps {
  onOpenTrial?: () => void;
}

export const NaturalStrength: React.FC<NaturalStrengthProps> = ({ onOpenTrial }) => {
  const { openTrialModal } = useTrial();

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Natural Fitness Feature Inquiry");
    }
  };

  const features = gymData.naturalStrengthFeatures;

  return (
    <section className="py-20 bg-bg border-b border-line">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-left max-w-3xl mb-12"
        >
          <span className="font-wordmark text-xs font-bold uppercase tracking-button text-blue block mb-2">
            06 / NATURAL FITNESS PHILOSOPHY
          </span>
          <h2 className="font-display text-h2 font-black text-text uppercase leading-none">
            100% STEROID-FREE NATURAL STRENGTH
          </h2>
          <p className="font-body text-body text-text-muted mt-3">
            &ldquo;Natural body transformation without using any steroids.&rdquo; Dedicated to building lasting health through proper mechanics, clean Indian nutrition, and personal form checks.
          </p>
        </motion.div>

        {/* Three Feature Panels */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.id}
              variants={fadeInUpVariants}
              className="bg-surface-1 border border-line rounded-r-0 overflow-hidden flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative h-56 bg-surface-2 overflow-hidden border-b border-line flex items-center justify-center p-4">
                <span className="font-wordmark text-xs font-bold text-text-dim tracking-button uppercase">
                  [PHOTO: {feat.title}]
                </span>
                <div className="photo-scrim" />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-bg/90 border border-line text-text font-wordmark text-caption font-bold uppercase tracking-button">
                  100% REAL FLOOR
                </span>
              </div>

              {/* Text Description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-text uppercase mb-2">
                    {feat.title}
                  </h3>
                  <p className="font-body text-xs text-text-muted leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Standard Single CTA per Section */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10"
        >
          <Button variant="primary" size="md" onClick={handleClaimTrial}>
            <Dumbbell className="w-4 h-4 mr-2" /> Claim Free Trial
          </Button>
        </motion.div>

      </div>
    </section>
  );
};
