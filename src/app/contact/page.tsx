import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import ScrollAnimation from "@/../components/scroll-animation";
import { Phone, Mail, MapPin, Youtube, ExternalLink } from "lucide-react";
import ScheduleTour from "@/../components/ScheduleTour";
import CalendlyInline from "@/../components/CalendlyInline";

export const metadata: Metadata = {
  title: "Contact & Schedule a Tour | Sun City Summerlin | Dr. Jan Duffy",
  description:
    "Contact Dr. Jan Duffy to schedule a tour of Sun City Summerlin, Las Vegas' premier 55+ community. Call (702) 222-1964 or book online.",
  alternates: {
    canonical: "https://www.suncityvegas.com/contact",
  },
  openGraph: {
    title: "Contact & Schedule a Tour | Sun City Summerlin | Dr. Jan Duffy",
    description:
      "Schedule a tour of Sun City Summerlin, Las Vegas' premier 55+ community. Call (702) 222-1964.",
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
                            href="tel:7022221964"
                            className="text-[#2D2A26] hover:text-[#8B5E3C] transition-colors text-lg"
                          >
                            (702) 222-1964
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
                            9107 Del Webb Blvd
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
                  href="tel:7022221964"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8B5E3C] text-white rounded-md font-semibold hover:bg-[#8B5E3C]/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 222-1964
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
                    href="https://youtube.com/@drjanduffy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#8B5E3C] text-[#8B5E3C] rounded-md font-semibold hover:bg-[#8B5E3C] hover:text-white transition-colors"
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
