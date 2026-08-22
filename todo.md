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

## Audit aksesibilitas
- [x] Audit semantic landmarks, heading structure, image alternatives, form labels, and interactive controls.
- [x] Improve keyboard navigation, focus visibility, menu/dialog state, carousel controls, and ARIA semantics.
- [x] Improve actionable text contrast without changing the Emerald Majlis visual composition.
- [x] Run accessibility-oriented checks, tests, production build, and visual regression verification.

## Sinkronisasi brand custom domain
- [x] Diagnose why the finalized header brand is visible on Manus but stale on juragankambing.id.
- [x] Synchronize the GitHub Pages/custom-domain artifact to “JURAGANKAMBING.ID” and “TANGERANG SELATAN”.
- [x] Verify the updated header on both published domains and preserve the existing layout and assets.
- [x] Re-check https://juragankam-5f36bibh.manus.space and https://juragankambing.id after the GitHub Pages sync, confirming the header shows “JURAGANKAMBING.ID” and “TANGERANG SELATAN” on both domains.
- [x] Preserve explicit evidence that layout, logo, navigation, CTA, and hero assets remained unchanged on both published domains.

## Update foto Snack Box
- [x] Add the provided Snack Box Ekonomis image to the matching package.
- [x] Add the provided Snack Box Reguler image to the matching package.
- [x] Add the provided Snack Box Premium image to the matching package.
- [x] Preserve existing package layout, CTA behavior, responsive sizing, and accessible alt text.
- [x] Verify the three assets on Manus and juragankambing.id after deployment.
- [x] Remove the obsolete duplicate text-only Snack Box section so the `#snack-box` anchor opens the image-based cards.
- [x] Run Vitest, production build, and responsive visual verification after the cleanup.

## Custom-domain Snack Box image regression
- [x] Diagnose why Snack Box images are visible on Manus but not on juragankambing.id.
- [x] Synchronize the GitHub Pages asset artifact and redeploy the custom domain without changing layout or content.
- [x] Verify Ekonomis, Reguler, and Premium images on both public domains.

## CTA WhatsApp per paket Snack Box
- [x] Tambahkan tombol CTA WhatsApp pada kartu Snack Box Ekonomis, Reguler, dan Premium.
- [x] Sertakan nama paket secara otomatis dalam pesan WhatsApp dan accessible label.
- [x] Verifikasi link CTA, test, build, dan tampilan responsif.
- [x] Verify each Snack Box CTA uses the correct package-specific WhatsApp message template for Ekonomis, Reguler, and Premium.
- [x] Confirm the CTA layout at mobile and desktop breakpoints after the update.

## Sinkronisasi Snack Box custom domain terbaru
- [x] Diagnose why the latest Snack Box images and package-specific WhatsApp CTAs are missing on juragankambing.id.
- [x] Redeploy the current GitHub Pages artifact with the latest Snack Box images and CTAs.
- [x] Verify the live custom domain shows all three images and the three package-specific CTA buttons.

## Jam operasional
- [x] Ubah teks jam operasional pada section kontak menjadi “Buka 24 jam”.
- [x] Verifikasi tautan kontak, layout, test, build, dan deployment setelah perubahan.
- [x] Verify WhatsApp and phone contact links remain unchanged and functional after the copy update.
- [x] Capture both desktop and mobile visual checks for the contact section after the 24-hour copy change.
- [x] Save/deploy a new checkpoint and verify “Buka 24 jam” on the published domain(s).
- [x] Save a new checkpoint after the operating-hours change.
- [x] Verify the published domain(s) show “Buka 24 jam” in the contact section after deployment.

## Sinkronisasi jam operasional Manus
- [x] Resolve Manus-domain deployment lag so its live contact section also displays “Buka 24 jam”.
- [x] Re-verify the updated operating-hours copy and contact links on both public domains after the synchronized refresh.

