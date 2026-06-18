import { Lock, Unlock, Bell, BarChart3, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Auto-Lock on Missed EMI",
    desc: "Device automatically locks when a customer misses their EMI due date. No manual intervention needed — it just works.",
  },
  {
    icon: Unlock,
    title: "Auto-Unlock on Payment",
    desc: "As soon as the EMI is paid, the device unlocks instantly. Seamless experience for honest customers.",
  },
  {
    icon: Bell,
    title: "Payment Reminders",
    desc: "Automated SMS and app reminders sent to customers before the due date. Reduce missed payments before they happen.",
  },
  {
    icon: BarChart3,
    title: "Recovery Dashboard",
    desc: "Track all your EMI devices, payment statuses, and recovery rates from a single retailer dashboard.",
  },
  {
    icon: Shield,
    title: "Zero Risk Financing",
    desc: "Sell high-end smartphones confidently. If they don't pay, the device stops working — your inventory is always protected.",
  },
  {
    icon: Smartphone,
    title: "Works on Any Android",
    desc: "Compatible with all Android devices. No special hardware required — install the app and you're ready to sell on EMI.",
  },
];

export default function MobilockerFeatures() {
  return (
    <section className="mlk-section mlk-section-surface">
      <div className="mlk-section-hd">
        <div className="mlk-label">How It Works</div>
        <h2 className="mlk-title">
          Smart EMI protection<br />
          <span className="mlk-title-accent">built for retailers</span>
        </h2>
        <p className="mlk-desc">
          Mobilocker sits silently on every device you sell on EMI. Customers pay on time, device works fine. They miss — it locks. Simple.
        </p>
      </div>
      <div className="mlk-features-grid">
        {features.map((f) => (
          <div key={f.title} className="mlk-feature-card">
            <div className="mlk-feature-icon">
              <f.icon size={20} />
            </div>
            <h3 className="mlk-feature-title">{f.title}</h3>
            <p className="mlk-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}