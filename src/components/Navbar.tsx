"use client";

import React, { useState } from "react";
import { gymData } from "@/content/gymData";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, Globe, Menu, X, Dumbbell } from "lucide-react";

interface NavbarProps {
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const { lang, toggleLanguage } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brand-dark/95 backdrop-blur-md border-b border-brand-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark (Poster Identity Stack) */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Circular emblem with WF and logo blue */}
          <div className="w-11 h-11 rounded-full bg-brand-dark border-2 border-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/20 group-hover:scale-105 transition-transform">
            <span className="font-wordmark font-bold text-lg tracking-tight text-cyan-400">WF</span>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-wordmark text-xl sm:text-2xl font-black tracking-mega text-white uppercase leading-none">
                W A V E
              </span>
              <span className="font-wordmark text-xl sm:text-2xl font-black tracking-mega text-brand-red uppercase leading-none">
                F I T N E S S
              </span>
            </div>
            {/* Red underline bar echoing logo identity */}
            <div className="h-0.5 w-full bg-brand-red mt-1 rounded-full"></div>
            <span className="font-wordmark text-[9px] tracking-poster uppercase text-brand-muted font-bold mt-0.5">
              UNISEX GYM • TAMBARAM CAMP ROAD CH-73
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 font-wordmark text-xs uppercase font-bold tracking-poster text-slate-300">
          <a href="#about" className="hover:text-brand-red transition-colors">About</a>
          <a href="#programs" className="hover:text-brand-red transition-colors">Programs</a>
          <a href="#plans" className="hover:text-brand-red transition-colors">Pricing</a>
          <a href="#trainers" className="hover:text-brand-red transition-colors">Trainers</a>
          <a href="#reviews" className="hover:text-brand-red transition-colors">Reviews</a>
          <a href="#facilities" className="hover:text-brand-red transition-colors">Facilities</a>
          <a href="#location" className="hover:text-brand-red transition-colors">Contact</a>
        </nav>

        {/* Right Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Tamil / English Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-border bg-brand-card text-slate-300 font-body text-xs font-bold hover:border-brand-red transition-all"
            title="Toggle Tamil / English"
          >
            <Globe className="w-3.5 h-3.5 text-brand-blue" />
            <span>{lang === "en" ? "தமிழ்" : "English"}</span>
          </button>

          {/* Quick Call */}
          <a
            href={`tel:${gymData.contact.phoneTel}`}
            className="p-2.5 rounded-xl border border-brand-border bg-brand-card hover:bg-slate-800 text-white hover:text-cyan-400 transition-all"
            title="Call Wave Fitness"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* WhatsApp Direct */}
          <a
            href={gymData.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-emerald-500/40 bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/60 transition-all"
            title="WhatsApp Us"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Primary CTA */}
          <button
            onClick={onOpenTrial}
            className="px-5 py-2.5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-wordmark font-bold text-xs uppercase tracking-poster shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40 transition-all flex items-center gap-2"
          >
            <Dumbbell className="w-4 h-4" /> Claim Free Trial
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 rounded-md bg-brand-card border border-brand-border font-body text-xs font-bold text-slate-300"
          >
            {lang === "en" ? "தமிழ்" : "EN"}
          </button>

          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="p-2 text-slate-300 hover:text-white"
          >
            {mobileNavOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileNavOpen && (
        <div className="sm:hidden border-b border-brand-border bg-brand-dark px-4 pt-3 pb-6 space-y-3">
          <a href="#about" onClick={() => setMobileNavOpen(false)} className="block py-2 text-slate-200 font-wordmark font-bold uppercase text-sm border-b border-brand-border/40">About & Story</a>
          <a href="#programs" onClick={() => setMobileNavOpen(false)} className="block py-2 text-slate-200 font-wordmark font-bold uppercase text-sm border-b border-brand-border/40">Programs</a>
          <a href="#plans" onClick={() => setMobileNavOpen(false)} className="block py-2 text-slate-200 font-wordmark font-bold uppercase text-sm border-b border-brand-border/40">Membership Plans (₹999)</a>
          <a href="#trainers" onClick={() => setMobileNavOpen(false)} className="block py-2 text-slate-200 font-wordmark font-bold uppercase text-sm border-b border-brand-border/40">Trainers (Sugu Master)</a>
          <a href="#reviews" onClick={() => setMobileNavOpen(false)} className="block py-2 text-slate-200 font-wordmark font-bold uppercase text-sm border-b border-brand-border/40">4.9★ Reviews</a>
          <a href="#facilities" onClick={() => setMobileNavOpen(false)} className="block py-2 text-slate-200 font-wordmark font-bold uppercase text-sm border-b border-brand-border/40">Facilities</a>
          <a href="#location" onClick={() => setMobileNavOpen(false)} className="block py-2 text-slate-200 font-wordmark font-bold uppercase text-sm border-b border-brand-border/40">Contact & Map</a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileNavOpen(false);
                onOpenTrial();
              }}
              className="w-full py-3 bg-brand-red text-white font-wordmark font-bold uppercase tracking-poster rounded-xl text-sm shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2"
            >
              <Dumbbell className="w-5 h-5" /> Claim Free Trial Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
