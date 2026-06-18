import type { Metadata } from "next";
import EzeepayHero from "@/components/products/ezeepay/EzeepayHero";
import EzeepayServices from "@/components/products/ezeepay/EzeepayServices";
import EzeepayBenefits from "@/components/products/ezeepay/EzeepayBenefits";
import EzeepayTiers from "@/components/products/ezeepay/EzeepayTiers";
import EzeepayPartners from "@/components/products/ezeepay/EzeepayPartners";
import EzeepayPageCTA from "@/components/products/ezeepay/EzeepayPageCTA";

export const metadata: Metadata = {
  title: "EzeePay — India's Largest Agent Banking Network | MJ Digital Services",
  description: "EzeePay is India's leading fintech agent platform. Become an EzeePay agent and offer AEPS, money transfer, bill payments, and 60+ digital services. Trusted by 500,000+ agents across India.",
  keywords: ["EzeePay", "AEPS agent", "fintech agent India", "become EzeePay agent", "money transfer agent", "Aadhaar enabled payment system", "EzeePay distributor", "agent banking India", "MJ Digital EzeePay"],
  openGraph: {
    title: "EzeePay — Make Your Shop a Mini ATM",
    description: "Join 500,000+ agents earning with EzeePay. Offer 60+ banking and digital services from your shop and earn commissions on every transaction.",
    url: "https://mjdigitalservices.com/products/ezeepay",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EzeePay — India's Largest Agent Banking Network",
    description: "AEPS, money transfer, bill payments, and 60+ services. Trusted by 500,000+ agents.",
    images: ["https://mjdigitalservices.com/og-image.png"],
  },
  alternates: {
    canonical: "https://mjdigitalservices.com/products/ezeepay",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EzeePay",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Android, iOS",
  description: "EzeePay is India's leading fintech agent platform offering AEPS, money transfer, bill payments, and 60+ digital services.",
  url: "https://mjdigitalservices.com/products/ezeepay",
  publisher: {
    "@type": "Organization",
    name: "MJ Digital Services",
    url: "https://mjdigitalservices.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <EzeepayHero />
      <EzeepayServices />
      <EzeepayBenefits />
      <EzeepayTiers />
      <EzeepayPartners />
      <EzeepayPageCTA />
    </>
  );
}