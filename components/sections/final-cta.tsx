"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Calendar } from "lucide-react";
import CalendlyInline from "../CalendlyInline";
import ScrollAnimation from "../scroll-animation";

/** Defer Calendly script/embed until section is in view or user clicks (avoids loading ~1.7MB Calendly+Stripe on initial paint). */
export default function FinalCTASection() {
  const [showCalendly, setShowCalendly] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setShowCalendly((v) => v || true);
      },
      { rootMargin: "200px", threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-20 bg-[#FDF8F3]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - CTA Text */}
            <ScrollAnimation>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair text-[#8B5E3C]">
                  Ready to See It For Yourself?
                </h2>
                <p className="text-base md:text-lg text-[#2D2A26] leading-relaxed mb-6">
                  Schedule a private tour with Dr. Jan Duffy. Walk the community.
                  Tour the golf courses and recreation centers. Step inside the homes. 
                  No pressure, no obligation—just the information you need to decide 
                  if Sun City Summerlin is your next chapter.
                </p>
                <div className="mb-6">
                  <a
                    href="tel:7027180042"
                    className="inline-flex items-center gap-2 text-lg md:text-xl font-semibold text-[#8B5E3C] hover:text-[#8B5E3C]/80 transition-colors"
                  >
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    (702) 718-0042
                  </a>
                </div>
                <p className="text-sm md:text-base text-[#2D2A26]">
                  Or schedule a tour directly using the calendar.
                </p>
              </div>
            </ScrollAnimation>

            {/* Right Column - Calendly Scheduler (lazy: only when in view or user clicks) */}
            <ScrollAnimation delay={100}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 font-playfair flex items-center gap-3">
                  <Calendar className="w-7 h-7" />
                  Schedule a Tour
                </h2>
                <p className="text-[#2D2A26] mb-6">
                  Pick a time that works for you and Dr. Jan Duffy will confirm your private tour of Sun City Summerlin.
                </p>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden min-h-[650px]">
                  {showCalendly ? (
                    <CalendlyInline
                      url="https://calendly.com/drjanduffy/showing"
                      height="650px"
                    />
                  ) : (
                    <div className="flex min-h-[650px] flex-col items-center justify-center gap-4 p-8 text-center">
                      <Calendar className="w-12 h-12 text-[#8B5E3C]/60" />
                      <p className="text-[#2D2A26] font-medium">
                        Choose a time that works for you
                      </p>
                      <button
                        type="button"
                        onClick={() => setShowCalendly(true)}
                        className="px-6 py-3 bg-[#8B5E3C] text-white font-semibold rounded-lg hover:bg-[#7a5335] transition-colors"
                      >
                        Show calendar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
