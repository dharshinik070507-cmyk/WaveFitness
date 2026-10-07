"use client";

import React, { useState, useEffect } from "react";
import { gymData } from "@/content/gymData";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { Phone, MessageCircle, Globe, Menu, X, Dumbbell } from "lucide-react";

interface NavbarProps {
  onOpenTrial?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const { lang, toggleLanguage } = useLanguage();
  const { openTrialModal } = useTrial();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal();
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-bg transition-all duration-200 ${
        isScrolled ? "h-16 border-b border-line shadow-md" : "h-20 border-b border-line/40"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] h-full flex items-center justify-between">
        
        {/* Brand Logo & Wordmark (Poster Identity Lockup) */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-r-0 bg-surface-1 border border-blue flex items-center justify-center text-text shrink-0">
            <span className="font-wordmark font-bold text-sm tracking-tight text-blue">WF</span>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-wordmark text-lg sm:text-xl font-bold tracking-mega text-text uppercase leading-none">
                W A V E
              </span>
              <span className="font-wordmark text-lg sm:text-xl font-bold tracking-mega text-red uppercase leading-none">
                F I T N E S S
              </span>
            </div>
            {/* Red underline bar echoing logo identity */}
            <div className="h-[2px] w-full bg-red mt-1 rounded-r-0"></div>
            <span className="font-wordmark text-[9px] tracking-poster uppercase text-text-muted font-bold mt-0.5">
              UNISEX GYM • TAMBARAM CAMP ROAD
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 font-wordmark text-xs uppercase font-bold tracking-poster text-text-muted">
          <a href="#about" className="hover:text-text transition-colors">About</a>
          <a href="#week" className="hover:text-text transition-colors">Workout Split</a>
          <a href="#coaches" className="hover:text-text transition-colors">Coaches</a>
          <a href="#programs" className="hover:text-text transition-colors">Programs</a>
          <a href="#plans" className="hover:text-text transition-colors">Pricing</a>
          <a href="#reviews" className="hover:text-text transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-text transition-colors">FAQ</a>
          <a href="#location" className="hover:text-text transition-colors">Contact</a>
        </nav>

        {/* Right Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Tamil / English Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-r-1 border border-line bg-surface-1 text-text-muted font-body text-xs font-bold hover:text-text hover:border-line/80 transition-all"
            title="Toggle Tamil / English"
          >
            <Globe className="w-3.5 h-3.5 text-blue" />
            <span>{lang === "en" ? "தமிழ்" : "English"}</span>
          </button>

          {/* Quick Call */}
          <a
            href={`tel:${gymData.contact.phoneTel}`}
            className="p-2 rounded-r-1 border border-line bg-surface-1 text-text hover:text-blue transition-all"
            title="Call Wave Fitness"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* WhatsApp Direct */}
          <a
            href={gymData.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-r-1 border border-line bg-surface-1 text-text hover:text-red transition-all"
            title="WhatsApp Us"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Primary Red CTA - Claim Free Trial */}
          <button
            onClick={handleClaimTrial}
            className="px-4 py-2 rounded-r-1 bg-red hover:bg-red-hover active:bg-red-press text-text font-wordmark font-bold text-xs uppercase tracking-poster transition-all flex items-center gap-2"
          >
            <Dumbbell className="w-4 h-4" /> Claim Free Trial
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded-r-1 bg-surface-1 border border-line font-body text-xs font-bold text-text-muted"
          >
            {lang === "en" ? "தமிழ்" : "EN"}
          </button>

          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="p-2 text-text hover:text-red"
            aria-label="Toggle menu"
          >
            {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileNavOpen && (
        <div className="sm:hidden border-b border-line bg-surface-1 px-4 pt-3 pb-6 space-y-3">
          <a href="#about" onClick={() => setMobileNavOpen(false)} className="block py-2 text-text font-wordmark font-bold uppercase text-xs border-b border-line/40">About & Story</a>
          <a href="#week" onClick={() => setMobileNavOpen(false)} className="block py-2 text-text font-wordmark font-bold uppercase text-xs border-b border-line/40">Workout Split</a>
          <a href="#coaches" onClick={() => setMobileNavOpen(false)} className="block py-2 text-text font-wordmark font-bold uppercase text-xs border-b border-line/40">Coaches (Sugu Master)</a>
          <a href="#programs" onClick={() => setMobileNavOpen(false)} className="block py-2 text-text font-wordmark font-bold uppercase text-xs border-b border-line/40">Programs</a>
          <a href="#plans" onClick={() => setMobileNavOpen(false)} className="block py-2 text-text font-wordmark font-bold uppercase text-xs border-b border-line/40">Membership Plans (₹999)</a>
          <a href="#reviews" onClick={() => setMobileNavOpen(false)} className="block py-2 text-text font-wordmark font-bold uppercase text-xs border-b border-line/40">4.9★ Reviews</a>
          <a href="#location" onClick={() => setMobileNavOpen(false)} className="block py-2 text-text font-wordmark font-bold uppercase text-xs border-b border-line/40">Contact & Map</a>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileNavOpen(false);
                handleClaimTrial();
              }}
              className="w-full py-3 bg-red text-text font-wordmark font-bold uppercase tracking-poster rounded-r-1 text-xs flex items-center justify-center gap-2"
            >
              <Dumbbell className="w-4 h-4" /> Claim Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
