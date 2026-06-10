const industries = [
  { icon: "🏦", name: "Fintech & Banking" },
  { icon: "🛒", name: "Retail & Commerce" },
  { icon: "🎓", name: "Education" },
  { icon: "🏥", name: "Healthcare" },
  { icon: "🚚", name: "Logistics" },
  { icon: "🏠", name: "Real Estate" },
  { icon: "📡", name: "Telecom" },
  { icon: "🏛️", name: "Government Services" },
  { icon: "🏢", name: "MSMEs & Enterprises" },
];

export default function Industries() {
  return (
    <section className="industries-section">

      <div className="industries-header">
        <div className="industries-badge">Industries We Serve</div>
        <h2 className="industries-headline">
          Powering Businesses Across Every Sector
        </h2>
        <p className="industries-subtext">
          From fintech startups to government organizations — our solutions are built to adapt to any industry's unique challenges.
        </p>
      </div>

      <div className="industries-grid">
        {industries.map((industry) => (
          <div key={industry.name} className="industry-pill">
            <span className="industry-pill-icon">{industry.icon}</span>
            {industry.name}
          </div>
        ))}
      </div>

    </section>
  );
}