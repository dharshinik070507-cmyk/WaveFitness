import React from "react";
import Link from "next/link";
import { Section, Container, SectionHeading } from "@/components/ui";
import { gymData } from "@/content/gymData";
import { TrainersSection } from "@/components/TrainersSection";

export const metadata = {
  title: `Certified Trainers Sugu Master & Coach Shimal | ${gymData.name}`,
  description: `Meet Head Coach Sugumar (Sugu Master) & Senior Coach Shimal. Personal attention on every set at Wave Fitness Tambaram East.`,
};

export default function TrainersPage() {
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
            indexTag="04"
            eyebrow="EXPERT COACHING"
            title="MEET THE WAVE COACHES"
            subtitle="Personal attention on every set from Sugumar Anna and Coach Shimal."
          />

          <TrainersSection />
        </Container>
      </Section>
    </main>
  );
}
