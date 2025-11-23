/**
 * StarWell Website - Premium Interactive JavaScript
 * Bespoke animations and interactions
 */

// ============================================
// Utility Functions
// ============================================

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ============================================
// Navigation
// ============================================

class Navigation {
    constructor() {
        this.nav = document.getElementById('nav');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');

        this.init();
    }

    init() {
        // Scroll effect
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));

        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMenu());
        }

        // Close menu on link click (mobile)
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.closeMenu();
                }
            });
        });

        // Smooth scroll for anchor links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offset = 80; // Account for fixed nav
                        const targetPosition = target.offsetTop - offset;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.nav.classList.add('scrolled');
        } else {
            this.nav.classList.remove('scrolled');
        }
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.navToggle.classList.toggle('active');
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.navToggle.classList.remove('active');
    }
}

// ============================================
// Scroll Animations
// ============================================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.feature-card, .testimonial-card, .step, .tech-feature');
        this.init();
    }

    init() {
        // Create Intersection Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in', 'visible');
                    this.observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements
        this.elements.forEach(el => {
            el.classList.add('fade-in');
            this.observer.observe(el);
        });
    }
}

// ============================================
// Back to Top Button
// ============================================

class BackToTop {
    constructor() {
        this.button = document.getElementById('back-to-top');
        if (this.button) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 200));
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    handleScroll() {
        if (window.scrollY > 500) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ============================================
// Premium Cursor Effect (optional)
// ============================================

class CursorEffect {
    constructor() {
        this.cursor = null;
        this.cursorFollower = null;
        this.init();
    }

    init() {
        // Only on desktop
        if (window.innerWidth < 1024) return;

        // Create cursor elements
        this.cursor = document.createElement('div');
        this.cursor.classList.add('custom-cursor');
        this.cursor.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: #D4AF37;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.15s ease;
        `;

        this.cursorFollower = document.createElement('div');
        this.cursorFollower.classList.add('custom-cursor-follower');
        this.cursorFollower.style.cssText = `
            position: fixed;
            width: 40px;
            height: 40px;
            border: 2px solid rgba(212, 175, 55, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(this.cursor);
        document.body.appendChild(this.cursorFollower);

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';

            setTimeout(() => {
                this.cursorFollower.style.left = e.clientX - 15 + 'px';
                this.cursorFollower.style.top = e.clientY - 15 + 'px';
            }, 100);
        });

        // Expand on hover over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(2)';
                this.cursorFollower.style.transform = 'scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursorFollower.style.transform = 'scale(1)';
            });
        });
    }
}

// ============================================
// Parallax Effect for Hero
// ============================================

class ParallaxEffect {
    constructor() {
        this.heroPhone = document.querySelector('.hero-phone');
        if (this.heroPhone) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            if (this.heroPhone) {
                this.heroPhone.style.transform = `translateY(${rate}px)`;
            }
        }, 50));
    }
}

// ============================================
// Stats Counter Animation
// ============================================

class StatsCounter {
    constructor() {
        this.stats = document.querySelectorAll('.stat-value, .tech-stat-value');
        if (this.stats.length > 0) {
            this.init();
        }
    }

    init() {
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateValue(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.stats.forEach(stat => observer.observe(stat));
    }

    animateValue(element) {
        const text = element.textContent;
        const value = parseFloat(text);

        if (isNaN(value)) return;

        const suffix = text.replace(/[0-9.]/g, '');
        const duration = 2000;
        const steps = 60;
        const stepValue = value / steps;
        const stepDuration = duration / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += stepValue;
            if (current >= value) {
                element.textContent = value + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, stepDuration);
    }
}

// ============================================
// Form Handling (if needed)
// ============================================

class FormHandler {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.init();
    }

    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e, form));
        });
    }

    handleSubmit(e, form) {
        e.preventDefault();

        // Basic validation
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (isValid) {
            // Handle form submission (send to API, etc.)
            console.log('Form is valid, submit data');

            // Show success message
            this.showMessage(form, 'Thank you! We\'ll be in touch soon.', 'success');

            // Reset form
            form.reset();
        } else {
            this.showMessage(form, 'Please fill in all required fields.', 'error');
        }
    }

    showMessage(form, message, type) {
        // Remove existing message
        const existingMessage = form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageEl = document.createElement('div');
        messageEl.classList.add('form-message', `form-message-${type}`);
        messageEl.textContent = message;
        messageEl.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 0.5rem;
            background: ${type === 'success' ? '#10B981' : '#EF4444'};
            color: white;
            text-align: center;
        `;

        form.appendChild(messageEl);

        // Remove after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
}

// ============================================
// Lazy Loading Images
// ============================================

class LazyLoadImages {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        if (this.images.length > 0) {
            this.init();
        }
    }

    init() {
        const observerOptions = {
            rootMargin: '50px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        }, observerOptions);

        this.images.forEach(img => observer.observe(img));
    }
}

// ============================================
// Initialize Everything
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    new Navigation();
    new ScrollAnimations();
    new BackToTop();

    // Enhanced effects
    new ParallaxEffect();
    new StatsCounter();
    new FormHandler();
    new LazyLoadImages();

    // Optional premium cursor (can be disabled)
    // new CursorEffect();

    console.log('✨ StarWell website loaded successfully');
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Window resized');
    }, 250);
});
