"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { gymData } from "@/content/gymData";
import { useTrial } from "@/context/TrialContext";
import { Dumbbell, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui";

interface WeekStripProps {
  onOpenTrial?: () => void;
}

export const WeekStrip: React.FC<WeekStripProps> = ({ onOpenTrial }) => {
  const { openTrialModal } = useTrial();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Workout Split Inquiry");
    }
  };

  // Framer Motion Scroll-Linked Progress for Desktop Sticky Pinned Scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0.0 to 1.0) to active day index 0..6
  const activeIndexTransform = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = activeIndexTransform.on("change", (latest) => {
      const idx = Math.min(6, Math.max(0, Math.round(latest)));
      setDesktopActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [activeIndexTransform]);

  const days = gymData.sampleWeek;
  const activeDay = days[desktopActiveIndex] || days[0];
  const mobileDay = days[mobileActiveIndex] || days[0];

  return (
    <section id="week" className="bg-bg border-b border-line">
      
      {/* DESKTOP STICKY SCROLL-LINKED SECTION (height: 250vh) */}
      <div ref={sectionRef} className="hidden md:block relative h-[250vh]">
        <div className="sticky top-24 max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] py-12">
          
          {/* Header */}
          <div className="text-left max-w-3xl mb-8">
            <span className="font-wordmark text-xs font-bold uppercase tracking-poster text-red block mb-2">
              04 / WORKOUT STRUCTURE
            </span>
            <h2 className="font-display text-h2 font-black text-text uppercase leading-none">
              KNOW EXACTLY WHAT TO TRAIN, EVERY DAY
            </h2>
            <p className="font-body text-body text-text-muted mt-2">
              Structured progressive splits planned by Sugu Master & Coach Shimal. Scroll down to cycle through the week.
            </p>
          </div>

          {/* Day Selector Buttons M T W T F S S */}
          <div className="flex items-center gap-2 mb-8 border-b border-line pb-4">
            {days.map((d, index) => {
              const isActive = index === desktopActiveIndex;
              return (
                <button
                  key={index}
                  onClick={() => setDesktopActiveIndex(index)}
                  className={`w-12 h-14 font-display font-black text-xl rounded-r-0 flex flex-col items-center justify-center transition-all ${
                    isActive
                      ? "bg-red text-text border-2 border-red shadow-md"
                      : "bg-surface-1 text-text-muted border border-line hover:border-line/80 hover:text-text"
                  }`}
                >
                  <span className="text-xs font-wordmark text-text-muted opacity-80">{d.dayLetter}</span>
                  <span>{d.dayLetter}</span>
                </button>
              );
            })}
          </div>

          {/* Active Day Detail Panel Cross-Fade */}
          <div className="min-h-[220px] bg-surface-1 border border-line p-8 rounded-r-0 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={desktopActiveIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.24, ease: [0.2, 0.7, 0.2, 1] }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-surface-2 border border-line text-red font-wordmark text-xs font-bold uppercase tracking-poster">
                      {activeDay.dayName}
                    </span>
                    <span className="text-xs text-text-dim font-mono">
                      Day 0{desktopActiveIndex + 1} of 07
                    </span>
                  </div>
                  <span className="text-xs font-bold text-red-text uppercase tracking-poster">
                    {activeDay.trainerNote}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-text uppercase">
                  {activeDay.focus}
                </h3>

                <p className="font-body text-body text-text-muted max-w-3xl leading-relaxed">
                  {activeDay.details}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-text-muted italic">
                  <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                  <span>Personal form check by trainers included on every routine.</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button variant="primary" size="md" onClick={handleClaimTrial}>
              <Dumbbell className="w-4 h-4 mr-2" /> Claim Free Trial
            </Button>
          </div>

        </div>
      </div>

      {/* MOBILE NON-PINNED SWIPEABLE SCROLL-SNAP ROW */}
      <div className="md:hidden py-12 px-4">
        <div className="text-left mb-6">
          <span className="font-wordmark text-xs font-bold uppercase tracking-poster text-red block mb-1">
            04 / WORKOUT STRUCTURE
          </span>
          <h2 className="font-display text-2xl font-black text-text uppercase leading-none">
            KNOW EXACTLY WHAT TO TRAIN, EVERY DAY
          </h2>
        </div>

        {/* 7-Day Letters Snap Track */}
        <div className="flex gap-2 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
          {days.map((d, index) => {
            const isActive = index === mobileActiveIndex;
            return (
              <button
                key={index}
                onClick={() => setMobileActiveIndex(index)}
                className={`snap-center shrink-0 w-12 h-14 font-display font-black text-lg rounded-r-0 flex flex-col items-center justify-center transition-all ${
                  isActive
                    ? "bg-red text-text border-2 border-red"
                    : "bg-surface-1 text-text-muted border border-line"
                }`}
              >
                <span className="text-[10px] font-wordmark text-text-dim">{d.dayName.substring(0, 3)}</span>
                <span>{d.dayLetter}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Active Day Detail Card */}
        <div className="p-6 bg-surface-1 border border-line rounded-r-0 mt-2 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 bg-surface-2 border border-line text-red font-wordmark text-xs font-bold uppercase">
              {mobileDay.dayName}
            </span>
            <span className="text-[11px] text-red-text font-bold uppercase">
              {mobileDay.trainerNote}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold text-text uppercase">
            {mobileDay.focus}
          </h3>

          <p className="font-body text-xs text-text-muted leading-relaxed">
            {mobileDay.details}
          </p>

          <div className="pt-2">
            <Button variant="primary" size="md" onClick={handleClaimTrial} className="w-full">
              <Dumbbell className="w-4 h-4 mr-2" /> Claim Free Trial
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};
