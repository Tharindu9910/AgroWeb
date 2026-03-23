// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/#our_products', key: 'our_products', label: 'Our Products' },
  { href: '/#services', key: 'services', label: 'Services' },
  { href: '/#global_supply', key: 'global_supply ', label: 'Global Supply' },
  { href: '/#contact_us', key: 'contact_us', label: 'Contact Us' },
  { href: '/aboutus', key: 'about_us', label: 'About Us' }
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Hilink',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};

export interface TechSpec {
  label: string;
  value: string;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}
export interface ProductDetail {
  subtitle: string;
  content: string;
  bullets?: string[];
}

export interface Product {
  id: string;
  badge: string;
  name: string;
  nameHighlight: string; // the green part
  description: string;
  image: string;
  gmgCertified: boolean;
  techSpecsSubtitle: string;
  productDetails?: ProductDetail[];
  gettingBestOut?: {
    title: string;
    bullets: string[];
  };
  techSpecs: TechSpec[];
  whyChoose: {
    title: string;
    items: WhyChooseItem[];
  };
  bulkInquiry: {
    phone: string;
    ctaLabel: string;
  };
}

// export const PRODUCTS: Product[] = [
//   {
//     id: "coco-blocks",
//     badge: "Sustainable Growing Media",
//     name: "Premium",
//     nameHighlight: "Coco Blocks",
//     description:
//       "The most economical product for containerized transportation. Blocks can be reconstituted by adding water to create high-quality growth substrate.",
//     image: "/products/cocopeat-block.svg",
//     gmgCertified: true,
//     techSpecsSubtitle:
//       "Engineered for global standards, our coco blocks provide consistent quality for professional growers and soil blenders.",
//     techSpecs: [
//       {
//         label: "Material Type",
//         value:
//           "Washed/Unwashed, Coco Fibre Dust (Coco Peat), Husk Chips or Mixed blocks",
//       },
//       { label: "Weight", value: "4.5 - 5 Kgs per block" },
//       {
//         label: "Load Ability",
//         value:
//           "Approx. 22-23 MTons per 40ft container stacked on standard pallets",
//       },
//       {
//         label: "Packing Options",
//         value: "Naked blocks (Loose) or Individually packed in LDPE bags with handles",
//       },
//       {
//         label: "Reconstituted Volume",
//         value: "12 - 15 Liters per Kg (depending on material composition)",
//       },
//       {
//         label: "Electrical Conductivity (EC)",
//         value: "< 0.5 mS/cm (Washed) / > 1.0 mS/cm (Unwashed)",
//       },
//     ],
//     whyChoose: {
//       title: "Why Choose Our Coco Blocks?",
//       items: [
//         {
//           icon: "/icons/water-retention.svg",
//           title: "Water Retention",
//           description:
//             "Exceptional water retaining capacity ensuring consistent moisture levels for optimal plant development.",
//         },
//         {
//           icon: "/icons/easy-recycling.svg",
//           title: "Easy Recycling",
//           description:
//             "100% organic and biodegradable, making it an eco-friendly choice that's easy to recycle after use.",
//         },
//         {
//           icon: "/icons/cost-effective.svg",
//           title: "Cost-Effective",
//           description:
//             "Highly compressed format significantly reduces shipping costs for large-scale international transportation.",
//         },
//         {
//           icon: "/icons/multiple-applications.svg",
//           title: "Multiple Applications",
//           description:
//             "Versatile substrate suitable for greenhouses, hydroponics, nurseries, and professional landscaping.",
//         },
//         {
//           icon: "/icons/mass-scale.svg",
//           title: "Mass-Scale Growth",
//           description:
//             "Specifically designed to meet the high-volume requirements of commercial agricultural operations.",
//         },
//         {
//           icon: "/icons/global-export.svg",
//           title: "Global Export",
//           description:
//             "Optimized for container loading with palletized options for easy handling in any international port.",
//         },
//       ],
//     },
//     bulkInquiry: {
//       phone: "+94 77 650 6029",
//       ctaLabel: "Request Wholesale Quote",
//     },
//   },
//   {
//     id: "grow-bags",
//     badge: "Sustainable Growing Media",
//     name: "Premium",
//     nameHighlight: "Grow Bags",
//     description:
//       "Grow bags come with pre-cut drain holes so that the bag itself can act as a pot. Just by adding water, the coir is hydrated inside the bag and ready for planting.",
//     image: "/products/grow-bag.svg",
//     gmgCertified: true,
//     techSpecsSubtitle:
//       "Engineered for global standards, our coco blocks provide consistent quality for professional growers and soil blenders.",
//     techSpecs: [
//       {
//         label: "Material Type",
//         value:
//           "Standard Basic coco peat or crushed coconut husk or a combination of requests. (in unwashed, washed, or pre-fertilized material)",
//       },
//       { label: "Sizes", value: "The standard bag comes in 8L, 10L & 12L or can be customized to the specific growing needs of the customer." },
//       {
//         label: "Packing",
//         value:
//           "In UV-treated plastic bags with pre-cut drain hole",
//       }
//     ],
//     whyChoose: {
//       title: "Why Choose Our Coco Blocks?",
//       items: [
//         {
//           icon: "/icons/water-retention.svg",
//           title: "Water Retention",
//           description:
//             "Exceptional water retaining capacity ensuring consistent moisture levels for optimal plant development.",
//         },
//         {
//           icon: "/icons/easy-recycling.svg",
//           title: "Easy Recycling",
//           description:
//             "100% organic and biodegradable, making it an eco-friendly choice that's easy to recycle after use.",
//         },
//         {
//           icon: "/icons/cost-effective.svg",
//           title: "Cost-Effective",
//           description:
//             "Highly compressed format significantly reduces shipping costs for large-scale international transportation.",
//         },
//         {
//           icon: "/icons/multiple-applications.svg",
//           title: "Multiple Applications",
//           description:
//             "Versatile substrate suitable for greenhouses, hydroponics, nurseries, and professional landscaping.",
//         },
//         {
//           icon: "/icons/mass-scale.svg",
//           title: "Mass-Scale Growth",
//           description:
//             "Specifically designed to meet the high-volume requirements of commercial agricultural operations.",
//         },
//         {
//           icon: "/icons/global-export.svg",
//           title: "Global Export",
//           description:
//             "Optimized for container loading with palletized options for easy handling in any international port.",
//         },
//       ],
//     },
//     bulkInquiry: {
//       phone: "+94 77 650 6029",
//       ctaLabel: "Request Wholesale Quote",
//     },
//   },
  
