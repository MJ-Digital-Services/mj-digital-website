import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { Landmark, Smartphone, Building2, FileText, Wallet, Users, Coins, Briefcase, Sprout, CreditCard, Banknote, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "Lending & Banking Software — LOS, NBFC & Microfinance | MJ Digital Services",
  description: "Loan management, digital lending, NBFC software, loan origination (LOS), collections, and microfinance platforms. RBI-aligned lending software by MJ Digital Services.",
  keywords: ["loan management software", "digital lending platform", "NBFC software", "loan origination system", "LOS", "collection management system", "microfinance software India"],
  alternates: { canonical: "https://www.mjdigitalservices.com/services/lending-banking" },
  openGraph: {
    title: "Lending & Banking Software | MJ Digital Services",
    description: "Loan management, digital lending, NBFC, LOS, collections & microfinance software.",
    url: "https://www.mjdigitalservices.com/services/lending-banking",
    siteName: "MJ Digital Services",
    images: [{ url: "https://www.mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: Landmark,   title: "Loan Management Software",       desc: "End-to-end loan lifecycle management — from disbursal and EMI scheduling to foreclosure and ledgers.", features: ["Disbursal & repayment", "EMI schedules & interest calc", "Foreclosure & restructuring", "Ledger & accounting"] },
  { icon: Smartphone, title: "Digital Lending Platform",       desc: "A fully digital application and disbursal flow with eKYC, credit checks, and instant payout.", features: ["Online application", "eKYC & bank verification", "Credit-bureau checks", "e-Sign, e-NACH & instant disbursal"] },
  { icon: Building2,  title: "NBFC Software Solution",         desc: "Core software for non-banking financial companies with configurable products and compliance reporting.", features: ["Loan product configuration", "Customer 360", "RBI returns & reports", "Multi-branch support"] },
  { icon: FileText,   title: "Loan Origination System (LOS)",  desc: "Streamlined application and underwriting with rule-based credit scoring and approval workflows.", features: ["Lead capture", "Document collection", "Underwriting & scoring rules", "Approval workflow"] },
  { icon: Wallet,     title: "Collection Management System",   desc: "Track repayments and drive recovery with a field-collection app and automated reminders.", features: ["Due & overdue tracking", "Field-collection app", "SMS & voice reminders", "Bucket-wise allocation"] },
  { icon: Users,      title: "Microfinance Software",          desc: "Purpose-built for MFIs — group lending, center management, and field-officer tooling.", features: ["Group / JLG lending", "Center & meeting management", "Field-officer app", "Regulatory reports"] },
];

const useCases = [
  { icon: Building2,  title: "NBFCs",                   desc: "Run your entire lending book — products, disbursal, collections, and RBI reporting — on one platform." },
  { icon: Sprout,     title: "Microfinance Institutions", desc: "Manage group lending, center meetings, and field officers with cash-flow visibility." },
  { icon: Smartphone, title: "Fintech Lenders",         desc: "Launch fully digital lending with eKYC, e-NACH, and instant disbursal." },
  { icon: Banknote,   title: "Gold-Loan Companies",     desc: "Manage loan-against-asset lifecycles, valuations, and renewals end to end." },
  { icon: Store,      title: "Cooperative Banks",       desc: "Digitise member lending, collections, and compliance across branches." },
  { icon: Briefcase,  title: "SME Lenders",             desc: "Underwrite and service business loans with rule-based credit scoring." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Lending & Banking"
        title="Lend Smarter with"
        accent="Digital Lending Software"
        description="Loan management, digital lending, NBFC core, loan origination, collections, and microfinance platforms — built to take a loan from application to recovery."
        trustItems={[
          "End-to-end loan lifecycle",
          "eKYC, e-Sign & e-NACH",
          "Collections & recovery built in",
          "RBI-aligned reporting",
        ]}
        stats={[
          { val: "End-to-End", label: "Loan Lifecycle" },
          { val: "eKYC", label: "& e-NACH" },
          { val: "RBI", label: "Aligned" },
          { val: "Multi-Branch", label: "Ready" },
        ]}
        heroImage="/services/lending-banking-hero.webp"
        heroImageAlt="Lending & Banking Software"
        primaryCTA="Book a Demo"
      />
      <ServiceGrid
        badge="What We Build"
        title="Six lending products"
        accent="for modern lenders"
        description="From origination to collections — software that covers the full loan lifecycle for NBFCs, fintechs, and MFIs."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Lending software for"
        accent="every lender"
        description="Our platforms power NBFCs, microfinance institutions, fintech lenders, and cooperative banks across India."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Start Lending Digitally"
        title="Ready to digitise"
        accent="your lending?"
        description="Tell us about your loan products and we'll map the fastest path from application to disbursal."
        primaryCTA="Book a Demo"
        note="MJ Digital Services · LOS · NBFC · Collections · Microfinance"
      />
    </>
  );
}