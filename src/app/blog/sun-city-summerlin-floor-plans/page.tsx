import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import { Phone, Calendar, ArrowRight, Home, Square } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

export const metadata: Metadata = {
  title: "Sun City Summerlin Floor Plans: Complete Guide (2025)",
  description:
    "Explore Sun City Summerlin floor plans from 1,200 to 3,500+ sq ft. Learn about single-story designs, popular models, and find the perfect home layout for your 55+ lifestyle.",
  alternates: {
    canonical: "https://www.suncityvegas.com/blog/sun-city-summerlin-floor-plans",
  },
  openGraph: {
    title: "Sun City Summerlin Floor Plans: Complete Guide (2025)",
    description:
      "Complete guide to Sun City Summerlin floor plans, from cozy 1,200 sq ft models to spacious 3,500+ sq ft homes.",
    url: "https://www.suncityvegas.com/blog/sun-city-summerlin-floor-plans",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-26T00:00:00Z",
    modifiedTime: "2025-01-26T00:00:00Z",
    authors: ["Dr. Jan Duffy"],
    images: [
      {
        url: "https://www.suncityvegas.com/images/blog/floor-plans-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin floor plan examples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun City Summerlin Floor Plans: Complete Guide",
    description: "Explore floor plans from 1,200 to 3,500+ sq ft.",
    images: ["https://www.suncityvegas.com/images/blog/floor-plans-hero.jpg"],
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
      name: "What size are Sun City Summerlin homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sun City Summerlin homes range from approximately 1,200 to 3,500+ square feet. Most homes are between 1,500 and 2,500 square feet, with 2-4 bedrooms and 2-3 bathrooms. All homes are single-story, designed for easy living.",
      },
    },
    {
      "@type": "Question",
      name: "Are all Sun City Summerlin homes single-story?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all homes in Sun City Summerlin are single-story (ranch-style). This design is ideal for 55+ living, eliminating stairs and making the homes more accessible as residents age in place.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular floor plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular floor plans include 2-bedroom, 2-bathroom models around 1,500-1,800 sq ft, and 3-bedroom, 2-bathroom models around 2,000-2,500 sq ft. Many buyers also seek homes with dens or bonus rooms for hobbies or home offices.",
      },
    },
  ],
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sun City Summerlin Floor Plans: Complete Guide (2025)",
  description: "Complete guide to Sun City Summerlin floor plans and home layouts.",
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
  image: "https://www.suncityvegas.com/images/blog/floor-plans-hero.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.suncityvegas.com/blog/sun-city-summerlin-floor-plans",
  },
};

