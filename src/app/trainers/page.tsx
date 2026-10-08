import React from "react";
import Link from "next/link";
import { Section, Container, HeadingLockup } from "@/components/ui";
import { gymData } from "@/content/gymData";
import { TrainersSection } from "@/components/TrainersSection";

export const metadata = {
  title: `Coaches Sugu Master & Coach Shimal | ${gymData.name}`,
  description: `Meet Head Coach Sugumar (Sugu Master) & Senior Coach Shimal. Personal attention on every set at Wave Fitness Tambaram East.`,
};

export default function TrainersPage() {
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
            eyebrow="04 / EXPERT COACHING"
            lines={["MEET THE WAVE COACHES"]}
            bar
          />

          <p className="font-body text-body text-text-muted mt-4 max-w-2xl mb-8">
            Personal attention on every set from Sugumar Anna and Coach Shimal.
          </p>

          <TrainersSection />
        </Container>
      </Section>
    </main>
  );
}
