"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

interface LogisticsItem {
  number: string;
  title: string;
  content: React.ReactNode;
  highlight?: boolean;
}

const logisticsData: LogisticsItem[] = [
  {
    number: "01",
    title: "Production\n Capacity",
    highlight: true,
    content: (
      <p className="text-sm text-gray-700 leading-relaxed">
        Up To 20 × 40HC Containers Per Month From Our GMP-Certified Facility —
        Ensuring Consistent Supply For Bulk International Orders.
      </p>
    ),
  },
  {
    number: "02",
    title: "Shipping\n Options",
    content: (
      <div className="text-sm text-gray-300 leading-relaxed space-y-0.5">
        <p>Sea Freight (FCL / LCL – 40HC Containers)</p>
        <p>Air Freight For Urgent Orders</p>
      </div>
    ),
  },
  {
    number: "03",
    title: "Port Of \nOrigin",
    content: <p className="text-sm text-gray-300">Sri Lanka</p>,
  },
  {
    number: "04",
    title: "Global Markets \nServed",
    content: (
      <div className="grid grid-cols-2 gap-x-6 text-sm text-gray-300 leading-relaxed">
        <ul className="space-y-0.5">
          <li>• Europe</li>
          <li>• Asia-Pacific</li>
          <li>• Africa</li>
        </ul>
        <ul className="space-y-0.5">
          <li>• Middle East</li>
          <li>• North America</li>
        </ul>
      </div>
    ),
  },
  {
    number: "05",
    title: "Lead Time",
    content: (
      <div className="text-sm text-gray-300 leading-relaxed space-y-0.5">
        <p>15–25 Days (Sea Freight)</p>
        <p>Air Freight Available For Urgent Shipments.</p>
      </div>
    ),
  },
];

const GlobalReachSection = () => {
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
    <section id="global_supply" ref={sectionRef} className="relative bg-[#4A7A35] font-signika py-14 px-4 sm:px-8 lg:px-16 xl:px-24 overflow-hidden">
      {/* Subtle grass texture overlay — swap src if you have an asset */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <Image
          src="/textures/grass-bg.png"
          alt=""
          fill
          className="object-cover object-bottom"
          aria-hidden
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ── Two-column wrapper ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <div className="flex items-start">
              <div className="relative flex gap-2 shadow-lg bg-white px-4 py-[5px] rounded-2xl">
                <Image src="/two-leafs.svg" alt="leaf" width={18} height={18} />
                <span className="text-xs sm:text-sm font-semibold font-signika text-gray-500 tracking-widest">
                  Global Supply
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 data-animate className="text-4xl sm:text-5xl pb-5 font-extrabold text-white leading-tight">
              Global Reach..
              <br />
              <span className="text-white/90">Reliable Supply</span>
            </h2>

            {/* Image card */}
            <div className="relative rounded-2xl overflow-hidden w-full aspect-[4/2] sm:aspect-[16/8] lg:aspect-[5/3]">
              <Image
                src="/global-shipping.svg"
                alt="Shipping container being lifted over a global port"
                fill
                className="object-cover"
                priority
              />
              {/* Globe icon badge */}
              <div className="absolute bottom-0 right-0 w-14 h-14 bg-[#E8D44D] rounded-2xl flex items-center justify-center shadow-lg">
                <Image
                  src="/icons/globe.svg"
                  alt="Global shipping"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex flex-col gap-3">
            {/* Intro paragraph */}
            <p data-animate className="text-sm sm:text-base text-white/80 leading-relaxed pl-3 mb-4">
              We operate a high-capacity production facility and reliable global
              shipping network, ensuring timely delivery of premium coco
              substrates to international markets. With full export
              documentation and efficient logistics support, we guarantee
              consistent supply and smooth worldwide distribution.
            </p>

            {/* Logistics rows */}
            <div data-animate className="flex flex-col gap-2">
              {logisticsData.map((item) =>
                item.highlight ? (
                  /* Highlighted row — white card */
                  <div
                    key={item.number}
                    className="bg-white rounded-2xl px-5 py-4 flex items-start gap-4"
                  >
                    <span className="text-5xl font-extrabold text-[#4A7A35] leading-none flex-shrink-0 w-12">
                      {item.number}
                    </span>
                    <div className="flex flex-col pl-1 sm:flex-row sm:items-start sm:gap-6 flex-1 gap-2">
                      <h3 className="text-base font-bold text-gray-900 min-w-[130px]">
                        {item.title.split("\n").map((line, index) => (
                          <span key={index} className="block">
                            {line}
                          </span>
                        ))}
                      </h3>
                      <div className="flex-1">{item.content}</div>
                    </div>
                  </div>
                ) : (
                  /* Normal row — subtle divider */
                  <div
                    key={item.number}
                    className="flex items-start gap-4 pl-6 py-3 border-b border-white/10 last:border-0"
                  >
                    <span className="text-5xl font-extrabold text-white/20 leading-none flex-shrink-0 w-12">
                      {item.number}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 flex-1 gap-1">
                      <h3 className="text-base sfont-bold text-white whitespace-nowrap min-w-[130px]">
                      {item.title.split("\n").map((line, index) => (
                          <span key={index} className="block">
                            {line}
                          </span>
                        ))}
                      </h3>
                      <div className="flex-1">{item.content}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
