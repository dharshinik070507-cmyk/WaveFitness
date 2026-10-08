import { Archivo, Hanken_Grotesk } from "next/font/google";

/**
 * 1. DISPLAY & WORDMARK FONT (Single Archivo Variable Instance with width axis)
 */
export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["wdth"],
});

/**
 * 2. BODY FONT (Hanken Grotesk)
 */
export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

/**
 * Combined font variables class string to apply to <html>
 */
export const fontsClassString = `${archivo.variable} ${hankenGrotesk.variable}`;
