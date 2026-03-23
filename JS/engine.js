const weatherCityMap = {
    Kodaikanal: "Kodaikanal",
    Ooty: "Udhagamandalam",
    Yercaud: "Yercaud",
    Madurai: "Madurai",
    Kanchipuram: "Kanchipuram",
    Tharangambadi: "Tharangambadi",
    Kanyakumari: "Kanyakumari",
    Karaikudi: "Karaikudi",
    Mahabalipuram: "Mahabalipuram",
    Nagapattinam: "Nagapattinam",
    Pondicherry: "Puducherry",
    Chidambaram: "Chidambaram",
    Rameswaram: "Rameswaram",
    Yelagiri: "Yelagiri",
    Trichy: "Tiruchirappalli",
    Thoothukudi: "Tuticorin",
    Tirunelveli: "Tirunelveli",
    Thanjavur: "Thanjavur",
    Srivilliputhur: "Srivilliputhur",
    Valparai: "Valparai"
};
class TravelEngine {
    constructor(destinations) {
        this.destinations = destinations;
    }

    rankDestinations(selectedMood, userBudget) {

        userBudget = Number(userBudget);

        return this.destinations.map(place => {

            let score = 0;
            // 1️⃣ Theme Match (reduce)
            if (place.themes.includes(selectedMood)) {
                score += 25;   // was 40 ❌
            }

            // 2️⃣ Budget Fit (FIXED)
            const avgMidBudget = place.budget?.mid || place.budget?.low || 0;
            const budgetDifference = Math.abs(avgMidBudget - userBudget);
            const budgetScore = Math.max(0, 25 - (budgetDifference / 300));
            score += budgetScore;

            // 3️⃣ Popularity (reduce heavily)
            score += (place.popularity / 10) * 8;   // was 15 ❌

            // 4️⃣ Crowd (keep)
            score += ((10 - place.crowdLevel) / 10) * 10;

            // 5️⃣ Mood-Specific Bonus (10%)
            if (selectedMood === "Adventure") {
                score += (place.adventureLevel / 10) * 10;
            }
            if (selectedMood === "Spiritual") {
                score += (place.spiritualLevel / 10) * 10;
            }
            if (selectedMood === "Party") {
                score += (place.partyLevel / 10) * 10;
            }

            // 🎲 Random variation (VERY IMPORTANT)
            score += Math.random() * 10;

            return {
                ...place,
                score: Number(score.toFixed(1))
            };

        }).sort((a, b) => b.score - a.score);
    }
}
async function fetchWeather(city) {

    const apiKey = "496e4bd2463640b3fb6da50ec726344f";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

    try {

        const res = await fetch(url);
        const data = await res.json();

        if (!data.main) {
            console.error("Weather API failed:", data);
            return;
        }
        const temp = data.main.temp;
        const condition = data.weather[0].main;
        const body = document.querySelector(".dashboard-body");

        if(condition.includes("Rain"))
            body.style.backgroundImage = "url('assets/images/weather/rain.jpg')";

        else if(condition.includes("Cloud"))
            body.style.backgroundImage = "url('assets/images/weather/cloud.jpg')";

        else if(condition.includes("Clear"))
            body.style.backgroundImage = "url('assets/images/weather/sunny.jpg')";

        else
            body.style.backgroundImage = "url('assets/images/weather/dashboard.jpg')";

        let icon = "☀️";

        if (condition.includes("Cloud")) icon = "☁️";
        else if (condition.includes("Rain")) icon = "🌧️";
        else if (condition.includes("Mist") || condition.includes("Fog")) icon = "🌫️";
        else if (condition.includes("Clear")) icon = "☀️";

        const weatherBox = document.querySelector(".info-card:first-child p");

        weatherBox.innerHTML = `${icon} ${temp}°C • ${condition}`;

    } catch (err) {
        console.log(err);
    }

}
function getBestSeason(place){

    const hillStations = [
        "Ooty","Kodaikanal","Yercaud","Valparai","Yelagiri"
    ];

    const coastal = [
        "Pondicherry","Nagapattinam","Thoothukudi",
        "Kanyakumari","Mahabalipuram","Tharangambadi"
    ];

    const templeCities = [
        "Madurai","Rameswaram","Chidambaram",
        "Kanchipuram","Thanjavur","Trichy",
        "Srivilliputhur"
    ];

    const natureMixed = [
        "Tirunelveli","Karaikudi"
    ];

    if(hillStations.includes(place))
        return "Best time: October – June";

    if(coastal.includes(place))
        return "Best time: November – February";

    if(templeCities.includes(place))
        return "Best time: November – March";

    if(natureMixed.includes(place))
        return "Best time: October – February";

    return "Best time: October – March";
}

