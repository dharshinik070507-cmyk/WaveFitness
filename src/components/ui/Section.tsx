import React, { HTMLAttributes } from "react";
import { Container } from "./Container";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "bg" | "surface-1";
  hasLineBorder?: boolean;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  variant = "bg",
  hasLineBorder = true,
  className = "",
  id,
  children,
  ...props
}) => {
  const bgClass = variant === "surface-1" ? "bg-surface-1" : "bg-bg";
  const borderClass = hasLineBorder ? "border-b border-line" : "";

  return (
    <section
      id={id}
      className={`py-[clamp(4rem,9vw,8rem)] relative overflow-hidden ${bgClass} ${borderClass} ${className}`}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
};
