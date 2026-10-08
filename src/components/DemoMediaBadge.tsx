"use client";

import React from "react";
import { gymImages } from "@/content/gymImages";

export const DemoMediaBadge: React.FC = () => {
  const isDemo = Object.values(gymImages).some((img) => img.status === "demo");

  if (!isDemo || process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-4 left-4 z-modal bg-surface-3 border border-line text-text-muted px-2.5 py-1 font-wordmark text-caption font-bold uppercase tracking-button rounded-badge pointer-events-none select-none flex items-center gap-1.5 opacity-90">
      <span className="w-1.5 h-1.5 rounded-full bg-warning animate-pulse" />
      Demo media
    </div>
  );
};
