"use client";

import React from "react";
import Link from "next/link";
import { gymData } from "@/content/gymData";

export const AnnouncementBar: React.FC = () => {
  const promoEndDate = (gymData.pricing as { promoEndDate?: string }).promoEndDate;

  // Render ONLY when gymData.pricing.promoEndDate exists and has not passed
  if (!promoEndDate) return null;

  const isExpired = new Date(promoEndDate).getTime() < Date.now();
  if (!isNaN(new Date(promoEndDate).getTime()) && isExpired) return null;

  return (
    <Link
      href="/pricing"
      className="block bg-surface-2 border-b border-line text-text py-2.5 px-4 text-center font-body text-xs font-semibold hover:bg-surface-3 transition-colors select-none"
    >
      <span>
        Pay today, get 3 months for ₹{gymData.pricing.quarterly.amount.toLocaleString()}. Ends {promoEndDate}.
      </span>
    </Link>
  );
};
