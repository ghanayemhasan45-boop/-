/**
 * =====================================================
 * وحدة واجهة المستخدم (UI & Rendering) - ui.js
 * =====================================================
 * هذا الملف يتحكم في كل ما يراه المستخدم:
 * 1. رسم أزرار الفلترة (الكل، خواتم، سلاسل).
 * 2. رسم كروت المنتجات بناءً على البحث والفلتر.
 * 3. نوافذ التنبيهات (Toast) وتكبير الصور.
 */

// ===========================================
// 1. رسم أزرار الفلترة
// ===========================================
function renderFilters() {
    filtersEl.innerHTML = categories.map(cat => `
        <button onclick="setFilter('${cat.id}')"
            class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                state.currentFilter === cat.id 
                ? 'bg-gold-500 text-white border-gold-500 shadow-md transform scale-105' 
                : 'bg-white text-stone-600 border-stone-200 hover:border-gold-400 hover:text-gold-600'
            }">${cat.label}</button>
    `).join('');
}

// ===========================================
// 2. رسم كروت المنتجات (مع الفلترة والبحث والترتيب)
// ===========================================
function renderGrid() {
    // تصفية المنتجات حسب الفئة المحددة ونص البحث
    let filtered = products.filter(p => {
        const matchesCategory = state.currentFilter === 'all' || p.category === state.currentFilter;
        const matchesSearch = p.name.includes(state.searchQuery) || p.desc.includes(state.searchQuery);
        return matchesCategory && matchesSearch;
    });

    // ترتيب المنتجات (الأقل سعراً أو الأعلى سعراً)
    if (state.sortMethod === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (state.sortMethod === 'price-desc') filtered.sort((a, b) => b.price - a.price);

    // تحديث رقم "عرض X قطعة"
    countEl.innerText = filtered.length;
    
    // لو مفيش منتجات نعرض رسالة "لا توجد نتائج"
    if (filtered.length === 0) {
        gridEl.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        // رسم الكروت
        gridEl.classList.remove('hidden');
        emptyState.classList.add('hidden');
        gridEl.innerHTML = filtered.map(product => `
            <div class="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm card-hover transition-all duration-300 flex flex-col h-full group">
                <div class="relative h-64 overflow-hidden bg-stone-100 cursor-pointer" onclick="openImageModal('${product.image}', '${product.name}')">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <span class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gold-600 shadow-sm">${product.categoryLabel}</span>
                </div>
                <div class="p-5 flex-1 flex flex-col">
                    <h3 class="font-bold text-lg text-stone-800 mb-1 leading-tight">${product.name}</h3>
                    <p class="text-sm text-stone-500 mb-4 line-clamp-2 leading-relaxed">${product.desc}</p>
                    <div class="mt-auto pt-4 border-t border-stone-50 flex items-center justify-between">
                        <span class="text-xl font-bold text-stone-900">${product.price} <span class="text-sm font-normal text-stone-500">ج.م</span></span>
                        <button onclick="addToCart(${product.id})" class="bg-stone-900 hover:bg-gold-500 text-white p-3 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-gold-200"><span class="text-lg">+</span></button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ===========================================
// 3. دوال مساعدة للواجهة (الفلتر، البحث، الإشعارات)
// ===========================================
function setFilter(id) { state.currentFilter = id; renderFilters(); renderGrid(); }

function resetFilters() { state.currentFilter = 'all'; state.searchQuery = ''; searchInput.value = ''; renderFilters(); renderGrid(); }

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').innerText = msg;
    toast.classList.remove('opacity-0', 'translate-y-20');
    setTimeout(() => { toast.classList.add('opacity-0', 'translate-y-20'); }, 3000);
}

// ===========================================
// 4. موديال تكبير الصورة
// ===========================================
function openImageModal(src, alt) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-img');
    img.src = src; img.alt = alt;
    modal.classList.remove('hidden');
    setTimeout(() => { modal.classList.remove('opacity-0'); img.classList.remove('scale-95'); img.classList.add('scale-100'); }, 10);
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-img');
    modal.classList.add('opacity-0'); img.classList.remove('scale-100'); img.classList.add('scale-95');
    setTimeout(() => { modal.classList.add('hidden'); img.src = ''; }, 300);
}