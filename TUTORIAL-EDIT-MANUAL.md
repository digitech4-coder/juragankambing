# Tutorial Edit Manual Website JuraganKambing.id

## Tujuan tutorial

Dokumen ini menjelaskan cara mengubah tulisan, mengganti gambar, memperbarui logo, dan mempublikasikan perubahan pada website JuraganKambing.id. Ada dua jalur kerja yang tersedia:

| Jalur | Cocok untuk | Kelebihan | Hal yang perlu diperhatikan |
|---|---|---|---|
| **Manus WebDev** | Perubahan cepat, aman, dan visual pada project full-stack | Dapat melihat preview, menyimpan checkpoint, menggunakan Managed File Storage, dan memiliki fitur login admin | Perubahan harus disimpan melalui checkpoint agar menjadi versi project yang dapat dipulihkan |
| **GitHub** | Pengguna yang ingin mengedit source code secara mandiri atau bekerja melalui GitHub Pages | Riwayat perubahan jelas, dapat diedit melalui browser GitHub, dan deployment dapat berjalan otomatis | GitHub Pages bersifat statis; gambar harus berada di repository dan tidak boleh memakai URL storage Manus |

> **Rekomendasi utama:** gunakan **Manus untuk mengelola project utama dan File Storage**, lalu gunakan **GitHub sebagai salinan/deployment statis**. Untuk perubahan sederhana pada website GitHub Pages, edit melalui GitHub dengan hati-hati dan tunggu GitHub Actions selesai.

---

## 1. Struktur file penting

Source utama halaman homepage berada di:

```text
client/src/pages/Home.tsx
```

File tersebut berisi headline, deskripsi layanan, FAQ, testimoni, CTA WhatsApp, nomor telepon, alamat, link Maps, dan referensi gambar.

File konfigurasi favicon berada di:

```text
client/index.html
```

File metadata gambar berada di:

```text
image/asset-manifest.json
```

Pada deployment GitHub Pages, gambar website disimpan di:

```text
image/
```

Contoh nama file gambar yang digunakan:

```text
image/juragankambing-hero.jpg
image/juragankambing-katering.jpg
image/juragankambing-aqiqah.jpg
image/juragankambing-paket-hemat.png
image/juragankambing-paket-standar.png
image/juragankambing-paket-super.png
image/juragankambing-paket-istimewa.png
image/PaketKambingGuling.png
image/proses-aqiqah-tanpa-judul.png
image/juragankambing-logo-transparent.png
```

---

## 2. Cara paling aman mengedit melalui Manus

### 2.1 Mengubah tulisan

Buka project JuraganKambing.id di Manus, kemudian gunakan instruksi perubahan yang spesifik. Contoh instruksi yang baik:

> Ubah headline hero dari “Katering, Aqiqah & Qurban” menjadi “Katering, Aqiqah & Qurban Tangerang Selatan”. Jangan mengubah tombol, gambar, warna, dan section lain.

Untuk mengubah deskripsi layanan:

> Pada kartu layanan “Snack Box”, ubah deskripsinya menjadi “Snack box praktis untuk meeting, pengajian, seminar, dan acara keluarga.” Pertahankan judul, ikon, link, dan tombol WhatsApp.

Untuk mengubah informasi bisnis:

> Ubah nomor telepon bisnis menjadi 085211885000 pada footer dan semua link telepon. Jangan mengubah nomor WhatsApp atau alamat.

Setelah perubahan dibuat, buka **Preview** dan periksa versi desktop serta mobile. Pastikan teks tidak terpotong, warna tetap memiliki kontras, dan tombol masih dapat ditekan.

### 2.2 Mengganti gambar melalui File Storage

Project full-stack menyediakan halaman admin:

```text
/storage
```

Langkahnya:

1. Buka domain Manus project dan tambahkan `/storage` pada akhir URL.
2. Login menggunakan akun owner/admin.
3. Tekan tombol **Unggah file**.
4. Pilih gambar baru dengan format JPG, PNG, atau WebP.
5. Pastikan ukuran file tidak lebih dari **8 MB**.
6. Setelah upload selesai, tekan **Buka file** pada file yang baru diunggah.
7. Salin URL storage yang ditampilkan.
8. Minta Manus mengganti referensi gambar pada section yang tepat menggunakan URL tersebut.

Contoh instruksi:

> Gunakan gambar baru dari URL File Storage berikut untuk gambar hero homepage: `URL_STORAGE_BARU`. Pertahankan rasio, bingkai, bayangan, alt text, dan komposisi responsif. Jangan mengubah gambar paket aqiqah atau gambar logo.

