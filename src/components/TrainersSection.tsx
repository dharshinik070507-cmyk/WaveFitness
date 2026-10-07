"use client";

import React from "react";
import { gymData } from "@/content/gymData";
import { Award, CheckCircle2, Dumbbell, AlertTriangle } from "lucide-react";
import { useTrial } from "@/context/TrialContext";

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
    <section id="trainers" className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">
            Meet The Coaches
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase">
            Personal Attention On Every Set
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            At Wave Fitness Tambaram, trainers don&apos;t just sit behind desks — they actively correct your form, motivate your sets, and keep you safe.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {gymData.trainers.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl bg-brand-card border border-brand-border overflow-hidden hover:border-brand-red/50 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badge */}
                <div className="h-72 relative bg-slate-900 overflow-hidden">
                  <img
                    src={t.photoUrl}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent"></div>
                  <span className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-brand-red/90 backdrop-blur-md text-white font-extrabold text-[10px] uppercase tracking-wider rounded-md flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> Verified in Reviews
                  </span>
                </div>

                {/* Info Content */}
                <div className="p-6">
                  <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider block">
                    {t.nickname}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white uppercase mt-0.5">
                    {t.name}
                  </h3>
                  <p className="text-xs text-brand-muted font-semibold mt-1">
                    {t.role}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-brand-dark/80 border border-brand-border text-xs text-slate-300 italic">
                    &ldquo;{t.quote}&rdquo;
                  </div>

                  <div className="mt-4 space-y-2">
                    <span className="text-[11px] font-bold text-white uppercase block">Key Focus Areas:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {t.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-brand-dark border border-brand-border text-slate-300 text-[10px] font-semibold flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-brand-red" /> {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleTrainerClick(t.nickname)}
                  className="w-full py-3.5 bg-brand-red hover:bg-brand-red-hover text-white font-black uppercase text-xs rounded-xl shadow-lg shadow-brand-red/20 transition-all flex items-center justify-center gap-2"
                >
                  <Dumbbell className="w-4 h-4" /> Train with {t.nickname.split('/')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note (Rule requirement: Never invent credentials) */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-2xl bg-brand-card/60 border border-brand-border text-center text-xs text-slate-400">
          <AlertTriangle className="w-4 h-4 text-amber-400 inline-block mr-1.5" />
          <strong className="text-slate-200">Client Note:</strong> Trainer full names, official photo portraits, certifications, and years of experience are stored for client confirmation before publication.
        </div>

      </div>
    </section>
  );
};
