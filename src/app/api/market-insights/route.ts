import { NextResponse } from "next/server";
import { getMarketInsightsFeed } from "@/lib/market-insights-feed";

const CACHE_DURATION = 3600; // 1 hour in seconds
let cachedItems: Awaited<ReturnType<typeof getMarketInsightsFeed>> | null = null;
let lastFetched = 0;

export async function GET() {
  try {
    const now = Date.now();
    if (cachedItems && (now - lastFetched) / 1000 < CACHE_DURATION) {
      return NextResponse.json({ items: cachedItems, cached: true });
    }

    const items = await getMarketInsightsFeed(12);
    cachedItems = items;
    lastFetched = now;

    return NextResponse.json({ items, cached: false });
  } catch (error) {
    console.error("Error fetching market insights:", error);
    if (cachedItems) {
      return NextResponse.json({
        items: cachedItems,
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
