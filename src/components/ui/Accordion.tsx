"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface AccordionItem {
  q: string;
  a: string;
}

export interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        const indexNum = String(idx + 1).padStart(2, "0");

        return (
          <div key={idx} className="py-6">
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left flex items-start justify-between gap-4 font-display text-lg sm:text-xl font-bold uppercase text-text hover:text-red-text transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="font-wordmark text-xs font-bold text-text-dim tracking-poster mt-1">
                  {indexNum}
                </span>
                <span>{item.q}</span>
              </div>
              {isOpen ? (
                <Minus className="w-5 h-5 text-red shrink-0 mt-1" />
              ) : (
                <Plus className="w-5 h-5 text-text-muted shrink-0 mt-1" />
              )}
            </button>

            {isOpen && (
              <div className="mt-3 pl-8 text-xs sm:text-sm text-text-muted font-body leading-relaxed max-w-3xl">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
