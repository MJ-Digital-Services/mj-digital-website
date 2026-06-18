import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CPaaSCTA() {
  return (
    <section className="cpaas-cta-section">
      <div className="cpaas-cta-inner">
        <div className="cpaas-label cpaas-label-light">Start Messaging</div>
        <h2 className="cpaas-cta-title">
          Start reaching customers<br />
          <span className="cpaas-cta-accent">on WhatsApp today</span>
        </h2>
        <p className="cpaas-cta-sub">
          Get access to WhatsApp Business API, SMS, RCS, and Voice — all under one MJ Digital account. Setup in days.
        </p>
        <div className="cpaas-cta-btns">
          <Link href="/contact" className="cpaas-cta-btn-primary">
            Get API Access <ArrowRight size={14} />
          </Link>
          <Link href="/contact" className="cpaas-cta-btn-outline">
            <MessageSquare size={14} /> Talk to Sales
          </Link>
        </div>
        <div className="cpaas-cta-note">
          Backed by <strong>MJ Digital Services</strong> · Meta Business Partner
        </div>
      </div>
    </section>
  );
}