import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ScrollAnimation from "../scroll-animation";
import { Calendar, Home, MapPin, Phone } from "lucide-react";

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

// Featured listing data - update when you have an actual featured listing
// Set enabled to false to hide this section
const featuredListing = {
  enabled: false, // Set to true when you have a featured listing
  comingSoon: true,
  comingSoonDate: "March 2025",
  address: "Sun City Summerlin",
  beds: 3,
  baths: 2,
  sqft: "1,800",
  price: "Coming Soon",
  description: "Golf course views, upgraded kitchen, and premium finishes throughout.",
  highlights: [
    "Golf course views",
    "Updated kitchen",
    "Premium finishes",
    "Single-story living",
  ],
  image: "/images/hero/hero-bg.jpg", // Replace with actual listing image
};

export default function FeaturedListingSection() {
  // Don't render if disabled
  if (!featuredListing.enabled) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <ScrollAnimation>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-[#FDF8F3]">
                <Image
                  src={featuredListing.image}
                  alt={`Featured home at ${featuredListing.address}`}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {featuredListing.comingSoon && (
                  <div className="absolute top-4 right-4 bg-[#8B5E3C] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredListing.comingSoonDate}
                  </div>
                )}
              </div>
            </ScrollAnimation>

            {/* Content */}
            <ScrollAnimation delay={100}>
              <div>
                {featuredListing.comingSoon && (
                  <div className="inline-block bg-[#5D7A5D]/10 text-[#5D7A5D] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    NEW LISTING - COMING {featuredListing.comingSoonDate}
                  </div>
                )}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                  Featured Home
                </h2>
                <div className="flex flex-wrap gap-4 mb-4 text-[#2D2A26]">
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-[#8B5E3C]" />
                    <span className="font-semibold">
                      {featuredListing.beds} bed | {featuredListing.baths} bath | {featuredListing.sqft} sq ft
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#8B5E3C]" />
                    <span>{featuredListing.address}</span>
                  </div>
                </div>
                <p className="text-lg text-[#2D2A26] mb-6 leading-relaxed">
                  {featuredListing.description}
                </p>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#8B5E3C] mb-3 font-playfair">
                    Property Highlights
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featuredListing.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2 text-[#2D2A26]">
                        <span className="text-[#5D7A5D]">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 min-h-[44px]"
                  >
                    <Link href="/contact">Get Early Access</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C]/10 min-h-[44px]"
                  >
                    <a href="tel:+17027180043">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
