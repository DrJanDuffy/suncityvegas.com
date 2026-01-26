# Next.js 15 Best Practices - Sun City Summerlin

## ✅ Image Optimization

Always use Next.js `Image` component for optimized images:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero/hero-bg.jpg"
  alt="Sun City Summerlin community with Red Rock Canyon views"
  width={1920}
  height={1080}
  priority // for above-fold hero images
/>
```

**Key points:**
- Use `fill` for background images with `sizes` prop
- Use `priority` for above-the-fold images (hero sections)
- Always include descriptive `alt` text
- Use `placeholder="blur"` with `blurDataURL` for better UX

## ✅ Server vs Client Components

### Server Components (Default)
- Data fetching (`getSunCitySummerlinListings()`, API calls)
- SEO-critical content
- Static rendering
- No `"use client"` directive needed

### Client Components
**Use `"use client"` for:**
- Contact forms (state, validation)
- Image galleries (lightbox, carousel)
- Interactive maps (Google Maps, Mapbox)
- Search filters (this project's listings filters)
- Any component using:
  - `useState`, `useEffect`, `useMemo`, etc.
  - Browser APIs (`window`, `document`, `localStorage`)
  - Event handlers (`onClick`, `onChange`)

**Pattern:**
```tsx
// Server Component (page.tsx)
export default async function Page() {
  const data = await fetchData()
  return <ClientComponent initialData={data} />
}

// Client Component
'use client'
export function ClientComponent({ initialData }) {
  const [state, setState] = useState(initialData)
  // Interactive logic here
}
```

## ✅ Metadata & SEO

### Static Pages
```tsx
export const metadata: Metadata = {
  title: "Page Title | Sun City Summerlin | Las Vegas",
  description: "Description including 'Sun City Summerlin,' '55+,' and 'Las Vegas'",
  alternates: {
    canonical: "https://www.suncityvegas.com/page-path",
  },
  openGraph: {
    title: "Page Title | Sun City Summerlin",
    description: "OG description",
    url: "https://www.suncityvegas.com/page-path",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Title",
    description: "Twitter description",
  },
}
```

### Dynamic Pages (Blog Posts)
```tsx
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  return {
    title: `${post.title} | Sun City Summerlin Blog | Las Vegas`,
    description: `${post.excerpt} Read more about Sun City Summerlin, Las Vegas' premier 55+ community.`,
    alternates: {
      canonical: `https://www.suncityvegas.com/blog/${params.slug}`,
    },
    openGraph: {
      title: `${post.title} | Sun City Summerlin`,
      description: post.excerpt,
      url: `https://www.suncityvegas.com/blog/${params.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  }
}
```

## ❌ Don't Do

- ❌ Don't use `"use client"` unless interactivity required
- ❌ Don't fetch data in client components (use Server Actions or API routes)
- ❌ Don't skip descriptive `alt` text on images
- ❌ Don't hardcode metadata—use `generateMetadata` for dynamic pages
- ❌ Don't forget canonical URLs on every page
- ❌ Don't use generic descriptions—always include:
  - "Sun City Summerlin"
  - "55+" or "active adult community"
  - "Las Vegas"

## 📁 Project Structure

```
app/
├── page.tsx              # Homepage ✅
├── layout.tsx            # Root layout with JSON-LD schema
├── homes-for-sale/
│   └── page.tsx          # MLS listings (async server component)
├── floor-plans/
│   └── page.tsx          # Home styles and sizes
├── amenities/
│   └── page.tsx          # 4 golf courses, 3 rec centers
├── lifestyle/
│   └── page.tsx          # 80+ clubs and activities
├── about/
│   └── page.tsx          # Dr. Jan Duffy bio
├── blog/
│   ├── page.tsx          # Blog listing
│   └── [slug]/
│       └── page.tsx      # Individual posts (generateMetadata)
├── faq/
│   └── page.tsx          # Common questions
├── contact/
│   └── page.tsx          # Contact form (client component)
└── privacy/
    └── page.tsx          # Privacy policy
```

## 🎯 SEO Checklist

Every page should have:
- [ ] Unique, descriptive title (includes location/keywords)
- [ ] Meta description (includes "Sun City Summerlin," "55+," "Las Vegas")
- [ ] Canonical URL
- [ ] OpenGraph tags
- [ ] Twitter card
- [ ] Proper H1 heading
- [ ] Descriptive image alt text
- [ ] LocalBusiness schema (in root layout)

## 📝 Content Guidelines

**Always include in descriptions:**
- "Sun City Summerlin" (community name)
- "55+" or "active adult community" (target demographic)
- "Las Vegas" (location)
- "Dr. Jan Duffy" (agent name when relevant)
- Price range "$275K-$1.2M+" (when relevant)

**Example:**
> "Discover luxury single-story living in Sun City Summerlin, Las Vegas' premier 55+ community with Red Rock Canyon views, 4 golf courses, and resort-style amenities."
