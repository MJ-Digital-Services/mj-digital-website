import {
  Code2, Globe, Smartphone, Bot,
  LayoutDashboard, Cpu, MessageSquare,
} from "lucide-react";

export const serviceGroups = [
  {
    label: "FINTECH & APIs",
    items: [
      {
        name: "API Solutions",
        description: "AEPS, DMT, BBPS, KYC APIs",
        fullName: "AEPS, DMT, BBPS & KYC APIs",
        tooltipItems: [
          { term: "AEPS", desc: "Aadhaar Enabled Payment System — cash withdrawal, balance inquiry, mini statement, and banking transactions using Aadhaar authentication." },
          { term: "DMT", desc: "Domestic Money Transfer — instant bank-to-bank transfers across India." },
          { term: "BBPS", desc: "Bharat Bill Payment System — unified utility bill payments." },
          { term: "KYC APIs", desc: "Know Your Customer APIs — digital identity verification and onboarding." },
        ],
        href: "/services/api-solutions",
        icon: Code2,
      },
      {
        name: "White Label Fintech",
        description: "Merchant & Wallet Platforms",
        fullName: "White Label Fintech Platforms",
        tooltip: "Fully branded merchant and digital wallet platforms you can launch under your own brand, built on our fintech infrastructure.",
        href: "/services/white-label-fintech",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "COMMUNICATION",
    items: [
      {
        name: "CPaaS Solutions",
        description: "WhatsApp, SMS, RCS & Voice",
        fullName: "WhatsApp Business API, SMS, RCS & Voice",
        tooltipItems: [
          { term: "WhatsApp Business API", desc: "Customer messaging and support over WhatsApp." },
          { term: "SMS", desc: "Short Message Service — bulk and transactional texts." },
          { term: "RCS", desc: "Rich Communication Services — branded interactive messaging." },
          { term: "Voice", desc: "Voice Communication Solutions — calls and IVR." },
        ],
        href: "/services/cpaas",
        icon: MessageSquare,
      },
    ],
  },
  {
    label: "DEVELOPMENT",
    items: [
      {
        name: "Web Development",
        description: "Corporate, Ecommerce & Portals",
        fullName: "Corporate, Ecommerce & Portal Websites",
        tooltip: "Custom-built corporate websites, ecommerce stores, and customer/admin portals tailored to your business needs.",
        href: "/services/web-development",
        icon: Globe,
      },
      {
        name: "Mobile App Development",
        description: "Android, iOS & Flutter",
        fullName: "Android, iOS & Flutter Apps",
        tooltip: "Native Android and iOS apps, or cross-platform apps built with Flutter for faster delivery across both platforms.",
        href: "/services/mobile-apps",
        icon: Smartphone,
      },
      {
        name: "CRM / ERP Development",
        description: "Custom enterprise software",
        fullName: "CRM & ERP Software",
        tooltip: "CRM (Customer Relationship Management) for sales and support pipelines, and ERP (Enterprise Resource Planning) for unified operations, inventory, and finance management.",
        href: "/services/crm-erp",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "EMERGING TECH",
    items: [
      {
        name: "AI Solutions",
        description: "Chatbots, Voice AI & Automation",
        fullName: "AI Chatbots, Voice AI & Automation",
        tooltip: "AI Chatbots for customer support, Voice AI Assistants for call handling, and Business Process Automation to cut manual work.",
        href: "/services/ai-solutions",
        icon: Bot,
      },
      {
        name: "Cloud & DevOps",
        description: "AWS, Azure, CI/CD pipelines",
        fullName: "AWS, Azure & CI/CD Pipelines",
        tooltip: "Amazon Web Services (AWS) and Microsoft Azure infrastructure, with CI/CD (Continuous Integration & Continuous Deployment) pipelines for reliable, automated releases.",
        href: "/services/cloud-devops",
        icon: Cpu,
      },
    ],
  },
];

export const products = [
  { name: "EzeePay", description: "AEPS, Money Transfer, Utility & Recharge", href: "/products/ezeepay", logo: "/ezeepay-logo.png" },
  { name: "Zoki", description: "Fastag Solution & Car Care Services", href: "/products/zoki", logo: "/zoki-logo.jpg" },
  { name: "Mobilocker", description: "Secure Device Protection & Insurance Services", href: "/products/mobilocker", logo: "/mobilocker-logo.png" },
  { name: "Cashlo", description: "UPI Cashpoint Platform for Every Shopkeeper", href: "https://cashlo.vercel.app/", logo: "/cashlo-logo.png" },
];