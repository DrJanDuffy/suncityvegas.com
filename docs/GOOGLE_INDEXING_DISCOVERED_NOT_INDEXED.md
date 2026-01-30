# Google Search Console: "Discovered - currently not indexed"

## What you're seeing

- **Report:** Page indexing → Discovered - currently not indexed  
- **Affected URLs (examples):**  
  - https://www.suncityvegas.com/about  
  - https://www.suncityvegas.com/amenities  
  - https://www.suncityvegas.com/contact  
  - https://www.suncityvegas.com/home-value  
  - https://www.suncityvegas.com/homes-for-sale  
  - https://www.suncityvegas.com/lifestyle  
  - https://www.suncityvegas.com/privacy  
  - https://www.suncityvegas.com/schedule  
  - https://www.suncityvegas.com/sitemap-page  
  - https://www.suncityvegas.com/testimonials  

- **Last crawled: N/A** usually means Google has **discovered** these URLs (e.g. from your sitemap or links) but has **not yet crawled** them, or crawled and chose not to index them yet.

## Why this happens

1. **Crawl priority** – Google has a limited crawl budget. Newer or lower-authority sites often have URLs in the queue that haven’t been crawled yet.
2. **Discovery vs. crawl** – URLs are “discovered” when Google sees them in the sitemap or via links; “crawled” is when Google actually requests the page. “Discovered - currently not indexed” can mean either “not yet crawled” or “crawled but not selected for indexing.”
3. **Internal linking** – Pages with more (and earlier) internal links from important pages tend to get crawled sooner.

## What we did in the repo

1. **Internal linking**
   - Added **Schedule** and **Testimonials** to the footer Quick Links (so every page links to `/schedule` and `/testimonials`).
   - Added a **Contact & Schedule** card to the homepage “Explore” section so `/contact` gets a strong link from the homepage.

2. **Sitemap**
   - All of these URLs are already in `src/app/sitemap.ts` with appropriate priorities. No change needed.

3. **Indexability**
   - These pages do **not** use `noindex`. They inherit `index: true` from the root layout. (The only pages with `noindex` are `/privacy` and the 404 page, by design.)

## What you should do in Google Search Console

### 1. Request indexing for important URLs

For each URL you care about (e.g. about, contact, homes-for-sale, amenities, lifestyle, home-value, schedule, testimonials):

1. Open [Google Search Console](https://search.google.com/search-console).  
2. Use **URL Inspection** at the top.  
3. Paste the full URL (e.g. `https://www.suncityvegas.com/about`).  
4. Click **Request indexing** (if the URL is not yet indexed).

You don’t need to do this for every URL forever; doing it once for key pages can help move them into the crawl queue.

### 2. Resubmit the sitemap

1. In GSC go to **Sitemaps**.  
2. If `https://www.suncityvegas.com/sitemap.xml` is already listed, you can click the three dots and **Resubmit** (or remove and add again).  
3. This reinforces that these URLs are important to crawl.

### 3. Give it time

- “Discovered - currently not indexed” often clears over days or weeks as Google crawls more.  
- Keep building content and internal links; avoid changing URLs unnecessarily.

### 4. Optional: Check coverage and crawl stats

- In **Pages** (or **Coverage**), see how many URLs are “Indexed” vs “Discovered - currently not indexed.”  
- In **Settings → Crawl stats**, see how many requests Google is making per day.  
- If crawl rate is very low, focus on earning more quality links and keeping the site fast and clear.

## Note on /privacy

The **Privacy** page is set to `noindex` in code on purpose, so it will not be indexed. If you want it indexed, we’d need to remove that directive in `src/app/privacy/page.tsx`.

## Summary

- **Code:** Internal links were improved (footer + homepage Explore section). Sitemap and indexability are already correct.  
- **You:** Use URL Inspection → **Request indexing** for key pages and resubmit the sitemap in GSC, then allow time for crawling and indexing.
