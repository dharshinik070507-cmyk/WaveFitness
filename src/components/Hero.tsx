"use client";

import React from "react";
import { motion } from "framer-motion";
import { gymData, tamilDictionary } from "@/content/gymData";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { Star, Dumbbell, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui";
import {
  EASE_CURVE,
  DURATION_SLOW,
  DURATION_DELIBERATE,
  maskedTextVariants,
  fadeInUpVariants,
} from "@/lib/motion";

interface HeroProps {
  onOpenTrial?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const { lang } = useLanguage();
  const { openTrialModal } = useTrial();

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Hero Pass");
    }
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-bg border-b border-line pt-8 pb-16">
      
      {/* Background Photo with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          alt="Wave Fitness Unisex Gym Floor"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="photo-scrim" />
        <div className="film-grain" />
      </div>

      {/* Hero Background Drifting Outlined Text Ticker */}
      <div className="absolute top-1/3 left-0 right-0 pointer-events-none select-none z-0 overflow-hidden opacity-10">
        <div className="animate-marquee whitespace-nowrap">
          <span className="outline-word text-[14vw] md:text-[10vw] font-black uppercase tracking-tight mr-8">
            RIDE THE WAVE TO WELLNESS • WAVE FITNESS UNISEX • CAMP ROAD TAMBARAM •
          </span>
          <span className="outline-word text-[14vw] md:text-[10vw] font-black uppercase tracking-tight mr-8">
            RIDE THE WAVE TO WELLNESS • WAVE FITNESS UNISEX • CAMP ROAD TAMBARAM •
          </span>
        </div>
      </div>

      {/* Giant Faded Background WF Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="outline-word text-[22vw] opacity-10 leading-none">
          WF
        </span>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] z-20 w-full flex-1 flex flex-col justify-center">
        
        {/* Desktop Vertical Rotated Side Label */}
        <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 vertical-label pointer-events-none">
          TAMBARAM / CAMP ROAD / CH-73
        </div>

        {/* Asymmetrical Left-Aligned Poster Lockup */}
        <div className="text-left max-w-4xl pt-6">
          
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION_SLOW, ease: EASE_CURVE }}
            className="inline-flex items-center gap-2 font-wordmark text-xs font-bold tracking-poster text-red uppercase mb-4"
          >
            <span>01 / UNISEX GYM • 100% NATURAL • NO STEROIDS</span>
          </motion.div>

          {/* Masked Headline Lines Reveal (y: 100% -> 0%) */}
          <div className="heading-underline mb-6">
            {lang === "ta" ? (
              <h1 className="font-tamil text-hero font-extrabold text-text leading-tight">
                {tamilDictionary.hero.headline}
              </h1>
            ) : (
              <h1 className="font-display text-hero font-black text-text uppercase leading-none tracking-tight">
                <div className="overflow-hidden">
                  <motion.div
                    variants={maskedTextVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    RIDE THE <span className="text-red">WAVE</span>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    variants={maskedTextVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: DURATION_DELIBERATE, ease: EASE_CURVE, delay: 0.08 }}
                  >
                    TO WELLNESS
                  </motion.div>
                </div>
              </h1>
            )}
          </div>

          {/* Subhead & Value Prop */}
          <motion.p
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: DURATION_SLOW, ease: EASE_CURVE, delay: 0.2 }}
            className="font-body text-body-lg text-text-muted max-w-2xl leading-relaxed mt-4"
          >
            {lang === "ta" ? (
              tamilDictionary.hero.subhead
            ) : (
              <>
                Clean, friendly, discipline-first unisex gym in <strong className="text-text font-semibold">Tambaram East (Camp Road Junction)</strong> with personal attention from Sugu Master & Coach Shimal. Affordable memberships from <strong className="text-red-text font-bold">₹{gymData.pricing.monthly.amount}/month</strong> (~₹{gymData.pricing.monthly.perDay}/day).
              </>
            )}
          </motion.p>

          {/* Action CTAs: One CTA per section - "Claim Free Trial" */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: DURATION_SLOW, ease: EASE_CURVE, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={handleClaimTrial}
            >
              <Dumbbell className="w-5 h-5 mr-2" />
              {lang === "ta" ? tamilDictionary.hero.ctaFreeTrial : "Claim Free Trial"}
            </Button>

            <a href={`tel:${gymData.contact.phoneTel}`}>
              <Button variant="secondary" size="lg">
                <Phone className="w-4 h-4 text-blue mr-2" /> Call {gymData.contact.phonePoster}
              </Button>
            </a>

            <a href={gymData.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="border-line text-text hover:bg-surface-2">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
              </Button>
            </a>
          </motion.div>

          {/* Reassurance Line */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: DURATION_SLOW, ease: EASE_CURVE, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center gap-3 font-body text-xs text-text-muted font-semibold"
          >
            <span className="flex items-center gap-1 text-text">
              <Star className="w-4 h-4 fill-red text-red" /> {gymData.rating.stars}★ on Google
            </span>
            <span>•</span>
            <span className="text-text">{gymData.rating.reviewCount}+ Verified Reviews</span>
            <span>•</span>
            <span className="text-text font-bold">Open Daily from 6:00 AM</span>
          </motion.div>

          {/* Review Quote Badge */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: DURATION_SLOW, ease: EASE_CURVE, delay: 0.45 }}
            className="mt-6 inline-block p-3 bg-surface-1 border border-line font-body text-xs text-text-muted italic"
          >
            &ldquo;Small floor, big attention. Trainers know your name and personally watch your form every set.&rdquo;
          </motion.div>

        </div>
      </div>
    </section>
  );
};
