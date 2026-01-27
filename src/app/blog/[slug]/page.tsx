import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { Button } from "@components/ui/button";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";

const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category: string;
    content: string;
  }
> = {
  "welcome-to-sun-city-summerlin": {
    title: "Welcome to Sun City Summerlin",
    excerpt:
      "Discover what makes Sun City Summerlin Las Vegas' premier 55+ community.",
    date: "2024-01-15",
    image: "/images/blog/welcome.jpg",
    category: "Community",
    content: `
      <p>Sun City Summerlin represents the gold standard in active adult living. Located in the Summerlin area of Las Vegas with stunning Red Rock Canyon views, this gated 55+ community offers everything you've been looking for in your retirement years.</p>
      
      <h2>What Makes It Special</h2>
      <p>With 7,779 single-family residences, 4 championship golf courses, and 3 recreation centers totaling over 125,000 square feet, Sun City Summerlin is designed specifically for active adults. Every detail, from the homes to the amenities, is crafted with your lifestyle in mind.</p>
      
      <p>The community is fully established with mature landscaping and all amenities operational. The pools are open year-round. The fitness centers are ready. The golf courses await your next round.</p>
      
      <h2>A Community That Gets It</h2>
      <p>What sets Sun City Summerlin apart isn't just the homes or amenities—it's the people. Everyone here chose this life on purpose. They're active, social, and ready to make the most of their retirement years.</p>
      
      <p>Whether you're joining a morning golf game, attending one of 80+ club meetings, or simply chatting with neighbors on a walk, you'll find that making connections comes naturally here.</p>
    `,
  },
  "golf-courses-at-sun-city-summerlin": {
    title: "4 Championship Golf Courses at Sun City Summerlin",
    excerpt:
      "Explore the four championship golf courses at Sun City Summerlin.",
    date: "2024-01-10",
    image: "/images/blog/single-story.jpg",
    category: "Golf",
    content: `
      <p>Sun City Summerlin is a golfer's paradise with four championship courses right in the community.</p>
      
      <h2>Highland Falls Golf Course</h2>
      <p>An 18-hole championship course designed by Billy Casper & Greg Nash. Known for its challenging layout and beautiful mountain views.</p>
      
      <h2>Palm Valley Golf Course</h2>
      <p>Another 18-hole championship course with stunning views of the Las Vegas valley and Red Rock Canyon. A favorite among residents.</p>
      
      <h2>Eagle Crest Golf Course</h2>
      <p>An 18-hole executive course perfect for a quick round. Great for improving your short game or enjoying a relaxed afternoon.</p>
      
      <h2>Stonebridge Golf Course</h2>
      <p>A 27-hole championship course that offers variety and challenge for golfers of all skill levels.</p>
      
      <p>With four courses at your doorstep, you'll never run out of options for your next round. Golf memberships are separate from HOA fees.</p>
    `,
  },
  "nevada-tax-benefits-for-retirees": {
    title: "Nevada Tax Benefits for Retirees",
    excerpt:
      "Nevada's lack of state income tax is a major draw for retirees.",
    date: "2024-01-05",
    image: "/images/blog/taxes.jpg",
    category: "Lifestyle",
    content: `
      <p>One of the biggest advantages of moving to Nevada? No state income tax. For retirees, this can mean significant savings.</p>
      
      <h2>The Financial Impact</h2>
      <p>If you're coming from a state like California, which has one of the highest state income tax rates in the country, moving to Nevada can put thousands of dollars back in your pocket each year.</p>
      
      <p>That's money you can use for travel, hobbies, or simply enjoying your retirement more. It's not just about the savings—it's about having more freedom to do what you want.</p>
      
      <h2>Other Tax Benefits</h2>
      <p>Nevada also has relatively low property taxes, and there's no inheritance tax or estate tax. For retirees planning to pass wealth to their heirs, this is another significant advantage.</p>
      
      <h2>More of Your Money Stays Yours</h2>
      <p>At Sun City Summerlin, with HOA fees of approximately $165 per month and access to world-class amenities, your housing costs are predictable and reasonable. Combined with Nevada's tax benefits, your retirement dollars go further here.</p>
    `,
  },
  "80-clubs-and-activities": {
    title: "80+ Clubs and Activities at Sun City Summerlin",
    excerpt:
      "Discover the wide variety of clubs and activities available at Sun City Summerlin.",
    date: "2023-12-20",
    image: "/images/blog/clubs.jpg",
    category: "Lifestyle",
    content: `
      <p>One of the best parts of living in a 55+ community is the built-in social network. At Sun City Summerlin, there are over 80 clubs and activities to choose from.</p>
      
      <h2>Something for Everyone</h2>
      <p>Whether you're interested in golf, fitness, arts, games, or learning, there's likely a club for you. Popular options include golf leagues, tennis clubs, book clubs, photography groups, dance classes, cooking classes, and much more.</p>
      
      <h2>Starting Your Own</h2>
      <p>Don't see what you're looking for? Many residents start their own clubs. The community is supportive of new groups and activities, making it easy to find others who share your interests.</p>
      
      <h2>Regular Events</h2>
      <p>Beyond clubs, the community hosts regular events like socials, holiday celebrations, golf tournaments, and educational seminars. These events are great opportunities to meet neighbors and get involved.</p>
      
      <p>The key is that you're never forced to participate—but the opportunities are always there when you want them.</p>
    `,
  },
  "recreation-centers-guide": {
    title: "Guide to Sun City Summerlin Recreation Centers",
    excerpt:
      "Explore the three world-class recreation centers at Sun City Summerlin.",
    date: "2023-12-15",
    image: "/images/blog/floor-plans.jpg",
    category: "Amenities",
    content: `
      <p>Sun City Summerlin offers three recreation centers totaling over 125,000 square feet of amenities. Here's what each one offers.</p>
      
      <h2>Mountain Shadows (45,000 sq ft)</h2>
      <p>Features a fitness center, indoor pool, racquetball courts, and arts & crafts rooms. A great all-around facility for fitness and creative pursuits.</p>
      
      <h2>Desert Vista (48,000 sq ft)</h2>
      <p>The largest recreation center with a fitness center, pool & spa, tennis courts, pickleball courts, and a beautiful ballroom for community events.</p>
      
      <h2>Pinnacle (34,000 sq ft)</h2>
      <p>Offers a fitness center, pool, tennis courts, bocce ball courts, and card rooms. Perfect for active recreation and social gatherings.</p>
      
      <h2>Access to All</h2>
      <p>Your HOA fees give you access to all three recreation centers and their amenities. No additional memberships required for pools, fitness centers, or courts.</p>
      
      <p>Dr. Jan Duffy can give you a tour of all three facilities to help you understand everything Sun City Summerlin has to offer.</p>
    `,
  },
  "why-sun-city-summerlin": {
    title: "Why Choose Sun City Summerlin?",
    excerpt:
      "Hear from residents about why they chose Sun City Summerlin.",
    date: "2023-12-10",
    image: "/images/blog/first-year.jpg",
    category: "Community",
    content: `
      <p>We spoke with several residents about why they chose Sun City Summerlin. Here's what they had to say.</p>
      
      <h2>The Location</h2>
      <p>"The location is perfect," one resident shared. "We have Red Rock Canyon views from our backyard, but we're still close to everything Vegas has to offer."</p>
      
      <h2>The Amenities</h2>
      <p>"Four golf courses and three rec centers? It's like living at a resort," another resident noted. "And the pools are heated year-round."</p>
      
      <h2>The Community</h2>
      <p>"I made more friends in my first month here than I did in years at my old neighborhood," said a third resident. "Everyone is so welcoming and active."</p>
      
      <h2>The Value</h2>
      <p>"For everything you get—the amenities, the location, the lifestyle—the HOA fees are incredibly reasonable. It's the best value in Las Vegas for 55+ living."</p>
      
      <p>When asked if they'd make the same choice again, every resident we spoke with said yes—and many wished they'd made the move sooner.</p>
    `,
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: "Blog Post Not Found | Sun City Summerlin",
    };
  }

  const baseUrl = "https://www.suncityvegas.com";
  const url = `${baseUrl}/blog/${params.slug}`;

  return {
    title: `${post.title} | Sun City Summerlin | Dr. Jan Duffy`,
    description: `${post.excerpt} Read more about Sun City Summerlin, Las Vegas' premier 55+ community.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | Sun City Summerlin | Dr. Jan Duffy`,
      description: post.excerpt,
      url: url,
      siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: ["Dr. Jan Duffy"],
      images: [
        {
          url: `${baseUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Sun City Summerlin | Dr. Jan Duffy`,
      description: post.excerpt,
      images: [`${baseUrl}${post.image}`],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  const postKeys = Object.keys(blogPosts);
  const currentIndex = postKeys.indexOf(params.slug);
  const prevPost = currentIndex > 0 ? blogPosts[postKeys[currentIndex - 1]] : null;
  const nextPost =
    currentIndex < postKeys.length - 1
      ? blogPosts[postKeys[currentIndex + 1]]
      : null;

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${params.slug}` },
        ]}
      />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-100 hover:text-[#D4AF37] transition-colors mb-6"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Blog
              </Link>
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold">{post.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-100">
                <Calendar className="w-5 h-5" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-three bg-[#FDF8F3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div
                className="prose prose-lg max-w-none text-[#2D2A26]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>

        {/* Navigation */}
        {(prevPost || nextPost) && (
          <section className="py-12 bg-[#FDF8F3]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {prevPost && (
                    <Link
                      href={`/blog/${postKeys[currentIndex - 1]}`}
                      className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow"
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <ArrowLeft className="w-4 h-4" />
                        Previous Post
                      </div>
                      <h3 className="font-bold text-[#8B5E3C] font-playfair">
                        {prevPost.title}
                      </h3>
                    </Link>
                  )}
                  {nextPost && (
                    <Link
                      href={`/blog/${postKeys[currentIndex + 1]}`}
                      className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow md:text-right"
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 md:justify-end">
                        Next Post
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-[#8B5E3C] font-playfair">
                        {nextPost.title}
                      </h3>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Experience Sun City Summerlin?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a tour with Dr. Jan Duffy to see the community for
                yourself.
              </p>
              <Button
                asChild
                variant="accent"
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#2D2A26]"
              >
                <Link href="/contact">Schedule Your Tour</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
