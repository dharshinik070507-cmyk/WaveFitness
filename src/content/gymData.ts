export interface GymBusinessFacts {
  name: string;
  shortBrand: string;
  tagline: string;
  positioning: string;
  naturalPhilosophy: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    area: string;
    suburb: string;
    city: string;
    state: string;
    pincode: string;
    posterShort: string;
  };
  googlePlusCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapsUrl: string;
  contact: {
    phoneFormatted: string;
    phonePoster: string;
    phoneTel: string;
    whatsappNumber: string;
    whatsappLink: string;
    email: string;
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
    note: string;
  };
  rating: {
    stars: number;
    reviewCount: number;
    lastUpdated: string;
  };
  pricing: {
    monthly: {
      amount: number;
      currency: string;
      perDay: number;
      promoWording: string;
      isClientConfirmed: boolean;
    };
    quarterly: {
      amount: number;
      currency: string;
      perDay: number;
      totalSavings: number;
      promoWording: string;
      isClientConfirmed: boolean;
      isMostPopular: boolean;
    };
    halfYearlyPlaceholder: {
      enabled: boolean;
      amount?: number;
      label: string;
    };
    annualPlaceholder: {
      enabled: boolean;
      amount?: number;
      label: string;
    };
    joiningFeeNote: string;
    promoEndDate: string;
  };
  trainers: Array<{
    id: string;
    name: string;
    nickname: string;
    role: string;
    photoUrl: string;
    specialties: string[];
    quote: string;
    status: string;
  }>;
  social: {
    instagram: {
      handle: string;
      url: string;
    };
    youtube: {
      handle: string;
      channelName: string;
      url: string;
      channelId: string;
    };
  };
  nearbyAreas: string[];
}

export const gymData: GymBusinessFacts = {
  name: "WAVE FITNESS UNISEX (GYM)",
  shortBrand: "WAVE FITNESS",
  tagline: "Ride the Wave to Wellness",
  positioning: "A clean, friendly, discipline-first unisex gym in Tambaram with personal attention from trainers and affordable fees.",
  naturalPhilosophy: "Natural body transformation without using any steroids",
  address: {
    line1: "No.2, Bharathi, Lenin Complex",
    line2: "School St, Camp Road Junction",
    landmark: "Camp Road Junction",
    area: "Tambaram East",
    suburb: "Selaiyur",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600073",
    posterShort: "Tambaram Camp Road CH-73"
  },
  googlePlusCode: "W4FV+65 Tambaram, Tamil Nadu",
  coordinates: {
    lat: 12.9230144,
    lng: 80.1429674
  },
  mapsUrl: "https://www.google.com/maps/place/WAVE+FITNESS+UNISEX(GYM)/@12.9230144,80.1429674,17z/",
  contact: {
    phoneFormatted: "07397 398 749",
    phonePoster: "739 739 8749",
    phoneTel: "+917397398749",
    whatsappNumber: "+917397398749",
    whatsappLink: "https://wa.me/917397398749?text=Hi%20Wave%20Fitness!%20I%20want%20to%20book%20a%20Free%20Trial%20Visit%20at%20your%20Camp%20Road%20gym.",
    email: "contact@wavefitness.in"
  },
  hours: {
    weekday: "6:00 AM – 9:30 PM (Mon – Fri)",
    saturday: "6:30 AM – 9:30 PM (Saturday)",
    sunday: "5:00 AM – 9:00 PM (Sunday)",
    note: "Verified Google Maps Business Hours. Open daily for early morning & evening workouts."
  },
  rating: {
    stars: 4.9,
    reviewCount: 365,
    lastUpdated: "October 2026 (Verified Google Maps)"
  },
  pricing: {
    monthly: {
      amount: 999,
      currency: "₹",
      perDay: 33,
      promoWording: "Pay today & get Monthly Pass",
      isClientConfirmed: true
    },
    quarterly: {
      amount: 2499,
      currency: "₹",
      perDay: 28,
      totalSavings: 498,
      promoWording: "Pay today & get 3 Months Pass",
      isClientConfirmed: true,
      isMostPopular: true
    },
    halfYearlyPlaceholder: {
      enabled: false,
      label: "6-Month Special Plan [PLACEHOLDER - Switch ON when active]"
    },
    annualPlaceholder: {
      enabled: false,
      label: "Annual Membership [PLACEHOLDER - Switch ON when active]"
    },
    joiningFeeNote: "Joining fee & personal training packages: [PLACEHOLDER - Confirm with gym management]. No hidden charges!",
    promoEndDate: "Limited Period Offer"
  },
  trainers: [
    {
      id: "sugumar",
      name: "Sugumar",
      nickname: "Sugu Master / Sugumar Anna",
      role: "Head Fitness Coach & Personal Trainer",
      photoUrl: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
      specialties: ["Personal Form Watching", "Natural Bodybuilding", "Beginner Strength Progression", "Weight Loss Guidance"],
      quote: "Discipline comes first. I ensure every member gets personal guidance on every set without taking shortcuts.",
      status: "Featured Coach (Confirmed in member reviews)"
    },
    {
      id: "shimal",
      name: "Shimal",
      nickname: "Trainer Shimal",
      role: "Senior Unisex Fitness Trainer",
      photoUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
      specialties: ["Posture & Form Correction", "Functional Fitness", "Cardio Conditioning", "Women's Comfort & Safety"],
      quote: "Whether you are stepping into a gym for the first time or looking for consistent motivation, we guide you step-by-step.",
      status: "Featured Coach (Confirmed in member reviews)"
    }
  ],
  social: {
    instagram: {
      handle: "@team_wave_fitness",
      url: "https://www.instagram.com/team_wave_fitness"
    },
    youtube: {
      handle: "@wavefitnessnaturalfitness7400",
      channelName: "WAVE FITNESS (Natural Fitness)",
      url: "https://www.youtube.com/@wavefitnessnaturalfitness7400",
      channelId: "UC_gS7MnEqFsFihrtLB9Xfxg"
    }
  },
  nearbyAreas: [
    "Tambaram East",
    "Selaiyur",
    "Camp Road Junction",
    "Sembakkam",
    "Madambakkam",
    "Chitlapakkam",
    "Tambaram Railway Station",
    "Padmavathi Nagar",
    "Mahalakshmi Nagar"
  ]
};

