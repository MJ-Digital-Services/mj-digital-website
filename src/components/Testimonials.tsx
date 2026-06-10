const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, FinEdge Solutions",
    text: "MJ Digital Services transformed our fintech operations completely. Their AEPS API integration was seamless and the support team was available 24/7. Highly recommended.",
    color: "#e5182a",
  },
  {
    name: "Priya Menon",
    role: "CTO, PaySwift India",
    text: "The white label platform they built for us went live in just 3 weeks. The quality of code and architecture is enterprise-grade. Our merchants love the dashboard.",
    color: "#3b82f6",
  },
  {
    name: "Amit Verma",
    role: "Founder, RetailX",
    text: "We integrated their WhatsApp Business API for customer engagement and our conversion rate went up by 40%. The automation workflows are incredibly powerful.",
    color: "#22c55e",
  },
  {
    name: "Sunita Patel",
    role: "Director, GovTech Services",
    text: "Their team understood our government compliance requirements from day one. The KYC and Aadhaar integration was flawless and passed all audits without issues.",
    color: "#f97316",
  },
  {
    name: "Vikram Singh",
    role: "MD, NeoBank Ventures",
    text: "We've worked with many tech vendors but MJ Digital stands out for their fintech expertise. They know the regulatory landscape and build accordingly.",
    color: "#a855f7",
  },
  {
    name: "Deepa Krishnan",
    role: "VP Technology, LogiTech Corp",
    text: "The mobile app they built for our logistics platform handles 50,000+ daily transactions without a glitch. Flutter performance is outstanding.",
    color: "#06b6d4",
  },
  {
    name: "Rahul Gupta",
    role: "Co-founder, EdPay",
    text: "Their AI chatbot reduced our customer support tickets by 60% in the first month. The NLP accuracy is impressive and keeps getting better.",
    color: "#eab308",
  },
  {
    name: "Meera Joshi",
    role: "Head of Digital, InsureCo",
    text: "MJ Digital built our entire CRM from scratch. The role-based access, lead management, and reporting features are exactly what our sales team needed.",
    color: "#e5182a",
  },
  {
    name: "Arjun Nair",
    role: "CEO, QuickMerchant",
    text: "The DMT and BBPS APIs were integrated within days. The documentation is excellent and the sandbox environment made testing a breeze.",
    color: "#3b82f6",
  },
  {
    name: "Kavya Reddy",
    role: "Product Lead, HealthPay",
    text: "We needed a HIPAA-compliant document management system urgently. MJ Digital delivered Mobilocker integration in record time with zero security issues.",
    color: "#22c55e",
  },
  {
    name: "Sanjay Kapoor",
    role: "Founder, TradeEasy",
    text: "Their cloud infrastructure setup on AWS has given us 99.99% uptime. Auto-scaling during peak hours works perfectly. No downtime in 8 months.",
    color: "#f97316",
  },
  {
    name: "Nisha Agarwal",
    role: "CMO, BrandReach",
    text: "The RCS messaging campaigns they set up for us have 3x higher engagement than SMS. Their CPaaS solutions are truly next-generation.",
    color: "#a855f7",
  },
];

const colors = ["#e5182a", "#3b82f6", "#22c55e", "#f97316", "#a855f7", "#06b6d4", "#eab308"];

function getInitials(name: string) {
  return name.split(" ").map(n => n[0]).join("").slice(0, 2);
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-avatar" style={{ background: t.color }}>
          {getInitials(t.name)}
        </div>
        <div>
          <div className="testimonial-name">{t.name}</div>
          <div className="testimonial-role">{t.role}</div>
        </div>
      </div>
      <p className="testimonial-text">"{t.text}"</p>
    </div>
  );
}

function TestimonialColumn({ items, duration }: { items: typeof testimonials; duration: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="testimonials-column">
      <div className="testimonials-column-inner" style={{ animationDuration: duration }}>
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const col1 = testimonials.slice(0, 4);
  const col2 = testimonials.slice(4, 8);
  const col3 = testimonials.slice(8, 12);

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <div className="testimonials-badge">Testimonials</div>
        <h2 className="testimonials-headline">
          Loved by Businesses Across India
        </h2>
        <p className="testimonials-subtext">
          From fintech startups to enterprises — here's what our clients say about working with us.
        </p>
      </div>

      <div className="testimonials-grid">
        <TestimonialColumn items={col1} duration="25s" />
        <TestimonialColumn items={col2} duration="35s" />
        <TestimonialColumn items={col3} duration="25s" />
      </div>
    </section>
  );
}