import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { Button } from "../ui/button";
import ScrollAnimation from "../scroll-animation";
import { getAllFlyers } from "@/lib/flyers";

export default function FlyersSection() {
  const flyers = getAllFlyers().slice(0, 3); // Show up to 3 flyers on homepage
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B5E3C] mb-3 md:mb-4 font-playfair px-4">
              Download Community Flyers & Brochures
            </h2>
            <p className="text-center text-base md:text-lg text-[#2D2A26] mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              Get printable flyers and brochures about Sun City Summerlin. Perfect for sharing with family and friends or keeping as a reference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-12">
            {flyers.map((flyer, index) => (
              <ScrollAnimation key={flyer.slug} delay={index * 100}>
                <div className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#8B5E3C]/10 rounded-full mb-4">
                    <FileText className="w-8 h-8 text-[#8B5E3C]" />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-[#8B5E3C]/10 text-[#8B5E3C] text-xs font-semibold rounded-full">
                      {flyer.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    {flyer.title}
                  </h3>
                  <p className="text-[#2D2A26] mb-6 flex-grow leading-relaxed">
                    {flyer.description}
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button
                      asChild
                      variant="default"
                      className="w-full bg-[#8B5E3C] hover:bg-[#8B5E3C]/90"
                    >
                      <Link
                        href={`/flyers/${flyer.slug}`}
                        className="flex items-center justify-center gap-2"
                      >
                        View Details
                      </Link>
                    </Button>
                    <a
                      href={flyer.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#8B5E3C] text-[#8B5E3C] font-semibold rounded-md hover:bg-[#8B5E3C]/5 transition-colors text-sm"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] min-w-[44px] border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C]/10"
            >
              <Link href="/flyers">View All Flyers & Brochures</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
