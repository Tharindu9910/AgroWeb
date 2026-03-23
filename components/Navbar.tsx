"use client";
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { Menu, PhoneCall, X } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
 
  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between">
 
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10">
            <Image
              src="/logo-tharul-agro.svg"
              alt="Tharul Agro"
              width={180}
              height={50}
              className="object-contain h-16 w-auto"
              priority
            />
          </Link>
 
          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1 font-signika">
            {NAV_LINKS.map((link, index) => (
              <li key={link.key} className="flex items-center gap-1">
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-800 px-3 py-1.5 rounded-lg hover:text-[#5B8C51]  transition-all duration-200"
                >
                  {link.label}
                </Link>
                {index < NAV_LINKS.length - 1 && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5B8C51] opacity-60" />
                )}
              </li>
            ))}
          </ul>
 
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2.5 rounded-xl px-4 py-2">
            <PhoneCall size={25} className="text-[#5B8C51] flex-shrink-0" />
            <div className="font-signika leading-tight">
              <p className="text-xs pl-1 text-gray-500">Call Us Now</p>
              <p className="text-base font-semibold text-gray-800">+94 77 650 6029</p>
            </div>
          </div>
 
          {/* Mobile: phone icon + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+94776506029"
              className="w-9 h-9 rounded-full border border-green-100 hover:bg-green-100 flex items-center justify-center"
              aria-label="Call us"
            >
              <PhoneCall size={16} className="text-[#5B8C51]" />
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="w-9 h-9 rounded-full  border border-green-100 flex items-center justify-center transition-colors hover:bg-green-100"
            >
              <span
                className={`transition-all duration-300 ${menuOpen ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100"}`}
              >
                <Menu size={18} className="text-[#5B8C51]" />
              </span>
              <span
                className={`transition-all duration-300 ${menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0 absolute"}`}
              >
                <X size={18} className="text-[#5B8C51]" />
              </span>
            </button>
          </div>
        </div>
      </nav>
 
      {/* Mobile drawer overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/30 backdrop-blur-sm
          transition-opacity duration-300 lg:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden
      />
 
      {/* Mobile drawer */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw]
          bg-white shadow-2xl flex flex-col
          transition-transform duration-300 ease-in-out lg:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-green-100">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo-tharul-agro.svg"
              alt="Tharul Agro"
              width={120}
              height={36}
              className="object-contain h-12 w-auto"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X size={16} className="text-gray-600" />
          </button>
        </div>
 
        {/* Drawer links */}
        <ul className="flex flex-col px-4 py-6 gap-1 font-signika flex-1">
          {NAV_LINKS.map((link, index) => (
            <li key={link.key}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700
                  hover:text-[#5B8C51] transition-all duration-200
                  ${menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                  }
                `}
                style={{ transitionDelay: menuOpen ? `${index * 50 + 100}ms` : "0ms" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#5B8C51]" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
 
        {/* Drawer footer CTA */}
        <div className="px-6 py-6 border-t border-green-100 bg-[#4A7A35]">
          <a
            href="tel:+94776506029"
            className="flex items-center gap-3  px-4 py-2 transition-colors hover:scale-105"
          >
            <PhoneCall size={18} className="text-white flex-shrink-0" />
            <div className="font-signika leading-tight">
              <p className="text-xs text-white">Call Us Now</p>
              <p className="text-sm font-semibold text-yellow-300 ">+94 77 650 6029</p>
            </div>
          </a>
        </div>
      </div>
    </>
 )
}
{/* <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      flexBetween max-container lg:px-14 py-4
      ${isScrolled 
        ? "bg-white shadow-md pb-3 pt-2" // Scrolled state: White background + Elevation
        : "bg-transparent py-2"     // Initial state: Transparent
      }
    `}>     
  <Link href="/">
        <Image  src="/logo-tharul-agro.svg" alt="logo" width={160} height={10} />
      </Link>

      <ul className="hidden h-full gap-5 lg:flex font-signika">
        {NAV_LINKS.map((link,index) => (
          <div className="flex gap-5 items-center"><Link href={link.href} key={link.key} className="regular-16 text-black flexCenter cursor-pointer transition-all hover:font-bold hover:text-[#5B8C51]">
            {link.label}
          </Link>
          {index == NAV_LINKS.length-1 ?<p></p>:<p className="h-[6px] w-[6px] rounded-full bg-[#5B8C51]" />}</div>
        ))}
      </ul>

      <div className="lg:flexCenter min-w-[170px] bg-green-50 hidden">
        <PhoneCall size={30} className="text-[#5B8C51]" />
        <p className="pl-2 text-sm font-signika">Call Us Now <br/><span> +94 77 650 6029</span></p>
      </div>
    </nav> */}

 

export default Navbar