import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { Button } from "@/../components/ui/button";
import { getAllFlyers } from "@/lib/flyers";

export const metadata: Metadata = {
  title: "Community Flyers & Brochures | Sun City Summerlin | Dr. Jan Duffy",
  description:
    "Download printable flyers and brochures about Sun City Summerlin, Las Vegas' premier 55+ active adult community. Get community information and amenities details.",
  alternates: {
    canonical: "https://www.suncityvegas.com/flyers",
  },
  openGraph: {
    title: "Community Flyers & Brochures | Sun City Summerlin | Dr. Jan Duffy",
    description:
      "Download printable flyers and brochures about Sun City Summerlin 55+ community.",
    url: "https://www.suncityvegas.com/flyers",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
  },
};

export default function FlyersPage() {
  const flyers = getAllFlyers();
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Flyers & Brochures", href: "/flyers" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Community Flyers & Brochures
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Download printable flyers and brochures about Sun City Summerlin. Share with friends and family or keep for your records.
              </p>
            </div>
          </div>
        </section>

        {/* Flyers Grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {flyers.map((flyer) => (
                  <div
                    key={flyer.slug}
                    className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow border border-[#C4A574]/20 overflow-hidden flex flex-col"
                  >
                    <div className="p-6 flex-grow flex flex-col">
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
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#8B5E3C] text-[#8B5E3C] font-semibold rounded-md hover:bg-[#8B5E3C]/5 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                Need More Information?
              </h2>
              <p className="text-lg text-[#2D2A26] mb-6">
                Contact Dr. Jan Duffy to schedule a private tour or get answers to your questions about Sun City Summerlin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+17027180043"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#8B5E3C] text-white font-semibold rounded-lg hover:bg-[#8B5E3C]/90 transition-colors min-h-[48px] touch-manipulation"
                >
                  Call (702) 718-0043
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#8B5E3C] text-[#8B5E3C] font-semibold rounded-lg hover:bg-[#8B5E3C]/5 transition-colors min-h-[48px] touch-manipulation"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
