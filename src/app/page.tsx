import type { Metadata } from "next";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import ProblemSection from "../../components/sections/problem-section";
import SolutionSection from "../../components/sections/solution-section";
import ValuePropsSection from "../../components/sections/value-props";
import TestimonialSection from "../../components/sections/testimonial";
import AmenitiesPreviewSection from "../../components/sections/amenities-preview";
import HomeCollectionsSection from "../../components/sections/home-collections";
import AboutAgentSection from "../../components/sections/about-agent";
import FinalCTASection from "../../components/sections/final-cta";
import Footer from "../../components/footer";
import VirtualTours from "../../components/VirtualTours";
import HomesForSaleWidget from "../../components/HomesForSaleWidget";
import Testimonials from "../../components/Testimonials";
import MortgageCalculator from "../../components/MortgageCalculator";
import RealScoutListings from "../../components/RealScoutListings";
import QuickFAQ from "../../components/QuickFAQ";
import ExploreCommunitySection from "../../components/sections/explore-community";
import FlyersSection from "../../components/sections/flyers-section";
import FeaturedListingSection from "../../components/sections/featured-listing";
import MarketStatsSection from "../../components/sections/market-stats";

// Homepage metadata - optimized for SEO and sitelinks
export const metadata: Metadata = {
  title: "Sun City Summerlin Homes for Sale | Las Vegas 55+ Community | Dr. Jan Duffy",
  description:
    "Find your dream home in Sun City Summerlin, Las Vegas' premier 55+ community. 4 golf courses, 3 rec centers, 80+ clubs. Homes $300K-$800K+. Call Dr. Jan Duffy: (702) 222-1964",
  alternates: {
    canonical: "https://www.suncityvegas.com",
  },
  openGraph: {
    title: "Sun City Summerlin Homes for Sale | Las Vegas 55+ Community",
    description:
      "Find your dream home in Sun City Summerlin, Las Vegas' premier 55+ community. 4 golf courses, 3 rec centers, 80+ clubs. Homes $300K-$800K+.",
    url: "https://www.suncityvegas.com",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    images: [
      {
        url: "/images/amenities/resort-pool.jpeg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin golf course community with mountain views",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun City Summerlin Homes for Sale | Las Vegas 55+ Community",
    description:
      "Find your dream home in Sun City Summerlin, Las Vegas' premier 55+ community. 4 golf courses, 3 rec centers, 80+ clubs. Homes $300K-$800K+.",
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
