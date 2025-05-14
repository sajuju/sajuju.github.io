document.addEventListener('DOMContentLoaded', () => {
    const adminLoginForm = document.getElementById('adminLoginForm');
    
    // Check if the current URL is /admin-login
    if (window.location.pathname === '/admin-login') {
        if (adminLoginForm) {
            adminLoginForm.classList.remove('hidden');
            console.log('Formulir login admin ditampilkan karena URL /admin-login'); // Debugging
        } else {
            console.error('Elemen adminLoginForm tidak ditemukan!'); // Debugging
        }
    }

    // Fungsi untuk menyembunyikan formulir saat tombol "Tutup" diklik
    const closeLoginForm = document.getElementById('closeLoginForm');
    if (closeLoginForm) {
        closeLoginForm.addEventListener('click', () => {
            if (adminLoginForm) {
                adminLoginForm.classList.add('hidden');
                console.log('Formulir ditutup'); // Debugging
            }
        });
    }

    // Fungsi untuk menangani pengiriman formulir login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Validasi login admin sementara
            if (username === 'admin' && password === 'rahasia') {
                alert('Login admin berhasil!');
                if (adminLoginForm) {
                    adminLoginForm.classList.add('hidden');
                }
            } else {
                alert('Nama pengguna atau kata sandi salah.');
            }
        });
    }

    // Menyembunyikan formulir saat mengklik di luar modal
    document.addEventListener('click', (event) => {
        const loginForm = document.getElementById('loginForm');
        if (adminLoginForm && loginForm && !loginForm.contains(event.target)) {
            adminLoginForm.classList.add('hidden');
        }
    });
// Navbar Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

let currentSlide = 0;
let isPlaying = true;
let startTime = Date.now();
let remainingTime = 5000;
const totalSlides = document.querySelectorAll('.slide').length;
const slides = document.querySelector('.slides');
const slideCount = document.getElementById('slideCount');
const timeBar = document.getElementById('timeBar');
const pauseBtn = document.getElementById('pauseBtn');
const slideDuration = 10000;

function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    slideCount.textContent = `${currentSlide + 1}/${totalSlides}`;
    resetTimeBar();
}

function resetTimeBar() {
    timeBar.style.transition = 'none';
    timeBar.style.width = '0%';
    remainingTime = slideDuration;
    startTime = Date.now();
    if (isPlaying) {
        setTimeout(() => {
            timeBar.style.transition = `width ${remainingTime}ms linear`;
            timeBar.style.width = '100%';
        }, 10);
    }
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
    if (isPlaying) {
        clearInterval(slideInterval);
        startAutoSlide();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
    if (isPlaying) {
        clearInterval(slideInterval);
        startAutoSlide();
    }
});

pauseBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    const icon = pauseBtn.querySelector('i');

    if (isPlaying) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');

        const elapsed = Date.now() - startTime;
        remainingTime = Math.max(0, slideDuration - elapsed);
        timeBar.style.transition = `width ${remainingTime}ms linear`;
        timeBar.style.width = '100%';
        startAutoSlide();
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');

        clearInterval(slideInterval);
        const elapsed = Date.now() - startTime;
        const progress = (elapsed / slideDuration) * 100;
        timeBar.style.transition = 'none';
        timeBar.style.width = `${progress}%`;
    }
});


let slideInterval;
function startAutoSlide() {
    slideInterval = setInterval(() => {
        if (isPlaying) {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }
    }, remainingTime);
}

updateSlider();
if (isPlaying) {
    startAutoSlide();
}