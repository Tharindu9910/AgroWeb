"use client";
import { ArrowLeftSquare, ChevronLeft, ChevronRight } from "lucide-react";
// import Image from 'next/image';

// const features = [
//   {
//     title: "Premium Quality & Consistency",
//     desc: "Carefully processed with low EC and optimal pH levels to ensure uniform performance and healthy plant growth.",
//     icon: "/premium.svg", // Replace with your actual paths
//   }
//   // {
//   //   title: "GMP-Certified Production",
//   //   desc: "Manufactured in a GMP-certified facility, maintaining strict hygiene standards and reliable product quality.",
//   //   icon: "/gmp.svg",
//   // },
//   // {
//   //   title: "Eco-Friendly & Sustainable",
//   //   desc: "Made from 100% natural coconut husk, renewable and biodegradable, supporting sustainable agriculture.",
//   //   icon: "/eco-friendly.svg",
//   // },
//   // {
//   //   title: "Trusted Global Exporter",
//   //   desc: "Over 11+ years of international experience, delivering consistent quality and on-time shipments worldwide.",
//   //   icon: "/global.svg",
//   // }
// ];

// const CocopeatCard = ({ title = "Cocopeat Blocks" }) => {
//   return (
//     /* The outer container controls the card's relative sizing */
//     <div className="relative w-full aspect-[4/7] group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
      
//       {/* 1. THE WHITE SHAPE (Custom SVG Path for the "Scooped" Corner) */}
//       <div className="absolute inset-0 drop-shadow-lg">
//         <svg 
//           viewBox="0 0 300 480" 
//           fill="none" 
//           xmlns="http://www.w3.org/2000/svg" 
//           className="w-full h-full"
//           preserveAspectRatio="none"
//         >
//           <path 
//             /* Manually adjusted path for smaller proportions */
//             d="M40 0H210C225 0 235 10 235 25C235 55 255 75 285 75C295 75 300 80 300 95V440C300 462.091 282.091 480 260 480H40C17.9086 480 0 462.091 0 440V40C0 17.9086 17.9086 0 40 0Z" 
//             fill="white" 
//           />
//         </svg>
//       </div>

//       {/* 2. THE YELLOW BUTTON (Scaled down for 5-per-row) */}
//       <div className="absolute top-[5px] right-[1px] z-20">
//         <button className="w-14 h-14 lg:w-9 lg:h-9 bg-[#E9E270] rounded-full flex items-center justify-center shadow-md transition-all active:scale-95 group-hover:bg-[#dfd860]">
//           <svg 
//             className="w-6 h-6 lg:w-8 lg:h-8 rotate-[-45deg] text-[#37493D]" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             stroke="currentColor" 
//             strokeWidth="2"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//           </svg>
//         </button>
//       </div>

//       {/* 3. CONTENT OVERLAY */}
//       <div className="relative z-10 w-full h-full flex flex-col items-center pt-8">
        
//         {/* Product Image Circle */}
//         <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-2 border-[#5D8053] flex items-center justify-center overflow-hidden mb-6 bg-white">
//            {/* Replace with <Image /> component */}
//            <img 
//             src="/image.jpg" 
//             alt={title} 
//             className="w-4/5 h-4/5 object-contain" 
//            />
//         </div>

//         {/* Text Area */}
//         <div className="text-center w-full">
//           <div className="flex items-center justify-center gap-1.5 mb-1.5">
//             <span className="w-1.5 h-1.5 bg-[#5D8053] rounded-full"></span>
//             <span className="text-[#8B968D] font-bold tracking-widest text-[10px] lg:text-xs uppercase">Growing Media</span>
//           </div>
          
//           <h2 className="text-xl lg:text-2xl font-extrabold text-[#37493D] leading-tight mb-4">
//             {title}
//           </h2>
          
//           <div className="w-full h-[1.5px] bg-[#F3F4F6] mb-4"></div>
          
