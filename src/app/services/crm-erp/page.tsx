import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { LayoutDashboard, Users, UserCheck, Zap, BarChart3, Shield, Building2, ShoppingBag, GraduationCap, Truck, HeadphonesIcon, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "CRM & ERP Development — Custom Enterprise Software | MJ Digital Services",
  description: "Custom CRM, ERP, and HRMS development for Indian businesses. SaaS product development, sales automation, inventory management, and HR systems built by MJ Digital Services.",
  keywords: ["CRM development India", "ERP development India", "custom CRM software", "HRMS development", "SaaS product development", "enterprise software India", "MJ Digital CRM ERP"],
  alternates: { canonical: "https://www.mjdigitalservices.com/services/crm-erp" },
  openGraph: {
    title: "CRM & ERP Development | MJ Digital Services",
    description: "Custom CRM, ERP, HRMS, and SaaS products for Indian businesses.",
    url: "https://www.mjdigitalservices.com/services/crm-erp",
    siteName: "MJ Digital Services",
    images: [{ url: "https://www.mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: Users,          title: "CRM Development",         desc: "Custom CRM systems tailored to your sales process — lead management, pipeline tracking, follow-ups, and customer 360.", features: ["Lead & pipeline management", "Customer 360 view", "Follow-up automation", "Email & WhatsApp integration", "Sales analytics"] },
  { icon: LayoutDashboard,title: "ERP Development",         desc: "End-to-end ERP systems covering inventory, procurement, finance, operations, and reporting for growing businesses.", features: ["Inventory management", "Purchase & procurement", "Finance & accounting", "Operations management", "Custom reporting"] },
  { icon: UserCheck,      title: "HRMS Solutions",          desc: "HR management systems for attendance, payroll, leave management, performance reviews, and employee self-service.", features: ["Attendance & leave", "Payroll automation", "Performance reviews", "Employee self-service", "Compliance reports"] },
  { icon: Zap,            title: "SaaS Product Development",desc: "Build your own SaaS product from scratch — multi-tenant architecture, subscription billing, and scalable infrastructure.", features: ["Multi-tenant architecture", "Subscription billing", "User management", "API-first design", "Scalable infrastructure"] },
  { icon: BarChart3,      title: "Business Intelligence",   desc: "Custom BI dashboards and reporting tools that give your leadership team real-time visibility into business performance.", features: ["Real-time dashboards", "Custom KPI tracking", "Data visualisation", "Scheduled reports", "Role-based access"] },
  { icon: Shield,         title: "Legacy Modernisation",    desc: "Migrate your outdated software to modern, cloud-based systems without disrupting ongoing business operations.", features: ["Data migration", "API modernisation", "Cloud deployment", "Zero-downtime migration", "Staff training"] },
];

const useCases = [
  { icon: Building2,    title: "Enterprises",          desc: "End-to-end ERP systems for large organisations managing multi-location operations, supply chains, and large teams." },
  { icon: ShoppingBag,  title: "Retail & Distribution", desc: "Inventory, order management, and distributor CRM for retail businesses with complex supply chains." },
  { icon: CreditCard,   title: "Fintech & BFSI",       desc: "Agent CRM, loan origination systems, and collection management for fintech companies and NBFCs." },
  { icon: GraduationCap,title: "EdTech",               desc: "Student management systems, fee collection portals, and faculty management for educational institutions." },
  { icon: Truck,        title: "Logistics",            desc: "Fleet management, driver tracking, delivery CRM, and operations dashboards for logistics companies." },
  { icon: HeadphonesIcon,title: "Service Businesses",  desc: "Customer support CRM, ticket management, and SLA tracking for service-oriented organisations." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="CRM & ERP Development"
        title="Enterprise Software"
        accent="Built Your Way"
        description="Custom CRM, ERP, HRMS, and SaaS products built specifically for your business processes. No off-the-shelf compromises — software that works exactly the way you work."
        trustItems={[
          "100% custom — built for your workflow",
          "CRM, ERP, HRMS & SaaS development",
          "Cloud-native, scalable architecture",
          "Full training & ongoing support",
        ]}
        stats={[
          { val: "100%", label: "Custom Built" },
          { val: "4", label: "Product Types" },
          { val: "Cloud", label: "Native Architecture" },
          { val: "50+", label: "Clients Served" },
        ]}
        heroImage="/services/crm-erp-hero.png"
        heroImageAlt="CRM and ERP Development"
        primaryCTA="Build Your System"
      />
      <ServiceGrid
        badge="What We Build"
        title="Six enterprise software"
        accent="products we deliver"
        description="From CRM to full ERP — we build the business software your team actually wants to use."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Enterprise software for"
        accent="every sector"
        description="Our CRM and ERP solutions are deployed across retail, fintech, logistics, education, and services."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Start Building"
        title="Ready to replace"
        accent="your legacy software?"
        description="Tell us your current pain points. We'll design a custom solution that fits your team and your budget."
        primaryCTA="Build Your System"
        note="MJ Digital Services · CRM · ERP · HRMS · SaaS · Node.js · React"
      />
    </>
  );
}