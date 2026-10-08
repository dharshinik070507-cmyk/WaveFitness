import React from "react";
import Link from "next/link";
import { gymData } from "@/content/gymData";

export default function HealthDisclaimerPage() {
  return (
    <main className="min-h-screen bg-bg text-text py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-surface-1 p-8 rounded-none border border-line">
        <Link href="/" className="text-text-muted font-bold text-xs uppercase mb-4 inline-block font-wordmark tracking-button hover:underline">&larr; Back to Home</Link>
        <h1 className="font-display text-3xl font-bold text-text uppercase mb-4">Health, Safety & Steroid Disclaimer</h1>
        
        <div className="space-y-4 text-xs text-text-muted font-body leading-relaxed">
          <p>
            <strong>{gymData.name}</strong> advocates 100% natural body transformations without using any anabolic steroids or synthetic hormone enhancements.
          </p>

          <h3 className="font-bold text-text text-sm uppercase mt-4 font-display">1. Non-Medical Disclaimer</h3>
          <p>
            All information, nutrition advice, and exercise routines provided on this website or by trainers are for general fitness education purposes only and do not substitute medical diagnosis or treatment.
          </p>

          <h3 className="font-bold text-text text-sm uppercase mt-4 font-display">2. Individual Results Disclaimer</h3>
          <p>
            Weight loss, strength gains, and body composition changes vary from individual to individual depending on genetic factors, diet consistency, age, and workout frequency.
          </p>
        </div>
      </div>
    </main>
  );
}
