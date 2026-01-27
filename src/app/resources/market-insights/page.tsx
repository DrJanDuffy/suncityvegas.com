import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/../../components/navbar";
import Footer from "@/../../components/footer";
import Breadcrumbs from "@/../../components/Breadcrumbs";
import MarketInsights from "@/../../components/MarketInsights";
import { TrendingUp, Truck, Home, BookOpen } from "lucide-react";
import ScrollAnimation from "@/../../components/scroll-animation";

export const metadata: Metadata = {
  title: "Real Estate Market Insights | Las Vegas Housing Market Trends 2026",
  description:
    "Stay informed with the latest real estate market insights, mortgage rate updates, home price trends, and expert forecasts for Las Vegas and Sun City Summerlin.",
  alternates: {
    canonical: "https://www.suncityvegas.com/resources/market-insights",
  },
  openGraph: {
    title: "Real Estate Market Insights | Las Vegas Housing Market Trends 2026",
    description:
      "Latest real estate market insights, mortgage rates, and housing trends for Las Vegas and Sun City Summerlin.",
    url: "https://www.suncityvegas.com/resources/market-insights",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/resources/market-insights-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Real estate market insights and trends",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Market Insights | Las Vegas Housing Trends",
    description: "Stay informed with the latest real estate market insights and trends.",
    images: ["https://www.suncityvegas.com/images/resources/market-insights-hero.jpg"],
  },
};

export default function MarketInsightsPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Market Insights", href: "/resources/market-insights" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#5D7A5D] to-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <div className="flex justify-center mb-6">
                  <TrendingUp className="w-16 h-16 text-[#D4AF37]" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  Real Estate Market Insights
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                  Stay Informed with Latest Market Trends & Expert Forecasts
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  Get the latest insights on mortgage rates, home prices, market trends, and expert forecasts to help you make informed decisions about buying or selling in Sun City Summerlin.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Market Insights Component */}
        <MarketInsights limit={6} />

        {/* Additional Context Section */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  How Market Trends Affect Sun City Summerlin
                </h2>
              </ScrollAnimation>
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-md space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Local Market Expertise
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    While national trends provide valuable context, the Sun City Summerlin market has its own unique dynamics. As a 55+ active adult community, it often performs differently than the broader Las Vegas market.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Why This Matters for You
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Understanding market trends helps you make informed decisions about timing your purchase or sale. Whether you're buying your first home in Sun City Summerlin or selling to downsize, market insights can help you navigate the process with confidence.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Get Personalized Insights
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    For personalized market insights specific to Sun City Summerlin, contact Dr. Jan Duffy. With over 30 years of experience in Las Vegas real estate, she can help you understand how current market conditions affect your specific situation.
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 rounded-lg border border-[#C4A574]/30 bg-[#FDF8F3]">
                <h3 className="text-lg font-bold text-[#8B5E3C] mb-4 font-playfair">Related Resources</h3>
                <ul className="space-y-2 text-[#2D2A26]">
                  <li>
                    <Link href="/resources/moving-guide" className="inline-flex items-center gap-2 text-[#8B5E3C] hover:underline font-medium">
                      <Truck className="w-4 h-4" /> Moving to Sun City Summerlin Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/first-time-buyers" className="inline-flex items-center gap-2 text-[#8B5E3C] hover:underline font-medium">
                      <Home className="w-4 h-4" /> First-Time Homebuyer Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="inline-flex items-center gap-2 text-[#8B5E3C] hover:underline font-medium">
                      <BookOpen className="w-4 h-4" /> All Resources
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
