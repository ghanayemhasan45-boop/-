/**
 * =====================================================
 * وحدة السلة (Shopping Cart) - cart.js
 * =====================================================
 * هذا الملف يحتوي على كل الأكواد الخاصة بـ:
 * 1. إضافة وحذف المنتجات من السلة.
 * 2. زيادة أو تقليل الكمية.
 * 3. حساب الإجمالي الكلي.
 * 4. إرسال تفاصيل الطلب عبر الواتساب.
 */

// ===========================================
// 1. إضافة منتج للسلة (Add to Cart)
// ===========================================
function addToCart(id) {
    // البحث عن المنتج في قاعدة البيانات
    const product = products.find(p => p.id === id);
    
    // التحقق هل المنتج موجود أصلاً في السلة؟
    const existing = state.cart.find(item => item.id === id);
    
    if (existing) {
        // لو موجود، زود الكمية بتاعته 1
        existing.qty++; 
    } else {
        // لو مش موجود، ضيفه للسلة واديله كمية = 1
        state.cart.push({ ...product, qty: 1 });
    }
    
    // تحديث شكل السلة وإظهار رسالة النجاح
    updateCartUI(); 
    showToast(`تمت إضافة "${product.name}" للسلة`); 
    toggleCart(true); // فتح السلة تلقائياً
}

// ===========================================
// 2. تعديل الكمية (Update Quantity)
// ===========================================
function updateCartQty(id, change) {
    const item = state.cart.find(item => item.id === id);
    if (item) { 
        // نزود أو ننقص الكمية بناءً على الزرار (+ أو -)
        item.qty += change; 
        
        // لو الكمية وصلت صفر أو أقل، نمسح المنتج من السلة
        if (item.qty <= 0) {
            state.cart = state.cart.filter(i => i.id !== id); 
        }
    }
    updateCartUI(); // تحديث الأرقام
}

// ===========================================
// 3. حذف منتج نهائياً (Remove Item)
// ===========================================
function removeItem(id) { 
    // تفلتر السلة وتحتفظ بكل المنتجات ما عدا اللي اختارنا نحذفه
    state.cart = state.cart.filter(i => i.id !== id); 
    updateCartUI(); 
}

// ===========================================
// 4. تحديث واجهة السلة (Update UI)
// ===========================================
function updateCartUI() {
    // لو السلة فاضية، نعرض رسالة "السلة فارغة"
    if (state.cart.length === 0) {
        cartItemsEl.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-stone-400 py-10"><span class="text-4xl mb-2">🛒</span><p>السلة فارغة حالياً</p></div>`;
    } else {
        // لو فيها منتجات، نرسمها في الواجهة
        cartItemsEl.innerHTML = state.cart.map(item => `
            <div class="flex gap-4 p-3 bg-stone-50 rounded-xl border border-stone-100 items-center">
                <img src="${item.image}" class="w-16 h-16 object-cover rounded-lg">
                <div class="flex-1">
                    <h4 class="font-bold text-sm text-stone-800 line-clamp-1">${item.name}</h4>
                    <p class="text-gold-600 font-bold text-sm">${item.price * item.qty} ج.م</p>
                </div>
                <div class="flex items-center gap-2 bg-white rounded-lg border border-stone-200 px-1 py-1">
                    <button onclick="updateCartQty(${item.id}, -1)" class="w-6 h-6 flex items-center justify-center hover:bg-stone-100 rounded text-stone-600">-</button>
                    <span class="text-xs font-bold w-4 text-center">${item.qty}</span>
                    <button onclick="updateCartQty(${item.id}, 1)" class="w-6 h-6 flex items-center justify-center hover:bg-stone-100 rounded text-stone-600">+</button>
                </div>
                <button onclick="removeItem(${item.id})" class="text-red-400 hover:text-red-600 text-xs px-2">حذف</button>
            </div>
        `).join('');
    }

    // حساب الإجمالي المادي لكل المنتجات
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    cartTotalEl.innerText = total + " ج.م";
    
    // تحديث الرقم الأحمر (البادج) اللي فوق أيقونة السلة
    const count = state.cart.reduce((c, item) => c + item.qty, 0);
    cartBadge.innerText = count;
    
    // إظهار أو إخفاء البادج بناءً على عدد المنتجات
    if (count > 0) { 
        cartBadge.classList.remove('scale-0'); cartBadge.classList.add('scale-100'); 
    } else { 
        cartBadge.classList.add('scale-0'); cartBadge.classList.remove('scale-100'); 
    }
}

// ===========================================
// 5. إرسال الطلب للواتساب (Checkout)
// ===========================================
function checkout() {
    if (state.cart.length === 0) return; // لو السلة فاضية ميعملش حاجة
    
    const phone = "201104436931"; // رقم خدمة العملاء
    
    // تجهيز نص الرسالة
    let msg = "مرحباً ميرا جولد، أود طلب المنتجات التالية:\n\n";
    state.cart.forEach(item => { 
        msg += `- ${item.name} (${item.qty} قطعة) - ${item.price * item.qty} ج.م\n`; 
    });
    msg += `\nالإجمالي: ${cartTotalEl.innerText}`;
    
    // فتح الواتساب في نافذة جديدة وإرسال الرسالة المشفرة
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}