Untuk penggantian logo:

> Ganti hanya logo header, footer, dan favicon menggunakan URL File Storage berikut: `URL_LOGO_BARU`. Pastikan file memiliki background transparan. Jangan mengubah logo yang tertanam di gambar menu dan paket.

### 2.3 Menyimpan perubahan Manus

Setelah preview benar, simpan checkpoint. Checkpoint berguna untuk:

- Menyimpan versi yang dapat dipulihkan.
- Menjadikan perubahan tersedia pada project Manus.
- Menghindari kehilangan perubahan ketika terjadi kesalahan berikutnya.
- Mengetahui versi mana yang sedang digunakan.

Jangan menghapus aset lama dari File Storage sebelum memastikan tidak ada section yang masih menggunakannya.

---

## 3. Cara mengedit tulisan melalui GitHub

Website GitHub Pages menggunakan source code repository:

```text
https://github.com/digitech4-coder/juragankambing
```

Langkah melalui browser GitHub:

1. Buka repository tersebut.
2. Masuk ke folder `client/src/pages`.
3. Buka file `Home.tsx`.
4. Tekan tombol **Edit this file**.
5. Gunakan pencarian browser dengan `Ctrl+F` atau `Cmd+F` untuk mencari tulisan yang ingin diubah.
6. Ubah teks secukupnya tanpa menghapus tanda kutip, kurung, atau struktur JSX.
7. Gulir ke bagian bawah halaman.
8. Isi pesan commit, misalnya `Update hero headline`.
9. Tekan **Commit changes**.
10. Buka tab **Actions** dan tunggu workflow `deploy-pages.yml` selesai dengan status hijau.
11. Buka URL GitHub Pages menggunakan query baru jika browser masih menampilkan cache lama:

```text
https://digitech4-coder.github.io/juragankambing/?v=baru
```

### Contoh perubahan teks

Sebelum:

```tsx
<h1> Katering,<br /><span>Aqiqah &</span><br />Qurban. </h1>
```

Sesudah:

```tsx
<h1> Katering,<br /><span>Aqiqah &</span><br />Qurban Tangerang Selatan. </h1>
```

Jangan mengubah tag HTML/JSX secara sembarangan. Jika hanya ingin mengubah kalimat, ubah isi teks di antara tag saja.

### Mengubah nomor WhatsApp atau telepon

Di bagian atas `Home.tsx`, terdapat konstanta seperti berikut:

```tsx
const WHATSAPP_NUMBER = "6285211885000";
const BUSINESS_PHONE = "085211885000";
```

Nomor WhatsApp harus menggunakan format internasional tanpa tanda `+`, spasi, atau tanda hubung. Nomor telepon tampilan boleh menggunakan format lokal.

Contoh:

```tsx
const WHATSAPP_NUMBER = "6285211885000";
const BUSINESS_PHONE = "085211885000";
```

Setelah mengubah nomor, periksa semua tombol WhatsApp dan tombol telepon pada footer.

---

## 4. Cara mengganti gambar melalui GitHub

### 4.1 Upload gambar baru

1. Buka repository GitHub.
2. Masuk ke folder `image`.
3. Tekan **Add file** lalu pilih **Upload files**.
4. Pilih gambar dari komputer.
5. Gunakan nama file yang sederhana, tanpa spasi dan tanpa karakter khusus.
6. Contoh nama yang baik:

```text
hero-tangerang-selatan-2026.jpg
paket-aqiqah-hemat-baru.png
logo-juragankambing-transparent.png
```

7. Commit file tersebut ke branch `main`.

### 4.2 Ganti referensi gambar di `Home.tsx`

Cari objek `asset` atau referensi gambar lama. Untuk GitHub Pages gunakan path repository-relative:

```tsx
const asset = {
  hero: "image/hero-tangerang-selatan-2026.jpg",
  katering: "image/juragankambing-katering.jpg",
  aqiqah: "image/juragankambing-aqiqah.jpg",
  tumpeng: "image/juragankambing-tumpeng.jpg",
  mark: "image/logo-juragankambing-transparent.png",
};
```

Untuk gambar yang dipakai langsung pada kartu, gunakan pola yang sama:

```tsx
image: "image/paket-aqiqah-hemat-baru.png"
```

Setelah itu commit perubahan source code. GitHub Actions akan membangun ulang website.

### 4.3 Aturan penting path gambar

