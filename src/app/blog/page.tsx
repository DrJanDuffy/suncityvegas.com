import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import ScrollAnimation from "@components/scroll-animation";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Sun City Summerlin | Dr. Jan Duffy",
  description:
    "Read the latest news, tips, and insights about Sun City Summerlin, Las Vegas' premier 55+ community. Learn about active adult living, community events, and real estate tips.",
  alternates: {
    canonical: "https://www.suncityvegas.com/blog",
  },
  openGraph: {
    title: "Blog | Sun City Summerlin | Dr. Jan Duffy",
    description:
      "Community news, insights, and tips about Sun City Summerlin 55+ community and active adult living.",
    url: "https://www.suncityvegas.com/blog",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Sun City Summerlin | Dr. Jan Duffy",
    description: "Community news and insights about Las Vegas' premier 55+ community.",
    images: ["https://www.suncityvegas.com/images/hero/hero-bg.jpg"],
  },
};

// Sample blog posts - replace with actual content from CMS or API
const blogPosts = [
  {
    slug: "pros-and-cons-sun-city-summerlin",
    title: "Pros and Cons of Living in Sun City Summerlin (2026)",
    excerpt:
      "An honest look at Sun City Summerlin pros and cons from Dr. Jan Duffy, a 30-year Las Vegas real estate expert. What you need to know before buying a home in this 55+ community.",
    date: "2026-01-27",
    image: BLOG_CARD_IMAGE,
    category: "Pillar Guide",
  },
  {
    slug: "sun-city-summerlin-hoa-fees",
    title: "Sun City Summerlin HOA Fees 2025: Complete Breakdown",
    excerpt:
      "Complete guide to Sun City Summerlin HOA fees. Learn what's included in the ~$165/month fee, what costs extra, and how it compares to other 55+ communities in Las Vegas.",
    date: "2025-01-26",
    image: "/images/blog/hoa-fees-hero.jpg",
    category: "Financial Guide",
  },
  {
    slug: "sun-city-summerlin-vs-sun-city-anthem",
    title: "Sun City Summerlin vs Sun City Anthem: Which is Better? (2025)",
    excerpt:
      "Compare Sun City Summerlin and Sun City Anthem, two of Las Vegas' premier 55+ communities. Learn the differences in location, amenities, home prices, HOA fees, and lifestyle.",
    date: "2025-01-26",
    image: BLOG_CARD_IMAGE,
    category: "Community Comparison",
  },
  {
    slug: "sun-city-summerlin-vs-other-55-communities",
    title: "Sun City Summerlin vs Other Las Vegas 55+ Communities (2026)",
    excerpt:
      "Compare Sun City Summerlin to Aliante, Siena, and other Las Vegas 55+ communities. Location, amenities, HOA fees, and lifestyle from Dr. Jan Duffy.",
    date: "2026-01-27",
    image: BLOG_CARD_IMAGE,
    category: "Pillar Guide",
  },
  {
    slug: "what-55-buyers-spend-sun-city-summerlin",
    title: "What 55+ Buyers Actually Spend Each Month in Sun City Summerlin (2026)",
    excerpt:
      "Real monthly costs for 55+ buyers: HOA fees, utilities, property taxes, and more. Budget accurately with Dr. Jan Duffy.",
    date: "2026-01-27",
    image: "/images/blog/hoa-fees-hero.jpg",
    category: "Pillar Guide",
  },
  {
    slug: "selling-home-sun-city-summerlin",
    title: "Selling a Home in Sun City Summerlin: Timing, Pricing, and Updates (2026)",
    excerpt:
      "When to sell, how to price, and which updates actually pay off. Expert selling advice from Dr. Jan Duffy.",
    date: "2026-01-27",
    image: "/images/blog/blog-01.jpg",
    category: "Pillar Guide",
  },
  {
    slug: "sun-city-summerlin-floor-plans",
    title: "Sun City Summerlin Floor Plans: Complete Guide (2025)",
    excerpt:
      "Explore Sun City Summerlin floor plans from 1,200 to 3,500+ sq ft. Learn about single-story designs, popular models, and find the perfect home layout for your 55+ lifestyle.",
    date: "2025-01-26",
    image: BLOG_CARD_IMAGE,
    category: "Home Guide",
  },
  {
    slug: "california-to-sun-city-summerlin",
    title: "Moving from California to Sun City Summerlin: Complete Relocation Guide (2025)",
    excerpt:
      "Thinking of relocating from California to Sun City Summerlin? Learn about taxes, cost of living, climate, and why thousands of Californians choose Las Vegas for retirement.",
    date: "2025-01-26",
    image: "/images/blog/california-relocation-hero.jpg",
    category: "Relocation Guide",
  },
  {
    slug: "is-sun-city-summerlin-safe",
    title: "Is Sun City Summerlin Safe? Complete Safety Guide (2025)",
    excerpt:
      "Is Sun City Summerlin safe? Learn about crime rates, security measures, guard-gated access, and why this 55+ community is one of Las Vegas' safest neighborhoods.",
    date: "2025-01-26",
    image: BLOG_CARD_IMAGE,
    category: "Safety Guide",
  },
  {
    slug: "best-sun-city-summerlin-neighborhoods",
    title: "Best Neighborhoods in Sun City Summerlin: Complete Guide (2025)",
    excerpt:
      "Discover the best neighborhoods in Sun City Summerlin. Learn about different areas, home styles, price ranges, and find the perfect neighborhood for your 55+ lifestyle.",
    date: "2025-01-26",
    image: "/images/blog/neighborhoods-hero.jpg",
    category: "Neighborhood Guide",
  },
  {
    slug: "welcome-to-sun-city-summerlin",
    title: "Welcome to Sun City Summerlin",
    excerpt:
      "Discover what makes Sun City Summerlin Las Vegas' premier 55+ community. From 4 golf courses to 3 recreation centers, learn why so many active adults choose to call this place home.",
    date: "2024-01-15",
    image: "/images/blog/blog-01.jpg",
    category: "Community",
  },
  {
    slug: "golf-courses-at-sun-city-summerlin",
    title: "4 Championship Golf Courses at Sun City Summerlin",
    excerpt:
      "Explore the four championship golf courses at Sun City Summerlin: Highland Falls, Palm Valley, Eagle Crest, and Stonebridge. Each offers unique challenges with stunning Red Rock views.",
    date: "2024-01-10",
    image: BLOG_CARD_IMAGE,
    category: "Golf",
  },
  {
    slug: "nevada-tax-benefits-for-retirees",
    title: "Nevada Tax Benefits for Retirees",
    excerpt:
      "Nevada's lack of state income tax is a major draw for retirees. Discover how moving to Nevada can help your retirement dollars stretch further.",
    date: "2024-01-05",
    image: "/images/blog/blog-03.jpg",
    category: "Lifestyle",
  },
  {
    slug: "80-clubs-and-activities",
    title: "80+ Clubs and Activities at Sun City Summerlin",
    excerpt:
      "From golf leagues to book clubs, discover the wide variety of clubs and activities available at Sun City Summerlin. There's truly something for everyone.",
    date: "2023-12-20",
    image: BLOG_CARD_IMAGE,
    category: "Lifestyle",
  },
  {
    slug: "recreation-centers-guide",
    title: "Guide to Sun City Summerlin Recreation Centers",
    excerpt:
      "Explore the three world-class recreation centers: Mountain Shadows, Desert Vista, and Pinnacle. Together they offer over 125,000 sq ft of amenities.",
    date: "2023-12-15",
    image: "/images/blog/post-02.jpg",
    category: "Amenities",
  },
  {
    slug: "why-sun-city-summerlin",
    title: "Why Choose Sun City Summerlin?",
    excerpt:
      "Hear from residents about why they chose Sun City Summerlin. Learn what they love about the community, the lifestyle, and their neighbors.",
    date: "2023-12-10",
    image: BLOG_CARD_IMAGE,
    category: "Community",
  },
];

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

