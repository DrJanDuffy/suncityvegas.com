import ScrollAnimation from "../scroll-animation";
import { TrendingUp, Home, DollarSign, Clock } from "lucide-react";

// Market statistics - update these with current data
const marketStats = {
  averagePrice: "$450K",
  averageDaysOnMarket: "45",
  activeListings: "25-35",
  pricePerSqFt: "$225",
  yearOverYearChange: "+5%",
};

export default function MarketStatsSection() {
  const stats = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      label: "Average Price",
      value: marketStats.averagePrice,
      description: "Current market average",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      label: "Days on Market",
      value: marketStats.averageDaysOnMarket,
      description: "Average time to sell",
    },
    {
      icon: <Home className="w-8 h-8" />,
      label: "Active Listings",
      value: marketStats.activeListings,
      description: "Homes currently for sale",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: "Market Trend",
      value: marketStats.yearOverYearChange,
      description: "Year-over-year change",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-4 text-center font-playfair">
              Current Sun City Summerlin Market
            </h2>
            <p className="text-lg text-[#2D2A26] text-center mb-12 max-w-2xl mx-auto">
              Stay informed with the latest market statistics for Sun City Summerlin homes.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-white rounded-lg p-6 md:p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center text-[#8B5E3C] mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-2 font-playfair">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-[#2D2A26] mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs md:text-sm text-[#2D2A26] opacity-75">
                    {stat.description}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#2D2A26] opacity-75">
              Market data updated regularly. For the most current information,{" "}
              <a href="tel:7027180042" className="text-[#8B5E3C] hover:text-[#5D7A5D] underline">
                contact Dr. Jan Duffy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
