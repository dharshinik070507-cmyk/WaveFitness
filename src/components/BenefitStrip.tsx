"use client";

import React from "react";
import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { HeartHandshake, ShieldCheck, Users, Dumbbell } from "lucide-react";
import { Button, HeadingLockup, Section } from "@/components/ui";
import { fadeInUpVariants, staggerContainerVariants, defaultViewport } from "@/lib/motion";

interface BenefitStripProps {
  onOpenTrial?: () => void;
}

export const BenefitStrip: React.FC<BenefitStripProps> = ({ onOpenTrial }) => {
  const { lang } = useLanguage();
  const { openTrialModal } = useTrial();
  const textDeck = copy[lang].benefits;

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Benefits Pass");
    }
  };

  const icons = [HeartHandshake, ShieldCheck, Users, Dumbbell];

  return (
    <Section surface="paper" sectionKey="benefits">
      {/* Section Header */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="text-left max-w-3xl mb-12"
      >
        <HeadingLockup
          as="h2"
          lead={textDeck.eyebrow}
          lines={textDeck.lines}
          bar={false}
          onSurface="paper"
        />
        <p className="font-body text-base text-text-muted mt-3">
          {textDeck.subline}
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
        {textDeck.items.map((item, idx) => {
          const IconComponent = icons[idx] || Dumbbell;
          return (
            <motion.div
              key={idx}
              variants={fadeInUpVariants}
              className="p-6 bg-surface-1 border border-line rounded-card flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-surface-2 border border-line flex items-center justify-center text-text mb-6 rounded-badge">
                  <IconComponent className="w-6 h-6 text-text" />
                </div>
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.04em] text-text mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-text-muted leading-relaxed">
                  {item.line}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Action CTA */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-10"
      >
        <Button variant="primary" size="md" onSurface="paper" onClick={handleClaimTrial}>
          {textDeck.cta}
        </Button>
      </motion.div>
    </Section>
  );
};
