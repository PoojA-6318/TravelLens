let selectedMood = null;
let allDestinations = [];

// Wait until page fully loads
document.addEventListener("DOMContentLoaded", () => {

    // Mood Selection
    const moodButtons = document.querySelectorAll(".mood-btn");

    moodButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedMood = btn.textContent;

            moodButtons.forEach(b => {
                b.style.background = "white";
                b.style.color = "black";
            });

            btn.style.background = "#60A5FA";
            btn.style.color = "white";
        });
    });

    // Analyze Button
    const analyzeBtn = document.querySelector(".input-section button");

    analyzeBtn.addEventListener("click", async () => {

        console.log("Analyze button clicked");
        const budget = document.querySelector('input[type="number"]').value;

        if (!selectedMood) {
            alert("Please select a mood");
            return;
        }

        try {
            const response = await fetch("assets/data/destinations.json");
            allDestinations = await response.json();  // here
            console.log("Loaded destinations:", allDestinations);

            const engine = new TravelEngine(allDestinations);
            const ranked = engine.rankDestinations(selectedMood, budget);
            
            if (ranked.length > 0) {
                // 
                const topScore = ranked[0].score;
        
                // 
                const infoCards = document.querySelectorAll(".info-card p");
                if (infoCards.length > 1) {
                    infoCards[1].innerText = topScore + " / 10";
                    infoCards[1].style.color = "#60A5FA";
                    infoCards[1].style.fontWeight = "bold";
                }
            }

            displayResults(ranked);

        } catch (error) {
            console.error("Error loading JSON:", error);
        }
    });

    const tempEngine = new TravelEngine([]); 
    const topCategory = tempEngine.getRecommendedCategory();

    if (topCategory && topCategory !== 'Relaxed') { // Only show if they've used the app
        const title = document.getElementById("dashboardTitle");
        const badge = document.createElement("span");
        badge.innerText = `Focus: ${topCategory}`;
        badge.style.cssText = "font-size: 14px; background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; margin-left: 15px; vertical-align: middle;";
        title.appendChild(badge);
    }

});


// Display Cards
function displayResults(results) {

    console.log("Engine results:", results);
    const container = document.querySelector(".recommendations .card-grid");
    container.innerHTML = "";

    results.forEach(item => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.image}" class="card-img" alt="${item.name}">
            <div class="overlay">
                <h3>${item.name}</h3>
                <p>Score: ${item.score}</p>
            </div>
        `;

        card.onclick = () => openDistrictDetails(item.id);

        container.appendChild(card);
    });
}


// Open Modal
function openDistrictDetails(districtId) {
    console.log("Opening modal for:", districtId);

    // 1. Find the district first
    const district = allDestinations.find(d => d.id.toString() === districtId.toString());

    if (!district) {
        console.error("District not found in JSON:", districtId);
        return;
    }

    // 2. NOW you can access 'district' for Collective Intelligence
    let interests = JSON.parse(localStorage.getItem('userInterests')) || {};
    interests[district.category] = (interests[district.category] || 0) + 1;
    localStorage.setItem('userInterests', JSON.stringify(interests));

    // 3. Populate Modal UI
    document.getElementById("modalTitle").innerText = district.name;
    document.getElementById("modalBestMonth").innerText = district.best_month;
    document.getElementById("modalEvent").innerText = district.event;

    // Famous Spots
    const spotsList = document.getElementById("modalSpots");
    spotsList.innerHTML = district.famous_spots.map(spot => `<li>${spot}</li>`).join('');

    // Food
    const foodList = document.getElementById("modalFood");
    foodList.innerHTML = district.specialties.food.map(f => `<li>${f}</li>`).join('');

    // Other Specialties
    const otherList = document.getElementById("modalOther");
    otherList.innerHTML = district.specialties.other.map(o => `<li>${o}</li>`).join('');

    // Show Modal (Using flex for the centering CSS we added earlier)
    const modal = document.getElementById("districtModal");
    modal.style.display = "flex"; 
}


// Close Modal
function closeDistrictDetails() {
    document.getElementById("districtModal").style.display = "none";
}


// Close when clicking outside
window.addEventListener("click", function(event) {
    const modal = document.getElementById("districtModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function getTravelTime(destCoords) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Using Google Maps Directions Link (Easiest Pure JS way without a backend)
            const mapUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destCoords.lat},${destCoords.lng}&travelmode=driving`;
            
            // Or you can fetch from Distance Matrix API if you have an API Key:
            alert(`Opening Google Maps to calculate time from your current location to ${destCoords.lat}, ${destCoords.lng}`);
            window.open(mapUrl, '_blank');
        }, () => {
            alert("Please enable location services to use this feature.");
        });
    }
}