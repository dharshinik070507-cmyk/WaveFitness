"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeadingLockup } from "@/components/ui";
import { fadeInUpVariants, defaultViewport } from "@/lib/motion";

export const InsideTheGymGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const inventory = [
    {
      id: "f1",
      name: "Free Weights & Dumbbells Rack",
      category: "weights",
      desc: "Dumbbell sets, EZ curl bars, and Olympic barbells.",
      label: "[PHOTO: Free Weights Area]",
      src: "/images/free-weights.jpg",
    },
    {
      id: "f2",
      name: "Commercial Treadmill & Cardio Suite",
      category: "cardio",
      desc: "Shock-absorbing treadmills and spin bikes.",
      label: "[PHOTO: Commercial Treadmills]",
      src: "/images/cardio-suite.jpg",
    },
    {
      id: "f3",
      name: "Power Squat Racks & Bench Press",
      category: "weights",
      desc: "Heavy-duty squat racks and press benches.",
      label: "[PHOTO: Squat Racks & Platforms]",
      src: "/images/free-weights.jpg",
    },
    {
      id: "f4",
      name: "Functional Turf & Battle Ropes Area",
      category: "functional",
      desc: "Kettlebells, battle ropes, and agility mats.",
      label: "[PHOTO: Functional Turf Area]",
      src: "/images/hero-gym.jpg",
    },
    {
      id: "f5",
      name: "Clean Lockers & Changing Rooms",
      category: "amenities",
      desc: "Dedicated hygienic locker storage and water station.",
      label: "[PHOTO: Locker & Changing Rooms]",
      src: "/images/cardio-suite.jpg",
    },
    {
      id: "f6",
      name: "Lenin Complex Parking & Security",
      category: "amenities",
      desc: "24/7 CCTV surveillance and two-wheeler parking.",
      label: "[PHOTO: Parking & Security]",
      src: "/images/hero-gym.jpg",
    }
  ];

  const filtered = activeCategory === "all"
    ? inventory
    : inventory.filter((item) => item.category === activeCategory);

  return (
    <section id="facilities" className="py-[clamp(4rem,9vw,8rem)] bg-paper border-b border-line-paper text-text-paper">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">

        {/* Section Header */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-left max-w-3xl mb-12"
        >
          <HeadingLockup
            as="h2"
            lead="INSIDE THE GYM"
            lines={["EQUIPMENT &", "FACILITIES"]}
            emphasisLine={1}
            bar={false}
            onSurface="paper"
          />
          <p className="font-body text-body text-text-muted-paper mt-3">
            Well-maintained equipment, heavy-duty racks, and clean amenities at Lenin Complex, Camp Road.
          </p>
        </motion.div>

        {/* Category Pills */}
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
              className={`px-4 py-2 rounded-pill font-wordmark text-meta font-bold uppercase tracking-button transition-colors ${
                activeCategory === cat.key
                  ? "bg-paper-card text-text-paper"
                  : "bg-paper-card text-text-muted-paper hover:text-text-paper border border-line-paper"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-paper-card border border-line-paper rounded-card overflow-hidden"
            >
              {/* Photo Box */}
              <div className="h-48 bg-paper border-b border-line-paper relative flex items-center justify-center p-4">
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <span className="font-wordmark text-xs font-bold text-text-muted-paper tracking-button">
                    {item.label}
                  </span>
                )}
                <div className="photo-scrim" />
              </div>

              <div className="p-5">
                <h4 className="font-display text-lg font-bold text-text-paper uppercase">
                  {item.name}
                </h4>
                <p className="font-body text-xs text-text-muted-paper mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
