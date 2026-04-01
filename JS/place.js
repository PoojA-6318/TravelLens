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
  id: "Trichy",
  name: "Trichy",
  heroImage: "assets/images/trichy/hero.jpg",
  description:
    "The Temple City of Tamil Nadu — where ancient rock forts rise above the plains, sacred rivers flow beside timeless shrines, and history echoes through every street.",

  sections: {

    morning: [
      {
        title: "Rockfort Temple",
        image: "assets/images/trichy/rockfort.jpg",
        text: "Climb the iconic rock fort for breathtaking sunrise views over the city."
      },
      {
        title: "Ucchi Pillayar Temple",
        image: "assets/images/trichy/ucchi-pillayar.jpg",
        text: "A sacred hilltop shrine offering panoramic views and spiritual calm."
      },
      {
        title: "Sri Ranganathaswamy Temple",
        image: "assets/images/trichy/srirangam.jpg",
        text: "One of the largest functioning Hindu temples in the world."
      }
    ],

    afternoon: [
      {
        title: "Kallanai (Grand Anicut)",
        image: "assets/images/trichy/kallanai.jpg",
        text: "An ancient dam built by the Cholas over the Cauvery River."
      },
      {
        title: "Jambukeswarar Temple",
        image: "assets/images/trichy/thiruvanaikaval.jpg",
        text: "A powerful Shiva temple representing the element of water."
      },
      {
        title: "St. Joseph’s Church",
        image: "assets/images/trichy/st-joseph.jpg",
        text: "A serene colonial-era church with stunning architecture."
      }
    ],

    evening: [
      {
        title: "Mukkombu (Upper Anicut)",
        image: "assets/images/trichy/mukkombu.jpg",
        text: "A peaceful riverside spot perfect for relaxing evenings."
      },
      {
        title: "Butterfly Park",
        image: "assets/images/trichy/butterfly-park.jpg",
        text: "A colorful park showcasing native butterfly species."
      },
      {
        title: "Cauvery River View",
        image: "assets/images/trichy/cauvery.jpg",
        text: "Watch the sunset along the calm and flowing Cauvery riverbanks."
      }
    ],

    hidden: [
      {
        title: "Puliyancholai Waterfalls",
        image: "assets/images/trichy/puliyancholai.jpg",
        text: "A hidden natural escape at the foothills of Kolli Hills."
      },
      {
        title: "Viralimalai Murugan Temple",
        image: "assets/images/trichy/viralimalai.jpg",
        text: "Hill temple known for peacocks and scenic views."
      },
      {
        title: "Government Museum",
        image: "assets/images/trichy/museum.jpg",
        text: "Explore archaeological artifacts and ancient sculptures."
      },
      {
        title: "Samanar Hills",
        image: "assets/images/trichy/samanar-hills.jpg",
        text: "Ancient Jain caves with inscriptions carved into stone."
      }
    ],

    stay: [
      {
        title: "Luxury Riverfront Hotels",
        image: "assets/images/trichy/luxury-hotel.jpg",
        text: "Premium stays offering comfort near major temples."
      },
      {
        title: "Business Class Hotels",
        image: "assets/images/trichy/business-hotel.jpg",
        text: "Comfortable accommodations in the city center."
      },
      {
        title: "Budget Lodges",
        image: "assets/images/trichy/budget-lodge.jpg",
        text: "Affordable stays for pilgrims and backpackers."
      }
    ],

    food: [
      {
        title: "Traditional South Indian Meals",
        image: "assets/images/trichy/meals.jpg",
        text: "Authentic Tamil Nadu meals served on banana leaves."
      },
      {
        title: "Murukku & Local Snacks",
        image: "assets/images/trichy/snacks.jpg",
        text: "Crispy traditional snacks loved by locals."
      },
      {
        title: "Temple Prasadam",
        image: "assets/images/trichy/prasadam.jpg",
        text: "Sacred offerings from the famous temples."
      },
      {
        title: "Filter Coffee",
        image: "assets/images/trichy/filter-coffee.jpg",
        text: "Strong and aromatic South Indian filter coffee."
      }
    ]

  }
},
  {
  id: "Tirunelveli",
  name: "Tirunelveli",
  heroImage: "assets/images/tirunelveli/hero.jpg",
  description:
    "Land of flowing Tamirabarani, majestic temples, and legendary halwa — Tirunelveli blends spirituality, nature, and timeless Tamil culture.",

  sections: {

    morning: [
      {
        title: "Nellaiappar Temple",
        image: "assets/images/tirunelveli/nellaiappar.jpg",
        text: "A grand twin temple dedicated to Shiva and Parvati, known for its musical pillars."
      },
      {
        title: "Kanthimathi Amman Shrine",
        image: "assets/images/tirunelveli/kanthimathi.jpg",
        text: "Sacred shrine within the temple complex radiating divine energy."
      },
      {
        title: "Tamirabarani River",
        image: "assets/images/tirunelveli/tamirabarani.jpg",
        text: "Start your day by the serene riverbanks flowing through the district."
      }
    ],

    afternoon: [
      {
        title: "Courtallam Falls",
        image: "assets/images/tirunelveli/courtallam.jpg",
        text: "Famous therapeutic waterfalls surrounded by lush greenery."
      },
      {
        title: "Manimuthar Dam",
        image: "assets/images/tirunelveli/manimuthar.jpg",
        text: "Scenic dam offering peaceful views and fresh mountain breeze."
      },
      {
        title: "Papanasam Dam",
        image: "assets/images/tirunelveli/papanasam.jpg",
        text: "Beautiful reservoir nestled in the Western Ghats."
      }
    ],

    evening: [
      {
        title: "Agasthiyar Falls",
        image: "assets/images/tirunelveli/agasthiyar.jpg",
        text: "A serene waterfall perfect for relaxing evening visits."
      },
      {
        title: "Ariyanayagipuram Temple",
        image: "assets/images/tirunelveli/ariyanayagipuram.jpg",
        text: "Historic temple with intricate architecture."
      },
      {
        title: "Nellai Town Market",
        image: "assets/images/tirunelveli/market.jpg",
        text: "Explore the lively streets filled with local flavors and culture."
      }
    ],

    hidden: [
      {
        title: "Kalakad Wildlife Sanctuary",
        image: "assets/images/tirunelveli/kalakad.jpg",
        text: "A biodiversity hotspot rich in flora and fauna."
      },
      {
        title: "Mundanthurai Tiger Reserve",
        image: "assets/images/tirunelveli/mundanthurai.jpg",
        text: "Part of the Kalakad-Mundanthurai Tiger Reserve."
      },
      {
        title: "Koonthankulam Bird Sanctuary",
        image: "assets/images/tirunelveli/koonthankulam.jpg",
        text: "Seasonal paradise for migratory birds."
      },
      {
        title: "Krishnapuram Temple",
        image: "assets/images/tirunelveli/krishnapuram.jpg",
        text: "Known for stunning stone carvings and sculptures."
      }
    ],

    stay: [
      {
        title: "Riverfront Resorts",
        image: "assets/images/tirunelveli/resort.jpg",
        text: "Comfortable stays near nature and waterfalls."
      },
      {
        title: "City Hotels",
        image: "assets/images/tirunelveli/hotel.jpg",
        text: "Convenient accommodations in the heart of Nellai."
      },
      {
        title: "Budget Lodges",
        image: "assets/images/tirunelveli/lodge.jpg",
        text: "Affordable options for pilgrims and travelers."
      }
    ],

    food: [
      {
        title: "Tirunelveli Halwa",
        image: "assets/images/tirunelveli/halwa.jpg",
        text: "World-famous wheat halwa that melts in your mouth."
      },
      {
        title: "Sodhi Kuzhambu",
        image: "assets/images/tirunelveli/sodhi.jpg",
        text: "Traditional coconut milk-based curry unique to the region."
      },
      {
        title: "Parotta & Salna",
        image: "assets/images/tirunelveli/parotta.jpg",
        text: "Soft layered parotta served with spicy salna."
      },
      {
        title: "Banana Chips",
        image: "assets/images/tirunelveli/chips.jpg",
        text: "Crispy homemade snacks perfect for travel."
      }
    ]

  }
},
  {
  id: "Thoothukudi",
  name: "Thoothukudi",
  heroImage: "assets/images/thoothukudi/hero.jpg",
  description:
    "The Pearl City of Tamil Nadu — where the Bay of Bengal meets ancient ports, sacred churches, salt pans, and rich maritime history.",

  sections: {

    morning: [
      {
        title: "Our Lady of Snows Basilica",
        image: "assets/images/thoothukudi/basilica.jpg",
        text: "A historic coastal church known for its stunning architecture and spiritual significance."
      },
      {
        title: "Thoothukudi Beach",
        image: "assets/images/thoothukudi/beach.jpg",
        text: "Enjoy a peaceful sunrise along the calm Bay of Bengal shoreline."
      },
      {
        title: "Harbour View Point",
        image: "assets/images/thoothukudi/harbour.jpg",
        text: "Watch ships dock and experience the city’s bustling port life."
      }
    ],

    afternoon: [
      {
        title: "Tuticorin Port",
        image: "assets/images/thoothukudi/port.jpg",
        text: "One of India’s major ports with deep maritime heritage."
      },
      {
        title: "Salt Pans",
        image: "assets/images/thoothukudi/salt-pans.jpg",
        text: "Vast white salt fields reflecting the blazing afternoon sun."
      },
      {
        title: "Roche Park",
        image: "assets/images/thoothukudi/roche-park.jpg",
        text: "A scenic seafront park perfect for relaxing strolls."
      }
    ],

    evening: [
      {
        title: "Pearl City Beach Walk",
        image: "assets/images/thoothukudi/evening-beach.jpg",
        text: "Experience a breezy sunset along the shoreline."
      },
      {
        title: "Manapad Beach",
        image: "assets/images/thoothukudi/manapad.jpg",
        text: "A serene coastal village with dramatic cliffs and church views."
      },
      {
        title: "Sangu Muthumariamman Temple",
        image: "assets/images/thoothukudi/muthumariamman.jpg",
        text: "A sacred temple symbolizing the spiritual roots of the region."
      }
    ],

    hidden: [
      {
        title: "Vembar Beach",
        image: "assets/images/thoothukudi/vembar.jpg",
        text: "A lesser-known beach offering quiet coastal beauty."
      },
      {
        title: "Korkai Ancient Port",
        image: "assets/images/thoothukudi/korkai.jpg",
        text: "Historic Pandyan-era port known for pearl fishing."
      },
      {
        title: "Kalugumalai",
        image: "assets/images/thoothukudi/kalugumalai.jpg",
        text: "Ancient rock-cut temples and Jain monuments carved in stone."
      },
      {
        title: "Srivaikuntam Temple",
        image: "assets/images/thoothukudi/srivaikuntam.jpg",
        text: "A beautiful Vishnu temple along the Tamirabarani River."
      }
    ],

    stay: [
      {
        title: "Seafront Hotels",
        image: "assets/images/thoothukudi/seafront-hotel.jpg",
        text: "Comfortable stays overlooking the Bay of Bengal."
      },
      {
        title: "Business Hotels",
        image: "assets/images/thoothukudi/business-hotel.jpg",
        text: "Modern accommodations near the port and city center."
      },
      {
        title: "Budget Lodges",
        image: "assets/images/thoothukudi/lodge.jpg",
        text: "Affordable stays for short coastal trips."
      }
    ],

    food: [
      {
        title: "Macaroons",
        image: "assets/images/thoothukudi/macaroons.jpg",
        text: "Famous Tuticorin macaroons made from cashew and egg white."
      },
      {
        title: "Seafood Specials",
        image: "assets/images/thoothukudi/seafood.jpg",
        text: "Fresh fish, prawns, and crab dishes from the coast."
      },
      {
        title: "Karupatti Mittai",
        image: "assets/images/thoothukudi/karupatti.jpg",
        text: "Traditional palm jaggery sweets unique to the region."
      },
      {
        title: "Banana Chips",
        image: "assets/images/thoothukudi/chips.jpg",
        text: "Crispy salted chips perfect as travel snacks."
      }
    ]

  }
},
  {
  id: "Valparai",
  name: "Valparai",
  heroImage: "assets/images/valparai/hero.jpg",
  description:
    "A mist-covered hill retreat in the Anamalai ranges — endless tea estates, winding ghat roads, wildlife sightings, and peaceful mountain air.",

  sections: {

    morning: [
      {
        title: "Tea Estates",
        image: "assets/images/valparai/tea-estates.jpg",
        text: "Wake up to golden sunlight falling over endless green plantations."
      },
      {
        title: "Loam’s View Point",
        image: "assets/images/valparai/loams-view.jpg",
        text: "View the famous 40 hairpin bends from this scenic spot."
      },
      {
        title: "Nallamudi Viewpoint",
        image: "assets/images/valparai/nallamudi.jpg",
        text: "Panoramic sunrise views over the Western Ghats."
      }
    ],

    afternoon: [
      {
        title: "Aliyar Dam",
        image: "assets/images/valparai/aliyar-dam.jpg",
        text: "A scenic reservoir at the foothills of Valparai."
      },
      {
        title: "Monkey Falls",
        image: "assets/images/valparai/monkey-falls.jpg",
        text: "Refreshing waterfall stop on the ghat road."
      },
      {
        title: "Balaji Temple",
        image: "assets/images/valparai/balaji-temple.jpg",
        text: "A beautifully maintained private temple amidst greenery."
      }
    ],

    evening: [
      {
        title: "Sholayar Dam",
        image: "assets/images/valparai/sholayar.jpg",
        text: "Enjoy the calm waters and sunset reflections."
      },
      {
        title: "Grass Hills",
        image: "assets/images/valparai/grass-hills.jpg",
        text: "Rolling green hills with rare wildlife sightings."
      },
      {
        title: "Tea Factory Visit",
        image: "assets/images/valparai/tea-factory.jpg",
        text: "See how fresh tea leaves are processed."
      }
    ],

    hidden: [
      {
        title: "Chinna Kallar",
        image: "assets/images/valparai/chinna-kallar.jpg",
        text: "One of the wettest places in India with lush forest trails."
      },
      {
        title: "Koolangal River",
        image: "assets/images/valparai/koolangal.jpg",
        text: "A quiet riverside picnic spot."
      },
      {
        title: "Karumalai",
        image: "assets/images/valparai/karumalai.jpg",
        text: "Remote tea estate landscapes perfect for photography."
      },
      {
        title: "Anamalai Tiger Reserve Edge",
        image: "assets/images/valparai/tiger-reserve.jpg",
        text: "Spot lion-tailed macaques and exotic birds."
      }
    ],

    stay: [
      {
        title: "Tea Estate Bungalows",
        image: "assets/images/valparai/estate-bungalow.jpg",
        text: "Stay inside heritage plantation homes."
      },
      {
        title: "Eco Resorts",
        image: "assets/images/valparai/eco-resort.jpg",
        text: "Nature-focused stays with valley views."
      },
      {
        title: "Budget Hill Lodges",
        image: "assets/images/valparai/lodge.jpg",
        text: "Affordable options for backpackers."
      }
    ],

    food: [
      {
        title: "Fresh Estate Tea",
        image: "assets/images/valparai/tea.jpg",
        text: "Directly sourced aromatic mountain tea."
      },
      {
        title: "Homestyle Tamil Meals",
        image: "assets/images/valparai/meals.jpg",
        text: "Simple and comforting South Indian cuisine."
      },
      {
        title: "Homemade Chocolates",
        image: "assets/images/valparai/chocolate.jpg",
        text: "Locally made sweet treats."
      },
      {
        title: "Pepper & Spice Products",
        image: "assets/images/valparai/spices.jpg",
        text: "Fresh hill-grown spices to take home."
      }
    ]
  }
},
  {
  id: "Srivilliputhur",
  name: "Srivilliputhur",
  heroImage: "assets/images/srivilliputhur/hero.jpg",
  description:
    "Sacred town of Andal — towering temple gopurams, divine hymns, and serene temple streets echoing centuries of devotion.",

  sections: {

    morning: [
      {
        title: "Andal Temple",
        image: "assets/images/srivilliputhur/andal-temple.jpg",
        text: "Iconic temple dedicated to Goddess Andal."
      },
      {
        title: "Rajagopuram",
        image: "assets/images/srivilliputhur/rajagopuram.jpg",
        text: "The tallest temple tower in Tamil Nadu."
      },
      {
        title: "Temple Streets Walk",
        image: "assets/images/srivilliputhur/temple-street.jpg",
        text: "Experience the calm spiritual morning atmosphere."
      }
    ],

    afternoon: [
      {
        title: "Grizzled Giant Squirrel Sanctuary",
        image: "assets/images/srivilliputhur/sanctuary.jpg",
        text: "Wildlife reserve home to rare giant squirrels."
      },
      {
        title: "Western Ghats Foothills",
        image: "assets/images/srivilliputhur/ghats.jpg",
        text: "Scenic hill landscapes around the town."
      },
      {
        title: "Local Heritage Houses",
        image: "assets/images/srivilliputhur/heritage.jpg",
        text: "Traditional Tamil architecture and homes."
      }
    ],

    evening: [
      {
        title: "Temple Evening Aarti",
        image: "assets/images/srivilliputhur/aarti.jpg",
        text: "Witness the divine evening rituals."
      },
      {
        title: "Town Market",
        image: "assets/images/srivilliputhur/market.jpg",
        text: "Local shopping for sweets and souvenirs."
      },
      {
        title: "Village Countryside Walk",
        image: "assets/images/srivilliputhur/countryside.jpg",
        text: "Peaceful rural scenery during sunset."
      }
    ],

    hidden: [
      {
        title: "Madavar Vilagam",
        image: "assets/images/srivilliputhur/madavar.jpg",
        text: "Historic locality tied to temple traditions."
      },
      {
        title: "Sathuragiri Hills (Nearby)",
        image: "assets/images/srivilliputhur/sathuragiri.jpg",
        text: "Sacred trekking destination."
      },
      {
        title: "Local Sweet Shops",
        image: "assets/images/srivilliputhur/sweets.jpg",
        text: "Famous Srivilliputhur palkova."
      },
      {
        title: "Rural Temple Shrines",
        image: "assets/images/srivilliputhur/shrine.jpg",
        text: "Small but spiritually rich temples."
      }
    ],

    stay: [
      {
        title: "Pilgrim Guest Houses",
        image: "assets/images/srivilliputhur/guesthouse.jpg",
        text: "Simple and comfortable temple stays."
      },
      {
        title: "Town Hotels",
        image: "assets/images/srivilliputhur/hotel.jpg",
        text: "Convenient accommodation near temple."
      },
      {
        title: "Budget Lodges",
        image: "assets/images/srivilliputhur/lodge.jpg",
        text: "Affordable short stays."
      }
    ],

    food: [
      {
        title: "Srivilliputhur Palkova",
        image: "assets/images/srivilliputhur/palkova.jpg",
        text: "World-famous milk sweet from this town."
      },
      {
        title: "Traditional Tiffin",
        image: "assets/images/srivilliputhur/tiffin.jpg",
        text: "Idli, dosa and pongal with temple-style flavors."
      },
      {
        title: "Banana Leaf Meals",
        image: "assets/images/srivilliputhur/meals.jpg",
        text: "Authentic Tamil vegetarian meals."
      },
      {
        title: "Local Snacks",
        image: "assets/images/srivilliputhur/snacks.jpg",
        text: "Crunchy homemade savory treats."
      }
    ]
  }
},
  {
  id: "Thanjavur",
  name: "Thanjavur",
  heroImage: "assets/images/thanjavur/hero.jpg",
  description:
    "The cultural capital of Tamil Nadu — land of the magnificent Brihadeeswarar Temple, classical arts, bronze sculptures, and Chola grandeur.",

  sections: {

    morning: [
      {
        title: "Brihadeeswarar Temple",
        image: "assets/images/thanjavur/big-temple.jpg",
        text: "UNESCO World Heritage monument built by Raja Raja Chola."
      },
      {
        title: "Temple Courtyard",
        image: "assets/images/thanjavur/courtyard.jpg",
        text: "Massive stone architecture glowing in morning light."
      },
      {
        title: "Sivaganga Park",
        image: "assets/images/thanjavur/sivaganga.jpg",
        text: "Relax near the temple tank."
      }
    ],

    afternoon: [
      {
        title: "Thanjavur Palace",
        image: "assets/images/thanjavur/palace.jpg",
        text: "Explore royal artifacts and Maratha-era history."
      },
      {
        title: "Art Gallery",
        image: "assets/images/thanjavur/art-gallery.jpg",
        text: "Bronze idols and ancient sculptures."
      },
      {
        title: "Saraswathi Mahal Library",
        image: "assets/images/thanjavur/library.jpg",
        text: "One of Asia’s oldest libraries."
      }
    ],

    evening: [
      {
        title: "Temple Sunset View",
        image: "assets/images/thanjavur/sunset.jpg",
        text: "Golden hues over the Big Temple."
      },
      {
        title: "Local Handicraft Shops",
        image: "assets/images/thanjavur/handicrafts.jpg",
        text: "Traditional Thanjavur paintings and dolls."
      },
      {
        title: "Cultural Performances",
        image: "assets/images/thanjavur/dance.jpg",
        text: "Classical Bharatanatyam and music recitals."
      }
    ],

    hidden: [
      {
        title: "Darasuram Temple",
        image: "assets/images/thanjavur/darasuram.jpg",
        text: "Airavatesvara Temple — another Chola masterpiece."
      },
      {
        title: "Swamimalai",
        image: "assets/images/thanjavur/swamimalai.jpg",
        text: "Famous for bronze sculpture making."
      },
      {
        title: "Grand Anaicut (Nearby)",
        image: "assets/images/thanjavur/kallanai.jpg",
        text: "Ancient Chola dam on the Cauvery."
      },
      {
        title: "Village Paddy Fields",
        image: "assets/images/thanjavur/paddy.jpg",
        text: "Lush green rice fields surrounding the delta."
      }
    ],

    stay: [
      {
        title: "Heritage Hotels",
        image: "assets/images/thanjavur/heritage.jpg",
        text: "Royal-style stays reflecting Chola history."
      },
      {
        title: "City Hotels",
        image: "assets/images/thanjavur/hotel.jpg",
        text: "Comfortable modern accommodations."
      },
      {
        title: "Budget Lodges",
        image: "assets/images/thanjavur/lodge.jpg",
        text: "Affordable pilgrim-friendly stays."
      }
    ],

    food: [
      {
        title: "Thanjavur Meals",
        image: "assets/images/thanjavur/meals.jpg",
        text: "Authentic delta-style vegetarian feast."
      },
      {
        title: "Puliyodarai",
        image: "assets/images/thanjavur/puliyodarai.jpg",
        text: "Traditional tamarind rice."
      },
      {
        title: "Sweet Poli",
        image: "assets/images/thanjavur/poli.jpg",
        text: "Delicious stuffed sweet flatbread."
      },
      {
        title: "Filter Coffee",
        image: "assets/images/thanjavur/coffee.jpg",
        text: "Classic strong South Indian coffee."
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
        { title: "Bear's Cave", image: "assets/images/yercaud/cave.jpg", text: "A historic cave located near the Norton’s Bungalow." },
        { title: "Emerald View Point", image: "assets/images/yercaud/emerald.jpg", text: "A hidden viewpoint offering stunning vistas of the emerald valleys." }
      ],
      stay: [
        { title: "Hilltop Resorts", image: "assets/images/yercaud/resort.jpg", text: "Stay in luxury villas overlooking the coffee estates." },
        { title: "Eco-Friendly Cottages", image: "assets/images/yercaud/cottage.jpg", text: "Nature-centric stays deep within the woods." },
        { title: "Budget Homestays", image: "assets/images/yercaud/homestay.jpg", text: "Affordable local hospitality with home-cooked meals." }
      ],
      food: [
        { title: "Fresh Coffee", image: "assets/images/yercaud/coffee-drink.jpg", text: "Strong, aromatic brews from locally grown beans." },
        { title: "Spiced Corn", image: "assets/images/yercaud/corn.jpg", text: "A popular lake-side snack for the chilly weather." },
        { title: "Homemade Jams", image: "assets/images/yercaud/jam.jpg", text: "Delicious jams made from locally grown fruits." },
        { title: "Organic Spices", image: "assets/images/yercaud/spices.jpg", text: "Buy fresh, organic pepper and cardamom from local farmers." },
        { title: "Shevaroy Honey", image: "assets/images/yercaud/honey.jpg", text: "Pure honey harvested from the wildflowers of the Shevaroy hills." }
      ]
    }
  },
  {
    id: "madurai",
    name: "Madurai",
    heroImage: "assets/images/Madurai/madurai.jpg",
    description: "Experience the soul of Tamil Nadu where history is etched in stone and spirituality fills the air.",
        
    sections: {
      morning: [
        {
          title: "Meenakshi Temple",
          image: "assets/images/Madurai/Madurai.jpg",
          text: "Marvel at the towering gopurams adorned with thousands of colorful deities."
        },
        {
          title: "Thirumalai Nayakkar Palace",
          image: "assets/images/Madurai/Thirumalai Nayakar Palace madurai.jfif",
          text: "Explore grand Indo-Saracenic architecture and massive pillared halls."
        },
        {
          title: "Temple Architecture Walk",
          image: "assets/images/Madurai/Madurai architecture.jfif",
          text: "Discover intricate carvings and stories etched in stone."
        }
      ],

      afternoon: [
        {
          title: "Gandhi Memorial Museum",
          image: "assets/images/Madurai/gandhi memorial museum madurai.jpg",
          text: "A deep dive into India's freedom struggle heritage."
        },
        {
          title: "Teppakulam Temple Tank",
          image: "assets/images/Madurai/teppakulum.jfif",
          text: "A massive sacred water tank, beautiful during festivals."
        }
      ],

      evening: [
        {
          title: "Evening Aarti",
          image: "assets/images/Madurai/Aarti madurai.jpg",
          text: "Witness the mesmerizing lamp ceremony as thousands gather in devotion."
        },
        {
          title: "Street Food Trail",
          image: "assets/images/Madurai/Street Food madurai.avif",
          text: "Explore bustling markets and taste authentic Madurai delicacies."
        }
      ],

      hidden: [
        {
          title: "Meenakshi Amman Temple",
          image: "assets/images/Madurai/Madurai Meenakshi temple.jpg",
          text: "2,500 years of devotion and artistry in the heart of the city."
        },
        {
          title: "Thirumalai Nayakkar Palace",
          image: "assets/images/Madurai/Thirumalai Nayakar Palace madurai.jfif",
          text: "A masterpiece of 17th-century architectural grandeur."
        },
        {
          title: "Gandhi Memorial Museum",
          image: "assets/images/Madurai/gandhi memorial museum madurai.jpg",
          text: "A deep dive into India's freedom struggle heritage."
        },
        {
          title: "Teppakulam Temple Tank",
          image: "assets/images/Madurai/teppakulum.jfif",
          text: "A massive sacred water tank, beautiful during festivals."
        },
        {
          title: "Alagar Kovil",
          image: "assets/images/Madurai/Alagar Kovil.jpg",
          text: "A stunning hill temple surrounded by lush, peaceful forests."
        }
      ],

      stay: [
        {
          title: "Heritage Mansions",
          image: "assets/images/Madurai/Gateway hotel madurai.jpeg",
          text: "Restored Chettinad mansions with intricate woodwork."
        },
        {
          title: "Temple Stays",
          image: "assets/images/Madurai/Heritage madurai hotel.jpg",
          text: "Traditional homes offering authentic spiritual immersion."
        },
        {
          title: "Boutique Hotels",
          image: "assets/images/Madurai/Courtyard by Mariott Madurai.jpg",
          text: "Comfortable modern stays near the city center."
        }
      ],

      food: [
        {
          title: "Jigarthanda",
          image: "assets/images/Madurai/Jigarthanda.jpg",
          text: "The iconic 'Heart Cooler' drink made with almond gum and sarsaparilla."
        },
        {
          title: "Parotta & Salna",
          image: "assets/images/Madurai/Parotta.jpg",
          text: "World-famous flaky layered bread served with spicy, flavorful gravy."
        },
        {
          title: "Temple Prasadam",
          image: "assets/images/Madurai/Prasadam.jfif",
          text: "Sacred sweet pongal and puliyodarai offered with divine blessings."
        },
        {
          title: "Sungudi Sarees",
          image: "assets/images/Madurai/sungudi sarees.jfif",
          text: "Handcrafted tie-dye sarees known for their vibrant colors and tradition."
        },
        {
          title: "Madurai Malli",
          image: "assets/images/Madurai/madurai malli.jfif",
          text: "The GI-tagged jasmine flowers with a fragrance that lasts for days."
        },
        {
          title: "Bronze Artifacts",
          image: "assets/images/Madurai/madurai bronze statue.webp",
          text: "Intricate handcrafted idols made by traditional temple artisans."
        }
      ]
    }
  },
  {
    id: "kanchipuram",
    name: "Kanchipuram",
    heroImage: "Assets/Images/kanchipuram.jpg",
    description: "A sacred landscape where the rhythmic clack of silk looms meets the eternal echoes of Vedic chants.",
    sections: {
      morning: [
        {
          title: "🕉️ Ekambareswarar Temple",
          image: "Images/ekambareswarar.jpg",
          text: "Visit the Earth element temple and the 3,500-year-old mango tree in the morning light."
        },
        {
          title: "🛕 Kamakshi Amman",
          image: "Images/kamakshi-amman.jpg",
          text: "Seek blessings at the ultimate seat of Shakti in one of the city's most spiritually vibrant shrines."
        },
        {
          title: "📜 Vaikunda Perumal",
          image: "Images/vaikunda-perumal.jpg",
          text: "Explore the 8th-century Pallava inscriptions and unique three-tiered sanctum at dawn."
        }
      ],
      afternoon: [
        {
          title: "🧵 Silk Weaving Centers",
          image: "Images/silk-weaving.jpg",
          text: "Watch master weavers transform pure mulberry silk and zari into world-famous Kanchipuram sarees."
        },
        {
          title: "🎨 Kanchi Kudil",
          image: "Images/kanchi-kudil.jpg",
          text: "Step back in time at this heritage house showcasing the traditional lifestyle of old Kanchipuram."
        }
      ],
      evening: [
        {
          title: "🌆 Kailasanathar Temple",
          image: "Images/kailasanathar-sunset.jpg",
          text: "Experience the sunset glow against the oldest sandstone structure in the city."
        },
        {
          title: "🕯️ Temple Corridors",
          image: "Images/evening-aarati.jpg",
          text: "Walk through the illuminated pillars as the evening bells signal the start of night rituals."
        }
      ],
      hidden: [
        {
          title: "🐘 Varadharaja Perumal",
          image: "Images/varadharaja-perumal.jpg",
          text: "Marvel at the 100-pillar hall and the intricately carved monolithic chain of this Vishnu temple."
        },
        {
          title: "🐦 Vedanthangal Sanctuary",
          image: "Images/vedanthangal.jpg",
          text: "A short drive to one of India's oldest bird sanctuaries, home to thousands of migratory species."
        },
        {
          title: "🛡️ Alamparai Fort",
          image: "Images/alamparai-fort.jpg",
          text: "The ruins of a Mughal-era fort overlooking the sea, offering a quiet escape into history."
        },
        {
          title: "🏺 Devarajaswamy Temple",
          image: "Images/devarajaswamy.jpg",
          text: "Explore the massive temple tank and the legendary Athi Varadar wooden idol kept underwater."
        }
      ],
      stay: [
        {
          title: "🏨 Regency Kanchipuram",
          image: "Images/grt-regency.jpg",
          text: "Modern luxury situated in the heart of the temple district."
        },
        {
          title: "🏡 Babylon Resort",
          image: "Images/babylon-resort.jpg",
          text: "A serene getaway offering peaceful surroundings away from the city bustle."
        }
      ],
      food: [
        {
          title: "🍲 Kanchipuram Idli",
          image: "Images/kanchi-idli.jpg",
          text: "Distinctly spiced with pepper, ginger, and cumin, steamed in dried Mantharai leaves."
        },
        {
          title: "🍚 Temple Pongal",
          image: "Images/sakkarai-pongal.jpg",
          text: "Rich, jaggery-infused sweet rice prepared in traditional brass pots."
        },
        {
          title: "👗 Handwoven Silks",
          image: "Images/silk-saree.jpg",
          text: "Invest in a legendary Kanchipuram silk saree with pure gold zari work."
        },
        {
          title: "🛍️ Silk Accessories",
          image: "Images/kanchi-accessories.jpg",
          text: "Traditional silk clutches and scarves that carry the city's weaving heritage."
        },
        {
            title: "🪘 Brass Artifacts",
            image: "Images/brass-idols.jpg",
            text: "Exquisitely crafted temple lamps and divine idols from local metal smiths."
        }
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
        { title: "New Jerusalem Church", image: "assets/images/tharangambadi/church.jpg", text: "A beautiful 18th-century church with unique colonial architecture." },
        { title: "Old Lighthouse", image: "assets/images/tharangambadi/lighthouse.jpg", text: "Climb to the top for panoramic views of the coastline." }
      ],
      afternoon: [
        { title: "Maritime Museum", image: "assets/images/tharangambadi/museum.jpg", text: "Discover Danish artifacts and old navigational tools." },
        { title: "Ziegenbalg House", image: "assets/images/tharangambadi/printing.jpg", text: "Visit the home of the man who brought the first printing press to India." },
        { title: "Coromandel Coastline", image: "assets/images/tharangambadi/coast.jpg", text: "Take a leisurely walk along the serene beaches and watch local fishermen at work." },
      ],
      evening: [
        { title: "Tranquebar Beach", image: "assets/images/tharangambadi/beach.jpg", text: "Walk along the ozone-rich shore by the ancient fort walls." },
        { title: "Masilamani Nathar Temple", image: "assets/images/tharangambadi/temple.jpg", text: "A 700-year-old temple partially claimed by the sea." },
        { title: "Evening Market", image: "assets/images/tharangambadi/market.jpg", text: "Browse stalls selling local handicrafts and fresh seafood." }
      ],
      hidden: [
        { title: "The Danish Cemetery", image: "assets/images/tharangambadi/cemetery.jpg", text: "A silent record of the Danish officers and traders from the 1700s." },
        { title: "Sundaram Beach", image: "assets/images/tharangambadi/sundaram.jpg", text: "A quiet, less-visited beach perfect for solitude and sunset views." },
        { title: "Coromandel Crafts", image: "assets/images/tharangambadi/crafts.jpg", text: "Handmade seashell jewelry and coir products by local artisans." },
      ],
      stay: [
        { title: "Bungalow on the Beach", image: "assets/images/tharangambadi/stay.jpg", text: "A heritage stay offering high ceilings and sea views." },
        { title: "Tranquebar Heritage Hotel", image: "assets/images/tharangambadi/heritage-hotel.jpg", text: "A restored Danish mansion with colonial charm." },
        { title: "Eco-Friendly Cottages", image: "assets/images/tharangambadi/cottage.jpg", text: "Sustainable stays surrounded by nature and history." }
      ],
      food: [
        { title: "Fresh Catch Seafood", image: "assets/images/tharangambadi/seafood.jpg", text: "Fisherman-style curries made with the day's fresh catch." },
        { title: "Danish Pastries", image: "assets/images/tharangambadi/pastry.jpg", text: "Try the local twist on classic Danish baked goods at the town bakery." },
        { title: "Coastal Spices", image: "assets/images/tharangambadi/spices.jpg", text: "Buy aromatic blends of spices that define the coastal cuisine." }
      ]
    }
  },
  {
    id: "kanyakumari",
    name: "Kanyakumari",
    heroImage: "Assets/Images/kanyakumari.jpg",
    description: "The southernmost tip of India where the Arabian Sea, Bay of Bengal, and Indian Ocean merge into a single horizon.",
    sections: {
      morning: [
        {
          title: "🌅 Triveni Sangam",
          image: "Images/kanyakumari-sunrise.jpg",
          text: "Watch the magical sunrise where three oceans meet in a symphony of color."
        },
        {
          title: "🛕 Kumari Amman Temple",
          image: "Images/kumari-amman.jpg",
          text: "An ancient seaside sanctuary dedicated to the virgin Goddess Kanyakumari."
        },
        {
          title: "⛴️ Vivekananda Rock",
          image: "Images/vivekananda-rock.jpg",
          text: "A short ferry ride to the sacred stone where Swami Vivekananda meditated."
        }
      ],
      afternoon: [
        {
          title: "🏰 Padmanabhapuram Palace",
          image: "Images/padmanabhapuram.jpg",
          text: "The largest wooden palace in Asia, showcasing intricate Travancore craft."
        },
        {
          title: "🌉 Mathur Aqueduct",
          image: "Images/mathur-aqueduct.jpg",
          text: "Walk across the tallest trough bridge in Asia for breathtaking valley views."
        }
      ],
      evening: [
        {
          title: "🗿 Thiruvalluvar Statue",
          image: "Images/thiruvalluvar.jpg",
          text: "A 133-foot stone masterpiece dedicated to the immortal Tamil poet and philosopher."
        },
        {
          title: "⛪ Our Lady of Ransom",
          image: "Images/ransom-church.jpg",
          text: "A breathtaking white Gothic-style church standing in contrast against the deep blue sea."
        }
      ],
      hidden: [
        {
          title: "🏛️ Gandhi Memorial",
          image: "Images/gandhi-memorial.jpg",
          text: "Architectural marvel where the sun's rays touch the exact spot of the Mahatma's ashes every Oct 2nd."
        },
        {
          title: "🔭 Vattakottai Fort",
          image: "Images/vattakottai-fort.jpg",
          text: "An 18th-century granite fort providing a rare view of both the ocean and the Western Ghats."
        },
        {
          title: "🪨 Chitharal Jain Monuments",
          image: "Images/chitharal.jpg",
          text: "Ancient rock-cut sculptures and a temple perched on a hill with a view of the palm-fringed valley."
        },
        {
          title: "🌳 Udayagiri Fort",
          image: "Images/udayagiri.jpg",
          text: "Explore the ruins of a massive fort that now houses a biodiversity park and an aquarium."
        }
      ],
      stay: [
        {
          title: "🌊 Annai Resorts",
          image: "Images/annai-resort.jpg",
          text: "Luxury villas overlooking the confluence of the three seas."
        },
        {
          title: "🏨 Sparsa Resort",
          image: "Images/sparsh-resort.jpg",
          text: "Eco-friendly boutique stay with panoramic sunset views."
        }
      ],
      food: [
        {
          title: "🐟 Nanjil Fish Curry",
          image: "Images/fish-curry.jpg",
          text: "Spicy, coconut-infused curry using catch-of-the-day fish."
        },
        {
          title: "🫓 Kothu Parotta",
          image: "Images/kothu-parotta.jpg",
          text: "Shredded flatbread tossed with local spices, eggs, and a flavorful gravy."
        },
        {
          title: "🍌 Nendran Chips",
          image: "Images/banana-chips.jpg",
          text: "Thinly sliced local bananas fried in pure coconut oil."
        },
        {
          title: "🧶 Palm Leaf Crafts",
          image: "Images/palm-craft.jpg",
          text: "Traditional hand-woven baskets and intricate hats made from native palm leaves."
        },
        {
          title: "🐚 Seashell Artifacts",
          image: "Images/seashell-craft.jpg",
          text: "Intricately carved conchs and mirrors handcrafted by local coastal artisans."
        },
        {
          title: "⏳ Three-Colored Sand",
          image: "Images/colored-sand.jpg",
          text: "Natural sand souvenirs featuring the distinct hues of the three meeting oceans."
        }   
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
        { title: "Athangudi Tile Factory", image: "assets/images/karaikudi/tiles.jpg", text: "Watch artisans create handmade, eco-friendly geometric tiles." },
        { title: "Local Market", image: "assets/images/karaikudi/market.jpg", text: "Experience the vibrant morning market with fresh produce and spices." }
      ],
      afternoon: [
        { title: "Kandukathan Palace", image: "assets/images/karaikudi/palace.jpg", text: "A visual feast of architectural grandeur and vintage luxury." },
        { title: "Antiques Market", image: "assets/images/karaikudi/antiques.jpg", text: "Browse through rare Tanjore paintings, old brass, and enamelware." },
        { title: "Chettinad Museum", image: "assets/images/karaikudi/museum.jpg", text: "Discover the history and culture of the Chettiar community." }
      ],
      evening: [
        { title: "Koppudai Nayaki Amman Temple", image: "assets/images/karaikudi/temple.jpg", text: "Experience the spiritual energy of this historic local temple." },
        { title: "Handloom Weaving Centre", image: "assets/images/karaikudi/weaving.jpg", text: "See how the famous Kandangi cotton sarees are woven." },
        { title: "Evening Street Food", image: "assets/images/karaikudi/street-food.jpg", text: "Savor local snacks like murukku and kara sev from street vendors." }
      ],
      hidden: [
        { title: "Thirumayam Fort", image: "assets/images/karaikudi/fort.jpg", text: "A 17th-century rock fortress with stunning vantage points." },
        { title: "Sittanavasal Caves", image: "assets/images/karaikudi/caves.jpg", text: "Ancient Jain rock-cut caves with exquisite frescoes." },
        { title: "Pillayarpatti Temple", image: "assets/images/karaikudi/pillayarpatti.jpg", text: "A unique rock-cut temple dedicated to Lord Ganesha." },
        { title: "Karaikudi Lake", image: "assets/images/karaikudi/lake.jpg", text: "A serene spot for birdwatching and sunset views." }
      ],
      stay: [
        { title: "Heritage Palatial Stays", image: "assets/images/karaikudi/stay.jpg", text: "Live like a Zamindar in restored Chettiar mansions." },
        { title: "Boutique Hotels", image: "assets/images/karaikudi/boutique.jpg", text: "Modern comforts with traditional aesthetics." },
        { title: "Farm Stays", image: "assets/images/karaikudi/farm.jpg", text: "Stay on a working farm and learn about traditional agriculture." }
      ],
      food: [
        { title: "Chettinad Chicken", image: "assets/images/karaikudi/food.jpg", text: "Taste the authentic, spice-rich flavors of world-famous cuisine." },
        { title: "Kuzhi Paniyaram", image: "assets/images/karaikudi/snack.jpg", text: "Savory rice-lentil dumplings served with spicy chutneys." },
        { title: "Karaikudi Mutton", image: "assets/images/karaikudi/mutton.jpg", text: "A fiery, slow-cooked mutton dish that’s a local favorite." },
        { title: "Chettinad Pickles", image: "assets/images/karaikudi/pickle.jpg", text: "Spicy, tangy pickles made from local fruits and vegetables." },
        { title: "Kandangi Sarees", image: "assets/images/karaikudi/saree.jpg", text: "Handwoven cotton sarees with vibrant colors and traditional patterns." },
        { title: "Chettinad Spices", image: "assets/images/karaikudi/spices.jpg", text: "Buy aromatic blends of spices that define the region’s cuisine." }
      ]
    }
  },
  {
    id: "mahabalipuram",
    name: "Mahabalipuram",
    heroImage: "Assets/Images/mahabalipuram.jpg",
    description: "A timeless gallery of rock-cut marvels and monolithic whispers carved along the shores of the Coromandel Coast.",
    sections: {
      morning: [
        {
          title: "🌅 Shore Temple",
          image: "Images/shore-temple-sunrise.jpg",
          text: "Witness the first rays of the sun hitting the granite spires of this 8th-century structural masterpiece."
        },
        {
          title: "🧘 Beach Meditation",
          image: "Images/beach-meditation.jpg",
          text: "Find peace on the silver sands as the Bay of Bengal waves provide a rhythmic morning chant."
        },
        {
          title: "🐚 Kadumbadi Village",
          image: "Images/fishing-village.jpg",
          text: "A quiet stroll through the local fishing hamlets to see the day's first catch coming in."
        }
      ],
      afternoon: [
        {
          title: "🎨 Arjuna's Penance",
          image: "Images/arjun-penance.jpg",
          text: "Study the world’s largest open-air bas-relief, featuring life-sized elephants and celestial beings."
        },
        {
          title: "⛰️ Krishna’s Butterball",
          image: "Images/krishna-butterball.jpg",
          text: "Marvel at the massive natural boulder balanced precariously on a smooth hill slope."
        }
      ],
      evening: [
        {
          title: "🏮 Old Lighthouse",
          image: "Images/lighthouse-view.jpg",
          text: "Climb the historic rock-cut lighthouse for a golden hour view of the entire heritage town."
        },
        {
          title: "🌊 Promenade Walk",
          image: "Images/shore-beach.jpg",
          text: "Feel the cool salt spray as you walk the shoreline while the stone temples glow in the twilight."
        }
      ],
      hidden: [
        {
          title: "🗿 Five Rathas",
          image: "Images/five-rathas.jpg",
          text: "Monolithic temples carved out of single pieces of granite, shaped like ceremonial chariots."
        },
        {
          title: "🏛️ Varaha Cave",
          image: "Images/varaha-cave.jpg",
          text: "An exquisite rock-cut cave temple showcasing the peak of Pallava era craftsmanship."
        },
        {
          title: "🐅 Tiger Cave",
          image: "Images/tiger-cave.jpg",
          text: "An open-air shrine by the sea featuring a ring of carved tiger heads."
        },
        {
          title: "🐚 Seashell Museum",
          image: "Images/seashell-museum.jpg",
          text: "India’s largest seashell museum, housing thousands of rare and exotic oceanic specimens."
        }
      ],
      stay: [
        {
          title: "🏨 Radisson Blu",
          image: "Images/radisson.jpg",
          text: "A sprawling luxury resort with one of Asia's largest meandering pools."
        },
        {
          title: "🏡 Chariot Beach Resort",
          image: "Images/chariot-resort.jpg",
          text: "Eco-conscious luxury cabins nestled right where the sand meets the grass."
        }
      ],
      food: [
        {
          title: "🦞 Grilled Seafood",
          image: "Images/grilled-prawns.jpg",
          text: "Succulent butter-garlic prawns and lobsters caught fresh from the coast."
        },
        {
          title: "🥞 Traveler's Crepes",
          image: "Images/pancakes.jpg",
          text: "Famous beachfront cafe specials—banana and honey crepes loved by global tourists."
        },
        {
          title: "☕ Degree Coffee",
          image: "Images/filter-coffee.jpg",
          text: "Authentic, frothy South Indian filter coffee served in traditional brassware."
        },
        {
          title: "🐚 Sea-Glass Jewelry",
          image: "Images/seashell-mirror.jpg",
          text: "Hand-crafted necklaces and mirrors made from locally sourced sea glass and shells."
        },
        {
          title: "🎨 Batik Prints",
          image: "Images/pattachitra.jpg",
          text: "Vibrant, wax-dyed clothing and wall hangings found in the artisanal town markets."
        },
        {
          title: "🔨 Granite Sculptures",
          image: "Images/stone-statue.jpg",
          text: "Authentic miniature stone carvings made by descendants of the Pallava sculptors."
        }
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
        { title: "Nagore Dargah", image: "assets/images/nagapattinam/dargah.jpg", text: "A 500-year-old spiritual center and architectural marvel." },
        { title: "Kayarohanaswami Temple", image: "assets/images/nagapattinam/temple2.jpg", text: "An ancient Shiva temple with a unique blend of Dravidian and Chola architecture." }
      ],
      afternoon: [
        { title: "Nagapattinam Museum", image: "assets/images/nagapattinam/museum.jpg", text: "View bronze idols and artifacts from the Chola period." },
        { title: "Salt Pans", image: "assets/images/nagapattinam/salt.jpg", text: "Witness the unique landscape of coastal salt production." },
        { title: "Fishing Harbor", image: "assets/images/nagapattinam/harbor.jpg", text: "Experience the bustling activity of local fishermen and their colorful boats." }
      ],
      evening: [
        { title: "Nagapattinam Beach", image: "assets/images/nagapattinam/beach.jpg", text: "A quiet evening walk along the Bay of Bengal." },
        { title: "Soundararaja Perumal", image: "assets/images/nagapattinam/temple.jpg", text: "An ancient Vishnu temple with a massive towering Gopuram." },
        { title: "Evening Aarti", image: "assets/images/nagapattinam/aarti.jpg", text: "Experience the spiritual energy of the evening rituals at the temples." }
      ],
      hidden: [
        { title: "Point Calimere", image: "assets/images/nagapattinam/wildlife.jpg", text: "A sanctuary for blackbucks and migratory flamingos." },
        { title: "Poompuhar Beach", image: "assets/images/nagapattinam/poompuhar.jpg", text: "A serene beach with a rich history as an ancient port city." },
        { title: "Sikkal Singaravelan Temple", image: "assets/images/nagapattinam/sikkal.jpg", text: "A unique temple where Lord Murugan is worshipped in both his fierce and benevolent forms." },
        { title: "Tharangampadi Lighthouse", image: "assets/images/nagapattinam/lighthouse.jpg", text: "Climb the historic lighthouse for panoramic views of the coastline." }
      ],
      stay: [
        { title: "Beachside Lodges", image: "assets/images/nagapattinam/stay.jpg", text: "Simple and accessible stays close to the spiritual sites." },
        { title: "Heritage Hotels", image: "assets/images/nagapattinam/heritage.jpg", text: "Experience traditional hospitality in restored colonial-era buildings." },
        { title: "Eco-Resorts", image: "assets/images/nagapattinam/eco-resort.jpg", text: "Sustainable stays surrounded by nature and local culture." }

      ],
      food: [
        { title: "Dry Fish Curries", image: "assets/images/nagapattinam/dryfish.jpg", text: "A local specialty known for its intense and unique flavors." },
        { title: "Karaikudi Mutton", image: "assets/images/nagapattinam/mutton.jpg", text: "A fiery, slow-cooked mutton dish that’s a local favorite." },
        { title: "Prawn Masala", image: "assets/images/nagapattinam/prawn.jpg", text: "Fresh prawns cooked in a spicy, tangy masala sauce." },
        { title: "Thalapakatti Biryani", image: "assets/images/nagapattinam/biryani.jpg", text: "A world-famous biryani known for its unique blend of spices and flavors." },
        { title: "Kadalai Mittai", image: "assets/images/nagapattinam/peanut-candy.jpg", text: "A sweet treat made from roasted peanuts and jaggery, perfect for a quick energy boost." },
        { title: "Seashell Pickles", image: "assets/images/nagapattinam/seashell-pickle.jpg", text: "A unique local delicacy made from the abundant seashells found along the coast." }
      ]
    }
  },
  {
    id: "pondicherry",
    name: "Pondicherry",
    heroImage: "Assets/Images/pondicherry.jpg",
    description: "Where French elegance meets Indian soul amidst mustard-yellow walls and bougainvillea-shaded streets.",
    sections: {
      morning: [
        {
          title: "🧘 Matrimandir",
          image: "Images/auroville-matrimandir.jpg",
          text: "Begin with a silent meditation at the golden sphere of the 'City of Dawn' in Auroville."
        },
        {
          title: "🥖 White Town Walk",
          image: "Images/french-bakery.jpg",
          text: "Enjoy fresh croissants and café au lait in the charming cobbled streets of the French Quarter."
        },
        {
          title: "🌊 Rock Beach",
          image: "Images/promenade-morning.jpg",
          text: "A morning stroll along the 1.5km promenade as the spray of the Bay of Bengal hits the rocks."
        }
      ],
      afternoon: [
        {
          title: "🛶 Chunnambar Boat House",
          image: "Images/chunnambar.jpg",
          text: "Sail through the backwaters to reach the pristine white sands of Paradise Beach."
        },
        {
          title: "🏛️ Pondicherry Museum",
          image: "Images/pondy-museum.jpg",
          text: "Explore rare bronze statues and artifacts from the Arikamedu Roman settlement."
        }
      ],
      evening: [
        {
          title: "💡 Goubert Avenue",
          image: "Images/french-quarter-night.jpg",
          text: "Experience the transformation of the promenade into a vibrant, vehicle-free walking zone."
        },
        {
          title: "🕯️ Sri Aurobindo Ashram",
          image: "Images/auro-ashram.jpg",
          text: "Find quietude and spiritual reflection at the floral-adorned Samadhi of the Mother and Sri Aurobindo."
        }
      ],
      hidden: [
        {
          title: "⛪ Immaculate Conception",
          image: "Images/immaculate-conception.jpg",
          text: "A stunning 300-year-old cathedral featuring majestic blue and white Baroque architecture."
        },
        {
          title: "🐘 Manakula Vinayagar",
          image: "Images/manakula-vinayagar.jpg",
          text: "An ancient Ganesha temple famous for its golden chariot and vibrant ceiling paintings."
        },
        {
          title: "🗼 The New Lighthouse",
          image: "Images/light-house.jpg",
          text: "Get a bird's-eye view of the coastline and the grid-patterned streets of the town."
        },
        {
          title: "🎨 Bharathi Park",
          image: "Images/art-gallery.jpg",
          text: "Visit the 'Aayi Mandapam', a brilliant white monument at the heart of the Government Park."
        }
      ],
      stay: [
        {
          title: "🏨 Palais de Mahe",
          image: "Images/palais-de-mahe.jpg",
          text: "A French-style boutique hotel with grand arches and yellow ochre terraces."
        },
        {
          title: "🏡 Radisson Resort",
          image: "Images/radisson-pondy.jpg",
          text: "Luxury villas by the sea with direct access to private beach stretches."
        }
      ],
      food: [
        {
          title: "🍕 Wood-Fired Pizza",
          image: "Images/wood-fired-pizza.jpg",
          text: "Authentic Italian pizzas crafted by the global residents of Auroville."
        },
        {
          title: "🥘 Pondy Creole",
          image: "Images/creole-cuisine.jpg",
          text: "A unique fusion of French culinary techniques with South Indian spices."
        },
        {
          title: "🍦 Artisanal Gelato",
          image: "Images/gelato.jpg",
          text: "Refreshing, hand-churned fruit gelatos perfect for the tropical afternoon."
        },
        {
          title: "🕯️ Auroville Candles",
          image: "Images/handmade-candles.jpg",
          text: "Exquisite, scented, handmade candles crafted by local Auroville artisans."
        },
        {
          title: "📝 Handmade Paper",
          image: "Images/handmade-paper.jpg",
          text: "Premium quality eco-friendly stationery from the Sri Aurobindo Paper Factory."
        },
        {
          title: "👗 Boutique Apparel",
          image: "Images/pondy-boutique.jpg",
          text: "Designer linens, leather goods, and high-fashion cotton found in the French Quarter."
        }
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
        { title: "Thillai Kali Amman", image: "assets/images/chidambaram/kali.jpg", text: "A powerful temple dedicated to the guardian goddess of the town." },
        { title: "Sthala Vriksha", image: "assets/images/chidambaram/vriksha.jpg", text: "The sacred fig tree believed to be the original site of Shiva's cosmic dance." }
      ],
      afternoon: [
        { title: "Pichavaram Mangroves", image: "assets/images/chidambaram/mangrove.jpg", text: "The world's second-largest mangrove forest, accessible by boat." },
        { title: "Annamalai University", image: "assets/images/chidambaram/uni.jpg", text: "Explore the sprawling, historic campus of this famed institution." },
        { title: "Sankara Mutt", image: "assets/images/chidambaram/mutt.jpg", text: "A serene spiritual center founded by Adi Shankaracharya." }
      ],
      evening: [
        { title: "Temple Tank", image: "assets/images/chidambaram/tank.jpg", text: "Watch the rituals and chants reflect in the sacred waters." },
        { title: "Shopping for Silk", image: "assets/images/chidambaram/silk.jpg", text: "Chidambaram is known for its exquisite traditional cotton and silk." },
        { title: "Evening Aarti", image: "assets/images/chidambaram/aarti.jpg", text: "Experience the spiritual energy of the evening rituals at the temple." }
      ],
      hidden: [
        { title: "Vaitheeswaran Koil", image: "assets/images/chidambaram/nadi.jpg", text: "Located nearby, famous for its ancient Nadi Astrology palm leaves." },
        { title: "Thillai Nataraja Dance Festival", image: "assets/images/chidambaram/dance.jpg", text: "If visiting in December, witness the world-renowned classical dance festival held in the temple." },
        { title: "Chidambaram Market", image: "assets/images/chidambaram/market.jpg", text: "A bustling local market where you can find everything from fresh produce to traditional handicrafts." },
         { title: "Sthala Vriksha", image: "assets/images/chidambaram/vriksha.jpg", text: "The sacred fig tree believed to be the original site of Shiva's cosmic dance." }
      ],
      stay: [
        { title: "Spiritual Retreats", image: "assets/images/chidambaram/retreat.jpg", text: "Traditional lodges that offer a quiet, meditative atmosphere." },
        { title: "Heritage Hotels", image: "assets/images/chidambaram/hotel.jpg", text: "Experience local hospitality in charming, heritage-style accommodations." },
        { title: "Budget Stays", image: "assets/images/chidambaram/budget.jpg", text: "Affordable guesthouses and lodges for travelers on a budget." }
      ],
      food: [
        { title: "Temple Prasadam", image: "assets/images/chidambaram/food.jpg", text: "Taste the sacred Pongal and Tamarind rice served in the temple." },
        { title: "South Indian Thali", image: "assets/images/chidambaram/thali.jpg", text: "A traditional meal served on a banana leaf with a variety of dishes." },
        { title: "Filter Coffee", image: "assets/images/chidambaram/coffee.jpg", text: "Enjoy a cup of strong, aromatic South Indian filter coffee." },
        { title: "Local Sweets", image: "assets/images/chidambaram/sweets.jpg", text: "Try traditional sweets like Mysore Pak and Laddu from local sweet shops." },
        { title: "Street Food", image: "assets/images/chidambaram/street-food.jpg", text: "Sample local street food like Vada, Samosa, and Pani Puri from vendors around the temple." },
        { title: "Handicrafts", image: "assets/images/chidambaram/handicrafts.jpg", text: "Buy traditional handicrafts and souvenirs made by local artisans." }
      ]
    }
  },
  {
    id: "rameswaram",
    name: "Rameswaram",
    heroImage: "Assets/Images/rameswaram.jpg",
    description: "The island of divine legends, majestic corridors, and the bridge that connects the soul to the sea.",
    sections: {
      morning: [
        {
          title: "🌅 Agni Theertham",
          image: "Images/agni-theertham.jpg",
          text: "Begin with a holy dip at sunrise in the calm, sacred waters of the Palk Strait."
        },
        {
          title: "🕉️ Ramanathaswamy Temple",
          image: "Images/ramanathaswamy.jpg",
          text: "Witness the morning rituals within the world's longest and most majestic temple corridor."
        },
        {
          title: "🏺 22 Holy Theerthams",
          image: "Images/holy-wells.jpg",
          text: "A spiritual cleansing ritual through 22 sacred wells, each with water of a different temperature and taste."
        }
      ],
      afternoon: [
        {
          title: "🚂 Pamban Bridge",
          image: "Images/pamban-bridge.jpg",
          text: "Marvel at the century-old engineering feat connecting the island to mainland India over the blue sea."
        },
        {
          title: "🚀 Kalam Memorial",
          image: "Images/kalam-house.jpg",
          text: "Explore the life and legacy of India's 'Missile Man' and former President, Dr. APJ Abdul Kalam."
        }
      ],
      evening: [
        {
          title: "🏹 Dhanushkodi Tip",
          image: "Images/dhanushkodi-beach.jpg",
          text: "Watch the sunset where the Indian Ocean and Bay of Bengal meet at this hauntingly beautiful ghost town."
        },
        {
          title: "🌉 Indira Gandhi Bridge",
          image: "Images/road-bridge-sunset.jpg",
          text: "Enjoy a panoramic view of the vast blue ocean as the sky turns into a canvas of gold at dusk."
        }
      ],
      hidden: [
        {
          title: "🏚️ The Ghost Town",
          image: "Images/ghost-town.jpg",
          text: "Explore the atmospheric remains of a once-flourishing town reclaimed by the sea in 1964."
        },
        {
          title: "⛪ Dhanushkodi Church",
          image: "Images/dhanushkodi-church.jpg",
          text: "The hauntingly beautiful ruins of a stone church standing defiantly against the salty sea breeze."
        },
        {
          title: "⛰️ Gandhamadana Parvatham",
          image: "Images/gandhamadana.jpg",
          text: "The highest point on the island, housing the footprints of Lord Rama and a bird's-eye view of the coast."
        },
        {
          title: "🌊 Arichal Munai",
          image: "Images/arichal-munai.jpg",
          text: "The literal edge of the land where the mystical Rama Setu (Adam's Bridge) is said to begin."
        }
      ],
      stay: [
        {
          title: "🏨 Daivik Hotels",
          image: "Images/daivik.jpg",
          text: "A refined, themed stay designed specifically for the modern spiritual traveler."
        },
        {
          title: "🌊 Hyatt Place",
          image: "Images/hyatt-rameswaram.jpg",
          text: "Luxury and contemporary comfort located just minutes from the sacred temple complex."
        }
      ],
      food: [
        {
          title: "🐟 Island Fish Fry",
          image: "Images/fish-fry.jpg",
          text: "Freshly caught local seafood marinated in traditional, fiery Tamil spice blends."
        },
        {
          title: "🍚 Temple Puliyodharai",
          image: "Images/temple-puliyodharai.jpg",
          text: "The iconic, tangy tamarind rice served as sacred prasadam in the shadows of the gopurams."
        },
        {
          title: "🥥 Gulf Coconuts",
          image: "Images/tender-coconut.jpg",
          text: "Refreshing, sweet tender coconut water harvested from the island's vast coastal groves."
        },
        {
          title: "🐚 Sacred Conchs",
          image: "Images/conch.jpg",
          text: "Hand-engraved ritual shells and rare conchs sourced from the surrounding Gulf of Mannar."
        },
        {
          title: "📿 Temple Rudraksha",
          image: "Images/rudraksha.jpg",
          text: "Authentic prayer beads and spiritual artifacts blessed at the Ramanathaswamy shrine."
        },
        {
          title: "🏺 Handmade Artifacts",
          image: "Images/terracotta.jpg",
          text: "Traditional terracotta lamps and intricate palm leaf crafts created by local island artisans."
        }
      ]
    }
  },
  {
    id: "yelagiri",
    name: "Yelagiri",
    heroImage: "Assets/Images/yelagiri.jpg",
    description: "Escape to the clusters of green hills, winding hair-pin bends, and the tranquil pace of life in the clouds.",
    sections: {
      morning: [
        {
          title: "☁️ Punganur Lake",
          image: "Images/punganur-lake-morning.jpg",
          text: "Enjoy a peaceful morning walk or a pedal-boat ride on the mist-covered waters of this man-made lake."
        },
        {
          title: "🌸 Nature Park",
          image: "Images/nature-park.jpg",
          text: "Stroll through the floral walkways and the musical fountain garden as the mountain air wakes you up."
        },
        {
          title: "🧘 Swamimalai Dawn",
          image: "Images/swamimalai-dawn.jpg",
          text: "Begin an early climb to the highest point for a meditative view of the valley below."
        }
      ],
      afternoon: [
        {
          title: "🧗 Adventure Camp",
          image: "Images/adventure-camp.jpg",
          text: "Test your nerves with paragliding, rock climbing, and zip-lining across the rugged terrain."
        },
        {
          title: "🥾 Swamimalai Trek",
          image: "Images/trekking-trails.jpg",
          text: "Navigate the moderate forest trails to reach the peak for breathtaking panoramic vistas."
        }
      ],
      evening: [
        {
          title: "🔭 Vainu Bappu Observatory",
          image: "Images/telescope-obs.jpg",
          text: "Gaze at the stars from one of Asia's most famous astronomical centers as the night falls."
        },
        {
          title: "🌲 Sunset Point",
          image: "Images/sunset-point.jpg",
          text: "Watch the sky turn into a purple and orange canvas over the rolling green hills."
        }
      ],
      hidden: [
        {
          title: "🛕 Jalagandeeswarar Temple",
          image: "Images/jalagandeeswarar.jpg",
          text: "An ancient temple steeped in local mythology, featuring unique stone carvings and spiritual calm."
        },
        {
          title: "💦 Jalagamparai Falls",
          image: "Images/jalagamparai.jpg",
          text: "A seasonal waterfall where the Attaru river cascades down the rocky hill slopes into a natural pool."
        },
        {
          title: "🦜 Fundera Bird Park",
          image: "Images/bird-park.jpg",
          text: "An exotic walk-in aviary home to hundreds of rare birds from across the globe in a natural setting."
        },
        {
          title: "⛪ Velavan Temple",
          image: "Images/velavan-temple.jpg",
          text: "A hilltop shrine dedicated to Lord Murugan with a massive statue of Gadothgacha nearby."
        }
      ],
      stay: [
        {
          title: "🏡 Marigold Ridge",
          image: "Images/marigold-ridge.jpg",
          text: "Stay at the edge of the ridge with balconies opening directly into the mountain mist."
        },
        {
          title: "🏕️ Sterling Yelagiri",
          image: "Images/sterling-yelagiri.jpg",
          text: "A blend of luxury and nature with expansive gardens and stunning mountain views."
        }
      ],
      food: [
        {
          title: "🍗 Bamboo Chicken",
          image: "Images/bamboo-chicken.jpg",
          text: "Marinated chicken slow-cooked inside fresh bamboo stalks over a traditional wood fire."
        },
        {
          title: "🍯 Forest Honey",
          image: "Images/mountain-honey.jpg",
          text: "Raw, organic wild honey harvested by the local tribes, famous for its medicinal properties."
        },
        {
          title: "🍵 Spiced Mountain Tea",
          image: "Images/herbal-tea.jpg",
          text: "Hot, local tea infused with fresh ginger and spices to beat the hilltop chill."
        },
        {
          title: "🍯 Wild Honey Jars",
          image: "Images/honey-jars.jpg",
          text: "Pure, unadulterated honey jars—the most famous and healthy souvenir from these hills."
        },
        {
          title: "🏺 Mountain Jackfruit",
          image: "Images/jackfruit.jpg",
          text: "Freshly harvested, sweet hill jackfruit and seasonal hill-grown guavas from local orchards."
        },
        {
          title: "🧶 Bamboo Crafts",
          image: "Images/tribal-crafts.jpg",
          text: "Traditional bamboo baskets and decorative items handmade by local highland craftsmen."
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