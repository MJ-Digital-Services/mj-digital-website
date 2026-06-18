import { Store, Users, Building2, Code2, Plane, CreditCard } from "lucide-react";

const useCases = [
  {
    icon: Store,
    title: "Kirana & Retail Stores",
    desc: "Turn any shop into a mini-ATM. Offer AEPS cash withdrawal, DMT, and bill payments to walk-in customers and earn commissions.",
  },
  {
    icon: Users,
    title: "BC Agents & CSP Networks",
    desc: "Become a banking point for your community. Power your agent network with AEPS, DMT, and BBPS under your own brand.",
  },
  {
    icon: Building2,
    title: "NBFCs & MFIs",
    desc: "Automate KYC verification, enable loan disbursements via DMT, and collect repayments through BBPS — all via one API.",
  },
  {
    icon: Code2,
    title: "Fintech Startups",
    desc: "Launch your own fintech product without building infrastructure from scratch. Focus on your product — we handle the plumbing.",
  },
  {
    icon: Plane,
    title: "Travel & Recharge Portals",
    desc: "Add mobile recharge, DTH, and FASTag top-up to your existing travel or e-commerce platform with minimal integration effort.",
  },
  {
    icon: CreditCard,
    title: "White Label Resellers",
    desc: "Resell our API suite under your own brand. Full white-label support with your logo, domain, and commission structure.",
  },
];

export default function ApiUseCases() {
  return (
    <section className="apis-section apis-section-surface">
      <div className="apis-section-hd">
        <div className="apis-label">Use Cases</div>
        <h2 className="apis-title">
          Built for every fintech<br />
          <span className="apis-title-accent">business model</span>
        </h2>
        <p className="apis-desc">
          Whether you're a kirana store owner or a funded fintech startup — our APIs fit your business.
        </p>
      </div>
      <div className="apis-usecases-grid">
        {useCases.map((u) => (
          <div key={u.title} className="apis-usecase-card">
            <div className="apis-usecase-icon"><u.icon size={20} /></div>
            <h3>{u.title}</h3>
            <p>{u.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}