import React from "react";
import Link from "next/link";
import { gymData } from "@/content/gymData";

export default function MembershipPolicyPage() {
  return (
    <main className="min-h-screen bg-bg text-text py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-surface-1 p-8 rounded-none border border-line">
        <Link href="/" className="text-text-muted font-bold text-xs uppercase mb-4 inline-block font-wordmark tracking-button hover:underline">&larr; Back to Home</Link>
        <h1 className="font-display text-3xl font-bold text-text uppercase mb-4">Membership, Freeze & Refund Policy</h1>
        
        <div className="space-y-4 text-xs text-text-muted font-body leading-relaxed">
          <p>
            <strong>{gymData.name}</strong> operates transparent membership options (Monthly ₹999 / Quarterly ₹2,499).
          </p>

          <h3 className="font-bold text-text text-sm uppercase mt-4 font-display">1. Membership Freeze [PLACEHOLDER]</h3>
          <p>
            Membership freeze options for medical emergencies or official travel: [PLACEHOLDER - Confirm exact freeze days allowed per plan with reception].
          </p>

          <h3 className="font-bold text-text text-sm uppercase mt-4 font-display">2. Refund Policy</h3>
          <p>
            Gym memberships are non-refundable once activated, but transferable upon approval by gym management under valid medical circumstances.
          </p>
        </div>
      </div>
    </main>
  );
}
