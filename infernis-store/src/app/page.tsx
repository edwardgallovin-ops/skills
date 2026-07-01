import { Hero } from "@/components/Hero";
import { FeatureStrip } from "@/components/FeatureStrip";
import { FeaturedProducts } from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <FeatureStrip />
    </>
  );
}
