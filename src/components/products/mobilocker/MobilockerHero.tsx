import Link from "next/link";
import { ExternalLink, CheckCircle2, ArrowUpRight, Lock, TrendingUp, Smartphone } from "lucide-react";
import Image from "next/image";

export default function MobilockerHero() {
  return (
    <section className="mlk-hero">
      {/* Builder ribbon */}
      <div className="mlk-ribbon">
        <div className="mlk-ribbon-inner">
          <span>Built by</span>
          <Link href="/" className="mlk-ribbon-brand">
            MJ Digital Services <ArrowUpRight size={12} />
          </Link>
          <span className="mlk-ribbon-sep" />
          <span>A product of EzeePay</span>
        </div>
      </div>

      <div className="mlk-hero-inner">
        {/* Left */}
        <div className="mlk-hero-left">
          <div className="mlk-hero-logo">
            <img src="/mobilocker-logo.png" alt="Mobilocker" />
            <span>Mobilocker</span>
          </div>

          <h1 className="mlk-hero-title">
            Sell Phones on EMI.<br />
            <span className="mlk-hero-accent">Never Fear Default.</span>
          </h1>

          <p className="mlk-hero-sub">
            India's smartest mobile EMI locker for retailers. Auto-lock devices on missed payments, auto-unlock when EMI is paid. Improve recovery from 60% to 95%.
          </p>

          <div className="mlk-hero-pills">
            <div className="mlk-hero-pill">
              <CheckCircle2 size={13} />
              Auto-lock on missed EMI
            </div>
            <div className="mlk-hero-pill">
              <CheckCircle2 size={13} />
              Auto-unlock on payment
            </div>
            <div className="mlk-hero-pill">
              <CheckCircle2 size={13} />
              95% recovery rate
            </div>
          </div>

          <div className="mlk-hero-ctas">
            <a
              href="https://mobilocker.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mlk-btn-primary"
            >
              Visit Mobilocker <ExternalLink size={14} />
            </a>
            <Link href="/contact" className="mlk-btn-outline">
              Talk to us
            </Link>
          </div>

          {/* Stats */}
          <div className="mlk-hero-stats">
            {[
              { icon: Lock,        val: "95%",    label: "Recovery Rate" },
              { icon: TrendingUp,  val: "2x",     label: "More Sales" },
              { icon: Smartphone,  val: "Android", label: "Platform" },
            ].map((s, i, arr) => (
              <div key={s.label} className="mlk-hero-stat">
                <div className="mlk-hero-stat-val">{s.val}</div>
                <div className="mlk-hero-stat-label">{s.label}</div>
                {i < arr.length - 1 && <div className="mlk-hero-stat-div" />}
              </div>
            ))}
          </div>
        </div>

        {/* Right — screenshot */}
        <div className="mlk-hero-right">
          <div className="mlk-screenshot-frame">
            <Image
              src="/products/mobilocker-screenshot.png"
              alt="Mobilocker App"
              className="mlk-screenshot-img"
              width={1600}
              height={895}
              style={{ width: "100%", height: "auto" }}
              priority
              quality={80}
            />
          </div>
          <div className="mlk-float-badge mlk-float-1">
            <div className="mlk-float-dot" />
            <div>
              <div className="mlk-float-val">60→95%</div>
              <div className="mlk-float-lbl">Recovery</div>
            </div>
          </div>
          <div className="mlk-float-badge mlk-float-2">
            <div className="mlk-float-dot" />
            <div>
              <div className="mlk-float-val">Zero Risk</div>
              <div className="mlk-float-lbl">EMI Sales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}