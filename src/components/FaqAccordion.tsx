"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { faqList, tamilDictionary } from "@/content/gymData";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { ChevronDown, HelpCircle, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui";
import { fadeInUpVariants, defaultViewport } from "@/lib/motion";

interface FaqAccordionProps {
  onOpenTrial?: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ onOpenTrial }) => {
  const { lang } = useLanguage();
  const { openTrialModal } = useTrial();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("FAQ Inquiry");
    }
  };

  const visibleFaqs = showAll ? faqList : faqList.slice(0, 6);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-bg border-b border-line relative">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        
        {/* Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-left max-w-3xl mb-12"
        >
          <span className="font-wordmark text-xs font-bold uppercase tracking-poster text-red block mb-2">
            13 / FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-display text-h2 font-black text-text uppercase leading-none">
            {lang === "ta" ? tamilDictionary.faq.title : "GOT QUESTIONS? WE HAVE ANSWERS"}
          </h2>
          <p className="font-body text-body text-text-muted mt-3">
            Everything you need to know about memberships, trainer guidance, safety, and timings at Camp Road CH-73.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-4xl">
          {visibleFaqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="bg-surface-1 border border-line rounded-r-0 overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-text uppercase hover:text-red transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-red font-mono text-sm">Q{idx + 1}.</span> {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-red shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 font-body text-xs sm:text-sm text-text-muted leading-relaxed border-t border-line/40">
                    <p className="pt-4">{item.a}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Show All Toggle Button */}
        {!showAll && faqList.length > 6 && (
          <div className="mt-6">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowAll(true)}
            >
              Show All Questions ({faqList.length})
            </Button>
          </div>
        )}

        {/* Standard Single CTA per Section */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10"
        >
          <Button variant="primary" size="md" onClick={handleClaimTrial}>
            <Dumbbell className="w-4 h-4 mr-2" /> Claim Free Trial
          </Button>
        </motion.div>

      </div>
    </section>
  );
};
