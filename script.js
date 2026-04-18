document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Sticky Navbar Effect on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
            navbar.style.padding = '0.75rem 0';
        } else {
            navbar.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
            navbar.style.padding = '1rem 0';
        }
    });

    // 3. Scroll Reveal Animations
    const reveals = document.querySelectorAll('.problem-card, .service-category, .pricing-card, .about-content, .about-image');
    // Pre-add reveal class to items we want to animate
    reveals.forEach(el => el.classList.add('reveal'));

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // when 100px of element is visible from bottom

        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // 4. Mobile Menu Toggle (Basic setup)
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        alert("Mobile menu feature can be implemented here! For now, please resize to desktop.");
    });
});
