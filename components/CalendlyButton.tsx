'use client';

import { useState, useEffect, useCallback } from 'react';
import { Calendar, X } from 'lucide-react';

type CalendlyButtonProps = {
  url?: string;
  text?: string;
};

const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';

export default function CalendlyButton({
  url = 'https://calendly.com/drjanduffy/appointment',
  text = 'Schedule My Tour',
}: CalendlyButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('calendly-button-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('calendly-button-dismissed', 'true');
  };

  const handleClick = useCallback(() => {
    if (typeof window === 'undefined') return;
    const win = window as unknown as { Calendly?: { initPopupWidget: (o: { url: string }) => void } };
    if (win.Calendly) {
      win.Calendly.initPopupWidget({ url });
      return;
    }
    const existing = document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`);
    if (existing) {
      const check = () => {
        if (win.Calendly) win.Calendly.initPopupWidget({ url });
        else window.open(url, '_blank', 'noopener,noreferrer');
      };
      if (win.Calendly) check();
      else existing.addEventListener('load', check);
      return;
    }
    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.onload = () => win.Calendly?.initPopupWidget({ url });
    document.body.appendChild(script);
  }, [url]);

  if (isDismissed) {
    return null;
  }

  return (
    <>
      {/* Calendly script loaded on first click only (reduces TBT / 3rd-party impact) */}
      {/* Floating Button */}
      <div
        className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Desktop: Floating circular button */}
        <div className="hidden md:block relative">
          <button
            onClick={handleClick}
            className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            aria-label={text}
          >
            <Calendar className="w-5 h-5" />
            <span>{text}</span>
          </button>
          
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center shadow-md transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile: Full-width bar at bottom */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary shadow-lg">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <button
              onClick={handleClick}
              className="flex items-center gap-2 text-white font-semibold flex-1"
              aria-label={text}
            >
              <Calendar className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm md:text-base">{text}</span>
            </button>
            
            <button
              onClick={handleDismiss}
              className="text-white hover:text-gray-200 transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
