# Hero Loading Audit

Audit endpoint 2026-08-28:

| Endpoint | Status | Content-Type | Download | Catatan |
|---|---:|---|---:|---|
| https://juragankambing.id/image/juragankambing-hero.webp | 200 | image/webp | 221,946 bytes | Custom domain desktop hero berhasil |
| https://juragankambing.id/image/juragankambing-hero-mobile.webp | 200 | image/webp | 49,936 bytes | Custom domain mobile hero berhasil |
| https://juragankam-5f36bibh.manus.space/manus-storage/juragankambing-hero_bd742d57.jpg | 200 | image/jpeg | 5,056,146 bytes | Manus asset berhasil, tetapi sangat besar dan redirect ke CloudFront |
| https://juragankam-5f36bibh.manus.space/manus-storage/juragankambing-hero-mobile_9dea06c1.webp | 200 | image/webp | 49,936 bytes | Manus mobile asset berhasil dan redirect ke CloudFront |
| https://3000-ii2qwi3h52to2qf6sy8m7-29814c6c.sg1.manus.computer/manus-storage/juragankambing-hero_bd742d57.jpg | 200 | image/jpeg | 5,056,146 bytes | Preview asset berhasil, tetapi sangat besar dan redirect ke CloudFront |

Kesimpulan awal: URL tidak 404 pada request langsung. Jalur Manus/preview memakai JPEG desktop sekitar 5.06 MB, sedangkan custom domain memakai WebP sekitar 222 KB. Perbedaan format/ukuran dan redirect presigned CloudFront berpotensi membuat LCP tidak konsisten. Kode saat ini memilih asset berdasarkan hostname dan preload inline memilih desktop URL sebagai `href` walaupun `imagesrcset` juga berisi mobile.
