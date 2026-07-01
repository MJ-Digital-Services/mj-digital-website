import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { FileText, Receipt, Plug, CreditCard, FileCheck, Building2, PenTool, Calculator, Rocket, Briefcase, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Tax & Compliance Services — GST, PAN, ITR & e-Signatures | MJ Digital Services",
  description: "GST registration, tax filing software, GST API integration, PAN services, ITR filing, business registration, and digital signatures. Built by MJ Digital Services.",
  keywords: ["GST registration", "tax filing software", "GST API integration", "PAN card services", "ITR filing platform", "business registration", "digital signature services"],
  alternates: { canonical: "https://www.mjdigitalservices.com/services/registration-compliance" },
  openGraph: {
    title: "Tax & Compliance Services | MJ Digital Services",
    description: "GST, PAN, ITR, business registration & digital signature solutions.",
    url: "https://www.mjdigitalservices.com/services/registration-compliance",
    siteName: "MJ Digital Services",
    images: [{ url: "https://www.mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: FileText,  title: "GST Registration Solution",      desc: "Online GST registration assistance with document handling and application tracking.", features: ["Application assistance", "Document collection", "Status tracking", "ARN & certificate"] },
  { icon: Receipt,   title: "Tax Filing Software",            desc: "Simplified tax return filing for individuals and businesses with guided workflows.", features: ["Guided filing", "Auto-computation", "Challan generation", "Filing history"] },
  { icon: Plug,      title: "GST API Integration",            desc: "Integrate GST compliance directly into your platform for returns and reconciliation.", features: ["Return filing API", "GSTIN verification", "E-invoice & e-way bill", "Reconciliation"] },
  { icon: CreditCard,title: "PAN Card Services",              desc: "PAN application and verification services for fast, compliant onboarding.", features: ["New PAN application", "PAN correction", "Bulk verification", "Instant validation"] },
  { icon: FileCheck, title: "ITR Filing Platform",            desc: "An income-tax return filing platform with form selection and refund tracking.", features: ["ITR form selection", "Income computation", "Refund tracking", "Multi-year filing"] },
  { icon: Building2, title: "Business Registration",          desc: "Company and business registration support — from incorporation to licences.", features: ["Company incorporation", "MSME & licences", "Document drafting", "ROC compliance"] },
  { icon: PenTool,   title: "Digital Signature Services",     desc: "Issue and manage Digital Signature Certificates for filings and approvals.", features: ["DSC issuance", "Class 3 certificates", "Renewals", "Bulk management"] },
];

const useCases = [
  { icon: Calculator, title: "CAs & Tax Consultants", desc: "Manage client GST, ITR, and compliance filings from one platform." },
  { icon: Plug,       title: "Fintech Platforms",     desc: "Embed GST, PAN, and e-sign APIs into your product for instant compliance." },
  { icon: Briefcase,  title: "SMEs",                  desc: "Handle registration, filings, and signatures without a dedicated team." },
  { icon: Rocket,     title: "Startups",              desc: "Get incorporated and stay compliant from day one." },
  { icon: Landmark,   title: "Accounting Firms",      desc: "Scale filing operations with bulk verification and API automation." },
  { icon: Building2,  title: "Enterprises",           desc: "Automate e-invoicing, e-way bills, and reconciliation at volume." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Registration & Compliance"
        title="Tax & Compliance,"
        accent="Made Simple"
        description="GST registration, tax and ITR filing, GST API integration, PAN services, business registration, and digital signatures — compliance handled end to end."
        trustItems={[
          "GST, ITR & PAN services",
          "GST APIs for your platform",
          "Business registration support",
          "Class 3 digital signatures",
        ]}
        stats={[
          { val: "GST+ITR", label: "Filing" },
          { val: "API", label: "Integration" },
          { val: "DSC", label: "Class 3" },
          { val: "End-to-End", label: "Compliance" },
        ]}
        heroImage="/services/registration-compliance-hero.png"
        heroImageAlt="Tax & Compliance Services"
        primaryCTA="Get Started"
      />
      <ServiceGrid
        badge="What We Build"
        title="Seven compliance tools"
        accent="under one roof"
        description="From GST registration to digital signatures — software and services that keep filings simple and compliant."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Compliance tools for"
        accent="every business"
        description="Our services support CAs, fintech platforms, SMEs, startups, accounting firms, and enterprises."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Stay Compliant"
        title="Ready to simplify"
        accent="your compliance?"
        description="Tell us what you need to file or integrate and we'll handle the rest."
        primaryCTA="Get Started"
        note="MJ Digital Services · GST · ITR · PAN · DSC · Registration"
      />
    </>
  );
}