import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import { Phone, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

export const metadata: Metadata = {
  title: "Sun Shadows Community Center | Sun City Summerlin Pool & Spa",
  description:
    "Explore Sun Shadows Community Center in Sun City Summerlin. Features Olympic-size indoor heated pool, indoor spa, aerobics studio, bocce ball courts, and meeting spaces for active adults.",
  alternates: {
    canonical: "https://www.suncityvegas.com/amenities/sun-shadows",
  },
  openGraph: {
    title: "Sun Shadows Community Center | Sun City Summerlin",
    description:
      "Discover the amenities at Sun Shadows Community Center, featuring an Olympic-sized pool and spa facilities.",
    url: "https://www.suncityvegas.com/amenities/sun-shadows",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/amenities/sun-shadows-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sun Shadows Community Center with Olympic pool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun Shadows Community Center | Sun City Summerlin",
    description: "Explore the Olympic-sized pool and spa facilities at Sun Shadows.",
    images: ["https://www.suncityvegas.com/images/amenities/sun-shadows-hero.jpg"],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function SunShadowsPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Amenities", href: "/amenities" },
          { label: "Sun Shadows", href: "/amenities/sun-shadows" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#8B5E3C] to-[#5D7A5D] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  Sun Shadows Community Center
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                  Home to Sun City Summerlin's Olympic-Sized Pool & Spa
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span>Olympic-Sized Pool</span>
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
                  src="/images/amenities/sun-shadows-hero.jpg"
                  alt="Sun Shadows Community Center with Olympic-sized pool"
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
                    Sun Shadows Community Center is one of four world-class recreation centers serving Sun City Summerlin residents. This facility is particularly known for its exceptional aquatic amenities, featuring one of the community's most impressive pool facilities.
                  </p>
                  <p>
                    The center serves as a hub for water-based activities, fitness classes, and social gatherings. Its design emphasizes both active recreation and relaxation, making it a favorite destination for residents who love swimming, water aerobics, or simply enjoying time in and around the pool.
                  </p>
                  <p>
                    Sun Shadows complements the other recreation centers by offering specialized facilities that enhance the overall amenity package available to all Sun City Summerlin residents. Whether you're a serious swimmer, enjoy water fitness, or prefer to relax in the spa, this center has something for you.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Olympic Pool Section */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Olympic-Size Indoor Heated Pool
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation delay={100}>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-white">
                    <Image
                      src="/images/amenities/sun-shadows-olympic-pool.jpg"
                      alt="Olympic-sized indoor heated pool at Sun Shadows"
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
                      World-Class Swimming Facility
                    </p>
                    <p className="mb-4">
                      The Olympic-size indoor heated pool at Sun Shadows is one of the most impressive aquatic facilities in any 55+ community. This full-size pool provides ample space for lap swimming, water aerobics classes, and recreational swimming.
                    </p>
                    <p className="mb-4">
                      The pool is heated year-round, maintaining a comfortable temperature that makes swimming enjoyable regardless of the weather outside. The indoor setting means you can swim in comfort during hot summer months or cooler winter days.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Full Olympic Dimensions:</strong> Perfect for serious lap swimmers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Year-Round Heated:</strong> Comfortable swimming in any season</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Water Aerobics Classes:</strong> Scheduled classes throughout the week</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Lifeguard Services:</strong> Safety first with trained staff on duty</span>
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Indoor Spa */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation delay={100}>
                  <div className="prose prose-lg max-w-none text-[#2D2A26]">
                    <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                      Indoor Spa
                    </h3>
                    <p className="mb-4">
                      Adjacent to the Olympic pool, the indoor spa provides a perfect place to relax and unwind. The heated spa is maintained at an ideal temperature for therapeutic benefits, helping to soothe muscles after a workout or swim.
                    </p>
                    <p className="mb-4">
                      The spa area is designed for comfort and relaxation, with easy access from the pool deck. Many residents make the spa part of their regular wellness routine, combining swimming with spa time for a complete aquatic fitness and relaxation experience.
                    </p>
                    <p>
                      The indoor setting ensures you can enjoy the spa year-round, regardless of weather conditions. It's a popular spot for socializing with neighbors while enjoying the therapeutic benefits of warm water therapy.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-[#FDF8F3]">
                    <Image
                      src="/images/amenities/sun-shadows-spa.jpg"
                      alt="Indoor spa at Sun Shadows Community Center"
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

        {/* Aerobics Studio */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Aerobics Studio
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation delay={100}>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-white">
                    <Image
                      src="/images/amenities/sun-shadows-aerobics.jpg"
                      alt="Aerobics studio at Sun Shadows Community Center"
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
                    <p className="mb-4">
                      The dedicated aerobics studio at Sun Shadows offers a variety of fitness classes throughout the week. The studio is equipped with mirrors, sound systems, and all the equipment needed for group fitness classes.
                    </p>
                    <p className="mb-4">
                      Classes are designed for active adults and accommodate various fitness levels. Popular offerings include:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Low-impact aerobics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Cardio dance classes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Strength training classes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Flexibility and stretching sessions</span>
                      </li>
                    </ul>
                    <p className="mt-6">
                      The studio provides a welcoming environment where residents can stay active, meet neighbors, and enjoy the social aspect of group fitness.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Bocce Ball Courts */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Bocce Ball Courts
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation delay={100}>
                  <div className="prose prose-lg max-w-none text-[#2D2A26]">
                    <p className="mb-4">
                      Sun Shadows features four lighted bocce ball courts, making it easy to play during the day or evening. Bocce ball is a popular social activity at Sun City Summerlin, combining friendly competition with social interaction.
                    </p>
                    <p className="mb-4">
                      The courts are well-maintained and provide a perfect setting for casual games with friends or organized league play. Many residents enjoy the relaxed pace of bocce ball, making it an ideal activity for socializing while staying active.
                    </p>
                    <p>
                      The lighted courts extend playing hours into the evening, which is especially appreciated during the hot summer months when evening play is more comfortable. The bocce ball community at Sun Shadows is welcoming to players of all skill levels.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-[#FDF8F3]">
                    <Image
                      src="/images/amenities/sun-shadows-bocce.jpg"
                      alt="Lighted bocce ball courts at Sun Shadows"
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

        {/* Meeting & Social Spaces */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Meeting Rooms & Social Spaces
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollAnimation delay={100}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Meeting Rooms</h3>
                    <p className="text-[#2D2A26]">
                      Multiple meeting rooms of various sizes available for club meetings, classes, and private gatherings. Rooms can be reserved in advance.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Card Rooms</h3>
                    <p className="text-[#2D2A26]">
                      Dedicated card rooms for bridge, poker, and other card games. Regular game sessions scheduled throughout the week.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={300}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Lounge Area</h3>
                    <p className="text-[#2D2A26]">
                      Comfortable lounge with seating for casual conversation and relaxation between activities or after a swim.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Hours & Access */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Hours of Operation & Access
                </h2>
                <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">Hours of Operation</h3>
                    <p className="text-lg text-[#2D2A26] mb-2">
                      <strong>Daily:</strong> 6:00 AM - 9:00 PM
                    </p>
                    <p className="text-[#2D2A26]">
                      Sun Shadows is open year-round, including holidays. The facility is maintained and cleaned regularly to ensure a safe and pleasant environment for all residents.
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
                        <span>Pool and spa facilities available to all Sun City Summerlin residents</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">Classes & Activities</h3>
                    <p className="text-[#2D2A26] mb-4">
                      Regular classes and activities are scheduled throughout the week, including:
                    </p>
                    <ul className="space-y-2 text-[#2D2A26]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Water aerobics classes (multiple times per week)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Lap swimming sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Aerobics and fitness classes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Bocce ball leagues and open play</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Related Centers */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Explore Other Community Centers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link
                    href="/amenities/mountain-shadows"
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
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
                    href="/amenities/desert-vista"
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
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
                  <Link
                    href="/amenities/pinnacle"
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair group-hover:text-[#5D7A5D] transition-colors">
                      Pinnacle
                    </h3>
                    <p className="text-[#2D2A26] mb-4">
                      A welcoming 34,000 sq ft center with fitness facilities, pool, tennis courts, and bocce ball courts.
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
                  Ready to Experience Sun Shadows?
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a tour with Dr. Jan Duffy to see all four community centers, including Sun Shadows' Olympic-sized pool. Get a firsthand look at the amenities and homes available in Sun City Summerlin.
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
