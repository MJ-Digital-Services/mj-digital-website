import { LucideIcon } from "lucide-react";

interface UseCase {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ServiceUseCasesProps {
  badge: string;
  title: string;
  accent: string;
  description: string;
  useCases: UseCase[];
  dark?: boolean;
}

export default function ServiceUseCases({
  badge,
  title,
  accent,
  description,
  useCases,
  dark = false,
}: ServiceUseCasesProps) {
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
      <div className="svc-usecases-grid">
        {useCases.map((u) => (
          <div key={u.title} className="svc-usecase-card">
            <div className="svc-usecase-icon"><u.icon size={20} /></div>
            <h3>{u.title}</h3>
            <p>{u.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}