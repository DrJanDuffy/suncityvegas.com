import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@components/navbar";
import Hero from "@components/hero";
import ProblemSection from "@components/sections/problem-section";
import SolutionSection from "@components/sections/solution-section";
import ValuePropsSection from "@components/sections/value-props";
import TestimonialSection from "@components/sections/testimonial";
import AmenitiesPreviewSection from "@components/sections/amenities-preview";
import HomeCollectionsSection from "@components/sections/home-collections";
import AboutAgentSection from "@components/sections/about-agent";
import FinalCTASection from "@components/sections/final-cta";
import Footer from "@components/footer";
import RealScoutListings from "@components/RealScoutListings";
import ExploreCommunitySection from "@components/sections/explore-community";
import FeaturedListingSection from "@components/sections/featured-listing";
import MarketStatsSection from "@components/sections/market-stats";

// Below-the-fold sections: lazy-load to improve LCP and reduce initial JS (PageSpeed / Core Web Vitals)
const MarketInsights = dynamic(() => import("@/components/MarketInsights"), { ssr: true });
const VirtualTours = dynamic(() => import("@components/VirtualTours"), { ssr: true });
const HomesForSaleWidget = dynamic(() => import("@components/HomesForSaleWidget"), { ssr: true });
const Testimonials = dynamic(() => import("@components/Testimonials"), { ssr: true });
const MortgageCalculator = dynamic(() => import("@components/MortgageCalculator"), { ssr: true });
const QuickFAQ = dynamic(() => import("@components/QuickFAQ"), { ssr: true });
const FlyersSection = dynamic(() => import("@components/sections/flyers-section"), { ssr: true });

// Homepage metadata - optimized for SEO and target keywords (Del Webb, 55+ community homes for sale)
export const metadata: Metadata = {
  title: "Sun City Summerlin 55+ Community Homes for Sale | Del Webb Las Vegas Summerlin | Dr. Jan Duffy",
  description:
    "Sun City Summerlin 55+ community homes for sale in Las Vegas, NV 89134. Del Webb built this active adult community—4 golf courses, 3 rec centers, 80+ clubs. Browse current listings. Call (702) 718-0043",
  keywords: [
    "Sun City Summerlin homes for sale",
    "Sun City Summerlin 55+ community homes for sale",
    "Del Webb Summerlin homes for sale",
    "Del Webb Las Vegas Summerlin",
    "55 and over communities in Las Vegas for sale",
    "Sun City Summerlin Las Vegas NV 89134",
  ],
  alternates: {
    canonical: "https://www.suncityvegas.com",
  },
  openGraph: {
    title: "Sun City Summerlin Homes for Sale | Las Vegas 55+ Community | Dr. Jan Duffy",
    description:
      "Find your dream home in Sun City Summerlin, Las Vegas' premier 55+ community. 4 golf courses, 3 rec centers, 80+ clubs. Homes $300K-$800K+. Call (702) 718-0043.",
    url: "https://www.suncityvegas.com",
    siteName: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
    images: [
      {
        url: "/images/amenities/resort-pool.jpeg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin Del Webb golf course community with mountain views",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun City Summerlin Homes for Sale | Las Vegas 55+ Community | Dr. Jan Duffy",
    description:
      "Find your dream home in Sun City Summerlin, Las Vegas' premier 55+ community. 4 golf courses, 3 rec centers, 80+ clubs. Homes $300K-$800K+. Call (702) 718-0043.",
    images: ["/images/amenities/resort-pool.jpeg"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        <Hero />
        {/* Featured Listing Section - Enable in component when listing is available */}
        <FeaturedListingSection />
        {/* Explore Community Section - Prominent internal linking for sitelinks */}
        <ExploreCommunitySection />
        {/* RealScout Listings - Main Lead Generator - Prominently placed after hero */}
        <RealScoutListings h2Text="Browse Homes for Sale in Sun City Summerlin | Las Vegas 55+ Community" />
        {/* Market Statistics */}
        <MarketStatsSection />
        {/* Market Insights - Latest Real Estate News */}
        <MarketInsights limit={3} />
        <ProblemSection />
        <SolutionSection />
        <ValuePropsSection />
        <TestimonialSection />
        <AmenitiesPreviewSection />
        <HomeCollectionsSection />
        <FlyersSection />
        <VirtualTours />
        <HomesForSaleWidget />
        <Testimonials />
        <MortgageCalculator />
        <QuickFAQ />
        <AboutAgentSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
