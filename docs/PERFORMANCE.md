# Performance (Core Web Vitals & Lighthouse)

Summary of performance optimizations applied and remaining audit items for Sun City Vegas (Lighthouse 13, Moto G Power, Slow 4G).

---

## Results (before → after)

| Metric | Before | After |
|--------|--------|--------|
| **First Contentful Paint** | 3.7 s | **1.1 s** |
| **Largest Contentful Paint** | 4.9 s | **2.3 s** |
| **Total Blocking Time** | 4,340 ms | **850 ms** |
| **Speed Index** | 7.7 s | **3.9 s** |
| **Cumulative Layout Shift** | 0.011 | 0.011 (unchanged) |
| **Render blocking (est. savings)** | ~1,110 ms | ~130 ms (main CSS only) |
| **Critical path latency** | 7,352 ms | **741 ms** |

---

## Optimizations Applied

### 1. Render-blocking requests (~1,110 ms saved)

- **Fonts**
  - Removed `@import url('https://fonts.googleapis.com/...')` from `src/app/globals.css` for Inter and Playfair Display.
  - Fonts are loaded only via **next/font** in `src/app/layout.tsx` (self-hosted, `display: swap`).
  - Body and headings use `var(--font-inter)` and `var(--font-playfair)` in `globals.css`.
- **Preconnect**
  - Removed `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com` from `layout.tsx` (no Google Fonts network requests).

**Impact:** FCP and LCP improve; no render-blocking font requests.

### 2. Total blocking time (TBT) and third-party impact

- **Calendly (and Stripe)**
  - Calendly script and CSS are no longer loaded in the layout.
  - `components/CalendlyButton.tsx` loads the Calendly script **only on first click** (dynamic script injection).
  - Removed the layout’s Calendly CSS `lazyOnload` script; the widget loads its own resources when the popup opens.

**Impact:** Calendly/Stripe no longer run on initial load; TBT and main-thread time reduced.

- **RealScout**
  - Script in `layout.tsx` changed from `strategy="afterInteractive"` to **`strategy="lazyOnload"`**.
  - Listings hydrate after first paint; hero/LCP is prioritized.

- **Homepage Calendly inline**
  - `FinalCTASection` no longer loads the Calendly embed on initial paint. Calendly (and Stripe) load only when the section enters the viewport (Intersection Observer, 200px rootMargin) or when the user clicks “Show calendar.” The section is also dynamically imported on the homepage so Calendly code is not in the initial JS bundle.

**Impact:** Less blocking work during initial load; Calendly/Stripe (~1.7MB) no longer run until user scrolls to CTA or clicks.

### 3. Cache lifetimes

- **next.config.js**
  - Added long-lived cache for Next.js static assets:
    - `/_next/static/:path*` → `Cache-Control: public, max-age=31536000, immutable`

**Impact:** Repeat visits faster; first-party static assets cached for 1 year.

### 4. CSP

- Removed `https://fonts.googleapis.com` from `style-src` and `https://fonts.gstatic.com` from `font-src` in `next.config.js` (fonts are self-hosted via next/font).

---

## Remaining Audit Items

| Audit | Notes |
|-------|------|
| **Render blocking (~130 ms)** | Main Next.js CSS chunk (`_next/static/.../...css`). Reducing it would require critical CSS extraction or experimental Next.js options. |
| **Use efficient cache (third-party)** | Calendly, RealScout, CloudFront set their own cache headers; we cannot change them. First-party `_next/static` is already long-cached. |
| **Legacy JavaScript (~14 KiB)** | From Next.js/build and bundler targets; would require build/config changes. |
| **Improve image delivery (~97 KiB)** | Our images: use Next.js `Image` with sizes; RealScout listing images are from their CDN (ask RealScout for responsive/WebP). |
| **Reduce JavaScript execution (2.7 s) / main-thread work (4.1 s)** | More code splitting, defer non-critical components, reduce third-party JS. |
| **Reduce unused JavaScript (~1,229 KiB)** | Dynamic imports for below-fold sections (some already in place); consider route-based or component-level code splitting. |
| **Reduce unused CSS (~472 KiB)** | Tailwind purge is automatic; remaining is often framework/chunk CSS; per-route CSS is a larger refactor. |
| **Avoid long main-thread tasks (13 long tasks)** | Break up work (e.g. requestIdleCallback), defer non-critical scripts. |
| **Avoid non-composited animations (2)** | Prefer `transform` and `opacity`; check scroll/visibility animations in components. |
| **DOM size** | Would require reducing components or splitting the page (larger refactor). |
| **Preconnect** | Lighthouse reports “No additional origins are good candidates”; current dns-prefetch for GTM, Calendly, RealScout is sufficient. |

---

## How to re-test

1. **Lighthouse (same conditions)**  
   - Device: Moto G Power (or mobile).  
   - Throttling: Slow 4G.  
   - Run Performance and note FCP, LCP, TBT, Speed Index, CLS.

2. **PageSpeed Insights**  
   - Use the production URL (e.g. `https://www.suncityvegas.com/`) for field and lab data.

3. **Chrome DevTools**  
   - Performance panel: record load, check for long tasks and layout thrash.  
   - Network: confirm no Calendly/Stripe requests until the Calendly button is clicked.

---

## Files changed (reference)

- `src/app/globals.css` – removed Google Fonts `@import`; body/headings use `var(--font-inter)` / `var(--font-playfair)`.
- `src/app/layout.tsx` – removed font preconnect and Calendly CSS script; RealScout script set to `lazyOnload`.
- `components/CalendlyButton.tsx` – Calendly script loaded on first click only.
- `next.config.js` – CSP font/style updates; cache header for `/_next/static/:path*`.
