import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import ScrollAnimation from "@/../components/scroll-animation";
import { Home, Maximize2, Calendar, Building } from "lucide-react";
import MortgageCalculator from "@/../components/MortgageCalculator";
import ScheduleTour from "@/../components/ScheduleTour";
import RealScoutListings from "@/../components/RealScoutListings";

export const metadata: Metadata = {
  title: "Home Styles & Sizes | Sun City Summerlin | 1,000-3,500+ Sq Ft Resale Homes",
  description:
    "Explore the variety of home styles at Sun City Summerlin, Las Vegas' premier 55+ community. Single-story homes from 1,000 to 3,500+ sq ft. View current listings.",
  alternates: {
    canonical: "https://www.suncityvegas.com/floor-plans",
  },
  openGraph: {
    title: "Home Styles & Sizes | Sun City Summerlin | 1,000-3,500+ Sq Ft Resale Homes",
    description:
      "Explore the variety of single-story home styles at Sun City Summerlin, Las Vegas' premier 55+ community.",
    url: "https://www.suncityvegas.com/floor-plans",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/hero/community-sign.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin home styles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Styles & Sizes | Sun City Summerlin | 1,000-3,500+ Sq Ft Resale Homes",
    description: "Explore the variety of single-story homes in Las Vegas' premier 55+ community.",
    images: ["https://www.suncityvegas.com/images/hero/community-sign.jpg"],
  },
};

const homeStyles = [
  {
    name: "Cozy Homes",
    sqftRange: "1,000 - 1,400 sq ft",
    beds: "2",
    baths: "2",
    priceRange: "$275,000 - $375,000",
    description: "Perfect for those who want easy maintenance and efficient living. These charming homes offer comfortable spaces without excess.",
    features: ["Open floor plans", "Low maintenance yards", "Attached garages", "Updated finishes available"],
  },
  {
    name: "Mid-Size Homes",
    sqftRange: "1,400 - 2,000 sq ft",
    beds: "2-3",
    baths: "2",
    priceRange: "$375,000 - $525,000",
    description: "The most popular size in Sun City Summerlin. Room for guests, a home office, and comfortable daily living.",
    features: ["Separate dining areas", "Den or office space", "Large master suites", "Golf course views available"],
  },
  {
    name: "Spacious Homes",
    sqftRange: "2,000 - 2,500 sq ft",
    beds: "2-3",
    baths: "2-3",
    priceRange: "$525,000 - $700,000",
    description: "Generous living spaces ideal for entertaining or those who want extra room. Many feature premium lots and upgrades.",
    features: ["Gourmet kitchens", "Multiple living areas", "3-car garages available", "Pool-sized lots"],
  },
  {
    name: "Estate Homes",
    sqftRange: "2,500 - 3,500+ sq ft",
    beds: "3-4",
    baths: "2.5-3.5",
    priceRange: "$700,000 - $1,200,000+",
    description: "The finest homes in Sun City Summerlin. Custom features, premium locations, and resort-style backyards.",
    features: ["Custom upgrades", "Premium golf course lots", "Private pools & spas", "Mountain/strip views"],
  },
];

export default function HomeStylesPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Home Styles", href: "/floor-plans" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Home Styles at Sun City Summerlin
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                With 7,779 homes built between 1989-2002, Sun City Summerlin offers incredible variety. 
                From cozy 1,000 sq ft retreats to stunning 3,500+ sq ft estates, find your perfect fit. 
                View <Link href="/homes-for-sale" className="text-white hover:text-gray-200 underline">current listings</Link> or 
                explore the <Link href="/amenities" className="text-white hover:text-gray-200 underline">world-class amenities</Link> included with every home.
              </p>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-8 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4">
                  <Building className="w-8 h-8 text-[#8B5E3C] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#8B5E3C]">7,779</p>
                  <p className="text-sm text-[#2D2A26]">Total Homes</p>
                </div>
                <div className="p-4">
                  <Maximize2 className="w-8 h-8 text-[#8B5E3C] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#8B5E3C]">1K-3.5K+</p>
                  <p className="text-sm text-[#2D2A26]">Sq Ft Range</p>
                </div>
                <div className="p-4">
                  <Calendar className="w-8 h-8 text-[#8B5E3C] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#8B5E3C]">1989-2002</p>
                  <p className="text-sm text-[#2D2A26]">Years Built</p>
                </div>
                <div className="p-4">
                  <Home className="w-8 h-8 text-[#8B5E3C] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#8B5E3C]">100%</p>
                  <p className="text-sm text-[#2D2A26]">Single Story</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Home Styles Grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                  Find Your Perfect Home Size
                </h2>
                <p className="text-lg text-[#2D2A26] max-w-2xl mx-auto">
                  Sun City Summerlin homes come in a variety of sizes and styles to fit every lifestyle and budget.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {homeStyles.map((style, index) => (
                  <ScrollAnimation key={style.name} delay={index * 100}>
                    <div className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow border border-[#C4A574]/20 overflow-hidden">
                      <div className="bg-[#8B5E3C] text-white p-4">
                        <h3 className="text-xl font-bold font-playfair">{style.name}</h3>
                        <p className="text-[#D4AF37] font-semibold">{style.sqftRange}</p>
                      </div>
                      <div className="p-6">
                        {/* Specs */}
                        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-[#C4A574]/20">
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Bedrooms</p>
                            <p className="font-semibold text-[#2D2A26]">{style.beds}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Bathrooms</p>
                            <p className="font-semibold text-[#2D2A26]">{style.baths}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Price Range</p>
                            <p className="font-semibold text-[#8B5E3C] text-sm">{style.priceRange}</p>
                          </div>
                        </div>

                        <p className="text-[#2D2A26] mb-4 leading-relaxed">
                          {style.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-1 mb-6">
                          {style.features.map((feature) => (
                            <li key={feature} className="text-sm text-[#2D2A26] flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Button
                          asChild
                          variant="default"
                          className="w-full bg-[#8B5E3C] hover:bg-[#8B5E3C]/90"
                        >
                          <Link href="/homes-for-sale">
                            View Available Homes
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Single Story Note */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                All Homes Are Single-Story
              </h2>
              <p className="text-lg text-[#2D2A26] mb-6">
                Every home in Sun City Summerlin is single-story, designed specifically for active adults. 
                No stairs to worry about—now or in the future. This thoughtful design makes daily living easier 
                and ensures your home works for you at every stage of life.
              </p>
            </div>
          </div>
        </section>

        {/* Mortgage Calculator Section */}
        <MortgageCalculator />

        {/* RealScout Listings */}
        <RealScoutListings h2Text="View Available Homes in Sun City Summerlin" />

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Find Your Perfect Home?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a private tour with <Link href="/about" className="text-white hover:text-gray-200 underline">Dr. Jan Duffy</Link> to 
                explore homes that match your lifestyle. Discover the <Link href="/lifestyle" className="text-white hover:text-gray-200 underline">active adult lifestyle</Link> and 
                <Link href="/amenities" className="text-white hover:text-gray-200 underline"> world-class amenities</Link> at Sun City Summerlin.
              </p>
              <ScheduleTour variant="accent" size="lg" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
