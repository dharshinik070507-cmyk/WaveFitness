import React, { HTMLAttributes } from "react";
import { Container } from "./Container";
import { layoutRhythm } from "@/content/layoutRhythm";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  surface?: "ink" | "paper";
  sectionKey?: string;
  variant?: "standard" | "collage-right" | "rings-right" | "full-bleed" | string;
  hasLineBorder?: boolean;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  surface,
  sectionKey,
  hasLineBorder = true,
  className = "",
  id,
  children,
  ...props
}) => {
  const activeSurface = surface || (sectionKey ? layoutRhythm[sectionKey]?.surface : "ink") || "ink";
  const borderClass = hasLineBorder ? "border-b border-line" : "";

  return (
    <section
      id={id || sectionKey}
      data-surface={activeSurface}
      className={`py-[clamp(4rem,9vw,7rem)] relative overflow-hidden bg-bg text-text ${borderClass} ${className}`}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
};
