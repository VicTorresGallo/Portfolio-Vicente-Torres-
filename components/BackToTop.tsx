"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";
import { useLanguage } from "./LanguageProvider";

// Botón flotante para volver arriba. Aparece al bajar más allá de la portada.
export default function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      className={`to-top${visible ? " to-top--show" : ""}`}
      onClick={toTop}
      aria-label={t.backToTop}
      title={t.backToTop}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUpIcon />
    </button>
  );
}
