import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { MessageCircle, MessageSquare, Sparkles, KeyRound, Mail, Layers, Bot, Cpu, CreditCard, ShoppingBag, HeartPulse, GraduationCap, Truck, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "CPaaS Messaging Solutions — WhatsApp, SMS, RCS & Chatbots | MJ Digital Services",
  description: "WhatsApp Business API, bulk SMS, RCS messaging, OTP, email marketing, omnichannel communication, chatbots, and conversational AI. Built by MJ Digital Services.",
  keywords: ["WhatsApp Business API", "bulk SMS platform", "RCS messaging", "OTP SMS", "email marketing platform", "omnichannel communication", "chatbot development", "conversational AI"],
  alternates: { canonical: "https://www.mjdigitalservices.com/services/messaging-solutions" },
  openGraph: {
    title: "CPaaS Messaging Solutions | MJ Digital Services",
    description: "WhatsApp API, SMS, RCS, OTP, email & chatbots across every channel.",
    url: "https://www.mjdigitalservices.com/services/messaging-solutions",
    siteName: "MJ Digital Services",
    images: [{ url: "https://www.mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: MessageCircle, title: "WhatsApp Business API",  desc: "Customer messaging, support, and notifications over the official WhatsApp Business API.", features: ["Official API access", "Template messages", "Interactive buttons", "Support inbox"] },
  { icon: MessageSquare, title: "Bulk SMS Platform",      desc: "Send bulk transactional and promotional SMS with high deliverability and reporting.", features: ["Transactional & promotional", "DLT compliance", "Delivery reports", "Scheduling"] },
  { icon: Sparkles,      title: "RCS Messaging",          desc: "Rich, branded, interactive messaging that upgrades the standard SMS experience.", features: ["Branded sender", "Rich cards & carousels", "Suggested replies", "Read receipts"] },
  { icon: KeyRound,      title: "OTP SMS Services",       desc: "Reliable, fast OTP delivery for verification with high-priority routing.", features: ["High-priority routing", "Fast delivery", "Fallback channels", "Verification APIs"] },
  { icon: Mail,          title: "Email Marketing Platform", desc: "Automated email campaigns with templates, segmentation, and analytics.", features: ["Drag-and-drop templates", "Segmentation", "Automation flows", "Open & click analytics"] },
  { icon: Layers,        title: "Omnichannel Communication", desc: "Unified messaging across WhatsApp, SMS, RCS, and email from one console.", features: ["Single console", "Unified contacts", "Channel fallback", "Cross-channel analytics"] },
  { icon: Bot,           title: "Chatbot Development",    desc: "Custom chatbots for support and sales deployed across web and messaging channels.", features: ["Web & WhatsApp bots", "Flow builder", "CRM integration", "Human handoff"] },
  { icon: Cpu,           title: "Conversational AI",      desc: "AI-driven conversational experiences that understand intent and respond naturally.", features: ["Intent understanding", "Multi-language", "Context memory", "Generative responses"] },
];

const useCases = [
  { icon: CreditCard,    title: "Fintech",     desc: "Send OTPs, payment reminders, and run WhatsApp support at scale." },
  { icon: ShoppingBag,   title: "Ecommerce",   desc: "Drive order updates, cart recovery, and promotions across channels." },
  { icon: HeartPulse,    title: "Healthcare",  desc: "Send appointment reminders and reports over WhatsApp and SMS." },
  { icon: GraduationCap, title: "EdTech",      desc: "Notify learners, run campaigns, and deploy doubt-solving chatbots." },
  { icon: Truck,         title: "Logistics",   desc: "Automate delivery updates and customer notifications." },
  { icon: Building2,     title: "BFSI",        desc: "Run compliant transactional messaging and conversational support." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Messaging Solutions"
        title="Reach Customers on"
        accent="Every Channel"
        description="WhatsApp Business API, bulk SMS, RCS, OTP, email marketing, omnichannel messaging, chatbots, and conversational AI — one platform to reach and engage customers."
        trustItems={[
          "Official WhatsApp Business API",
          "DLT-compliant bulk SMS & OTP",
          "Omnichannel from one console",
          "Chatbots & conversational AI",
        ]}
        stats={[
          { val: "Omni", label: "Channel" },
          { val: "Official", label: "WhatsApp API" },
          { val: "DLT", label: "Compliant" },
          { val: "AI", label: "Chatbots" },
        ]}
        heroImage="/services/messaging-solutions-hero.webp"
        heroImageAlt="CPaaS Messaging Solutions"
        primaryCTA="Start Messaging"
      />
      <ServiceGrid
        badge="What We Build"
        title="Eight messaging products"
        accent="across every channel"
        description="From OTPs to AI chatbots — reach customers wherever they are with reliable, compliant messaging."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Messaging for"
        accent="every industry"
        description="Our CPaaS products power fintech, ecommerce, healthcare, edtech, logistics, and BFSI."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Engage Your Customers"
        title="Ready to reach"
        accent="customers everywhere?"
        description="Tell us how you communicate today and we'll set up the channels that fit."
        primaryCTA="Start Messaging"
        note="MJ Digital Services · WhatsApp · SMS · RCS · Email · Chatbots"
      />
    </>
  );
}