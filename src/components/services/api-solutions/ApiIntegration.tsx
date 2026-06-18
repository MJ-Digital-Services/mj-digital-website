const steps = [
  {
    num: "01",
    title: "Contact & Onboarding",
    desc: "Reach out to our team. We'll understand your use case, share pricing, and initiate your KYC & business verification.",
  },
  {
    num: "02",
    title: "Get Sandbox Credentials",
    desc: "Receive your sandbox API key and secret. Access our full API documentation and start testing with mock responses — no real money involved.",
  },
  {
    num: "03",
    title: "Integrate & Test",
    desc: "Integrate our REST APIs into your platform. Our technical team is available on WhatsApp and email throughout your integration.",
  },
  {
    num: "04",
    title: "Go Live in 2–5 Days",
    desc: "Once testing is complete and compliance checks pass, receive your production credentials and go live. Real transactions, real commissions.",
  },
];

const compliance = [
  { label: "RBI Compliant",  desc: "Authorised BC operations, data residency India" },
  { label: "NPCI Certified", desc: "Certified for AEPS, BBPS, and UPI flows" },
  { label: "Aadhaar Ready",  desc: "UIDAI & STQC certified biometric integration" },
  { label: "AML/CFT",        desc: "Anti-money laundering compliance built-in" },
  { label: "Data Residency", desc: "All data stored exclusively within India" },
  { label: "99.9% SLA",      desc: "Enterprise-grade uptime with multi-bank failover" },
];

export default function ApiIntegration() {
  return (
    <>
      {/* Integration steps */}
      <section className="apis-section">
        <div className="apis-section-hd">
          <div className="apis-label">Integration Process</div>
          <h2 className="apis-title">
            Go live in<br />
            <span className="apis-title-accent">4 simple steps</span>
          </h2>
          <p className="apis-desc">
            From first contact to production in 2–5 business days. Our team handles the complexity — you focus on your product.
          </p>
        </div>
        <div className="apis-steps">
          {steps.map((s, i) => (
            <div key={s.num} className="apis-step">
              <div className="apis-step-num">{s.num}</div>
              {i < steps.length - 1 && <div className="apis-step-line" />}
              <div className="apis-step-body">
                <div className="apis-step-title">{s.title}</div>
                <div className="apis-step-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance */}
      <section className="apis-section apis-section-dark">
        <div className="apis-section-hd">
          <div className="apis-label apis-label-light">Security & Compliance</div>
          <h2 className="apis-title apis-title-light">
            Enterprise-grade security.<br />
            <span className="apis-title-accent-light">Full regulatory compliance.</span>
          </h2>
          <p className="apis-desc apis-desc-light">
            Every API call is secured with asymmetric cryptography. Your data and transactions are always protected.
          </p>
        </div>
        <div className="apis-compliance-grid">
          {compliance.map((c) => (
            <div key={c.label} className="apis-compliance-card">
              <div className="apis-compliance-label">{c.label}</div>
              <div className="apis-compliance-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}