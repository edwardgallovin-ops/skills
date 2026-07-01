"use client";

import { useLocale } from "@/lib/locale-context";
import { MotionReveal } from "@/components/MotionReveal";
import { Sigil } from "@/components/Sigil";

const sigils = ["throne", "coil", "veil", "hollow"] as const;

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <MotionReveal>
        <Sigil variant="ember" color="var(--color-ember-bright)" className="h-12 w-12" />
        <h1 className="mt-6 font-display text-3xl tracking-wide text-bone sm:text-4xl">
          {t.about.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-relic-bright">
          {t.about.lead}
        </p>
      </MotionReveal>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-ash">
        <MotionReveal delay={0.05}>
          <p>{t.about.p1}</p>
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <p>{t.about.p2}</p>
        </MotionReveal>
        <MotionReveal delay={0.15}>
          <p>{t.about.p3}</p>
        </MotionReveal>
      </div>

      <MotionReveal delay={0.2} className="mt-14 flex justify-center gap-8 opacity-60">
        {sigils.map((s) => (
          <Sigil key={s} variant={s} color="var(--color-relic)" className="h-8 w-8" />
        ))}
      </MotionReveal>
    </section>
  );
}
