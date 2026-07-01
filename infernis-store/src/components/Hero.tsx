"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { Sigil } from "./Sigil";

export function Hero() {
  const { t } = useLocale();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 20%, rgba(163,21,31,0.18) 0%, transparent 70%), radial-gradient(40% 40% at 80% 80%, rgba(182,144,63,0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        initial={{ rotate: 0 }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <Sigil variant="throne" color="var(--color-relic)" className="h-[560px] w-[560px]" />
      </motion.div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 py-24 sm:px-8 sm:py-32">
        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs tracking-[0.35em] text-relic-bright"
        >
          {t.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl font-display text-4xl leading-tight tracking-wide text-bone text-glow sm:text-6xl"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-lg text-base text-ash"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/shop"
            className="cursor-pointer rounded-md bg-ember px-7 py-3.5 text-sm tracking-wide text-bone transition-colors hover:bg-ember-bright"
          >
            {t.hero.cta}
          </Link>
          <Link
            href="/about"
            className="cursor-pointer rounded-md border border-line px-7 py-3.5 text-sm tracking-wide text-ash transition-colors hover:border-relic hover:text-bone"
          >
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
