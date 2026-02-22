// Reveal elements on scroll
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
            el.classList.add('active');
        }
    });
});

// Rotating Quotes
const quotes = [
    "\"Family is the heart of a home.\"",
    "\"Rooted in love, growing in grace.\"",
    "\"Together is our favorite place to be.\""
];
let i = 0;
setInterval(() => {
    const q = document.getElementById('rotating-quote');
    if(q) {
        q.style.opacity = 0;
        setTimeout(() => {
            i = (i + 1) % quotes.length;
            q.textContent = quotes[i];
            q.style.opacity = 1;
        }, 500);
    }
}, 4000);

function toggleMusic() {
    alert("Music feature clicked! Place an audio file in your repo to activate.");
}