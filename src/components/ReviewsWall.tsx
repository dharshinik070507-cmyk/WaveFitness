"use client";

import React from "react";
import { motion } from "framer-motion";
import { gymData, seedReviews } from "@/content/gymData";
import { copy } from "@/content/copy";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Button, HeadingLockup, Container } from "@/components/ui";
import { fadeInUpVariants, staggerContainerVariants, defaultViewport } from "@/lib/motion";

interface ReviewsWallProps {
  onOpenTrial?: () => void;
}

export const ReviewsWall: React.FC<ReviewsWallProps> = ({ onOpenTrial }) => {
  const { lang } = useLanguage();
  const { openTrialModal } = useTrial();
  const textDeck = copy[lang].reviews;

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Review Callout Trial");
    }
  };

  return (
    <section id="reviews" className="py-[clamp(4rem,9vw,8rem)] bg-[#fafafa] border-b border-[#e2e2e5] text-text-paper relative" data-surface="paper">
      <Container>
        {/* Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-left max-w-2xl mb-10"
        >
          <HeadingLockup
            as="h2"
            lead={textDeck.eyebrow}
            lines={textDeck.lines}
            onSurface="paper"
          />
          <p className="font-body text-[clamp(1rem,1.15vw,1.375rem)] text-text-muted mt-3 max-w-[34ch] line-clamp-2">
            {gymData.rating.stars}★ Average Rating across {gymData.rating.reviewCount}+ Google Reviews.
          </p>
        </motion.div>

        {/* Top Row Highlights */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-10 p-4 bg-[#ffffff] border border-[#e2e2e5] rounded-[14px] flex flex-wrap items-center justify-between gap-4 shadow-soft"
        >
          <div className="flex items-center gap-2 font-display text-xl font-bold text-text">
            <span className="text-2xl text-text">{gymData.rating.stars} ★</span>
            <span>{gymData.rating.reviewCount}+ Reviews</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={gymData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#fafafa] border border-[#e2e2e5] text-text hover:text-blue font-wordmark text-xs font-bold uppercase tracking-[0.02em] rounded-pill flex items-center gap-1.5 transition-colors"
            >
              Read all reviews on Google <ExternalLink className="w-3.5 h-3.5 text-blue" />
            </a>
          </div>
        </motion.div>

        {/* Full Review Cards Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {seedReviews.map((rev) => (
            <motion.div
              key={rev.id}
              variants={fadeInUpVariants}
              className="p-6 bg-[#ffffff] border border-[#e2e2e5] rounded-[14px] flex flex-col justify-between shadow-soft"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-text">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-text text-text" />
                    ))}
                  </div>
                  <span className="text-caption text-text-muted font-mono">{rev.date}</span>
                </div>

                <div className="text-xs font-bold text-text-muted mb-2 flex items-start gap-1">
                  <Quote className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" />
                  <span>&ldquo;{rev.highlight}&rdquo;</span>
                </div>

                <p className="font-body text-xs text-text-muted leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e2e2e5] flex items-center justify-between">
                <div>
                  <h4 className="font-wordmark font-bold text-xs text-text uppercase">
                    {rev.author}
                  </h4>
                  {rev.badge && (
                    <span className="text-caption text-text-muted font-mono block">
                      {rev.badge} • Google Review
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
