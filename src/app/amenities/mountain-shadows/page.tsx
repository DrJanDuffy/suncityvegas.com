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
  title: "Mountain Shadows Community Center | Sun City Summerlin Amenities",
  description:
    "Explore Mountain Shadows Community Center in Sun City Summerlin. Features 45,000 sq ft fitness center, indoor pool, racquetball courts, arts & crafts studios, and extensive amenities for active adults.",
  alternates: {
    canonical: "https://www.suncityvegas.com/amenities/mountain-shadows",
  },
  openGraph: {
    title: "Mountain Shadows Community Center | Sun City Summerlin",
    description:
      "Discover the amenities at Mountain Shadows Community Center, one of four world-class recreation centers in Sun City Summerlin.",
    url: "https://www.suncityvegas.com/amenities/mountain-shadows",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/amenities/mountain-shadows-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mountain Shadows Community Center exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mountain Shadows Community Center | Sun City Summerlin",
    description: "Explore the original recreation center featuring comprehensive fitness facilities and arts studios.",
    images: ["https://www.suncityvegas.com/images/amenities/mountain-shadows-hero.jpg"],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function MountainShadowsPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Amenities", href: "/amenities" },
          { label: "Mountain Shadows", href: "/amenities/mountain-shadows" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#8B5E3C] to-[#5D7A5D] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  Mountain Shadows Community Center
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                  Sun City Summerlin's Original Recreation Hub
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span>45,000 sq ft</span>
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
                  src="/images/amenities/mountain-shadows-hero.jpg"
                  alt="Mountain Shadows Community Center exterior with mountain views"
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
                    Mountain Shadows Community Center is one of four world-class recreation centers serving the 7,781 homes of Sun City Summerlin. As the original recreation center, Mountain Shadows holds a special place in the community's history, having been part of Del Webb's vision for active adult living since the community's early days.
                  </p>
                  <p>
                    This 45,000 square foot facility offers residents a comprehensive fitness and recreation experience with both indoor and outdoor amenities designed specifically for active adults. Located in the heart of Sun City Summerlin, Mountain Shadows serves as a central gathering place where neighbors become friends and active lifestyles thrive.
                  </p>
                  <p>
                    The center's name reflects its stunning location with views of the surrounding mountains and Red Rock Canyon. The facility has been thoughtfully designed to provide everything active adults need for fitness, recreation, creativity, and social connection—all under one roof.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Fitness Facilities */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Fitness Center & Equipment
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation delay={100}>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-white">
                    <Image
                      src="/images/amenities/mountain-shadows-fitness.jpg"
                      alt="Mountain Shadows fitness center with modern equipment"
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
                      State-of-the-Art Fitness Equipment
                    </p>
                    <p className="mb-4">
                      The fitness center at Mountain Shadows features a comprehensive selection of modern equipment designed for active adults. Whether you're maintaining your fitness routine or starting a new one, you'll find everything you need.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Cardio Equipment:</strong> Treadmills, ellipticals, stationary bikes, and rowing machines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Strength Training:</strong> Circuit machines, free weights, and resistance equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Flexibility Area:</strong> Dedicated space for stretching, yoga, and mobility work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">✓</span>
                        <span><strong>Personal Training:</strong> Certified trainers available for individual or group sessions</span>
                      </li>
                    </ul>
                    <p className="mt-6">
                      The fitness center is open from 6:00 AM to 9:00 PM daily, making it easy to fit your workout into your schedule. The facility is well-maintained and cleaned regularly, ensuring a safe and pleasant environment for all users.
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <ScrollAnimation delay={100}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                      Indoor Spa
                    </h3>
                    <p className="text-[#2D2A26] leading-relaxed mb-4">
                      Relax and unwind in the heated indoor spa, perfect for soothing sore muscles after a workout or simply enjoying a moment of tranquility. The spa is maintained at an ideal temperature year-round, making it a popular spot regardless of the weather outside.
                    </p>
                    <p className="text-[#2D2A26] leading-relaxed">
                      The indoor spa area includes comfortable seating and a peaceful atmosphere designed for relaxation. Many residents make the spa part of their regular wellness routine, combining it with their fitness activities for a complete health and wellness experience.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-[#FDF8F3]">
                    <Image
                      src="/images/amenities/mountain-shadows-pool.jpg"
                      alt="Mountain Shadows indoor pool and spa area"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </ScrollAnimation>
              </div>
              <ScrollAnimation delay={300}>
                <div className="mt-8 bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                    Outdoor Heated Lap Pool
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed mb-4">
                    The outdoor heated lap pool is perfect for morning swims, water aerobics classes, or simply enjoying the Las Vegas sunshine. The pool is heated year-round, allowing residents to swim comfortably even during cooler months.
                  </p>
                  <p className="text-[#2D2A26] leading-relaxed">
                    The pool area includes comfortable lounge chairs, shaded areas, and easy access to the facility. Many residents start their day with a swim, enjoying the peaceful morning atmosphere and the beautiful mountain views that surround the community.
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
                  Sports Courts & Activities
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollAnimation delay={100}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Tennis Courts</h3>
                    <p className="text-[#2D2A26] mb-4">
                      Multiple lighted tennis courts available for residents. Whether you're playing singles, doubles, or taking lessons, the courts are well-maintained and ready for play.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Racquetball Court</h3>
                    <p className="text-[#2D2A26] mb-4">
                      Indoor racquetball court for year-round play. Perfect for staying active during hot summer months or cooler winter days.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={300}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Shuffleboard Courts</h3>
                    <p className="text-[#2D2A26] mb-4">
                      Multiple shuffleboard courts for casual games with friends. A popular social activity that combines fun and light exercise.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={400}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Walking Track</h3>
                    <p className="text-[#2D2A26] mb-4">
                      Outdoor walking track perfect for morning or evening walks. Enjoy the fresh air and beautiful surroundings while staying active.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={500}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Mini Golf Course</h3>
                    <p className="text-[#2D2A26] mb-4">
                      9-hole mini golf course for fun, casual play. Great for families visiting or residents looking for a relaxed activity.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={600}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Aerobics Studio</h3>
                    <p className="text-[#2D2A26] mb-4">
                      Dedicated aerobics studio with scheduled classes throughout the week. From low-impact to high-energy workouts, there's something for every fitness level.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Arts & Crafts */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Arts & Hobby Rooms
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <ScrollAnimation delay={100}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Ceramics Room</h3>
                    <p className="text-[#2D2A26]">
                      Fully equipped ceramics studio with kilns, work tables, and storage for projects. The ceramics club is one of the most active groups at Mountain Shadows.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Stained Glass Room</h3>
                    <p className="text-[#2D2A26]">
                      Dedicated space for stained glass work with all necessary tools and equipment. Perfect for creating beautiful art pieces.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={300}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Silver Crafts Room</h3>
                    <p className="text-[#2D2A26]">
                      Specialized room for jewelry making and metalwork. Well-equipped for both beginners and experienced crafters.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={400}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Sewing Room</h3>
                    <p className="text-[#2D2A26]">
                      Complete sewing room with machines, cutting tables, and storage. Popular with quilters, seamstresses, and crafters.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={500}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Woodworking Shop</h3>
                    <p className="text-[#2D2A26]">
                      Extensive woodworking shop with professional-grade tools and equipment. Safety equipment and training available.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={600}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Arts & Crafts Studio</h3>
                    <p className="text-[#2D2A26]">
                      General-purpose arts and crafts room for painting, drawing, and various creative projects. Open to all residents.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Social Spaces */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Social & Meeting Spaces
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollAnimation delay={100}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Ballroom</h3>
                    <p className="text-[#2D2A26]">
                      Large ballroom perfect for community events, dances, and social gatherings. Available for resident reservations.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Library</h3>
                    <p className="text-[#2D2A26]">
                      Quiet library space with reading materials and comfortable seating. A peaceful retreat for book lovers.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={300}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Card Room</h3>
                    <p className="text-[#2D2A26]">
                      Dedicated card room for bridge, poker, and other card games. Regular game sessions scheduled throughout the week.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={400}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Puzzle Room</h3>
                    <p className="text-[#2D2A26]">
                      Comfortable space for working on puzzles, both individually and as a group activity.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={500}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Lounge Area</h3>
                    <p className="text-[#2D2A26]">
                      Comfortable lounge with seating for casual conversation and relaxation between activities.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={600}>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Meeting Rooms</h3>
                    <p className="text-[#2D2A26]">
                      Multiple meeting rooms of various sizes for club meetings, classes, and private gatherings.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Hours & Rules */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Hours of Operation & Membership
                </h2>
                <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">Hours of Operation</h3>
                    <p className="text-lg text-[#2D2A26] mb-2">
                      <strong>Daily:</strong> 6:00 AM - 9:00 PM
                    </p>
                    <p className="text-[#2D2A26]">
                      Mountain Shadows is open year-round, including holidays. The facility is maintained and cleaned regularly to ensure a safe and pleasant environment for all residents.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">Membership Requirements</h3>
                    <ul className="space-y-2 text-[#2D2A26]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>All residents must check in with membership card at the front desk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Guest passes available from the social monitor (guests must be accompanied by a resident)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Residents must accompany guests under 19 at all times</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Access to all amenities included with your HOA fee—no additional membership required</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">Reservations & Classes</h3>
                    <p className="text-[#2D2A26] mb-4">
                      Many facilities can be reserved in advance, including meeting rooms, tennis courts, and the ballroom. Regular classes and activities are scheduled throughout the week, including:
                    </p>
                    <ul className="space-y-2 text-[#2D2A26]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Water aerobics classes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Fitness classes (yoga, Pilates, strength training)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Arts and crafts workshops</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Social events and dances</span>
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
                  <Link
                    href="/amenities/golf"
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair group-hover:text-[#5D7A5D] transition-colors">
                      Golf Courses
                    </h3>
                    <p className="text-[#2D2A26] mb-4">
                      Three championship golf courses designed by Billy Casper & Greg Nash, offering variety for all skill levels.
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
                  Ready to Experience Mountain Shadows?
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a tour with Dr. Jan Duffy to see all four community centers, including Mountain Shadows. Get a firsthand look at the amenities and homes available in Sun City Summerlin.
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
