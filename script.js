// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
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

// form 

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset(); // Clear the form
                successMessage.style.display = 'block'; // Show success message
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form.");
        }
    });
});



// footer 
const year = document.getElementById("#year");
console.log(year);
// const d = new Date();
// d.getFullYear()

