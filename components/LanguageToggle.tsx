"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { t, toggleLang } = useLanguage();
  return (
    <button className="lang-toggle" onClick={toggleLang} aria-label={t.switchLabel}>
      {t.switchTo}
    </button>
  );
}