// Seed Reviews from verified Google Reviews
export interface SeedReview {
  id: string;
  author: string;
  badge?: string;
  rating: number;
  date: string;
  content: string;
  highlight: string;
}

export const seedReviews: SeedReview[] = [
  {
    id: "r1",
    author: "Gunasundari U.",
    badge: "Local Guide",
    rating: 5,
    date: "Verified Google Review",
    content: "Friendly staff, super clean, wonderful energy! It's genuinely the best place for both men and women to train in East Tambaram.",
    highlight: "Best place for both men and women to train"
  },
  {
    id: "r2",
    author: "Monisha C.",
    rating: 5,
    date: "Verified Google Review",
    content: "Sugumar Anna and Shimal are extremely dedicated and supportive coaches. I feel so much more active and confident now. Highly recommended for beginners!",
    highlight: "Dedicated coaches Sugumar Anna & Shimal"
  },
  {
    id: "r3",
    author: "Siva Krishna",
    rating: 5,
    date: "Verified Google Review",
    content: "Equipment is in top condition and gym is very clean. Trainers are super helpful for beginners and personally watch your workouts and form.",
    highlight: "Trainers personally watch your workouts"
  },
  {
    id: "r4",
    author: "Harish R.",
    badge: "Local Guide",
    rating: 5,
    date: "3 Months Member",
    content: "Took 3 months of personal training under Sugumar Master. Visible transformation in my strength, posture and overall fitness level!",
    highlight: "Visible transformation with Sugumar Master"
  },
  {
    id: "r5",
    author: "Husvarthan",
    rating: 5,
    date: "Verified Google Review",
    content: "Friendly environment with hardcore workouts and disciplined trainers. Perfect vibe if you want real results.",
    highlight: "Friendly environment & hardcore workouts"
  },
  {
    id: "r6",
    author: "Anu Shree",
    rating: 4,
    date: "Verified Member",
    content: "Good, well-maintained equipment. Not a very big gym, but super clean, cozy, comfortable, and very reasonable fee structure.",
    highlight: "Clean, cozy, comfortable & reasonable fee"
  },
  {
    id: "r7",
    author: "Sindhuja R.",
    rating: 5,
    date: "Verified Google Review",
    content: "Friendly masters, good guidance, positive atmosphere, and well-maintained machinery. Feels very comfortable training here.",
    highlight: "Positive atmosphere & friendly masters"
  },
  {
    id: "r8",
    author: "Durga Devi & Sanjay J.",
    rating: 5,
    date: "Couple Members",
    content: "Knowledgeable, friendly trainers, excellent equipment condition, and a great positive environment for couples and individuals.",
    highlight: "Knowledgeable trainers & excellent equipment"
  }
];

export interface FaqItem {
  q: string;
  a: string;
  category: "General" | "Pricing" | "Trainers" | "Safety";
}

