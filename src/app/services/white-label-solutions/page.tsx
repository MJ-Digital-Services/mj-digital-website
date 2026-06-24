import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { Fingerprint, Smartphone, LayoutGrid, Receipt, Network, Users, Store, Plane, Signal, Building2, Globe, Tractor } from "lucide-react";

export const metadata: Metadata = {
  title: "White Label Fintech Solutions — AEPS, Recharge & BBPS Portals | MJ Digital Services",
  description: "Launch your own branded AEPS, recharge, BBPS, and fintech platform with multi-tier distributor and retailer portals. Fully white-labelled, built by MJ Digital Services.",
  keywords: ["white label fintech", "AEPS white label", "recharge white label software", "BBPS white label portal", "B2B recharge portal", "distributor retailer portal", "white label fintech India"],
  alternates: { canonical: "https://mjdigitalservices.com/services/white-label-solutions" },
  openGraph: {
    title: "White Label Fintech Solutions | MJ Digital Services",
    description: "Launch your own branded AEPS, recharge & BBPS platform with distributor portals.",
    url: "https://mjdigitalservices.com/services/white-label-solutions",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: Fingerprint, title: "AEPS White Label Platform",      desc: "Launch your own branded Aadhaar Enabled Payment System for cash withdrawal, balance enquiry, and mini statements.", features: ["Aadhaar authentication", "Cash withdrawal & balance enquiry", "Wallet & settlement", "Retailer onboarding"] },
  { icon: Smartphone,  title: "Recharge White Label Software",  desc: "A branded mobile and DTH recharge platform with multi-operator support and configurable commission slabs.", features: ["Mobile & DTH recharge", "Multi-operator support", "Commission slabs", "Mobile + web apps"] },
  { icon: LayoutGrid,  title: "Fintech White Label Platform",   desc: "A full-suite branded fintech app combining AEPS, DMT, BBPS, and recharge under your own identity.", features: ["AEPS + DMT + BBPS + recharge", "KYC onboarding", "Android app + admin portal", "Custom branding & domain"] },
  { icon: Receipt,     title: "BBPS White Label Portal",        desc: "A branded Bharat Bill Payment portal covering thousands of billers with instant confirmation.", features: ["20,000+ billers", "Utility & recurring bills", "Instant confirmation", "Branded receipts"] },
  { icon: Network,     title: "B2B Recharge Portal",            desc: "A distributor-facing portal to manage bulk recharge, wallets, and downstream retailers at scale.", features: ["Bulk recharge", "Distributor wallet", "Real-time reports", "API access"] },
  { icon: Users,       title: "Distributor & Retailer Portal",  desc: "A multi-tier portal to manage your entire distribution network, wallets, and commission structure.", features: ["Multi-tier hierarchy", "Fund transfer & wallet", "Commission control", "Performance dashboards"] },
];

const useCases = [
  { icon: Store,      title: "Retail Chains",          desc: "Offer AEPS, recharge, and bill payments across all your stores under one branded platform." },
  { icon: Plane,      title: "Travel Agencies",        desc: "Add fintech services as a new revenue line alongside your existing travel bookings." },
  { icon: Signal,     title: "Telecom Distributors",   desc: "Run a branded recharge and B2B distribution network with full commission control." },
  { icon: Smartphone, title: "Mobile & DTH Retailers", desc: "Turn every retail counter into a banking and payments point with your own brand." },
  { icon: Building2,  title: "Cooperative Societies",  desc: "Bring AEPS and bill payments to members through a society-branded portal." },
  { icon: Tractor,    title: "Rural Aggregators",      desc: "Extend last-mile banking and payments to rural retailers through a tiered network." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="White Label Solutions"
        title="Launch Your Own"
        accent="Fintech Brand"
        description="Branded AEPS, recharge, BBPS, and full-suite fintech platforms with multi-tier distributor and retailer portals — built on our infrastructure, launched under your name."
        trustItems={[
          "Your brand, domain & app",
          "Multi-tier distributor hierarchy",
          "Wallet, settlement & commissions",
          "RBI-aligned partner infrastructure",
        ]}
        stats={[
          { val: "100%", label: "Your Branding" },
          { val: "2–4 wk", label: "Go-Live Time" },
          { val: "Multi-Tier", label: "Distribution" },
          { val: "24×7", label: "Support" },
        ]}
        heroImage="/services/white-label-hero.png"
        heroImageAlt="White Label Fintech Solutions"
        primaryCTA="Launch Your Platform"
      />
      <ServiceGrid
        badge="What We Build"
        title="Six white-label products"
        accent="under your brand"
        description="From AEPS to full-suite fintech apps — launch branded platforms with distributor networks already built in."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="White-label platforms for"
        accent="every distributor"
        description="Our white-label products power retail chains, travel agencies, telecom distributors, and rural aggregators across India."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Launch Under Your Brand"
        title="Ready to launch"
        accent="your fintech brand?"
        description="Tell us which services you want to offer and we'll get your branded platform live."
        primaryCTA="Launch Your Platform"
        note="MJ Digital Services · AEPS · Recharge · BBPS · Distributor Portals"
      />
    </>
  );
}