import React from "react";
import Link from "next/link";
import { Dumbbell, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-dark flex items-center justify-center p-4 text-center">
      <div className="bg-brand-card p-8 sm:p-12 rounded-3xl border border-brand-border max-w-md w-full">
        <div className="w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red flex items-center justify-center mx-auto mb-4">
          <Dumbbell className="w-8 h-8" />
        </div>
        <h1 className="font-display text-5xl font-black text-white uppercase">404</h1>
        <h2 className="font-display text-xl font-bold text-brand-red uppercase mt-1">Page Not Found</h2>
        <p className="text-slate-400 text-xs mt-3">
          The fitness page you are looking for has been moved or doesn&apos;t exist.
        </p>
        
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-hover text-white font-extrabold text-xs uppercase rounded-xl shadow-lg transition-all"
        >
          <Home className="w-4 h-4" /> Return To Wave Fitness Home
        </Link>
      </div>
    </main>
  );
}
