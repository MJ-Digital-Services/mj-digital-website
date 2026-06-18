import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function EzeepayPageCTA() {
  return (
    <section className="ezp2-cta-section">
      <div className="ezp2-cta-inner">
        <div className="ezp2-label ezp2-label-light">Start Earning Today</div>
        <h2 className="ezp2-cta-title">
          Ready to make your shop<br />a <span className="ezp2-cta-accent">Mini ATM?</span>
        </h2>
        <p className="ezp2-cta-sub">
          Join 5,00,000+ agents earning with EzeePay. Sign up, download the app, and start serving customers from day one.
        </p>
        <div className="ezp2-cta-btns">
          <a href="https://ezeepay.app" target="_blank" rel="noopener noreferrer" className="ezp2-cta-btn-primary">
            Visit EzeePay.app <ExternalLink size={14} />
          </a>
          <Link href="/contact" className="ezp2-cta-btn-outline">Talk to MJ Digital</Link>
        </div>
        <div className="ezp2-cta-note">
          EzeePay is a product of{" "}
          <Link href="/" className="ezp2-cta-note-link">MJ Digital Services Pvt. Ltd.</Link>
        </div>
      </div>
    </section>
  );
}