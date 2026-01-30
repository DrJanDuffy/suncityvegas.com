import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import { Phone, Calendar, Music, UtensilsCrossed, Gift, Sparkles } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

export const metadata: Metadata = {
  title: "Sun City Summerlin Events & Activities | Year-Round Calendar",
  description:
    "Discover year-round events and activities at Sun City Summerlin. From holiday celebrations to concerts, socials to educational seminars, there's always something happening.",
  alternates: {
    canonical: "https://www.suncityvegas.com/lifestyle/events",
  },
  openGraph: {
    title: "Sun City Summerlin Events & Activities | Year-Round Calendar",
    description:
      "Year-round events and activities at Sun City Summerlin, from holiday celebrations to concerts and socials.",
    url: "https://www.suncityvegas.com/lifestyle/events",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/lifestyle/events-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin community events and activities",
      },
    ],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function EventsPage() {
  const eventTypes = [
    {
      name: "Holiday Celebrations",
      icon: Gift,
      description: "Community-wide holiday events throughout the year",
      events: [
        "New Year's Eve Party",
        "Valentine's Day Dance",
        "St. Patrick's Day Celebration",
        "Easter Brunch",
        "Fourth of July BBQ",
        "Halloween Party",
        "Thanksgiving Dinner",
        "Christmas Gala",
      ],
    },
    {
      name: "Concerts & Entertainment",
      icon: Music,
      description: "Live music and entertainment events",
      events: [
        "Monthly Concerts",
        "Dance Performances",
        "Comedy Shows",
        "Theater Productions",
        "Variety Shows",
        "Holiday Concerts",
      ],
    },
    {
      name: "Social Events",
      icon: UtensilsCrossed,
      description: "Social gatherings and community meals",
      events: [
        "Monthly Socials",
        "Wine & Cheese Events",
        "Potluck Dinners",
        "BBQ Cookouts",
        "Coffee Socials",
        "Ice Cream Socials",
      ],
    },
    {
      name: "Educational Seminars",
      icon: Sparkles,
      description: "Learning opportunities and workshops",
      events: [
        "Health & Wellness Seminars",
        "Financial Planning Workshops",
        "Technology Classes",
        "Travel Presentations",
        "Gardening Workshops",
        "Cooking Classes",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Lifestyle", href: "/lifestyle" },
          { label: "Events", href: "/lifestyle/events" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#5D7A5D] to-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <div className="flex justify-center mb-6">
                  <Calendar className="w-16 h-16 text-[#D4AF37]" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  Sun City Summerlin Events & Activities
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                  Year-Round Calendar of Community Events
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  From holiday celebrations to concerts, socials to educational seminars, there's always something happening at Sun City Summerlin.
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
                  src="/images/lifestyle/events-hero.jpg"
                  alt="Sun City Summerlin community events and celebrations"
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
                    Life at Sun City Summerlin is never boring. The community hosts a full calendar of events throughout the year, bringing residents together for fun, entertainment, and socializing.
                  </p>
                  <p>
                    From holiday celebrations to concerts, educational seminars to social gatherings, there's always something happening. Most events are included in your HOA fee, making them accessible to all residents.
                  </p>
                  <p>
                    Whether you're looking for entertainment, education, or just a chance to socialize with neighbors, Sun City Summerlin's event calendar has something for everyone.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Types of Events
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {eventTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <ScrollAnimation key={type.name} delay={index * 100}>
                      <div className="bg-white rounded-lg p-6 shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                          <Icon className="w-8 h-8 text-[#8B5E3C]" />
                          <h3 className="text-xl font-bold text-[#8B5E3C] font-playfair">
                            {type.name}
                          </h3>
                        </div>
                        <p className="text-[#2D2A26] mb-4 leading-relaxed">
                          {type.description}
                        </p>
                        <ul className="space-y-2">
                          {type.events.map((event) => (
                            <li key={event} className="flex items-start gap-2 text-[#2D2A26]">
                              <span className="text-[#5D7A5D] font-bold">•</span>
                              <span>{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollAnimation>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Year-Round Calendar */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Year-Round Calendar
                </h2>
              </ScrollAnimation>
              <div className="space-y-6">
                {[
                  {
                    season: "Spring",
                    events: "Easter celebrations, spring concerts, garden tours, health fairs",
                  },
                  {
                    season: "Summer",
                    events: "Fourth of July BBQ, pool parties, outdoor concerts, summer socials",
                  },
                  {
                    season: "Fall",
                    events: "Harvest festivals, Oktoberfest, fall concerts, educational seminars",
                  },
                  {
                    season: "Winter",
                    events: "Holiday galas, New Year's Eve party, winter concerts, holiday bazaars",
                  },
                ].map((season, index) => (
                  <ScrollAnimation key={season.season} delay={index * 100}>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#8B5E3C]">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        {season.season}
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">{season.events}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Event Venues */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  Event Venues
                </h2>
              </ScrollAnimation>
              <div className="bg-white rounded-lg p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Desert Vista Grand Ballroom
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    The largest event space in Sun City Summerlin, perfect for major celebrations, concerts, and large social gatherings. The grand ballroom can accommodate hundreds of guests.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Recreation Center Meeting Rooms
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    All three recreation centers have meeting rooms and social spaces that host smaller events, seminars, and club meetings throughout the year.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Outdoor Spaces
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Beautiful outdoor spaces throughout the community host summer events, BBQs, and outdoor concerts, taking advantage of Las Vegas' ideal weather.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Involved */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  Getting Involved
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#FDF8F3] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Attend Events
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Most events are open to all residents. Check the community calendar, newsletter, or recreation center bulletin boards for upcoming events.
                  </p>
                </div>
                <div className="bg-[#FDF8F3] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Volunteer
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Many residents volunteer to help organize and run events. It's a great way to get involved and meet people while contributing to the community.
                  </p>
                </div>
                <div className="bg-[#FDF8F3] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Suggest Events
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    The community welcomes suggestions for new events. If you have an idea for an event, share it with the HOA or recreation center staff.
                  </p>
                </div>
                <div className="bg-[#FDF8F3] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Stay Informed
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Stay up-to-date on events through the community newsletter, website, recreation center announcements, and word-of-mouth from neighbors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-playfair">
                  Experience the Active Lifestyle
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a tour with Dr. Jan Duffy to see the recreation centers where events are held and learn more about the vibrant community life at Sun City Summerlin.
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
