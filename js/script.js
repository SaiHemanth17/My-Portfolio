// Helper function to select elements
const select = (el, all = false) => {
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
};

// Mobile nav toggle
const toggleMobileNav = () => {
    const toggle = select('.menu-toggle');
    const navLinks = select('.nav-links');
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggle.querySelector('i').classList.toggle('fa-bars');
            toggle.querySelector('i').classList.toggle('fa-times');
        });
    }
};

// Header scroll effect
const headerScroll = () => {
    const header = select('header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
};

// Smooth scrolling for navigation links
const smoothScroll = () => {
    select('.nav-links a', true).forEach(link => {
        link.addEventListener('click', (e) => {
            const navLinks = select('.nav-links');
            
            // If mobile nav is active, close it
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                select('.menu-toggle i').classList.replace('fa-times', 'fa-bars');
            }
        });
    });
};

// Contact form handling
const contactForm = () => {
    const form = select('#contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const name = select('#name').value;
            const email = select('#email').value;
            const subject = select('#subject').value;
            const message = select('#message').value;
            
            // Here you would typically send the data to a server
            // For demo purposes, we'll just show an alert
            alert(`Thank you for your message, ${name}! I will get back to you soon.`);
            
            // Reset form
            form.reset();
        });
    }
};

// Initialize all functions
window.addEventListener('DOMContentLoaded', () => {
    toggleMobileNav();
    headerScroll();
    smoothScroll();
    contactForm();
});