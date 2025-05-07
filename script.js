// Inisialisasi buffer untuk menampung penekanan tombol
let keyBuffer = '';

// Debugging: Log setiap penekanan tombol
document.addEventListener('keydown', (event) => {
    console.log('Tombol ditekan:', event.key); // Debugging
    keyBuffer += event.key.toLowerCase();
    console.log('Buffer saat ini:', keyBuffer); // Debugging
    if (keyBuffer.includes('adminlogin')) {
        console.log('Admin login terdeteksi!'); // Debugging
        const adminLoginForm = document.getElementById('adminLoginForm');
        if (adminLoginForm) {
            adminLoginForm.classList.remove('hidden');
            console.log('Formulir ditampilkan'); // Debugging
        } else {
            console.error('Elemen adminLoginForm tidak ditemukan!'); // Debugging
        }
        keyBuffer = ''; // Reset buffer
    }
});

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

// Menyembunyikan formulir saat mengklik di luar
document.addEventListener('click', (event) => {
    const adminLoginForm = document.getElementById('adminLoginForm');
    const loginForm = document.getElementById('loginForm');
    if (adminLoginForm && loginForm && !adminLoginForm.contains(event.target) && !loginForm.contains(event.target)) {
        adminLoginForm.classList.add('hidden');
    }
});

// Reset buffer jika terlalu panjang
setInterval(() => {
    if (keyBuffer.length > 100) {
        keyBuffer = keyBuffer.slice(-50);
    }
}, 10000);