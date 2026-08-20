# PageSpeed Insights analysis — juragankambing.id

Sources:
- Mobile: https://pagespeed.web.dev/analysis/https-juragankambing-id/1ietldbrn5?hl=id&form_factor=mobile
- Desktop: https://pagespeed.web.dev/analysis/https-juragankambing-id/1ietldbrn5?hl=id&form_factor=desktop

Report timestamp shown by PageSpeed: 20 Aug 2026, 10:44:33.

## Mobile

Scores: Performance 67, Accessibility 75, Best Practices 77, SEO 100, Agentic browsing 1/2. First Contentful Paint 3.7 s; the visible report shows Largest Contentful Paint 6.2 s. Diagnostics include efficient cache duration (estimated savings 476 KiB), render-blocking requests (1,110 ms), improve image delivery (166 KiB), forced reflow, network dependency chains, oversized DOM, third-party code, unused JavaScript (150 KiB), 2 long main-thread tasks, and total network payload of 885 KiB. The LCP-critical resources include the hero image and logo; CSS, Google Fonts, application JS, tRPC auth.me, and analytics/third-party resources are also listed.

## Desktop

Scores: Performance 96, Accessibility 81, Best Practices 77, SEO 100, Agentic browsing 1/2. First Contentful Paint 0.8 s; Largest Contentful Paint 1.2 s; Total Blocking Time 80 ms; Cumulative Layout Shift 0.002; Speed Index 0.9 s. Diagnostics include efficient cache duration (estimated savings 974 KiB), improve image delivery (680 KiB), render-blocking requests (280 ms), forced reflow, LCP request discovery, network dependency chains, layout-shift causes, oversized DOM, third-party code, unused JavaScript (150 KiB), 3 long main-thread tasks, and user timing marks.

## Current implementation context

The homepage already uses explicit image width/height, `loading="eager"` plus `fetchPriority="high"` for the hero, lazy loading for below-fold images, `decoding="async"`, responsive `sizes`, repository-relative WebP assets on the custom domain, and deployment-aware managed File Storage assets on Manus hosts. The homepage imports Lucide icons, calls `useAuth()`, and the app includes tRPC/auth and analytics resources. The report's remaining mobile bottlenecks are therefore primarily mobile image transfer/decoding, cache policy, render-blocking CSS/fonts, initial JavaScript/auth/third-party work, and DOM size rather than missing image dimensions.
