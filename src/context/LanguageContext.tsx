"use client";

import React, { createContext, useContext, ReactNode } from "react";

type Language = "en";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang: Language = "en";

  const setLanguage = () => {};
  const toggleLanguage = () => {};

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: "en" as const,
      toggleLanguage: () => {},
      setLanguage: () => {},
    };
  }
  return context;
}
