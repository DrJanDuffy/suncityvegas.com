import type { Metadata } from 'next';
import Navbar from '@components/navbar';
import Footer from '@components/footer';
import Breadcrumbs from '@components/Breadcrumbs';
import ScrollAnimation from '@components/scroll-animation';
import { getAllTestimonials } from '@/lib/old-site-data';
import { Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Testimonials | Sun City Summerlin | Dr. Jan Duffy',
  description:
    'Read what our clients say about working with Dr. Jan Duffy to find their dream home in Sun City Summerlin, Las Vegas\' premier 55+ community.',
  alternates: {
    canonical: 'https://www.suncityvegas.com/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials | Sun City Summerlin | Dr. Jan Duffy',
    description:
      'Client reviews and testimonials about finding homes in Sun City Summerlin 55+ community.',
    url: 'https://www.suncityvegas.com/testimonials',
    siteName: 'Sun City Summerlin Homes for Sale | Dr. Jan Duffy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.suncityvegas.com/images/agent/dr-jan-duffy.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy, REALTOR®',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials | Sun City Summerlin | Dr. Jan Duffy',
    description: 'Client reviews about Sun City Summerlin homes.',
    images: ['https://www.suncityvegas.com/images/agent/dr-jan-duffy.jpg'],
  },
};

const testimonialsWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.suncityvegas.com/testimonials",
  name: "Client Testimonials | Sun City Summerlin | Dr. Jan Duffy",
  description:
    "Read what our clients say about working with Dr. Jan Duffy to find their dream home in Sun City Summerlin, Las Vegas' premier 55+ community.",
  url: "https://www.suncityvegas.com/testimonials",
};

export default function TestimonialsPage() {
  const testimonials = getAllTestimonials();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testimonialsWebPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Testimonials", href: "/testimonials" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Client Testimonials | Sun City Summerlin
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Read real testimonials from clients who found their dream home in
                Sun City Summerlin with Dr. Jan Duffy.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {testimonials.map((testimonial, index) => (
                  <ScrollAnimation key={testimonial.name} delay={index * 100}>
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-two hover:shadow-three transition-shadow h-full flex flex-col">
                      <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#8B5E3C] mb-4 opacity-50" />
                      <blockquote className="text-base md:text-lg text-[#2D2A26] leading-relaxed mb-6 flex-grow font-playfair italic">
                        &quot;{testimonial.text}&quot;
                      </blockquote>
                      <div className="border-t border-[#C4A574]/30 pt-4">
                        <p className="text-lg md:text-xl text-[#8B5E3C] font-semibold">
                          — {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Join these satisfied clients and work with Dr. Jan Duffy to find
                your perfect home in Sun City Summerlin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#2D2A26] rounded-md font-semibold transition-colors min-h-[48px] touch-manipulation"
                >
                  Schedule a Tour
                </a>
                <a
                  href="tel:7027180042"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-[#8B5E3C] transition-colors min-h-[48px] touch-manipulation"
                >
                  Call (702) 718-0042
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
