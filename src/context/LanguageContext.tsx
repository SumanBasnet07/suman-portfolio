"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export type Language = "en" | "ja";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: <T>(en: T, ja: T) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  initialLanguage = "en",
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    // Keep language in sync with current pathname
    if (pathname.startsWith("/ja")) {
      setLanguageState("ja");
    } else if (pathname.startsWith("/en")) {
      setLanguageState("en");
    }
  }, [pathname]);

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;
    setLanguageState(newLang);

    // Swap /en/... or /ja/... in pathname
    const currentPrefix = `/${language}`;
    const newPrefix = `/${newLang}`;

    if (pathname.startsWith(currentPrefix)) {
      const newPath = pathname.replace(currentPrefix, newPrefix);
      router.push(newPath);
    } else {
      router.push(`${newPrefix}${pathname}`);
    }
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "ja" : "en";
    setLanguage(next);
  };

  const t = <T,>(en: T, ja: T): T => {
    return language === "ja" ? ja : en;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
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
