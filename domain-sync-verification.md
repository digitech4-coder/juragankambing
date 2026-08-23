# Verifikasi sinkronisasi domain custom — 23 Agustus 2026

URL yang diperiksa: `https://juragankambing.id/?sync_check=31af2812` dan `https://juragankam-5f36bibh.manus.space/?sync_check=20260823`.

Sebelum perbaikan, domain custom menampilkan form lama tanpa field Email/Domisili dan tombol `KIRIM PERMINTAAN`. Domain Manus menampilkan field `contact-email`, `contact-domisili`, serta tombol `LANJUT KE RINGKASAN`.

Audit repository menunjukkan GitHub Pages berstatus built dengan custom domain `juragankambing.id`, tetapi root `index.html`, `404.html`, dan `assets/index-CE-laOyI.js` masih merupakan artifact lama. Workflow Pages untuk commit `31af2812` kemudian selesai sukses pada run `32614848932` dan `32614848731`.

Setelah root artifact disalin dari build terbaru, permintaan cache-busting pada domain custom menampilkan `Email`, `Domisili` dengan 11 opsi regional, dan `LANJUT KE RINGKASAN`, sehingga domain custom telah menerima update terbaru tanpa mengubah versi Manus.
