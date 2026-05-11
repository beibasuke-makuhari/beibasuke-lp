"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/app/_i18n/ja";
import { locales, type Locale } from "@/app/_i18n/locales";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

export default function Header({ lang, dict }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  const navItems: { href: string; label: string }[] = [
    { href: "#activities", label: dict.nav.activities },
    { href: "#first-time", label: dict.nav.firstTime },
    { href: "#voices", label: dict.nav.voices },
    { href: "#contact", label: dict.nav.join },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <a
          href={`/${lang}#top`}
          className="inline-flex items-center gap-2 text-base font-bold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-brand" />
          <span>ベイバスケ</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/75 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div ref={langRef} className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={dict.nav.languageLabel}
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
              </svg>
              <span>{dict.languages[lang]}</span>
            </button>
            {langOpen && (
              <ul
                role="listbox"
                aria-label={dict.nav.languageLabel}
                className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-lg border border-black/10 bg-background shadow-lg"
              >
                {locales.map((loc) => (
                  <li key={loc} role="none">
                    <a
                      role="option"
                      aria-selected={loc === lang}
                      href={`/${loc}`}
                      onClick={() => setLangOpen(false)}
                      className={`block px-3 py-2 text-sm ${
                        loc === lang
                          ? "bg-brand/10 font-semibold text-foreground"
                          : "text-foreground/80 hover:bg-black/5"
                      }`}
                    >
                      {dict.languages[loc]}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
            onClick={() => setMenuOpen((v) => !v)}
            className="-mr-1 flex h-10 w-10 items-center justify-center rounded md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="sr-only">
              {menuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
            </span>
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-black/5 px-4 py-3 md:hidden"
          aria-label={dict.nav.openMenu}
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 text-base text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
