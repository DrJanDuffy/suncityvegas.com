# Audit: All Fixes (Session Summary)

**Audit date:** 2026-01-27  
**Scope:** All fixes applied during this conversation for Sun City Vegas (suncityvegas.com).

---

## 1. Contact form → Calendly (Final CTA)

| Check | Status |
|-------|--------|
| Final CTA uses CalendlyInline (not ContactForm) | ✅ Present |
| Section title "Schedule a Tour" with calendar icon | ✅ Present |
| Calendly URL: drjanduffy/showing | ✅ Present |

**Location:** `components/sections/final-cta.tsx`

---

## 2. Sun City Summerlin Guide (Flyers)

| Check | Status |
|-------|--------|
| Flyer entry in `src/lib/flyers.ts` (slug, title, features, lastUpdated) | ✅ Present |
| Guide file: `/flyers/sun-city-summerlin-guide-2026.html` | ✅ Present |
| Flyer page: JSON-LD (Article, LocalBusiness, ResidentialComplex, BreadcrumbList, FAQPage) | ✅ Present |
| Flyer page: GEO section (map, nearby, NAP) | ✅ Present |
| Flyer page: Calendly embed, internal links | ✅ Present |

**Locations:** `src/lib/flyers.ts`, `public/flyers/sun-city-summerlin-guide-2026.html`, `src/app/flyers/[slug]/page.tsx`

---

## 3. Google Maps embed

| Check | Status |
|-------|--------|
| Code uses `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY` | ✅ Present |
| Fallback message when key missing | ✅ Present |

**Note:** Map shows only when env var is set in Vercel. No code change required; user adds key in dashboard.

**Locations:** `src/app/contact/page.tsx`, `src/app/amenities/page.tsx`

---

## 4. RealScout widget (Homes for Sale)

| Check | Status |
|-------|--------|
| RealScoutListings component with live badge | ✅ Present |
| Stats bar (price range, sq ft, 55+, ZIP) | ✅ Present |
| Widget header + "Full Search" link | ✅ Present |
| CTA below listings (Set Up Alerts, Call) | ✅ Present |
| Section id="listings" | ✅ Present |

**Location:** `components/RealScoutListings.tsx`, `src/app/homes-for-sale/page.tsx`

---

## 5. Page with redirect (GSC)

| Check | Status |
|-------|--------|
| proxy.ts redirects http and non-www to https://www.suncityvegas.com | ✅ Present |
| Vercel/preview/localhost allowed without redirect | ✅ Present |
| Documentation: GOOGLE_INDEXING_PAGE_WITH_REDIRECT.md | ✅ Present |

**Location:** `src/proxy.ts`, `docs/GOOGLE_INDEXING_PAGE_WITH_REDIRECT.md`

---

## 6. Duplicate, Google chose different canonical (GSC)

| Check | Status |
|-------|--------|
| Root canonical: `https://www.suncityvegas.com/` (trailing slash) | ✅ Present |
| Layout alternates.canonical and languages.x-default with trailing slash | ✅ Present |
| Homepage page.tsx canonical and openGraph.url with trailing slash | ✅ Present |
| Sitemap homepage entry: `${baseUrl}/` | ✅ Present |

**Locations:** `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/sitemap.ts`

---

## 7. Discovered - currently not indexed (GSC)

| Check | Status |
|-------|--------|
| Footer Quick Links: Schedule a Tour (`/schedule`) | ✅ Present |
| Footer Quick Links: Testimonials (`/testimonials`) | ✅ Present |
| Homepage Explore section: Contact & Schedule card (`/contact`) | ✅ Present |
| Documentation: GOOGLE_INDEXING_DISCOVERED_NOT_INDEXED.md | ✅ Present |

**Locations:** `components/footer.tsx`, `components/sections/explore-community.tsx`, `docs/GOOGLE_INDEXING_DISCOVERED_NOT_INDEXED.md`

---

## 8. Crawled - currently not indexed: /accessibility

| Check | Status |
|-------|--------|
| Breadcrumbs on accessibility page | ✅ Present |
| Metadata: keywords, improved description | ✅ Present |
| Hero: unique copy + links to /homes-for-sale, /amenities | ✅ Present |
| "Explore Sun City Summerlin" block (Home, Homes for Sale, Contact, About) | ✅ Present |
| CTA phone (702) 718-0042 | ✅ Present |
| robots: index true | ✅ Present |

**Location:** `src/app/accessibility/page.tsx`

---

## 9. Phone number consistency (NAP / GBP)

| Check | Status |
|-------|--------|
| **Current NAP phone:** (702) 718-0042 — used site-wide (site-config, SchemaMarkup, layout, footer, navbar, hero, all app pages, faqData, flyers guide) | ✅ Consistent |

---

## 10. Canonical URLs (non-root)

| Check | Status |
|-------|--------|
| All non-root canonicals use `https://www.suncityvegas.com/...` (no trailing slash for paths) | ✅ Consistent |
| Root only uses trailing slash | ✅ Correct |

---

## Summary

| Category | Status |
|----------|--------|
| Calendly / Final CTA | ✅ Fixed |
| Flyers guide + SEO/GEO | ✅ Fixed |
| Google Maps | ✅ Env-dependent, doc’d |
| RealScout widget | ✅ Fixed |
| Redirect / canonical (root) | ✅ Fixed |
| Discovered not indexed (internal links) | ✅ Fixed |
| Accessibility page | ✅ Fixed |
| Phone number site-wide | ✅ Fixed |

---

## Files touched by fixes (reference)

- `components/sections/final-cta.tsx` – Calendly, phone
- `components/RealScoutListings.tsx` – Live listings, phone
- `components/footer.tsx` – Schedule, Testimonials links; phone (to standardize)
- `components/sections/explore-community.tsx` – Contact & Schedule card
- `src/app/layout.tsx` – Canonical trailing slash, x-default, phone (to standardize)
- `src/app/page.tsx` – Canonical trailing slash, phone (to standardize)
- `src/app/sitemap.ts` – Homepage URL with trailing slash
- `src/app/accessibility/page.tsx` – Breadcrumbs, content, links, phone
- `src/app/homes-for-sale/page.tsx` – Phone
- `src/app/contact/page.tsx` – Phone
- `src/app/flyers/[slug]/page.tsx` – Schema, content, phone
- `src/lib/flyers.ts` – Guide entry
- `public/flyers/sun-city-summerlin-guide-2026.html` – HTML guide
- `src/components/faq-content.tsx` – Phone
- `docs/GOOGLE_INDEXING_PAGE_WITH_REDIRECT.md`
- `docs/GOOGLE_INDEXING_DISCOVERED_NOT_INDEXED.md`
- `docs/AUDIT_ALL_FIXES.md` (this file)
