import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import ScrollAnimation from "@/../components/scroll-animation";
import ScheduleTour from "@/../components/ScheduleTour";
import RealScoutListings from "@/../components/RealScoutListings";
import { getDistances, getClubs } from "@/lib/communityData";
import {
  Users,
  Calendar,
  Heart,
  Music,
  BookOpen,
  UtensilsCrossed,
  Gamepad2,
  Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Active Adult Lifestyle | Sun City Summerlin | 80+ Clubs & Activities",
  description:
    "Discover the vibrant lifestyle at Sun City Summerlin with 80+ clubs, golf, tennis, social events, and more. Las Vegas' premier 55+ community.",
  alternates: {
    canonical: "https://www.suncityvegas.com/lifestyle",
  },
  openGraph: {
    title: "Active Adult Lifestyle | Sun City Summerlin | 80+ Clubs & Activities",
    description:
      "Vibrant community life with 80+ clubs, golf, tennis, and activities at Sun City Summerlin.",
    url: "https://www.suncityvegas.com/lifestyle",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/amenities/event-lawn-club.jpeg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin community lifestyle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Active Adult Lifestyle | Sun City Summerlin | 80+ Clubs & Activities",
    description: "Vibrant community life at Las Vegas' premier 55+ community.",
    images: ["https://www.suncityvegas.com/images/amenities/event-lawn-club.jpeg"],
  },
};

const clubs = [
  {
    icon: <Heart className="w-8 h-8" />,
    name: "Health & Wellness",
    description: "Walking groups, fitness classes, swimming, and wellness workshops",
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    name: "Games & Recreation",
    description: "Golf, pickleball, tennis, bocce, card games, and billiards leagues",
  },
  {
    icon: <Music className="w-8 h-8" />,
    name: "Arts & Culture",
    description: "Performing arts, music groups, art classes, and cultural events",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8" />,
    name: "Culinary",
    description: "Cooking classes, wine tastings, and dining groups",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    name: "Photography & Travel",
    description: "Photo clubs, travel groups, and adventure outings",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    name: "Learning",
    description: "Educational seminars, computer classes, and discussion groups",
  },
];

