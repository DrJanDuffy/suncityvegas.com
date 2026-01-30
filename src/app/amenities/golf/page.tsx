import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import { Phone, MapPin, Clock, Users, ArrowRight, CircleDot } from "lucide-react";
import { getGolfCourses } from "@/lib/communityData";
import ScrollAnimation from "@components/scroll-animation";

export const metadata: Metadata = {
  title: "Sun City Summerlin Golf Courses | Palm Valley, Highland Falls, Eagle Crest",
  description:
    "Explore three championship golf courses at Sun City Summerlin designed by Billy Casper & Greg Nash. Palm Valley and Highland Falls are 18-hole championship courses, while Eagle Crest is an executive course perfect for quick rounds.",
  alternates: {
    canonical: "https://www.suncityvegas.com/amenities/golf",
  },
  openGraph: {
    title: "Sun City Summerlin Golf Courses | Championship Golf in Las Vegas",
    description:
      "Three player-friendly, yet challenging courses designed by Hall-of-Famer Billy Casper and master course-planner Greg Nash.",
    url: "https://www.suncityvegas.com/amenities/golf",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/amenities/golf-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Golf course at Sun City Summerlin with mountain views",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun City Summerlin Golf Courses | Championship Golf",
    description: "Three championship courses designed by Billy Casper & Greg Nash.",
    images: ["https://www.suncityvegas.com/images/amenities/golf-hero.jpg"],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function GolfPage() {
  const golfCourses = getGolfCourses();

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Amenities", href: "/amenities" },
          { label: "Golf Courses", href: "/amenities/golf" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#5D7A5D] to-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <div className="flex justify-center mb-6">
                  <CircleDot className="w-16 h-16 text-[#D4AF37]" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  Sun City Summerlin Golf Courses
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                  Three Player-Friendly, Yet Challenging Courses Designed by Hall-of-Famer Billy Casper & Master Course-Planner Greg Nash
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  Play year-round in the perfect Las Vegas climate. Each course offers its own designated driving range and practice green.
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
                  src="/images/amenities/golf-hero.jpg"
                  alt="Golf course at Sun City Summerlin with Red Rock Canyon views"
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
                    Golf Summerlin features three distinct golf experiences, from championship layouts to executive courses. Together, this trifecta of golf courses offers a broad variety of golf experiences for players of all skill levels.
                  </p>
                  <p>
                    Whether you seek a full-spectrum round on a challenging par-72 layout or a quick 18 on a well-designed executive course, Golf Summerlin satisfies the golf appetite. Each course features its own designated driving range and practice green, making it easy to work on your game.
                  </p>
                  <p>
                    All three courses were designed by Hall-of-Famer Billy Casper and master course-planner Greg Nash, ensuring quality design and playability. The courses take advantage of the natural desert landscape and elevation changes, creating memorable golf experiences with stunning views of Red Rock Canyon and the Las Vegas Valley.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Highland Falls */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Highland Falls Golf Course
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation delay={100}>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-white">
                    <Image
                      src="/images/amenities/highland-falls-mountain-view.jpg"
                      alt="Highland Falls Golf Course with mountain views"
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
                      Two-Time Best of Las Vegas Winner
                    </p>
                    <p className="mb-4">
                      Highland Falls is a challenging championship course with dramatic elevation changes and stunning views of the Las Vegas Valley and Red Rock Canyon. With excellent conditions, unique holes, serene views and enough forgiveness to keep you in the fairway, Highland Falls is perfect for both novices and experts alike.
                    </p>
                    <p className="mb-4">
                      The course is a two-time winner of the Las Vegas Review-Journal Best of Las Vegas award for the incredible views of all Las Vegas has to display. The panoramic view of Las Vegas at the 14th hole has been featured in some of the city's largest publications and has been used as the backdrop for national ad campaigns and television segments.
                    </p>
                    <div className="bg-white rounded-lg p-6 mt-6">
                      <h3 className="text-lg font-bold text-[#8B5E3C] mb-3 font-playfair">Course Details</h3>
                      <ul className="space-y-2 text-[#2D2A26]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span><strong>Holes:</strong> 18</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span><strong>Type:</strong> Championship</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span><strong>Designers:</strong> Billy Casper & Greg Nash</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span><strong>Signature Hole:</strong> 14th hole with panoramic Las Vegas view</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Palm Valley */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Palm Valley Golf Course
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation delay={100}>
                  <div className="prose prose-lg max-w-none text-[#2D2A26] order-2 lg:order-1">
                    <p className="text-xl font-semibold text-[#8B5E3C] mb-4">
                      Traditional Championship Layout
                    </p>
                    <p className="mb-4">
                      Palm Valley features a traditional layout over a mildly rolling terrain, with only minor elevation changes. Course traits include fine conditioning of the fairways, greens and sand traps throughout the course, along with careful landscaping.
                    </p>
                    <p className="mb-4">
                      Numerous bunkers are strategically placed along the fairways and the putting surfaces, which are large in design and mildly undulating. The views of the mountains from the course are unmatched by other similar courses.
                    </p>
                    <p className="mb-4">
                      A beautifully landscaped championship course featuring mature palm trees, water features, and strategic bunkering throughout. Palm Valley offers a classic golf experience with modern course conditions.
                    </p>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 mt-6">
                      <h3 className="text-lg font-bold text-[#8B5E3C] mb-3 font-playfair">Course Details</h3>
                      <ul className="space-y-2 text-[#2D2A26]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span><strong>Holes:</strong> 18</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span><strong>Type:</strong> Championship</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span><strong>Designers:</strong> Billy Casper & Greg Nash</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span><strong>Features:</strong> Mature palm trees, water features, strategic bunkering</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-[#FDF8F3] order-1 lg:order-2">
                    <Image
                      src="/images/amenities/palm-valley-fairway.jpg"
                      alt="Palm Valley Golf Course fairway with palm trees"
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

        {/* Eagle Crest */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Eagle Crest Executive Course
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation delay={100}>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-white">
                    <Image
                      src="/images/amenities/eagle-crest-executive.jpg"
                      alt="Eagle Crest executive golf course"
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
                      Perfect for Quick Rounds
                    </p>
                    <p className="mb-4">
                      Eagle Crest Golf Course is a challenging executive course designed for those on a time-sensitive schedule and allows golfers to play a full 18-hole round in under three hours. The course boasts incredible mountain and Las Vegas valley views, including a stunning panoramic view of the Las Vegas strip from the driving range.
                    </p>
                    <p className="mb-4">
                      Eagle Crest is made up of six par four holes and 12 par three holes that challenge you to use every club in your bag. This course also has Golf Summerlin's lowest rates, making the rounds approachable to any budget.
                    </p>
                    <p className="mb-4">
                      An executive-length course perfect for a quick round, offering scenic views and a more relaxed pace of play. Ideal for improving your short game or enjoying a casual afternoon on the course.
                    </p>
                    <div className="bg-white rounded-lg p-6 mt-6">
                      <h3 className="text-lg font-bold text-[#8B5E3C] mb-3 font-playfair">Course Details</h3>
                      <ul className="space-y-2 text-[#2D2A26]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span><strong>Holes:</strong> 18 (6 par 4s, 12 par 3s)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span><strong>Type:</strong> Executive</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span><strong>Play Time:</strong> Under 3 hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#5D7A5D] font-bold">•</span>
                          <span><strong>Special Feature:</strong> Panoramic Las Vegas Strip view from driving range</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Facilities */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Practice Facilities
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ScrollAnimation delay={100}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                      Driving Ranges
                    </h3>
                    <p className="text-[#2D2A26] leading-relaxed mb-4">
                      Each Golf Summerlin course features its own designated driving range, making it convenient to practice before or after your round. The ranges are well-maintained and provide both grass and mat hitting areas.
                    </p>
                    <p className="text-[#2D2A26] leading-relaxed">
                      Eagle Crest's driving range is particularly notable for its stunning panoramic view of the Las Vegas Strip, making practice sessions as enjoyable as they are productive.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                      Practice Greens
                    </h3>
                    <p className="text-[#2D2A26] leading-relaxed mb-4">
                      Each course has its own practice putting green, allowing you to work on your short game in conditions that match the course you're about to play.
                    </p>
                    <p className="text-[#2D2A26] leading-relaxed">
                      The practice greens are maintained to the same high standards as the course greens, ensuring your practice translates directly to improved performance on the course.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Membership & Fees */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Golf Membership & Green Fees
                </h2>
                <div className="bg-white rounded-lg p-6 md:p-8 shadow-md space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">Membership Options</h3>
                    <p className="text-[#2D2A26] leading-relaxed mb-4">
                      Golf course access requires a separate membership from your HOA fee. Golf Summerlin offers various membership options to suit different playing frequencies and preferences.
                    </p>
                    <p className="text-[#2D2A26] leading-relaxed">
                      Membership includes access to all three courses, driving ranges, and practice facilities. Members also receive priority tee times and discounted rates for guests.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">Green Fees</h3>
                    <p className="text-[#2D2A26] leading-relaxed mb-4">
                      Green fees vary by course and time of day. Eagle Crest offers the lowest rates, making it an excellent option for frequent play or those on a budget.
                    </p>
                    <p className="text-[#2D2A26] leading-relaxed">
                      For current rates and membership information, contact Golf Summerlin directly or speak with Dr. Jan Duffy, who can provide details about golf memberships as part of your home purchase.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">Tee Times</h3>
                    <p className="text-[#2D2A26] leading-relaxed">
                      Tee times can be reserved in advance, with members receiving priority booking. The courses are open year-round, taking advantage of Las Vegas' ideal golf climate.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Golf Course Homes */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Golf Course Homes for Sale
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <ScrollAnimation delay={100}>
                    <div className="prose prose-lg max-w-none text-[#2D2A26]">
                      <p className="mb-4">
                        Many Sun City Summerlin homes feature golf course views, offering residents the opportunity to enjoy the beautiful course scenery from their own backyard. Golf course homes are highly sought after and tend to hold their value exceptionally well.
                      </p>
                      <p className="mb-4">
                        Whether you're looking for a home with views of Highland Falls, Palm Valley, or Eagle Crest, there are options available across various price points and floor plans.
                      </p>
                      <p className="mb-6">
                        Living on a golf course provides not just beautiful views, but also a sense of openness and connection to the community's recreational amenities. Many residents enjoy watching golfers play while relaxing in their backyard.
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 text-white"
                      >
                        <Link href="/homes-for-sale?view=golf">
                          Browse Golf Course Homes
                        </Link>
                      </Button>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation delay={200}>
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-[#FDF8F3]">
                      <Image
                        src="/images/amenities/golf-course-home.jpg"
                        alt="Golf course home with views of Sun City Summerlin golf course"
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Why Golf at Sun City Summerlin */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Why Golf at Sun City Summerlin?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Year-Round Play</h3>
                    <p className="text-[#2D2A26]">
                      Las Vegas' ideal climate means you can play golf year-round. Even in summer, the elevated location keeps temperatures manageable, especially for morning and evening rounds.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Variety of Courses</h3>
                    <p className="text-[#2D2A26]">
                      Three distinct courses mean you'll never get bored. Play a challenging championship round one day, then enjoy a quick executive course round the next.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Stunning Views</h3>
                    <p className="text-[#2D2A26]">
                      Every course offers beautiful views of Red Rock Canyon, the Las Vegas Valley, or the surrounding mountains. Golf here is as much about the scenery as the game.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Active Golf Community</h3>
                    <p className="text-[#2D2A26]">
                      Join golf leagues, participate in tournaments, or simply enjoy casual rounds with neighbors. The golf community at Sun City Summerlin is welcoming and active.
                    </p>
                  </div>
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
                  Ready to Play Golf at Sun City Summerlin?
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a tour with Dr. Jan Duffy to see the golf courses and explore homes with golf course views. Learn more about golf memberships and the active golf lifestyle at Sun City Summerlin.
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
