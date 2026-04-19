// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Advanced Scroll Reveal Engine
const revealItems = document.querySelectorAll('.bento-item, .hero-text, .hero-image, .about-text, .stat-box, .contact-form-glass');

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
            revealOnScroll.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealItems.forEach(item => {
    // Initial state
    item.style.opacity = '0';
    item.style.transform = 'translateY(40px) scale(0.98)';
    item.style.transition = 'all 1.2s cubic-bezier(0.19, 1, 0.22, 1)';
    revealOnScroll.observe(item);
});

// Staggered Reveal for Bento Grid
document.querySelectorAll('.bento-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.15}s`;
});

// Hero Image Parallax / Hover
const heroImg = document.getElementById('hero-img');
if (heroImg) {
    window.addEventListener('scroll', () => {
        const speed = 0.1;
        const yPos = -(window.scrollY * speed);
        heroImg.style.transform = `translateY(${yPos}px) scale(1)`;
    });
}

// Form Handling
document.getElementById('premiumForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = 'SECURELY SENDING...';
    btn.style.opacity = '0.7';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('Confidential Request Received. Dr. Yadav\'s team will contact you within 24 hours.');
        this.reset();
        btn.innerText = originalText;
        btn.style.opacity = '1';
        btn.disabled = false;
    }, 2000);
});

// Smooth Scroll for Nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
