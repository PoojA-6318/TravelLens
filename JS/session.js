// ===== SESSION CHECK =====
const isLoggedIn =
    localStorage.getItem("isLoggedIn") ||
    sessionStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
    window.location.href = "auth.html";
}

// ===== SHOW USER NAME =====
const userName = localStorage.getItem("userName");
const title = document.getElementById("dashboardTitle");

if (userName && title) {
    title.textContent = "Welcome Back, " + userName;
}

// ===== LOGOUT =====
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "index.html";
    });
}