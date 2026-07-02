import "./mobilocker.css";
import type { Metadata } from "next";
import MobilockerHero from "@/components/products/mobilocker/MobilockerHero";
import MobilockerFeatures from "@/components/products/mobilocker/MobilockerFeatures";
import MobilockerHowItWorks from "@/components/products/mobilocker/MobilockerHowItWorks";
import MobilockerCTA from "@/components/products/mobilocker/MobilockerCTA";

export const metadata: Metadata = {
  title: "Mobilocker — Mobile EMI Locker for Retailers | MJ Digital Services",
  description: "Mobilocker helps mobile retailers sell smartphones on EMI safely. Auto-lock devices on missed payments, auto-unlock when EMI is paid. Improve recovery from 60% to 95%.",
  keywords: ["Mobilocker", "mobile EMI locker", "phone EMI software", "smartphone EMI India", "device locking software", "EMI recovery retailers", "mobile shop EMI management", "Ezeepay Mobilocker"],
  openGraph: {
    title: "Mobilocker — Mobile EMI Locker for Retailers",
    description: "Sell smartphones on EMI safely. Auto-lock on missed payments, auto-unlock when paid. Trusted by mobile retailers across India.",
    url: "https://www.mjdigitalservices.com/products/mobilocker",
    siteName: "MJ Digital Services",
    images: [{ url: "https://www.mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobilocker — Mobile EMI Locker for Retailers",
    description: "Improve EMI recovery from 60% to 95%. Auto-lock devices on missed payments.",
    images: ["https://www.mjdigitalservices.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.mjdigitalservices.com/products/mobilocker",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Mobilocker",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android",
  description: "Mobilocker helps mobile retailers sell smartphones on EMI safely with auto-lock on missed payments and auto-unlock when EMI is paid.",
  url: "https://www.mjdigitalservices.com/products/mobilocker",
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
      <MobilockerHero />
      <MobilockerFeatures />
      <MobilockerHowItWorks />
      <MobilockerCTA />
    </>
  );
}