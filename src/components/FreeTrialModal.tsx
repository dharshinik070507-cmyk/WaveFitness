"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, Dumbbell, AlertCircle } from "lucide-react";
import { Button, Input } from "@/components/ui";

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
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    goal: prefilledPlan || "General Free Trial Visit",
    timing: "Morning (6 AM - 10 AM)",
    gender: "Unspecified",
    consent: true,
    honeypot: "",
  });

  useEffect(() => {
    if (prefilledPlan) {
      setFormData((prev) => ({ ...prev, goal: prefilledPlan }));
    }
  }, [prefilledPlan]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const cleanMobile = formData.mobile.replace(/\D/g, "");
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
          ...formData,
          mobile: cleanMobile,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Failed to process lead inquiry.");
        setLoading(false);
        return;
      }

      if (data.whatsappUrl) {
        localStorage.setItem("last_lead_whatsapp", data.whatsappUrl);
      }

      onClose();
      router.push("/thank-you");
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-modal bg-bg/85 flex items-center justify-center p-4"
    >
      <div className="bg-surface-1 border border-line rounded-r-0 max-w-md w-full p-6 sm:p-8 relative shadow-hard">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text-muted hover:text-text"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left mb-6">
          <span className="font-wordmark text-xs font-bold text-text-muted uppercase tracking-button block mb-1">
            01 / FREE TRIAL PASS
          </span>
          <h3 className="font-display text-2xl font-black text-text uppercase">
            Claim Your Free Trial Visit
          </h3>
          <p className="font-body text-xs text-text-muted mt-1">
            Experience Wave Fitness equipment & coach guidance on Camp Road CH-73.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-surface-2 border border-line text-error font-body text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 font-body">
          {/* Honeypot */}
          <input
            type="text"
            className="hidden"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          />

          <Input
            label="Full Name *"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <Input
            label="Mobile Number (WhatsApp) *"
            type="tel"
            required
            placeholder="e.g. 7397398749"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-wordmark text-xs font-bold text-text-muted uppercase tracking-button mb-1">
                Preferred Timing
              </label>
              <select
                value={formData.timing}
                onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                className="w-full min-h-[56px] px-3 bg-surface-2 border border-line text-text font-body text-xs focus:outline-none focus:border-blue"
              >
                <option>Morning (6 AM - 10 AM)</option>
                <option>Afternoon (11 AM - 3 PM)</option>
                <option>Evening (5 PM - 9:30 PM)</option>
              </select>
            </div>

            <div>
              <label className="block font-wordmark text-xs font-bold text-text-muted uppercase tracking-button mb-1">
                Gender (Optional)
              </label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full min-h-[56px] px-3 bg-surface-2 border border-line text-text font-body text-xs focus:outline-none focus:border-blue"
              >
                <option>Unspecified</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div>
            <Input
              label="Selected Goal / Plan"
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-text-muted pt-1">
            <input
              type="checkbox"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="accent-blue"
            />
            <span>I consent to contact for trial confirmation.</span>
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            className="w-full"
          >
            <Dumbbell className="w-4 h-4 mr-2" />
            {loading ? "Registering Trial..." : "Confirm Free Trial Visit"}
          </Button>
        </form>

      </div>
    </div>
  );
};
