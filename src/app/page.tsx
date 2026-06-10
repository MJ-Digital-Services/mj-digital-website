import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import Industries from "@/components/Industries";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Services />
      <Products />
      <WhyChooseUs />
      <Industries />
      <CTABanner />
    </main>
  );
}