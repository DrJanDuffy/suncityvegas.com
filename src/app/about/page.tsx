import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import Link from "next/link";
import ScrollAnimation from "@components/scroll-animation";
import { Phone, Mail, MapPin, Award, Users, Home } from "lucide-react";
import { getAllTestimonials } from "@/lib/old-site-data";
import { Quote } from "lucide-react";
import ScheduleTour from "@components/ScheduleTour";
import RealScoutListings from "@components/RealScoutListings";

export const metadata: Metadata = {
  title: "About Dr. Jan Duffy REALTOR® | Sun City Summerlin Specialist",
  description:
    "Meet Dr. Jan Duffy, REALTOR® specializing in Sun City Summerlin, Las Vegas' premier 55+ community. Licensed agent with Berkshire Hathaway HomeServices helping you find your perfect active adult home.",
  alternates: {
    canonical: "https://www.suncityvegas.com/about",
  },
  openGraph: {
    title: "About Dr. Jan Duffy REALTOR® | Sun City Summerlin Specialist",
    description:
      "Your trusted REALTOR® specializing in Sun City Summerlin and Las Vegas 55+ communities.",
    url: "https://www.suncityvegas.com/about",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/agent/dr-jan-duffy.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Jan Duffy, REALTOR®",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dr. Jan Duffy REALTOR® | Sun City Summerlin Specialist",
    description: "Your trusted REALTOR® specializing in Sun City Summerlin 55+ community.",
    images: ["https://www.suncityvegas.com/images/agent/dr-jan-duffy.jpg"],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

const specialties = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Sun City Summerlin Expert",
    description:
      "Exclusive focus on this premier 55+ community means deep knowledge of every neighborhood, home style, and the best values in Sun City.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Licensed REALTOR®",
    description:
      "Licensed professional (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties, committed to ethical service.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Senior Living Specialist",
    description:
      "Understanding the unique needs of 55+ buyers, from downsizing to lifestyle transitions and retirement planning.",
  },
];

const aboutWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.suncityvegas.com/about",
  name: "About Dr. Jan Duffy REALTOR® | Sun City Summerlin Specialist",
  description:
    "Meet Dr. Jan Duffy, REALTOR® specializing in Sun City Summerlin, Las Vegas' premier 55+ community. Licensed agent with Berkshire Hathaway HomeServices.",
  url: "https://www.suncityvegas.com/about",
};

