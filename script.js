// دکمه بازگشت به بالا
const backBtn = document.getElementById('backToTop');
if (backBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) backBtn.classList.add('show');
        else backBtn.classList.remove('show');
    });
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// نوار پیشرفت اسکرول
const progressBar = document.getElementById('scrollProgress');
if (progressBar) {
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = percent + '%';
    });
}

// انیمیشن اسکرول برای المان‌ها
const revealElements = document.querySelectorAll('.team-card, .workshop-term, .about-grid > *, .board-card, .reveal, .goal-card, .team-card-home, .workshop-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
revealElements.forEach(el => observer.observe(el));

// ===== منوی موبایل =====
const menuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        mainNav.classList.toggle('show');
    });
    
    // بستن منو بعد از کلیک روی لینک
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mainNav.classList.remove('show');
        });
    });
}

// اسکرول نرم برای لینک‌های داخلی
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId !== '#' && targetId !== '') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// اطمینان از کار منوی موبایل در تمام صفحات
document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById('mobileMenuBtn');
    var mainNav = document.getElementById('mainNav');
    
    if (menuBtn && mainNav) {
        menuBtn.onclick = function() {
            if (mainNav.style.display === 'flex') {
                mainNav.style.display = 'none';
            } else {
                mainNav.style.display = 'flex';
            }
        };
    }
});
// منوی موبایل - مخصوص همه صفحات
var menuBtn = document.getElementById('mobileMenuBtn');
var mainNav = document.getElementById('mainNav');

if (menuBtn && mainNav) {
    menuBtn.onclick = function() {
        if (mainNav.style.display === 'flex') {
            mainNav.style.display = 'none';
        } else {
            mainNav.style.display = 'flex';
        }
    };
}



