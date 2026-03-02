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
  },
  {
    id: "Yercaud",
    name: "Yercaud",
    heroImage: "assets/images/yercaud/yercaud.jpg",
    description: "Nestled in the Shevaroy Hills, Yercaud offers quiet orange groves, coffee plantations, and trekking trails away from the bustle.",
    sections: {
      morning: [
        { title: "Yercaud Lake", image: "assets/images/yercaud/lake.jpg", text: "Enjoy a peaceful pedal boat ride on the emerald waters of Big Lake." },
        { title: "Anna Park", image: "assets/images/yercaud/anna-park.jpg", text: "A scenic garden featuring a Japanese-style park and floral displays." },
        { title: "Lady's Seat", image: "assets/images/yercaud/ladys-seat.jpg", text: "Overlook the winding ghat roads and the lights of Salem city." }
      ],
      afternoon: [
        { title: "Coffee Plantations", image: "assets/images/yercaud/coffee.jpg", text: "Walk through shaded estates and learn about spice cultivation." },
        { title: "Kiliyur Falls", image: "assets/images/yercaud/falls.jpg", text: "A 300-ft waterfall perfect for a refreshing afternoon trek." },
        { title: "Shevaroy Temple", image: "assets/images/yercaud/temple.jpg", text: "A cave temple located at the highest point of the hill station." }
      ],
      evening: [
        { title: "Pagoda Point", image: "assets/images/yercaud/pagoda.jpg", text: "Watch the sunset from this pyramid-shaped stone viewpoint." },
        { title: "Botanical Garden", image: "assets/images/yercaud/botanical.jpg", text: "Explore the Kurinji flowers and the massive orchidarium." },
        { title: "Main Bazaar", image: "assets/images/yercaud/market.jpg", text: "Shop for fresh spices, organic pepper, and local honey." }
      ],
      hidden: [
        { title: "Manjakuttai View Point", image: "assets/images/yercaud/manjakuttai.jpg", text: "A secluded spot for spectacular sunrise and valley views." },
        { title: "Bear's Cave", image: "assets/images/yercaud/cave.jpg", text: "A historic cave located near the Norton’s Bungalow." }
      ],
      stay: [
        { title: "Hilltop Resorts", image: "assets/images/yercaud/resort.jpg", text: "Stay in luxury villas overlooking the coffee estates." },
        { title: "Eco-Friendly Cottages", image: "assets/images/yercaud/cottage.jpg", text: "Nature-centric stays deep within the woods." }
      ],
      food: [
        { title: "Fresh Coffee", image: "assets/images/yercaud/coffee-drink.jpg", text: "Strong, aromatic brews from locally grown beans." },
        { title: "Spiced Corn", image: "assets/images/yercaud/corn.jpg", text: "A popular lake-side snack for the chilly weather." }
      ]
    }
  },
  {
    id: "Tharangambadi",
    name: "Tharangambadi",
    heroImage: "assets/images/tharangambadi/tranquebar.jpg",
    description: "A former Danish colony known as Tranquebar, where history meets the Coromandel Coast in a quiet, breezy embrace.",
    sections: {
      morning: [
        { title: "Dansborg Fort", image: "assets/images/tharangambadi/fort.jpg", text: "Explore the second-largest Danish fort ever built." },
        { title: "New Jerusalem Church", image: "assets/images/tharangambadi/church.jpg", text: "A beautiful 18th-century church with unique colonial architecture." }
      ],
      afternoon: [
        { title: "Maritime Museum", image: "assets/images/tharangambadi/museum.jpg", text: "Discover Danish artifacts and old navigational tools." },
        { title: "Ziegenbalg House", image: "assets/images/tharangambadi/printing.jpg", text: "Visit the home of the man who brought the first printing press to India." }
      ],
      evening: [
        { title: "Tranquebar Beach", image: "assets/images/tharangambadi/beach.jpg", text: "Walk along the ozone-rich shore by the ancient fort walls." },
        { title: "Masilamani Nathar Temple", image: "assets/images/tharangambadi/temple.jpg", text: "A 700-year-old temple partially claimed by the sea." }
      ],
      hidden: [
        { title: "The Danish Cemetery", image: "assets/images/tharangambadi/cemetery.jpg", text: "A silent record of the Danish officers and traders from the 1700s." }
      ],
      stay: [
        { title: "Bungalow on the Beach", image: "assets/images/tharangambadi/stay.jpg", text: "A heritage stay offering high ceilings and sea views." }
      ],
      food: [
        { title: "Fresh Catch Seafood", image: "assets/images/tharangambadi/seafood.jpg", text: "Fisherman-style curries made with the day's fresh catch." }
      ]
    }
  },
  {
    id: "Karaikudi",
    name: "Karaikudi",
    heroImage: "assets/images/karaikudi/chettinad.jpg",
    description: "Grand mansions, intricate wood carvings, and world-famous spicy cuisine define this cultural capital.",
    sections: {
      morning: [
        { title: "Chettinad Mansions", image: "assets/images/karaikudi/mansion.jpg", text: "Tour the palatial homes featuring Burmese teak and Italian marble." },
        { title: "Athangudi Tile Factory", image: "assets/images/karaikudi/tiles.jpg", text: "Watch artisans create handmade, eco-friendly geometric tiles." }
      ],
      afternoon: [
        { title: "Kandukathan Palace", image: "assets/images/karaikudi/palace.jpg", text: "A visual feast of architectural grandeur and vintage luxury." },
        { title: "Antiques Market", image: "assets/images/karaikudi/antiques.jpg", text: "Browse through rare Tanjore paintings, old brass, and enamelware." }
      ],
      evening: [
        { title: "Koppudai Nayaki Amman Temple", image: "assets/images/karaikudi/temple.jpg", text: "Experience the spiritual energy of this historic local temple." },
        { title: "Handloom Weaving Centre", image: "assets/images/karaikudi/weaving.jpg", text: "See how the famous Kandangi cotton sarees are woven." }
      ],
      hidden: [
        { title: "Thirumayam Fort", image: "assets/images/karaikudi/fort.jpg", text: "A 17th-century rock fortress with stunning vantage points." }
      ],
      stay: [
        { title: "Heritage Palatial Stays", image: "assets/images/karaikudi/stay.jpg", text: "Live like a Zamindar in restored Chettiar mansions." }
      ],
      food: [
        { title: "Chettinad Chicken", image: "assets/images/karaikudi/food.jpg", text: "Taste the authentic, spice-rich flavors of world-famous cuisine." },
        { title: "Kuzhi Paniyaram", image: "assets/images/karaikudi/snack.jpg", text: "Savory rice-lentil dumplings served with spicy chutneys." }
      ]
    }
  },
  {
    id: "Nagapattinam",
    name: "Nagapattinam",
    heroImage: "assets/images/nagapattinam/coast.jpg",
    description: "A historic port town that serves as a gateway to spiritual centers and pristine coastal escapes.",
    sections: {
      morning: [
        { title: "Velankanni Basilica", image: "assets/images/nagapattinam/church.jpg", text: "Visit the renowned 'Lourdes of the East' shrine nearby." },
        { title: "Nagore Dargah", image: "assets/images/nagapattinam/dargah.jpg", text: "A 500-year-old spiritual center and architectural marvel." }
      ],
      afternoon: [
        { title: "Nagapattinam Museum", image: "assets/images/nagapattinam/museum.jpg", text: "View bronze idols and artifacts from the Chola period." },
        { title: "Salt Pans", image: "assets/images/nagapattinam/salt.jpg", text: "Witness the unique landscape of coastal salt production." }
      ],
      evening: [
        { title: "Nagapattinam Beach", image: "assets/images/nagapattinam/beach.jpg", text: "A quiet evening walk along the Bay of Bengal." },
        { title: "Soundararaja Perumal", image: "assets/images/nagapattinam/temple.jpg", text: "An ancient Vishnu temple with a massive towering Gopuram." }
      ],
      hidden: [
        { title: "Point Calimere", image: "assets/images/nagapattinam/wildlife.jpg", text: "A sanctuary for blackbucks and migratory flamingos." }
      ],
      stay: [
        { title: "Beachside Lodges", image: "assets/images/nagapattinam/stay.jpg", text: "Simple and accessible stays close to the spiritual sites." }
      ],
      food: [
        { title: "Dry Fish Curries", image: "assets/images/nagapattinam/dryfish.jpg", text: "A local specialty known for its intense and unique flavors." }
      ]
    }
  },
  {
    id: "Chidambaram",
    name: "Chidambaram",
    heroImage: "assets/images/chidambaram/temple.jpg",
    description: "The home of Lord Nataraja—where spirituality, classical dance, and ancient architecture converge.",
    sections: {
      morning: [
        { title: "Nataraja Temple", image: "assets/images/chidambaram/nataraja.jpg", text: "The temple where Shiva is worshipped in his form as the Cosmic Dancer." },
        { title: "Thillai Kali Amman", image: "assets/images/chidambaram/kali.jpg", text: "A powerful temple dedicated to the guardian goddess of the town." }
      ],
      afternoon: [
        { title: "Pichavaram Mangroves", image: "assets/images/chidambaram/mangrove.jpg", text: "The world's second-largest mangrove forest, accessible by boat." },
        { title: "Annamalai University", image: "assets/images/chidambaram/uni.jpg", text: "Explore the sprawling, historic campus of this famed institution." }
      ],
      evening: [
        { title: "Temple Tank", image: "assets/images/chidambaram/tank.jpg", text: "Watch the rituals and chants reflect in the sacred waters." },
        { title: "Shopping for Silk", image: "assets/images/chidambaram/silk.jpg", text: "Chidambaram is known for its exquisite traditional cotton and silk." }
      ],
      hidden: [
        { title: "Vaitheeswaran Koil", image: "assets/images/chidambaram/nadi.jpg", text: "Located nearby, famous for its ancient Nadi Astrology palm leaves." }
      ],
      stay: [
        { title: "Spiritual Retreats", image: "assets/images/chidambaram/retreat.jpg", text: "Traditional lodges that offer a quiet, meditative atmosphere." }
      ],
      food: [
        { title: "Temple Prasadam", image: "assets/images/chidambaram/food.jpg", text: "Taste the sacred Pongal and Tamarind rice served in the temple." }
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