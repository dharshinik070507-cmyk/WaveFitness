import React from "react";
import Image from "next/image";
import { gymImages } from "@/content/gymImages";

export interface PhotoProps {
  slotKey: string;
  variant?: "hero" | "panel" | "portrait" | "card" | "square" | "wide";
  alt?: string;
  className?: string;
  priority?: boolean;
  showPlaceholderInDev?: boolean;
}

export const Photo: React.FC<PhotoProps> = ({
  slotKey,
  variant = "panel",
  alt,
  className = "",
  priority = false,
  showPlaceholderInDev = false,
}) => {
  const aspectClasses = {
    hero: "aspect-[16/9] md:aspect-[21/9]",
    panel: "aspect-[16/9] sm:aspect-[4/3]",
    portrait: "aspect-[4/5]",
    card: "aspect-[4/5]",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  };

  const aspectClass = aspectClasses[variant] || aspectClasses.panel;
  const entry = gymImages[slotKey];

  const getAltString = (): string => {
    if (alt) return alt;
    if (!entry || !entry.alt) return `Gym photo ${slotKey}`;
    if (typeof entry.alt === "string") return entry.alt;
    return entry.alt.en;
  };

  // Render Image if status is "real" OR "demo" AND desktopSrc exists
  if (entry && (entry.status === "real" || entry.status === "demo") && entry.desktopSrc) {
    const objectPosition = entry.focal
      ? `${entry.focal.x}% ${entry.focal.y}%`
      : "center";

    return (
      <div
        className={`relative w-full ${aspectClass} bg-surface-2 border border-line rounded-none overflow-hidden ${className}`}
      >
        <Image
          src={entry.desktopSrc}
          alt={getAltString()}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-opacity duration-ui"
          style={{ objectPosition }}
        />
        <div className="photo-scrim" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${aspectClass} bg-surface-2 border border-line rounded-none overflow-hidden flex items-center justify-center p-4 ${className}`}
    >
      <div className="photo-scrim" />
    </div>
  );
};
