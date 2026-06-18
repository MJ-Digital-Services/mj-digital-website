import { Smartphone, Receipt, Plane, Shield, CreditCard, MoreHorizontal, CheckCircle2 } from "lucide-react";

const services = [
  { icon: Smartphone, title: "Recharge",        items: ["Mobile Recharge", "DTH Recharge", "Data Card", "Landline"] },
  { icon: Receipt,    title: "Bill Payments",    items: ["Electricity", "Water", "Gas", "Loan EMI", "Insurance"] },
  { icon: Plane,      title: "Travel",           items: ["Flight Tickets", "Bus Booking", "Train", "Hotel Booking"] },
  { icon: Shield,     title: "Insurance",        items: ["Health Insurance", "Life Insurance", "Vehicle Insurance"] },
  { icon: CreditCard, title: "Loans & Finance",  items: ["Personal Loans", "Business Loans", "Credit Score Check"] },
  { icon: MoreHorizontal, title: "50+ More",     items: ["OTT Subscriptions", "Gaming", "Gift Cards", "And more..."] },
];

export default function ZokiServices() {
  return (
    <section className="zki-section zki-section-surface">
      <div className="zki-section-hd">
        <div className="zki-label">One App · Everything</div>
        <h2 className="zki-title">50+ services,<br /><span className="zki-title-accent">one rewards wallet</span></h2>
        <p className="zki-desc">Every transaction earns you ZOKI Coins and cashback. The more you use, the more you earn.</p>
      </div>
      <div className="zki-services-grid">
        {services.map((s) => (
          <div key={s.title} className="zki-service-card">
            <div className="zki-service-icon"><s.icon size={20} /></div>
            <h3 className="zki-service-title">{s.title}</h3>
            <ul className="zki-service-list">
              {s.items.map((item) => (
                <li key={item}><CheckCircle2 size={12} />{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}