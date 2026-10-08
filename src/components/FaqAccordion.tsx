"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { copy } from "@/content/copy";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { ChevronDown } from "lucide-react";
import { Button, HeadingLockup, Container } from "@/components/ui";
import { fadeInUpVariants, defaultViewport } from "@/lib/motion";

interface FaqAccordionProps {
  onOpenTrial?: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ onOpenTrial }) => {
  const { lang } = useLanguage();
  const { openTrialModal } = useTrial();
  const textDeck = copy[lang].faq;
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("FAQ Inquiry");
    }
  };

  const faqItems = textDeck.questions;
  const visibleFaqs = showAll ? faqItems : faqItems.slice(0, 6);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-[clamp(4rem,9vw,8rem)] bg-[#fafafa] border-b border-[#e2e2e5] text-text-paper relative" data-surface="paper">
      <Container>
        {/* Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-left max-w-2xl mb-12"
        >
          <HeadingLockup
            as="h2"
            lead={textDeck.eyebrow}
            lines={textDeck.lines}
            onSurface="paper"
          />
          <p className="font-body text-[clamp(1rem,1.15vw,1.375rem)] text-text-muted mt-3 max-w-[34ch] line-clamp-2">
            {textDeck.subline}
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
                className="bg-[#ffffff] border border-[#e2e2e5] rounded-[14px] overflow-hidden shadow-soft"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-text uppercase hover:text-text-muted transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-text-muted font-mono text-sm">Q{idx + 1}.</span> {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-240 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: [0.2, 0.7, 0.2, 1] }}
                      className="px-6 pb-6 pt-0 font-body text-xs sm:text-sm text-text-muted leading-relaxed border-t border-[#e2e2e5]/40 overflow-hidden"
                    >
                      <p className="pt-4">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Show All Toggle Button */}
        {!showAll && faqItems.length > 6 && (
          <div className="mt-6">
            <Button
              variant="secondary"
              size="sm"
              onSurface="paper"
              onClick={() => setShowAll(true)}
            >
              Show All Questions ({faqItems.length})
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
          <Button variant="primary" size="md" onSurface="paper" onClick={handleClaimTrial}>
            {textDeck.cta}
          </Button>
        </motion.div>

      </Container>
    </section>
  );
};
