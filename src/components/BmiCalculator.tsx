"use client";

import React, { useState } from "react";
import { Calculator, AlertTriangle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui";

export const BmiCalculator: React.FC = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("lose");
  const [result, setResult] = useState<{ bmi: string; calories: number; advice: string } | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) return;

    const bmi = (w / ((h / 100) * (h / 100))).toFixed(1);
    const bmr = 10 * w + 6.25 * h - 5 * 25 + 5;
    const tdee = Math.round(bmr * 1.375);

    let targetCalories = tdee;
    let advice = "";

    if (goal === "lose") {
      targetCalories = tdee - 400;
      advice = "Target 400 kcal deficit for natural fat loss.";
    } else if (goal === "muscle") {
      targetCalories = tdee + 300;
      advice = "Target 300 kcal surplus for 100% natural muscle gain.";
    } else {
      advice = "Maintenance calories to maintain current body weight.";
    }

    setResult({ bmi, calories: targetCalories, advice });
  };

  return (
    <section className="py-16 bg-bg relative border-b border-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-surface-1 p-6 sm:p-8 rounded-sm border border-line">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-button text-blue mb-1 flex items-center justify-center gap-1 font-wordmark">
              <Calculator className="w-4 h-4" /> Quick Fitness Tool
            </span>
            <h3 className="font-display text-2xl font-black text-text uppercase">
              BMI & Daily Calorie Calculator
            </h3>
            <p className="text-xs text-text-muted mt-1 font-body">
              Get an instant estimation of your body mass index and daily caloric needs.
            </p>
          </div>

          <form onSubmit={calculate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-meta font-bold text-text-muted uppercase mb-1 font-wordmark">Height (cm)</label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-sm bg-surface-2 border border-line text-text text-xs focus:outline-none focus:border-blue"
                />
              </div>

              <div>
                <label className="block text-meta font-bold text-text-muted uppercase mb-1 font-wordmark">Weight (kg)</label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 68"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-sm bg-surface-2 border border-line text-text text-xs focus:outline-none focus:border-blue"
                />
              </div>

              <div>
                <label className="block text-meta font-bold text-text-muted uppercase mb-1 font-wordmark">Primary Goal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-sm bg-surface-2 border border-line text-text text-xs focus:outline-none focus:border-blue"
                >
                  <option value="lose">Fat Loss</option>
                  <option value="muscle">Muscle Gain</option>
                  <option value="maintain">Maintain Fitness</option>
                </select>
              </div>
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Calculate Score
            </Button>
          </form>

          {result && (
            <div className="mt-6 p-4 rounded-sm bg-surface-2 border border-line flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-caption font-bold uppercase text-text-muted font-wordmark">Calculated BMI Score</span>
                <div className="text-3xl font-black text-text font-display">{result.bmi}</div>
              </div>
              <div className="text-center sm:text-right">
                <span className="text-caption font-bold uppercase text-text-muted font-wordmark">Target Daily Calories</span>
                <div className="text-2xl font-black text-success font-display">{result.calories} kcal</div>
                <span className="text-caption text-text-muted block font-body">{result.advice}</span>
              </div>
            </div>
          )}

          {/* Non-Medical Disclaimer */}
          <div className="mt-4 pt-3 border-t border-line text-caption text-text-muted italic flex flex-col sm:flex-row items-center justify-between gap-2 font-body">
            <span>
              <AlertTriangle className="w-3 h-3 text-blue inline mr-1" />
              Non-medical estimate only. Speak with Sugu Master or Coach Shimal for accurate assessment.
            </span>
            <a
              href="https://wa.me/917397398749?text=Hi%20Sugu%20Master!%20I%20want%20diet%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="text-text font-bold underline flex items-center gap-1 shrink-0"
            >
              <MessageCircle className="w-3 h-3 text-blue" /> Talk To A Trainer
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
