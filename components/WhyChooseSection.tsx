"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const leftFeatures: FeatureItem[] = [
  {
    icon: "/icons/badge.svg",
    title: "Consistent Performance",
    description:
      "Carefully processed and graded for uniformity, low EC, and optimal pH to support healthy plant growth.",
  },
  {
    icon: "/icons/magic-box.svg",
    title: "Wide Range Products for Every Crop",
    description:
      "Includes cocopeat blocks, grow bags, coco chips, discs, coins, and fiber products suitable for various plants.",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: "/icons/notes.svg",
    title: "Tailored to Your Needs",
    description:
      "Products can be adjusted in size, mix ratios, and packaging to match specific field requirements.",
  },
  {
    icon: "/icons/root.svg",
    title: "Optimal Water & Air Balance",
    description:
      "Perfect balance of moisture retention and air flow for healthy root development.",
  },
];

const galleryImages = [
  { src: "/gallery/image-1.jpg", alt: "Coco substrate product 1" },
  { src: "/gallery/image-2.jpg", alt: "Coco substrate product 2" },
  { src: "/gallery/image-3.jpg", alt: "Coco substrate product 3" },
  { src: "/gallery/image-4.jpg", alt: "Coco substrate product 4" },
];

const FeatureCard = ({ icon, title, description }: FeatureItem) => (
  <div className="flex items-start gap-3 font-signika">
    <div className="flex-shrink-0 w-12 h-12 bg-[#E8D44D] rounded-full flex items-center justify-center">
      <Image src={icon} alt={title} width={28} height={28} />
    </div>
    <div>
      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 leading-snug">
        {title}
      </h3>
      <div className="max-w-[250px]">
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const WhyChooseSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(SplitText);
  
      let ctx: gsap.Context = gsap.context(() => {
        let split: SplitText | null = null;
        let animation: GSAPTween | null = null;
      
        const setup = () => {
          // Kill previous split and animation to prevent memory leaks on resize
          if (split) split.revert();
          if (animation) animation.revert();
      
          // Target only the elements we want to split
          split = new SplitText("[data-animate]", { type: "lines" });
      
          animation = gsap.from(split.lines, {
            rotationX: -100,
            transformOrigin: "50% 50% -160px",
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          });
        };
      
        setup();
        window.addEventListener("resize", setup);
      }, sectionRef);
  
      return () => ctx.revert(); // Cleanup on unmount
    }, []);
  

  return (
    <section id="services" ref={sectionRef} className="bg-[#F5F0E8] py-16 px-4 sm:px-8 lg:px-16 xl:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center">
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
                Our Services
              </span>
            </div>
          </div>
          <h2 data-animate className="text-3xl font-signika sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight max-w-2xl">
            Choose What&apos;s Perfect For Your Field
          </h2>
        </div>

        {/* ── Three-column feature layout ── */}
        <div className="mb-16">

  {/* IMAGE (always on top for <lg) */}
  <div data-animate className="flex justify-center mb-10 lg:hidden">
    <div className="relative 
      w-[240px] h-[280px] 
      sm:w-[280px] sm:h-[320px] 
      md:w-[300px] md:h-[350px]"
    >
      <Image
        src="/center-plant.svg"
        alt="Hanging coconut plant arrangement"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>

  {/* FEATURES (2 columns for sm → md) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden">
    
    {/* Left Features */}
    <div className="flex flex-col gap-8 items-center text-left sm:items-end sm:text-left">
      {leftFeatures.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </div>

    {/* Right Features */}
    <div className="flex flex-col gap-8 items-center text-left sm:items-start sm:text-left">
      {rightFeatures.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </div>

  </div>

  {/* DESKTOP (lg+) → 3 column symmetrical */}
  <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-6 items-center">

    {/* Left */}
    <div className="flex flex-col gap-8 items-end">
      {leftFeatures.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </div>

    {/* Center Image */}
    <div data-animate className="flex justify-center">
      <div className="relative w-[350px] h-[400px]">
        <Image
          src="/center-plant.svg"
          alt="Hanging coconut plant arrangement"
          fill
          className="object-contain"
        />
      </div>
    </div>

    {/* Right */}
    <div className="flex flex-col gap-8 items-start text-left">
      {rightFeatures.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </div>

  </div>

</div>

        {/* ── Gallery row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`relative rounded-2xl overflow-hidden bg-gray-300 ${
                i === 0 || i === 3
                  ? "aspect-[4/3] lg:aspect-[3/2] lg:self-start lg:mt-6"
                  : "aspect-[4/3] lg:aspect-[3/2.2]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
