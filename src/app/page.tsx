import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Industries from "@/components/home/Industries";
import TechStack from "@/components/home/TechStack";
import Testimonials from "@/components/home/Testimonials";
import FAQs from "@/components/home/FAQs";
import CTABanner from "@/components/home/CTABanner";
import ProductShowcase from "@/components/home/ProductShowcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <ProductShowcase />
      {/* <About /> */}
      <Services />
      {/* <Products /> */}
      <WhyChooseUs />
      <Testimonials />
      <Industries />
      <TechStack />
      <FAQs />
      <CTABanner />
    </main>
  );
}