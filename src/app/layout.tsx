import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-syne",   // keep same variable name so nothing else breaks
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MJ Digital Services | Technology That Powers Businesses",
    template: "%s | MJ Digital Services",
  },
  description:
    "MJ Digital Services is a technology and innovation company delivering software solutions, fintech infrastructure, APIs, mobile applications, cloud platforms, and digital transformation services.",
  keywords: [
    "fintech API",
    "software development India",
    "AEPS API",
    "WhatsApp Business API",
    "white label fintech",
    "mobile app development",
    "EzeePay",
    "Zoki",
    "Mobilocker",
    "MJ Digital Services",
  ],
  authors: [{ name: "MJ Digital Services" }],
  creator: "MJ Digital Services",
  metadataBase: new URL("https://mjdigitalservices.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mjdigitalservices.com",
    siteName: "MJ Digital Services",
    title: "MJ Digital Services | Technology That Powers Businesses",
    description:
      "Software solutions, fintech infrastructure, APIs, mobile applications, and digital transformation services for startups, enterprises, and government-focused organizations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MJ Digital Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MJ Digital Services | Technology That Powers Businesses",
    description:
      "Software solutions, fintech infrastructure, APIs, mobile applications, and digital transformation services.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}