//           <p className="text-[#6B7280] text-sm lg:text-base leading-snug">
//             Perfect for plant growth and soil conditioning.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function ProductsSection() {
//     return (
//       <div className='bg-[#f5f5f5] w-full'> 
//       <section className="w-full mx-auto pt-12 pb-5">
//         {/* Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {features.map((feature, index) => (
//             <div className="relative w-[450px] h-[600px]">
              
//               {/* 1. THE WHITE SHAPE (Using SVG for the exact notch) */}
//               <div className="absolute inset-0 drop-shadow-2xl">
//                 <svg 
//                   viewBox="0 0 450 600" 
//                   fill="none" 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   className="w-full h-full"
//                 >
//                   <path 
//                     d="M60 0H320C340 0 355 15 355 35C355 75 385 105 425 105C440 105 450 115 450 130V540C450 573.137 423.137 600 390 600H60C26.8629 600 0 573.137 0 540V60C0 26.8629 26.8629 0 60 0Z" 
//                     fill="white" 
//                   />
//                 </svg>
//               </div>
      
//               {/* 2. THE YELLOW BUTTON (Positioned in the "cutout") */}
//               <div className="absolute top-[18px] right-[18px] z-20">
//                 <button className="w-[105px] h-[105px] bg-[#E9E270] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform">
//                    {/* Diagonal Arrow Icon */}
//                   <svg 
//                     width="45" 
//                     height="45" 
//                     viewBox="0 0 24 24" 
//                     fill="none" 
//                     stroke="#37493D" 
//                     strokeWidth="1.2" 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round"
//                     className="rotate-[-45deg]"
//                   >
//                     <line x1="5" y1="12" x2="19" y2="12"></line>
//                     <polyline points="12 5 19 12 12 19"></polyline>
//                   </svg>
//                 </button>
//               </div>
      
//               {/* 3. CONTENT OVERLAY */}
//               <div className="relative z-10 w-full h-full flex flex-col items-center pt-16 px-10">
//                 {/* Circular Image Container */}
//                 <div className="w-[280px] h-[280px] rounded-full border-[3px] border-[#5D8053] flex items-center justify-center overflow-hidden mb-12">
//                    {/* Your product image goes here */}
//                    <div className="text-gray-300">Product Image</div>
//                 </div>
      
//                 {/* Text Content */}
//                 <div className="text-center w-full">
//                   <div className="flex items-center justify-center gap-2 mb-2">
//                     <span className="w-2.5 h-2.5 bg-[#5D8053] rounded-full"></span>
//                     <span className="text-[#8B968D] font-bold tracking-widest text-sm uppercase">Growing Media</span>
//                   </div>
//                   <h2 className="text-[38px] font-extrabold text-[#37493D] leading-tight mb-6">
//                     Cocopeat Blocks
//                   </h2>
//                   <div className="w-full h-[1px] bg-[#E5E7EB] mb-6"></div>
//                   <p className="text-[#6B7280] text-xl leading-relaxed">
//                     Perfect for plant growth and soil conditioning.
//                   </p>
//                 </div>
//               </div>
      
//             </div>
          
//           ))}
//         </div>

//         <div className="min-h-screen bg-[#5D8053] p-6 lg:p-12">
//       {/* 5 Columns on 'lg' and 'xl' screens */}
//       <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
//         <CocopeatCard title="Cocopeat Blocks" />
//         <CocopeatCard title="Coco Chips" />
//         <CocopeatCard title="Coir Pots" />
//         <CocopeatCard title="Seed Starter" />
//         <CocopeatCard title="Grow Bags" />
//       </div>
//     </div>

       
//       </section></div>
//     );
//   }

