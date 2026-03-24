"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhoWeAreSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4 sm:px-8 lg:px-16 xl:px-24 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* LEFT IMAGE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full max-w-[400px] lg:w-[40%] overflow-hidden rounded-[40px]"
        >
          <motion.div
            variants={fadeUp}
            className="relative aspect-[3/4] w-full"
          >
            <Image
              src="/tharul-production.jpeg"
              alt="Tharul Agro Team"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Badge */}
          <motion.div variants={fadeUp} className="absolute -bottom-2 -right-2">
            {/* <div className="relative bg-[#f5f5f5] rounded-tl-[30px]">
              <div className="bg-[#E9E270] w-28 h-28 sm:w-32 sm:h-32 rounded-[30px] flex flex-col items-center justify-center p-4 text-[#334155]">
                <h2 className="text-4xl sm:text-5xl font-bold leading-none">
                  11+
                </h2>
                <div className="w-full h-[1px] bg-[#334155] opacity-20 my-2"></div>
                <p className="text-xs sm:text-sm font-medium">
                  Years of Excellence
                </p>
              </div>
            </div> */}

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
          
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-[55%] pt-8 lg:pt-0">
          {/* Label */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-2"
          >
            <div className="flex gap-2 shadow-sm bg-white px-3 py-1 rounded-2xl">
              <Image src="/two-leafs.svg" alt="leaf" width={18} height={18} />
              <span className="text-xs sm:text-sm font-semibold text-gray-500 tracking-widest">
                Who We Are
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl text-center lg:text-left sm:text-4xl lg:text-[2.5rem] xl:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-5"
          >
            Trusted Global Supplier of Premium Coco Substrates
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-gray-600 text-center lg:text-left text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
          >
            Founded in 2015,{" "}
            <strong className="text-gray-900">
              Tharul Agro Products Pvt Ltd
            </strong>{" "}
            is a Sri Lankan manufacturer and exporter of premium coco substrates
            made from natural coconut husk. As a family-owned company, we are
            committed to quality, sustainability, and innovation. We deliver
            reliable, eco-friendly growing solutions trusted by professional
            growers worldwide.
          </motion.p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: "/growth.svg",
                title: "Reliable Large-Scale Production",
                desc: "Equipped to meet international demand and tailored requirements without compromising quality.",
              },
              {
                icon: "/partnership.svg",
                title: "Committed to Quality",
                desc: "Our dedication to innovation, consistency, and integrity ensures long-term partnerships with growers across the globe.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i + 3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center lg:items-start gap-3 text-center lg:text-left"
              >
                <Image src={item.icon} alt="" width={50} height={50} />
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
