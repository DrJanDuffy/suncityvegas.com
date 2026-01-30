# SEO Starter Guide Checklist (Google Search Essentials)

This checklist maps [Google’s SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide) to suncityvegas.com so you can see what’s in place and what’s optional.

---

## Help Google find your content

| Guideline | Status | Notes |
|-----------|--------|--------|
| **Check if Google has your content** | ✅ | Use `site:suncityvegas.com` in Google to confirm indexing. |
| **Submit a sitemap** | ✅ | `src/app/sitemap.ts` → `/sitemap.xml`; referenced in `robots.ts`. |
| **Google can see the page like a user** | ✅ | No blocking of CSS/JS; use URL Inspection in Search Console to verify. |
| **Opt out when needed** | ✅ | `robots: { index: false, follow: true }` on `/privacy`; `robots.ts` disallows `/api/`, `/_next/`, etc. |

---

## Organize your site

| Guideline | Status | Notes |
|-----------|--------|--------|
| **Descriptive URLs** | ✅ | e.g. `/homes-for-sale`, `/amenities/golf`, `/blog/sun-city-summerlin-hoa-fees`. |
| **Breadcrumbs** | ✅ | UI breadcrumbs + `BreadcrumbList` JSON-LD on main and sub-pages. |
| **Group similar pages in directories** | ✅ | `/amenities/*`, `/blog/*`, `/resources/*`, `/lifestyle/*`, `/community/*`. |
| **Canonical URL per piece of content** | ✅ | `metadata.alternates.canonical` on pages; root canonical `https://www.suncityvegas.com/` in layout. |
| **Redirect non-preferred URLs** | ✅ | e.g. `/floor-plans/[slug]` and `/floor-plans-simple` → `/floor-plans`. |

---

## Make your site interesting and useful

| Guideline | Status | Notes |
|-----------|--------|--------|
| **Easy to read, well organized** | ✅ | Headings, sections, clear copy. |
| **Unique content** | ✅ | Site-specific copy; no copied content. |
| **Up-to-date** | ✅ | Review and update key pages (e.g. blog, resources) periodically. |
| **Helpful, reliable, people-first** | ✅ | E-E-A-T–style content; expert/author context where relevant. |
| **Expect readers’ search terms** | ✅ | Titles and descriptions target phrases like “Sun City Summerlin homes for sale”, “55+ community Las Vegas”, etc. |
| **Avoid distracting ads** | ✅ | No ad clutter. |
| **Link to relevant resources** | ✅ | Internal links in footer, sections, and body copy; external links where appropriate. |
| **Good link (anchor) text** | ✅ | Descriptive anchor text (e.g. “homes for sale”, “amenities”, “schedule a tour”). |
| **nofollow for untrusted / user-generated links** | ✅ | Template-credit links (Footer: UIdeck, Next.js Templates) and external Market Insights links use `rel="noopener noreferrer nofollow"`. Add nofollow to any future UGC (e.g. comments). |

---

## Influence how your site looks in Search

| Guideline | Status | Notes |
|-----------|--------|--------|
| **Title links** | ✅ | Unique `metadata.title` per page; layout template `%s \| Sun City Summerlin \| Dr. Jan Duffy`. |
| **Snippets / meta description** | ✅ | Unique `metadata.description` per page; concise and relevant. |
| **Images: high quality, near relevant text** | ✅ | Next/Image; images in relevant sections. |
| **Descriptive alt text** | ✅ | `alt` on images; improve any generic “image” alts as you edit pages. |
| **Video** | ✅ | YouTubeEmbed on pillar posts; titles/descriptions on video pages. |

---

## Things Google says not to rely on

- **Meta keywords** – Google doesn’t use them. The site has `keywords` in some metadata; harmless but not a ranking factor. You can keep or remove for consistency.
- **Keyword stuffing** – Avoid; write naturally.
- **Keywords in domain/URL** – Minor effect (e.g. breadcrumbs); do what’s best for the business.
- **Min/max content length** – No magic word count; focus on usefulness.
- **Duplicate content “penalty”** – Duplicate URLs are inefficient, not a manual action; canonicals and redirects handle it.
- **E-E-A-T as a “ranking factor”** – Not a direct signal; still good for quality and trust.

---

## Quick wins (optional)

1. **Search Console** – Verify the property, submit sitemap, use URL Inspection to confirm how Google sees key URLs.
2. **Alt text audit** – Scan key pages and ensure every image has specific, descriptive `alt` (no generic “image” or filename-only).
3. **Internal links** – When adding or updating content, link to 2–3 relevant pages (e.g. /homes-for-sale, /schedule, /contact).
4. **Promotion** – Per the guide: social, community, and word of mouth help discovery; business cards/offline materials with URL.

---

## Fresh content & engagement

| Item | Status | Notes |
|------|--------|--------|
| **External market-news feed** | ✅ | [Simplifying the Market](https://www.simplifyingthemarket.com/) RSS feed powers the "Latest Market Insights" section (homepage + `/resources/market-insights`). Cached 1 hour via `/api/market-insights`. Attribution and Sun City 55+ tie-in in place. |

---

## File reference

- **Sitemap**: `src/app/sitemap.ts`
- **Market insights feed**: `src/app/api/market-insights/route.ts` (fetches RSS); `src/components/MarketInsights.tsx` (UI)
- **Robots**: `src/app/robots.ts`
- **Root metadata / canonical**: `src/app/layout.tsx`
- **Page-level metadata**: Each `src/app/**/page.tsx` (e.g. `metadata.title`, `metadata.description`, `alternates.canonical`)
- **Breadcrumbs**: `components/Breadcrumbs.tsx` (emits BreadcrumbList JSON-LD)
- **Schema**: `components/SchemaMarkup.tsx`, plus WebPage/Article/FAQPage etc. in individual pages

Impact from changes can take from a few hours to several months; give new or updated pages a few weeks before judging effect in Search.
