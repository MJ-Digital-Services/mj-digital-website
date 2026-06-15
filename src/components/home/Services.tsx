"use client";

import type { ElementType } from "react";
import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Globe,
  LayoutDashboard,
  MessageSquare,
  Smartphone,
} from "lucide-react";

const services = [
  {
    id: "api-solutions",
    icon: Code2,
    label: "APIS",
    title: "API Solutions",
    description:
      "Integrate powerful fintech APIs into your platform — AEPS, DMT, BBPS, KYC, PAN verification, bank account validation, and more. Built for reliability with 99.9% uptime SLA.",
    features: [
      "AEPS Cash Withdrawal",
      "Domestic Money Transfer",
      "BBPS Bill Payments",
      "PAN & Aadhaar KYC",
      "Bank Account Verification",
    ],
    href: "/services/api-solutions",
    image: "/api-solution.png",
  },
  {
    id: "cpaas",
    icon: MessageSquare,
    label: "COMMUNICATION",
    title: "CPaaS Solutions",
    description:
      "Send transactional messages, marketing campaigns, and real-time alerts via WhatsApp, SMS, RCS, and Voice. Reach your customers on every channel they use.",
    features: [
      "WhatsApp Business API",
      "Bulk SMS Gateway",
      "RCS Messaging",
      "IVR & Voice Calls",
      "Campaign Analytics",
    ],
    href: "/services/cpaas",
    image: "/cpass-solution.png",
  },
  {
    id: "web-dev",
    icon: Globe,
    label: "DEVELOPMENT",
    title: "Web Development",
    description:
      "From corporate websites to complex fintech portals, we build fast, SEO-optimised, and scalable web applications using Next.js, React, and modern tech stacks.",
    features: [
      "Next.js & React",
      "Fintech Portals",
      "Ecommerce Platforms",
      "Admin Dashboards",
      "SEO Optimised",
    ],
    href: "/services/web-development",
    image: "/web-development.png",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    label: "DEVELOPMENT",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for Android and iOS. We build fintech apps, customer portals, and enterprise tools with Flutter and React Native.",
    features: [
      "Flutter & React Native",
      "iOS & Android",
      "Fintech Mobile Apps",
      "Offline Support",
      "Push Notifications",
    ],
    href: "/services/mobile-apps",
    image: "/mobile-app-development.png",
  },
  {
    id: "white-label",
    icon: LayoutDashboard,
    label: "FINTECH",
    title: "White Label Fintech",
    description:
      "Launch your own branded fintech platform in weeks. Our white label solutions include merchant portals, digital wallets, and payment aggregation platforms.",
    features: [
      "Merchant Portal",
      "Digital Wallet",
      "Payment Aggregation",
      "Custom Branding",
      "Multi-tenant Architecture",
    ],
    href: "/services/white-label-fintech",
    image: "/white-label-fintech.png",
  },
  {
    id: "ai",
    icon: Bot,
    label: "EMERGING TECH",
    title: "AI Chatbots & Automation",
    description:
      "Deploy intelligent chatbots and AI-powered automation workflows. Reduce support costs, qualify leads automatically, and deliver 24/7 customer service.",
    features: [
      "NLP Chatbots",
      "WhatsApp AI Agent",
      "Lead Qualification",
      "Workflow Automation",
      "Custom LLM Integration",
    ],
    href: "/services/ai-solutions",
    image: "/ai-chatbot-automation.png",
  },
  {
    id: "crm-erp",
    icon: Database,
    label: "ENTERPRISE",
    title: "CRM / ERP Development",
    description:
      "Custom CRM and ERP systems built for your exact business processes. Manage leads, inventory, billing, HR, and operations in one unified platform.",
    features: [
      "Custom CRM",
      "Inventory Management",
      "Billing & Invoicing",
      "HR Management",
      "Role-based Access",
    ],
    href: "/services/crm-erp",
    image: "/crm-platform.png",
  },
  {
    id: "cloud",
    icon: Cloud,
    label: "INFRASTRUCTURE",
    title: "Cloud & DevOps",
    description:
      "AWS and Azure cloud infrastructure, CI/CD pipelines, containerisation with Docker and Kubernetes, and 24/7 monitoring to keep your systems running.",
    features: [
      "AWS & Azure",
      "CI/CD Pipelines",
      "Docker & Kubernetes",
      "24/7 Monitoring",
      "Auto Scaling",
    ],
    href: "/services/cloud-devops",
    image: "/cloud-devops.png",
  },
];

