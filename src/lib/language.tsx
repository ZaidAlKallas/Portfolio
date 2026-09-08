"use client";

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Language } from "@/types";
import { translations } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const language: Language = pathname?.startsWith("/ar") ? "ar" : "en";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    localStorage.setItem("language", language === "en" ? "ar" : "en");
    router.push(language === "en" ? "/ar" : "/");
  }, [language, router]);

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: translations[language] }}
    >
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
