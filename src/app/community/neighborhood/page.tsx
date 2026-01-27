import type { Metadata } from "next";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import Link from "next/link";
import ScrollAnimation from "@components/scroll-animation";
import {
  MapPin,
  UtensilsCrossed,
  GraduationCap,
  TreePine,
  HeartPulse,
  ShoppingBag,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Explore Sun City Summerlin Neighborhood | Local Highlights & Map",
  description:
    "Discover what the neighborhood offers—restaurants, schools, parks, healthcare, and shopping near Sun City Summerlin. Use our local-knowledge map to explore the area with Dr. Jan Duffy.",
  keywords: [
    "Sun City Summerlin neighborhood",
    "restaurants near Sun City Summerlin",
    "schools Summerlin",
    "parks near Sun City Summerlin",
    "Summerlin healthcare",
    "Downtown Summerlin",
    "explore Sun City Summerlin",
  ],
  alternates: {
    canonical: "https://www.suncityvegas.com/community/neighborhood",
  },
  openGraph: {
    title: "Explore Sun City Summerlin Neighborhood | Local Highlights & Map",
    description:
      "Discover restaurants, schools, parks, healthcare, and shopping near Sun City Summerlin. Local knowledge to help you explore the area.",
    url: "https://www.suncityvegas.com/community/neighborhood",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin neighborhood and local area",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Sun City Summerlin Neighborhood | Local Highlights",
    description: "Restaurants, schools, parks, healthcare, and shopping near Sun City Summerlin.",
    images: ["https://www.suncityvegas.com/images/hero/hero-bg.jpg"],
  },
};

// Google Maps Solutions Neighborhood Discovery embed
const NEIGHBORHOOD_DISCOVERY_EMBED_URL =
  "https://storage.googleapis.com/maps-solutions-v9iuebxrqf/neighborhood-discovery/0viu/neighborhood-discovery.html";

const highlights = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Dining",
    description:
      "From fine dining to casual eateries, Summerlin and the Las Vegas Strip offer dozens of options within minutes. Downtown Summerlin alone features 30+ restaurants in a walkable setting.",
    link: { href: "/lifestyle/restaurants", label: "See our dining guide" },
    items: ["Echo & Rig, Vintner Grill, Marche Bacchus", "Downtown Summerlin 10 min", "Las Vegas Strip 15 min"],
  },
  {
    icon: GraduationCap,
    title: "Schools & Education",
    description:
      "The Summerlin area is served by the Clark County School District, with highly rated schools nearby. Though Sun City Summerlin is 55+, many residents have grandchildren who visit—and local schools are a short drive away.",
    link: null,
    items: ["Clark County School District", "Nearby elementary, middle, and high schools", "UNLV and CSN within 20–30 min"],
  },
  {
    icon: TreePine,
    title: "Parks & Outdoors",
    description:
      "Red Rock Canyon, Floyd Lamb Park, and miles of trails and greenbelts put hiking, biking, and nature at your doorstep. Sun City Summerlin’s own golf courses and recreation centers add more ways to stay active.",
    link: null,
    items: ["Red Rock Canyon National Conservation Area", "Floyd Lamb Park at Tule Springs", "Community trails and golf"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Summerlin Hospital Medical Center and other top-rated facilities are minutes away, along with specialists, urgent care, and wellness centers—so you’re well covered for routine and emergency care.",
    link: null,
    items: ["Summerlin Hospital Medical Center", "Urgent care and specialists nearby", "Wellness and fitness in the community"],
  },
  {
    icon: ShoppingBag,
    title: "Shopping",
    description:
      "Downtown Summerlin, Trader Joe’s, Whole Foods, and major retailers are all close by. You can run daily errands or enjoy a full day of shopping without a long drive.",
    link: null,
    items: ["Downtown Summerlin", "Grocery and everyday retail", "Boutiques and national brands"],
  },
];

export default function NeighborhoodPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen bg-white">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Community", href: "/community" },
            { label: "Explore Neighborhood", href: "/community/neighborhood" },
          ]}
        />

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#FDF8F3] to-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <div className="flex justify-center mb-6">
                  <MapPin className="w-14 h-14 text-[#8B5E3C]" aria-hidden />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                  Explore the Neighborhood
                </h1>
                <p className="text-lg md:text-xl text-[#2D2A26] mb-8 leading-relaxed">
                  Get to know Sun City Summerlin with local knowledge. Discover restaurants, schools, parks, healthcare, and shopping—so you can see what the area really offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 min-h-[44px]">
                    <Link href="/contact">
                      Ask Dr. Jan for a neighborhood tour
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C]/10 min-h-[44px]">
                    <a href="tel:+17027180043">Call (702) 718-0043</a>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-12 md:py-16 bg-white" id="map">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 text-center font-playfair">
                  Sun City Summerlin &amp; Surrounding Area
                </h2>
                <p className="text-[#2D2A26] text-center mb-8 max-w-2xl mx-auto">
                  Use the map to explore the community and nearby highlights. Centered on Sun City Summerlin—9406 Del Webb Blvd, Las Vegas, NV 89134.
                </p>
              </ScrollAnimation>
              <ScrollAnimation delay={100}>
                <div className="rounded-lg overflow-hidden shadow-lg border border-[#E8E4E0] h-[400px] md:h-[500px]">
                  <iframe
                    src={NEIGHBORHOOD_DISCOVERY_EMBED_URL}
                    width="100%"
                    height="100%"
                    className="border-0 w-full h-full block"
                    loading="lazy"
                    title="Neighborhood discovery map — Sun City Summerlin area"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Local highlights */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-4 text-center font-playfair">
                  What the Neighborhood Offers
                </h2>
                <p className="text-lg text-[#2D2A26] text-center mb-12 max-w-2xl mx-auto">
                  Local knowledge to help you explore restaurants, schools, parks, healthcare, and shopping near Sun City Summerlin.
                </p>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <ScrollAnimation key={item.title} delay={index * 80}>
                      <div className="bg-white rounded-lg p-6 md:p-8 shadow-md border-l-4 border-[#8B5E3C]">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-12 h-12 rounded-lg bg-[#8B5E3C]/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-[#8B5E3C]" aria-hidden />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                              {item.title}
                            </h3>
                            <p className="text-[#2D2A26] mb-4 leading-relaxed">
                              {item.description}
                            </p>
                            <ul className="space-y-1 text-sm text-[#2D2A26] mb-4">
                              {item.items.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-2">
                                  <span className="text-[#8B5E3C] mt-1">•</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                            {item.link && (
                              <Button asChild size="sm" className="bg-[#8B5E3C] hover:bg-[#8B5E3C]/90">
                                <Link href={item.link.href}>{item.link.label}</Link>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                  See it in person
                </h2>
                <p className="text-lg text-[#2D2A26] mb-6">
                  Get a personalized neighborhood tour with Dr. Jan Duffy. Over 25 years of experience in Sun City Summerlin and active adult communities—so you can explore with someone who knows the area inside and out.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 min-h-[44px]">
                    <Link href="/contact">Schedule a tour</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C]/10 min-h-[44px]">
                    <a href="tel:+17027180043">(702) 718-0043</a>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