// const products = [
//   {
//     category: "Growing Media",
//     title: "Cocopeat Blocks",
//     description: "Perfect for plant growth and soil conditioning.",
//     imageSrc: "/products/cocopeat-block.png",
//     imageAlt: "Cocopeat Blocks",
//   },
//   {
//     category: "Growing Media",
//     title: "Coco Chips",
//     description: "Ideal for orchid and aroid potting mixes.",
//     imageSrc: "/products/grow-bag.png",
//     imageAlt: "Coco Chips",
//   },
//   {
//     category: "Growing Media",
//     title: "Coco Pith",
//     description: "Fine-grade substrate for seedling propagation.",
//     imageSrc: "/products/coco-chips.png",
//     imageAlt: "Coco Pith",
//   },
//   {
//     category: "Growing Media",
//     title: "Coco Fiber",
//     description: "Long-lasting fiber for hydroponics and drainage.",
//     imageSrc: "/products/open-top.png",
//     imageAlt: "Coco Fiber",
//   },
//   {
//     category: "Growing Media",
//     title: "Grow Bags",
//     description: "Pre-filled coco media bags for commercial growers.",
//     imageSrc: "/products/coco-disks.png",
//     imageAlt: "Grow Bags",
//   },
// ];

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Product = {
  id:string;
  title: string;
  category: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id:"coco-blocks",
    title: "Cocopeat Blocks",
    category: "GROWING MEDIA",
    description: "Perfect for plant growth and soil conditioning.",
    image: "/products/cocopeat-block.svg",
  },
  {
    id:"grow-bags",
    title: "Grow Bags",
    category: "GROWING MEDIA",
    description: "Ready-to-use bags for seedlings and vegetables.",
    image: "/products/grow-bag.svg",
  },
  {
    id:"open-top",
    title: "Open Top",
    category: "GROWING MEDIA",
    description: "Ready-to-use bags for seedlings and vegetables.",
    image: "/products/open-top.svg",
  },
  {
    id:"coco-chips",
    title: "Coco Chips",
    category: "GROWING MEDIA",
    description: "Strong fibers for horticulture and landscaping.",
    image: "/products/coco-chips.svg",
  },
  {
    id:"coco-discs",
    title: "Coco Discs / Coins",
    category: "SOIL SUPPORT",
    description: "Easy-to-use discs for hydroponics and nurseries.",
    image: "/products/coco-disks.svg",
  },
];

export default function ProductsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 280; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <section id="our_products" className="bg-[#4A7A35] py-12 md:py-16 lg:py-20">
    <div className="max-w-[97vw] mx-auto px-2 sm:px-8 lg:px-4">

      {/* Header */}
      <div className="px-4 sm:px-0 mb-10">
        <div className="flex items-start">
          <div className="relative flex gap-2 shadow-lg bg-white px-4 py-[5px] rounded-2xl">
            <Image src="/two-leafs.svg" alt="leaf" width={18} height={18} />
            <span className="text-xs sm:text-sm font-semibold font-signika text-gray-500 tracking-widest">
              Our Products
            </span>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold font-signika text-white mt-4">
          Premium Coco Substrates
        </h2>
      </div>

      {/* MOBILE SLIDER */}
      <div className="relative md:hidden">

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {products.map((product, index) => (
            <div key={index} className="min-w-[260px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* ARROWS */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md active:scale-95 transition"
          >
            <ChevronLeft/>
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md active:scale-95 transition"
          >
           <ChevronRight />
          </button>
        </div>
      </div>
   
      {/* GRID (md+) */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

    </div>
  </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative bg-white rounded-3xl px-4 py-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group">
      {/* Arrow Button */}
      <a href={`/products/${product.id}`} className="absolute top-4 right-4 w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
        ↗
      </a>

      {/* Image Circle */}
      <div className="flex justify-center mb-5">
        <Link href={`/products/${product.id}`} className="w-36 h-36 md:w-48 md:h-48 rounded-full border-2 border-green-600 flex items-center justify-center overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={180}
            height={180}
            className="object-contain group-hover:scale-105 transition duration-300"
          />
        </Link>
      </div>

      {/* Text */}
      <p className="text-xs text-gray-500 tracking-wide">
        <span className="text-green-700">•</span> {product.category}
      </p>

      <h3 className="font-semibold text-lg text-gray-800 mt-2">
        {product.title}
      </h3>

      <div className="mt-2"><hr/></div>

      <p className="text-sm text-gray-500 mt- leading-relaxed">
        {product.description}
      </p>
    </div>
  );
}