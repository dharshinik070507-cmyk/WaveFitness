import React from "react";
import Link from "next/link";
import { Section, Container, SectionHeading } from "@/components/ui";
import { gymData } from "@/content/gymData";
import { LocationContact } from "@/components/LocationContact";

export const metadata = {
  title: `Contact & Location | ${gymData.name} Camp Road CH-73`,
  description: `Visit Wave Fitness at No.2, Bharathi, Lenin Complex, School St, Camp Road Junction, Tambaram East. Call +91 73973 98749.`,
};

export default function ContactPage() {
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
            indexTag="05"
            eyebrow="TAMBARAM CAMP ROAD"
            title="VISIT GYM FLOOR & GET DIRECTIONS"
            subtitle="Lenin Complex, School St, Camp Road Junction, Tambaram East CH-73."
          />

          <LocationContact />
        </Container>
      </Section>
    </main>
  );
}
