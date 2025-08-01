document.addEventListener('DOMContentLoaded', function() {

    // --- Continuous Typing Effect ---
    const typingElement = document.getElementById('typing-effect');
    const textToType = "Hi, I'm Satya Dev";
    const typingSpeed = 100;    // Speed of typing in milliseconds
    const deletingSpeed = 50;     // Speed of deleting
    const pauseDuration = 2000;   // Pause duration after typing is complete

    function type() {
        let i = 0;
        // Use setInterval to type each character
        const typingInterval = setInterval(() => {
            if (i < textToType.length) {
                typingElement.innerHTML += textToType.charAt(i);
                i++;
            } else {
                // Once done typing, clear the interval and start erasing after a pause
                clearInterval(typingInterval);
                setTimeout(erase, pauseDuration);
            }
        }, typingSpeed);
    }

    function erase() {
        let i = textToType.length;
        // Use setInterval to delete each character
        const erasingInterval = setInterval(() => {
            if (i > 0) {
                typingElement.innerHTML = textToType.substring(0, i - 1);
                i--;
            } else {
                // Once done erasing, clear the interval and start typing again after a short pause
                clearInterval(erasingInterval);
                setTimeout(type, 500); 
            }
        }, deletingSpeed);
    }

    // Start the initial typing effect after a short delay
    setTimeout(type, 500);


    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Scroll-triggered Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});
