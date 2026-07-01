import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { Cloud, Server, Boxes, GitBranch, Rocket, Building2, ShoppingBag, CreditCard, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud & DevOps Services — AWS, Azure, GCP & CI/CD | MJ Digital Services",
  description: "Cloud infrastructure on AWS, Azure, and Google Cloud, plus DevOps implementation and CI/CD automation. Reliable, scalable cloud delivery by MJ Digital Services.",
  keywords: ["AWS solutions", "Azure solutions", "Google Cloud solutions", "DevOps implementation", "CI/CD automation", "cloud infrastructure India", "DevOps services"],
  alternates: { canonical: "https://www.mjdigitalservices.com/services/cloud-devops" },
  openGraph: {
    title: "Cloud & DevOps Services | MJ Digital Services",
    description: "AWS, Azure, GCP infrastructure, DevOps & CI/CD automation.",
    url: "https://www.mjdigitalservices.com/services/cloud-devops",
    siteName: "MJ Digital Services",
    images: [{ url: "https://www.mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: Cloud,     title: "AWS Solutions",         desc: "Design, deploy, and manage cloud infrastructure on Amazon Web Services.", features: ["Architecture & migration", "Auto-scaling", "Managed databases", "Cost optimisation"] },
  { icon: Server,    title: "Azure Solutions",       desc: "Build and run workloads on Microsoft Azure with security and scale built in.", features: ["Azure architecture", "App & DB services", "Identity & access", "Monitoring"] },
  { icon: Boxes,     title: "Google Cloud Solutions",desc: "Deploy scalable infrastructure and data workloads on Google Cloud Platform.", features: ["GCP architecture", "Kubernetes (GKE)", "Data & analytics", "Cost control"] },
  { icon: GitBranch, title: "DevOps Implementation", desc: "Adopt end-to-end DevOps practices and tooling for consistent, repeatable delivery.", features: ["Infrastructure as code", "Containerisation", "Monitoring & logging", "Release management"] },
  { icon: Rocket,    title: "CI/CD Automation",      desc: "Automate build, test, and deployment pipelines for faster, safer releases.", features: ["Automated pipelines", "Test automation", "Zero-downtime deploys", "Rollback strategy"] },
];

const useCases = [
  { icon: Rocket,     title: "Startups",   desc: "Set up scalable, cost-efficient cloud infrastructure from day one." },
  { icon: Cloud,      title: "SaaS",       desc: "Run multi-tenant SaaS with auto-scaling, CI/CD, and monitoring." },
  { icon: CreditCard, title: "Fintech",    desc: "Deploy secure, compliant infrastructure with automated, auditable releases." },
  { icon: ShoppingBag,title: "Ecommerce",  desc: "Handle traffic spikes with auto-scaling and reliable deployments." },
  { icon: Building2,  title: "Enterprises",desc: "Migrate workloads and standardise delivery with DevOps practices." },
  { icon: Code2,      title: "Agencies",   desc: "Offload infrastructure and CI/CD so your team ships, not firefights." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Cloud & DevOps"
        title="Ship Faster on"
        accent="the Cloud"
        description="Cloud infrastructure on AWS, Azure, and Google Cloud, plus DevOps implementation and CI/CD automation — reliable, scalable delivery for modern products."
        trustItems={[
          "AWS, Azure & Google Cloud",
          "Infrastructure as code",
          "Automated CI/CD pipelines",
          "Monitoring & cost control",
        ]}
        stats={[
          { val: "AWS·Azure", label: "·GCP" },
          { val: "IaC", label: "Automated" },
          { val: "CI/CD", label: "Pipelines" },
          { val: "Zero-DT", label: "Deploys" },
        ]}
        heroImage="/services/cloud-devops-hero.webp"
        heroImageAlt="Cloud & DevOps Services"
        primaryCTA="Talk to an Engineer"
      />
      <ServiceGrid
        badge="What We Build"
        title="Five ways to run"
        accent="reliably in the cloud"
        description="From cloud architecture to automated pipelines — infrastructure and delivery that scales without surprises."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Cloud & DevOps for"
        accent="every team"
        description="We support startups, SaaS, fintech, ecommerce, enterprises, and agencies."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Modernise Your Delivery"
        title="Ready to ship"
        accent="faster and safer?"
        description="Tell us about your stack and we'll map a cloud and CI/CD setup that fits."
        primaryCTA="Talk to an Engineer"
        note="MJ Digital Services · AWS · Azure · GCP · DevOps · CI/CD"
      />
    </>
  );
}