const events = [
  {
    title: "Community Socials",
    description:
      "Monthly gatherings at the recreation centers with food, music, and dancing",
  },
  {
    title: "Holiday Celebrations",
    description:
      "Special events for holidays throughout the year with themed activities",
  },
  {
    title: "Golf Tournaments",
    description:
      "Regular tournaments across all 4 championship courses",
  },
  {
    title: "Educational Seminars",
    description:
      "Guest speakers on topics like health, finance, and local history",
  },
];

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function LifestylePage() {
  const distances = getDistances();
  const communityClubs = getClubs();

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Lifestyle", href: "/lifestyle" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Active Adult Lifestyle | Sun City Summerlin
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Sun City Summerlin isn&apos;t just a place to live—it&apos;s a vibrant
                community where neighbors become friends and every day offers new
                opportunities to connect, learn, and enjoy life with 80+ clubs and activities.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-8 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-[#8B5E3C]">80+</p>
                <p className="text-[#2D2A26]">Active Clubs</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-[#8B5E3C]">4</p>
                <p className="text-[#2D2A26]">Golf Courses</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-[#8B5E3C]">3</p>
                <p className="text-[#2D2A26]">Rec Centers</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-[#8B5E3C]">7,779</p>
                <p className="text-[#2D2A26]">Homes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Life */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-three bg-[#FDF8F3]">
                    <Image
                      src="/images/amenities/event-lawn-club.jpeg"
                      alt="Community events and gatherings at Sun City Summerlin"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={100}>
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-4 md:mb-6 font-playfair">
                      More Than Neighbors—A Community
                    </h2>
                    <div className="prose prose-lg max-w-none space-y-4">
                      <p className="text-base md:text-lg text-[#2D2A26] leading-relaxed">
                        At Sun City Summerlin, you&apos;ll find a community of
                        active adults who chose this lifestyle on purpose. They&apos;re
                        here to live fully, not just exist.
                      </p>
                      <p className="text-base md:text-lg text-[#2D2A26] leading-relaxed">
                        Whether you&apos;re joining a morning golf game, attending
                        a club meeting at the <Link href="/amenities" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">recreation centers</Link>, or simply chatting with neighbors on a
                        walk with Red Rock Canyon views, you&apos;ll discover that making friends comes naturally
                        here.
                      </p>
                      <p className="text-base md:text-lg text-[#2D2A26] leading-relaxed font-semibold">
                        Everyone here gets it. They understand what you&apos;re looking
                        for because they&apos;re looking for the same thing: a place to
                        finally do everything you&apos;ve been putting off.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Clubs & Groups */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                  80+ Clubs & Organizations
                </h2>
                <p className="text-lg text-[#2D2A26] max-w-2xl mx-auto">
                  From golf leagues to book clubs, photography groups to dance classes—
                  there&apos;s something for everyone at Sun City Summerlin.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubs.map((club, index) => (
                  <ScrollAnimation key={club.name} delay={index * 50}>
                    <div className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow">
                      <div className="flex items-center justify-center w-14 h-14 bg-[#8B5E3C]/10 rounded-full mb-4">
                        <div className="text-[#8B5E3C]">{club.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        {club.name}
                      </h3>
                      <p className="text-[#2D2A26]">{club.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Events & Activities */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Calendar className="w-10 h-10 text-[#8B5E3C]" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] font-playfair">
                    Community Events
                  </h2>
                </div>
                <p className="text-lg text-[#2D2A26] max-w-2xl mx-auto">
                  Regular events and activities bring the community together
                  throughout the year.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <ScrollAnimation key={event.title} delay={index * 50}>
                    <div className="bg-[#FDF8F3] p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        {event.title}
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Attractions & Distances */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                  Conveniently Located
                </h2>
                <p className="text-lg text-[#2D2A26]">
                  Sun City Summerlin is perfectly positioned near everything you need—
                  with Red Rock Canyon at your doorstep and the Las Vegas Strip just minutes away.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(distances).map(([key, distance]) => (
                  <div key={key} className="bg-white p-6 rounded-lg shadow-two">
                    <h3 className="font-semibold text-[#8B5E3C] mb-2">
                      {distance.description}
                    </h3>
                    <p className="text-2xl font-bold text-[#8B5E3C]">
                      {distance.miles} miles
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Connections */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Users className="w-12 h-12 text-[#8B5E3C] mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                  Built-In Social Network
                </h2>
                <p className="text-lg text-[#2D2A26]">
                  One of the best parts of living in a 55+ community? Everyone
                  is in the same stage of life. You&apos;ll find:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#FDF8F3] p-6 rounded-lg shadow-two">
                  <h3 className="font-semibold text-[#8B5E3C] mb-3">
                    Shared Experiences
                  </h3>
                  <p className="text-[#2D2A26]">
                    Common life experiences create instant connections and
                    understanding.
                  </p>
                </div>
                <div className="bg-[#FDF8F3] p-6 rounded-lg shadow-two">
                  <h3 className="font-semibold text-[#8B5E3C] mb-3">
                    Active Lifestyles
                  </h3>
                  <p className="text-[#2D2A26]">
                    Neighbors who want to stay active, social, and engaged.
                  </p>
                </div>
                <div className="bg-[#FDF8F3] p-6 rounded-lg shadow-two">
                  <h3 className="font-semibold text-[#8B5E3C] mb-3">
                    No Generational Gap
                  </h3>
                  <p className="text-[#2D2A26]">
                    Everyone understands your priorities and lifestyle choices.
                  </p>
                </div>
                <div className="bg-[#FDF8F3] p-6 rounded-lg shadow-two">
                  <h3 className="font-semibold text-[#8B5E3C] mb-3">
                    Easy Friendships
                  </h3>
                  <p className="text-[#2D2A26]">
                    Making friends happens naturally when everyone is open to
                    connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Listings */}
        <RealScoutListings h2Text="View Available Homes in Sun City Summerlin to Experience This Lifestyle" />

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Experience the Lifestyle for Yourself
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a tour with <Link href="/about" className="text-[#D4AF37] hover:text-white underline">Dr. Jan Duffy</Link> to see the community, meet residents, and learn
                about the clubs and activities available. Explore <Link href="/homes-for-sale" className="text-[#D4AF37] hover:text-white underline">homes for sale</Link> or view the <Link href="/amenities" className="text-[#D4AF37] hover:text-white underline">resort-style amenities</Link>.
              </p>
              <ScheduleTour variant="accent" size="lg" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
