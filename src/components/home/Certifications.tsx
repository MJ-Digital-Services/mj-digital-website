const certifications = [
  { name: "Business Correspondent Federation of India", logo: "/certifications/bcfi.jpeg" },
  { name: "D-U-N-S Registered", logo: "/certifications/duns.png" },
  { name: "Internet and Mobile Association of India", logo: "/certifications/iamai.png" },
  { name: "ISO 27001 Certified", logo: "/certifications/iso-27001.png" },
  { name: "ISO 9001:2015 Certified", logo: "/certifications/iso-9001.png" },
];

export default function Certifications() {
  return (
    <section className="cert-section">
      <div className="cert-label">Certified & Trusted By</div>
      <div className="cert-grid">
        {certifications.map((c) => (
          <div key={c.name} className="cert-item" title={c.name}>
            <img src={c.logo} alt={c.name} className="cert-logo" />
          </div>
        ))}
      </div>
    </section>
  );
}