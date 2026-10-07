"use client";

import React, { useState } from "react";
import { blogPosts, BlogPost } from "@/content/gymData";
import { BookOpen, Clock, ArrowRight, X } from "lucide-react";

export const BlogSection: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-brand-dark relative border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block flex items-center justify-center gap-1">
            <BookOpen className="w-4 h-4" /> Local Fitness Guide & Blog
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase">
            Tambaram Fitness & Nutrition Articles
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Expert fitness tips, local gym buying advice, and natural muscle-building nutrition for Tambaram East residents.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="rounded-3xl bg-brand-card border border-brand-border p-6 flex flex-col justify-between hover:border-brand-red/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] uppercase font-bold text-brand-muted mb-3">
                  <span className="px-2.5 py-1 rounded bg-brand-dark border border-brand-border text-cyan-400">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brand-red" /> {post.readTime}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white uppercase group-hover:text-brand-red transition-colors">
                  {post.title}
                </h3>
                
                <p className="mt-3 text-slate-400 text-xs leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <button
                onClick={() => setActivePost(post)}
                className="mt-6 pt-4 border-t border-brand-border/60 text-xs font-bold uppercase text-white hover:text-cyan-400 flex items-center justify-between transition-colors"
              >
                Read Full Article <ArrowRight className="w-4 h-4 text-brand-red" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-brand-card border border-brand-border rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto shadow-2xl">
            
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-xs font-bold text-brand-red uppercase tracking-widest block mb-1">
              {activePost.category} • {activePost.readTime}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-white uppercase mb-6">
              {activePost.title}
            </h2>

            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line border-t border-brand-border pt-4">
              {activePost.contentMarkdown}
            </div>

            <div className="mt-8 pt-4 border-t border-brand-border flex justify-end">
              <button
                onClick={() => setActivePost(null)}
                className="px-6 py-2.5 bg-brand-red text-white text-xs font-extrabold uppercase rounded-xl"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
