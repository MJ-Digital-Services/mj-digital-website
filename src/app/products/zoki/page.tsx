import type { Metadata } from "next";
import ZokiHero from "@/components/products/zoki/ZokiHero";
import ZokiServices from "@/components/products/zoki/ZokiServices";
import ZokiRewards from "@/components/products/zoki/ZokiRewards";
import ZokiCTA from "@/components/products/zoki/ZokiCTA";

export const metadata: Metadata = {
  title: "Zoki — India's Smart Rewards & Financial Services App | MJ Digital Services",
  description: "Zoki is India's all-in-one rewards app for recharges, bill payments, loans, insurance, and bookings. Earn cashback and ZOKI Coins on every transaction — 50+ services in one app.",
  keywords: ["Zoki app", "recharge rewards app", "bill payment cashback", "ZOKI Coins", "India rewards app", "smart financial services app", "recharge with rewards", "MJ Digital Zoki"],
  openGraph: {
    title: "Zoki — Recharge, Pay Bills, Earn Rewards & Grow Your Income",
    description: "Pay, earn & grow with every transaction. Recharges, bills, loans, insurance & bookings — with cashback and ZOKI Coins on everything.",
    url: "https://www.mjdigitalservices.com/products/zoki",
    siteName: "MJ Digital Services",
    images: [{ url: "https://www.mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoki — India's Smart Rewards App",
    description: "50+ services in one app. Earn cashback and ZOKI Coins on every transaction.",
    images: ["https://www.mjdigitalservices.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.mjdigitalservices.com/products/zoki",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Zoki",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Android, iOS",
  description: "Zoki is India's all-in-one rewards app for recharges, bill payments, loans, insurance, and bookings with cashback on every transaction.",
  url: "https://www.mjdigitalservices.com/products/zoki",
  publisher: {
    "@type": "Organization",
    name: "MJ Digital Services",
    url: "https://www.mjdigitalservices.com",
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
      <ZokiHero />
      <ZokiServices />
      <ZokiRewards />
      <ZokiCTA />
    </>
  );
}