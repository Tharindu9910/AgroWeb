"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";

const WhoWeAreSection = () => {
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
    <section
      ref={sectionRef}
      className="bg-[#f5f5f5] py-16 px-4 sm:px-8 lg:px-16 xl:px-24 font-sans"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div data-animate className="relative w-[400px] lg:w-[40%] max-w-2xl overflow-hidden rounded-[60px]">
          {/* Image */}
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/tharul-production.jpeg"
              alt="Tharul Agro Team"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Badge */}
          <div className="absolute -bottom-2 -right-2">
            <div className="relative bg-[#f5f5f5] pt-0 pl-0 rounded-tl-[40px]">
              <div className="bg-[#E9E270] scale-[0.75] w-40 h-40 rounded-[40px] flex flex-col items-center justify-center p-6 text-[#334155]">
                <div className="relative">
                  <span className="absolute -top-4 -left-8 text-5xl">*</span>
                  <h2 className="text-[70px] font-bold leading-none">11</h2>
                  <span className="absolute top-2 -right-8 text-5xl">+</span>
                </div>

                <div className="w-full h-[1px] bg-[#334155] opacity-20 my-2"></div>

                <p className="text-[15px] font-medium whitespace-nowrap">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-[55%] pt-8 lg:pt-0">
          {/* Section Label */}
          <div className="flex items-center justify-center lg:items-start lg:justify-normal mb-2">
            <div className="relative flex gap-2 shadow-sm bg-white px-3 py-1 rounded-2xl">
              <Image
                src="/two-leafs.svg"
                alt="leaf"
                width={18}
                height={18}
                className="object-contain"
              />
              <span className="text-xs sm:text-sm font-semibold font-signika text-gray-500 tracking-widest">
                Who We Are
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2
            data-animate
            className="text-3xl text-center lg:text-left sm:text-4xl lg:text-[2.5rem] xl:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-5"
          >
            Trusted Global Supplier of Premium Coco Substrates
          </h2>

          {/* Description */}
          <div className="flex items-center justify-center lg:items-start lg:justify-normal">
            <p
              data-animate
              className="text-gray-600  text-center lg:text-left text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
            >
              Founded in 2015,{" "}
              <strong className="font-semibold text-gray-900">
                Tharul Agro Products Pvt Ltd
              </strong>{" "}
              is a Sri Lankan manufacturer and exporter of premium coco
              substrates made from natural coconut husk. As a family-owned
              company, we are committed to quality, sustainability, and
              innovation. We deliver reliable, eco-friendly growing solutions
              trusted by professional growers worldwide.
            </p>
          </div>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 max-w-[400px] sm:max-w-none sm:grid-cols-2 gap-6 sm:gap-8 items-center justify-center">
            {/* Card 1: Reliable Large-Scale Production */}
            <div className="flex items-center justify-center lg:items-start lg:justify-normal flex-col gap-3">
              <div data-animate className="w-15 h-15">
                <Image
                  src="/growth.svg"
                  alt="growth"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3
                data-animate
                className="text-base sm:text-lg font-bold text-gray-900"
              >
                Reliable Large-Scale Production
              </h3>
              <p
                data-animate
                className="text-sm text-center lg:text-left text-gray-500 leading-relaxed"
              >
                Equipped to meet international demand and tailored requirements
                without compromising quality.
              </p>
            </div>

            {/* Card 2: Committed to Quality */}
            <div className="flex items-center justify-center lg:items-start lg:justify-normal flex-col gap-3">
              <div data-animate className="w-15 h-15">
                <Image
                  src="/partnership.svg"
                  alt="partnership"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3
                data-animate
                className="text-base sm:text-lg font-bold text-gray-900"
              >
                Committed to Quality
              </h3>
              <p
                data-animate
                className="text-sm text-center lg:text-left text-gray-500 leading-relaxed"
              >
                Our dedication to innovation, consistency, and integrity ensures
                long-term partnerships with growers across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
