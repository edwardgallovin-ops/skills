"use client";

import { useLocale } from "@/lib/locale-context";
import { MotionReveal } from "./MotionReveal";
import { Sigil } from "./Sigil";

const sigils = ["coil", "aster", "veil"] as const;

export function FeatureStrip() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <MotionReveal>
        <h2 className="font-display text-2xl tracking-wide text-bone sm:text-3xl">
          {t.features.title}
        </h2>
      </MotionReveal>
      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {t.features.items.map((item, i) => (
          <MotionReveal key={item.title} delay={i * 0.1}>
            <div className="rounded-lg border border-line p-6">
              <Sigil
                variant={sigils[i % sigils.length]}
                color="var(--color-relic)"
                className="h-8 w-8"
              />
              <h3 className="mt-4 font-display text-lg tracking-wide text-bone">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ash">{item.text}</p>
            </div>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
