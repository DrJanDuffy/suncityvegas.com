import { Home, CheckCircle, DollarSign, Users } from "lucide-react";
import ScrollAnimation from "../scroll-animation";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay?: number;
}

function ValueCard({ icon, title, text, delay = 0 }: ValueCardProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-two hover:shadow-three transition-shadow h-full flex flex-col">
        <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#8B5E3C]/10 rounded-full mb-4 md:mb-6">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-3 md:mb-4 font-playfair">
          {title}
        </h3>
        <p className="text-base md:text-lg text-[#2D2A26] leading-relaxed flex-grow">
          {text}
        </p>
      </div>
    </ScrollAnimation>
  );
}

export default function ValuePropsSection() {
  const values = [
    {
      icon: <Home className="w-8 h-8 text-[#8B5E3C]" />,
      title: "7,779 Homes to Choose From",
      text: "Las Vegas' largest 55+ community offers incredible variety. Find your perfect home—from cozy to spacious, golf course views to mountain vistas.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#8B5E3C]" />,
      title: "World-Class Amenities",
      text: "4 championship golf courses. 3 recreation centers totaling 125,000+ sq ft. Multiple pools, tennis courts, pickleball, fitness centers, and 80+ clubs.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#8B5E3C]" />,
      title: "Keep More of Your Money",
      text: "Nevada has no state income tax. Low HOA fees (~$165/month) include access to all amenities. Your retirement dollars stretch further here.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#8B5E3C]" />,
      title: "Active, Social Lifestyle",
      text: "Everyone here chose this life on purpose. Join 80+ clubs, play golf year-round, and make lifelong friends in Las Vegas' most vibrant 55+ community.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              text={value.text}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
