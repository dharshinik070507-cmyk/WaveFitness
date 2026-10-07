"use client";

import React from "react";
import { gymData } from "@/content/gymData";
import { Youtube, Instagram, ExternalLink, Play } from "lucide-react";

export const SocialFeeds: React.FC = () => {
  const youtubeVideos = [
    {
      id: "v1",
      title: "Natural Body Transformation: 100% Steroid-Free Lifting Guide",
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
      link: gymData.social.youtube.url
    },
    {
      id: "v2",
      title: "Proper Squat & Bench Press Form Check with Sugu Master",
      thumbnail: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80",
      link: gymData.social.youtube.url
    },
    {
      id: "v3",
      title: "Beginner Fat Loss Diet Tips for South Indian Meals",
      thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
      link: gymData.social.youtube.url
    }
  ];

  return (
    <section className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">
              Community & Media Feeds
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase">
              #TeamWave On YouTube & Instagram
            </h2>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <a
              href={gymData.social.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase rounded-xl flex items-center gap-1.5"
            >
              <Youtube className="w-4 h-4" /> YouTube Channel
            </a>
            <a
              href={gymData.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-bold text-xs uppercase rounded-xl flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4" /> Instagram Reels
            </a>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {youtubeVideos.map((vid) => (
            <a
              key={vid.id}
              href={vid.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-brand-card border border-brand-border overflow-hidden hover:border-brand-red/50 transition-all flex flex-col justify-between"
            >
              <div className="h-52 relative bg-slate-900 overflow-hidden">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1 flex items-center gap-1">
                  <Youtube className="w-3.5 h-3.5" /> @wavefitnessnaturalfitness7400
                </span>
                <h3 className="font-display font-bold text-base text-white uppercase group-hover:text-cyan-400 transition-colors">
                  {vid.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
