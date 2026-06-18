import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { Bot, Mic, HeadphonesIcon, Zap, BarChart3, Shield, CreditCard, ShoppingBag, Building2, Users, GraduationCap, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Solutions — Chatbots, Voice AI & Automation | MJ Digital Services",
  description: "AI-powered chatbots, voice AI agents, customer support automation, and business process automation. Built for Indian businesses by MJ Digital Services.",
  keywords: ["AI chatbot India", "voice AI agent", "customer support AI", "business automation India", "WhatsApp chatbot", "AI solutions India", "MJ Digital AI"],
  alternates: { canonical: "https://mjdigitalservices.com/services/ai-solutions" },
  openGraph: {
    title: "AI Solutions | MJ Digital Services",
    description: "AI chatbots, voice AI, and automation solutions for Indian businesses.",
    url: "https://mjdigitalservices.com/services/ai-solutions",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: Bot,              title: "AI Chatbots",             desc: "Intelligent chatbots for WhatsApp, websites, and apps that handle customer queries, onboarding, and support 24/7.", features: ["WhatsApp & web deployment", "Natural language understanding", "Multi-language support", "CRM integration", "Handoff to human agents"] },
  { icon: Mic,              title: "Voice AI Agents",         desc: "Automated voice agents that handle inbound and outbound calls — for collections, reminders, OTP, and customer support.", features: ["Inbound & outbound calls", "Hindi & regional languages", "Payment reminders", "OTP delivery", "IVR replacement"] },
  { icon: HeadphonesIcon,   title: "Customer Support AI",     desc: "AI-powered support systems that resolve common queries instantly, route complex issues, and reduce support costs.", features: ["Auto-resolve common queries", "Smart ticket routing", "Sentiment analysis", "Agent assist mode", "Analytics dashboard"] },
  { icon: Zap,              title: "Business Automation",     desc: "Automate repetitive business processes — document processing, data entry, approval workflows, and reporting.", features: ["Document processing", "Workflow automation", "Data extraction", "Approval workflows", "Scheduled reporting"] },
  { icon: BarChart3,        title: "AI Analytics",            desc: "Business intelligence dashboards powered by AI — surface insights from your transaction data, customer behaviour, and operations.", features: ["Real-time dashboards", "Predictive analytics", "Customer segmentation", "Anomaly detection", "Custom reports"] },
  { icon: Shield,           title: "Fraud Detection AI",      desc: "ML-powered fraud detection for payment platforms — identify suspicious transactions in real-time before they complete.", features: ["Real-time scoring", "Pattern recognition", "Low false positives", "Custom rule engine", "Alert & block system"] },
];

const useCases = [
  { icon: CreditCard,   title: "Fintech & Payments",   desc: "Voice AI for payment reminders, chatbots for balance enquiry, and fraud detection for transaction monitoring." },
  { icon: ShoppingBag,  title: "Retail & Ecommerce",   desc: "Order tracking chatbots, return/refund automation, and product recommendation engines for online retailers." },
  { icon: HeadphonesIcon,title: "Customer Support",    desc: "Reduce support costs by 60% with AI that resolves Tier-1 queries automatically and routes the rest intelligently." },
  { icon: Building2,    title: "BFSI",                 desc: "KYC automation, loan application processing, and customer onboarding workflows for banks and NBFCs." },
  { icon: GraduationCap,title: "EdTech",               desc: "Doubt-solving chatbots, automated assignment feedback, and personalised learning path recommendations." },
  { icon: Truck,        title: "Logistics",            desc: "Delivery status bots, driver coordination automation, and customer notification systems for logistics companies." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="AI Solutions"
        title="Smarter Business"
        accent="Powered by AI"
        description="AI chatbots, voice agents, customer support automation, and business process automation — built for Indian businesses that want to scale without scaling headcount."
        trustItems={[
          "WhatsApp, web & voice deployment",
          "Hindi & regional language support",
          "Integrates with your existing systems",
          "Human handoff when needed",
        ]}
        stats={[
          { val: "24/7", label: "AI Availability" },
          { val: "60%", label: "Support Cost Reduction" },
          { val: "<1s", label: "Response Time" },
          { val: "10+", label: "Languages Supported" },
        ]}
        heroImage="/services/ai-solutions-hero.png"
        heroImageAlt="AI Solutions"
        primaryCTA="Explore AI Solutions"
      />
      <ServiceGrid
        badge="What We Build"
        title="Six AI products"
        accent="for your business"
        description="From customer-facing chatbots to back-office automation — we build AI that actually works for Indian businesses."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="AI solutions for"
        accent="every industry"
        description="Our AI products are deployed across fintech, retail, logistics, education, and enterprise sectors."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Get Started with AI"
        title="Ready to automate"
        accent="your business?"
        description="Tell us your biggest operational challenge. We'll show you how AI can solve it — fast."
        primaryCTA="Explore AI Solutions"
        note="MJ Digital Services · AI Chatbots · Voice AI · Automation · Analytics"
      />
    </>
  );
}