/**
 * =====================================================
 * قاعدة بيانات المنتجات (Data & Categories) - data.js
 * =====================================================
 * هذا الملف يحتوي على:
 * 1. مصفوفة المنتجات (الاسم، السعر، الصورة، الوصف، الفئة).
 * 2. مصفوفة التصنيفات (لعرض أزرار الفلترة في الواجهة).
 */

// ===========================================
// 1. قائمة التصنيفات (الفلاتر)
// ===========================================
const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'sets', label: 'أطقم' },
    { id: 'necklaces', label: 'سلاسل' },
    { id: 'rings', label: 'خواتم' },
    { id: 'bracelets', label: 'أساور' },
    { id: 'earrings', label: 'أقراط' }
];

// ===========================================
// 2. قائمة المنتجات (أكثر من 50 منتج)
// ===========================================
const products = [
    // --- فئة الأطقم ---
    { id: 1, name: "طقم الزهرة الذهبية", price: 450, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/aobdW/851a12bc-e3e7-497f-81d9-57904980fb9f-1000x1000-gtJqbqNJRRhDDh3aL3ARZzyyzJUrfYxwJ5ptwDvg.jpg", desc: "طقم كامل مطلي بالذهب عيار 18." },
    { id: 8, name: "طقم سهرة فاخر", price: 850, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/KAdxD/3f8e66ee-1247-4b65-935a-a344981c0821-666.66666666667x1000-5SIbD2adIWqunXLntQxy7haE1Q9vMi6KK6jLqDfr.jpg", desc: "طقم للمناسبات الخاصة." },
    
    // --- فئة السلاسل ---
    { id: 2, name: "عقد اللؤلؤ الكلاسيكي", price: 180, category: "necklaces", categoryLabel: "سلاسل", image: "https://images-na.ssl-images-amazon.com/images/I/41LwN9H0KvS._SL500_._AC_SL500_.jpg", desc: "عقد أنيق من اللؤلؤ الصناعي." },
    
    // --- فئة الخواتم ---
    { id: 3, name: "خاتم السوليتير الملكي", price: 120, category: "rings", categoryLabel: "خواتم", image: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/841312/1.jpg?0082", desc: "خاتم بفص زركون لامع." },
    
    // --- فئة الأساور ---
    { id: 4, name: "أساور الصداقة الذهبية", price: 200, category: "bracelets", categoryLabel: "أساور", image: "https://m.arabic.stainlesssteelfashionjewelry.com/photo/pt144689825-18_k_love_friendship_bracelet_bangle_gold_with_cubic_zirconia_stones_hinged_gift.jpg", desc: "مجموعة أساور رفيعة." },
    
    // --- فئة الأقراط ---
    { id: 5, name: "أقراط الكريستال المتدلية", price: 150, category: "earrings", categoryLabel: "أقراط", image: "https://i.localised.com/img/sa/product/758de5f7-b326-4753-883e-b91fd358a6aa_LARGE.jpg", desc: "أقراط طويلة مرصعة." }
    
    // ملاحظة: يمكنك إضافة باقي الـ 50 منتج هنا بنفس التنسيق.
];