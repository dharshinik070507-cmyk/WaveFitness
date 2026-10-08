import { copy } from "../src/content/copy";

let errors: string[] = [];

function checkBannedWords(str: string, path: string) {
  const bannedPatterns = [
    { pattern: /elevate/i, word: "elevate" },
    { pattern: /unlock/i, word: "unlock" },
    { pattern: /journey/i, word: "journey" },
    { pattern: /transform your life/i, word: "transform your life" },
    { pattern: /next level/i, word: "next level" },
    { pattern: /world-class/i, word: "world-class" },
    { pattern: /state-of-the-art/i, word: "state-of-the-art" },
    { pattern: /cutting-edge/i, word: "cutting-edge" },
    { pattern: /game-changer/i, word: "game-changer" },
    { pattern: /verified/i, word: "verified" },
    { pattern: /—/, word: "em dash (—)" },
    { pattern: /!/, word: "exclamation mark (!)" },
  ];

  for (const b of bannedPatterns) {
    if (b.pattern.test(str)) {
      errors.push(`[BANNED WORD] '${b.word}' found in ${path}: "${str}"`);
    }
  }
}

function wordCount(str: string): number {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

function lintDeck(lang: "en" | "ta") {
  const deck = copy[lang];
  const keys = Object.keys(deck) as (keyof typeof deck)[];

  for (const key of keys) {
    const sec: any = deck[key];

    // Eyebrow
    if (sec.eyebrow) {
      checkBannedWords(sec.eyebrow, `${lang}.${key}.eyebrow`);
      if (wordCount(sec.eyebrow) > 4) {
        errors.push(`[EYEBROW LIMIT] ${lang}.${key}.eyebrow has >4 words: "${sec.eyebrow}"`);
      }
    }

    // Lines
    if (Array.isArray(sec.lines)) {
      if (sec.lines.length < 2 || sec.lines.length > 3) {
        errors.push(`[HEADLINE LINES] ${lang}.${key}.lines must have 2-3 lines`);
      }
      let totalWords = 0;
      sec.lines.forEach((l: string, i: number) => {
        checkBannedWords(l, `${lang}.${key}.lines[${i}]`);
        const wc = wordCount(l);
        totalWords += wc;
        if (wc > 3) {
          errors.push(`[LINE WORD LIMIT] ${lang}.${key}.lines[${i}] has >3 words: "${l}"`);
        }
      });
      if (totalWords > 7) {
        errors.push(`[HEADLINE TOTAL WORDS] ${lang}.${key}.lines has >7 total words`);
      }
    }

    // Subline
    if (sec.subline) {
      checkBannedWords(sec.subline, `${lang}.${key}.subline`);
      if (wordCount(sec.subline) > 16) {
        errors.push(`[SUBLINE LIMIT] ${lang}.${key}.subline has >16 words: "${sec.subline}"`);
      }
    }

    // CTA
    if (sec.cta) {
      checkBannedWords(sec.cta, `${lang}.${key}.cta`);
      const allowedCtas = ["Claim Free Trial", "See Plans", "Get Directions", "Call Now", "WhatsApp Us"];
      if (!allowedCtas.includes(sec.cta)) {
        errors.push(`[CTA LABEL] ${lang}.${key}.cta '${sec.cta}' is not an allowed CTA label`);
      }
    }

    // Items for benefits
    if (key === "benefits" && Array.isArray(sec.items)) {
      sec.items.forEach((item: any, i: number) => {
        checkBannedWords(item.title, `${lang}.benefits.items[${i}].title`);
        checkBannedWords(item.line, `${lang}.benefits.items[${i}].line`);
        if (wordCount(item.title) < 2 || wordCount(item.title) > 3) {
          errors.push(`[BENEFIT TITLE] ${lang}.benefits.items[${i}].title must be 2-3 words: "${item.title}"`);
        }
        if (wordCount(item.line) > 12) {
          errors.push(`[BENEFIT LINE] ${lang}.benefits.items[${i}].line >12 words: "${item.line}"`);
        }
      });
    }

    // Questions for FAQ
    if (key === "faq" && Array.isArray(sec.questions)) {
      sec.questions.forEach((item: any, i: number) => {
        checkBannedWords(item.q, `${lang}.faq.questions[${i}].q`);
        checkBannedWords(item.a, `${lang}.faq.questions[${i}].a`);
        if (wordCount(item.q) > 12) {
          errors.push(`[FAQ QUESTION] ${lang}.faq.questions[${i}].q >12 words: "${item.q}"`);
        }
        if (wordCount(item.a) > 40) {
          errors.push(`[FAQ ANSWER] ${lang}.faq.questions[${i}].a >40 words: "${item.a}"`);
        }
      });
    }
  }
}

console.log("🔍 Running Copy Linter for Wave Fitness...");
lintDeck("en");
lintDeck("ta");

if (errors.length > 0) {
  console.error("❌ COPY LINT FAILED:");
  errors.forEach((e) => console.error("  " + e));
  process.exit(1);
} else {
  console.log("✅ COPY LINT PASSED: All copy constraints satisfied!");
  process.exit(0);
}
