// Inisialisasi untuk pemicu klik logo
let clickCount = 0;
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', () => {
        clickCount++;
        console.log('Logo diklik, jumlah klik:', clickCount); // Debugging
        if (clickCount === 3) {
            const adminLoginForm = document.getElementById('adminLoginForm');
            if (adminLoginForm) {
                adminLoginForm.classList.remove('hidden');
                console.log('Formulir login admin ditampilkan'); // Debugging
            } else {
                console.error('Elemen adminLoginForm tidak ditemukan!'); // Debugging
            }
            clickCount = 0; // Reset jumlah klik
        }
    });
}

// Fungsi untuk menyembunyikan formulir saat tombol "Tutup" diklik
const closeLoginForm = document.getElementById('closeLoginForm');
if (closeLoginForm) {
    closeLoginForm.addEventListener('click', () => {
        const adminLoginForm = document.getElementById('adminLoginForm');
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
            const adminLoginForm = document.getElementById('adminLoginForm');
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
    const adminLoginForm = document.getElementById('adminLoginForm');
    const loginForm = document.getElementById('loginForm');
    if (adminLoginForm && loginForm && !loginForm.contains(event.target) && !logo.contains(event.target)) {
        adminLoginForm.classList.add('hidden');
    }
});

// Hamburger menu untuk navigasi di HP
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}