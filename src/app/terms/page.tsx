import React from "react";
import Link from "next/link";
import { gymData } from "@/content/gymData";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-brand-dark text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-brand-card p-8 rounded-3xl border border-brand-border">
        <Link href="/" className="text-brand-red font-bold text-xs uppercase mb-4 inline-block">&larr; Back to Home</Link>
        <h1 className="font-display text-3xl font-bold text-white uppercase mb-4">Terms & Conditions</h1>
        
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            By accessing the website or visiting the gym premises of <strong>{gymData.name}</strong> at Camp Road, Tambaram East, you agree to comply with the following gym terms:
          </p>

          <h3 className="font-bold text-white text-sm uppercase mt-4">1. Gym Code of Conduct</h3>
          <p>
            Wave Fitness is a unisex, discipline-first environment. Members are expected to respect trainers, fellow members, and re-rack weights after every set. Improper language, harassment, or unsafe equipment handling will result in membership cancellation.
          </p>

          <h3 className="font-bold text-white text-sm uppercase mt-4">2. Promotional Pricing</h3>
          <p>
            Promotional offers (such as Monthly ₹999 or 3-Month Quarterly ₹2,499) are subject to confirmation at gym reception during registration.
          </p>
        </div>
      </div>
    </main>
  );
}
