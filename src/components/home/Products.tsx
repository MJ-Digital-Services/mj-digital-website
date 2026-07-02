import Link from "next/link";
import { ArrowRight, Zap, MessageSquare, Lock } from "lucide-react";

const products = [
  {
    icon: Zap,
    badge: "Fintech Platform",
    title: "EzeePay",
    description: "A comprehensive fintech platform offering AEPS, money transfer, utility bill payments, recharge services, and Aadhaar-based services for merchants and distributors.",
    features: ["AEPS Cash Withdrawal", "Domestic Money Transfer", "Utility Bill Payments", "Recharge Services", "Aadhaar Services"],
    href: "/products/ezeepay",
    image: "/products/ezeepay-screenshot.png",
  },
  {
    icon: MessageSquare,
    badge: "CPaaS Platform",
    title: "Zoki",
    description: "A powerful WhatsApp engagement and marketing automation platform. Reach, engage, and convert customers through intelligent communication workflows.",
    features: ["WhatsApp Engagement", "Marketing Automation", "Customer Communication", "Lead Management", "Campaign Analytics"],
    href: "/products/zoki",
    image: "/products/zoki-screenshot.png",
  },
  {
    icon: Lock,
    badge: "Digital Storage",
    title: "Mobilocker",
    description: "A secure digital storage and document management platform. Store, verify, and manage important documents with enterprise-grade security.",
    features: ["Digital Storage", "Secure Verification", "Document Management", "Data Security", "Easy Retrieval"],
    href: "/products/mobilocker",
    image: "/products/mobilocker-screenshot.png",
  },
];

export default function Products() {
  return (
    <section className="products-section">

      <div className="products-header">
        <div className="products-badge">Our Products</div>
        <h2 className="products-headline">
          Flagship Products Built for Scale
        </h2>
        <p className="products-subtext">
          Three powerful platforms — each solving a distinct problem in fintech, communication, and digital infrastructure.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.title} className="product-card">

            {/* Placeholder image */}
            <div className="product-card-image">
              {product.image ? (
                <img src={product.image} alt={product.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div className="product-card-image-placeholder">
                  <product.icon size={32} color="rgba(255,255,255,0.4)" />
                  <span>{product.title} — Screenshot coming soon</span>
                </div>
              )}
            </div>

            <div className="product-card-body">
              <div className="product-card-badge">{product.badge}</div>
              <div className="product-card-title">{product.title}</div>
              <p className="product-card-desc">{product.description}</p>

              <div className="product-card-features">
                {product.features.map((f) => (
                  <div key={f} className="product-card-feature">
                    <div className="product-card-feature-dot" />
                    {f}
                  </div>
                ))}
              </div>

              <Link href={product.href} className="product-card-link" aria-label={`Learn more about ${product.title}`}>
                Learn More <ArrowRight size={13} />
              </Link>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}