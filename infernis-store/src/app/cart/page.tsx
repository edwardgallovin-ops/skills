"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { useCart } from "@/lib/cart-context";
import { getProduct, formatPrice } from "@/lib/products";
import { ProductVisual } from "@/components/ProductVisual";
import { MotionReveal } from "@/components/MotionReveal";
import clsx from "clsx";

export default function CartPage() {
  const { t, locale } = useLocale();
  const { lines, updateQuantity, removeLine, subtotal } = useCart();

  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <MotionReveal>
        <h1 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
          {t.cart.title}
        </h1>
      </MotionReveal>

      {lines.length === 0 ? (
        <MotionReveal delay={0.1} className="mt-10 rounded-lg border border-line p-10 text-center">
          <p className="text-ash">{t.cart.empty}</p>
          <Link
            href="/shop"
            className="mt-6 inline-block cursor-pointer rounded-md bg-ember px-6 py-3 text-sm tracking-wide text-bone transition-colors hover:bg-ember-bright"
          >
            {t.cart.continueShopping}
          </Link>
        </MotionReveal>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {lines.map((line) => {
              const product = getProduct(line.slug);
              if (!product) return null;
              const copy = product.i18n[locale];
              return (
                <div
                  key={`${line.slug}-${line.size}`}
                  className="flex gap-4 border-b border-line pb-6"
                >
                  <Link href={`/product/${product.slug}`} className="w-24 shrink-0">
                    <ProductVisual
                      sigil={product.sigil}
                      accent={product.accent}
                      className="aspect-[4/5] w-full"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          href={`/product/${product.slug}`}
                          className="font-display text-base tracking-wide text-bone hover:text-ember-bright"
                        >
                          {copy.name}
                        </Link>
                        <p className="mt-1 text-xs text-ash">
                          {t.product.size}: {line.size}
                        </p>
                      </div>
                      <span className="whitespace-nowrap text-sm text-relic-bright">
                        {formatPrice(product.price * line.quantity, locale)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-md border border-line">
                        <button
                          type="button"
                          aria-label="decrease quantity"
                          onClick={() =>
                            updateQuantity(line.slug, line.size, line.quantity - 1)
                          }
                          className="h-9 w-9 cursor-pointer text-ash transition-colors hover:text-bone"
                        >
                          −
                        </button>
                        <span className="w-7 text-center text-sm text-bone">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="increase quantity"
                          onClick={() =>
                            updateQuantity(line.slug, line.size, line.quantity + 1)
                          }
                          className="h-9 w-9 cursor-pointer text-ash transition-colors hover:text-bone"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeLine(line.slug, line.size)}
                        className="cursor-pointer text-xs text-ash underline-offset-2 transition-colors hover:text-ember-bright hover:underline"
                      >
                        {t.cart.remove}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <MotionReveal
            delay={0.1}
            className={clsx(
              "h-fit rounded-lg border border-line p-6",
              "lg:sticky lg:top-24"
            )}
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-ash">{t.cart.subtotal}</span>
              <span className="text-bone">{formatPrice(subtotal, locale)}</span>
            </div>
            <Link
              href="/checkout"
              className="mt-6 block w-full cursor-pointer rounded-md bg-ember px-6 py-3.5 text-center text-sm tracking-wide text-bone transition-colors hover:bg-ember-bright"
            >
              {t.cart.checkout}
            </Link>
          </MotionReveal>
        </div>
      )}
    </section>
  );
}
