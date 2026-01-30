import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import { Phone, Calendar, ArrowRight, MapPin, DollarSign, Home } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

export const metadata: Metadata = {
  title: "Moving from California to Sun City Summerlin: Complete Relocation Guide (2025)",
  description:
    "Thinking of relocating from California to Sun City Summerlin? Learn about taxes, cost of living, climate, and why thousands of Californians choose Las Vegas for retirement.",
  alternates: {
    canonical: "https://www.suncityvegas.com/blog/california-to-sun-city-summerlin",
  },
  openGraph: {
    title: "Moving from California to Sun City Summerlin: Complete Relocation Guide",
    description:
      "Complete guide for Californians relocating to Sun City Summerlin, including taxes, cost of living, and lifestyle benefits.",
    url: "https://www.suncityvegas.com/blog/california-to-sun-city-summerlin",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-26T00:00:00Z",
    modifiedTime: "2025-01-26T00:00:00Z",
    authors: ["Dr. Jan Duffy"],
    images: [
      {
        url: "https://www.suncityvegas.com/images/blog/california-relocation-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Moving from California to Sun City Summerlin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moving from California to Sun City Summerlin: Complete Guide",
    description: "Complete relocation guide for Californians moving to Las Vegas.",
    images: ["https://www.suncityvegas.com/images/blog/california-relocation-hero.jpg"],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do so many Californians move to Sun City Summerlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Californians move to Sun City Summerlin for lower taxes (no state income tax), lower cost of living, affordable housing, no state income tax, better weather (less humidity), and an active 55+ lifestyle. Many can sell their California home and buy a similar or larger home in Sun City Summerlin for half the price.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save on taxes by moving from California to Nevada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nevada has no state income tax, while California's top rate is 13.3%. For a retiree with $100,000 in taxable income, that's $13,300 in annual savings. Nevada also has lower property taxes (around 0.75% vs California's 1%+) and no estate tax.",
      },
    },
    {
      "@type": "Question",
      name: "Is it cheaper to live in Sun City Summerlin than California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, significantly. Housing costs are 50-70% less than California coastal areas. A $800,000 California home might cost $400,000 in Sun City Summerlin. Property taxes, utilities, and general cost of living are also lower. Overall, many retirees save $20,000-50,000+ per year.",
      },
    },
  ],
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Moving from California to Sun City Summerlin: Complete Relocation Guide (2025)",
  description: "Complete guide for Californians relocating to Sun City Summerlin.",
  datePublished: "2025-01-26T00:00:00Z",
  dateModified: "2025-01-26T00:00:00Z",
  author: {
    "@type": "Person",
    name: "Dr. Jan Duffy",
    url: "https://www.suncityvegas.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    logo: {
      "@type": "ImageObject",
      url: "https://www.suncityvegas.com/images/logo/logo.svg",
    },
  },
  image: "https://www.suncityvegas.com/images/blog/california-relocation-hero.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.suncityvegas.com/blog/california-to-sun-city-summerlin",
  },
};

