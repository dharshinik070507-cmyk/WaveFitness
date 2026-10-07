"use client";

import React, { useState } from "react";
import { gymData, tamilDictionary } from "@/content/gymData";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { Check, Star, Dumbbell, Sparkles, AlertCircle, Info } from "lucide-react";

interface PricingSectionProps {
  onOpenTrialWithPlan?: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrialWithPlan }) => {
  const { lang } = useLanguage();
  const { openTrialModal } = useTrial();

  const handleClaimPlan = (planName: string) => {
    if (onOpenTrialWithPlan) {
      onOpenTrialWithPlan(planName);
    } else {
      openTrialModal(planName);
    }
  };
  const [calcMonths, setCalcMonths] = useState(3);

  const monthlyPrice = gymData.pricing.monthly.amount;
  const quarterlyPrice = gymData.pricing.quarterly.amount;

  // Comparison Calculator
  const totalCostMonthlyRoute = calcMonths * monthlyPrice;
  const quarterlyBundlesNeeded = Math.ceil(calcMonths / 3);
  const totalCostQuarterlyRoute = quarterlyBundlesNeeded * quarterlyPrice;
  const calculatedSavings = totalCostMonthlyRoute - totalCostQuarterlyRoute;

  return (
    <section id="plans" className="py-20 bg-brand-dark/95 border-y border-brand-border relative overflow-hidden">
      
      {/* Background Outline Word */}
      <div className="absolute top-10 right-0 pointer-events-none select-none z-0">
        <span className="outline-word text-[16vw] opacity-10 leading-none">PLANS</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-wordmark text-xs font-bold text-brand-red uppercase tracking-poster mb-2">
            <span>02 / MEMBERSHIP PLANS</span>
            <span className="h-px w-12 bg-brand-red"></span>
          </div>
          <div className="heading-underline mb-4">
            <h2 className="font-display text-h1 font-black text-white uppercase">
              {lang === "ta" ? tamilDictionary.plans.title : "FEES THAT MAKE SENSE"}
            </h2>
          </div>
          <p className="font-body text-body-lg text-slate-400">
            {lang === "ta" 
              ? tamilDictionary.plans.subtitle 
              : "No hidden traps. Simple, transparent pricing with personal coach attention included."}
          </p>

          <div className="mt-4 font-body text-xs font-semibold text-amber-400 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" /> Offer Valid Till: {gymData.pricing.promoEndDate} (Confirm with client)
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Monthly Pass */}
          <div className="p-8 rounded-3xl bg-brand-card border border-brand-border flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <span className="font-wordmark text-xs font-bold text-slate-400 uppercase tracking-poster block">STARTER PASS</span>
              <h3 className="font-display text-2xl font-bold text-white uppercase mt-1">MONTHLY PASS</h3>
              
              {/* Poster Numerals Display */}
              <div className="mt-6 flex items-baseline font-display">
                <span className="text-2xl font-bold text-brand-red self-start mt-2">₹</span>
                <span className="text-price font-black text-white tracking-tightest">999</span>
                <span className="text-xl font-bold text-slate-400 ml-1">/-</span>
                <span className="font-body text-xs text-slate-400 font-bold ml-2">/ month</span>
              </div>

              <p className="mt-1 font-body text-xs text-brand-red font-bold">
                Just ~₹{gymData.pricing.monthly.perDay} / day
              </p>
              
              <hr className="my-6 border-brand-border" />
              
              <ul className="space-y-3 font-body text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-red shrink-0" /> Full Access to Gym Floor & Machines
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-red shrink-0" /> Cardio Suite & Free Weights Access
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-red shrink-0" /> Personal Form Watching by Sugu Master
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-red shrink-0" /> Clean Locker & Drinking Water
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-red shrink-0" /> Basic Dietary Guidance
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleClaimPlan("Monthly Pass (₹999)")}
              className="mt-8 w-full py-3.5 bg-brand-dark border border-brand-border hover:border-slate-500 text-white font-wordmark font-bold uppercase text-xs tracking-poster rounded-xl transition-all"
            >
              Select Monthly Pass
            </button>
          </div>

          {/* Card 2: Quarterly Pass (Featured / Most Popular) */}
          <div className="relative p-8 rounded-3xl bg-brand-card border-2 border-brand-red shadow-2xl shadow-brand-red/10 flex flex-col justify-between transform lg:-translate-y-2">
            
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-red text-white font-wordmark font-bold text-[10px] uppercase tracking-widest shadow-lg flex items-center gap-1">
              <Star className="w-3 h-3 fill-white" /> MOST POPULAR
            </span>

            <div>
              <span className="font-wordmark text-xs font-bold text-brand-red uppercase tracking-poster block">90-DAY TRANSFORMATION</span>
              <h3 className="font-display text-2xl font-bold text-white uppercase mt-1">3-MONTH QUARTERLY</h3>
              
              {/* Poster Numerals Display */}
              <div className="mt-6 flex items-baseline font-display">
                <span className="text-2xl font-bold text-brand-red self-start mt-2">₹</span>
                <span className="text-price font-black text-brand-red tracking-tightest">2,499</span>
                <span className="text-xl font-bold text-slate-400 ml-1">/-</span>
                <span className="font-body text-xs text-slate-400 font-bold ml-2">/ 3 months</span>
              </div>

              <div className="mt-1 flex items-center justify-between font-body text-xs">
                <span className="text-emerald-400 font-bold">Just ~₹{gymData.pricing.quarterly.perDay} / day</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-extrabold">Saves ₹498!</span>
              </div>

              <hr className="my-6 border-brand-border" />

              <ul className="space-y-3 font-body text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-red shrink-0" /> Everything in Monthly Pass
                </li>
                <li className="flex items-center gap-2.5 font-semibold text-white">
                  <Check className="w-4 h-4 text-brand-red shrink-0" /> Ideal 90-Day Natural Bodybuilding Window
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-red shrink-0" /> Priority Form Correction by Coach Shimal
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-red shrink-0" /> Custom Macro Calorie Goal Calculation
                </li>
                <li className="flex items-center gap-2.5 text-emerald-400 font-bold">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Saves ₹498 vs paying monthly
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleClaimPlan("3-Month Quarterly Pass (₹2,499)")}
              className="mt-8 w-full py-4 bg-brand-red hover:bg-brand-red-hover text-white font-wordmark font-bold uppercase text-xs tracking-poster rounded-xl shadow-lg shadow-brand-red/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <Dumbbell className="w-4 h-4" /> Claim Free Trial for 3-Month Plan
            </button>
          </div>

          {/* Card 3: Optional Placeholder Plan Card */}
          <div className="p-8 rounded-3xl bg-brand-card/60 border border-dashed border-slate-700 flex flex-col justify-between">
            <div>
              <span className="font-wordmark text-[10px] font-bold uppercase text-slate-400 tracking-poster block">
                SPECIAL OFFERS
              </span>
              <h3 className="font-display text-xl font-bold text-slate-300 uppercase mt-2">
                PERSONAL TRAINING & ANNUAL
              </h3>
              
              <p className="mt-4 font-body text-xs text-slate-400 leading-relaxed">
                {gymData.pricing.joiningFeeNote}
              </p>
              
              <ul className="mt-6 space-y-2 font-body text-xs text-slate-400">
                <li className="flex items-center gap-2">• 1-on-1 Personal Training with Sugu Master</li>
                <li className="flex items-center gap-2">• Student & Couple Special Discount Offers</li>
                <li className="flex items-center gap-2">• Half-Yearly & Annual Membership Passes</li>
              </ul>
            </div>

            <button
              onClick={() => handleClaimPlan("Custom Inquiry / PT Plan")}
              className="mt-8 w-full py-3.5 bg-brand-dark border border-slate-700 text-slate-300 hover:text-white font-wordmark font-bold uppercase text-xs tracking-poster rounded-xl transition-all"
            >
              Inquire at Reception
            </button>
          </div>

        </div>

        {/* Small Interactive Monthly vs Quarterly Savings Calculator */}
        <div className="mt-16 bg-brand-card p-6 sm:p-8 rounded-3xl border border-brand-border max-w-3xl mx-auto">
          <div className="flex items-center gap-2 font-wordmark text-xs font-bold text-brand-red uppercase tracking-poster mb-2">
            <Info className="w-4 h-4" /> SAVINGS CALCULATOR
          </div>
          <h4 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
            MONTHLY VS. QUARTERLY SAVINGS BREAKDOWN
          </h4>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <label className="block font-wordmark text-xs font-bold text-slate-300 uppercase tracking-poster mb-2">
                DURATION: <span className="text-brand-red">{calcMonths} MONTHS</span>
              </label>
              <input
                type="range"
                min="3"
                max="12"
                step="3"
                value={calcMonths}
                onChange={(e) => setCalcMonths(parseInt(e.target.value))}
                className="w-full accent-brand-red bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div className="p-4 rounded-2xl bg-brand-dark border border-brand-border text-center">
              <span className="font-wordmark text-[10px] font-bold uppercase text-slate-400 tracking-poster">TOTAL SAVINGS</span>
              <div className="font-display text-3xl font-black text-emerald-400 mt-1">
                ₹{calculatedSavings > 0 ? calculatedSavings : 498} SAVED!
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
