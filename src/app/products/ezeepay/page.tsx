import type { Metadata } from "next";
import EzeepayPage from "@/components/products/EzeepayPage";

export const metadata: Metadata = {
  title: "EzeePay — India's Largest Agent Banking Network | MJ Digital Services",
  description:
    "EzeePay is India's leading fintech agent platform. Become an EzeePay agent and offer AEPS, money transfer, bill payments, and 60+ digital services. Trusted by 500,000+ agents across India.",
  keywords: [
    "EzeePay",
    "AEPS agent",
    "fintech agent India",
    "become EzeePay agent",
    "money transfer agent",
    "Aadhaar enabled payment system",
    "EzeePay distributor",
    "agent banking India",
    "MJ Digital EzeePay",
  ],
  openGraph: {
    title: "EzeePay — Make Your Shop a Mini ATM",
    description:
      "Join 500,000+ agents earning with EzeePay. Offer 60+ banking and digital services from your shop and earn commissions on every transaction.",
    url: "https://mjdigitalservices.com/products/ezeepay",
    siteName: "MJ Digital Services",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EzeePay — India's Largest Agent Banking Network",
    description:
      "AEPS, money transfer, bill payments, and 60+ services. Trusted by 500,000+ agents.",
  },
  alternates: {
    canonical: "https://mjdigitalservices.com/products/ezeepay",
  },
};

export default function Page() {
  return <EzeepayPage />;
}