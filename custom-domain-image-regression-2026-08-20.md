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
