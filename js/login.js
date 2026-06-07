// Elementlarni tanlab olamiz
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginForm = document.getElementById("loginForm");

// Ko'zcha bosilganda parolni ko'rsatish/yashirish funksiyasi
togglePassword.addEventListener("click", function () {
  // Input turini tekshiramiz (password yoki text)
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Ikonkani o'zgartiramiz (ochiq ko'z / yopiq ko'z)
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});

// Form yuborilganda ishlaydigan oddiy tekshirish (ixtiyoriy)
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = passwordInput.value;

  console.log("Email:", email);
  console.log("Parol:", password);
  alert("Tizimga kirish so'rovi yuborildi!");
});
