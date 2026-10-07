"use client";

import React, { useState } from "react";
import { gymData } from "@/content/gymData";

export const InsideTheGymGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const inventory = [
    {
      id: "f1",
      name: "Free Weights & Dumbbells Rack",
      category: "weights",
      desc: "Dumbbell sets, EZ curl bars, and Olympic barbells.",
      label: "[PHOTO: Free Weights Area]"
    },
    {
      id: "f2",
      name: "Commercial Treadmill & Cardio Suite",
      category: "cardio",
      desc: "Shock-absorbing treadmills and spin bikes.",
      label: "[PHOTO: Commercial Treadmills]"
    },
    {
      id: "f3",
      name: "Power Squat Racks & Bench Press",
      category: "weights",
      desc: "Heavy-duty squat racks and press benches.",
      label: "[PHOTO: Squat Racks & Platforms]"
    },
    {
      id: "f4",
      name: "Functional Turf & Battle Ropes Area",
      category: "functional",
      desc: "Kettlebells, battle ropes, and agility mats.",
      label: "[PHOTO: Functional Turf Area]"
    },
    {
      id: "f5",
      name: "Clean Lockers & Changing Rooms",
      category: "amenities",
      desc: "Dedicated hygienic locker storage and water station.",
      label: "[PHOTO: Locker & Changing Rooms]"
    },
    {
      id: "f6",
      name: "Lenin Complex Parking & Security",
      category: "amenities",
      desc: "24/7 CCTV surveillance and two-wheeler parking.",
      label: "[PHOTO: Parking & Security]"
    }
  ];

  const filtered = activeCategory === "all"
    ? inventory
    : inventory.filter((item) => item.category === activeCategory);

  return (
    <div id="facilities" className="my-8">
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { key: "all", label: "ALL" },
          { key: "weights", label: "FREE WEIGHTS" },
          { key: "cardio", label: "CARDIO SUITE" },
          { key: "functional", label: "TURF & FUNCTIONAL" },
          { key: "amenities", label: "LOCKERS & SAFETY" }
        ].map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-3 py-1.5 rounded-r-1 font-wordmark text-[11px] font-bold uppercase tracking-poster transition-colors ${
              activeCategory === cat.key
                ? "bg-red text-white"
                : "bg-surface-2 text-text-muted hover:text-text border border-line"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-surface-1 border border-line rounded-r-0 overflow-hidden"
          >
            {/* Flat Neutral Placeholder Box */}
            <div className="h-48 bg-surface-2 border-b border-line relative flex items-center justify-center p-4">
              <span className="font-wordmark text-xs font-bold text-text-dim tracking-poster">
                {item.label}
              </span>
              <div className="photo-scrim"></div>
            </div>

            <div className="p-5">
              <h4 className="font-display text-lg font-bold text-text uppercase">
                {item.name}
              </h4>
              <p className="font-body text-xs text-text-muted mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
