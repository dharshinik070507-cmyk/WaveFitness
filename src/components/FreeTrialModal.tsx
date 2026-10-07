"use client";

import React, { useState, useEffect } from "react";
import { gymData } from "@/content/gymData";
import { X, Dumbbell, CheckCircle2, MessageCircle } from "lucide-react";

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPlan?: string;
  prefilledQuizData?: any;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  prefilledPlan,
  prefilledQuizData
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    goal: prefilledPlan || "General Free Trial Visit",
    time: "Morning (6 AM - 10 AM)",
    gender: "Unspecified",
    heardFrom: "Google Maps / Search",
    honeypot: ""
  });

  useEffect(() => {
    if (prefilledPlan) {
      setFormData((prev) => ({ ...prev, goal: prefilledPlan }));
    }
  }, [prefilledPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam trigger

    // Validation for Indian mobile number
    const cleanMobile = formData.mobile.replace(/\D/g, "");
    if (cleanMobile.length < 10) {
      alert("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setSubmitted(true);

    // Open WhatsApp link to send lead to gym management
    const text = encodeURIComponent(
      `🎉 NEW FREE TRIAL CLAIM!\nName: ${formData.name}\nMobile: ${formData.mobile}\nGoal/Plan: ${formData.goal}\nTiming: ${formData.time}\nGender: ${formData.gender}\nHeard via: ${formData.heardFrom}`
    );
    window.open(`https://wa.me/917397398749?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-brand-card border border-brand-red/50 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/30 text-brand-red flex items-center justify-center mx-auto mb-3">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-black text-white uppercase">
                Claim Your Free Trial Visit
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Experience Wave Fitness equipment & atmosphere with zero commitment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot */}
              <input
                type="text"
                className="hidden"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              />

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                  Mobile Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 7397398749"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-red"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-red"
                  >
                    <option>Morning (6 AM - 10 AM)</option>
                    <option>Afternoon (11 AM - 3 PM)</option>
                    <option>Evening (5 PM - 9 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                    Gender (Optional)
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-red"
                  >
                    <option>Unspecified</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                  Selected Goal / Plan
                </label>
                <input
                  type="text"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-slate-300 text-xs focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-400 pt-1">
                <input type="checkbox" required defaultChecked className="accent-brand-red" />
                <span>I consent to WhatsApp confirmation for my trial pass.</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-red hover:bg-brand-red-hover text-white font-extrabold uppercase text-xs rounded-xl shadow-lg shadow-brand-red/30 transition-all flex items-center justify-center gap-2"
              >
                <Dumbbell className="w-4 h-4" /> Confirm Free Trial Visit
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-3" />
            <h3 className="font-display text-2xl font-black text-white uppercase">
              Trial Pass Claimed!
            </h3>
            <p className="text-xs text-slate-300 mt-2">
              We opened WhatsApp to notify gym reception (+91 73973 98749). Show this message at reception when you arrive!
            </p>

            <a
              href={gymData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-600 text-white font-bold text-xs uppercase rounded-xl"
            >
              <MessageCircle className="w-4 h-4" /> Open WhatsApp Chat Again
            </a>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-3 text-xs text-slate-400 hover:text-white font-bold uppercase underline"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
