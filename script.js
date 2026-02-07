// --- Tailwind Configuration ---
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Cairo', 'sans-serif'],
            },
            colors: {
                gold: {
                    50: '#fffbf0',
                    100: '#fef2cd',
                    200: '#fde39b',
                    300: '#fccc65',
                    400: '#fbb336',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                }
            }
        }
    }
}

// --- DATASET: All Products ---
const products = [
    { id: 1, name: "طقم الزهرة الذهبية", price: 450, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/aobdW/851a12bc-e3e7-497f-81d9-57904980fb9f-1000x1000-gtJqbqNJRRhDDh3aL3ARZzyyzJUrfYxwJ5ptwDvg.jpg", desc: "طقم كامل مطلي بالذهب عيار 18." },
    { id: 2, name: "عقد اللؤلؤ الكلاسيكي", price: 180, category: "necklaces", categoryLabel: "سلاسل", image: "https://images-na.ssl-images-amazon.com/images/I/41LwN9H0KvS._SL500_._AC_SL500_.jpg", desc: "عقد أنيق من اللؤلؤ الصناعي." },
    { id: 3, name: "خاتم السوليتير الملكي", price: 120, category: "rings", categoryLabel: "خواتم", image: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/841312/1.jpg?0082", desc: "خاتم بفص زركون لامع." },
    { id: 4, name: "أساور الصداقة الذهبية", price: 200, category: "bracelets", categoryLabel: "أساور", image: "https://m.arabic.stainlesssteelfashionjewelry.com/photo/pt144689825-18_k_love_friendship_bracelet_bangle_gold_with_cubic_zirconia_stones_hinged_gift.jpg", desc: "مجموعة أساور رفيعة." },
    { id: 5, name: "أقراط الكريستال المتدلية", price: 150, category: "earrings", categoryLabel: "أقراط", image: "https://i.localised.com/img/sa/product/758de5f7-b326-4753-883e-b91fd358a6aa_LARGE.jpg", desc: "أقراط طويلة مرصعة." },
    { id: 6, name: "سلسلة الفراشة", price: 95, category: "necklaces", categoryLabel: "سلاسل", image: "https://images-na.ssl-images-amazon.com/images/I/41NwqvXYmsL._SL500_._AC_SL500_.jpg", desc: "سلسلة رقيقة بتعليقة فراشة." },
    { id: 7, name: "خاتم إنفينيتي", price: 110, category: "rings", categoryLabel: "خواتم", image: "https://cdn.salla.sa/NKDnoX/AS24aMABKRVqbmCAHsJFFJ1VuVm6HfzpeagAOEYR.jpg", desc: "رمز اللانهاية ذهبي." },
    { id: 8, name: "طقم سهرة فاخر", price: 850, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/KAdxD/3f8e66ee-1247-4b65-935a-a344981c0821-666.66666666667x1000-5SIbD2adIWqunXLntQxy7haE1Q9vMi6KK6jLqDfr.jpg", desc: "طقم للمناسبات الخاصة." },
    { id: 9, name: "طقم الملكة فيكتوريا", price: 1250, category: "sets", categoryLabel: "أطقم", image: "https://static.hiamag.com/styles/autox754/public/article/24/05/2021/10561951-592341470.png", desc: "طقم ملكي فاخر." },
    { id: 10, name: "طقم اللؤلؤ والذهب", price: 980, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/mQbeWl/d99d0a8c-efe3-4505-bc2f-61fa6ae6b0f0-500x500-ZdFN24gpu3zzCtJ8NJeRsIkWDAWd4fCqgtT9lc2w.jpg", desc: "مزيج لؤلؤ وذهب." },
    { id: 11, name: "طقم الفيروز الأزرق", price: 650, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/qlGRQ/31fc14f0-4dbb-474a-b236-945c664f72a7-562.5x1000-qjcVOApTLrrENBGCqGNa3DoaklI6SZCh2GD0TuP2.jpg", desc: "طقم عصري بالفيروز." },
    { id: 12, name: "طقم القلوب المتشابكة", price: 550, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/BROND/4636958c-3963-4e52-bc2a-c8041c4c3217-400x500-fSWPIZRfRYdmloXmRdPk8wF3dIUsa9LI3sTrSudO.png", desc: "تصميم رومانسي بقلوب." },
    { id: 13, name: "طقم الزفاف الملكي", price: 2800, category: "sets", categoryLabel: "أطقم", image: "https://img.joomcdn.net/a03f729c98b404883f554373b4bc38cd9ffeb102_original.jpeg", desc: "أفخم أطقم العرائس." },
    { id: 101, name: "طقم الياقوت الأحمر", price: 1500, category: "sets", categoryLabel: "أطقم", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBFUsqJd7zAG1JYN1oTG8wOLYTkt_UFJ9tA&s", desc: "طقم كلاسيكي مرصع بأحجار حمراء." },
    { id: 102, name: "طقم الزفاف الماسي", price: 3200, category: "sets", categoryLabel: "أطقم", image: "https://s.alicdn.com/@sc04/kf/Hc6edfcd0fe8a489c8865a48aa4fb075dX.jpg", desc: "طقم كامل للعروس بتصميم ماسي." },
    { id: 103, name: "طقم الفراشة الماسي", price: 890, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/voBbP/ee5e8b63-8a65-478a-837e-43005a531407-333.49056603774x500-mIhEZ9oIJytljFoAQALryZt9e645ux6uzI0O0viR.jpg", desc: "تصميم رقيق مستوحى من الطبيعة." },
    { id: 104, name: "طقم اللؤلؤ الأسود", price: 1100, category: "sets", categoryLabel: "أطقم", image: "https://images-na.ssl-images-amazon.com/images/I/41v6XaxVYiL._SL500_._AC_SL500_.jpg", desc: "تميزي بطقم اللؤلؤ الأسود النادر." },
    { id: 105, name: "طقم هندي تقليدي", price: 2500, category: "sets", categoryLabel: "أطقم", image: "https://images-na.ssl-images-amazon.com/images/I/51z1yPOwu-L._SL500_._AC_SL500_.jpg", desc: "طقم ثقيل بتصميم هندي فاخر." },
    { id: 106, name: "طقم أوراق الشجر", price: 680, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/Eqrnx/pNZ5sPstl7TRTgGEb3v3OyRXGVoaIEMC5ZqLBKKa.jpg", desc: "تصميم انسيابي مستوحى من الغابات." },
    { id: 107, name: "طقم المرجان", price: 750, category: "sets", categoryLabel: "أطقم", image: "https://cdn.youcan.shop/stores/391dc4389f169d646d46c2767eaf9522/products/G7CwRBh6IUHPFMoAJpm94JR87pyWUFpASYq8vmoV.webp", desc: "ألوان صيفية مبهجة من المرجان." },
    { id: 108, name: "طقم السلسلة العريضة", price: 500, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/ojAEY/681cedaf-863e-4a49-8ecf-c9cf870bf1a4-1000x1000-tDYFPXHYQQHOlzHZDughizsogRk6jYB5Ygddln5A.jpg", desc: "طقم عصري بتصميم جنزير." },
    { id: 109, name: "طقم الكريستال النقي", price: 420, category: "sets", categoryLabel: "أطقم", image: "https://images-na.ssl-images-amazon.com/images/I/41xAtA706gS._SL500_._AC_SL500_.jpg", desc: "لمعان الكريستال النقي لكل المناسبات." },
    { id: 110, name: "طقم الذهب الوردي", price: 660, category: "sets", categoryLabel: "أطقم", image: "https://media.zid.store/d67f97e9-8fa0-4e94-9015-20b546ecf738/7cb4198f-8080-428e-ba46-e2fe8327ee19.jpg", desc: "لمسة عصرية بالذهب الوردي." },
    { id: 111, name: "طقم الشمس المشرقة", price: 580, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/KjyrDy/Sg0rqlMIfriIWHH5tHl9VWuxGXXhMZjbvRChVkAt.jpg", desc: "تصميم دائري يشع بالطاقة." },
    { id: 112, name: "طقم فينتاج كلاسيك", price: 900, category: "sets", categoryLabel: "أطقم", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcSgN0eh9wgMLBsH_PWN_DzP-rJu3DeJ79A&s", desc: "طقم بتصميم قديم وأنيق." },
    { id: 113, name: "طقم الحجر الأخضر", price: 1300, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/RAXNaY/923ab655-ebf6-4817-937e-dbdb7d523fd8-1000x667.96875-GUYvEMEqMCO3m9dU4HJo2OQXLH3sn6W4D8ir58Hi.jpg", desc: "فخامة اللون الأخضر الملكي." },
    { id: 114, name: "طقم القلادة المزدوجة", price: 480, category: "sets", categoryLabel: "أطقم", image: "https://img.kwcdn.com/product/fancy/47926e4b-b883-4ecb-b527-c7124afee2ed.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp", desc: "طقم بسلسلتين متداخلتين." },
    { id: 115, name: "طقم ليلة العمر", price: 3500, category: "sets", categoryLabel: "أطقم", image: "https://cdn.salla.sa/wvABj/440de889-1a4c-4dbe-beaf-22f40a670cbb-1000x1000-WBEUZ1FPUcThiJ2PalzuZNzbvRf5d4Gim1zN11EY.jpg", desc: "الأغلى والأفخم في مجموعتنا." },
    { id: 201, name: "حلق اللؤلؤ الكبير", price: 200, category: "earrings", categoryLabel: "أقراط", image: "https://masremall.com/cdn/shop/files/Screenshot-2024-07-16-113125.png?v=1761825706&width=3840", desc: "لؤلؤة كبيرة وكلاسيكية." },
    { id: 202, name: "أقراط الذهب الهندسية", price: 180, category: "earrings", categoryLabel: "أقراط", image: "https://ae01.alicdn.com/kf/H42d4ba0fd9924a8a968f1ffc2f9809e3H.jpg", desc: "أشكال هندسية عصرية." },
    { id: 203, name: "أقراط الشرابة الحمراء", price: 150, category: "earrings", categoryLabel: "أقراط", image: "https://ae01.alicdn.com/kf/H6e909e37ad7f4fcaa382e423c1958cdeP.jpg", desc: "لون أحمر جريء وجذاب." },
    { id: 204, name: "حلق الماس الصغير", price: 300, category: "earrings", categoryLabel: "أقراط", image: "https://media.zid.store/thumbs/bea887d5-2f99-4f48-8971-63b7b70b72f5/ec65ff80-00ee-4f5e-9db9-68d8e8729a43-thumbnail-1000x1000-70.jpg", desc: "لمسة بسيطة من الماس." },
    { id: 205, name: "أقراط الريشة الذهبية", price: 220, category: "earrings", categoryLabel: "أقراط", image: "https://static.hiamag.com/styles/autox754/public/article/21/01/2022/%D8%A3%D9%82%D8%B1%D8%A7%D8%B7%20%D9%85%D8%A7%D8%B3%20Dangle%20And%20Drop%20%D9%85%D9%86%20Anjis%20Touch.jpg", desc: "خفيفة وأنيقة." },
    { id: 206, name: "أقراط الهوب الفضية", price: 140, category: "earrings", categoryLabel: "أقراط", image: "https://cdn.salla.sa/NjVY/fKGv6UFlyFT2hhC2zYWsoAD9dMS45GcP1SYWJTGQ.jpg", desc: "لون فضي لامع." },
    { id: 207, name: "أقراط النجمة", price: 160, category: "earrings", categoryLabel: "أقراط", image: "https://cdn.salla.sa/GGzrE/8bbd3563-80de-476c-90c7-e12240184b56-1000x1000-3g0nlUq4B75DpyciWnwIjuuwX68Z3WO9IYrSyYes.jpg", desc: "تصميم نجمة صغير." },
    { id: 208, name: "أقراط السلسلة الطويلة", price: 190, category: "earrings", categoryLabel: "أقراط", image: "https://ae01.alicdn.com/kf/S74278a93ca5841e8a0308cc014f4e333P.jpg", desc: "تتدلى بنعومة." },
    { id: 209, name: "أقراط الزهرة الملونة", price: 210, category: "earrings", categoryLabel: "أقراط", image: "https://ae01.alicdn.com/kf/S77af81aea3e84a24bc60cdea1e7326cbH.jpg", desc: "ألوان الربيع في أذنيك." },
    { id: 210, name: "أقراط الفراشة الصغيرة", price: 175, category: "earrings", categoryLabel: "أقراط", image: "https://media.zid.store/d182e609-b6ba-4bb8-86d6-e4cfc90c7074/04b0e69c-07d5-4c09-bec1-d7eeef9271d6.jpg", desc: "فراشة ذهبية رقيقة." },
    { id: 211, name: "أقراط الكريستال الأزرق", price: 240, category: "earrings", categoryLabel: "أقراط", image: "https://www.a.ubuy.com.kw/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFqbUJESk53NkwuX0FDX1VMMTUwMF8uanBn.jpg", desc: "كرستال الطبيعة." },
    { id: 212, name: "أقراط القلوب المتدلية", price: 195, category: "earrings", categoryLabel: "أقراط", image: "https://img.kwcdn.com/product/fancy/0a1057b8-7441-463e-87ce-d8e075e9cd1e.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp", desc: "قلوب صغيرة متتالية." },
    { id: 213, name: "أقراط العملات الذهبية", price: 260, category: "earrings", categoryLabel: "أقراط", image: "https://cdn.noqta.ps/lifestyle.ps/wp-content/uploads/2025/10/06114942/%D9%86%D8%BA%D8%B9%D9%86%D8%BA%D8%B9%D9%85.webp", desc: "تصميم بوهيمي بعملات." },
    { id: 214, name: "أقراط اللؤلؤ والماس", price: 350, category: "earrings", categoryLabel: "أقراط", image: "https://media.grownbrilliance.com/a2c5372a-e16a-4ea3-b361-da9fdc89a59f/https://images.grownbrilliance.com/productimages/EAGER115250/medium/EAGER115250-WG-PL-WH-1553-M1.jpg", desc: "مزيج فاخر للسهرات." },
    { id: 215, name: "أقراط الأذن الكاملة", price: 280, category: "earrings", categoryLabel: "أقراط", image: "https://m.media-amazon.com/images/I/41gqbgG1ccL._AC_SY1000_.jpg", desc: "تصميم يغطي شحمة الأذن." },
    { id: 301, name: "سوار الكف الذهبي", price: 330, category: "bracelets", categoryLabel: "أساور", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXL4A_BS3ckN58LV3Swc_q1XWUzd2S7u164A&s", desc: "تصميم الكف العربي التقليدي." },
    { id: 302, name: "سوار الخرز الملون", price: 120, category: "bracelets", categoryLabel: "أساور", image: "https://m.media-amazon.com/images/I/41WRIrq8q0S._AC_SY350_.jpg", desc: "خرز صيفي مبهج." },
    { id: 303, name: "سوار الفضة الإيطالي", price: 450, category: "bracelets", categoryLabel: "أساور", image: "https://giftsmile.b-cdn.net/wp-content/uploads/2023/10/0b78967a-0021-4e6c-8c65-850c591500e3.jpg", desc: "جودة إيطالية فاخرة." },
    { id: 304, name: "سوار السلسلة المزدوجة", price: 290, category: "bracelets", categoryLabel: "أساور", image: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/3371031/1.jpg?4967", desc: "طبقتين من الذهب." },
    { id: 305, name: "سوار الحروف", price: 210, category: "bracelets", categoryLabel: "أساور", image: "https://m.media-amazon.com/images/I/413nBzoowDL._AC_SY350_.jpg", desc: "احملي حروف أحبائك." },
    { id: 306, name: "سوار المسمار", price: 380, category: "bracelets", categoryLabel: "أساور", image: "https://media.zid.store/7998464b-59bf-405b-9d2d-fe51e5eebaee/d4e141ed-8693-44c5-8d01-57589fed59d8.jpg", desc: "تصميم عالمي شهير." },
    { id: 307, name: "سوار اللؤلؤ المرن", price: 160, category: "bracelets", categoryLabel: "أساور", image: "https://ae01.alicdn.com/kf/S4c4eb27c69e7428b9d6b1513eaab42939.jpg", desc: "يناسب جميع المقاسات." },
    { id: 308, name: "سوار العين والحماية", price: 190, category: "bracelets", categoryLabel: "أساور", image: "https://img.joomcdn.net/b3d63900eedf5dfa6e2c4b9a7f70ea5c4c904344_original.jpeg", desc: "خرزة زرقاء للحماية." },
    { id: 309, name: "سوار الذهب العريض", price: 600, category: "bracelets", categoryLabel: "أساور", image: "https://media.zid.store/7998464b-59bf-405b-9d2d-fe51e5eebaee/0e5977aa-e622-40a2-a9ee-0cfd5301da74.jpg", desc: "قطعة بيان قوية." },
    { id: 310, name: "سوار الصداقة المجدول", price: 90, category: "bracelets", categoryLabel: "أساور", image: "https://ae01.alicdn.com/kf/H751ab68641854badaa29b8f5437c9004r.jpg", desc: "هدية بسيطة للأصدقاء." },
    { id: 311, name: "سوار الفراشات المتتالية", price: 340, category: "bracelets", categoryLabel: "أساور", image: "https://cdn.salla.sa/Eqrnx/jbCVMjQtkPeunDHX24qnXZ4RlNxQQb5iFuNvRFAM.jpg", desc: "سرب من الفراشات الذهبية." },
    { id: 312, name: "سوار الجلد الأسود", price: 180, category: "bracelets", categoryLabel: "أساور", image: "https://amazingegp.com/cdn/shop/files/1650613304cd3aa3cce845d2073059ffcd5ac0912bcopy.jpg?v=1732392224", desc: "جلد طبيعي مع مشبك ذهبي." },
    { id: 313, name: "سوار النجوم والقمر", price: 270, category: "bracelets", categoryLabel: "أساور", image: "https://img.joomcdn.net/6af31f9b9f8393fc18e0c5228106494cae27b1dc_original.jpeg", desc: "تصميم سماوي حالم." },
    { id: 314, name: "سوار الزركون الملون", price: 310, category: "bracelets", categoryLabel: "أساور", image: "https://cdn.salla.sa/Eqrnx/iRpo4D8skHFEwMuF5xSprwwIWOb2gmi85gpAotEO.jpg", desc: "أحجار لامعة بكل الألوان." },
    { id: 315, name: "سوار السلسلة الناعمة", price: 150, category: "bracelets", categoryLabel: "أساور", image: "https://umbrella-egypt.com/storage/app/public/product/2024-06-23-667807ff9c41d.png", desc: "بساطة لا تقاوم." },
    { id: 401, name: "خاتم التاج الملكي", price: 280, category: "rings", categoryLabel: "خواتم", image: "https://cdn.salla.sa/mOnAG/FzCdhv7Z8w9McANkhPO3eYkDjiioBYVuABGyHDRq.jpg", desc: "تصميم على شكل تاج." },
    { id: 402, name: "خاتم العقد", price: 230, category: "rings", categoryLabel: "خواتم", image: "https://keetaluxury.co/cdn/shop/files/leaf-beauty-black-onyx-ring-us-4-rings-408.png?v=1713769731&width=2048", desc: "غموض وأناقة." },
    { id: 403, name: "خاتم الحجر الأسود", price: 230, category: "rings", categoryLabel: "خواتم", image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdf66027154c0494ba6df702a44807264h.jpg", desc: "غموض وأناقة." },
    { id: 404, name: "خاتم اللؤلؤ المفتوح", price: 190, category: "rings", categoryLabel: "خواتم", image: "https://img.joomcdn.net/d189f7bbf5e3b63f7ebb4b7b0e939d558f894bd6_original.jpeg", desc: "تصميم عصري مفتوح." },
    { id: 405, name: "خاتم الذهب المجدول", price: 260, category: "rings", categoryLabel: "خواتم", image: "https://cdn.salla.sa/wvABj/11f7c33b-e50b-4ecd-abba-9e5ba3ba13cf-1000x1000-gHlfYlAgnv3RADhjOdBJ7I88Ea2pYTps54PjkkCt.jpg", desc: "تفاصيل دقيقة." },
    { id: 406, name: "خاتم القلب الصغير", price: 130, category: "rings", categoryLabel: "خواتم", image: "https://giftsmile.b-cdn.net/wp-content/uploads/2023/10/131479730_239572710918994_2901173368055785504_n.jpg", desc: "هدية رومانسية." },
    { id: 407, name: "خاتم الفيروز", price: 210, category: "rings", categoryLabel: "خواتم", image: "https://anaaqah.com/wp-content/uploads/2024/02/AS00262.webp", desc: "حجر فيروز طبيعي." },
    { id: 408, name: "خاتم الصفوف المتعددة", price: 320, category: "rings", categoryLabel: "خواتم", image: "https://m.media-amazon.com/images/I/41AQQO8fq3L._AC_SY1000_.jpg", desc: "مظهر الخواتم المتراكمة." },
    { id: 409, name: "خاتم الأفعى", price: 290, category: "rings", categoryLabel: "خواتم", image: "https://ae01.alicdn.com/kf/Se313402e972143e9bb78275d46eadf19O.jpg", desc: "تصميم جريء ومميز." },
    { id: 410, name: "خاتم الزهرة الكبيرة", price: 270, category: "rings", categoryLabel: "خواتم", image: "https://cdn.salla.sa/dneZg/4154f2d0-bb2b-44c8-9c80-74eee1de61f5-1000x1000-TL9AZcv02p5Q0A1iQc7BYyVDARcurGMcHbecc3qU.jpg", desc: "زهرة تتفتح على إصبعك." },
    { id: 411, name: "خاتم الزمرد", price: 400, category: "rings", categoryLabel: "خواتم", image: "https://anaaqah.com/wp-content/uploads/2024/02/AS00228-ls-800x800.webp", desc: "فخامة اللون الأخضر." },
    { id: 412, name: "خاتم الحروف", price: 170, category: "rings", categoryLabel: "خواتم", image: "https://m.media-amazon.com/images/I/41ciBsie8BL._AC_SY1000_.jpg", desc: "حرفك الأول." },
    { id: 413, name: "خاتم النجمة", price: 150, category: "rings", categoryLabel: "خواتم", image: "https://made-in.com.sa/_next/image?url=https%3A%2F%2Fpartners.made-in.com.sa%2Fstorage%2Fapp%2Fpublic%2Fproduct%2F17120455696c2b0655-d389-4b36-b896-e86659356685.webp&w=3840&q=75", desc: "تألقي كالنجمة." },
    { id: 414, name: "خاتم الدبلة الكلاسيكية", price: 350, category: "rings", categoryLabel: "خواتم", image: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/197362/1.jpg?4815", desc: "دبلة خطوبة بسيطة." },
    { id: 415, name: "خاتم الفيونكة", price: 180, category: "rings", categoryLabel: "خواتم", image: "https://m.media-amazon.com/images/I/41X12Lzs-mL._AC_SY1000_.jpg", desc: "تصميم أنثوي لطيف." },
    { id: 501, name: "سلسلة القمر المضيء", price: 210, category: "necklaces", categoryLabel: "سلاسل", image: "https://m.media-amazon.com/images/I/31abfcDa2cL._AC_SY1000_.jpg", desc: "هلال ذهبي لامع." },
    { id: 502, name: "عقد التشوكر الأسود", price: 160, category: "necklaces", categoryLabel: "سلاسل", image: "https://cdn.salla.sa/DYbZE/9886aa55-659f-4bf6-9e43-74273b842f7e-1000x966.92111959288-kxe0neN4MXzB0VCUH0tcWVnXXUZwwdpTeGaihcmF.jpg", desc: "مخمل أسود مع تعليقة ذهبية." },
    { id: 503, name: "سلسلة الشجرة", price: 230, category: "necklaces", categoryLabel: "سلاسل", image: "https://cdn.salla.sa/zvdyPR/c9577748-eceb-4b76-a814-d0aa43c44568-750.64935064935x1000-NDQP9lDRL5uz0X5M4FKs6FIlGMQUC8kbQ7PALrMz.jpg", desc: "شجرة الحياة." },
    { id: 504, name: "سلسلة الحجر الكريم", price: 280, category: "necklaces", categoryLabel: "سلاسل", image: "https://cdn.salla.sa/REXN/b42a64e8-c722-4f4a-ad3f-206e7fa834c8-500x500-s4irnkFLmb92x43KRI29NOemPF4tXrpIR2DNk0Bm.jpg", desc: "حجر طبيعي ملون." },
    { id: 505, name:"سلسة الشتاء الزرقاء", price: 340, category: "necklaces", categoryLabel: "سلاسل", image: "https://www.batcino.com/cdn/shop/products/image_74ad2c82-05bc-427c-8520-b1e6271fbc8a.jpg?v=1706918452", desc: "تصميم غجري جذاب." },
    { id: 506, name: "سلسلة المفتاح", price: 200, category: "necklaces", categoryLabel: "سلاسل", image: "https://akherelankoud.com/cdn/shop/files/20229071_1.jpg?v=1723374599", desc: "مفتاح قلبك." },
    { id: 507, name: "سلسلة اللؤلؤة الواحدة", price: 190, category: "necklaces", categoryLabel: "سلاسل", image: "https://buzztech.store/wp-content/uploads/2022/05/273526103_1649370568736298_8944387430802113790_n.jpg", desc: "بساطة اللؤلؤ." },
    { id: 508, name:"سلسة الحجر الاحمر", price: 220, category: "necklaces", categoryLabel: "سلاسل", image: "https://images-na.ssl-images-amazon.com/images/I/41E6jiQP7TS._SL500_._AC_SL500_.jpg", desc: "جناح ملاك ذهبي." },
    { id: 509, name: "سلسلة الانفنتي مع الاسم", price: 260, category: "necklaces", categoryLabel: "سلاسل", image: "https://cdn.salla.sa/aobdW/xBEbKv8nvUEGYzhMI5Ai239X6Hs5tQ3C1GxFg7jJ.jpg", desc: "تخصيص الاسم مع رمز الانفنتي." },
    { id: 510, name: "سلسلة الوردة الملونة", price: 240, category: "necklaces", categoryLabel: "سلاسل", image: "https://eg.jumia.is/qxa7FYq7WcDXv6ni8diZ50n_L3g=/fit-in/680x680/filters:fill(white)/product/09/27052/1.jpg?3674",desc:"ة بألوان المينا." },
    { id: 511, name: "عقد السلسلة السميكة", price: 400, category: "necklaces", categoryLabel: "سلاسل", image: "https://www.dhresource.com/webp/m/0x0/f2/albu/g4/M00/71/C5/rBVaEVe0TauAPST8AAGn-OKtUxI201.jpg", desc: "موضة الجنزير الرائجة." },
    { id: 512, name: "سلسلة الكريستالة", price: 180, category: "necklaces", categoryLabel: "سلاسل", image: "https://images-na.ssl-images-amazon.com/images/I/316qYR5PN7L._SL500_._AC_SL500_.jpg", desc: "كريستالة شفافة." },
    { id: 513, name: "سلسلة الجوهرة", price: 210, category: "necklaces", categoryLabel: "سلاسل", image: "https://cdn11.bigcommerce.com/s-t4k1ukevvr/images/stencil/1440w/products/911/51728/21046140098-1__78478.1765202128.jpg", desc: "تصميم ديني أنيق." },
    { id: 514, name: "سلسلة القلب المكسور", price: 230, category: "necklaces", categoryLabel: "سلاسل", image: "https://m.media-amazon.com/images/I/81DZxkW3TuS._AC_UF1000,1000_QL80_.jpg", desc: "نصفين لقلب واحد." },
    { id: 515, name: "سلسلة الخرز الطويلة", price: 150, category: "necklaces", categoryLabel: "سلاسل", image: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/706971/1.jpg?6968", desc: "يمكن لفها مرتين." }
];

const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'sets', label: 'أطقم' },
    { id: 'necklaces', label: 'سلاسل' },
    { id: 'rings', label: 'خواتم' },
    { id: 'bracelets', label: 'أساور' },
    { id: 'earrings', label: 'أقراط' }
];

// --- STATE & DOM ---
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

// --- CORE FUNCTIONS ---
function init() { renderFilters(); renderGrid(); setupEventListeners(); }

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

function renderGrid() {
    let filtered = products.filter(p => {
        const matchesCategory = state.currentFilter === 'all' || p.category === state.currentFilter;
        const matchesSearch = p.name.includes(state.searchQuery) || p.desc.includes(state.searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (state.sortMethod === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (state.sortMethod === 'price-desc') filtered.sort((a, b) => b.price - a.price);

    countEl.innerText = filtered.length;
    
    if (filtered.length === 0) {
        gridEl.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        gridEl.classList.remove('hidden');
        emptyState.classList.add('hidden');
        gridEl.innerHTML = filtered.map(product => `
            <div class="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm card-hover transition-all duration-300 flex flex-col h-full group">
                <div class="relative h-64 overflow-hidden bg-stone-100 cursor-pointer" onclick="openImageModal('${product.image}', '${product.name}')">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <span class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gold-600 shadow-sm">${product.categoryLabel}</span>
                    <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span class="bg-white/80 p-2 rounded-full text-stone-800 text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">🔍 تكبير</span>
                    </div>
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

function toggleDashboard() {
    dashboardSection.classList.toggle('hidden');
    if (!dashboardSection.classList.contains('hidden') && !state.chartsInitialized) { initCharts(); state.chartsInitialized = true; }
}

function initCharts() {
    const cats = {}, prices = {};
    products.forEach(p => {
        cats[p.categoryLabel] = (cats[p.categoryLabel] || 0) + 1;
        if (!prices[p.categoryLabel]) prices[p.categoryLabel] = { sum: 0, count: 0 };
        prices[p.categoryLabel].sum += p.price;
        prices[p.categoryLabel].count += 1;
    });
    const labels = Object.keys(cats), counts = Object.values(cats), avgPrices = labels.map(l => Math.round(prices[l].sum / prices[l].count));

    new Chart(document.getElementById('categoryChart').getContext('2d'), {
        type: 'doughnut', data: { labels, datasets: [{ data: counts, backgroundColor: ['#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f'], borderWidth: 0 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { font: { family: 'Cairo' } } } } }
    });

    new Chart(document.getElementById('priceChart').getContext('2d'), {
        type: 'bar', data: { labels, datasets: [{ label: 'متوسط السعر', data: avgPrices, backgroundColor: '#f59e0b', borderRadius: 8 }] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } }, plugins: { legend: { display: false }, tooltip: { bodyFont: { family: 'Cairo' } } } }
    });
}

function setFilter(id) { state.currentFilter = id; renderFilters(); renderGrid(); }
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => { state.searchQuery = e.target.value; renderGrid(); });
    sortSelect.addEventListener('change', (e) => { state.sortMethod = e.target.value; renderGrid(); });
}
function resetFilters() { state.currentFilter = 'all'; state.searchQuery = ''; searchInput.value = ''; renderFilters(); renderGrid(); }

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = state.cart.find(item => item.id === id);
    if (existing) existing.qty++; else state.cart.push({ ...product, qty: 1 });
    updateCartUI(); showToast(`تمت إضافة "${product.name}" للسلة`); toggleCart(true);
}
function updateCartQty(id, change) {
    const item = state.cart.find(item => item.id === id);
    if (item) { item.qty += change; if (item.qty <= 0) state.cart = state.cart.filter(i => i.id !== id); }
    updateCartUI();
}
function removeItem(id) { state.cart = state.cart.filter(i => i.id !== id); updateCartUI(); }
function updateCartUI() {
    if (state.cart.length === 0) {
        cartItemsEl.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-stone-400 py-10"><span class="text-4xl mb-2">🛒</span><p>السلة فارغة حالياً</p></div>`;
    } else {
        cartItemsEl.innerHTML = state.cart.map(item => `
            <div class="flex gap-4 p-3 bg-stone-50 rounded-xl border border-stone-100 items-center">
                <img src="${item.image}" class="w-16 h-16 object-cover rounded-lg">
                <div class="flex-1"><h4 class="font-bold text-sm text-stone-800 line-clamp-1">${item.name}</h4><p class="text-gold-600 font-bold text-sm">${item.price * item.qty} ج.م</p></div>
                <div class="flex items-center gap-2 bg-white rounded-lg border border-stone-200 px-1 py-1">
                    <button onclick="updateCartQty(${item.id}, -1)" class="w-6 h-6 flex items-center justify-center hover:bg-stone-100 rounded text-stone-600">-</button>
                    <span class="text-xs font-bold w-4 text-center">${item.qty}</span>
                    <button onclick="updateCartQty(${item.id}, 1)" class="w-6 h-6 flex items-center justify-center hover:bg-stone-100 rounded text-stone-600">+</button>
                </div>
                <button onclick="removeItem(${item.id})" class="text-red-400 hover:text-red-600 text-xs px-2">حذف</button>
            </div>
        `).join('');
    }
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    cartTotalEl.innerText = total + " ج.م";
    const count = state.cart.reduce((c, item) => c + item.qty, 0);
    cartBadge.innerText = count;
    if (count > 0) { cartBadge.classList.remove('scale-0'); cartBadge.classList.add('scale-100'); } 
    else { cartBadge.classList.add('scale-0'); cartBadge.classList.remove('scale-100'); }
}

function toggleCart(forceOpen = false) {
    const isHidden = cartDrawer.classList.contains('-translate-x-full');
    if (isHidden || forceOpen) { cartDrawer.classList.remove('-translate-x-full'); cartOverlay.classList.remove('hidden', 'opacity-0'); } 
    else { cartDrawer.classList.add('-translate-x-full'); cartOverlay.classList.add('opacity-0'); setTimeout(() => cartOverlay.classList.add('hidden'), 300); }
}

function checkout() {
    if (state.cart.length === 0) return;
    const phone = "20110443639";
    let msg = "مرحباً ميرا جولد، أود طلب المنتجات التالية:\n\n";
    state.cart.forEach(item => { msg += `- ${item.name} (${item.qty} قطعة) - ${item.price * item.qty} ج.م\n`; });
    msg += `\nالإجمالي: ${cartTotalEl.innerText}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').innerText = msg;
    toast.classList.remove('opacity-0', 'translate-y-20');
    setTimeout(() => { toast.classList.add('opacity-0', 'translate-y-20'); }, 3000);
}

function openImageModal(src, alt) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-img');
    img.src = src;
    img.alt = alt;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        img.classList.remove('scale-95');
        img.classList.add('scale-100');
    }, 10);
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-img');
    modal.classList.add('opacity-0');
    img.classList.remove('scale-100');
    img.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        img.src = ''; 
    }, 300);
}

// Start Application
init();