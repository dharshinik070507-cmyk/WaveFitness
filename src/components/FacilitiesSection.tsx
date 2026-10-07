"use client";

import React, { useState } from "react";
import { Dumbbell, Shield, Sparkles, CheckCircle2 } from "lucide-react";

export const FacilitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const inventory = [
    {
      id: "f1",
      name: "Free Weights & Heavy Dumbbell Racks",
      category: "weights",
      desc: "Comprehensive dumbbell sets from light warming weights up to heavy bodybuilding pairs, EZ curl bars, and Olympic barbells.",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "f2",
      name: "Commercial Treadmill & Cardio Suite",
      category: "cardio",
      desc: "Heavy-duty shock-absorbing treadmills, spin exercise bikes, and elliptical cross-trainers for fat-burn conditioning.",
      image: "https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "f3",
      name: "Heavy-Duty Power Racks & Benches",
      category: "weights",
      desc: "Safe squat racks, incline/decline chest press benches, and lat pulldown cable stations built for biomechanical safety.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "f4",
      name: "Functional Fitness & Turf Area",
      category: "functional",
      desc: "Kettlebells, battle ropes, plyometric boxes, resistance bands, and core stability mats for athletic mobility.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "f5",
      name: "Clean Locker Rooms & Changing Zone",
      category: "amenities",
      desc: "Dedicated hygienic locker storage, clean changing areas, drinking water dispenser, and ventilation fans/AC.",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "f6",
      name: "Parking & CCTV Security",
      category: "amenities",
      desc: "24/7 CCTV surveillance cameras across gym floors and convenient two-wheeler parking at Lenin Complex, School St.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filtered = activeCategory === "all"
    ? inventory
    : inventory.filter((item) => item.category === activeCategory);

  return (
    <section id="facilities" className="py-20 bg-brand-dark/95 border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">
            Inside The Gym Floor
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase">
            Facilities & Equipment Inventory
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Clean, cozy, and well-maintained. Every machine is calibrated for safety and muscle targeting.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {[
            { key: "all", label: "All Facilities" },
            { key: "weights", label: "Free Weights & Racks" },
            { key: "cardio", label: "Cardio Suite" },
            { key: "functional", label: "Functional & Turf" },
            { key: "amenities", label: "Lockers, Parking & Safety" }
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                activeCategory === cat.key
                  ? "bg-brand-red text-white shadow-lg shadow-brand-red/20"
                  : "bg-brand-card text-slate-400 hover:text-white border border-brand-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-brand-card border border-brand-border overflow-hidden group hover:border-slate-600 transition-all"
            >
              <div className="h-52 relative bg-slate-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-white uppercase flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" /> {item.name}
                </h3>
                <p className="mt-2 text-slate-400 text-xs leading-relaxed">
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
