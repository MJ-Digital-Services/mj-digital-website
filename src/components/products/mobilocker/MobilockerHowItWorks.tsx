import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Install on device",
    desc: "Install the Mobilocker app on the Android device before handing it to the customer.",
  },
  {
    num: "02",
    title: "Register the EMI plan",
    desc: "Enter the customer details, EMI amount, and due dates into your retailer dashboard.",
  },
  {
    num: "03",
    title: "Hand over the device",
    desc: "Customer gets the phone. Mobilocker runs silently in the background — no interruption.",
  },
  {
    num: "04",
    title: "Auto-lock / Auto-unlock",
    desc: "Missed payment? Device locks automatically. EMI paid? Unlocks instantly. Zero effort from you.",
  },
];

const comparison = [
  { label: "EMI recovery rate",     before: "~60%",    after: "95%+" },
  { label: "Manual follow-up calls", before: "Daily",   after: "None" },
  { label: "Risk per device",       before: "High",    after: "Near zero" },
  { label: "Setup time",            before: "—",       after: "< 5 minutes" },
];

export default function MobilockerHowItWorks() {
  return (
    <section className="mlk-section">
      <div className="mlk-hiw-inner">

        {/* Left — steps */}
        <div className="mlk-hiw-left">
          <div className="mlk-label">Setup in minutes</div>
          <h2 className="mlk-title" style={{ textAlign: "left", marginBottom: 36 }}>
            Four steps to<br />
            <span className="mlk-title-accent">risk-free EMI sales</span>
          </h2>
          <div className="mlk-steps">
            {steps.map((s) => (
              <div key={s.num} className="mlk-step">
                <div className="mlk-step-num">{s.num}</div>
                <div>
                  <div className="mlk-step-title">{s.title}</div>
                  <div className="mlk-step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — before/after table */}
        <div className="mlk-hiw-right">
          <div className="mlk-compare">
            <div className="mlk-compare-hd">
              <div className="mlk-compare-label mlk-compare-label-before">Without Mobilocker</div>
              <div className="mlk-compare-label mlk-compare-label-after">With Mobilocker</div>
            </div>
            {comparison.map((c) => (
              <div key={c.label} className="mlk-compare-row">
                <div className="mlk-compare-metric">{c.label}</div>
                <div className="mlk-compare-vals">
                  <span className="mlk-compare-before">{c.before}</span>
                  <span className="mlk-compare-after">
                    <CheckCircle2 size={12} />{c.after}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}