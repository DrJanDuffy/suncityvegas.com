import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/../../components/navbar";
import Footer from "@/../../components/footer";
import Breadcrumbs from "@/../../components/Breadcrumbs";
import { Button } from "@/../../components/ui/button";
import { Phone, Calendar, ArrowRight, Check, X } from "lucide-react";
import ScrollAnimation from "@/../../components/scroll-animation";

export const metadata: Metadata = {
  title: "Sun City Summerlin vs Sun City Anthem: Which is Better? (2025)",
  description:
    "Compare Sun City Summerlin and Sun City Anthem, two of Las Vegas' premier 55+ communities. Learn the differences in location, amenities, home prices, HOA fees, and lifestyle to find the right fit.",
  alternates: {
    canonical: "https://www.suncityvegas.com/blog/sun-city-summerlin-vs-sun-city-anthem",
  },
  openGraph: {
    title: "Sun City Summerlin vs Sun City Anthem: Which is Better? (2025)",
    description:
      "Side-by-side comparison of two premier 55+ communities in Las Vegas to help you find the right fit.",
    url: "https://www.suncityvegas.com/blog/sun-city-summerlin-vs-sun-city-anthem",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-26T00:00:00Z",
    modifiedTime: "2025-01-26T00:00:00Z",
    authors: ["Dr. Jan Duffy"],
    images: [
      {
        url: "https://www.suncityvegas.com/images/blog/comparison-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin vs Sun City Anthem comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun City Summerlin vs Sun City Anthem: Which is Better?",
    description: "Complete comparison of two premier 55+ communities in Las Vegas.",
    images: ["https://www.suncityvegas.com/images/blog/comparison-hero.jpg"],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which is better: Sun City Summerlin or Sun City Anthem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The better choice depends on your priorities. Sun City Summerlin offers more amenities (3 rec centers vs 2, 3 golf courses vs 2), lower HOA fees (~$165 vs ~$200), and a more established community. Sun City Anthem has newer homes (built 1998-2008 vs 1989-2002) and is located in Henderson. If you prioritize amenities and value, Sun City Summerlin is better. If you want newer construction, Sun City Anthem may be preferable.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference in home prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both communities have similar price ranges, typically $275,000 to $1,200,000+. Sun City Summerlin has 7,781 homes, while Sun City Anthem has 7,219 homes. The average home price is similar in both communities, around $450,000.",
      },
    },
    {
      "@type": "Question",
      name: "Which has better amenities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sun City Summerlin has more amenities: 3 recreation centers totaling 125,000+ sq ft vs 2 centers, 3 golf courses vs 2, and 80+ clubs. Both communities offer excellent amenities, but Sun City Summerlin has the edge in variety and quantity.",
      },
    },
  ],
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sun City Summerlin vs Sun City Anthem: Which is Better? (2025)",
  description: "Complete comparison of two premier 55+ communities in Las Vegas.",
  datePublished: "2025-01-26T00:00:00Z",
  dateModified: "2025-01-26T00:00:00Z",
  author: {
    "@type": "Person",
    name: "Dr. Jan Duffy",
    url: "https://www.suncityvegas.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    logo: {
      "@type": "ImageObject",
      url: "https://www.suncityvegas.com/images/logo/logo.svg",
    },
  },
  image: "https://www.suncityvegas.com/images/blog/comparison-hero.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.suncityvegas.com/blog/sun-city-summerlin-vs-sun-city-anthem",
  },
};

