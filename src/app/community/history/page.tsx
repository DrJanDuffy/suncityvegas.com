import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/../../components/navbar";
import Footer from "@/../../components/footer";
import Breadcrumbs from "@/../../components/Breadcrumbs";
import { Button } from "@/../../components/ui/button";
import { Phone, Calendar, Building, Users, MapPin } from "lucide-react";
import ScrollAnimation from "@/../../components/scroll-animation";

export const metadata: Metadata = {
  title: "Sun City Summerlin History | Del Webb in Summerlin 1989-2002",
  description:
    "Learn about Sun City Summerlin's history—built by Del Webb Corporation in Summerlin, Las Vegas, 1989-2002. Del Webb Las Vegas Summerlin is one of Las Vegas' premier 55+ active adult communities with 7,781 homes.",
  keywords: [
    "Del Webb in Summerlin",
    "Del Webb Las Vegas Summerlin",
    "Sun City Del Webb Las Vegas",
    "Del Webb senior living communities",
    "Sun City Summerlin history",
  ],
  alternates: {
    canonical: "https://www.suncityvegas.com/community/history",
  },
  openGraph: {
    title: "Sun City Summerlin History | Del Webb in Summerlin 1989-2002",
    description:
      "The history of Sun City Summerlin—Del Webb Las Vegas Summerlin from 1989 to today's thriving 55+ community.",
    url: "https://www.suncityvegas.com/community/history",
    siteName: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/community/history-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin history and development",
      },
    ],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Community", href: "/community" },
          { label: "History", href: "/community/history" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#5D7A5D] to-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <div className="flex justify-center mb-6">
                  <Building className="w-16 h-16 text-[#D4AF37]" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  Sun City Summerlin History
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                  Built by Del Webb Corporation (1989-2002)
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  From vision to reality: The story of how Sun City Summerlin became one of Las Vegas' premier 55+ active adult communities.
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
                  src="/images/community/history-hero.jpg"
                  alt="Sun City Summerlin history and development by Del Webb"
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
                    Sun City Summerlin represents a significant chapter in the history of active adult communities in Las Vegas. Built by Del Webb Corporation from 1989 to 2002, it was one of the first major 55+ communities in the Las Vegas area.
                  </p>
                  <p>
                    Del Webb, the company that pioneered the active adult community concept with the original Sun City in Arizona, brought their expertise and vision to Las Vegas with Sun City Summerlin. The result is a thriving community that has stood the test of time and continues to be one of the most desirable 55+ communities in the region.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Del Webb Legacy */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  The Del Webb Legacy
                </h2>
              </ScrollAnimation>
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-md space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Pioneering Active Adult Living
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Del Webb Corporation revolutionized retirement living when they opened the first Sun City in Arizona in 1960. The concept of an age-restricted community designed specifically for active adults was groundbreaking, and it changed how Americans thought about retirement.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Bringing the Vision to Las Vegas
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    By the late 1980s, Del Webb had perfected the Sun City model. When they chose Summerlin, Las Vegas, as the location for a new Sun City community, they brought decades of experience in creating active adult communities. Sun City Summerlin was designed to be a flagship community, showcasing the best of what Del Webb had learned.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    Quality and Vision
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Del Webb's commitment to quality construction, thoughtful planning, and comprehensive amenities is evident throughout Sun City Summerlin. The community was built to last, with attention to detail that has helped it maintain its value and desirability over the decades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Development Timeline
                </h2>
              </ScrollAnimation>
              <div className="space-y-6">
                {[
                  {
                    year: "1989",
                    title: "Groundbreaking",
                    description:
                      "Del Webb Corporation begins development of Sun City Summerlin, one of the first major 55+ communities in Las Vegas. The location in Summerlin was chosen for its proximity to Red Rock Canyon, higher elevation, and master-planned community setting.",
                  },
                  {
                    year: "1989-1995",
                    title: "Early Phases",
                    description:
                      "The first homes are built and the community begins to take shape. Early residents move in and the first recreation centers open. The community establishes its character and culture.",
                  },
                  {
                    year: "1995-1999",
                    title: "Expansion",
                    description:
                      "The community continues to grow with additional phases. More recreation centers are completed, golf courses open, and the community becomes fully established. Home styles evolve with the times while maintaining the single-story ranch design.",
                  },
                  {
                    year: "1999-2002",
                    title: "Final Phases",
                    description:
                      "The final phases of development are completed. The community reaches its full size of 7,781 homes. All amenities are operational, and Sun City Summerlin is a fully mature, established community.",
                  },
                  {
                    year: "2002-Present",
                    title: "Mature Community",
                    description:
                      "Sun City Summerlin continues to thrive as an established community. Homes are well-maintained, amenities are updated, and the community remains one of Las Vegas' most desirable 55+ communities. The HOA and residents work together to maintain the high standards set by Del Webb.",
                  },
                ].map((milestone, index) => (
                  <ScrollAnimation key={milestone.year} delay={index * 100}>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#8B5E3C]">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-[#8B5E3C] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-[#8B5E3C] font-playfair">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-[#2D2A26] leading-relaxed ml-20">
                        {milestone.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Growth */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  Community Growth & Evolution
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    Population Growth
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    From the first residents in 1989 to today's thriving community of over 7,781 homes, Sun City Summerlin has grown into one of the largest and most established 55+ communities in Las Vegas.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair flex items-center gap-3">
                    <Building className="w-6 h-6" />
                    Amenity Development
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Over the years, all three recreation centers, three golf courses, and extensive amenities were completed. The community now offers over 125,000 square feet of recreation facilities.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    Community Culture
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    A vibrant community culture has developed with 80+ clubs, year-round events, and active social life. Residents have created a welcoming, engaged community.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    Established Reputation
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Sun City Summerlin has established itself as one of Las Vegas' premier 55+ communities, known for its amenities, location, and active lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Today's Community */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  Today's Sun City Summerlin
                </h2>
              </ScrollAnimation>
              <div className="bg-gradient-to-r from-[#8B5E3C] to-[#5D7A5D] text-white rounded-lg p-8 md:p-12">
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  Today, Sun City Summerlin stands as a testament to Del Webb's vision. The community has matured beautifully, with established landscaping, proven amenities, and a vibrant resident community.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  What makes Sun City Summerlin special isn't just its history—it's how that history has created a community that continues to thrive. The quality construction, thoughtful planning, and comprehensive amenities that Del Webb built have stood the test of time.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Residents today enjoy the benefits of living in an established, mature community with all amenities operational, proven infrastructure, and a strong sense of community that has developed over more than three decades.
                </p>
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
                  Be Part of the Legacy
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a tour with Dr. Jan Duffy to see Sun City Summerlin and learn more about this historic community built by Del Webb.
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
