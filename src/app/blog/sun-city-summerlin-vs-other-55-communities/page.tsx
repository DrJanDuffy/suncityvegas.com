import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import YouTubeEmbed from "@components/YouTubeEmbed";
import { Button } from "@components/ui/button";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";
import Script from "next/script";

/** Replace with your YouTube video ID (from youtube.com/watch?v=VIDEO_ID) */
const YOUTUBE_VIDEO_ID = "";

export const metadata: Metadata = {
  title: "Sun City Summerlin vs Other Las Vegas 55+ Communities (2026)",
  description:
    "Compare Sun City Summerlin to Aliante, Siena, and other Las Vegas 55+ communities. Location, amenities, HOA fees, and lifestyle from Dr. Jan Duffy.",
  alternates: {
    canonical: "https://www.suncityvegas.com/blog/sun-city-summerlin-vs-other-55-communities",
  },
  openGraph: {
    title: "Sun City Summerlin vs Other Las Vegas 55+ Communities (2026)",
    description:
      "How Sun City Summerlin stacks up against Aliante, Siena, and other 55+ communities in Las Vegas. Expert comparison from Dr. Jan Duffy.",
    url: "https://www.suncityvegas.com/blog/sun-city-summerlin-vs-other-55-communities",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-01-27T00:00:00Z",
    modifiedTime: "2026-01-27T00:00:00Z",
    authors: ["Dr. Jan Duffy"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun City Summerlin vs Other Las Vegas 55+ Communities (2026)",
    description: "Compare Sun City Summerlin to Aliante, Siena, and other 55+ communities.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sun City Summerlin vs Other Las Vegas 55+ Communities (Aliante, Siena, etc.)",
  description:
    "Compare Sun City Summerlin to Aliante, Siena, and other Las Vegas 55+ communities. Location, amenities, HOA fees, and lifestyle.",
  datePublished: "2026-01-27T00:00:00Z",
  dateModified: "2026-01-27T00:00:00Z",
  author: {
    "@type": "Person",
    name: "Dr. Jan Duffy",
    url: "https://www.suncityvegas.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    logo: { "@type": "ImageObject", url: "https://www.suncityvegas.com/images/logo/logo.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.suncityvegas.com/blog/sun-city-summerlin-vs-other-55-communities",
  },
};

export default function SunCityVsOther55CommunitiesPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Sun City vs Other 55+ Communities", href: "/blog/sun-city-summerlin-vs-other-55-communities" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
                Pillar Guide
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair">
                Sun City Summerlin vs Other Las Vegas 55+ Communities (2026)
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <time dateTime="2026-01-27">January 27, 2026</time>
                </div>
                <span>•</span>
                <span>By Dr. Jan Duffy</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {YOUTUBE_VIDEO_ID && (
                <div className="mb-8">
                  <YouTubeEmbed
                    videoId={YOUTUBE_VIDEO_ID}
                    title="Sun City Summerlin vs Other Las Vegas 55+ Communities (Aliante, Siena, etc.)"
                  />
                </div>
              )}
              <ScrollAnimation>
                <div className="prose prose-lg max-w-none text-[#2D2A26]">
                  <p className="text-lg leading-relaxed mb-4">
                    How does Sun City Summerlin compare to other 55+ communities in Las Vegas—like Aliante, Siena, Sun City Anthem, and others? In this guide we cover location, amenities, HOA fees, home prices, and lifestyle so you can choose the community that fits you best.
                  </p>
                  <p className="mb-6">
                    For the full picture, see the{" "}
                    <Link href="/flyers/sun-city-summerlin-guide" className="text-[#8B5E3C] font-semibold hover:text-[#5D7A5D] underline">
                      Sun City Summerlin Complete Community Guide
                    </Link>
                    , or{" "}
                    <Link href="/schedule" className="text-[#8B5E3C] font-semibold hover:text-[#5D7A5D] underline">
                      book a 55+ strategy call
                    </Link>
                    {" "}with Dr. Jan Duffy to compare communities in person and tour Sun City Summerlin.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <Link
                    href="/flyers/sun-city-summerlin-guide"
                    className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20 flex items-center gap-4"
                  >
                    <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                      Read the full guide <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                  <Link
                    href="/schedule"
                    className="bg-[#8B5E3C] text-white rounded-lg p-6 hover:bg-[#7a5335] transition-colors flex items-center gap-4"
                  >
                    <span className="font-semibold flex items-center gap-2">
                      Book a 55+ Strategy Call <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white" aria-label="CTA">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-playfair">
                  Compare Communities with Dr. Jan Duffy
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a private tour to see Sun City Summerlin and discuss how it compares to Aliante, Siena, and other 55+ communities. Get honest answers and find the right fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:7027180042"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#2D2A26] rounded-md font-semibold hover:bg-[#D4AF37]/90 transition-colors min-h-[48px] touch-manipulation"
                  >
                    <Phone className="w-5 h-5" />
                    Call/Text: (702) 718-0042
                  </a>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 min-h-[48px] px-6">
                    <Link href="/schedule">Book a 55+ Strategy Call</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replaceAll("<", "\\u003c"),
        }}
      />
    </>
  );
}
