import { SiMongodb, SiFlutter, SiFirebase, SiWhatsapp, SiReact, SiNextdotjs, SiNodedotjs, SiDocker, SiRazorpay } from "react-icons/si";

const iconLogos = [
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Flutter", Icon: SiFlutter },
  { name: "Firebase", Icon: SiFirebase },
  { name: "WhatsApp", Icon: SiWhatsapp },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Docker", Icon: SiDocker },
  { name: "Razorpay", Icon: SiRazorpay },
];

const imageLogos = [
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "Twilio", src: "/logos/twilio.svg" },
  { name: "Cashfree", src: "/logos/cashfree.svg" },
];

const allLogos = [...iconLogos, ...imageLogos, ...iconLogos, ...imageLogos];

export default function TrustedBy() {
  return (
    <section className="trustedby-section">
      <p className="trustedby-label">Powered by world-class technology</p>
      <div className="trustedby-track-wrapper">
        <div className="trustedby-fade trustedby-fade-left" />
        <div className="trustedby-track">
          {allLogos.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="trustedby-logo">
              {"Icon" in logo ? (
                <logo.Icon size={28} style={{ opacity: 0.55, filter: "grayscale(1)" }} aria-label={logo.name} />
              ) : (
                <img
                  src={logo.src}
                  alt={logo.name}
                  height={28}
                  loading="lazy"
                  style={{ height: 28, width: "auto", maxWidth: 100, objectFit: "contain", opacity: 0.55, filter: "grayscale(1)" }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="trustedby-fade trustedby-fade-right" />
      </div>
    </section>
  );
}