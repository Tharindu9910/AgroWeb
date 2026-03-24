"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { TextPlugin } from "gsap/TextPlugin";

// Register the plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

const words = ["Sustainable", "Organic", "Rooted", "Nourishing", "Natural"];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1, // Infinite loop
      repeatDelay: 1, // How long to wait before starting the next word
    });

    words.forEach((word) => {
      tl.to(textRef.current, {
        duration: 1,
        text: word, // The plugin handles the typing
        ease: "none",
      })
        .to({}, { duration: 1.5 }) // Pause while the word is fully typed
        .to(textRef.current, {
          duration: 0.8,
          text: "", // The "backspace" effect
          ease: "none",
        });
    });
  }, []);

  return (
    <section className="relative min-h-screen max-container padding-container flex flex-col pb-32 lg:pb-20 xl:flex-row">
      {/* Bg */}
      <motion.div
  initial={{ scale: 1.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="absolute inset-0 -z-10 overflow-hidden"
><Image
          src="/hero-image.webp"
          alt="Hero image"
          fill
          priority
          sizes="100vw"
          quality={70}
          placeholder="blur"
          blurDataURL="/hero-image-blur.jpg" // tiny blurred image
          className="object-cover"
        /></motion.div>
    
      <div className=" z-20 pt-32 flex flex-col gap-8 sm:pl-10 sm:w-[90vw] lg:pl-0 xl:w-[80vw]">
        <h1 className="font-signika text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black">
          Pioneering <br className="sm:hidden" />
          <span className="inline-block items-center py-2 sm:py-0">
            <span
              ref={textRef}
              className="text-[#5B8C51] border-r-4 border-[#5B8C51] text-6xl sm:mt-0 sm:text-6xl lg:text-7xl pr-1 min-w-[20px] animate-pulse-cursor"
            >
              &nbsp;
              {/* Initially empty for GSAP to type into */}
            </span>
          </span>
          <br />
          Growth
          <span className="hidden sm:inline-block -ml-1 lg:-ml-1 mb-4">
            <Image src="/leaf-01.svg" alt="logo" width={60} height={60} />
          </span>
          <span className="sm:hidden inline-block -ml-1 mb-4">
            <Image src="/leaf-01.svg" alt="logo" width={30} height={30} />
          </span>
        </h1>
        {/* <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Engineered for Stronger Roots and Better Yields.
        </p> */}

        <div className="flex flex-row gap-3 sm:flex-row">
          {/* <Button type="button" title="Download App" variant="btn_green" /> */}
          {/* <Button type="button" title="Contact Us" variant="btn_white_text" /> */}
          <a
            href="#contact_us"
            className="bg-white rounded-3xl py-2 px-6 text-sm sm:text-base lg:text-lg shadow-lg font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="relative flex flex-1 items-end mt-16">
        {/* <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