## Visibilitas layanan 24 jam
- [x] Tambahkan badge “Buka 24 Jam” yang menarik dan aksesibel pada header.
- [x] Perbarui tombol WhatsApp melayang dengan keterangan layanan 24 jam.
- [x] Pertahankan navigasi, layout responsive, dan target CTA yang sudah ada.
- [x] Jalankan test, build, pemeriksaan aksesibilitas, dan verifikasi desktop/mobile.
- [x] Run a focused accessibility verification for the 24-hour header badge and floating WhatsApp control, including accessible names, semantics, focus visibility, and keyboard reachability.
- [x] Save a checkpoint after the focused accessibility verification is complete.

## Sinkronisasi custom domain terbaru
- [x] Diagnose why the latest 24-hour service visibility update is not visible on https://juragankambing.id.
- [x] Compare the latest Manus checkpoint, GitHub Pages artifact, and custom-domain response.
- [x] Synchronize or redeploy the custom-domain artifact without changing the Manus presentation.
- [x] Verify the latest header badge and floating WhatsApp label on juragankambing.id, then save a checkpoint.

## Repeated custom-domain stale update
- [x] Re-diagnose why the latest update is still not visible on https://juragankambing.id without relying only on browser cache.
- [x] Compare uncached custom-domain responses, GitHub Pages workflow output, and current Manus deployment.
- [x] Apply a durable synchronization fix or deployment trigger and preserve the current Manus presentation.
- [x] Reverify juragankambing.id from a fresh request and save a final checkpoint.

## Loading dan interaksi WhatsApp
- [x] Add a lightweight, polished first-load transition without blocking page interaction or harming mobile performance.
- [x] Add hover treatment and tooltip text “Hubungi Kami Sekarang” to the floating WhatsApp control.
- [x] Respect prefers-reduced-motion and preserve accessible names, focus states, and touch usability.
- [x] Run tests/build and desktop/mobile visual verification, then save a checkpoint.

## Verifikasi edit teks visual
- [x] Verify whether the process section already says “Pesan mudah dalam 5 langkah”.
- [x] Apply the exact five-step wording manually if the requested visual edit is absent.
- [x] Run tests/build and save a new checkpoint after verification.

## CTA setelah lima langkah
- [x] Add a WhatsApp CTA immediately after the five-step ordering list.
- [x] Preserve accessible labeling, responsive spacing, and the existing consultation message flow.
- [x] Run tests/build and visual verification, then save a checkpoint.

## Perbaikan simetri mobile tiga section
- [x] Fix horizontal overflow and clipped text in the Qurban section on narrow screens.
- [x] Make the five-step process CTA and process image fit the mobile content width symmetrically.
- [x] Make the customer-story heading, copy, controls, and testimonial cards fit without right-side clipping.
- [x] Preserve desktop composition, run tests/build, verify mobile/desktop screenshots, and save a checkpoint.

## Optimasi gambar proses dan breakpoint 360px
- [x] Create a lighter responsive process-image variant while preserving visual sharpness and aspect ratio.
- [x] Wire process-image srcSet/sizes or host-aware asset selection for mobile loading.
- [x] Add a focused max-width 360px typography and spacing treatment for the affected sections.
- [x] Run tests/build, verify mobile and desktop visuals, and save a checkpoint.

## Lazy-loading galeri dan tombol kembali ke atas
- [x] Ensure every gallery image uses lazy-loading and async decoding consistently.
- [x] Ensure testimonial imagery, if present, uses lazy-loading without changing testimonial content or layout.
- [x] Add an accessible “Kembali ke Atas” button that appears after scrolling on mobile and smoothly returns to the top.
- [x] Respect reduced motion, validate mobile/desktop behavior, run tests/build, and save a checkpoint.

## Badge 24 jam pada mobile
- [x] Ensure the “Buka 24 Jam” badge is visible in the mobile header.
- [x] Tune badge sizing and spacing so it does not crowd the logo, menu, or WhatsApp action.
- [x] Preserve desktop header behavior, run tests/build, verify responsive screenshots, and save a checkpoint.

## Sinkronisasi badge mobile ke domain custom
- [x] Diagnose why the mobile “Buka 24 Jam” badge is absent on https://juragankambing.id while present on the Manus domain.
- [x] Compare fresh live HTML and current GitHub Pages source/workflow artifact.
- [x] Redeploy the current mobile badge artifact to the custom domain without changing the Manus version.
- [x] Verify both domains after deployment and save a synchronization checkpoint.