export default function CaliforniaRelocationPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "California to Sun City Summerlin", href: "/blog/california-to-sun-city-summerlin" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
                Relocation Guide
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair">
                Moving from California to Sun City Summerlin: Complete Guide
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <time dateTime="2025-01-26">January 26, 2025</time>
                </div>
                <span>•</span>
                <span>By Dr. Jan Duffy</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-three bg-[#FDF8F3]">
                <Image
                  src="/images/blog/california-relocation-hero.jpg"
                  alt="Moving from California to Sun City Summerlin Las Vegas"
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

        {/* Article Content */}
        <div className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <ScrollAnimation>
                <div className="prose prose-lg max-w-none text-[#2D2A26] mb-12">
                  <p className="text-xl md:text-2xl font-semibold text-[#8B5E3C] leading-relaxed mb-6">
                    Thousands of Californians relocate to Sun City Summerlin each year, and for good reason. Lower taxes, affordable housing, and an active 55+ lifestyle make it an ideal retirement destination.
                  </p>
                  <p className="text-lg leading-relaxed">
                    As someone who has helped hundreds of California families make the move, I understand the questions and concerns. This comprehensive guide covers everything you need to know about relocating from California to Sun City Summerlin.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Why Californians Move */}
              <ScrollAnimation delay={100}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Why Californians Choose Sun City Summerlin
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#5D7A5D]">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair flex items-center gap-3">
                        <DollarSign className="w-6 h-6" />
                        Lower Cost of Living
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Housing costs are 50-70% less than California coastal areas. Many retirees can sell their California home and buy a similar or larger home in Sun City Summerlin for half the price, with money left over.
                      </p>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#8B5E3C]">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair flex items-center gap-3">
                        <MapPin className="w-6 h-6" />
                        No State Income Tax
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Nevada has no state income tax, while California's top rate is 13.3%. For retirees with significant income, this can mean $10,000-50,000+ in annual tax savings.
                      </p>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#C4A574]">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair flex items-center gap-3">
                        <Home className="w-6 h-6" />
                        Affordable Housing
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Sun City Summerlin homes range from $275,000 to $1,200,000+, with most in the $400,000-600,000 range. Compare that to California where similar homes cost $800,000-2,000,000+.
                      </p>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#5D7A5D]">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        Active 55+ Lifestyle
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Three recreation centers, three golf courses, 80+ clubs, and year-round activities. It's like living in a resort community designed specifically for active adults.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Tax Comparison */}
              <ScrollAnimation delay={200}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Tax Savings: California vs Nevada
                  </h2>
                  <div className="bg-gradient-to-r from-[#8B5E3C] to-[#5D7A5D] text-white rounded-lg p-8 md:p-12 mb-6">
                    <p className="text-2xl md:text-3xl font-bold mb-6 text-center">
                      Annual Tax Savings Example
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white/10 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4">California</h3>
                        <ul className="space-y-2 text-lg">
                          <li>State Income Tax: 13.3% (top rate)</li>
                          <li>Property Tax: ~1.1%</li>
                          <li>Estate Tax: Yes</li>
                          <li className="pt-4 border-t border-white/20">
                            <strong>On $100k income: $13,300/year</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white/10 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4">Nevada</h3>
                        <ul className="space-y-2 text-lg">
                          <li>State Income Tax: 0%</li>
                          <li>Property Tax: ~0.75%</li>
                          <li>Estate Tax: No</li>
                          <li className="pt-4 border-t border-white/20">
                            <strong>On $100k income: $0/year</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-center text-xl mt-6 font-semibold">
                      Potential Annual Savings: $13,300+ (on $100k income)
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-[#2D2A26]">
                    For retirees with $100,000 in taxable income, moving from California to Nevada saves $13,300 per year in state income tax alone. Over 20 years of retirement, that's $266,000 in savings. Add in lower property taxes, no estate tax, and lower cost of living, and the savings are substantial.
                  </p>
                </section>
              </ScrollAnimation>

              {/* Cost of Living Comparison */}
              <ScrollAnimation delay={300}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Cost of Living Comparison
                  </h2>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                      <thead>
                        <tr className="bg-[#8B5E3C] text-white">
                          <th className="border border-[#8B5E3C] p-4 text-left font-semibold">Expense</th>
                          <th className="border border-[#8B5E3C] p-4 text-left font-semibold">California (Coastal)</th>
                          <th className="border border-[#8B5E3C] p-4 text-left font-semibold">Sun City Summerlin</th>
                          <th className="border border-[#8B5E3C] p-4 text-left font-semibold">Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-[#FDF8F3]">
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">Median Home Price</td>
                          <td className="border border-gray-200 p-4">$800,000-1,200,000</td>
                          <td className="border border-gray-200 p-4">$400,000-600,000</td>
                          <td className="border border-gray-200 p-4 font-semibold text-[#5D7A5D]">50-70% less</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">Property Tax (on $500k home)</td>
                          <td className="border border-gray-200 p-4">~$5,500/year</td>
                          <td className="border border-gray-200 p-4">~$3,750/year</td>
                          <td className="border border-gray-200 p-4 font-semibold text-[#5D7A5D]">$1,750/year</td>
                        </tr>
                        <tr className="bg-[#FDF8F3]">
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">State Income Tax (on $100k)</td>
                          <td className="border border-gray-200 p-4">$13,300/year</td>
                          <td className="border border-gray-200 p-4">$0/year</td>
                          <td className="border border-gray-200 p-4 font-semibold text-[#5D7A5D]">$13,300/year</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">Utilities (Monthly)</td>
                          <td className="border border-gray-200 p-4">$200-300</td>
                          <td className="border border-gray-200 p-4">$150-250</td>
                          <td className="border border-gray-200 p-4 font-semibold text-[#5D7A5D]">$50-100/month</td>
                        </tr>
                        <tr className="bg-[#FDF8F3]">
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">HOA Fee</td>
                          <td className="border border-gray-200 p-4">$300-500/month</td>
                          <td className="border border-gray-200 p-4">~$165/month</td>
                          <td className="border border-gray-200 p-4 font-semibold text-[#5D7A5D]">$135-335/month</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-lg leading-relaxed text-[#2D2A26]">
                    The cost of living in Sun City Summerlin is significantly lower than California coastal areas. Many retirees find they can maintain or improve their lifestyle while spending less money overall.
                  </p>
                </section>
              </ScrollAnimation>

              {/* Climate Comparison */}
              <ScrollAnimation delay={400}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Climate: California vs Las Vegas
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#FDF8F3] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        California Coastal
                      </h3>
                      <ul className="space-y-2 text-[#2D2A26]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#C4A574] font-bold">•</span>
                          <span>Mild year-round (60-75°F average)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C4A574] font-bold">•</span>
                          <span>High humidity near coast</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C4A574] font-bold">•</span>
                          <span>Foggy mornings common</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C4A574] font-bold">•</span>
                          <span>Less sunshine (marine layer)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        Sun City Summerlin (Las Vegas)
                      </h3>
                      <ul className="space-y-2 text-[#2D2A26]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>Warm summers, mild winters (45-105°F)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>Low humidity (desert climate)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>300+ days of sunshine per year</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>Higher elevation = 5-10° cooler than city</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-[#2D2A26] mt-6">
                    Las Vegas offers more sunshine and less humidity than California coastal areas. The higher elevation of Sun City Summerlin (3,000 feet) means temperatures are 5-10 degrees cooler than downtown Las Vegas, making summers more comfortable.
                  </p>
                </section>
              </ScrollAnimation>

              {/* Relocation Process */}
              <ScrollAnimation delay={500}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    The Relocation Process
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white border-l-4 border-[#5D7A5D] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        1. Research & Planning
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Start by visiting Sun City Summerlin to see the community firsthand. Schedule a tour with me to see homes, amenities, and get a feel for the lifestyle. Research neighborhoods, floor plans, and pricing.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-[#8B5E3C] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        2. Financial Planning
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Work with a financial advisor to understand tax implications, retirement account distributions, and how your California assets will be treated. Consider timing of the sale of your California home to maximize tax benefits.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-[#C4A574] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        3. Home Search & Purchase
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Work with a local real estate agent (like me!) who understands Sun City Summerlin. I can help you find the right home, negotiate the best price, and navigate the purchase process.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-[#5D7A5D] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        4. Moving & Settling In
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Plan your move, update your address, transfer utilities, and get involved in the community. Join clubs, meet neighbors, and start enjoying your new active lifestyle.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* FAQ Section */}
              <ScrollAnimation delay={600}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 font-playfair">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Why do so many Californians move to Sun City Summerlin?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Californians move to Sun City Summerlin for lower taxes (no state income tax), lower cost of living, affordable housing, no state income tax, better weather (less humidity), and an active 55+ lifestyle. Many can sell their California home and buy a similar or larger home in Sun City Summerlin for half the price.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        How much can I save on taxes by moving from California to Nevada?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Nevada has no state income tax, while California's top rate is 13.3%. For a retiree with $100,000 in taxable income, that's $13,300 in annual savings. Nevada also has lower property taxes (around 0.75% vs California's 1%+) and no estate tax.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Is it cheaper to live in Sun City Summerlin than California?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Yes, significantly. Housing costs are 50-70% less than California coastal areas. A $800,000 California home might cost $400,000 in Sun City Summerlin. Property taxes, utilities, and general cost of living are also lower. Overall, many retirees save $20,000-50,000+ per year.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Will I miss California's weather?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Las Vegas offers more sunshine (300+ days per year) and less humidity than California coastal areas. The higher elevation of Sun City Summerlin means it's 5-10 degrees cooler than downtown Las Vegas. Many Californians actually prefer the dry desert climate and abundant sunshine.
                      </p>
                    </details>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Related Links */}
              <ScrollAnimation delay={700}>
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Related Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                      href="/blog/pros-and-cons-sun-city-summerlin"
                      className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20"
                    >
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        Pros and Cons of Sun City Summerlin
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        An honest assessment of what makes Sun City Summerlin special.
                      </p>
                      <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link
                      href="/homes-for-sale"
                      className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20"
                    >
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        Browse Homes for Sale
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        See current listings in Sun City Summerlin and find your perfect home.
                      </p>
                      <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                        View Listings <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </section>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white" aria-label="CTA">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <ScrollAnimation>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-playfair">
                    Ready to Make the Move from California?
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                    Schedule a tour with Dr. Jan Duffy to see Sun City Summerlin firsthand. I've helped hundreds of California families make the move—let me help you find your perfect home.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="tel:7027180042"
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#2D2A26] rounded-md font-semibold hover:bg-[#D4AF37]/90 transition-colors min-h-[48px] touch-manipulation"
                    >
                      <Phone className="w-5 h-5" />
                      Call/Text: (702) 718-0042
                    </a>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white/10 min-h-[48px] px-6"
                    >
                      <Link href="/contact">Schedule Online</Link>
                    </Button>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
        </section>
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replaceAll("<", "\\u003c"),
          }}
        />
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema).replaceAll("<", "\\u003c"),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
