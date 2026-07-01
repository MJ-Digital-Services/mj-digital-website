import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { Smartphone, TabletSmartphone, Zap, Shield, BarChart3, Bell, ShoppingBag, CreditCard, Users, Building2, GraduationCap, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development — Android, iOS & Flutter | MJ Digital Services",
  description: "Custom mobile app development for Android, iOS, and Flutter. Fintech apps, ecommerce apps, enterprise mobility solutions — built by MJ Digital Services.",
  keywords: ["mobile app development India", "Android app development", "iOS app development", "Flutter app development", "fintech mobile app", "custom mobile app India", "MJ Digital mobile apps"],
  alternates: { canonical: "https://www.mjdigitalservices.com/services/mobile-apps" },
  openGraph: {
    title: "Mobile App Development | MJ Digital Services",
    description: "Android, iOS & Flutter apps for fintech, ecommerce, and enterprise.",
    url: "https://www.mjdigitalservices.com/services/mobile-apps",
    siteName: "MJ Digital Services",
    images: [{ url: "https://www.mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: Smartphone,       title: "Android Apps",          desc: "Native Android applications built with Kotlin and Java for high performance, deep OS integration, and broad device compatibility.", features: ["Kotlin & Java", "Material Design 3", "Play Store deployment", "Biometric authentication", "Offline support"] },
  { icon: TabletSmartphone, title: "iOS Apps",              desc: "Native iOS applications built with Swift for iPhone and iPad — smooth, fast, and aligned with Apple's design guidelines.", features: ["Swift & SwiftUI", "App Store deployment", "Face ID & Touch ID", "Apple Pay integration", "iCloud sync"] },
  { icon: Zap,              title: "Flutter Apps",          desc: "Cross-platform apps from a single codebase. Ship to Android, iOS, and web simultaneously — without compromising on quality.", features: ["Single codebase", "Android + iOS + Web", "Near-native performance", "Custom UI components", "Faster time to market"] },
  { icon: Shield,           title: "Fintech Mobile Apps",   desc: "Secure fintech apps with AEPS, DMT, BBPS, KYC, and biometric authentication — built for high transaction volumes and compliance.", features: ["Biometric auth", "Payment gateway integration", "AES-256 encryption", "RBI compliant", "Real-time transactions"] },
  { icon: BarChart3,        title: "Enterprise Mobility",   desc: "Field force apps, agent management tools, and internal enterprise applications that work offline and sync when connected.", features: ["Offline-first architecture", "Role-based access", "Real-time sync", "GPS & location", "Push notifications"] },
  { icon: Bell,             title: "App Maintenance",       desc: "Ongoing maintenance, OS updates, bug fixes, and feature additions for existing mobile applications on Android and iOS.", features: ["OS version updates", "Bug fixes & patches", "Performance tuning", "Feature additions", "Crash monitoring"] },
];

const useCases = [
  { icon: CreditCard,   title: "Fintech & Payments",  desc: "AEPS agent apps, digital wallet apps, payment collection tools, and banking apps for merchants and customers." },
  { icon: ShoppingBag,  title: "Retail & Commerce",   desc: "Customer-facing shopping apps, retailer management apps, and inventory tools for modern commerce businesses." },
  { icon: Users,        title: "Field Force Apps",    desc: "Apps for sales teams, delivery agents, field engineers, and BC agents — working with or without internet." },
  { icon: GraduationCap,title: "EdTech",              desc: "Student learning apps, teacher dashboards, live class platforms, and assessment tools for education businesses." },
  { icon: Truck,        title: "Logistics",           desc: "Driver tracking apps, delivery management, route optimisation, and real-time updates for logistics companies." },
  { icon: Building2,    title: "Enterprise",          desc: "Internal enterprise tools, HR apps, ERP mobile clients, and approval workflow apps for large organisations." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Mobile App Development"
        title="Android, iOS &"
        accent="Flutter Apps"
        description="Custom mobile applications for fintech, ecommerce, enterprise, and beyond. Native performance, cross-platform efficiency — built by an experienced mobile team."
        trustItems={[
          "Android (Kotlin), iOS (Swift), Flutter",
          "Fintech-grade security & biometric auth",
          "Play Store & App Store deployment",
          "Offline-first architecture available",
        ]}
        stats={[
          { val: "3", label: "Platforms" },
          { val: "Flutter", label: "Cross-Platform" },
          { val: "4–12", label: "Weeks to Launch" },
          { val: "100%", label: "Custom Built" },
        ]}
        heroImage="/services/mobile-apps-hero.png"
        heroImageAlt="Mobile App Development Services"
        primaryCTA="Build Your App"
      />
      <ServiceGrid
        badge="What We Build"
        title="Six types of mobile"
        accent="apps we deliver"
        description="From fintech agent apps to cross-platform Flutter products — we build mobile experiences that work."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Built for every"
        accent="mobile use case"
        description="Our mobile apps serve fintech companies, retailers, logistics providers, and enterprises across India."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Start Building"
        title="Ready to build your"
        accent="mobile app?"
        description="Share your idea and we'll turn it into a production-ready mobile app — Android, iOS, or both."
        primaryCTA="Build Your App"
        note="MJ Digital Services · Android · iOS · Flutter · React Native"
      />
    </>
  );
}