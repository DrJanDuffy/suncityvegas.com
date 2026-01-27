import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import { Phone, UtensilsCrossed, MapPin, Clock, Star } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

export const metadata: Metadata = {
  title: "Restaurants Near Sun City Summerlin | Dining Guide (2025)",
  description:
    "Discover the best restaurants near Sun City Summerlin. From fine dining to casual eateries, explore dining options in Summerlin and Las Vegas just minutes from the community.",
  alternates: {
    canonical: "https://www.suncityvegas.com/lifestyle/restaurants",
  },
  openGraph: {
    title: "Restaurants Near Sun City Summerlin | Dining Guide (2025)",
    description:
      "Complete guide to restaurants and dining near Sun City Summerlin in Summerlin and Las Vegas.",
    url: "https://www.suncityvegas.com/lifestyle/restaurants",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/lifestyle/restaurants-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurants near Sun City Summerlin",
      },
    ],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function RestaurantsPage() {
  const restaurantCategories = [
    {
      name: "Fine Dining",
      description: "Upscale restaurants for special occasions",
      restaurants: [
        { name: "Echo & Rig", distance: "5 min", cuisine: "Steakhouse" },
        { name: "Vintner Grill", distance: "8 min", cuisine: "American" },
        { name: "Marche Bacchus", distance: "10 min", cuisine: "French" },
      ],
    },
    {
      name: "Casual Dining",
      description: "Great everyday dining options",
      restaurants: [
        { name: "BJ's Restaurant", distance: "5 min", cuisine: "American" },
        { name: "Olive Garden", distance: "6 min", cuisine: "Italian" },
        { name: "Red Robin", distance: "7 min", cuisine: "Burgers" },
      ],
    },
    {
      name: "International Cuisine",
      description: "Diverse flavors from around the world",
      restaurants: [
        { name: "P.F. Chang's", distance: "5 min", cuisine: "Chinese" },
        { name: "Yard House", distance: "6 min", cuisine: "American/International" },
        { name: "Kabuki", distance: "8 min", cuisine: "Japanese" },
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
          { label: "Restaurants", href: "/lifestyle/restaurants" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#5D7A5D] to-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <div className="flex justify-center mb-6">
                  <UtensilsCrossed className="w-16 h-16 text-[#D4AF37]" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  Restaurants Near Sun City Summerlin
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                  Dining Guide for Summerlin & Las Vegas
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  Discover excellent dining options just minutes from Sun City Summerlin, from fine dining to casual eateries.
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
                  src="/images/lifestyle/restaurants-hero.jpg"
                  alt="Restaurants and dining near Sun City Summerlin"
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
                    One of the advantages of living in Sun City Summerlin is the proximity to excellent dining options. Summerlin and Las Vegas offer a diverse culinary scene, from fine dining to casual eateries.
                  </p>
                  <p>
                    Downtown Summerlin, just 10 minutes away, features dozens of restaurants in a walkable setting. The Las Vegas Strip, 15 minutes away, offers world-class dining from celebrity chefs. And throughout Summerlin, you'll find neighborhood favorites perfect for everyday dining.
                  </p>
                  <p>
                    Whether you're looking for a special occasion restaurant, a casual spot for lunch, or international cuisine, you'll find it within minutes of Sun City Summerlin.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Restaurant Categories */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Dining Options by Category
                </h2>
              </ScrollAnimation>
              <div className="space-y-8">
                {restaurantCategories.map((category, index) => (
                  <ScrollAnimation key={category.name} delay={index * 100}>
                    <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        {category.name}
                      </h3>
                      <p className="text-[#2D2A26] mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {category.restaurants.map((restaurant) => (
                          <div
                            key={restaurant.name}
                            className="bg-[#FDF8F3] rounded-lg p-4 border-l-4 border-[#8B5E3C]"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Star className="w-5 h-5 text-[#D4AF37]" />
                              <h4 className="font-bold text-[#8B5E3C]">{restaurant.name}</h4>
                            </div>
                            <p className="text-sm text-[#2D2A26] mb-1">
                              <strong>Cuisine:</strong> {restaurant.cuisine}
                            </p>
                            <p className="text-sm text-[#2D2A26] flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-[#5D7A5D]" />
                              {restaurant.distance} from Sun City Summerlin
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Downtown Summerlin */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  Downtown Summerlin
                </h2>
              </ScrollAnimation>
              <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                <p className="text-lg text-[#2D2A26] leading-relaxed mb-4">
                  Just 10 minutes from Sun City Summerlin, Downtown Summerlin is a premier shopping and dining destination. This walkable outdoor center features:
                </p>
                <ul className="space-y-2 text-[#2D2A26]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#5D7A5D] font-bold">•</span>
                    <span>30+ restaurants and eateries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5D7A5D] font-bold">•</span>
                    <span>Fine dining to casual options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5D7A5D] font-bold">•</span>
                    <span>Outdoor dining and patios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5D7A5D] font-bold">•</span>
                    <span>Entertainment and events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5D7A5D] font-bold">•</span>
                    <span>Easy parking and accessibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Las Vegas Strip */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  Las Vegas Strip (15 Minutes)
                </h2>
              </ScrollAnimation>
              <div className="bg-white rounded-lg p-6 md:p-8">
                <p className="text-lg text-[#2D2A26] leading-relaxed mb-4">
                  The Las Vegas Strip is just 15 minutes from Sun City Summerlin, offering world-class dining from celebrity chefs and renowned restaurants. Whether you're celebrating a special occasion or just want an exceptional meal, the Strip offers:
                </p>
                <ul className="space-y-2 text-[#2D2A26]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5E3C] font-bold">•</span>
                    <span>Celebrity chef restaurants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5E3C] font-bold">•</span>
                    <span>Fine dining establishments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5E3C] font-bold">•</span>
                    <span>International cuisine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5E3C] font-bold">•</span>
                    <span>Buffets and casual options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5E3C] font-bold">•</span>
                    <span>Entertainment and shows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Favorites */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  Local Favorites
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Neighborhood Cafes",
                    description: "Local cafes perfect for breakfast, lunch, or coffee",
                  },
                  {
                    name: "Family Restaurants",
                    description: "Casual family-friendly dining options",
                  },
                  {
                    name: "Fast Casual",
                    description: "Quick service restaurants for everyday meals",
                  },
                  {
                    name: "Specialty Shops",
                    description: "Bakeries, delis, and specialty food shops",
                  },
                ].map((item, index) => (
                  <ScrollAnimation key={item.name} delay={index * 100}>
                    <div className="bg-[#FDF8F3] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        {item.name}
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
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
                  Experience the Lifestyle
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a tour with Dr. Jan Duffy to see Sun City Summerlin and learn more about the convenient location near excellent dining options.
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
