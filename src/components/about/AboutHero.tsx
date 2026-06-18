const stats = [
  { value: "2007", label: "Founded" },
  { value: "50+",  label: "Clients Served" },
  { value: "3",    label: "Digital Products" },
  { value: "9+",   label: "Industries" },
];

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-glow" />
      <div className="about-hero-inner">
        <div className="about-hero-badge">About Us</div>
        <h1 className="about-hero-title">
          Building Technology That{" "}
          <span className="about-hero-title-accent">Powers Businesses</span>
        </h1>
        <p className="about-hero-sub">
          MJ Digital Services is a technology and innovation company delivering
          software solutions, fintech infrastructure, APIs, mobile applications,
          cloud platforms, and digital transformation services for startups,
          enterprises, and government-focused organizations.
        </p>
        <div className="about-hero-stats">
          {stats.map((s) => (
            <div key={s.label} className="about-hero-stat">
              <div className="about-hero-stat-value">{s.value}</div>
              <div className="about-hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}