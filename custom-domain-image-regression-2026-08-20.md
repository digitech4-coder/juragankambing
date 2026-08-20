# Custom-domain image regression verification

Date: 2026-08-20

The live page `https://juragankambing.id/?image-regression=1ae943c` now exposes repository-relative image URLs instead of Manus-only storage URLs. Verified page image references include:

- `/image/juragankambing-logo-transparent.webp`
- `/image/juragankambing-hero.webp`
- `/image/juragankambing-katering.webp`
- `/image/juragankambing-paket-hemat.webp`
- `/image/juragankambing-paket-standar.webp`
- `/image/juragankambing-paket-super.webp`
- `/image/juragankambing-paket-istimewa.webp`
- `/image/PaketKambingGulingJuragan.webp`
- `/image/juragankambing-tumpeng.webp`
- `/image/juragankambing-aqiqah.webp`
- `/image/proses-aqiqah-tanpa-judul.webp`

The direct hero asset URL `https://juragankambing.id/image/juragankambing-hero.webp?image-regression=1ae943c` returned a valid 1600x900 image. The GitHub Pages workflow for commit `1ae943cb78f5a438e3c257cf23e481db0fa7abaf` completed successfully. Source, root artifact, generated bundle, and asset manifest no longer contain `/manus-storage/` references.

The process infographic was independently verified on the latest custom-domain deployment at `https://juragankambing.id/image/proses-aqiqah-tanpa-judul.webp?image-regression=1ae943c-process`. The endpoint returned a valid 1600x1280 image showing all five ordering steps.

Manus-domain repair verification after checkpoint `4d3e1749`: `https://juragankam-5f36bibh.manus.space/?asset-check=4d3e1749` now visibly renders the transparent logo and hero image. The published homepage is no longer requesting the missing `/image/...` paths for the Manus host; managed storage assets are selected by the deployment-aware resolver.

Final cross-deployment verification for checkpoint `4d3e1749`:

- `https://juragankam-5f36bibh.manus.space/?final-asset-check=4d3e1749` visibly rendered the logo and hero image; extracted image references use `/manus-storage/` for logo, hero, all four aqiqah packages, Kambing Guling, tumpeng, gallery, and the five-step process infographic.
- `https://juragankambing.id/?final-asset-check=4d3e1749` continued to expose the working `/image/` WebP references for logo, hero, packages, Kambing Guling, and process assets.
- Vitest completed with 3/3 tests passing and `pnpm build` completed successfully after the final host-detection change.

## Brand synchronization verification — 2026-08-20

After manually triggering GitHub Actions workflow run `32423771502` from `main`, the live custom domain `https://juragankambing.id/?brand-check=32423771502` rendered `JURAGANKAMBING.ID`, `TANGERANG SELATAN`, and `Katering · Aqiqah · Qurban`. The live page also rendered the header logo, navigation, WhatsApp CTA, hero image, package links, contact form, and footer controls.

The live Manus domain `https://juragankam-5f36bibh.manus.space/?brand-sync-check=32423771502` independently rendered the same brand text and hero eyebrow, with the same hero composition and managed-storage imagery. GitHub Pages workflow run `32423771502` completed successfully at `2026-08-20T22:20:33Z`.