## Pulse badge Buka 24 Jam
- [x] Add a subtle pulse animation to the “Buka 24 Jam” badge.
- [x] Preserve badge readability and avoid distracting motion on mobile and desktop.
- [x] Disable non-essential pulse motion for prefers-reduced-motion users, then run tests/build, verify visuals, and save a checkpoint.

## Sinkronisasi versi mobile terbaru
- [x] Diagnose why the latest mobile update is not visible on https://juragankambing.id.
- [x] Compare fresh mobile-specific responses and bundle markers between the custom and Manus domains.
- [x] Redeploy or repair the custom-domain artifact so mobile receives the latest version.
- [x] Verify mobile parity on both domains and save a checkpoint.

## Integrasi Resend untuk form permintaan
- [x] Configure Resend API key as a server-side secret only.
- [x] Send request-form submissions from noreply@juragankambing.id to digitechsmart4@gmail.com.
- [x] Add validated backend submission handling with success and error feedback in the form.
- [x] Use noreply@juragankambing.id as the verified sender; document that Reply-To is intentionally omitted because the form collects WhatsApp, not a consumer email address.
- [x] Add tests for validation and email request construction, then save a checkpoint.

## Email konsumen dan Reply-To
- [x] Add a required consumer email field to the request form with accessible label and mobile-safe layout.
- [x] Validate the email on the backend and include it in the request email details.
- [x] Set Resend Reply-To to the validated consumer email.
- [x] Add/update unit tests, run tests/build, verify responsive form layout, and save a checkpoint.
- [x] Save a new checkpoint after the consumer email and Reply-To form update, then verify the published project state.
- [x] Verify the published post-checkpoint state for version 509d841c, including the consumer email field and Reply-To-enabled form behavior.
- [x] Capture a post-publish mobile/desktop check confirming the email field is visible, responsive, and aligned with the published form.

## Kolom Domisili pada form permintaan
- [x] Add a required Domisili select field with Ciputat, Pamulang, Pondok Aren, Bintaro, Serpong, BSD, Depok, Bojongsari, Gunung Sindur, DKI Jakarta, and Lainnya.
- [x] Validate the selected Domisili on the backend and include it in the Resend email details.
- [x] Preserve accessible labeling and responsive form layout, update tests, run build, and save a checkpoint.

## Pengembangan lanjutan: ringkasan, WhatsApp, dan dashboard admin
- [x] Add a pre-submit request summary step with edit and confirm actions, preserving accessible responsive behavior.
- [x] Persist contact requests securely and provide a manual WhatsApp follow-up link to 085211885000 after successful email delivery, with email-status tracking and failure handling.
- [x] Add an admin-only request-history dashboard with protected server procedure, useful status/date/contact fields, and responsive empty/loading/error states.
- [x] Add/update Vitest coverage, run tests and production build, verify desktop/mobile flows, and save a publish checkpoint.

## Admin OAuth digitechsmart4@gmail.com
- [x] Audit the users schema and OAuth identity mapping without storing the supplied password.
- [x] Create or repair the users table using the existing schema and promote the authenticated Manus account for digitechsmart4@gmail.com to admin only after identity verification.
- [ ] Verify protected dashboard access, update tests, run the production build, document the OAuth-only setup, and save a checkpoint.

## Perbaikan redirect login admin
- [x] Return OAuth login to the protected page that initiated sign-in, especially `/admin/requests`, instead of always landing on `/`.
- [x] Validate the return path to prevent open redirects and preserve existing OAuth CSRF protections.
- [ ] Add/update tests, verify the authenticated admin dashboard flow, and save a checkpoint.

## OAuth redirect masih kembali ke homepage
- [x] Reproduce the deployed login flow and identify whether the callback, OAuth state, or deployment artifact drops the admin return path.
- [x] Apply a deployment-compatible fix that returns the verified admin account to `/admin/requests` without weakening CSRF or open-redirect protections.
- [ ] Add regression coverage, verify the live flow with the user session, and save a checkpoint.
