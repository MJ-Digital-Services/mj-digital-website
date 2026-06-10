import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Services />
      <Products />
      <WhyChooseUs />
      <CTABanner />
    </main>
  );
}