document.addEventListener("DOMContentLoaded", function () {

    let selectedMood = null;

    const moodButtons = document.querySelectorAll(".mood-btn");
    const analyzeBtn = document.getElementById("analyzeBtn");
    const budgetInput = document.getElementById("budgetInput");

    // 🔥 Mood Selection
    moodButtons.forEach(btn => {
        btn.addEventListener("click", function () {

            // Remove active from all
            moodButtons.forEach(b => b.classList.remove("active"));

            // Add active to clicked
            this.classList.add("active");

            // Store mood
            selectedMood = this.textContent.trim();

            console.log("Selected Mood:", selectedMood);
        });
    });
     // 🔥 Analyze Button
    analyzeBtn.addEventListener("click", async function () {

    const loader = document.getElementById("loadingSpinner");
    loader.classList.remove("hidden");

    try {
            if (!selectedMood) {
                alert("Please select a mood.");
                return;
            }

            const budget = budgetInput.value;

            if (!budget || budget <= 0) {
                alert("Please enter a valid budget.");
                return;
            }

            const response = await fetch("assets/data/destinations.json");
            const data = await response.json();

            const engine = new TravelEngine(data);
            const ranked = engine.rankDestinations(selectedMood, budget);

            displayResults(ranked);

            const apiCity = weatherCityMap[ranked[0].name] || ranked[0].name;
            fetchWeather(apiCity);

        } 
        catch (err) {
            console.error("ERROR:", err);
        } 
        finally {
            loader.classList.add("hidden");
        }
    });
});

function displayResults(results) {

    const container = document.querySelector(".recommendations .card-grid");
    container.innerHTML = "";

    results.slice(0,6).forEach((item, index) => {

        const card = document.createElement("div");
        card.classList.add("card");

        // Set background image dynamically
        card.style.backgroundImage = `url('${item.image}')`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
        card.style.backgroundRepeat = "no-repeat";

        // Determine score color
        let scoreClass = "score-low";
        if (item.score >= 80) scoreClass = "score-high";
        else if (item.score >= 60) scoreClass = "score-medium";

        // Top Pick Badge
        const badge = index === 0 
            ? `<div class="top-badge">⭐ Top Pick</div>` 
            : "";

        card.innerHTML = `
            ${badge}
            <div class="overlay">
                <h3>${item.name}</h3>
                <p class="smart-score ${scoreClass}">
                    Smart Score: <span class="score-value" data-score="${item.score}">0</span>/100
                </p>
                <p class="why-text">
                    Best suited for your mood and budget. <br>
                    ${getBestSeason(item.name)}
                </p>
            </div>
        `;

        container.appendChild(card);
    });

    animateScores();
}

function animateScores() {

    const scoreElements = document.querySelectorAll(".score-value");

    scoreElements.forEach(el => {

        const target = Number(el.getAttribute("data-score"));
        let current = 0;

        const interval = setInterval(() => {
            current += 1;
            el.textContent = current;

            if (current >= target) {
                clearInterval(interval);
            }
        }, 15);

    });
}