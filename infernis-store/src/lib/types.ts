export type Locale = "ru" | "en";

export type SigilVariant = "aster" | "coil" | "throne" | "veil" | "ember" | "hollow";

export type ProductLocalizedText = {
  name: string;
  description: string;
};

export type Product = {
  slug: string;
  price: number;
  sizes: string[];
  sigil: SigilVariant;
  accent: string;
  featured?: boolean;
  i18n: Record<Locale, ProductLocalizedText>;
};

export type CartLine = {
  slug: string;
  size: string;
  quantity: number;
};
