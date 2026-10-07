"use client";

import React, { useState } from "react";
import { gymData, seedReviews } from "@/content/gymData";
import { Star, Quote, ExternalLink, ThumbsUp } from "lucide-react";

export const ReviewsWall: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | "all">("all");

  const filtered = filterRating === "all"
    ? seedReviews
    : seedReviews.filter((r) => r.rating === filterRating);

  return (
    <section id="reviews" className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase mb-3">
            <Star className="w-4 h-4 fill-amber-400" /> Google Verified Reviews
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase">
            What Members Say About Wave Fitness
          </h2>

          {/* Aggregate Badge */}
          <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-brand-card px-4 py-2 rounded-2xl border border-brand-border">
              <span className="font-display text-3xl font-black text-amber-400">4.9</span>
              <div className="flex flex-col text-left">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 font-bold">
                  {gymData.rating.reviewCount}+ Google Reviews (Updated {gymData.rating.lastUpdated})
                </span>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/w4fv65tambaram"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-brand-card hover:bg-slate-800 border border-brand-border text-white text-xs font-bold uppercase rounded-xl flex items-center gap-2 transition-all"
            >
              Read All On Google <ExternalLink className="w-4 h-4 text-brand-blue" />
            </a>

            <a
              href="https://maps.app.goo.gl/w4fv65tambaram"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-950 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900 text-xs font-bold uppercase rounded-xl flex items-center gap-2 transition-all"
            >
              Leave A Google Review
            </a>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setFilterRating("all")}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
              filterRating === "all"
                ? "bg-brand-red text-white"
                : "bg-brand-card text-slate-400 hover:text-white border border-brand-border"
            }`}
          >
            All Reviews ({seedReviews.length})
          </button>
          <button
            onClick={() => setFilterRating(5)}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
              filterRating === 5
                ? "bg-brand-red text-white"
                : "bg-brand-card text-slate-400 hover:text-white border border-brand-border"
            }`}
          >
            5-Star Reviews ({seedReviews.filter((r) => r.rating === 5).length})
          </button>
          <button
            onClick={() => setFilterRating(4)}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
              filterRating === 4
                ? "bg-brand-red text-white"
                : "bg-brand-card text-slate-400 hover:text-white border border-brand-border"
            }`}
          >
            4-Star Reviews ({seedReviews.filter((r) => r.rating === 4).length})
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-brand-card border border-brand-border hover:border-brand-red/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold">{rev.date}</span>
                </div>

                {/* Highlight Quote */}
                <div className="text-xs font-bold text-cyan-400 mb-2 flex items-start gap-1">
                  <Quote className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                  <span>&ldquo;{rev.highlight}&rdquo;</span>
                </div>

                {/* Full Body */}
                <p className="text-slate-300 text-xs leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase">
                    {rev.author}
                  </h4>
                  {rev.badge && (
                    <span className="text-[10px] text-brand-muted font-semibold block">
                      {rev.badge} • Google Review
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-emerald-400 font-extrabold flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3" /> Verified Member
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
