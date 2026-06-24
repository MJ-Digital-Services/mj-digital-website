import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { ShoppingBag, Store, Building2, Package, ShoppingCart, Pill, Bike, Sparkles, Boxes, Pizza } from "lucide-react";

export const metadata: Metadata = {
  title: "E-commerce & Marketplace Development — D2C, B2B & Delivery | MJ Digital Services",
  description: "Custom ecommerce websites, multi-vendor marketplaces, B2B and D2C stores, grocery, pharmacy, and hyperlocal delivery platforms. Built by MJ Digital Services.",
  keywords: ["ecommerce website development", "multi vendor marketplace", "B2B ecommerce portal", "D2C ecommerce store", "grocery delivery platform", "pharmacy ecommerce", "hyperlocal delivery"],
  alternates: { canonical: "https://mjdigitalservices.com/services/commerce-solutions" },
  openGraph: {
    title: "E-commerce & Marketplace Platforms | MJ Digital Services",
    description: "Custom ecommerce, marketplaces, D2C/B2B stores, and delivery platforms.",
    url: "https://mjdigitalservices.com/services/commerce-solutions",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: ShoppingBag,  title: "Ecommerce Website Development", desc: "Custom online stores built for performance, conversions, and scale.", features: ["Custom storefront", "Payment gateway integration", "SEO-ready", "Mobile-first design"] },
  { icon: Store,        title: "Multi Vendor Marketplace",     desc: "A platform supporting many independent sellers with catalogues, payouts, and orders.", features: ["Seller onboarding", "Commission & payouts", "Vendor dashboards", "Unified order management"] },
  { icon: Building2,    title: "B2B Ecommerce Portal",         desc: "A business-to-business ordering platform with tiered pricing and bulk workflows.", features: ["Tiered & contract pricing", "Bulk ordering", "Credit & invoicing", "Buyer accounts"] },
  { icon: Package,      title: "D2C Ecommerce Store",          desc: "A direct-to-consumer storefront that owns the customer relationship end to end.", features: ["Brand-led storefront", "Subscriptions", "Loyalty & offers", "Customer analytics"] },
  { icon: ShoppingCart, title: "Grocery Delivery Platform",    desc: "On-demand grocery ordering with slot booking and delivery logistics built in.", features: ["Slot-based delivery", "Inventory sync", "Delivery routing", "Customer + rider apps"] },
  { icon: Pill,         title: "Pharmacy Ecommerce",           desc: "An online pharmacy platform with prescription handling and compliant ordering.", features: ["Prescription upload", "Inventory & expiry", "Order tracking", "Compliant checkout"] },
  { icon: Bike,         title: "Hyperlocal Delivery Platform", desc: "A local, fast-turnaround delivery system connecting stores, riders, and customers.", features: ["Store & rider network", "Live order tracking", "Route optimisation", "In-app payments"] },
];

const useCases = [
  { icon: Sparkles, title: "D2C Brands",      desc: "Launch a branded storefront with subscriptions, loyalty, and customer analytics." },
  { icon: Store,    title: "Retailers",       desc: "Take your store online with inventory sync and integrated payments." },
  { icon: ShoppingCart, title: "Grocery",     desc: "Run on-demand grocery delivery with slot booking and rider logistics." },
  { icon: Pill,     title: "Pharmacies",      desc: "Sell online with prescription handling and compliant order flows." },
  { icon: Boxes,    title: "B2B Wholesalers", desc: "Enable bulk ordering with tiered pricing, credit, and invoicing." },
  { icon: Pizza,    title: "Hyperlocal",      desc: "Connect neighbourhood stores and riders for fast local delivery." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Commerce Solutions"
        title="Sell Online with"
        accent="Custom Commerce"
        description="Custom ecommerce websites, multi-vendor marketplaces, B2B and D2C stores, and grocery, pharmacy, and hyperlocal delivery platforms — built to sell and scale."
        trustItems={[
          "Custom storefronts & marketplaces",
          "Payment gateway integration",
          "Delivery logistics built in",
          "Mobile-first & SEO-ready",
        ]}
        stats={[
          { val: "Custom", label: "Storefronts" },
          { val: "Multi-Vendor", label: "Ready" },
          { val: "Delivery", label: "Logistics" },
          { val: "Mobile-First", label: "Design" },
        ]}
        heroImage="/services/commerce-solutions-hero.png"
        heroImageAlt="E-commerce & Marketplace Platforms"
        primaryCTA="Start Selling Online"
      />
      <ServiceGrid
        badge="What We Build"
        title="Seven commerce platforms"
        accent="for every model"
        description="From single-brand stores to multi-vendor marketplaces and on-demand delivery — we build commerce that fits your business."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Commerce platforms for"
        accent="every seller"
        description="Our platforms power D2C brands, retailers, grocery, pharmacy, B2B wholesalers, and hyperlocal delivery."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Launch Your Store"
        title="Ready to start"
        accent="selling online?"
        description="Tell us what you sell and we'll recommend the right commerce setup to launch fast."
        primaryCTA="Start Selling Online"
        note="MJ Digital Services · Ecommerce · Marketplace · D2C · Delivery"
      />
    </>
  );
}