// Use existing hero image until blog-specific images are in public/images/blog/
const BLOG_CARD_IMAGE = "/images/hero/hero-bg.jpg";

function BlogCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
  index: number;
}) {
  return (
    <ScrollAnimation delay={index * 50}>
      <article className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow overflow-hidden h-full flex flex-col">
        <Link href={`/blog/${post.slug}`}>
          <div className="relative h-48 bg-[#FDF8F3]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={blurDataURL}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-4 left-4 bg-[#8B5E3C] text-white px-3 py-1 rounded text-sm font-semibold">
              {post.category}
            </div>
          </div>
        </Link>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair hover:text-[#5D7A5D] transition-colors">
              {post.title}
            </h3>
          </Link>
          <p className="text-[#2D2A26] leading-relaxed mb-4 flex-grow">
            {post.excerpt}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-[#8B5E3C] font-semibold hover:text-[#5D7A5D] transition-colors"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </ScrollAnimation>
  );
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Blog | Sun City Summerlin
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Stay informed about Sun City Summerlin, 55+ living tips, and
                life in Las Vegas.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-12 md:py-16 bg-[#FDF8F3]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4 font-playfair">
                Stay Updated
              </h2>
              <p className="text-lg text-[#2D2A26] mb-6">
                Want to receive updates about new blog posts and community news?
                Contact Dr. Jan Duffy to be added to our newsletter.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B5E3C] text-white rounded-md font-semibold hover:bg-[#8B5E3C]/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
