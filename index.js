document.addEventListener('DOMContentLoaded', function () {
    
    // ==========================================
    // 1. LANGUAGE & TRANSLATIONS
    // ==========================================
    const translations = {
        brandName: { en: 'M/Kayan Electronics<span>Maintenance and Sales</span>', bn: 'এম/কায়ান ইলেকট্রনিক্স<span>রক্ষণাবেক্ষণ এবং বিক্রয়</span>', ar: 'م/كيان للإلكترونيات<span>الصيانة والمبيعات</span>' },
        navHome: { en: 'Home', bn: 'হোম', ar: 'الرئيسية' },
        navServices: { en: 'Services', bn: 'সেবাসমূহ', ar: 'خدماتنا' },
        navGallery: { en: 'Projects', bn: 'প্রোজেক্টস', ar: 'المشاريع' },
        navReviews: { en: 'Reviews', bn: 'মতামত', ar: 'الآراء' },
        navContact: { en: 'Contact', bn: 'যোগাযোগ', ar: 'اتصل بنا' },
        headline: { en: 'Expert Smart TV Repair & CCTV Installation in Saudi Arabia', bn: 'সৌদি আরবে বিশেষজ্ঞ স্মার্ট টিভি মেরামত এবং সিসিটিভি ইনস্টলেশন', ar: 'تصليح شاشات التلفزيون وتركيب كاميرات المراقبة في السعودية' },
        subheadline: { en: 'Reliable service for all Smart TV, LED, and Satellite Dish systems...', bn: 'স্মার্ট টিভি, এলইডি, এবং স্যাটেলাইট ডিশ সিস্টেমের জন্য নির্ভরযোগ্য সেবা...', ar: 'خدمة موثوقة لجميع أنظمة التلفزيون الذكي، LED، وأطباق الستالايت...' },
        ctaButton: { en: '📞 CALL NOW', bn: '📞 এখনই কল করুন', ar: '📞 اتصل الآن' },
        servicesTitle: { en: 'Our Technology Installation & Repair Services', bn: 'আমাদের প্রযুক্তি ইনস্টলেশন ও মেরামত সেবাসমূহ', ar: 'خدماتنا لتركيب وصيانة الأجهزة الإلكترونية' },
        service1: { en: 'Smart TV, LED & Screen Repair Service', bn: 'স্মার্ট টিভি, এলইডি ও স্ক্রিন মেরামতের সেবা', ar: 'خدمة تصليح الشاشات والتلفزيونات الذكية LED' },
        service2: { en: 'CCTV Camera Installation & Maintenance', bn: 'সিসিটিভি ক্যামেরা ইনস্টলেশন ও রক্ষণাবেক্ষণ', ar: 'تركيب وصيانة كاميرات المراقبة CCTV' },
        service3: { en: 'Satellite Dish Setup and Service', bn: 'স্যাটেলাইট ডিশ সেটআপ এবং সার্ভিস', ar: 'تركيب وخدمة أطباق الستالايت والدش' },
        service4: { en: 'All Electronic Device Repair & Servicing', bn: 'সকল ইলেকট্রনিক ডিভাইস মেরামত ও সার্ভিসিং', ar: 'تصليح وصيانة جميع الأجهزة الإلكترونية' },
        service5: { en: 'Satellite and CCTV Equipment Sales', bn: 'স্যাটেলাইট এবং সিসিটিভি সরঞ্জাম বিক্রয়', ar: 'بيع معدات الستالايت وكاميرات المراقبة' },
        service6: { en: 'Free On-site Consultation & Estimate', bn: 'বিনামূল্যে অন-সাইট পরামর্শ ও মূল্য নির্ধারণ', ar: 'استشارة مجانية وتقدير سعر في الموقع' },
        callNowButton: { en: '📞 Call Now: Get a Free Quote', bn: '📞 এখনই কল করুন', ar: '📞 اتصل الآن: للحصول على عرض سعر مجاني' },
        galleryTitle: { en: 'Recent Projects Gallery', bn: 'সাম্প্রতিক প্রোজেক্টস', ar: 'معرض المشاريع الحديثة (الشاشات والأمن)' },
        reviewsTitle: { en: 'Customer Feedback', bn: 'গ্রাহকের মতামত', ar: 'آراء العملاء حول أعمال التصليح والتركيب' },
        review1Text: { en: '"They fixed my LED screen quickly. Great work!"', bn: '"তারা আমার এলইডি স্ক্রিনটি দ্রুত ঠিক করেছে।"', ar: '"لقد قاموا بتصليح شاشتي LED بسرعة واحترافية. عمل عظيم في تبوك!"' },
        review1Author: { en: '– Fatima, Tabuk', bn: '– ফাতিমা, তাবুক', ar: '– فاطمة، تبوك' },
        review2Text: { en: '"Installed my full CCTV system smoothly."', bn: '"আমার সিসিটিভি সিস্টেমটি মসৃণভাবে ইনস্টল করেছে।"', ar: '"قاموا بتركيب نظام كاميرات المراقبة بالكامل بسلاسة وشرحوا التطبيق جيداً. أنا راضٍ تماماً."' },
        review2Author: { en: '– Ahmed, Tabuk', bn: '– আহমেদ, তাবুক', ar: '– أحمد، تبوك' },
        addReviewTitle: { en: 'Share Your Experience', bn: 'আপনার অভিজ্ঞতা শেয়ার করুন', ar: 'شارك تجربتك مع خدماتنا' },
        formName: { en: 'Name', bn: 'নাম', ar: 'الاسم' },
        formLocation: { en: 'Location', bn: 'অবস্থান', ar: 'الموقع (مثال: تبوك)' },
        formRating: { en: 'Rating', bn: 'রেটিং', ar: 'التقييم' },
        formReview: { en: 'Your Review', bn: 'আপনার মতামত', ar: 'مراجعتك وتعليقك' },
        formPhoto: { en: 'Upload a Photo (Optional)', bn: 'ছবি আপলোড করুন (ঐচ্ছিক)', ar: 'تحميل صورة (اختياري)' },
        formSubmit: { en: 'Submit Review', bn: 'মতামত জমা দিন', ar: 'إرسال المراجعة' },
        contactFormTitle: { en: 'Request a Service or Quote', bn: 'সেবা বা মূল্যের জন্য অনুরোধ', ar: 'طلب خدمة أو عرض سعر (كاميرات، تصليح تلفزيون، ستالايت)' },
        aboutTitle: { en: 'About M/Kayan Electronics', bn: 'এম/কায়ান ইলেকট্রনিক্স সম্পর্কে', ar: 'عن م/كيان للإلكترونيات - شريكك الإلكتروني' },
        aboutText: { 
            en: 'M/Kayan Electronics is your trusted provider for all electronic installation and repair services in Saudi Arabia...', 
            bn: 'এম/কায়ান ইলেকট্রনিক্স হল সৌদি আরবে সকল ইলেকট্রনিক ইনস্টলেশন ও মেরামত সেবার জন্য আপনার বিশ্বস্ত প্রদানকারী...', 
            ar: 'م/كيان للإلكترونيات هو مزودك الموثوق به لجميع خدمات تركيب وصيانة الإلكترونيات في المملكة العربية السعودية...' 
        },
        contactLocation: { en: '🏢 <strong>Location:</strong> 7394–7550 King Abdulaziz Road, Tabuk 47711', bn: '🏢 <strong>লোকেশন:</strong> ৭৩৯৪–৭৫৫০ কিং আব্দুলআজিজ রোড, তাবুক ৪৭৭১১', ar: '🏢 <strong>الموقع:</strong> 7394–7550 طريق الملك عبد العزيز، تبوك 47711' },
        contactMobile: { en: '📱 <strong>Mobile:</strong> <a href="tel:+966533920372">+966 533920372</a>', bn: '📱 <strong>মোবাইল:</strong> <a href="tel:+966533920372">+966 533920372</a>', ar: '📱 <strong>الجوال:</strong> <a href="tel:+966533920372" dir="ltr">+966 533920372</a>' },
        contactWhatsapp: { en: '🟢 <strong>WhatsApp:</strong> <a href="https://wa.me/+966533920372">+966 533920372</a>', bn: '🟢 <strong>WhatsApp:</strong> <a href="https://wa.me/+966533920372">+966 533920372</a>', ar: '🟢 <strong>واتساب:</strong> <a href="https://wa.me/+966533920372" dir="ltr">+966 533920372</a>' },
        contactEmail: { en: '📧 <strong>Email:</strong> 938mijanur@gmail.com', bn: '📧 <strong>ইমেইল:</strong> 938mijanur@gmail.com', ar: '📧 <strong>البريد الإلكتروني:</strong> 938mijanur@gmail.com' },
        contactHours: { en: '⏰ <strong>Service:</strong> 24/7 Support', bn: '⏰ <strong>সার্ভিস:</strong> ২৪/৭ সাপোর্ট', ar: '⏰ <strong>الخدمة:</strong> دعم 24/7' },
    
        // === TV REPAIR PAGE TRANSLATIONS ===
        tvHeroTitle: { en: 'TV Screen Repair & Maintenance Service in Tabuk', bn: 'তাবুকে টিভি স্ক্রিন মেরামত ও রক্ষণাবেক্ষণ পরিষেবা', ar: 'خدمة اصلاح شاشة التلفاز و صيانة التلفاز في تبوك' },
        tvHeroSubtitle: { en: 'We are the #1 specialists in <strong>Smart TV Repair</strong> and <strong>LED Screen Repair</strong>.', bn: 'আমরা <strong>স্মার্ট টিভি মেরামত</strong> এবং <strong>এলইডি স্ক্রিন মেরামত</strong> এর ১ নম্বর বিশেষজ্ঞ।', ar: 'نحن المتخصصون رقم 1 في <strong>إصلاح الشاشة الذكية</strong> و <strong>تصليح شاشات LED</strong> لجميع الماركات العالمية.' },
        tvHeroCTA: { en: '📞 Call Technician: +966 533920372', bn: '📞 টেকনিশিয়ানকে কল করুন: +966 533920372', ar: '📞 اتصل بالفني الآن: +966 533920372' },
        
        tvIntroTitle: { en: 'Why Choose Us for TV Maintenance?', bn: 'টিভি রক্ষণাবেক্ষণের জন্য কেন আমাদের বেছে নেবেন?', ar: 'لماذا تختارنا لـ صيانة التلفاز في تبوك؟' },
        tvIntroText: { 
            en: 'If you have a broken screen, our <strong>TV Screen Repair</strong> service is the perfect solution. We provide home service for <strong>Smart TV Repair</strong>.', 
            bn: 'যদি আপনার স্ক্রিন ভাঙা থাকে, আমাদের <strong>টিভি স্ক্রিন মেরামত</strong> পরিষেবাটি নিখুঁত সমাধান।', 
            ar: 'إذا كنت تعاني من كسر في الشاشة أو عطل في الإضاءة، فإن خدمة <strong>اصلاح شاشة التلفاز</strong> لدينا هي الحل الأمثل.' 
        },
        tvServicesListTitle: { en: '🛠️ Services Include:', bn: '🛠️ পরিষেবাগুলির মধ্যে রয়েছে:', ar: '🛠️ خدماتنا تشمل:' },
        tvServiceItem1: { en: '<strong>TV Screen Repair</strong> for broken screens.', bn: 'ভাঙা স্ক্রিনের জন্য <strong>টিভি স্ক্রিন মেরামত</strong>।', ar: '<strong>اصلاح شاشة التلفاز</strong> المكسورة أو التي لا تعمل.' },
        tvServiceItem2: { en: '<strong>TV Maintenance</strong> for sound/no picture.', bn: 'শব্দ/ছবি নেই এমন সমস্যার জন্য <strong>টিভি রক্ষণাবেক্ষণ</strong>।', ar: '<strong>صيانة التلفاز</strong> الذي يوجد به صوت ولا توجد صورة.' },
        tvServiceItem3: { en: '<strong>Smart TV Repair</strong> and Wi-Fi issues.', bn: '<strong>স্মার্ট টিভি মেরামত</strong> এবং ওয়াই-ফাই সমস্যা।', ar: '<strong>إصلاح الشاشة الذكية</strong> (Smart TV) ومشاكل الاتصال بالواي فاي.' },
        tvServiceItem4: { en: '<strong>LED Screen Repair</strong> and backlight.', bn: '<strong>এলইডি স্ক্রিন মেরামত</strong> এবং ব্যাকলাইট।', ar: '<strong>تصليح شاشات LED</strong> وتغيير طقم الإضاءة الخلفية (Backlight).' },
    
        tvBrandsTitle: { en: 'We Serve All Brands', bn: 'আমরা সমস্ত ব্র্যান্ড পরিষেবা দিই', ar: 'نخدم جميع الماركات - صيانة وإصلاح' },
        tvBrandsSubtitle: { en: 'Specialized center for <strong>TV Maintenance</strong>', bn: '<strong>টিভি রক্ষণাবেক্ষণ</strong> এর বিশেষ কেন্দ্র', ar: 'نحن مركز متخصص لـ <strong>صيانة التلفاز</strong> لجميع العلامات التجارية في السعودية' },
    
        tvProblemsTitle: { en: 'Common Problems We Solve', bn: 'সাধারণ সমস্যা যা আমরা সমাধান করি', ar: 'مشاكل شائعة نقوم بحلها (اصلاح شاشة التلفاز)' },
        tvProblemsText: { en: 'We specialize in diagnosing faults:', bn: 'আমরা ত্রুটিগুলি নির্ণয় করতে বিশেষজ্ঞ:', ar: 'نحن متخصصون في تشخيص الأعطال بدقة:' },
        tvProblem1: { en: '<strong>TV Maintenance</strong> for no power.', bn: 'বিদ্যুৎ নেই এর জন্য <strong>টিভি রক্ষণাবেক্ষণ</strong>।', ar: '<strong>صيانة التلفاز</strong> القاطع باور (لا يعمل نهائياً).' },
        tvProblem2: { en: '<strong>LED Screen Repair</strong> for dark images.', bn: 'অন্ধকার ছবির জন্য <strong>এলইডি স্ক্রিন মেরামত</strong>।', ar: '<strong>تصليح شاشات LED</strong> التي تومض أو الصورة مظلمة.' },
        tvProblem3: { en: '<strong>Smart TV Repair</strong> internet issues.', bn: '<strong>স্মার্ট টিভি মেরামত</strong> ইন্টারনেট সমস্যা।', ar: '<strong>إصلاح الشاشة الذكية</strong> التي لا تتصل بالإنترنت أو اليوتيوب.' },
        tvProblem4: { en: 'Fixing lines in <strong>TV Screen Repair</strong>.', bn: '<strong>টিভি স্ক্রিন মেরামত</strong> এ লাইন ঠিক করা।', ar: 'حل مشكلة الخطوط العمودية والأفقية في <strong>اصلاح شاشة التلفاز</strong>.' },
    
        tvFinalCTATitle: { en: 'Need a TV Technician?', bn: 'টিভি টেকনিশিয়ান প্রয়োজন?', ar: 'هل تحتاج إلى فني صيانة التلفاز في تبوك؟' },
        tvFinalCTAText: { en: 'Contact us for fast <strong>TV Screen Repair</strong>.', bn: 'দ্রুত <strong>টিভি স্ক্রিন মেরামত</strong> এর জন্য যোগাযোগ করুন।', ar: 'لا تتردد في الاتصال بنا. نحن نقدم أسرع خدمة <strong>اصلاح شاشة التلفاز</strong> و <strong>إصلاح الشاشة الذكية</strong> في منطقتك.' },
        tvFinalCTABtn: { en: 'WhatsApp / Call: +966 533920372', bn: 'কল: 0+966 533920372', ar: 'واتساب / اتصال: +966 533920372' },
        
        footerText: { en: '&copy; 2025 M/Kayan Electronics', bn: '&copy; 2025 এম/কায়ান ইলেকট্রনিক্স', ar: '&copy; 2025 م/كيان للإلكترونيات - متخصصون في <strong>صيانة التلفاز</strong> و <strong>تصليح شاشات LED</strong>.' }
    };

    function changeLanguage(lang) {
        localStorage.setItem('siteLanguage', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        if(lang === 'ar') { document.body.classList.add('ar'); } else { document.body.classList.remove('ar'); }

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[key] && translations[key][lang]) {
                el.innerHTML = translations[key][lang];
            }
        });

        document.querySelectorAll('.language-switcher button').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) { btn.classList.add('active'); } else { btn.classList.remove('active'); }
        });
    }

    // Attach Click Event Listeners to Buttons
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Initialize Language
    const savedLang = localStorage.getItem('siteLanguage') || 'ar';
    changeLanguage(savedLang);

    // ==========================================
    // 2. DYNAMIC DATA LOADING
    // ==========================================
    loadSiteData();

    function loadSiteData() {
        console.log("Fetching site data..."); // Debugging
        fetch('get_data.php')
            .then(response => {
                if (!response.ok) { throw new Error("HTTP error " + response.status); }
                return response.text(); // Get text first to catch PHP errors
            })
            .then(text => {
                try {
                    const data = JSON.parse(text); // Parse JSON manually
                    if (data.status === 'success') {
                        if (data.gallery) updateGallery(data.gallery);
                        if (data.reviews && data.reviews.length > 0) renderReviews(data.reviews);
                    } else {
                        console.error("Server reported error:", data.message);
                    }
                } catch (e) {
                    console.error("JSON Parse Error. Server sent:", text); // Logs PHP errors
                }
            })
            .catch(error => console.error('Connection error:', error));
    }

    function updateGallery(galleryData) {
        for (const [key, path] of Object.entries(galleryData)) {
            const element = document.getElementById(`gallery-${key}`);
            if (element) {
                // Cache busting with timestamp
                const newSrc = path + "?t=" + new Date().getTime();
                element.src = newSrc;
                if (element.tagName === 'VIDEO') { element.load(); }
            }
        }
    }

    function renderReviews(reviews) {
        const reviewsGrid = document.getElementById('reviews-grid');
        if (!reviewsGrid) return;
        
        // Clear existing reviews to avoid duplicates if called multiple times
        // reviewsGrid.innerHTML = ''; 

        reviews.forEach(review => {
            const newReviewCard = document.createElement('div');
            newReviewCard.className = 'review-card';
            const photoSrc = review.photo_path ? review.photo_path : 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150';
            const starsHTML = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
            
            newReviewCard.innerHTML = `
                <img src="${photoSrc}" alt="${review.name}" style="width:80px; height:80px; object-fit:cover; border-radius:50%;">
                <div>
                    <div class="review-stars" style="color: gold;">${starsHTML}</div>
                    <p>"${review.review_text}"</p>
                    <b>– ${review.name}, ${review.location}</b>
                </div>
            `;
            reviewsGrid.appendChild(newReviewCard);
        });
    }

    // ==========================================
    // 3. FORM HANDLING
    // ==========================================
    const reviewForm = document.getElementById('reviewForm');
    const contactForm = document.getElementById('contactForm');

    function handleFormSubmit(event, formElement) {
        event.preventDefault();
        const formData = new FormData(formElement);
        const submitBtn = formElement.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        fetch('form_handler.php', { method: 'POST', body: formData })
        .then(response => response.json())
        .then(data => {
            showNotification(data.message, data.status);
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            if (data.status === 'success') {
                formElement.reset();
                if (formElement.id === 'reviewForm') {
                    // Reload reviews immediately after submission
                    const reviewsGrid = document.getElementById('reviews-grid');
                    if(reviewsGrid) reviewsGrid.innerHTML = ''; 
                    loadSiteData(); 
                    document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
                    if(document.getElementById('rating')) document.getElementById('rating').value = 0;
                    if(document.getElementById('image-preview')) document.getElementById('image-preview').src = '';
                }
            }
        })
        .catch(error => {
            console.error('Form Error:', error);
            showNotification('Connection error.', 'error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    }

    if (reviewForm) reviewForm.addEventListener('submit', (e) => handleFormSubmit(e, reviewForm));
    if (contactForm) contactForm.addEventListener('submit', (e) => handleFormSubmit(e, contactForm));

    // ==========================================
    // 4. UI INTERACTIONS (Video, Stars, etc)
    // ==========================================
    function showNotification(message, status) {
        const notification = document.getElementById('notification-popup');
        if (!notification) return;
        notification.textContent = message;
        notification.className = ''; 
        notification.classList.add(status, 'show');
        setTimeout(() => { notification.classList.remove('show'); }, 3000);
    }

    const stars = document.querySelectorAll('.star-rating .star');
    const ratingInput = document.getElementById('rating');
    if (stars.length > 0) {
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = star.getAttribute('data-value');
                if(ratingInput) ratingInput.value = value;
                stars.forEach(s => {
                    s.classList.toggle('selected', s.getAttribute('data-value') <= value);
                    s.style.color = s.getAttribute('data-value') <= value ? 'gold' : 'gray';
                });
            });
        });
    }

    const photoInput = document.getElementById('photo');
    const imagePreview = document.getElementById('image-preview');
    if (photoInput && imagePreview) {
        photoInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => { imagePreview.src = e.target.result; };
                reader.readAsDataURL(this.files[0]);
            }
        });
    }

    // Video Slider
    const videoSlides = document.querySelectorAll('.video-slider-container video');
    const prevBtn = document.getElementById('video-prev');
    const nextBtn = document.getElementById('video-next');
    let currentVideoIndex = 0;
    if (videoSlides.length > 0 && prevBtn && nextBtn) {
        function showVideo(index) {
            videoSlides.forEach((video, i) => {
                video.style.display = (i === index) ? 'block' : 'none';
                video.pause();
                video.currentTime = 0;
                if(i === index) video.play().catch(e => console.log("Autoplay blocked"));
            });
        }
        nextBtn.addEventListener('click', () => { currentVideoIndex = (currentVideoIndex + 1) % videoSlides.length; showVideo(currentVideoIndex); });
        prevBtn.addEventListener('click', () => { currentVideoIndex = (currentVideoIndex - 1 + videoSlides.length) % videoSlides.length; showVideo(currentVideoIndex); });
        showVideo(0);
    }
    
    // Smooth Scroll
    const navLinks = document.querySelectorAll('.nav-links a');
    const navbarHeight = 70;
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href.startsWith('#') && href.indexOf('.html') > -1) {
                const currentPath = window.location.pathname.split('/').pop() || 'index.html';
                const targetPath = href.split('#')[0];
                if (currentPath !== targetPath) return; 
            }
            if (href.includes('#')) {
                e.preventDefault();
                const targetId = href.substring(href.indexOf('#'));
                const targetElement = document.querySelector(targetId);
                if (targetElement) { 
                    window.scrollTo({ top: targetElement.offsetTop - navbarHeight, behavior: 'smooth' }); 
                }
            }
        });
    });
});