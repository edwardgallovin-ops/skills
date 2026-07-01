"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { CartLine } from "./types";
import { getProduct } from "./products";

type CartContextValue = {
  lines: CartLine[];
  addLine: (slug: string, size: string, quantity?: number) => void;
  removeLine: (slug: string, size: string) => void;
  updateQuantity: (slug: string, size: string, quantity: number) => void;
  clear: () => void;
  totalItems: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "infernis-cart";
const listeners = new Set<() => void>();
const emptyLines: CartLine[] = [];
let currentLines: CartLine[] = emptyLines;

if (typeof window !== "undefined") {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) currentLines = JSON.parse(stored);
  } catch {
    // ignore corrupt storage
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  return currentLines;
}

function getServerSnapshot() {
  return emptyLines;
}

function persist(next: CartLine[]) {
  currentLines = next;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  listeners.forEach((cb) => cb());
}

function addLine(slug: string, size: string, quantity = 1) {
  const existing = currentLines.find((l) => l.slug === slug && l.size === size);
  const next = existing
    ? currentLines.map((l) =>
        l.slug === slug && l.size === size
          ? { ...l, quantity: l.quantity + quantity }
          : l
      )
    : [...currentLines, { slug, size, quantity }];
  persist(next);
}

function removeLine(slug: string, size: string) {
  persist(currentLines.filter((l) => !(l.slug === slug && l.size === size)));
}

function updateQuantity(slug: string, size: string, quantity: number) {
  if (quantity <= 0) {
    removeLine(slug, size);
    return;
  }
  persist(
    currentLines.map((l) =>
      l.slug === slug && l.size === size ? { ...l, quantity } : l
    )
  );
}

function clear() {
  persist([]);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const lines = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const { totalItems, subtotal } = useMemo(() => {
    let items = 0;
    let sum = 0;
    for (const line of lines) {
      const product = getProduct(line.slug);
      if (!product) continue;
      items += line.quantity;
      sum += product.price * line.quantity;
    }
    return { totalItems: items, subtotal: sum };
  }, [lines]);

  const value: CartContextValue = {
    lines,
    addLine,
    removeLine,
    updateQuantity,
    clear,
    totalItems,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
