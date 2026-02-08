// Mengambil elemen HTML
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Menambahkan event listener saat diklik
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menutup menu jika salah satu link diklik (untuk UX yang lebih baik)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
