"use client";

import React from "react";
import { motion } from "framer-motion";
import { gymData } from "@/content/gymData";
import { useTrial } from "@/context/TrialContext";
import { HeartHandshake, ShieldCheck, Users, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui";
import { fadeInUpVariants, staggerContainerVariants, defaultViewport } from "@/lib/motion";

interface BenefitStripProps {
  onOpenTrial?: () => void;
}

export const BenefitStrip: React.FC<BenefitStripProps> = ({ onOpenTrial }) => {
  const { openTrialModal } = useTrial();

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal();
    }
  };

  const benefits = [
    {
      icon: HeartHandshake,
      title: "Personal Attention",
      description: "Sugu Master & Shimal personally watch your form on every set. No beginner is left alone.",
      highlight: "Personal form checks daily",
    },
    {
      icon: ShieldCheck,
      title: "Clean & Maintained",
      description: "Spotless gym floor, disinfected weight plates, and smooth cable pulleys maintained daily.",
      highlight: "High hygiene standards",
    },
    {
      icon: Users,
      title: "Friendly Unisex Environment",
      description: "100% respectful and welcoming atmosphere for men, women, couples, and students alike.",
      highlight: "Safe & comfortable space",
    },
    {
      icon: Dumbbell,
      title: "Fees That Make Sense",
      description: `₹${gymData.pricing.monthly.amount}/month (~₹${gymData.pricing.monthly.perDay}/day) or ₹${gymData.pricing.quarterly.amount} quarterly. Honest pricing, no traps.`,
      highlight: `Only ₹${gymData.pricing.monthly.amount}/month`,
    },
  ];

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
          <span className="font-wordmark text-xs font-bold uppercase tracking-poster text-red block mb-2">
            03 / WHY TAMBARAM CHOOSES WAVE FITNESS
          </span>
          <h2 className="font-display text-h2 font-black text-text uppercase leading-none">
            BUILT FOR DISCIPLINE, NOT FLASHY SAAS MARKETING
          </h2>
          <p className="font-body text-body text-text-muted mt-3">
            Everything you need for natural transformation without high commercial chain costs.
          </p>
        </motion.div>

        {/* 4-Column Benefit Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUpVariants}
              className="p-6 bg-surface-1 border border-line rounded-r-0 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-surface-2 border border-line flex items-center justify-center text-text mb-6">
                  <b.icon className="w-6 h-6 text-red" />
                </div>
                <h3 className="font-wordmark text-sm font-bold uppercase tracking-poster text-text mb-2">
                  {b.title}
                </h3>
                <p className="font-body text-xs text-text-muted leading-relaxed mb-4">
                  {b.description}
                </p>
              </div>
              <span className="font-wordmark text-[11px] font-bold text-red-text uppercase tracking-poster">
                → {b.highlight}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Standard CTA per Section */}
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
