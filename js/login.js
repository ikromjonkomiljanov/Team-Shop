// Elementlarni tanlab olamiz
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginForm = document.getElementById("loginForm");

// Error elementlari
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formError = document.getElementById("formError");

// Xatoliklarni tozalash funksiyasi
function clearErrors() {
    emailError.textContent = '';
    emailError.classList.add('hidden');
    passwordError.textContent = '';
    passwordError.classList.add('hidden');
    formError.textContent = '';
    formError.classList.add('hidden');
}

// Xatolikni ko'rsatish funksiyasi
function showError(element, message) {
    element.textContent = message;
    element.classList.remove('hidden');
}

// Ko'zcha bosilganda parolni ko'rsatish/yashirish funksiyasi
togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});

// Email formatini tekshirish
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Form yuborilganda ishlaydigan tekshirish va localStorage
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();
  
  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value.trim();
  const remember = document.getElementById("remember").checked;

  // Validatsiya
  if (!email) {
    showError(emailError, "Please enter your email.");
    return;
  }
  if (!isValidEmail(email)) {
    showError(emailError, "Please enter a valid email address.");
    return;
  }
  if (!password) {
    showError(passwordError, "Please enter your password.");
    return;
  }
  if (password.length < 6) {
    showError(passwordError, "Password must be at least 6 characters.");
    return;
  }

  // localStorage'dan foydalanuvchilarni olish
  const users = JSON.parse(localStorage.getItem("comforty_users")) || [];
  
  // Foydalanuvchini topish
  const foundUser = users.find(u => u.email === email && u.password === password);
  
  if (foundUser) {
    localStorage.setItem("comforty_current_user", JSON.stringify(foundUser));
    window.location.href = "../index.html";
  } else {
    showError(formError, "Invalid email or password.");
  }
});
