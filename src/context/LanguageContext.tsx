"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ta";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    // Initial language detection & localStorage restore inside try/catch
    let initialLang: Language = "en";
    try {
      const saved = localStorage.getItem("wave_fitness_lang");
      if (saved === "en" || saved === "ta") {
        initialLang = saved;
      } else if (typeof navigator !== "undefined" && navigator.language?.startsWith("ta")) {
        initialLang = "ta";
      }
    } catch {
      // Fallback to default "en" if localStorage fails
    }

    setLangState(initialLang);
    document.documentElement.lang = initialLang;
    document.documentElement.setAttribute("data-lang", initialLang);
  }, []);

  const setLanguage = (l: Language) => {
    setLangState(l);
    document.documentElement.lang = l;
    document.documentElement.setAttribute("data-lang", l);
    try {
      localStorage.setItem("wave_fitness_lang", l);
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "ta" : "en";
    setLanguage(nextLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
