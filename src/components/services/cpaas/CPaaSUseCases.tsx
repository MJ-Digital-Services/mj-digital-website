import { Bell, ShoppingBag, CreditCard, Users, HeadphonesIcon, TrendingUp } from "lucide-react";

const useCases = [
  { icon: Bell,           title: "Transaction Alerts",      desc: "Instantly notify customers about payments, transfers, withdrawals, and account activity via WhatsApp or SMS." },
  { icon: CreditCard,     title: "OTP & Verification",      desc: "Secure two-factor authentication via SMS or WhatsApp OTP. Sub-second delivery with 98%+ success rate." },
  { icon: ShoppingBag,    title: "Order & Delivery Updates", desc: "Keep customers informed at every step — order confirmed, shipped, out for delivery, delivered." },
  { icon: Users,          title: "Customer Onboarding",     desc: "Send KYC status updates, welcome messages, and onboarding guides automatically via WhatsApp." },
  { icon: HeadphonesIcon, title: "Customer Support Bot",    desc: "Build WhatsApp chatbots that handle FAQs, balance enquiries, and support tickets without human agents." },
  { icon: TrendingUp,     title: "Marketing Campaigns",     desc: "Run targeted promotional campaigns on WhatsApp with rich media, offers, and trackable CTA buttons." },
];

export default function CPaaSUseCases() {
  return (
    <section className="cpaas-section cpaas-section-surface">
      <div className="cpaas-section-hd">
        <div className="cpaas-label">Use Cases</div>
        <h2 className="cpaas-title">
          Built for every<br />
          <span className="cpaas-title-accent">customer touchpoint</span>
        </h2>
        <p className="cpaas-desc">
          From OTP delivery to marketing campaigns — MJ Digital CPaaS handles every communication your business needs.
        </p>
      </div>
      <div className="cpaas-usecases-grid">
        {useCases.map((u) => (
          <div key={u.title} className="cpaas-usecase-card">
            <div className="cpaas-usecase-icon"><u.icon size={20} /></div>
            <h3>{u.title}</h3>
            <p>{u.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}