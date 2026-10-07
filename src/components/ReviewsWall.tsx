"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { gymData, seedReviews } from "@/content/gymData";
import { useTrial } from "@/context/TrialContext";
import { Star, Quote, ExternalLink, ThumbsUp, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui";
import { fadeInUpVariants, staggerContainerVariants, defaultViewport } from "@/lib/motion";

interface ReviewsWallProps {
  onOpenTrial?: () => void;
}

export const ReviewsWall: React.FC<ReviewsWallProps> = ({ onOpenTrial }) => {
  const { openTrialModal } = useTrial();
  const [filterRating, setFilterRating] = useState<number | "all">("all");

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Review Callout Trial");
    }
  };

  const filtered = filterRating === "all"
    ? seedReviews
    : seedReviews.filter((r) => r.rating === filterRating);

  return (
    <section id="reviews" className="py-20 bg-bg border-b border-line relative">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        
        {/* Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-left max-w-3xl mb-10"
        >
          <span className="font-wordmark text-xs font-bold uppercase tracking-poster text-red block mb-2">
            11 / VERIFIED GOOGLE MAPS REVIEWS
          </span>
          <h2 className="font-display text-h2 font-black text-text uppercase leading-none">
            WHAT TAMBARAM MEMBERS SAY
          </h2>
          <p className="font-body text-body text-text-muted mt-3">
            {gymData.rating.stars}★ Average Rating across {gymData.rating.reviewCount}+ Google Reviews (Updated {gymData.rating.lastUpdated}).
          </p>
        </motion.div>

        {/* Top Row Short Quotes Marquee / Highlights */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-10 p-4 bg-surface-1 border border-line flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 font-display text-xl font-bold text-text">
            <span className="text-2xl text-red">{gymData.rating.stars} ★</span>
            <span>{gymData.rating.reviewCount}+ Reviews</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={gymData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-surface-2 border border-line text-text hover:text-blue font-wordmark text-xs font-bold uppercase tracking-poster flex items-center gap-1.5 transition-all"
            >
              Read all reviews on Google <ExternalLink className="w-3.5 h-3.5 text-blue" />
            </a>
          </div>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex justify-start gap-2 mb-8">
          <button
            onClick={() => setFilterRating("all")}
            className={`px-3 py-1.5 font-wordmark text-xs font-bold uppercase tracking-poster transition-all ${
              filterRating === "all"
                ? "bg-red text-text border border-red"
                : "bg-surface-1 text-text-muted border border-line hover:text-text"
            }`}
          >
            All Reviews ({seedReviews.length})
          </button>
          <button
            onClick={() => setFilterRating(5)}
            className={`px-3 py-1.5 font-wordmark text-xs font-bold uppercase tracking-poster transition-all ${
              filterRating === 5
                ? "bg-red text-text border border-red"
                : "bg-surface-1 text-text-muted border border-line hover:text-text"
            }`}
          >
            5-Star Reviews ({seedReviews.filter((r) => r.rating === 5).length})
          </button>
        </div>

        {/* Full Review Cards Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((rev) => (
            <motion.div
              key={rev.id}
              variants={fadeInUpVariants}
              className="p-6 bg-surface-1 border border-line rounded-r-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-red">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-red text-red" />
                    ))}
                  </div>
                  <span className="text-[10px] text-text-dim font-mono">{rev.date}</span>
                </div>

                <div className="text-xs font-bold text-text-muted mb-2 flex items-start gap-1">
                  <Quote className="w-3.5 h-3.5 text-red shrink-0 mt-0.5" />
                  <span>&ldquo;{rev.highlight}&rdquo;</span>
                </div>

                <p className="font-body text-xs text-text-muted leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                <div>
                  <h4 className="font-wordmark font-bold text-xs text-text uppercase">
                    {rev.author}
                  </h4>
                  {rev.badge && (
                    <span className="text-[10px] text-text-dim font-mono block">
                      {rev.badge} • Google Review
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-red-text font-bold uppercase flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3" /> Verified Member
                </span>
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
          <Button variant="primary" size="md" onClick={handleClaimTrial}>
            <Dumbbell className="w-4 h-4 mr-2" /> Claim Free Trial
          </Button>
        </motion.div>

      </div>
    </section>
  );
};
