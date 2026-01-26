import Link from 'next/link';
import Image from 'next/image';
import { Home, Sparkles, Users, HelpCircle, Phone } from 'lucide-react';
import { Button } from '../ui/button';

const exploreCards = [
  {
    title: 'Homes for Sale',
    description: 'Browse available homes from $300K-$800K+',
    href: '/homes-for-sale',
    icon: Home,
    image: '/images/amenities/resort-pool.jpeg',
    primary: true,
  },
  {
    title: 'Amenities',
    description: '4 golf courses, 3 rec centers, 80+ clubs',
    href: '/amenities',
    icon: Sparkles,
    image: '/images/amenities/clubhouse.jpeg',
  },
  {
    title: 'Lifestyle',
    description: 'Discover active adult living with Red Rock views',
    href: '/lifestyle',
    icon: Users,
    image: '/images/lifestyle/community-life.jpeg',
  },
  {
    title: 'About Dr. Jan Duffy',
    description: 'Meet your trusted Sun City Summerlin specialist',
    href: '/about',
    icon: Users,
    image: '/images/about/dr-jan-duffy.jpg',
  },
  {
    title: 'FAQ',
    description: 'Get answers about Sun City Summerlin living',
    href: '/faq',
    icon: HelpCircle,
    image: '/images/amenities/resort-pool.jpeg',
  },
];

export default function ExploreCommunitySection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B5E3C] mb-4 font-playfair">
              Explore Sun City Summerlin
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover everything Las Vegas&apos; premier 55+ community has to offer—from luxury homes to resort-style amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group relative block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#C4A574]/20"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <Icon className="w-6 h-6 text-[#8B5E3C]" />
                      </div>
                    </div>
                    {card.primary && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#D4AF37] text-[#2D2A26] px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2D2A26] mb-2 group-hover:text-[#8B5E3C] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                    <span className="text-[#8B5E3C] font-semibold text-sm group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 text-white min-h-[48px] px-6">
              <Link href="/contact" className="inline-flex items-center gap-2 min-h-[48px]">
                <Phone className="w-5 h-5" />
                Schedule a Tour
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
