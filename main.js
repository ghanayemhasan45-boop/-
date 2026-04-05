/**
 * =====================================================
 * الملف الرئيسي (Main Configuration) - main.js
 * =====================================================
 * يحتوي على تعريف المتغيرات الأساسية وتشغيل الموقع.
 */

// ===========================================
// إعدادات مكتبة التصميم (Tailwind)
// ===========================================
tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['Cairo', 'sans-serif'] },
            colors: {
                gold: { 50: '#fffbf0', 100: '#fef2cd', 200: '#fde39b', 300: '#fccc65', 400: '#fbb336', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f' }
            }
        }
    }
}

// ===========================================
// المتغيرات العامة (State & DOM)
// ===========================================
let state = { cart: [], currentFilter: 'all', searchQuery: '', sortMethod: 'default', chartsInitialized: false };

const gridEl = document.getElementById('products-grid');
const filtersEl = document.getElementById('category-filters');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartBadge = document.getElementById('cart-badge');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const countEl = document.getElementById('showing-count');
const emptyState = document.getElementById('empty-state');
const dashboardSection = document.getElementById('dashboard-section');

// ===========================================
// مراقبة الأحداث (مربع البحث والترتيب)
// ===========================================
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => { state.searchQuery = e.target.value; renderGrid(); });
    sortSelect.addEventListener('change', (e) => { state.sortMethod = e.target.value; renderGrid(); });
}

// ===========================================
// تشغيل الموقع لأول مرة
// ===========================================
function init() { 
    renderFilters(); 
    renderGrid(); 
    setupEventListeners(); 
}

// البداية الفعلية للموقع
init();