export default function ComparisonPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Sun City Summerlin vs Sun City Anthem", href: "/blog/sun-city-summerlin-vs-sun-city-anthem" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
                Community Comparison
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair">
                Sun City Summerlin vs Sun City Anthem: Which is Better?
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <time dateTime="2025-01-26">January 26, 2025</time>
                </div>
                <span>•</span>
                <span>By Dr. Jan Duffy</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-three bg-[#FDF8F3]">
                <Image
                  src="/images/blog/comparison-hero.jpg"
                  alt="Comparison of Sun City Summerlin and Sun City Anthem communities"
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

        {/* Article Content */}
        <article className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <ScrollAnimation>
                <div className="prose prose-lg max-w-none text-[#2D2A26] mb-12">
                  <p className="text-xl md:text-2xl font-semibold text-[#8B5E3C] leading-relaxed mb-6">
                    Both Sun City Summerlin and Sun City Anthem are premier 55+ communities in Las Vegas, but they offer different experiences. Here's my honest comparison to help you decide which is the right fit.
                  </p>
                  <p className="text-lg leading-relaxed">
                    As a real estate agent who has worked with both communities for over 30 years, I've seen what draws people to each. This comprehensive comparison covers location, amenities, home prices, HOA fees, and lifestyle differences.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Quick Comparison Table */}
              <ScrollAnimation delay={100}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 font-playfair">
                    Quick Comparison
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                      <thead>
                        <tr className="bg-[#8B5E3C] text-white">
                          <th className="border border-[#8B5E3C] p-4 text-left font-semibold">Feature</th>
                          <th className="border border-[#8B5E3C] p-4 text-left font-semibold">Sun City Summerlin</th>
                          <th className="border border-[#8B5E3C] p-4 text-left font-semibold">Sun City Anthem</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-[#FDF8F3]">
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">Built</td>
                          <td className="border border-gray-200 p-4">1989-2002</td>
                          <td className="border border-gray-200 p-4">1998-2008</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">Homes</td>
                          <td className="border border-gray-200 p-4">7,781</td>
                          <td className="border border-gray-200 p-4">7,219</td>
                        </tr>
                        <tr className="bg-[#FDF8F3]">
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">Location</td>
                          <td className="border border-gray-200 p-4">West Vegas (Summerlin)</td>
                          <td className="border border-gray-200 p-4">Henderson</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">Elevation</td>
                          <td className="border border-gray-200 p-4">~3,000 ft</td>
                          <td className="border border-gray-200 p-4">~2,500 ft</td>
                        </tr>
                        <tr className="bg-[#FDF8F3]">
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">Golf Courses</td>
                          <td className="border border-gray-200 p-4">3 courses</td>
                          <td className="border border-gray-200 p-4">2 courses</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">Recreation Centers</td>
                          <td className="border border-gray-200 p-4">3 (125,000+ sq ft)</td>
                          <td className="border border-gray-200 p-4">2 centers</td>
                        </tr>
                        <tr className="bg-[#FDF8F3]">
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">HOA Fee</td>
                          <td className="border border-gray-200 p-4">~$165/month</td>
                          <td className="border border-gray-200 p-4">~$200/month</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">Home Age</td>
                          <td className="border border-gray-200 p-4">25-35 years</td>
                          <td className="border border-gray-200 p-4">16-26 years</td>
                        </tr>
                        <tr className="bg-[#FDF8F3]">
                          <td className="border border-gray-200 p-4 font-semibold text-[#8B5E3C]">Views</td>
                          <td className="border border-gray-200 p-4">Red Rock Canyon</td>
                          <td className="border border-gray-200 p-4">Mountains/Valley</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Location Comparison */}
              <ScrollAnimation delay={200}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Location: Summerlin vs Henderson
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#5D7A5D]">
                      <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        Sun City Summerlin (Summerlin)
                      </h3>
                      <ul className="space-y-2 text-[#2D2A26]">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                          <span>Located in prestigious Summerlin master-planned community</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                          <span>10 minutes to Downtown Summerlin (shopping, dining)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                          <span>15 minutes to Las Vegas Strip</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                          <span>5 minutes to Red Rock Canyon</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                          <span>Higher elevation (~3,000 ft) = 5-10° cooler</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#C4A574]">
                      <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        Sun City Anthem (Henderson)
                      </h3>
                      <ul className="space-y-2 text-[#2D2A26]">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#C4A574] flex-shrink-0 mt-0.5" />
                          <span>Located in Henderson, southeast of Las Vegas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#C4A574] flex-shrink-0 mt-0.5" />
                          <span>Closer to Lake Mead and recreational areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#C4A574] flex-shrink-0 mt-0.5" />
                          <span>20-25 minutes to Las Vegas Strip</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#C4A574] flex-shrink-0 mt-0.5" />
                          <span>Lower elevation (~2,500 ft)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#C4A574] flex-shrink-0 mt-0.5" />
                          <span>More suburban, residential feel</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Amenities Comparison */}
              <ScrollAnimation delay={300}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Amenities: Which Has More?
                  </h2>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 mb-6">
                    <p className="text-lg font-semibold text-[#8B5E3C] mb-4">
                      Winner: Sun City Summerlin
                    </p>
                    <p className="text-[#2D2A26] leading-relaxed mb-4">
                      Sun City Summerlin has more amenities overall: 3 recreation centers totaling 125,000+ square feet versus 2 centers at Sun City Anthem. Sun City Summerlin also has 3 golf courses compared to 2 at Anthem.
                    </p>
                    <p className="text-[#2D2A26] leading-relaxed">
                      Both communities offer excellent amenities, but if variety and quantity matter to you, Sun City Summerlin has the edge. The additional recreation center and golf course provide more options for staying active and social.
                    </p>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Home Age Comparison */}
              <ScrollAnimation delay={400}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Home Age: Newer vs More Established
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white border-l-4 border-[#C4A574] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        Sun City Summerlin
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        <strong>Built:</strong> 1989-2002 (25-35 years old)
                      </p>
                      <p className="text-[#2D2A26]">
                        Homes are older but well-maintained. Many have been updated by previous owners. The established nature means mature landscaping and proven community infrastructure.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-[#5D7A5D] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        Sun City Anthem
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        <strong>Built:</strong> 1998-2008 (16-26 years old)
                      </p>
                      <p className="text-[#2D2A26]">
                        Homes are newer, which can mean less need for immediate updates. However, newer doesn't always mean better—it depends on how well homes have been maintained.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* HOA Fees Comparison */}
              <ScrollAnimation delay={500}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    HOA Fees: Value Comparison
                  </h2>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                    <p className="text-lg font-semibold text-[#8B5E3C] mb-4">
                      Winner: Sun City Summerlin
                    </p>
                    <p className="text-[#2D2A26] leading-relaxed mb-4">
                      At approximately $165 per month, Sun City Summerlin's HOA fees are lower than Sun City Anthem's ~$200 per month, yet you get more amenities. This represents exceptional value.
                    </p>
                    <p className="text-[#2D2A26] leading-relaxed">
                      For $35 less per month, you get an additional recreation center, an additional golf course, and more overall amenities. Over a year, that's $420 in savings, and over 10 years, that's $4,200.
                    </p>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Who Should Choose Which */}
              <ScrollAnimation delay={600}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 font-playfair">
                    Who Should Choose Which?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#5D7A5D]">
                      <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        Choose Sun City Summerlin If:
                      </h3>
                      <ul className="space-y-3 text-[#2D2A26]">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                          <span>You want the most amenities for your money</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                          <span>You prefer Summerlin's location and proximity to Red Rock Canyon</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                          <span>You want cooler temperatures (higher elevation)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                          <span>You value lower HOA fees</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                          <span>You're okay with older homes (25-35 years)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#C4A574]">
                      <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        Choose Sun City Anthem If:
                      </h3>
                      <ul className="space-y-3 text-[#2D2A26]">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#C4A574] flex-shrink-0 mt-0.5" />
                          <span>You want newer homes (16-26 years old)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#C4A574] flex-shrink-0 mt-0.5" />
                          <span>You prefer Henderson's location</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#C4A574] flex-shrink-0 mt-0.5" />
                          <span>You want to be closer to Lake Mead</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#C4A574] flex-shrink-0 mt-0.5" />
                          <span>You're okay with higher HOA fees for fewer amenities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#C4A574] flex-shrink-0 mt-0.5" />
                          <span>You prefer a slightly smaller community (7,219 vs 7,781 homes)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Verdict */}
              <ScrollAnimation delay={700}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    My Verdict
                  </h2>
                  <div className="bg-gradient-to-r from-[#8B5E3C] to-[#5D7A5D] text-white rounded-lg p-8 md:p-12">
                    <p className="text-xl md:text-2xl leading-relaxed mb-6 font-semibold">
                      Both communities are excellent choices, but Sun City Summerlin offers better value for most buyers.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed mb-6">
                      You get more amenities (3 rec centers vs 2, 3 golf courses vs 2) for less money ($165/month vs $200/month). The location in Summerlin is also more prestigious, and the higher elevation provides cooler temperatures.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed">
                      However, if newer construction is your top priority and you prefer Henderson's location, Sun City Anthem is a solid choice. The key is understanding what matters most to you and making an informed decision.
                    </p>
                  </div>
                </section>
              </ScrollAnimation>

              {/* FAQ Section */}
              <ScrollAnimation delay={800}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 font-playfair">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Which is better: Sun City Summerlin or Sun City Anthem?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        The better choice depends on your priorities. Sun City Summerlin offers more amenities (3 rec centers vs 2, 3 golf courses vs 2), lower HOA fees (~$165 vs ~$200), and a more established community. Sun City Anthem has newer homes (built 1998-2008 vs 1989-2002) and is located in Henderson. If you prioritize amenities and value, Sun City Summerlin is better. If you want newer construction, Sun City Anthem may be preferable.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        What's the difference in home prices?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Both communities have similar price ranges, typically $275,000 to $1,200,000+. Sun City Summerlin has 7,781 homes, while Sun City Anthem has 7,219 homes. The average home price is similar in both communities, around $450,000.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Which has better amenities?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Sun City Summerlin has more amenities: 3 recreation centers totaling 125,000+ sq ft vs 2 centers, 3 golf courses vs 2, and 80+ clubs. Both communities offer excellent amenities, but Sun City Summerlin has the edge in variety and quantity.
                      </p>
                    </details>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Related Links */}
              <ScrollAnimation delay={900}>
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Related Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                      href="/blog/pros-and-cons-sun-city-summerlin"
                      className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20"
                    >
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        Pros and Cons of Sun City Summerlin
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        An honest assessment of what makes Sun City Summerlin special.
                      </p>
                      <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link
                      href="/blog/sun-city-summerlin-hoa-fees"
                      className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20"
                    >
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        Sun City Summerlin HOA Fees
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        Complete breakdown of what's included in your HOA fee.
                      </p>
                      <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </section>
              </ScrollAnimation>
            </div>
          </article>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-playfair">
                  Want to See Both Communities?
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a tour with Dr. Jan Duffy to see Sun City Summerlin and compare it to other 55+ communities. Get expert guidance to find the right fit for your lifestyle.
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

        {/* Schema Markup */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
