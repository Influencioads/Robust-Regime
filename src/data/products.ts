import { WeightVariant, colorVariant, Product } from './../types';
// import { supabase } from './../lib/supabase';
import { Weight } from 'lucide-react';

export const products: Product[] = [
  //racks
  {
    id: '1',
    name: "Robust-Power-Case-P493",
    category: "racks",
    price: 42900,
    priceRange: "₹42,900.00 – ₹43,900.00",
    images: [
      "/rr-webp/1.webp",
      "/rr-webp/2-rack.webp",
      "/rr-webp/Artboard 3.webp",
      "/rr-webp/Artboard 5.webp",
      "/rr-webp/Artboard 6.webp",
      "/rr-webp/10.webp"
      
    ],
    description: "Built for serious lifters, the Robust Regime Power Rack is engineered from 3x3” (75x75 mm) Tata Mild Steel for unmatched strength and compatibility with industry-standard attachments.Featuring 16mm precision laser-cut holes with clearly marked numbering, a 7-tank powder-coated finish, and an optional ground bolting base, this rack is designed for performance, stability, and safety whether your floor is even or not.Proudly Made in India, each rack showcases our laser-cut Robust Regime branding a symbol of quality and trust in Indian manufacturing.",
    shortDescription: "Robust P493 Power Cage: Compact, versatile, stable, with 3×3 CR tubing, Westside spacing, and multiple attachments",
     specifications: {
        Tubing: "3×3” (75×75 mm) 11-Gauge Cold Rolled (CR) Steel",
        Depth: "41 Inches",
        HolePositioningPattern :"Westside Hole Spacing (Laser-Cut, 16mm Diameter)",
        SurfaceTreatment: "7-Tank Powder-Coated Finish",
        FootPrint: "52” x 52”",
        Hardware: " M16 Matte-Finish Bolts",
        PullUpBar: "32mm Diameter – Available in Plain or Knurled Options",
        JCup: "Standard / Optional Sandwich J-Cups",
        MaximumLoadCapacity: "520 kg",
        Warranty: "Lifetime Warranty on Mechanical Frame Damage",
        Application: " Ideal for Home Gyms, Commercial Gyms & Fitness Studios",
       MadeIn: " India 🇮🇳", 
       
       
      features: [
        "Moisture-wicking fabric",
        "Anti-odor technology",
        "4-way stretch",
        "Flatlock seams",
        "Quick-dry material"
      ]
    },
    ColorVariant: [
      {
        color: "Black",
        price: 59999,
        salePrice: 43900,
        inStock: true
      },
      {
        color: "Black&red",
        price: 55000,
        salePrice:  42900,
        inStock: true
      },
    ],
    

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.7,
    reviewCount: 89,
    reviews: [
      {
        id: "1",
        userName: "Sarah K.",
        rating: 5,
        comment: "Perfect fit and very comfortable during workouts!",
        date: "2024-03-01",
        verified: true
      }
    ],
    productFeatures: [
      {
        title: "Crafted from premium Tata Mild Steel",
        description: "This Power Rack delivers elite-level strength, stability, and durability built for high-performance training with a refined finish that speaks quality.",
        image: "/rr-webp/Artboard 3.webp",
      },
      {
        title: "Proudly Made in India by Robust Regime",
        description: "Every inch of this power rack is designed,engineered, and manufactured in India by Robust Regime  a homegrown brand committed to world-class strength training equipment. From premium steel to precision laser-cut finishes, our racks reflect Indian craftsmanship with global standards. This isn't just a rack. It's a statement of strength, pride, and quality built by lifters, for lifters.",
        image: "/rr-webp/Artboard 7.webp"
      },
      {
        title: "Engineered with 3x3” (75x75 mm) Heavy-Gauge Steel for Maximum Strength.",
        description: "Our power racks are built using 3x3 inch (75x75 mm) Tata Mild Steel pipes, a trusted standard in the fitness industry. This pipe size offers unmatched strength, stability,and durability perfect for supporting heavy lifts and intense training.",
        image: "/rr-webp/Artboard 8.webp",
      },
      {
        title: "Optional Ground Bolting for Extra Stability",
        description: "Our racks come with pre-drilled ground bolting holes on the base plate for added stability.While bolting is not required if the surface is even and flat, these holes offer a solid solution for uneven floors or surface area issues — ensuring your rack stays firmly in place during heavy lifts. It's flexibility and safety, engineered right into the design.",
        image: "/rr-webp/11.webp",
      },
    ],
    productInsights: [
      {
        title: "Product Features",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },

  // {
  //   id: '2',
  //   name: "Robust Squat Stand-HP293",
  //   category: "racks",
  //   price: 21000,
  //   salePrice: 16499,
  //   images: [
      
  //   ],
  //   description: "The squat rack follows Westside spacing for hole placement, allowing quick, height-adjustable attachment settings with 1-inch spacing in the bench range and 2-inch elsewhere. It features a top-tier seven-tank powder coating for durability, a textured matte finish on uprights and base to extend metal lifespan, and a 32mm pull-up bar with a matte grip for firmness. Compact, with a 47x47-inch footprint, it minimizes gym space requirements. This portable, flexible design ensures stability, precision, and longevity, making it ideal for home or versatile gym setups.",
  //   shortDescription: "Portable, lightweight squat rack with stable 3x3-inch, 16-gauge steel uprights and precise laser-cut holes.",
  //   specifications: {
  //     EasyAssemply: "You can put an HP293 robust squat stand together in under an hour, sometimes as fast as 45 minutes. One person can do it, but we recommend 2.",
  //     Construction: "material used is 3×3 16 gauge (1.5 mm) pipe for this rack .6mm thick Base plate is nut bolted to the base frame and upright this give robust stability and 300 kg weight holding capacity with The best powder coating process on the market, using seven tank operations",
  //     Jcup: "advance j cup is built with the 8mm thick plate and 5mm locking plates with the capacity to lift 300 kg of weight stacked on the bar. Hdpe is used for the protection of the bar and upright surface while using the j cup attachment.",
  //     Pullupbar: "the pull up bar is 32mm in diameter with matt finish structure for the sturdy grip. And attached with the nut and bolting system onto the HP293 robust squat stand? up right",


  //     features: [
  //       "Quick-lock adjustment system",
  //       "15 weight settings per dumbbell",
  //       "Premium rubber grips",
  //       "Compact storage design",
  //       "Safety lock mechanism"
  //     ]
  //   },

  //   inStock: true,
  //   featured: true,
  //   bestSeller: true,
  //   isNew: true,
  //   rating: 4.9,
  //   reviewCount: 156,
  //   videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   demoVideoId: "dQw4w9WgXcQ",
  //   reviews: [
  //     {
  //       id: "1",
  //       userName: "Alex P.",
  //       rating: 5,
  //       comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
  //       date: "2024-03-15",
  //       verified: true,
  //       images: [
  //         "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
  //         "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
  //       ]
  //     },
  //     {
  //       id: "2",
  //       userName: "Sarah M.",
  //       rating: 5,
  //       comment: "Space-saving and versatile. Perfect for apartment workouts!",
  //       date: "2024-03-10",
  //       verified: true
  //     }
  //   ],
  //   features: [
  //     {
  //       title: "Quick-Lock Technology",
  //       description: "Change weights in seconds with our patented quick-lock system",
  //       image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
  //     },
  //     {
  //       title: "Space-Efficient Design",
  //       description: "Replace 15 pairs of dumbbells with one compact set",
  //       image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
  //     }
  //   ],
  //   keyPoints: [
  //     {
  //       icon: "shield",
  //       title: "Built to Last",
  //       description: "Premium materials and construction"
  //     },
  //     {
  //       icon: "zap",
  //       title: "Quick Adjustments",
  //       description: "Change weights in seconds"
  //     },
  //     {
  //       icon: "maximize",
  //       title: "Space Saving",
  //       description: "15 dumbbells in one"
  //     }
  //   ],
  //   productFeatures: [
  //     {
  //       title: "Modular Design – Upgrade as You Grow",
  //       description: " The Robust Squat Stand is built with future expansion in mind. Start simple and upgrade later: •Start with a Squat Stand – Compact and perfect for basic strength training. • Convert to a Half Rack – Add extra storage and stability without replacing your setup. • Upgrade to a Full Power Rack – Achieve advanced-level training with maximum safety and accessory support",
  //       image: "/Robo/smt17.webp",
  //     },
  //     {
  //       title: " WASTSIDE HOLE SPACING",
  //       description: "Precise laser cut West Side Hole Spacing in the bench press zone allows for micro-adjustments of J-hooks and safety bars, ensuring perfect positioning for every lifter.",
  //       image: "/Robo/smt19.webp",
  //     },
  //     {
  //       title: " PREMIUM CONSTURCTION",
  //       description: " Build with 11 gauge thick 3 inch x 3 inch uniform length pipe Fabricated with CO₂ welding creates deep weld penetration, resulting in high-strength joints ideal for fitness equipment that handles heavy loads. Produces cleaner welds with less spatter",
  //       image:  "/Robo/smt9.webp",
  //     },
  //     // {
  //     //   title: "Quick-Lock System",
  //     //   description: "Patent-pending locking mechanism allows for weight changes in seconds",
  //     //   image: "/Robust/Robust-Squat-Stand-HP293-4.jpg"
  //     // }
  //   ],
  //   productInsights: [
  //     {
  //       title: "Product Overview",
  //       videoId: "dQw4w9WgXcQ"
  //     },
  //     {
  //       title: "Assembly Guide",
  //       videoId: "dQw4w9WgXcQ"
  //     },
  //     {
  //       title: "Workout Examples",
  //       videoId: "dQw4w9WgXcQ"
  //     }
  //   ]
  // },

  {
    id: '3',
    name: "Robust Squat Stand-P293",
    category: "racks",
    price: 30000,
    salePrice: 22450,
    images: [
      "/Robo/smt9.webp",
      "/Robo/smt8.webp",
      "/Robo/smt10.webp",
      "/Robo/smt11.webp",
      "/Robo/smt17.webp",
      "/Robo/smt18.webp",
    ],
    description: "This squat rack features Westside spacing with 1-inch hole spacing in the bench range and 2-inch elsewhere for quick, height-adjustable attachments. Precision laser-cut holes ensure accuracy. A seven-tank powder coating process enhances durability, while a textured matte finish on uprights and base extends metal lifespan. The 32mm pull-up bar has a matte surface for a firm grip. With a compact 47x47-inch footprint, it minimizes gym space needs. Combining portability, flexibility, and robust 11-gauge steel construction, this rack offers stability and longevity for versatile home or gym use.",
    shortDescription: "Portable, lightweight squat rack with stable 3x3-inch, 11-gauge steel uprights and precise laser-cut holes.",
    specifications: {
      material: "75 x 75 x 3 mm  3”x3″ 11-gauge (3mm) CR Steel.",
      dimensions: " Length – 47”, Width – 47”, Height – 93”.",
      weight: "85 kg.",
      Footprint: " 47” x 47”",
      finish: "Black Powder Coated  (7-Tank)",
      Attachment: "16 mm hole",
      maxWeight: "32.5kg per dumbbell",
      capacity: "350Kg",
      warranty: " 5-year Structural Warranty.",
      RequiredLessGymspace: " 47 inch X 47 Inch.",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Modular Design – Upgrade as You Grow",
        description: " The Robust Squat Stand is built with future expansion in mind. Start simple and upgrade later: •Start with a Squat Stand – Compact and perfect for basic strength training. • Convert to a Half Rack – Add extra storage and stability without replacing your setup. • Upgrade to a Full Power Rack – Achieve advanced-level training with maximum safety and accessory support",
        image: "/Robo/smt17.webp",
      },
      {
        title: " WASTSIDE HOLE SPACING",
        description: "Precise laser cut West Side Hole Spacing in the bench press zone allows for micro-adjustments of J-hooks and safety bars, ensuring perfect positioning for every lifter.",
        image: "/Robo/smt19.webp",
      },
      {
        title: " PREMIUM CONSTURCTION",
        description: " Build with 11 gauge thick 3 inch x 3 inch uniform length pipe Fabricated with CO₂ welding creates deep weld penetration, resulting in high-strength joints ideal for fitness equipment that handles heavy loads. Produces cleaner welds with less spatter",
        image:  "/Robo/smt9.webp",
      },
      {
        title: " FLATFOOT DESIGN ",
        description: "Flat-foot racks are designed with a wider base structure, eliminating the need to drill into the floor.Perfect for home gyms, rented spaces, or areas where permanent installation isn’t possible.",
        image: "/Robo/smt18.webp",
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '4',
    name: "Space Max Foldable Rack",
    category: "racks",
    price: 95000,
    salePrice: 66490,
    images: [
      "/Robust/Space-Max-Foldable-Rack-1.jpg",
      "/Robust/Space-Max-Foldable-Rack-2.jpg",
      "/Robust/Space-Max-Foldable-Rack-3.jpg",
      "/Robust/Space-Max-Foldable-Rack-4.jpg",
      "/Robust/Space-Max-Foldable-Rack-3.jpg",
      "/Robust/Space-Max-Foldable-Rack-1.jpg"
    ],
    description: "India’s first Space Max Foldable Rack, designed for home and commercial gyms, supports 500kg and multiple exercises in limited space. Featuring 75x75mm, 11-gauge Tata mild steel uprights with Westside hole spacing, it ensures structural toughness. The 16mm locking pin and SKF bearings (5-year warranty) enable smooth folding without wall bolting. A seven-tank powder coating enhances durability. Closed, it occupies 16x57 inches; open, 57x52 inches. Includes spotter arms, J-cups, pull-up bar (32mm), safety pins, landmine, and six weight horns. Lifetime structural warranty, one-year on moving parts, ideal for compact studios and home gyms.",
    shortDescription: "self-standing, compact, 500kg capacity, lifetime structural warranty, Indian-made.",
    specifications: {
      material: "Tata Steel 75mmx75mm ,11-gauge pipe",
      Height: "90",
      CarpetAreaclosePosition: "16″x 52″",
      CarpetAreaOpenPosition: "56″ x 52″",
      Pullupbar: "32mm plain pullup bar or 32mm knurl pullup bar",
      finish: "7 tank matt powder coats,",
      Holespacing: " West side Hole spacing 16 mm diameter.",
      Hardware: "locking pin hard chrome and other zinc black.",
      warranty: "Structural Warranty: Life Time.",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust/Space-Max-Foldable-Rack-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust/Space-Max-Foldable-Rack-2.jpg"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust/Space-Max-Foldable-Rack-3.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust/Space-Max-Foldable-Rack-4.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, 
  {
    id: '5',
    name: "Squat Stand Half Rack P493",
    category: "racks",
    price: 39000,
    salePrice: 34490,
    images: [
     "/Robo/smt7.webp",
     "/Robo/smt5.webp",
     "/Robo/smt6.webp",
     "/Robo/smt4.webp",
     "/Robo/smt13.webp",
     "/Robo/smt12.webp",
    ],
    description: "The P493 Half Rack, an upgrade from P293/HP293, enhances stability and storage with 75x75mm, 11-gauge (3mm) steel and four uprights, including a 75-inch rear upright for added storage. It features 15-inch crossmembers and 93-inch front crossmembers for sturdiness. P293 owners can upgrade using the same hardware. The compact 48x49-inch footprint suits various gym spaces. An optional pull-up bar (plain or knurled) adds versatility. With Westside hole spacing for adjustable attachments, this customizable, durable rack is ideal for home or commercial gyms, offering enhanced stability and storage.",
    shortDescription: "upgraded stability, storage, 75x75mm 11-gauge steel, 48x49-inch footprint.",
    specifications: {
      FootPrint: "48×49 inch",
      CrossMember: "15 inch",
      BackUprights: "75 inch",
      FrontUprights: "93 inch",
      Material: "CR square tube 75mm x 75mm x 11 gauge.",
      MaxWeight: "32.5kg per dumbbell",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "WASTSIDE HOLE SPACING",
        description: " precise laser cut West Side Hole Spacing in the bench press zone allows for micro-adjustments of J-hooks and safety bars, ensuring perfect positioning for every lifter.",
        image: "/Robo/smt13.webp",
      },
      {
        title: "EXTRA PLATE STORAGE ",
        description:  "Half rack comes with extra plate storage for more compactness",
        image:   "/Robo/smt5.webp",
      },
      // {
      //   title: " FLATFOOT DESIGN ",
      //   description: "Flat foot design eliminates the requirements of the bolting to the ground for gain maximum efficiency of the rack So now no holes in the floor to gain that more stability",
      //   image: "/Robust/Squat-Stand-Half-Rack-P493-1.jpg"
      // },
      {
        title: " PREMIUM CONSTURCTION",
        description: " Build with 11 gauge thick 3 inch x 3 inch uniform length pipe Fabricated with CO₂ welding creates deep weld penetration, resulting in high-strength joints ideal for fitness equipment that handles heavy loads. Produces cleaner welds with less spatter",
        image:   "/Robo/smt12.webp",
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, {
    id: '6',
    name: "Tri Shelf Dumbbell Rack",
    category: "racks",
    price: 26000,
    salePrice:17500,
    images: [
      "/Robust/Tri-Shelf-Dumbbell-Rack-1.jpg",
      "/Robust/Tri-Shelf-Dumbbell-Rack-2.png",
      "/Robust/Tri-Shelf-Dumbbell-Rack-3.jpg",
      "/Robust/Tri-Shelf-Dumbbell-Rack-4.jpg",
      "/Robust/tri-dumbell.webp",
      "/Robust/Tri-Shelf-Dumbbell-Rack-3.jpg"
    ],
    description: "not updated",
    shortDescription: "not updated",
    specifications: {
      CarpetArea: "4.5 ft x 2.3 ft.",
      Racklength: "4.6 ft.",
      width: "2.3ft",
      Height: "3.1ft",
      ProductWeight: "50kg",
      maxWeight: "400kg",
      warranty: "10 years",
      pipeSize:"50mm x 50mm x 3mm Mild steel",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "STRUCTURE ",
        description: "Flat-foot racks are designed with a wider base structure, eliminating the need to drill into the floor.Perfect for home gyms, rented spaces, or areas where permanent installation isn’t possible.",
        image: "/Robust/Tri-Shelf-Dumbbell-Rack-3.jpg"
      },
      {
        title: "EASY ASSEMBLY AND DISASSEMBLY ",
        description: "Design for the gym and home gym dumbbell storage can easy assembly and disassemble with load bearing capacity of 400kg dumbbell.",
        image:  "/Robust/tri-dumbell.webp"
      },
      {
        title: " Tri shelf design ",
        description: "Designed for the standard dumbbell giving enough space for gripping the handle of dumbbell without touching the L angle .",
        image: "/Robust/Tri-Shelf-Dumbbell-Rack-4.jpg"
      },
      {
        title: "CUSTOM BRANDING",
        description: "Can give custom branding asper customer requirement.",
        image: "/Robust/Tri-Shelf-Dumbbell-Rack-2.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
    {
    id: '7',
    name: "Robust Power Rack Flatfoot",
    category: "racks",
    price: 59990,
    salePrice: 48500,
    images: [
        "/Robo/smt1.webp",
        "/Robo/smt.webp",
        "/Robo/smt2.webp",
        "/Robo/smt3.webp",
        "/Imagesofflatfoot/flat4.webp",
        "/Imagesofflatfoot/flat7.webp",
    ],
    description: "The Robust P493 Power Cage is a compact and versatile rack designed for home gyms, studios, and commercial setups. Built with heavy-duty 3×3 inch 11-gauge CR steel tubing and Westside hole spacing, it ensures excellent strength, stability, and precision. It occupies only 52×52 inches of space and includes essentials like 4 uprights, cross members, a pull-up bar (plain or knurled), J-cups (standard or sandwich), and safety pins. Laser-cut holes with dual-direction numbering allow accurate and quick attachment adjustments. The powder-coated finish resists rust, offering durability and long equipment life.",
    shortDescription: "The Robust P493 Power Cage is a durable, space-efficient rack built for safe and versatile training. Precision engineering and strong steel tubing make it ideal for both home and commercial gyms.",
    specifications: {
      Tubing : " 11 gauge 3×3 Square CR Tubing",
      Depth :"41In.",
      HolePositioningPattern : "West Side Hole Spacing.",
      SurfaceTreatment : "7 Tank Powder Coating.", 
      FootPrint : "52In x 52 In.",
      Hardware : "M16 matt finish",
      Warranty : "Lifetime Mechanical Frame Work Damage Warranty.",
       Application : "Home Gym, Commercial Gym and Fitness Studio. ",
       JCup : "Standard /Sandwich Optional.",
        PullUpBar : "32mm diameter Plain / Knurl Bar.",
        RackMaxWeightCapacity : "520 kg ",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "PREMIUM CONSTURCTION",
        description: " Build with 11 gauge thick 3 inch x 3 inch uniform length pipe Fabricated with CO₂ welding creates deep weld penetration, resulting in high-strength joints ideal for fitness equipment that handles heavy loads. Produces cleaner welds with less spatter",
        image: "/Robo/rr-2.webp",
  
      },
      {
        title: "WASTSIDE HOLE SPACING",
        description: "Flat foot design eliminates the requirements of the bolting to the ground for gain maximum efficiency of the rack So now no holes in the floor to gain that more stability",
        image: "/Robo/smt3.webp",
      },
      {
        title: " FLATFOOT DESIGN ",
        description: "Flat foot design eliminates the requirements of the bolting to the ground for gain maximum efficiency of the rack So now no holes in the floor to gain that more stability ",
        image:  "/Imagesofflatfoot/flat7.webp",
      },
      {
        title: " EASY ASSEMBLY & DIS ASSEMBLY – Hassle-Free Setup",
        description: " Designed with a user-friendly structure that allows for quick assembly without specialized tools or expert help.Perfect for commercial, home gyms, PT studios, and mobile setups where portability and convenience matter.",
        image: "/Robo/smt1.webp",
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },

  //Dumbbells

  {
    id: '8',
    name: "Hex Dumbbells",
    category: "dumbbells",
    price: 17990,
    priceRange: "₹950.00 – ₹13,300.00",
    images: [
      "/Robust-Dumbells/Hex-Dumbells-1.jpg",
      "/Robust-Dumbells/Hex-Dumbells-2.jpg",
      "/Robust-Dumbells/Hex-Dumbells-3.jpg",
      "/Robust-Dumbells/Hex-Dumbells-4.jpg",
      "/Robust-Dumbells/Hex-Dumbells-5.jpg",
      "/Robust-Dumbells/Hex-Dumbells-6.jpg"
    ],
    description: "These hexagonal dumbbells excel in adaptability, supporting squats, pulls, pushes, and hinges across all gym routines. Their design enables single-handed lifting, mimicking most exercises with a wide weight range. The hex shape prevents rolling, doubling as a push-up support, while natural rubber coating absorbs shocks, protecting floors and weights. Chrome-plated handles resist rust, and 1.2mm diamond knurling ensures a firm grip. The dead bounce feature enhances safety with predictable motion. Securely fabricated weights stay in place during workouts, unlike cheaper alternatives, offering durability and reliability for home or commercial gym use.",
    shortDescription: "versatile, durable, chrome-plated, rubber-coated, secure grip, wide weight range, rust-resistant.",
    specifications: {
      material: "Rubber and cast weight",
      Rubber: "Natural rubber odorless",
      ConstructionShape: "Anti rolling shape",
      Handle: "Curved handle for quick grip in your palm webbing",
      HandleLength: "130mm",
      HandleConstruction: "Profiled shape",
      SurfaceCoating: "Hard chrome",
      Knurling: "1.2mm diamond knurling",
      Fabrication:"Co2 welding for rigid structure",
      DumbbellSize : "2.5kg/ 5kg/7.5kg/10kg/12.5kg/ 15kg/17.5kg/ 20kg/ 22.5kg/ 25kg/27.5kg/ 30kg/32.5kg/ 35kg/  Full set 405 kg",


      features: [
        "Moisture-wicking fabric",
        "Anti-odor technology",
        "4-way stretch",
        "Flatlock seams",
        "Quick-dry material"
      ]
    },
       weightVariants: [
      {
        weight: "2.5kg",
        price: 1950,
        salePrice: 950,
        inStock: true,
        weightOptions: [
          {
            weight: "2.5kg",
            price: 1950,
            salePrice: 950,
            inStock: true
          },
          {
            weight: "5kg",
            price: 2999,
            salePrice: 1900,
            inStock: true
          },
          {
            weight: "7.5kg",
            price: 2999,
            salePrice: 2850,
            inStock: true
          },
          {
            weight: "10kg",
            price: 4999,
            salePrice: 3800,
            inStock: true
          },
          {
            weight: "12.5kg",
            price: 5500,
            salePrice: 4750,
            inStock: true
          },
          {
            weight: "15kg",
            price: 6000,
            salePrice: 5700,
            inStock: true
          },
          {
            weight: "17.5kg",
            price: 8000,
            salePrice: 6650,
            inStock: true
          },
          {
            weight: "20kg",
            price: 8000,
            salePrice: 700,
            inStock: true
          },
          {
            weight: "22.5kg",
            price: 9000,
            salePrice: 8550,
            inStock: true
          },
          {
            weight: "25kg",
            price: 10000,
            salePrice: 9500,
            inStock: true
          },
          {
            weight: "30kg",
            price: 13000,
            salePrice: 11400,
            inStock: true
          },
          {
            weight: "35kg",
            price: 14300,
            salePrice: 13300,
            inStock: true
          }
        ]
      }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
    reviews: [
      {
        id: "1",
        userName: "Sarah K.",
        rating: 5,
        comment: "Perfect fit and very comfortable during workouts!",
        date: "2024-03-01",
        verified: true
      }
    ],
    productFeatures: [
      {
        title: "PREMIUM CONSTURCTION ",
        description: "Constructed from fabricated cast iron for durability and encased in natural rubber, with a weight tolerance of ±2%.",
        image: "/Robust-Dumbells/Hex-Dumbells-1.jpg"
      },
      {
        title: " WIDE RAGEOFWEIGHT",
        description: "Our premium Hex Dumbbells, available in a complete range from 1.25 kg to 35 kg, are perfect for everyone—from beginners to serious lifters. Designed for durability, comfort, and versatility, they’re your all-in-one solution for strength training at any level.",
        image: "/Robust-Dumbells/Hex-Dumbells-2.jpg"
      },
      {
        title: "ERGONOMICAL DESING PROFILED",
        description: "Knurled handle with a contoured shape for a firm grip, providing enhanced hold over extended use.",
        image: "/Robust-Dumbells/Hex-Dumbells-4.jpg"
      },
      // {
      //   title: "Superior Comfort",
      //   description: "Designed for maximum comfort during intense workouts",
      //   image: "/Robust-Dumbells/Hex-Dumbells-4.jpg"
      // },
    ],
    productInsights: [
      {
        title: "Product Features",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },

  {
    id: '9',
    name: "Maverick-Adjustable-Dumbell",
    category: "dumbbells",
    price: 30000,
    priceRange: "₹17499.00 – ₹32,599.00",
    images: [
      "/Robust-Dumbells/Maverick-Adjustable-Dumbell-1.jpeg",
      "/Robust-Dumbells/Maverick-Adjustable-Dumbell-2.png",
      "/Robust-Dumbells/Maverick-Adjustable-Dumbell-3.png",
      "/Robust-Dumbells/Maverick-Adjustable-Dumbell-4.png",
      "/Robust-Dumbells/Maverick-Adjustable-Dumbell-5.png",
      "/Robust-Dumbells/Maverick-Adjustable-Dumbell-6.png"
    ],
    description: "The Mavrick Adjustable Dumbbell, ideal for home or gym, supports strength training with a 2.5-50kg adjustable range for progressive workouts. Easily adjust weights by unscrewing the end cap, adding plates, and securing it back. Its 1.5mm knurled handle and end cap ensure a firm, non-slip grip. Precision-calibrated plates guarantee accurate weight selection. This budget-friendly, space-saving dumbbell eliminates the need for multiple sets, keeping your gym organized. Durable and versatile, it’s perfect for building strength, endurance, or toning, offering athletes and fitness enthusiasts a reliable, high-performance tool for seamless, effective workouts.",
    shortDescription: "2.5-50kg, easy adjustments, superior knurling, precise, budget-friendly, space-saving.",
    specifications: {
      material: "Machined Steel (EN-8)",
      SurfaceTreatment: "Handle & Stud – Nickel chrome plating,Weight Plates – 7 tank Black Structured Powder Coat",
      HandleShaftDiameter: "32mm (3.2 cm)",
      HandleShaftLength: "150 mm (15 cm)",
      Knurl: "1.5mm Diamond Knurl",
      StudGrip : "Knurled (No Spanner needed)",
      WeightVariations:"(25KG Pair Set) – 2.5kg, 5kg,7.5kg, 10kg, 12.5kg, 15kg, 17.5kg, 20kg, 22.5kg, 25kg    (50KG Pair Set) – 27.5kg, 30kg, 32.5kg, 35kg, 37.5kg, 40kg, 42.5kg, 45kg, 47.5kg, 50kg",
      Warranty: "	10-year on Structural Damage & 1 Year on Studs.",
      WeightTolerance:"0.5% Tolerance",
      Make : "Made in India",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },
weightVariants: [
      {
        weight: "25kg (Set)",
        price: 18499,
        salePrice: 17499,
        inStock: true,
        variantImages: [
          "/25kg(set)/Adjustable Dumbbell 5 kg.webp",
          "/25kg(set)/Adjustable Dumbbell 7.5 kg.webp",
          "/25kg(set)/Adjustable Dumbbell 12.5 kg.webp",
          "/25kg(set)/Adjustable Dumbbell 17.5 kg.webp",
          "/25kg(set)/Adjustable Dumbbell 22.5 kg.webp",
          "/25kg(set)/Adjustable Dumbbell 25 kg.webp",
        ],
        weightOptions: [
          { weight: "5kg", price: 4999, salePrice: 4499, inStock: true },
          { weight: "7.5kg", price: 5999, salePrice: 5499, inStock: true },
          { weight: "12.5kg", price: 7999, salePrice: 7499, inStock: true },
          { weight: "17.5kg", price: 9999, salePrice: 9499, inStock: true },
          { weight: "22.5kg", price: 11999, salePrice: 11499, inStock: true },
          { weight: "25kg", price: 18499, salePrice: 17499, inStock: true }
        ]
      },
      {
        weight: "50kg (Set)",
        price: 32999,
        salePrice: 32599,
        inStock: true,
        variantImages: [
          "/50kg(set)/Adjustable Dumbbell 30 kg.webp",
          "/50kg(set)/Adjustable Dumbbell 32.5 kg.webp",
          "/50kg(set)/Adjustable Dumbbell 37.5 kg.webp",
          "/50kg(set)/Adjustable Dumbbell 42.5 kg.webp",
          "/50kg(set)/Adjustable Dumbbell 47.5 kg.webp",
          "/50kg(set)/Adjustable Dumbbell 50 kg.webp",
        ],
        weightOptions: [
          { weight: "30kg", price: 19999, salePrice: 19499, inStock: true },
          { weight: "32.5kg", price: 20999, salePrice: 20499, inStock: true },
          { weight: "37.5kg", price: 22999, salePrice: 22499, inStock: true },
          { weight: "42.5kg", price: 24999, salePrice: 24499, inStock: true },
          { weight: "47.5kg", price: 26999, salePrice: 26499, inStock: true },
          { weight: "50kg", price: 32999, salePrice: 32599, inStock: true }
        ]
      }
    ],



    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "PREMIUM CONSTURCTION ",
        description: "Better Load Bearing Capacity: Welding creates a solid joint between the handle and weight sleeves, making the dumbbell more durable and reliable for heavy lifting",
        image: "/dumb/25kg.webp"
      },
      {
        title: "Weight Tolerance ±2% – Precision You Can Trust",
        description: "Our adjustable dumbbells are engineered with a precision weight tolerance of up to ±2%, ensuring every lift is consistent and reliable. Whether you're training for performance or tracking progressive overload, this level of accuracy helps maintain balanced muscle development and workout efficiency. Ideal for serious lifters who demand precision in every rep",
        image: "/Robust-Dumbells/Maverick-Adjustable-Dumbell-1.jpeg"
      },
      {
        title: " 1.5 mm Knurling in Dumbbells Optimal Grip Without Aggression",
        description: " 1.5 mm knurling strikes the perfect balance — offering a secure grip without being too harsh on the palms, making it ideal for both beginners and experienced lifters",
        image: "/Robust-Dumbells/Maverick-Adjustable-Dumbell-2.png"
      },
      {
        title: " 2.5 kg to 50 kg Adjustable Dumbbell – Space-Saving & Reliable",
        description: " From light toning (2.5 kg) to serious strength training (50 kg), this dumbbell adapts to every fitness level and workout style.",
        image: "/Robo/rr-1.webp"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },


  //benches
  {
    id: '10',
    name: "Armor Flat Bench",
    category: "benches",
    price: 16000,
    salePrice: 11800,
    images: [
      "/Robust-Benches/Armor-flat-bench-1.png",
      "/RR-images/1.webp",
      "/RR-images/2.webp",
      "/RR-images/3.webp",
      "/RR-images/1.webp",
      "/Robust-Benches/Armor-flat-bench-2.png",
      
    ],
    description: "Professional-grade adjustable dumbbell set with quick-lock mechanism. Each dumbbell adjusts from 5kg to 32.5kg in 2.5kg increments. Perfect for home gyms and professional training facilities.",
    shortDescription: "Quick-adjust dumbbells from 5kg to 32.5kg per hand",
    specifications: {
      material: "75mm X 75mm Mild Steel 11 Gauge.",
      SelfWeight: "35kg",
      LaserCutPlates: "5mm Mild Steel.",
      Wheel: "Industrial Grade Poly urethane Wheel.",
      GripHandle: "28mm diameter, 1.5mm knurling, heard chrome plated.",
      CarpetArea: " 20”x 47 “",
      warranty: "Life time",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-Benches/Armor-flat-bench-1.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-Benches/Armor-flat-bench-2.png"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-Benches/Armor-flat-bench-1.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-Benches/Armor-flat-bench-2.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '11',
    name: "Stego FID Adjustable Bench",
    category: "benches",
    price: 29500,
    salePrice: 22500,
    images: [
      "/Robust-Benches/Stego-fid-bench-1.png",
      "/Robust-Benches/Stego-fid-bench-2.png",
      "/Robust-Benches/Stego-fid-bench-3.png",
      "/Robust-Benches/Stego-fid-bench-4.png",
      "/Robust-Benches/Stego-fid-bench-5.png",
      "/Robust-Benches/Stego-fid-bench-6.png"
    ],
    description: "The Stego Adjustable Bench, designed for home and commercial use, supports heavy workouts with a robust structure and easy mobility. It offers 10 backrest angles (15° to 85°), 3 seat angles (0° to 30°), and decline settings (-6° and -10°). With a lifetime structural warranty and 1-year cushion warranty, it features 72mm thick molded foam cushions with durable, non-slip resin and double stitching. The seat (300x300x72mm) and backrest (305x1020x72mm) have a minimal 45mm gap for comfort. Knurled handles and polyurethane wheels ensure easy movement and vertical storage, saving space.",
    shortDescription: "heavy-duty, 10 backrest angles, decline support, space-saving, lifetime structural warranty.",
    specifications: {
      AngleforInclineBackrest: " 0°, 15°, 30°, 37.5°, 45°, 52.5°, 60°, 67.5°, 75°, 85°.",
      AngleforDeclineBackRest: " 0°, -6°, 10°",
      AngleForSeat: " 0°, 10°, 20°, 30°.",
      CarpetAreWhileUse: "1520 x 430 x 550 mm",
      CarpetAreaWhenStored: "550 x430 mm",
      BenchSelfWeight: "52kg",
      BenchWeightCapacity: "750kg",
      Structure: "75x75x3mm CR pipe.",
      AnglePlate: "5mm",
      SupportPlate: "8mm",
      Wheel: "PolyUrethane 3” diameter",
      GrabHandle: "Surface knurling, hard chrome, 28mm Diameter.",
      warranty: "Lifetime warranty on Structural Damage.",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-Benches/Stego-fid-bench-1.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-Benches/Stego-fid-bench-2.png"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-Benches/Stego-fid-bench-3.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-Benches/Stego-fid-bench-4.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },

  //Weight plates
  {
    id: '12',
    name: "Olympic-Cast-Iron-Plates",
    category: "weight-plates",
    price: 51000,
    priceRange: "₹560.00 – ₹17,990.00",
    images: [
      "/Robust-Weightplates/Olympic-Cast-Iron-Plates-1.png",
      "/RR-images/4.webp",
      "/RR-images/5.webp",
      "/RR-images/6.webp",
      "/RR-images/7.webp",
      "/Robust-Weightplates/Olympic-Cast-Iron-Plates-1.png"
     
    ],
    description: "Inspired by the golden era of bodybuilding, these standard barbell plates feature a raised flange on one side and a smooth disc on the other for an authentic old-school feel. Crafted with a 50.4mm center hole to fit Olympic barbells, they offer a secure grip with a matte powder coating and silver-coated raised lettering. Built to Indian weight standards with a 3% tolerance, they’re durable, budget-friendly, and made for serious",
    shortDescription: "Old-school classic barbell plates designed for serious lifters, combining vintage style with modern durability.",
    specifications: {
      Material:"Cast iron",
      WeightTolerence:"3%",
      RaisedLetter : "Capital words for easy identification of plate",
      SleeveHole:"52mm diameter with raised surface.",
    Flanges: "raised flanges for easy gripping.",
    Warranty: "5 years",
    RaisedFlange:" for perfect gripping",

      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "DURABLE CONSTURCTION",
        description: "Made from solid metal, cast iron plates can last for decades with proper care.Thinner than bumper plates, allowing you to load more weight on the bar",
        image: "/Robust-Weightplates/Olympic-Cast-Iron-Plates-1.png",
      },
      {
        title: "PRECISE WEIGHT",
        description: "This cast iron plate has a 3% weight tolerance, allowing you to train and perform with accuracy Manufactured with a small tolerance, ensuring accurate and consistent load for training",
        image: "/RR-images/7.webp",
      },
      {
        title: " EASY GRIPPING",
        description: " The raised flanges along the plate’s edge provide a secure grip, making it easier to lift and handle the plate.",
        image:"/RR-images/5.webp"
      },
      {
        title: "COST EFFECTIVE ",
        description: "Cast iron plates are more economical then other weight plates and are more durable .",
        image: "/RR-images/6.webp"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },

  {
    id: '13',
    name: "Robust-Black-Bumper-Plate",
    category: "weight-plates",
    price: 9999,
    priceRange: "₹3,100.00 – ₹29,700.00",
    images: [
      "/Robust-Weightplates/Robust-Black-Bumper-Plate-1.png",
      "/Robust-Weightplates/Robust-Black-Bumper-Plate-2.png",
      "/Robust-Weightplates/Robust-Black-Bumper-Plate-3.png",
      "/Robust-Weightplates/Robust-Black-Bumper-Plate-1.png",
      "/Robust-Weightplates/Robust-Black-Bumper-Plate-1.png",
      "/Robust-Weightplates/Robust-Black-Bumper-Plate-2.png",


    ],
    description: "The Robust Regime Challenger Rubber Bumper Plates are engineered for serious lifters, offering a thinner profile to load more weight and a durable design ideal for safe drops from overhead. With a high durometer rating of 90, they minimize bounce and protect your barbell and floor while ensuring consistent performance. CNC-machined stainless steel inserts, raised flanges, and impact-absorbing rubber make these plates perfect for intense strength training and personal record attempts.",
    shortDescription: "High-performance bumper plates with a thinner profile, low bounce, and durable design for safe, heavy lifts and maximum barbell loading.",
    specifications: {

      PlateWeight:"5 KG Pair, 10 KG Pair, 15 KG Pair, 20 KG Pair, 25 KG Pair, 150 KG Set ( 5×2/ 10×2/ 15×2/ 20×2 / 25×2 )",
      material:"Natural Rubber, Stainless Steel",
      Warranty:"2 yrs",
      PlatesWeight	:"5KG/10KG/15KG/20KG/25KG/150KG",
      InsertOpening :	"Around 50.4 mm",
      Color : "BOLD LATTERS",

      features: [
        "Moisture-wicking fabric",
        "Anti-odor technology",
        "4-way stretch",
        "Flatlock seams",
        "Quick-dry material"
      ]
    },
    weightVariants: [
      {
        weight: "5kg Pair",
        price: 4110,
        salePrice:3100,
        inStock: true,
        weightOptions: [
          {
            weight: "5kg Pair",
            price: 4110,
            salePrice:3100,
            inStock: true
          },
          {
            weight: "10kg Pair",
            price: 6340,
            salePrice: 4560,
            inStock: true
          },
          {
            weight: "15kg Pair",
            price: 9110,
            salePrice: 6720,
            inStock: true
          },
          {
            weight: "20kg Pair",
            price: 12010,
            salePrice: 8840,
            inStock: false
          },
          {
            weight: "150kg set (5x2/ 10x2/ 15x2/ 20x2/ 25x2)",
            price: 45000,
            salePrice: 29700,
            inStock: true
          }
        ]
      }
    ],
    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.7,
    reviewCount: 89,
    reviews: [
      {
        id: "1",
        userName: "Sarah K.",
        rating: 5,
        comment: "Perfect fit and very comfortable during workouts!",
        date: "2024-03-01",
        verified: true
      }
    ],
    productFeatures: [
      {
        title: "DURABLE CONSTURCTION",
        description: "• Made from high-density rubber to withstand repeated drops without damage • Absorbs impact to prevent cracks or dents in gym floors. • Fits all 50 mm Olympic barbell sleeves. • Suitable for both indoor and outdoor training",
        image: "/Robust-Weightplates/Robust-Black-Bumper-Plate-1.png"
      },
      {
        title: "VERSATILE",
        description: "Perfect for Olympic lifts, powerlifting, and functional training. Minimizes sound during drops, creating a quieter gym environment Designed for controlled lifts and safer training",
        image: "/Robust-Weightplates/Robust-Black-Bumper-Plate-3.png"
      },
      {
        title: "OLYMPIC STANDARD",
        description: " • 5.4mm collaropening • Uniform Plate diameter 450mm • Weight tolerance 1% • Stain less steel collar opening",
        image: "/Robust-Weightplates/Robust-Black-Bumper-Plate-2.png"
      },
      // {
      //   title: "Superior Comfort",
      //   description: "Designed for maximum comfort during intense workouts",
      //   image: "/Robust-Weightplates/Robust-Black-Bumper-Plate-1.png"
      // },
    ],
    productInsights: [
      {
        title: "Product Features",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '14',
    name: "Robust-Color-Bumper-Plate",
    category: "weight-plates",
    price: 51000,
    salePrice:43500,
    images: [
      "/Robust-Weightplates/Robust-Color-Bumper-Plate-1.jpg",
      "/Robust-Weightplates/Robust-Color-Bumper-Plate-2.jpg",
      "/Robust-Weightplates/Robust-Color-Bumper-Plate-3.jpg",
      "/Robust-Weightplates/Robust-Color-Bumper-Plate-4.jpg",
      "/Robust-Weightplates/Robust-Color-Bumper-Plate-5.jpg",
      "/Robust-Weightplates/Robust-Color-Bumper-Plate-1.jpg",

    ],
    description: "Crafted from premium natural rubber, the Robust Regime Color Bumper Plates are designed to absorb impact and reduce bounce, ensuring safer and smoother lifts. Built to international standards with a 450mm diameter and 50.4mm stainless steel insert, they offer a snug, secure fit and long-lasting durability. With a thin profile for maximum loading and IWF-approved color coding, these plates are perfect for professional and competitive training.",
    shortDescription: "Robust Regime Color Bumper Plates offer IWF-standard design, low bounce, and high durability with color-coded precision for serious lifters.",
    specifications: {
      Material:"Natural Rubber, Stainless Steel",
      Warranty :"2 yrs",
      PlatesWeight:"5KG/10KG/15KG/20KG/25KG/150KG",
      PlateSize:"450 mm Diameter",
      InsertOpening :	"Around 50.4 mm",
      Color :	"Grey 5 KG Green 10 KG Yellow 15 KG Red 25 KG",
      features: [
        "Moisture-wicking fabric",
        "Anti-odor technology",
        "4-way stretch",
        "Flatlock seams",
        "Quick-dry material"
      ]
    },
    // sizeVariants: [
    //   {
    //     size: "S",
    //     price: 999,
    //     salePrice: 799,
    //     inStock: true
    //   },
    //   {
    //     size: "M",
    //     price: 999,
    //     salePrice: 799,
    //     inStock: true
    //   },
    //   {
    //     size: "L",
    //     price: 1099,
    //     salePrice: 899,
    //     inStock: true
    //   },
    //   {
    //     size: "XL",
    //     price: 1199,
    //     salePrice: 999,
    //     inStock: false
    //   },
    //   {
    //     size: "XXL",
    //     price: 1299,
    //     salePrice: 1099,
    //     inStock: true
    //   }
    // ],
    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.7,
    reviewCount: 89,
    reviews: [
      {
        id: "1",
        userName: "Sarah K.",
        rating: 5,
        comment: "Perfect fit and very comfortable during workouts!",
        date: "2024-03-01",
        verified: true
      }
    ],
    productFeatures: [
      {
        title: "DURABLE CONSTURCTION ",
        description:" • Made from high-density rubber to withstand repeated drops without damage • Absorbs impact to prevent cracks or dents in gym floors. • Fits all 50 mm Olympic barbell sleeves.  • Suitable for both indoor and outdoor training",
        image: "/Robust-Weightplates/Robust-Color-Bumper-Plate-1.jpg"
      },
      {
        title: "VERSATILE USE ",
        description: "Perfect for Olympic lifts, powerlifting, and functional training. Minimizes sound during drops, creating a quieter gym environment Designed for controlled lifts and safer training.",
        image: "/Robust-Weightplates/Robust-Color-Bumper-Plate-2.jpg"
      },
      {
        title: " Color-Coded",
        description: "Easy weight identification during workouts.",
        image: "/Robust-Weightplates/Robust-Color-Bumper-Plate-5.jpg"
      },
      // {
      //   title: "Superior Comfort",
      //   description: "Designed for maximum comfort during intense workouts",
      //   image: "/Robust-Weightplates/Robust-Color-Bumper-Plate-4.jpg",
      // },
    ],
    productInsights: [
      {
        title: "Product Features",
        videoId: "dQw4w9WgXcQ"
      }
    ]

  },

  //Accessories

  {
    id: '15',
    name: "Aluminium Collars",
    category: "accessories",
    price: 1400,
    salePrice: 1050,
    images: [
      "/Robust-Accessories/Aluminium-Collars-1.jpg",
      "/Robust-Accessories/Aluminium-Collars-2.jpg",
      "/Robust-Accessories/Aluminium-Collars-3.jpg",
      "/Robust-Accessories/Aluminium-Collars-4.jpg",
      "/Robust-Accessories/Aluminium-Collars-5.jpg",
      "/Robust-Accessories/Aluminium-Collars-2.jpg"
    ],
    description: "Designed exclusively for Olympic barbells, these collars are made from high-grade 6061 billet aluminum the same material used in aircraft components for superior strength and durability. The lever mechanism ensures a tight, slip-free grip, aided by a natural rubber strip that locks firmly onto the barbell sleeve. With a 2-inch inner diameter, these collars offer a snug fit and reliable performance during intense lifting sessions",
    shortDescription: "Precision-crafted aluminum collars with lever-lock and rubber grip for a secure hold on Olympic barbells.",
    specifications: {
      Weight:	"380 gram (190grm each)",
      Mechanism:	"lever Mechanism",
    InnerDiameter	:"Open position 50.3 mm",
    ClosedPosition :"49.8mm",
      Warranty :	"1 yr",
      Packing:"wrapped in polyethene bags and corrugated box",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "6061 billet aluminum same material serves for the aircraft parts",
        image: "/Robust-Accessories/Aluminium-Collars-1.jpg"
      },
      {
        title: " QUICK LOCK MECHANISM ",
        description: "Lever lock mechanism for quick and easy locking of the barbell sleeve.",
        image: "/Robust-Accessories/Aluminium-Collars-5.jpg"
      },
      {
        title: " OLYMPIC BARRBELL STANDARD",
        description: " The barbell features a 50 mm inner diameter, perfectly compatible with Olympic barbells. Its inner surface is lined with natural, scratch-resistant rubber to protect the barbell sleeve.",
        image: "/Robust-Accessories/Aluminium-Collars-3.jpg"
      },
      {
        title: "TWO CLICK LOCK ",
        description: "To know the lever activation click make it easy to identify If the collar is ready for use or not ",
        image: "/Robust-Accessories/Aluminium-Collars-2.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, {
    id: '16',
    name: "Barbell Rowing Attachment",
    category: "accessories",
    price: 2500,
    salePrice: 1200,
    images: [
      "/Robust-Accessories/Barbell-Rowing-Attachment-1.jpg",
      "/Robust-Accessories/Barbell-Rowing-Attachment-2.jpg",
      "/Robust-Accessories/Barbell-Rowing-Attachment-3.jpg",
      "/Robust-Accessories/Barbell-Rowing-Attachment-4.jpg",
      "/Robust-Accessories/Barbell-Rowing-Attachment-5.jpg",
      "/Robust-Accessories/Barbell-Rowing-Attachment-2.jpg"

    ],
    description: "Elevate your training with the Robust Regime Barbell Rowing Attachment designed for strength, durability, and multi-purpose use. Ideal for rows, landmine movements, and core-focused workouts, it’s a must-have for any serious fitness enthusiast. Whether at a gym or home, this attachment adds variety, intensity, and control to your strength training routine.",
    shortDescription: "Robust Regime's Barbell Rowing Attachment is a versatile tool for landmine, rowing, and full-body strength training.",
    specifications: {
      Material:"	High-quality Tata Mild Steel, 6 mm thick for ultimate durability.",
      InnerDiameter	:"52 mm, compatible with standard Olympic barbells.",
      HandleLength:"	24.5 cm, ensuring a comfortable and secure grip.",
      BaseWidth	:"12 cm, providing a stable and balanced fit.",
      CarabinerHoleSize	:"14 mm, suitable for attaching chains or other accessories.",
      WeightCapacity :"Supports up to 300 kg, suitable for both beginners and professional athletes.",
      Fabrication	:"Built with CO2 Welding for precise, long-lasting construction.",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "ROBUST CONSTURCTION",
        description: "Build with 6mm mils steel perfect for the high strength capacity And machined ring with no edges so cannot cause any scratch on the barbell.",
        image: "/Robust-Accessories/Barbell-Rowing-Attachment-1.jpg"
      },
      {
        title: "STANDARD COLAR OPENING ",
        description: "Barbell rowing attachment is Designed for the Olympic barbell standards with 50.4 mm opening  diameter",
        image: "/Robust-Accessories/Barbell-Rowing-Attachment-3.jpg"
      },
      {
        title: " MICRO ADJUSTMENT",
        description: " Laser cut holes are for the micro adjustment for the efficient use of the product",
        image: "/Robust-Accessories/Barbell-Rowing-Attachment-4.jpg"
      },
      {
        title: " SOLID FABRICATED JOINTS",
        description: "The co2 fabrication from insert to plate is design in a way to bare heavy weight with that will last for long  period of time",
        image: "/Robust-Accessories/Barbell-Rowing-Attachment-5.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, {
    id: '17',
    name: "Deadlift Jack",
    category: "accessories",
    price: 3900,
    salePrice: 2920,
    images: [
      "/Robust-Accessories/Deadlift-Jack-1.jpg",
      "/Robust-Accessories/Deadlift-Jack-1.jpg",
      "/Robust-Accessories/Deadlift-Jack-1.jpg",
      "/Robust-Accessories/Deadlift-Jack-1.jpg",
      "/Robust-Accessories/Deadlift-Jack-1.jpg",
      "/Robust-Accessories/Deadlift-Jack-1.jpg"
    ],
    description: "Upgrade your lifting game with the Deadlift Mini Jack crafted from durable 2x2 11-gauge steel and weighing just 5.64 kg, it's the perfect blend of strength and convenience. Its lever mechanism makes loading and unloading plates effortless, helping you focus on form and performance. Compact and portable, it's a must-have for home gyms, commercial setups, or mobile training sessions.",
    shortDescription: "The Deadlift Mini Jack simplifies plate loading, offering strength and portability for efficient deadlift sessions.",
    specifications: {
      Material:"2×2 inch pipe 11-gauge CR tubing steel.",
      ProductWeight: "5.64kg",
      Dimension:"325x655x150",
      BarHolder: "Polyurethane (PU) plastic , Stainless Steel Allen bolt to secure barbell knurl from scratched.",
      SurfaceFinish: "7 tank black powder coat.",
      Handle:" molded soft rubber.",
      WeightLoadCapacity: "500kg",
      BoxPackingDimension :" 380x680x170mm",
      Warranty: "4 yr.",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-Accessories/Deadlift-Jack-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-Accessories/Deadlift-Jack-1.jpg"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-Accessories/Deadlift-Jack-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-Accessories/Deadlift-Jack-1.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, {
    id: '18',
    name: "Drop Slam Crash Pad",
    category: "accessories",
    price: 9100,
    salePrice: 8200,
    images: [
      "/Robust-Accessories/Drop-Slam-Crash-Pad-1.jpg",
      "/Robust-Accessories/Drop-Slam-Crash-Pad-2.jpg",
      "/Robust-Accessories/Drop-Slam-Crash-Pad-3.jpg",
      "/Robust-Accessories/Drop-Slam-Crash-Pad-4.jpg",
      "/Robust-Accessories/Drop-Slam-Crash-Pad-5.jpg",
      "/Robust-Accessories/Drop-Slam-Crash-Pad-6.jpg"

    ],
    description: "These ultra-durable crash pads are crafted from high-density bonded foam and wrapped in tough PU ballistic nylon with anti-slip texture, ensuring maximum impact resistance and safety during intense training. Measuring 24 x 36 x 6 and weighing around 10 kg, they strike the perfect balance between portability and stability, ideal for martial arts, gymnastics, and strength training. With strong zip locks, X-stitched handles, and sold in convenient pairs, these pads are designed for reliability, comfort, and ease of use in any setting.",
    shortDescription: "High-density foam crash pads with durable PU ballistic cover, built for impact protection, portability, and long-lasting performance",
    specifications: {
   
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "ANTI RIP FABRICK",
        description: "This fabric is built to withstand heavy use and offers excellent moisture resistance.",
        image: "/Robust-Accessories/Drop-Slam-Crash-Pad-4.jpg"
      },
      {
        title: " NYLON WEBBING STRAP",
        description: " Double-stitched nylon webbing straps are securely attached to the PU-coated nylon fabric, ensuring durability and easy portability.",
        image: "/Robust-Accessories/Drop-Slam-Crash-Pad-6.jpg"
      },
      {
        title: "HEAVY DUTY ZIPPER",
        description: "A heavy-duty zip lock ensures quick fastening of the high density foam and is concealed within a zip pocket for a clean finish.",
        image: "/Robust-Accessories/Drop-Slam-Crash-Pad-5.jpg"
      },
      {
        title: " HYDENSITY FOAM ",
        description: "The high-density industrial grade foam in the drop slam crash pad safeguards your floor from damage while effectively reducing noise",
        image: "/Robust-Accessories/Drop-Slam-Crash-Pad-1.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, {
    id: '19',
    name: "Falcon Pulley System Racks",
    category: "accessories",
    price: 21990,
    salePrice: 14490,
    images: [
      "/Robust-Accessories/Falcon-Pulley-system-racks-1.png",
      "/Robust-Accessories/Falcon-Pulley-system-racks-2.png",
      "/Robust-Accessories/Falcon-Pulley-system-racks-1.png",
      "/Robust-Accessories/Falcon-Pulley-system-racks-2.png",
      "/Robust-Accessories/Falcon-Pulley-system-racks-1.png",
      "/Robust-Accessories/Falcon-Pulley-system-racks-2.png"
    ],
    description: "These ultra-durable crash pads are crafted from high-density bonded foam and wrapped in tough PU ballistic nylon with anti-slip texture, ensuring maximum impact resistance and safety during intense training. Measuring 24 x 36 x 6 and weighing around 10 kg, they strike the perfect balance between portability and stability, ideal for martial arts, gymnastics, and strength training. With strong zip locks, X-stitched handles, and sold in convenient pairs, these pads are designed for reliability, comfort, and ease of use in any setting.",
    shortDescription: "High-density foam crash pads with durable PU ballistic cover, built for impact protection, portability, and long-lasting performance",
    specifications: {
     
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-Accessories/Falcon-Pulley-system-racks-1.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-Accessories/Falcon-Pulley-system-racks-2.png"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-Accessories/Falcon-Pulley-system-racks-3.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-Accessories/Falcon-Pulley-system-racks-2.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, {
    id: '20',
    name: "Robust Chalk Bowl Stand",
    category: "accessories",
    price: 10350,
    salePrice: 7189,
    images: [
      "/Robust-Accessories/Robust-Chalk-Bowl-stand-1.png",
      "/Robust-Accessories/Robust-Chalk-Bowl-stand-2.png",
      "/Robust-Accessories/Robust-Chalk-Bowl-stand-3.png",
      "/Robust-Accessories/Robust-Chalk-Bowl-stand-4.png",
      "/Robust-Accessories/Robust-Chalk-Bowl-stand-5.png",
      "/Robust-Accessories/Robust-Chalk-Bowl-stand-6.png"
    ],
    description: "Say goodbye to chalk dust trails with the Gym Chalk Bowl Stand, a sleek and functional addition to your gym setup. Featuring a 300mm stainless steel bowl, laser-cut fin legs for stability, and 25mm wheels for easy mobility, it keeps chalk contained and accessible. A side hanger adds extra utility, letting you store resistance bands, barbell collars, and more—all in one tidy, mobile unit.",
    shortDescription: "Keep your gym clean and organized with the Gym Chalk Bowl Stand designed for mess-free chalk use and smart storage.",
    specifications: {
      Length:"435mm/17″",
      Width	:"435mm/17″",
      Height	:"1192mm/47″",
      Hardware:"	M12 stainless steel",
      Hanger:	"5mm laser cut",
      BaseFinStand	:"6mm laser cut",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "STAINLESS STEEL BOWL",
        description: "The 304 stainless steel non reactive material Boel is bolted to the chalk stand foe easy washing with water and reused",
        image: "/Robust-Accessories/Robust-Chalk-Bowl-stand-5.png"
      },
      {
        title: "2”INDUSTRIAL GRADE",
        description: "The polyurethane Industrial grade wheel are highly durable ,smooth function and highly durable  ",
        image: "/Robust-Accessories/Robust-Chalk-Bowl-stand-3.png"
      },
      {
        title: " EASY MOBILITY",
        description: "The 2 inch wheel makes the chalk bowl stand move freely with no spill And the fin design base make the product more stable while ",
        image: "/Robust-Accessories/Robust-Chalk-Bowl-stand-4.png"
      },
      {
        title: "Storage hooks ",
        description: "Extra storage hooks are provided to store fraction plate ,weight lifting belt  ,etc ",
        image: "/Robust-Accessories/Robust-Chalk-Bowl-stand-6.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '21',
    name: "Robust Dip Bar Attachment",
    category: "accessories",
    price: 5599,
    salePrice: 4190,
    images: [
      "/Robust-accesories-2/Robust-Dip-Bar-Attachment-1.png",
      "/Robust-accesories-2/Robust-Dip-Bar-Attachment-2.png",
      "/Robust-accesories-2/Robust-Dip-Bar-Attachment-3.png",
      "/Robust-accesories-2/Robust-Dip-Bar-Attachment-4.png",
      "/Robust-accesories-2/Robust-Dip-Bar-Attachment-5.png",
      "/Robust-accesories-2/Robust-Dip-Bar-Attachment-6.png",
    ],
    description: "Designed for strength and compatibility, the Robust Dip Bar Attachment fits seamlessly with all Robust Regime rack models using 75×75 mm tubing. Built from 11-gauge CR steel, with a 48mm handle pipe and 109° ergonomic angle, it supports up to 400 kg of dynamic load while offering comfortable hand placement. With PU rubber alignment, secure locking pins, and a textured black 7-tank powder coat, it ensures durability, rack protection, and superior grip during intense dip workouts",
    shortDescription: "The Robust Dip Bar Attachment offers fully adjustable, heavy-duty support for powerful dips on all Robust Regime racks.",
    specifications: {
      Material: "foundation structure made up of 60mmx40mm 11-gauge CR pipe.HandleRoundPipe 48mm Diameter pipe.6mm laser cut plate . PU for protecting upright form attachment locking.",
      SurfaceTreatment: "Sand blasting and 7 tank textured powder coating.",
      Dimension: "L: 620mm X W: 540mm X H: 210mm",
      ProductWeight: "7 kg.",
      LockingPin: "16mm diameter pin.",
      Warranty:" 2 Years",
      DynamicWeightCapacity: "400 kg",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "STRUCTURE ",
        description: "Strong and durable construction to support intense workouts. Quickly mounts to compatible squat racks or power racks without hassle Compact & Space-Saving",
        image: "/Robust-accesories-2/Robust-Dip-Bar-Attachment-6.png"
      },
      {
        title: " MULTI-EXERCISE UTILITY ",
        description: "Perfect for dips, leg raises, knee raises, L-sits, push-ups, and core training. Ideal for beginners, athletes, and advanced lifters who want to strengthen their upper body.",
        image: "/Robust-accesories-2/Robust-Dip-Bar-Attachment-1.png",
      },
      {
        title: " ERGONOMIC HANDLE DESIGN",
        description: " Proper grip spacing ensures comfort and reduces strain on wrists and shoulders. Textured grip for stability and safety during dips and bodyweight exercises.",
        image: "/Robust-accesories-2/Robust-Dip-Bar-Attachment-2.png",
      },
      // {
      //   title: "Quick-Lock System",
      //   description: "Patent-pending locking mechanism allows for weight changes in seconds",
      //   image: "/Robust-accesories-2/Robust-Dip-Bar-Attachment-4.png",
      // }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
   {
    id: '22',
    name: "Robust Double D Row Handle",
    category: "accessories",
    price: 3499,
    salePrice: 2099,
    images: [
      "/Robust-accesories-2/Robust-Double-D_Row-Handle.png",
      "/Robust-accesories-2/Robust-Double-D_Row-Handle.png-2.png",
      "/Robust-accesories-2/Robust-Double-D_Row-Handle.png-3.png",
      "/Robust-accesories-2/Robust-Double-D_Row-Handle.png-4.png",
      "/Robust-accesories-2/Robust-Double-D_Row-Handle.png-5.png",
      "/Robust-accesories-2/Robust-Double-D_Row-Handle.png",
    ],
    description: "Engineered for high performance, the Robust Regime Double D Handle features a 28mm standard barbell-style grip with 1.2mm knurling, eliminating rubber wear and ensuring long-lasting traction. CNC laser-cut and CO2 welded for structural precision, it’s compatible with low rows, T-bar rows, V-bar pull-ups, and close-grip lat pulldowns. With a 2-year warranty and curved barbell-friendly design, this handle is the perfect mix of durability, function, and versatility.",
    shortDescription: "The Robust Regime Double D Handle delivers unmatched grip, strength, and versatility built for heavy-duty rowing and pull exercises.",
    specifications: {
      dimensions: "40cm x 20cm x 23cm (per dumbbell)",
      weight: "32.5kg (per dumbbell)",
      material: "Chrome-plated steel, premium rubber grips",
      maxWeight: "32.5kg per dumbbell",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "STRUCTURE",
        description: "Built from solid steel for maximum durability and strength.Promotes a natural hand position, reducing wrist and joint strain. Engineered to handle high resistance for serious strength training",
        image:  "/Robust-accesories-2/Robust-Double-D_Row-Handle.png"
      },
      {
        title: " LASER CUT AND FABRICATED",
        description: " Laser cut 5mm thick 60KPSI Tensile strength fabricated 28mm knurl handle  with co2 welding for robust joint .",
        image: "/Robust-accesories-2/Robust-Double-D_Row-Handle.png-2.png"
      },
      {
        title: "SURFACE PLATING",
        description: " The plating used for the handle is black oxide Provides a protective layer that helps resist rust and oxidation Provides good resistance to abrasion from frequent handling and plate loading.",
        image: "/Robust-accesories-2/Robust-Double-D_Row-Handle.png-4.png"
      },
      {
        title: " KNURL ",
        description: "Unlike chrome (which can feel slippery), black oxide retains a more natural, raw steel feel, preferred by many lifters.And works perfectly for the knurl handle for max grip. ",
        image: "/Robust-accesories-2/Robust-Double-D_Row-Handle.png-3.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, {
    id: '23',
    name: "Robust GHD Rack Attachment",
    category: "accessories",
    price: 25000,
    salePrice: 17500,
    images: [
      "/Robust-accesories-2/Robust-GHD-Rack-Attachment-1.jpg",
      "/Robust-accesories-2/Robust-GHD-Rack-Attachment-2.jpg",
      "/Robust-accesories-2/Robust-GHD-Rack-Attachment-3.jpg",
      "/Robust-accesories-2/Robust-GHD-Rack-Attachment-4.jpg",
      "/Robust-accesories-2/Robust-GHD-Rack-Attachment-5.jpg",
      "/Robust-accesories-2/Robust-GHD-Rack-Attachment-6.jpg",
    ],
    description: "",
    shortDescription: "",
    specifications: {
      Material: "75mmx75mm Mild Steel Square Pipe 11 Gauge.",
      BasePlate: "8mm ,100 mm Diameter.",
      AdjustableBolt:" M16 Bolt quick lock Threads.",
      LegRoller: "High Density Molded Foam roller.",
      GHDCushioning:" High Density Dome Foam.",
      FoamWarranty:" 1 Year.",
      StructuralWarranty:" 5 Years.",
     
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-accesories-2/Robust-GHD-Rack-Attachment-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-accesories-2/Robust-GHD-Rack-Attachment-2.jpg"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-accesories-2/Robust-GHD-Rack-Attachment-3.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-accesories-2/Robust-GHD-Rack-Attachment-4.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, {
    id: '24',
    name: "Robust Gym Chalk",
    category: "accessories",
    price: 340,
    salePrice: 229,
    images: [
      "/Robust-accesories-2/Robust-Gym-Chalk-1.png",
      "/Robust-accesories-2/Robust-Gym-Chalk-2.png",
      "/Robust-accesories-2/Robust-Gym-Chalk-3.png",
      "/Robust-accesories-2/Robust-Gym-Chalk-4.png",
      "/Robust-accesories-2/Robust-Gym-Chalk-5.png",
      "/Robust-accesories-2/Robust-Gym-Chalk-6.png",
    ],
    description: "Robust Gym Chalk (GCP:250) forms a thin, anti-slip layer on your palms, offering superior grip and protection against skin tears during heavy lifts. Made from pure-grade magnesium carbonate, it absorbs moisture, reduces bar bounce, and minimizes stress on joints—helping you lift heavier with better control. More than just a grip aid, it’s a mindset tool that supports focus, consistency, and breakthrough performance in every session.",
    shortDescription: "Robust Gym Chalk (GCP:250) enhances grip, reduces slippage, and boosts lifting confidence with pure magnesium carbonate.",
    specifications: {
      Material: "composition: Magnesium Carbonate",
      Texture: "fine powder.",
      Color: "white",
      Packing:"air tight container and corrugated box.",
      Dimension: "8.2inch x 6inch x3.5 inch",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-accesories-2/Robust-Gym-Chalk-1.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-accesories-2/Robust-Gym-Chalk-2.png"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-accesories-2/Robust-Gym-Chalk-3.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-accesories-2/Robust-Gym-Chalk-4.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, {
    id: '25',
    name: "Robust Mag Lat pull down attachment",
    category: "accessories",
    price: 11250,
    salePrice: 8999,
    images: [
      "/Robust-accesories-2/Robust-Mag-Lat-pull-down-attachment-1.jpg",
      "/Robust-accesories-2/Robust-Mag-Lat-pull-down-attachment-2.jpg",
      "/Robust-accesories-2/Robust-Mag-Lat-pull-down-attachment-3.jpg",
      "/Robust-accesories-2/Robust-Mag-Lat-pull-down-attachment-4.jpg",
      "/Robust-accesories-2/Robust-Mag-Lat-pull-down-attachment-5.jpg",
      "/Robust-accesories-2/Robust-Mag-Lat-pull-down-attachment-6.jpg",
    ],
    description: "Engineered for effective upper back training, the Robust Mag Lat Pulldown Attachment features ergonomic gripping with a flat palm plate and circular finger bar for focused muscle activation. Offering pronated, supinated, and natural grips across close, mid, and wide options, it’s built from 8mm laser-cut steel with rubber-coated handles for comfort and slip resistance. Finished with a stainless steel ring insert for smooth machine attachment, it’s a premium choice for serious cable machine workouts",
    shortDescription: "The Robust Mag Lat Pulldown Attachment enhances lat engagement with ergonomic multi-grip options and heavy-duty construction.",
    specifications: {
        Material: "8mm steel,20mm rod and rubber coating with texture.",
        CompleteSet: "5 lat pull down attachments. Total weight :12.4 kg",
        Carabiner: "available for quick and easy change of Attachments.",
      Weight:
      "wide Grip lat bar: 3.8 kg. Mid-range lat bar inner grip: 2.3 kg. Mid-range lat bar outer grip: 2.4 kg. Close grip lat bar 9.5 inches: 1.9kg.Close grip lat bar 8 inches: 2 kg.",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-accesories-2/Robust-Mag-Lat-pull-down-attachment-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-accesories-2/Robust-Mag-Lat-pull-down-attachment-2.jpg"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-accesories-2/Robust-Mag-Lat-pull-down-attachment-3.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-accesories-2/Robust-Mag-Lat-pull-down-attachment-4.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, {
    id: '35',
    name: "Robust Multi Grip Pull-Up Bar",
    category: "accessories",
    price: 6699,
    salePrice: 5499,
    images: [
      "/Robust-accesories-2/Robust-Multi-Grip-Pull-Up-Bar-1.jpg",
      "/Robust-accesories-2/Robust-Multi-Grip-Pull-Up-Bar-1.jpg",
      "/Robust-accesories-2/Robust-Multi-Grip-Pull-Up-Bar-1.jpg",
      "/Robust-accesories-2/Robust-Multi-Grip-Pull-Up-Bar-1.jpg",
      "/Robust-accesories-2/Robust-Multi-Grip-Pull-Up-Bar-1.jpg",
      "/Robust-accesories-2/Robust-Multi-Grip-Pull-Up-Bar-1.jpg"
    ],
    description: "Designed for dynamic pull-up variations, the Robust Multi-Grip Pull-Up Bar features wide, close (neutral), and cross-grip positions with both pronated and supinated options. Made from 32mm 11-gauge steel and finished with a 7-tank powder-coated textured black surface, it ensures strong grip, anti-rust durability, and chip resistance. Compatible with all 75×75 mm racks, including Robust Power Rack HP493 and P493, it can be mounted upright or inverted for optimal reach and performance.",
    shortDescription: "The Robust Multi-Grip Pull-Up Bar offers versatile grip options for targeted upper body training with durable, ergonomic design.",
    specifications: {
      Material: "The Robust Multi -grip Attachment build with 32mm diameter 11 gauge round pipe. 8mm MS Plate laser cut.",
      Design: "3 Ergonomical grip option for both pronated and supination gripping, the Depression profile can be used upside down for the short arm reach athlete too.",
      ProductDimension:" L: 1041mm X W:214mm X H:178mm.",
      ProductWeight:" 9 kgs.",
      SurfaceFinish: "7 tank powder Coating Textured Black for extra grip.",
      Warranty: "5 years on structural damage.",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-accesories-2/Robust-Multi-Grip-Pull-Up-Bar-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-accesories-2/Robust-Multi-Grip-Pull-Up-Bar-1.jpg"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-accesories-2/Robust-Multi-Grip-Pull-Up-Bar-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-accesories-2/Robust-Multi-Grip-Pull-Up-Bar-1.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, {
    id: '26',
    name: "Robust Spotter Arms SA560",
    category: "accessories",
    price: 11000,
    salePrice: 8499,
    images: [
      "/Robust-accesories-2/Robust-Spotter-Arms-SA560-1.jpg",
      "/Robust-accesories-2/Robust-Spotter-Arms-SA560-2.jpg",
      "/Robust-accesories-2/Robust-Spotter-Arms-SA560-3.jpg",
      "/Robust-accesories-2/Robust-Spotter-Arms-SA560-4.jpg",
      "/Robust-accesories-2/Robust-Spotter-Arms-SA560-5.jpg",
      "/Robust-accesories-2/Robust-Spotter-Arms-SA560-6.jpg",
    ],
    description: "The Robust Spotter Arm SA560 is a critical safety attachment for any lifter—beginner or pro—providing immediate support during failed reps. Built with 11-gauge 75×75mm TATA Steel, it can handle up to 200 kg, ensuring stability and protection under heavy loads. Its surface is lined with high-density polyethylene plastic to shield your barbell from damage during drops, preserving both equipment and performance.",
    shortDescription: "The Robust Spotter Arm SA560 ensures lifter and barbell safety with heavy-duty construction and protective design.",
    specifications: {
        Material :"build with structure CR  pipe of 3×75,8mm plates.",
        SurfaceCoating:"7 tank powder Coating.",
      WeightCapacity : "200 kg .",
      FaceMaterial : "UHMW surface 6mm for protecting barbell and barbell knurls.",
      PartDimension :" L:22″ X W 3.5″ X 8″.",
      Warranty:" 2 year.",
      ProductWeight:"7kg each.",
      Hardware: "ss fasteners for the 6mm UHMW .",
      packing: "corrugated box.",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-accesories-2/Robust-Spotter-Arms-SA560-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-accesories-2/Robust-Spotter-Arms-SA560-2.jpg"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-accesories-2/Robust-Spotter-Arms-SA560-3.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-accesories-2/Robust-Spotter-Arms-SA560-4.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }, {
    id: '27',
    name: "Sandwich J cup",
    category: "accessories",
    price: 6499,
    salePrice: 4990,
    images: [
      "/Robust-accesories-2/Sandwich-J-cup-1.png",
      "/Robust-accesories-2/Sandwich-J-cup-2.png",
      "/Robust-accesories-2/Sandwich-J-cup-3.png",
      "/Robust-accesories-2/Sandwich-J-cup-4.png",
      "/Robust-accesories-2/Sandwich-J-cup-5.png",
      "/Robust-accesories-2/Sandwich-J-cup-2.png",
    ],
    description: "",
    shortDescription: "",
    specifications: {
     
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-accesories-2/Sandwich-J-cup-1.png",
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-accesories-2/Sandwich-J-cup-2.png",
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-accesories-2/Sandwich-J-cup-3.png",
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-accesories-2/Sandwich-J-cup-4.png",
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },


  //barbells
  {
    id: '28',
    name: "Excalibur Power Bar",
    category: "barbells",
    price: 22470,
    salePrice: 17740,
    images: [
      "/Robust-Barbells/Excalibur-Power-Bar-1.png",
      "/Robust-Barbells/Excalibur-Power-Bar-2.png",
      "/Robust-Barbells/Excalibur-Power-Bar-3.png",
      "/Robust-Barbells/Excalibur-Power-Bar-4.png",
      "/Robust-Barbells/Excalibur-Power-Bar-5.png",
      "/Robust-Barbells/Excalibur-Power-Bar-2.png"
    ],
    description: "The Excalibur Powerlifting Barbell is forged from high-tensile alloy steel with a 29mm rigid shaft and IPF-standard specs, making it ideal for serious lifters and official meet training. Designed for elite squats, deadlifts, and bench presses, it features precision knurling with a center mark for grip and control without excess abrasiveness. Whether for commercial gyms or home setups, this barbell offers unmatched strength, spin, and stability.",
    shortDescription: "The Excalibur Powerlifting Barbell is a competition-grade, 20kg Olympic bar built for peak performance, precision, and power.",
    specifications: {
      BarType: "Power Barbell",
      BarWeight: "20kg",
      ShaftDiameter: "29mm",
      SleeveDiameter: "50mm",
      BarLength: "7 feet 2 inch",
      Knurl: "1.5mm",
      KnurlType: "Aggressive Knurl",
      LoadableSleeveLength: "415mm",
      Bushing: "Bronze Bushings",
      Maxload: "1800 lbs / 816 kg",
      SurfaceTreatment: "Shaft – Hard Chrome, Sleeve – Hard Chrome",
      Brand: "Robust Regime",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "BUILD WITH IPF STANDARDS",
        description: " Build for the power lifters. Excalibur barbell is built with 29mm shaft diameter and 20 kg weight. With center knurl. 2200mm or 7.2 ft length. Sleeve loading length 415mm. With low whip.",
        image: "/Robust-Barbells/Excalibur-Power-Bar-1.png"
      },
      {
        title: " BRONZE BUSHING ",
        description: "The Moderate Whip and bushing type makes this barbell ideal for the power lifters With adequate amount of spin in sleeve.",
        image: "/Robust-Barbells/Excalibur-Power-Bar-2.png"
      },
      {
        title: " 1.5 mm volcanic Knurling",
        description: "The Excalibur power bar comes with 1.5mm volcanic knurl For the aggressive grip over the barbell but volcanic knurl pattern don’t tear the skin off",
        image: "/Robust-Barbells/Excalibur-Power-Bar-4.png"
      },
      {
        title: " SURFACE FINISH ",
        description: "The heard Chrome surface finish make this bar more durable and long lasting even in humid climate ",
        image: "/Robust-Barbells/Excalibur-Power-Bar-1.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '29',
    name: "Knight Fury 1.2 Barbell",
    category: "barbells",
    price: 16990,
    salePrice: 13599,
    images: [
      "/Robust-Barbells/Knight-fury-1.2-barbell-1.png",
      "/Robust-Barbells/Knight-fury-1.2-barbell-2.png",
      "/Robust-Barbells/Knight-fury-1.2-barbell-3.png",
      "/Robust-Barbells/Knight-fury-1.2-barbell-4.png",
      "/Robust-Barbells/Knight-fury-1.2-barbell-2.png",
      "/Robust-Barbells/Knight-fury-1.2-barbell-1.png"
    ],
    description: "The Knight Fury 1.2 Olympic Barbell is built for peak performance, featuring a 20kg, 28mm shaft with volcanic knurling for a secure grip. Its dual knurl marks provide versatility, supporting both Olympic and powerlifting styles with accurate hand placement. Designed with a moderate whip and bronze bushings, it ensures responsive lifts and smooth sleeve rotation. The black oxide finish enhances durability and protects against corrosion, making it reliable for long-term use. With a massive 680kg capacity, 7ft 2-inch length, and a lifetime whip warranty, it’s the ultimate choice for strength and performance training.",
    shortDescription: "The Knight Fury 1.2 Olympic Barbell delivers unmatched strength, precision, and durability for serious lifters.",
    specifications: {
      BarType: "Olympic, Multipurpose",
      BarWeight: "20kg",
      ShaftDiameter: "28mm",
      Knurl: "1.2mm",
      KnurlType: "Volcanic Knurling",
      CenterKnurl:"No center knurl",
      Whip :"Moderate",
      BarLength: "7ft 2 Inches",
      LoadableSleeveLength: "415mm",
      Bushing: "Bronze Bushing",
      Maxload: "1500 Ibs/680 kg",
      warranty: "Lifetime on Whip.(T&C Apply)",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "OLYMPIC MULTIPURPOSE BARBELL",
        description: "Build for powerlifting and Olympic lifting styles with dual knurl marks on both sides of the shaft for added versatility, allowing for precise hand placement 2200mm or 7.2 ft length. Sleeve loading length 415mm. With moderate whip.",
        image: "/Robust-Barbells/Knight-fury-1.2-barbell-1.png"
      },
      {
        title: "1.2 mm volcanic Knurling ",
        description: " The Knight fury 1.2 comes with Olympic standards 1.2mm volcanic knurl For the sturdy grip over the barbell.",
        image: "/Robust-Barbells/Knight-fury-1.2-barbell-3.png"
      },
      {
        title: "BRONZE BUSHING",
        description: "The Dual knurl rings and good whip  makes this barbell ideal for the Multipurpose use for power lifting and weight lifting.",
        image: "/Robust-Barbells/Knight-fury-1.2-barbell-4.png"
      },
      {
        title: " DUAL KNURL RINGS",
        description: "dual knurl marks on both sides of the shaft for added versatility, allowing for precise hand placement for both powerlifting and Olympic lifting styles",
        image: "/Robust-Barbells/Knight-fury-1.2-barbell-3.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '30',
    name: "Liberty-women's Barbell",
    category: "barbells",
    price: 18990,
    salePrice: 15490,
    images: [
      "/Robust-Barbells/Liberty-Women's-Barbell-1.png",
      "/Robust-Barbells/Liberty-Women's-Barbell-2.png",
      "/Robust-Barbells/Liberty-Women's-Barbell-3.png",
      "/Robust-Barbells/Liberty-Women's-Barbell-4.png",
      "/Robust-Barbells/Liberty-Women's-Barbell-5.png",
      "/Robust-Barbells/Liberty-Women's-Barbell-2.png"
    ],
    description: "",
    shortDescription: "",
    specifications: {
      BarType: "Standard Women’s Barbell",
      BarWeight: "15kg",
      ShaftDiameter: "25mm",
      SleeveDiameter: "50mm",
      Barlength: "6 feet 5 inch",
      Knurl: "1.2mm",
      KnurlType: "Volcanic Knurl",
      LoadableSleeveLength: "325mm",
      Bushing: "Bronze Bushings",
      Maxload: "1500lbs / 680 kg",
      SurfaceTreatment: "Shaft – Hard Chrome,Sleeve – Hard Chrome ",
      Brand: "Robust Regime",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: " OLYMPIC MULTIPURPOSE WOMENS BARBELL ",
        description: "Build for powerlifting and Olympic lifting styles with dual knurl marks on both sides of the shaft for added versatility, allowing for precise hand placement 2200mm or 7.2 ft length. Sleeve loading length 415mm. With GOOD whip",
        image: "/Robust-Barbells/Liberty-Women's-Barbell-1.png"
      },
      {
        title: "BRONZE BUSHING ",
        description: "The Dual knurl rings and good whip  makes this barbell ideal for the Multipurpose use for power lifting and weight lifting ",
        image: "/Robust-Barbells/Liberty-Women's-Barbell-4.png"
      },
      {
        title: " GROOVES ON LOADING SLEEVE",
        description: "The ring pattern on the loading sleeve give the resistant to the weight plate and help collar for more gripping on the sleeve.",
        image: "/Robust-Barbells/Liberty-Women's-Barbell-3.png"
      },
      {
        title: "HEARD CHROME FINISH",
        description: " The Liberty barbell comes with Heard chrome finish that makes the barbell look asthmatically good and better performance in humid atmosphere",
        image: "/Robust-Barbells/Liberty-Women's-Barbell-5.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '31',
    name: "Luster Knight 1.2 Barbell",
    category: "barbells",
    price: 19990,
    salePrice: 14599,
    images: [
      "/Robust-Barbells/Luster-Knight-1.2-Barbell-1.png",
      "/Robust-Barbells/Luster-Knight-1.2-Barbell-2.png",
      "/Robust-Barbells/Luster-Knight-1.2-Barbell-3.png",
      "/Robust-Barbells/Luster-Knight-1.2-Barbell-4.png",
      "/Robust-Barbells/Luster-Knight-1.2-Barbell-1.png",
      "/Robust-Barbells/Luster-Knight-1.2-Barbell-2.png"

    ],
    description: "Built for performance, the Luster Knight 1.2 is a 20kg Olympic barbell with a 28mm shaft, volcanic knurling, and dual knurl marks for versatile grip. Featuring a black oxide finish for corrosion resistance, chrome-plated sleeves for smooth spin, and a 680kg capacity, it’s made for intense training. With a 7ft 2-inch frame and lifetime whip warranty, this barbell is your reliable partner in strength.",
    shortDescription: "The Luster Knight 1.2 Olympic Barbell combines strength, grip, and durability for lifters pushing limits across powerlifting and Olympic lifting.",
    specifications: {
      BarType: "Olympic, Multipurpose",
      BarWeight: "20kg",
      ShaftDiameter: "28mm",
      Knurl: "1.2mm",
      KnurlType: "Volcanic Knurling",
      CenterKnurl :"No center knurl",
      Whip: "Moderate",
      BarLength: "7ft 2 Inches",
      LoadableSleeveLength: "415mm",
      Bushing: "Bronze Bushings",
      Maxload: "1500 lbs / 680kg",
      Warranty: "Lifetime on Whip.(T&C Apply)",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "OLYMPIC MULTIPURPOSE BARBELL ",
        description: "Build for powerlifting and Olympic lifting styles with dual knurl marks on both sides of the shaft for added versatility, allowing for precise hand placement 2200mm or 7.2 ft length. Sleeve loading length 415mm. With GOOD whip.",
        image: "/Robust-Barbells/Luster-Knight-1.2-Barbell-1.png"
      },
      {
        title: " BRONZE BUSHING ",
        description: "The Dual knurl rings and good whip  makes this barbell ideal for the Multipurpose use for power lifting and weight lifting ",
        image: "/Robust-Barbells/Luster-Knight-1.2-Barbell-4.png"
      },
      {
        title: "DUAL KNURL RINGS ",
        description: "dual knurl marks on both sides of the shaft for added versatility, allowing for precise hand placement for both powerlifting and Olympic lifting styles",
        image: "/Robust-Barbells/Luster-Knight-1.2-Barbell-3.png"
      },
      {
        title: "SURFACE FINISH",
        description: " The black oxide coating on the shaft enhances wear resistance, while the chrome sleeves protect against friction from plate loading, extending the barbell’s lifespan",
        image: "/Robust-Barbells/Luster-Knight-1.2-Barbell-3.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '32',
    name: "Robust Bicep Straight Bar",
    category: "barbells",
    price: 8699,
    salePrice: 5900,
    images: [
      "/Robust-Barbells/Robust-Bicep-Straight-Bar-1.png",
      "/Robust-Barbells/Robust-Bicep-Straight-Bar-2.png",
      "/Robust-Barbells/Robust-Bicep-Straight-Bar-3.png",
      "/Robust-Barbells/Robust-Bicep-Straight-Bar-4.png",
      "/Robust-Barbells/Robust-Bicep-Straight-Bar-5.png",
      "/Robust-Barbells/Robust-Bicep-Straight-Bar-6.png"
    ],
    description: "The Luster Knight 1.2 is a 20kg Olympic barbell built for lifters who train hard and demand precision. Its 28mm shaft features volcanic knurling and dual knurl marks for powerlifting and Olympic lifting versatility. With a corrosion-resistant black oxide finish, smooth chrome-plated sleeves, and a 680kg load capacity, it’s designed to endure complete with a lifetime whip warranty.",
    shortDescription: "The Luster Knight 1.2 Olympic Barbell is engineered for high-performance lifting, combining strength, grip, and durability.",
    specifications: {
      BarType: "Biceps Straight Bar",
      BarWeight: "8kg",
      ShaftDiameter: "28mm",
      SleeveDiameter: "50mm",
      BarLength: "1200mm",
      Knurl: "1.2mm",
      KnurlType: "Volcanic Knurling",
      LoadableSleeveLength: "170mm",
      Bushing: "2 Bronze Bushings",
      SurfaceTreatment: "Shaft – Hard Chrome, Sleeve – Hard Chrome",
      Brand: "Robust Regime",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "BICEP STRAIGHT BARBELL ",
        description: " Build for ISOLATION WORKOUTS with knurl the shaft for added versatility, allowing for precise hand placement 1200mm or 4 ft length.Sleeve loading length 170mm",
        image: "/Robust-Barbells/Robust-Bicep-Straight-Bar-1.png"
      }, 
      {
        title: "BRONZE BUSHING",
        description: "The Dual knurl rings and good whip makes this barbell ideal for the Multipurpose use for power lifting and weight lifting .",
        image: "/Robust-Barbells/Rob13333ust-Bicep-Straight-Bar-3.png"
      },
      {
        title: " GROOVES ON LOADING SLEEVE",
        description: "The ring pattern on the loading sleeve give the resistant to the weight plate and help collar for more gripping on the sleeve.",
        image: "/Robust-Barbells/Robust-Bicep-Straight-Bar-5.png"
      },
      {
        title: "1.2MM VOLCANIC KNURLING",
        description: " The Knight fury 1.2 comes with Olympic standards 1.2mm volcanic knurl for the study grip over the barbell",
        image: "/Robust-Barbells/Robust-Bicep-Straight-Bar-4.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '33',
    name: "Robust Bicep Straight Bar - Black Oxide",
    category: "barbells",
    price: 8699,
    salePrice: 5900,
    images: [
      "/Robust-Barbells/Robust-Bicep-Straight-bar-Blackoxide-1.png",
      "/Robust-Barbells/Robust-Bicep-Straight-bar-Blackoxide-2.png",
      "/Robust-Barbells/Robust-Bicep-Straight-bar-Blackoxide-3.png",
      "/Robust-Barbells/Robust-Bicep-Straight-bar-Blackoxide-4.png",
      "/Robust-Barbells/Robust-Bicep-Straight-bar-Blackoxide-5.png",
      "/Robust-Barbells/Robust-Bicep-Straight-bar-Blackoxide-6.png"
    ],
    description: "Train smarter and harder with the Robust EZ Bar designed to reduce wrist and elbow strain while maximizing arm gains. Its ergonomic curves support natural hand positioning, allowing you to hit your biceps and triceps without discomfort. Whether you're targeting the inner or outer head of your biceps, the bar's versatile grip options ensure every rep counts.",
    shortDescription: "The Robust EZ Bar is your go-to barbell for effective, joint-friendly bicep and tricep training.",
    specifications: {
      BarType: "Biceps Straight Bar",
      BarWeight: "8kg",
      ShaftDiameter: "28mm",
      SleeveDiameter: "50mm",
      BarLength: "1200mm",
      Knurl: "1.2mm",
      KnurlType: "Volcanic Knurling",
      LoadableSleeveLength: "170mm",
      Bushing: "2 Bronze Bushings",
      SurfaceTreatment: "Shaft – Back Oxide, Sleeve – Hard Chrome",
      Brand: "Robust Regime",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: " Durable Construction",
        description: " Made from heavy-duty steel for long-lasting performance.Available in Olympic sizes to fit  weight plates. Ensures even weight distribution for controlled lifts.",
        image: "/Robust-Barbells/Robust-Bicep-Straight-bar-Blackoxide-1.png"
      },
      {
        title: " KNURL GRIP",
        description: "Textured handle provides a secure, non-slip grip during workouts 1.2 mm volcanic knurling offers a strong grip while preventing skin tears.",
        image: "/Robust-Barbells/Robust-Bicep-Straight-bar-Blackoxide-5.png"
      },
      {
        title: "Chrome / Black Oxide Finish",
        description: " Protects against rust, corrosion, and wear.Bronze bushing for smooth sin of sleeve while use Easy plate loading and unloading with reduced friction.",
        image: "/Robust-Barbells/Robust-Bicep-Straight-bar-Blackoxide-6.png"
      }
      // {
      //   title: "Quick-Lock System",
      //   description: "Patent-pending locking mechanism allows for weight changes in seconds",
      //   image: "/Robust-Barbells/Robust-Bicep-Straight-bar-Blackoxide-4.png"
      // }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '34',
    name: "Robust-Buffalo-Bar",
    category: "barbells",
    price: 21499,
    salePrice: 18390,
    images: [
      "/Robust-Barbells-2/Robust-Buffalo-Bar-1.png",
      "/Robust-Barbells-2/Robust-Buffalo-Bar-2.png",
      "/Robust-Barbells-2/Robust-Buffalo-Bar-3.png",
      "/Robust-Barbells-2/Robust-Buffalo-Bar-4.png",
      "/Robust-Barbells-2/Robust-Buffalo-Bar-5.png",
      "/Robust-Barbells-2/Robust-Buffalo-Bar-2.png",
    ],
    description: "",
    shortDescription: "",
    specifications: {
      BarType: "Buffalo Barbell",
      BarWeight: "25kg",
      ShaftDiameter: "32mm",
      SleeveDiameter: "50mm",
      BarLength: "2405mm",
      Knurl: "1.5mm",
      KnurlType: "Aggressive Knurl",
      LoadableSleeveLength	:"–",
      Bushing: "	Bronze Bushings",
      Maxload	:"–",
      SurfaceTreatment: "Shaft – Hard Chrome, Sleeve – Hard Chrome",
      Brand: "Robust Regime",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: " DURABLE CONSTRUCTION",
        description: " Thick Shaft Diameter (32mm) :Provides a solid and stable grip for heavy lifts. Heavy-Duty Weight (25kg): Built for serious strength training and durability",
        image: "/Robust-Barbells-2/Robust-Buffalo-Bar-1.png"
      },
      {
        title: "BRONZE BUSHING ",
        description: "Offers smooth rotation and reliable performance for powerlifting movements.",
        image: "/Robust-Barbells-2/Robust-Buffalo-Bar-2.png"
      },
      {
        title: "KNURLING STANDARDS",
        description: " Aggressive 1.5mm Knurling Ensures a firm hold and maximum control during lifts.",
        image: "/Robust-Barbells-2/Robust-Buffalo-Bar-4.png",
      }
      // {
      //   title: "Quick-Lock System",
      //   description: "Patent-pending locking mechanism allows for weight changes in seconds",
      //   image: "/Robust-Barbells-2/Robust-Buffalo-Bar-4.png",
      // }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '50',
    name: "Robust Closed Hex Trap Bar",
    category: "barbells",
    price: 15249,
    salePrice: 12749,
    images: [
      "/Robust-Barbells-2/Robust-Closed-Hex-Trap-Bar-1.png",
      "/Robust-Barbells-2/Robust-Closed-Hex-Trap-Bar-2.png",
      "/Robust-Barbells-2/Robust-Closed-Hex-Trap-Bar-3.png",
      "/Robust-Barbells-2/Robust-Closed-Hex-Trap-Bar-4.png",
      "/Robust-Barbells-2/Robust-Closed-Hex-Trap-Bar-5.png",
      "/Robust-Barbells-2/Robust-Closed-Hex-Trap-Bar-6.png"
    ],
    description: "Level up your lifts with the Robust Hex Trap Bar, engineered for ergonomic efficiency and built to handle up to 454kg with ease. Featuring dual handle grips (28mm and 32mm), precision knurling, and a durable frame, it minimizes lower back strain while maximizing control. Whether you're training at home or in a gym, this bar is ideal for deadlifts, shrugs, farmer carries, and total-body conditioning.",
    shortDescription: "The Robust Hex Trap Bar offers ergonomic strength training with dual grips, superior stability, and up to 454kg capacity perfect for deadlifts, shrugs, and more",
    specifications: {
      TotalBarlength: "2180mm",
      Barweight: "26kg",
      LoadableSleeveLength: "406mm",
      ShaftDiameter:"28mm & 32mm",
      Knurling : "1.5mm aggressive knurl for superior grip",
      ShaftSleeveCoating: "7 Tank Black Powder Coat for enhanced durability",
      MaximumLoadCapacity: "1000lbs (454kg), built for serious strength training",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Durable Construction",
        description: " Heavy-duty frame built to withstand intense training and long-term use.Promotes natural body alignment, reducing strain on the lower back and enhancing lifting efficiency.",
        image: "/Robust-Barbells-2/Robust-Closed-Hex-Trap-Bar-1.png"
      },
      {
        title: " DUAL GRIP OPRTION",
        description: " Equipped with both high and low handles, allowing versatile lifting options for beginners and advanced lifters.Promotes natural body alignment, reducing strain on the lower back and enhancing lifting efficiency.",
        image: "/Robust-Barbells-2/Robust-Closed-Hex-Trap-Bar-5.png"
      },
      {
        title: " SMOOTH PLATE LOADING SLEEVES.",
        description: " Compatible with Olympic-sized weight plates for progressive overload training.Ensures stability and safety, making it easier to maintain form and prevent injuries.",
        image: "/Robust-Barbells-2/Robust-Closed-Hex-Trap-Bar-3.png"
      },
      {
        title: " DUAL GRIP OPRTION",
        description: " Provides a secure, anti-slip grip for maximum control during heavy lifts.Rust-resistant coating for long-lasting protection and professional aesthetics.",
        image: "/Robust-Barbells-2/Robust-Closed-Hex-Trap-Bar-4.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '36',
    name: "Robust Curl Barbell",
    category: "barbells",
    price: 8699,
    salePrice: 5900,
    images: [
      "/Robust-Barbells-2/Robust-Curl-Barbell-1.png",
      "/Robust-Barbells-2/Robust-Curl-Barbell-2.png",
      "/Robust-Barbells-2/Robust-Curl-Barbell-3.png",
      "/Robust-Barbells-2/Robust-Curl-Barbell-4.png",
      "/Robust-Barbells-2/Robust-Curl-Barbell-5.png",
      "/Robust-Barbells-2/robust-curl.webp"
    ],
    description: "The Robust EZ Bar is designed for serious lifters who want to grow their arms without stressing their joints. Its ergonomic curved shape reduces wrist strain during curls and extensions, allowing for longer, more comfortable sessions. With multiple grip positions, you can target both inner and outer bicep heads for a truly versatile and effective arm workout.",
    shortDescription: "Train harder and safer with the Robust EZ Bar engineered to reduce wrist strain while maximizing bicep and tricep gains.",
    specifications: {
      BarType: "EZ Curl Barbell",
      BarWeight:"	10 kg",
      ShaftDiameter	:"28 mm",
      SleeveDiameter	:"50 mm",
      BarLength:"	1200 mm",
      Knurl:"	1.2 mm",
      KnurlType:"	Volcanic Knurling",
      LoadableSleeveLength	:"170 mm",
      Bushing: "Bronze Bushings",
      MaxLoad:"	–",
      SurfaceTreatment :"Shaft – Black Oxide , Sleeve – Hard Chrome",
      Brand	:"Robust Regime",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Durable Construction",
        description: " Heavy-Duty Steel Construction Built for durability and high performance under heavy loads.Ergonomic EZ Curl Design Angled shaft reduces wrist stress and improves grip comfort during curls and extensions.",
        image: "/Robust-Barbells-2/Robust-Curl-Barbell-1.png"
      },
      {
        title: " KNURL GRIP",
        description: "Textured handle provides a secure, non-slip grip during workouts 1.2 mm volcanic knurling offers a strong grip while preventing skin tears.",
        image: "/Robust-Barbells-2/Robust-Curl-Barbell-3.png",
      },
      {
        title: " BRONZE BUSHING ",
        description: "Offers smooth rotation and reliable performance for powerlifting movements.",
        image: "/Robust-Barbells-2/Robust-Curl-Barbell-2.png",
      },
      {
        title: " Chrome / Black Oxide Finish",
        description: " Protects against rust, corrosion, and wear.Bronze bushing for smooth sin of sleeve while use Easy plate loading and unloading with reduced friction.",
        image: "/Robust-Barbells-2/robust-curl.webp",
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '37',
    name: "Robust Curl Barbell Hard Chrome",
    category: "barbells",
    price: 8699,
    salePrice: 5900,
    images: [
      "/Robust-Barbells-2/Robust-Curl-Barbell-Hard-Chrome-1.png",
      "/Robust-Barbells-2/Robust-Curl-Barbell-Hard-Chrome-2.png",
      "/Robust-Barbells-2/Robust-Curl-Barbell-Hard-Chrome-3.png",
      "/Robust-Barbells-2/Robust-Curl-Barbell-Hard-Chrome-4.png",
      "/Robust-Barbells-2/Robust-Curl-Barbell-Hard-Chrome-5.png",
      "/Robust-Barbells-2/Robust-Curl-Barbell-Hard-Chrome-2.png"

    ],
    description: "The Robust EZ Bar is designed for serious lifters who want to grow their arms without stressing their joints. Its ergonomic curved shape reduces wrist strain during curls and extensions, allowing for longer, more comfortable sessions. With multiple grip positions, you can target both inner and outer bicep heads for a truly versatile and effective arm workout.",
    shortDescription: "Train harder and safer with the Robust EZ Bar — engineered to reduce wrist strain while maximizing bicep and tricep gains.",
    specifications: {
      BarType: "EZ Curl Barbell",
      BarWeight: "10kg",
      ShaftDiameter: "28mm",
      SleeveDiameter: "50mm",
      Barlength: "1200mm",
      Knurl: "1.2mm",
      KnurlType: "Volcanic Knurling",
      LoadableSleeveLength: "170mm",
      Bushing: "Bronze Bushings",
      Maxload:"	–",
      SurfaceTreatment: "Shaft – Hard Chrome, Sleeve – Hard Chrome",
      Brand: "Robust Regime",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Durable Construction",
        description: " Heavy-Duty Steel Construction Built for durability and high performance under heavy loads. Ergonomic EZ Curl Design Angled shaft reduces wrist stress and improves grip comfort during curls and extensions.",
        image: "/Robust-Barbells-2/Robust-Curl-Barbell-Hard-Chrome-1.png"
      },
      {
        title: " KNURL GRIP",
        description: " Textured handle provides a secure, non-slip grip during workouts 1.2 mm volcanic knurling offers a strong grip while preventing skin tears.",
        image: "/Robust-Barbells-2/Robust-Curl-Barbell-Hard-Chrome-3.png"
      },
      {
        title: " BRONZE BUSHING ",
        description: "Offers smooth rotation and reliable performance for powerlifting movements.t",
        image: "/Robust-Barbells-2/Robust-Curl-Barbell-Hard-Chrome-2.png"
      },
      {
        title: " Chrome / Black Oxide Finish",
        description: " Protects against rust, corrosion, and wear. Bronze bushing for smooth sin of sleeve while use Easy plate loading and unloading with reduced friction.",
        image: "/Robust-Barbells-2/Robust-Curl-Barbell-Hard-Chrome-5.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '38',
    name: "Robust Redcore Barbell",
    category: "barbells",
    price: 23500,
    salePrice: 18990,
    images: [
      "/Robust-Barbells-2/Robust-RedCore-Barbell-1.png",
      "/Robust-Barbells-2/Robust-RedCore-Barbell-2.png",
      "/Robust-Barbells-2/Robust-RedCore-Barbell-3.png",
      "/Robust-Barbells-2/Robust-RedCore-Barbell-4.png",
      "/Robust-Barbells-2/Robust-RedCore-Barbell-5.png",
      "/Robust-Barbells-2/Robust-RedCore-Barbell-6.png"
    ],
    description: "",
    shortDescription: "",
    specifications: {
      BarType: "Standard  Barbell",
      BarWeight: "20kg",
      ShaftDiameter: "28mm",
      SleeveDiameter: "50mm",
      BarLength: "7 feet 2 inch",
      Knurl: "1.2mm",
      KnurlType: "Volcanic Knurl",
      LoadableSleeveLength: "415mm",
      Bushing: "Bronze Bushings",
      Maxload:"1500lbs / 680 kg",
      SurfaceTreatment: "Shaft – Red Cerakote,Sleeve – Black Oxide",
      Brand: "Robust Regime",

      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-Barbells-2/Robust-RedCore-Barbell-1.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-Barbells-2/Robust-RedCore-Barbell-2.png"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-Barbells-2/Robust-RedCore-Barbell-3.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-Barbells-2/Robust-RedCore-Barbell-4.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '39',
    name: "Raven Hilt Multipurpose Barbell",
    category: "barbells",
    price: 23500,
    salePrice: 18990,
    images: [
      "/Robust-Barbells-2/Robust-RedCore-Barbell(copy)-1.png",
      "/Robust-Barbells-2/Robust-RedCore-Barbell(copy)-2.png",
      "/Robust-Barbells-2/Robust-RedCore-Barbell(copy)-3.png",
      "/Robust-Barbells-2/Robust-RedCore-Barbell(copy)-4.png",
      "/Robust-Barbells-2/Robust-RedCore-Barbell(copy)-5.png",
      "/Robust-Barbells-2/Robust-RedCore-Barbell(copy)-6.png"
    ],
    description: "",
    shortDescription: "",
    specifications: {
      BarType	:"Standard  Barbell",
      BarWeight:"20 kg",
      ShaftDiameter	:"28 mm",
      SleeveDiameter:"	50 mm",
    BarLength:"	7 feet 2 inch",
      Knurl:"	1.2 mm",
      KnurlType:"	Volcanic Knurl",
      LoadableSleeveLength:"	415 mm",
      Bushing:"	Bronze Bushings",
      Maxload	:"1500lbs / 680 kg",
      SurfaceTreatment	:"Shaft – Black Oxide, Sleeve – Hard Chrome",
      Brand:"	Robust Regime",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: " OLYMPIC MULTIPURPOSE BARBELL ",
        description: "Build for powerlifting and Olympic lifting styles with dual knurl marks on both sides of the shaft for added versatility, allowing for precise hand placement 2200mm or 7.2 ft length. Sleeve loading length 415mm. With GOOD whip. 190000 psi tensile strength",
        image: "/Robust-Barbells-2/Robust-RedCore-Barbell(copy)-1.png"
      },
      {
        title: " BRONZE BUSHING AND BEARING",
        description: " The Raven Hilt Barbell features 10K needle bearings, delivering a smooth spin that’s perfect for clean and jerk movements.",
        image: "/Robust-Barbells-2/Robust-RedCore-Barbell(copy)-3.png"
      },
      {
        title: "DUAL KNURL RINGS ",
        description: "dual knurl marks on both sides of the shaft for added versatility, allowing for precise hand placement for both powerlifting and Olympic lifting styles",
        image: "/Robust-Barbells-2/Robust-RedCore-Barbell(copy)-5.png"
      },
      {
        title: "SURFACE FINISH",
        description: "The black oxide coating on the shaft enhances wear resistance, while the chrome sleeves protect against friction from plate loading, extending the barbell’s lifespan",
        image: "/Robust-Barbells-2/Robust-RedCore-Barbell(copy)-5.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '40',
    name: "The Robust Gym-Stick",
    category: "barbells",
    price: 600,
    salePrice: 569,
    images: [
      "/Robust-Barbells-2/The-Robust-Gym-stick-1.png",
      "/Robust-Barbells-2/The-Robust-Gym-stick-3.png",
      "/Robust-Barbells-2/The-Robust-Gym-stick-4.png",
      "/Robust-Barbells-2/The-Robust-Gym-stick-5.png",
      "/Robust-Barbells-2/The-Robust-Gym-stick-1.png",
      "/Robust-Barbells-2/The-Robust-Gym-stick-3.png",
    ],
    description: "The Gym Stick is a dynamic tool designed for home, gym, and CrossFit workouts, perfect for both beginners and advanced users. It improves core stability, posture, and grip control with Olympic bar-style markings. Available in 25mm and 28mm diameters, this 1450mm stick is your go-to for total-body training.",
    shortDescription: "The versatile Gym Stick ideal for improving posture, balance, and strength across all fitness levels.",
    specifications: {
      Material:"Mild Steel Seamless Pipe",
      Length: "1450 mm (145 cm)",
      Diameter: "25 mm & 28 mm",
      GripMarks	:"The International Weightlifting Federation (IWF) grip marks",
      Weight: "1.5Kilograms",
      SurfaceTreatment: "7 Tank Structured Black Powder Coat (Premium)",
      Make	:"Made in India",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "STRUCTURE ",
        description: "Durable Steel Construction Strong, long-lasting build that withstands daily workouts. Comfortable, non-slip handle for safe and controlled movements.",
        image: "/Robust-Barbells-2/The-Robust-Gym-stick-3.png",
      },
      {
        title: " IWF GRIP MARKING ",
        description: "for snatch & clean and jerk Weightlifting (IWF standard) → 910mm spacing",
        image: "/Robust-Barbells-2/The-Robust-Gym-stick-4.png"
      },
      {
        title: "VARIATION ",
        description: " Available in two standard diameter 28mm for men and 25mm for women fiving the perfect replica grip of the Olympic barbell ",
        image: "/Robust-Barbells-2/The-Robust-Gym-stick-5.png"
      },
      // {
      //   title: "Quick-Lock System",
      //   description: "Patent-pending locking mechanism allows for weight changes in seconds",
      //   image: "/Robust-Barbells-2/The-Robust-Gym-stick-4.png"
      // }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '41',
    name: "THUNDER BOLT 1.2 Barbell",
    category: "barbells",
    price: 17990,
    salePrice: 12599,
    images: [
      "/Robust-Barbells-2/THUNDER-BOLT-1.2-Barbell-1.jpg",
      "/Robust-Barbells-2/THUNDER-BOLT-1.2-Barbell-2.png",
      "/Robust-Barbells-2/THUNDER-BOLT-1.2-Barbell-3.png",
      "/Robust-Barbells-2/THUNDER-BOLT-1.2-Barbell-4.png",
      "/Robust-Barbells-2/THUNDER-BOLT-1.2-Barbell-5.png",
      "/Robust-Barbells-2/THUNDER-BOLT-1.2-Barbell-6.png",
    ],
    description: "The Thunder Bolt 1.2 is a 20kg Olympic barbell built for serious lifters, featuring a 28mm shaft, volcanic knurling, and dual knurl marks for optimal hand placement across lifting styles. Chrome-plated shaft and sleeves provide corrosion resistance and smooth rotation, especially useful in humid or coastal environments. With a 680kg capacity and lifetime whip warranty, it's ideal for powerlifting, Olympic lifts, and all-around strength training.",
    shortDescription: "The Thunder Bolt 1.2 Olympic Barbell delivers high-performance lifting with durable chrome plating, precision grip, and a 680kg weight capacity",
    specifications: {
      BarType: "Olympic, Multipurpose",
      BarWeight: "20kg",
      ShaftDiameter: "28mm",
      Knurl: "1.2mm",
      KnurlType: "Volcanic Knurling",
      CenterKnurl:"	No center knurl",
      Whip: "Moderate",
      Barlength: "7ft 2 Inches",
      LoadableSleeveLength: "415mm",
      Bushing: "Bronze Bushings",
      Maxload	:"1500 lbs / 680kg",
      Warranty: "Lifetime on Whip.(T&C Apply)",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-Barbells-2/THUNDER-BOLT-1.2-Barbell-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-Barbells-2/THUNDER-BOLT-1.2-Barbell-1.jpg"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-Barbells-2/THUNDER-BOLT-1.2-Barbell-3.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-Barbells-2/THUNDER-BOLT-1.2-Barbell-4.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },

  {
    id: '42',
    name: "Bumper Plate Wagon",
    category: "others",
    price: 17990,
    salePrice: 12599,
    images: [
      "/Robust-New/Bumper-Plate-Wagon-1.jpg",
      "/Robust-New/Bumper-Plate-Wagon-2.jpg",
      "/Robust-New/Bumper-Plate-Wagon-3.jpg",
      "/Robust-New/Bumper-Plate-Wagon-4.jpg",
      "/Robust-New/Bumper-Plate-Wagon-5.jpg",
      "/Robust-New/Bumper-Plate-Wagon-6.jpg",

    ],
    description: "",
    shortDescription: "",
    specifications: {
      CarpetArea: " 385mm X 1140mm.",
      Feature: "2 Barbell Holder, micro plate weight Horn.",
       WeightCapacity: "300kgs",
      SelfWeight: "20 kgs",
      Height: "305mm",
      Wheels: "Industrial Grade PU Wheels.",
      Handle: " Rubber Grip and 16mm solid Handle.",

      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/Bumper-Plate-Wagon-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/Bumper-Plate-Wagon-2.jpg"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/Bumper-Plate-Wagon-3.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/Bumper-Plate-Wagon-4.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },

  {
    id: '43',
    name: "OX-Sled",
    category: "others",
    price: 13000,
    salePrice: 10850,
    images: [
      "/Robust-New/OX-Sled-1.jpg",
      "/Robust-New/OX-Sled-2.jpg",
      "/Robust-New/OX-Sled-3.jpg",
      "/Robust-New/OX-Sled-4.jpg",
      "/Robust-New/OX-Sled-5.jpg",
      "/Robust-New/OX-Sled-1.jpg",

    ],
    description: "The Gym Ox Sled is a powerful training tool designed for athletes targeting joint strength, endurance, and overall conditioning. With multiple grip positions, removable weight poles, and a solid TATA Steel 75x75mm 11-gauge frame, it's perfect for indoor or outdoor use on any surface. Its space-saving, disassemblable build and budget-friendly design make it ideal for daily training, rehab, or advanced performance routines.",
    shortDescription: "The Robust Gym Ox Sled enhances full-body strength and conditioning with its durable, versatile, and space-efficient design.",
    specifications: {
      SelfWeightOfOxSled: "50kg",
      DimensionsOfOxSled: "L:40″ W:24″ H:39.5″",
      PackingOxSled: "1000x350x100mm",
      Warranty: "3 year on structural damage",
      Material: "TATA Steel 75x75x11 gauge tubing,8mm and 5mm thick plates for structure fabricated .",
      Shipping: "All over India.",
      Hardware: "M16X90-5 qty (all are high tension bolt).",
      WeightCapacity: "400kg",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/OX-Sled-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/OX-Sled-2.jpg"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/OX-Sled-3.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/OX-Sled-4.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '44',
    name: "ROBUST 9 Bar Holder",
    category: "others",
    price: 14312,
    salePrice: 11200,
    images: [
      "/Robust-New/ROBUST-9-Bar-Holder-1.jpg",
      "/Robust-New/ROBUST-9-Bar-Holder-2.jpg",
      "/Robust-New/ROBUST-9-Bar-Holder-3.jpg",
      "/Robust-New/ROBUST-9-Bar-Holder-4.jpg",
      "/Robust-New/ROBUST-9-Bar-Holder-5.jpg",
      "/Robust-New/ROBUST-9-Bar-Holder-6.jpg"
    ],
    description: "The Robust 9-Bar Holder maximizes floor space by storing up to nine barbells vertically in just a 1.5 ft x 1.5 ft area. Built with ORW pipes and laser-cut steel plates, it offers smooth loading, prevents sleeve scratches, and ensures stability even when fully loaded. Designed for Olympic and specialty bars alike, it's a smart, space-saving solution for any gym setup.",
    shortDescription: "Organize your gym efficiently with the Robust 9-Bar Vertical Holder – compact, durable, and designed to protect your barbells.",
    specifications: {
      Material: " 4.0mm thick Laser-cut Steel / ERW  Machined Pipe",
      Dimensions: "460mm x 200mm x 460mm",
      Finish: "Black Powder Coated  (7-Tank)",
      StorageCapacity: "9 Bar",
      SleeveHolderInnerDiameter: "52mm",
      Weight: "23.5kg",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/ROBUST-9-Bar-Holder-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/ROBUST-9-Bar-Holder-2.jpg"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/ROBUST-9-Bar-Holder-3.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/ROBUST-9-Bar-Holder-4.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '45',
    name: "Robust Plyo Box",
    category: "others",
    price: 14399,
    salePrice: 9949,
    images: [
      "/Robust-New/Robust-Plyo-Box-1.png",
      "/Robust-New/Robust-Plyo-Box-2.png",
      "/Robust-New/Robust-Plyo-Box-3.png",
      "/Robust-New/Robust-Plyo-Box-4.png",
      "/Robust-New/Robust-Plyo-Box-5.png",
      "/Robust-New/Robust-Plyo-Box-6.png"
    ],
    description: "The Robust Plyo Box is built for athletes who demand durability, stability, and performance. Made from premium Russian Birch Ply, it features three adjustable heights 20, 24, and 30 to match any workout intensity. With reinforced joints and easy-carry handles, it’s perfect for explosive training, functional fitness, and everyday strength conditioning.",
    shortDescription: "Train with power and confidence using the Robust Plyo Box – crafted from Russian Birch Ply for unmatched strength and versatility.",
    specifications: {
      Material: "Russian Birch Plywood with stainless steel screws for superior durability.",
      Weight: "29.6 kg – Heavy-duty and stable.",
      Finish: "PU coating for a premium look and protection.",
      HeightMarkings: "For height Identification.",
      Portability: "Ergonomic in-built handles for effortless transport.",
      Warranty: "1-year comprehensive warranty for peace of mind.",
      Make:"Made in India.",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/Robust-Plyo-Box-1.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/Robust-Plyo-Box-2.png"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/Robust-Plyo-Box-3.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/Robust-Plyo-Box-4.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '80',
    name: "Robust Vertical Plate Tree",
    category: "others",
    price: 10100,
    salePrice: 8190,
    images: [
      "/Robust-New/Robust-Vertical-Plate-Tree-1.0-1.jpg",
      "/Robust-New/Robust-Vertical-Plate-Tree-1.0-1.jpg",
      "/Robust-New/Robust-Vertical-Plate-Tree-1.0-1.jpg",
      "/Robust-New/Robust-Vertical-Plate-Tree-1.0-1.jpg",
      "/Robust-New/Robust-Vertical-Plate-Tree-1.0-1.jpg",
      "/Robust-New/Robust-Vertical-Plate-Tree-1.0-1.jpg"
    ],
    description: "Say goodbye to cluttered gym floors and stubbed toes—store your plates smartly with the Robust Vertical Plate Tree. Built from 11-gauge steel and weighing 21kg, it offers unmatched stability with 300mm sleeves to hold even bumper plates with ease. Its compact 2.5×2 ft footprint ensures space-saving storage without compromising on loading capacity.",
    shortDescription: "Maximize your gym space and safety with the Robust Vertical Plate Tree—smart, stable, and built for efficient weight organization.",
    specifications: {
      Material: " 60×40(mm) 11 Gauge Steel (3 mm)",
      Dimensions: "Length – 28.3″, Width – 24.1″, Height – 52.8″",
      Finish: "Black Powder Coated  (7-Tank)",
      LoadablePostLength: "12”",
      LoadableSleeve: "48 mm",
      Weight: "21kg",
      PlatesCapacity: "550kg",
      Warranty: "3 years",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/Robust-Vertical-Plate-Tree-1.0-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/Robust-Vertical-Plate-Tree-1.0-1.jpg"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/Robust-Vertical-Plate-Tree-1.0-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/Robust-Vertical-Plate-Tree-1.0-1.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '46',
    name: "Robust Weight Plate Stacker",
    category: "others",
    price: 9400,
    salePrice: 6990,
    images: [
      "/Robust-New/Robust-Weight-Plate-Stacker-1.png",
      "/Robust-New/Robust-Weight-Plate-Stacker-1.png",
      "/Robust-New/Robust-Weight-Plate-Stacker-1.png",
      "/Robust-New/Robust-Weight-Plate-Stacker-1.png",
      "/Robust-New/Robust-Weight-Plate-Stacker-1.png",
      "/Robust-New/Robust-Weight-Plate-Stacker-1.png"

    ],
    description: "Redefine plate management with the Robust Weight Plate Stacker, designed for easy loading, smooth mobility, and compact storage. Its sturdy Polyurethane wheels let you move heavy plates around the gym with minimal effort. With a compact 2ft x 2ft footprint, it keeps your space tidy while reducing lifting strain and accident risks.",
    shortDescription: "Effortlessly transport and organize your gym plates with the Robust Weight Plate Stacker—built for safety, mobility, and convenience.",
    specifications: {
      Wheels: " 3″ Industrial polyurethane wheels for easy movement for Heavy weight stacked.",
      BaseFrame: "2 inch base pipe and 1 meter round loading bar",
      LoadingBar: "diameter 48mm compatible for 50 mm diameter opening Olympic plates.",
      Assemply: " quick assembly and easy to store",
      Capacity: "weight loading capacity :500 kgs",
      ProductDimensions: "L:2ft W:2ft H:3.75",
      Warranty: "a) 5 years on structural damage.,b) wheel warranty 6 months.",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/Robust-Weight-Plate-Stacker-1.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/Robust-Weight-Plate-Stacker-1.png"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/Robust-Weight-Plate-Stacker-1.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/Robust-Weight-Plate-Stacker-1.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '47',
    name: "Scorpion-Sled",
    category: "others",
    price: 15000,
    salePrice: 11999,
    images: [
      "/Robust-New/Scorpion-Sled-1.jpg",
      "/Robust-New/Scorpion-Sled-2.jpg",
      "/Robust-New/Scorpion-Sled-3.jpg",
      "/Robust-New/Scorpion-Sled-4.jpg",
      "/Robust-New/Scorpion-Sled-1.jpg",
      "/Robust-New/Scorpion-Sled-2.jpg",
    ],
    description: "Designed for athletes of all levels, the Robust Gym Sled improves endurance, power, and joint strength with low and high grip positions. Built from 75x75mm 11-gauge TATA Steel with a 35kg self-weight, it works on any surface and supports extra weight via center horns. Its removable handles and replaceable slide pads make it both space-efficient and cost-effective for long-term use.",
    shortDescription: "The Robust Gym Sled enhances strength and conditioning through full-body training, joint reinforcement, and versatile grip options.",
    specifications: {
  
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/Scorpion-Sled-1.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/Scorpion-Sled-2.jpg"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/Scorpion-Sled-3.jpg"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/Scorpion-Sled-4.jpg"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },

  {
    id: '48',
    name: "Falcon Pulley System",
    category: "others",
    price: 21990,
    salePrice: 14490,
    images: [
      "/Robust-New/Falcon-Pulley-System-1.png",
      "/Robust-New/Falcon-Pulley-System-1.png",
      "/Robust-New/Falcon-Pulley-System-1.png",
      "/Robust-New/Falcon-Pulley-System-1.png",
      "/Robust-New/Falcon-Pulley-System-1.png",
      "/Robust-New/Falcon-Pulley-System-1.png"
    ],
    description: "The Falcon Pulley System turns your power rack into a complete cable machine for lat pulldowns, rows, triceps pushdowns, and more—all with smooth, high-tension precision. Designed for home gyms, it delivers commercial-grade functionality without the bulky footprint or high cost. Easy to attach and built for heavy-duty use, it’s your compact solution for cable training versatility.",
    shortDescription: "Transform your rack into a full cable station with the space-saving, high-performance Falcon Pulley System",
    specifications: {
      
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/Falcon-Pulley-System-1.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/Falcon-Pulley-System-1.png"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/Robust-New/Falcon-Pulley-System-1.png"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/Robust-New/Falcon-Pulley-System-1.png"
      }
    ],
    productInsights: [
      {
        title: "Product Overview",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Assembly Guide",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Workout Examples",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: '49',
    name: "Robust Sand Bag",
    category: "others",
    price: 3650,
    salePrice: 3450,
    images: [
        "/sand-bag/5.webp",
        "/sand-bag/4.webp",
        "/sand-bag/3.webp",
        "/sand-bag/6.webp",
        "/sand-bag/2.webp",
        "/sand-bag/1.webp"
    ],
    description: "Level up your functional training with the Robust Regime Sand Bag engineered for intensity and built for durability. Whether you're into strength training, CrossFit, or hardcore conditioning, this sandbag is your ultimate tool for dynamic workouts. Crafted from military-grade nylon ballistic fabric with reinforced double-stitched seams, it's designed to endure the toughest sessions. The seven strategically placed rubber handles provide excellent grip and versatility, allowing you to perform a wide range of exercises like cleans, squats, carries, slams, and presses. Its 4-inch industrial-grade Velcro closure ensures secure loading and easy adjustments. Built to handle high-impact movements and heavy usage, it’s perfect for full-body conditioning anywhere be it at the gym, home, or outdoors. The ergonomic design supports efficient movement patterns and grip variations. Whether you're a beginner or a seasoned athlete, this sandbag delivers functional performance like no other. Proudly made in India, it's not just gym equipment it's a symbol of endurance, quality, and strength",
    shortDescription: "Level up your training with the Robust Regime Sand Bag crafted for extreme durability and versatile performance. Made from military-grade materials, it’s built to power your toughest strength and conditioning workouts.",
    specifications: {
      Material: "Heavy-duty Nylon Ballistic Fabric",
    ClosureSystem: "Premium 4-inch Velcro",
    Handles: "7 ergonomic rubber grip handles for multi-angle grip",
    Stitching: "Reinforced double stitching for enhanced durability",
    FillType: "Sand Not Included",
    WeightOptions:" 10 KG, 15 KG, 20 KG, 30 KG",
    Color:" Black with white branding",
    Brand:" Robust Regime",
    CountryOfOrigin: "India",
      features: [
        "Quick-lock adjustment system",
        "15 weight settings per dumbbell",
        "Premium rubber grips",
        "Compact storage design",
        "Safety lock mechanism"
      ]
    },

    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 156,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    demoVideoId: "dQw4w9WgXcQ",
    reviews: [
      {
        id: "1",
        userName: "Alex P.",
        rating: 5,
        comment: "Best investment for my home gym. The quick-adjust mechanism is smooth and reliable.",
        date: "2024-03-15",
        verified: true,
        images: [
          "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg",
          "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg"
        ]
      },
      {
        id: "2",
        userName: "Sarah M.",
        rating: 5,
        comment: "Space-saving and versatile. Perfect for apartment workouts!",
        date: "2024-03-10",
        verified: true
      }
    ],
    features: [
      {
        title: "Quick-Lock Technology",
        description: "Change weights in seconds with our patented quick-lock system",
        image: "https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg"
      },
      {
        title: "Space-Efficient Design",
        description: "Replace 15 pairs of dumbbells with one compact set",
        image: "https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg"
      }
    ],
    keyPoints: [
      {
        icon: "shield",
        title: "Built to Last",
        description: "Premium materials and construction"
      },
      {
        icon: "zap",
        title: "Quick Adjustments",
        description: "Change weights in seconds"
      },
      {
        icon: "maximize",
        title: "Space Saving",
        description: "15 dumbbells in one"
      }
    ],
    productFeatures: [
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image: "/sand-bag/5.webp"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/sand-bag/4.webp"
      },
      {
        title: "Premium Construction",
        description: "Built with chrome-plated steel and premium rubber grips for durability and comfort",
        image:"/sand-bag/3.webp"
      },
      {
        title: "Quick-Lock System",
        description: "Patent-pending locking mechanism allows for weight changes in seconds",
        image: "/sand-bag/2.webp"
      }
    ],
    productInsights: [
      
      {
        title: "Workout Examples",
        videoId: "mDiYLPG-9Go",

      }
    ]
  },
  {
    id: 'combo-1',
    name: 'MASSIVE COMBO DEAL!',
    category: 'combo-offers',
    price: 26400,
    salePrice: 21999,
    images: ['/Combo-Offer.webp'],
    description: 'CAST IRON PLATES & THUNDER BOLT BARBELL SET FOR ONLY',
    shortDescription: 'Complete weight plates and barbell set',
    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 127,
    specifications: {
      features: [
        'Cast Iron Weight Plates (20kg, 15kg, 10kg, 5kg, 2.5kg, 1.25kg)',
        'Thunder Bolt Barbell',
        'Standard Olympic Size',
        'Professional Quality'
      ]
    },
    reviews: [],
    features: [],
    keyPoints: [],
    productFeatures: [],
    productInsights: []
  }
];