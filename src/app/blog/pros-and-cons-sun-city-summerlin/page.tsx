import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Breadcrumbs from "@/../components/Breadcrumbs";
import { Button } from "@/../components/ui/button";
import { Phone, Check, X, Calendar, ArrowRight } from "lucide-react";
import { getCommunityInfo } from "@/lib/communityData";
import ScrollAnimation from "@/../components/scroll-animation";

export const metadata: Metadata = {
  title: "Pros and Cons of Living in Sun City Summerlin (2025 Expert Guide)",
  description:
    "An honest look at Sun City Summerlin pros and cons from Dr. Jan Duffy, a 30-year Las Vegas real estate expert. What you need to know before buying a home in this 55+ community.",
  alternates: {
    canonical: "https://www.suncityvegas.com/blog/pros-and-cons-sun-city-summerlin",
  },
  openGraph: {
    title: "Pros and Cons of Living in Sun City Summerlin (2025 Expert Guide)",
    description:
      "An honest assessment of Sun City Summerlin from a 30-year Las Vegas real estate expert. Learn what residents love—and what to consider—before buying.",
    url: "https://www.suncityvegas.com/blog/pros-and-cons-sun-city-summerlin",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-26T00:00:00Z",
    modifiedTime: "2025-01-26T00:00:00Z",
    authors: ["Dr. Jan Duffy"],
    images: [
      {
        url: "https://www.suncityvegas.com/images/blog/pros-cons-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin community overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pros and Cons of Living in Sun City Summerlin (2025 Expert Guide)",
    description: "An honest assessment from a 30-year Las Vegas real estate expert.",
    images: ["https://www.suncityvegas.com/images/blog/pros-cons-hero.jpg"],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

// FAQ Schema for this page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Sun City Summerlin a good investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sun City Summerlin homes tend to hold value better than other parts of Las Vegas due to the community's established reputation, guard-gated security, and world-class amenities. The location in Summerlin, one of Las Vegas' most desirable master-planned communities, also contributes to strong property values. Average home prices range from $275,000 to $1,200,000+, with the current average around $450,000.",
      },
    },
    {
      "@type": "Question",
      name: "What's the average home price in Sun City Summerlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average home price in Sun City Summerlin is currently around $450,000, with prices ranging from $275,000 for smaller homes to $1,200,000+ for premium properties with golf course views or extensive upgrades. The price range reflects the variety of floor plans available, from 1,000 sq ft townhomes to 3,500+ sq ft single-family homes.",
      },
    },
    {
      "@type": "Question",
      name: "What are the HOA fees at Sun City Summerlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HOA fees are approximately $165 per month (subject to change). This fee covers access to all recreation centers, pools, fitness facilities, guard-gated security, landscaping of common areas, and community events. Golf course access requires a separate membership. There are no SIDs or LIDs (special improvement districts or local improvement districts) in Sun City Summerlin.",
      },
    },
    {
      "@type": "Question",
      name: "What are the age restrictions at Sun City Summerlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sun City Summerlin is a 55+ active adult community. At least one resident in each home must be 55 years or older. Residents under 55 can live in the community if they're married to someone 55+, but children and grandchildren can only visit temporarily—they cannot be permanent residents.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sun City Summerlin safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Sun City Summerlin is very safe. The community is guard-gated with 24/7 security at all entrances. The 55+ age restriction, combined with the guard-gated access, creates a secure environment. The community is located in Summerlin, which is consistently ranked as one of the safest areas in Las Vegas.",
      },
    },
    {
      "@type": "Question",
      name: "What are the biggest drawbacks of living in Sun City Summerlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main considerations are: (1) Homes are older (built 1989-1999), so you may need to budget for updates; (2) The elevated location brings wind, especially in spring; (3) Age restrictions mean multigenerational living isn't possible; (4) You'll need a car for most activities outside the community; (5) HOA rules govern landscaping and exterior modifications; and (6) Summers are hot (100°F+), though the elevation makes it 5-10 degrees cooler than the valley floor.",
      },
    },
  ],
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pros and Cons of Living in Sun City Summerlin (2025 Expert Guide)",
  description:
    "An honest look at Sun City Summerlin pros and cons from Dr. Jan Duffy, a 30-year Las Vegas real estate expert.",
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
  image: "https://www.suncityvegas.com/images/blog/pros-cons-hero.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.suncityvegas.com/blog/pros-and-cons-sun-city-summerlin",
  },
};

