import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import Link from "next/link";
import { 
  FileText, 
  Download, 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Calendar,
  CheckCircle2,
  CircleDot,
  Users,
  Home,
  DollarSign,
  Heart,
  Sun,
  Mountain,
  Car
} from "lucide-react";
import { Button } from "@components/ui/button";
import { getAllFlyers, getFlyerBySlug } from "@/lib/flyers";
import CalendlyInline from "@components/CalendlyInline";

export async function generateStaticParams() {
  const flyers = getAllFlyers();
  return flyers.map((flyer) => ({
    slug: flyer.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const flyer = getFlyerBySlug(slug);

  if (!flyer) {
    return {
      title: "Flyer Not Found | Sun City Summerlin",
    };
  }

  const keywords = [
    "Sun City Summerlin guide",
    "Sun City Summerlin community guide",
    "55+ community Las Vegas",
    "active adult community Nevada",
    "retire in Las Vegas",
    "Sun City Summerlin amenities",
    "Sun City Summerlin HOA fees",
    "Sun City Summerlin golf",
    "Del Webb Las Vegas",
    "Summerlin retirement community",
    "best 55+ communities Nevada",
    "moving to Sun City Summerlin",
    "Sun City Summerlin floor plans",
    "Las Vegas 55+ homes for sale",
  ];

  return {
    title: `${flyer.title} | Free Download | Dr. Jan Duffy`,
    description: flyer.description,
    keywords: keywords,
    alternates: {
      canonical: `https://www.suncityvegas.com/flyers/${slug}`,
    },
    openGraph: {
      title: `${flyer.title} | Free Download`,
      description: flyer.description,
      url: `https://www.suncityvegas.com/flyers/${slug}`,
      siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: "https://www.suncityvegas.com/images/hero/community-sign.jpg",
          width: 1200,
          height: 630,
          alt: "Sun City Summerlin Community Guide - Las Vegas 55+ Community",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${flyer.title} | Free Download`,
      description: flyer.description,
      images: ["https://www.suncityvegas.com/images/hero/community-sign.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// JSON-LD Schema for SEO
function generateSchemaMarkup(flyer: NonNullable<ReturnType<typeof getFlyerBySlug>>, slug: string) {
  const schemas = [
    // Article Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: flyer.title,
      description: flyer.description,
      author: {
        "@type": "Person",
        name: "Dr. Jan Duffy",
        jobTitle: "REALTOR®",
        url: "https://www.suncityvegas.com/about",
      },
      publisher: {
        "@type": "RealEstateAgent",
        name: "Dr. Jan Duffy, REALTOR®",
        logo: {
          "@type": "ImageObject",
          url: "https://www.suncityvegas.com/images/logo/logo.jpg",
        },
      },
      datePublished: flyer.lastUpdated || "2026-01-15",
      dateModified: flyer.lastUpdated || "2026-01-15",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.suncityvegas.com/flyers/${slug}`,
      },
      image: "https://www.suncityvegas.com/images/hero/community-sign.jpg",
      articleSection: "Community Guide",
      keywords: "Sun City Summerlin, 55+ community, Las Vegas retirement, Del Webb, active adult community",
    },
    // LocalBusiness Schema (GEO)
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "@id": "https://www.suncityvegas.com/#realestateagent",
      name: "Dr. Jan Duffy, REALTOR®",
      description: "Sun City Summerlin specialist helping buyers find homes in Las Vegas' premier 55+ active adult community.",
      url: "https://www.suncityvegas.com",
      telephone: "+1-702-718-0042",
      email: "jan@drjanduffy.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "9406 Del Webb Blvd",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89134",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.2088,
        longitude: -115.2936,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Las Vegas",
          containedInPlace: {
            "@type": "State",
            name: "Nevada",
          },
        },
        {
          "@type": "Neighborhood",
          name: "Summerlin",
          containedInPlace: {
            "@type": "City",
            name: "Las Vegas",
          },
        },
        {
          "@type": "Place",
          name: "Sun City Summerlin",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Las Vegas",
            addressRegion: "NV",
            postalCode: "89134",
          },
        },
      ],
      priceRange: "$300,000 - $1,000,000+",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      sameAs: [
        "https://www.youtube.com/@DrDuffy",
      ],
    },
    // ResidentialComplex Schema (GEO for community)
    {
      "@context": "https://schema.org",
      "@type": "ResidentialComplex",
      name: "Sun City Summerlin",
      description: "Las Vegas' premier 55+ active adult community featuring 4 golf courses, 3 recreation centers, and 80+ clubs.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "9406 Del Webb Blvd",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89134",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.2088,
        longitude: -115.2936,
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Golf Courses", value: "4" },
        { "@type": "LocationFeatureSpecification", name: "Recreation Centers", value: "3" },
        { "@type": "LocationFeatureSpecification", name: "Social Clubs", value: "80+" },
        { "@type": "LocationFeatureSpecification", name: "Pickleball Courts" },
        { "@type": "LocationFeatureSpecification", name: "Swimming Pools" },
        { "@type": "LocationFeatureSpecification", name: "Fitness Centers" },
        { "@type": "LocationFeatureSpecification", name: "Tennis Courts" },
        { "@type": "LocationFeatureSpecification", name: "Walking Trails" },
      ],
      numberOfAvailableAccommodationUnits: {
        "@type": "QuantitativeValue",
        value: 7779,
        unitText: "homes",
      },
    },
    // BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Sun City Summerlin",
          item: "https://www.suncityvegas.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Flyers & Guides",
          item: "https://www.suncityvegas.com/flyers",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: flyer.title,
          item: `https://www.suncityvegas.com/flyers/${slug}`,
        },
      ],
    },
    // FAQPage Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Sun City Summerlin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sun City Summerlin is Las Vegas' premier 55+ active adult community, built by Del Webb starting in 1989. It features 7,779 homes, 4 golf courses, 3 recreation centers, and 80+ social clubs.",
          },
        },
        {
          "@type": "Question",
          name: "What are the HOA fees at Sun City Summerlin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HOA fees at Sun City Summerlin are approximately $175-$250/month depending on the neighborhood, covering access to all recreation centers, golf course discounts, common area maintenance, and community events.",
          },
        },
        {
          "@type": "Question",
          name: "What amenities does Sun City Summerlin offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sun City Summerlin offers 4 golf courses (Highland Falls, Palm Valley, Eagle Crest, Starbright Par 3), 3 recreation centers (Mountain Shadows, Desert Vista, Pinnacle), swimming pools, fitness centers, pickleball courts, tennis courts, bocce ball, and 80+ social clubs.",
          },
        },
        {
          "@type": "Question",
          name: "How far is Sun City Summerlin from the Las Vegas Strip?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sun City Summerlin is approximately 15-20 minutes by car from the Las Vegas Strip and about 25 minutes from Harry Reid International Airport.",
          },
        },
      ],
    },
  ];

  return schemas;
}

