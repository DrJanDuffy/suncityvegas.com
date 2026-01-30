import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import { Phone, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

export const metadata: Metadata = {
  title: "Pinnacle Community Center | Sun City Summerlin Amenities",
  description:
    "Explore Pinnacle Community Center in Sun City Summerlin. Features 34,000 sq ft fitness center, pool & spa, tennis courts, bocce ball courts, card rooms, and versatile multi-purpose spaces.",
  alternates: {
    canonical: "https://www.suncityvegas.com/amenities/pinnacle",
  },
  openGraph: {
    title: "Pinnacle Community Center | Sun City Summerlin",
    description:
      "Discover the amenities at Pinnacle Community Center, a welcoming recreation facility for active adults.",
    url: "https://www.suncityvegas.com/amenities/pinnacle",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/amenities/pinnacle-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pinnacle Community Center exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinnacle Community Center | Sun City Summerlin",
    description: "A welcoming recreation center with fitness facilities and social spaces.",
    images: ["https://www.suncityvegas.com/images/amenities/pinnacle-hero.jpg"],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

const pinnacleWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.suncityvegas.com/amenities/pinnacle",
  name: "Pinnacle Community Center | Sun City Summerlin Amenities",
  description:
    "Explore Pinnacle Community Center in Sun City Summerlin. Features 34,000 sq ft fitness center, pool & spa, tennis courts, bocce ball courts, card rooms, and versatile multi-purpose spaces.",
  url: "https://www.suncityvegas.com/amenities/pinnacle",
};

export default function PinnaclePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pinnacleWebPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Amenities", href: "/amenities" },
          { label: "Pinnacle", href: "/amenities/pinnacle" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#8B5E3C] to-[#5D7A5D] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  Pinnacle Community Center
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                  A Welcoming Recreation Hub for Active Adults
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span>34,000 sq ft</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span>6 AM - 9 PM Daily</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Users className="w-4 h-4" />
                    <span>All Residents Welcome</span>
                  </div>
                </div>
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
                  src="/images/amenities/pinnacle-hero.jpg"
                  alt="Pinnacle Community Center exterior"
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

        {/* Overview Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                  Overview
                </h2>
                <div className="prose prose-lg max-w-none text-[#2D2A26] space-y-4">
                  <p>
                    Pinnacle Community Center is one of four world-class recreation centers serving the residents of Sun City Summerlin. At 34,000 square feet, Pinnacle offers a welcoming, intimate atmosphere while providing comprehensive fitness and recreation facilities.
                  </p>
                  <p>
                    The center is designed to serve as both a fitness destination and a social gathering place. Its versatile multi-purpose spaces accommodate a wide variety of activities, from fitness classes to club meetings to casual socializing.
                  </p>
                  <p>
                    Pinnacle's name reflects its role as a pinnacle of community life—a place where residents come together to stay active, pursue hobbies, and build friendships. The facility's design emphasizes both functionality and comfort, creating an inviting environment for all residents.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Fitness Center */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Fitness Center
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation delay={100}>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-white">
                    <Image
                      src="/images/amenities/pinnacle-fitness.jpg"
                      alt="Fitness center at Pinnacle Community Center"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="prose prose-lg max-w-none text-[#2D2A26]">
                    <p className="text-xl font-semibold text-[#8B5E3C] mb-4">
                      Comprehensive Fitness Equipment
                    </p>
                    <p className="mb-4">
                      The fitness center at Pinnacle features a well-rounded selection of equipment designed for active adults. The facility includes modern cardio machines, strength training equipment, and free weights.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Cardio Equipment:</strong> Treadmills, ellipticals, stationary bikes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Strength Training:</strong> Circuit machines and free weights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Flexibility Area:</strong> Space for stretching and mobility work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Fitness Classes:</strong> Scheduled classes throughout the week</span>
                      </li>
                    </ul>
                    <p className="mt-6">
                      The fitness center is open from 6:00 AM to 9:00 PM daily, making it convenient to fit your workout into your schedule. The facility is well-maintained and provides a comfortable environment for exercise.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Pool & Spa */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Pool & Spa Facilities
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation delay={100}>
                  <div className="prose prose-lg max-w-none text-[#2D2A26]">
                    <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                      Pool & Spa
                    </h3>
                    <p className="mb-4">
                      Pinnacle features both pool and spa facilities, providing residents with options for swimming, water exercise, and relaxation. The pool is heated year-round, allowing comfortable use regardless of the season.
                    </p>
                    <p className="mb-4">
                      The spa area offers a perfect place to relax and unwind after a workout or swim. The warm water provides therapeutic benefits, helping to soothe muscles and promote relaxation.
                    </p>
                    <p>
                      Both the pool and spa are well-maintained and provide a pleasant environment for aquatic activities. Water aerobics classes are regularly scheduled, making it easy to stay active while enjoying the water.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-[#FDF8F3]">
                    <Image
                      src="/images/amenities/pinnacle-pool.jpg"
                      alt="Pool and spa at Pinnacle Community Center"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Sports Courts */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Sports Courts & Activities
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ScrollAnimation delay={100}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Tennis Courts</h3>
                    <p className="text-[#2D2A26]">
                      Lighted tennis courts available for residents. Perfect for singles, doubles, or taking lessons. The courts are well-maintained and ready for play.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Bocce Ball Courts</h3>
                    <p className="text-[#2D2A26]">
                      Lighted bocce ball courts for casual games with friends or organized league play. A popular social activity that combines fun and light exercise.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Social Spaces */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Social & Meeting Spaces
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollAnimation delay={100}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Card Rooms</h3>
                    <p className="text-[#2D2A26]">
                      Dedicated card rooms for bridge, poker, and other card games. Regular game sessions scheduled throughout the week.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Multi-Purpose Rooms</h3>
                    <p className="text-[#2D2A26]">
                      Versatile multi-purpose rooms available for club meetings, classes, and private gatherings. Rooms can be reserved in advance.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={300}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Lounge Area</h3>
                    <p className="text-[#2D2A26]">
                      Comfortable lounge with seating for casual conversation and relaxation between activities.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Hours & Access */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Hours of Operation & Access
                </h2>
                <div className="bg-white rounded-lg p-6 md:p-8 space-y-6 shadow-md">
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">Hours of Operation</h3>
                    <p className="text-lg text-[#2D2A26] mb-2">
                      <strong>Daily:</strong> 6:00 AM - 9:00 PM
                    </p>
                    <p className="text-[#2D2A26]">
                      Pinnacle is open year-round, including holidays. The facility is maintained and cleaned regularly to ensure a safe and pleasant environment for all residents.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">Membership & Access</h3>
                    <ul className="space-y-2 text-[#2D2A26]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>All residents must check in with membership card</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Guest passes available (guests must be accompanied by a resident)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Access included with your HOA fee—no additional membership required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Meeting rooms and facilities can be reserved in advance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Related Centers */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Explore Other Community Centers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link
                    href="/amenities/mountain-shadows"
                    className="bg-[#FDF8F3] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair group-hover:text-[#5D7A5D] transition-colors">
                      Mountain Shadows
                    </h3>
                    <p className="text-[#2D2A26] mb-4">
                      The original recreation center at 45,000 sq ft with fitness center, indoor pool, racquetball, and arts & crafts.
                    </p>
                    <span className="text-[#8B5E3C] font-semibold flex items-center gap-2 group-hover:text-[#5D7A5D] transition-colors">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                  <Link
                    href="/amenities/sun-shadows"
                    className="bg-[#FDF8F3] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair group-hover:text-[#5D7A5D] transition-colors">
                      Sun Shadows
                    </h3>
                    <p className="text-[#2D2A26] mb-4">
                      Home to the Olympic-sized indoor heated pool and spa facilities.
                    </p>
                    <span className="text-[#8B5E3C] font-semibold flex items-center gap-2 group-hover:text-[#5D7A5D] transition-colors">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                  <Link
                    href="/amenities/desert-vista"
                    className="bg-[#FDF8F3] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair group-hover:text-[#5D7A5D] transition-colors">
                      Desert Vista
                    </h3>
                    <p className="text-[#2D2A26] mb-4">
                      The largest recreation center at 48,000 sq ft with a grand ballroom, tennis courts, and pickleball courts.
                    </p>
                    <span className="text-[#8B5E3C] font-semibold flex items-center gap-2 group-hover:text-[#5D7A5D] transition-colors">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
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
                  Ready to Experience Pinnacle?
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a tour with Dr. Jan Duffy to see all four community centers, including Pinnacle. Get a firsthand look at the amenities and homes available in Sun City Summerlin.
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
      </main>
      <Footer />
    </>
  );
}
