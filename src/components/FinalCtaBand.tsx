"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTrial } from "@/context/TrialContext";
import { Button, HeadingLockup, Container } from "@/components/ui";
import { CommunityRings } from "@/components/CommunityRings";
import { gymImages } from "@/content/gymImages";

interface FinalCtaBandProps {
  onOpenTrial?: () => void;
}

export const FinalCtaBand: React.FC<FinalCtaBandProps> = ({ onOpenTrial }) => {
  const { openTrialModal } = useTrial();

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Final CTA Band");
    }
  };

  // Check if rings have at least 6 active images
  const memberKeys = ["member-01", "member-02", "member-03", "member-04", "member-05", "member-06", "member-07", "member-08", "member-09", "member-10"];
  const activeCount = memberKeys.filter((key) => {
    const entry = gymImages[key];
    return entry && (entry.status === "demo" || entry.status === "real") && entry.desktopSrc;
  }).length;

  const hasRings = activeCount >= 6;

  return (
    <section id="community" className="relative min-h-[100vh] bg-[#fafafa] border-t border-b border-[#e2e2e5] overflow-hidden flex flex-col justify-center" data-surface="paper">
      <Container className="w-full h-full flex flex-col justify-center py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-80px)]">
          
          {/* Left Text Column (40% Desktop / Cols 1-5) */}
          <div className={`lg:col-span-5 text-left z-10 max-w-2xl ${!hasRings ? "lg:col-span-12" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <HeadingLockup
                as="h2"
                lead="Join a community"
                lines={["that shares", "your passion"]}
                onSurface="paper"
              />
            </motion.div>

            <p className="font-body text-[clamp(1rem,1.15vw,1.375rem)] text-[#55555b] leading-relaxed mt-4 max-w-[34ch] line-clamp-2">
              Walk in, meet the trainers, train free once.
            </p>

            <div className="mt-8">
              <Button variant="primary" size="md" onSurface="paper" onClick={handleClaimTrial}>
                Claim Free Trial
              </Button>
            </div>
          </div>

          {/* Right Media Column (60% Desktop / Cols 6-12) bleeding off right & bottom */}
          {hasRings && (
            <div className="lg:col-span-7 h-full w-full min-h-[520px] lg:min-h-[100vh] overflow-hidden lg:-mr-[clamp(1.25rem,3vw,3.75rem)]">
              <CommunityRings />
            </div>
          )}

        </div>
      </Container>
    </section>
  );
};
