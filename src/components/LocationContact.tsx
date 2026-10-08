"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { gymData } from "@/content/gymData";
import { MapPin, Phone, MessageCircle, Navigation, Send, AlertCircle } from "lucide-react";
import { Button, Input, Card } from "@/components/ui";

import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/content/copy";

export const LocationContact: React.FC = () => {
  const { lang } = useLanguage();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    goal: "Weight Loss",
    message: "",
    consent: true,
    honeypot: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const cleanMobile = formData.mobile.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      setErrorMsg("Please enter a valid 10-digit Indian mobile number starting with 6-9.");
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
        setErrorMsg(data.error || "Failed to submit inquiry.");
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
    <div id="location" className="my-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Address, Plus Code & Directions */}
        <div className="lg:col-span-5 space-y-6">
          
          <Card>
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface-2 border border-line text-blue shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-text uppercase text-base">Full Address</h4>
                  <p className="font-body text-xs text-text-muted mt-1 leading-relaxed">
                    {gymData.address.line1}, {gymData.address.line2}, {gymData.address.suburb}, {gymData.address.area}, {gymData.address.city}, {gymData.address.state} - {gymData.address.pincode}
                  </p>
                  <span className="inline-block mt-2 font-wordmark text-meta font-bold uppercase text-text-muted tracking-button">
                    Poster Line: {gymData.address.posterShort}
                  </span>
                </div>
              </div>

              {/* Plus Code */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface-2 border border-line text-blue shrink-0">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-text uppercase text-base">Google Plus Code</h4>
                  <p className="font-mono text-sm text-blue mt-0.5 font-bold">
                    {gymData.googlePlusCode}
                  </p>
                  <a
                    href={gymData.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-body text-xs font-bold text-text hover:text-blue mt-2 underline"
                  >
                    Get Directions on Google Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface-2 border border-line text-success shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-text uppercase text-base">Phone & WhatsApp</h4>
                  <p className="font-body text-sm text-text mt-0.5 font-bold">
                    {gymData.contact.phoneFormatted} (Poster format: {gymData.contact.phonePoster})
                  </p>
                  <div className="mt-3 flex gap-2">
                    <a href={`tel:${gymData.contact.phoneTel}`}>
                      <Button variant="secondary" size="sm">{copy[lang].nav.callNowLabel}</Button>
                    </a>
                    <a href={gymData.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" size="sm" className="border-success/40 text-success hover:bg-success hover:text-bg">
                        <MessageCircle className="w-3.5 h-3.5 mr-1" /> WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </Card>

          {/* Nearby Areas Served */}
          <Card>
            <h4 className="font-wordmark text-xs font-bold uppercase tracking-button text-text-muted mb-3">
              NEARBY AREAS SERVED:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {gymData.nearbyAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-surface-2 border border-line font-body text-text-muted text-meta font-semibold"
                >
                  📍 {area}
                </span>
              ))}
            </div>
          </Card>

        </div>

        {/* Right Column: Contact Form & Embedded Map */}
        <div className="lg:col-span-7 space-y-6">
          
          <Card>
            <h3 className="font-display text-2xl font-bold text-text uppercase mb-1">
              Send Direct Inquiry To Wave Fitness
            </h3>
            <p className="font-body text-xs text-text-muted mb-6">
              Have questions regarding memberships, personal training, or timings? Leave your phone number below.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 bg-error/10 border border-error/30 text-error font-body text-xs flex items-center gap-2">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Your Full Name *"
                  required
                  placeholder="e.g. John Doe"
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
              </div>

              <div>
                <label className="block font-wordmark text-xs font-bold text-text-muted uppercase tracking-button mb-1">
                  Interested Program
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full min-h-[56px] px-4 bg-surface-2 border border-line text-text font-body text-base focus:outline-none focus:border-blue"
                >
                  <option>General Gym Membership</option>
                  <option>Personal Training (1-on-1)</option>
                  <option>Weight Loss Program</option>
                  <option>Natural Bodybuilding</option>
                </select>
              </div>

              <div>
                <label className="block font-wordmark text-xs font-bold text-text-muted uppercase tracking-button mb-1">
                  Message / Inquiry
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your fitness goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 bg-surface-2 border border-line text-text font-body text-base focus:outline-none focus:border-blue"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-xs text-text-muted">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="accent-red"
                />
                <span>I consent to contact for trial confirmation under DPDP Act.</span>
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="w-full"
              >
                <Send className="w-4 h-4 mr-2" />
                {loading ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </Card>

          {/* Embedded Google Map Frame */}
          <div className="border border-line rounded-r-0 overflow-hidden h-72 relative bg-surface-1">
            <iframe
              title="WAVE FITNESS UNISEX (GYM) Google Map Location"
              src={gymData.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
};
