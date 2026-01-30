import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import { Phone, Calendar, ArrowRight, Shield, Lock, Users } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

export const metadata: Metadata = {
  title: "Is Sun City Summerlin Safe? Complete Safety Guide (2025)",
  description:
    "Is Sun City Summerlin safe? Learn about crime rates, security measures, guard-gated access, and why this 55+ community is one of Las Vegas' safest neighborhoods.",
  alternates: {
    canonical: "https://www.suncityvegas.com/blog/is-sun-city-summerlin-safe",
  },
  openGraph: {
    title: "Is Sun City Summerlin Safe? Complete Safety Guide (2025)",
    description:
      "Complete guide to safety and security at Sun City Summerlin, including crime rates and security measures.",
    url: "https://www.suncityvegas.com/blog/is-sun-city-summerlin-safe",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-26T00:00:00Z",
    modifiedTime: "2025-01-26T00:00:00Z",
    authors: ["Dr. Jan Duffy"],
    images: [
      {
        url: "https://www.suncityvegas.com/images/blog/safety-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin security and safety",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Sun City Summerlin Safe? Complete Safety Guide",
    description: "Learn about safety and security at Sun City Summerlin.",
    images: ["https://www.suncityvegas.com/images/blog/safety-hero.jpg"],
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
      name: "Is Sun City Summerlin safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Sun City Summerlin is considered one of the safest neighborhoods in Las Vegas. The community features 24/7 guard-gated security at all entrances, low crime rates, active neighborhood watch programs, and a 55+ age-restricted community that naturally reduces certain types of crime.",
      },
    },
    {
      "@type": "Question",
      name: "What security measures does Sun City Summerlin have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sun City Summerlin has 24/7 guard-gated security at all community entrances, requiring visitor check-in. The community also has active neighborhood watch programs, well-lit streets, and security patrols. All homes are within a gated community with controlled access.",
      },
    },
    {
      "@type": "Question",
      name: "What are the crime rates in Sun City Summerlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sun City Summerlin has significantly lower crime rates than the Las Vegas metro area average. Violent crime is extremely rare, and property crime rates are well below city and national averages. The 55+ age restriction and guard-gated security contribute to the low crime rates.",
      },
    },
  ],
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is Sun City Summerlin Safe? Complete Safety Guide (2025)",
  description: "Complete guide to safety and security at Sun City Summerlin.",
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
      url: "https://www.suncityvegas.com/images/logo/logo.jpg",
    },
  },
  image: "https://www.suncityvegas.com/images/blog/safety-hero.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.suncityvegas.com/blog/is-sun-city-summerlin-safe",
  },
};

