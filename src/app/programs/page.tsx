import React from "react";
import Link from "next/link";
import { Section, Container, HeadingLockup } from "@/components/ui";
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
            <Link href="/" className="font-wordmark text-xs font-bold text-text-muted uppercase tracking-button hover:underline">
              &larr; Back to Home
            </Link>
          </div>

          <HeadingLockup
            eyebrow="02 / TARGETED FITNESS PROGRAMS"
            lines={["PROGRAMS ENGINEERED FOR", "REAL RESULTS"]}
            emphasisLine={1}
            bar
          />

          <p className="font-body text-body text-text-muted mt-4 max-w-2xl mb-8">
            Personal coach guidance from Sugu Master & Coach Shimal included with every plan.
          </p>

          <ProgramsGrid />
        </Container>
      </Section>
    </main>
  );
}