Untuk **GitHub Pages**, gunakan:

```tsx
"image/nama-file.jpg"
```

Jangan gunakan:

```tsx
"/manus-storage/nama-file.jpg"
```

Path `/manus-storage/...` hanya cocok untuk project Manus yang memiliki storage proxy. GitHub Pages tidak memiliki akses ke proxy tersebut.

Jangan gunakan path komputer lokal:

```tsx
"/home/ubuntu/gambar.jpg"
```

Path tersebut hanya ada di komputer pengembang dan tidak akan tersedia untuk pengunjung website.

### 4.4 Mengubah favicon

Buka:

```text
client/index.html
```

Pastikan referensi favicon menggunakan file yang benar dan tersedia dalam hasil deployment. Jika workflow menggunakan base path GitHub Pages, gunakan konfigurasi yang sudah ada dan jangan mengubahnya menjadi path komputer lokal.

Setelah favicon diganti, browser sering menyimpan favicon lama. Uji menggunakan jendela incognito atau hard refresh dengan `Ctrl+Shift+R`.

---

## 5. Perbandingan workflow Manus dan GitHub

| Kebutuhan | Pilihan terbaik | Alasan |
|---|---|---|
| Mengubah headline atau deskripsi singkat | Manus | Instruksi bahasa natural lebih aman dan preview tersedia |
| Mengganti gambar untuk project Manus | Manus File Storage | File dikelola secara persistent dan tidak membebani source code |
| Mengganti gambar untuk GitHub Pages | GitHub repository `image/` | GitHub Pages memerlukan aset yang ikut dipublikasikan sebagai file statis |
| Mengubah warna, layout, atau spacing | Manus | Preview visual memudahkan verifikasi desktop dan mobile |
| Mengubah struktur React atau menambah section | GitHub atau Manus dengan instruksi jelas | Perlu pemeriksaan TypeScript dan build |
| Mengubah database atau fitur login | Manus | Backend, schema, migration, dan environment berada di project Manus |
| Mengedit banyak file sekaligus | GitHub branch dan pull request | Lebih mudah ditinjau dan dikembalikan |
| Perubahan cepat pada website live | Manus lalu checkpoint | Lebih terkontrol dan memiliki version history |

---

## 6. Workflow yang disarankan

Gunakan alur berikut untuk perubahan rutin:

1. Siapkan tulisan atau gambar baru di komputer.
2. Untuk perubahan visual sederhana, minta Manus mengedit project dan jelaskan batas perubahan dengan spesifik.
3. Untuk asset project Manus, upload gambar melalui `/storage` dan gunakan URL yang dihasilkan.
4. Untuk GitHub Pages, upload salinan gambar ke folder `image/` GitHub dan gunakan path `image/nama-file.ext`.
5. Uji homepage pada desktop dan mobile.
6. Periksa tombol WhatsApp, telepon, Maps, FAQ, dan form kontak.
7. Simpan checkpoint Manus jika project Manus diubah.
8. Pastikan GitHub Actions berhasil sebelum membagikan URL GitHub Pages.
9. Gunakan query cache-busting seperti `?v=2026-08-19` saat memeriksa perubahan gambar atau favicon.

---

## 7. Checklist sebelum dan sesudah edit

### Sebelum edit

- [ ] Backup atau catat nama file lama.
- [ ] Pastikan gambar baru memiliki ukuran dan rasio yang sesuai.
- [ ] Pastikan background logo benar-benar transparan jika digunakan sebagai logo.
- [ ] Jangan mengubah logo yang tertanam dalam gambar paket kecuali memang diperlukan.

### Sesudah edit

- [ ] Judul dan paragraf tidak terpotong di mobile.
- [ ] Semua gambar tampil tanpa ikon gambar rusak.
- [ ] Alt text gambar masih sesuai.
- [ ] Tombol WhatsApp membuka nomor yang benar.
- [ ] Link telepon dan Google Maps berfungsi.
- [ ] Favicon berubah setelah hard refresh.
- [ ] GitHub Actions berstatus berhasil.
- [ ] Tidak ada URL `/manus-storage/` yang tersisa pada source GitHub Pages.
- [ ] Tidak ada path `/home/ubuntu/` atau path komputer lokal di source code.

> **Ringkasan keputusan:** untuk mengedit project utama dan mengelola file besar, gunakan Manus. Untuk mengubah deployment GitHub Pages, gunakan GitHub dan pastikan seluruh gambar berada di folder `image/` serta direferensikan dengan path `image/nama-file.ext`.
