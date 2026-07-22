// ==========================================
// NAVIGATION SYSTEM
// ==========================================

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');

/**
 * Navigate to a specific section
 * @param {string} sectionId - The ID of the section to navigate to
 */
function navigateTo(sectionId) {
    // Hide all sections
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Show the target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Add active class to the corresponding nav link
    const targetLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
    
    // Close mobile menu after navigation
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
    }
    
    // Scroll to top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Handle navigation link clicks
 */
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        navigateTo(sectionId);
    });
});

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

/**
 * Toggle mobile sidebar menu
 */
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

/**
 * Close sidebar when clicking outside on mobile
 */
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// ==========================================
// KEYBOARD NAVIGATION
// ==========================================

/**
 * Handle keyboard navigation
 * Supports arrow keys for navigation between sections
 */
document.addEventListener('keydown', (e) => {
    const activeSection = document.querySelector('.content-section.active');
    const sectionId = activeSection ? activeSection.id : 'home';
    
    // Get all section IDs in order
    const sectionIds = [
        'home',
        'login',
        'dashboard',
        'pelanggan',
        'ttd',
        'surat-biaya',
        'list-surat',
        'matriks',
        'user',
        'logout'
    ];
    
    const currentIndex = sectionIds.indexOf(sectionId);
    
    // Arrow right or down - next section
    if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && currentIndex < sectionIds.length - 1) {
        e.preventDefault();
        navigateTo(sectionIds[currentIndex + 1]);
    }
    
    // Arrow left or up - previous section
    if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && currentIndex > 0) {
        e.preventDefault();
        navigateTo(sectionIds[currentIndex - 1]);
    }
});

// ==========================================
// INITIAL LOAD
// ==========================================

/**
 * Initialize the application on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Show home section by default
    navigateTo('home');
    
    // Log initialization
    console.log('SIPALING Documentation Website loaded successfully');
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Add scroll animation to elements
 */
function addScrollAnimation() {
    const elements = document.querySelectorAll('.step, .feature-card, .info-box');
    
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Add scroll event listener for animations
window.addEventListener('scroll', addScrollAnimation);

// ==========================================
// VIDEO HANDLING
// ==========================================

/**
 * Handle video loading errors
 * Provides fallback message if video fails to load
 */
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('error', () => {
        const placeholder = video.closest('.video-placeholder');
        if (placeholder) {
            placeholder.innerHTML = `
                <div style="padding: 2rem; text-align: center; color: #718096;">
                    <p>🎥 Video tidak tersedia</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Silakan tambahkan file video di folder videos/</p>
                </div>
            `;
        }
    });
});

// ==========================================
// PRINT FUNCTIONALITY
// ==========================================

/**
 * Add print button functionality
 * Allows users to print the current section
 */
function printSection() {
    window.print();
}

// ==========================================
// ACCESSIBILITY IMPROVEMENTS
// ==========================================

/**
 * Add ARIA attributes for better accessibility
 */
function improveAccessibility() {
    // Add aria-label to navigation
    navLinks.forEach(link => {
        const sectionName = link.textContent.trim();
        link.setAttribute('aria-label', `Navigate to ${sectionName}`);
    });
    
    // Add aria-label to menu toggle
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle.setAttribute('aria-expanded', 'false');
    
    // Update aria-expanded when menu is toggled
    menuToggle.addEventListener('click', () => {
        const isExpanded = sidebar.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
}

// Initialize accessibility improvements
improveAccessibility();