export default function SafetyPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Is Sun City Summerlin Safe?", href: "/blog/is-sun-city-summerlin-safe" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
                Safety Guide
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair">
                Is Sun City Summerlin Safe? Complete Safety Guide
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <time dateTime="2025-01-26">January 26, 2025</time>
                </div>
                <span>•</span>
                <span>By Dr. Jan Duffy</span>
                <span>•</span>
                <span>8 min read</span>
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
                  src="/images/blog/safety-hero.jpg"
                  alt="Sun City Summerlin guard-gated security entrance"
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
        <div className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <ScrollAnimation>
                <div className="prose prose-lg max-w-none text-[#2D2A26] mb-12">
                  <p className="text-xl md:text-2xl font-semibold text-[#8B5E3C] leading-relaxed mb-6">
                    Safety is one of the top concerns for retirees considering a move. The good news? Sun City Summerlin is considered one of the safest neighborhoods in Las Vegas.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With 24/7 guard-gated security, low crime rates, and an active community, Sun City Summerlin provides peace of mind for residents. This guide covers everything you need to know about safety and security in the community.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Quick Answer */}
              <ScrollAnimation delay={100}>
                <section className="mb-16">
                  <div className="bg-gradient-to-r from-[#5D7A5D] to-[#8B5E3C] text-white rounded-lg p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <Shield className="w-12 h-12 text-[#D4AF37]" />
                      <h2 className="text-3xl md:text-4xl font-bold font-playfair">
                        Yes, Sun City Summerlin is Safe
                      </h2>
                    </div>
                    <p className="text-xl md:text-2xl leading-relaxed">
                      Sun City Summerlin is one of Las Vegas' safest neighborhoods, with 24/7 guard-gated security, low crime rates, and an active community that looks out for one another.
                    </p>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Security Measures */}
              <ScrollAnimation delay={200}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Security Measures
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#5D7A5D]">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Lock className="w-6 h-6" />
                        24/7 Guard-Gated Security
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        All community entrances are staffed 24 hours a day, 7 days a week by security guards. Visitors must check in and be approved before entering. This controlled access significantly reduces unauthorized entry.
                      </p>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#8B5E3C]">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                        <Users className="w-6 h-6" />
                        Neighborhood Watch
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Active neighborhood watch programs encourage residents to look out for one another. The close-knit community means neighbors know each other and notice anything out of the ordinary.
                      </p>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#C4A574]">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        Well-Lit Streets
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        All streets and common areas are well-lit, making the community safe for evening walks and reducing opportunities for crime. The HOA maintains excellent lighting throughout.
                      </p>
                    </div>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#5D7A5D]">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                        Security Patrols
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Regular security patrols monitor the community, providing an additional layer of protection. Security personnel are trained to respond to any concerns or incidents.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Crime Rates */}
              <ScrollAnimation delay={300}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Crime Rates
                  </h2>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8 mb-6">
                    <p className="text-lg font-semibold text-[#8B5E3C] mb-4">
                      Sun City Summerlin has significantly lower crime rates than the Las Vegas metro area average.
                    </p>
                    <div className="space-y-4 text-[#2D2A26]">
                      <div>
                        <h3 className="font-bold text-lg mb-2">Violent Crime</h3>
                        <p className="leading-relaxed">
                          Violent crime is extremely rare in Sun City Summerlin. The 55+ age restriction, guard-gated security, and active community all contribute to this low rate.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Property Crime</h3>
                        <p className="leading-relaxed">
                          Property crime rates are well below city and national averages. The guard-gated security and neighborhood watch programs help prevent theft and vandalism.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Overall Safety</h3>
                        <p className="leading-relaxed">
                          Sun City Summerlin consistently ranks as one of the safest neighborhoods in Las Vegas. Residents report feeling safe walking, exercising, and enjoying the community at all hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Why It's Safe */}
              <ScrollAnimation delay={400}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Why Sun City Summerlin is Safe
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white border-l-4 border-[#5D7A5D] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        1. Guard-Gated Security
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        The 24/7 guard-gated security is the most visible safety feature. All visitors must check in, and security personnel monitor all entrances. This controlled access is a major deterrent to crime.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-[#8B5E3C] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        2. 55+ Age Restriction
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        The age restriction means the community is populated by mature, responsible adults. This naturally reduces certain types of crime that are more common in communities with younger populations.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-[#C4A574] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        3. Active Community
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        With 80+ clubs and year-round activities, there are always people out and about. This "eyes on the street" effect naturally deters crime. Neighbors know each other and look out for one another.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-[#5D7A5D] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        4. Well-Maintained Infrastructure
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Well-lit streets, maintained landscaping, and clean common areas all contribute to safety. The HOA's commitment to maintenance shows that the community is cared for and monitored.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-[#8B5E3C] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        5. Location in Summerlin
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">
                        Sun City Summerlin is located in Summerlin, one of Las Vegas' most prestigious and safest master-planned communities. The surrounding area is also low-crime, adding an extra layer of safety.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Personal Safety Tips */}
              <ScrollAnimation delay={500}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                    Personal Safety Tips
                  </h2>
                  <div className="bg-[#FDF8F3] rounded-lg p-6 md:p-8">
                    <p className="text-lg text-[#2D2A26] leading-relaxed mb-6">
                      While Sun City Summerlin is very safe, it's always wise to practice good personal safety habits:
                    </p>
                    <ul className="space-y-3 text-[#2D2A26]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Lock your doors and windows when away from home</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Don't leave valuables visible in your car</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Get to know your neighbors and participate in neighborhood watch</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Report any suspicious activity to security or the HOA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Use the community's well-lit paths for evening walks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5D7A5D] font-bold">•</span>
                        <span>Keep emergency contact information readily available</span>
                      </li>
                    </ul>
                  </div>
                </section>
              </ScrollAnimation>

              {/* FAQ Section */}
              <ScrollAnimation delay={600}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 font-playfair">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Is Sun City Summerlin safe?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Yes, Sun City Summerlin is considered one of the safest neighborhoods in Las Vegas. The community features 24/7 guard-gated security at all entrances, low crime rates, active neighborhood watch programs, and a 55+ age-restricted community that naturally reduces certain types of crime.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        What security measures does Sun City Summerlin have?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Sun City Summerlin has 24/7 guard-gated security at all community entrances, requiring visitor check-in. The community also has active neighborhood watch programs, well-lit streets, and security patrols. All homes are within a gated community with controlled access.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        What are the crime rates in Sun City Summerlin?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Sun City Summerlin has significantly lower crime rates than the Las Vegas metro area average. Violent crime is extremely rare, and property crime rates are well below city and national averages. The 55+ age restriction and guard-gated security contribute to the low crime rates.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#8B5E3C] cursor-pointer font-playfair">
                        Can visitors enter Sun City Summerlin?
                      </summary>
                      <p className="mt-4 text-[#2D2A26] leading-relaxed">
                        Yes, visitors can enter Sun City Summerlin, but they must check in at the guard gate. Security will verify the visitor's destination and may contact the resident to confirm. This controlled access helps maintain security while allowing legitimate visitors.
                      </p>
                    </details>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Related Links */}
              <ScrollAnimation delay={700}>
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
                        Learn more about what makes Sun City Summerlin special, including safety and security.
                      </p>
                      <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link
                      href="/community"
                      className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20"
                    >
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                        Learn About the Community
                      </h3>
                      <p className="text-[#2D2A26] mb-4">
                        Discover more about Sun City Summerlin's amenities, location, and lifestyle.
                      </p>
                      <span className="text-[#8B5E3C] font-semibold flex items-center gap-2">
                        View Community <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </section>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white" aria-label="CTA">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <ScrollAnimation>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-playfair">
                    Experience Sun City Summerlin's Safety Firsthand
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                    Schedule a tour with Dr. Jan Duffy to see the guard-gated security, explore the community, and learn more about safety and security at Sun City Summerlin.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="tel:7027180042"
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#2D2A26] rounded-md font-semibold hover:bg-[#D4AF37]/90 transition-colors min-h-[48px] touch-manipulation"
                    >
                      <Phone className="w-5 h-5" />
                      Call/Text: (702) 718-0042
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
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replaceAll("<", "\\u003c"),
          }}
        />
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema).replaceAll("<", "\\u003c"),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
