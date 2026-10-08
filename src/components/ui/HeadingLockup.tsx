import React from "react";

export interface HeadingLockupProps {
  lead?: string;
  eyebrow?: string;
  lines: string[];
  emphasisLine?: number;
  bar?: boolean;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  onSurface?: "ink" | "paper";
  isHero?: boolean;
  className?: string;
}

export const HeadingLockup: React.FC<HeadingLockupProps> = ({
  lead,
  eyebrow,
  lines,
  align = "left",
  as: Component = "h2",
  className = "",
}) => {
  const isCenter = align === "center";
  const leadText = lead || eyebrow;

  // Main size: clamp(2.5rem, 3.9vw, 5rem)
  const mainSize = "text-[clamp(2.5rem,3.9vw,5rem)]";

  // Lead size: 0.62 x main size => clamp(1.55rem, 2.4vw, 3.1rem)
  const leadSize = "text-[clamp(1.55rem,2.4vw,3.1rem)]";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {/* Lead Line (0.62 x main size, weight 700, tracking -0.01em, same var(--text) color) */}
      {leadText && (
        <span
          className={`block font-display font-bold uppercase tracking-[-0.01em] [word-spacing:0.04em] leading-[1.02] text-text ${leadSize} mb-1.5 md:whitespace-nowrap`}
        >
          {leadText}
        </span>
      )}

      {/* Main Heading Line(s) (weight 800, tracking -0.01em, same var(--text) color) */}
      <Component
        className={`font-display font-extrabold uppercase tracking-[-0.01em] [word-spacing:0.04em] leading-[1.02] text-text ${mainSize} w-full max-w-none`}
      >
        {lines.map((line, idx) => (
          <span key={idx} className="block md:whitespace-nowrap">
            {line}
          </span>
        ))}
      </Component>
    </div>
  );
};
