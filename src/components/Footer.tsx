"use client";

import React from "react";
import { gymData } from "@/content/gymData";
import { Youtube, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-24 sm:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-brand-border">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-dark border border-brand-blue flex items-center justify-center font-bold text-cyan-400">
                WF
              </div>
              <span className="font-display text-lg font-black text-white uppercase tracking-widest">
                WAVE FITNESS
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              {gymData.positioning} 100% natural body transformations without steroids.
            </p>
            <div className="flex gap-3">
              <a
                href={gymData.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-card border border-brand-border hover:text-white"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
              </a>
              <a
                href={gymData.social.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-card border border-brand-border hover:text-white"
              >
                <Youtube className="w-4 h-4 text-red-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-white uppercase text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-white">About & Story</a></li>
              <li><a href="#programs" className="hover:text-white">Workout Programs</a></li>
              <li><a href="#plans" className="hover:text-white">Pricing & Memberships (₹999)</a></li>
              <li><a href="#trainers" className="hover:text-white">Coaches (Sugu Master & Shimal)</a></li>
              <li><a href="#reviews" className="hover:text-white">4.9★ Google Reviews</a></li>
              <li><a href="#facilities" className="hover:text-white">Equipment Inventory</a></li>
              <li><a href="#blog" className="hover:text-white">Local Fitness Articles</a></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-white uppercase text-sm mb-3">Tambaram Location</h4>
            <p className="flex items-start gap-1.5 leading-relaxed text-[11px]">
              <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              {gymData.address.line1}, {gymData.address.line2}, {gymData.address.suburb}, {gymData.address.city} 600073
            </p>
            <p className="flex items-center gap-1.5 font-bold text-slate-200 mt-2">
              <Phone className="w-4 h-4 text-brand-blue" /> {gymData.contact.phoneFormatted}
            </p>
            <p className="text-[10px] text-cyan-400 font-mono mt-1">
              Plus Code: {gymData.googlePlusCode}
            </p>
          </div>

          {/* Legal Links */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-white uppercase text-sm mb-3">Legal & Compliance</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy (DPDP Act)</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/membership-policy" className="hover:text-white">Membership, Freeze & Refund Policy</Link></li>
              <li><Link href="/health-disclaimer" className="hover:text-white">Health & Steroid Disclaimer</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 WAVE FITNESS UNISEX (GYM). All Rights Reserved.</p>
          <p>Tambaram Camp Road CH-73 • Ride the Wave to Wellness</p>
        </div>

      </div>
    </footer>
  );
};
