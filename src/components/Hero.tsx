"use client";

import React, { useState } from "react";
import { gymData, tamilDictionary } from "@/content/gymData";
import { useLanguage } from "@/context/LanguageContext";
import { Star, Dumbbell, Phone, MessageCircle, ShieldCheck, HeartHandshake, Award, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const { lang } = useLanguage();
  const [selectedHeadlineIdx, setSelectedHeadlineIdx] = useState(0);

  const headlineOptions = [
    "RIDE THE WAVE TO WELLNESS",
    "TAMBARAM'S FRIENDLIEST UNISEX GYM",
    "REAL TRAINERS. REAL RESULTS. 100% NATURAL."
  ];

  const activeHeadline = lang === "ta" 
    ? tamilDictionary.hero.headline 
    : headlineOptions[selectedHeadlineIdx];

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-brand-dark pt-8 pb-16">
      
      {/* Dark Moody Gym Photography Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 transform transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')`
        }}
      ></div>

      {/* Dramatic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent z-0"></div>

      {/* Oversized Outline Stroke Background Word (Gritty Gym Poster Feature) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="outline-word text-[14vw] lg:text-[18vw] opacity-10 leading-none">
          WAVE
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex-1 flex flex-col justify-center">
        
        {/* Desktop Vertical Rotated Side Label */}
        <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 vertical-label pointer-events-none">
          TAMBARAM / CAMP ROAD / CH-73
        </div>

        {/* Headline Option Switcher Bar */}
        <div className="flex justify-start sm:justify-center mb-6">
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-brand-card/90 border border-brand-border/80 backdrop-blur-md">
            <span className="font-wordmark text-[10px] uppercase font-bold text-brand-muted px-2 tracking-poster flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-red" /> TAGLINE:
            </span>
            {headlineOptions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedHeadlineIdx(idx)}
                className={`px-3 py-1 rounded-full font-wordmark text-[10px] font-bold tracking-poster uppercase transition-all ${
                  selectedHeadlineIdx === idx
                    ? "bg-brand-red text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                OPT {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Left-Aligned Poster Lockup */}
        <div className="text-left max-w-4xl">
          
          {/* Quiet, Wide-Tracked Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 font-wordmark text-xs font-bold tracking-poster text-brand-red uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping"></span>
            01 / UNISEX GYM • 100% NATURAL • NO STEROIDS
          </div>

          {/* Huge Display Headline (Extreme Scale Contrast) */}
          <div className="heading-underline mb-6">
            {lang === "ta" ? (
              <h1 className="font-tamil text-hero font-extrabold text-white leading-tight">
                {activeHeadline}
              </h1>
            ) : (
              <h1 className="font-display text-hero font-black text-white uppercase leading-none tracking-tight">
                {activeHeadline.includes("WAVE") ? (
                  <>
                    {activeHeadline.split("WAVE")[0]}
                    <span className="text-[#E10600]">WAVE</span>
                    {activeHeadline.split("WAVE")[1]}
                  </>
                ) : (
                  activeHeadline
                )}
              </h1>
            )}
          </div>

          {/* Subhead */}
          <p className="mt-4 font-body text-body-lg text-slate-300 max-w-2xl leading-relaxed">
            {lang === "ta" ? (
              tamilDictionary.hero.subhead
            ) : (
              <>
                Unisex gym on <strong className="text-white font-semibold">Camp Road, Tambaram East</strong> with personal attention from Sugu Master & Coach Shimal. Monthly membership from <strong className="text-brand-red font-bold">₹999/month</strong> (~₹33/day).
              </>
            )}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenTrial}
              className="px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-white font-wordmark font-bold text-xs uppercase tracking-poster rounded-xl shadow-xl shadow-brand-red/30 hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <Dumbbell className="w-5 h-5" /> Claim Free Trial Visit
            </button>

            <a
              href={`tel:${gymData.contact.phoneTel}`}
              className="px-6 py-4 bg-brand-card border border-brand-border hover:border-slate-500 text-white font-wordmark font-bold text-xs uppercase tracking-poster rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-blue" /> Call {gymData.contact.phonePoster}
            </a>

            <a
              href={gymData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 text-emerald-400 font-wordmark font-bold text-xs uppercase tracking-poster rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>

          {/* Reassurance Sub-Line */}
          <div className="mt-6 flex flex-wrap items-center gap-3 font-body text-xs text-slate-400 font-semibold">
            <span className="flex items-center gap-1 text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" /> 4.9★ on Google
            </span>
            <span>•</span>
            <span className="text-slate-200">365+ Reviews</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">Open Daily from 6:00 AM</span>
          </div>

          {/* Review Insight Banner */}
          <div className="mt-6 inline-block p-3 rounded-xl bg-brand-card/90 border border-brand-border font-body text-xs text-slate-300 italic">
            &ldquo;Small floor, big attention. Trainers know your name and personally watch your form.&rdquo;
          </div>
        </div>
      </div>

      {/* 4-Up Benefit Strip Under Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-brand-card/90 border border-brand-border backdrop-blur-md">
          
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 text-brand-red flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-wordmark font-bold text-xs uppercase tracking-poster text-white">Personal Attention</h4>
              <p className="font-body text-[11px] text-brand-muted">Coaches watch form every set</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-wordmark font-bold text-xs uppercase tracking-poster text-white">Clean & Cozy</h4>
              <p className="font-body text-[11px] text-brand-muted">Cozy floor & modern gear</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-brand-blue flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-wordmark font-bold text-xs uppercase tracking-poster text-white">Men & Women</h4>
              <p className="font-body text-[11px] text-brand-muted">100% Safe unisex space</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-wordmark font-bold text-xs uppercase tracking-poster text-white">Fees Make Sense</h4>
              <p className="font-body text-[11px] text-emerald-400 font-bold">₹999/mo (Just ₹33/day)</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
