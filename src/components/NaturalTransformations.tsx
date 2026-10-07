"use client";

import React from "react";
import { gymData } from "@/content/gymData";
import { ShieldAlert, Youtube, ArrowUpRight, Award, CheckCircle2 } from "lucide-react";

interface NaturalTransformationsProps {
  onOpenTrial: () => void;
}

export const NaturalTransformations: React.FC<NaturalTransformationsProps> = ({ onOpenTrial }) => {
  const transformations = [
    {
      id: "t1",
      name: "Harish R.",
      duration: "3 Months Personal Training",
      result: "-12 kg Fat Loss & Core Muscle Definition",
      story: "Transformed posture and overall stamina under Sugu Master. Built 100% naturally with progressive weight training and home Indian diet tweaks.",
      consentOnFile: true,
      imageBefore: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      imageAfter: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "t2",
      name: "Monisha C.",
      duration: "90 Days Consistency",
      result: "+4 kg Lean Muscle & Confidence Boost",
      story: "Started as a complete beginner intimidated by weights. Coach Shimal and Sugumar Anna taught proper form every set.",
      consentOnFile: true,
      imageBefore: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80",
      imageAfter: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-brand-dark/90 border-y border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red font-bold text-xs uppercase tracking-widest mb-3">
            <Award className="w-4 h-4" /> 100% Natural Guarantee
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase">
            Natural Body Transformations
          </h2>
          <p className="mt-3 text-slate-300 text-base font-semibold">
            &ldquo;Natural body transformation without using any steroids.&rdquo;
          </p>
          <p className="mt-2 text-slate-400 text-xs max-w-xl mx-auto">
            We reject synthetic shortcuts. Real muscle, metabolic health, and strength take discipline, clean nutrition, and proper form.
          </p>
        </div>

        {/* Transformations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {transformations.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-brand-card border border-brand-border p-6 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white uppercase">
                      {item.name}
                    </h3>
                    <span className="text-xs text-brand-red font-bold uppercase block">
                      {item.duration}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold uppercase">
                    Consent On File ✓
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-brand-dark border border-brand-border mb-4 text-xs font-bold text-cyan-400">
                  Result: {item.result}
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.story}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between">
                <a
                  href={gymData.social.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-bold"
                >
                  <Youtube className="w-4 h-4 text-red-500" /> Watch Full Story on YouTube <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Steroid-Free & Disclaimer Box */}
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-3xl bg-brand-card border border-brand-border text-center">
          <h4 className="font-display text-lg font-bold text-white uppercase flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Why Wave Fitness Stands By Natural Lifting
          </h4>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Steroids offer short-term illusions with long-term organ damage. At Wave Fitness, our natural methodology focuses on strength progression, correct biomechanics, daily consistency, and authentic food.
          </p>

          <div className="mt-4 pt-3 border-t border-brand-border/60 text-[11px] text-slate-500 italic">
            <ShieldAlert className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
            Disclaimer: Individual transformation results vary based on starting fitness level, diet compliance, and workout regularity.
          </div>
        </div>

      </div>
    </section>
  );
};
