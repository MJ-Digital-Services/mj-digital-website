const testimonials = [
  {
    name: "Azmarq",
    role: "Client",
    text: "Working with MJ Digital Services has been a smooth experience from start to finish. Their team understood our requirements quickly and delivered a solution that fit our workflow perfectly.",
    color: "#e5182a",
  },
  {
    name: "EzeePay",
    role: "Client",
    text: "The integration process was straightforward and well documented. Their support team has been responsive whenever we've had questions or needed adjustments.",
    color: "#3b82f6",
  },
  {
    name: "Cashlo",
    role: "Client",
    text: "MJ Digital Services brought a lot of technical depth to our project. The platform they built has held up well as our user base has grown.",
    color: "#22c55e",
  },
  {
    name: "Adkea",
    role: "Client",
    text: "Their development team was easy to collaborate with and stayed on top of deadlines throughout the project. We'd recommend them to other teams looking for reliable execution.",
    color: "#f97316",
  },
  {
    name: "Adycure",
    role: "Client",
    text: "We needed a partner who could move fast without cutting corners, and that's exactly what we got. The end result matched what we had envisioned.",
    color: "#a855f7",
  },
  {
    name: "Innovega",
    role: "Client",
    text: "From planning to deployment, the process felt organized and transparent. Their engineers asked the right questions early on, which saved us time later.",
    color: "#06b6d4",
  },
  {
    name: "Vakilgiri",
    role: "Client",
    text: "MJ Digital Services handled our project with professionalism and attention to detail. We've continued working with them on follow-up improvements since launch.",
    color: "#eab308",
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
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 5);
  const col3 = testimonials.slice(5, 7);

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
        <TestimonialColumn items={col1} duration="22s" />
        <TestimonialColumn items={col2} duration="30s" />
        <TestimonialColumn items={col3} duration="20s" />
      </div>
    </section>
  );
}