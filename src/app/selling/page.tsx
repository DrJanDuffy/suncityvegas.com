import type { Metadata } from "next";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import Link from "next/link";
import ScrollAnimation from "@components/scroll-animation";
import ScheduleTour from "@components/ScheduleTour";
import { Button } from "@components/ui/button";
import { Phone, DollarSign, TrendingUp, Clock, Shield, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sell Your Sun City Summerlin Home | Expert Real Estate Services | Dr. Jan Duffy",
  description:
    "Sell your Sun City Summerlin home with confidence. Expert pricing, marketing, and negotiation from Dr. Jan Duffy, your local Sun City specialist. Free home valuation. Call (702) 718-0043",
  alternates: {
    canonical: "https://www.suncityvegas.com/selling",
  },
  openGraph: {
    title: "Sell Your Sun City Summerlin Home | Expert Real Estate Services",
    description:
      "Expert real estate services for selling your Sun City Summerlin home. Free valuation, professional marketing, and proven results.",
    url: "https://www.suncityvegas.com/selling",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Your Sun City Summerlin Home | Expert Real Estate Services",
    description: "Expert pricing, marketing, and negotiation for Sun City Summerlin sellers.",
  },
};

const services = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Free Home Valuation",
    description:
      "Get an accurate market analysis of your Sun City Summerlin home's value based on recent sales, current market conditions, and comparable properties.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Strategic Pricing",
    description:
      "Price your home competitively to maximize value while ensuring a timely sale. We analyze market trends and buyer behavior in the 55+ community.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Fast, Efficient Process",
    description:
      "Streamlined selling process designed for active adults. We handle the details so you can focus on your next chapter.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Expert Negotiation",
    description:
      "Protect your interests with skilled negotiation. We work to get you the best terms and price for your Sun City Summerlin home.",
  },
];

const sellingSteps = [
  {
    step: "1",
    title: "Free Home Valuation",
    description: "Schedule a consultation to get your home's current market value.",
  },
  {
    step: "2",
    title: "Marketing Strategy",
    description: "Professional photography, staging advice, and targeted marketing to reach qualified buyers.",
  },
  {
    step: "3",
    title: "Showings & Offers",
    description: "We coordinate showings and help you evaluate offers from serious buyers.",
  },
  {
    step: "4",
    title: "Closing Support",
    description: "Expert guidance through inspections, negotiations, and closing to ensure a smooth transaction.",
  },
];

export default function SellingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen bg-white">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Selling", href: "/selling" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#FDF8F3] to-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                  Sell Your Sun City Summerlin Home with Confidence
                </h1>
                <p className="text-lg md:text-xl text-[#2D2A26] mb-8 leading-relaxed">
                  Expert real estate services tailored for Sun City Summerlin sellers. Get your free home valuation and discover how we can help you achieve your selling goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 min-h-[44px]">
                    <Link href="/home-value">Get Free Valuation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C]/10 min-h-[44px]">
                    <a href="tel:+17027180043">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (702) 718-0043
                    </a>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-4 text-center font-playfair">
                  Why Choose Dr. Jan Duffy to Sell Your Home?
                </h2>
                <p className="text-lg text-[#2D2A26] text-center mb-12 max-w-2xl mx-auto">
                  As a Sun City Summerlin specialist, I understand the unique market dynamics of this 55+ community and how to position your home for maximum appeal.
                </p>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {services.map((service, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 h-full">
                      <div className="text-[#8B5E3C] mb-4">{service.icon}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        {service.title}
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">{service.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selling Process */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-4 text-center font-playfair">
                  Our Selling Process
                </h2>
                <p className="text-lg text-[#2D2A26] text-center mb-12 max-w-2xl mx-auto">
                  A straightforward, stress-free approach designed for active adults selling in Sun City Summerlin.
                </p>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {sellingSteps.map((step, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="bg-white rounded-lg p-6 shadow-md h-full">
                      <div className="w-12 h-12 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center text-xl font-bold mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        {step.title}
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">{step.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  Sun City Summerlin Market Insights
                </h2>
              </ScrollAnimation>

              <div className="bg-[#FDF8F3] rounded-lg p-8 md:p-12">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#5D7A5D] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#2D2A26] font-semibold mb-1">Strong Buyer Demand</p>
                      <p className="text-[#2D2A26]">
                        The 55+ active adult market in Las Vegas remains strong, with steady demand for Sun City Summerlin homes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#5D7A5D] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#2D2A26] font-semibold mb-1">Competitive Pricing</p>
                      <p className="text-[#2D2A26]">
                        Homes priced correctly for the current market typically sell within 30-60 days in Sun City Summerlin.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#5D7A5D] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#2D2A26] font-semibold mb-1">Premium Features Matter</p>
                      <p className="text-[#2D2A26]">
                        Golf course views, updated kitchens, and single-story layouts command premium prices in this community.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#5D7A5D] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#2D2A26] font-semibold mb-1">Expert Marketing</p>
                      <p className="text-[#2D2A26]">
                        Professional photography, virtual tours, and targeted marketing to 55+ buyers maximize your home's visibility.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-playfair">
                  Ready to Sell Your Sun City Summerlin Home?
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Get your free home valuation and learn how we can help you achieve your selling goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#8B5E3C] hover:bg-white/90 min-h-[44px]">
                    <Link href="/home-value">Get Free Valuation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 min-h-[44px]">
                    <a href="tel:+17027180043">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (702) 718-0043
                    </a>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Schedule Tour Section */}
        <ScheduleTour />
      </main>
      <Footer />
    </>
  );
}
