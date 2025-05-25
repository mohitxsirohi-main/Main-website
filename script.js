document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    function revealTimelineItems() {
        const windowHeight = window.innerHeight;

        timelineItems.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            const itemVisible = (itemRect.top >= 0 && itemRect.bottom <= windowHeight);

            if (itemVisible) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', revealTimelineItems);
    revealTimelineItems(); // Also call on initial load to ensure visible items are activated.
});

// Education
let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += step;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Blog Modal
function openModal(id) {
    const modal = document.getElementById(`modal${id}`);
    modal.style.display = 'flex';  // Show the modal
    document.body.classList.add('modal-open');  // Disable background scrolling
}

function closeModal(id) {
    const modal = document.getElementById(`modal${id}`);
    modal.style.display = 'none';  // Hide the modal
    document.body.classList.remove('modal-open');  // Re-enable background scrolling
}

// Close the modal when clicking outside the content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.classList.remove('modal-open');  // Re-enable scrolling when modal is closed
    }
};

// Navbar Transparency on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust the scroll distance to your preference
        header.classList.add('scrolled');
        header.classList.remove('transparent');
    } else {
        header.classList.remove('scrolled');
        header.classList.add('transparent');
    }
});

// Set the navbar to be transparent on initial load
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.classList.add('transparent');
});

// Dynamic Text Switcher (new code)
document.addEventListener('DOMContentLoaded', function() {
    const words = [
        "Lecturer",
        "Startup Guy",
        "Storyteller",
        "Educator"
    ];

    let i = 0;
    const transitioningText = document.querySelector(".transitioning-text");

    function updateWord() {
        transitioningText.style.opacity = '0'; // Fade out current word
        setTimeout(() => {
            transitioningText.textContent = words[i]; // Change the word
            transitioningText.style.opacity = '1'; // Fade in new word
            i = (i + 1) % words.length; // Loop through words
        }, 300); // Small delay for smoother transition
    }

    setInterval(updateWord, 3000); // Change word every 3 seconds
    updateWord(); // Start immediately
});

















