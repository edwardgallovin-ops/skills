"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { useCart } from "@/lib/cart-context";
import { Sigil } from "./Sigil";

export function Header() {
  const { locale, setLocale, t } = useLocale();
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-void/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl tracking-[0.2em] text-bone"
          onClick={() => setMenuOpen(false)}
        >
          <Sigil variant="ember" color="var(--color-ember-bright)" className="h-6 w-6" />
          {t.brand}
        </Link>

        <nav className="hidden items-center gap-8 text-sm tracking-wide text-ash sm:flex">
          <Link href="/shop" className="transition-colors hover:text-bone">
            {t.nav.shop}
          </Link>
          <Link href="/about" className="transition-colors hover:text-bone">
            {t.nav.about}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setLocale(locale === "ru" ? "en" : "ru")}
            className="cursor-pointer rounded-full border border-line px-3 py-1 text-xs tracking-widest text-ash transition-colors hover:border-ember hover:text-bone"
            aria-label="Switch language"
          >
            {locale.toUpperCase()}
          </button>

          <Link
            href="/cart"
            className="relative flex items-center gap-2 text-sm text-ash transition-colors hover:text-bone"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M6 8h12l-1 12H7L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            <span className="hidden sm:inline">{t.nav.cart}</span>
            {totalItems > 0 && (
              <span className="absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-ember text-[10px] text-bone">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="cursor-pointer text-ash sm:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-line px-5 py-4 text-sm text-ash sm:hidden">
          <Link href="/shop" onClick={() => setMenuOpen(false)} className="hover:text-bone">
            {t.nav.shop}
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-bone">
            {t.nav.about}
          </Link>
        </nav>
      )}
    </header>
  );
}
