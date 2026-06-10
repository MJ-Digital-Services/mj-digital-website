import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="cta-section">
      <div className="cta-inner">

        <div className="cta-badge">
          Let's Build Together
        </div>

        <h2 className="cta-headline">
          Ready to Transform Your<br />
          Business with Technology?
        </h2>

        <p className="cta-subtext">
          Whether you need a fintech API, a mobile app, an AI chatbot, or a full digital platform — we build it end to end. Let's talk about your project.
        </p>

        <div className="cta-buttons">
          <Link href="/contact" className="cta-btn-primary">
            <MessageCircle size={15} />
            Let's Talk
          </Link>
          <Link href="/services" className="cta-btn-outline">
            View Services <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}