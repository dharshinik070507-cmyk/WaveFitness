import React from "react";

export interface SectionHeadingProps {
  indexTag?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  indexTag,
  eyebrow,
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-3xl"}`}>
      <div className={`flex items-center gap-2 font-wordmark text-xs font-bold text-red-text uppercase tracking-poster mb-2 ${align === "center" ? "justify-center" : ""}`}>
        {indexTag && <span>{indexTag} /</span>}
        <span>{eyebrow}</span>
        <span className="h-px w-8 bg-red"></span>
      </div>
      
      <div className={`heading-underline mb-4 ${align === "center" ? "mx-auto" : ""}`}>
        <h2 className="font-display text-h2 font-black text-text uppercase">
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className="font-body text-body-lg text-text-muted mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};
