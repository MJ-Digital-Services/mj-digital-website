import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutPillars from "@/components/about/AboutPillars";
import AboutFounder from "@/components/about/AboutFounder";
import AboutValues from "@/components/about/AboutValues";

export const metadata: Metadata = {
  title: "About Us | MJ Digital Services",
  description: "MJ Digital Services is a Noida-based technology company building fintech infrastructure, APIs, mobile apps, and digital products including EzeePay, Zoki, and Mobilocker. Trusted by 50+ clients since 2007.",
  keywords: ["about MJ Digital Services", "fintech company India", "software development Noida", "EzeePay parent company", "Zoki parent company", "Mobilocker parent company", "MJ Digital Services founder"],
  openGraph: {
    title: "About MJ Digital Services | Building Technology That Powers Businesses",
    description: "Technology and innovation company delivering software solutions, fintech APIs, and digital products. Trusted by 50+ clients across India.",
    url: "https://mjdigitalservices.com/about",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MJ Digital Services",
    description: "Building fintech infrastructure, software, and digital products that power businesses.",
    images: ["https://mjdigitalservices.com/og-image.png"],
  },
  alternates: {
    canonical: "https://mjdigitalservices.com/about",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MJ Digital Services",
  url: "https://mjdigitalservices.com",
  logo: "https://mjdigitalservices.com/og-image.png",
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "business@mjdigitalservices.com",
    contactType: "customer support",
  },
  description: "MJ Digital Services is a technology and innovation company delivering fintech infrastructure, APIs, mobile apps, and digital products including EzeePay, Zoki, and Mobilocker.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <AboutHero />
      <AboutStory />
      <AboutPillars />
      <AboutFounder />
      <AboutValues />
    </>
  );
}