//   // Add more products here following the same structure
// ];


export const PRODUCTS: Product[] = [
  // ─── 1. Coco Blocks ──────────────────────────────────────────────────────────
  {
    id: "coco-blocks",
    badge: "Sustainable Growing Media",
    name: "Premium",
    nameHighlight: "Coco Blocks",
    description:
      "The most economical product for containerized transportation. Blocks can be reconstituted by adding water to create high-quality growth substrate.",
    image: "/products/cocopeat-block.svg",
    gmgCertified: true,
    techSpecsSubtitle:
      "Engineered for global standards, our coco blocks provide consistent quality for professional growers and soil blenders.",
    techSpecs: [
      {
        label: "Material Type",
        value:
          "Washed/Unwashed, Coco Fibre Dust (Coco Peat), Husk Chips or Mixed blocks",
      },
      { label: "Weight", value: "4.5 – 5 Kgs per block" },
      {
        label: "Load Ability",
        value:
          "Approx. 22–23 MTons per 40ft container stacked on standard pallets",
      },
      {
        label: "Packing Options",
        value:
          "Naked blocks (Loose) or Individually packed in LDPE bags with handles",
      },
      {
        label: "Reconstituted Volume",
        value: "12 – 15 Liters per Kg (depending on material composition)",
      },
      {
        label: "Electrical Conductivity (EC)",
        value: "< 0.5 mS/cm (Washed) / > 1.0 mS/cm (Unwashed)",
      },
    ],
    whyChoose: {
      title: "Why Choose Our Coco Blocks?",
      items: [
        {
          icon: "/icons/water-retention.svg",
          title: "Water Retention",
          description:
            "Exceptional water retaining capacity ensuring consistent moisture levels for optimal plant development.",
        },
        {
          icon: "/icons/easy-recycling.svg",
          title: "Easy Recycling",
          description:
            "100% organic and biodegradable, making it an eco-friendly choice that's easy to recycle after use.",
        },
        {
          icon: "/icons/cost-effective.svg",
          title: "Cost-Effective",
          description:
            "Highly compressed format significantly reduces shipping costs for large-scale international transportation.",
        },
        {
          icon: "/icons/multiple-applications.svg",
          title: "Multiple Applications",
          description:
            "Versatile substrate suitable for greenhouses, hydroponics, nurseries, and professional landscaping.",
        },
        {
          icon: "/icons/mass-scale.svg",
          title: "Mass-Scale Growth",
          description:
            "Specifically designed to meet the high-volume requirements of commercial agricultural operations.",
        },
        {
          icon: "/icons/global-export.svg",
          title: "Global Export",
          description:
            "Optimized for container loading with palletized options for easy handling in any international port.",
        },
      ],
    },
    bulkInquiry: {
      phone: "+94 77 650 6029",
      ctaLabel: "Request Wholesale Quote",
    },
  },

  // ─── 2. Open Top Bags (Quick-Fill Bags) ──────────────────────────────────────
  {
    id: "open-top",
    badge: "Ready-To-Use Growing Media",
    name: "Premium",
    nameHighlight: "Open Top",
    description:
      "Open-Top bags come with pre-cut drain holes so that the bag itself can act as a pot. Just by adding water, the coir is hydrated inside the bag and ready for planting.",
    image:  "/products/open-top.svg",
      
    gmgCertified: true,
    techSpecsSubtitle:
      "Pre-filled with premium coco substrate and ready to use straight out of the bag — minimal setup, maximum yield.",
    techSpecs: [
      {
        label: "Material Type",
        value:
          "Standard Basic coco peat or crushed coconut husk or a combination of requests (in unwashed, washed, or pre-fertilized material)",
      },
      {
        label: "Sizes",
        value:
          "Standard bag comes in 8L, 10L & 12L or can be customized to specific growing needs",
      },
      {
        label: "Packing",
        value: "In UV-treated plastic bags with pre-cut drain hole",
      },
      {
        label: "Load Ability",
        value: "Approx. 18–22 MTons per 40ft container depending on bag size",
      },
      {
        label: "Electrical Conductivity (EC)",
        value: "< 0.5 mS/cm (Washed) / customizable on request",
      },
      {
        label: "pH Range",
        value: "5.5 – 6.5 (optimal for most horticultural crops)",
      },
    ],
    productDetails: [
      {
        subtitle: "Material Type-",
        content:
          "Standard Basic coco peat or crushed coconut husk or a combination of requests. (in unwashed, washed, or pre-fertilized material)",
      },
      {
        subtitle: "Sizes–",
        content:
          "The standard bag comes in 8L, 10L & 12L or can be customized to the specific growing needs of the customer.",
      },
      {
        subtitle: "Packing-",
        content: "In UV-treated plastic bags with pre-cut drain hole.",
      },
    ],
    gettingBestOut: {
      title: "Getting the Best Out of Your Quick-Fill Bags",
      bullets: [
        "Ideal for growing a variety of plants",
        "Use each bag to grow individual plants or even two at a time",
        "Convenient, user-friendly & easy recycling",
        "Ready to use – can be used directly as a pot",
        "Size can be customized according to customer-specific dimensions",
        "Consistent, reliable, and easy to use, for growers of any scale",
      ],
    },
    whyChoose: {
      title: "Why Choose Our Open Top Bags?",
      items: [
        {
          icon: "/icons/ready-to-use.svg",
          title: "Ready To Use",
          description:
            "Pre-cut drain holes mean the bag acts directly as a pot — no repotting or extra containers needed.",
        },
        {
          icon: "/icons/water-retention.svg",
          title: "Superior Moisture Control",
          description:
            "Coco peat filling retains ideal moisture and releases it gradually to support healthy root zones.",
        },
        {
          icon: "/icons/cost-effective.svg",
          title: "Labor Saving",
          description:
            "Reduces pot-filling time dramatically — just hydrate and plant, cutting setup costs significantly.",
        },
        {
          icon: "/icons/easy-recycling.svg",
          title: "Eco-Friendly",
          description:
            "100% biodegradable coir filling in UV-treated bags ensures sustainable growing with easy end-of-cycle recycling.",
        },
        {
          icon: "/icons/multiple-applications.svg",
          title: "Customizable Sizes",
          description:
            "Available in 8L, 10L, and 12L or made-to-order dimensions to suit any crop or greenhouse layout.",
        },
        {
          icon: "/icons/global-export.svg",
          title: "Global Export Ready",
          description:
            "Palletized and container-optimized for efficient worldwide distribution with consistent quality.",
        },
      ],
    },
    bulkInquiry: {
      phone: "+94 77 650 6029",
      ctaLabel: "Request Wholesale Quote",
    },
  },

  // ─── 3. Grow Bags ────────────────────────────────────────────────────────────
  {
    id: "grow-bags",
    badge: "Soil-Less Culture",
    name: "Premium",
    nameHighlight: "Grow Bags",
    description:
      "The reigning product in soil-less culture under controlled environments. Proven performance, durability and reliability accepted by growers across the globe.",
    image: "/products/grow-bag.svg",
    gmgCertified: true,
    techSpecsSubtitle:
      "Purpose-engineered slabs with pre-cut plant and drain holes, optimized for high-yield commercial greenhouse production.",
    techSpecs: [
      {
        label: "Material Type",
        value:
          "Premium washed coco peat, husk chips, or blended mix in customizable ratios",
      },
      {
        label: "Standard Dimensions",
        value: "100cm × 15cm × 10cm (custom sizes available on request)",
      },
      {
        label: "Dry Weight",
        value: "Approx. 0.6–0.8 Kg per slab (depending on composition)",
      },
      {
        label: "Load Ability",
        value: "Approx. 20–24 MTons per 40ft container",
      },
      {
        label: "Electrical Conductivity (EC)",
        value: "< 0.5 mS/cm (Washed) / customizable pre-fertilized options",
      },
      {
        label: "Packing",
        value:
          "Individually wrapped in UV-stabilized polyethylene film with pre-cut plant and drain holes",
      },
    ],
    productDetails: [
      {
        subtitle: "About Grow Bags",
        content:
          "Since more and more growers in the world are moving away from soil, the demand for our high quality grow-bags has increased tremendously. Grow bags have proved their performance, durability and reliability in the marketplace beyond any doubt for over two and half decades and are accepted by growers around the globe without hesitation.",
        bullets: [
          "Stability of structure during culture",
          "Steers your crops for maximum yield and fruit quality",
          "Equally good for vegetables, flowers and fruits",
          "Minimizes the risk of disease and produce stronger plants",
          "Purpose-made slabs with pre-cut plant/drain holes reduce labor costs in installation",
          "Ideal air water ratio optimizes the use of water and fertilizer",
          "Faster and dense root establishment due to porous structure",
          "User-friendly product",
          "Convenient and cost-effective transportation and storage",
        ],
      },
    ],
    whyChoose: {
      title: "Why Choose Our Grow Bags?",
      items: [
        {
          icon: "/icons/mass-scale.svg",
          title: "Maximum Yield",
          description:
            "Engineered air-water ratio steers crops toward peak yield and premium fruit quality in every harvest.",
        },
        {
          icon: "/icons/water-retention.svg",
          title: "Ideal Air-Water Balance",
          description:
            "Porous coco structure provides faster and denser root establishment while optimizing water and fertilizer use.",
        },
        {
          icon: "/icons/easy-recycling.svg",
          title: "Disease Reduction",
          description:
            "Clean, sterile substrate minimizes pathogen risk, resulting in stronger, healthier plants throughout the crop cycle.",
        },
        {
          icon: "/icons/multiple-applications.svg",
          title: "Versatile Crops",
          description:
            "Equally proven for vegetables, flowers, and fruits — from strawberries to tomatoes to ornamental plants.",
        },
        {
          icon: "/icons/cost-effective.svg",
          title: "Labor Saving",
          description:
            "Pre-cut plant and drain holes reduce installation labor costs significantly at commercial scale.",
        },
        {
          icon: "/icons/global-export.svg",
          title: "25+ Years Proven",
          description:
            "Accepted by growers across the globe without hesitation, with decades of performance and reliability in controlled environments.",
        },
      ],
    },
    bulkInquiry: {
      phone: "+94 77 650 6029",
      ctaLabel: "Request Wholesale Quote",
    },
  },

  // ─── 4. Coco Discs / Coins ───────────────────────────────────────────────────
  {
    id: "coco-discs",
    badge: "Pot Culture Specialist",
    name: "Coco",
    nameHighlight: "Discs & Coins",
    description:
      "The most sought after product by floriculturists, specially those who grow Gerbera, Orchid, Anthurium and other pot plants. Easy application — just place inside the pot and add water.",
    image: "/products/coco-disks.svg",
    gmgCertified: true,
    techSpecsSubtitle:
      "Custom-manufactured to fit any pot size and shape, with tailored air/water ratios for different pot cultures and cultivation phases.",
    techSpecs: [
      {
        label: "Material Types",
        value:
          "Standard Basic coco peat or crushed coconut husk or a combination of request (in unwashed, washed or pre-fertilized material)",
      },
      {
        label: "Dimension",
        value:
          "Custom made to the specifications of the client to suit their growing needs",
      },
      {
        label: "Load Ability",
        value:
          "Depends on the diameter and height of the disk and the desired packing method",
      },
      {
        label: "Packing",
        value:
          "In crates/pallets or in corrugated boxes stacked on pallets; option to individually pack the disc with label if required",
      },
      {
        label: "Particle Structure",
        value:
          "Customizable for different air/water ratios to suit specific crop and cultivation requirements",
      },
      {
        label: "Electrical Conductivity (EC)",
        value: "< 0.5 mS/cm (Washed) / pre-fertilized options available",
      },
    ],
    productDetails: [
      {
        subtitle: "Coco Discs",
        content:
          "Easy application of just placing inside the pot and adding water, saves labor in pot filling. Could be custom manufactured to fit different pot sizes and the product could be supplied in different air/water ratios, particle structures making it tailor made for different cultures.",
        bullets: [
          "Easy application & reduced labor cost in pot filling",
          "Organic and easy recycling",
          "Custom-manufactured to fit different pot sizes and shapes",
          "Can be supplied in different particle structures for optimum air and water capacity required for different cultures",
          "Suitable for every crop and cultivation phase",
        ],
      },
    ],
    whyChoose: {
      title: "Why Choose Our Coco Discs & Coins?",
      items: [
        {
          icon: "/icons/multiple-applications.svg",
          title: "Floriculture Specialist",
          description:
            "Purpose-built for Gerbera, Orchid, Anthurium and other pot plants requiring precise moisture and structure.",
        },
        {
          icon: "/icons/ready-to-use.svg",
          title: "Effortless Application",
          description:
            "Simply place inside the pot and add water — no mixing, no mess, dramatically less labor in pot filling.",
        },
        {
          icon: "/icons/cost-effective.svg",
          title: "Custom Dimensions",
          description:
            "Manufactured to your exact pot diameter and height specifications for a perfect fit every time.",
        },
        {
          icon: "/icons/water-retention.svg",
          title: "Tailored Air/Water Ratio",
          description:
            "Different particle structures available to precisely tune moisture retention and aeration for each culture.",
        },
        {
          icon: "/icons/easy-recycling.svg",
          title: "100% Organic",
          description:
            "Biodegradable coir-based discs that are easy to recycle after use, supporting sustainable horticulture.",
        },
        {
          icon: "/icons/global-export.svg",
          title: "Flexible Packing",
          description:
            "Supplied in crates, pallets, or corrugated boxes with optional individual labeling for retail-ready presentation.",
        },
      ],
    },
    bulkInquiry: {
      phone: "+94 77 650 6029",
      ctaLabel: "Request Wholesale Quote",
    },
  },

  // ─── 5. Coco Chips ───────────────────────────────────────────────────────────
  {
    id: "coco-chips",
    badge: "Horticulture & Landscaping",
    name: "Premium",
    nameHighlight: "Coco Chips",
    description:
      "Strong, chunky coconut husk chips that provide excellent aeration and drainage. The ideal substrate for orchids, bromeliads, and large-scale landscaping applications.",
    image: "/products/coco-chips.svg",
    gmgCertified: true,
    techSpecsSubtitle:
      "Sourced from mature coconut husks and graded for uniform size, our coco chips deliver unmatched structural stability and long service life.",
    techSpecs: [
      {
        label: "Material Type",
        value:
          "100% natural mature coconut husk chips — washed, unwashed, or pre-fertilized on request",
      },
      {
        label: "Chip Size",
        value:
          "Standard: 6–18mm; Fine: 3–6mm; Jumbo: 18–25mm — custom grading available",
      },
      {
        label: "Packing Options",
        value:
          "Compressed 5Kg bricks, loose in poly bags, or bulk-bagged for landscaping",
      },
      {
        label: "Load Ability",
        value:
          "Approx. 20–24 MTons per 40ft container depending on packing format",
      },
      {
        label: "Electrical Conductivity (EC)",
        value: "< 0.5 mS/cm (Washed) / > 1.0 mS/cm (Unwashed)",
      },
      {
        label: "Service Life",
        value:
          "3–5 years before breakdown, offering long-term structural support with minimal replacement",
      },
    ],
    gettingBestOut: {
      title: "Getting the Best Out of Your Coco Chips",
      bullets: [
        "Mix with coco peat for a balanced air-to-water ratio in potting blends",
        "Use as a standalone substrate for orchids, bromeliads, and epiphytes",
        "Ideal mulching material to retain soil moisture in landscaping beds",
        "Excellent drainage layer at the base of containers and raised beds",
        "Resistant to compaction — maintains structure over multiple growing seasons",
        "Fully biodegradable and compostable at end of service life",
      ],
    },
    whyChoose: {
      title: "Why Choose Our Coco Chips?",
      items: [
        {
          icon: "/icons/water-retention.svg",
          title: "Superior Aeration",
          description:
            "Large chip structure creates generous air pockets around roots, preventing compaction and promoting vigorous root growth.",
        },
        {
          icon: "/icons/easy-recycling.svg",
          title: "Long Service Life",
          description:
            "Dense husk fibers resist breakdown for 3–5 years, reducing the frequency and cost of substrate replacement.",
        },
        {
          icon: "/icons/multiple-applications.svg",
          title: "Multi-Purpose Use",
          description:
            "Equally effective as a standalone orchid medium, a soil amendment blend, or a decorative mulch in landscaping.",
        },
        {
          icon: "/icons/cost-effective.svg",
          title: "Cost-Effective",
          description:
            "Compressed brick format reduces shipping volume and cost — expands up to 8× on hydration at the destination.",
        },
        {
          icon: "/icons/mass-scale.svg",
          title: "Landscaping Scale",
          description:
            "Available in bulk-bag format for large landscaping projects, golf courses, nurseries, and amenity horticulture.",
        },
        {
          icon: "/icons/global-export.svg",
          title: "Export Optimized",
          description:
            "Uniform grading and clean processing ensure consistent quality for international buyers and retail packaging.",
        },
      ],
    },
    bulkInquiry: {
      phone: "+94 77 650 6029",
      ctaLabel: "Request Wholesale Quote",
    },
  },
];