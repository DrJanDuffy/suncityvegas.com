import { NextResponse } from "next/server";

const FEED_URL = "https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18";
const CACHE_DURATION = 3600; // 1 hour in seconds

interface CachedFeed {
  items: Array<{
    title: string;
    link: string;
    description: string;
    pubDate: string;
    category: string[];
  }>;
  lastFetched: number;
}

// In-memory cache (in production, consider using Redis or similar)
let feedCache: CachedFeed | null = null;

function parseRSSFeed(xmlText: string) {
  const items: Array<{
    title: string;
    link: string;
    description: string;
    pubDate: string;
    category: string[];
  }> = [];

  // Parse RSS feed items
  const itemMatches = xmlText.matchAll(/<item>([\s\S]*?)<\/item>/g);
  
  for (const match of itemMatches) {
    const itemContent = match[1];
    
    // Extract title (handle CDATA)
    const titleMatch = itemContent.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || 
                       itemContent.match(/<title>([\s\S]*?)<\/title>/);
    
    // Extract link
    const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
    
    // Extract description (handle CDATA and HTML)
    const descMatch = itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) ||
                     itemContent.match(/<description>([\s\S]*?)<\/description>/);
    
    // Extract pubDate
    const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    
    // Extract categories (handle CDATA)
    const categoryMatches = [
      ...itemContent.matchAll(/<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g),
      ...itemContent.matchAll(/<category>([\s\S]*?)<\/category>/g)
    ];
    const categories: string[] = [];
    for (const catMatch of categoryMatches) {
      const cat = catMatch[1]?.trim();
      if (cat && !categories.includes(cat)) {
        categories.push(cat);
      }
    }

    if (titleMatch && linkMatch) {
      // Extract text from HTML description
      let description = "";
      if (descMatch) {
        const descText = descMatch[1];
        // Remove HTML tags, decode entities, and get first paragraph
        const textOnly = descText
          .replace(/<img[^>]*>/gi, "") // Remove images
          .replace(/<[^>]*>/g, " ") // Remove HTML tags
          .replace(/&nbsp;/g, " ")
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/\s+/g, " ") // Normalize whitespace
          .trim();
        description = textOnly.substring(0, 200) + (textOnly.length > 200 ? "..." : "");
      }

      items.push({
        title: (titleMatch[1] || "").trim(),
        link: (linkMatch[1] || "").trim(),
        description: description || "Read the latest real estate market insights.",
        pubDate: (pubDateMatch?.[1] || new Date().toISOString()).trim(),
        category: categories,
      });
    }
  }

  return items;
}

export async function GET(request: Request) {
  try {
    // Check cache
    const now = Date.now();
    if (feedCache && (now - feedCache.lastFetched) / 1000 < CACHE_DURATION) {
      return NextResponse.json({
        items: feedCache.items,
        cached: true,
      });
    }

    // Fetch fresh feed
    const response = await fetch(FEED_URL, {
      next: { revalidate: CACHE_DURATION },
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; SunCityVegas/1.0)",
      },
    });

    if (!response.ok) {
      throw new Error(`Feed fetch failed: ${response.status}`);
    }

    const xmlText = await response.text();
    const items = parseRSSFeed(xmlText);

    // Update cache
    feedCache = {
      items: items.slice(0, 6), // Limit to 6 most recent
      lastFetched: now,
    };

    return NextResponse.json({
      items: feedCache.items,
      cached: false,
    });
  } catch (error) {
    console.error("Error fetching market insights:", error);
    
    // Return cached data if available, even if expired
    if (feedCache) {
      return NextResponse.json({
        items: feedCache.items,
        cached: true,
        error: "Using cached data due to fetch error",
      });
    }

    return NextResponse.json(
      { error: "Failed to fetch market insights", items: [] },
      { status: 500 }
    );
  }
}
