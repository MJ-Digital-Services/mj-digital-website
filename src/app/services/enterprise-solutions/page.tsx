import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { Users, Boxes, UserCog, Wallet, MapPin, UserCheck, Factory, Store, Briefcase, Truck, HeartPulse, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Software — CRM, ERP, HRMS & Payroll | MJ Digital Services",
  description: "CRM, ERP, HRMS, payroll, attendance, workforce tracking, and visitor management software for growing businesses. Unified enterprise solutions by MJ Digital Services.",
  keywords: ["CRM software India", "ERP software", "HRMS software", "payroll management system", "attendance management", "field force tracking", "visitor management system"],
  alternates: { canonical: "https://www.mjdigitalservices.com/services/enterprise-solutions" },
  openGraph: {
    title: "Enterprise Software Solutions | MJ Digital Services",
    description: "CRM, ERP, HRMS, payroll, attendance & workforce tracking for growing businesses.",
    url: "https://www.mjdigitalservices.com/services/enterprise-solutions",
    siteName: "MJ Digital Services",
    images: [{ url: "https://www.mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: Users,     title: "CRM Software",            desc: "Manage customer relationships, sales pipelines, and follow-ups from a single dashboard.", features: ["Lead & deal pipelines", "Sales automation", "Activity tracking", "Reports & forecasting"] },
  { icon: Boxes,     title: "ERP Software",            desc: "Unify operations, inventory, and finance so every department works off the same data.", features: ["Inventory & procurement", "Finance & accounting", "Order management", "Multi-location support"] },
  { icon: UserCog,   title: "HRMS Software",           desc: "A complete human resource management system covering the full employee lifecycle.", features: ["Onboarding & records", "Leave & holidays", "Performance reviews", "Employee self-service"] },
  { icon: Wallet,    title: "Payroll & Attendance",    desc: "Automated salary processing with attendance, shifts, and statutory compliance built in.", features: ["Automated payroll", "Attendance & shifts", "PF, ESI & TDS compliance", "Payslip generation"] },
  { icon: MapPin,    title: "Workforce Tracking",      desc: "Track productivity and field employees with GPS-based location and work-hour monitoring.", features: ["Employee tracking", "Field-force GPS tracking", "Work-hour monitoring", "Live location & geo-fencing"] },
  { icon: UserCheck, title: "Visitor Management System", desc: "Digital check-in, visitor logging, and badge printing for secure, paperless reception.", features: ["Digital check-in", "Visitor logs & history", "Host notifications", "Badge printing"] },
];

const useCases = [
  { icon: Factory,   title: "Manufacturing",   desc: "Connect inventory, procurement, payroll, and field teams across plants and warehouses." },
  { icon: Store,     title: "Retail Chains",    desc: "Run multi-store operations with unified CRM, inventory, and workforce management." },
  { icon: Briefcase, title: "Services Firms",   desc: "Manage client pipelines, HR, and payroll for consulting and professional services." },
  { icon: Truck,     title: "Distribution",     desc: "Coordinate field sales, inventory, and order management across your supply chain." },
  { icon: HeartPulse,title: "Healthcare",       desc: "Manage staff, attendance, and visitor flow across clinics and hospitals." },
  { icon: Building2, title: "Real Estate",      desc: "Track leads, site visits, and field teams from enquiry to closure." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Enterprise Solutions"
        title="Run Your Whole"
        accent="Business in One Place"
        description="CRM, ERP, HRMS, payroll, attendance, workforce tracking, and visitor management — unified software that keeps sales, operations, and people in sync."
        trustItems={[
          "Unified CRM, ERP & HRMS",
          "Payroll & statutory compliance",
          "GPS workforce tracking",
          "Cloud or on-premise",
        ]}
        stats={[
          { val: "Unified", label: "Operations" },
          { val: "CRM+ERP", label: "+HRMS" },
          { val: "Cloud", label: "or On-Prem" },
          { val: "Role-Based", label: "Access" },
        ]}
        heroImage="/services/enterprise-solutions-hero.webp"
        heroImageAlt="Enterprise Software Solutions"
        primaryCTA="Get a Demo"
      />
      <ServiceGrid
        badge="What We Build"
        title="Six enterprise systems"
        accent="that work together"
        description="From customer pipelines to payroll — software that connects every part of your business on shared data."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Enterprise software for"
        accent="every operation"
        description="Our systems run across manufacturing, retail, services, distribution, healthcare, and real estate."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Unify Your Operations"
        title="Ready to connect"
        accent="your business?"
        description="Tell us where the gaps are and we'll show you a unified setup that fits how you work."
        primaryCTA="Get a Demo"
        note="MJ Digital Services · CRM · ERP · HRMS · Payroll · Tracking"
      />
    </>
  );
}