import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/../../components/navbar";
import Footer from "@/../../components/footer";
import Breadcrumbs from "@/../../components/Breadcrumbs";
import { Button } from "@/../../components/ui/button";
import { Phone, Calendar, ArrowRight, Check, Truck, FileText, Home, MapPin, TrendingUp, BookOpen } from "lucide-react";
import ScrollAnimation from "@/../../components/scroll-animation";

export const metadata: Metadata = {
  title: "Moving to Sun City Summerlin: Complete Relocation Guide (2026)",
  description:
    "Complete guide to moving to Sun City Summerlin. Learn about the moving process, what to expect, timeline, utilities setup, and tips for a smooth transition to your new 55+ community home.",
  alternates: {
    canonical: "https://www.suncityvegas.com/resources/moving-guide",
  },
  openGraph: {
    title: "Moving to Sun City Summerlin: Complete Relocation Guide (2026)",
    description:
      "Complete guide to moving to Sun City Summerlin, including timeline, utilities, and tips for a smooth transition.",
    url: "https://www.suncityvegas.com/resources/moving-guide",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/resources/moving-guide-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Moving to Sun City Summerlin relocation guide",
      },
    ],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function MovingGuidePage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Moving Guide", href: "/resources/moving-guide" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#5D7A5D] to-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <div className="flex justify-center mb-6">
                  <Truck className="w-16 h-16 text-[#D4AF37]" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                  Moving to Sun City Summerlin: Complete Guide
                </h1>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                  Your Step-by-Step Relocation Checklist
                </p>
                <p className="text-base md:text-lg text-gray-200">
                  Everything you need to know about moving to Sun City Summerlin, from timeline to utilities setup to getting settled in your new community.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-[#FDF8F3]">
                <Image
                  src="/images/resources/moving-guide-hero.jpg"
                  alt="Moving to Sun City Summerlin relocation guide"
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

        {/* Introduction */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <div className="prose prose-lg max-w-none text-[#2D2A26] space-y-4">
                  <p className="text-xl font-semibold text-[#8B5E3C]">
                    Moving to a new community is exciting, but it can also feel overwhelming. This comprehensive guide will help you navigate every step of your move to Sun City Summerlin.
                  </p>
                  <p>
                    Whether you're moving from across the country or just across Las Vegas, this guide covers everything you need to know: timeline, utilities, HOA setup, and tips for getting settled in your new 55+ community.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Moving Timeline
                </h2>
              </ScrollAnimation>
              <div className="space-y-6">
                {[
                  {
                    timeframe: "2-3 Months Before",
                    title: "Planning & Preparation",
                    tasks: [
                      "Research moving companies and get quotes",
                      "Start decluttering and organizing",
                      "Notify current utility companies of move date",
                      "Begin gathering important documents",
                      "Schedule home inspection and final walkthrough",
                    ],
                  },
                  {
                    timeframe: "1 Month Before",
                    title: "Final Preparations",
                    tasks: [
                      "Book moving company",
                      "Set up utilities for new home (electric, water, gas, internet)",
                      "Change address with USPS",
                      "Notify banks, credit cards, insurance companies",
                      "Transfer medical records",
                      "Register vehicle in Nevada (if moving from out of state)",
                    ],
                  },
                  {
                    timeframe: "2 Weeks Before",
                    title: "Last-Minute Details",
                    tasks: [
                      "Confirm moving date with movers",
                      "Pack non-essential items",
                      "Arrange for pet care if needed",
                      "Notify HOA of move-in date",
                      "Set up mail forwarding",
                    ],
                  },
                  {
                    timeframe: "Moving Day",
                    title: "The Big Day",
                    tasks: [
                      "Supervise movers",
                      "Do final walkthrough of new home",
                      "Take photos of condition for records",
                      "Test all utilities",
                      "Unpack essentials first",
                    ],
                  },
                  {
                    timeframe: "After Moving",
                    title: "Getting Settled",
                    tasks: [
                      "Complete HOA registration",
                      "Explore recreation centers and amenities",
                      "Join clubs and meet neighbors",
                      "Update driver's license (if from out of state)",
                      "Register to vote in Nevada",
                    ],
                  },
                ].map((phase, index) => (
                  <ScrollAnimation key={phase.timeframe} delay={index * 100}>
                    <div className="bg-white rounded-lg p-6 border-l-4 border-[#8B5E3C]">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-[#8B5E3C] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#8B5E3C]">{phase.timeframe}</p>
                          <h3 className="text-xl font-bold text-[#8B5E3C] font-playfair">
                            {phase.title}
                          </h3>
                        </div>
                      </div>
                      <ul className="space-y-2 ml-16">
                        {phase.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-2 text-[#2D2A26]">
                            <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Utilities Setup */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Utilities Setup
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Electricity",
                    provider: "NV Energy",
                    contact: "(702) 402-5555",
                    website: "nvenergy.com",
                    notes: "Set up service 1-2 weeks before move-in",
                  },
                  {
                    name: "Water & Sewer",
                    provider: "Las Vegas Valley Water District",
                    contact: "(702) 870-4194",
                    website: "lvvwd.com",
                    notes: "Required for all homes in Las Vegas",
                  },
                  {
                    name: "Natural Gas",
                    provider: "Southwest Gas",
                    contact: "(702) 876-7017",
                    website: "swgas.com",
                    notes: "If your home uses gas appliances",
                  },
                  {
                    name: "Internet & Cable",
                    provider: "Multiple options",
                    contact: "Varies by provider",
                    website: "Compare providers",
                    notes: "Cox, CenturyLink, and others available",
                  },
                ].map((utility, index) => (
                  <ScrollAnimation key={utility.name} delay={index * 100}>
                    <div className="bg-[#FDF8F3] rounded-lg p-6 border-l-4 border-[#5D7A5D]">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        {utility.name}
                      </h3>
                      <p className="text-[#2D2A26] mb-2">
                        <strong>Provider:</strong> {utility.provider}
                      </p>
                      <p className="text-[#2D2A26] mb-2">
                        <strong>Contact:</strong> {utility.contact}
                      </p>
                      <p className="text-sm text-[#2D2A26] opacity-75">{utility.notes}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOA Registration */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  HOA Registration & Access
                </h2>
              </ScrollAnimation>
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-md space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair flex items-center gap-3">
                    <FileText className="w-6 h-6" />
                    Register with HOA
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    After closing, you'll need to register with the Sun City Summerlin HOA. This process includes providing proof of ownership, completing resident registration forms, and setting up your HOA account for fee payments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair flex items-center gap-3">
                    <Home className="w-6 h-6" />
                    Gate Access
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    The HOA will issue gate access cards or codes for the guard-gated entrances. Make sure to register all vehicles and get visitor passes for family members who will visit regularly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    Recreation Center Access
                  </h3>
                  <p className="text-[#2D2A26] leading-relaxed">
                    Once registered, you'll have access to all three recreation centers, pools, fitness facilities, and community amenities. The HOA will provide information about hours, rules, and how to reserve facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips for Getting Settled */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-8 text-center font-playfair">
                  Tips for Getting Settled
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Explore the Community",
                    description:
                      "Take time to walk or drive around the community. Visit all three recreation centers, check out the golf courses, and get familiar with the layout.",
                  },
                  {
                    title: "Join Clubs Early",
                    description:
                      "One of the best ways to meet people is through clubs. Join a few that interest you right away to start building connections.",
                  },
                  {
                    title: "Attend Community Events",
                    description:
                      "Keep an eye on the community calendar and attend events. This is a great way to meet neighbors and feel part of the community.",
                  },
                  {
                    title: "Meet Your Neighbors",
                    description:
                      "Don't be shy about introducing yourself. Sun City Summerlin residents are friendly and welcoming to new neighbors.",
                  },
                  {
                    title: "Learn the Rules",
                    description:
                      "Familiarize yourself with HOA rules and regulations. Understanding guidelines about parking, landscaping, and modifications will help you avoid issues.",
                  },
                  {
                    title: "Take Advantage of Amenities",
                    description:
                      "Start using the recreation centers, pools, and fitness facilities. These amenities are included in your HOA fee, so make the most of them.",
                  },
                ].map((tip, index) => (
                  <ScrollAnimation key={tip.title} delay={index * 100}>
                    <div className="bg-[#FDF8F3] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                        {tip.title}
                      </h3>
                      <p className="text-[#2D2A26] leading-relaxed">{tip.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Documents */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-6 text-center font-playfair">
                  Important Documents to Have Ready
                </h2>
              </ScrollAnimation>
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
                <ul className="space-y-3 text-[#2D2A26]">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span>Closing documents and deed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span>Driver's license or state ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span>Social Security card</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span>Vehicle registration and title</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span>Insurance documents (home, auto, health)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span>Medical records and prescriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span>Bank statements and financial documents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4 font-playfair">Related Resources</h2>
                <ul className="space-y-2 text-[#2D2A26]">
                  <li>
                    <Link href="/resources/market-insights" className="inline-flex items-center gap-2 text-[#8B5E3C] hover:underline font-medium">
                      <TrendingUp className="w-4 h-4" /> Market Insights &amp; Trends
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/first-time-buyers" className="inline-flex items-center gap-2 text-[#8B5E3C] hover:underline font-medium">
                      <Home className="w-4 h-4" /> First-Time Homebuyer Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="inline-flex items-center gap-2 text-[#8B5E3C] hover:underline font-medium">
                      <BookOpen className="w-4 h-4" /> All Resources
                    </Link>
                  </li>
                </ul>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-playfair">
                  Need Help with Your Move?
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Dr. Jan Duffy can help you navigate the moving process and answer any questions about relocating to Sun City Summerlin.
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
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
