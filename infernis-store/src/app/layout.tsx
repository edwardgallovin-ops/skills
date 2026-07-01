import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale-context";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "INFERNIS — Darkness, Worn",
  description:
    "INFERNIS: heavyweight hoodies inspired by darkness, demons, and ancient symbols. A red-and-black underworld aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cinzel.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-void text-bone">
        <LocaleProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
