import type { Metadata } from "next";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import Link from "next/link";
import { Home, TrendingUp, Calculator } from "lucide-react";
import { Button } from "@components/ui/button";

export const metadata: Metadata = {
  title: "Free Home Value Estimate | Sun City Summerlin | Dr. Jan Duffy",
  description:
    "Get a free, instant home value estimate for your property. Dr. Jan Duffy provides accurate home valuations for Sun City Summerlin and Las Vegas area homes.",
  alternates: {
    canonical: "https://www.suncityvegas.com/home-value",
  },
  openGraph: {
    title: "Free Home Value Estimate | Sun City Summerlin | Dr. Jan Duffy",
    description:
      "Get a free, instant home value estimate for your property in Sun City Summerlin and Las Vegas.",
    url: "https://www.suncityvegas.com/home-value",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/amenities/resort-pool.jpeg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin home value estimate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Home Value Estimate | Sun City Summerlin | Dr. Jan Duffy",
    description: "Get a free, instant home value estimate for your property.",
    images: ["https://www.suncityvegas.com/images/amenities/resort-pool.jpeg"],
  },
};

export default function HomeValuePage() {
  // RealScout Home Value Widget HTML
  const widgetHtml = `<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw" include-name include-phone></realscout-home-value>`;

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Home Value", href: "/home-value" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 mx-auto">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Free Home Value Estimate
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Get an instant, accurate estimate of your home&apos;s current market value. Perfect for planning your next move to Sun City Summerlin.
              </p>
            </div>
          </div>
        </section>

        {/* Home Value Widget Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-three border border-[#C4A574]/20 p-6 md:p-8">
                {/* RealScout Home Value Widget - Using dangerouslySetInnerHTML per integration rules */}
                <div 
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: widgetHtml }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                Why Get a Home Value Estimate?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#8B5E3C]/10 rounded-full mb-4 mx-auto">
                    <Home className="w-8 h-8 text-[#8B5E3C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Plan Your Move
                  </h3>
                  <p className="text-[#2D2A26]">
                    Understand your home&apos;s value to make informed decisions about your next purchase at Sun City Summerlin.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#8B5E3C]/10 rounded-full mb-4 mx-auto">
                    <TrendingUp className="w-8 h-8 text-[#8B5E3C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Market Insights
                  </h3>
                  <p className="text-[#2D2A26]">
                    Get current market data and trends to understand how your property compares to similar homes in the area.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#8B5E3C]/10 rounded-full mb-4 mx-auto">
                    <Calculator className="w-8 h-8 text-[#8B5E3C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Accurate Estimates
                  </h3>
                  <p className="text-[#2D2A26]">
                    Receive data-driven estimates based on recent sales, market trends, and property characteristics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                What&apos;s Next?
              </h2>
              <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-[#8B5E3C] text-white rounded-full flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#8B5E3C] mb-2 font-playfair">
                      Get Your Estimate
                    </h3>
                    <p className="text-[#2D2A26]">
                      Use the tool above to get an instant estimate of your home&apos;s value.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-[#8B5E3C] text-white rounded-full flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#8B5E3C] mb-2 font-playfair">
                      Review Your Results
                    </h3>
                    <p className="text-[#2D2A26]">
                      Review your estimate and compare it with similar properties in your area.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-[#8B5E3C] text-white rounded-full flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#8B5E3C] mb-2 font-playfair">
                      Connect with Dr. Jan Duffy
                    </h3>
                    <p className="text-[#2D2A26]">
                      Schedule a consultation to discuss your home value, explore <Link href="/homes-for-sale" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">homes for sale</Link> in Sun City Summerlin, or learn more about the <Link href="/amenities" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">amenities</Link> available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Explore Sun City Summerlin?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Once you know your home&apos;s value, let&apos;s discuss your options for finding your perfect 55+ home in Sun City Summerlin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7027180042"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#8B5E3C] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Call (702) 718-0042
                </a>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                Explore More
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/homes-for-sale"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-[#8B5E3C] mb-2 font-playfair">
                    Homes for Sale
                  </h3>
                  <p className="text-[#2D2A26] text-sm">
                    View current listings in Sun City Summerlin
                  </p>
                </Link>
                <Link
                  href="/amenities"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-[#8B5E3C] mb-2 font-playfair">
                    Amenities
                  </h3>
                  <p className="text-[#2D2A26] text-sm">
                    4 golf courses, 3 rec centers, 80+ clubs
                  </p>
                </Link>
                <Link
                  href="/lifestyle"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-[#8B5E3C] mb-2 font-playfair">
                    Lifestyle
                  </h3>
                  <p className="text-[#2D2A26] text-sm">
                    Active adult community living
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
