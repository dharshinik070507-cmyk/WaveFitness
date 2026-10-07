import React from "react";
import Link from "next/link";
import { Section, Container, SectionHeading } from "@/components/ui";
import { gymData } from "@/content/gymData";
import { PricingSection } from "@/components/PricingSection";

export const metadata = {
  title: `Membership Fees | Monthly ₹${gymData.pricing.monthly.amount} | ${gymData.name}`,
  description: `Transparent pricing: Monthly ₹${gymData.pricing.monthly.amount} (~₹${gymData.pricing.monthly.perDay}/day) & 3-Month Quarterly ₹${gymData.pricing.quarterly.amount} (~₹${gymData.pricing.quarterly.perDay}/day). No hidden traps.`,
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Section variant="bg">
        <Container>
          <div className="mb-6">
            <Link href="/" className="font-wordmark text-xs font-bold text-red-text uppercase tracking-poster hover:underline">
              &larr; Back to Home
            </Link>
          </div>

          <SectionHeading
            indexTag="03"
            eyebrow="TRANSPARENT FEES"
            title="MEMBERSHIP PLANS & RATES"
            subtitle="Fees that make sense. Pay monthly or save with our 3-Month Quarterly Pass."
          />

          <PricingSection />
        </Container>
      </Section>
    </main>
  );
}
