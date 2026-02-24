// Reveal animation

const reveals = document.querySelectorAll("section");

function revealOnScroll() {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
            section.classList.add("reveal");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

let locked = false;

window.addEventListener("scroll", () => {

    if (locked) return;

    const scrollPosition = window.scrollY;
    const pageHeight = document.body.scrollHeight - window.innerHeight;

    const scrollPercent = (scrollPosition / pageHeight) * 100;

    if (scrollPercent > 65) {   // after deep scroll
        locked = true;

        document.body.style.overflow = "hidden";

        const overlay = document.getElementById("signupOverlay");
        overlay.classList.add("active");
    }

});

const viewBtn = document.getElementById("viewAllBtn");
const allPlaces = document.getElementById("allPlaces");

if (viewBtn) {
    viewBtn.addEventListener("click", () => {
        allPlaces.classList.remove("hidden");
        allPlaces.scrollIntoView({ behavior: "smooth" });
    });
}

function revealStagger(elements) {
    const trigger = window.innerHeight * 0.85;

    elements.forEach((el, index) => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger && !el.classList.contains("active")) {
            setTimeout(() => {
                el.classList.add("active");
            }, index * 200); // 200ms delay between each
        }
    });
}

window.addEventListener("scroll", () => {
    revealStagger(document.querySelectorAll(".why-card"));
    revealStagger(document.querySelectorAll(".step"));
});
