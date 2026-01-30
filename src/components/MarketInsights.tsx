"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Calendar } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

interface MarketInsight {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category: string[];
}

export default function MarketInsights({ limit = 3 }: { limit?: number }) {
  const [insights, setInsights] = useState<MarketInsight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInsights() {
      try {
        const response = await fetch("/api/market-insights");
        const data = await response.json();
        if (data.items) {
          setInsights(data.items.slice(0, limit));
        }
      } catch (error) {
        console.error("Error fetching market insights:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchInsights();
  }, [limit]);

  if (loading) {
    return (
      <div className="bg-[#FDF8F3] rounded-lg p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (insights.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-[#8B5E3C]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] font-playfair">
                Latest Market Insights
              </h2>
            </div>
            <p className="text-lg text-[#2D2A26] mb-4 leading-relaxed">
              National trends that matter for 55+ buyers and sellers in Sun City Summerlin—mortgage rates, downsizing, and expert forecasts to help you decide when to buy or sell.
            </p>
            <p className="text-sm text-[#2D2A26]/80">
              Market news from{" "}
              <a
                href="https://www.simplifyingthemarket.com/?a=956758-ef2edda2f940e018328655620ea05f18"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#8B5E3C] hover:underline"
              >
                Simplifying the Market
              </a>
              .
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <ScrollAnimation key={insight.link} delay={index * 100}>
                <article className="bg-[#FDF8F3] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#8B5E3C]/20 h-full flex flex-col">
                  <div className="flex-1">
                    {insight.category && insight.category.length > 0 && (
                      <div className="mb-3">
                        <span className="inline-block bg-[#8B5E3C] text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {insight.category[0]}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="text-[#2D2A26] mb-4 leading-relaxed line-clamp-3">
                      {insight.description}
                    </p>
                    {insight.pubDate && (
                      <div className="flex items-center gap-2 text-sm text-[#2D2A26] opacity-75 mb-4">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={insight.pubDate}>
                          {new Date(insight.pubDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                    )}
                  </div>
                  <a
                    href={insight.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-2 text-[#8B5E3C] font-semibold hover:text-[#5D7A5D] transition-colors mt-auto group"
                    aria-label={`Read more: ${insight.title}`}
                  >
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </article>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={300}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/resources/market-insights"
                className="inline-flex items-center gap-2 text-[#8B5E3C] font-semibold hover:text-[#5D7A5D] transition-colors"
              >
                View all market insights <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <p className="text-[#2D2A26] mb-0 sm:mb-0">
                Want personalized insights?{" "}
                <Link href="/contact" className="text-[#8B5E3C] font-semibold hover:text-[#5D7A5D] transition-colors">
                  Contact Dr. Jan Duffy
                </Link>
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
