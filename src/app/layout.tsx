import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CalendlyButton from "@components/CalendlyButton";
import SchemaMarkup from "@components/SchemaMarkup";

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
    default: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
    template: "%s | Sun City Summerlin | Dr. Jan Duffy",
  },
  description:
    "Find your dream 55+ retirement home in Sun City Summerlin, Las Vegas. With over 25 years of experience in active adult communities, Dr. Jan Duffy has helped countless retirees discover the perfect home. Sun City Summerlin offers world-class amenities—golf, fitness, pools, 80+ clubs. Call (702) 718-0043.",
  keywords: [
    "Sun City Summerlin",
    "Sun City Summerlin homes for sale",
    "Sun City Summerlin 55+ community homes for sale",
    "Sun City Summerlin Las Vegas NV 89134 homes for sale",
    "Sun City Summerlin home rentals",
    "Del Webb",
    "Del Webb Las Vegas",
    "Del Webb Summerlin",
    "Del Webb Las Vegas Summerlin",
    "Del Webb in Summerlin",
    "Del Webb Summerlin homes for sale",
    "Del Webb senior living communities",
    "Del Webb Sun City Summerlin rentals",
    "HOA Sun City Del Webb",
    "HOA for Sun City Del Webb",
    "Sun City Summerlin NV 55+ for sale",
    "Sun City Del Webb Las Vegas links magazine",
    "Vegas Strong Del Webb Sun City Summerlin applications",
    "55+ community Las Vegas",
    "55 and over communities in Las Vegas for sale",
    "active adult community",
    "senior living Las Vegas",
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
    siteName: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
    title: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
    description:
      "Find your dream 55+ retirement home in Sun City Summerlin, Las Vegas. With over 25 years of experience in active adult communities, Dr. Jan Duffy has helped countless retirees discover the perfect home. Call (702) 718-0043.",
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
    title: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
    description:
      "Find your dream 55+ retirement home in Sun City Summerlin. Dr. Jan Duffy—over 25 years in active adult communities. Call (702) 718-0043.",
    images: ["/images/hero/hero-bg.jpg"],
    creator: "@drjanduffy",
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

  // LocalBusiness Schema for Google Business Profile (matches GBP)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://www.suncityvegas.com/#agent",
    name: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
    alternateName: ["Sun City Vegas Real Estate", "Homes by Dr. Jan Duffy"],
    description: "Find your dream 55+ retirement home in Sun City Summerlin, Las Vegas. With over 25 years of experience in active adult communities, Dr. Duffy has helped countless retirees discover the perfect home to suit their lifestyle and needs. Sun City Summerlin offers a variety of beautiful options. This vibrant community is designed specifically for active adults, featuring world-class amenities such as golf courses, fitness centers, pools, walking trails, and social clubs. Dr. Duffy provides expert guidance and personalized service every step of the way, ensuring your transition into this exciting new chapter is seamless and stress-free. Start your journey toward a fulfilling and active retirement today!",
    image: "https://www.suncityvegas.com/images/about/dr-jan-duffy.jpg",
    url: "https://www.suncityvegas.com",
    telephone: "+1-702-718-0043",
    email: "jan@drjanduffy.com",
    foundingDate: "2013-09-20",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 Del Webb Blvd",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Nevada", addressCountry: "US" },
      { "@type": "City", name: "Las Vegas", addressRegion: "NV" },
      { "@type": "City", name: "Henderson", addressRegion: "NV" },
      { "@type": "AdministrativeArea", name: "Clark County", addressRegion: "NV" },
      { "@type": "Place", name: "Sun City Summerlin", address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV", postalCode: "89134" } },
      { "@type": "Place", name: "Anthem", address: { "@type": "PostalAddress", addressLocality: "Henderson", addressRegion: "NV", postalCode: "89052" } },
      { "@type": "Place", name: "Lake Las Vegas", address: { "@type": "PostalAddress", addressLocality: "Henderson", addressRegion: "NV", postalCode: "89011" } },
      { "@type": "City", name: "North Las Vegas", addressRegion: "NV" },
      { "@type": "Place", name: "Meadows", address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV" } },
      { "@type": "Place", name: "Providence", address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV" } },
      { "@type": "Place", name: "MacDonald Ranch", address: { "@type": "PostalAddress", addressLocality: "Henderson", addressRegion: "NV" } },
    ],
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
    accessibilityFeature: ["WheelchairAccessibleEntrance", "WheelchairAccessibleSeating", "WheelchairAccessibleRestroom", "WheelchairAccessibleParking"],
    knowsLanguage: ["English", "Spanish", "American Sign Language", "Arabic", "Cantonese", "Filipino"],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free parking lot", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible entrance", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible seating", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible restroom", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible parking lot", value: true },
      { "@type": "LocationFeatureSpecification", name: "Gender-neutral restroom", value: true },
      { "@type": "LocationFeatureSpecification", name: "Online appointments", value: true },
      { "@type": "LocationFeatureSpecification", name: "Onsite services available", value: true },
      { "@type": "LocationFeatureSpecification", name: "Appointment not required", value: true },
      { "@type": "LocationFeatureSpecification", name: "Veteran-owned business", value: true },
      { "@type": "LocationFeatureSpecification", name: "Women-owned business", value: true },
      { "@type": "LocationFeatureSpecification", name: "LGBTQ+ friendly", value: true },
      { "@type": "LocationFeatureSpecification", name: "Transgender safespace", value: true },
    ],
    priceRange: "$$",
    paymentAccepted: "Cash, Check, Credit Card, Financing",
    currenciesAccepted: "USD",
    sameAs: [
      "https://lasvegas55plushomes.com/",
      "https://www.facebook.com/DrJanDuffyRealtorCentennialHills/",
      "https://www.linkedin.com/company/lvrmembers/",
      "https://www.instagram.com/drjanduffy/",
      "https://x.com/drjanduffy",
      "https://www.tiktok.com/@dr.janduffy",
      "https://www.youtube.com/@DrDuffy",
      "https://www.pinterest.com/bhhsluxury/",
    ],
    specialOpeningHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        validFrom: "2026-02-16",
        validThrough: "2026-02-16",
        opens: "10:00",
        closes: "18:00",
        description: "Washington's Birthday",
      },
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
      streetAddress: "9406 Del Webb Blvd",
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
        {/* Preconnect to critical third-party origins (PageSpeed / LCP) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        {/* Google Analytics - lazyOnload so it doesn't compete for bandwidth during LCP */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NHQBT9NYXR"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NHQBT9NYXR');
          `}
        </Script>
        {/* Calendly Badge Widget CSS - loaded via script after idle so it doesn't block LCP */}
        <Script id="calendly-css" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://assets.calendly.com/assets/external/widget.css';document.head.appendChild(l);})();`}
        </Script>
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
