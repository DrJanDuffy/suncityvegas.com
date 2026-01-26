import ScrollAnimation from "../scroll-animation";
import Image from "next/image";
import Link from "next/link";

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function SolutionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollAnimation>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-three bg-[#FDF8F3]">
                <Image
                  src="/images/hero/community-sign.jpg"
                  alt="Sun City Summerlin community entrance"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B5E3C] mb-4 md:mb-6 font-playfair px-2">
                  A Community Built for Living
                </h2>
                <div className="prose prose-lg max-w-none space-y-4 md:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-[#2D2A26] leading-relaxed px-2">
                    Sun City Summerlin is Las Vegas&apos; premier 55+ community with 7,779 homes, 4 championship golf courses, and 3 recreation centers—built for people who want to live, not just exist.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-[#2D2A26] leading-relaxed px-2">
                    Over 125,000 sq ft of <Link href="/amenities" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">world-class amenities</Link> are ready and waiting. Guard-gated with 24/7 security. Red Rock Canyon views from your backyard. 80+ clubs to join. Neighbors your age who actually want to meet you. Explore the <Link href="/lifestyle" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">active adult lifestyle</Link> today. And Nevada has no state income tax—so more of your money stays yours.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-[#2D2A26] leading-relaxed font-semibold px-2">
                    This isn&apos;t a place to slow down. It&apos;s a place to finally do
                    everything you&apos;ve been putting off.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
