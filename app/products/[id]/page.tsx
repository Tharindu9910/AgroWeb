import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhoneCall } from "lucide-react";
import { PRODUCTS } from "@/constants";


// type Product = {
//   id:string;
//   title: string;
//   category: string;
//   description: string;
//   image: string;
// };

// ─── Static params for SSG ────────────────────────────────────────────────────
export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

// const products: Product[] = [
//   {
//     id: "coco-blocks",
//     title: "Cocopeat Blocks",
//     category: "GROWING MEDIA",
//     description: "Perfect for plant growth and soil conditioning.",
//     image: "/products/cocopeat-block.svg",
//   },
//   {
//     id: "grow-bags",
//     title: "Grow Bags",
//     category: "GROWING MEDIA",
//     description: "Ready-to-use bags for seedlings and vegetables.",
//     image: "/products/grow-bag.svg",
//   },
//   {
//     id: "open-top",
//     title: "Open Top",
//     category: "GROWING MEDIA",
//     description: "Ready-to-use bags for seedlings and vegetables.",
//     image: "/products/open-top.svg",
//   },
//   {
//     id: "coco-chips",
//     title: "Coco Chips",
//     category: "GROWING MEDIA",
//     description: "Strong fibers for horticulture and landscaping.",
//     image: "/products/coco-chips.svg",
//   },
//   {
//     id: "coco-discs",
//     title: "Coco Discs / Coins",
//     category: "SOIL SUPPORT",
//     description: "Easy-to-use discs for hydroponics and nurseries.",
//     image: "/products/coco-disks.svg",
//   },
// ];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id);
  if (!product) notFound();

  const {
    id,
    badge,
    name,
    nameHighlight,
    description,
    image,
    gmgCertified,
    techSpecsSubtitle,
    techSpecs,
    whyChoose,
    bulkInquiry,
  } = product;

  return (
    <main className="bg-white font-sans">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#4A7A35] mt-[90px] px-4 sm:px-8 lg:px-16 xl:px-24 pb-16">
        {/* ── Product Tab Navigation ── */}
        <div className="relative flex items-end justify-end">
          {/* Scrollable tab row */}
          <div className="flex overflow-x-auto scrollbar-hide gap-1 pb-px">
            {PRODUCTS.map((item) => {
              const isActive = item.id === product.id;
              return (
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  className={`
            relative flex-shrink-0 px-4 py-3 text-sm font-semibold
            transition-all duration-200 rounded-t-xl whitespace-nowrap
            ${
              isActive
                ? "text-white "
                : "text-white/70 hover:text-white hover:bg-white/10"
            }
          `}
                >
                  {item.nameHighlight}
                  {/* Active underline dot */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 rounded-full bg-white" />
                  )}
                </Link>
              );
            })}
          </div>
          {/* Bottom separator line */}
          <div className="h-px bg-white" />
        </div>
        <div className="max-w-7xl mx-auto  pt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-5">
            {/* Badge */}
            <div className="flex items-start">
              <div className="relative flex gap-2 shadow-sm bg-white px-4 py-[5px] rounded-2xl mb-4">
                <Image
                  src="/two-leafs.svg"
                  alt="leaf"
                  width={18}
                  height={18}
                  className="object-contain"
                />
                <span className="text-xs sm:text-sm font-semibold font-signika text-gray-500 tracking-widest">
                  {badge}
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-signika leading-tight text-white">
              {name} <span className="text-[#E8D44D]">{nameHighlight}</span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg">
              {description}
            </p>

            <div>
              <Link
                href="/#contact_us"
                className="inline-flex items-center gap-2 bg-[#E8D44D] hover:bg-yellow-400 text-gray-900 text-sm font-bold px-6 py-3 rounded-full transition-colors"
              >
                Request Quote
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — product image card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex items-center justify-center shadow-xl">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={image}
                alt={`${name} ${nameHighlight}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECS ───────────────────────────────────────────────── */}
      <section className="bg-white px-4 sm:px-8 lg:px-16 xl:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
              Technical Specifications
            </h2>
            {gmgCertified && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A7A35] border border-[#4A7A35]/30 rounded-full px-3 py-1 self-start sm:self-auto whitespace-nowrap">
                <Image src="/icons/tick.svg" alt="" width={14} height={14} />
                GMP Certified Production
              </span>
            )}
          </div>
          <p className="text-sm sm:text-base text-gray-500 mb-10 max-w-2xl">
            {techSpecsSubtitle}
          </p>

          {/* Specs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {techSpecs.map((spec) => (
              <div key={spec.label}>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#4A7A35] mb-1">
                  {spec.label}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] px-4 sm:px-8 lg:px-16 xl:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              {whyChoose.title}
            </h2>
            <div className="w-12 h-1 bg-[#E8D44D] rounded-full mx-auto" />
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChoose.items.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 flex flex-col gap-3 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 bg-[#E8D44D] rounded-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-base font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BULK INQUIRY CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#4A7A35] relative px-4 sm:px-8 lg:px-16 xl:px-24 py-16">
        <div className="absolute inset-0 z-10 bg-black/60" />
        <Image
          src="/palm-trees-full.png"
          alt="background"
          fill
          className="object-cover"
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Contact for Bulk Inquiries
          </h2>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed">
            Get specialized pricing for wholesale orders and container-load
            exports. Our experts are ready to assist with your specific growing
            requirements.
          </p>
          <a
            href={`tel:${bulkInquiry.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-[#E8D44D] text-lg sm:text-xl font-bold hover:text-yellow-300 transition-colors"
          >
            <PhoneCall size={22} />
            {bulkInquiry.phone}
          </a>
          <Link
            href="/#contact_us"
            className="inline-flex items-center gap-2 bg-[#4A7A35] hover:bg-[#426d2f] text-white text-sm font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            {bulkInquiry.ctaLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
