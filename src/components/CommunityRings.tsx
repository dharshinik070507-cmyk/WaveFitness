"use client";

import React from "react";
import Image from "next/image";
import { gymImages } from "@/content/gymImages";

export interface CommunityRingsProps {
  className?: string;
}

export const CommunityRings: React.FC<CommunityRingsProps> = ({ className = "" }) => {
  // 10 scattered circles with non-overlapping bounding coordinates (x%, y%, size clamp string, arc deg)
  const circlePositions = [
    { key: "member-01", left: "2%", top: "2%", size: "clamp(3.5rem,7.5vw,11rem)", arcDeg: 280 },
    { key: "member-02", left: "35%", top: "0%", size: "clamp(4rem,8.5vw,13rem)", arcDeg: 310 },
    { key: "member-03", left: "70%", top: "4%", size: "clamp(3.5rem,7vw,10.5rem)", arcDeg: 240 },
    { key: "member-04", left: "14%", top: "28%", size: "clamp(3.8rem,7.8vw,11.5rem)", arcDeg: 290 },
    { key: "member-05", left: "50%", top: "25%", size: "clamp(4.2rem,9vw,13.5rem)", arcDeg: 330 },
    { key: "member-06", left: "78%", top: "30%", size: "clamp(3.5rem,7vw,10.5rem)", arcDeg: 270 },
    { key: "member-07", left: "2%", top: "54%", size: "clamp(3.5rem,7vw,10.5rem)", arcDeg: 250 },
    { key: "member-08", left: "32%", top: "52%", size: "clamp(4rem,8vw,12rem)", arcDeg: 300 },
    { key: "member-09", left: "64%", top: "55%", size: "clamp(4.2rem,8.5vw,12.5rem)", arcDeg: 320 },
    { key: "member-10", left: "44%", top: "78%", size: "clamp(3.8rem,7.5vw,11rem)", arcDeg: 260 },
  ];

  // Filter circles that have valid media
  const activeCircles = circlePositions.filter((pos) => {
    const entry = gymImages[pos.key];
    return entry && (entry.status === "demo" || entry.status === "real") && entry.desktopSrc;
  });

  if (activeCircles.length < 6) {
    return null;
  }

  return (
    <div className={`relative w-full h-full min-h-[520px] lg:min-h-[680px] bg-[#fafafa] overflow-hidden select-none ${className}`}>
      {/* Scattered Member Circles with Ring Arcs */}
      <div className="relative w-full h-full min-h-[500px]">
        {activeCircles.map((pos) => {
          const entry = gymImages[pos.key];
          if (!entry?.desktopSrc) return null;

          return (
            <div
              key={pos.key}
              style={{
                left: pos.left,
                top: pos.top,
                width: pos.size,
                height: pos.size,
              }}
              className="absolute rounded-full flex items-center justify-center bg-[#fafafa]"
            >
              {/* SVG Blue Ring Arc Overlay */}
              <svg
                className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none drop-shadow-[0_6px_18px_rgba(0,0,0,0.12)]"
                viewBox="0 0 100 100"
              >
                {/* Grey Ring Track */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#cfcfd2"
                  strokeWidth="6"
                  fill="transparent"
                />
                {/* Active Blue Arc */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="var(--blue)"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (pos.arcDeg / 360) * 283}
                  strokeLinecap="round"
                />
              </svg>

              {/* Photo inside with 0.7rem gap */}
              <div className="w-[82%] h-[82%] rounded-[9999px] overflow-hidden relative shadow-soft">
                <Image
                  src={entry.desktopSrc}
                  alt={typeof entry.alt === "string" ? entry.alt : entry.alt.en}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
