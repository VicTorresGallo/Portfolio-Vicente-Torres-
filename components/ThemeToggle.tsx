"use client";

import { useSyncExternalStore } from "react";
import { useLanguage } from "./LanguageProvider";
import { MoonIcon, SunIcon } from "./Icons";

type Theme = "light" | "dark";

// El tema vive en <html data-theme="...">. Lo fija el script de app/layout.tsx
// antes de pintar, así que aquí solo se lee y se cambia.
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

const getSnapshot = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

const getServerSnapshot = (): Theme => "dark";

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {}
  listeners.forEach((cb) => cb());
}

export default function ThemeToggle() {
  const { t } = useLanguage();
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const next: Theme = theme === "dark" ? "light" : "dark";
  const label = next === "light" ? t.themeLight : t.themeDark;

  return (
    <button className="theme-toggle" onClick={() => setTheme(next)} aria-label={label} title={label}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
