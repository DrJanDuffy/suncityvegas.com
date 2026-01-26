import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CalendlyButton from "@/../components/CalendlyButton";
import SchemaMarkup from "@/../components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suncityvegas.com"),
  title: {
    default: "Sun City Summerlin Homes for Sale | Las Vegas 55+ Community | Dr. Jan Duffy",
    template: "%s | Sun City Summerlin | Dr. Jan Duffy",
  },
  description:
    "Find your perfect home in Sun City Summerlin, Las Vegas' premier 55+ active adult community. 4 golf courses, 3 rec centers, 80+ clubs. Call Dr. Jan Duffy: 702-222-1964",
  keywords: [
    "Sun City Summerlin",
    "Sun City Vegas",
    "Sun City Summerlin homes for sale",
    "55+ community Las Vegas",
    "active adult community",
    "senior living Las Vegas",
    "Del Webb Las Vegas",
    "Dr. Jan Duffy",
    "REALTOR",
    "Las Vegas 55+ homes",
    "retirement community Las Vegas",
    "golf course homes Las Vegas",
    "Summerlin real estate",
  ],
  authors: [{ name: "Dr. Jan Duffy" }],
  creator: "Dr. Jan Duffy",
  publisher: "Berkshire Hathaway HomeServices Nevada Properties",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.suncityvegas.com",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    title: "Sun City Summerlin Homes for Sale | Las Vegas 55+ Community",
    description:
      "Las Vegas' premier 55+ community with 4 golf courses, 3 rec centers, and 80+ clubs. Homes from $300K-$800K+. Call Dr. Jan Duffy: 702-222-1964",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin community with mountain views",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun City Summerlin Homes for Sale | Las Vegas 55+ Community",
    description:
      "Las Vegas' premier 55+ community with 4 golf courses, 3 rec centers, and 80+ clubs. Homes from $300K-$800K+.",
    images: ["/images/hero/hero-bg.jpg"],
    creator: "@DrJanDuffy",
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
  alternates: {
    canonical: "https://www.suncityvegas.com",
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // LocalBusiness Schema for Google Business Profile
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://www.suncityvegas.com/#agent",
    name: "Dr. Jan Duffy - Sun City Summerlin Specialist",
    alternateName: "Sun City Vegas Real Estate",
    description: "Your Sun City Summerlin real estate expert! Helping buyers 55+ find their dream retirement home in Las Vegas' premier active adult community. 4 championship golf courses, 3 recreation centers, 80+ clubs & activities. Free community tours, market analysis, and expert negotiation support.",
    image: "https://www.suncityvegas.com/images/about/dr-jan-duffy.jpg",
    url: "https://www.suncityvegas.com",
    telephone: "+1-702-222-1964",
    email: "jan@drjanduffy.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9107 Del Webb Blvd",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Place",
      name: "Sun City Summerlin, Las Vegas, NV",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.2108",
      longitude: "-115.2950",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "06:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$",
    paymentAccepted: "Cash, Check, Credit Card, Financing",
    currenciesAccepted: "USD",
    sameAs: [
      "https://www.facebook.com/drjanduffy",
      "https://www.instagram.com/drjanduffy",
      "https://www.linkedin.com/in/drjanduffy",
      "https://www.youtube.com/@drjanduffy",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "127",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Free Community Tours & Personalized Home Showings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Market Analysis & Pricing Guidance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Alerts on New Listings & Inventory Updates",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Expert Negotiation & Closing Support",
          },
        },
      ],
    },
    knowsAbout: [
      "Sun City Summerlin",
      "55+ Active Adult Communities",
      "Las Vegas Real Estate",
      "Summerlin Real Estate",
      "Senior Living",
      "Retirement Homes",
      "Golf Course Communities",
    ],
    memberOf: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      credentialNumber: "S.0197614.LLC",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
    },
  };

  // Place Schema for Local SEO (Community Location)
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": "https://www.suncityvegas.com/#community",
    name: "Sun City Summerlin",
    description: "Del Webb's premier 55+ active adult community in Las Vegas, Nevada featuring 4 golf courses, 3 recreation centers, and 80+ clubs and activities.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9107 Del Webb Blvd",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.2108",
      longitude: "-115.2950",
    },
    url: "https://www.suncityvegas.com",
    image: "https://www.suncityvegas.com/images/hero/hero-bg.jpg",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Golf Courses", value: "4" },
      { "@type": "LocationFeatureSpecification", name: "Recreation Centers", value: "3" },
      { "@type": "LocationFeatureSpecification", name: "Clubs & Activities", value: "80+" },
      { "@type": "LocationFeatureSpecification", name: "Swimming Pools", value: "Multiple" },
      { "@type": "LocationFeatureSpecification", name: "Age Restriction", value: "55+" },
      { "@type": "LocationFeatureSpecification", name: "Total Homes", value: "7,779" },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Calendly Badge Widget CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        {/* Structured Data - Consolidated Schema Markup */}
        <SchemaMarkup />
        {/* Structured Data - LocalBusiness (Google Business Profile) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        {/* Structured Data - Place (Local SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(placeSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* RealScout Web Components Script - Load once globally for all pages */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
          type="module"
        />
        {/* RealScout Widget Styles - Global styles for all widgets */}
        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-office-listings {
              --rs-listing-divider-color: #8B5E3C;
              width: 100%;
            }
            realscout-home-value {
              --rs-hvw-background-color: #FDF8F3;
              --rs-hvw-title-color: #2D2A26;
              --rs-hvw-subtitle-color: rgba(45, 42, 38, 0.6);
              --rs-hvw-primary-button-text-color: #ffffff;
              --rs-hvw-primary-button-color: #8B5E3C;
              --rs-hvw-secondary-button-text-color: #8B5E3C;
              --rs-hvw-secondary-button-color: #ffffff;
              --rs-hvw-widget-width: auto;
            }
          `
        }} />
        {/* Calendly Floating Button - Custom styled button */}
        <CalendlyButton />
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
