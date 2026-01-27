import type { Metadata } from 'next';
import Navbar from '@/../components/navbar';
import Footer from '@/../components/footer';
import ScheduleTour from '@/../components/ScheduleTour';
import { Phone, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Schedule a Tour | Sun City Summerlin | Dr. Jan Duffy',
  description:
    'Schedule a private tour of Sun City Summerlin with Dr. Jan Duffy. Walk the community, explore the 4 golf courses and 3 rec centers, and see available homes.',
  alternates: {
    canonical: 'https://www.suncityvegas.com/schedule',
  },
  openGraph: {
    title: 'Schedule a Tour | Sun City Summerlin',
    description:
      'Book a private tour of Sun City Summerlin 55+ community in Las Vegas. Schedule online with Dr. Jan Duffy.',
    url: 'https://www.suncityvegas.com/schedule',
    siteName: 'Sun City Summerlin Homes for Sale | Dr. Jan Duffy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule a Tour | Sun City Summerlin',
    description: 'Book your private tour of Sun City Summerlin community.',
  },
};

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Calendar className="w-16 h-16 mx-auto mb-6 text-[#D4AF37]" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Schedule Your Private Tour | Sun City Summerlin
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                Experience Sun City Summerlin in person. Walk the community,
                explore the 4 golf courses and 3 recreation centers, and step inside the homes. No pressure,
                no obligation—just the information you need.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-[#FDF8F3] rounded-lg">
                  <Clock className="w-10 h-10 text-[#8B5E3C] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#8B5E3C] mb-2">Tour Duration</h3>
                  <p className="text-[#2D2A26]">60-90 minutes</p>
                </div>
                <div className="text-center p-6 bg-[#FDF8F3] rounded-lg">
                  <MapPin className="w-10 h-10 text-[#8B5E3C] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#8B5E3C] mb-2">Location</h3>
                  <p className="text-[#2D2A26]">Sun City Summerlin</p>
                  <p className="text-sm text-gray-600 mt-1">
                    9406 Del Webb Blvd, Las Vegas, NV 89134
                  </p>
                </div>
                <div className="text-center p-6 bg-[#FDF8F3] rounded-lg">
                  <Phone className="w-10 h-10 text-[#8B5E3C] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#8B5E3C] mb-2">Questions?</h3>
                  <a
                    href="tel:+17027180043"
                    className="text-[#D4AF37] hover:text-[#8B5E3C] transition-colors"
                  >
                    (702) 718-0043
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendly Inline Widget */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-three p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 text-center font-playfair">
                  Select Your Preferred Date & Time
                </h2>
                <p className="text-[#2D2A26] text-center mb-8">
                  Choose a time that works for you. Dr. Jan Duffy will confirm
                  your appointment and provide all the details you need.
                </p>
                <ScheduleTour inline={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                Prefer to Call or Email?
              </h2>
              <p className="text-[#2D2A26] mb-6">
                You can also reach out directly to schedule your tour or ask any
                questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+17027180043"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8B5E3C] text-white rounded-md font-semibold hover:bg-[#8B5E3C]/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 718-0043
                </a>
                <a
                  href="mailto:jan@drjanduffy.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#8B5E3C] text-[#8B5E3C] rounded-md font-semibold hover:bg-[#8B5E3C] hover:text-white transition-colors"
                >
                  Send Email
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
