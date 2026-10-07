import React from "react";
import { SectionHeading, Card } from "@/components/ui";
import { gymData } from "@/content/gymData";

export const AboutSection: React.FC = () => {
  return (
    <div id="about">
      <SectionHeading
        indexTag="03"
        eyebrow="OUR PHILOSOPHY & STORY"
        title="SMALL FLOOR. BIG ATTENTION."
        subtitle={gymData.positioning}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <Card>
          <span className="font-wordmark text-[11px] font-bold text-red uppercase tracking-poster block mb-2">
            STEROID-FREE GUARANTEE
          </span>
          <h3 className="font-display text-2xl font-bold uppercase text-text mb-3">
            &ldquo;{gymData.naturalPhilosophy}&rdquo;
          </h3>
          <p className="font-body text-xs text-text-muted leading-relaxed">
            We reject synthetic shortcuts. Real muscle, lasting stamina, and body transformations built on solid lifting form, proper nutrition, and daily consistency.
          </p>
        </Card>

        <Card>
          <span className="font-wordmark text-[11px] font-bold text-blue uppercase tracking-poster block mb-2">
            TAMBARAM COMMUNITY
          </span>
          <h3 className="font-display text-2xl font-bold uppercase text-text mb-3">
            Clean, Friendly Unisex Atmosphere
          </h3>
          <p className="font-body text-xs text-text-muted leading-relaxed">
            Whether you are a college student, working professional, or homemaker, Coach Sugumar Anna and Coach Shimal ensure you feel comfortable, safe, and guided every set.
          </p>
        </Card>
      </div>
    </div>
  );
};
