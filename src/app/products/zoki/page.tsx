import type { Metadata } from "next";
import ZokiPage from "@/components/products/ZokiPage";

export const metadata: Metadata = {
  title: "Zoki — India's Smart Rewards & Financial Services App | MJ Digital Services",
  description:
    "Zoki is India's all-in-one rewards app for recharges, bill payments, loans, insurance, and bookings. Earn cashback and ZOKI Coins on every transaction — 50+ services in one app.",
  keywords: [
    "Zoki app",
    "recharge rewards app",
    "bill payment cashback",
    "ZOKI Coins",
    "India rewards app",
    "smart financial services app",
    "recharge with rewards",
    "MJ Digital Zoki",
  ],
  openGraph: {
    title: "Zoki — Recharge, Pay Bills, Earn Rewards & Grow Your Income",
    description:
      "Pay, earn & grow with every transaction. Recharges, bills, loans, insurance & bookings — with cashback and ZOKI Coins on everything.",
    url: "https://mjdigitalservices.com/products/zoki",
    siteName: "MJ Digital Services",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoki — India's Smart Rewards App",
    description:
      "50+ services in one app. Earn cashback and ZOKI Coins on every transaction.",
  },
  alternates: {
    canonical: "https://mjdigitalservices.com/products/zoki",
  },
};

export default function Page() {
  return <ZokiPage />;
}