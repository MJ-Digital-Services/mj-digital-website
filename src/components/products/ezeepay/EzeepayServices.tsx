import { Banknote, Receipt, Plane, Smartphone, Tv, MoreHorizontal, CheckCircle2 } from "lucide-react";

const services = [
  { icon: Banknote,       title: "Banking Services",    items: ["AEPS Cash Withdrawal", "Aadhaar Pay", "Money Transfer", "Micro ATM", "Open Bank Account"] },
  { icon: Receipt,        title: "Bill Payments",       items: ["Electricity Bills", "Water Bills", "Gas Bills", "Insurance Premium", "Loan EMI"] },
  { icon: Plane,          title: "Travel Booking",      items: ["Flight Tickets", "Bus Booking", "Train Reservations", "Hotel Booking"] },
  { icon: Smartphone,     title: "Recharge & DTH",      items: ["Mobile Recharge", "DTH Recharge", "Data Card Recharge", "Landline"] },
  { icon: Tv,             title: "OTT & Subscriptions", items: ["OTT Subscriptions", "Streaming Services", "Digital Subscriptions"] },
  { icon: MoreHorizontal, title: "60+ More Services",   items: ["Insurance", "E-Governance", "Neo Banking", "PAN Card Services", "And more..."] },
];

export default function EzeepayServices() {
  return (
    <section className="ezp2-section ezp2-section-surface">
      <div className="ezp2-section-hd">
        <div className="ezp2-label">One App · Multiple Services</div>
        <h2 className="ezp2-title">60+ digital services<br /><span className="ezp2-title-accent">from a single platform</span></h2>
        <p className="ezp2-desc">From banking to bill payments, travel to entertainment — EzeePay agents offer everything from one app.</p>
      </div>
      <div className="ezp2-services-grid">
        {services.map((s) => (
          <div key={s.title} className="ezp2-service-card">
            <div className="ezp2-service-icon"><s.icon size={20} /></div>
            <h3 className="ezp2-service-title">{s.title}</h3>
            <ul className="ezp2-service-list">
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