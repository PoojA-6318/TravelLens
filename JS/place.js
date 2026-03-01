const sections = document.querySelectorAll('.section-box');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            section.classList.add('show');
        }
    });
});

// ===============================
// TravelLens - Dynamic Place Page
// ===============================

const places = [
  {
    id: "Kodaikanal",
    name: "Kodaikanal",
    description:
      "The Princess of Hill Stations — where mist rolls over valleys, pine forests whisper stories, and time slows down beside Kodai Lake.",

    sections: {
      morning: [
        {
          title: "Kodai Lake",
          image: "assets/images/kodai/lake.jpg",
          text: "Start your day cycling or boating around the mist-covered lake."
        },
        {
          title: "Coaker's Walk",
          image: "assets/images/kodai/coakers-walk.jpg",
          text: "Enjoy valley views while the morning fog slowly clears."
        },
        {
          title: "Bryant Park",
          image: "assets/images/kodai/bryant-park.jpg",
          text: "Walk through blooming gardens in fresh hill air."
        }
      ],

      afternoon: [
        {
          title: "Pine Forest",
          image: "assets/images/kodai/pine-forest.jpg",
          text: "Walk among tall pine trees and capture scenic photos."
        },
        {
          title: "Dolphin's Nose",
          image: "assets/images/kodai/dolphins-nose.jpg",
          text: "Trek to the cliffside viewpoint with panoramic scenery."
        },
        {
          title: "Pillar Rocks",
          image: "assets/images/kodai/pillar-rocks.jpg",
          text: "Three giant rock pillars standing tall in the valley."
        }
      ],

      evening: [
        {
          title: "Berijam Lake",
          image: "assets/images/kodai/berijam-lake.jpg",
          text: "Quiet sunset reflections in serene surroundings."
        }
      ],

      hidden: [
        {
          title: "Silver Cascade Falls",
          image: "assets/images/kodai/silver.jpg",
          text: "Beautiful waterfall at the entrance of Kodai."
        }
      ],

      stay: [
        {
          title: "Luxury Resorts",
          image: "assets/images/kodai/luxury-resort.jpg",
          text: "Premium hillside stays with valley views."
        }
      ],

      food: [
        {
          title: "Homemade Chocolates",
          image: "assets/images/kodai/homemade-chocolate.jpg",
          text: "Signature Kodai treat loved by visitors."
        }
      ]
    }
  }
];


// ===============================
// Card Generator
// ===============================
function generateCards(sectionId, items) {
  const container = document.getElementById(sectionId);

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;

    container.appendChild(card);
  });
}


// ===============================
// Load Place Based on URL
// ===============================
function loadPlace() {
  const params = new URLSearchParams(window.location.search);
  const placeId = parseInt(params.get("id"));

  const selectedPlace = places.find(place => place.id === placeId);

  if (!selectedPlace) return;

  document.getElementById("place-title").textContent = selectedPlace.name;
  document.getElementById("place-description").textContent =
    selectedPlace.description;

  generateCards("morning-section", selectedPlace.sections.morning);
  generateCards("afternoon-section", selectedPlace.sections.afternoon);
  generateCards("evening-section", selectedPlace.sections.evening);
  generateCards("hidden-section", selectedPlace.sections.hidden);
  generateCards("stay-section", selectedPlace.sections.stay);
  generateCards("food-section", selectedPlace.sections.food);
}


// ===============================
document.addEventListener("DOMContentLoaded", loadPlace);