"use client";

import React, { useState } from "react";
import { faqList, tamilDictionary } from "@/content/gymData";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FaqAccordion: React.FC = () => {
  const { lang } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-brand-dark/95 border-y border-brand-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block flex items-center justify-center gap-1">
            <HelpCircle className="w-4 h-4" /> Got Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase">
            {lang === "ta" ? tamilDictionary.faq.title : "Frequently Asked Questions"}
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Everything you need to know about memberships, trainer guidance, safety, and timings at Camp Road CH-73.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-brand-card border border-brand-border overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-white uppercase hover:text-cyan-400 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-brand-red font-mono text-sm">Q{idx + 1}.</span> {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-red shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-brand-border/40 mt-2">
                    <p className="pt-3">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
