"use client";

import React from "react";
import { gymData } from "@/content/gymData";
import { Clock, Sun, Calendar, CheckCircle2, AlertCircle } from "lucide-react";

export const TimingsSchedule: React.FC = () => {
  return (
    <section className="py-16 bg-brand-dark relative border-b border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-wordmark text-xs font-bold uppercase tracking-poster text-brand-red mb-1 block">
            VERIFIED SCHEDULE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase">
            Official Operating Hours
          </h2>
          <p className="text-slate-400 text-xs mt-1">
            Verified directly from Google Maps & Gym Management
          </p>
        </div>

        {/* Timings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Weekday Schedule */}
          <div className="p-6 rounded-3xl bg-brand-card border border-brand-red/40 relative">
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red border border-brand-red/30 flex items-center justify-center mb-4">
              <Sun className="w-5 h-5" />
            </div>
            <span className="font-wordmark text-[10px] font-bold text-emerald-400 uppercase tracking-poster block flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> VERIFIED GOOGLE MAPS
            </span>
            <h3 className="font-display text-2xl font-bold text-white uppercase mt-1">
              Monday – Friday
            </h3>
            <div className="text-2xl font-black text-brand-red mt-2 font-display">
              6:00 AM – 9:30 PM
            </div>
            <p className="font-body text-xs text-slate-400 mt-2">
              Doors open sharp at 6 AM every weekday morning for early workouts.
            </p>
          </div>

          {/* Saturday Schedule */}
          <div className="p-6 rounded-3xl bg-brand-card border border-brand-border">
            <div className="w-10 h-10 rounded-xl bg-brand-dark text-cyan-400 border border-brand-border flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <span className="font-wordmark text-[10px] font-bold text-emerald-400 uppercase tracking-poster block flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> VERIFIED GOOGLE MAPS
            </span>
            <h3 className="font-display text-2xl font-bold text-white uppercase mt-1">
              Saturday
            </h3>
            <div className="text-2xl font-black text-white mt-2 font-display">
              6:30 AM – 9:30 PM
            </div>
            <p className="font-body text-xs text-slate-400 mt-2">
              Full day weekend gym floor & heavy weight training sessions.
            </p>
          </div>

          {/* Sunday Schedule */}
          <div className="p-6 rounded-3xl bg-brand-card border border-brand-border">
            <div className="w-10 h-10 rounded-xl bg-brand-dark text-amber-400 border border-brand-border flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="font-wordmark text-[10px] font-bold text-emerald-400 uppercase tracking-poster block flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> VERIFIED GOOGLE MAPS
            </span>
            <h3 className="font-display text-2xl font-bold text-white uppercase mt-1">
              Sunday
            </h3>
            <div className="text-2xl font-black text-amber-400 mt-2 font-display">
              5:00 AM – 9:00 PM
            </div>
            <p className="font-body text-xs text-slate-400 mt-2">
              Special early morning Sunday opening at 5:00 AM!
            </p>
          </div>

        </div>

        {/* Holiday Banner Notice */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 font-body text-xs text-amber-300">
          <AlertCircle className="w-5 h-5 shrink-0 text-amber-400" />
          <span>
            <strong>Festival Notice:</strong> On major public holidays (Pongal, Diwali, Tamil New Year), morning-only slots may apply. Check WhatsApp for live announcements.
          </span>
        </div>

      </div>
    </section>
  );
};
