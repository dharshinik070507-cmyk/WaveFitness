import type { Metadata } from "next";
import "./globals.css";
import { fontsClassString } from "./fonts";
import { LanguageProvider } from "@/context/LanguageContext";
import { TrialProvider } from "@/context/TrialContext";
import { JsonLdSchema } from "@/components/JsonLdSchema";
import { gymData } from "@/content/gymData";

export const metadata: Metadata = {
  title: `${gymData.name} | Monthly ₹${gymData.pricing.monthly.amount} | 100% Natural`,
  description: `${gymData.positioning} Personal trainer attention from Sugu Master & Coach Shimal on Camp Road CH-73.`,
  keywords: [
    "gym in Tambaram",
    "unisex gym Tambaram East",
    "gym near Camp Road Tambaram",
    "gym in Selaiyur",
    "personal trainer Tambaram",
    "weight loss gym Tambaram",
    "natural bodybuilding Chennai",
    "gym for women Tambaram"
  ],
  authors: [{ name: gymData.name }],
  openGraph: {
    title: `${gymData.name} Tambaram East`,
    description: `Ride the Wave to Wellness. Monthly pass ₹${gymData.pricing.monthly.amount}/mo. Clean, friendly unisex gym on Camp Road CH-73.`,
    url: "https://wavefitnesstambaram.in",
    siteName: gymData.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lang="en" className={fontsClassString}>
      <body className="antialiased bg-bg text-text font-body selection:bg-red selection:text-white">
        <LanguageProvider>
          <TrialProvider>
            <JsonLdSchema />
            {children}
          </TrialProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
