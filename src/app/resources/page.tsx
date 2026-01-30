import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { BookOpen, TrendingUp, Truck, Home, ArrowRight } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

export const metadata: Metadata = {
  title: "Sun City Summerlin Resources | Guides, Market Insights & Moving Tips",
  description:
    "Free resources for Sun City Summerlin buyers and sellers: market insights, moving guide, first-time homebuyer tips, and expert advice from Dr. Jan Duffy.",
  alternates: {
    canonical: "https://www.suncityvegas.com/resources",
  },
  openGraph: {
    title: "Sun City Summerlin Resources | Guides & Market Insights",
    description:
      "Market insights, moving guide, first-time buyer tips, and expert advice for Sun City Summerlin.",
    url: "https://www.suncityvegas.com/resources",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
  },
};

const resources = [
  {
    href: "/resources/market-insights",
    title: "Market Insights",
    description:
      "Latest real estate market trends, mortgage rates, home prices, and expert forecasts for Las Vegas and Sun City Summerlin.",
    icon: TrendingUp,
  },
  {
    href: "/resources/moving-guide",
    title: "Moving Guide",
    description:
      "Complete relocation guide: timeline, utilities, HOA registration, and tips for a smooth move to Sun City Summerlin.",
    icon: Truck,
  },
  {
    href: "/resources/first-time-buyers",
    title: "First-Time Buyers",
    description:
      "Step-by-step guide for first-time homebuyers: financing, inspections, and what to expect in a 55+ community.",
    icon: Home,
  },
];

const resourcesWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.suncityvegas.com/resources",
  name: "Sun City Summerlin Resources | Guides, Market Insights & Moving Tips",
  description:
    "Free resources for Sun City Summerlin buyers and sellers: market insights, moving guide, first-time homebuyer tips, and expert advice from Dr. Jan Duffy.",
  url: "https://www.suncityvegas.com/resources",
};

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resourcesWebPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Resources", href: "/resources" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#5D7A5D] to-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <div className="flex justify-center mb-6">
                  <BookOpen className="w-16 h-16 text-[#D4AF37]" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  Sun City Summerlin Resources
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                  Guides, market insights, and tips to help you buy, sell, or move to Sun City Summerlin.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Resource cards */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Browse by Topic
                </h2>
              </ScrollAnimation>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {resources.map((r, i) => (
                  <ScrollAnimation key={r.href} delay={i * 100}>
                    <Link
                      href={r.href}
                      className="group block bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow border border-[#C4A574]/20"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <r.icon className="w-10 h-10 text-[#8B5E3C]" />
                        <h3 className="text-xl font-bold text-[#8B5E3C] font-playfair group-hover:text-[#5D7A5D] transition-colors">
                          {r.title}
                        </h3>
                      </div>
                      <p className="text-[#2D2A26] leading-relaxed mb-4">{r.description}</p>
                      <span className="inline-flex items-center gap-2 text-[#8B5E3C] font-medium group-hover:gap-3 transition-all">
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cross-links */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollAnimation>
                <p className="text-lg text-[#2D2A26] mb-6">
                  Explore <Link href="/amenities" className="text-[#8B5E3C] font-semibold hover:underline">amenities</Link>,{" "}
                  <Link href="/lifestyle" className="text-[#8B5E3C] font-semibold hover:underline">lifestyle</Link>, and{" "}
                  <Link href="/blog" className="text-[#8B5E3C] font-semibold hover:underline">blog</Link> for more on Sun City Summerlin.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5E3C] text-white rounded-md font-semibold hover:bg-[#8B5E3C]/90 transition-colors"
                >
                  Contact Dr. Jan Duffy
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
