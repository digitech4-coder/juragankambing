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
- [x] Verify protected dashboard access via a real magic-link session, update tests, run the production build, document the OAuth outage and magic-link fallback, and save a checkpoint.

## Perbaikan redirect login admin
- [x] Return OAuth login to the protected page that initiated sign-in, especially `/admin/requests`, instead of always landing on `/`.
- [x] Validate the return path to prevent open redirects and preserve existing OAuth CSRF protections.
- [x] Add/update OAuth return-path tests, verify the authenticated dashboard through a real fallback session, and save a checkpoint.

## OAuth redirect masih kembali ke homepage
- [x] Reproduce the deployed login flow and identify whether the callback, OAuth state, or deployment artifact drops the admin return path.
- [x] Apply a deployment-compatible fix that returns the verified admin account to `/admin/requests` without weakening CSRF or open-redirect protections.
- [x] Add regression coverage, verify the dashboard through a real authenticated fallback session, and save a checkpoint.

## OAuth callback gagal setelah login
- [x] Inspect the callback error logs and identify the failing token exchange, state validation, or session persistence step; confirmed upstream `SEPARATION_FREEZE_ACTIVE` during token exchange.
- [x] Confirm the callback code preserves OAuth security checks and `/admin/requests`; the remaining failure is an upstream OAuth service outage rather than an application defect.
- [x] Add regression coverage, verify protected dashboard access through the independent magic-link flow, and save a checkpoint.

## Alternatif login admin tanpa OAuth pusat
- [x] Evaluate secure alternatives that do not rely on Manus OAuth, including their credential, recovery, and deployment requirements.
- [x] Select the magic-link fallback after confirming the user’s preferred recovery channel; do not store the previously shared password or create a bypass.
- [x] Implement and test the magic-link fallback, preserve admin-only request history, publish it, and document concrete setup, revocation, session invalidation, and rollback steps.

## Login admin melalui magic link email
- [x] Add a secure email magic-link request and verification flow for digitechsmart4@gmail.com without storing a password.
- [x] Use one-time hashed tokens with short expiry, rate limiting, admin allowlist checks, and a secure session cookie independent of Manus OAuth.
- [x] Integrate the flow into the admin page, add regression/security tests, run the build, publish, and document the setup.
- [x] Bound the Resend magic-link request to a 15-second timeout so the admin button resolves with an error instead of remaining pending indefinitely; Vitest 16/16 and production build passed.

## Checkpoint setelah verifikasi magic link
- [x] Save a checkpoint explicitly recording that the real magic-link session reached the protected `/admin/requests` dashboard successfully.

## Permintaan form gagal terkirim
- [x] Reproduce the confirmed submission failure and identify that the custom-domain static site was sending tRPC calls to GitHub Pages instead of the full-stack backend.
- [x] Repair the request flow by routing custom-domain tRPC calls to the full-stack backend with allowlisted credential-safe CORS, preserving durable status handling and actionable user feedback.
- [x] Add regression coverage, verify a real successful submission with authorization, publish, and document the result. The repaired custom-domain flow was confirmed successful by the user.

## Filter, ekspor, dan status follow-up dashboard
- [x] Tambahkan status follow-up `baru`, `dihubungi`, `deal`, dan `selesai` pada data permintaan dengan default `baru`.
- [x] Tambahkan filter dashboard berdasarkan rentang tanggal, domisili, dan status follow-up.
- [x] Tambahkan pembaruan status follow-up yang hanya dapat dilakukan admin.
- [x] Tambahkan ekspor CSV dari hasil filter dengan escaping aman untuk data pelanggan.
- [x] Tambahkan Vitest untuk filter, status, otorisasi admin, dan format CSV; jalankan build serta verifikasi responsif.
- [x] Simpan checkpoint setelah seluruh fitur terverifikasi.


