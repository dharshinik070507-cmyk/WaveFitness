"use client";

import React from "react";
import { gymData } from "@/content/gymData";
import { useTrial } from "@/context/TrialContext";
import { Phone, MessageCircle, Navigation, Dumbbell } from "lucide-react";

interface StickyMobileBarProps {
  onOpenTrial?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenTrial }) => {
  const { openTrialModal } = useTrial();

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Sticky Mobile Pass");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-bg border-t border-line p-2 sm:hidden">
      <div className="grid grid-cols-4 gap-1.5">
        
        {/* Call */}
        <a
          href={`tel:${gymData.contact.phoneTel}`}
          className="flex flex-col items-center justify-center p-2 bg-surface-1 border border-line text-text text-caption font-wordmark font-bold"
        >
          <Phone className="w-4 h-4 text-blue mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={gymData.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 bg-surface-1 border border-line text-text text-caption font-wordmark font-bold"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 text-blue" />
          <span>WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={gymData.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 bg-surface-1 border border-line text-text text-caption font-wordmark font-bold"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-blue" />
          <span>Maps</span>
        </a>

        {/* Trial CTA */}
        <button
          onClick={handleClaimTrial}
          className="flex flex-col items-center justify-center p-2 bg-text text-bg text-caption font-wordmark font-bold uppercase"
        >
          <Dumbbell className="w-4 h-4 mb-0.5" />
          <span>Free Trial</span>
        </button>

      </div>
    </div>
  );
};
