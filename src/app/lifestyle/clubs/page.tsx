import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/../../components/navbar";
import Footer from "@/../../components/footer";
import Breadcrumbs from "@/../../components/Breadcrumbs";
import { Button } from "@/../../components/ui/button";
import { Phone, Users, Heart, Music, Palette, Camera, BookOpen, Gamepad2 } from "lucide-react";
import ScrollAnimation from "@/../../components/scroll-animation";

export const metadata: Metadata = {
  title: "Sun City Summerlin Clubs & Organizations | 80+ Active Groups",
  description:
    "Join 80+ clubs and organizations at Sun City Summerlin. From arts and crafts to sports, hobbies to social groups, find your community and stay active in retirement.",
  alternates: {
    canonical: "https://www.suncityvegas.com/lifestyle/clubs",
  },
  openGraph: {
    title: "Sun City Summerlin Clubs & Organizations | 80+ Active Groups",
    description:
      "Discover 80+ clubs and organizations at Sun City Summerlin, from arts and crafts to sports and social groups.",
    url: "https://www.suncityvegas.com/lifestyle/clubs",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/lifestyle/clubs-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin clubs and organizations",
      },
    ],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function ClubsPage() {
  const clubCategories = [
    {
      name: "Arts & Crafts",
      icon: Palette,
      description: "Express your creativity with various art and craft clubs",
      clubs: [
        "Watercolor Painting",
        "Oil Painting",
        "Pottery & Ceramics",
        "Quilting & Sewing",
        "Woodworking",
        "Jewelry Making",
        "Photography",
        "Scrapbooking",
      ],
    },
    {
      name: "Sports & Fitness",
      icon: Heart,
      description: "Stay active with sports and fitness clubs",
      clubs: [
        "Tennis Club",
        "Pickleball Club",
        "Bocce Ball",
        "Golf Leagues",
        "Walking Club",
        "Yoga & Pilates",
        "Swimming",
        "Cycling",
      ],
    },
    {
      name: "Music & Performing Arts",
      icon: Music,
      description: "Enjoy music and performing arts",
      clubs: [
        "Chorus",
        "Band",
        "Dance Club",
        "Theater Group",
        "Ukulele Club",
        "Piano Club",
      ],
    },
    {
      name: "Games & Cards",
      icon: Gamepad2,
      description: "Socialize and have fun with games",
      clubs: [
        "Bridge",
        "Poker",
        "Mahjong",
        "Chess",
        "Bingo",
        "Darts",
        "Billiards",
      ],
    },
    {
      name: "Social & Interest",
      icon: Users,
      description: "Connect with others who share your interests",
      clubs: [
        "Book Club",
        "Wine Tasting",
        "Travel Club",
        "Garden Club",
        "Computer Club",
        "Genealogy",
        "Investment Club",
        "Volunteer Groups",
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
          { label: "Clubs", href: "/lifestyle/clubs" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#5D7A5D] to-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <div className="flex justify-center mb-6">
                  <Users className="w-16 h-16 text-[#D4AF37]" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  Sun City Summerlin Clubs & Organizations
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                  Join 80+ Active Clubs and Find Your Community
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  From arts and crafts to sports, hobbies to social groups, there's a club for every interest at Sun City Summerlin.
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
                  src="/images/lifestyle/clubs-hero.jpg"
                  alt="Sun City Summerlin club members enjoying activities together"
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
                    One of the best ways to get involved and meet people at Sun City Summerlin is through the community's 80+ clubs and organizations.
                  </p>
                  <p>
                    Whether you're interested in arts and crafts, sports, music, games, or social activities, there's a club for you. These clubs are run by residents for residents, creating a vibrant community where you can pursue your passions and make new friends.
                  </p>
                  <p>
                    Most clubs meet regularly at the recreation centers, and many are open to new members. Joining a club is a great way to stay active, learn new skills, and build lasting friendships in your retirement years.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Club Categories */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Club Categories
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <ScrollAnimation key={category.name} delay={index * 100}>
                      <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                          <Icon className="w-8 h-8 text-[#8B5E3C]" />
                          <h3 className="text-xl font-bold text-[#8B5E3C] font-playfair">
                            {category.name}
                          </h3>
                        </div>
                        <p className="text-[#2D2A26] mb-4 leading-relaxed">
                          {category.description}
                        </p>
                        <ul className="space-y-2">
                          {category.clubs.map((club) => (
                            <li key={club} className="flex items-start gap-2 text-[#2D2A26]">
                              <span className="text-[#5D7A5D] font-bold">•</span>
                              <span>{club}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollAnimation>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Joining Clubs */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Benefits of Joining Clubs
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ScrollAnimation delay={100}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                      Make New Friends
                    </h3>
                    <p className="text-[#2D2A26] leading-relaxed">
                      Clubs are a great way to meet people who share your interests. You'll quickly build friendships with like-minded neighbors.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                      Stay Active
                    </h3>
                    <p className="text-[#2D2A26] leading-relaxed">
                      Whether it's physical activity or mental stimulation, clubs help you stay active and engaged in retirement.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={300}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                      Learn New Skills
                    </h3>
                    <p className="text-[#2D2A26] leading-relaxed">
                      Many clubs offer opportunities to learn new skills or improve existing ones, from art techniques to game strategies.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={400}>
                  <div className="bg-[#FDF8F3] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                      Give Back
                    </h3>
                    <p className="text-[#2D2A26] leading-relaxed">
                      Volunteer clubs and groups provide opportunities to give back to the community and make a difference.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  How to Join a Club
                </h2>
              </ScrollAnimation>
              <div className="bg-white rounded-lg p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    1. Visit the Recreation Centers
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Each recreation center has bulletin boards and information about clubs that meet there. You can also ask staff members about clubs that match your interests.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    2. Attend a Meeting
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Most clubs welcome visitors to attend a meeting before joining. This gives you a chance to see if the club is a good fit for you.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    3. Talk to Neighbors
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Your neighbors are a great source of information about clubs. Ask them what clubs they're involved in and if they'd recommend them.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    4. Check Community Publications
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    The community newsletter and website often feature club information, meeting times, and contact information for club leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Clubs */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Popular Clubs
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Tennis Club", members: "200+", description: "Regular matches and tournaments" },
                  { name: "Pickleball Club", members: "150+", description: "Fast-growing sport for all skill levels" },
                  { name: "Golf Leagues", members: "300+", description: "Multiple leagues for different skill levels" },
                  { name: "Watercolor Painting", members: "80+", description: "Weekly classes and workshops" },
                  { name: "Bridge Club", members: "100+", description: "Regular games and tournaments" },
                  { name: "Book Club", members: "60+", description: "Monthly discussions and social gatherings" },
                ].map((club, index) => (
                  <ScrollAnimation key={club.name} delay={index * 100}>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#8B5E3C]">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        {club.name}
                      </h3>
                      <p className="text-sm text-[#8B5E3C] mb-2">{club.members} members</p>
                      <p className="text-[#2D2A26]">{club.description}</p>
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
                  Ready to Get Involved?
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a tour with Dr. Jan Duffy to see the recreation centers where clubs meet and learn more about the active lifestyle at Sun City Summerlin.
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
