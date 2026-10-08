"use client";

import React from "react";
import { motion } from "framer-motion";
import { gymData } from "@/content/gymData";
import { useTrial } from "@/context/TrialContext";
import { Clock, Sun, Calendar, Dumbbell, AlertCircle } from "lucide-react";
import { Button, HeadingLockup } from "@/components/ui";
import { fadeInUpVariants, staggerContainerVariants, defaultViewport } from "@/lib/motion";

interface TimingsScheduleProps {
  onOpenTrial?: () => void;
}

export const TimingsSchedule: React.FC<TimingsScheduleProps> = ({ onOpenTrial }) => {
  const { openTrialModal } = useTrial();

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Timing Inquiry");
    }
  };

  return (
    <section className="py-[clamp(4rem,9vw,8rem)] bg-paper border-b border-line-paper text-text-paper">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        
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
            lead="GYM TIMINGS & SLOTS"
            lines={["Train on your", "schedule"]}
            emphasisLine={1}
            bar={false}
            onSurface="paper"
          />
          <p className="font-body text-body text-text-muted-paper mt-3">
            Opens sharp at 6:00 AM daily for early morning lifters, students, and working professionals in Camp Road.
          </p>
        </motion.div>

        {/* Timings Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          
          {/* Weekday Schedule */}
          <motion.div variants={fadeInUpVariants} className="p-6 bg-paper-card border border-line-paper rounded-card">
            <div className="w-10 h-10 bg-paper border border-line-paper text-blue flex items-center justify-center mb-4 rounded-badge">
              <Sun className="w-5 h-5 text-blue" />
            </div>
            <span className="font-wordmark text-caption font-bold text-text-muted-paper uppercase tracking-button block">
              CONFIRMED GOOGLE MAPS TIMING
            </span>
            <h3 className="font-display text-2xl font-bold text-text-paper uppercase mt-1">
              Monday – Friday
            </h3>
            <div className="text-2xl font-black text-text-paper mt-2 font-display">
              6:00 AM – 9:30 PM
            </div>
            <p className="font-body text-xs text-text-muted-paper mt-2">
              Opens sharp at 6 AM every morning for early workouts before office & college.
            </p>
          </motion.div>

          {/* Saturday Schedule */}
          <motion.div variants={fadeInUpVariants} className="p-6 bg-paper-card border border-line-paper rounded-card">
            <div className="w-10 h-10 bg-paper border border-line-paper text-blue flex items-center justify-center mb-4 rounded-badge">
              <Clock className="w-5 h-5 text-blue" />
            </div>
            <span className="font-wordmark text-caption font-bold text-text-muted-paper uppercase tracking-button block">
              WEEKEND HEAVY SESSION
            </span>
            <h3 className="font-display text-2xl font-bold text-text-paper uppercase mt-1">
              Saturday
            </h3>
            <div className="text-2xl font-black text-text-paper mt-2 font-display">
              6:30 AM – 9:30 PM
            </div>
            <p className="font-body text-xs text-text-muted-paper mt-2">
              Full day weekend gym floor access for heavy strength & cardio circuits.
            </p>
          </motion.div>

          {/* Sunday & Ladies Slot Placeholders */}
          <motion.div variants={fadeInUpVariants} className="p-6 bg-paper-card border border-line-paper rounded-card">
            <div className="w-10 h-10 bg-paper border border-line-paper text-text-paper flex items-center justify-center mb-4 rounded-badge">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="font-wordmark text-caption font-bold text-text-muted-paper uppercase tracking-button block">
              SUNDAY & LADIES SLOTS
            </span>
            <h3 className="font-display text-2xl font-bold text-text-paper uppercase mt-1">
              Sunday & Ladies Only
            </h3>
            <div className="text-xl font-bold text-text-paper mt-2 font-display">
              5:00 AM – 9:00 PM <span className="text-xs text-text-muted-paper">[PLACEHOLDER]</span>
            </div>
            <p className="font-body text-xs text-text-muted-paper mt-2">
              Sunday timings & exclusive ladies-only hours are flagged for client confirmation.
            </p>
          </motion.div>

        </motion.div>

        {/* Holiday Banner Notice */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-8 p-4 bg-paper-card border border-line-paper rounded-badge flex items-center gap-3 font-body text-xs text-text-muted-paper"
        >
          <AlertCircle className="w-5 h-5 shrink-0 text-text-muted-paper" />
          <span>
            <strong>Festival Notice:</strong> On major public holidays (Pongal, Diwali, Tamil New Year), special morning slots apply.
          </span>
        </motion.div>

        {/* Standard Single CTA per Section */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-8"
        >
          <Button variant="primary" size="md" onSurface="paper" onClick={handleClaimTrial}>
            <Dumbbell className="w-4 h-4 mr-2" /> Claim Free Trial
          </Button>
        </motion.div>

      </div>
    </section>
  );
};
