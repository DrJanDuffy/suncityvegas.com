import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import ScrollAnimation from "@/../components/scroll-animation";
import { getAmenities, getRecreationCenters, getGolfCourses } from "@/lib/communityData";
import RealScoutListings from "@/../components/RealScoutListings";
import {
  Activity,
  Users,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MapPin,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Amenities | Sun City Summerlin | 4 Golf Courses & 3 Rec Centers",
  description:
    "Discover world-class amenities at Sun City Summerlin: 4 championship golf courses, 3 recreation centers, 80+ clubs, pools, tennis, pickleball. Las Vegas' premier 55+ community.",
  alternates: {
    canonical: "https://www.suncityvegas.com/amenities",
  },
  openGraph: {
    title: "Amenities | Sun City Summerlin | 4 Golf Courses & 3 Rec Centers",
    description:
      "World-class amenities: 4 golf courses, 3 rec centers, 80+ clubs, pools, tennis, pickleball at Sun City Summerlin.",
    url: "https://www.suncityvegas.com/amenities",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/amenities/resort-pool.jpeg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin resort-style amenities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amenities | Sun City Summerlin | 4 Golf Courses & 3 Rec Centers",
    description: "World-class amenities at Las Vegas' premier 55+ community.",
    images: ["https://www.suncityvegas.com/images/amenities/resort-pool.jpeg"],
  },
};

const amenities = [
  {
    category: "Golf Courses",
    icon: <Activity className="w-8 h-8 text-[#5D7A5D]" />,
    items: [
      {
        name: "Highland Falls Golf Course",
        description: "18-hole championship course designed by Billy Casper & Greg Nash",
        image: "/images/amenities/resort-pool.jpeg",
      },
      {
        name: "Palm Valley Golf Course",
        description: "18-hole championship course with stunning mountain views",
        image: "/images/amenities/resort-pool.jpeg",
      },
      {
        name: "Eagle Crest Golf Course",
        description: "18-hole executive course perfect for a quick round",
        image: "/images/amenities/resort-pool.jpeg",
      },
      {
        name: "Stonebridge Golf Course",
        description: "27-hole championship course at Sun City",
        image: "/images/amenities/resort-pool.jpeg",
      },
    ],
  },
  {
    category: "Recreation Centers",
    icon: <Users className="w-8 h-8 text-[#8B5E3C]" />,
    items: [
      {
        name: "Mountain Shadows",
        description: "45,000 sq ft with fitness center, indoor pool, racquetball, arts & crafts",
        image: "/images/amenities/clubhouse.jpeg",
        link: "/amenities/mountain-shadows",
      },
      {
        name: "Desert Vista",
        description: "48,000 sq ft with fitness center, pool & spa, tennis, pickleball, ballroom",
        image: "/images/amenities/clubhouse.jpeg",
        link: "/amenities/desert-vista",
      },
      {
        name: "Pinnacle",
        description: "34,000 sq ft with fitness center, pool, tennis, bocce ball, card rooms",
        image: "/images/amenities/clubhouse.jpeg",
        link: "/amenities/pinnacle",
      },
    ],
  },
  {
    category: "Activities & Sports",
    icon: <Sparkles className="w-8 h-8 text-[#D4AF37]" />,
    items: [
      {
        name: "Swimming Pools",
        description: "Multiple indoor and outdoor pools and spas across rec centers",
        image: "/images/amenities/resort-pool.jpeg",
      },
      {
        name: "Tennis & Pickleball",
        description: "Courts available at multiple rec centers for year-round play",
        image: "/images/amenities/pickleball-courts.jpeg",
      },
      {
        name: "Fitness Centers",
        description: "State-of-the-art equipment at all three recreation centers",
        image: "/images/amenities/clubhouse.jpeg",
      },
      {
        name: "Walking Trails",
        description: "Miles of scenic trails with Red Rock Canyon views",
        image: "/images/amenities/event-lawn.jpeg",
      },
    ],
  },
];

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

// Amenity map: Google Maps Embed API (search mode). Set NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY to show the map.
const AMENITY_MAP_SEARCH = "restaurants parks golf schools near 9406 Del Webb Blvd Las Vegas NV 89134";
const AMENITY_MAP_SEARCH_URL = `https://www.google.com/maps/search/${encodeURIComponent(AMENITY_MAP_SEARCH)}`;

