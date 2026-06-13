 document.addEventListener('DOMContentLoaded', function() {
    
    // === FAQ التفاعلي ===
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        
        header.addEventListener('click', function() {
            faqItems.forEach(other => {
                if (other !== item) other.classList.remove('open');
            });
            item.classList.toggle('open');
        });
    });

    // === معالجة النموذج ===
    const form = document.querySelector('.form-card');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = this.querySelectorAll('input');
            let valid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = '#ff6b6b';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (valid) {
                alert('شكراً! سيتم التواصل معك قريباً');
                this.reset();
            }
        });
    }

    // === تأثيرات الأزرار ===
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // === قائمة التنقل ===
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    console.log('✓ الموقع جاهز 100%');
});
    // سكريبت للأسئلة الشائعة
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const item = this.parentElement;
                item.classList.toggle('active');
                
                // إغلاق الأسئلة الأخرى
                document.querySelectorAll('.faq-item').forEach(faqItem => {
                    if (faqItem !== item) {
                        faqItem.classList.remove('active');
                    }
                });
            });
        });

        // سكريبت للنموذج
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('شكراً لتقديمك النموذج. سنتواصل معك قريباً!');
        });