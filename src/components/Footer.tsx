"use client";

import React from "react";
import Image from "next/image";
import { gymData } from "@/content/gymData";
import { Youtube, Instagram, QrCode } from "lucide-react";
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
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/logo-wf-clean.png"
                  alt="Wave Fitness Logo"
                  width={32}
                  height={32}
                  className="object-contain w-8 h-8"
                />
                <span className="font-wordmark text-lg font-bold text-text uppercase tracking-button">
                  WAVE FITNESS
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
                  className="p-2.5 bg-surface-1 border border-line text-text hover:text-blue transition-colors"
                  title="Instagram @team_wave_fitness"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={gymData.social.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-surface-1 border border-line text-text hover:text-blue transition-colors"
                  title="YouTube WAVE FITNESS"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Page Navigation */}
            <div className="space-y-2">
              <h4 className="font-wordmark font-bold text-text uppercase text-xs tracking-button mb-3">
                Pages & Links
              </h4>
              <ul className="space-y-2 text-text-muted font-body">
                <li><Link href="/about" className="hover:text-text">About & Story</Link></li>
                <li><Link href="/programs" className="hover:text-text">Training Programs</Link></li>
                <li><Link href="/pricing" className="hover:text-text">Pricing (₹999/mo)</Link></li>
                <li><Link href="/trainers" className="hover:text-text">Coaches (Sugu Master)</Link></li>
                <li><Link href="/quiz" className="hover:text-text">Membership Quiz</Link></li>
                <li><Link href="/contact" className="hover:text-text">Contact & Location</Link></li>
              </ul>
            </div>

            {/* Programs List */}
            <div className="space-y-2">
              <h4 className="font-wordmark font-bold text-text uppercase text-xs tracking-button mb-3">
                All Training Programs
              </h4>
              <ul className="space-y-2 text-text-muted font-body">
                {gymData.programs.map((p) => (
                  <li key={p.id}>
                    <Link href={`/programs/${p.id}`} className="hover:text-text">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Poster Scan QR Code Block */}
              <div className="pt-4 border-t border-line/40 mt-4">
                <div className="p-3 bg-surface-1 border border-line flex items-center gap-3">
                  <div className="w-10 h-10 bg-surface-2 border border-line flex items-center justify-center shrink-0">
                    <QrCode className="w-6 h-6 text-text" />
                  </div>
                  <div>
                    <span className="font-wordmark text-caption font-bold text-text uppercase tracking-button block">
                      Poster QR Code
                    </span>
                    <span className="font-body text-caption text-text-dim">
                      Scan to visit site & claim trial
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="space-y-2">
              <h4 className="font-wordmark font-bold text-text uppercase text-xs tracking-button mb-3">
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
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-meta text-text-dim font-body">
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
