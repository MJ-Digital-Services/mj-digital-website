import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CPaaSHero() {
  return (
    <section className="cpaas-hero">
      <div className="cpaas-hero-inner">
        <div className="cpaas-hero-left">
          <div className="cpaas-hero-badge">CPaaS Solutions</div>
          <h1 className="cpaas-hero-title">
            Reach Customers on<br />
            <span className="cpaas-hero-accent">Every Channel</span>
          </h1>
          <p className="cpaas-hero-sub">
            WhatsApp, SMS, RCS, and Voice APIs for businesses. Send notifications, run campaigns, automate support — all from one platform.
          </p>
          <div className="cpaas-hero-trust-list">
            {[
              "WhatsApp Business API (Meta approved)",
              "Transactional & promotional SMS",
              "RCS messaging for rich experiences",
              "Simple REST APIs, fast integration",
            ].map((t) => (
              <div key={t} className="cpaas-hero-trust-item">
                <CheckCircle2 size={14} />
                {t}
              </div>
            ))}
          </div>
          <div className="cpaas-hero-ctas">
            <Link href="/contact" className="cpaas-btn-primary">
              Get Started <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="cpaas-btn-outline">
              Talk to Sales
            </Link>
          </div>
        </div>

        {/* Right — chat UI mockup */}
        <div className="cpaas-hero-right">
          <div className="cpaas-chat-window">
            <div className="cpaas-chat-titlebar">
              <div className="cpaas-chat-avatar">MJ</div>
              <div>
                <div className="cpaas-chat-name">MJ Digital Notify</div>
                <div className="cpaas-chat-status">
                  <span className="cpaas-chat-dot" />Online
                </div>
              </div>
            </div>
            <div className="cpaas-chat-body">
              <div className="cpaas-chat-msg cpaas-chat-msg-in">
                <div className="cpaas-chat-bubble">
                  ✅ Your transaction of <strong>₹2,000</strong> was successful.<br />
                  Ref: TXN202406181234<br />
                  <span className="cpaas-chat-time">10:32 AM</span>
                </div>
              </div>
              <div className="cpaas-chat-msg cpaas-chat-msg-in">
                <div className="cpaas-chat-bubble">
                  🎉 Your KYC is approved! You can now access all services.<br />
                  <span className="cpaas-chat-time">10:33 AM</span>
                </div>
              </div>
              <div className="cpaas-chat-msg cpaas-chat-msg-out">
                <div className="cpaas-chat-bubble cpaas-chat-bubble-out">
                  Check my balance
                  <span className="cpaas-chat-time">10:34 AM</span>
                </div>
              </div>
              <div className="cpaas-chat-msg cpaas-chat-msg-in">
                <div className="cpaas-chat-bubble">
                  💰 Your wallet balance is <strong>₹12,450</strong><br />
                  Last updated: just now<br />
                  <span className="cpaas-chat-time">10:34 AM</span>
                </div>
              </div>
              <div className="cpaas-chat-quick-replies">
                <button>Pay Bill</button>
                <button>Recharge</button>
                <button>Support</button>
              </div>
            </div>
            <div className="cpaas-chat-footer">
              <div className="cpaas-chat-input">Type a message...</div>
              <div className="cpaas-chat-send">➤</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="cpaas-hero-stats">
        <div className="cpaas-hero-stats-inner">
          {[
            { val: "4",      label: "Channels Supported" },
            { val: "98%",    label: "Delivery Rate" },
            { val: "<1s",    label: "Message Latency" },
            { val: "24/7",   label: "API Availability" },
          ].map((s, i, arr) => (
            <div key={s.label} className="cpaas-hero-stat">
              <div className="cpaas-hero-stat-val">{s.val}</div>
              <div className="cpaas-hero-stat-label">{s.label}</div>
              {i < arr.length - 1 && <div className="cpaas-hero-stat-div" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}