import "./service-shared.css";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

interface ServiceCTAProps {
  badge: string;
  title: string;
  accent: string;
  description: string;
  primaryCTA?: string;
  note?: string;
}

export default function ServiceCTA({
  badge,
  title,
  accent,
  description,
  primaryCTA = "Get Started",
  note,
}: ServiceCTAProps) {
  return (
    <section className="svc-cta-section">
      <div className="svc-cta-inner">
        <div className="svc-label svc-label-light">{badge}</div>
        <h2 className="svc-cta-title">
          {title}<br />
          <span className="svc-cta-accent">{accent}</span>
        </h2>
        <p className="svc-cta-sub">{description}</p>
        <div className="svc-cta-btns">
          <Link href="/contact" className="svc-cta-btn-primary">
            {primaryCTA} <ArrowRight size={14} />
          </Link>
          <Link href="/contact" className="svc-cta-btn-outline">
            <MessageSquare size={14} /> Talk to Sales
          </Link>
        </div>
        {note && <div className="svc-cta-note">{note}</div>}
      </div>
    </section>
  );
}