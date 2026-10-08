import React from "react";
import Link from "next/link";
import { Section, Container, HeadingLockup, Button } from "@/components/ui";
import { gymData } from "@/content/gymData";

export const metadata = {
  title: `About ${gymData.name} | Natural Fitness Gym Tambaram`,
  description: `Learn about Wave Fitness philosophy: 100% natural body transformation without steroids, small floor personal attention on Camp Road CH-73.`,
};

export default function AboutPage() {
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
            eyebrow="01 / OUR STORY & PHILOSOPHY"
            lines={["SMALL FLOOR.", "BIG ATTENTION."]}
            emphasisLine={1}
            bar
          />

          <p className="font-body text-body text-text-muted mt-4 max-w-2xl">
            {gymData.positioning}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="p-8 bg-surface-1 border border-line rounded-none space-y-4">
              <span className="font-wordmark text-xs font-bold text-blue uppercase tracking-button">100% NATURAL MOTTO</span>
              <h3 className="font-display text-2xl font-bold uppercase text-text">
                &ldquo;{gymData.naturalPhilosophy}&rdquo;
              </h3>
              <p className="font-body text-xs text-text-muted leading-relaxed">
                We believe in genuine physical transformation built on progressive overload, proper biomechanics, and daily consistency. No shortcut steroids or synthetic enhancements.
              </p>
            </div>

            <div className="p-8 bg-surface-1 border border-line rounded-none space-y-4">
              <span className="font-wordmark text-xs font-bold text-blue uppercase tracking-button">TAMBARAM COMMUNITY</span>
              <h3 className="font-display text-2xl font-bold uppercase text-text">
                Clean, Friendly Unisex Environment
              </h3>
              <p className="font-body text-xs text-text-muted leading-relaxed">
                Whether you are a college student, working professional, or homemaker, Coach Sugumar Anna and Coach Shimal ensure you feel comfortable, safe, and guided every set.
              </p>
            </div>
          </div>

          <div className="pt-6 text-center">
            <Link href="/contact">
              <Button variant="primary">Visit Gym Floor at Camp Road</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
