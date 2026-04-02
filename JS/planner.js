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

  // Helper function to get status badge HTML (MOVED OUTSIDE THE LOOP)
  function getStatusBadge(item) {
    if (!item) return '';
    
    if (item.status === "under-construction") {
      return '<span class="planner-status-badge construction-badge">🚧 Under Construction</span>';
    } else if (item.status === "under-renovation") {
      return '<span class="planner-status-badge renovation-badge">🔧 Under Renovation</span>';
    }
    return '';
  }

  for (let day = 1; day <= finalDays; day++) {

    const m = morning[day - 1];
    const a = afternoon[day - 1];
    const e = evening[day - 1];

    container.innerHTML += `
      <div class="day-card">
        <h2 class="day-title">Day ${day} – ${destination}</h2>

        <div class="time-block">
          <h3>🌅 Morning</h3>
          ${getStatusBadge(m)}
          <img src="${m ? m.image : ''}" class="place-img" onerror="this.src='assets/images/fallback.jpg'">
          <p><strong>${m ? m.title : 'No activity planned'}</strong></p>
          <p class="activity-text">${m ? m.text : 'Free time to explore'}</p>
        </div>

        <div class="time-block">
          <h3>☀️ Afternoon</h3>
          ${getStatusBadge(a)}
          <img src="${a ? a.image : ''}" class="place-img" onerror="this.src='assets/images/fallback.jpg'">
          <p><strong>${a ? a.title : 'No activity planned'}</strong></p>
          <p class="activity-text">${a ? a.text : 'Free time to explore'}</p>
        </div>

        <div class="time-block">
          <h3>🌇 Evening</h3>
          ${getStatusBadge(e)}
          <img src="${e ? e.image : ''}" class="place-img" onerror="this.src='assets/images/fallback.jpg'">
          <p><strong>${e ? e.title : 'No activity planned'}</strong></p>
          <p class="activity-text">${e ? e.text : 'Free time to explore'}</p>
        </div>

      </div>
    `;
  }

  // Check if any activity in the itinerary has a status
  function hasAnyStatus() {
    const allItems = [...morning, ...afternoon, ...evening];
    return allItems.some(item => item && (item.status === "under-construction" || item.status === "under-renovation"));
  }

  // Add Trip Summary
  let summaryHTML = `
    <div class="summary-card">
      <h2>💰 Trip Summary</h2>
      <p>📅 Days: ${finalDays}</p>
      <p>💸 Budget: ₹${finalDays * 1500}</p>
  `;

  if (hasAnyStatus()) {
    summaryHTML += `
      <div class="status-warning">
        <p>⚠️ <strong>Note:</strong> Some attractions in your itinerary are currently under construction or renovation. Please check their status before visiting.</p>
      </div>
    `;
  }

  summaryHTML += `</div>`;

  // Add Fee Information if available
  if (placeData.fees && placeData.fees.cards && placeData.fees.cards.length > 0) {
    const avgEntryFee = placeData.fees.cards
        .filter(f => f.entryFee !== "Free")
        .reduce((sum, f) => {
            const num = parseInt(f.entryFee);
            return sum + (isNaN(num) ? 0 : num);
        }, 0);
  
    const avgFee = Math.ceil(avgEntryFee / placeData.fees.cards.length);
  
    summaryHTML += `
      <div class="summary-card" style="margin-top: 15px;">
        <h2>💰 Estimated Entry Fees</h2>
        <p>🎟️ Average entry fee: ${avgFee > 0 ? `₹${avgFee}` : "Free entry at most places"}</p>
        <p>🅿️ Parking typically costs ₹30-50 per attraction</p>
        <small>💡 Check individual attraction pages for exact fees</small>
      </div>
    `;
  }

  summary.innerHTML = summaryHTML;

  window.scrollTo({
    top: container.offsetTop,
    behavior: "smooth"
  });

}