import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us | MJ Digital Services",
  description:
    "MJ Digital Services is a Noida-based technology company building fintech infrastructure, APIs, mobile apps, and digital products including EzeePay, Zoki, and Mobilocker. Trusted by 50+ clients since 2007.",
  keywords: [
    "about MJ Digital Services",
    "fintech company India",
    "software development Noida",
    "EzeePay parent company",
    "Zoki parent company",
    "Mobilocker parent company",
    "MJ Digital Services founder",
  ],
  openGraph: {
    title: "About MJ Digital Services | Building Technology That Powers Businesses",
    description:
      "Technology and innovation company delivering software solutions, fintech APIs, and digital products. Trusted by 50+ clients across India.",
    url: "https://mjdigitalservices.com/about",
    siteName: "MJ Digital Services",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MJ Digital Services",
    description:
      "Building fintech infrastructure, software, and digital products that power businesses.",
  },
  alternates: {
    canonical: "https://mjdigitalservices.com/about",
  },
};

export default function Page() {
  return <AboutPage />;
}