import Link from "next/link";
import { ExternalLink, CheckCircle2, ArrowUpRight, Coins, Zap, Gift } from "lucide-react";

export default function ZokiHero() {
  return (
    <>
      <div className="zki-ribbon">
        <div className="zki-ribbon-inner">
          <span>Built by</span>
          <Link href="/" className="zki-ribbon-brand">
            MJ Digital Services <ArrowUpRight size={12} />
          </Link>
          <span className="zki-ribbon-sep" />
          <span>A flagship rewards platform</span>
        </div>
      </div>

      <section className="zki-hero">
        <div className="zki-hero-inner">

          {/* Left */}
          <div className="zki-hero-left">
            <div className="zki-hero-logo">
              <img src="/zoki-logo.jpg" alt="Zoki" />
              <span>Zoki</span>
            </div>

            <h1 className="zki-hero-title">
              Recharge. Pay. Earn.<br />
              <span className="zki-hero-accent">Repeat.</span>
            </h1>

            <p className="zki-hero-sub">
              India's all-in-one rewards app. Recharges, bill payments, loans, insurance, and bookings — with cashback and ZOKI Coins on every transaction.
            </p>

            <div className="zki-hero-pills">
              <div className="zki-hero-pill"><CheckCircle2 size={13} />50+ services in one app</div>
              <div className="zki-hero-pill"><CheckCircle2 size={13} />Earn ZOKI Coins</div>
              <div className="zki-hero-pill"><CheckCircle2 size={13} />Cashback on everything</div>
            </div>

            <div className="zki-hero-ctas">
              <a href="https://zoki-website.vercel.app" target="_blank" rel="noopener noreferrer" className="zki-btn-primary">
                Visit Zoki <ExternalLink size={14} />
              </a>
              <Link href="/contact" className="zki-btn-outline">
                Talk to us
              </Link>
            </div>

            <div className="zki-hero-stats">
              {[
                { icon: Zap,   val: "50+",  label: "Services" },
                { icon: Coins, val: "ZOKI", label: "Coins Rewards" },
                { icon: Gift,  val: "₹0",   label: "Joining Fee" },
              ].map((s, i, arr) => (
                <div key={s.label} className="zki-hero-stat">
                  <div className="zki-hero-stat-val">{s.val}</div>
                  <div className="zki-hero-stat-label">{s.label}</div>
                  {i < arr.length - 1 && <div className="zki-hero-stat-div" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="zki-hero-right">
            <div className="zki-screenshot-frame">
              <img src="/products/zoki-screenshot.png" alt="Zoki App" className="zki-screenshot-img" />
            </div>
            <div className="zki-float-badge zki-float-1">
              <div className="zki-float-dot" />
              <div>
                <div className="zki-float-val">50+</div>
                <div className="zki-float-lbl">Services</div>
              </div>
            </div>
            <div className="zki-float-badge zki-float-2">
              <div className="zki-float-dot" />
              <div>
                <div className="zki-float-val">Free</div>
                <div className="zki-float-lbl">To Join</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}