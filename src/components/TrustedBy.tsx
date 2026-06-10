import Image from "next/image";

const logos = [
  { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "MongoDB", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
  { name: "Flutter", src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.svg" },
  { name: "Firebase", src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
  { name: "Razorpay", src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" },
  { name: "WhatsApp", src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
  { name: "Twilio", src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" },
  { name: "Cashfree", src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Cashfree_Logo.svg" },
  { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { name: "Node.js", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Docker", src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
];

// Duplicate for seamless infinite loop
const allLogos = [...logos, ...logos];

export default function TrustedBy() {
  return (
    <section className="trustedby-section">
      <p className="trustedby-label">Powered by world-class technology</p>

      <div className="trustedby-track-wrapper">
        {/* Left fade */}
        <div className="trustedby-fade trustedby-fade-left" />

        <div className="trustedby-track">
          {allLogos.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="trustedby-logo">
              <img
                src={logo.src}
                alt={logo.name}
                height={28}
                style={{ height: 28, width: "auto", maxWidth: 100, objectFit: "contain", opacity: 0.55, filter: "grayscale(1)" }}
              />
            </div>
          ))}
        </div>

        {/* Right fade */}
        <div className="trustedby-fade trustedby-fade-right" />
      </div>
    </section>
  );
}