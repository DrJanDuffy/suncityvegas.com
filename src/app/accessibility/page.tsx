import type { Metadata } from "next";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement | Sun City Summerlin | WCAG 2.1 AA Compliant",
  description:
    "Sun City Summerlin website is committed to accessibility. Learn about our WCAG 2.1 AA compliance, accessibility features, and how to report issues.",
  alternates: {
    canonical: "https://www.suncityvegas.com/accessibility",
  },
  openGraph: {
    title: "Accessibility Statement | Sun City Summerlin",
    description:
      "Our commitment to website accessibility and WCAG 2.1 AA compliance for all visitors.",
    url: "https://www.suncityvegas.com/accessibility",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Accessibility Statement | Sun City Summerlin",
    description: "Our commitment to website accessibility for all visitors.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#FDF8F3] py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                Accessibility Statement
              </h1>
              <p className="text-lg md:text-xl text-[#2D2A26]">
                Our commitment to making Sun City Summerlin website accessible to everyone
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              {/* Commitment */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                  Our Commitment
                </h2>
                <p className="text-[#2D2A26] leading-relaxed mb-4">
                  Sun City Summerlin and Dr. Jan Duffy are committed to ensuring digital
                  accessibility for people with disabilities. We are continually improving the
                  user experience for everyone and applying the relevant accessibility standards to
                  achieve these goals.
                </p>
                <p className="text-[#2D2A26] leading-relaxed">
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level
                  AA standards, which explain how to make web content more accessible for people
                  with disabilities.
                </p>
              </div>

              {/* Standards */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                  Accessibility Standards
                </h2>
                <p className="text-[#2D2A26] leading-relaxed mb-6">
                  This website strives to meet WCAG 2.1 Level AA standards. Our accessibility
                  features include:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2D2A26]">
                      <strong>Keyboard Navigation:</strong> All interactive elements can be
                      accessed using only a keyboard
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2D2A26]">
                      <strong>Alt Text:</strong> All images include descriptive alternative text
                      for screen readers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2D2A26]">
                      <strong>Color Contrast:</strong> Text meets WCAG AA contrast ratio
                      requirements (4.5:1 for normal text, 3:1 for large text)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2D2A26]">
                      <strong>Semantic HTML:</strong> Proper heading hierarchy and semantic
                      markup for assistive technologies
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2D2A26]">
                      <strong>Form Labels:</strong> All form fields have associated labels for
                      screen readers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2D2A26]">
                      <strong>ARIA Labels:</strong> Interactive elements include appropriate ARIA
                      attributes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5D7A5D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2D2A26]">
                      <strong>Responsive Design:</strong> Website is fully accessible on mobile
                      devices and tablets
                    </span>
                  </li>
                </ul>
              </div>

              {/* Third-Party Content */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                  Third-Party Content
                </h2>
                <p className="text-[#2D2A26] leading-relaxed mb-4">
                  Some content on this website is provided by third-party services, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#2D2A26] mb-4">
                  <li>RealScout listing widgets</li>
                  <li>Calendly scheduling tool</li>
                  <li>YouTube video embeds (when available)</li>
                </ul>
                <p className="text-[#2D2A26] leading-relaxed">
                  While we strive to ensure all third-party content is accessible, we cannot
                  guarantee the accessibility of external services. We work with our partners to
                  maintain accessibility standards.
                </p>
              </div>

              {/* Feedback */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                  Feedback & Reporting Issues
                </h2>
                <p className="text-[#2D2A26] leading-relaxed mb-4">
                  We welcome your feedback on the accessibility of Sun City Summerlin website. If
                  you encounter any accessibility barriers, please let us know:
                </p>
                <div className="bg-[#FDF8F3] rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Mail className="w-5 h-5 text-[#8B5E3C] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[#8B5E3C] mb-2">Email Us</h3>
                      <a
                        href="mailto:jan@drjanduffy.com?subject=Accessibility%20Issue"
                        className="text-[#8B5E3C] hover:text-[#5D7A5D] transition-colors"
                      >
                        jan@drjanduffy.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#8B5E3C] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[#8B5E3C] mb-2">What to Include</h3>
                      <ul className="list-disc list-inside space-y-1 text-[#2D2A26] text-sm">
                        <li>The URL of the page with the issue</li>
                        <li>Description of the accessibility problem</li>
                        <li>Your contact information (optional)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-[#2D2A26] leading-relaxed">
                  We aim to respond to accessibility feedback within 5 business days.
                </p>
              </div>

              {/* Updates */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                  Ongoing Improvements
                </h2>
                <p className="text-[#2D2A26] leading-relaxed mb-4">
                  We regularly review and update our website to improve accessibility. This
                  statement was last updated on January 25, 2026.
                </p>
                <p className="text-[#2D2A26] leading-relaxed">
                  We are committed to maintaining and improving accessibility as technology and
                  standards evolve.
                </p>
              </div>

              {/* Contact CTA */}
              <div className="bg-[#C4A574]/20 border-l-4 border-[#C4A574] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                  Need Assistance?
                </h3>
                <p className="text-[#2D2A26] mb-4">
                  If you need assistance accessing information on this website, please contact Dr.
                  Jan Duffy:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+17027180043"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#8B5E3C] text-white font-semibold rounded-lg hover:bg-[#8B5E3C]/90 transition-colors"
                  >
                    Call (702) 718-0043
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#8B5E3C] text-[#8B5E3C] font-semibold rounded-lg hover:bg-[#8B5E3C]/10 transition-colors"
                  >
                    Contact Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