export const faqList: FaqItem[] = [
  {
    q: "What are the exact gym timings at Camp Road?",
    a: "Wave Fitness operates: Monday–Friday (6:00 AM – 9:30 PM), Saturday (6:30 AM – 9:30 PM), and Sunday (5:00 AM – 9:00 PM). Doors open sharp at 6 AM every weekday morning.",
    category: "General"
  },
  {
    q: "Is Wave Fitness suitable for women?",
    a: "Yes! Wave Fitness is a 100% discipline-first unisex gym. Female members praise our clean, cozy atmosphere, respectful environment, and dedicated trainer guidance (including Coach Shimal & Coach Sugumar).",
    category: "Safety"
  },
  {
    q: "What is the monthly membership fee?",
    a: "Our current promotional pricing is ₹999/month (approx. ₹33/day). We also offer a 3-Month Quarterly Pass for ₹2,499 (approx. ₹28/day), saving you ₹498 compared to paying monthly.",
    category: "Pricing"
  },
  {
    q: "Do I get personal attention if I am a complete beginner?",
    a: "Yes! As our members note in Google reviews: 'Small floor, big attention.' Coach Sugumar Anna and Shimal personally correct your posture, teach safe exercises, and guide your routine every single day.",
    category: "Trainers"
  },
  {
    q: "What does '100% Natural Fitness' mean at Wave Fitness?",
    a: "Our core motto is 'Natural body transformation without using any steroids.' We focus on progressive strength training, proper nutrition guidance, and disciplined consistency to build lasting health without risky shortcuts.",
    category: "General"
  },
  {
    q: "How do I claim a Free Trial Visit?",
    a: "Click 'Claim Free Trial' on our website or text us on WhatsApp at +91 73973 98749. Pick your preferred timing and walk in to experience the gym equipment and atmosphere with zero obligation!",
    category: "General"
  },
  {
    q: "Are personal training (PT) packages available with Sugu Master?",
    a: "Yes! Coach Sugumar (Sugu Master) offers dedicated 1-on-1 personal training packages for fast-tracked strength building and weight loss.",
    category: "Trainers"
  },
  {
    q: "Where is Wave Fitness located exactly?",
    a: "We are located at Camp Road Junction, Tambaram East: No.2, Bharathi, Lenin Complex, School St, Selaiyur, Chennai 600073 (Plus Code: W4FV+65).",
    category: "General"
  }
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  contentMarkdown: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-gym-in-tambaram-east-camp-road",
    title: "Best Gym in Tambaram East: What to Look for Before Joining",
    category: "Gym Guide",
    readTime: "4 min read",
    excerpt: "Searching for a unisex gym near Camp Road Junction, Tambaram East? Here is your complete checklist for equipment, trainer guidance, and affordable pricing.",
    contentMarkdown: `
Finding the right gym near Camp Road Junction in Tambaram East isn't just about finding machines — it's about finding a supportive, disciplined environment where you actually enjoy working out.

### 1. Personal Trainer Attention vs. Crowded Floors
In massive commercial gym chains, beginners often get lost. At **Wave Fitness Unisex Gym** on School Street, Camp Road, we believe in **"Small floor, big attention."** Our head coach Sugumar ("Sugu Master") and Coach Shimal personally watch your form so you avoid injuries and get maximum results.

### 2. Cleanliness & Unisex Comfort
Whether you are a college student, working professional, or homemaker, a safe and clean gym environment is non-negotiable. Wave Fitness maintains high standards of cleanliness, comfortable ventilation, and a positive unisex atmosphere.

### 3. Natural Fitness Without Steroids
Beware of quick-fix claims! Wave Fitness is committed to **100% Natural Fitness** — real strength, muscular development, and weight loss built through proper lifting mechanics and real Indian food plans.

### 4. Transparent Fees
No hidden traps! Get started with our monthly pass at **₹999/month** or save more with our **3-Month Quarterly Pass at ₹2,499** (just ₹28/day).
    `
  }
];

export const tamilDictionary = {
  hero: {
    headline: "வேவ் ஃபிட்னஸ் - உங்கள் உடலை இயற்கை முறையில் மாற்றுங்கள்",
    subhead: "தாம்பரம் கேம்ப் ரோடில் அமைந்துள்ள சுத்தமான, கட்டமைப்புமிக்க யுனிசெக்ஸ் ஜிம். மாதக் கட்டணம் ₹999 மட்டுமே!",
    ctaFreeTrial: "இலவச டிரையல் பெறுக",
    ctaCall: "அழைக்க: 73973 98749",
    reassurance: "4.9★ கூகுள் ரேட்டிங் • 365+ விமர்சனங்கள் • காலை 6 மணி முதல் திறக்கும்"
  },
  plans: {
    title: "உறுப்பினர் திட்டங்கள்",
    subtitle: "மறைமுகக் கட்டணங்கள் இல்லாத வெளிப்படையான விலைகள்",
    monthlyLabel: "மாதாந்திர பாஸ் (₹999)",
    quarterlyLabel: "3 மாத பாஸ் (₹2,499 - ₹498 சேமிப்பு!)",
    perDay: "/நாள்"
  },
  contact: {
    title: "தொடர்பு கொள்க",
    subtitle: "கேம்ப் ரோடு சந்திப்பு, லெனின் காம்ப்ளக்ஸ், தாம்பரம் கிழக்கு",
    whatsappBtn: "வாட்ஸ்அப்பில் சேட் செய்ய"
  },
  faq: {
    title: "அடிக்கடி கேட்கப்படும் கேள்விகள்"
  }
};
