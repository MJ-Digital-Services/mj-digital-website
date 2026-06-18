import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ApiSolutionsHero() {
  return (
    <section className="apis-hero">
      <div className="apis-hero-inner">

        {/* Left */}
        <div className="apis-hero-left">
          <div className="apis-hero-badge">Fintech API Solutions</div>
          <h1 className="apis-hero-title">
            Fintech APIs<br />
            <span className="apis-hero-accent">Built for India</span>
          </h1>
          <p className="apis-hero-sub">
            Power your platform with production-ready APIs for AEPS, DMT, BBPS, KYC, and more. Go live in 2–5 days with dedicated integration support.
          </p>

          <div className="apis-hero-trust-list">
            {[
              "RBI & NPCI compliant infrastructure",
              "Sandbox environment for testing",
              "Dedicated integration support",
              "2–5 day go-live timeline",
            ].map((t) => (
              <div key={t} className="apis-hero-trust-item">
                <CheckCircle2 size={14} />
                {t}
              </div>
            ))}
          </div>

          <div className="apis-hero-ctas">
            <Link href="/contact" className="apis-btn-primary">
              Get API Access <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="apis-btn-outline">
              Talk to Sales
            </Link>
          </div>
        </div>

        {/* Right — clean code block, no floating badges */}
        <div className="apis-hero-right">
          <div className="apis-code-window">
            <div className="apis-code-titlebar">
              <div className="apis-code-dots">
                <span /><span /><span />
              </div>
              <div className="apis-code-filename">aeps-cashout.js</div>
            </div>
            <pre className="apis-code-body">{`// Initialize MJ Digital API
const mj = new MJDigitalAPI({
  apiKey: process.env.MJ_API_KEY,
  env: "sandbox"
});

// AEPS Cash Withdrawal
const result = await mj.aeps.cashout({
  aadhaarNumber: "XXXX XXXX 1234",
  amount: 2000,
  agentCode: "AGT001"
});

console.log(result.status);
// "success"`}</pre>
            <div className="apis-code-footer">
              <div className="apis-code-status">
                <div className="apis-code-status-dot" />
                Transaction Successful · ₹2,000
              </div>
              <div className="apis-code-tag">sandbox</div>
            </div>
          </div>
        </div>

      </div>

      {/* Stats strip */}
      <div className="apis-hero-stats">
        <div className="apis-hero-stats-inner">
          {[
            { val: "6+",    label: "API Categories" },
            { val: "99.9%", label: "Uptime SLA" },
            { val: "2–5",   label: "Days to Go Live" },
            { val: "400+",  label: "Banks Supported" },
          ].map((s, i, arr) => (
            <div key={s.label} className="apis-hero-stat">
              <div className="apis-hero-stat-val">{s.val}</div>
              <div className="apis-hero-stat-label">{s.label}</div>
              {i < arr.length - 1 && <div className="apis-hero-stat-div" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}