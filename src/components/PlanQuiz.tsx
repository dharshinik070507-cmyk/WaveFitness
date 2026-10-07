"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, ArrowRight, RotateCcw, Dumbbell, AlertCircle } from "lucide-react";
import { Button, Input, Card } from "@/components/ui";

export const PlanQuiz: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [answers, setAnswers] = useState({
    goal: "Weight Loss & Fat Burn",
    experience: "Complete Beginner",
    timing: "Morning (6 AM - 10 AM)",
    name: "",
    mobile: "",
    consent: true,
    honeypot: "",
  });

  const handleSelect = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setErrorMsg("");
  };

  const getRecommendation = () => {
    if (answers.goal.includes("Muscle") || answers.goal.includes("Personal")) {
      return {
        planName: "3-Month Quarterly Pass (₹2,499)",
        program: "Custom Personal Transformation Plan",
        reason: "Best value for dedicated 90-day consistency under Sugu Master & Coach Shimal.",
        perDay: "₹28/day (Saves ₹498)"
      };
    }
    return {
      planName: "Monthly Pass (₹999)",
      program: answers.goal,
      reason: "Perfect flexible start for fitness beginners on Camp Road, Tambaram East.",
      perDay: "₹33/day"
    };
  };

  const rec = getRecommendation();

  const handleQuizSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const cleanMobile = answers.mobile.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      setErrorMsg("Please enter a valid 10-digit Indian phone number starting with 6-9.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: answers.name,
          mobile: cleanMobile,
          goal: `${rec.planName} - Quiz Goal: ${answers.goal} (${answers.experience})`,
          timing: answers.timing,
          consent: answers.consent,
          honeypot: answers.honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Failed to submit quiz lead.");
        setLoading(false);
        return;
      }

      if (data.whatsappUrl) {
        localStorage.setItem("last_lead_whatsapp", data.whatsappUrl);
      }

      router.push("/thank-you");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div id="quiz" className="my-8">
      {/* Quiz Progress Bar */}
      <div className="w-full bg-surface-2 h-2 rounded-r-0 mb-8 overflow-hidden border border-line">
        <div
          className="bg-red h-full transition-all duration-ui"
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>

      <Card>
        {step === 1 && (
          <div>
            <span className="font-wordmark text-xs font-bold text-text-dim uppercase tracking-poster">STEP 1 OF 4</span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-text uppercase mt-1 mb-6">
              What is your primary fitness goal?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Weight Loss & Fat Burn",
                "Muscle Gain (100% Natural)",
                "Strength & Body Conditioning",
                "Beginner Fitness & Form Guidance"
              ].map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    handleSelect("goal", opt);
                    handleNext();
                  }}
                  className={`p-4 rounded-r-0 border text-left font-wordmark uppercase text-xs tracking-poster transition-all flex items-center justify-between ${
                    answers.goal === opt
                      ? "border-red bg-red/10 text-text"
                      : "border-line bg-surface-2 text-text-muted hover:border-surface-3 hover:text-text"
                  }`}
                >
                  <span>{opt}</span>
                  {answers.goal === opt && <CheckCircle2 className="w-5 h-5 text-red" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <span className="font-wordmark text-xs font-bold text-text-dim uppercase tracking-poster">STEP 2 OF 4</span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-text uppercase mt-1 mb-6">
              What is your gym experience level?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Complete Beginner (Need form help)",
                "Intermediate (Trained before)",
                "Advanced / Natural Bodybuilder",
                "Returning After Gap"
              ].map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    handleSelect("experience", opt);
                    handleNext();
                  }}
                  className={`p-4 rounded-r-0 border text-left font-wordmark uppercase text-xs tracking-poster transition-all flex items-center justify-between ${
                    answers.experience === opt
                      ? "border-red bg-red/10 text-text"
                      : "border-line bg-surface-2 text-text-muted hover:border-surface-3 hover:text-text"
                  }`}
                >
                  <span>{opt}</span>
                  {answers.experience === opt && <CheckCircle2 className="w-5 h-5 text-red" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <span className="font-wordmark text-xs font-bold text-text-dim uppercase tracking-poster">STEP 3 OF 4</span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-text uppercase mt-1 mb-6">
              Preferred workout timing at Camp Road?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Early Morning (6 AM - 9 AM)",
                "Late Morning (9 AM - 12 PM)",
                "Evening (5 PM - 8 PM)",
                "Night (8 PM - 9:30 PM)"
              ].map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    handleSelect("timing", opt);
                    handleNext();
                  }}
                  className={`p-4 rounded-r-0 border text-left font-wordmark uppercase text-xs tracking-poster transition-all flex items-center justify-between ${
                    answers.timing === opt
                      ? "border-red bg-red/10 text-text"
                      : "border-line bg-surface-2 text-text-muted hover:border-surface-3 hover:text-text"
                  }`}
                >
                  <span>{opt}</span>
                  {answers.timing === opt && <CheckCircle2 className="w-5 h-5 text-red" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <span className="font-wordmark text-xs font-bold text-success uppercase tracking-poster block mb-2">
              ✓ QUIZ COMPLETED! RECOMMENDED PLAN:
            </span>
            
            <div className="p-6 rounded-r-0 bg-bg border border-red/40 mb-6">
              <h4 className="font-display text-2xl font-bold text-text uppercase">
                {rec.planName}
              </h4>
              <div className="font-wordmark text-xs font-bold text-red uppercase tracking-poster mt-1">
                Program: {rec.program} ({rec.perDay})
              </div>
              <p className="font-body text-xs text-text-muted mt-3">{rec.reason}</p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-error/10 border border-error/30 text-error font-body text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleQuizSubmit} className="space-y-4 font-body">
              {/* Honeypot */}
              <input
                type="text"
                className="hidden"
                value={answers.honeypot}
                onChange={(e) => setAnswers({ ...answers, honeypot: e.target.value })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Your Full Name *"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={answers.name}
                  onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                />
                <Input
                  label="Mobile Number (WhatsApp) *"
                  type="tel"
                  required
                  placeholder="e.g. 7397398749"
                  value={answers.mobile}
                  onChange={(e) => setAnswers({ ...answers, mobile: e.target.value })}
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-text-muted">
                <input
                  type="checkbox"
                  required
                  checked={answers.consent}
                  onChange={(e) => setAnswers({ ...answers, consent: e.target.checked })}
                  className="accent-red"
                />
                <span>I consent to contact for trial confirmation under DPDP Act.</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button type="submit" variant="primary" disabled={loading} className="flex-1">
                  <Dumbbell className="w-5 h-5 mr-2" />
                  {loading ? "Registering..." : "Book Free Trial For This Plan"}
                </Button>
                <Button type="button" variant="secondary" onClick={handleReset}>
                  <RotateCcw className="w-4 h-4 mr-2" /> Retake Quiz
                </Button>
              </div>
            </form>
          </div>
        )}

        {step < 4 && (
          <div className="mt-8 flex justify-between items-center pt-4 border-t border-line font-wordmark text-xs font-bold uppercase tracking-poster">
            <button
              disabled={step === 1}
              onClick={() => setStep(step - 1)}
              className={step === 1 ? "text-text-dim cursor-not-allowed" : "text-text-muted hover:text-text"}
            >
              ← Back
            </button>
            <Button variant="primary" size="sm" onClick={handleNext}>
              Next Step <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};
