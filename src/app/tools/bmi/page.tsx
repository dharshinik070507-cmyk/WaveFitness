import React from "react";
import Link from "next/link";
import { Section, Container, SectionHeading } from "@/components/ui";
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
            <Link href="/" className="font-wordmark text-xs font-bold text-red-text uppercase tracking-poster hover:underline">
              &larr; Back to Home
            </Link>
          </div>

          <SectionHeading
            indexTag="06"
            eyebrow="HEALTH TOOL"
            title="BMI & DAILY CALORIE CALCULATOR"
            subtitle="Get instant estimations of your caloric needs for fat burn or lean muscle gain."
          />

          <BmiCalculator />
        </Container>
      </Section>
    </main>
  );
}
