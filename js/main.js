document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const langToggle = document.getElementById('lang-toggle');
    const logoLink = document.getElementById('logo-link');
    const body = document.body;

    // --- Translations ---
    const translations = {
        tr: {
            nav_features: "Özellikler",
            nav_screens: "Ekranlar",
            nav_contact: "İletişime Geç",
            hero_title: 'İşletmenizin Tüm Kontrolü <span class="highlight">Tek Uygulamada</span>',
            hero_desc: "Gelir-gider takibi, stok yönetimi, personel maaşları ve gün sonu raporları. Kebapçı Ökkeş ile restoranınızı veriye dayalı yönetin.",
            hero_btn_start: "Hemen Başlayın",
            hero_btn_view: "Ekranları İncele",
            stat_local: "Yerli Yazılım",
            stat_support: "Canlı Destek",
            card_daily_income: "Günlük Ciro",
            card_stock_tracking: "Stok Takip",
            card_auto: "Otomatik",
            feature_title: "Neler Yapabilirsiniz?",
            feature_desc: "Restoran yönetiminde ihtiyacınız olan her şey düşünüldü.",
            feat_finance_title: "Finans Yönetimi",
            feat_finance_desc: "Günlük ciro, giderler ve net kâr analizi. Nakit, kredi kartı ve paket servis gelirlerini ayrı ayrı takip edin.",
            feat_stock_title: "Stok Takibi",
            feat_stock_desc: "Ürün giriş-çıkışları, zayi/fire takibi ve anlık stok durumu. Kritik stok seviyelerinde haberdar olun.",
            feat_personnel_title: "Personel Yönetimi",
            feat_personnel_desc: "Personel takibi. Saatlik veya aylık ücretlendirme, maaş ödemeleri ve performans takibi.",
            gallery_title: "Uygulama Görselleri",
            gallery_desc: "Kullanıcı dostu arayüz ve kolay kullanım.",
            cta_title: "İşletmenizi Dijitalleştirin",
            cta_desc: "Kebapçı Ökkeş uygulaması ile kağıt kalem devri kapandı. Hemen geçiş yapın.",
            cta_btn: "Bize Ulaşın",
            or: "veya",
            footer_rights: "Tüm hakları saklıdır.",
            try_it_title: "Projeyi Deneyin",
            try_it_desc: "Geliştiriciler için hızlı başlangıç rehberi.",
            step_1_title: "Projeyi Klonlayın",
            step_1_desc: "Github reposunu bilgisayarınıza indirin.",
            step_2_title: "Bağımlılıkları Yükleyin",
            step_2_desc: "Gerekli paketleri kurun.",
            step_3_title: "Başlatın",
            step_3_desc: "Expo geliştirme sunucusunu başlatın.",
            step_4_title: "Test Edin",
            step_4_desc: "Expo Go uygulaması ile QR kodu taratın.",
            step_4_sub: "Expo Go ile Tara",
            nav_guides: "Rehberler",
            nav_user_guide: "Kullanıcı Rehberi",
            nav_dev_guide: "Geliştirici Rehberi",
            ug_title: "Nasıl Kullanılır?",
            ug_desc: "Kebapçı Ökkeş uygulamasını kullanmaya başlamak için basit adımlar.",
            ug_step1_title: "1. Giriş ve Ana Ekran",
            ug_step1_desc: "Uygulamaya giriş yaptıktan sonra sizi karşılayan ana ekranda günlük özetinizi görün.",
            ug_step2_title: "2. Personel Yönetimi",
            ug_step2_desc: "Çalışan kategorilerini belirleyin ve yeni personel ekleyin. Maaş takibini buradan kolayca yapın.",
            ug_step3_title: "3. Gelir & Gider Yönetimi",
            ug_step3_desc: "Aylık durumunuzu takvimden seçerek inceleyin. Alt menüden kolayca yeni gelir veya gider ekleyin.",
            ug_step4_title: "4. Stok Takibi",
            ug_step4_desc: "Stok listesine göz atın, yeni ürün ekleyin ve stok hareketlerini (giriş/çıkış) anlık olarak izleyin."
        },
        en: {
            nav_features: "Features",
            nav_screens: "Screens",
            nav_contact: "Contact Us",
            hero_title: 'Full Control of Your Business <span class="highlight">In One App</span>',
            hero_desc: "Income-expense tracking, stock management, staff salaries, and end-of-day reports. Manage your restaurant with data-driven insights using Kebapçı Ökkeş.",
            hero_btn_start: "Get Started",
            hero_btn_view: "View Screens",
            stat_local: "Local Software",
            stat_support: "Live Support",
            card_daily_income: "Daily Revenue",
            card_stock_tracking: "Stock Tracking",
            card_auto: "Automatic",
            feature_title: "What Can You Do?",
            feature_desc: "Everything you need for restaurant management is covered.",
            feat_finance_title: "Finance Management",
            feat_finance_desc: "Daily revenue, expenses, and net profit analysis. Track cash, credit card, and delivery income separately.",
            feat_stock_title: "Stock Tracking",
            feat_stock_desc: "Product inflow-outflow, waste tracking, and instant stock status. Get notified at critical stock levels.",
            feat_personnel_title: "Staff Management",
            feat_personnel_desc: "Track staff. Hourly or monthly billing, salary payments, and performance tracking.",
            gallery_title: "App Screenshots",
            gallery_desc: "User-friendly interface and ease of use.",
            cta_title: "Digitize Your Business",
            cta_desc: "The era of pen and paper is over with the Kebapçı Ökkeş app. Switch now.",
            cta_btn: "Contact Us",
            or: "or",
            footer_rights: "All rights reserved.",
            try_it_title: "Try the Project",
            try_it_desc: "Quick start guide for developers.",
            step_1_title: "Clone the Project",
            step_1_desc: "Download the Github repo to your computer.",
            step_2_title: "Install Dependencies",
            step_2_desc: "Install necessary packages.",
            step_3_title: "Start",
            step_3_desc: "Start the Expo development server.",
            step_4_title: "Test It",
            step_4_desc: "Scan the QR code with Expo Go app.",
            step_4_sub: "Scan with Expo Go",
            nav_guides: "Guides",
            nav_user_guide: "User Guide",
            nav_dev_guide: "Developer Guide",
            ug_title: "How to Use?",
            ug_desc: "Simple steps to start using the Kebapçı Ökkeş app.",
            ug_step1_title: "1. Login & Home",
            ug_step1_desc: "Login to the app and see your daily summary on the dashboard.",
            ug_step2_title: "2. Staff Management",
            ug_step2_desc: "Define employee categories and add new staff. Track salaries easily.",
            ug_step3_title: "3. Income & Expense",
            ug_step3_desc: "Review monthly status via calendar. Add new income or expenses easily from the bottom menu.",
            ug_step4_title: "4. Stock Tracking",
            ug_step4_desc: "View stock list, add new products, and track stock movements (in/out) instantly."
        }
    };

    // --- State ---
    let currentLang = localStorage.getItem('lang') || 'tr';

    // --- Functions ---
    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key]; // innerHTML to support HTML tags in translation
            }
        });
        langToggle.textContent = lang === 'tr' ? 'EN' : 'TR';
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    };

    // --- Event Listeners ---
    
    // 1. Logo Scroll to Top
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 2. Language Toggle
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        updateLanguage(currentLang);
    });

    // --- Init ---
    updateLanguage(currentLang);

    // --- Helper for Smooth Scroll on Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return; // handled by logo click
            
            const targetEl = document.querySelector(targetId);
            if(targetEl){
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Scroll Animations (Existing Code) ---
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // --- Lightbox ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = "block";
            lightboxImg.src = img.src;
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    const closeLightbox = () => {
        lightbox.style.display = "none";
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.key === "Escape" && lightbox.style.display === "block") {
            closeLightbox();
        }
    });

    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
