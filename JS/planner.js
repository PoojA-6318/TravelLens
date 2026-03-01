async function generateItinerary() {
  const destination = document.getElementById("destinationSelect").value;
  const days = parseInt(document.getElementById("daysInput").value);
  const container = document.getElementById("itineraryContainer");
  const summary = document.getElementById("tripSummary");

  if (!destination || days < 1) {
    alert("Please select destination and valid number of days.");
    return;
  }

  container.innerHTML = "";
  summary.innerHTML = "";

  const response = await fetch("assets/data/attractions.json");
  const data = await response.json();

  // Filter attractions by city
  const filtered = data
    .filter(place => place.city === destination)
    .sort((a, b) => b.popularity - a.popularity);

  if (filtered.length === 0) {
    container.innerHTML = "<p>No attractions found.</p>";
    return;
  }

  let index = 0;
  let totalCost = 0;
  let totalAttractions = 0;

  for (let day = 1; day <= days; day++) {
    let dayHTML = `
      <div class="day-card">
        <h3>Day ${day} – ${destination}</h3>
        <ul>
    `;

    // 3 attractions per day
    for (let i = 0; i < 3; i++) {
      const place = filtered[index % filtered.length];
      dayHTML += `
        <li>
          <strong>${place.name}</strong> 
          (${place.category}) – ₹${place.cost}
        </li>
      `;
      totalCost += place.cost;
      totalAttractions++;
      index++;
    }

    dayHTML += `</ul></div>`;
    container.innerHTML += dayHTML;
  }

  summary.innerHTML = `
    Trip Summary:
    <br>Total Attractions: ${totalAttractions}
    <br>Estimated Total Cost: ₹${totalCost}
  `;
}