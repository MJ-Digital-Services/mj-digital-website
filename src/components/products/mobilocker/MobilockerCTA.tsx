import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function MobilockerCTA() {
  return (
    <section className="mlk-cta-section">
      <div className="mlk-cta-inner">
        <div className="mlk-label mlk-label-light">Start Selling Smarter</div>
        <h2 className="mlk-cta-title">
          Stop losing money<br />
          on <span className="mlk-cta-accent">missed EMIs</span>
        </h2>
        <p className="mlk-cta-sub">
          Join mobile retailers across India who've switched to risk-free EMI sales with Mobilocker. Setup takes less than 5 minutes.
        </p>
        <div className="mlk-cta-btns">
          <a
            href="https://mobilocker.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mlk-cta-btn-primary"
          >
            Visit Mobilocker.app <ExternalLink size={14} />
          </a>
          <Link href="/contact" className="mlk-cta-btn-outline">
            Talk to MJ Digital
          </Link>
        </div>
        <div className="mlk-cta-note">
          Mobilocker is a product of{" "}
          <Link href="/products/ezeepay" className="mlk-cta-note-link">EzeePay</Link>
          {" "}by{" "}
          <Link href="/" className="mlk-cta-note-link">MJ Digital Services Pvt. Ltd.</Link>
        </div>
      </div>
    </section>
  );
}