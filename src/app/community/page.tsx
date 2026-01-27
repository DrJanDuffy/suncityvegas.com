import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import Link from "next/link";
import ScrollAnimation from "@components/scroll-animation";
import { MapPin, Calendar, Home, Users, Activity, Award } from "lucide-react";
import { getGolfCourses, getRecreationCenters } from "@/lib/communityData";

export const metadata: Metadata = {
  title: "Sun City Summerlin Community Guide | Las Vegas 55+ Active Adult Community",
  description:
    "Complete guide to Sun City Summerlin, Las Vegas' premier 55+ community. History, amenities, golf courses, recreation centers, clubs, HOA info, and location details. 7,779 homes built 1989-2002.",
  alternates: {
    canonical: "https://www.suncityvegas.com/community",
  },
  openGraph: {
    title: "Sun City Summerlin Community Guide | Las Vegas 55+ Community",
    description:
      "Complete guide to Sun City Summerlin: history, amenities, golf courses, recreation centers, and lifestyle.",
    url: "https://www.suncityvegas.com/community",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin community overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun City Summerlin Community Guide | Las Vegas 55+ Community",
    description: "Complete guide to Las Vegas' premier 55+ active adult community.",
    images: ["https://www.suncityvegas.com/images/hero/hero-bg.jpg"],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function CommunityPage() {
  const golfCourses = getGolfCourses();
  const recCenters = getRecreationCenters();

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen bg-white">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Community", href: "/community" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#FDF8F3] to-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                  Discover Sun City Summerlin
                </h1>
                <p className="text-lg md:text-xl text-[#2D2A26] mb-8 leading-relaxed">
                  One of the nation's premiere active adult communities. Organized by Del Webb Corporation in 1989, featuring 7,781 single-family homes, 4 golf courses, 4 fitness centers, an Olympic-sized pool, and extensive recreation facilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 min-h-[44px]">
                    <Link href="/homes-for-sale">View Homes for Sale</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C]/10 min-h-[44px]">
                    <Link href="/amenities">Explore Amenities</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C]/10 min-h-[44px]">
                    <Link href="/community/neighborhood">Explore Neighborhood</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-[#FDF8F3]">
                    <Image
                      src="/images/hero/community-sign.jpg"
                      alt="Sun City Summerlin community entrance"
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
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                      A Legacy of Excellence
                    </h2>
                    <div className="prose prose-lg max-w-none space-y-4 text-[#2D2A26]">
                      <p>
                        Sun City Summerlin was developed by Del Webb Corporation in 1989, making it one of the nation's premiere active adult communities. Organized in the City of Las Vegas, this well-established 55+ resort community offers magnificent views of the surrounding mountains and the Las Vegas Strip.
                      </p>
                      <p>
                        The community spans over 2,400 acres in the prestigious Summerlin master-planned community on the western edge of Las Vegas. Located mere minutes from the glamorous action of downtown Las Vegas and the fabled Strip, Sun City Summerlin boasts tree-lined streets, great shopping, top-notch restaurants, and award-winning resorts, casinos, and spas.
                      </p>
                      <p>
                        All homes are single-story, designed specifically for active adults who want maintenance-free living without sacrificing space or style. Today, Sun City Summerlin remains one of the most sought-after 55+ communities in Las Vegas, known for its mature landscaping, extensive recreation facilities, and vibrant social scene.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-12 text-center font-playfair">
                  Community at a Glance
                </h2>
              </ScrollAnimation>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
                <ScrollAnimation delay={0}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-2">7,781</div>
                    <div className="text-[#2D2A26]">Homes</div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={100}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-2">4</div>
                    <div className="text-[#2D2A26]">Golf Courses</div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-2">3</div>
                    <div className="text-[#2D2A26]">Rec Centers</div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={300}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-2">80+</div>
                    <div className="text-[#2D2A26]">Clubs</div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={400}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-2">55+</div>
                    <div className="text-[#2D2A26]">Age Restriction</div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={500}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-2">1989-2002</div>
                    <div className="text-[#2D2A26]">Built</div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Golf Courses */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-4 text-center font-playfair">
                  Golf Summerlin: Three Championship Courses
                </h2>
                <p className="text-lg text-[#2D2A26] text-center mb-12 max-w-2xl mx-auto">
                  Golf Summerlin features three player-friendly, yet challenging courses designed by Hall-of-Famer Billy Casper and master course-planner Greg Nash. Each course offers its own designated driving range and practice green, providing a broad variety of golf experiences for players of all skill levels.
                </p>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {golfCourses.map((course, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        {course.name}
                      </h3>
                      <p className="text-[#2D2A26] mb-4">{course.description}</p>
                      {course.holes && (
                        <p className="text-sm text-[#2D2A26] opacity-75">
                          {course.holes} holes • {course.type}
                        </p>
                      )}
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recreation Centers */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-4 text-center font-playfair">
                  Three Recreation Centers
                </h2>
                <p className="text-lg text-[#2D2A26] text-center mb-12 max-w-2xl mx-auto">
                  Sun City Summerlin features more amenities than any other active adult community in Las Vegas. Among the extensive recreation facilities are 4 fitness centers, an Olympic-sized pool, and three recreation centers, each offering unique amenities and activities.
                </p>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recCenters.map((center, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
                      <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        {center.name}
                      </h3>
                      <p className="text-[#2D2A26] mb-4">{center.description}</p>
                      {center.size && (
                        <p className="text-sm text-[#2D2A26] opacity-75 mb-4">
                          {center.size} square feet
                        </p>
                      )}
                      {center.features && (
                        <ul className="space-y-2">
                          {center.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="text-sm text-[#2D2A26] flex items-start gap-2">
                              <span className="text-[#5D7A5D]">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location & Nearby */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation>
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                      Prime Location in Summerlin
                    </h2>
                    <div className="prose prose-lg max-w-none space-y-4 text-[#2D2A26]">
                      <p>
                        Sun City Summerlin is located in the prestigious Summerlin master-planned community, just 15 minutes from the Las Vegas Strip and 20 minutes from McCarran International Airport.
                      </p>
                      <p>
                        The community enjoys proximity to Red Rock Canyon National Conservation Area, offering stunning mountain views and easy access to hiking and outdoor recreation. Shopping, dining, and medical facilities are all within minutes.
                      </p>
                      <div className="bg-[#FDF8F3] rounded-lg p-6 mt-6">
                        <div className="flex items-start gap-4">
                          <MapPin className="w-6 h-6 text-[#8B5E3C] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-[#8B5E3C] mb-2">Community Location</p>
                            <p className="text-[#2D2A26]">
                              Sun City Summerlin<br />
                              9406 Del Webb Blvd<br />
                              Las Vegas, NV 89134
                            </p>
                            <p className="text-sm text-[#2D2A26] opacity-75 mt-2">
                              HOA Phone: (702) 966-1400
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={100}>
                  <div className="bg-[#FDF8F3] rounded-lg p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                      Nearby Amenities
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-[#2D2A26]">Red Rock Canyon</p>
                          <p className="text-sm text-[#2D2A26] opacity-75">5 minutes - Hiking, scenic drives</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-[#2D2A26]">Downtown Summerlin</p>
                          <p className="text-sm text-[#2D2A26] opacity-75">10 minutes - Shopping, dining, entertainment</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-[#2D2A26]">Medical Facilities</p>
                          <p className="text-sm text-[#2D2A26] opacity-75">Multiple hospitals within 15 minutes</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-[#2D2A26]">Las Vegas Strip</p>
                          <p className="text-sm text-[#2D2A26] opacity-75">15 minutes - World-class entertainment</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* HOA Information */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  HOA Information
                </h2>
              </ScrollAnimation>

              <div className="bg-white rounded-lg p-8 md:p-12 shadow-md">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">Monthly HOA Fee</h3>
                    <p className="text-[#2D2A26]">
                      Approximately $165 per month (subject to change). This fee covers maintenance of common areas, recreation facilities, security, and community amenities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">What's Included</h3>
                    <ul className="space-y-2 text-[#2D2A26]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D]">•</span>
                        <span>Access to all recreation centers and amenities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D]">•</span>
                        <span>Guard-gated security 24/7</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D]">•</span>
                        <span>Landscaping and maintenance of common areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D]">•</span>
                        <span>Community events and activities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D]">•</span>
                        <span>Golf course maintenance (golf fees separate)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 mt-6">
                    <p className="text-sm text-[#2D2A26] italic">
                      <strong>Note:</strong> HOA fees and regulations are subject to change. For the most current information, contact the Sun City Summerlin HOA directly or consult with your real estate agent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-playfair">
                  Ready to Call Sun City Summerlin Home?
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Explore available homes and discover why this is Las Vegas' premier 55+ community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#8B5E3C] hover:bg-white/90 min-h-[44px]">
                    <Link href="/homes-for-sale">View Homes for Sale</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 min-h-[44px]">
                    <Link href="/contact">Contact Dr. Jan Duffy</Link>
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
