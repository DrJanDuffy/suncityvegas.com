'use client'
// Client component for interactive FAQ accordion

import { useState } from 'react';
import ScrollAnimation from '@components/scroll-animation';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { faqData } from '@/lib/faqData';

// Use FAQ data from centralized data file
const faqs = faqData;

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollAnimation delay={index * 30}>
      <div className="bg-white rounded-lg shadow-two overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#FDF8F3] transition-colors"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="font-semibold text-[#2D2A26] pr-4">{question}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[#8B5E3C] flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#8B5E3C] flex-shrink-0" />
          )}
        </button>
        <div
          className={cn(
            'overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-6 py-4 border-t border-[#C4A574]/20">
            <p className="text-[#2D2A26] leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default function FAQContent() {
  return (
    <>
      {/* FAQ Sections */}
      {faqs.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`py-12 md:py-16 ${
            categoryIndex % 2 === 0 ? 'bg-white' : 'bg-[#FDF8F3]'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-6 font-playfair">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <FAQItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Still Have Questions */}
      <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              Dr. Jan Duffy is here to help. Contact her directly for
              personalized answers to your questions about Sun City Summerlin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7022221964"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#2D2A26] rounded-md font-semibold hover:bg-[#D4AF37]/90 transition-colors"
              >
                Call (702) 222-1964
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-[#8B5E3C] transition-colors"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
