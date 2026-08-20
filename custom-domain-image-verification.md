# Custom-domain image verification

Verified on 2026-08-19:

- Homepage: https://juragankambing.id/?asset-regression=4
- Logo asset: https://juragankambing.id/image/juragankambing-logo-transparent.webp?asset-regression=4
- Result: the transparent logo loads successfully from the custom domain and displays with a transparent checkerboard background in the image viewer. The final homepage screenshot also shows the logo in the header.
- The final homepage screenshot shows the hero and major package images rendered after commit 21b10af.

Remaining check: verify the process infographic directly on the custom domain.

The process infographic was also verified directly at https://juragankambing.id/image/proses-aqiqah-tanpa-judul.webp?asset-regression=4 and loaded successfully at 1600×1280. Both remaining critical assets are confirmed live.

The final homepage extraction explicitly shows the footer brand image using `image/juragankambing-logo-transparent.webp`, confirming the footer logo reference is present on the live custom-domain page alongside the verified header logo and process infographic.
