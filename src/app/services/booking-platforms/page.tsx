import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { Plane, Bus, Hotel, TrainFront, Sun, Briefcase, Network, Users, Globe, Building2, Map } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Booking Platforms — Flights, Hotels, Buses & Trains | MJ Digital Services",
  description: "Flight, bus, hotel, and train booking portals, holiday packages, travel agent portals, B2B travel software, and travel CRM. Built by MJ Digital Services.",
  keywords: ["flight booking portal", "bus booking software", "hotel booking engine", "train booking solution", "B2B travel software", "travel agent portal", "travel CRM"],
  alternates: { canonical: "https://mjdigitalservices.com/services/booking-platforms" },
  openGraph: {
    title: "Travel Booking Platforms | MJ Digital Services",
    description: "Flight, bus, hotel & train booking portals, plus B2B travel software & CRM.",
    url: "https://mjdigitalservices.com/services/booking-platforms",
    siteName: "MJ Digital Services",
    images: [{ url: "https://mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: Plane,     title: "Flight Booking Portal",   desc: "Online flight search and booking with live fares, seat selection, and ticketing.", features: ["Live fare search", "Seat selection", "GDS/API integration", "E-ticketing"] },
  { icon: Bus,       title: "Bus Booking Software",    desc: "A bus ticket reservation system with seat layouts, operators, and instant confirmation.", features: ["Seat-map booking", "Operator management", "Boarding points", "Instant confirmation"] },
  { icon: Hotel,     title: "Hotel Booking Engine",    desc: "Hotel room search and reservation with rate plans, availability, and instant booking.", features: ["Room & rate search", "Real-time availability", "Rate plans", "Booking management"] },
  { icon: TrainFront,title: "Train Booking Solution",  desc: "Train ticket booking integration with PNR, availability, and fare details.", features: ["Train search", "Availability & PNR", "Fare details", "Booking history"] },
  { icon: Sun,       title: "Holiday Package Portal",  desc: "Curated holiday and tour package booking with itineraries and custom quotes.", features: ["Package catalogue", "Itinerary builder", "Custom quotes", "Enquiry to booking"] },
  { icon: Briefcase, title: "Travel Agent Portal",     desc: "A portal for agents to manage bookings, customers, and commissions in one place.", features: ["Agent bookings", "Commission tracking", "Customer records", "Reports"] },
  { icon: Network,   title: "B2B Travel Software",     desc: "A business-to-business travel platform with sub-agents, wallets, and markups.", features: ["Sub-agent network", "Wallet & markups", "Multi-supplier", "Settlement reports"] },
  { icon: Users,     title: "Travel CRM Solution",     desc: "Manage travel leads and customer relationships from enquiry to repeat booking.", features: ["Lead management", "Follow-up automation", "Itinerary sharing", "Repeat-booking insights"] },
];

const useCases = [
  { icon: Briefcase, title: "Travel Agencies",   desc: "Sell flights, hotels, buses, and packages from one branded portal." },
  { icon: Map,       title: "Tour Operators",    desc: "Build itineraries, send quotes, and manage holiday-package bookings." },
  { icon: Globe,     title: "OTAs",              desc: "Run an online travel agency with multi-supplier search and instant booking." },
  { icon: Building2, title: "Corporate Travel",  desc: "Manage business travel with approvals, policies, and reporting." },
  { icon: Network,   title: "B2B Aggregators",   desc: "Distribute inventory to sub-agents with wallets, markups, and settlements." },
  { icon: Hotel,     title: "Hotels & Resorts",  desc: "Take direct bookings with a real-time availability and rate engine." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Booking Platforms"
        title="Power Your"
        accent="Travel Business"
        description="Flight, bus, hotel, and train booking portals, holiday packages, agent portals, B2B travel software, and travel CRM — everything to sell travel online."
        trustItems={[
          "Flights, hotels, buses & trains",
          "B2B sub-agent networks",
          "Supplier & API integrations",
          "Travel CRM built in",
        ]}
        stats={[
          { val: "Multi-Mode", label: "Booking" },
          { val: "B2B", label: "& B2C" },
          { val: "Real-Time", label: "Availability" },
          { val: "Agent", label: "Networks" },
        ]}
        heroImage="/services/booking-platforms-hero.png"
        heroImageAlt="Travel Booking Platforms"
        primaryCTA="Build Your Portal"
      />
      <ServiceGrid
        badge="What We Build"
        title="Eight travel products"
        accent="for every model"
        description="From a single flight portal to a full B2B distribution network — we build travel platforms that sell."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Travel platforms for"
        accent="every operator"
        description="Our platforms power travel agencies, tour operators, OTAs, corporate travel, and B2B aggregators."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Sell Travel Online"
        title="Ready to launch"
        accent="your travel portal?"
        description="Tell us what you sell and we'll map the booking platform that fits your business."
        primaryCTA="Build Your Portal"
        note="MJ Digital Services · Flights · Hotels · Buses · B2B Travel"
      />
    </>
  );
}