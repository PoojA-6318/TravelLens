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
    id: "madurai",
    name: "Madurai",
    heroImage: "assets/images/Madurai/Madurai.jpg",
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
>>>>>>> bef314458ea2980ef995c0c515652e9365f107aa
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
>>>>>>> bef314458ea2980ef995c0c515652e9365f107aa
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