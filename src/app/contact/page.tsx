import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import ScrollAnimation from "@components/scroll-animation";
import { Phone, Mail, MapPin, Youtube, ExternalLink, Car, Train, Footprints } from "lucide-react";
import ScheduleTour from "@components/ScheduleTour";
import CalendlyInline from "@components/CalendlyInline";

export const metadata: Metadata = {
  title: "Contact & Schedule a Tour | Sun City Summerlin | Dr. Jan Duffy",
  description:
    "Contact Dr. Jan Duffy to schedule a tour of Sun City Summerlin, Las Vegas' premier 55+ community. Call (702) 718-0043 or book online.",
  alternates: {
    canonical: "https://www.suncityvegas.com/contact",
  },
  openGraph: {
    title: "Contact & Schedule a Tour | Sun City Summerlin | Dr. Jan Duffy",
    description:
      "Schedule a tour of Sun City Summerlin, Las Vegas' premier 55+ community. Call (702) 718-0043.",
    url: "https://www.suncityvegas.com/contact",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/about/dr-jan-duffy.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Jan Duffy, REALTOR®",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Schedule a Tour | Sun City Summerlin | Dr. Jan Duffy",
    description: "Schedule a tour of Sun City Summerlin 55+ community in Las Vegas.",
    images: ["https://www.suncityvegas.com/images/about/dr-jan-duffy.jpg"],
  },
};

// Directions: Google Maps Embed API (directions mode). Destination = Sun City Summerlin (NAP).
const DIRECTIONS_DESTINATION = "9406 Del Webb Blvd, Las Vegas, NV 89134";
const DIRECTIONS_ORIGIN_STRIP = "Las Vegas Strip, Las Vegas, NV";
const DIRECTIONS_ORIGIN_AIRPORT = "Harry Reid International Airport, Las Vegas, NV";

