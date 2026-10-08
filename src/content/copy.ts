export interface SectionCopy {
  eyebrow: string;
  lines: string[];
  subline: string;
  cta: string;
  reassurance?: string;
  items?: Array<{ title: string; line: string }>;
  questions?: Array<{ q: string; a: string }>;
}

export interface BenefitsSectionCopy extends SectionCopy {
  items: Array<{ title: string; line: string }>;
}

export interface FaqSectionCopy extends SectionCopy {
  questions: Array<{ q: string; a: string }>;
}

export interface NavCopy {
  freeTrialPass: string;
  freeWord: string;
  trialPassWord: string;
  programsLabel: string;
  pricingLabel: string;
  callNowLabel: string;
  whatsAppUsLabel: string;
}

export interface FooterCopy {
  programsLabel: string;
  pricingLabel: string;
  callNowLabel: string;
  whatsAppUsLabel: string;
}

export interface CopyDeck {
  nav: NavCopy;
  footer: FooterCopy;
  hero: SectionCopy;
  benefits: BenefitsSectionCopy;
  week: SectionCopy;
  naturalStrength: SectionCopy;
  coaches: SectionCopy;
  progress: SectionCopy;
  programs: SectionCopy;
  quiz: SectionCopy;
  reviews: SectionCopy;
  plans: SectionCopy;
  faq: FaqSectionCopy;
  finalCta: SectionCopy;
}

const englishDeck: CopyDeck = {
  nav: {
    freeTrialPass: "Free trial pass",
    freeWord: "Free",
    trialPassWord: "trial pass",
    programsLabel: "Programs",
    pricingLabel: "Pricing",
    callNowLabel: "Call Now",
    whatsAppUsLabel: "WhatsApp Us",
  },
  footer: {
    programsLabel: "Programs",
    pricingLabel: "Pricing",
    callNowLabel: "Call Now",
    whatsAppUsLabel: "WhatsApp Us",
  },
  hero: {
    eyebrow: "Tambaram Camp Road",
    lines: ["Ride the wave", "to wellness"],
    subline: "Unisex gym with real trainers. Monthly from Rs 999.",
    cta: "Claim Free Trial",
    reassurance: "4.9★ on Google • 365+ reviews • Open from 6 AM",
  },
  benefits: {
    eyebrow: "Built for real training",
    lines: ["Small floor.", "Big attention."],
    subline: "Everything you need for natural progress without high chain costs.",
    cta: "Claim Free Trial",
    items: [
      { title: "Personal attention", line: "Trainers watch your form." },
      { title: "Clean equipment", line: "Well-maintained machines and weights." },
      { title: "Men and women", line: "A friendly floor for everyone." },
      { title: "Honest fees", line: "Monthly from Rs 999." },
    ],
  },
  week: {
    eyebrow: "Daily training",
    lines: ["Daily workout", "split"],
    subline: "Weekly routine planned by Sugumar Master.",
    cta: "Claim Free Trial",
  },
  naturalStrength: {
    eyebrow: "Natural strength",
    lines: ["Form-first", "gym floor"],
    subline: "Proper execution and nutrition guidance.",
    cta: "Claim Free Trial",
  },
  coaches: {
    eyebrow: "Coaches",
    lines: ["Meet our", "trainers"],
    subline: "Experienced trainers who guide every workout.",
    cta: "Claim Free Trial",
  },
  progress: {
    eyebrow: "Real progress",
    lines: ["Natural member", "results"],
    subline: "Consistent progress built through structured training.",
    cta: "Claim Free Trial",
  },
  programs: {
    eyebrow: "Targeted training",
    lines: ["Coached", "programs"],
    subline: "Targeted programs for weight loss and natural strength.",
    cta: "Claim Free Trial",
  },
  quiz: {
    eyebrow: "Program finder",
    lines: ["Find your plan", "in 30s"],
    subline: "Answer three quick questions to pick your plan.",
    cta: "Claim Free Trial",
  },
  reviews: {
    eyebrow: "Google reviews",
    lines: ["Real reviews,", "from Google"],
    subline: "Feedback from members in Tambaram East.",
    cta: "Claim Free Trial",
  },
  plans: {
    eyebrow: "Honest pricing",
    lines: ["Pick a plan,", "start today"],
    subline: "Monthly and 3-month plans with no hidden traps.",
    cta: "Claim Free Trial",
  },
  faq: {
    eyebrow: "FAQ",
    lines: ["Frequently asked", "questions"],
    subline: "Everything to know before your first visit.",
    cta: "Claim Free Trial",
    questions: [
      {
        q: "What are the exact gym timings?",
        a: "Monday–Friday 6:00 AM – 9:30 PM, Saturday 6:30 AM – 9:30 PM, Sunday 5:00 AM – 9:00 PM.",
      },
      {
        q: "Is Wave Fitness suitable for women?",
        a: "Yes, Wave Fitness is a unisex gym with certified male and female trainers.",
      },
      {
        q: "What is the monthly membership fee?",
        a: "Monthly pass starts at Rs 999 with no admission traps.",
      },
      {
        q: "Do I get trainer guidance on the floor?",
        a: "Yes, Sugumar Master & Coach Shimal actively assist members with form and workout routines.",
      },
      {
        q: "Where is the gym located?",
        a: "No.2 Lenin Complex, School St, Camp Road Junction, Tambaram East, Selaiyur, Chennai 600073.",
      },
      {
        q: "How do I claim a free trial pass?",
        a: "Click Claim Free Trial, enter your details, and visit the gym floor.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Tambaram East",
    lines: ["Join", "Team Wave"],
    subline: "Start your natural strength routine at Camp Road Junction.",
    cta: "Claim Free Trial",
  },
};

export const copy: { en: CopyDeck; ta: CopyDeck } = {
  en: englishDeck,
  ta: englishDeck,
};
