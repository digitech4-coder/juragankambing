# Full-stack and File Storage integration

## Completed
- [x] GitHub Pages deployment was repaired and verified at the requested repository URL.
- [x] Upgrade the static project to the full-stack web-db-user template with backend, database, and authentication scaffolding.
- [x] Inspect the generated storage helpers and migrate large homepage assets to managed File Storage.
- [x] Add an admin-only File Storage management flow for authorized uploads and asset listing.
- [x] Add stored asset metadata schema and apply the non-destructive database migration.
- [x] Add protected tRPC procedures for listing and uploading files with an 8 MB validation limit.
- [x] Add unit tests for admin authorization and upload-size validation.
- [x] Verify TypeScript, Vitest, production build, homepage rendering, and protected storage route.
- [x] Save a publishable project checkpoint.


## GitHub Pages image repair
- [x] Diagnose missing images on https://digitech4-coder.github.io/juragankambing.
- [x] Restore self-contained GitHub Pages image assets and correct all repository-relative paths.
- [x] Rebuild, push, and verify the live GitHub Pages deployment.

## Custom domain repair
- [x] Diagnose why https://juragankambing.id does not display the website.
- [x] Verify DNS, HTTPS, and GitHub Pages custom-domain configuration; confirm the Manus domain remains a separate unchanged hosting address and is not part of this GitHub Pages setup.
- [x] Apply the required fix or provide the exact DNS/CNAME steps.
- [x] Recheck the custom domain after propagation or deployment changes.

## Image performance optimization
- [x] Audit all homepage image dimensions, formats, file sizes, and render usage.
- [x] Create optimized image variants without visible quality loss and update GitHub Pages assets.
- [x] Add responsive image sizing, lazy loading for below-fold images, and high priority for the hero image.
- [x] Verify SEO, visual rendering, build health, and performance-related changes before checkpointing.

## Custom-domain image regression
- [x] Compare image URLs and build artifacts between the working Manus domain and juragankambing.id.
- [x] Repair GitHub Pages image paths without changing the working Manus presentation.
- [x] Redeploy and verify all key images on the custom domain.

## Final custom-domain asset verification
- [x] Explicitly verify the header/footer logo and process infographic on the final custom-domain deployment.
- [x] Mark the custom-domain verification complete only after those critical assets are confirmed on https://juragankambing.id/.

## Kambing Guling image replacement
- [x] Add the newly provided Paket Kambing Guling image to managed and GitHub-compatible assets.
- [x] Replace only the Kambing Guling image reference while preserving content, position, sizing, and layout.
- [x] Verify the updated image on Manus and juragankambing.id.

## Custom-domain image regression after Kambing Guling update
- [x] Diagnose why the custom domain no longer displays all homepage images after the Kambing Guling update.
- [x] Restore a self-contained GitHub Pages asset map and published artifact without changing content or layout.
- [x] Verify hero, logo, service, package, process, gallery, and Kambing Guling images on the live custom domain.

## Manus-domain image repair
- [x] Reproduce missing homepage images on https://juragankam-5f36bibh.manus.space and compare with juragankambing.id.
- [x] Implement a shared asset strategy that works on both Manus and GitHub Pages without changing the visible content or layout.
- [x] Verify representative homepage images, tests, and production build on both deployments.

## PageSpeed tahap pertama
- [x] Sediakan varian hero mobile yang lebih ringan tanpa mengubah komposisi visual.
- [x] Terapkan pengiriman hero responsif melalui `srcSet`/`sizes` plus a host-aware hero preload.
- [x] Tambahkan dan verifikasi cache header produksi untuk fingerprinted bundles and managed storage redirects.
- [x] Optimalkan pemuatan font agar tidak menghambat render awal.
- [x] Jalankan test, production build, dan pemeriksaan visual setelah optimasi.
