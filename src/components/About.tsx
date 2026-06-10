import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Building2 } from "lucide-react";

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "3", label: "Flagship Products" },
  { number: "99.9%", label: "Uptime SLA" },
];

const products = [
  {
    logo: "/ezeepay-logo.png",
    name: "EzeePay",
    desc: "Fintech & AEPS Platform",
    href: "/products/ezeepay",
  },
  {
    logo: null,
    name: "Zoki",
    desc: "WhatsApp & CPaaS Platform",
    href: "/products/zoki",
  },
  {
    logo: "/mobilocker-logo.png",
    name: "Mobilocker",
    desc: "Digital Storage & Security",
    href: "/products/mobilocker",
  },
];

export default function About() {
  return (
    <section className="about-section">
      <div className="about-inner">

        {/* Left — text */}
        <div>
          <div className="about-badge">About Us</div>
          <h2 className="about-headline">
            Transforming Ideas into Scalable Digital Solutions
          </h2>
          <p className="about-desc">
            MJ Digital Services is the technology arm and parent company behind innovative digital platforms including EzeePay, Zoki, and Mobilocker.
          </p>
          <p className="about-desc">
            With expertise across software development, fintech infrastructure, APIs, cloud technologies, artificial intelligence, and enterprise solutions, we help businesses accelerate growth through technology-driven innovation.
          </p>

          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — dark card */}
        <div className="about-card">
          <div className="about-card-label">Our Flagship Products</div>

          {products.map((product, i) => (
            <div key={product.name}>
              <Link href={product.href} className="about-product-row">
                <div className="about-product-icon" style={{backgroundColor: 'white'}}>
                  {product.logo ? (
                    <Image src={product.logo} alt={product.name} width={28} height={28} style={{ objectFit: "contain", backgroundColor: 'white' }} />
                  ) : (
                    <MessageSquare size={18} />
                  )}
                </div>
                <div>
                  <div className="about-product-name">{product.name}</div>
                  <div className="about-product-desc">{product.desc}</div>
                </div>
              </Link>
              {i < products.length - 1 && <div className="about-card-divider" />}
            </div>
          ))}

          <div className="about-card-footer">
            <Building2 size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
            <span className="about-card-footer-text">
              Serving startups, enterprises, and government-focused organizations across India.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}