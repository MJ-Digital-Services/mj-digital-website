import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | MJ Digital Services",
  description: "Get in touch with MJ Digital Services. Whether you need fintech APIs, software development, mobile apps, or cloud infrastructure — our team is ready to help.",
  keywords: ["contact MJ Digital Services", "fintech API inquiry", "software development India", "get a quote", "MJ Digital Services contact"],
  openGraph: {
    title: "Contact Us | MJ Digital Services",
    description: "Reach out to MJ Digital Services for fintech APIs, software development, mobile apps, and cloud solutions.",
    url: "https://mjdigitalservices.com/contact",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | MJ Digital Services",
    description: "Reach out to MJ Digital Services for fintech APIs, software development, mobile apps, and cloud solutions.",
    images: ["https://mjdigitalservices.com/og-image.png"],
  },
  alternates: {
    canonical: "https://mjdigitalservices.com/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact MJ Digital Services",
  url: "https://mjdigitalservices.com/contact",
  description: "Get in touch with MJ Digital Services for fintech APIs, software development, mobile apps, and cloud solutions.",
  publisher: {
    "@type": "Organization",
    name: "MJ Digital Services",
    url: "https://mjdigitalservices.com",
    email: "business@mjdigitalservices.com",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPage />
    </>
  );
}