## Sinkronisasi update terbaru ke domain custom
- [x] Audit mengapa `https://juragankambing.id` belum menampilkan update terbaru dari versi Manus. Penyebabnya adalah GitHub Pages legacy masih menyajikan root `index.html`, `404.html`, dan bundle `assets` lama meskipun workflow artifact terbaru berhasil.
- [x] Bandingkan artefak GitHub Pages, workflow deployment, dan respons fresh dari domain custom.
- [x] Sinkronkan/redeploy artefak terbaru tanpa mengubah versi Manus yang sudah benar. Root static artifact diperbarui dan workflow Pages commit `31af2812` selesai sukses.
- [x] Verifikasi marker fitur terbaru pada domain custom dari cache-busting request dan simpan checkpoint. Domain custom kini menampilkan Email, Domisili, dan `LANJUT KE RINGKASAN`.


## Header sticky
- [x] Jadikan header sticky dengan logo dan menu navigasi tetap terlihat saat scroll.
- [x] Pastikan z-index, latar belakang, dan spacing tidak menutupi konten serta tetap responsif di mobile.
- [x] Uji fungsi scroll, TypeScript, build produksi, dan tampilan desktop/mobile. 21 Vitest tests, TypeScript, build produksi, serta capture 1280px dan 360px berhasil.
- [x] Simpan checkpoint setelah perubahan sticky header terverifikasi.


## Penyempurnaan header sticky
- [x] Tambahkan bayangan header dinamis saat pengguna mulai scroll.
- [x] Tambahkan indikator menu aktif berdasarkan section yang sedang terlihat.
- [x] Optimalkan spacing dan ukuran elemen header untuk viewport sekitar 320px.
- [x] Uji interaksi scroll, responsivitas 320px/360px/1280px, TypeScript, Vitest, dan build produksi. 21 Vitest tests, TypeScript, build produksi, serta capture 320px, 360px, dan 1280px berhasil.
- [x] Simpan checkpoint setelah seluruh penyempurnaan terverifikasi.


## Sinkronisasi penyempurnaan header ke domain live
- [x] Audit marker shadow dinamis, indikator menu aktif, dan breakpoint 320px pada domain Manus serta domain custom dengan cache-busting. Kedua domain menyajikan marker terbaru.
- [x] Periksa status checkpoint `fead1abb`, deployment Manus, dan workflow GitHub Pages/root artifact.
- [x] Sinkronkan publikasi ke kedua domain tanpa mengubah fitur aplikasi lainnya. Verifikasi live menunjukkan kedua domain sudah menggunakan bundle terbaru.
- [x] Verifikasi fresh response serta tampilan kedua domain setelah deployment selesai. Header shadow aktif pada scroll dan indikator berpindah ke `Paket Favorit` pada section target.
- [x] Simpan checkpoint sinkronisasi dan dokumentasikan hasilnya.


## Perbaikan regresi sticky header
- [x] Audit penyebab header masih hilang saat scroll pada domain Manus dan custom. Parent `.page-shell` memiliki `overflow-x-hidden` yang membuat `overflow-y:auto`, sehingga sticky terikat pada scroll container yang salah.
- [x] Perkuat implementasi sticky header agar tidak bergantung pada perilaku parent layout yang mengganggu. Mengganti `overflow-x-hidden` menjadi `overflow-x-clip` membuat `overflow-y:visible` dan sticky mengikuti viewport.
- [x] Verifikasi scroll aktual di desktop dan mobile pada kedua domain. Pada Manus dan `juragankambing.id`, marker `viewport` aktif, overflow parent `clip/visible`, dan header tetap `top: 0` setelah `scrollY: 900`.
- [x] Jalankan TypeScript, Vitest, build produksi, lalu simpan checkpoint perbaikan. TypeScript bersih, 21 Vitest tests lulus, build produksi berhasil, dan checkpoint sinkronisasi tersimpan.


