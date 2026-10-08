"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Home, Phone } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { gymData } from "@/content/gymData";

import Image from "next/image";

export default function ThankYouPage() {
  const [waUrl, setWaUrl] = useState<string>(gymData.contact.whatsappLink);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("last_lead_whatsapp");
      if (stored) setWaUrl(stored);
    }
  }, []);

  return (
    <main className="min-h-screen bg-bg text-text flex items-center justify-center py-20 px-4">
      <Container className="max-w-md text-center">
        <div className="bg-surface-1 p-8 rounded-r-0 border border-line shadow-hard space-y-6">
          <Image
            src="/brand/logo-wf-clean.png"
            width={48}
            height={48}
            alt="Wave Fitness Logo"
            className="mx-auto mb-2"
          />
          <div className="w-16 h-16 bg-success/10 border border-success/30 rounded-full flex items-center justify-center mx-auto text-success">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="font-wordmark text-xs font-bold text-success uppercase tracking-button block">
            01 / REQUEST RECEIVED
          </span>
          
          <h1 className="font-display text-3xl font-black uppercase text-text">
            Free Trial Visit Registered!
          </h1>

          <p className="font-body text-xs text-text-muted leading-relaxed">
            Thank you! Your details have been submitted. Show this confirmation at gym reception when you arrive at Camp Road CH-73.
          </p>

          <div className="pt-2 space-y-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 min-h-[52px] px-6 bg-success text-bg font-wordmark text-xs font-bold uppercase tracking-button rounded-sm hover:opacity-90"
            >
              <MessageCircle className="w-4 h-4" /> Send Details On WhatsApp Now
            </a>

            <Link href="/" className="block">
              <Button variant="secondary" className="w-full">
                <Home className="w-4 h-4 mr-2" /> Return To Home Page
              </Button>
            </Link>
          </div>

          <div className="pt-4 border-t border-line text-meta text-text-dim font-body">
            Need to remove your submitted contact data? Contact us under DPDP Act at{" "}
            <a href={`mailto:${gymData.contact.email}`} className="underline text-text-muted">
              {gymData.contact.email}
            </a>{" "}
            or call <a href={`tel:${gymData.contact.phoneTel}`} className="underline text-text-muted">{gymData.contact.phoneFormatted}</a>.
          </div>
        </div>
      </Container>
    </main>
  );
}
