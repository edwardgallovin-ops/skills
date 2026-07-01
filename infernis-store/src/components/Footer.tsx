"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { Sigil } from "./Sigil";

export function Footer() {
  const { t } = useLocale();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="mt-24 border-t border-line bg-abyss">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="sigil-border rounded-lg bg-surface p-8 sm:p-10">
          <h3 className="font-display text-2xl tracking-wide text-bone">
            {t.footer.newsletterTitle}
          </h3>
          <p className="mt-2 max-w-md text-sm text-ash">{t.footer.newsletterText}</p>
          <form
            className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.footer.newsletterPlaceholder}
              className="w-full rounded-md border border-line bg-void px-4 py-3 text-sm text-bone outline-none transition-colors focus:border-ember"
            />
            <button
              type="submit"
              className="cursor-pointer whitespace-nowrap rounded-md bg-ember px-5 py-3 text-sm tracking-wide text-bone transition-colors hover:bg-ember-bright"
            >
              {subscribed ? "✓" : t.footer.newsletterCta}
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 text-xs text-ash sm:flex-row">
          <div className="flex items-center gap-2 font-display text-base tracking-[0.2em] text-bone">
            <Sigil variant="hollow" color="var(--color-relic)" className="h-5 w-5" />
            {t.brand}
          </div>
          <p>
            © {new Date().getFullYear()} {t.brand}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
