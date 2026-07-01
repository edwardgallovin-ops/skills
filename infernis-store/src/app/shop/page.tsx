"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { products, SIZES } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { MotionReveal } from "@/components/MotionReveal";
import clsx from "clsx";

export default function ShopPage() {
  const { t } = useLocale();
  const [sizeFilter, setSizeFilter] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      sizeFilter
        ? products.filter((p) => p.sizes.includes(sizeFilter))
        : products,
    [sizeFilter]
  );

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <MotionReveal>
        <h1 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
          {t.shopPage.title}
        </h1>
        <p className="mt-3 max-w-lg text-sm text-ash">{t.shopPage.subtitle}</p>
      </MotionReveal>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <span className="mr-2 text-xs tracking-widest text-ash">
          {t.shopPage.size}:
        </span>
        <button
          type="button"
          onClick={() => setSizeFilter(null)}
          className={clsx(
            "cursor-pointer rounded-full border px-3 py-1 text-xs tracking-wide transition-colors",
            sizeFilter === null
              ? "border-ember bg-ember/10 text-bone"
              : "border-line text-ash hover:border-relic hover:text-bone"
          )}
        >
          {t.shopPage.all}
        </button>
        {SIZES.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => setSizeFilter(size)}
            className={clsx(
              "cursor-pointer rounded-full border px-3 py-1 text-xs tracking-wide transition-colors",
              sizeFilter === size
                ? "border-ember bg-ember/10 text-bone"
                : "border-line text-ash hover:border-relic hover:text-bone"
            )}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, i) => (
          <MotionReveal key={product.slug} delay={Math.min(i * 0.05, 0.3)}>
            <ProductCard product={product} />
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
