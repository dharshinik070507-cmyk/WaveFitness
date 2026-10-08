import React from "react";
import Link from "next/link";
import { Section, Container, HeadingLockup } from "@/components/ui";
import { gymData } from "@/content/gymData";
import { BmiCalculator } from "@/components/BmiCalculator";

export const metadata = {
  title: `BMI & Calorie Calculator | ${gymData.name} Tambaram`,
  description: `Calculate your Body Mass Index and daily target calories for fat loss or natural muscle building.`,
};

export default function BmiPage() {
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
            eyebrow="06 / HEALTH TOOL"
            lines={["BMI & DAILY CALORIE", "CALCULATOR"]}
            emphasisLine={1}
            bar
          />

          <p className="font-body text-body text-text-muted mt-4 max-w-2xl mb-8">
            Get instant estimations of your caloric needs for fat burn or lean muscle gain.
          </p>

          <BmiCalculator />
        </Container>
      </Section>
    </main>
  );
}
