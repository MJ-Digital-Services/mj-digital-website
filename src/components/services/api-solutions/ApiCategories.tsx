import { CheckCircle2 } from "lucide-react";

const categories = [
  {
    tag: "BC APIs",
    title: "AEPS — Aadhaar Enabled Payment System",
    desc: "Enable biometric cash withdrawals, balance enquiries, and mini statements using Aadhaar authentication. No debit card or PIN required.",
    features: ["Cash Withdrawal", "Balance Enquiry", "Mini Statement", "Aadhaar Pay", "eKYC"],
    color: "var(--primary)",
  },
  {
    tag: "Payment APIs",
    title: "DMT — Domestic Money Transfer",
    desc: "Instant money transfer to 400+ banks across India via IMPS and NEFT. High success rates with real-time transaction status.",
    features: ["IMPS Transfer", "NEFT Transfer", "400+ Banks", "Real-time Status", "T+0 Settlement"],
    color: "#2563eb",
  },
  {
    tag: "Payment APIs",
    title: "BBPS — Bharat Bill Payment System",
    desc: "Integrate bill payments for electricity, gas, water, DTH, broadband, insurance, loan EMIs, and 200+ biller categories.",
    features: ["200+ Billers", "Electricity & Gas", "Loan EMI", "DTH & Broadband", "24/7 Availability"],
    color: "#059669",
  },
  {
    tag: "Verification APIs",
    title: "KYC & Identity Verification",
    desc: "Complete KYC suite — PAN, Aadhaar, Bank Account, GST, Driving Licence, Voter ID, Vehicle RC, and 15+ more verification APIs.",
    features: ["PAN Verification", "Bank Account", "GST Verification", "Driving Licence", "Voter ID"],
    color: "#7c3aed",
  },
  {
    tag: "Payment APIs",
    title: "Recharge & DTH",
    desc: "Mobile recharge, DTH recharge, data card, and landline recharge for all major operators. Real-time confirmation on every transaction.",
    features: ["Mobile Recharge", "DTH Recharge", "Data Card", "All Operators", "Instant Confirmation"],
    color: "#ea580c",
  },
  {
    tag: "Payment APIs",
    title: "FASTag Recharge",
    desc: "NETC-compliant FASTag wallet recharge for all major banks. Enable toll payment top-ups directly from your platform.",
    features: ["All Bank FASTags", "NETC Compliant", "Instant Top-up", "Vehicle Lookup", "Balance Check"],
    color: "#0891b2",
  },
];

export default function ApiCategories() {
  return (
    <section className="apis-section">
      <div className="apis-section-hd">
        <div className="apis-label">API Catalogue</div>
        <h2 className="apis-title">
          Everything your fintech needs,<br />
          <span className="apis-title-accent">one integration away</span>
        </h2>
        <p className="apis-desc">
          Six categories of production-ready APIs — all under one agreement, one set of credentials, one support team.
        </p>
      </div>

      <div className="apis-categories-grid">
        {categories.map((c) => (
          <div key={c.title} className="apis-category-card">
            <div className="apis-category-top">
              <div
                className="apis-category-tag"
                style={{ color: c.color, background: `${c.color}12`, borderColor: `${c.color}30` }}
              >
                {c.tag}
              </div>
              <h3 className="apis-category-title">{c.title}</h3>
              <p className="apis-category-desc">{c.desc}</p>
            </div>
            <ul className="apis-category-features">
              {c.features.map((f) => (
                <li key={f}>
                  <CheckCircle2 size={12} style={{ color: c.color }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}