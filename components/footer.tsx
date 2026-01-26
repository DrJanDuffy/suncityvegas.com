import Link from "next/link";
import { Phone, Mail, MapPin, Youtube, Calendar, FileText, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D2A26] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Site Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair text-[#D4AF37]">
              Sun City Summerlin
            </h3>
            <p className="text-gray-300 mb-4">
              Las Vegas&apos; premier 55+ active adult community with 4 golf courses, 3 recreation centers, and 80+ clubs.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              Equal Housing Opportunity
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C4A574]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/homes-for-sale"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  Homes for Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/lifestyle"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/selling"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  Selling
                </Link>
              </li>
              <li>
                <Link
                  href="/home-value"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  Home Value
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  About Dr. Jan
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C4A574]">Contact Dr. Jan Duffy</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:7022221964"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (702) 222-1964
                </a>
              </li>
              <li>
                <a
                  href="mailto:jan@drjanduffy.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  jan@drjanduffy.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    9107 Del Webb Blvd
                    <br />
                    Las Vegas, NV 89134
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Resources & Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C4A574]">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://calendly.com/drjanduffy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a Tour
                </a>
              </li>
              <li>
                <Link
                  href="/homes-for-sale"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <span className="w-4 h-4">🏠</span>
                  Browse Homes
                </Link>
              </li>
              <li>
                <a
                  href="https://youtube.com/@drjanduffy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube Channel
                </a>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C4A574]">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/drjanduffy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/drjanduffy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/drjanduffy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@drjanduffy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C4A574]">Information</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <strong>License:</strong> S.0197614.LLC
              </li>
              <li>
                <strong>Brokerage:</strong> Berkshire Hathaway HomeServices
                Nevada Properties
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap-page"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>
            © 2026 Sun City Summerlin | Homes by Dr. Jan Duffy. All rights reserved.
          </p>
          <p className="mt-2">
            Berkshire Hathaway HomeServices Nevada Properties | License S.0197614.LLC
          </p>
          <p className="mt-2">
            <a href="tel:7022221964" className="text-[#D4AF37] hover:underline">(702) 222-1964</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
