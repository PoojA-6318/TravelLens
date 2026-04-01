document.addEventListener("DOMContentLoaded", () => {

  const dropdown = document.getElementById("destinationSelect");

  // Fill dropdown
  places.forEach(place => {
    const option = document.createElement("option");
    option.value = place.name;
    option.textContent = place.name;
    dropdown.appendChild(option);
  });

});

function generateItinerary() {

  const destination = document.getElementById("destinationSelect").value;
  let days = parseInt(document.getElementById("days").value);

  const container = document.getElementById("itinerary-output");
  const summary = document.getElementById("trip-summary");

  // Restrict max to 3
  if (days > 3) {
    alert("Maximum trip duration is 3 days only.");
    days = 3;
    document.getElementById("days").value = 3;
  }
  
  if (!destination || days < 1) {
    alert("Please select destination and valid number of days.");
    return;
  }

  container.innerHTML = `<p style="color:white;">✨ Crafting your trip...</p>`;

  const placeData = places.find(p => p.name === destination);

  if (!placeData) {
    container.innerHTML = `<p style="color:white;">❌ Place not found</p>`;
    return;
  }

  const morning = placeData.sections.morning || [];
  const afternoon = placeData.sections.afternoon || [];
  const evening = placeData.sections.evening || [];

  const finalDays = Math.min(days, morning.length);

  container.innerHTML = "";

  for (let day = 1; day <= finalDays; day++) {

    const m = morning[day - 1];
    const a = afternoon[day - 1];
    const e = evening[day - 1];

    container.innerHTML += `
      <div class="day-card">
        <h2 class="day-title">Day ${day} – ${destination}</h2>

        <div class="time-block">
          <h3>🌅 Morning</h3>
          <img src="${m.image}" class="place-img">
          <p>${m.title}</p>
        </div>

        <div class="time-block">
          <h3>☀️ Afternoon</h3>
          <img src="${a.image}" class="place-img">
          <p>${a.title}</p>
        </div>

        <div class="time-block">
          <h3>🌇 Evening</h3>
          <img src="${e.image}" class="place-img">
          <p>${e.title}</p>
        </div>

      </div>
    `;
  }

  summary.innerHTML = `
    <div class="summary-card">
      <h2>💰 Trip Summary</h2>
      <p>📅 Days: ${finalDays}</p>
      <p>💸 Budget: ₹${finalDays * 1500}</p>
    </div>
  `;

  window.scrollTo({
    top: container.offsetTop,
    behavior: "smooth"
  });

}