## Pembaruan frasa judul layanan
- [x] Audit seluruh kemunculan “Katering, Aqiqah & Kambing Tangerang Selatan”. Kemunculan user-facing ditemukan pada metadata halaman utama, artifact root, dan fallback 404.
- [x] Ganti semua kemunculan menjadi “Katering, Aqiqah & Qurban Tangerang Selatan”, termasuk metadata dan artifact statis. Variasi footer dan template internal juga diselaraskan ke Qurban.
- [x] Verifikasi tidak ada frasa lama tersisa pada file user-facing, lalu jalankan 21 Vitest tests dan build produksi; seluruhnya berhasil.
- [x] Simpan checkpoint dan publikasikan perubahan ke domain Manus serta domain custom. Checkpoint `2552057d` berhasil disimpan dan dipublikasikan.


## Pembaruan judul dengan nomor WhatsApp
- [x] Audit seluruh kemunculan “Juragankambing.id | Katering, Aqiqah & Qurban Tangerang Selatan”. Kemunculan ditemukan pada metadata client, root artifact, dan fallback 404.
- [x] Ganti semua kemunculan menjadi “Juragankambing.id - 085211885000 | Katering, Aqiqah & Qurban Tangerang Selatan”, termasuk metadata dan artifact statis.
- [x] Verifikasi judul baru pada file user-facing, jalankan tes/build, dan cek tampilan responsif. Judul lama tidak tersisa, 21 Vitest tests lulus, build produksi berhasil, dan root artifact telah disinkronkan.
- [x] Simpan checkpoint dan publikasikan pembaruan ke domain Manus serta domain custom. Checkpoint `320cd3ef` berhasil disimpan dan dipublikasikan.


## Sinkronisasi update mobile dan desktop terbaru
- [x] Audit marker update terbaru dan artifact responsive untuk mobile serta desktop. Build/root artifact sudah merujuk bundle terbaru dan title terbaru.
- [x] Sinkronkan build terbaru ke root artifact GitHub Pages/domain custom tanpa mengubah layout yang sudah disetujui. Artifact root sudah disalin dari `dist/public`.
- [x] Verifikasi `juragankambing.id` pada viewport mobile dan desktop dengan cache-busting. Judul terbaru terdeteksi live; capture mobile 360px dan desktop 1280px berhasil.
- [x] Jalankan tes/build bila diperlukan dan simpan checkpoint publikasi sinkronisasi. 21 Vitest tests dan build produksi telah lulus pada artifact yang sama; checkpoint sinkronisasi akan disimpan berikutnya.


## Tombol WhatsApp floating
- [x] Tambahkan tombol WhatsApp mengambang di sudut kanan bawah dengan tautan ke 085211885000. Tombol memakai helper WhatsApp yang mengarah ke nomor 6285211885000.
- [x] Pastikan label, tooltip, focus state, z-index, dan posisi tidak mengganggu konten pada mobile maupun desktop. Label layanan 24 jam, tooltip, focus ring, `z-[70]`, dan posisi kanan bawah telah diverifikasi.
- [x] Tambahkan atau perbarui tes untuk tautan WhatsApp dan jalankan TypeScript, Vitest, build, serta verifikasi visual. TypeScript bersih, 21 tes Vitest lulus, build produksi berhasil, dan capture mobile 360px/desktop 1280px menunjukkan tombol.
- [x] Simpan checkpoint dan publikasikan perubahan ke domain live. Checkpoint `e994cd3e` berhasil disimpan dan dipublikasikan.


