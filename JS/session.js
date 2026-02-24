// Protect dashboard page

const user = localStorage.getItem("travelUser");

if (!user) {
    window.location.href = "auth.html";
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("travelUser");
        window.location.href = "auth.html";
    });
}