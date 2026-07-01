"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { MotionReveal } from "./MotionReveal";

export function FeaturedProducts() {
  const { t } = useLocale();
  const featured = products.filter((p) => p.featured);

  return (
    <section className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
      <MotionReveal className="flex items-end justify-between">
        <h2 className="font-display text-2xl tracking-wide text-bone sm:text-3xl">
          {t.shopSection.title}
        </h2>
        <Link
          href="/shop"
          className="text-sm text-relic-bright transition-colors hover:text-relic"
        >
          {t.shopSection.viewAll} →
        </Link>
      </MotionReveal>

      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product, i) => (
          <MotionReveal key={product.slug} delay={i * 0.08}>
            <ProductCard product={product} />
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
