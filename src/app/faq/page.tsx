import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import Breadcrumbs from '@/../components/Breadcrumbs';
import FAQAccordion from '@/../components/FAQAccordion';
import { getAllQuestions } from '@/lib/faqData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Sun City Summerlin | Del Webb Las Vegas | Dr. Jan Duffy',
  description:
    'FAQs about Sun City Summerlin and Del Webb Las Vegas Summerlin: HOA fees, Sun City Summerlin home rentals, 55+ requirements, amenities, and more.',
  keywords: [
    'Sun City Summerlin FAQ',
    'Sun City Summerlin home rentals',
    'Del Webb Sun City Summerlin rentals',
    'HOA Sun City Del Webb',
    'Sun City Del Webb Las Vegas links magazine',
    'Vegas Strong Del Webb Sun City Summerlin applications',
  ],
  alternates: {
    canonical: 'https://www.suncityvegas.com/faq',
  },
  openGraph: {
    title: 'FAQ | Sun City Summerlin | Del Webb Las Vegas | Dr. Jan Duffy',
    description:
      'Answers about Sun City Summerlin, Del Webb Las Vegas Summerlin, HOA fees, rentals, and 55+ community life.',
    url: 'https://www.suncityvegas.com/faq',
    siteName: 'Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.suncityvegas.com/images/amenities/resort-pool.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sun City Summerlin FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Sun City Summerlin | Dr. Jan Duffy',
    description: 'Find answers to frequently asked questions about Sun City Summerlin 55+ community.',
    images: ['https://www.suncityvegas.com/images/amenities/resort-pool.jpeg'],
  },
};

// Generate FAQ schema from centralized data
const allQuestions = getAllQuestions();
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allQuestions.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: q.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />
      <main className="min-h-screen bg-white pt-16 md:pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Hero Section */}
        <section className="relative bg-[#FDF8F3] py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/amenities/resort-pool.jpeg"
              alt="Sun City Summerlin resort-style pool"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#8B5E3C] mb-4 font-playfair">
              Frequently Asked Questions | Sun City Summerlin
            </h1>
            <p className="text-xl text-[#2D2A26]">
              Everything you need to know about Sun City Summerlin
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main FAQ Accordion */}
              <div className="lg:col-span-2">
                <FAQAccordion showSearch={true} showExpandAll={true} allowMultiple={true} />
              </div>

              {/* Visual Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Golf Course Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/amenities/resort-pool.jpeg"
                    alt="Sun City Summerlin championship golf courses"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">4 Golf Courses</p>
                    <p className="text-xs opacity-90">Highland Falls, Palm Valley, Eagle Crest, Stonebridge</p>
                  </div>
                </div>

                {/* Recreation Center Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/amenities/clubhouse.jpeg"
                    alt="Sun City Summerlin recreation centers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">3 Recreation Centers</p>
                    <p className="text-xs opacity-90">125,000+ sq ft of amenities</p>
                  </div>
                </div>

                {/* Pool Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/amenities/resort-pool.jpeg"
                    alt="Sun City Summerlin pool and spa"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">Multiple Pools & Spas</p>
                    <p className="text-xs opacity-90">Indoor & outdoor at all rec centers</p>
                  </div>
                </div>

                {/* Community Stats */}
                <div className="bg-[#FDF8F3] p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold text-[#8B5E3C] mb-4 font-playfair">Quick Facts</h3>
                  <ul className="space-y-2 text-[#2D2A26]">
                    <li><strong>Homes:</strong> 7,779</li>
                    <li><strong>Built:</strong> 1989-2002</li>
                    <li><strong>HOA Fee:</strong> ~$165/month</li>
                    <li><strong>Clubs:</strong> 80+</li>
                    <li><strong>Age:</strong> 55+ (one resident)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-[#8B5E3C] py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-playfair">
              Still Have Questions?
            </h2>
            <p className="text-white/90 mb-8">
              Dr. Jan Duffy is here to help you find your perfect home in Sun City Summerlin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17027180043"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#8B5E3C] font-semibold rounded-lg hover:bg-gray-100 transition-colors min-h-[48px] touch-manipulation"
              >
                Call (702) 718-0043
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors min-h-[48px] touch-manipulation"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
