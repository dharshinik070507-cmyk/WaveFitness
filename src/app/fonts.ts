import { Archivo, Hanken_Grotesk, Anek_Tamil, Noto_Sans_Tamil } from "next/font/google";

/**
 * 1. DISPLAY FONT (Archivo Variable - Condensed Headline Stack)
 * Used for gritty, high-impact gym poster headlines.
 */
export const archivoDisplay = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["800", "900"],
});

/**
 * 2. WORDMARK & LABELS FONT (Archivo Variable - Expanded Accent Stack)
 * Used for wide-tracked uppercase logos, index numbers (01/02), and eyebrows.
 */
export const archivoWordmark = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-wordmark",
  weight: ["600", "700"],
});

/**
 * 3. BODY FONT (Hanken Grotesk)
 * Clean, humanistic sans-serif for high legibility at 16px+ mobile body text.
 */
export const hankenBody = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

/**
 * 4. TAMIL PRIMARY FONT (Anek Tamil Variable)
 * Native Tamil typography with proper line-height spacing for upper & lower diacritics.
 */
export const anekTamil = Anek_Tamil({
  subsets: ["tamil", "latin"],
  display: "swap",
  variable: "--font-tamil",
  weight: ["500", "700", "800"],
});

/**
 * 5. TAMIL FALLBACK FONT (Noto Sans Tamil)
 */
export const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  display: "swap",
  variable: "--font-tamil-fallback",
  weight: ["400", "700"],
});
