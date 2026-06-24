import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { Globe, Smartphone, Layers, TabletSmartphone, Apple, Code2, Cloud, MonitorSmartphone, Rocket, Building2, Sparkles, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Web & Mobile Development — Websites, Apps & SaaS | MJ Digital Services",
  description: "Website development, mobile apps, Flutter, Android, iOS, custom software, SaaS products, and progressive web apps. Built by MJ Digital Services.",
  keywords: ["website development", "mobile app development", "Flutter app development", "Android app development", "iOS app development", "custom software development", "SaaS product development", "PWA"],
  alternates: { canonical: "https://mjdigitalservices.com/services/web-mobile-development" },
  openGraph: {
    title: "Web & Mobile Development | MJ Digital Services",
    description: "Websites, mobile apps, custom software & SaaS products built to scale.",
    url: "https://mjdigitalservices.com/services/web-mobile-development",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: Globe,             title: "Website Development",     desc: "Custom websites built for performance, SEO, and conversions across every device.", features: ["Custom design", "SEO-ready", "CMS integration", "Performance-optimised"] },
  { icon: Smartphone,        title: "Mobile App Development",  desc: "Native and cross-platform mobile apps designed for speed and great UX.", features: ["iOS & Android", "Cross-platform", "API integration", "App store launch"] },
  { icon: Layers,            title: "Flutter App Development", desc: "Cross-platform apps built with Flutter for a single codebase across platforms.", features: ["Single codebase", "Native performance", "Custom UI", "Faster delivery"] },
  { icon: TabletSmartphone,  title: "Android App Development", desc: "Native Android applications built for the full range of devices.", features: ["Kotlin / native", "Material design", "Play Store ready", "Background services"] },
  { icon: Apple,             title: "iOS App Development",     desc: "Native iOS applications crafted to Apple's guidelines and quality bar.", features: ["Swift / native", "Human Interface guidelines", "App Store ready", "Push & deep links"] },
  { icon: Code2,             title: "Custom Software",         desc: "Bespoke software tailored to your exact workflow and business logic.", features: ["Requirement mapping", "Custom workflows", "Integrations", "Scalable architecture"] },
  { icon: Cloud,             title: "SaaS Product Development",desc: "End-to-end SaaS builds with multi-tenancy, billing, and dashboards.", features: ["Multi-tenant architecture", "Subscription billing", "Admin dashboards", "Cloud deployment"] },
  { icon: MonitorSmartphone, title: "Progressive Web Apps",    desc: "App-like experiences delivered through the browser — installable and offline-ready.", features: ["Installable", "Offline support", "Push notifications", "App-like UX"] },
];

const useCases = [
  { icon: Rocket,     title: "Startups",     desc: "Go from idea to MVP fast with web, mobile, and SaaS builds." },
  { icon: Building2,  title: "Enterprises",  desc: "Build custom software and internal tools that fit your processes." },
  { icon: Sparkles,   title: "D2C Brands",   desc: "Launch fast, conversion-focused websites and mobile apps." },
  { icon: CreditCard, title: "Fintech",     desc: "Build secure, compliant web and mobile products with integrations." },
  { icon: Cloud,      title: "SaaS Companies", desc: "Ship multi-tenant SaaS products with billing and dashboards." },
  { icon: Code2,      title: "Agencies",     desc: "Extend your delivery capacity with reliable dev partners." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Web & Mobile Development"
        title="Build Web & Mobile"
        accent="Products That Scale"
        description="Websites, mobile apps, Flutter, Android, iOS, custom software, SaaS products, and PWAs — engineered for performance and built to grow with you."
        trustItems={[
          "Web, iOS, Android & Flutter",
          "Custom software & SaaS",
          "Scalable, API-first builds",
          "Performance & SEO focused",
        ]}
        stats={[
          { val: "Web+Mobile", label: "& SaaS" },
          { val: "Cross-", label: "Platform" },
          { val: "API-First", label: "Builds" },
          { val: "Scalable", label: "Architecture" },
        ]}
        heroImage="/services/web-development-hero.png"
        heroImageAlt="Web & Mobile Development"
        primaryCTA="Start Your Project"
      />
      <ServiceGrid
        badge="What We Build"
        title="Eight ways to ship"
        accent="your product"
        description="From marketing sites to multi-tenant SaaS — we build web and mobile products that perform and scale."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Development for"
        accent="every team"
        description="We build for startups, enterprises, D2C brands, fintechs, SaaS companies, and agencies."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Build Your Product"
        title="Ready to build"
        accent="something great?"
        description="Tell us what you're building and we'll map the fastest path from idea to launch."
        primaryCTA="Start Your Project"
        note="MJ Digital Services · Web · Mobile · Custom Software · SaaS"
      />
    </>
  );
}