function getDirectionsUrl(origin: string, travelmode: "driving" | "walking" | "transit" | "bicycling") {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(DIRECTIONS_DESTINATION)}&origin=${encodeURIComponent(origin)}&travelmode=${travelmode}`;
}

function DirectionsSection() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
  const baseParams = `key=${apiKey}&origin=${encodeURIComponent(DIRECTIONS_ORIGIN_STRIP)}&destination=${encodeURIComponent(DIRECTIONS_DESTINATION)}`;
  const embedUrlDriving = apiKey && `https://www.google.com/maps/embed/v1/directions?${baseParams}&mode=driving`;

  return (
    <section className="py-12 md:py-16 bg-[#FDF8F3]" id="directions">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-2 font-playfair text-center">
            Plan Your Visit – Directions
          </h2>
          <p className="text-[#2D2A26] text-center mb-8 max-w-2xl mx-auto">
            Get directions to Sun City Summerlin. Estimated travel times below help you plan by car, transit, or other modes.
          </p>

          {/* Estimated travel times */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg p-5 shadow-sm border border-[#E8E4E0]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#8B5E3C]/10 flex items-center justify-center">
                  <Car className="w-5 h-5 text-[#8B5E3C]" aria-hidden />
                </div>
                <h3 className="font-semibold text-[#8B5E3C]">By car</h3>
              </div>
              <p className="text-sm text-[#2D2A26]">
                ~15 min from the Las Vegas Strip
                <br />
                ~20 min from Harry Reid Airport
              </p>
              <a
                href={getDirectionsUrl(DIRECTIONS_ORIGIN_STRIP, "driving")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#8B5E3C] font-medium text-sm mt-2 hover:underline"
              >
                Get driving directions
                <ExternalLink className="w-4 h-4" aria-hidden />
              </a>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border border-[#E8E4E0]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#8B5E3C]/10 flex items-center justify-center">
                  <Train className="w-5 h-5 text-[#8B5E3C]" aria-hidden />
                </div>
                <h3 className="font-semibold text-[#8B5E3C]">By transit</h3>
              </div>
              <p className="text-sm text-[#2D2A26]">
                ~45–60 min from the Strip (RTC bus)
                <br />
                ~60+ min from the airport
              </p>
              <a
                href={getDirectionsUrl(DIRECTIONS_ORIGIN_STRIP, "transit")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#8B5E3C] font-medium text-sm mt-2 hover:underline"
              >
                Get transit directions
                <ExternalLink className="w-4 h-4" aria-hidden />
              </a>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border border-[#E8E4E0]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#8B5E3C]/10 flex items-center justify-center">
                  <Footprints className="w-5 h-5 text-[#8B5E3C]" aria-hidden />
                </div>
                <h3 className="font-semibold text-[#8B5E3C]">Walking</h3>
              </div>
              <p className="text-sm text-[#2D2A26]">
                Not practical from the Strip or airport; driving or rideshare recommended.
              </p>
              <a
                href={getDirectionsUrl(DIRECTIONS_ORIGIN_STRIP, "walking")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#8B5E3C] font-medium text-sm mt-2 hover:underline"
              >
                Walking directions
                <ExternalLink className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </div>

          {/* Embedded directions map (when API key is set) */}
          {embedUrlDriving ? (
            <div className="rounded-lg overflow-hidden shadow-lg border border-[#E8E4E0] h-[400px] md:h-[450px]">
              <iframe
                src={embedUrlDriving}
                width="100%"
                height="100%"
                className="border-0 w-full h-full block"
                loading="lazy"
                title="Directions to Sun City Summerlin from the Las Vegas Strip by car"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            <div className="rounded-lg border-2 border-dashed border-[#8B5E3C]/30 bg-white p-6 md:p-8 text-center">
              <p className="text-[#2D2A26] mb-4">
                Use the links above to get directions on Google Maps. To show the map on this page, set{" "}
                <code className="bg-[#FDF8F3] px-1.5 py-0.5 rounded text-sm">NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY</code> in your environment.
              </p>
              <a
                href={getDirectionsUrl(DIRECTIONS_ORIGIN_STRIP, "driving")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Open directions in Google Maps
                <ExternalLink className="w-4 h-4" aria-hidden />
              </a>
            </div>
          )}

          <p className="mt-4 text-sm text-[#2D2A26]/70 text-center">
            Destination: {DIRECTIONS_DESTINATION} (Sun City Summerlin)
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Contact & Schedule a Tour | Sun City Summerlin
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Ready to explore Sun City Summerlin? Contact <Link href="/about" className="text-[#D4AF37] hover:text-white underline">Dr. Jan Duffy</Link> to
                schedule a private tour, ask questions, or learn more about
                <Link href="/homes-for-sale" className="text-[#D4AF37] hover:text-white underline"> available homes</Link>. Explore <Link href="/amenities" className="text-[#D4AF37] hover:text-white underline">amenities</Link> and <Link href="/lifestyle" className="text-[#D4AF37] hover:text-white underline">lifestyle</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Calendly Scheduling */}
                <ScrollAnimation>
                  <div className="w-full">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                      Schedule a Consultation
                    </h2>
                    <p className="text-[#2D2A26] mb-6">
                      Book a 15-minute consultation with Dr. Jan Duffy to discuss your home search and tour Sun City Summerlin.
                    </p>
                    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full">
                      <CalendlyInline 
                        url="https://calendly.com/drjanduffy/15min"
                        height="900px"
                      />
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Contact Info with Image */}
                <ScrollAnimation delay={100}>
                  <div>
                    {/* Image */}
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-three bg-[#FDF8F3] mb-6">
                      <Image
                        src="/images/about/dr-jan-duffy.jpg"
                        alt="Dr. Jan Duffy, REALTOR® specializing in Sun City Summerlin"
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                      Get in Touch
                    </h2>
                    <div className="space-y-6">
                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#8B5E3C]/10 rounded-full flex-shrink-0">
                          <Phone className="w-6 h-6 text-[#8B5E3C]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#8B5E3C] mb-1">
                            Phone
                          </h3>
                          <a
                            href="tel:+17027180043"
                            className="text-[#2D2A26] hover:text-[#8B5E3C] transition-colors text-lg"
                          >
                            (702) 718-0043
                          </a>
                          <p className="text-sm text-gray-500 mt-1">
                            Call or text anytime
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#8B5E3C]/10 rounded-full flex-shrink-0">
                          <Mail className="w-6 h-6 text-[#8B5E3C]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#8B5E3C] mb-1">
                            Email
                          </h3>
                          <a
                            href="mailto:jan@drjanduffy.com"
                            className="text-[#2D2A26] hover:text-[#8B5E3C] transition-colors break-all"
                          >
                            jan@drjanduffy.com
                          </a>
                          <p className="text-sm text-gray-500 mt-1">
                            Typically responds within 24 hours
                          </p>
                        </div>
                      </div>

                      {/* Community Address */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#8B5E3C]/10 rounded-full flex-shrink-0">
                          <MapPin className="w-6 h-6 text-[#8B5E3C]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#8B5E3C] mb-1">
                            Sun City Summerlin
                          </h3>
                          <p className="text-[#2D2A26]">
                            9406 Del Webb Blvd
                            <br />
                            Las Vegas, NV 89134
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* License Info */}
                    <div className="mt-8 p-6 bg-[#FDF8F3] rounded-lg">
                      <h3 className="font-semibold text-[#8B5E3C] mb-2">
                        License Information
                      </h3>
                      <p className="text-sm text-[#2D2A26]">
                        <strong>License:</strong> S.0197614.LLC
                        <br />
                        <strong>Brokerage:</strong> Berkshire Hathaway
                        HomeServices Nevada Properties
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Directions & estimated travel times */}
        <DirectionsSection />

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                Ready to Schedule a Tour?
              </h2>
              <p className="text-lg text-[#2D2A26] mb-6">
                The best way to experience Sun City Summerlin is to see it in
                person. Schedule a private tour to walk the community, explore
                the amenities, and step inside the homes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+17027180043"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8B5E3C] text-white rounded-md font-semibold hover:bg-[#8B5E3C]/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 718-0043
                </a>
                <ScheduleTour variant="accent" size="lg" />
              </div>
              
              {/* Additional Resources */}
              <div className="mt-8 pt-8 border-t border-[#C4A574]/30">
                <p className="text-[#2D2A26] mb-4 text-center">Additional Resources:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/homes-for-sale"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#8B5E3C] text-[#8B5E3C] rounded-md font-semibold hover:bg-[#8B5E3C] hover:text-white transition-colors"
                  >
                    Browse Homes
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://www.youtube.com/@DrDuffy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#8B5E3C] text-[#8B5E3C] rounded-md font-semibold hover:bg-[#8B5E3C] hover:text-white transition-colors"
                    aria-label="YouTube Channel"
                  >
                    <Youtube className="w-4 h-4" />
                    YouTube Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
