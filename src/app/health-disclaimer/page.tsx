import React from "react";
import Link from "next/link";
import { gymData } from "@/content/gymData";

export default function HealthDisclaimerPage() {
  return (
    <main className="min-h-screen bg-brand-dark text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-brand-card p-8 rounded-3xl border border-brand-border">
        <Link href="/" className="text-brand-red font-bold text-xs uppercase mb-4 inline-block">&larr; Back to Home</Link>
        <h1 className="font-display text-3xl font-bold text-white uppercase mb-4">Health, Safety & Steroid Disclaimer</h1>
        
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            <strong>{gymData.name}</strong> advocates 100% natural body transformations without using any anabolic steroids or synthetic hormone enhancements.
          </p>

          <h3 className="font-bold text-white text-sm uppercase mt-4">1. Non-Medical Disclaimer</h3>
          <p>
            All information, nutrition advice, and exercise routines provided on this website or by trainers are for general fitness education purposes only and do not substitute medical diagnosis or treatment.
          </p>

          <h3 className="font-bold text-white text-sm uppercase mt-4">2. Individual Results Disclaimer</h3>
          <p>
            Weight loss, strength gains, and body composition changes vary from individual to individual depending on genetic factors, diet consistency, age, and workout frequency.
          </p>
        </div>
      </div>
    </main>
  );
}
