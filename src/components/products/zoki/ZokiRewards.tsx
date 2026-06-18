import { Coins, TrendingUp, Gift, Users } from "lucide-react";

const rewards = [
  {
    icon: Coins,
    title: "ZOKI Coins on Every Transaction",
    desc: "Every recharge, bill payment, or booking earns you ZOKI Coins. Redeem them for cashback, discounts, or more services.",
  },
  {
    icon: TrendingUp,
    title: "Cashback That Compounds",
    desc: "The more services you use, the higher your cashback tier. Power users unlock premium rates automatically.",
  },
  {
    icon: Gift,
    title: "Referral Rewards",
    desc: "Invite friends and earn ZOKI Coins every time they transact. Your network literally pays you back.",
  },
  {
    icon: Users,
    title: "Zero Joining Fee",
    desc: "Sign up for free. No hidden charges, no subscription. Just download, register, and start earning from transaction one.",
  },
];

export default function ZokiRewards() {
  return (
    <section className="zki-section">
      <div className="zki-section-hd">
        <div className="zki-label">Rewards Program</div>
        <h2 className="zki-title">Every rupee spent<br /><span className="zki-title-accent">works harder for you</span></h2>
        <p className="zki-desc">Zoki's rewards system is built to give back. Not just points — real cashback, real value.</p>
      </div>
      <div className="zki-rewards-grid">
        {rewards.map((r) => (
          <div key={r.title} className="zki-reward-card">
            <div className="zki-reward-icon"><r.icon size={20} /></div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}