export default function ProsConsPage() {
  const communityInfo = getCommunityInfo();

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Pros and Cons of Sun City Summerlin", href: "/blog/pros-and-cons-sun-city-summerlin" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
                Expert Guide
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair">
                Pros and Cons of Living in Sun City Summerlin: An Expert's Honest Take
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <time dateTime="2025-01-26">January 26, 2025</time>
                </div>
                <span>•</span>
                <span>By Dr. Jan Duffy</span>
                <span>•</span>
                <span>12 min read</span>
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
                  src="/images/blog/pros-cons-hero.jpg"
                  alt="Sun City Summerlin community with Red Rock Canyon views"
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
                    After helping over 500 families find homes in Las Vegas over 30 years, I've learned that Sun City Summerlin isn't right for everyone. Here's my honest assessment of who thrives here—and who might be happier elsewhere.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Sun City Summerlin is Las Vegas' largest and most established 55+ community, with 7,781 homes built by Del Webb from 1989 to 2002. It's a place where active adults come to live their best retirement years, surrounded by world-class amenities and like-minded neighbors.
                  </p>
                  <p className="text-lg leading-relaxed">
                    But like any major life decision, buying a home here comes with trade-offs. In this comprehensive guide, I'll give you the unvarnished truth about what makes Sun City Summerlin special—and what you should know before making the move.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Table of Contents */}
              <ScrollAnimation delay={100}>
                <nav className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 mb-12 border-l-4 border-[#8B5E3C]">
                  <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">Table of Contents</h2>
                  <ol className="space-y-2 text-[#2D2A26]">
                    <li>
                      <a href="#overview" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">
                        1. Sun City Summerlin at a Glance
                      </a>
                    </li>
                    <li>
                      <a href="#pros" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">
                        2. The Pros: Why 20,000+ People Call Sun City Summerlin Home
                      </a>
                    </li>
                    <li>
                      <a href="#cons" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">
                        3. The Cons: What You Should Know Before Buying
                      </a>
                    </li>
                    <li>
                      <a href="#who-fits" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">
                        4. Who Sun City Summerlin is Perfect For
                      </a>
                    </li>
                    <li>
                      <a href="#who-doesnt" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">
                        5. Who Should Look Elsewhere
                      </a>
                    </li>
                    <li>
                      <a href="#verdict" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">
                        6. My Verdict: Is Sun City Summerlin Worth It?
                      </a>
                    </li>
                  </ol>
                </nav>
              </ScrollAnimation>

              {/* Quick Overview */}
              <ScrollAnimation delay={200}>
                <section id="overview" className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Sun City Summerlin at a Glance
                  </h2>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 mb-6">
                    <ul className="space-y-3 text-[#2D2A26]">
                      <li className="flex items-start gap-3">
                        <span className="font-semibold text-[#8B5E3C] min-w-[140px]">Built:</span>
                        <span>1989-2002 by Del Webb</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-semibold text-[#8B5E3C] min-w-[140px]">Homes:</span>
                        <span>7,781 (largest 55+ community in Nevada)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-semibold text-[#8B5E3C] min-w-[140px]">Size:</span>
                        <span>2,400 acres in Summerlin master-planned community</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-semibold text-[#8B5E3C] min-w-[140px]">Age Requirement:</span>
                        <span>55+ (at least one resident must be 55+)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-semibold text-[#8B5E3C] min-w-[140px]">HOA Fees:</span>
                        <span>~$165/month (includes access to all amenities)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-semibold text-[#8B5E3C] min-w-[140px]">Home Prices:</span>
                        <span>{communityInfo.priceRange}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-semibold text-[#8B5E3C] min-w-[140px]">Guard-Gated:</span>
                        <span>Yes, 24/7 security at all entrances</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-semibold text-[#8B5E3C] min-w-[140px]">Golf Courses:</span>
                        <span>3 championship courses (Palm Valley, Highland Falls, Eagle Crest)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-semibold text-[#8B5E3C] min-w-[140px]">Recreation Centers:</span>
                        <span>3 centers totaling 125,000+ sq ft</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed text-[#2D2A26]">
                    Sun City Summerlin was Del Webb's first 55+ community in Las Vegas, setting the standard for active adult living in the region. Today, it remains one of the most sought-after communities, known for its mature landscaping, established amenities, and vibrant social scene.
                  </p>
                </section>
              </ScrollAnimation>

              {/* PROS Section */}
              <ScrollAnimation delay={300}>
                <section id="pros" className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 font-playfair">
                    The Pros: Why 20,000+ People Call Sun City Summerlin Home
                  </h2>

                  <div className="space-y-8">
                    {/* Pro 1 */}
                    <div className="bg-white border-l-4 border-[#5D7A5D] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D]" />
                        1. Unmatched Amenities (Worth Over $50M)
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26] mb-4">
                        Four community centers totaling 125,000+ square feet. Three championship golf courses. 80+ clubs and activities. An Olympic-sized pool. Multiple fitness centers. Tennis courts, pickleball courts, bocce ball courts. The list goes on.
                      </p>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        What's remarkable is that all of this is included in your HOA fee of approximately $165 per month. To replicate these amenities privately would cost millions. Here, you get resort-style living without the resort prices.
                      </p>
                    </div>

                    {/* Pro 2 */}
                    <div className="bg-white border-l-4 border-[#5D7A5D] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D]" />
                        2. Three Championship Golf Courses
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26] mb-4">
                        Golf Summerlin features three player-friendly, yet challenging courses designed by Hall-of-Famer Billy Casper and master course-planner Greg Nash. Palm Valley and Highland Falls are 18-hole championship courses, while Eagle Crest is an executive course perfect for quick rounds.
                      </p>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        Highland Falls is a two-time winner of the Las Vegas Review-Journal Best of Las Vegas award for its incredible views. The panoramic view of Las Vegas at the 14th hole has been featured in major publications and used as the backdrop for national ad campaigns.
                      </p>
                    </div>

                    {/* Pro 3 */}
                    <div className="bg-white border-l-4 border-[#5D7A5D] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D]" />
                        3. Nevada Tax Advantages
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26] mb-4">
                        No state income tax means your retirement dollars stretch further. If you're coming from California, which has one of the highest state income tax rates in the country, moving to Nevada can put thousands of dollars back in your pocket each year.
                      </p>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        Nevada also has relatively low property taxes, and there's no inheritance tax or estate tax. For retirees planning to pass wealth to their heirs, this is another significant advantage.
                      </p>
                    </div>

                    {/* Pro 4 */}
                    <div className="bg-white border-l-4 border-[#5D7A5D] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D]" />
                        4. Prime Location in Summerlin
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26] mb-4">
                        Sun City Summerlin is located in the prestigious Summerlin master-planned community, just 10 minutes from Downtown Summerlin (shopping, dining, entertainment), 15 minutes from the Las Vegas Strip, and 20 minutes from Harry Reid International Airport.
                      </p>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        The community enjoys proximity to Red Rock Canyon National Conservation Area, offering stunning mountain views and easy access to hiking and outdoor recreation. Shopping, dining, and medical facilities are all within minutes.
                      </p>
                    </div>

                    {/* Pro 5 */}
                    <div className="bg-white border-l-4 border-[#5D7A5D] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D]" />
                        5. Cooler Temperatures
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        At approximately 3,000 feet elevation, Sun City Summerlin is 5-10 degrees cooler than the Las Vegas valley floor. This makes a significant difference during the hot summer months, making outdoor activities more comfortable and reducing cooling costs.
                      </p>
                    </div>

                    {/* Pro 6 */}
                    <div className="bg-white border-l-4 border-[#5D7A5D] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D]" />
                        6. Strong Sense of Community
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26] mb-4">
                        With 80+ clubs and organizations, from hiking to ceramics to line dancing, there's always something happening. The community hosts regular events like socials, holiday celebrations, golf tournaments, and educational seminars.
                      </p>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        Residents consistently tell me they made more friends in their first month at Sun City Summerlin than they did in years at their previous neighborhoods. Everyone here chose this life on purpose—they're active, social, and ready to make the most of their retirement years.
                      </p>
                    </div>

                    {/* Pro 7 */}
                    <div className="bg-white border-l-4 border-[#5D7A5D] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D]" />
                        7. Low HOA Fees for What You Get
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        At approximately $165 per month, the HOA fee is remarkably low considering everything it includes: access to all recreation centers, pools, fitness facilities, guard-gated security, landscaping of common areas, and community events. Compare this to other 55+ communities where fees can be $200-300+ per month for fewer amenities.
                      </p>
                    </div>

                    {/* Pro 8 */}
                    <div className="bg-white border-l-4 border-[#5D7A5D] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D]" />
                        8. Single-Story Living
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        All 7,781 homes are single-story, designed specifically for active adults who want maintenance-free living without sacrificing space or style. No stairs to worry about as you age, making it easier to age in place.
                      </p>
                    </div>

                    {/* Pro 9 */}
                    <div className="bg-white border-l-4 border-[#5D7A5D] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D]" />
                        9. Guard-Gated Security
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        Guard-gated entrances with 24/7 security provide peace of mind. The 55+ age restriction, combined with guard-gated access, creates a secure environment. The community is located in Summerlin, which is consistently ranked as one of the safest areas in Las Vegas.
                      </p>
                    </div>

                    {/* Pro 10 */}
                    <div className="bg-white border-l-4 border-[#5D7A5D] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D]" />
                        10. Red Rock Canyon Views
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        Many homes feature stunning views of Red Rock Canyon National Conservation Area and the surrounding mountains. These views are a daily reminder of the natural beauty that surrounds the community, and homes with views tend to hold their value exceptionally well.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* CONS Section */}
              <ScrollAnimation delay={400}>
                <section id="cons" className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 font-playfair">
                    The Cons: What You Should Know Before Buying
                  </h2>

                  <div className="space-y-8">
                    {/* Con 1 */}
                    <div className="bg-white border-l-4 border-[#C4A574] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <X className="w-6 h-6 text-[#C4A574]" />
                        1. Older Homes (Built 1989-2002)
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26] mb-4">
                        Most homes are 25-35 years old. That means older HVAC systems, original roofing on some homes, and potentially dated interiors. You'll likely want to budget for updates, especially if you're buying a home that hasn't been renovated recently.
                      </p>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        However, many homes have been beautifully updated by previous owners. The key is working with an agent who knows which homes have been well-maintained and which need work. I always recommend a thorough home inspection to identify any issues before you buy.
                      </p>
                    </div>

                    {/* Con 2 */}
                    <div className="bg-white border-l-4 border-[#C4A574] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <X className="w-6 h-6 text-[#C4A574]" />
                        2. Wind
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        The elevated location that gives you cooler temps also brings wind. Spring months (March through May) can be particularly gusty, with winds sometimes reaching 20-30 mph. This is something to consider if you're sensitive to wind or plan to spend a lot of time outdoors during those months.
                      </p>
                    </div>

                    {/* Con 3 */}
                    <div className="bg-white border-l-4 border-[#C4A574] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <X className="w-6 h-6 text-[#C4A574]" />
                        3. Age Restriction
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26] mb-4">
                        At least one resident must be 55+. Grandkids can visit but can't live with you long-term. This isn't ideal if you need multigenerational living or want to have adult children or grandchildren as permanent residents.
                      </p>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        However, for many buyers, this is actually a pro—it ensures the community maintains its active adult character and that amenities are designed for your lifestyle, not for families with young children.
                      </p>
                    </div>

                    {/* Con 4 */}
                    <div className="bg-white border-l-4 border-[#C4A574] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <X className="w-6 h-6 text-[#C4A574]" />
                        4. Driving Required
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        This is suburban Las Vegas. You'll need a car for groceries, medical appointments, and most activities outside the community. While there are some amenities within walking distance, this isn't a walkable urban environment. If you're looking for a car-free lifestyle, Sun City Summerlin isn't the right fit.
                      </p>
                    </div>

                    {/* Con 5 */}
                    <div className="bg-white border-l-4 border-[#C4A574] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <X className="w-6 h-6 text-[#C4A574]" />
                        5. HOA Rules
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        Like any HOA community, there are rules about landscaping, parking, exterior modifications, and more. Some find this restrictive. However, most residents appreciate that these rules help maintain property values and the community's appearance. The key is understanding the rules before you buy so there are no surprises.
                      </p>
                    </div>

                    {/* Con 6 */}
                    <div className="bg-white border-l-4 border-[#C4A574] pl-6 py-4">
                      <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <X className="w-6 h-6 text-[#C4A574]" />
                        6. Desert Climate
                      </h3>
                      <p className="text-lg leading-relaxed text-[#2D2A26]">
                        Summers are hot (100°F+). If you hate heat, the June-August months might keep you indoors during the day. However, the elevation makes it 5-10 degrees cooler than the valley floor, and many residents adapt by doing outdoor activities in the early morning or evening. The other nine months of the year are generally beautiful.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Who Fits Section */}
              <ScrollAnimation delay={500}>
                <section id="who-fits" className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Sun City Summerlin is Perfect For...
                  </h2>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                    <ul className="space-y-4 text-lg text-[#2D2A26]">
                      <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">Active retirees</strong> who want resort-style amenities without the resort prices</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">Golfers</strong> who want multiple championship courses at their doorstep</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">Californians</strong> escaping high taxes and seeking better value for their home equity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">Social butterflies</strong> who love clubs, activities, and making new friends</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">People who value security</strong> and appreciate guard-gated communities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">Those who want single-story living</strong> and the ability to age in place</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-[#5D7A5D] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">Buyers who prioritize lifestyle</strong> over having the newest construction</span>
                      </li>
                    </ul>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Who Doesn't Fit Section */}
              <ScrollAnimation delay={600}>
                <section id="who-doesnt" className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Sun City Summerlin Might NOT Be Right For...
                  </h2>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                    <ul className="space-y-4 text-lg text-[#2D2A26]">
                      <li className="flex items-start gap-3">
                        <X className="w-6 h-6 text-[#C4A574] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">Those who want brand-new construction</strong> - all homes are 25-35 years old</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-6 h-6 text-[#C4A574] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">Multigenerational families</strong> - age restrictions prevent permanent residents under 55</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-6 h-6 text-[#C4A574] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">People who hate HOAs</strong> - there are rules governing landscaping, parking, and exterior modifications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-6 h-6 text-[#C4A574] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">Those who can't tolerate heat</strong> - summers are hot, even with the elevation advantage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-6 h-6 text-[#C4A574] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">People who want to walk everywhere</strong> - you'll need a car for most activities outside the community</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-6 h-6 text-[#C4A574] flex-shrink-0 mt-1" />
                        <span><strong className="text-[#8B5E3C]">Those who dislike wind</strong> - spring months can be gusty due to the elevated location</span>
                      </li>
                    </ul>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Verdict Section */}
              <ScrollAnimation delay={700}>
                <section id="verdict" className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    My Verdict: Is Sun City Summerlin Worth It?
                  </h2>
                  <div className="bg-gradient-to-r from-[#8B5E3C] to-[#5D7A5D] text-white rounded-lg p-8 md:p-12">
                    <p className="text-xl md:text-2xl leading-relaxed mb-6 font-semibold">
                      After 30 years helping people find homes in Las Vegas, I can say this: Sun City Summerlin delivers exceptional value for active adults who want a vibrant, amenity-rich lifestyle. The pros significantly outweigh the cons for most buyers.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed mb-6">
                      The key is knowing what you're getting. It's an established community with older homes but world-class amenities. If you prioritize lifestyle over having the newest construction, Sun City Summerlin is hard to beat.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed">
                      The community has matured beautifully. The landscaping is established. The amenities are proven. The social scene is vibrant. And the location in Summerlin means you're in one of Las Vegas' most desirable areas.
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
                        Is Sun City Summerlin a good investment?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Yes. Sun City Summerlin homes tend to hold value better than other parts of Las Vegas due to the community's established reputation, guard-gated security, and world-class amenities. The location in Summerlin, one of Las Vegas' most desirable master-planned communities, also contributes to strong property values. Average home prices range from $275,000 to $1,200,000+, with the current average around $450,000.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        What's the average home price?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        The average home price in Sun City Summerlin is currently around $450,000, with prices ranging from $275,000 for smaller homes to $1,200,000+ for premium properties with golf course views or extensive upgrades. The price range reflects the variety of floor plans available, from 1,000 sq ft townhomes to 3,500+ sq ft single-family homes.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        What are the HOA fees?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        HOA fees are approximately $165 per month (subject to change). This fee covers access to all recreation centers, pools, fitness facilities, guard-gated security, landscaping of common areas, and community events. Golf course access requires a separate membership. There are no SIDs or LIDs (special improvement districts or local improvement districts) in Sun City Summerlin.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        What are the age restrictions?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Sun City Summerlin is a 55+ active adult community. At least one resident in each home must be 55 years or older. Residents under 55 can live in the community if they're married to someone 55+, but children and grandchildren can only visit temporarily—they cannot be permanent residents.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Is Sun City Summerlin safe?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Yes, Sun City Summerlin is very safe. The community is guard-gated with 24/7 security at all entrances. The 55+ age restriction, combined with the guard-gated access, creates a secure environment. The community is located in Summerlin, which is consistently ranked as one of the safest areas in Las Vegas.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        What are the biggest drawbacks?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        The main considerations are: (1) Homes are older (built 1989-2002), so you may need to budget for updates; (2) The elevated location brings wind, especially in spring; (3) Age restrictions mean multigenerational living isn't possible; (4) You'll need a car for most activities outside the community; (5) HOA rules govern landscaping and exterior modifications; and (6) Summers are hot (100°F+), though the elevation makes it 5-10 degrees cooler than the valley floor.
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
                      href="/blog/sun-city-summerlin-vs-sun-city-anthem"
                      className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20"
                    >
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        Sun City Summerlin vs Sun City Anthem
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        Compare two of Las Vegas' premier 55+ communities to find the right fit for you.
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
                        Sun City Summerlin HOA Fees 2025
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        Complete breakdown of what's included in your HOA fee and what costs extra.
                      </p>
                      <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link
                      href="/blog/sun-city-summerlin-floor-plans"
                      className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20"
                    >
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        All 32 Sun City Summerlin Floor Plans
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        Complete guide to every floor plan available in Sun City Summerlin.
                      </p>
                      <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link
                      href="/amenities"
                      className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20"
                    >
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        Explore Sun City Summerlin Amenities
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        Discover the world-class amenities that make Sun City Summerlin special.
                      </p>
                      <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                        View Amenities <ArrowRight className="w-4 h-4" />
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
                  Want to See Sun City Summerlin for Yourself?
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a private tour with Dr. Jan Duffy. We'll visit the community centers, golf courses, and homes that match your criteria. Get honest answers to all your questions.
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
