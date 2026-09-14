import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://centralmarketplace.in"),
  title: "Central Marketplace - Chennai Desk | Find Locally! Connect Directly!",
  description: "Central Marketplace (Central Market / Central Market Place) connects people, customers and buyers with property owners, service providers and local sellers in Chennai.",
  keywords: [
    "Central Marketplace",
    "Central Marketplace Chennai",
    "Central Market Place",
    "Central Market",
    "Chennai Central Marketplace",
    "Central Market Place Chennai",
    "Central Market Chennai",
    "Central Desk Chennai",
    "Chennai Central Market",
    "Central Local Marketplace",
    "Central Online Marketplace",
    "Central Hub Chennai",
    "Central Directory Chennai",
    "Central Classifieds Chennai",
    "Chennai marketplace",
    "Local Chennai services",
    "Chennai property rentals",
    "Chennai home food",
    "Chennai local sellers",
    "Chennai direct connect",
  ],
  alternates: {
    canonical: "https://centralmarketplace.in",
  },
  openGraph: {
    title: "Central Marketplace - Chennai Desk | Find Locally! Connect Directly!",
    description: "Central Marketplace connects buyers and customers with local property owners, service providers, home food, and local sellers in Chennai.",
    siteName: "Central Marketplace",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Central Marketplace - Chennai Desk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Central Marketplace - Chennai Desk",
    description: "Central Marketplace connects buyers and customers with local property owners, service providers, home food, and local sellers in Chennai.",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://centralmarketplace.in/#organization",
      "name": "Central Marketplace",
      "alternateName": [
        "Central Marketplace Chennai",
        "Central Market Place",
        "Central Market",
        "Chennai Central Marketplace",
        "Central Desk Chennai",
        "Central Market Place Chennai",
        "Central Online Marketplace",
      ],
      "url": "https://centralmarketplace.in",
      "logo": "https://centralmarketplace.in/icon",
      "description": "Central Marketplace connects buyers, renters, and customers directly with local property owners, service providers, home food chefs, and local sellers in Chennai.",
    },
    {
      "@type": "WebSite",
      "@id": "https://centralmarketplace.in/#website",
      "url": "https://centralmarketplace.in",
      "name": "Central Marketplace - Chennai Desk",
      "alternateName": [
        "Central Marketplace",
        "Central Market Place",
        "Central Market",
        "Chennai Central Market",
      ],
      "publisher": {
        "@id": "https://centralmarketplace.in/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
