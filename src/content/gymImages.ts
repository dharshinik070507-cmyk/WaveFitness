export interface GymImageAlt {
  en: string;
  ta?: string;
}

export interface GymImageEntry {
  status: "placeholder" | "demo" | "real";
  consent: boolean;
  alt: GymImageAlt | string;
  width?: number;
  height?: number;
  focal?: { x: number; y: number };
  desktopSrc?: string;
  mobileSrc?: string;
  credit?: string;
}

const isDemoActive = process.env.NEXT_PUBLIC_DEMO_MEDIA !== "false";

export const gymImages: Record<string, GymImageEntry> = {
  // 1. Hero
  hero: {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: {
      en: "Unisex gym interior floor plan in Tambaram",
      ta: "தாம்பரம் ஜிம் உட்புறம்",
    },
    width: 2400,
    height: 1350,
    focal: { x: 70, y: 50 },
    desktopSrc: "/images/hero-desktop.webp",
    mobileSrc: "/images/hero-mobile.webp",
  },

  // 2. Coaches (NEVER use demo images per spec rule 7)
  "coach-sugu": {
    status: "placeholder",
    consent: false,
    alt: {
      en: "Head Coach Sugumar watching client lifting form",
      ta: "தலைமை பயிற்றுவிப்பாளர் சுகுமார்",
    },
    width: 1200,
    height: 1500,
    focal: { x: 50, y: 30 },
  },
  "coach-shimal": {
    status: "placeholder",
    consent: false,
    alt: {
      en: "Personal Trainer Coach Shimal coaching posture",
      ta: "பயிற்றுவிப்பாளர் ஷிமல்",
    },
    width: 1200,
    height: 1500,
    focal: { x: 50, y: 30 },
  },

  // 3. Six Floor/Equipment Shots
  "floor-01": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Free weights and dumbbell rack section", ta: "டம்பல்ஸ் பகுதி" },
    width: 1200,
    height: 900,
    desktopSrc: "/images/floor-01.webp",
  },
  "floor-02": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Commercial treadmill and cardio suite", ta: "கார்டியோ பகுதி" },
    width: 1200,
    height: 900,
    desktopSrc: "/images/floor-02.webp",
  },
  "floor-03": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Power squat rack and heavy lifting area", ta: "ஸ்குவாட் ரேக் பகுதி" },
    width: 1200,
    height: 900,
    desktopSrc: "/images/floor-03.webp",
  },
  "floor-04": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Functional turf and conditioning zone", ta: "செயல்பாட்டு பயிற்சி பகுதி" },
    width: 1200,
    height: 900,
    desktopSrc: "/images/floor-04.webp",
  },
  "floor-05": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Cable crossover pulley stations", ta: "கேபிள் புல்லி உபகரணங்கள்" },
    width: 1200,
    height: 900,
    desktopSrc: "/images/floor-05.webp",
  },
  "floor-06": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Locker room and changing area", ta: "லாக்கர் மற்றும் உடைமாற்றும் அறை" },
    width: 1200,
    height: 900,
    desktopSrc: "/images/floor-06.webp",
  },

  // Floor Aliases
  "free-weights": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Free weights rack", ta: "டம்பல்ஸ் பகுதி" },
    desktopSrc: "/images/floor-01.webp",
  },
  "cardio-suite": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Cardio suite treadmills", ta: "கார்டியோ பகுதி" },
    desktopSrc: "/images/floor-02.webp",
  },
  "squat-rack": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Power squat racks", ta: "ஸ்குவாட் ரேக்" },
    desktopSrc: "/images/floor-03.webp",
  },

  // 4. Six Program Cut-Outs
  "program-cutout-1": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Strength & Muscle Building Cutout", ta: "தசை வளர்ச்சி பயிற்சி" },
    desktopSrc: "/images/program-cutout-1.webp",
  },
  "program-cutout-2": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Fat Loss & Conditioning Cutout", ta: "எடை குறைப்பு பயிற்சி" },
    desktopSrc: "/images/program-cutout-2.webp",
  },
  "program-cutout-3": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Personal Training Cutout", ta: "தனிப்பயிற்சி" },
    desktopSrc: "/images/program-cutout-3.webp",
  },
  "program-cutout-4": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "General Fitness & Mobility Cutout", ta: "பொது உடற்பயிற்சி" },
    desktopSrc: "/images/program-cutout-4.webp",
  },
  "program-cutout-5": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "HIIT & Functional Fitness Cutout", ta: "கார்டியோ பயிற்சி" },
    desktopSrc: "/images/program-cutout-5.webp",
  },
  "program-cutout-6": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Contest Prep & Physique Cutout", ta: "போட்டி பயிற்சி" },
    desktopSrc: "/images/program-cutout-6.webp",
  },

  // 5. Twelve Community Circles
  "member-01": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Member 01", desktopSrc: "/images/member-01.webp" },
  "member-02": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Member 02", desktopSrc: "/images/member-02.webp" },
  "member-03": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Member 03", desktopSrc: "/images/member-03.webp" },
  "member-04": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Member 04", desktopSrc: "/images/member-04.webp" },
  "member-05": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Member 05", desktopSrc: "/images/member-05.webp" },
  "member-06": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Member 06", desktopSrc: "/images/member-06.webp" },
  "member-07": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Member 07", desktopSrc: "/images/member-07.webp" },
  "member-08": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Member 08", desktopSrc: "/images/member-08.webp" },
  "member-09": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Member 09", desktopSrc: "/images/member-09.webp" },
  "member-10": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Member 10", desktopSrc: "/images/member-10.webp" },
  "member-11": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Member 11", desktopSrc: "/images/member-11.webp" },
  "member-12": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Member 12", desktopSrc: "/images/member-12.webp" },

  // 6. Eight Gallery Shots
  "gallery-01": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Floor Overview", desktopSrc: "/images/floor-01.webp" },
  "gallery-02": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Dumbbell Rack", desktopSrc: "/images/floor-02.webp" },
  "gallery-03": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Cardio Section", desktopSrc: "/images/floor-03.webp" },
  "gallery-04": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Power Squat Rack", desktopSrc: "/images/floor-04.webp" },
  "gallery-05": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Functional Turf", desktopSrc: "/images/floor-05.webp" },
  "gallery-06": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Locker Area", desktopSrc: "/images/floor-06.webp" },
  "gallery-07": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Training Equipment", desktopSrc: "/images/floor-01.webp" },
  "gallery-08": { status: isDemoActive ? "demo" : "placeholder", consent: false, alt: "Gym Floor Entrance", desktopSrc: "/images/final-cta.webp" },

  // 7. Final CTA Shot
  "final-cta": {
    status: isDemoActive ? "demo" : "placeholder",
    consent: false,
    alt: { en: "Gym entrance and equipment line up", ta: "நுழைவாயில்" },
    width: 1920,
    height: 1080,
    desktopSrc: "/images/final-cta.webp",
  },
};
