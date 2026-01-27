import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import { Phone, ArrowRight, Check, Home, DollarSign, FileText, Shield, Users, TrendingUp, Truck, BookOpen } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

export const metadata: Metadata = {
  title: "First-Time Homebuyer Guide: Sun City Summerlin 55+ Community",
  description:
    "Complete guide for first-time homebuyers considering Sun City Summerlin. Learn about the buying process, financing, inspections, and what to expect in a 55+ active adult community.",
  alternates: {
    canonical: "https://www.suncityvegas.com/resources/first-time-buyers",
  },
  openGraph: {
    title: "First-Time Homebuyer Guide: Sun City Summerlin 55+ Community",
    description:
      "Complete guide for first-time homebuyers considering Sun City Summerlin, including buying process and financing.",
    url: "https://www.suncityvegas.com/resources/first-time-buyers",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/resources/first-time-buyers-hero.jpg",
        width: 1200,
        height: 630,
        alt: "First-time homebuyer guide for Sun City Summerlin",
      },
    ],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function FirstTimeBuyersPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "First-Time Buyers", href: "/resources/first-time-buyers" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#5D7A5D] to-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <div className="flex justify-center mb-6">
                  <Home className="w-16 h-16 text-[#D4AF37]" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  First-Time Homebuyer Guide
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                  Your Complete Guide to Buying Your First Home in Sun City Summerlin
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  Buying your first home in a 55+ community is an exciting milestone. This guide walks you through every step of the process, from getting pre-approved to closing day.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-[#FDF8F3]">
                <Image
                  src="/images/resources/first-time-buyers-hero.jpg"
                  alt="First-time homebuyer guide for Sun City Summerlin"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <div className="prose prose-lg max-w-none text-[#2D2A26] space-y-4">
                  <p className="text-xl font-semibold text-[#8B5E3C]">
                    Buying your first home in Sun City Summerlin is an exciting journey. Whether you're downsizing from a larger home or buying your first property, this guide will help you navigate the process with confidence.
                  </p>
                  <p>
                    As a first-time buyer in a 55+ community, you may have questions about age restrictions, HOA fees, financing, and the buying process. This comprehensive guide covers everything you need to know.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  The Homebuying Process: Step by Step
                </h2>
              </ScrollAnimation>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Get Pre-Approved",
                    icon: DollarSign,
                    description:
                      "Before you start looking at homes, get pre-approved for a mortgage. This tells you how much you can afford and shows sellers you're a serious buyer. Work with a lender who understands 55+ community financing.",
                  },
                  {
                    step: "2",
                    title: "Work with a Local Agent",
                    icon: Users,
                    description:
                      "Find a real estate agent who specializes in Sun City Summerlin. They'll understand the community, know what's available, and can guide you through the unique aspects of buying in a 55+ community.",
                  },
                  {
                    step: "3",
                    title: "Start Your Home Search",
                    icon: Home,
                    description:
                      "Begin looking at homes that match your budget and preferences. Consider factors like location within the community, proximity to amenities, floor plan, and condition. Take your time and see multiple homes.",
                  },
                  {
                    step: "4",
                    title: "Make an Offer",
                    icon: FileText,
                    description:
                      "When you find the right home, your agent will help you make an offer. This includes the purchase price, contingencies (like inspection and financing), and proposed closing date. Your agent will negotiate on your behalf.",
                  },
                  {
                    step: "5",
                    title: "Home Inspection",
                    icon: Shield,
                    description:
                      "Once your offer is accepted, schedule a professional home inspection. This identifies any issues with the property. You can negotiate repairs or price adjustments based on inspection findings.",
                  },
                  {
                    step: "6",
                    title: "Finalize Financing",
                    icon: DollarSign,
                    description:
                      "Work with your lender to finalize your mortgage. Provide any requested documentation, lock in your interest rate, and complete the underwriting process. Your lender will coordinate the appraisal.",
                  },
                  {
                    step: "7",
                    title: "Closing",
                    icon: Check,
                    description:
                      "On closing day, you'll sign all the paperwork, pay closing costs, and receive the keys to your new home. Your agent and lender will guide you through this process.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <ScrollAnimation key={item.step} delay={index * 100}>
                      <div className="bg-white rounded-lg p-6 border-l-4 border-[#8B5E3C]">
                        <div className="flex items-start gap-4">
                          <div className="bg-[#8B5E3C] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                            {item.step}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Icon className="w-6 h-6 text-[#8B5E3C]" />
                              <h3 className="text-xl font-bold text-[#8B5E3C] font-playfair">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-[#2D2A26] leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Understanding 55+ Communities */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  Understanding 55+ Communities
                </h2>
              </ScrollAnimation>
              <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Age Restrictions
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Sun City Summerlin is a 55+ community, meaning at least one resident must be 55 or older. No one under 19 can live in the community permanently, though grandchildren can visit. This age restriction is legally enforceable and helps maintain the active adult lifestyle.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    HOA Fees
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Your monthly HOA fee (approximately $165) covers access to all amenities, maintenance of common areas, and guard-gated security. This is separate from your mortgage payment and is required for all homeowners.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Community Rules
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Like all communities, Sun City Summerlin has rules and regulations. These cover things like parking, landscaping, exterior modifications, and noise. Understanding these rules before you buy helps ensure the community is a good fit for your lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financing Options */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  Financing Your First Home
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Conventional Loans",
                    description:
                      "Traditional mortgages with down payments typically ranging from 3-20%. Good credit and stable income are required.",
                  },
                  {
                    title: "FHA Loans",
                    description:
                      "Government-backed loans with lower down payment requirements (as low as 3.5%). More flexible credit requirements.",
                  },
                  {
                    title: "VA Loans",
                    description:
                      "For eligible veterans and active military. No down payment required and no private mortgage insurance.",
                  },
                  {
                    title: "Cash Purchase",
                    description:
                      "If you have the funds, buying with cash can make your offer more competitive and eliminate financing contingencies.",
                  },
                ].map((option, index) => (
                  <ScrollAnimation key={option.title} delay={index * 100}>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        {option.title}
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">{option.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What to Look For */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  What to Look For in Your First Home
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Location Within Community",
                    items: [
                      "Proximity to recreation centers",
                      "Golf course views (if desired)",
                      "Mountain views",
                      "Quiet vs. active areas",
                    ],
                  },
                  {
                    title: "Home Condition",
                    items: [
                      "Age and maintenance history",
                      "Recent updates or renovations",
                      "Roof and HVAC age",
                      "Foundation and structural integrity",
                    ],
                  },
                  {
                    title: "Floor Plan",
                    items: [
                      "Number of bedrooms/bathrooms",
                      "Layout and flow",
                      "Storage space",
                      "Outdoor living space",
                    ],
                  },
                  {
                    title: "Future Needs",
                    items: [
                      "Accessibility features",
                      "Single-story design",
                      "Low-maintenance features",
                      "Age-in-place considerations",
                    ],
                  },
                ].map((category, index) => (
                  <ScrollAnimation key={category.title} delay={index * 100}>
                    <div className="bg-[#FDF8F3] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        {category.title}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[#2D2A26]">
                            <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Common First-Time Buyer Questions
                </h2>
              </ScrollAnimation>
              <div className="space-y-4">
                {[
                  {
                    q: "Do I need a real estate agent?",
                    a: "While not legally required, working with an experienced agent is highly recommended. They'll guide you through the process, negotiate on your behalf, handle paperwork, and help you avoid costly mistakes. The seller typically pays the agent commission, so it's usually free for buyers.",
                  },
                  {
                    q: "How much do I need for a down payment?",
                    a: "Down payment requirements vary by loan type. Conventional loans typically require 3-20%, FHA loans require 3.5%, and VA loans require 0%. However, a larger down payment can lower your monthly payment and eliminate private mortgage insurance.",
                  },
                  {
                    q: "What are closing costs?",
                    a: "Closing costs typically range from 2-5% of the home's purchase price. These include loan origination fees, title insurance, escrow fees, property taxes, and prepaid items. Your lender will provide a detailed estimate early in the process.",
                  },
                  {
                    q: "How long does the buying process take?",
                    a: "Typically 30-45 days from accepted offer to closing, though it can vary. Factors include financing approval, inspection negotiations, and how quickly all parties can complete required tasks.",
                  },
                  {
                    q: "What if the inspection finds problems?",
                    a: "You can negotiate with the seller to fix issues, reduce the price, or provide credits. In some cases, you may choose to walk away if problems are too significant. Your agent will guide you through this process.",
                  },
                ].map((faq, index) => (
                  <ScrollAnimation key={faq.q} delay={index * 100}>
                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        {faq.q}
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">{faq.a}</p>
                    </details>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">Related Resources</h2>
                <ul className="space-y-2 text-[#2D2A26]">
                  <li>
                    <Link href="/resources/market-insights" className="inline-flex items-center gap-2 text-[#8B5E3C] hover:underline font-medium">
                      <TrendingUp className="w-4 h-4" /> Market Insights &amp; Trends
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/moving-guide" className="inline-flex items-center gap-2 text-[#8B5E3C] hover:underline font-medium">
                      <Truck className="w-4 h-4" /> Moving to Sun City Summerlin Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="inline-flex items-center gap-2 text-[#8B5E3C] hover:underline font-medium">
                      <BookOpen className="w-4 h-4" /> All Resources
                    </Link>
                  </li>
                </ul>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-playfair">
                  Ready to Buy Your First Home?
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Dr. Jan Duffy specializes in helping first-time buyers find their perfect home in Sun City Summerlin. With over 30 years of experience, she'll guide you through every step of the process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+17027180043"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#2D2A26] rounded-md font-semibold hover:bg-[#D4AF37]/90 transition-colors min-h-[48px] touch-manipulation"
                  >
                    <Phone className="w-5 h-5" />
                    Call/Text: (702) 718-0043
                  </a>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 min-h-[48px] px-6"
                  >
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
