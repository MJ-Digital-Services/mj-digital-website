import Link from "next/link";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";

export default function ApiCTA() {
  return (
    <section className="apis-cta-section">
      <div className="apis-cta-inner">
        <div className="apis-label apis-label-light">Ready to Integrate?</div>
        <h2 className="apis-cta-title">
          Start building with<br />
          <span className="apis-cta-accent">MJ Digital APIs</span>
        </h2>
        <p className="apis-cta-sub">
          Get sandbox access today. Our team will guide you from integration to go-live in 2–5 business days.
        </p>
        <div className="apis-cta-btns">
          <Link href="/contact" className="apis-cta-btn-primary">
            Get API Access <ArrowRight size={14} />
          </Link>
          <Link href="/contact" className="apis-cta-btn-outline">
            <MessageSquare size={14} /> Talk to Sales
          </Link>
        </div>
        <div className="apis-cta-contact">
          <a href="mailto:business@mjdigitalservices.com" className="apis-cta-contact-item">
            <Phone size={13} /> business@mjdigitalservices.com
          </a>
          <span className="apis-cta-contact-sep">·</span>
          <span className="apis-cta-contact-item">Mon–Sat, 9:30 AM – 6:30 PM IST</span>
        </div>
      </div>
    </section>
  );
}