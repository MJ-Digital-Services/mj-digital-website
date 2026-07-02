import Link from "next/link";
import { ExternalLink, CheckCircle2, ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";

const stats = [
  { val: "5L+",   label: "Active Agents" },
  { val: "8.3K+", label: "Distributors" },
  { val: "100+",  label: "District Franchises" },
  { val: "60+",   label: "Digital Services" },
];

export default function EzeepayHero() {
  return (
    <>
      <div className="ezp2-ribbon">
        <div className="ezp2-ribbon-inner">
          <span>Built by</span>
          <Link href="/" className="ezp2-ribbon-brand">
            MJ Digital Services <ArrowUpRight size={12} />
          </Link>
          <span className="ezp2-ribbon-sep" />
          <span>A flagship fintech product</span>
        </div>
      </div>

      <section className="ezp2-hero">
        <div className="ezp2-hero-inner">
          <div className="ezp2-hero-left">
            <div className="ezp2-hero-logo">
              <img src="/ezeepay-logo.png" alt="EzeePay" />
              <span>EzeePay</span>
            </div>
            <h1 className="ezp2-hero-title">
              Make Your Shop a<br />
              <span className="ezp2-hero-accent">Mini ATM</span>
            </h1>
            <p className="ezp2-hero-sub">
              India's largest agent banking network. Offer 60+ digital services — AEPS, money transfer, bill payments, recharge — and earn commissions on every transaction.
            </p>
            <div className="ezp2-hero-trust">
              <CheckCircle2 size={15} style={{ color: "var(--primary)", flexShrink: 0 }} />
              Trusted by <strong>5,00,000+ agents</strong> across India
            </div>
            <div className="ezp2-hero-ctas">
              <a href="https://ezeepay.app" target="_blank" rel="noopener noreferrer" className="ezp2-btn-primary">
                Visit EzeePay <ExternalLink size={14} />
              </a>
              <a href="https://ezeepay.app" target="_blank" rel="noopener noreferrer" className="ezp2-btn-outline">
                <Download size={14} /> Download App
              </a>
            </div>
            <div className="ezp2-hero-stats">
              {stats.map((s, i) => (
                <div key={s.label} className="ezp2-hero-stat">
                  <div className="ezp2-hero-stat-val">{s.val}</div>
                  <div className="ezp2-hero-stat-label">{s.label}</div>
                  {i < stats.length - 1 && <div className="ezp2-hero-stat-div" />}
                </div>
              ))}
            </div>
          </div>

          <div className="ezp2-hero-right">
            <div className="ezp2-screenshot-frame">
              <Image
                src="/products/ezeepay-screenshot.png"
                alt="EzeePay App"
                className="ezp2-screenshot-img"
                width={1600}
                height={885}
                style={{ width: "100%", height: "auto" }}
                priority
                quality={80}
              />
            </div>
            <div className="ezp2-float-badge ezp2-float-1">
              <div className="ezp2-float-dot" />
              <div>
                <div className="ezp2-float-val">60+</div>
                <div className="ezp2-float-lbl">Services</div>
              </div>
            </div>
            <div className="ezp2-float-badge ezp2-float-2">
              <div className="ezp2-float-dot" />
              <div>
                <div className="ezp2-float-val">5L+</div>
                <div className="ezp2-float-lbl">Agents</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}