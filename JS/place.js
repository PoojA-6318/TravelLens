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
    id: "kodaikanal",
    name: "Kodaikanal",
    heroImage: "assets/images/kodai/kodaikanal.jpg",
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
        },
        {
          title: "Kurinji Temple",
          image: "assets/images/kodai/temple.jpg",
          text: "Spiritual calm with breathtaking sunset views."
        },
        {
          title: "Evening Market",
          image: "assets/images/kodai/market.jpg",
          text: "Shop homemade chocolates and woollens."
        }
      ],

      hidden: [
        {
          title: "Silver Cascade Falls",
          image: "assets/images/kodai/silver.jpg",
          text: "Beautiful waterfall at the entrance of Kodai."
        },
        {
          title: "Guna Caves",
          image: "assets/images/kodai/guna-caves.jpg",
          text: "Mysterious caves surrounded by dense forest."
        },
        {
          title: "Bear Shola Falls",
          image: "assets/images/kodai/bear.jpg",
          text: "A hidden forest waterfall surrounded by dense greenery."
        },
        {
          title: "Solar Observatory",
          image: "assets/images/kodai/solar-observatory.jpg",
          text: "One of India’s oldest astronomical observatories."
        }
      ],

      stay: [
        {
          title: "Luxury Resorts",
          image: "assets/images/kodai/luxury-resort.jpg",
          text: "Premium hillside stays with valley views."
        },
        {
          title: "Boutique Hotels",
          image: "assets/images/kodai/boutique-hotel.jpg",
          text: "Cozy colonial-style accommodations."
        },
        {
          title: "Homestays",
          image: "assets/images/kodai/homestay.jpg",
          text: "Warm local hospitality in scenic surroundings."
        }
      ],

      food: [
        {
          title: "Homemade Chocolates",
          image: "assets/images/kodai/homemade-chocolate.jpg",
          text: "Signature Kodai treat loved by visitors."
        },
        {
          title: "Strawberry Jam",
          image: "assets/images/kodai/strawberry-jam.jpg",
          text: "Locally grown berries turned into sweet spreads."
        },
        {
          title: "Eucalyptus Oil",
          image: "assets/images/kodai/herbal-oil.jpg",
          text: "Natural oil from hill plantations."
        },
        {
          title: "Woollen Shawls",
          image: "assets/images/kodai/woollens.jpg",
          text: "Perfect souvenirs for chilly evenings."
        }
      ]
    }
  },
  {
    id: "Ooty",
    name: "Ooty",
    heroImage: "assets/images/ooty/ooty.jpg",
    description:
      "Queen of the Nilgiris — rolling tea estates, cool mountain air, and colonial charm wrapped in misty blue hills.",

    sections: {

      morning: [
        {
          title: "Ooty Lake",
          image: "assets/images/ooty/lake.jpg",
          text: "Start your morning with boating in the peaceful lake."
        },
        {
          title: "Botanical Garden",
          image: "assets/images/ooty/botanical-garden.jpg",
          text: "Walk through beautifully maintained gardens and rare plants."
        },
        {
          title: "Doddabetta Peak",
          image: "assets/images/ooty/doddabetta.jpg",
          text: "Highest peak in the Nilgiris with panoramic hill views."
        }
      ],

      afternoon: [
        {
          title: "Tea Museum",
          image: "assets/images/ooty/tea-museum.jpg",
          text: "Learn how Nilgiri tea is processed and enjoy fresh samples."
        },
        {
          title: "Rose Garden",
          image: "assets/images/ooty/rose-garden.jpg",
          text: "Thousands of colorful rose varieties on terraced slopes."
        },
        {
          title: "Pykara Falls",
          image: "assets/images/ooty/pykara.jpg",
          text: "Scenic waterfall surrounded by lush greenery."
        }
      ],

      evening: [
        {
          title: "Nilgiri Mountain Railway",
          image: "assets/images/ooty/train.jpg",
          text: "Experience the iconic toy train ride through the hills."
        },
        {
          title: "Thread Garden",
          image: "assets/images/ooty/thread-garden.jpg",
          text: "Artificial flowers made entirely of thread — unique attraction."
        },
        {
          title: "Charing Cross Market",
          image: "assets/images/ooty/market.jpg",
          text: "Evening shopping for local chocolates and handmade goods."
        }
      ],

      hidden: [
        {
          title: "Emerald Lake",
          image: "assets/images/ooty/emerald.jpg",
          text: "A peaceful lake away from tourist crowds."
        },
        {
          title: "Avalanche Lake",
          image: "assets/images/ooty/avalanche.jpg",
          text: "Crystal clear waters surrounded by mountains."
        },
        {
          title: "Glenmorgan",
          image: "assets/images/ooty/glenmorgan.jpg",
          text: "Less explored viewpoint with breathtaking valley views."
        },
        {
          title: "Needle Rock View Point",
          image: "assets/images/ooty/needle-rock.jpg",
          text: "Sharp cliff viewpoint offering stunning sunset scenery."
        }
      ],

      stay: [
        {
          title: "Luxury Hill Resorts",
          image: "assets/images/ooty/resort.jpg",
          text: "Premium resorts with valley-facing balconies."
        },
        {
          title: "Colonial Heritage Hotels",
          image: "assets/images/ooty/heritage.jpg",
          text: "British-era styled stays with vintage charm."
        },
        {
          title: "Cozy Homestays",
          image: "assets/images/ooty/homestay.jpg",
          text: "Comfortable and affordable mountain stays."
        }
      ],

      food: [
        {
          title: "Homemade Chocolates",
          image: "assets/images/ooty/chocolate.jpg",
          text: "Ooty is famous for rich handmade chocolates."
        },
        {
          title: "Nilgiri Tea",
          image: "assets/images/ooty/tea.jpg",
          text: "Fresh aromatic tea directly from plantations."
        },
        {
          title: "Varkey Biscuits",
          image: "assets/images/ooty/varkey.jpg",
          text: "Crispy layered biscuits loved by visitors."
        },
        {
          title: "Eucalyptus Oil",
          image: "assets/images/ooty/oil.jpg",
          text: "Natural essential oil from Nilgiri plantations."
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
  const placeId = params.get("destination");

  const selectedPlace = places.find(
    place => place.id.toLowerCase() === placeId.toLowerCase()
  );

  if (!selectedPlace) return;

  document.getElementById("place-title").textContent = selectedPlace.name;
  document.getElementById("place-description").textContent =
    selectedPlace.description;

  document.title = selectedPlace.name;

  const hero = document.getElementById("hero-section");
  hero.style.backgroundImage = `url(${selectedPlace.heroImage})`;

  generateCards("morning-section", selectedPlace.sections.morning);
  generateCards("afternoon-section", selectedPlace.sections.afternoon);
  generateCards("evening-section", selectedPlace.sections.evening);
  generateCards("hidden-section", selectedPlace.sections.hidden);
  generateCards("stay-section", selectedPlace.sections.stay);
  generateCards("food-section", selectedPlace.sections.food);
}


// ===============================
document.addEventListener("DOMContentLoaded", loadPlace);