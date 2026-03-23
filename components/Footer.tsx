// import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className="flexCenter mb-24">
//       <div className="padding-container max-container flex w-full flex-col gap-14">
//         <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
//           <Link href="/" className="mb-10">
//             <Image src="hilink-logo.svg" alt="logo" width={74} height={29}/>
//           </Link>

//           <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
//             {FOOTER_LINKS.map((columns) => (
//               <FooterColumn title={columns.title}>
//                 <ul className="regular-14 flex flex-col gap-4 text-gray-30">
//                   {columns.links.map((link) => (
//                     <Link href="/" key={link}>
//                       {link}
//                     </Link>
//                   ))}
//                 </ul>
//               </FooterColumn>
//             ))}

//             <div className="flex flex-col gap-5">
//               <FooterColumn title={FOOTER_CONTACT_INFO.title}>
//                 {FOOTER_CONTACT_INFO.links.map((link) => (
//                   <Link
//                     href="/"
//                     key={link.label}
//                     className="flex gap-4 md:flex-col lg:flex-row"
//                   >
//                     <p className="whitespace-nowrap">
//                       {link.label}:
//                     </p>
//                     <p className="medium-14 whitespace-nowrap text-blue-70">
//                       {link.value}
//                     </p>
//                   </Link>
//                 ))}
//               </FooterColumn>
//             </div>

//             <div className="flex flex-col gap-5">
//               <FooterColumn title={SOCIALS.title}>
//                 <ul className="regular-14 flex gap-4 text-gray-30">
//                   {SOCIALS.links.map((link) => (
//                     <Link href="/" key={link}>
//                       <Image src={link} alt="logo" width={24} height={24} />
//                     </Link>
//                   ))}
//                 </ul>
//               </FooterColumn>
//             </div>
//           </div>
//         </div>

//         <div className="border bg-gray-20" />
//         <p className="regular-14 w-full text-center text-gray-30">2023 Hilink | All rights reserved</p>
//       </div>
//     </footer>
//   )
// }

// type FooterColumnProps = {
//   title: string;
//   children: React.ReactNode;
// }

// const FooterColumn = ({ title, children }: FooterColumnProps) => {
//   return (
//     <div className="flex flex-col gap-5">
//       <h4 className="bold-18 whitespace-nowrap">{title}</h4>
//       {children}
//     </div>
//   )
// }

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";


const contactInfo = [
  {
    icon: "/icons/phone.svg",
    label: "+94 77 650 6029",
    href: "tel:+94776506029",
  },
  {
    icon: "/icons/whatsapp.svg",
    label: "+94 76 662 6921",
    href: "https://wa.me/94766626921",
  },
  {
    icon: "/icons/email.svg",
    label: "info@tharulagro.com",
    href: "mailto:info@tharulagro.com",
  },
];

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "Our Products", href: "/#our_products" },
  { label: "Get to Know Us", href: "/about us" },
  { label: "Contact Us", href: '/#contact_us' },
];
const workingHours = [
  "Mon - Fri: 9.00am - 5.00pm",
  "Saturday: 10.00am - 6.00pm",
  "Sunday Closed",
];

const socialLinks = [
  {
    icon: "/icons/facebook.svg",
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: "/icons/tiktok.svg",
    href: "https://tiktok.com",
    label: "Tiktok",
  },
  {
    icon: "/icons/instagram.svg",
    href: "https://instagram.com",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white font-signika">
      {/* ── Top bar ── */}
      <div className="bg-[#E8D44D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-x-1 gap-y-1">
            {NAV_LINKS.map((link, i) => (
              <span key={link.href} className="flex items-center gap-1">
                <Link
                  href={link.href}
                  className="text-xs font-semibold text-gray-700 hover:text-gray-900 tracking-wide transition-colors"
                >
                  {link.label}
                </Link>
                {i < NAV_LINKS.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A7A35] inline-block mx-1" />
                )}
              </span>
            ))}
          </nav>

          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            {contactInfo.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span className="w-8 h-8 rounded-full border border-gray-400/40 flex items-center justify-center flex-shrink-0 bg-white/30">
                  <Image src={item.icon} alt="" width={16} height={16} />
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="relative overflow-hidden">
  {/* Decorative leaf watermark */}
  <div className="absolute bottom-0 left-[15vw] -translate-x-1/2 lg:left-[25vw] lg:translate-x-0 w-52 h-52 sm:w-60 sm:h-60 pointer-events-none select-none translate-y-6 opacity-80">
    <Image
      src="/icons/Footer-1.svg"
      alt=""
      fill
      className="object-contain object-bottom"
      aria-hidden
    />
  </div>

   <div className="absolute -top-10 left-[75vw] -rotate-180 lg:translate-x-0 w-52 h-52 sm:w-60 sm:h-60 pointer-events-none select-none translate-y-6 opacity-80">
    <Image
      src="/icons/Footer-1.svg"
      alt=""
      fill
      className="object-contain object-bottom"
      aria-hidden
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-14 pt-14 pb-8">
    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_2fr] gap-10 lg:gap-8 mb-6">

      {/* ── Col 1: Brand ── */}
      <div className="flex flex-col items-center lg:items-start gap-5">
        <Link href="/">
          <Image
            src="/logo-tharul-agro.svg"
            alt="Tharul Agro Products Pvt Ltd"
            width={260}
            height={90}
            className="object-contain"
          />
        </Link>
        <p className="text-sm font-semibold text-gray-700 lg:pl-20">Find us Online</p>
        <div className="flex items-center gap-3 lg:pl-14">
          {socialLinks.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-green-600 hover:bg-green-50 transition-colors"
            >
              <Image src={s.icon} alt={s.label} width={16} height={16} />
            </a>
          ))}
        </div>
      </div>

      {/* ── Col 2: Content ── */}
      <div className="flex flex-col gap-8">
        {/* Tagline */}
        <h3 className="lg:pl-4 text-lg sm:text-2xl font-bold text-gray-700 leading-snug text-center lg:text-left">
          Premium Coconut Coir Substrates from{" "}
          <br className="" />
          <span className="text-3xl sm:text-4xl text-gray-900">Sri Lanka</span>
        </h3>

        {/* Three info columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 justify-items-center">
          {/* Useful Links */}
          <div className="min-w-[170px]">
            <h4 className="text-sm font-bold text-gray-900 mb-3">Useful Links</h4>
            <ul className="flex flex-col gap-1.5">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-green-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Time */}
          <div >
            <h4 className="text-sm font-bold text-gray-900 mb-3">Working Time</h4>
            <ul className="flex flex-col gap-2">
              {workingHours.map((h) => (
                <li key={h} className="text-sm text-gray-500">{h}</li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3">Our Address</h4>
            <address className="not-italic text-sm text-gray-500 leading-relaxed">
              Tharul Agro Products Pvt Ltd,
              <br />
              Halmillawewa,
              <br />
              Sri Lanka
            </address>
          </div>
        </div>
      </div>
    </div>

    {/* ── Bottom bar ── */}
    <div className="border-t border-gray-100 pt-5 flex justify-center sm:justify-end">
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} Tharul Agro Products Pvt Ltd. All Rights Reserved.
      </p>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;
