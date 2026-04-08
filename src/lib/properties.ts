export interface Property {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  yearBuilt: number;
  style: string;
  description: string;
  longDescription: string;
  features: string[];
  unitTypes: string[];
  priceRange: string;
  petPolicy: string;
  image: string;
  heroImage: string;
}

export const properties: Property[] = [
  {
    slug: "the-biltmore",
    name: "The Biltmore",
    address: "801 North I Street",
    city: "Tacoma",
    state: "WA",
    zip: "98403",
    yearBuilt: 1889,
    style: "Queen Anne Victorian",
    description:
      "A turreted Queen Anne masterpiece with elaborate Victorian detailing, often described as a Victorian Castle.",
    longDescription:
      "Built in 1889 by George Sumner based on the design of architect Fredrick A. Sexton, The Biltmore became famous for its turreted Queen Anne style and elaborate Victorian detailing. Resembling a Victorian Castle, the Biltmore is one of Tacoma's most recognizable historic landmarks. Each apartment captures the grandeur of a bygone era while offering modern comforts.",
    features: [
      "Turreted Queen Anne architecture",
      "Elaborate Victorian detailing",
      "Historic landmark building",
      "Unique floor plans",
      "On-site laundry",
      "Secured entry",
    ],
    unitTypes: ["Studio", "1 Bedroom"],
    priceRange: "$1,300 - $1,900",
    petPolicy: "Cats welcome",
    image: "/images/properties/biltmore.jpg",
    heroImage: "/images/properties/biltmore-hero.jpg",
  },
  {
    slug: "the-brentwood",
    name: "The Brentwood",
    address: "819 North 5th Street",
    city: "Tacoma",
    state: "WA",
    zip: "98403",
    yearBuilt: 1922,
    style: "Classic Brick",
    description:
      'A classic brick building owned and operated by the Williams Family since 1961, featuring generous "double living room" layouts.',
    longDescription:
      'The Brentwood is a classic brick building built in 1922 and has been owned and operated by the Williams Family since 1961 — the longest held property in the family portfolio. Units feature a distinctive "double living room" layout with abundant natural light from oversized windows.',
    features: [
      "Double living room layout",
      "Abundant natural light",
      "Classic brick construction",
      "Longest-held family property",
      "On-site laundry",
      "Off-street parking",
    ],
    unitTypes: ["1 Bedroom", "2 Bedroom"],
    priceRange: "$1,300 - $2,400",
    petPolicy: "Cats welcome",
    image: "/images/properties/brentwood.jpg",
    heroImage: "/images/properties/brentwood-hero.jpg",
  },
  {
    slug: "the-charleston",
    name: "The Charleston",
    address: "311 North Yakima Avenue",
    city: "Tacoma",
    state: "WA",
    zip: "98403",
    yearBuilt: 1889,
    style: "Converted Victorian House",
    description:
      "A converted Victorian house featuring four uniquely designed apartments — no two are alike.",
    longDescription:
      "Built in 1889, The Charleston is a beautifully converted Victorian house featuring four distinctive apartments, each with its own character and layout. No two apartments are alike, making every home a one-of-a-kind living experience that captures the charm of Victorian-era architecture.",
    features: [
      "Every apartment unique",
      "Victorian character",
      "Intimate 4-unit building",
      "High ceilings",
      "Original architectural details",
      "On-site laundry",
    ],
    unitTypes: ["1 Bedroom", "2 Bedroom"],
    priceRange: "$1,400 - $2,200",
    petPolicy: "Cats welcome",
    image: "/images/properties/charleston.jpg",
    heroImage: "/images/properties/charleston-hero.jpg",
  },
  {
    slug: "the-brickworks",
    name: "The Brickworks",
    address: "302 North Yakima Avenue",
    city: "Tacoma",
    state: "WA",
    zip: "98403",
    yearBuilt: 1922,
    style: "Industrial Brick",
    description:
      'A "true-brick" building blending original 1920s styling with a modern industrial aesthetic through exposed brick walls.',
    longDescription:
      'The Brickworks is a "true-brick" building built in 1922. The solid brick architecture has been beautifully exposed on the interior walls of many units, blending the original 1920s character with a modern, slightly industrial aesthetic. Granite counters, hardwood floors, and stainless appliances complement the raw beauty of the exposed brick.',
    features: [
      "Exposed brick walls",
      "Hardwood floors",
      "Granite counters & breakfast bar",
      "Stainless steel appliances",
      "Off-street parking",
      "Secured entry",
      "Storage lockers available",
    ],
    unitTypes: ["Studio", "1 Bedroom"],
    priceRange: "$1,300 - $1,900",
    petPolicy: "Cats welcome",
    image: "/images/properties/brickworks.jpg",
    heroImage: "/images/properties/brickworks-hero.jpg",
  },
  {
    slug: "the-hampshire",
    name: "The Hampshire",
    address: "401 North Yakima Avenue",
    city: "Tacoma",
    state: "WA",
    zip: "98403",
    yearBuilt: 1921,
    style: "Colonial Brick",
    description:
      "A classic Colonial brick building featuring boxed-beam ceilings, built-in dining buffets, wainscoting, and clawfoot tubs.",
    longDescription:
      "Built in 1921, The Hampshire is a stately Colonial brick building featuring eight 1-bedroom and two 1.5-bedroom units. Colonial detailing abounds with boxed-beam ceilings, built-in dining buffets, elegant wainscoting, and original clawfoot tubs. Each apartment radiates the warmth and craftsmanship of early 20th-century design.",
    features: [
      "Boxed-beam ceilings",
      "Built-in dining buffets",
      "Wainscoting",
      "Clawfoot tubs",
      "Colonial architectural details",
      "On-site laundry",
    ],
    unitTypes: ["1 Bedroom", "1.5 Bedroom"],
    priceRange: "$1,300 - $1,800",
    petPolicy: "Cats welcome",
    image: "/images/properties/hampshire.jpg",
    heroImage: "/images/properties/hampshire-hero.jpg",
  },
  {
    slug: "the-lewis-and-clark",
    name: "The Lewis & Clark",
    address: "719 & 715 North Third Street",
    city: "Tacoma",
    state: "WA",
    zip: "98403",
    yearBuilt: 1909,
    style: "Grand Residential",
    description:
      "Originally designed to be the finest apartment buildings in Tacoma, featuring only two apartments per floor at the scale of premier classic homes.",
    longDescription:
      "The Lewis was built in 1909 and designed to be the finest apartment building in the city. The Clark was built the following year to mirror The Lewis. Featuring only two apartments per floor, each unit was designed to the same scale and quality as Tacoma's premier classic homes. This makes The Lewis & Clark an ideal alternative to owning a condo or house.",
    features: [
      "Only two units per floor",
      "Condo-quality finishes",
      "Hardwood floors",
      "Original craftsman woodwork",
      "Gourmet kitchen",
      "Washer/dryer in unit",
      "Walk-in closets",
      "Private balcony",
      "Garaged parking available",
    ],
    unitTypes: ["2 Bedroom", "3 Bedroom"],
    priceRange: "$2,200 - $3,250",
    petPolicy: "Dogs & cats welcome",
    image: "/images/properties/lewis-clark.jpg",
    heroImage: "/images/properties/lewis-clark-hero.jpg",
  },
  {
    slug: "the-foundry",
    name: "The Foundry",
    address: "312 North Yakima Avenue",
    city: "Tacoma",
    state: "WA",
    zip: "98403",
    yearBuilt: 2010,
    style: "Modern Industrial",
    description:
      "A modern building with Italian titanium-tile siding and custom steel railings, featuring Scandinavian-designed red metal chandeliers.",
    longDescription:
      "The Foundry features Italian titanium-tile siding giving the building a modern, slightly industrial aesthetic. Custom steel railings were fabricated by local artist Quinn Honan. At the top of each staircase is a red metal chandelier designed by Scandinavian artist Poul Henningson. The color red was selected to mimic the red-hot molten metal at the heart of any foundry.",
    features: [
      "Italian titanium-tile siding",
      "Custom steel railings by local artist",
      "Scandinavian designer lighting",
      "Modern industrial aesthetic",
      "Contemporary finishes",
      "On-site laundry",
    ],
    unitTypes: ["1 Bedroom", "2 Bedroom"],
    priceRange: "$1,500 - $2,400",
    petPolicy: "Cats welcome",
    image: "/images/properties/foundry.jpg",
    heroImage: "/images/properties/foundry-hero.jpg",
  },
  {
    slug: "tuscany",
    name: "Tuscany",
    address: "315 North Yakima Avenue",
    city: "Tacoma",
    state: "WA",
    zip: "98403",
    yearBuilt: 2012,
    style: "Contemporary Italian",
    description:
      "A contemporary building with Italian-influenced styling and condo-quality, eco-friendly finishes in every spacious unit.",
    longDescription:
      "Tuscany is a contemporary building with Italian-influenced styling and condo-quality, eco-friendly finishes. The spacious one and two bedroom units all feature caramelized maple cabinetry, stainless-silver appliances, granite-slab counters with breakfast bar, stack washer/dryer, premium flooring, 50-inch flatscreen TV or electric fireplace, and private decks in every unit.",
    features: [
      "Condo-quality eco-friendly finishes",
      "Caramelized maple cabinetry",
      "Granite-slab counters",
      "In-unit washer/dryer",
      "Private deck in every unit",
      "50\" TV or electric fireplace",
      "Italian-influenced design",
    ],
    unitTypes: ["1 Bedroom", "2 Bedroom"],
    priceRange: "$1,700 - $2,800",
    petPolicy: "Cats welcome",
    image: "/images/properties/tuscany.jpg",
    heroImage: "/images/properties/tuscany-hero.jpg",
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export interface Vacancy {
  id: string;
  propertyName: string;
  propertySlug: string;
  unit: string;
  bedrooms: string;
  price: number;
  sqft: number;
  address: string;
  description: string;
  features: string[];
  available: string;
  image: string;
}

export const vacancies: Vacancy[] = [
  {
    id: "brickworks-e1",
    propertyName: "The Brickworks",
    propertySlug: "the-brickworks",
    unit: "#E1",
    bedrooms: "1 Bedroom",
    price: 1650,
    sqft: 600,
    address: "302 North Yakima Avenue",
    description:
      "Exposed brick walls, hardwood floors, granite counters & breakfast bar, stainless silver appliances, dishwasher/disposal/built-in microwave, off-street parking, secured entry.",
    features: [
      "Exposed brick walls",
      "Hardwood floors",
      "Granite counters",
      "Stainless appliances",
      "Off-street parking",
      "Secured entry",
    ],
    available: "Almost Ready",
    image: "/images/properties/brickworks.jpg",
  },
  {
    id: "clark-6",
    propertyName: "The Lewis & Clark",
    propertySlug: "the-lewis-and-clark",
    unit: "#6",
    bedrooms: "3 Bedroom",
    price: 3100,
    sqft: 1720,
    address: "715 North 3rd Street",
    description:
      '1.25 bath, hardwood floors, original craftsman dark woodwork, gourmet kitchen with granite counters & breakfast bar, stainless steel appliances, pantry, 50" flatscreen TV, decorative fireplace, large dining room with built-in leaded glass china cabinet, washer/dryer, private balcony, walk-in closets.',
    features: [
      "1.25 bath",
      "Hardwood floors",
      "Original craftsman woodwork",
      "Gourmet kitchen",
      "In-unit washer/dryer",
      "Private balcony",
      "Walk-in closets",
      "Storage locker included",
    ],
    available: "Almost Ready",
    image: "/images/properties/lewis-clark.jpg",
  },
];
