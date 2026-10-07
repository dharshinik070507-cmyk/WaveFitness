import React from "react";
import Link from "next/link";
import { gymData } from "@/content/gymData";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-brand-dark text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-brand-card p-8 rounded-3xl border border-brand-border">
        <Link href="/" className="text-brand-red font-bold text-xs uppercase mb-4 inline-block">&larr; Back to Home</Link>
        <h1 className="font-display text-3xl font-bold text-white uppercase mb-4">Privacy Policy (India DPDP Act Compliance)</h1>
        
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            Welcome to <strong>{gymData.name}</strong> (&ldquo;Wave Fitness&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;). We respect your privacy and are committed to protecting the personal data you share with us in accordance with the Digital Personal Data Protection (DPDP) Act of India.
          </p>
          
          <h3 className="font-bold text-white text-sm uppercase mt-4">1. Data We Collect</h3>
          <p>
            When you request a Free Trial Visit or submit an inquiry through our website, we voluntarily collect minimal contact details:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your Name</li>
            <li>Mobile / WhatsApp Phone Number</li>
            <li>Preferred Workout Timing & Goal</li>
          </ul>

          <h3 className="font-bold text-white text-sm uppercase mt-4">2. Purpose of Data Use</h3>
          <p>
            Your information is used strictly to confirm trial visits, send WhatsApp reminders regarding your gym booking, and respond to your inquiries. We do NOT sell, rent, or trade your contact details with third-party telemarketers.
          </p>

          <h3 className="font-bold text-white text-sm uppercase mt-4">3. Right to Erasure</h3>
          <p>
            If you wish to remove your contact number from our records, email us at {gymData.contact.email} or call reception at {gymData.contact.phoneFormatted}.
          </p>
        </div>
      </div>
    </main>
  );
}
