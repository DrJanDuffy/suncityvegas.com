# Security & Lighthouse Audits (General / Trust & Safety)

Summary of security headers, CSP, and audit fixes for Sun City Vegas (Lighthouse 13).

---

## Fixes Applied

### 1. CSP – RealScout widget font

- **Issue:** RealScout widget loads `https://fonts.googleapis.com/css2?family=Source+Sans+3...`; CSP blocked it.
- **Fix:** Added `https://fonts.googleapis.com` to `style-src` and `https://fonts.gstatic.com` to `font-src` in `next.config.js` so the RealScout widget can load its font. Site fonts remain via next/font (no extra render-blocking from our side).

### 2. Clickjacking (XFO / frame-ancestors)

- **Issue:** No frame control policy.
- **Fix:** In `next.config.js`: `X-Frame-Options: SAMEORIGIN` and CSP `frame-ancestors 'self'` so the page can only be embedded in same-origin frames.

### 3. HSTS

- **Issue:** No HSTS header; Lighthouse suggested `includeSubDomains` and `preload`.
- **Fix:** `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` so browsers enforce HTTPS for 1 year and support HSTS preload list.

### 4. COOP (Cross-Origin-Opener-Policy)

- **Issue:** No COOP header.
- **Fix:** `Cross-Origin-Opener-Policy: same-origin-allow-popups` so the top-level window is isolated from cross-origin documents while Calendly popups still work.

### 5. Permissions-Policy

- **Issue:** RealScout triggered “payment is not allowed in this document.”
- **Fix:** `Permissions-Policy: payment=(), camera=(), microphone=(), geolocation=()` so these features are explicitly denied. If RealScout needs `payment` for a feature, allow it only for the required origins.

---

## Remaining / Out of Our Control

| Audit | Notes |
|-------|------|
| **Third-party cookies (Calendly)** | `__cf_bm`, `_cfuvid` on calendly.com. Set by Calendly/Cloudflare; we cannot remove them. Prepare for third-party cookie restrictions by using Calendly’s recommended embed/API patterns and testing without third-party cookies. |
| **Next/Image 400 Bad Request** | `/_next/image?url=%2Fimages%2Fabout%2Fdr-jan-duffy.jpg&w=750&q=75` (and similar) returns 400. Ensure `public/images/about/dr-jan-duffy.jpg` exists in the deployed build. If the file is present and 400 persists, check Vercel image optimization config or use `unoptimized` for that image as a fallback. |
| **CSP – nonces/hashes, no unsafe-inline** | Lighthouse suggests script nonces or hashes and avoiding `'unsafe-inline'`. Adopting this requires a larger CSP rollout (e.g. nonce-based script/style) and can break third-party widgets; plan as a follow-up. |
| **Trusted Types** | CSP `require-trusted-types-for` reduces DOM XSS but requires code changes and can break third-party scripts; plan as a follow-up. |

---

## Files Changed

- `next.config.js` – CSP: added `fonts.googleapis.com`, `fonts.gstatic.com`, `frame-ancestors 'self'`. Headers: `Strict-Transport-Security`, `X-Frame-Options`, `Cross-Origin-Opener-Policy`, `Permissions-Policy`.
