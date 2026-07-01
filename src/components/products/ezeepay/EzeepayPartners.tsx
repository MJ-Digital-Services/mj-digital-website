import { Shield } from "lucide-react";

const partners = [
  { name: "Protean",                logo: "/partners/protean.webp" },
  { name: "Mantra",                 logo: "/partners/mantra.webp" },
  { name: "Mentation Technologies", logo: "/partners/mentation.webp" },
  { name: "Noble Web Studio",       logo: "/partners/noble-web-studio.webp" },
  { name: "CredoPay",               logo: "/partners/credopay.webp" },
  { name: "Arthmate",               logo: "/partners/arthmate.webp" },
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