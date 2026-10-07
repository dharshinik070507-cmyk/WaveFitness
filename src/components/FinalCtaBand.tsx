"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTrial } from "@/context/TrialContext";
import { Button } from "@/components/ui";
import { Dumbbell, MapPin, Phone, MessageCircle } from "lucide-react";
import { gymData } from "@/content/gymData";
import { fadeInUpVariants, defaultViewport } from "@/lib/motion";

interface FinalCtaBandProps {
  onOpenTrial?: () => void;
}

export const FinalCtaBand: React.FC<FinalCtaBandProps> = ({ onOpenTrial }) => {
  const { openTrialModal } = useTrial();

  const handleClaimTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      openTrialModal("Final CTA Band");
    }
  };

  return (
    <section id="location" className="py-20 bg-surface-1 border-t border-b border-line text-center relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10 z-0">
        <span className="outline-word text-[14vw]">TEAM WAVE</span>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] flex flex-col items-center">
        
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="max-w-2xl mx-auto"
        >
          <span className="font-wordmark text-xs font-bold text-red uppercase tracking-poster block mb-2">
            14 / JOIN TEAM WAVE
          </span>

          <h2 className="font-display text-h1 font-black uppercase text-text mb-4">
            JOIN TEAM WAVE
          </h2>

          <p className="font-body text-body-lg text-text-muted mb-8">
            Start your natural fitness transformation today at Camp Road, Tambaram East. Experience our clean floor & personal trainer guidance with zero obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              onClick={handleClaimTrial}
            >
              <Dumbbell className="w-5 h-5 mr-2" /> Claim Free Trial
            </Button>

            <a href={`tel:${gymData.contact.phoneTel}`}>
              <Button variant="secondary" size="lg">
                <Phone className="w-4 h-4 text-blue mr-2" /> Call {gymData.contact.phonePoster}
              </Button>
            </a>

            <a href={gymData.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">
                <MessageCircle className="w-4 h-4 text-red mr-2" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Map & Address Block Under It */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="w-full max-w-4xl bg-bg border border-line p-6 sm:p-8 rounded-r-0 text-left grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          {/* Address Details */}
          <div>
            <div className="flex items-center gap-2 font-wordmark text-xs font-bold text-red uppercase tracking-poster mb-2">
              <MapPin className="w-4 h-4" /> VISIT OUR GYM
            </div>
            <h3 className="font-display text-xl font-bold text-text uppercase mb-2">
              {gymData.name}
            </h3>
            <p className="font-body text-xs text-text-muted leading-relaxed mb-4">
              {gymData.address.line1}, {gymData.address.line2}, {gymData.address.area}, {gymData.address.suburb}, {gymData.address.city}, {gymData.address.state} - {gymData.address.pincode}
            </p>

            <div className="space-y-1 font-body text-xs text-text-dim">
              <p>Plus Code: <strong className="text-text">{gymData.googlePlusCode}</strong></p>
              <p>Timing: <strong className="text-text">{gymData.hours.weekday}</strong></p>
            </div>
          </div>

          {/* Embedded Google Map Frame */}
          <div className="h-60 border border-line rounded-r-0 overflow-hidden bg-surface-2 relative">
            <iframe
              title="WAVE FITNESS UNISEX (GYM) Map"
              src={gymData.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
