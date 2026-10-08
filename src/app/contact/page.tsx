import React from "react";
import Link from "next/link";
import { Section, Container, HeadingLockup } from "@/components/ui";
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
            <Link href="/" className="font-wordmark text-xs font-bold text-text-muted uppercase tracking-button hover:underline">
              &larr; Back to Home
            </Link>
          </div>

          <HeadingLockup
            eyebrow="05 / TAMBARAM CAMP ROAD"
            lines={["VISIT GYM FLOOR &", "GET DIRECTIONS"]}
            emphasisLine={1}
            bar
          />

          <p className="font-body text-body text-text-muted mt-4 max-w-2xl mb-8">
            Lenin Complex, School St, Camp Road Junction, Tambaram East CH-73.
          </p>

          <LocationContact />
        </Container>
      </Section>
    </main>
  );
}
