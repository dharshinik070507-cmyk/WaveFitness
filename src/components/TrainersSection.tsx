"use client";

import React from "react";
import { motion } from "framer-motion";
import { gymData } from "@/content/gymData";
import { copy } from "@/content/copy";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { CheckCircle2 } from "lucide-react";
import { Button, HeadingLockup, Photo, Container } from "@/components/ui";
import { fadeInUpVariants, staggerContainerVariants, defaultViewport } from "@/lib/motion";

interface TrainersSectionProps {
  onOpenTrialWithTrainer?: (trainerName: string) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onOpenTrialWithTrainer }) => {
  const { lang } = useLanguage();
  const { openTrialModal } = useTrial();
  const textDeck = copy[lang].coaches;

  const handleClaimTrial = () => {
    openTrialModal("Coaches Section");
  };

  return (
    <section id="coaches" className="py-[clamp(4rem,9vw,8rem)] bg-[#fafafa] border-b border-[#e2e2e5] text-text-paper relative" data-surface="paper">
      <Container>
        {/* Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-left max-w-2xl mb-12"
        >
          <HeadingLockup
            as="h2"
            lead={textDeck.eyebrow}
            lines={textDeck.lines}
            onSurface="paper"
          />
          <p className="font-body text-[clamp(1rem,1.15vw,1.375rem)] text-text-muted mt-3 max-w-[34ch] line-clamp-2">
            {textDeck.subline}
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {gymData.trainers.map((t) => {
            const slotKey = t.id === "sugumar" ? "coach-sugu" : "coach-shimal";
            return (
              <motion.div
                key={t.id}
                variants={fadeInUpVariants}
                className="bg-[#ffffff] border border-[#e2e2e5] rounded-[14px] overflow-hidden flex flex-col justify-between p-6 shadow-soft"
              >
                <div>
                  <div className="relative overflow-hidden rounded-[10px] mb-4">
                    <Photo slotKey={slotKey} variant="portrait" />
                  </div>

                  <span className="font-wordmark text-xs font-bold text-blue uppercase tracking-[0.02em] block">
                    {t.nickname}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-text uppercase mt-1">
                    {t.name}
                  </h3>
                  <p className="font-body text-xs text-text-muted font-semibold mt-1">
                    {t.role}
                  </p>

                  <div className="mt-4 p-3 bg-[#fafafa] border border-[#e2e2e5] font-body text-xs text-text-muted italic rounded-badge">
                    &ldquo;{t.quote}&rdquo;
                  </div>

                  <div className="mt-4 space-y-2">
                    <span className="font-wordmark text-caption font-bold text-text uppercase block tracking-[0.02em]">Key Focus:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {t.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-[#fafafa] border border-[#e2e2e5] text-text-muted font-body text-caption font-bold flex items-center gap-1 rounded-badge"
                        >
                          <CheckCircle2 className="w-3 h-3 text-blue" /> {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Standard Single CTA per Section */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10"
        >
          <Button variant="primary" size="md" onSurface="paper" onClick={handleClaimTrial}>
            Claim Free Trial
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};
