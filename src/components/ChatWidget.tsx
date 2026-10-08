"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTrial } from "@/context/TrialContext";
import { gymData } from "@/content/gymData";

export const ChatWidget: React.FC = () => {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const { isOpen: isTrialOpen } = useTrial();

  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      const isDismissed = sessionStorage.getItem("wave_chat_tooltip_dismissed");
      if (isDismissed === "true") {
        setDismissed(true);
        return;
      }
    } catch {
      // Ignore sessionStorage restriction
    }

    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismissTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
    setDismissed(true);
    try {
      sessionStorage.setItem("wave_chat_tooltip_dismissed", "true");
    } catch {
      // Ignore
    }
  };

  // Hide on thank-you page or when trial modal is active
  if (pathname === "/thank-you" || isTrialOpen) {
    return null;
  }

  const tooltipText = "Hi! How can I help you?";

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
      
      {/* Tooltip Bubble */}
      {showTooltip && !dismissed && (
        <div
          role="status"
          aria-live="polite"
          className="mb-3 p-3 bg-surface-1 border border-line rounded-card text-text shadow-soft max-w-xs flex items-center gap-2 text-xs font-body animate-fadeIn"
        >
          <span>{tooltipText}</span>
          <button
            onClick={handleDismissTooltip}
            className="p-1 text-text-muted hover:text-text rounded-sm focus:outline-none"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Chat Button */}
      <a
        href={gymData.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Wave Fitness"
        className="w-14 h-14 rounded-full bg-ink text-white border border-line shadow-soft flex items-center justify-center hover:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-blue active:translate-y-[1px] transition-all"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

    </div>
  );
};
