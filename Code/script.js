document.addEventListener('DOMContentLoaded', function() {

    // --- Continuous Typing Effect ---
    const typingElement = document.getElementById('typing-effect');
    const textToType = "Hi, I'm Satya Dev";
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    function type() {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < textToType.length) {
                typingElement.innerHTML += textToType.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
                setTimeout(erase, pauseDuration);
            }
        }, typingSpeed);
    }

    function erase() {
        let i = textToType.length;
        const erasingInterval = setInterval(() => {
            if (i > 0) {
                typingElement.innerHTML = textToType.substring(0, i - 1);
                i--;
            } else {
                clearInterval(erasingInterval);
                setTimeout(type, 500); 
            }
        }, deletingSpeed);
    }
    setTimeout(type, 500);


    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
});


// --- NEW SLIDER FUNCTIONALITY ---
let slideIndex = 1;

// Initialize Slider
showSlides(slideIndex);

// Next/Prev Controls
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Dot Controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0) return; // Guard clause if slider doesn't exist

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = slides[i].className.replace(" active", "");
    }

    // Remove active from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show current slide and active dot
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " active";
    dots[slideIndex - 1].className += " active";
}

// Optional: Auto-play slider every 5 seconds
setInterval(function() {
    moveSlide(1);
}, 5000);