/**
 * =====================================================
 * وحدة الإحصائيات (Charts & Analytics) - charts.js
 * =====================================================
 * مسئول عن قسم "التحليلات" وإظهار الرسوم البيانية.
 */

function toggleDashboard() {
    dashboardSection.classList.toggle('hidden');
    // تشغيل الرسوم البيانية مرة واحدة فقط عند فتح اللوحة لأول مرة
    if (!dashboardSection.classList.contains('hidden') && !state.chartsInitialized) { 
        initCharts(); 
        state.chartsInitialized = true; 
    }
}

function initCharts() {
    const cats = {}, prices = {};
    
    // تجميع البيانات (كم منتج في كل فئة، وما هو متوسط السعر)
    products.forEach(p => {
        cats[p.categoryLabel] = (cats[p.categoryLabel] || 0) + 1;
        if (!prices[p.categoryLabel]) prices[p.categoryLabel] = { sum: 0, count: 0 };
        prices[p.categoryLabel].sum += p.price;
        prices[p.categoryLabel].count += 1;
    });
    
    const labels = Object.keys(cats);
    const counts = Object.values(cats);
    const avgPrices = labels.map(l => Math.round(prices[l].sum / prices[l].count));

    // 1. رسم الدائرة (توزيع المنتجات)
    new Chart(document.getElementById('categoryChart').getContext('2d'), {
        type: 'doughnut', 
        data: { labels, datasets: [{ data: counts, backgroundColor: ['#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f'], borderWidth: 0 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { font: { family: 'Cairo' } } } } }
    });

    // 2. رسم الأعمدة (متوسط الأسعار)
    new Chart(document.getElementById('priceChart').getContext('2d'), {
        type: 'bar', 
        data: { labels, datasets: [{ label: 'متوسط السعر', data: avgPrices, backgroundColor: '#f59e0b', borderRadius: 8 }] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } }, plugins: { legend: { display: false }, tooltip: { bodyFont: { family: 'Cairo' } } } }
    });
}