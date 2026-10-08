export interface SectionLayoutRhythm {
  id: string;
  surface: "ink" | "paper";
  variant?: "standard" | "collage-right" | "rings-right" | "full-bleed";
}

export const layoutRhythm: Record<string, SectionLayoutRhythm> = {
  hero: { id: "hero", surface: "ink", variant: "full-bleed" },
  benefits: { id: "benefits", surface: "paper", variant: "standard" },
  programs: { id: "programs", surface: "ink", variant: "standard" },
  coaches: { id: "coaches", surface: "paper", variant: "standard" },
  quiz: { id: "quiz", surface: "ink", variant: "collage-right" },
  reviews: { id: "reviews", surface: "paper", variant: "standard" },
  plans: { id: "plans", surface: "ink", variant: "standard" },
  faq: { id: "faq", surface: "paper", variant: "standard" },
  closing: { id: "closing", surface: "paper", variant: "rings-right" },
  footer: { id: "footer", surface: "ink", variant: "standard" },
};
