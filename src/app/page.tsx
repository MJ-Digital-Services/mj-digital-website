import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <Industries />
      <TechStack />
      <CTABanner />
    </main>
  );
}