function AmenityMapEmbed() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
  const embedUrl =
    apiKey &&
    `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${encodeURIComponent(AMENITY_MAP_SEARCH)}`;

  if (embedUrl) {
    return (
      <div className="rounded-lg overflow-hidden shadow-lg border border-[#E8E4E0] h-[400px] md:h-[500px]">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          className="border-0 w-full h-full block"
          loading="lazy"
          title="Nearby amenities map — restaurants, parks, golf, schools near Sun City Summerlin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="rounded-lg border-2 border-dashed border-[#8B5E3C]/30 bg-[#FDF8F3] p-8 md:p-12 text-center">
      <p className="text-[#2D2A26] mb-4">
        View nearby restaurants, parks, golf, and schools on Google Maps.
      </p>
      <a
        href={AMENITY_MAP_SEARCH_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Open amenity map on Google Maps
        <ExternalLink className="w-4 h-4" aria-hidden />
      </a>
      <p className="mt-4 text-sm text-[#2D2A26]/70">
        To show the map on this page, set{" "}
        <code className="bg-white/80 px-1 rounded">NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY</code> in your
        environment. Maps Embed API is free with unlimited usage.
      </p>
    </div>
  );
}

function AmenityCard({
  amenity,
  index,
}: {
  amenity: (typeof amenities)[0]["items"][0] & { link?: string };
  index: number;
}) {
  const CardContent = (
    <div className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow overflow-hidden">
      <div className="relative h-48 bg-[#FDF8F3]">
        <Image
          src={amenity.image}
          alt={amenity.name}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
          {amenity.name}
        </h3>
        <p className="text-[#2D2A26] leading-relaxed">
          {amenity.description}
        </p>
        {amenity.link && (
          <Link
            href={amenity.link}
            className="inline-flex items-center gap-2 text-[#8B5E3C] font-semibold hover:text-[#5D7A5D] transition-colors mt-4"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <ScrollAnimation delay={index * 50}>
      {amenity.link ? (
        <Link href={amenity.link} className="block h-full">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </ScrollAnimation>
  );
}

export default function AmenitiesPage() {
  const communityAmenities = getAmenities();
  const recCenters = getRecreationCenters();
  const golfCourses = getGolfCourses();

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Amenities", href: "/amenities" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                World-Class Amenities | Sun City Summerlin
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Sun City Summerlin offers unmatched amenities: 4 championship golf courses, 
                3 recreation centers totaling over 125,000 sq ft, and 80+ clubs. 
                View <Link href="/homes-for-sale" className="text-[#D4AF37] hover:text-white underline">homes with access to these amenities</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-8 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-[#8B5E3C]">4</p>
                <p className="text-[#2D2A26]">Golf Courses</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-[#8B5E3C]">3</p>
                <p className="text-[#2D2A26]">Rec Centers</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-[#8B5E3C]">80+</p>
                <p className="text-[#2D2A26]">Clubs</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-[#8B5E3C]">125K+</p>
                <p className="text-[#2D2A26]">Sq Ft Rec Space</p>
              </div>
            </div>
          </div>
        </section>

        {/* Amenity Map — Google Maps Platform: nearby restaurants, parks, golf, etc. */}
        <section className="py-12 md:py-16 bg-white" id="amenity-map">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center justify-center w-14 h-14 bg-[#8B5E3C]/10 rounded-full">
                  <MapPin className="w-7 h-7 text-[#8B5E3C]" aria-hidden />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] font-playfair">
                  Nearby Amenities Map
                </h2>
              </div>
              <p className="text-[#2D2A26] text-center mb-8 max-w-2xl mx-auto">
                Explore restaurants, parks, golf, schools, and more near Sun City Summerlin. Use the map to see what&apos;s around the community.
              </p>
              <AmenityMapEmbed />
            </div>
          </div>
        </section>

        {/* Amenities by Category */}
        {amenities.map((category, categoryIndex) => (
          <section
            key={category.category}
            className={`py-12 md:py-16 lg:py-20 ${
              categoryIndex % 2 === 0 ? "bg-white" : "bg-[#FDF8F3]"
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="mb-8 md:mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#8B5E3C]/10 rounded-full">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] font-playfair">
                    {category.category}
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {category.items.map((amenity, index) => (
                  <AmenityCard
                    key={amenity.name}
                    amenity={amenity}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Complete Community Features List */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                Complete Amenities List
              </h2>
              <div className="bg-[#FDF8F3] rounded-lg shadow-two p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {communityAmenities.map((amenity) => (
                    <div key={amenity} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2D2A26]">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Listings */}
        <RealScoutListings h2Text="View Available Homes in Sun City Summerlin with These Amazing Amenities" />

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Experience These Amenities for Yourself
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a tour with <Link href="/about" className="text-[#D4AF37] hover:text-white underline">Dr. Jan Duffy</Link> to see the amenities and
                community in person. Learn more about the <Link href="/lifestyle" className="text-[#D4AF37] hover:text-white underline">active adult lifestyle</Link> at Sun City Summerlin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#2D2A26]"
                >
                  <Link href="/contact">Schedule Your Tour</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/homes-for-sale">View Homes for Sale</Link>
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
