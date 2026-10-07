"use client";

import React from "react";
import { gymData } from "@/content/gymData";
import { Youtube, Instagram, MapPin, Phone, QrCode } from "lucide-react";
import Link from "next/link";
import { StickyMobileBar } from "./StickyMobileBar";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-bg border-t border-line pt-16 pb-24 sm:pb-16 text-text-muted text-xs">
        <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-line">
            
            {/* Brand Col */}
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-r-0 bg-surface-1 border border-blue flex items-center justify-center font-bold text-blue">
                  WF
                </div>
                <span className="font-wordmark text-lg font-bold text-text uppercase tracking-poster">
                  W A V E / F I T N E S S
                </span>
              </div>
              <p className="font-body text-xs text-text-muted leading-relaxed max-w-md">
                {gymData.positioning} 100% natural body transformations without using any steroids.
              </p>

              {/* Social Handles */}
              <div className="flex gap-3 pt-2">
                <a
                  href={gymData.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-surface-1 border border-line text-text hover:text-red transition-all"
                  title="Instagram @team_wave_fitness"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={gymData.social.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-surface-1 border border-line text-text hover:text-red transition-all"
                  title="YouTube WAVE FITNESS"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation & Programs */}
            <div className="space-y-2">
              <h4 className="font-wordmark font-bold text-text uppercase text-xs tracking-poster mb-3">
                Navigation & Programs
              </h4>
              <ul className="space-y-2 text-text-muted font-body">
                <li><a href="#about" className="hover:text-text">About & Story</a></li>
                <li><a href="#week" className="hover:text-text">Workout Split</a></li>
                <li><a href="#coaches" className="hover:text-text">Coaches (Sugu Master)</a></li>
                <li><a href="#programs" className="hover:text-text">Training Programs</a></li>
                <li><a href="#plans" className="hover:text-text">Pricing (₹999/mo)</a></li>
                <li><a href="#reviews" className="hover:text-text">4.9★ Reviews</a></li>
                <li><a href="#faq" className="hover:text-text">FAQ</a></li>
              </ul>
            </div>

            {/* Tools & Local Articles */}
            <div className="space-y-2">
              <h4 className="font-wordmark font-bold text-text uppercase text-xs tracking-poster mb-3">
                Tools & Articles
              </h4>
              <ul className="space-y-2 text-text-muted font-body">
                <li><Link href="/tools/bmi" className="hover:text-text">BMI Calculator Tool</Link></li>
                <li><Link href="/blog" className="hover:text-text">Local Fitness Guide Blog</Link></li>
                <li><Link href="/blog/best-gym-in-tambaram-east-camp-road" className="hover:text-text">Best Gym in Tambaram East</Link></li>
              </ul>

              {/* Poster Scan QR Code Block */}
              <div className="pt-4 border-t border-line/40 mt-4">
                <div className="p-3 bg-surface-1 border border-line flex items-center gap-3">
                  <div className="w-10 h-10 bg-surface-2 border border-line flex items-center justify-center shrink-0">
                    <QrCode className="w-6 h-6 text-red" />
                  </div>
                  <div>
                    <span className="font-wordmark text-[10px] font-bold text-text uppercase tracking-poster block">
                      Poster QR Code
                    </span>
                    <span className="font-body text-[10px] text-text-dim">
                      Scan to visit site & claim trial
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="space-y-2">
              <h4 className="font-wordmark font-bold text-text uppercase text-xs tracking-poster mb-3">
                Legal & Compliance
              </h4>
              <ul className="space-y-2 text-text-muted font-body">
                <li><Link href="/privacy" className="hover:text-text">Privacy Policy (DPDP Act)</Link></li>
                <li><Link href="/terms" className="hover:text-text">Terms & Conditions</Link></li>
                <li><Link href="/membership-policy" className="hover:text-text">Membership & Refund Policy</Link></li>
                <li><Link href="/health-disclaimer" className="hover:text-text">Health & Steroid Disclaimer</Link></li>
              </ul>
            </div>

          </div>

          {/* Footer Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-text-dim font-body">
            <p>© 2026 WAVE FITNESS UNISEX (GYM). All Rights Reserved.</p>
            <p>No.2 Bharathi Lenin Complex, Camp Road Junction, Tambaram East CH-73</p>
          </div>

        </div>
      </footer>

      {/* Sticky Mobile Action Bar */}
      <StickyMobileBar />
    </>
  );
};
