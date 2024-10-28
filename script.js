// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Select necessary elements
const slider = document.querySelector('.slider');
const skillCards = document.querySelectorAll('.skill-card');
const cloneSlider = () => {
    const sliderWidth = slider.scrollWidth;
    const viewportWidth = slider.parentElement.offsetWidth;
    
    if (sliderWidth < viewportWidth * 2) { // Clone cards if slider width is less than twice the viewport width
        const clone = slider.innerHTML;
        slider.innerHTML += clone; // Duplicate the content
    }
};
cloneSlider();


// Testimonials Slider
const slides = document.querySelectorAll('.testimonial-slide');
let currentI


// footer 
const year = document.getElementById("#year");
console.log(year);
// const d = new Date();
// d.getFullYear()

