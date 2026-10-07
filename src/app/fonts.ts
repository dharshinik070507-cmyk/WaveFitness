import { Archivo, Hanken_Grotesk, Anek_Tamil, Noto_Sans_Tamil } from "next/font/google";

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
 * 3. TAMIL PRIMARY FONT (Anek Tamil)
 */
export const anekTamil = Anek_Tamil({
  subsets: ["tamil"],
  display: "swap",
  variable: "--font-tamil",
  preload: false,
});

/**
 * 4. TAMIL FALLBACK FONT (Noto Sans Tamil)
 */
export const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  display: "swap",
  variable: "--font-tamil-fallback",
  preload: false,
});

/**
 * Combined font variables class string to apply to <html>
 */
export const fontsClassString = `${archivo.variable} ${hankenGrotesk.variable} ${anekTamil.variable} ${notoSansTamil.variable}`;
