import { Code2, MessageSquare, Globe } from "lucide-react";

const chips = [
  { icon: Code2,         title: "Fintech APIs" },
  { icon: MessageSquare, title: "CPaaS Solutions" },
  { icon: Globe,         title: "Web & Mobile" },
];

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-glow" />
      <div className="contact-hero-inner">
        <div className="contact-hero-badge">Get In Touch</div>
        <h1 className="contact-hero-title">
          Let&apos;s Build Something{" "}
          <span className="contact-hero-title-accent">Together</span>
        </h1>
        <p className="contact-hero-sub">
          Tell us what you&apos;re building. Whether it&apos;s a fintech API integration,
          a mobile app, or a full platform — we&apos;ll get back to you within 24 hours.
        </p>
        <div className="contact-hero-chips">
          {chips.map((c) => (
            <div key={c.title} className="contact-hero-chip">
              <c.icon size={14} color="var(--primary)" />
              {c.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}