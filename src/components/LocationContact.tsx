"use client";

import React, { useState } from "react";
import { gymData, tamilDictionary } from "@/content/gymData";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, MessageCircle, Navigation, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export const LocationContact: React.FC = () => {
  const { lang } = useLanguage();
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    goal: "Weight Loss",
    message: "",
    honeypot: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam honeypot trigger

    // Validation for Indian 10-digit mobile number
    const cleanMobile = formData.mobile.replace(/\D/g, "");
    if (cleanMobile.length < 10) {
      alert("Please enter a valid 10-digit Indian mobile number (e.g., 7397398749).");
      return;
    }

    setFormSent(true);

    // Generate prefilled WhatsApp notification link for owner
    const waText = encodeURIComponent(
      `Hi Wave Fitness! Lead Inquiry:\nName: ${formData.name}\nMobile: ${formData.mobile}\nGoal: ${formData.goal}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/917397398749?text=${waText}`, "_blank");
  };

  return (
    <section id="location" className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Address, Plus Code & Landmark Directions */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">
                Visit Gym Floor
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase">
                {lang === "ta" ? tamilDictionary.contact.title : "Location & Contact"}
              </h2>
              <p className="mt-2 text-slate-400 text-sm">
                Located right at Camp Road Junction in Lenin Complex, School St, East Tambaram.
              </p>
            </div>

            <div className="space-y-6 bg-brand-card p-6 rounded-3xl border border-brand-border">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-red/10 border border-brand-red/30 text-brand-red shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white uppercase text-base">Full Address</h4>
                  <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                    {gymData.address.line1}, {gymData.address.line2}, {gymData.address.suburb}, {gymData.address.area}, {gymData.address.city}, {gymData.address.state} - {gymData.address.pincode}
                  </p>
                  <span className="inline-block mt-2 px-2.5 py-1 rounded bg-brand-dark border border-brand-border text-brand-red font-bold text-[10px] uppercase">
                    Poster Line: {gymData.address.posterShort}
                  </span>
                </div>
              </div>

              {/* Plus Code */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white uppercase text-base">Google Plus Code</h4>
                  <p className="text-cyan-400 font-mono text-sm mt-0.5 font-bold">
                    {gymData.googlePlusCode}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/w4fv65tambaram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-cyan-400 mt-2 underline"
                  >
                    Get Directions on Google Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white uppercase text-base">Phone & WhatsApp</h4>
                  <p className="text-slate-200 text-sm mt-0.5 font-bold">
                    {gymData.contact.phoneFormatted} (Poster format: {gymData.contact.phonePoster})
                  </p>
                  <div className="mt-3 flex gap-2">
                    <a
                      href={`tel:${gymData.contact.phoneTel}`}
                      className="px-3 py-1.5 rounded-lg bg-brand-dark border border-brand-border text-white text-xs font-bold uppercase"
                    >
                      Call Now
                    </a>
                    <a
                      href={gymData.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Nearby Areas Served */}
            <div className="p-6 rounded-3xl bg-brand-card/60 border border-brand-border">
              <h4 className="font-display font-bold text-xs uppercase text-slate-300 mb-3">
                Nearby Areas Served (Local SEO):
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {gymData.nearbyAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-brand-dark border border-brand-border text-slate-400 text-[10px] font-semibold"
                  >
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form & Embedded Google Map */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Form */}
            <div className="bg-brand-card p-6 sm:p-8 rounded-3xl border border-brand-border shadow-xl">
              <h3 className="font-display text-2xl font-bold text-white uppercase mb-1">
                Send Direct Inquiry To Wave Fitness
              </h3>
              <p className="text-slate-400 text-xs mb-6">
                Have questions regarding memberships, personal training, or timings? Leave your phone number below.
              </p>

              {formSent ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-display text-xl font-bold text-white uppercase">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-emerald-300 mt-1">
                    We opened WhatsApp to send your details directly to gym reception (+91 73973 98749).
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="mt-4 px-4 py-2 bg-emerald-600 text-white font-bold text-xs uppercase rounded-xl"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot for Anti-Spam */}
                  <input
                    type="text"
                    name="website_url_honeypot"
                    className="hidden"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-red"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Mobile Number (WhatsApp)</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 7397398749"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-red"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Primary Fitness Goal</label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-red"
                    >
                      <option>Weight Loss & Fat Burn</option>
                      <option>Natural Bodybuilding & Muscle Gain</option>
                      <option>1-on-1 Personal Training with Sugu Master</option>
                      <option>Women's Toning & Core</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Message / Questions</label>
                    <textarea
                      rows={3}
                      placeholder="Ask about timings, fee structure, or trial slots..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-xs focus:outline-none focus:border-brand-red"
                    ></textarea>
                  </div>

                  {/* Consent checkbox for DPDP Act */}
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <input type="checkbox" required defaultChecked className="accent-brand-red" />
                    <span>I consent to receive trial confirmation & membership updates via phone/WhatsApp.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-red hover:bg-brand-red-hover text-white font-extrabold uppercase text-xs rounded-xl shadow-lg shadow-brand-red/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Inquiry & Open WhatsApp Chat
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl border border-brand-border overflow-hidden h-72 relative bg-brand-card">
              <iframe
                title="Wave Fitness Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.751241924168!2d80.1429674!3d12.9230144!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzIyLjkiTiA4MMKwMDgnMzQuNyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
    </section>
  );
};
