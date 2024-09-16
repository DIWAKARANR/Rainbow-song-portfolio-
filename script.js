// Rainbow background animation
const rainbowBackground = document.querySelector('.rainbow-background');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    rainbowBackground.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

// Large rainbow falling stars
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 30 + 10; // 10-40px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = '-50px';
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.querySelector('.stars-container').appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);
}

setInterval(createStar, 300);

// Background music
const backgroundMusic = document.getElementById('backgroundMusic');

document.addEventListener('click', () => {
    backgroundMusic.play().catch(error => {
        console.log("Autoplay prevented. Please interact with the page to start the music.");
    });
});

// Adjust music volume
backgroundMusic.volume = 0.3;

// Add dancing effect to rainbow cards
const rainbowCards = document.querySelectorAll('.rainbow-card');
rainbowCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.backgroundPosition = `${x}px ${y}px`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.backgroundPosition = 'center';
    });
});

// Animate content on scroll
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateOnScroll() {
    rainbowCards.forEach(card => {
        if (isInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotate(0deg)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check
