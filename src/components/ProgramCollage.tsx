"use client";

import React from "react";
import Image from "next/image";
import { gymImages } from "@/content/gymImages";

export interface ProgramCollageProps {
  className?: string;
}

export const ProgramCollage: React.FC<ProgramCollageProps> = ({ className = "" }) => {
  const collageItems = [
    { key: "program-cutout-1", name: "Strength & Muscle Building" },
    { key: "program-cutout-2", name: "Fat Loss & Conditioning" },
    { key: "program-cutout-3", name: "Personal Training" },
    { key: "program-cutout-4", name: "General Fitness & Mobility" },
    { key: "program-cutout-5", name: "HIIT & Functional Fitness" },
    { key: "program-cutout-6", name: "Contest Prep & Physique" },
  ];

  // Filter items that have media
  const activeItems = collageItems.filter((item) => {
    const entry = gymImages[item.key];
    return entry && (entry.status === "demo" || entry.status === "real") && entry.desktopSrc;
  });

  if (activeItems.length < 4) {
    return null;
  }

  const col1 = [activeItems[0], activeItems[3]].filter(Boolean);
  const col2 = [activeItems[1], activeItems[4]].filter(Boolean);
  const col3 = [activeItems[2], activeItems[5]].filter(Boolean);

  return (
    <div className={`relative w-full h-full min-h-[500px] lg:min-h-[680px] overflow-hidden bg-[#14161f] select-none ${className}`}>
      {/* 3-Column Offset Masonry Grid cropped by section edges */}
      <div className="flex gap-[1.4rem] h-full items-center justify-start pl-6 py-8">
        
        {/* Column 1 (Offset -4rem) */}
        <div className="flex flex-col gap-[1.4rem] shrink-0 transform -translate-y-16">
          {col1.map((item) => {
            const entry = gymImages[item.key];
            return (
              <div
                key={item.key}
                className="w-[clamp(15rem,18vw,21.5rem)] aspect-[4/4.4] rounded-[14px] bg-[#f7f7f8] p-[1.1rem] flex flex-col justify-between relative overflow-hidden shadow-soft"
              >
                <span className="font-body text-[clamp(0.8rem,0.9vw,1.05rem)] text-[#8a8a90] leading-snug line-clamp-2 z-10">
                  {item.name}
                </span>
                {entry?.desktopSrc && (
                  <div className="relative w-full h-[calc(100%-2.5rem)] rounded-[10px] overflow-hidden mt-2">
                    <Image
                      src={entry.desktopSrc}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Column 2 (Offset +3rem) */}
        <div className="flex flex-col gap-[1.4rem] shrink-0 transform translate-y-12">
          {col2.map((item) => {
            const entry = gymImages[item.key];
            return (
              <div
                key={item.key}
                className="w-[clamp(15rem,18vw,21.5rem)] aspect-[4/4.4] rounded-[14px] bg-[#f7f7f8] p-[1.1rem] flex flex-col justify-between relative overflow-hidden shadow-soft"
              >
                <span className="font-body text-[clamp(0.8rem,0.9vw,1.05rem)] text-[#8a8a90] leading-snug line-clamp-2 z-10">
                  {item.name}
                </span>
                {entry?.desktopSrc && (
                  <div className="relative w-full h-[calc(100%-2.5rem)] rounded-[10px] overflow-hidden mt-2">
                    <Image
                      src={entry.desktopSrc}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Column 3 (Offset -7rem) */}
        <div className="flex flex-col gap-[1.4rem] shrink-0 transform -translate-y-24">
          {col3.map((item) => {
            const entry = gymImages[item.key];
            return (
              <div
                key={item.key}
                className="w-[clamp(15rem,18vw,21.5rem)] aspect-[4/4.4] rounded-[14px] bg-[#f7f7f8] p-[1.1rem] flex flex-col justify-between relative overflow-hidden shadow-soft"
              >
                <span className="font-body text-[clamp(0.8rem,0.9vw,1.05rem)] text-[#8a8a90] leading-snug line-clamp-2 z-10">
                  {item.name}
                </span>
                {entry?.desktopSrc && (
                  <div className="relative w-full h-[calc(100%-2.5rem)] rounded-[10px] overflow-hidden mt-2">
                    <Image
                      src={entry.desktopSrc}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
