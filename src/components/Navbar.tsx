"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { Menu, X, Phone, MessageCircle, Navigation, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { gymData } from "@/content/gymData";
import { copy } from "@/content/copy";

interface NavbarProps {
  onOpenTrial?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const { lang, toggleLanguage } = useLanguage();
  const { openTrialModal } = useTrial();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoMissing, setLogoMissing] = useState(false);

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
      openTrialModal("Navbar Pass");
    }
  };

  return (
    <>
      <header
        style={{ backgroundColor: "var(--header-bg)" }}
        className={`sticky top-0 z-header backdrop-blur-md transition-all duration-ui text-text border-b border-line ${
          isScrolled ? "h-[64px]" : "h-[70px]"
        }`}
      >
        <Container className="h-full flex items-center justify-between">
          {/* Logo / Brand Left */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {!logoMissing ? (
              <div className="relative h-10 w-auto flex items-center justify-center">
                <Image
                  src="/brand/logo-wf-clean.png"
                  alt="Wave Fitness Logo"
                  width={40}
                  height={40}
                  className="object-contain h-10 w-auto"
                  onError={() => setLogoMissing(true)}
                />
              </div>
            ) : (
              <div className="w-10 h-10 bg-surface-2 border border-line rounded-badge flex items-center justify-center text-text-dim font-bold text-xs">
                WF
              </div>
            )}
            <span className="font-display text-base font-extrabold uppercase tracking-tight text-text hidden sm:inline-block">
              WAVE FITNESS
            </span>
          </Link>

          {/* Desktop Right Side Navigation & Action Group in ONE right aligned group */}
          <div className="hidden md:flex items-center gap-8 font-display text-sm font-bold uppercase tracking-[0.02em] text-text">
            <Link href="/programs" className="hover:text-text-muted transition-colors">
              {copy[lang].nav.programsLabel}
            </Link>
            <Link href="/pricing" className="hover:text-text-muted transition-colors">
              {copy[lang].nav.pricingLabel}
            </Link>
            <Link href="/contact" className="hover:text-text-muted transition-colors">
              Contact
            </Link>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 border border-line rounded-pill hover:bg-surface-2 transition-colors flex items-center gap-1.5 text-xs text-text-muted"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Single Primary Pill CTA */}
            <Button variant="primary" size="header" onClick={handleClaimTrial}>
              Claim Free Trial
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 border border-line rounded-pill hover:bg-surface-2 text-xs font-bold text-text-muted"
              title="Toggle Language"
            >
              {lang.toUpperCase()}
            </button>

            <Button variant="primary" size="header" onClick={handleClaimTrial} className="px-4 text-xs h-[36px] min-h-[36px]">
              Trial
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text hover:text-text-muted focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-modal bg-bg text-text p-6 flex flex-col justify-between md:hidden animate-fadeIn">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <span className="font-display font-extrabold text-sm tracking-tight uppercase text-text">
              NAVIGATION
            </span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-text">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6 font-display text-lg font-bold uppercase tracking-[0.02em] py-8">
            <Link
              href="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-line"
            >
              {copy[lang].nav.programsLabel}
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-line"
            >
              {copy[lang].nav.pricingLabel}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-line"
            >
              Contact
            </Link>
          </div>

          <div className="space-y-3 pt-6 border-t border-line">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                handleClaimTrial();
              }}
            >
              Claim Free Trial
            </Button>

            <div className="grid grid-cols-3 gap-2 pt-2 text-xs font-display font-bold">
              <a
                href={`tel:${gymData.contact.phoneTel}`}
                className="p-3 bg-surface-1 border border-line rounded-pill flex flex-col items-center justify-center text-text"
              >
                <Phone className="w-4 h-4 mb-1" />
                <span>Call</span>
              </a>
              <a
                href={gymData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-1 border border-line rounded-pill flex flex-col items-center justify-center text-text"
              >
                <MessageCircle className="w-4 h-4 mb-1" />
                <span>WhatsApp</span>
              </a>
              <a
                href={gymData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-1 border border-line rounded-pill flex flex-col items-center justify-center text-text"
              >
                <Navigation className="w-4 h-4 mb-1" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
