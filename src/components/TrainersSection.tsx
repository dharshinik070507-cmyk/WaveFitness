"use client";

import React from "react";
import { motion } from "framer-motion";
import { gymData } from "@/content/gymData";
import { useTrial } from "@/context/TrialContext";
import { Award, CheckCircle2, Dumbbell, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { fadeInUpVariants, staggerContainerVariants, defaultViewport } from "@/lib/motion";

interface TrainersSectionProps {
  onOpenTrialWithTrainer?: (trainerName: string) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onOpenTrialWithTrainer }) => {
  const { openTrialModal } = useTrial();

  const handleTrainerClick = (trainerName: string) => {
    if (onOpenTrialWithTrainer) {
      onOpenTrialWithTrainer(trainerName);
    } else {
      openTrialModal(undefined, { trainer: trainerName });
    }
  };

  return (
    <section id="coaches" className="py-20 bg-bg border-b border-line relative">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        
        {/* Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-left max-w-3xl mb-12"
        >
          <span className="font-wordmark text-xs font-bold uppercase tracking-poster text-red block mb-2">
            07 / MEET THE COACHES
          </span>
          <h2 className="font-display text-h2 font-black text-text uppercase leading-none">
            PERSONAL ATTENTION ON EVERY SET
          </h2>
          <p className="font-body text-body text-text-muted mt-3">
            At Wave Fitness Tambaram, trainers don&apos;t sit behind desks — they actively watch your form, correct postures, and keep you disciplined.
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
          {gymData.trainers.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeInUpVariants}
              className="bg-surface-1 border border-line rounded-r-0 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badge */}
                <div className="h-72 relative bg-surface-2 overflow-hidden border-b border-line">
                  <img
                    src={t.photoUrl}
                    alt={t.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="photo-scrim" />
                  <span className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-red text-text font-wordmark font-bold text-[10px] uppercase tracking-poster rounded-r-0 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> Verified Coach in Member Reviews
                  </span>
                </div>

                {/* Info Content */}
                <div className="p-6">
                  <span className="font-wordmark text-xs font-bold text-red uppercase tracking-poster block">
                    {t.nickname}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-text uppercase mt-0.5">
                    {t.name}
                  </h3>
                  <p className="font-body text-xs text-text-muted font-semibold mt-1">
                    {t.role}
                  </p>

                  <div className="mt-4 p-3 bg-surface-2 border border-line font-body text-xs text-text-muted italic">
                    &ldquo;{t.quote}&rdquo;
                  </div>

                  <div className="mt-4 space-y-2">
                    <span className="font-wordmark text-[11px] font-bold text-text uppercase block tracking-poster">Key Focus Areas:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {t.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-surface-2 border border-line text-text-muted font-body text-[10px] font-bold flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-red" /> {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleTrainerClick(t.nickname)}
                  className="w-full"
                >
                  <Dumbbell className="w-4 h-4 mr-2" /> Train with {t.nickname.split('/')[0]}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Verification Note (Never invent credentials) */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-8 p-4 bg-surface-1 border border-line text-xs text-text-muted"
        >
          <AlertCircle className="w-4 h-4 text-text inline-block mr-1.5" />
          <strong className="text-text">Client Confirmation Note:</strong> Trainer full names, official photo portraits, certifications, and experience are kept in gymData for client confirmation before publication.
        </motion.div>

      </div>
    </section>
  );
};
