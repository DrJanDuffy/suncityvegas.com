# Performance (Core Web Vitals & Lighthouse)

Summary of performance optimizations applied and remaining audit items for Sun City Vegas (Lighthouse 13, Moto G Power, Slow 4G).

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

**Impact:** Less blocking work during initial load; listings may appear slightly later.

### 3. Cache lifetimes

- **next.config.js**
  - Added long-lived cache for Next.js static assets:
    - `/_next/static/:path*` → `Cache-Control: public, max-age=31536000, immutable`

**Impact:** Repeat visits faster; first-party static assets cached for 1 year.

### 4. CSP

- Removed `https://fonts.googleapis.com` from `style-src` and `https://fonts.gstatic.com` from `font-src` in `next.config.js` (fonts are self-hosted via next/font).

---

## Remaining Audit Items (out of our control or larger refactors)

| Audit | Notes |
|-------|------|
| **Use efficient cache (third-party)** | Calendly, RealScout, CloudFront listing images set their own cache headers; we cannot change them. |
| **Legacy JavaScript (e.g. Array.at, flat)** | From Next.js/build and bundler targets; would require build/config changes to adjust. |
| **Improve image delivery (RealScout/CloudFront)** | Listing images come from RealScout’s CDN; we cannot resize or re-encode. Ask RealScout for responsive/WebP support. |
| **DOM size** | Would require reducing components or splitting the page (larger refactor). |
| **Forced reflow** | Likely from third-party or layout; use Chrome DevTools Performance trace to isolate. |
| **Preconnect candidates** | Lighthouse may suggest preconnect; we use dns-prefetch for GTM, Calendly, RealScout. Adding more preconnect can increase connection overhead; only add if you measure a benefit. |

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
