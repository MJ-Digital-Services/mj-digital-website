"use client";
import "./services-showcase.css";

import type { ElementType } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "motion/react";
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

const SLIDE_DURATION = 5000; // ms each service stays on screen

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
    image: "/svg/api-solutions.svg",
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
    image: "/svg/cpass-solution.svg",
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
    image: "/svg/web-development.svg",
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
    image: "/svg/mobile-app-development.svg",
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
    image: "/svg/white-label-fintech.svg",
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
    image: "/svg/ai-chatbot-automation.svg",
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
    image: "/svg/crm-platform.svg",
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
    image: "/svg/cloud-devops.svg",
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
  return image ? (
    <img src={image} alt={title} className="swb-img" />
  ) : (
    <div className="swb-img-empty">
      <Icon size={42} />
      <span>{title}</span>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: "some" });

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0); // 0..100 for the live render
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const progressRef = useRef(0); // mirrors progress without re-running the effect

  const activeService = services[active];
  const ActiveIcon = activeService.icon;

  // Respect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Keep the latest flags readable by the loop without restarting it
  const flags = useRef({ paused: false, inView: false, reduceMotion: false });
  useEffect(() => {
    flags.current = { paused, inView, reduceMotion };
  }, [paused, inView, reduceMotion]);

  // One persistent autoplay loop — mounts once, never tears down
  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      last = now;

      const { paused, inView, reduceMotion } = flags.current;
      if (inView && !paused && !reduceMotion) {
        let next = progressRef.current + (dt / SLIDE_DURATION) * 100;
        if (next >= 100) {
          next = 0;
          setActive((a) => (a + 1) % services.length);
        }
        progressRef.current = next;
        setProgress(next);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const goTo = (index: number) => {
    progressRef.current = 0;
    setProgress(0);
    setActive(index);
  };

  const fillWidth = (index: number) =>
    active === index ? `${progress}%` : index < active ? "100%" : "0%";

  return (
    <section ref={sectionRef} className="swb-section">
      <div className="swb-inner">
        <div className="swb-header">
          <div className="swb-header-left">
            <div className="swb-badge">What We Build</div>
            <h2 className="swb-headline">Services That Drive Growth</h2>
          </div>
          <p className="swb-subtext">
            From fintech APIs to AI solutions — everything your business needs to
            scale in the digital economy.
          </p>
        </div>

        <div
          className="swb-stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* LEFT — index + copy */}
          <div className="swb-copy">
            <div className="swb-index">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  className={`swb-index-item${active === index ? " active" : ""}`}
                  onClick={() => goTo(index)}
                  aria-label={`Show ${service.title}`}
                >
                  <span className="swb-index-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="swb-index-name">{service.title}</span>
                  <span className="swb-index-track" aria-hidden="true">
                    <span
                      className="swb-index-fill"
                      style={{ width: fillWidth(index) }}
                    />
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                className="swb-content"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
              >
                <div className="swb-step-badge">
                  <ActiveIcon size={14} />
                  {activeService.label}
                </div>
                <h3 className="swb-step-title">{activeService.title}</h3>
                <p className="swb-step-desc">{activeService.description}</p>

                <div className="swb-features">
                  {activeService.features.map((feature) => (
                    <div key={feature} className="swb-feature">
                      <CheckCircle2 size={13} />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link href={activeService.href} className="swb-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — panel */}
          <div className="swb-panel">
            <div className="swb-segments" aria-hidden="true">
              {services.map((service, index) => (
                <span key={service.id} className="swb-segment">
                  <span
                    className="swb-segment-fill"
                    style={{ width: fillWidth(index) }}
                  />
                </span>
              ))}
            </div>

            <div className="swb-frame">
              <AnimatePresence>
                <motion.div
                  key={activeService.id}
                  className="swb-frame-slide"
                  initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.6, ease: "easeInOut" },
                    scale: {
                      duration: reduceMotion ? 0 : SLIDE_DURATION / 1000,
                      ease: "linear",
                    },
                  }}
                >
                  <ServiceVisual
                    image={activeService.image}
                    title={activeService.title}
                    icon={activeService.icon}
                  />
                </motion.div>
              </AnimatePresence>

              <span
                key={`shine-${active}`}
                className="swb-shine"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* MOBILE — stacked cards (no autoplay) */}
        <div className="swb-mobile-list">
          {services.map((service) => (
            <article key={service.id} className="swb-mobile-card">
              <div className="swb-frame">
                <ServiceVisual
                  image={service.image}
                  title={service.title}
                  icon={service.icon}
                />
              </div>

              <div className="swb-step-badge">
                <service.icon size={14} />
                {service.label}
              </div>
              <h3 className="swb-step-title">{service.title}</h3>
              <p className="swb-step-desc">{service.description}</p>

              <div className="swb-features">
                {service.features.map((feature) => (
                  <div key={feature} className="swb-feature">
                    <CheckCircle2 size={13} />
                    {feature}
                  </div>
                ))}
              </div>

              <Link href={service.href} className="swb-link">
                Learn More <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}