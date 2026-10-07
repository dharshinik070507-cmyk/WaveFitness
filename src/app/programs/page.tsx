import React from "react";
import Link from "next/link";
import { Section, Container, SectionHeading } from "@/components/ui";
import { gymData } from "@/content/gymData";
import { ProgramsGrid } from "@/components/ProgramsGrid";

export const metadata = {
  title: `Workout Programs | ${gymData.name} Tambaram`,
  description: `Explore Weight Loss, Natural Bodybuilding, Beginner Foundation, Personal Training, and Women's Fitness programs at Wave Fitness Camp Road CH-73.`,
};

export default function ProgramsPage() {
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
            indexTag="02"
            eyebrow="TARGETED FITNESS PROGRAMS"
            title="PROGRAMS ENGINEERED FOR REAL RESULTS"
            subtitle="Personal coach guidance from Sugu Master & Coach Shimal included with every plan."
          />

          <ProgramsGrid />
        </Container>
      </Section>
    </main>
  );
}
