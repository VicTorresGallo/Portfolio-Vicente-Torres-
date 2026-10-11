"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { dictionary, type Lang } from "@/data/dictionary";

type LanguageContextType = {
  lang: Lang;
  t: (typeof dictionary)[Lang];
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

// Idioma guardado en localStorage, expuesto como store externo para React.
// "current" mantiene el valor aunque localStorage no esté disponible.
let current: Lang | null = null;
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot(): Lang {
  if (current) return current;
  try {
    current = localStorage.getItem("lang") === "en" ? "en" : "es";
  } catch {
    current = "es";
  }
  return current;
}

const getServerSnapshot = (): Lang => "es";

function setLang(lang: Lang) {
  current = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  listeners.forEach((cb) => cb());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Mantiene <html lang="..."> sincronizado
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(lang === "en" ? "es" : "en");

  return (
    <LanguageContext.Provider value={{ lang, t: dictionary[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
