"use client";

import React from "react";
import { gymData } from "@/content/gymData";
import { Phone, MessageCircle, Navigation, Dumbbell } from "lucide-react";

export interface StickyActionBarProps {
  onOpenTrial: () => void;
}

export const StickyActionBar: React.FC<StickyActionBarProps> = ({ onOpenTrial }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-bar bg-surface-2 border-t border-line sm:hidden pb-[env(safe-area-inset-bottom,0px)]">
      <div className="grid grid-cols-4 h-[64px]">
        
        {/* Call Cell */}
        <a
          href={`tel:${gymData.contact.phoneTel}`}
          className="flex flex-col items-center justify-center border-r border-line text-text hover:bg-surface-3 transition-colors"
        >
          <Phone className="w-5 h-5 text-blue mb-0.5" />
          <span className="font-wordmark text-caption font-bold uppercase tracking-button">Call</span>
        </a>

        {/* WhatsApp Cell */}
        <a
          href={gymData.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center border-r border-line text-text hover:bg-surface-3 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mb-0.5 text-blue" />
          <span className="font-wordmark text-caption font-bold uppercase tracking-button">WhatsApp</span>
        </a>

        {/* Directions Cell */}
        <a
          href={gymData.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center border-r border-line text-text-muted hover:bg-surface-3 transition-colors"
        >
          <Navigation className="w-5 h-5 mb-0.5" />
          <span className="font-wordmark text-caption font-bold uppercase tracking-button">Maps</span>
        </a>

        {/* Free Trial Primary Red Cell */}
        <button
          onClick={onOpenTrial}
          className="flex flex-col items-center justify-center bg-text text-bg hover:opacity-90 active:translate-y-[1px] transition-colors"
        >
          <Dumbbell className="w-5 h-5 mb-0.5" />
          <span className="font-wordmark text-caption font-black uppercase tracking-button">Trial Pass</span>
        </button>

      </div>
    </div>
  );
};
