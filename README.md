# Panduan Penggunaan SIPALING - Website Dokumentasi

Website statis untuk dokumentasi dan panduan penggunaan aplikasi SIPALING (Sistem Informasi Pelayanan DLHK).

## 📁 Struktur Project

```
webTutorSIB/
│
├── index.html          # Halaman utama (single page application)
├── style.css           # Stylesheet untuk tampilan website
├── script.js           # JavaScript untuk navigasi dan interaksi
├── README.md           # File ini
│
├── assets/
│   ├── images/         # Folder untuk screenshot panduan
│   └── icons/          # Folder untuk icon (jika diperlukan)
│
└── videos/             # Folder untuk video tutorial
    ├── login.mp4
    ├── dashboard.mp4
    └── surat-biaya.mp4
```

## 🚀 Cara Deploy ke GitHub Pages

### Langkah 1: Buat Repository GitHub

1. Login ke GitHub
2. Klik tombol "+" di pojok kanan atas
3. Pilih "New repository"
4. Beri nama repository (misal: `webtutor-sib`)
5. Set repository sebagai "Public"
6. Klik "Create repository"

### Langkah 2: Upload File ke GitHub

**Option A: Menggunakan GitHub Web Interface**
1. Di repository yang baru dibuat, klik "uploading an existing file"
2. Drag & drop semua file dan folder dari `webTutorSIB/`
3. Pastikan struktur folder tetap sama
4. Scroll ke bawah dan klik "Commit changes"

**Option B: Menggunakan Git Command Line**
```bash
cd "c:/laragon/www/SIB1 - infinityFreewithWebTutorial/webTutorSIB"
git init
git add .
git commit -m "Initial commit - Panduan SIPALING"
git branch -M main
git remote add origin https://github.com/USERNAME/webtutor-sib.git
git push -u origin main
```
*(Ganti USERNAME dengan username GitHub Anda)*

### Langkah 3: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik tab "Settings"
3. Di menu sebelah kiri, klik "Pages"
4. Di bagian "Build and deployment":
   - Source: pilih "Deploy from a branch"
   - Branch: pilih "main" dan folder "/ (root)"
5. Klik "Save"

### Langkah 4: Tunggu Deploy

GitHub akan memproses deploy dalam 1-2 menit. Setelah selesai, Anda akan melihat link website di bagian atas halaman Pages.

Format link: `https://USERNAME.github.io/webtutor-sib/`

## 📝 Cara Menambahkan Konten

### Menambahkan Screenshot

1. Siapkan screenshot aplikasi SIPALING
2. Rename file sesuai dengan panduan di website:
   - `login-1.jpg` - Halaman login
   - `login-2.jpg` - Form login
   - `dashboard-1.jpg` - Dashboard
   - `dashboard-2.jpg` - Menu navigasi
   - `pelanggan-1.jpg` - Menu data pelanggan
   - `pelanggan-2.jpg` - Form tambah pelanggan
   - `pelanggan-3.jpg` - Edit/hapus data
   - `ttd-1.jpg` - Menu data TTD
   - `ttd-2.jpg` - Form tambah TTD
   - `ttd-3.jpg` - Form tambah rekening
   - `surat-1.jpg` - Menu buat surat
   - `surat-2.jpg` - Pilih pelanggan
   - `surat-3.jpg` - Isi detail surat
   - `list-surat-1.jpg` - Menu list surat
   - `list-surat-2.jpg` - Filter surat
   - `list-surat-3.jpg` - Download/cetak
   - `matriks-1.jpg` - Menu matriks
   - `matriks-2.jpg` - Setting parameter
   - `matriks-3.jpg` - Matriks tarif
   - `user-1.jpg` - Menu user sistem
   - `user-2.jpg` - Tambah user
   - `user-3.jpg` - Hak akses
   - `logout-1.jpg` - Tombol logout
   - `logout-2.jpg` - Konfirmasi logout

3. Letakkan file di folder `assets/images/`
4. Refresh website, screenshot akan otomatis muncul

### Menambahkan Video Tutorial

1. Buat video tutorial untuk setiap fitur
2. Export sebagai format MP4
3. Letakkan di folder `videos/` dengan nama:
   - `login.mp4` - Tutorial login
   - `dashboard.mp4` - Tutorial dashboard
   - `surat-biaya.mp4` - Tutorial buat surat biaya

4. Video akan otomatis terdeteksi oleh website

## 🎨 Kustomisasi

### Mengubah Warna

Edit file `style.css`, bagian `:root`:
```css
:root {
    --primary-color: #1e40af;    /* Warna utama */
    --secondary-color: #059669;  /* Warna sekunder */
    --accent-color: #f59e0b;     /* Warna aksen */
}
```

### Mengubah Teks

Edit file `index.html` untuk mengubah:
- Judul dan deskripsi
- Konten panduan
- Instruksi langkah-langkah

## 📱 Fitur Website

- ✅ Single Page Application (SPA) - navigasi cepat tanpa reload
- ✅ Responsive design - cocok untuk laptop dan HP
- ✅ Sidebar navigasi - mudah berpindah antar fitur
- ✅ Placeholder untuk screenshot dan video
- ✅ Keyboard navigation (panah kiri/kanan)
- ✅ Animasi transisi halaman
- ✅ Print-friendly

## 🔧 Teknologi

- HTML5
- CSS3 (dengan CSS Variables dan Flexbox/Grid)
- Vanilla JavaScript (tanpa framework)
- Compatible dengan semua modern browser

## 📞 Support

Jika ada pertanyaan atau masalah, hubungi tim IT DLHK.

---

**Dibuat untuk:** Pegawai DLHK
**Tujuan:** Memudahkan penggunaan aplikasi SIPALING
