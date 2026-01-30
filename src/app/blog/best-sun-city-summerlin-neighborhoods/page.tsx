import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import { Phone, Calendar, ArrowRight, MapPin, Home, Star } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

export const metadata: Metadata = {
  title: "Best Neighborhoods in Sun City Summerlin: Complete Guide (2025)",
  description:
    "Discover the best neighborhoods in Sun City Summerlin. Learn about different areas, home styles, price ranges, and find the perfect neighborhood for your 55+ lifestyle.",
  alternates: {
    canonical: "https://www.suncityvegas.com/blog/best-sun-city-summerlin-neighborhoods",
  },
  openGraph: {
    title: "Best Neighborhoods in Sun City Summerlin: Complete Guide (2025)",
    description:
      "Complete guide to the best neighborhoods in Sun City Summerlin, including home styles, price ranges, and lifestyle.",
    url: "https://www.suncityvegas.com/blog/best-sun-city-summerlin-neighborhoods",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-26T00:00:00Z",
    modifiedTime: "2025-01-26T00:00:00Z",
    authors: ["Dr. Jan Duffy"],
    images: [
      {
        url: "https://www.suncityvegas.com/images/blog/neighborhoods-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Best neighborhoods in Sun City Summerlin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Neighborhoods in Sun City Summerlin: Complete Guide",
    description: "Discover the best neighborhoods in Sun City Summerlin.",
    images: ["https://www.suncityvegas.com/images/blog/neighborhoods-hero.jpg"],
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
      name: "What are the best neighborhoods in Sun City Summerlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best neighborhoods in Sun City Summerlin depend on your preferences. Popular areas include golf course neighborhoods (Highland Falls, Palm Valley, Eagle Crest), neighborhoods near recreation centers, and areas with mountain views. Each neighborhood offers different home styles, price ranges, and proximity to amenities.",
      },
    },
    {
      "@type": "Question",
      name: "Are there different home styles in different neighborhoods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Sun City Summerlin was built in phases from 1989-2002, so different neighborhoods feature different architectural styles and home designs. Earlier phases may have more traditional designs, while later phases may have more contemporary features. All homes are single-story ranch-style.",
      },
    },
    {
      "@type": "Question",
      name: "Do neighborhoods have different price ranges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, price ranges vary by neighborhood. Golf course homes and homes with mountain views typically command higher prices. Homes range from approximately $275,000 to $1,200,000+ depending on size, location, condition, and views.",
      },
    },
  ],
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Neighborhoods in Sun City Summerlin: Complete Guide (2025)",
  description: "Complete guide to the best neighborhoods in Sun City Summerlin.",
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
  image: "https://www.suncityvegas.com/images/blog/neighborhoods-hero.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.suncityvegas.com/blog/best-sun-city-summerlin-neighborhoods",
  },
};

