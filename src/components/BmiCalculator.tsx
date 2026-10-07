"use client";

import React, { useState } from "react";
import { Calculator, AlertTriangle, MessageCircle } from "lucide-react";

export const BmiCalculator: React.FC = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("lose");
  const [result, setResult] = useState<any>(null);

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
    <section className="py-16 bg-brand-dark relative border-b border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-brand-card p-6 sm:p-8 rounded-3xl border border-brand-border">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1 block flex items-center justify-center gap-1">
              <Calculator className="w-4 h-4" /> Quick Fitness Tool
            </span>
            <h3 className="font-display text-2xl font-black text-white uppercase">
              BMI & Daily Calorie Calculator
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Get an instant estimation of your body mass index and daily caloric needs.
            </p>
          </div>

          <form onSubmit={calculate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Height (cm)</label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Weight (kg)</label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 68"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Primary Goal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-red"
                >
                  <option value="lose">Fat Loss</option>
                  <option value="muscle">Muscle Gain</option>
                  <option value="maintain">Maintain Fitness</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-brand-red hover:bg-brand-red-hover text-white font-extrabold uppercase text-xs rounded-xl shadow-lg"
            >
              Calculate Score
            </button>
          </form>

          {result && (
            <div className="mt-6 p-4 rounded-2xl bg-brand-dark border border-brand-red/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400">Calculated BMI Score</span>
                <div className="text-3xl font-black text-brand-red">{result.bmi}</div>
              </div>
              <div className="text-center sm:text-right">
                <span className="text-[10px] font-bold uppercase text-slate-400">Target Daily Calories</span>
                <div className="text-2xl font-black text-emerald-400">{result.calories} kcal</div>
                <span className="text-[10px] text-slate-300 block">{result.advice}</span>
              </div>
            </div>
          )}

          {/* Non-Medical Disclaimer */}
          <div className="mt-4 pt-3 border-t border-brand-border text-[10px] text-slate-500 italic flex items-center justify-between">
            <span>
              <AlertTriangle className="w-3 h-3 text-amber-400 inline mr-1" />
              Non-medical estimate only. Speak with Sugu Master or Coach Shimal for accurate assessment.
            </span>
            <a
              href="https://wa.me/917397398749?text=Hi%20Sugu%20Master!%20I%20want%20diet%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red font-bold underline flex items-center gap-1 shrink-0"
            >
              <MessageCircle className="w-3 h-3" /> Talk To A Trainer
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
