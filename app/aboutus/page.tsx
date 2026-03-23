import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Mahinda Nishantha",
    role: "Founder and Managing Director",
    bio: "The visionary leader behind the Tharul Group of Companies. With strong entrepreneurial leadership and extensive experience in the coconut substrate industry, he has successfully developed the company into a trusted exporter of high-quality coco peat and agricultural products from Sri Lanka. His commitment to quality, innovation, and sustainable agricultural solutions continues to drive the growth and global recognition of the Tharul brand.",
    image: "/team/mahinda-nishantha.jpeg",
  },
  {
    name: "Rashmi Shashikala",
    role: "Quality Assurance Manager",
    bio: "With over 5 years of experience in coco substrate production, she is responsible for ensuring that all products meet required quality standards and customer specifications. Her strong commitment to quality control and continuous improvement helps the company consistently deliver reliable and high-quality coco substrate products to international markets.",
    image: "/team/rashmi-shashikala.jpeg",
  },
  {
    name: "Hasitha Mithum",
    role: "Factory & Marketing Manager",
    bio: "With over 10 years of extensive experience in the coco substrates industry, his expertise in production management and quality control has been instrumental in ensuring our products meet the highest standards. In addition to his technical proficiency, he leads our marketing initiatives, leveraging his deep market insights to drive growth and build strong customer relationships.",
    image: "/team/1.jpeg",
  },
  {
    name: "Amila Karunathilaka",
    role: "Chief Accountant",
    bio: "Who brings six years of dedicated experience to our finance team. With a focus on accuracy and efficiency, he oversees our financial operations, ensuring impeccable record-keeping and compliance with accounting standards. His expertise in coco substrates accounts handling is a valuable asset to our company, enabling us to manage our financial resources effectively and make informed business decisions.",
    image: "/team/amila-karunathilaka.jpeg",
  },
];

// ── Team Member Card ──────────────────────────────────────────────────────────
const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-0 bg-white overflow-hidden border border-gray-100 shadow-sm">
    {/* Photo */}
    <div className="flex justify-center pt-8 sm:pt-0 sm:block">
  <div className="relative w-[280px] h-[310px] sm:w-full sm:h-full sm:min-h-[280px] sm:aspect-auto">
    <Image
      src={member.image}
      alt={member.name}
      fill
      className="object-cover object-top"
      sizes="(max-width: 640px) 160px, 220px"
    />
  </div>
</div>
    {/* Content */}
    <div className="flex flex-col justify-center px-6 py-7 sm:py-8">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
        {member.name}
      </h3>
      <p className="text-[10px] font-bold tracking-widest uppercase text-[#4A7A35] mb-4">
        {member.role}
      </p>
      <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
    </div>
  </div>
);

// ── Full Page ─────────────────────────────────────────────────────────────────
const AboutTeamPage = () => {
  return (
    <main className="bg-white font-sans">

      {/* ── HERO ── */}
      <section className="relative h-[420px] sm:h-[480px] lg:h-[520px] mt-[84px] overflow-hidden">
        {/* Background image */}
        <Image
          src="/team/boadroom.png"
          alt="Tharul Agro leadership team in a meeting"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Hero text */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 lg:px-20 xl:px-28 pb-14 max-w-4xl">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#E8D44D] mb-4">
            Our Foundation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-signika text-white leading-[1.05] mb-5">
            Defining the <br />Future of Form
          </h1>
          <div className="w-10 h-0.5 bg-[#E8D44D] mb-4" />
          <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-sm">
            A collective of visionaries dedicated to the intersection of
            structural integrity and aesthetic purity.
          </p>
        </div>
      </section>

      {/* ── OUR TEAM ── */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mb-14">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
                Leadership
              </p>
              <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900">
                Our Team
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Guided by a diverse assembly of industry titans, our board
                ensures that every product we deliver stands as a testament
                to enduring excellence.
              </p>
            </div>
          </div>

          {/* Team cards */}
          <div className="flex flex-col gap-8">
            {TEAM.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};

export default AboutTeamPage;