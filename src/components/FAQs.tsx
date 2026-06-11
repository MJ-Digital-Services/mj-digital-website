"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What services does MJ Digital Services offer?",
    answer: "We offer a full spectrum of technology services including fintech API integration, CPaaS solutions (WhatsApp, SMS, RCS), web and mobile app development, AI chatbots, white label fintech platforms, CRM/ERP development, and cloud & DevOps infrastructure. We are a one-stop technology partner for startups, enterprises, and government organizations.",
  },
  {
    question: "How long does it take to integrate your fintech APIs?",
    answer: "Most of our fintech APIs — including AEPS, DMT, BBPS, KYC, and PAN verification — can be integrated within 2 to 5 business days. We provide comprehensive documentation, a sandbox environment for testing, and dedicated technical support throughout the integration process.",
  },
  {
    question: "Do you offer white label solutions?",
    answer: "Yes. Our white label fintech platform lets you launch your own branded merchant portal, digital wallet, or payment aggregation platform in as little as 2 weeks. Everything is fully customizable — from branding and UI to feature sets and user roles.",
  },
  {
    question: "What is EzeePay and who is it for?",
    answer: "EzeePay is our flagship fintech platform designed for merchants, distributors, and retailers. It provides AEPS cash withdrawal, domestic money transfer, utility bill payments, mobile recharge, and Aadhaar-based services — all in one app. It is ideal for last-mile financial service providers across India.",
  },
  {
    question: "Can you build a custom mobile app for my business?",
    answer: "Absolutely. We build native and cross-platform mobile apps for Android and iOS using Flutter and React Native. Whether you need a fintech app, a customer portal, or an enterprise tool, our team handles everything from design and development to QA, deployment, and ongoing maintenance.",
  },
  {
    question: "What kind of support do you provide after delivery?",
    answer: "We provide dedicated post-delivery support including bug fixes, performance monitoring, feature updates, and 24/7 infrastructure monitoring for critical systems. Every client gets a dedicated account manager and access to our support team with guaranteed response times under 2 hours.",
  },
  {
    question: "How do I get started with MJ Digital Services?",
    answer: "Simply reach out to us at business@mjdigitalservices.com or click the 'Let's Talk' button on our website. We'll schedule a discovery call to understand your requirements, propose a solution, and share a detailed project plan with timelines and pricing.",
  },
  {
    question: "Do you work with government organizations?",
    answer: "Yes. We have experience building compliance-ready solutions for government-focused organizations. Our platforms support Aadhaar-based KYC, government API integrations, and data security standards required for public sector projects.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faqs-section">

      <div className="faqs-header">
        <div className="faqs-badge">FAQs</div>
        <h2 className="faqs-headline">Frequently Asked Questions</h2>
        <p className="faqs-subtext">
          Everything you need to know about MJ Digital Services, our products, and how we work.
        </p>
      </div>

      <div className="faqs-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
            <button className="faq-trigger" onClick={() => toggle(i)}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span className="faq-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="faq-question">{faq.question}</span>
              </div>
              <div className="faq-icon">
                <Plus size={14} />
              </div>
            </button>
            <div className="faq-answer-wrapper">
              <div className="faq-answer-inner">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}