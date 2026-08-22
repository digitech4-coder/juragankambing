# Visual verification notes

- The live Manus preview renders the contact form fields and `LANJUT KE RINGKASAN` control.
- The browser DOM includes all requested Domisili options and the new review-step form flow is present in source.
- Storage proxy probes for every current `/manus-storage/` asset returned HTTP 200 with image content.
- In a real browser session, the logo and mobile hero image reported `complete: true` with non-zero natural dimensions; most below-fold images were still lazy and reported `complete: false`, so blank cards in an initial screenshot are not sufficient evidence of missing assets.
- The screenshot service showed blank image areas while direct preview URL probes succeeded; re-check lazy image loading after scrolling before changing asset code.

The live preview accepted a non-submitting sample through the controlled DOM interaction and activated `LANJUT KE RINGKASAN`; no email or mutation was sent during this check. The browser screenshot confirmed the stored hero image loads correctly when the real browser session finishes loading it.

The preview review state displays `Edit data` and `KONFIRMASI & KIRIM` after sample values are entered, while the public page remains unsubmitted. The protected `/admin/requests` route now renders a centered `Masuk sebagai admin` prompt for unauthenticated visitors instead of a blank page.
