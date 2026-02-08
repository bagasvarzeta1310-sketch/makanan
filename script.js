const wrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let counter = 0;

function updateSlider() {
    // Geser wrapper sesuai index counter
    wrapper.style.transform = `translateX(${-counter * 100}%)`;
    
    // Update status titik (dots)
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= slides.length) counter = 0; // Balik ke awal
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) counter = slides.length - 1; // Ke slide terakhir
    updateSlider();
});

// Fitur klik pada titik indikator
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        counter = index;
        updateSlider();
    });
});

// Otomatis geser setiap 5 detik
setInterval(() => {
    nextBtn.click();
}, 5000);
