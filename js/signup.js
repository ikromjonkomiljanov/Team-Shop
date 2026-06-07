// Elementlarni tanlash
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const togglePassword = document.getElementById('togglePassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const signupForm = document.getElementById('signupForm');

// Asosiy parolni ko'rsatish/yashirish
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Parol tasdig'ini ko'rsatish/yashirish
toggleConfirmPassword.addEventListener('click', function () {
    const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Formani tekshirish
signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    // Parollar mosligini tekshirish
    if (password !== confirmPassword) {
        alert("Xatolik: Parollar bir-biriga mos kelmadi!");
        return;
    }
    
    console.log("Ro'yxatdan o'tish:", { name, email, password });
    alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
});