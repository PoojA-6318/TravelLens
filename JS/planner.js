document.addEventListener("DOMContentLoaded", () => {

  const dropdown =
    document.getElementById("destinationSelect");

  // Fill dropdown from place.js

  places.forEach(place => {

    const option =
      document.createElement("option");

    option.value = place.name;
    option.textContent = place.name;

    dropdown.appendChild(option);

  });

});



function generateItinerary() {

  const destination = document.getElementById("destinationSelect").value;

  const days = parseInt(document.getElementById("days").value);

  const container = document.getElementById("itinerary-output");

  const summary = document.getElementById("trip-summary");

  if (!destination || days < 1) {
    alert("Please select destination and valid number of days.");
    return;
  }

  container.innerHTML = "";
  

  const placeData = places.find(p => p.name === destination);

  if (!placeData) {
    container.innerHTML = "<p>❌ Place not found.</p>";
    return;
  }

  const morning = placeData.sections.morning || [];

  const afternoon = placeData.sections.afternoon || [];

  const evening = placeData.sections.evening || [];

  const hidden = placeData.sections.hidden || [];

  const food = placeData.sections.food || [];

  const stay = placeData.sections.stay || [];

  const maxDays = Math.min(morning.length, afternoon.length, evening.length);

  const finalDays = Math.min(days, maxDays);



  // 🌅 DAY-WISE ITINERARY
  for (let day = 1; day <= finalDays; day++) {

    const m = morning[day - 1];
    const a = afternoon[day - 1];
    const e = evening[day - 1];

    container.innerHTML += `

      <div class="day-card">

        <h2 class="day-title"> ✨ Day ${day} – ${destination} </h2>

        <div class="time-block">
          <h3>🌅 Morning</h3>
          <img src="${m.image}" class="place-img">
          <p class="place-title"> ${m.title} </p>
          <p class="place-desc"> ${m.text} </p>
        </div>

        <div class="time-block">
          <h3>☀️ Afternoon</h3>
          <img src="${a.image}" class="place-img">
          <p class="place-title"> ${a.title} </p>
          <p class="place-desc"> ${a.text} </p>
        </div>

        <div class="time-block">
          <h3>🌇 Evening</h3>
          <img src="${e.image}" class="place-img">
          <p class="place-title"> ${e.title} </p>
          <p class="place-desc"> ${e.text} </p>
        </div>
      </div>
    `;
  }



  // 🧭 HIDDEN GEMS

  if (hidden.length > 0) {

    let hiddenHTML = "";

    hidden.forEach(place => {

      hiddenHTML += `

        <div class="mini-card">

          <img src="${place.image}"
               class="mini-img">

          <p class="mini-title">
            ${place.title}
          </p>

        </div>

      `;

    });

    container.innerHTML += `

      <div class="extra-section">

        <h2>🧭 Hidden Gems to Explore</h2>

        <div class="mini-grid">
          ${hiddenHTML}
        </div>

      </div>

    `;

  }



  // 🍜 FOOD

  if (food.length > 0) {

    let foodHTML = "";

    food.forEach(item => {

      foodHTML += `

        <div class="mini-card">

          <img src="${item.image}"
               class="mini-img">

          <p class="mini-title">
            ${item.title}
          </p>

        </div>

      `;

    });

    container.innerHTML += `

      <div class="extra-section">

        <h2>🍜 Must-Try Food</h2>

        <div class="mini-grid">
          ${foodHTML}
        </div>

      </div>

    `;

  }



  // 🏨 STAY

  if (stay.length > 0) {

    let stayHTML = "";

    stay.forEach(item => {

      stayHTML += `

        <div class="mini-card">

          <img src="${item.image}"
               class="mini-img">

          <p class="mini-title">
            ${item.title}
          </p>

        </div>

      `;

    });

    container.innerHTML += `

      <div class="extra-section">

        <h2>🏨 Recommended Stay</h2>

        <div class="mini-grid">
          ${stayHTML}
        </div>

      </div>

    `;

  }

  // 💰 TRIP SUMMARY

summary.innerHTML = `

  <div class="summary-card">

    <h2>💰 Trip Summary</h2>

    <p>
      📅 Total Days: ${finalDays}
    </p>

    <p>
      💸 Estimated Budget:
      ₹${finalDays * 1500}
    </p>

    <p>
      ✨ Memories Created:
      Infinite
    </p>

  </div>

`;

}