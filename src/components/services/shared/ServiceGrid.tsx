import { CheckCircle2, LucideIcon } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  features: string[];
  color?: string;
}

interface ServiceGridProps {
  badge: string;
  title: string;
  accent: string;
  description: string;
  services: ServiceItem[];
  dark?: boolean;
}

export default function ServiceGrid({
  badge,
  title,
  accent,
  description,
  services,
  dark = false,
}: ServiceGridProps) {
  return (
    <section className={`svc-section ${dark ? "svc-section-surface" : ""}`}>
      <div className="svc-shared-hd">
        <div className="svc-label">{badge}</div>
        <h2 className="svc-title">
          {title}<br />
          <span className="svc-title-accent">{accent}</span>
        </h2>
        <p className="svc-desc">{description}</p>
      </div>
      <div className="svc-shared-grid">
        {services.map((s) => (
          <div key={s.title} className="svc-shared-card">
            <div
              className="svc-shared-icon"
              style={s.color ? { background: `${s.color}12`, color: s.color } : {}}
            >
              <s.icon size={20} />
            </div>
            <h3 className="svc-shared-card-title">{s.title}</h3>
            <p className="svc-shared-card-desc">{s.desc}</p>
            <ul className="svc-shared-features">
              {s.features.map((f) => (
                <li key={f}>
                  <CheckCircle2 size={12} style={s.color ? { color: s.color } : {}} />
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