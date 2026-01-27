import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import Link from "next/link";
import { FileText, Download, ArrowLeft } from "lucide-react";
import { Button } from "@components/ui/button";
import { getAllFlyers, getFlyerBySlug } from "@/lib/flyers";

export async function generateStaticParams() {
  const flyers = getAllFlyers();
  return flyers.map((flyer) => ({
    slug: flyer.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const flyer = getFlyerBySlug(slug);

  if (!flyer) {
    return {
      title: "Flyer Not Found | Sun City Summerlin",
    };
  }

  return {
    title: `${flyer.title} | Sun City Summerlin | Dr. Jan Duffy`,
    description: flyer.description,
    alternates: {
      canonical: `https://www.suncityvegas.com/flyers/${slug}`,
    },
    openGraph: {
      title: `${flyer.title} | Sun City Summerlin`,
      description: flyer.description,
      url: `https://www.suncityvegas.com/flyers/${slug}`,
      siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function FlyerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const flyer = getFlyerBySlug(slug);

  if (!flyer) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Flyers & Brochures", href: "/flyers" },
          { label: flyer.title, href: `/flyers/${slug}` },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 mx-auto">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full">
                  {flyer.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                {flyer.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                {flyer.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#FDF8F3] rounded-lg p-8 md:p-12 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                  About This Brochure
                </h2>
                <p className="text-lg text-[#2D2A26] leading-relaxed mb-6">
                  {flyer.content}
                </p>
                <div className="bg-white rounded-lg p-6 border-2 border-[#C4A574]/30">
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                    What&apos;s Included:
                  </h3>
                  <ul className="space-y-3 text-[#2D2A26]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AF37] font-bold mt-1">•</span>
                      <span>Community overview and highlights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AF37] font-bold mt-1">•</span>
                      <span>Amenities: 4 golf courses, 3 recreation centers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AF37] font-bold mt-1">•</span>
                      <span>HOA information and fees</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AF37] font-bold mt-1">•</span>
                      <span>Lifestyle and 80+ club details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AF37] font-bold mt-1">•</span>
                      <span>Contact information for Dr. Jan Duffy</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* PDF Viewer/Download */}
              <div className="bg-white rounded-lg shadow-three border border-[#C4A574]/20 p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                      Download or View PDF
                    </h3>
                    <p className="text-[#2D2A26]">
                      Click below to download or view the brochure in your browser.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={flyer.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8B5E3C] text-white font-semibold rounded-lg hover:bg-[#8B5E3C]/90 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Download PDF
                    </a>
                    <a
                      href={flyer.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#8B5E3C] text-[#8B5E3C] font-semibold rounded-lg hover:bg-[#8B5E3C]/5 transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                      View in Browser
                    </a>
                  </div>
                </div>
                <div className="border-2 border-[#C4A574]/20 rounded-lg overflow-hidden">
                  <iframe
                    src={`${flyer.filePath}#toolbar=1&navpanes=1&scrollbar=1`}
                    className="w-full h-[600px] md:h-[800px]"
                    title={`${flyer.title} PDF Viewer`}
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center justify-center gap-2 border-[#8B5E3C] text-[#8B5E3C]"
                >
                  <Link href="/flyers">
                    <ArrowLeft className="w-4 h-4" />
                    Back to All Flyers
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="default"
                  className="flex-1 bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 min-h-[48px] px-6"
                >
                  <Link href="/contact">Schedule a Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                Explore More
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/amenities"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-[#8B5E3C] mb-2 font-playfair">
                    Amenities
                  </h3>
                  <p className="text-[#2D2A26] text-sm">
                    4 golf courses, 3 rec centers
                  </p>
                </Link>
                <Link
                  href="/lifestyle"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-[#8B5E3C] mb-2 font-playfair">
                    Lifestyle
                  </h3>
                  <p className="text-[#2D2A26] text-sm">
                    80+ clubs and activities
                  </p>
                </Link>
                <Link
                  href="/homes-for-sale"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-[#8B5E3C] mb-2 font-playfair">
                    Homes for Sale
                  </h3>
                  <p className="text-[#2D2A26] text-sm">
                    View current listings
                  </p>
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
