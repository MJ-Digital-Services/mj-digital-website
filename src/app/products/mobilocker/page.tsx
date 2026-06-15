import type { Metadata } from "next";
import MobilockerPage from "@/components/products/MobilockerPage";

export const metadata: Metadata = {
  title: "Mobilocker — Mobile EMI Locker for Retailers | MJ Digital Services",
  description:
    "Mobilocker helps mobile retailers sell smartphones on EMI safely. Auto-lock devices on missed payments, auto-unlock when EMI is paid. Improve recovery from 60% to 95%. A product of Ezeepay by MJ Digital.",
  keywords: [
    "Mobilocker",
    "mobile EMI locker",
    "phone EMI software",
    "smartphone EMI India",
    "device locking software",
    "EMI recovery retailers",
    "mobile shop EMI management",
    "Ezeepay Mobilocker",
  ],
  openGraph: {
    title: "Mobilocker — Mobile EMI Locker for Retailers",
    description:
      "Sell smartphones on EMI safely. Auto-lock on missed payments, auto-unlock when paid. Trusted by mobile retailers across India.",
    url: "https://mjdigitalservices.com/products/mobilocker",
    siteName: "MJ Digital Services",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobilocker — Mobile EMI Locker for Retailers",
    description: "Improve EMI recovery from 60% to 95%. Auto-lock devices on missed payments.",
  },
  alternates: {
    canonical: "https://mjdigitalservices.com/products/mobilocker",
  },
};

export default function Page() {
  return <MobilockerPage />;
}