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


// Testimonials Slider
const slides = document.querySelectorAll('.testimonial-slide');
let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'; // Show current slide, hide others
    });
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide if at the end
    showSlide(currentIndex);
}

// Start the slider
showSlide(currentIndex);
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Contact Form Submission
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

