"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import { MotionReveal } from "@/components/MotionReveal";
import { Sigil } from "@/components/Sigil";

type Step = "form" | "processing" | "success";

export default function CheckoutPage() {
  const { t, locale } = useLocale();
  const { lines, subtotal, clear } = useCart();
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState<Step>("form");

  if (lines.length === 0 && step !== "success") {
    return (
      <section className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
        <p className="text-ash">{t.cart.empty}</p>
        <Link
          href="/shop"
          className="mt-6 inline-block cursor-pointer rounded-md bg-ember px-6 py-3 text-sm tracking-wide text-bone transition-colors hover:bg-ember-bright"
        >
          {t.cart.continueShopping}
        </Link>
      </section>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");
    setTimeout(() => {
      clear();
      setStep("success");
    }, 1400);
  };

  return (
    <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <AnimatePresence mode="wait">
        {step === "success" ? (
          <motion.div
            key="success"
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            className="rounded-lg border border-line p-10 text-center"
          >
            <Sigil
              variant="hollow"
              color="var(--color-relic-bright)"
              className="mx-auto h-14 w-14"
            />
            <h1 className="mt-6 font-display text-2xl tracking-wide text-bone">
              {t.checkout.successTitle}
            </h1>
            <p className="mt-3 text-sm text-ash">{t.checkout.successText}</p>
            <Link
              href="/"
              className="mt-8 inline-block cursor-pointer rounded-md bg-ember px-6 py-3 text-sm tracking-wide text-bone transition-colors hover:bg-ember-bright"
            >
              {t.checkout.backHome}
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
          >
            <MotionReveal>
              <h1 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
                {t.checkout.title}
              </h1>
            </MotionReveal>

            <p className="mt-4 rounded-md border border-relic/40 bg-relic/5 px-4 py-3 text-xs text-relic-bright">
              {t.checkout.demoNotice}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-8">
              <fieldset className="space-y-4" disabled={step === "processing"}>
                <legend className="text-xs tracking-widest text-relic">
                  {t.checkout.contact}
                </legend>
                <Field label={t.checkout.name} type="text" required />
                <Field label={t.checkout.email} type="email" required />
              </fieldset>

              <fieldset className="space-y-4" disabled={step === "processing"}>
                <legend className="text-xs tracking-widest text-relic">
                  {t.checkout.shipping}
                </legend>
                <Field label={t.checkout.address} type="text" required />
                <div className="grid grid-cols-2 gap-4">
                  <Field label={t.checkout.city} type="text" required />
                  <Field label={t.checkout.postal} type="text" required />
                </div>
              </fieldset>

              <fieldset className="space-y-4" disabled={step === "processing"}>
                <legend className="text-xs tracking-widest text-relic">
                  {t.checkout.payment}
                </legend>
                <Field
                  label={t.checkout.cardNumber}
                  type="text"
                  inputMode="numeric"
                  placeholder="4242 4242 4242 4242"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <Field label={t.checkout.expiry} type="text" placeholder="MM/YY" required />
                  <Field label={t.checkout.cvc} type="text" inputMode="numeric" required />
                </div>
              </fieldset>

              <div className="flex items-center justify-between border-t border-line pt-6">
                <span className="text-sm text-ash">{t.checkout.total}</span>
                <span className="font-display text-xl tracking-wide text-relic-bright">
                  {formatPrice(subtotal, locale)}
                </span>
              </div>

              <button
                type="submit"
                disabled={step === "processing"}
                className="w-full cursor-pointer rounded-md bg-ember px-6 py-4 text-sm tracking-wide text-bone transition-colors hover:bg-ember-bright disabled:cursor-not-allowed disabled:opacity-60"
              >
                {step === "processing" ? t.checkout.processing : t.checkout.pay}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-ash">{label}</span>
      <input
        {...props}
        className="h-11 w-full rounded-md border border-line bg-void px-4 text-sm text-bone outline-none transition-colors focus:border-ember"
      />
    </label>
  );
}
