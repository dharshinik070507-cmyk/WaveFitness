"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, RotateCcw, Dumbbell } from "lucide-react";

interface PlanQuizProps {
  onOpenTrialWithData: (data: any) => void;
}

export const PlanQuiz: React.FC<PlanQuizProps> = ({ onOpenTrialWithData }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: "Weight Loss & Fat Burn",
    experience: "Complete Beginner",
    timing: "Morning (6 AM - 10 AM)",
    budget: "₹999 Monthly Pass",
    womenFriendly: "Yes, female-friendly focus"
  });

  const handleSelect = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(1);
  };

  const getRecommendation = () => {
    if (answers.budget.includes("Quarterly") || answers.goal.includes("Personal")) {
      return {
        planName: "3-Month Quarterly Pass (₹2,499)",
        program: "Custom Personal Transformation Plan",
        reason: "Best value for dedicated 90-day consistency under Sugu Master & Coach Shimal.",
        perDay: "₹28/day (Saves ₹498)"
      };
    }
    return {
      planName: "Monthly Pass (₹999)",
      program: answers.goal,
      reason: "Perfect flexible start for fitness beginners on Camp Road, Tambaram East.",
      perDay: "₹33/day"
    };
  };

  const rec = getRecommendation();

  return (
    <section id="quiz" className="py-16 bg-brand-dark/90 border-y border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-red mb-2 block">
            Interactive Membership Finder
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase">
            Find Your Ideal Wave Plan
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            Answer 4 quick questions to get a personalized recommendation & free trial slot.
          </p>
        </div>

        {/* Quiz Progress Bar */}
        <div className="w-full bg-brand-card h-2 rounded-full mb-8 overflow-hidden border border-brand-border">
          <div
            className="bg-brand-red h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        {/* Step Cards */}
        <div className="bg-brand-card p-6 sm:p-8 rounded-3xl border border-brand-border shadow-2xl">
          {step === 1 && (
            <div>
              <span className="text-xs font-bold text-brand-muted uppercase">Step 1 of 4</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase mt-1 mb-6">
                What is your primary fitness goal?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Weight Loss & Fat Burn",
                  "Muscle Gain (100% Natural)",
                  "Strength & Body Conditioning",
                  "Beginner Fitness & Form Guidance"
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      handleSelect("goal", opt);
                      handleNext();
                    }}
                    className={`p-4 rounded-xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                      answers.goal === opt
                        ? "border-brand-red bg-brand-red/10 text-white"
                        : "border-brand-border bg-brand-dark text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <span>{opt}</span>
                    {answers.goal === opt && <CheckCircle2 className="w-5 h-5 text-brand-red" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <span className="text-xs font-bold text-brand-muted uppercase">Step 2 of 4</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase mt-1 mb-6">
                What is your gym experience level?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Complete Beginner (Need form help)",
                  "Intermediate (Trained before)",
                  "Advanced / Natural Bodybuilder",
                  "Returning After Gap"
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      handleSelect("experience", opt);
                      handleNext();
                    }}
                    className={`p-4 rounded-xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                      answers.experience === opt
                        ? "border-brand-red bg-brand-red/10 text-white"
                        : "border-brand-border bg-brand-dark text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <span>{opt}</span>
                    {answers.experience === opt && <CheckCircle2 className="w-5 h-5 text-brand-red" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <span className="text-xs font-bold text-brand-muted uppercase">Step 3 of 4</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase mt-1 mb-6">
                Preferred workout timing at Camp Road?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Early Morning (6 AM - 9 AM)",
                  "Late Morning (9 AM - 12 PM)",
                  "Evening (5 PM - 8 PM)",
                  "Night (8 PM - 10 PM)"
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      handleSelect("timing", opt);
                      handleNext();
                    }}
                    className={`p-4 rounded-xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                      answers.timing === opt
                        ? "border-brand-red bg-brand-red/10 text-white"
                        : "border-brand-border bg-brand-dark text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <span>{opt}</span>
                    {answers.timing === opt && <CheckCircle2 className="w-5 h-5 text-brand-red" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                ✓ Quiz Completed! Recommended Result:
              </span>
              <div className="p-6 rounded-2xl bg-brand-dark border border-brand-red/40 mb-6">
                <h4 className="font-display text-2xl font-extrabold text-white uppercase">
                  {rec.planName}
                </h4>
                <div className="text-xs text-brand-red font-bold mt-1 uppercase">
                  Program: {rec.program} ({rec.perDay})
                </div>
                <p className="mt-3 text-slate-300 text-sm">{rec.reason}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenTrialWithData({ ...answers, recommendation: rec.planName })}
                  className="flex-1 py-4 bg-brand-red hover:bg-brand-red-hover text-white font-extrabold uppercase tracking-wider rounded-xl shadow-lg shadow-brand-red/30 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Dumbbell className="w-5 h-5" /> Book Free Trial For This Plan
                </button>
                <button
                  onClick={handleReset}
                  className="py-4 px-6 bg-brand-card border border-brand-border text-slate-400 hover:text-white rounded-xl font-bold text-xs uppercase flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Retake Quiz
                </button>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          {step < 4 && (
            <div className="mt-8 flex justify-between items-center pt-4 border-t border-brand-border">
              <button
                disabled={step === 1}
                onClick={() => setStep(step - 1)}
                className={`text-xs font-bold uppercase ${
                  step === 1 ? "text-slate-600 cursor-not-allowed" : "text-slate-400 hover:text-white"
                }`}
              >
                ← Back
              </button>
              <button
                onClick={handleNext}
                className="px-5 py-2.5 bg-brand-red text-white text-xs font-bold uppercase rounded-lg flex items-center gap-1.5 hover:bg-brand-red-hover"
              >
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