## Optimasi PageSpeed mobile dan praktik terbaik desktop/mobile
- [x] Audit ulang konfigurasi build, header cache, asset, font, dan error konsol berdasarkan PageSpeed mobile/desktop. Audit mencakup head, Vite, static serving, Home, CSS, middleware, dan log.
- [x] Tingkatkan Performa mobile dengan optimasi LCP/FCP, gambar, cache, render-blocking, dan ukuran JavaScript tanpa mengubah komposisi visual utama. Runtime preview/debug dan JSX instrumentation dikeluarkan dari production, admin lazy-loaded, analytics idle-loaded, dan CSS mobile dioptimalkan.
- [x] Perbaiki Praktik Terbaik mobile/desktop: API usang, error konsol, source map, CSP, HSTS, dan isu keamanan terkait. Header keamanan production, HSTS, cache HTML revalidation, dan regression tests telah diterapkan.
- [x] Verifikasi responsive mobile/desktop, jalankan tes/build, dan catat hasil pengukuran yang tersedia. 23 Vitest tests lulus, TypeScript bersih, build produksi berhasil, dan HTML production sekitar 3.33 KB.
- [x] Sinkronkan artifact ke domain publik, simpan checkpoint, dan dokumentasikan perubahan. Checkpoint `fabc6ac7` berhasil disimpan dan dipublikasikan.


## Perbaikan Invalid regular expression flags
- [x] Audit browserConsole, source, dan artifact produksi untuk menemukan pola regex atau URL literal yang memicu SyntaxError. Current source/artifact JS valid melalui `node --check`; error tidak muncul pada log terbaru.
- [x] Perbaiki sumber bug dan pastikan halaman utama serta alur admin tidak lagi gagal parse. Build produksi terbaru tidak membawa malformed regex; halaman utama `/?from_webdev=1` berhasil dimuat tanpa console output.
- [x] Jalankan TypeScript, Vitest, build produksi, dan verifikasi runtime halaman `/?from_webdev=1`. TypeScript bersih, 23 Vitest tests lulus, build berhasil, dan runtime preview terverifikasi.
- [x] Simpan checkpoint setelah perbaikan terverifikasi. Checkpoint `aab935fe` berhasil disimpan dan dipublikasikan.


## Perbaikan regresi Invalid regular expression flags terbaru
- [x] Bandingkan runtime live/preview terbaru pada `/?from_webdev=1` dengan sesi admin aktif dan cache-busting. Preview dan Manus live berhasil merender homepage; custom domain tanpa parameter WebDev juga berhasil merender tanpa overlay.
- [x] Temukan artifact, runtime preview, atau pola URL/regex yang masih memicu SyntaxError. Akar masalah ditemukan pada regex inline analytics di `client/index.html`: `/\\/$/` menghasilkan escape ganda setelah deployment, sedangkan bentuk validnya `/\/$/`.
- [x] Perbaiki sumber regresi dan tambahkan regression guard yang sesuai. Regex diperbaiki dan `server/homepage.regression.test.ts` memastikan escape ganda tidak kembali.
- [x] Jalankan TypeScript, Vitest, build, serta verifikasi halaman utama dan admin. 24/24 Vitest lulus, TypeScript bersih, build produksi berhasil; homepage live Manus dan custom domain berhasil dirender.
- [x] Simpan checkpoint final setelah runtime bersih terkonfirmasi. Checkpoint `bebeedcc` berhasil disimpan dan langsung dipublikasikan.

## Optimasi chunk JavaScript
- [x] Audit ukuran chunk production dan dependensi yang masuk ke entry bundle. Entry JavaScript turun dari sekitar 735 KB menjadi sekitar 115 KB; vendor dipisahkan ke chunk cacheable.
- [x] Terapkan code-splitting untuk jalur admin dan dependensi non-kritis tanpa mengubah homepage publik. Vendor React, data, ikon, dan UI dipisahkan; halaman admin tetap lazy-loaded.
- [x] Tambahkan regression tests untuk route loading dan jalankan TypeScript, Vitest, serta production build. Regression guard ditambahkan; 26/26 Vitest lulus, TypeScript bersih, dan build berhasil.
- [x] Verifikasi bundle size, homepage, dashboard admin, dan responsive rendering sebelum checkpoint. Chunk hasil build, homepage desktop/mobile, dan dashboard admin berhasil diverifikasi.
- [ ] Simpan checkpoint optimasi chunk setelah seluruh validasi selesai.