export default function AboutPage() {
  const testimonials = getAllTestimonials().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutWebPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                About Dr. Jan Duffy | Sun City Summerlin Specialist
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Your trusted REALTOR® specializing in Sun City Summerlin and
                Las Vegas 55+ communities
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <ScrollAnimation>
                  <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                    <Image
                      src="/images/agent/dr-jan-duffy.jpg"
                      alt="Dr. Jan Duffy, REALTOR® specializing in Sun City Summerlin"
                      fill
                      className="object-cover rounded-lg shadow-three"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                </ScrollAnimation>

                {/* Content */}
                <ScrollAnimation delay={100}>
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-4 md:mb-6 font-playfair">
                      Your Sun City Summerlin Expert
                    </h2>
                    <div className="prose prose-lg max-w-none space-y-4">
                      <p className="text-base md:text-lg text-[#2D2A26] leading-relaxed">
                        Dr. Jan Duffy is an independent REALTOR® with Berkshire Hathaway
                        HomeServices who specializes exclusively in Sun City Summerlin,
                        Las Vegas&apos; premier 55+ active adult community.
                      </p>
                      <p className="text-base md:text-lg text-[#2D2A26] leading-relaxed">
                        With years of experience helping clients find their dream
                        homes in vibrant 55+ communities, Dr. Duffy understands
                        the unique needs of active adults. She knows which neighborhoods 
                        have the best mountain views, which <Link href="/homes-for-sale" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">resale homes</Link> are worth
                        considering, and which offer the best value for your investment.
                      </p>
                      <p className="text-base md:text-lg text-[#2D2A26] leading-relaxed font-semibold">
                        When you work with her, you get honest guidance—not a
                        sales pitch. Her goal is to help you find the perfect
                        home that matches your lifestyle, not just make a sale.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                Why Work With Dr. Jan Duffy?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {specialties.map((specialty, index) => (
                  <ScrollAnimation key={specialty.title} delay={index * 100}>
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-two hover:shadow-three transition-shadow">
                      <div className="flex items-center justify-center w-14 h-14 bg-[#8B5E3C]/10 rounded-full mb-4">
                        <div className="text-[#8B5E3C]">{specialty.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        {specialty.title}
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        {specialty.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community History Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                About Sun City Summerlin
              </h2>
              <div className="prose prose-lg max-w-none space-y-4 text-[#2D2A26]">
                <p>
                  Sun City Summerlin is Las Vegas&apos; premier 55+ active adult community, 
                  developed by Del Webb between 1989 and 2002. Nestled against the 
                  stunning Red Rock Canyon, this guard-gated community spans 2,400 acres 
                  and is home to 7,779 residences.
                </p>
                <p>
                  The community features <strong>4 championship golf courses</strong> including 
                  Highland Falls, Palm Valley, Eagle Crest, and Stonebridge. Residents enjoy 
                  <strong>3 world-class recreation centers</strong>—Mountain Shadows, Desert Vista, 
                  and Pinnacle—totaling over 125,000 square feet of amenities.
                </p>
                <p>
                  With <strong>80+ clubs and organizations</strong>, residents enjoy everything from 
                  golf and tennis to art clubs, hiking groups, and social gatherings. Explore 
                  the <Link href="/amenities" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">resort-style amenities</Link> and 
                  <Link href="/lifestyle" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline"> active lifestyle</Link> that 
                  make Sun City Summerlin special.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                Let&apos;s Connect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <Phone className="w-8 h-8 text-[#8B5E3C] mx-auto mb-4" />
                  <h3 className="font-semibold text-[#8B5E3C] mb-2">Phone</h3>
                  <a
                    href="tel:7027180042"
                    className="text-[#2D2A26] hover:text-[#8B5E3C] transition-colors"
                  >
                    (702) 718-0042
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <Mail className="w-8 h-8 text-[#8B5E3C] mx-auto mb-4" />
                  <h3 className="font-semibold text-[#8B5E3C] mb-2">Email</h3>
                  <a
                    href="mailto:DrDuffySells@SunCityVegas.com"
                    className="text-[#2D2A26] hover:text-[#8B5E3C] transition-colors break-all"
                  >
                    DrDuffySells@SunCityVegas.com
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <MapPin className="w-8 h-8 text-[#8B5E3C] mx-auto mb-4" />
                  <h3 className="font-semibold text-[#8B5E3C] mb-2">Location</h3>
                  <p className="text-[#2D2A26] text-sm">
                    9406 Del Webb Blvd
                    <br />
                    Las Vegas, NV 89134
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                What Clients Say About Dr. Jan Duffy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <ScrollAnimation key={testimonial.name} delay={index * 100}>
                    <div className="bg-[#FDF8F3] p-6 rounded-lg shadow-two hover:shadow-three transition-shadow h-full flex flex-col">
                      <Quote className="w-6 h-6 text-[#8B5E3C] mb-3 opacity-50" />
                      <p className="text-sm md:text-base text-[#2D2A26] leading-relaxed mb-4 flex-grow font-playfair italic">
                        &quot;{testimonial.text.substring(0, 150)}...&quot;
                      </p>
                      <div className="border-t border-[#C4A574]/30 pt-3">
                        <p className="text-base font-semibold text-[#8B5E3C]">
                          — {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/testimonials"
                  className="text-[#8B5E3C] hover:text-[#5D7A5D] font-semibold transition-colors"
                >
                  Read All Testimonials →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* License & Brokerage */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white p-6 md:p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                  License & Brokerage Information
                </h3>
                <div className="space-y-2 text-[#2D2A26]">
                  <p>
                    <strong>License:</strong> S.0197614.LLC
                  </p>
                  <p>
                    <strong>Brokerage:</strong> Berkshire Hathaway HomeServices
                    Nevada Properties
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    Equal Housing Opportunity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Listings - Lead Generator */}
        <RealScoutListings h2Text="View Available Homes in Sun City Summerlin | Work With Dr. Jan Duffy" />

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Let&apos;s schedule a time to discuss your needs and tour Sun City
                Summerlin together. <Link href="/contact" className="text-[#D4AF37] hover:text-white underline">Contact Dr. Jan Duffy</Link> to get started.
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
