"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Asterisk } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const items = ["Sustainable", "Natural", "Organic", "Coco"];

export default function RollingTicker() {
  const tickerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const loop = tickerRef.current;
    if (!loop) return; // type-safe guard

    const scrollWidth: number = loop.scrollWidth / 2;

    // 1. Horizontal Loop (The Row)
    const baseAnimation = gsap.to(loop, {
      x: `-=${scrollWidth}`,
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    // 2. Individual Star Rotation
    gsap.to(".rotating-star", {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });

    // 3. Scroll Velocity Interaction
    ScrollTrigger.create({
      trigger: loop,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self: ScrollTrigger) => {
        const velocity: number = self.getVelocity() * 0.006;
        gsap.to(baseAnimation, { timeScale: 0.5, duration: 0.5 });
      },
    });
  }, []);

  return (
    <div className="overflow-hidden border-y border-gray-200 py-8 bg-white">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap will-change-transform items-center"
      >
        {[...items, ...items].map((word, index) => (
          <div key={index} className="flex items-center gap-12 px-12">
            <h2 className=" text-5xl lg:text-5xl font-bold uppercase tracking-tighter text-transparent stroke-text">
              {word}
            </h2>

            {/* The Rotating Star */}
            <span className="rotating-star inline-block text-3xl lg:text-2xl text-[#5B8C51] select-none">
              <Asterisk size={40} />
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px #5b8c51;
          paint-order: stroke fill; /* Draws the stroke first, then the fill on top */
          color: white;
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        // .stroke-text:hover {
        //   opacity: 1;
        //   color: #5B8C51;
        //   -webkit-text-stroke: 0px;
        // }
      `}</style>
    </div>
  );
}
