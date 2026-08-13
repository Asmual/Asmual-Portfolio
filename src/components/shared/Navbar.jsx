"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Services", href: "/#services", id: "services" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const mobileMenuRef = useRef(null);

  // Smooth sliding underline tracking states
  const linksRef = useRef({});
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      navLinks.forEach((link) => {
        if (!link.id) return;
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle the smooth moving logic of the desktop underline
  useEffect(() => {
    const activeLinkEl = linksRef.current[activeSection];
    if (activeLinkEl && pathname === "/") {
      setUnderlineStyle({
        left: activeLinkEl.offsetLeft,
        width: activeLinkEl.offsetWidth,
        opacity: 1,
      });
    } else {
      setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection, pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('.mobile-menu-trigger')
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavLinkClick = (e, link) => {
    if (link.id) {
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(link.id);
        }
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111] border-b border-[#c9a84c]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo & Name */}
          <Link href="/#home" onClick={(e) => handleNavLinkClick(e, { id: "home" })} className="flex items-center gap-3">
            <div className="relative w-9 h-9">
              <Image
                src="/images/MyLogo.png"
                alt="Asmual Logo"
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
            <span
              className="text-xl font-bold tracking-wide text-[#c9a84c]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Asmual
            </span>
          </Link>

          {/* Desktop Navigation Menu with Smooth Sliding Underline */}
          <ul className="hidden md:flex items-center gap-6 relative">
            {navLinks.map((link) => {
              const isLinkActive = link.id
                ? (pathname === "/" && activeSection === link.id)
                : pathname === link.href;

              return (
                <li
                  key={link.href}
                  ref={(el) => (linksRef.current[link.id || link.href] = el)}
                  className="relative pb-1"
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link)}
                    className={`text-sm transition-colors duration-300 font-medium tracking-wide block cursor-pointer
                      ${isLinkActive ? "text-[#c9a84c]" : "text-gray-300 hover:text-[#c9a84c]"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* The single global sliding underline layer */}
            <span
              className="absolute bottom-0 h-0.5 bg-[#c9a84c] rounded-full transition-all duration-300 ease-in-out pointer-events-none"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
                opacity: underlineStyle.opacity,
              }}
            />
          </ul>

          {/* Desktop Hire Me CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              onClick={(e) => handleNavLinkClick(e, { id: "contact" })}
              className="py-2 px-5 text-sm font-semibold bg-[#c9a84c] text-[#111] rounded-full hover:bg-[#b8923e] transition-all duration-300 shadow-md shadow-[#c9a84c]/10 hover:shadow-[#c9a84c]/20"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-trigger md:hidden text-[#c9a84c] text-2xl focus:outline-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Container */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-screen w-[60%] sm:w-[50%] bg-[#111] border-l border-[#c9a84c]/20 shadow-2xl z-40 pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => {
            const isLinkActive = link.id
              ? (pathname === "/" && activeSection === link.id)
              : pathname === link.href;

            return (
              <li key={link.href} className="border-b border-[#c9a84c]/10 last:border-none">
                <Link
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className={`block transition-colors duration-200 text-base font-medium py-3 text-center
                    ${isLinkActive ? "text-[#c9a84c] font-semibold" : "text-gray-300 hover:text-[#c9a84c]"}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hire Me Button */}
        <div className="mt-6 pt-6 border-t border-[#c9a84c]/20">
          <Link
            href="/#contact"
            onClick={(e) => handleNavLinkClick(e, { id: "contact" })}
            className="block w-full text-center py-2.5 text-sm font-semibold bg-[#c9a84c] text-[#111] rounded-full hover:bg-[#b8923e] transition-all duration-200 shadow-md"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* Backdrop for mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}