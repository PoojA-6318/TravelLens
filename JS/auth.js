// ===== FORM SWITCHING =====
const formSlider = document.querySelector(".form-slider");
const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");

goSignup.addEventListener("click", function () {
    formSlider.style.transform = "translateX(-50%)";
});

goLogin.addEventListener("click", function () {
    formSlider.style.transform = "translateX(0%)";
});

// ===== SELECT ELEMENTS =====
const signupForm = document.querySelector(".signup-box form");
const loginForm = document.querySelector(".login-box form");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const loginError = document.getElementById("loginError");
const rememberMe = document.getElementById("rememberMe");

// ===== PASSWORD STRENGTH CHECK =====
signupForm.querySelector("input[type='password']").addEventListener("input", function() {

    const password = this.value;
    let strength = 0;

    if(password.length > 6) strength++;
    if(/[A-Z]/.test(password)) strength++;
    if(/[0-9]/.test(password)) strength++;
    if(/[^A-Za-z0-9]/.test(password)) strength++;

    const strengthText = document.getElementById("strengthText");

    if(strength <= 1){
        strengthText.textContent = "Weak";
        strengthText.style.color = "#ff4d4d";
    }
    else if(strength === 2){
        strengthText.textContent = "Good";
        strengthText.style.color = "#ffcc00";
    }
    else{
        strengthText.textContent = "Strong";
        strengthText.style.color = "#00ff88";
    }
});

// ===== SIGN UP =====
const loginSlider = document.querySelector(".form-slider");
const successPopup = document.getElementById("successPopup");

signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Show popup
    successPopup.classList.add("active");

    // Trigger confetti
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });

    // After 3 seconds → hide popup + go to login
    setTimeout(() => {
        successPopup.classList.remove("active");

        // Slide back to login
        loginSlider.style.transform = "translateX(0%)";

    }, 3000);
});

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Fake validation (you can improve later)
    const email = loginForm.querySelector("input[type='email']").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {
        // Redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginError").innerText = "Invalid credentials";
    }
});

// ===== LOGIN =====
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = loginForm.querySelector("input[type='email']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if(email === storedEmail && password === storedPassword) {

        if(rememberMe.checked){
            localStorage.setItem("isLoggedIn", "true");
        } else {
            sessionStorage.setItem("isLoggedIn", "true");
        }

        window.location.href = "dashboard.html";

    } else {
        loginError.textContent = "Invalid email or password.";
    }
});

// ===== PASSWORD TOGGLE =====
const toggles = document.querySelectorAll(".toggle-eye");

toggles.forEach(toggle => {
    toggle.addEventListener("click", function() {

        const targetId = this.getAttribute("data-target");
        const input = document.getElementById(targetId);
        const icon = this.querySelector("i");

        if (input.type === "password") {
            input.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    });
});