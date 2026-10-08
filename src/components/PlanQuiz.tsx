"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { useLanguage } from "@/context/LanguageContext";
import { Button, HeadingLockup, Container } from "@/components/ui";
import { ProgramCollage } from "@/components/ProgramCollage";
import { gymImages } from "@/content/gymImages";

export const PlanQuiz: React.FC = () => {
  const { lang } = useLanguage();
  const textDeck = copy[lang].quiz;

  // Check if collage has at least 4 active images
  const collageItems = ["program-cutout-1", "program-cutout-2", "program-cutout-3", "program-cutout-4", "program-cutout-5", "program-cutout-6"];
  const activeCount = collageItems.filter((key) => {
    const entry = gymImages[key];
    return entry && (entry.status === "demo" || entry.status === "real") && entry.desktopSrc;
  }).length;

  const hasCollage = activeCount >= 4;

  return (
    <section id="quiz" className="relative min-h-[100vh] bg-[#0b0b0c] border-b border-line overflow-hidden flex flex-col justify-end" data-surface="ink">
      <Container className="w-full h-full flex flex-col justify-end py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end min-h-[calc(100vh-80px)]">
          
          {/* Left Text Column (40% Desktop / Cols 1-5) */}
          <div className={`lg:col-span-5 pb-[4rem] text-left z-10 max-w-2xl ${!hasCollage ? "lg:col-span-12" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <HeadingLockup
                as="h2"
                lead={textDeck.lines[0]}
                lines={[textDeck.lines[1]]}
                onSurface="ink"
              />
            </motion.div>

            <p className="font-body text-[clamp(1rem,1.15vw,1.375rem)] text-text-muted leading-relaxed mt-4 max-w-[34ch] line-clamp-2">
              {textDeck.subline}
            </p>

            <div className="mt-8">
              <Link href="/quiz">
                <Button variant="primary" size="md">
                  Find Your Plan
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Media Column (60% Desktop / Cols 6-12) bleeding off right, top & bottom */}
          {hasCollage && (
            <div className="lg:col-span-7 h-full w-full min-h-[500px] lg:min-h-[100vh] overflow-hidden lg:-mr-[clamp(1.25rem,3vw,3.75rem)]">
              <ProgramCollage />
            </div>
          )}

        </div>
      </Container>
    </section>
  );
};
