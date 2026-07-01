import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { LayoutDashboard, Wallet, Users, Network, Shield, Zap, Store, Building2, CreditCard, Globe, Smartphone, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "White Label Fintech Solutions — Merchant Platforms & Digital Wallets | MJ Digital Services",
  description: "Launch your own branded fintech platform. White label merchant management systems, digital wallets, and agent banking portals — powered by MJ Digital Services.",
  keywords: ["white label fintech India", "merchant management system", "digital wallet solution", "white label payment platform", "agent banking portal", "branded fintech platform", "MJ Digital fintech"],
  alternates: { canonical: "https://www.mjdigitalservices.com/services/white-label-fintech" },
  openGraph: {
    title: "White Label Fintech Solutions | MJ Digital Services",
    description: "Launch your own branded fintech platform — merchant portals, digital wallets, agent banking.",
    url: "https://www.mjdigitalservices.com/services/white-label-fintech",
    siteName: "MJ Digital Services",
    images: [{ url: "https://www.mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: LayoutDashboard, title: "White Label Merchant Portal",    desc: "A fully branded merchant management portal with your logo, colors, and domain — powered by our fintech infrastructure.", features: ["Custom branding & domain", "Agent & distributor management", "Transaction dashboard", "Commission tracking", "API key management"] },
  { icon: Wallet,          title: "Digital Wallet Solution",        desc: "Launch your own branded digital wallet with KYC, fund loading, P2P transfers, and merchant payments.", features: ["KYC & onboarding", "Fund load & withdrawal", "P2P transfers", "Merchant payments", "Transaction history"] },
  { icon: Users,           title: "Agent Banking Platform",         desc: "A complete BC agent network platform with AEPS, DMT, BBPS, and commission management for your agent hierarchy.", features: ["AEPS & DMT enabled", "Multi-tier hierarchy", "Commission slabs", "Real-time settlement", "Agent app included"] },
  { icon: Network,         title: "Distributor Management System",  desc: "Manage your entire distribution network — distributors, retailers, and sub-agents — from one unified dashboard.", features: ["Multi-level network", "Wallet management", "Performance analytics", "Dispute management", "Automated payouts"] },
  { icon: Shield,          title: "KYC & Compliance Module",        desc: "Built-in KYC, AML, and compliance workflows to onboard agents and customers while staying RBI compliant.", features: ["Aadhaar & PAN KYC", "Video KYC support", "AML screening", "RBI compliance", "Audit logs"] },
  { icon: Zap,             title: "API Suite Integration",          desc: "Connect your white label platform to our full API suite — AEPS, DMT, BBPS, recharge, and 20+ more services.", features: ["AEPS & DMT APIs", "BBPS integration", "Recharge APIs", "KYC APIs", "Real-time webhooks"] },
];

const useCases = [
  { icon: Store,       title: "BC Networks & CSPs",    desc: "Launch your own banking correspondent network with branded apps, agent portals, and full AEPS/DMT/BBPS service stack." },
  { icon: Building2,   title: "NBFCs & MFIs",          desc: "Digital collection platforms, loan disbursement tools, and agent networks for microfinance and NBFC operations." },
  { icon: CreditCard,  title: "Payment Aggregators",   desc: "White label payment aggregation platforms for businesses wanting to offer payment services under their own brand." },
  { icon: Globe,       title: "Telecom Distributors",  desc: "Recharge and bill payment platforms for telecom distributors looking to expand into financial services." },
  { icon: Smartphone,  title: "Fintech Startups",      desc: "Skip the infrastructure build. Launch your fintech product in weeks using our white label platform as the foundation." },
  { icon: BarChart3,   title: "Enterprises",           desc: "Corporate payment platforms, employee benefit wallets, and vendor payment systems for large enterprises." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="White Label Fintech"
        title="Your Brand."
        accent="Our Infrastructure."
        description="Launch a fully branded fintech platform — merchant portal, digital wallet, or agent banking network — in weeks, not months. Powered by MJ Digital's battle-tested infrastructure."
        trustItems={[
          "Full white label — your logo, domain, colors",
          "RBI & NPCI compliant infrastructure",
          "AEPS, DMT, BBPS, KYC built-in",
          "Launch in 2–4 weeks",
        ]}
        stats={[
          { val: "2–4", label: "Weeks to Launch" },
          { val: "100%", label: "White Label" },
          { val: "60+", label: "Services Built-in" },
          { val: "RBI", label: "Compliant" },
        ]}
        heroImage="/services/white-label-hero.png"
        heroImageAlt="White Label Fintech Platform"
        primaryCTA="Launch Your Platform"
      />
      <ServiceGrid
        badge="What We Offer"
        title="Six white label"
        accent="fintech products"
        description="Everything you need to launch and operate your own branded fintech platform — from day one."
        services={services}
      />
      <ServiceUseCases
        badge="Who It's For"
        title="Built for fintech"
        accent="businesses of all sizes"
        description="From BC networks to enterprise payment platforms — our white label solutions fit every fintech business model."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Launch Your Platform"
        title="Ready to launch your"
        accent="own fintech brand?"
        description="Get a demo of our white label platform. We'll customise it to your brand and go live in 2–4 weeks."
        primaryCTA="Get a Demo"
        note="MJ Digital Services · White Label · RBI Compliant · Full Stack Fintech"
      />
    </>
  );
}