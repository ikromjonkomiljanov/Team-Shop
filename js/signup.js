// Elementlarni tanlash
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const togglePassword = document.getElementById('togglePassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const signupForm = document.getElementById('signupForm');

// Error elementlari
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const formError = document.getElementById('formError');
const formSuccess = document.getElementById('formSuccess');

// Xatoliklarni tozalash funksiyasi
function clearErrors() {
    nameError.textContent = '';
    nameError.classList.add('hidden');
    emailError.textContent = '';
    emailError.classList.add('hidden');
    passwordError.textContent = '';
    passwordError.classList.add('hidden');
    confirmPasswordError.textContent = '';
    confirmPasswordError.classList.add('hidden');
    formError.textContent = '';
    formError.classList.add('hidden');
    formSuccess.textContent = '';
    formSuccess.classList.add('hidden');
}

// Xatolikni ko'rsatish funksiyasi
function showError(element, message) {
    element.textContent = message;
    element.classList.remove('hidden');
}

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

// Email formatini tekshirish
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Formani tekshirish va localStorage
signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
    
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const terms = document.getElementById('terms').checked;
    
    // Validatsiya
    if (!name) {
        showError(nameError, 'Please enter your full name.');
        return;
    }
    if (!email) {
        showError(emailError, 'Please enter your email.');
        return;
    }
    if (!isValidEmail(email)) {
        showError(emailError, 'Please enter a valid email address.');
        return;
    }
    if (!password) {
        showError(passwordError, 'Please enter your password.');
        return;
    }
    if (password.length < 6) {
        showError(passwordError, 'Password must be at least 6 characters.');
        return;
    }
    if (!confirmPassword) {
        showError(confirmPasswordError, 'Please confirm your password.');
        return;
    }
    if (password !== confirmPassword) {
        showError(confirmPasswordError, 'Passwords do not match.');
        return;
    }
    if (!terms) {
        showError(formError, 'Please agree to the Terms & Conditions.');
        return;
    }
    
    // localStorage'dan mavjud foydalanuvchilarni olish
    const users = JSON.parse(localStorage.getItem("comforty_users")) || [];
    
    // Email allaqachon ro'yxatdan o'tganmi tekshirish
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        showError(formError, 'This email is already registered. Please login.');
        return;
    }
    
    // Yangi foydalanuvchini qo'shish
    const newUser = {
        name: name,
        email: email,
        password: password
    };
    
    users.push(newUser);
    localStorage.setItem("comforty_users", JSON.stringify(users));
    
    formSuccess.textContent = 'Registration successful! Redirecting to login...';
    formSuccess.classList.remove('hidden');
    
    setTimeout(() => {
        window.location.href = "../pages/login.html";
    }, 1500);
});