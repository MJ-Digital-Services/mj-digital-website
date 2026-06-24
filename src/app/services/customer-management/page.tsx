import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { UserPlus, Workflow, Headphones, Ticket, PhoneCall, CreditCard, Building2, GraduationCap, HeartPulse, Phone, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Management Software — CRM, Helpdesk & Call Center | MJ Digital Services",
  description: "Lead management CRM, sales automation, customer support CRM, ticketing & helpdesk, and call center management software. Built by MJ Digital Services.",
  keywords: ["lead management CRM", "sales automation CRM", "customer support CRM", "ticketing helpdesk software", "call center management software", "CRM India"],
  alternates: { canonical: "https://mjdigitalservices.com/services/customer-management" },
  openGraph: {
    title: "Customer Management Software | MJ Digital Services",
    description: "Lead, sales & support CRMs, helpdesk, and call center software.",
    url: "https://mjdigitalservices.com/services/customer-management",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: UserPlus,  title: "Lead Management CRM",          desc: "Capture, track, and convert leads from every source so nothing slips through the cracks.", features: ["Multi-source lead capture", "Lead scoring & routing", "Follow-up reminders", "Conversion tracking"] },
  { icon: Workflow,  title: "Sales Automation CRM",         desc: "Automate sales workflows, follow-ups, and pipelines so your team closes more, faster.", features: ["Pipeline automation", "Automated follow-ups", "Quotation & deals", "Sales reporting"] },
  { icon: Headphones,title: "Customer Support CRM",         desc: "Manage customer queries and full support history in one place for faster resolutions.", features: ["Unified customer history", "Query management", "SLA tracking", "Knowledge base"] },
  { icon: Ticket,    title: "Ticketing & Helpdesk Software",desc: "Organise, prioritise, and resolve support tickets with smart routing and SLAs.", features: ["Ticket creation & routing", "Priority & SLA rules", "Canned responses", "Resolution analytics"] },
  { icon: PhoneCall, title: "Call Center Management",        desc: "Run inbound and outbound calling operations with dialer integration and agent monitoring.", features: ["Inbound & outbound calling", "Dialer integration", "Call recording", "Agent performance"] },
];

const useCases = [
  { icon: CreditCard,   title: "Fintech",       desc: "Manage loan leads, onboarding follow-ups, and support queries from one CRM." },
  { icon: Building2,    title: "Real Estate",   desc: "Track enquiries, site visits, and broker pipelines from first touch to closure." },
  { icon: GraduationCap,title: "EdTech",        desc: "Capture course enquiries, automate counsellor follow-ups, and support learners." },
  { icon: HeartPulse,   title: "Healthcare",    desc: "Manage patient enquiries, appointment follow-ups, and support tickets." },
  { icon: Phone,        title: "BPO & Call Centers", desc: "Run high-volume inbound/outbound operations with dialer and agent monitoring." },
  { icon: ShoppingBag,  title: "Ecommerce",     desc: "Resolve order and return queries fast with a ticketed support desk." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Customer Management"
        title="Win & Keep"
        accent="More Customers"
        description="Lead management, sales automation, support CRMs, helpdesk ticketing, and call center software — everything to capture, convert, and retain customers."
        trustItems={[
          "Lead capture to conversion",
          "Automated follow-ups",
          "Helpdesk & SLA tracking",
          "Dialer & call recording",
        ]}
        stats={[
          { val: "360°", label: "Customer View" },
          { val: "Automated", label: "Follow-Ups" },
          { val: "SLA", label: "Tracking" },
          { val: "Inbound+", label: "Outbound" },
        ]}
        heroImage="/services/customer-management-hero.png"
        heroImageAlt="Customer Management Software"
        primaryCTA="Get a Demo"
      />
      <ServiceGrid
        badge="What We Build"
        title="Five tools to manage"
        accent="the customer journey"
        description="From the first lead to ongoing support — software that keeps every customer interaction organised."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Customer software for"
        accent="every team"
        description="Our CRMs and helpdesks power fintech, real estate, edtech, healthcare, and call-center teams."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Manage Customers Better"
        title="Ready to convert"
        accent="more leads?"
        description="Tell us where leads or tickets are leaking and we'll show you a CRM setup that fixes it."
        primaryCTA="Get a Demo"
        note="MJ Digital Services · CRM · Helpdesk · Call Center"
      />
    </>
  );
}