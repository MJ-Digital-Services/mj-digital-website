import type { Metadata } from "next";
import ApiSolutionsHero from "@/components/services/api-solutions/ApiSolutionsHero";
import ApiCategories from "@/components/services/api-solutions/ApiCategories";
import ApiUseCases from "@/components/services/api-solutions/ApiUseCases";
import ApiIntegration from "@/components/services/api-solutions/ApiIntegration";
import ApiCTA from "@/components/services/api-solutions/ApiCTA";

export const metadata: Metadata = {
  title: "Fintech API Solutions — AEPS, DMT, BBPS, KYC APIs | MJ Digital Services",
  description: "Production-ready fintech APIs for AEPS, DMT, BBPS, KYC verification, recharge, and FASTag. RBI & NPCI compliant. Go live in 2–5 days with sandbox access and dedicated support.",
  keywords: ["fintech API India", "AEPS API", "DMT API", "BBPS API", "KYC API", "recharge API", "FASTag API", "fintech API provider India", "MJ Digital API"],
  openGraph: {
    title: "Fintech API Solutions — AEPS, DMT, BBPS, KYC APIs | MJ Digital Services",
    description: "Production-ready fintech APIs for AEPS, DMT, BBPS, KYC verification, recharge, and FASTag. Go live in 2–5 days.",
    url: "https://www.mjdigitalservices.com/services/api-solutions",
    siteName: "MJ Digital Services",
    images: [{ url: "https://www.mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fintech API Solutions | MJ Digital Services",
    description: "AEPS, DMT, BBPS, KYC APIs. RBI compliant. Go live in 2–5 days.",
    images: ["https://www.mjdigitalservices.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.mjdigitalservices.com/services/api-solutions",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fintech API Solutions",
  description: "Production-ready fintech APIs for AEPS, DMT, BBPS, KYC verification, recharge, and FASTag recharge for India.",
  provider: {
    "@type": "Organization",
    name: "MJ Digital Services",
    url: "https://www.mjdigitalservices.com",
  },
  areaServed: "IN",
  serviceType: "Fintech API Integration",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ApiSolutionsHero />
      <ApiCategories />
      <ApiUseCases />
      <ApiIntegration />
      <ApiCTA />
    </>
  );
}