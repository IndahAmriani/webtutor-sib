# Panduan Penggunaan SIPALING

Website dokumentasi statis untuk aplikasi SIPALING (Sistem Informasi Pengujian Laboratorium).

## 📋 Deskripsi

Website ini berisi panduan penggunaan aplikasi SIPALING yang ditujukan untuk pengguna awam (pegawai DLHK). Website ini dibuat menggunakan HTML, CSS, dan JavaScript vanilla tanpa backend atau database, sehingga dapat di-deploy secara gratis menggunakan GitHub Pages.

## 🚀 Cara Deploy ke GitHub Pages

### Langkah 1: Siapkan Repository GitHub

1. Buat repository baru di GitHub
2. Beri nama repository (misal: `webtutor-sib`)
3. Pastikan repository di-set sebagai **Public** agar dapat diakses publik

### Langkah 2: Upload File ke Repository

**Opsi A: Menggunakan GitHub Web Interface**
1. Buka repository yang baru dibuat
2. Klik tombol **"Add file"** → **"Upload files"**
3. Upload semua file dan folder berikut:
   - `index.html`
   - `style.css`
   - `script.js`
   - Folder `assets/` (beserta isinya)
   - Folder `videos/` (beserta isinya)
4. Klik **"Commit changes"**

**Opsi B: Menggunakan Git Command Line**
```bash
# Inisialisasi git
git init

# Tambah semua file
git add .

# Commit
git commit -m "Initial commit"

# Tambah remote repository
git remote add origin https://github.com/indahAmriani/webtutor-sib.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings** (tab di atas)
3. Scroll ke bawah dan cari bagian **"GitHub Pages"**
4. Di bagian **"Build and deployment"** → **"Source"**, pilih:
   - **Deploy from a branch**
5. Di bagian **"Branch"**, pilih:
   - **Branch:** `main` (atau `master`)
   - **Folder:** `/ (root)`
6. Klik **Save**

### Langkah 4: Tunggu Deployment

1. GitHub akan memproses deployment (biasanya 1-2 menit)
2. Setelah selesai, akan muncul link website di bagian GitHub Pages
3. Format link: `https://username.github.io/nama-repository/`

## 📁 Struktur Folder

```
webTutorSIB/
│
├── index.html          # Halaman utama
├── style.css           # File stylesheet
├── script.js           # File JavaScript
├── README.md           # Dokumentasi ini
│
├── assets/
│   ├── images/         # Folder untuk screenshot/gambar
│   └── icons/          # Folder untuk icon
│
└── videos/             # Folder untuk video tutorial
    ├── login.mp4
    ├── dashboard.mp4
    └── surat-biaya.mp4
```

## 📝 Cara Menambahkan Konten

### Menambahkan Screenshot

1. Siapkan screenshot dalam format PNG atau JPG
2. Simpan di folder `assets/images/`
3. Ganti placeholder di `index.html` dengan tag `<img>`:
```html
<img src="assets/images/nama-screenshot.png" alt="Deskripsi screenshot">
```

### Menambahkan Video Tutorial

1. Siapkan video dalam format MP4
2. Simpan di folder `videos/`
3. Pastikan nama file sesuai dengan yang ada di `index.html`:
   - `login.mp4`
   - `dashboard.mp4`
   - `surat-biaya.mp4`

### Mengedit Konten

- **HTML:** Edit di `index.html`
- **Style:** Edit di `style.css`
- **Interaktivitas:** Edit di `script.js`

## 🎨 Fitur Website

- ✅ **Navigasi Sidebar:** Menu navigasi yang mudah digunakan
- ✅ **Responsive Design:** Tampilan optimal di laptop dan HP
- ✅ **Keyboard Navigation:** Navigasi menggunakan tombol panah
- ✅ **Video Player:** Video tutorial yang dapat diputar langsung
- ✅ **Modern UI:** Desain modern dan profesional
- ✅ **Print Friendly:** Dapat dicetak dengan baik
- ✅ **Accessibility:** Mendukung pembaca layar dan navigasi keyboard

## 📱 Konten Panduan

Website ini mencakup panduan untuk:

1. **Login Sistem** - Cara login ke aplikasi SIPALING
2. **Dashboard** - Penjelasan fitur dashboard untuk Admin dan Pegawai
3. **Data Pelanggan** - Cara mengelola data pelanggan (Admin only)
4. **TTD & Rekening** - Cara mengelola data tanda tangan dan rekening (Admin only)
5. **Buat Surat Biaya** - Cara membuat surat biaya baru (Admin only)
6. **List Surat Biaya** - Cara melihat dan mengelola daftar surat biaya
7. **Matriks & Parameter** - Cara mengelola data matriks dan parameter (Admin only)
8. **User Sistem** - Cara mengelola akun pengguna (Admin only)
9. **Logout** - Cara keluar dari sistem dengan aman

## 🔧 Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan layout
- **JavaScript (Vanilla)** - Interaktivitas dan navigasi
- **GitHub Pages** - Hosting gratis

## 📞 Kontak

Untuk pertanyaan atau kendala, hubungi tim pengembang SIPALING.

## 📄 Lisensi

Website dokumentasi ini dibuat untuk keperluan internal DLHK.
