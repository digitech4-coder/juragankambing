# Website image assets

Folder ini menjadi indeks aset gambar untuk kebutuhan ekspor dan pengelolaan aset website JuraganKambing.id.

Dalam deployment Manus, gambar produksi tetap direferensikan melalui URL penyimpanan persisten `/manus-storage/...` agar proses build dan hosting tetap aman. Arsip file gambar asli untuk kebutuhan ekspor atau pemindahan ke repository GitHub berada di `/home/ubuntu/webdev-static-assets/image/` pada workspace ini.

Gunakan `asset-manifest.json` sebagai pemetaan nama file lokal dan referensi produksi. Saat mengekspor ke GitHub di luar Manus, salin file dari arsip tersebut ke folder `image/`, lalu ubah referensi `src` di `client/src/pages/Home.tsx` menjadi `/image/<nama-file>` jika hosting tujuan menyediakan file statis lokal.