function ServiceVisual({
  image,
  title,
  icon: Icon,
}: {
  image?: string;
  title: string;
  icon: ElementType;
}) {
  return (
    <div className="svc-visual">
      {image ? (
        <img src={image} alt={title} className="svc-visual-img" />
      ) : (
        <div className="svc-visual-empty">
          <Icon size={42} />
          <span>{title}</span>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const activeService = services[active];
  const ActiveIcon = activeService.icon;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const stageY = useTransform(scrollYProgress, [0, 1], [26, -26]);
  const imageY = useTransform(scrollYProgress, [0, 1], [42, -42]);
  const progressScale = useTransform(scrollYProgress, [0.12, 0.88], [0, 1]);

  const snapPoints = useMemo(
    () => services.map((_, index) => index / Math.max(services.length - 1, 1)),
    []
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrubbed = Math.min(0.9, Math.max(0.1, latest));
    const localProgress = (scrubbed - 0.1) / 0.8;
    const nextActive = Math.round(localProgress * (services.length - 1));
    setActive(Math.min(services.length - 1, Math.max(0, nextActive)));
  });

  return (
    <section ref={sectionRef} className="svc-section">
      <div className="svc-pin">
        <div className="svc-header">
          <div className="svc-badge">What We Build</div>
          <h2 className="svc-headline">Services That Drive Growth</h2>
          <p className="svc-subtext">
            From fintech APIs to AI solutions — everything your business needs to
            scale in the digital economy.
          </p>
        </div>

        <motion.div className="svc-stage" style={{ y: stageY }}>
          <div className="svc-copy">
            <div className="svc-progress" aria-hidden="true">
              <motion.span style={{ scaleY: progressScale }} />
            </div>

            <div className="svc-index">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  className={`svc-index-item${active === index ? " active" : ""}`}
                  onClick={() => setActive(index)}
                  aria-label={`Show ${service.title}`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{service.title}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeService.id}
              className="svc-content"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="svc-step-badge">
                <ActiveIcon size={14} />
                {activeService.label}
              </div>

              <h3 className="svc-step-title">{activeService.title}</h3>
              <p className="svc-step-desc">{activeService.description}</p>

              <div className="svc-step-features">
                {activeService.features.map((feature) => (
                  <div key={feature} className="svc-step-feature">
                    <CheckCircle2 size={13} />
                    {feature}
                  </div>
                ))}
              </div>

              <Link href={activeService.href} className="svc-step-link">
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          <div className="svc-panel">
            <motion.div
              key={activeService.id}
              className="svc-panel-inner"
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.965 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
            >
              <ServiceVisual
                image={activeService.image}
                title={activeService.title}
                icon={activeService.icon}
              />
            </motion.div>

            <div className="svc-panel-meta">
              <span>
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </span>
              <div className="svc-panel-dots">
                {snapPoints.map((_, index) => (
                  <button
                    key={services[index].id}
                    type="button"
                    className={`svc-dot${active === index ? " active" : ""}`}
                    onClick={() => setActive(index)}
                    aria-label={`Show ${services[index].title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="svc-mobile-list">
          {services.map((service) => (
            <article key={service.id} className="svc-mobile-card">
              <ServiceVisual
                image={service.image}
                title={service.title}
                icon={service.icon}
              />

              <div className="svc-step-badge">
                <service.icon size={14} />
                {service.label}
              </div>
              <h3 className="svc-step-title">{service.title}</h3>
              <p className="svc-step-desc">{service.description}</p>

              <div className="svc-step-features">
                {service.features.map((feature) => (
                  <div key={feature} className="svc-step-feature">
                    <CheckCircle2 size={13} />
                    {feature}
                  </div>
                ))}
              </div>

              <Link href={service.href} className="svc-step-link">
                Learn More <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
