import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function ZokiCTA() {
  return (
    <section className="zki-cta-section">
      <div className="zki-cta-inner">
        <div className="zki-label zki-label-light">Start Earning Today</div>
        <h2 className="zki-cta-title">
          Pay smarter.<br />
          <span className="zki-cta-accent">Earn on everything.</span>
        </h2>
        <p className="zki-cta-sub">
          Join thousands of users earning ZOKI Coins and cashback on every transaction. Free to join, instant rewards.
        </p>
        <div className="zki-cta-btns">
          <a href="https://zoki-website.vercel.app" target="_blank" rel="noopener noreferrer" className="zki-cta-btn-primary">
            Visit Zoki <ExternalLink size={14} />
          </a>
          <Link href="/contact" className="zki-cta-btn-outline">Talk to MJ Digital</Link>
        </div>
        <div className="zki-cta-note">
          Zoki is a product of{" "}
          <Link href="/" className="zki-cta-note-link">MJ Digital Services Pvt. Ltd.</Link>
        </div>
      </div>
    </section>
  );
}