export default function BestNeighborhoodsPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Best Neighborhoods", href: "/blog/best-sun-city-summerlin-neighborhoods" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
                Neighborhood Guide
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair">
                Best Neighborhoods in Sun City Summerlin: Complete Guide
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <time dateTime="2025-01-26">January 26, 2025</time>
                </div>
                <span>•</span>
                <span>By Dr. Jan Duffy</span>
                <span>•</span>
                <span>10 min read</span>
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
                  src="/images/blog/neighborhoods-hero.jpg"
                  alt="Best neighborhoods in Sun City Summerlin with beautiful homes"
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
                    Sun City Summerlin is a large community with 7,781 homes spread across multiple neighborhoods, each with its own character, home styles, and advantages.
                  </p>
                  <p className="text-lg leading-relaxed">
                    As someone who has helped hundreds of buyers find their perfect home in Sun City Summerlin, I understand that choosing the right neighborhood is just as important as choosing the right home. This guide will help you understand the different neighborhoods and find the one that matches your lifestyle and preferences.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Overview */}
              <ScrollAnimation delay={100}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Understanding Sun City Summerlin's Neighborhoods
                  </h2>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                    <p className="text-lg text-[#2D2A26] leading-relaxed mb-4">
                      Sun City Summerlin was built in phases from 1989 to 2002, which means different neighborhoods feature different architectural styles, home designs, and lot sizes. While all neighborhoods share access to the same amenities (recreation centers, golf courses, etc.), each has its own unique character.
                    </p>
                    <p className="text-lg text-[#2D2A26] leading-relaxed">
                      The "best" neighborhood for you depends on your priorities: Do you want golf course views? Proximity to a specific recreation center? Mountain views? A particular home style? This guide will help you identify what matters most.
                    </p>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Golf Course Neighborhoods */}
              <ScrollAnimation delay={200}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Golf Course Neighborhoods
                  </h2>
                  <div className="space-y-8">
                    <div className="bg-white border-l-4 border-[#5D7A5D] rounded-lg p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Star className="w-6 h-6 text-[#D4AF37]" />
                        <h3 className="text-2xl font-bold text-[#8B5E3C] font-playfair">
                          Highland Falls Golf Course Area
                        </h3>
                      </div>
                      <p className="text-lg text-[#2D2A26] leading-relaxed mb-4">
                        Homes backing to or with views of Highland Falls Golf Course are highly sought after. This championship course offers stunning views of Red Rock Canyon and the Las Vegas Valley, making it a premium location.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#2D2A26]">
                        <div>
                          <p className="font-semibold mb-2">Price Range:</p>
                          <p>$500,000 - $1,200,000+</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Best For:</p>
                          <p>Golf enthusiasts, mountain views, premium locations</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border-l-4 border-[#8B5E3C] rounded-lg p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Star className="w-6 h-6 text-[#D4AF37]" />
                        <h3 className="text-2xl font-bold text-[#8B5E3C] font-playfair">
                          Palm Valley Golf Course Area
                        </h3>
                      </div>
                      <p className="text-lg text-[#2D2A26] leading-relaxed mb-4">
                        Homes near Palm Valley Golf Course offer beautiful views of mature palm trees, water features, and the well-maintained course. This area features traditional championship course views.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#2D2A26]">
                        <div>
                          <p className="font-semibold mb-2">Price Range:</p>
                          <p>$450,000 - $900,000+</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Best For:</p>
                          <p>Golf course living, traditional layouts, mature landscaping</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border-l-4 border-[#C4A574] rounded-lg p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Star className="w-6 h-6 text-[#D4AF37]" />
                        <h3 className="text-2xl font-bold text-[#8B5E3C] font-playfair">
                          Eagle Crest Executive Course Area
                        </h3>
                      </div>
                      <p className="text-lg text-[#2D2A26] leading-relaxed mb-4">
                        Homes near Eagle Crest offer views of the executive course and often feature the community's lowest rates for golf course proximity. Great for those who want golf course living at a more accessible price point.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#2D2A26]">
                        <div>
                          <p className="font-semibold mb-2">Price Range:</p>
                          <p>$400,000 - $750,000+</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">Best For:</p>
                          <p>Golf course views, value-conscious buyers, executive course access</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Recreation Center Proximity */}
              <ScrollAnimation delay={300}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Neighborhoods Near Recreation Centers
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-[#FDF8F3] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        Near Mountain Shadows Recreation Center
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed mb-4">
                        Homes within walking distance of Mountain Shadows Recreation Center offer convenient access to the largest fitness center, indoor pool, racquetball courts, and arts & crafts facilities.
                      </p>
                      <p className="text-[#2D2A26]">
                        <strong>Best For:</strong> Active residents who use the fitness center and pool regularly
                      </p>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        Near Desert Vista Recreation Center
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed mb-4">
                        The largest recreation center with the grand ballroom, this area is perfect for those who enjoy social events, tennis, and pickleball.
                      </p>
                      <p className="text-[#2D2A26]">
                        <strong>Best For:</strong> Social residents who attend events and use sports courts
                      </p>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        Near Pinnacle Recreation Center
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed mb-4">
                        Convenient access to Pinnacle's fitness center, pool, and sports courts. This area offers a good balance of amenities and home prices.
                      </p>
                      <p className="text-[#2D2A26]">
                        <strong>Best For:</strong> Residents who want convenient access to recreation facilities
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Mountain View Neighborhoods */}
              <ScrollAnimation delay={400}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Mountain View Neighborhoods
                  </h2>
                  <div className="bg-white border-l-4 border-[#5D7A5D] rounded-lg p-6 md:p-8">
                    <p className="text-lg text-[#2D2A26] leading-relaxed mb-4">
                      Many neighborhoods in Sun City Summerlin offer stunning views of Red Rock Canyon and the surrounding mountains. These views are particularly beautiful at sunset and add significant value to homes.
                    </p>
                    <p className="text-lg text-[#2D2A26] leading-relaxed mb-4">
                      Homes with mountain views typically command premium prices, often $50,000-150,000+ more than similar homes without views. The higher elevation of Sun City Summerlin (3,000 feet) provides excellent vantage points.
                    </p>
                    <p className="text-lg text-[#2D2A26]">
                      <strong>Price Range:</strong> $500,000 - $1,200,000+ (depending on home size and view quality)
                    </p>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Home Style Variations */}
              <ScrollAnimation delay={500}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Home Style Variations by Neighborhood
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-[#FDF8F3] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        Early Phase Neighborhoods (1989-1995)
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        These neighborhoods feature more traditional architectural styles, often with stucco exteriors and classic layouts. Homes may have more mature landscaping and established character.
                      </p>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        Mid-Phase Neighborhoods (1995-1999)
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        These neighborhoods may feature updated designs and more contemporary features. Often a good balance of established character and modern amenities.
                      </p>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        Later Phase Neighborhoods (1999-2002)
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        The newest neighborhoods may feature more contemporary designs, updated floor plans, and modern features. These homes are typically in excellent condition with less need for updates.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Choosing the Right Neighborhood */}
              <ScrollAnimation delay={600}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    How to Choose the Right Neighborhood
                  </h2>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        1. Identify Your Priorities
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        What matters most to you? Golf course views? Proximity to a specific recreation center? Mountain views? Budget? Make a list of your must-haves and nice-to-haves.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        2. Visit Different Neighborhoods
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        There's no substitute for seeing neighborhoods in person. Drive through different areas, walk around, and get a feel for the character of each neighborhood.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        3. Consider Your Lifestyle
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        If you're an avid golfer, prioritize golf course neighborhoods. If you use the fitness center daily, consider proximity to recreation centers. If you love views, look for mountain view areas.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        4. Work with a Local Expert
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        A local real estate agent who knows Sun City Summerlin well can help you identify neighborhoods that match your priorities and budget. I've helped hundreds of buyers find their perfect neighborhood.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* FAQ Section */}
              <ScrollAnimation delay={700}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 font-playfair">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        What are the best neighborhoods in Sun City Summerlin?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        The best neighborhoods in Sun City Summerlin depend on your preferences. Popular areas include golf course neighborhoods (Highland Falls, Palm Valley, Eagle Crest), neighborhoods near recreation centers, and areas with mountain views. Each neighborhood offers different home styles, price ranges, and proximity to amenities.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Are there different home styles in different neighborhoods?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Yes, Sun City Summerlin was built in phases from 1989-2002, so different neighborhoods feature different architectural styles and home designs. Earlier phases may have more traditional designs, while later phases may have more contemporary features. All homes are single-story ranch-style.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Do neighborhoods have different price ranges?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Yes, price ranges vary by neighborhood. Golf course homes and homes with mountain views typically command higher prices. Homes range from approximately $275,000 to $1,200,000+ depending on size, location, condition, and views.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Can I visit different neighborhoods before buying?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Absolutely! I recommend visiting different neighborhoods to get a feel for each area. Schedule a tour with me, and I can show you various neighborhoods and help you understand the differences between them.
                      </p>
                    </details>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Related Links */}
              <ScrollAnimation delay={800}>
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Related Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                      href="/homes-for-sale"
                      className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20"
                    >
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        Browse Homes for Sale
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        See current listings in different Sun City Summerlin neighborhoods.
                      </p>
                      <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                        View Listings <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link
                      href="/blog/sun-city-summerlin-floor-plans"
                      className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20"
                    >
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        Sun City Summerlin Floor Plans
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        Learn about different floor plans available in Sun City Summerlin.
                      </p>
                      <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                        Read More <ArrowRight className="w-4 h-4" />
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
                    Ready to Find Your Perfect Neighborhood?
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                    Schedule a tour with Dr. Jan Duffy to explore different neighborhoods in Sun City Summerlin. I'll help you find the area that matches your lifestyle and preferences.
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
