import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { Globe, ShoppingBag, LayoutDashboard, Code2, Zap, Shield, Smartphone, Users, Building2, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services — Corporate, Ecommerce & Custom Web Apps | MJ Digital Services",
  description: "Professional web development services for corporate websites, ecommerce platforms, business portals, and custom web applications. Built with Next.js, React, and Node.js.",
  keywords: ["web development India", "corporate website development", "ecommerce website India", "custom web application", "Next.js development", "React development India", "MJ Digital web development"],
  alternates: { canonical: "https://mjdigitalservices.com/services/web-development" },
  openGraph: {
    title: "Web Development Services | MJ Digital Services",
    description: "Corporate websites, ecommerce platforms, business portals, and custom web applications.",
    url: "https://mjdigitalservices.com/services/web-development",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: Globe, title: "Corporate Websites", desc: "Professional, conversion-optimised corporate websites that establish credibility and generate leads for your business.", features: ["Custom design & branding", "SEO optimised structure", "Mobile responsive", "CMS integration", "Fast load times"] },
  { icon: ShoppingBag, title: "Ecommerce Websites", desc: "Full-featured ecommerce platforms with payment gateway integration, inventory management, and order tracking.", features: ["Payment gateway integration", "Product catalogue management", "Order & inventory tracking", "Mobile-first design", "Analytics dashboard"] },
  { icon: LayoutDashboard, title: "Business Portals", desc: "Custom business portals for agent networks, merchant dashboards, partner management, and internal operations.", features: ["Role-based access control", "Real-time dashboards", "API integrations", "Custom workflows", "Data export & reporting"] },
  { icon: Code2, title: "Custom Web Applications", desc: "Bespoke web applications built for your specific business logic — from fintech platforms to enterprise tools.", features: ["Custom business logic", "Scalable architecture", "Third-party integrations", "Performance optimised", "End-to-end development"] },
  { icon: Zap, title: "Landing Pages", desc: "High-converting landing pages for product launches, marketing campaigns, and lead generation.", features: ["Conversion optimised", "A/B testing ready", "Fast performance", "Analytics integration", "Mobile responsive"] },
  { icon: Shield, title: "Maintenance & Support", desc: "Ongoing maintenance, security updates, performance monitoring, and feature additions for existing web platforms.", features: ["Security patches", "Performance monitoring", "Feature updates", "Bug fixes", "24/7 uptime monitoring"] },
];

const useCases = [
  { icon: Building2,      title: "Fintech Companies",    desc: "Agent portals, merchant dashboards, and customer-facing platforms for fintech businesses handling high transaction volumes." },
  { icon: ShoppingBag,    title: "Retail & Ecommerce",   desc: "End-to-end ecommerce solutions with payment integration, inventory management, and delivery tracking." },
  { icon: Users,          title: "Enterprises & SMEs",   desc: "Internal tools, CRM integrations, and business portals that streamline operations and improve team productivity." },
  { icon: GraduationCap,  title: "EdTech Platforms",     desc: "Learning management systems, course portals, and student dashboards built for scale." },
  { icon: Smartphone,     title: "Startups",             desc: "MVPs and full-featured web products built fast — from idea to launch in weeks, not months." },
  { icon: Globe,          title: "Government & NGOs",    desc: "Accessible, compliant web portals and information platforms for public sector organisations." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Web Development"
        title="Websites & Web Apps"
        accent="Built to Perform"
        description="Corporate websites, ecommerce platforms, business portals, and custom web applications — built with Next.js, React, and Node.js for speed, scale, and results."
        trustItems={[
          "Next.js, React, Angular — modern tech stack",
          "Mobile-first, SEO optimised by default",
          "Custom design — no templates",
          "End-to-end — design to deployment",
        ]}
        stats={[
          { val: "50+", label: "Projects Delivered" },
          { val: "React", label: "Primary Stack" },
          { val: "2–6", label: "Weeks to Launch" },
          { val: "100%", label: "Custom Built" },
        ]}
        heroImage="/services/web-development-hero.png"
        heroImageAlt="Web Development Services"
        primaryCTA="Start Your Project"
      />
      <ServiceGrid
        badge="What We Build"
        title="Six types of web"
        accent="products we deliver"
        description="From simple corporate websites to complex fintech portals — we build whatever your business needs."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Built for every"
        accent="type of business"
        description="Our web development work spans fintech, retail, education, healthcare, and government sectors."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Start Building"
        title="Ready to launch your"
        accent="next web project?"
        description="Tell us what you're building. We'll scope it, design it, and deliver it — on time, on budget."
        primaryCTA="Start Your Project"
        note="MJ Digital Services · Next.js · React · Node.js · Full Stack"
      />
    </>
  );
}