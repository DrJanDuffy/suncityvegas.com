import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import ScheduleTour from "./ScheduleTour";

// Placeholder blur data URL (1x1 transparent PNG)
const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-[#2D2A26] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/amenities/resort-pool.jpeg"
          alt="Sun City Summerlin golf course with Red Rock Canyon mountain views"
          fill
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 font-playfair leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Sun City Summerlin Homes for Sale
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic mb-4 md:mb-6 text-[#D4AF37] leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            Las Vegas&apos; Premier 55+ Community
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-100 leading-relaxed px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            Discover resort-style living with 4 championship golf courses, 3 recreation centers, 
            80+ clubs, and breathtaking Red Rock Canyon views. Your active lifestyle awaits.
          </p>
          <div className="mb-6 md:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              Homes from $300K-$800K+ | 7,779 Homes | Guard-Gated
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4">
            <div className="w-full sm:w-auto sm:min-w-[200px]">
              <ScheduleTour
                variant="accent"
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg px-6 py-4 bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 min-h-[48px]"
              />
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2D2A26] w-full sm:w-auto sm:min-w-[200px] min-h-[48px] text-base md:text-lg px-6 py-4"
            >
              <Link href="/homes-for-sale">Browse Available Homes</Link>
            </Button>
          </div>
          <div className="mt-8 text-sm text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
            <a href="tel:+17027180043" className="hover:text-[#D4AF37] transition-colors">
              Call Dr. Jan Duffy: (702) 718-0043
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
