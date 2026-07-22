/**
 * JAVASCRIPT UTAMA - Panduan Penggunaan SIPALING
 * Fungsi: Navigasi antar halaman dan interaksi UI
 */

// ============================================
// VARIABEL GLOBAL
// ============================================

const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const menuItems = document.querySelectorAll('.menu-item');
const pages = document.querySelectorAll('.page');

// ============================================
// FUNGSI NAVIGASI HALAMAN
// ============================================

/**
 * Fungsi untuk berpindah ke halaman tertentu
 * @param {string} pageId - ID halaman yang dituju
 */
function navigateTo(pageId) {
    // Sembunyikan semua halaman
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Tampilkan halaman yang dipilih
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update menu aktif di sidebar
    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === pageId) {
            item.classList.add('active');
        }
    });

    // Scroll ke atas halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Tutup sidebar di mobile setelah navigasi
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
    }
}

// ============================================
// EVENT LISTENER MENU NAVIGASI
// ============================================

// Tambahkan event listener ke setiap menu item
menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.getAttribute('data-page');
        navigateTo(pageId);
    });
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================

/**
 * Toggle sidebar untuk tampilan mobile
 */
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
}

// ============================================
// TUTUP SIDEBAR KETIKA KLIK DI LUAR (MOBILE)
// ============================================

document.addEventListener('click', function(e) {
    // Hanya berlaku untuk tampilan mobile
    if (window.innerWidth <= 768) {
        // Cek apakah klik di luar sidebar dan bukan tombol toggle
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// ============================================
// HANDLE RESIZE WINDOW
// ============================================

/**
 * Reset sidebar state saat window di-resize
 */
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
    }
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================

/**
 * Navigasi menggunakan keyboard (Arrow keys)
 */
document.addEventListener('keydown', function(e) {
    const currentPage = document.querySelector('.page.active');
    if (!currentPage) return;

    const currentPageId = currentPage.id;
    const pageOrder = ['home', 'login', 'dashboard', 'data-pelanggan', 'data-ttd', 'buat-surat', 'list-surat', 'matriks', 'user-sistem', 'logout'];
    const currentIndex = pageOrder.indexOf(currentPageId);

    // Navigasi dengan panah kanan (next)
    if (e.key === 'ArrowRight' && currentIndex < pageOrder.length - 1) {
        navigateTo(pageOrder[currentIndex + 1]);
    }

    // Navigasi dengan panah kiri (previous)
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        navigateTo(pageOrder[currentIndex - 1]);
    }
});

// ============================================
// INISIALISASI
// ============================================

/**
 * Inisialisasi saat halaman dimuat
 */
document.addEventListener('DOMContentLoaded', function() {
    // Pastikan halaman home aktif saat pertama kali dimuat
    navigateTo('home');
    
    // Log untuk debugging (opsional, bisa dihapus di production)
    console.log('Panduan SIPALING - JavaScript loaded successfully');
});
