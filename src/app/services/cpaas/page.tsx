import type { Metadata } from "next";
import CPaaSHero from "@/components/services/cpaas/CPaaSHero";
import CPaaSChannels from "@/components/services/cpaas/CPaaSChannels";
import CPaaSUseCases from "@/components/services/cpaas/CPaaSUseCases";
import CPaaSCTA from "@/components/services/cpaas/CPaaSCTA";

export const metadata: Metadata = {
  title: "CPaaS Solutions — WhatsApp, SMS, RCS & Voice APIs | MJ Digital Services",
  description: "Send WhatsApp messages, SMS, RCS, and Voice calls via MJ Digital's CPaaS platform. Transactional alerts, OTP, marketing campaigns, and chatbots — all from one API.",
  keywords: ["WhatsApp Business API India", "SMS API India", "CPaaS India", "RCS messaging", "WhatsApp OTP API", "bulk SMS API", "voice API India", "MJ Digital CPaaS"],
  openGraph: {
    title: "CPaaS Solutions — WhatsApp, SMS, RCS & Voice APIs | MJ Digital Services",
    description: "Reach customers on WhatsApp, SMS, RCS, and Voice. One platform, four channels.",
    url: "https://mjdigitalservices.com/services/cpaas",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPaaS Solutions | MJ Digital Services",
    description: "WhatsApp Business API, SMS, RCS & Voice. One platform, four channels.",
    images: ["https://mjdigitalservices.com/og-image.png"],
  },
  alternates: {
    canonical: "https://mjdigitalservices.com/services/cpaas",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CPaaS Solutions",
  description: "WhatsApp Business API, SMS, RCS, and Voice APIs for businesses in India.",
  provider: {
    "@type": "Organization",
    name: "MJ Digital Services",
    url: "https://mjdigitalservices.com",
  },
  areaServed: "IN",
  serviceType: "Communication Platform as a Service",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CPaaSHero />
      <CPaaSChannels />
      <CPaaSUseCases />
      <CPaaSCTA />
    </>
  );
}