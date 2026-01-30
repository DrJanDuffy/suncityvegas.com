/**
 * Simplifying the Market RSS feed – shared fetch/parse for API route and server-rendered schema.
 * Feed URL includes agent param for attribution: a=956758-ef2edda2f940e018328655620ea05f18
 */

export const MARKET_INSIGHTS_FEED_URL =
  "https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18";

export interface MarketInsightItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category: string[];
}

function parseRSSFeed(xmlText: string): MarketInsightItem[] {
  const items: MarketInsightItem[] = [];
  const itemMatches = xmlText.matchAll(/<item>([\s\S]*?)<\/item>/g);

  for (const match of itemMatches) {
    const itemContent = match[1];
    const titleMatch =
      itemContent.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
      itemContent.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
    const descMatch =
      itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) ||
      itemContent.match(/<description>([\s\S]*?)<\/description>/);
    const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const categoryMatches = [
      ...itemContent.matchAll(/<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g),
      ...itemContent.matchAll(/<category>([\s\S]*?)<\/category>/g),
    ];
    const categories: string[] = [];
    for (const catMatch of categoryMatches) {
      const cat = catMatch[1]?.trim();
      if (cat && !categories.includes(cat)) categories.push(cat);
    }

    if (titleMatch && linkMatch) {
      let description = "";
      if (descMatch) {
        const textOnly = descMatch[1]
          .replace(/<img[^>]*>/gi, "")
          .replace(/<[^>]*>/g, " ")
          .replace(/&nbsp;/g, " ")
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/\s+/g, " ")
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

/**
 * Fetches and parses the market insights feed. Uses Next.js fetch cache (revalidate 1 hour).
 * Returns up to 12 most recent items.
 */
export async function getMarketInsightsFeed(maxItems = 12): Promise<MarketInsightItem[]> {
  const response = await fetch(MARKET_INSIGHTS_FEED_URL, {
    next: { revalidate: 3600 },
    headers: { "User-Agent": "Mozilla/5.0 (compatible; SunCityVegas/1.0)" },
  });
  if (!response.ok) {
    throw new Error(`Market insights feed failed: ${response.status}`);
  }
  const xmlText = await response.text();
  const items = parseRSSFeed(xmlText);
  return items.slice(0, maxItems);
}
