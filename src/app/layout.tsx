import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { JsonLdSchema } from "@/components/JsonLdSchema";

export const metadata: Metadata = {
  title: "Wave Fitness Unisex Gym Tambaram | Monthly ₹999 | 100% Natural",
  description:
    "Tambaram's premier unisex gym on Camp Road CH-73. Personal trainer attention from Sugu Master & Coach Shimal. Clean, friendly, steroid-free natural body transformation.",
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
  authors: [{ name: "Wave Fitness Unisex Gym" }],
  openGraph: {
    title: "Wave Fitness Unisex Gym Tambaram East",
    description: "Ride the Wave to Wellness. Monthly membership ₹999/mo. Clean, friendly unisex gym on Camp Road CH-73.",
    url: "https://wavefitnesstambaram.in",
    siteName: "Wave Fitness Unisex Gym",
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-brand-dark text-slate-100 font-sans">
        <LanguageProvider>
          <JsonLdSchema />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
