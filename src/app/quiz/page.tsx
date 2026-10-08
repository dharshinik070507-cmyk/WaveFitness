"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { HeadingLockup, Button, Input } from "@/components/ui";

export default function QuizPage() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("");
  const [experience, setExperience] = useState("");
  const [schedule, setSchedule] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          note: `Quiz Answer: Goal=${goal}, Experience=${experience}, Schedule=${schedule}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-bg text-text p-4 sm:p-8 font-body flex flex-col items-center justify-center">
      <div className="max-w-xl w-full bg-surface-1 border border-line p-6 sm:p-8">
        
        <Link href="/" className="inline-flex items-center gap-1.5 font-wordmark text-xs font-bold uppercase text-text-muted hover:text-text mb-6 tracking-button">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {submitted ? (
          <div className="text-center space-y-4 py-8">
            <div className="w-12 h-12 rounded-r-0 bg-surface-2 border border-line text-text flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 text-blue" />
            </div>
            <HeadingLockup
              as="h2"
              eyebrow="RECOMMENDED PLAN"
              lines={["Quarterly Pass", "is best for you"]}
              emphasisLine={0}
              align="center"
            />
            <p className="font-body text-xs text-text-muted">
              We saved your recommendation. Sugu Master will call you shortly to confirm your free trial visit.
            </p>
            <Link href="/" className="inline-block mt-4">
              <Button variant="primary" size="md">Return to Website</Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <HeadingLockup
              as="h2"
              eyebrow="MEMBERSHIP QUIZ"
              lines={["Your plan,", "in 30 seconds"]}
              emphasisLine={0}
            />

            {step === 1 && (
              <div className="space-y-4">
                <span className="font-wordmark text-xs font-bold text-text uppercase tracking-button block">
                  Step 1: What is your primary fitness goal?
                </span>
                {["Fat Loss & Weight Reduction", "Muscle Building & Strength", "Beginner Foundation", "General Fitness & Stamina"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => { setGoal(g); setStep(2); }}
                    className={`w-full p-4 border text-left font-wordmark text-xs font-bold uppercase tracking-button transition-colors ${
                      goal === g ? "bg-surface-2 border-line text-text" : "bg-bg border-line/60 text-text-muted hover:text-text"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <span className="font-wordmark text-xs font-bold text-text uppercase tracking-button block">
                  Step 2: Have you lifted weights before?
                </span>
                {["Complete Beginner (First time in gym)", "Intermediate (Lifting for 1-6 months)", "Experienced (Lifting over 1 year)"].map((e) => (
                  <button
                    key={e}
                    type="button"
                    onClick={() => { setExperience(e); setStep(3); }}
                    className={`w-full p-4 border text-left font-wordmark text-xs font-bold uppercase tracking-button transition-colors ${
                      experience === e ? "bg-surface-2 border-line text-text" : "bg-bg border-line/60 text-text-muted hover:text-text"
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <span className="font-wordmark text-xs font-bold text-text uppercase tracking-button block">
                  Step 3: Enter your details to get your recommendation
                </span>
                <Input
                  label="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sugumar Master"
                  required
                />
                <Input
                  label="10-Digit Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 7397398749"
                  required
                />
                <Button variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Generating..." : "Get Recommended Plan"}
                </Button>
              </div>
            )}
          </form>
        )}

      </div>
    </main>
  );
}
