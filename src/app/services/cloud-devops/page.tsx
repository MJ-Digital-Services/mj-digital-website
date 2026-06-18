import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { Cloud, GitBranch, Shield, BarChart3, Zap, Server, Building2, CreditCard, ShoppingBag, Truck, GraduationCap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud & DevOps Services — AWS, Azure, GCP | MJ Digital Services",
  description: "Cloud infrastructure setup, DevOps automation, CI/CD pipelines, Kubernetes, and 24/7 monitoring. AWS, Azure, and Google Cloud experts at MJ Digital Services.",
  keywords: ["cloud services India", "DevOps India", "AWS setup India", "Azure DevOps", "Kubernetes India", "CI/CD pipeline", "cloud infrastructure India", "MJ Digital cloud"],
  alternates: { canonical: "https://mjdigitalservices.com/services/cloud-devops" },
  openGraph: {
    title: "Cloud & DevOps Services | MJ Digital Services",
    description: "AWS, Azure, GCP infrastructure. CI/CD, Kubernetes, and 24/7 monitoring.",
    url: "https://mjdigitalservices.com/services/cloud-devops",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: Cloud,     title: "Cloud Setup & Migration",    desc: "Set up or migrate your infrastructure to AWS, Azure, or Google Cloud — with minimal downtime and maximum reliability.", features: ["AWS, Azure & GCP", "Zero-downtime migration", "Cost optimisation", "Security hardening", "Multi-region setup"] },
  { icon: GitBranch, title: "CI/CD Pipelines",           desc: "Automated build, test, and deployment pipelines that let your team ship code faster and more reliably.", features: ["GitHub Actions & Jenkins", "Automated testing", "One-click deployments", "Rollback support", "Environment management"] },
  { icon: Server,    title: "Kubernetes & Containers",   desc: "Container orchestration with Kubernetes and Docker — scalable, resilient, and easy to manage at any scale.", features: ["Kubernetes clusters", "Docker containerisation", "Auto-scaling", "Load balancing", "Health monitoring"] },
  { icon: Shield,    title: "DevSecOps",                 desc: "Security integrated into every stage of your development pipeline — from code scanning to runtime protection.", features: ["SAST & DAST scanning", "Secrets management", "IAM & access control", "Vulnerability monitoring", "Compliance reporting"] },
  { icon: BarChart3, title: "Monitoring & Observability",desc: "Full-stack monitoring, logging, alerting, and performance dashboards so you always know what's happening in production.", features: ["Real-time monitoring", "Log aggregation", "Alert management", "Performance dashboards", "Incident response"] },
  { icon: Zap,       title: "Infrastructure as Code",   desc: "Terraform, Ansible, and Pulumi-based infrastructure management — version controlled, reproducible, and audit-ready.", features: ["Terraform & Ansible", "Version controlled infra", "Environment parity", "Disaster recovery", "Auto provisioning"] },
];

const useCases = [
  { icon: CreditCard,  title: "Fintech Platforms",    desc: "High-availability infrastructure for payment platforms handling millions of transactions with 99.9% uptime requirements." },
  { icon: ShoppingBag, title: "Ecommerce",            desc: "Auto-scaling infrastructure that handles traffic spikes during sales events without downtime or performance degradation." },
  { icon: Building2,   title: "Enterprises",          desc: "Secure, compliant cloud environments for large organisations with complex infrastructure and strict data governance requirements." },
  { icon: Globe,       title: "SaaS Products",        desc: "Multi-tenant cloud architecture, database scaling, and deployment automation for SaaS companies serving thousands of users." },
  { icon: Truck,       title: "Logistics & IoT",      desc: "Real-time data processing infrastructure for logistics platforms handling GPS data, fleet telemetry, and delivery events." },
  { icon: GraduationCap,title: "EdTech",              desc: "Scalable video streaming, content delivery, and assessment infrastructure for online learning platforms." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Cloud & DevOps"
        title="Infrastructure That"
        accent="Never Fails"
        description="Cloud setup, CI/CD pipelines, Kubernetes, monitoring, and DevSecOps — built for businesses that can't afford downtime. AWS, Azure, and Google Cloud experts."
        trustItems={[
          "AWS, Azure & Google Cloud certified",
          "99.9% uptime SLA",
          "CI/CD, Kubernetes & Terraform",
          "24/7 monitoring & incident response",
        ]}
        stats={[
          { val: "3", label: "Cloud Providers" },
          { val: "99.9%", label: "Uptime SLA" },
          { val: "24/7", label: "Monitoring" },
          { val: "IaC", label: "Infrastructure as Code" },
        ]}
        heroImage="/services/cloud-devops-hero.png"
        heroImageAlt="Cloud and DevOps Services"
        primaryCTA="Set Up Your Cloud"
      />
      <ServiceGrid
        badge="What We Do"
        title="Six cloud & DevOps"
        accent="services we deliver"
        description="From cloud migration to CI/CD pipelines — we handle the infrastructure so you can focus on the product."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Help"
        title="Cloud infrastructure for"
        accent="demanding workloads"
        description="Our DevOps work supports fintech platforms, ecommerce businesses, SaaS products, and enterprises."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Get Started"
        title="Ready to modernise"
        accent="your infrastructure?"
        description="Whether you're starting from scratch or migrating an existing system — we'll design and build the right cloud setup."
        primaryCTA="Set Up Your Cloud"
        note="MJ Digital Services · AWS · Azure · GCP · Kubernetes · Terraform"
      />
    </>
  );
}