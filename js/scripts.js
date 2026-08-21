const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
});

(function animateRing() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, button, .project-card, .hcard, .stat-v-cell, .tech-pill, .tag').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});

window.addEventListener('scroll', () => {
    const p = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    document.getElementById('scroll-bar').style.width = p + '%';
});

// Ticker: clone items into the same container so HTML stays clean
const ticker = document.querySelector('.ticker');
if (ticker) {
    Array.from(ticker.children).forEach(item =>
        ticker.appendChild(item.cloneNode(true))
    );
}