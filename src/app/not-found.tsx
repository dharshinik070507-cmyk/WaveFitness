import React from "react";
import Link from "next/link";
import { Dumbbell, Home } from "lucide-react";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg flex items-center justify-center p-4 text-center">
      <div className="bg-surface-1 p-8 sm:p-12 rounded-none border border-line max-w-md w-full">
        <div className="w-16 h-16 rounded-full bg-surface-2 border border-line text-blue flex items-center justify-center mx-auto mb-4">
          <Dumbbell className="w-8 h-8" />
        </div>
        <h1 className="font-display text-5xl font-black text-text uppercase">404</h1>
        <h2 className="font-display text-xl font-bold text-text uppercase mt-1">Page Not Found</h2>
        <p className="text-text-muted text-xs mt-3 font-body">
          The fitness page you are looking for has been moved or doesn&apos;t exist.
        </p>
        
        <div className="mt-6">
          <Link href="/">
            <Button variant="primary">
              <Home className="w-4 h-4 mr-2" /> Return To Wave Fitness Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
