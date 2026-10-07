"use client";

import React from "react";
import { gymData } from "@/content/gymData";
import { Phone, MessageCircle, Navigation, Dumbbell } from "lucide-react";

interface StickyMobileBarProps {
  onOpenTrial: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenTrial }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-md border-t border-brand-border p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5">
        
        {/* Call */}
        <a
          href={`tel:${gymData.contact.phoneTel}`}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-brand-card border border-brand-border text-white text-[10px] font-bold"
        >
          <Phone className="w-4 h-4 text-brand-blue mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={gymData.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href="https://maps.app.goo.gl/w4fv65tambaram"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-brand-card border border-brand-border text-cyan-400 text-[10px] font-bold"
        >
          <Navigation className="w-4 h-4 mb-0.5" />
          <span>Maps</span>
        </a>

        {/* Trial CTA */}
        <button
          onClick={onOpenTrial}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-brand-red text-white text-[10px] font-black uppercase shadow-lg shadow-brand-red/30"
        >
          <Dumbbell className="w-4 h-4 mb-0.5" />
          <span>Free Trial</span>
        </button>

      </div>
    </div>
  );
};
