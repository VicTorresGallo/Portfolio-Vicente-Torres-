"use client";

import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "./LanguageProvider";

export default function Nav() {
  const { t } = useLanguage();
  const items = [
    ["experience", t.nav.experience],
    ["skills", t.nav.skills],
    ["web", t.nav.web],
    ["games", t.nav.games],
    ["contact", t.nav.contact],
  ] as const;

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          VT<span>.</span>
        </Link>
        <nav aria-label="Main">
          <ul>
            {items.map(([id, label]) => (
              <li key={id}>
                <Link href={`/#${id}`}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
