let allPlaces = [];
let activeFilter = "All";

fetch("assets/data/destinations.json")
    .then(res => res.json())
    .then(data => {
        allPlaces = data;
        renderPlaces(allPlaces);
    });

const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let debounceTimer;

searchInput.addEventListener("input", () => {

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        applyFilters();
    }, 200);

});

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        activeFilter = btn.dataset.filter;
        applyFilters();
    });
});

function applyFilters() {

    let filtered = allPlaces;

    const searchValue = searchInput.value.toLowerCase();

    if (searchValue) {
    filtered = filtered.filter(place =>
        place.name.toLowerCase().includes(searchValue) ||
        place.region.toLowerCase().includes(searchValue) ||
        place.themes.join(" ").toLowerCase().includes(searchValue)
    );
  }

    if (activeFilter !== "All") {
        filtered = filtered.filter(place =>
            place.themes.includes(activeFilter)
        );
    }

    renderPlaces(filtered);
}

function renderPlaces(places) {

    const grid = document.getElementById("placesGrid");
    grid.innerHTML = "";

    if (places.length === 0) {
      grid.innerHTML = "<p>No destinations found.</p>";
      return;
    }

    places.forEach(place => {

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.backgroundImage = `url('${place.image}')`;

        card.innerHTML = `
            <div class="overlay">
                <h3>${place.name}</h3>
            </div>
        `;

        card.addEventListener("click", () => {
            window.location.href = 
            `place.html?destination=${place.name}`;
        });

        grid.appendChild(card);
    });
}
// Typing effect for search placeholder

document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("searchInput");
    const text = "Search destinations...";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {

        if (!isDeleting) {
            // Typing forward
            input.setAttribute("placeholder", text.substring(0, index + 1));
            index++;

            if (index === text.length) {
                setTimeout(() => isDeleting = true, 3000); // stay 3 sec
            }

        } else {
            // Deleting backward
            input.setAttribute("placeholder", text.substring(0, index - 1));
            index--;

            if (index === 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeEffect, isDeleting ? 50 : 80);
    }

    typeEffect();
});