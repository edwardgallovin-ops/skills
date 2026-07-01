"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { formatPrice } from "@/lib/products";
import { ProductVisual } from "./ProductVisual";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const { locale } = useLocale();
  const copy = product.i18n[locale];

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
    >
      <ProductVisual
        sigil={product.sigil}
        accent={product.accent}
        className="aspect-[4/5] transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-base tracking-wide text-bone transition-colors group-hover:text-ember-bright">
            {copy.name}
          </h3>
        </div>
        <span className="whitespace-nowrap text-sm text-relic-bright">
          {formatPrice(product.price, locale)}
        </span>
      </div>
    </Link>
  );
}
