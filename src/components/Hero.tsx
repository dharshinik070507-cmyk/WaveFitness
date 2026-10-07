"use client";

import React from "react";
import { gymData, tamilDictionary } from "@/content/gymData";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { Star, Dumbbell, Phone, MessageCircle, HeartHandshake, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui";

export const Hero: React.FC = () => {
  const { lang } = useLanguage();
  const { openTrialModal } = useTrial();

  const headline = lang === "ta" 
    ? tamilDictionary.hero.headline 
    : "RIDE THE WAVE TO WELLNESS";

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-bg border-b border-line pt-8 pb-16">
      
      {/* Photo Scrim Overlay (Single Direction Scrim) */}
      <div className="photo-scrim z-10"></div>
      <div className="film-grain z-10"></div>

      {/* Oversized Outline Background Word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="outline-word text-[16vw] opacity-10 leading-none">
          WAVE
        </span>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] z-20 w-full flex-1 flex flex-col justify-center">
        
        {/* Desktop Vertical Rotated Side Label */}
        <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 vertical-label pointer-events-none">
          TAMBARAM / CAMP ROAD / CH-73
        </div>

        {/* Asymmetrical Left-Aligned Poster Lockup */}
        <div className="text-left max-w-4xl">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 font-wordmark text-xs font-bold tracking-poster text-red uppercase mb-4">
            <span>01 / UNISEX GYM • 100% NATURAL • NO STEROIDS</span>
          </div>

          {/* Headline */}
          <div className="heading-underline mb-6">
            {lang === "ta" ? (
              <h1 className="font-tamil text-hero font-extrabold text-text leading-tight">
                {headline}
              </h1>
            ) : (
              <h1 className="font-display text-hero font-black text-text uppercase leading-none tracking-tight">
                RIDE THE <span className="text-red">WAVE</span> TO WELLNESS
              </h1>
            )}
          </div>

          {/* Subhead */}
          <p className="font-body text-body-lg text-text-muted max-w-2xl leading-relaxed">
            {lang === "ta" ? (
              tamilDictionary.hero.subhead
            ) : (
              <>
                Unisex gym on <strong className="text-text font-semibold">Camp Road, Tambaram East</strong> with personal attention from Sugu Master & Coach Shimal. Monthly membership from <strong className="text-red-text font-bold">₹{gymData.pricing.monthly.amount}/month</strong> (~₹{gymData.pricing.monthly.perDay}/day).
              </>
            )}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button variant="primary" size="lg" onClick={() => openTrialModal("Hero Pass")}>
              <Dumbbell className="w-5 h-5 mr-2" /> Claim Free Trial Visit
            </Button>

            <a href={`tel:${gymData.contact.phoneTel}`}>
              <Button variant="secondary" size="lg">
                <Phone className="w-4 h-4 text-blue mr-2" /> Call {gymData.contact.phonePoster}
              </Button>
            </a>

            <a href={gymData.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="border-success/40 text-success hover:bg-success hover:text-bg">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
              </Button>
            </a>
          </div>

          {/* Reassurance Sub-Line */}
          <div className="mt-6 flex flex-wrap items-center gap-3 font-body text-xs text-text-muted font-semibold">
            <span className="flex items-center gap-1 text-warning">
              <Star className="w-4 h-4 fill-warning" /> {gymData.rating.stars}★ on Google
            </span>
            <span>•</span>
            <span className="text-text">{gymData.rating.reviewCount}+ Reviews</span>
            <span>•</span>
            <span className="text-success font-bold">Open Daily from 6:00 AM</span>
          </div>

          {/* Review Insight Banner */}
          <div className="mt-6 inline-block p-3 bg-surface-1 border border-line font-body text-xs text-text-muted italic">
            &ldquo;Small floor, big attention. Trainers know your name and personally watch your form.&rdquo;
          </div>
        </div>
      </div>

      {/* 4-Up Benefit Strip Under Hero */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] mt-12 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-surface-1 border border-line">
          
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 bg-surface-2 border border-line text-red flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-wordmark font-bold text-xs uppercase tracking-poster text-text">Personal Attention</h4>
              <p className="font-body text-[11px] text-text-muted">Coaches watch form every set</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 bg-surface-2 border border-line text-blue flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-wordmark font-bold text-xs uppercase tracking-poster text-text">Clean & Cozy</h4>
              <p className="font-body text-[11px] text-text-muted">Cozy floor & modern gear</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 bg-surface-2 border border-line text-text flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-wordmark font-bold text-xs uppercase tracking-poster text-text">Men & Women</h4>
              <p className="font-body text-[11px] text-text-muted">100% Safe unisex space</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 bg-surface-2 border border-line text-success flex items-center justify-center shrink-0">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-wordmark font-bold text-xs uppercase tracking-poster text-text">Fees Make Sense</h4>
              <p className="font-body text-[11px] text-success font-bold">₹{gymData.pricing.monthly.amount}/mo (Just ~₹{gymData.pricing.monthly.perDay}/day)</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
