import Image from 'next/image';

const features = [
  {
    title: "Premium Quality & Consistency",
    desc: "Carefully processed with low EC and optimal pH levels to ensure uniform performance and healthy plant growth.",
    icon: "/premium.svg", // Replace with your actual paths
  },
  {
    title: "GMP-Certified Production",
    desc: "Manufactured in a GMP-certified facility, maintaining strict hygiene standards and reliable product quality.",
    icon: "/gmp.svg",
  },
  {
    title: "Eco-Friendly & Sustainable",
    desc: "Made from 100% natural coconut husk, renewable and biodegradable, supporting sustainable agriculture.",
    icon: "/eco-friendly.svg",
  },
  {
    title: "Trusted Global Exporter",
    desc: "Over 11+ years of international experience, delivering consistent quality and on-time shipments worldwide.",
    icon: "/global.svg",
  }
];

export default function FeatureSection() {
    return (
      <div className='bg-[#f5f5f5] w-full'> 
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-5">
        {/* Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {features.map((feature, index) => (
            <div
            key={index}
            className="relative flex flex-col bg-slate-50 rounded-3xl p-6 shadow-md overflow-hidden
                       transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg max-w-[80vw] md:max-w-none"
          >
            {/* Top Row: Icon and Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center shadow-sm">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="font-signika text-xl font-bold leading-tight text-gray-900">
                {feature.title}
              </h3>
            </div>
          
            {/* Divider Line */}
            <div className="w-full h-[1px] bg-gray-200 mb-4" />
          
            {/* Description */}
            <p className="font-signika text-gray-500 text-sm leading-relaxed">
              {feature.desc}
            </p>
          
            {/* Decorative bottom-right circle (matches reference design) */}
            {/* <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full border-[3px] border-gray-200 bg-white" /> */}
          </div>
          ))}
        </div>
       
      </section></div>
    );
  }