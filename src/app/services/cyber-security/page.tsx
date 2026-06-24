import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { ShieldCheck, FileSearch, ClipboardCheck, Cloud, CreditCard, Building2, HeartPulse, ShoppingBag, Server, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Cyber Security Services — VAPT, Audits & Cloud Security | MJ Digital Services",
  description: "Vulnerability assessment and penetration testing (VAPT), security audits, compliance solutions, and cloud security. Protect your business with MJ Digital Services.",
  keywords: ["VAPT services", "security audit", "penetration testing India", "compliance solutions", "cloud security", "cyber security services India"],
  alternates: { canonical: "https://mjdigitalservices.com/services/cyber-security" },
  openGraph: {
    title: "Cyber Security Services | MJ Digital Services",
    description: "VAPT, security audits, compliance & cloud security.",
    url: "https://mjdigitalservices.com/services/cyber-security",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: ShieldCheck,   title: "VAPT Services",        desc: "Vulnerability Assessment and Penetration Testing to surface weaknesses before attackers do.", features: ["Web & API testing", "Mobile app testing", "Network testing", "Detailed remediation report"] },
  { icon: FileSearch,    title: "Security Audits",      desc: "A comprehensive review of your systems, configurations, and policies with clear findings.", features: ["Config & code review", "Access & policy review", "Risk scoring", "Actionable findings"] },
  { icon: ClipboardCheck,title: "Compliance Solutions", desc: "Meet regulatory and security standards with structured, audit-ready processes.", features: ["Standards mapping", "Gap assessment", "Policy & controls", "Audit readiness"] },
  { icon: Cloud,         title: "Cloud Security",       desc: "Secure your cloud infrastructure and data with hardening and continuous monitoring.", features: ["Cloud config hardening", "Identity & access", "Data encryption", "Threat monitoring"] },
];

const useCases = [
  { icon: CreditCard, title: "Fintech",     desc: "Secure payment platforms and APIs against fraud and breaches." },
  { icon: Landmark,   title: "BFSI",        desc: "Meet regulatory security standards with audits and penetration testing." },
  { icon: HeartPulse, title: "Healthcare",  desc: "Protect patient data and meet privacy and compliance requirements." },
  { icon: ShoppingBag,title: "Ecommerce",   desc: "Harden storefronts and checkout against attacks and data leaks." },
  { icon: Server,     title: "SaaS",        desc: "Secure multi-tenant platforms and pass customer security reviews." },
  { icon: Building2,  title: "Government",  desc: "Run rigorous audits and compliance for public-facing systems." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Cyber Security"
        title="Secure Your"
        accent="Digital Business"
        description="VAPT, security audits, compliance solutions, and cloud security — find and fix weaknesses before they become incidents, and stay audit-ready."
        trustItems={[
          "Web, API, mobile & network VAPT",
          "Audit-ready compliance",
          "Cloud hardening & monitoring",
          "Clear, actionable reports",
        ]}
        stats={[
          { val: "VAPT", label: "Testing" },
          { val: "Audit", label: "Ready" },
          { val: "Cloud", label: "Hardening" },
          { val: "Actionable", label: "Reports" },
        ]}
        heroImage="/services/cyber-security-hero.png"
        heroImageAlt="Cyber Security Services"
        primaryCTA="Request an Assessment"
      />
      <ServiceGrid
        badge="What We Build"
        title="Four ways to stay"
        accent="secure and compliant"
        description="From penetration testing to cloud hardening — security services that protect your business and your customers."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Security for"
        accent="every industry"
        description="We secure fintech, BFSI, healthcare, ecommerce, SaaS, and government systems."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Protect Your Business"
        title="Ready to find the gaps"
        accent="before attackers do?"
        description="Tell us what you want assessed and we'll scope a security engagement that fits."
        primaryCTA="Request an Assessment"
        note="MJ Digital Services · VAPT · Audits · Compliance · Cloud Security"
      />
    </>
  );
}