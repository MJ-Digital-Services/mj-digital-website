import type { Metadata } from "next";
import ServiceHero from "@/components/services/shared/ServiceHero";
import ServiceGrid from "@/components/services/shared/ServiceGrid";
import ServiceUseCases from "@/components/services/shared/ServiceUseCases";
import ServiceCTA from "@/components/services/shared/ServiceCTA";
import { Calculator, Boxes, Warehouse, ClipboardList, Store, ShoppingCart, UtensilsCrossed, Pill, Shirt, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Retail Management Software — POS, Inventory & Warehouse | MJ Digital Services",
  description: "POS billing, inventory management, warehouse management, and order management software for retail businesses. Built by MJ Digital Services.",
  keywords: ["POS billing software", "inventory management system", "warehouse management software", "order management system", "retail software India"],
  alternates: { canonical: "https://www.mjdigitalservices.com/services/retail-solutions" },
  openGraph: {
    title: "Retail Management Software | MJ Digital Services",
    description: "POS billing, inventory, warehouse & order management software.",
    url: "https://www.mjdigitalservices.com/services/retail-solutions",
    siteName: "MJ Digital Services",
    images: [{ url: "https://www.mjdigitalservices.com/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const services = [
  { icon: Calculator,   title: "POS Billing Software",        desc: "Fast point-of-sale billing built for busy retail counters, with GST invoices and offers.", features: ["Quick billing", "GST invoicing", "Discounts & offers", "Multi-payment modes"] },
  { icon: Boxes,        title: "Inventory Management System", desc: "Track stock levels across locations with low-stock alerts and accurate valuation.", features: ["Real-time stock levels", "Multi-location tracking", "Low-stock alerts", "Stock valuation"] },
  { icon: Warehouse,    title: "Warehouse Management",        desc: "Optimise warehouse operations from inbound to fulfilment with bin and batch control.", features: ["Inbound & putaway", "Bin & batch management", "Picking & packing", "Dispatch tracking"] },
  { icon: ClipboardList,title: "Order Management System",     desc: "Centralise order processing and tracking across channels for accurate fulfilment.", features: ["Centralised orders", "Channel sync", "Fulfilment tracking", "Returns handling"] },
];

const useCases = [
  { icon: Store,            title: "Retail Stores",   desc: "Bill faster, track stock, and manage multiple outlets from one system." },
  { icon: ShoppingCart,     title: "Supermarkets",    desc: "Handle high-volume billing, inventory, and warehouse operations at scale." },
  { icon: UtensilsCrossed,  title: "Restaurants",     desc: "Run quick billing with inventory tracking for ingredients and supplies." },
  { icon: Pill,             title: "Pharmacies",      desc: "Manage billing, batch/expiry inventory, and reorder alerts." },
  { icon: Shirt,            title: "Apparel & Fashion", desc: "Track SKUs by size and colour with multi-store inventory." },
  { icon: Smartphone,       title: "Electronics",     desc: "Manage serialised inventory, warranties, and order fulfilment." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Retail Solutions"
        title="Modern Retail"
        accent="Operations Software"
        description="POS billing, inventory, warehouse, and order management — software that keeps your counters fast and your stock accurate across every location."
        trustItems={[
          "Fast POS billing with GST",
          "Multi-location inventory",
          "Warehouse & fulfilment",
          "Centralised order management",
        ]}
        stats={[
          { val: "Fast", label: "POS Billing" },
          { val: "Real-Time", label: "Inventory" },
          { val: "Multi-Store", label: "Ready" },
          { val: "GST", label: "Compliant" },
        ]}
        heroImage="/services/retail-solutions-hero.png"
        heroImageAlt="Retail Management Software"
        primaryCTA="Get a Demo"
      />
      <ServiceGrid
        badge="What We Build"
        title="Four retail systems"
        accent="that run your store"
        description="From the billing counter to the warehouse — software that keeps retail operations accurate and fast."
        services={services}
      />
      <ServiceUseCases
        badge="Who We Build For"
        title="Retail software for"
        accent="every store"
        description="Our systems run across retail stores, supermarkets, restaurants, pharmacies, apparel, and electronics."
        useCases={useCases}
        dark
      />
      <ServiceCTA
        badge="Run Retail Better"
        title="Ready to modernise"
        accent="your store?"
        description="Tell us how you sell and we'll set up billing, inventory, and fulfilment that just works."
        primaryCTA="Get a Demo"
        note="MJ Digital Services · POS · Inventory · Warehouse · Orders"
      />
    </>
  );
}