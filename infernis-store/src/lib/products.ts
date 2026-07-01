import { Product } from "./types";

export const SIZES = ["S", "M", "L", "XL", "XXL"];

export const products: Product[] = [
  {
    slug: "abyss-hood",
    price: 8900,
    sizes: SIZES,
    sigil: "throne",
    accent: "#a3151f",
    featured: true,
    i18n: {
      ru: {
        name: "ABYSS HOOD",
        description:
          "Плотный 480 г/м² флис, вышитый готический герб на груди и капюшон с подкладкой цвета угля. Для тех, кто носит тьму как броню.",
      },
      en: {
        name: "ABYSS HOOD",
        description:
          "480gsm heavyweight fleece with an embroidered gothic crest and a charcoal-lined hood. For those who wear the dark as armor.",
      },
    },
  },
  {
    slug: "infernal-oath",
    price: 9400,
    sizes: SIZES,
    sigil: "ember",
    accent: "#d81e2c",
    featured: true,
    i18n: {
      ru: {
        name: "INFERNAL OATH",
        description:
          "Плотная ткань 500 г/м², рукав украшен древним символом-печатью, нанесённым техникой рельефной вышивки.",
      },
      en: {
        name: "INFERNAL OATH",
        description:
          "500gsm heavyweight cotton with a raised-embroidery ancient seal running down the sleeve.",
      },
    },
  },
  {
    slug: "obsidian-relic",
    price: 9900,
    sizes: SIZES,
    sigil: "coil",
    accent: "#b6903f",
    featured: true,
    i18n: {
      ru: {
        name: "OBSIDIAN RELIC",
        description:
          "Плотный флис с бронзовой фурнитурой и тиснёным орнаментом на кармане-кенгуру, вдохновлённым древними реликвиями.",
      },
      en: {
        name: "OBSIDIAN RELIC",
        description:
          "Heavyweight fleece with bronze hardware and a debossed relic pattern on the kangaroo pocket.",
      },
    },
  },
  {
    slug: "night-covenant",
    price: 8700,
    sizes: SIZES,
    sigil: "veil",
    accent: "#8f847e",
    i18n: {
      ru: {
        name: "NIGHT COVENANT",
        description:
          "Минималистичный крой, плотная ткань 460 г/м², едва заметный тиснёный символ на капюшоне.",
      },
      en: {
        name: "NIGHT COVENANT",
        description:
          "Minimalist cut in 460gsm heavyweight fabric with a subtle debossed sigil on the hood.",
      },
    },
  },
  {
    slug: "hollow-crown",
    price: 10400,
    sizes: SIZES,
    sigil: "hollow",
    accent: "#d9b466",
    i18n: {
      ru: {
        name: "HOLLOW CROWN",
        description:
          "Премиальная плотная ткань, декоративная строчка в форме тернового венца, подкладка из тяжёлого хлопка.",
      },
      en: {
        name: "HOLLOW CROWN",
        description:
          "Premium heavyweight fabric with a thorned-crown decorative stitch and heavy cotton lining.",
      },
    },
  },
  {
    slug: "ashen-pact",
    price: 8500,
    sizes: SIZES,
    sigil: "aster",
    accent: "#a3151f",
    i18n: {
      ru: {
        name: "ASHEN PACT",
        description:
          "Плотный оверсайз крой 470 г/м², звёздный символ пакта на спине в приглушённой палитре.",
      },
      en: {
        name: "ASHEN PACT",
        description:
          "Heavyweight oversized cut at 470gsm with a muted-tone pact star on the back panel.",
      },
    },
  },
  {
    slug: "sanguine-veil",
    price: 9200,
    sizes: SIZES,
    sigil: "veil",
    accent: "#d81e2c",
    i18n: {
      ru: {
        name: "SANGUINE VEIL",
        description:
          "Плотная ткань с эффектом браш, кроваво-алая отделка манжет и капюшона.",
      },
      en: {
        name: "SANGUINE VEIL",
        description:
          "Brushed heavyweight fabric with blood-red trim on the cuffs and hood.",
      },
    },
  },
  {
    slug: "coven-standard",
    price: 8900,
    sizes: SIZES,
    sigil: "coil",
    accent: "#b6903f",
    i18n: {
      ru: {
        name: "COVEN STANDARD",
        description:
          "Базовая плотная худи 450 г/м² с малым тиснёным гербом — основа гардероба ковена.",
      },
      en: {
        name: "COVEN STANDARD",
        description:
          "The 450gsm heavyweight staple hoodie with a small debossed crest — the coven's everyday standard.",
      },
    },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(amountRub: number, locale: "ru" | "en") {
  if (locale === "ru") {
    return `${amountRub.toLocaleString("ru-RU")} ₽`;
  }
  const usd = Math.round(amountRub / 95);
  return `$${usd.toLocaleString("en-US")}`;
}
