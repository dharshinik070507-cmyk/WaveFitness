"use client";

import React from "react";
import { useTrial } from "@/context/TrialContext";
import { Button, Container } from "@/components/ui";
import { Dumbbell } from "lucide-react";
import { gymData } from "@/content/gymData";

export const FinalCtaBand: React.FC = () => {
  const { openTrialModal } = useTrial();

  return (
    <section className="py-20 bg-surface-1 border-t border-b border-line text-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10">
        <span className="outline-word text-[14vw]">START NOW</span>
      </div>

      <Container className="relative z-10 max-w-3xl">
        <span className="font-wordmark text-xs font-bold text-red uppercase tracking-poster block mb-2">
          TAMBARAM CAMP ROAD CH-73
        </span>

        <h2 className="font-display text-h1 font-black uppercase text-text mb-4">
          READY TO RIDE THE WAVE?
        </h2>

        <p className="font-body text-body-lg text-text-muted mb-8 max-w-xl mx-auto">
          Start your natural fitness transformation today. Experience our equipment & certified coaching with zero obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => openTrialModal("Final CTA Band")}
          >
            <Dumbbell className="w-5 h-5 mr-2" /> Claim Free Trial Visit
          </Button>

          <a href={`tel:${gymData.contact.phoneTel}`}>
            <Button variant="secondary" size="lg">
              Call {gymData.contact.phonePoster}
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};
