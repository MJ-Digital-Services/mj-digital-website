import { Shield } from "lucide-react";

const partners = [
  { name: "Protean",                logo: "/partners/protean.png" },
  { name: "Mantra",                 logo: "/partners/mantra.png" },
  { name: "Mentation Technologies", logo: "/partners/mentation.png" },
  { name: "Noble Web Studio",       logo: "/partners/noble-web-studio.png" },
  { name: "CredoPay",               logo: "/partners/credopay.png" },
  { name: "Arthmate",               logo: "/partners/arthmate.png" },
];

export default function EzeepayPartners() {
  return (
    <section className="ezp2-section">
      <div className="ezp2-section-hd">
        <div className="ezp2-label">Trust & Partnerships</div>
        <h2 className="ezp2-title">Backed by India's leading<br /><span className="ezp2-title-accent">technology partners</span></h2>
      </div>
      <div className="ezp2-partners-grid">
        {partners.map((p) => (
          <div key={p.name} className="ezp2-partner-card">
            <img src={p.logo} alt={`${p.name} logo`} />
          </div>
        ))}
      </div>
      <div className="ezp2-trust-strip">
        <Shield size={15} />
        Registered with <strong>Dun &amp; Bradstreet</strong> · Lending partnership with <strong>Arthmate</strong>
      </div>
    </section>
  );
}