export default async function FlyerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const flyer = getFlyerBySlug(slug);

  if (!flyer) {
    notFound();
  }

  const schemas = generateSchemaMarkup(flyer, slug);

  // Community highlights data
  const communityHighlights = [
    { icon: CircleDot, label: "4 Golf Courses", description: "Highland Falls, Palm Valley, Eagle Crest, Starbright Par 3" },
    { icon: Users, label: "80+ Social Clubs", description: "From pickleball to pottery, there's something for everyone" },
    { icon: Home, label: "7,779 Homes", description: "Single-family homes from 1,000-3,000+ sq ft" },
    { icon: DollarSign, label: "No State Income Tax", description: "Nevada tax benefits for retirees" },
    { icon: Heart, label: "Active Lifestyle", description: "Fitness centers, pools, tennis, and more" },
    { icon: Sun, label: "300+ Sunny Days", description: "Perfect Las Vegas weather year-round" },
  ];

  // Nearby attractions (GEO relevance)
  const nearbyAttractions = [
    { name: "Downtown Summerlin", distance: "5 min", type: "Shopping & Dining" },
    { name: "Red Rock Canyon", distance: "15 min", type: "Outdoor Recreation" },
    { name: "Las Vegas Strip", distance: "20 min", type: "Entertainment" },
    { name: "Summerlin Hospital", distance: "10 min", type: "Healthcare" },
    { name: "Harry Reid Airport", distance: "25 min", type: "Transportation" },
    { name: "Mount Charleston", distance: "40 min", type: "Mountain Escape" },
  ];

  return (
    <>
      {/* JSON-LD Schema Markup */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Flyers & Guides", href: "/flyers" },
          { label: flyer.title, href: `/flyers/${slug}` },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#8B5E3C] to-[#6B4E2C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 mx-auto">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="mb-4 flex flex-wrap gap-2 justify-center">
                <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full">
                  {flyer.category}
                </span>
                <span className="inline-block px-4 py-2 bg-[#D4AF37]/80 text-white text-sm font-semibold rounded-full">
                  Free Download
                </span>
                {flyer.pages && (
                  <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full">
                    {flyer.pages} Pages
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                {flyer.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8">
                {flyer.description}
              </p>
              
              {/* Quick Download CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={flyer.filePath}
                  download
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#2D2A26] font-bold rounded-lg hover:bg-[#D4AF37]/90 transition-colors text-lg"
                >
                  <Download className="w-6 h-6" />
                  Download Free Guide
                </a>
                <a
                  href="tel:7027180042"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (702) 718-0042
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Community Highlights Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                What Makes Sun City Summerlin Special
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {communityHighlights.map((item, index) => (
                  <div key={index} className="bg-[#FDF8F3] rounded-lg p-6 border border-[#C4A574]/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-[#8B5E3C]/10 rounded-full flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[#8B5E3C]" />
                      </div>
                      <h3 className="font-bold text-[#8B5E3C] text-lg">{item.label}</h3>
                    </div>
                    <p className="text-[#2D2A26] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guide Contents Section */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                What&apos;s Inside This Guide
              </h2>
              <p className="text-lg text-[#2D2A26] leading-relaxed mb-8">
                {flyer.content}
              </p>
              
              {flyer.features && (
                <div className="bg-white rounded-lg p-6 md:p-8 border-2 border-[#C4A574]/30">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Complete Table of Contents:
                  </h3>
                  <ul className="space-y-4">
                    {flyer.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span className="text-[#2D2A26]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {flyer.lastUpdated && (
                <p className="mt-6 text-sm text-[#2D2A26]/70 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Last updated: {new Date(flyer.lastUpdated).toLocaleDateString("en-US", { 
                    year: "numeric", 
                    month: "long", 
                    day: "numeric" 
                  })}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Location & Nearby (GEO Section) */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                  Prime Location in Las Vegas, Nevada
                </h2>
                <p className="text-lg text-[#2D2A26] max-w-3xl mx-auto">
                  Sun City Summerlin is ideally located in the Summerlin master-planned community, 
                  offering easy access to world-class entertainment, healthcare, shopping, and outdoor recreation.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Map Embed */}
                <div className="rounded-lg overflow-hidden shadow-lg border border-[#C4A574]/20 h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12934.123456789!2d-115.2936!3d36.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c1d1b5555555%3A0x1234567890abcdef!2sSun%20City%20Summerlin!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sun City Summerlin Location Map"
                  />
                </div>

                {/* Nearby Attractions */}
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-6 font-playfair flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    Nearby Attractions & Services
                  </h3>
                  <div className="space-y-4">
                    {nearbyAttractions.map((attraction, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-[#FDF8F3] rounded-lg">
                        <div>
                          <h4 className="font-semibold text-[#8B5E3C]">{attraction.name}</h4>
                          <p className="text-sm text-[#2D2A26]/70">{attraction.type}</p>
                        </div>
                        <span className="text-[#D4AF37] font-bold">{attraction.distance}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-[#8B5E3C]/10 rounded-lg">
                    <p className="text-sm text-[#2D2A26] flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-[#8B5E3C] flex-shrink-0" />
                      <span>
                        <strong>Address:</strong> 9406 Del Webb Blvd, Las Vegas, NV 89134
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PDF Download Section */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg border border-[#C4A574]/20 p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                      Download Your Free Guide
                    </h3>
                    <p className="text-[#2D2A26]">
                      Get instant access to the complete Sun City Summerlin community guide.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={flyer.filePath}
                      download
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8B5E3C] text-white font-semibold rounded-lg hover:bg-[#8B5E3C]/90 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Download PDF
                    </a>
                    <a
                      href={flyer.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#8B5E3C] text-[#8B5E3C] font-semibold rounded-lg hover:bg-[#8B5E3C]/5 transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                      View Online
                    </a>
                  </div>
                </div>

                {/* PDF Preview */}
                <div className="border-2 border-[#C4A574]/20 rounded-lg overflow-hidden bg-gray-100">
                  <div className="bg-[#8B5E3C] text-white px-4 py-2 text-sm font-medium">
                    PDF Preview - {flyer.title}
                  </div>
                  <iframe
                    src={`${flyer.filePath}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                    className="w-full h-[500px] md:h-[700px]"
                    title={`${flyer.title} PDF Preview`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule a Tour CTA */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left: CTA Text */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Ready to See Sun City Summerlin in Person?
                  </h2>
                  <p className="text-lg text-[#2D2A26] leading-relaxed mb-6">
                    The guide is great, but nothing compares to walking through the community yourself. 
                    Schedule a private tour with Dr. Jan Duffy to explore the golf courses, recreation centers, 
                    and available homes.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#8B5E3C]/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#8B5E3C]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#2D2A26]/70">Call or Text</p>
                        <a href="tel:7027180042" className="font-semibold text-[#8B5E3C] hover:underline">
                          (702) 718-0042
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#8B5E3C]/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#8B5E3C]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#2D2A26]/70">Meeting Location</p>
                        <p className="font-semibold text-[#8B5E3C]">9406 Del Webb Blvd, Las Vegas, NV 89134</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#FDF8F3] rounded-lg border border-[#C4A574]/20">
                    <p className="text-sm text-[#2D2A26]">
                      <strong>Dr. Jan Duffy</strong> is a Sun City Summerlin specialist with Berkshire Hathaway HomeServices Nevada Properties. 
                      License: S.0197614.LLC
                    </p>
                  </div>
                </div>

                {/* Right: Calendly */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#C4A574]/20">
                  <div className="bg-[#8B5E3C] text-white px-6 py-4">
                    <h3 className="text-xl font-bold font-playfair flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Schedule Your Private Tour
                    </h3>
                  </div>
                  <CalendlyInline 
                    url="https://calendly.com/drjanduffy/showing" 
                    height="600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section (SEO) */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What is Sun City Summerlin?",
                    a: "Sun City Summerlin is Las Vegas' premier 55+ active adult community, built by Del Webb starting in 1989. It features 7,779 homes, 4 golf courses, 3 recreation centers, and 80+ social clubs. Located in the Summerlin master-planned community, it offers an unparalleled retirement lifestyle.",
                  },
                  {
                    q: "What are the HOA fees at Sun City Summerlin?",
                    a: "HOA fees at Sun City Summerlin range from approximately $175-$250 per month depending on the neighborhood. This covers access to all recreation centers, golf course discounts, common area maintenance, security patrols, and community events.",
                  },
                  {
                    q: "What amenities does Sun City Summerlin offer?",
                    a: "Sun City Summerlin offers 4 golf courses (Highland Falls, Palm Valley, Eagle Crest, and Starbright Par 3), 3 recreation centers (Mountain Shadows, Desert Vista, and Pinnacle), swimming pools, fitness centers, pickleball courts, tennis courts, bocce ball, walking trails, and 80+ social clubs.",
                  },
                  {
                    q: "How far is Sun City Summerlin from the Las Vegas Strip?",
                    a: "Sun City Summerlin is approximately 15-20 minutes by car from the Las Vegas Strip and about 25 minutes from Harry Reid International Airport. It's located in the western part of Las Vegas in the Summerlin area.",
                  },
                  {
                    q: "What are the tax benefits of living in Nevada?",
                    a: "Nevada offers significant tax benefits for retirees including no state income tax, no inheritance tax, no estate tax, and no tax on Social Security benefits. Property taxes are also relatively low compared to many other states.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 border border-[#C4A574]/20">
                    <h3 className="font-bold text-[#8B5E3C] mb-2">{faq.q}</h3>
                    <p className="text-[#2D2A26]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                Explore More Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/amenities"
                  className="bg-[#FDF8F3] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border border-[#C4A574]/20"
                >
                  <Mountain className="w-8 h-8 text-[#8B5E3C] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-[#8B5E3C] mb-2 font-playfair">
                    Amenities
                  </h3>
                  <p className="text-[#2D2A26] text-sm">
                    4 golf courses, 3 rec centers, pools & more
                  </p>
                </Link>
                <Link
                  href="/lifestyle"
                  className="bg-[#FDF8F3] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border border-[#C4A574]/20"
                >
                  <Users className="w-8 h-8 text-[#8B5E3C] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-[#8B5E3C] mb-2 font-playfair">
                    Lifestyle & Clubs
                  </h3>
                  <p className="text-[#2D2A26] text-sm">
                    80+ clubs and activities
                  </p>
                </Link>
                <Link
                  href="/homes-for-sale"
                  className="bg-[#FDF8F3] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border border-[#C4A574]/20"
                >
                  <Home className="w-8 h-8 text-[#8B5E3C] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-[#8B5E3C] mb-2 font-playfair">
                    Homes for Sale
                  </h3>
                  <p className="text-[#2D2A26] text-sm">
                    View current listings
                  </p>
                </Link>
              </div>

              {/* Back Navigation */}
              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center justify-center gap-2 border-[#8B5E3C] text-[#8B5E3C]"
                >
                  <Link href="/flyers">
                    <ArrowLeft className="w-4 h-4" />
                    Back to All Guides & Flyers
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
