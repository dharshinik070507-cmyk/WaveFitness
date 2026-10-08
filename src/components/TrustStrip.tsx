"use client";

import React from "react";
import { motion } from "framer-motion";
import { gymData } from "@/content/gymData";
import { Star, Youtube, Instagram, MapPin } from "lucide-react";
import { fadeInUpVariants, defaultViewport } from "@/lib/motion";

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-surface-1 border-b border-line py-8">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center"
        >
          {/* Google Rating */}
          <div className="flex items-center gap-3 p-3 border border-line bg-surface-2 rounded-r-0">
            <div className="w-10 h-10 bg-surface-1 border border-line flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-text fill-text" />
            </div>
            <div>
              <div className="font-display font-extrabold text-lg text-text leading-tight">
                {gymData.rating.stars} ★
              </div>
              <p className="font-body text-meta text-text-muted">
                {gymData.rating.reviewCount}+ Google Reviews
              </p>
            </div>
          </div>

          {/* YouTube Handle */}
          <a
            href={gymData.social.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 border border-line bg-surface-2 hover:border-surface-3 transition-colors rounded-r-0"
          >
            <div className="w-10 h-10 bg-surface-1 border border-line flex items-center justify-center shrink-0 text-text">
              <Youtube className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <div className="font-wordmark font-bold text-xs uppercase tracking-button text-text truncate">
                YouTube
              </div>
              <p className="font-body text-meta text-text-muted truncate">
                {gymData.social.youtube.handle}
              </p>
            </div>
          </a>

          {/* Instagram Handle */}
          <a
            href={gymData.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 border border-line bg-surface-2 hover:border-blue transition-colors rounded-r-0"
          >
            <div className="w-10 h-10 bg-surface-1 border border-line flex items-center justify-center shrink-0 text-blue">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <div className="font-wordmark font-bold text-xs uppercase tracking-button text-text truncate">
                Instagram
              </div>
              <p className="font-body text-meta text-text-muted truncate">
                {gymData.social.instagram.handle}
              </p>
            </div>
          </a>

          {/* Offline Location Lockup */}
          <div className="flex items-center gap-3 p-3 border border-line bg-surface-2 rounded-r-0">
            <div className="w-10 h-10 bg-surface-1 border border-line flex items-center justify-center shrink-0 text-text">
              <MapPin className="w-5 h-5 text-blue" />
            </div>
            <div className="overflow-hidden">
              <div className="font-wordmark font-bold text-xs uppercase tracking-button text-text truncate">
                Tambaram East
              </div>
              <p className="font-body text-meta text-text-muted truncate">
                {gymData.address.posterShort}
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
