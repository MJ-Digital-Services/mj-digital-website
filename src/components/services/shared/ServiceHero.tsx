import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceHeroProps {
  badge: string;
  title: string;
  accent: string;
  description: string;
  trustItems: string[];
  stats: { val: string; label: string }[];
  heroImage: string;
  heroImageAlt: string;
  primaryCTA?: string;
  secondaryCTA?: string;
}

export default function ServiceHero({
  badge,
  title,
  accent,
  description,
  trustItems,
  stats,
  heroImage,
  heroImageAlt,
  primaryCTA = "Get Started",
  secondaryCTA = "Talk to Sales",
}: ServiceHeroProps) {
  return (
    <section className="svc-hero">
      <div className="svc-hero-inner">
        {/* Left */}
        <div className="svc-hero-left">
          <div className="svc-hero-badge">{badge}</div>
          <h1 className="svc-hero-title">
            {title}<br />
            <span className="svc-hero-accent">{accent}</span>
          </h1>
          <p className="svc-hero-sub">{description}</p>
          <div className="svc-hero-trust-list">
            {trustItems.map((t) => (
              <div key={t} className="svc-hero-trust-item">
                <CheckCircle2 size={14} />
                {t}
              </div>
            ))}
          </div>
          <div className="svc-hero-ctas">
            <Link href="/contact" className="svc-btn-primary">
              {primaryCTA} <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="svc-btn-outline">
              {secondaryCTA}
            </Link>
          </div>
        </div>

        {/* Right — image */}
        <div className="svc-hero-right">
          <div className="svc-hero-img-wrap">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="svc-hero-img"
            />
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="svc-hero-stats">
        <div className="svc-hero-stats-inner">
          {stats.map((s, i, arr) => (
            <div key={s.label} className="svc-hero-stat">
              <div className="svc-hero-stat-val">{s.val}</div>
              <div className="svc-hero-stat-label">{s.label}</div>
              {i < arr.length - 1 && <div className="svc-hero-stat-div" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}