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
  title: "Desert Vista Community Center | Sun City Summerlin's Largest Facility",
  description:
    "Explore Desert Vista Community Center, the largest recreation center in Sun City Summerlin at 48,000 sq ft. Features grand ballroom, fitness center, pool & spa, tennis, pickleball courts, and more.",
  alternates: {
    canonical: "https://www.suncityvegas.com/amenities/desert-vista",
  },
  openGraph: {
    title: "Desert Vista Community Center | Sun City Summerlin",
    description:
      "Discover the largest recreation center in Sun City Summerlin, featuring a grand ballroom, tennis courts, and pickleball facilities.",
    url: "https://www.suncityvegas.com/amenities/desert-vista",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/amenities/desert-vista-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Desert Vista Community Center exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desert Vista Community Center | Sun City Summerlin",
    description: "The largest recreation center with a grand ballroom and extensive amenities.",
    images: ["https://www.suncityvegas.com/images/amenities/desert-vista-hero.jpg"],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function DesertVistaPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Amenities", href: "/amenities" },
          { label: "Desert Vista", href: "/amenities/desert-vista" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#8B5E3C] to-[#5D7A5D] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  Desert Vista Community Center
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                  Sun City Summerlin's Largest Recreation Facility
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span>48,000 sq ft</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span>6 AM - 9 PM Daily</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Users className="w-4 h-4" />
                    <span>Grand Ballroom</span>
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
                  src="/images/amenities/desert-vista-hero.jpg"
                  alt="Desert Vista Community Center exterior"
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
                    Desert Vista Community Center is the largest of Sun City Summerlin's four recreation centers, spanning 48,000 square feet. This impressive facility serves as a central hub for fitness, recreation, social events, and community gatherings.
                  </p>
                  <p>
                    The center is particularly known for its grand ballroom, which hosts community dances, social events, and special celebrations. The ballroom's elegant design and spacious layout make it a favorite venue for large gatherings and formal events.
                  </p>
                  <p>
                    Beyond the ballroom, Desert Vista offers comprehensive fitness facilities, aquatic amenities, and extensive sports courts. The facility's size allows it to accommodate multiple activities simultaneously, making it a busy and vibrant center of community life.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Grand Ballroom */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Grand Ballroom with Dance Floor & Stage
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation delay={100}>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-white">
                    <Image
                      src="/images/amenities/desert-vista-ballroom.jpg"
                      alt="Grand ballroom at Desert Vista with dance floor and stage"
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
                      The Heart of Community Social Life
                    </p>
                    <p className="mb-4">
                      The grand ballroom at Desert Vista is one of the most impressive spaces in any 55+ community. With a beautiful dance floor, professional stage, and elegant design, it's the perfect setting for community events, dances, concerts, and celebrations.
                    </p>
                    <p className="mb-4">
                      The ballroom hosts regular social dances, holiday celebrations, live entertainment, and special events throughout the year. The space can accommodate large groups while maintaining an intimate, welcoming atmosphere.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Professional Stage:</strong> Perfect for live entertainment and performances</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Dance Floor:</strong> Spacious area for ballroom dancing and social events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Sound System:</strong> Professional audio equipment for events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Reservations Available:</strong> Can be reserved for private events</span>
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Fitness & Pool */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
                <ScrollAnimation delay={100}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                      Fitness Center
                    </h3>
                    <p className="text-[#2D2A26] leading-relaxed mb-4">
                      State-of-the-art fitness equipment including cardio machines, strength training equipment, and free weights. The fitness center is spacious and well-equipped to accommodate multiple users simultaneously.
                    </p>
                    <p className="text-[#2D2A26] leading-relaxed">
                      Personal trainers are available for individual or group sessions, and the facility offers a variety of fitness classes throughout the week.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                      Outdoor Heated Lap Pool & Spa
                    </h3>
                    <p className="text-[#2D2A26] leading-relaxed mb-4">
                      The outdoor heated lap pool is perfect for swimming laps, water aerobics, or simply enjoying the Las Vegas sunshine. The pool is heated year-round, allowing comfortable swimming even during cooler months.
                    </p>
                    <p className="text-[#2D2A26] leading-relaxed">
                      Adjacent to the pool, the outdoor spa provides a perfect place to relax and unwind after a swim or workout.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
              <ScrollAnimation delay={300}>
                <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                    Aerobics Studio
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Dedicated aerobics studio with scheduled classes throughout the week. From low-impact to high-energy workouts, the studio accommodates various fitness levels and preferences.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Sports Courts */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Sports Courts & Facilities
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollAnimation delay={100}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Tennis Courts</h3>
                    <p className="text-[#2D2A26] mb-4">
                      Two lighted tennis courts available for residents. The courts are well-maintained and perfect for singles, doubles, or taking lessons.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Pickleball Courts</h3>
                    <p className="text-[#2D2A26] mb-4">
                      Ten lighted pickleball courts make Desert Vista a pickleball enthusiast's paradise. Pickleball is one of the fastest-growing activities at Sun City Summerlin.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={300}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Bocce Ball Courts</h3>
                    <p className="text-[#2D2A26] mb-4">
                      Four lighted bocce ball courts for casual games with friends or organized league play. A popular social activity that combines fun and light exercise.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Rooms */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Specialty Rooms & Facilities
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollAnimation delay={100}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Paint Room</h3>
                    <p className="text-[#2D2A26]">
                      Dedicated space for painting and artistic expression. Well-equipped with easels, work tables, and storage for art supplies.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Model Club Room</h3>
                    <p className="text-[#2D2A26]">
                      Specialized room for model building and hobby work. Perfect for residents interested in scale models, trains, and detailed craftwork.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={300}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Photography Room</h3>
                    <p className="text-[#2D2A26]">
                      Dedicated space for photography enthusiasts, including areas for photo editing, display, and club meetings.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={400}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Computer Lab</h3>
                    <p className="text-[#2D2A26]">
                      Modern computer lab with internet access, available for classes, personal use, or club activities.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={500}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Library</h3>
                    <p className="text-[#2D2A26]">
                      Quiet library space with reading materials, comfortable seating, and a peaceful atmosphere for book lovers.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={600}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Meeting Rooms</h3>
                    <p className="text-[#2D2A26]">
                      Multiple meeting rooms of various sizes for club meetings, classes, and private gatherings. Available for reservation.
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
                      Desert Vista is open year-round, including holidays. The facility is maintained and cleaned regularly to ensure a safe and pleasant environment for all residents.
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
                        <span>Ballroom and meeting rooms can be reserved in advance</span>
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
                    href="/amenities/pinnacle"
                    className="bg-[#FDF8F3] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
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
                  Ready to Experience Desert Vista?
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a tour with Dr. Jan Duffy to see all four community centers, including Desert Vista's grand ballroom. Get a firsthand look at the amenities and homes available in Sun City Summerlin.
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
