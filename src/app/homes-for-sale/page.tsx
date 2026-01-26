import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import { Phone } from "lucide-react";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import MortgageCalculator from "@/../components/MortgageCalculator";
import RealScoutListings from "@/../components/RealScoutListings";
import { getCommunityInfo } from "@/lib/communityData";

export const metadata: Metadata = {
  title: "Homes for Sale | Sun City Summerlin | Las Vegas 55+ Community",
  description:
    "Browse current homes for sale in Sun City Summerlin, Las Vegas' premier 55+ active adult community. Homes from $300K-$800K+. Call Dr. Jan Duffy: (702) 222-1964",
  alternates: {
    canonical: "https://www.suncityvegas.com/homes-for-sale",
  },
  openGraph: {
    title: "Homes for Sale | Sun City Summerlin | Las Vegas 55+ Community",
    description:
      "Browse current homes for sale in Sun City Summerlin, Las Vegas' premier 55+ active adult community. Homes from $300K-$800K+.",
    url: "https://www.suncityvegas.com/homes-for-sale",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/amenities/resort-pool.jpeg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin homes for sale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homes for Sale | Sun City Summerlin | Las Vegas 55+ Community",
    description: "Browse current homes for sale in Sun City Summerlin 55+ community. Homes from $300K-$800K+.",
    images: ["https://www.suncityvegas.com/images/amenities/resort-pool.jpeg"],
  },
};

export default async function HomesForSalePage() {
  const communityInfo = getCommunityInfo();

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Homes for Sale", href: "/homes-for-sale" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Homes for Sale in Sun City Summerlin | Las Vegas 55+ Community
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                Browse current listings updated daily from the MLS. Explore the <Link href="/amenities" className="text-[#D4AF37] hover:text-white underline">resort-style amenities</Link> including 4 golf courses and 3 recreation centers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#2D2A26]"
                >
                  <Link href="#listings">View Listings</Link>
                </Button>
                <a
                  href="tel:7022221964"
                  className="flex items-center gap-2 text-lg font-semibold hover:text-[#D4AF37] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (702) 222-1964
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Listings - Main Lead Generator */}
        <RealScoutListings h2Text="View Current Homes for Sale in Sun City Summerlin | Las Vegas 55+ Community" />

        {/* CTA Cards Section */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="https://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow group"
                >
                  <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair group-hover:text-[#5D7A5D] transition-colors">
                    Search All Homes
                  </h3>
                  <p className="text-[#2D2A26] mb-6">
                    Access the complete MLS database and search all available homes in Sun City Summerlin.
                  </p>
                  <Button variant="accent" size="lg" className="w-full bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 text-white">
                    Start Your Search
                  </Button>
                </a>
                <a
                  href="https://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow group"
                >
                  <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair group-hover:text-[#5D7A5D] transition-colors">
                    Get New Listing Alerts
                  </h3>
                  <p className="text-[#2D2A26] mb-6">
                    Be the first to know when new homes hit the market. Set up custom alerts for your perfect home.
                  </p>
                  <Button variant="accent" size="lg" className="w-full bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 text-white">
                    Set Up Alerts
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Dr. Jan Duffy Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                Why Work With Dr. Jan Duffy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#FDF8F3] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Local Expertise
                  </h3>
                  <p className="text-[#2D2A26]">
                    Deep knowledge of Sun City Summerlin and the Las Vegas real estate market.
                  </p>
                </div>
                <div className="bg-[#FDF8F3] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Personalized Service
                  </h3>
                  <p className="text-[#2D2A26]">
                    Dedicated to understanding your unique needs and finding your perfect 55+ home.
                  </p>
                </div>
                <div className="bg-[#FDF8F3] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Proven Results
                  </h3>
                  <p className="text-[#2D2A26]">
                    Successfully helping active adults find their dream homes in Sun City Summerlin.
                  </p>
                </div>
                <div className="bg-[#FDF8F3] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Full-Service Support
                  </h3>
                  <p className="text-[#2D2A26]">
                    From initial search through closing, we guide you every step of the way.
                  </p>
                </div>
                <div className="bg-[#FDF8F3] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Market Insights
                  </h3>
                  <p className="text-[#2D2A26]">
                    Access to current market trends, pricing data, and neighborhood information.
                  </p>
                </div>
                <div className="bg-[#FDF8F3] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Responsive Communication
                  </h3>
                  <p className="text-[#2D2A26]">
                    Quick responses to your questions and regular updates on your home search.
                  </p>
                </div>
              </div>
              <div className="text-center bg-[#C4A574]/20 p-8 rounded-lg border-2 border-[#C4A574]">
                <p className="text-lg font-semibold text-[#8B5E3C] mb-4">
                  Ready to find your perfect home?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:7022221964"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-[#8B5E3C] text-white rounded-md font-semibold hover:bg-[#8B5E3C]/90 transition-colors min-h-[48px] touch-manipulation"
                  >
                    <Phone className="w-5 h-5" />
                    Call (702) 222-1964
                  </a>
                  <Button asChild variant="accent" size="lg" className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#2D2A26] min-h-[48px] px-6">
                    <Link href="/contact">Schedule a Tour</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mortgage Calculator Section */}
        <MortgageCalculator />

        {/* Quick Info Section */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                Why Choose Sun City Summerlin?
              </h2>
              <p className="text-center text-[#2D2A26] mb-6 max-w-2xl mx-auto">
                Discover the <Link href="/amenities" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">resort-style amenities</Link> and <Link href="/lifestyle" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">active adult lifestyle</Link> that make this community special.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Price Range
                  </h3>
                  <p className="text-2xl font-semibold text-[#8B5E3C] mb-2">
                    {communityInfo.priceRange}
                  </p>
                  <p className="text-[#2D2A26]">
                    Competitive pricing for luxury 55+ living
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Total Homes
                  </h3>
                  <p className="text-2xl font-semibold text-[#8B5E3C] mb-2">{communityInfo.totalHomes.toLocaleString()}</p>
                  <p className="text-[#2D2A26]">
                    Single-family residences in a guard-gated community
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    HOA Fee
                  </h3>
                  <p className="text-2xl font-semibold text-[#8B5E3C] mb-2">
                    {communityInfo.hoaFee}
                  </p>
                  <p className="text-[#2D2A26]">{communityInfo.sidLid === 'None' ? 'No SIDs or LIDs' : communityInfo.sidLid}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
