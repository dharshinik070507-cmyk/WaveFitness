"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { gymData, tamilDictionary } from "@/content/gymData";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { Check, Star, Dumbbell, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui";
import { fadeInUpVariants, staggerContainerVariants, defaultViewport } from "@/lib/motion";

interface PricingSectionProps {
  onOpenTrialWithPlan?: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrialWithPlan }) => {
  const { lang } = useLanguage();
  const { openTrialModal } = useTrial();
  const [calcMonths, setCalcMonths] = useState(3);

  const handleClaimPlan = (planName: string) => {
    if (onOpenTrialWithPlan) {
      onOpenTrialWithPlan(planName);
    } else {
      openTrialModal(planName);
    }
  };

  const monthlyPrice = gymData.pricing.monthly.amount;
  const quarterlyPrice = gymData.pricing.quarterly.amount;

  const totalCostMonthlyRoute = calcMonths * monthlyPrice;
  const quarterlyBundlesNeeded = Math.ceil(calcMonths / 3);
  const totalCostQuarterlyRoute = quarterlyBundlesNeeded * quarterlyPrice;
  const calculatedSavings = totalCostMonthlyRoute - totalCostQuarterlyRoute;

  return (
    <section id="plans" className="py-20 bg-bg border-b border-line relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-10 right-0 pointer-events-none select-none z-0">
        <span className="outline-word text-[16vw] opacity-10 leading-none">PLANS</span>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-left max-w-3xl mb-12"
        >
          <span className="font-wordmark text-xs font-bold text-red uppercase tracking-poster block mb-2">
            12 / MEMBERSHIP PLANS & PRICING
          </span>
          <h2 className="font-display text-h2 font-black text-text uppercase leading-none">
            {lang === "ta" ? tamilDictionary.plans.title : "FEES THAT MAKE SENSE"}
          </h2>
          <p className="font-body text-body text-text-muted mt-3">
            {lang === "ta" 
              ? tamilDictionary.plans.subtitle 
              : "No hidden traps. Simple, transparent pricing with personal trainer attention included on every pass."}
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          
          {/* Card 1: Monthly Pass */}
          <motion.div variants={fadeInUpVariants} className="p-8 bg-surface-1 border border-line rounded-r-0 flex flex-col justify-between">
            <div>
              <span className="font-wordmark text-xs font-bold text-text-muted uppercase tracking-poster block">STARTER PASS</span>
              <h3 className="font-display text-2xl font-bold text-text uppercase mt-1">MONTHLY PASS</h3>
              
              {/* Poster Numerals Display */}
              <div className="mt-6 flex items-baseline font-display">
                <span className="text-2xl font-bold text-red self-start mt-2">₹</span>
                <span className="text-price font-black text-text tracking-tightest">999</span>
                <span className="text-xl font-bold text-text-muted ml-1">/-</span>
                <span className="font-body text-xs text-text-muted font-bold ml-2">/ month</span>
              </div>

              <p className="mt-1 font-body text-xs text-red-text font-bold">
                Just ~₹{gymData.pricing.monthly.perDay} / day
              </p>
              
              <hr className="my-6 border-line" />
              
              <ul className="space-y-3 font-body text-xs text-text-muted">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-red shrink-0" /> Full Access to Gym Floor & Machines
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-red shrink-0" /> Cardio Suite & Free Weights Access
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-red shrink-0" /> Personal Form Checks by Sugu Master & Shimal
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-red shrink-0" /> Clean Locker & Drinking Water
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button
                variant="secondary"
                size="md"
                onClick={() => handleClaimPlan("Monthly Pass (₹999)")}
                className="w-full"
              >
                <Dumbbell className="w-4 h-4 mr-2" /> Claim Free Trial
              </Button>
            </div>
          </motion.div>

          {/* Card 2: Quarterly Pass (Featured / Most Popular) */}
          <motion.div variants={fadeInUpVariants} className="relative p-8 bg-surface-1 border-2 border-red rounded-r-0 flex flex-col justify-between">
            <span className="absolute -top-3 left-6 px-3 py-0.5 bg-red text-text font-wordmark font-bold text-[10px] uppercase tracking-poster flex items-center gap-1">
              <Star className="w-3 h-3 fill-text" /> MOST POPULAR
            </span>

            <div>
              <span className="font-wordmark text-xs font-bold text-red uppercase tracking-poster block">90-DAY TRANSFORMATION</span>
              <h3 className="font-display text-2xl font-bold text-text uppercase mt-1">3-MONTH QUARTERLY</h3>
              
              {/* Poster Numerals Display */}
              <div className="mt-6 flex items-baseline font-display">
                <span className="text-2xl font-bold text-red self-start mt-2">₹</span>
                <span className="text-price font-black text-red tracking-tightest">2,499</span>
                <span className="text-xl font-bold text-text-muted ml-1">/-</span>
                <span className="font-body text-xs text-text-muted font-bold ml-2">/ 3 months</span>
              </div>

              <div className="mt-1 flex items-center justify-between font-body text-xs">
                <span className="text-red-text font-bold">Just ~₹{gymData.pricing.quarterly.perDay} / day</span>
                <span className="px-2 py-0.5 bg-surface-2 border border-line text-red-text font-bold">Saves ₹498!</span>
              </div>

              <hr className="my-6 border-line" />

              <ul className="space-y-3 font-body text-xs text-text-muted">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-red shrink-0" /> Everything in Monthly Pass
                </li>
                <li className="flex items-center gap-2.5 font-semibold text-text">
                  <Check className="w-4 h-4 text-red shrink-0" /> Ideal 90-Day Natural Transformation Window
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-red shrink-0" /> Priority Form Correction by Coach Shimal
                </li>
                <li className="flex items-center gap-2.5 text-red-text font-bold">
                  <Check className="w-4 h-4 text-red shrink-0" /> Saves ₹498 vs paying 3 monthly passes
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button
                variant="primary"
                size="md"
                onClick={() => handleClaimPlan("3-Month Quarterly Pass (₹2,499)")}
                className="w-full"
              >
                <Dumbbell className="w-4 h-4 mr-2" /> Claim Free Trial
              </Button>
            </div>
          </motion.div>

          {/* Card 3: Optional Placeholder Plan Card */}
          <motion.div variants={fadeInUpVariants} className="p-8 bg-surface-1 border border-dashed border-line rounded-r-0 flex flex-col justify-between">
            <div>
              <span className="font-wordmark text-[10px] font-bold uppercase text-text-dim tracking-poster block">
                SPECIAL OFFERS
              </span>
              <h3 className="font-display text-xl font-bold text-text-muted uppercase mt-2">
                PERSONAL TRAINING & ANNUAL
              </h3>
              
              <p className="mt-4 font-body text-xs text-text-muted leading-relaxed">
                {gymData.pricing.joiningFeeNote}
              </p>
              
              <ul className="mt-6 space-y-2 font-body text-xs text-text-dim">
                <li className="flex items-center gap-2">• 1-on-1 Personal Training with Sugu Master</li>
                <li className="flex items-center gap-2">• Student & Couple Special Discount Offers</li>
                <li className="flex items-center gap-2">• Half-Yearly & Annual Membership Passes</li>
              </ul>
            </div>

            <div className="mt-8">
              <Button
                variant="secondary"
                size="md"
                onClick={() => handleClaimPlan("Custom Inquiry / PT Plan")}
                className="w-full"
              >
                <Dumbbell className="w-4 h-4 mr-2" /> Claim Free Trial
              </Button>
            </div>
          </motion.div>

        </motion.div>

        {/* Monthly vs Quarterly Savings Calculator */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-12 bg-surface-1 p-6 sm:p-8 border border-line rounded-r-0 max-w-3xl"
        >
          <div className="flex items-center gap-2 font-wordmark text-xs font-bold text-red uppercase tracking-poster mb-2">
            <Info className="w-4 h-4" /> SAVINGS CALCULATOR
          </div>
          <h4 className="font-display text-xl font-bold text-text uppercase">
            MONTHLY VS. QUARTERLY SAVINGS BREAKDOWN
          </h4>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <label className="block font-wordmark text-xs font-bold text-text-muted uppercase tracking-poster mb-2">
                DURATION: <span className="text-red">{calcMonths} MONTHS</span>
              </label>
              <input
                type="range"
                min="3"
                max="12"
                step="3"
                value={calcMonths}
                onChange={(e) => setCalcMonths(parseInt(e.target.value))}
                className="w-full accent-red bg-surface-2 cursor-pointer"
              />
            </div>

            <div className="p-4 bg-surface-2 border border-line text-center">
              <span className="font-wordmark text-[10px] font-bold uppercase text-text-dim tracking-poster">TOTAL SAVINGS</span>
              <div className="font-display text-3xl font-black text-red-text mt-1">
                ₹{calculatedSavings > 0 ? calculatedSavings : 498} SAVED!
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
