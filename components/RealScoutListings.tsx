'use client';

import { useEffect, useState } from 'react';
import { Home, RefreshCw, ExternalLink } from 'lucide-react';

type RealScoutListingsProps = {
  h2Text?: string;
  className?: string;
  showStats?: boolean;
};

export default function RealScoutListings({ 
  h2Text = "Browse Available Homes for Sale in Sun City Summerlin",
  className = "",
  showStats = true
}: RealScoutListingsProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if RealScout widgets are available
    const checkLoaded = () => {
      if (typeof window !== 'undefined' && customElements.get('realscout-office-listings')) {
        setIsLoaded(true);
      }
    };
    
    // Check immediately and after a delay
    checkLoaded();
    const timer = setTimeout(checkLoaded, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // RealScout widget HTML - Agent ID: QWdlbnQtMjI1MDUw (Dr. Jan Duffy)
  // Sun City Summerlin ZIP: 89134, Price range: $300K-$1M+
  const widgetHtml = `<realscout-office-listings 
    agent-encoded-id="QWdlbnQtMjI1MDUw" 
    sort-order="NEWEST" 
    listing-status="For Sale" 
    property-types="SFR,MF,CONDO" 
    price-min="300000" 
    price-max="1200000"
  ></realscout-office-listings>`;

  return (
    <section id="listings" className={`py-12 md:py-16 lg:py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header with Live Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live MLS Listings - Updated Every 15 Minutes
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-4 font-playfair">
              {h2Text}
            </h2>
            <p className="text-[#2D2A26] max-w-2xl mx-auto">
              Browse current homes for sale in Sun City Summerlin, Las Vegas NV 89134. 
              Click any listing for full details, photos, and to schedule a showing.
            </p>
          </div>

          {/* Quick Stats */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#FDF8F3] rounded-lg p-4 text-center border border-[#C4A574]/20">
                <p className="text-2xl font-bold text-[#8B5E3C]">$350K-$900K+</p>
                <p className="text-sm text-[#2D2A26]">Price Range</p>
              </div>
              <div className="bg-[#FDF8F3] rounded-lg p-4 text-center border border-[#C4A574]/20">
                <p className="text-2xl font-bold text-[#8B5E3C]">1,000-3,000+</p>
                <p className="text-sm text-[#2D2A26]">Square Feet</p>
              </div>
              <div className="bg-[#FDF8F3] rounded-lg p-4 text-center border border-[#C4A574]/20">
                <p className="text-2xl font-bold text-[#8B5E3C]">55+</p>
                <p className="text-sm text-[#2D2A26]">Age Requirement</p>
              </div>
              <div className="bg-[#FDF8F3] rounded-lg p-4 text-center border border-[#C4A574]/20">
                <p className="text-2xl font-bold text-[#8B5E3C]">89134</p>
                <p className="text-sm text-[#2D2A26]">ZIP Code</p>
              </div>
            </div>
          )}

          {/* RealScout Widget Container */}
          <div className="bg-white rounded-lg shadow-lg border border-[#C4A574]/20 overflow-hidden">
            {/* Widget Header */}
            <div className="bg-[#8B5E3C] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5" />
                <span className="font-semibold">Sun City Summerlin Active Listings</span>
              </div>
              <a 
                href="https://drjanduffy.realscout.com/onboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-md transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Full Search
              </a>
            </div>
            
            {/* Loading State */}
            {!isLoaded && (
              <div className="flex items-center justify-center py-12 bg-[#FDF8F3]">
                <div className="text-center">
                  <RefreshCw className="w-8 h-8 text-[#8B5E3C] animate-spin mx-auto mb-3" />
                  <p className="text-[#2D2A26]">Loading live listings...</p>
                </div>
              </div>
            )}
            
            {/* RealScout Widget */}
            <div 
              className="p-4 md:p-6 min-h-[500px]"
              dangerouslySetInnerHTML={{ __html: widgetHtml }}
            />
          </div>

          {/* CTA Below Listings */}
          <div className="mt-8 bg-[#FDF8F3] rounded-lg p-6 md:p-8 border border-[#C4A574]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                  Don&apos;t See What You&apos;re Looking For?
                </h3>
                <p className="text-[#2D2A26]">
                  New listings hit the market daily. Set up alerts to be notified instantly when homes matching your criteria become available.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8B5E3C] text-white font-semibold rounded-lg hover:bg-[#8B5E3C]/90 transition-colors whitespace-nowrap"
                >
                  Set Up Alerts
                </a>
                <a
                  href="tel:7022221964"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#8B5E3C] text-[#8B5E3C] font-semibold rounded-lg hover:bg-[#8B5E3C]/5 transition-colors whitespace-nowrap"
                >
                  Call (702) 222-1964
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
