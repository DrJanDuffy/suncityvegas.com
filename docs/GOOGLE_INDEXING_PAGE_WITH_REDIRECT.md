# Google Search Console: "Page with redirect"

## What you're seeing

- **Report:** Page indexing → Page with redirect  
- **Affected URLs (examples):**  
  - `http://suncityvegas.com/`  
  - `https://suncityvegas.com/`  
- **Meaning:** Google crawls these URLs, gets a **301 redirect** to `https://www.suncityvegas.com/`, and therefore does **not** index them as separate pages. That is correct and intentional.

## Why this happens

The site is configured to use a **single canonical host**:

- **Canonical (indexed) URL:** `https://www.suncityvegas.com`
- **Redirects (not indexed as pages):**
  - `http://suncityvegas.com` → `https://www.suncityvegas.com` (301)
  - `https://suncityvegas.com` (no www) → `https://www.suncityvegas.com` (301)

So the “Page with redirect” report is expected: those two URLs are not indexed because they redirect to the www version.

## What to do in Google Search Console

1. **Confirm the canonical URL is indexed**  
   - In GSC, open **URL Inspection** and enter: `https://www.suncityvegas.com/`  
   - Or search in Google: `site:www.suncityvegas.com`  
   - You should see the homepage (and other pages) under the www version.

2. **Use the correct property**  
   - Your **primary** Search Console property should be:  
     `https://www.suncityvegas.com` (URL prefix).  
   - That is the version we want indexed.

3. **Mark as “Done fixing?”**  
   - In the “Page with redirect” report, click **Done fixing?**  
   - This tells GSC that the redirects are intentional; no code change is required.

4. **(Optional) Domain property**  
   - If you add a **Domain property** (`suncityvegas.com`), GSC will treat all variants (http/https, www/non-www) as one property. The “Page with redirect” count will still show for the redirecting URLs, but the indexed version will be `https://www.suncityvegas.com`.

## Technical details (this repo)

- **Redirects:** `src/proxy.ts` sends `http` and non-www to `https://www.suncityvegas.com` (301).
- **Canonical:** All metadata and `layout.tsx` use `https://www.suncityvegas.com` as `metadataBase` and `canonical`.
- **Sitemap:** `src/app/sitemap.ts` uses `https://www.suncityvegas.com` only.
- **Robots:** `src/app/robots.ts` uses `https://www.suncityvegas.com` for the sitemap URL.

No change to redirect logic is needed for indexing; the current setup is correct for having a single canonical www version.
