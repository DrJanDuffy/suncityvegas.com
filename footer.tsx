import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Site Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              Sun City Summerlin
            </h3>
            <p className="text-gray-300 mb-4">
              Las Vegas&apos; premier 55+ active adult community with 4 golf courses and 3 recreation centers.
            </p>
            {/* TODO: Add Equal Housing Opportunity logo */}
            <div className="mt-4 text-sm text-gray-400">
              Equal Housing Opportunity
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/homes-for-sale"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Homes for Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/lifestyle"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:7027180042"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (702) 718-0042
                </a>
              </li>
              <li>
                <a
                  href="mailto:DrDuffySells@SunCityVegas.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  DrDuffySells@SunCityVegas.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    9406 Del Webb Blvd
                    <br />
                    Las Vegas, NV 89134
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
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
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Sun City Summerlin. All rights
            reserved.
          </p>
          <p className="mt-2">
            Dr. Jan Duffy, REALTOR® | Berkshire Hathaway HomeServices Nevada
            Properties
          </p>
        </div>
      </div>
    </footer>
  );
}
