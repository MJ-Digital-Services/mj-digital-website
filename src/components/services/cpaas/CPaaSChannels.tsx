import { CheckCircle2 } from "lucide-react";

const channels = [
  {
    emoji: "💬",
    title: "WhatsApp Business API",
    tag: "Most Popular",
    tagColor: "#22c55e",
    desc: "Send transactional messages, OTPs, payment alerts, and run marketing campaigns on WhatsApp — India's most used messaging app.",
    features: ["Transactional & promotional messages", "Rich media — images, docs, videos", "Interactive buttons & quick replies", "Chatbot & automation support", "Verified business profile"],
  },
  {
    emoji: "📱",
    title: "SMS API",
    tag: "High Volume",
    tagColor: "#3b82f6",
    desc: "Reliable transactional and promotional SMS delivery across all Indian networks. DLT registered, TRAI compliant.",
    features: ["Transactional SMS (OTP, alerts)", "Promotional campaigns", "All Indian operators", "DLT & TRAI compliant", "Delivery reports & analytics"],
  },
  {
    emoji: "✨",
    title: "RCS Messaging",
    tag: "Next Gen",
    tagColor: "#a855f7",
    desc: "Rich Communication Services — the evolution of SMS. Send branded messages with images, carousels, and action buttons.",
    features: ["Rich media messages", "Branded sender ID", "Interactive carousels", "Read receipts", "Fallback to SMS"],
  },
  {
    emoji: "📞",
    title: "Voice API",
    tag: "Automation",
    tagColor: "#ea580c",
    desc: "Automated voice calls for OTP verification, payment reminders, alerts, and IVR workflows — in multiple Indian languages.",
    features: ["OTP via voice call", "Payment reminders", "IVR workflows", "Multi-language support", "Call analytics"],
  },
];

export default function CPaaSChannels() {
  return (
    <section className="cpaas-section">
      <div className="cpaas-section-hd">
        <div className="cpaas-label">Channels</div>
        <h2 className="cpaas-title">
          Four channels.<br />
          <span className="cpaas-title-accent">One platform.</span>
        </h2>
        <p className="cpaas-desc">
          Reach your customers wherever they are — WhatsApp, SMS, RCS, or Voice. One API integration, all channels.
        </p>
      </div>
      <div className="cpaas-channels-grid">
        {channels.map((c) => (
          <div key={c.title} className="cpaas-channel-card">
            <div className="cpaas-channel-top">
              <div className="cpaas-channel-emoji">{c.emoji}</div>
              <div
                className="cpaas-channel-tag"
                style={{ color: c.tagColor, background: `${c.tagColor}12`, borderColor: `${c.tagColor}30` }}
              >
                {c.tag}
              </div>
            </div>
            <h3 className="cpaas-channel-title">{c.title}</h3>
            <p className="cpaas-channel-desc">{c.desc}</p>
            <ul className="cpaas-channel-features">
              {c.features.map((f) => (
                <li key={f}>
                  <CheckCircle2 size={12} style={{ color: c.tagColor }} />
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