document.addEventListener("DOMContentLoaded", function() {
  const user = JSON.parse(localStorage.getItem("comforty_current_user"));
  if (!user) {
    window.location.href = "../pages/login.html";
    return;
  }
  
  // show user info
  document.getElementById("userName").textContent = user.name;
  document.getElementById("userEmail").textContent = user.email;
  
  const userInitial = document.getElementById("userInitial");
  if (userInitial && user.name) {
    userInitial.textContent = user.name.charAt(0).toUpperCase();
  }

  document.getElementById("logoutBtn").addEventListener("click", function() {
    localStorage.removeItem("comforty_current_user");
    window.location.href = "../pages/login.html";
  });
});
