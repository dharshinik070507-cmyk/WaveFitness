"use client";

import React, { useState } from "react";
import { gymData } from "@/content/gymData";
import { useTrial } from "@/context/TrialContext";
import { Dumbbell } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  const { openTrialModal } = useTrial();
  const [isVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-red text-white py-2 px-4 text-center font-wordmark text-[11px] font-bold tracking-poster uppercase">
      <span>
        🔥 SPECIAL PROMO OFFER: {gymData.pricing.quarterly.promoWording} FOR ₹{gymData.pricing.quarterly.amount}/- (OFFER TILL {gymData.pricing.promoEndDate.toUpperCase()})
      </span>
      <button
        onClick={() => openTrialModal("Special Festival Promo")}
        className="ml-3 underline text-white font-black hover:opacity-90"
      >
        CLAIM FREE TRIAL NOW
      </button>
    </div>
  );
};
