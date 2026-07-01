import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mjdigitalservices.com";

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
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/mj-icon.png",
    shortcut: "/mj-icon.png",
    apple: "/mj-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
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
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}