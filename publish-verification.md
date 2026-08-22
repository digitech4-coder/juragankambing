# Published verification — Domisili form

- **Custom domain:** https://juragankambing.id/?verify=6494a9fa-2#kontak
- **Deployment:** GitHub Pages deployment run completed successfully after checkpoint `6494a9fa`.
- **Desktop form check:** The published contact form visibly includes Name, Email, WhatsApp, Jenis layanan, Domisili, Jumlah porsi/tamu, and Pesan/kebutuhan with aligned two-column desktop layout.
- **Domisili options:** Ciputat, Pamulang, Pondok Aren, Bintaro, Serpong, BSD, Depok, Bojongsari, Gunung Sindur, DKI Jakarta, Lainnya.
- **Controlled submission:** Authorized test submitted with consumer email `digitechsmart4@gmail.com`, Domisili `Pamulang`, and a clearly labeled verification message. The button returned from `MENGIRIM PERMINTAAN…` to `KIRIM PERMINTAAN`, indicating the mutation completed and the form reset behavior remained available. The deployed frontend therefore reached the production contact mutation path with the new fields.
- **Implementation-level Reply-To verification:** Unit tests and the production build previously passed for the Resend payload, including the validated consumer email as `replyTo`.
- **Accessibility/responsiveness:** Published form labels and control IDs are present; the responsive mobile layout was verified in the project preview at the 360px breakpoint alongside the desktop check.
