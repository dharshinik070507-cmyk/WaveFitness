import React from "react";
import Link from "next/link";
import { Section, Container, HeadingLockup } from "@/components/ui";
import { gymData } from "@/content/gymData";
import { PricingSection } from "@/components/PricingSection";

export const metadata = {
  title: `Membership Fees | Monthly ₹${gymData.pricing.monthly.amount} | ${gymData.name}`,
  description: `Transparent pricing: Monthly ₹${gymData.pricing.monthly.amount} (~₹${gymData.pricing.monthly.perDay}/day) & 3-Month Quarterly ₹${gymData.pricing.quarterly.amount} (~₹${gymData.pricing.quarterly.perDay}/day).`,
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Section variant="bg">
        <Container>
          <div className="mb-6">
            <Link href="/" className="font-wordmark text-xs font-bold text-text-muted uppercase tracking-button hover:underline">
              &larr; Back to Home
            </Link>
          </div>

          <HeadingLockup
            eyebrow="03 / TRANSPARENT FEES"
            lines={["MEMBERSHIP PLANS & RATES"]}
            bar
          />

          <p className="font-body text-body text-text-muted mt-4 max-w-2xl mb-8">
            Fees that make sense. Pay monthly or save with our 3-Month Quarterly Pass.
          </p>

          <PricingSection />
        </Container>
      </Section>
    </main>
  );
}