export default function FloorPlansPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Floor Plans", href: "/blog/sun-city-summerlin-floor-plans" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
                Home Guide
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair">
                Sun City Summerlin Floor Plans: Complete Guide
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <time dateTime="2025-01-26">January 26, 2025</time>
                </div>
                <span>•</span>
                <span>By Dr. Jan Duffy</span>
                <span>•</span>
                <span>9 min read</span>
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
                  src="/images/blog/floor-plans-hero.jpg"
                  alt="Sun City Summerlin floor plan examples and home layouts"
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
                    Sun City Summerlin offers a wide variety of floor plans, from cozy 1,200 square foot homes to spacious 3,500+ square foot estates. All homes are single-story, designed specifically for active adult living.
                  </p>
                  <p className="text-lg leading-relaxed">
                    As someone who has helped hundreds of buyers find their perfect Sun City Summerlin home, I know that understanding the floor plan options is crucial. This guide covers everything you need to know about home layouts, popular models, and what to look for.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Size Range */}
              <ScrollAnimation delay={100}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Home Size Range
                  </h2>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#8B5E3C] mb-2">1,200</div>
                        <div className="text-[#2D2A26]">Smallest</div>
                        <div className="text-sm text-[#2D2A26] opacity-75">sq ft</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#8B5E3C] mb-2">1,500-2,500</div>
                        <div className="text-[#2D2A26]">Most Common</div>
                        <div className="text-sm text-[#2D2A26] opacity-75">sq ft</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#8B5E3C] mb-2">3,500+</div>
                        <div className="text-[#2D2A26]">Largest</div>
                        <div className="text-sm text-[#2D2A26] opacity-75">sq ft</div>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed text-[#2D2A26]">
                      The majority of Sun City Summerlin homes fall in the 1,500 to 2,500 square foot range, offering the perfect balance of space and manageability. Smaller homes (1,200-1,500 sq ft) are ideal for couples who want low-maintenance living, while larger homes (2,500-3,500+ sq ft) offer space for hobbies, home offices, or frequent guests.
                    </p>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Single-Story Design */}
              <ScrollAnimation delay={200}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    All Single-Story (Ranch-Style) Design
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Home className="w-6 h-6" />
                        Why Single-Story?
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed mb-4">
                        All Sun City Summerlin homes are single-story (ranch-style), which is ideal for 55+ living. This design eliminates stairs, making homes more accessible and easier to navigate as you age.
                      </p>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Single-story homes also offer better flow and are easier to maintain. Everything is on one level, from the master bedroom to the kitchen to the living areas.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Square className="w-6 h-6" />
                        Layout Benefits
                      </h3>
                      <ul className="space-y-2 text-[#2D2A26]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>No stairs to navigate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>Better accessibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>Easier maintenance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>Open floor plan options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>Age-in-place friendly</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Popular Floor Plans */}
              <ScrollAnimation delay={300}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 font-playfair">
                    Popular Floor Plan Configurations
                  </h2>
                  <div className="space-y-8">
                    {/* 2BR/2BA */}
                    <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 border-l-4 border-[#5D7A5D]">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        2 Bedroom, 2 Bathroom (1,500-1,800 sq ft)
                      </h3>
                      <p className="text-lg text-[#2D2A26] leading-relaxed mb-4">
                        This is one of the most popular configurations, perfect for couples or single residents. These homes typically feature:
                      </p>
                      <ul className="space-y-2 text-[#2D2A26] mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>Master suite with walk-in closet and ensuite bathroom</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>Guest bedroom (often used as office or hobby room)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>Open kitchen/living area</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>Covered patio or lanai</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span>2-car garage</span>
                        </li>
                      </ul>
                      <p className="text-[#2D2A26] leading-relaxed">
                        These homes offer the perfect balance of space and efficiency, with enough room for comfortable living without being overwhelming to maintain.
                      </p>
                    </div>

                    {/* 3BR/2BA */}
                    <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 border-l-4 border-[#8B5E3C]">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        3 Bedroom, 2 Bathroom (2,000-2,500 sq ft)
                      </h3>
                      <p className="text-lg text-[#2D2A26] leading-relaxed mb-4">
                        Ideal for those who want extra space for guests, hobbies, or home offices. These homes typically include:
                      </p>
                      <ul className="space-y-2 text-[#2D2A26] mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B5E3C] font-bold">•</span>
                          <span>Master suite with large walk-in closet</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B5E3C] font-bold">•</span>
                          <span>Two guest bedrooms (or one bedroom + den)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B5E3C] font-bold">•</span>
                          <span>Spacious kitchen with island</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B5E3C] font-bold">•</span>
                          <span>Formal dining area or great room</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B5E3C] font-bold">•</span>
                          <span>Larger covered patio</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#8B5E3C] font-bold">•</span>
                          <span>2-car garage (sometimes 3-car)</span>
                        </li>
                      </ul>
                      <p className="text-[#2D2A26] leading-relaxed">
                        These homes offer flexibility for hosting family, pursuing hobbies, or working from home. The extra bedroom can serve as a den, office, craft room, or guest room.
                      </p>
                    </div>

                    {/* 3BR/3BA or 4BR */}
                    <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 border-l-4 border-[#C4A574]">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        3+ Bedroom, 3 Bathroom (2,500-3,500+ sq ft)
                      </h3>
                      <p className="text-lg text-[#2D2A26] leading-relaxed mb-4">
                        The largest homes in Sun City Summerlin, perfect for those who want maximum space and luxury. These homes often feature:
                      </p>
                      <ul className="space-y-2 text-[#2D2A26] mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#C4A574] font-bold">•</span>
                          <span>Luxurious master suite with sitting area</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C4A574] font-bold">•</span>
                          <span>Multiple guest bedrooms and bathrooms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C4A574] font-bold">•</span>
                          <span>Gourmet kitchen with premium appliances</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C4A574] font-bold">•</span>
                          <span>Formal dining room and great room</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C4A574] font-bold">•</span>
                          <span>Den or bonus room</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C4A574] font-bold">•</span>
                          <span>Expansive outdoor living space</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C4A574] font-bold">•</span>
                          <span>3-car garage</span>
                        </li>
                      </ul>
                      <p className="text-[#2D2A26] leading-relaxed">
                        These homes are ideal for those who frequently host family, want space for hobbies or collections, or simply prefer more room to spread out.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Key Features */}
              <ScrollAnimation delay={400}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Key Floor Plan Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Master Suite</h3>
                      <p className="text-[#2D2A26]">
                        Most homes feature a master suite with walk-in closet and private bathroom. Larger homes may have sitting areas or dual vanities in the master bath.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Open Floor Plans</h3>
                      <p className="text-[#2D2A26]">
                        Many homes feature open kitchen/living areas, perfect for entertaining and creating a sense of spaciousness.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Covered Patios</h3>
                      <p className="text-[#2D2A26]">
                        Most homes include covered patios or lanais, extending your living space outdoors and perfect for enjoying Las Vegas weather.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Garages</h3>
                      <p className="text-[#2D2A26]">
                        Standard 2-car garages are common, with some larger homes offering 3-car garages. Many garages have additional storage space.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Dens & Bonus Rooms</h3>
                      <p className="text-[#2D2A26]">
                        Many floor plans include dens or bonus rooms that can serve as home offices, hobby rooms, or additional guest space.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Split Bedroom Plans</h3>
                      <p className="text-[#2D2A26]">
                        Some floor plans feature split bedroom designs, with the master suite on one side and guest bedrooms on the other for privacy.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* What to Look For */}
              <ScrollAnimation delay={500}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    What to Look For in a Floor Plan
                  </h2>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Your Lifestyle Needs</h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Consider how you'll use the space. Do you need a home office? A hobby room? Space for frequent guests? A den for reading or watching TV? Make sure the floor plan matches your lifestyle.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Natural Light</h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Look for floor plans with good natural light, especially in the main living areas. Windows and orientation matter for creating a bright, welcoming home.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Flow & Functionality</h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        The best floor plans have good flow—easy movement between rooms, logical placement of spaces, and efficient use of square footage. Avoid awkward layouts or wasted space.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Storage Space</h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Pay attention to closet space, pantry size, and garage storage. Good storage is essential for comfortable living, especially if you're downsizing from a larger home.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Outdoor Living</h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Consider the patio or lanai size and how it connects to the indoor living space. In Las Vegas, outdoor living is important, so make sure you have space to enjoy it.
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
                        What size are Sun City Summerlin homes?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Sun City Summerlin homes range from approximately 1,200 to 3,500+ square feet. Most homes are between 1,500 and 2,500 square feet, with 2-4 bedrooms and 2-3 bathrooms. All homes are single-story, designed for easy living.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Are all Sun City Summerlin homes single-story?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Yes, all homes in Sun City Summerlin are single-story (ranch-style). This design is ideal for 55+ living, eliminating stairs and making the homes more accessible as residents age in place.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        What are the most popular floor plans?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Popular floor plans include 2-bedroom, 2-bathroom models around 1,500-1,800 sq ft, and 3-bedroom, 2-bathroom models around 2,000-2,500 sq ft. Many buyers also seek homes with dens or bonus rooms for hobbies or home offices.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Can I see floor plans before viewing homes?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Yes, I can provide floor plans for available homes. Many listings include floor plans in their descriptions, and I can help you understand how different layouts work for your needs.
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
                      href="/homes-for-sale"
                      className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20"
                    >
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        Browse Homes for Sale
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        See current listings in Sun City Summerlin with detailed floor plans and photos.
                      </p>
                      <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                        View Listings <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link
                      href="/blog/pros-and-cons-sun-city-summerlin"
                      className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20"
                    >
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        Pros and Cons of Sun City Summerlin
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        Learn more about what makes Sun City Summerlin special.
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
                    Ready to Find Your Perfect Floor Plan?
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                    Schedule a tour with Dr. Jan Duffy to see different floor plans in person and find the home that matches your lifestyle.
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
