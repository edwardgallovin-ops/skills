"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import { ProductVisual } from "@/components/ProductVisual";
import { MotionReveal } from "@/components/MotionReveal";
import type { Product } from "@/lib/types";
import clsx from "clsx";

export function ProductDetail({ product }: { product: Product }) {
  const { locale, t } = useLocale();
  const { addLine } = useCart();
  const copy = product.i18n[locale];

  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <MotionReveal>
          <ProductVisual
            sigil={product.sigil}
            accent={product.accent}
            className="aspect-[4/5] w-full"
          />
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <h1 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
            {copy.name}
          </h1>
          <p className="mt-3 text-xl text-relic-bright">
            {formatPrice(product.price, locale)}
          </p>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-ash">
            {copy.description}
          </p>

          <div className="mt-8 space-y-1 text-xs text-ash">
            <p>
              <span className="text-relic">{t.product.material}:</span>{" "}
              {t.product.materialValue}
            </p>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-xs tracking-widest text-ash">
              {t.product.size}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={clsx(
                    "h-11 min-w-11 cursor-pointer rounded-md border px-3 text-sm transition-colors",
                    size === s
                      ? "border-ember bg-ember/10 text-bone"
                      : "border-line text-ash hover:border-relic hover:text-bone"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <div>
              <p className="mb-3 text-xs tracking-widest text-ash">
                {t.product.quantity}
              </p>
              <div className="flex items-center rounded-md border border-line">
                <button
                  type="button"
                  aria-label="decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="h-11 w-11 cursor-pointer text-ash transition-colors hover:text-bone"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm text-bone">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="h-11 w-11 cursor-pointer text-ash transition-colors hover:text-bone"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              addLine(product.slug, size, quantity);
              setAdded(true);
              setTimeout(() => setAdded(false), 1800);
            }}
            className="mt-10 w-full cursor-pointer rounded-md bg-ember px-7 py-4 text-sm tracking-wide text-bone transition-colors hover:bg-ember-bright sm:w-auto sm:min-w-64"
          >
            {added ? `✓ ${t.product.added}` : t.product.addToCart}
          </button>

          <div className="mt-10 border-t border-line pt-6 text-xs text-ash">
            <p className="tracking-widest text-relic">{t.product.care}</p>
            <p className="mt-2">{t.product.careText}</p>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
