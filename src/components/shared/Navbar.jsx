"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);
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

    // Corrected the undefined event listener reference
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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-menu-trigger')) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...");
    try {
      await signOut();
      toast.success("Logged out successfully!", { id: toastId });
      router.push("/");
    } catch (err) {
      toast.error("Something went wrong.", { id: toastId });
    }
  };

  const handleLogoutAndClose = async () => {
    await handleLogout();
    setDropdownOpen(false);
  };

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

          <div className="hidden md:flex items-center gap-3">
            {isPending ? (
              <div className="w-8 h-8 rounded-full bg-[#222] animate-pulse" />
            ) : session ? (
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-9 h-9 rounded-full border-2 border-[#c9a84c] overflow-hidden cursor-pointer flex items-center justify-center bg-[#222] text-[#c9a84c] font-bold text-sm"
                >
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="Avatar"
                      width={36}
                      height={36}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    session.user?.name?.[0]?.toUpperCase() || "U"
                  )}
                </div>

                {dropdownOpen && (
                  <ul className="absolute right-0 bg-[#1a1a1a] border border-[#c9a84c]/30 rounded-xl z-50 mt-2 w-56 p-4 shadow-xl flex flex-col items-center text-center">
                    <li className="w-full flex flex-col items-center pb-4 border-b border-[#c9a84c]/10 mb-3">
                      <div className="w-14 h-14 rounded-full border-2 border-[#c9a84c] overflow-hidden flex items-center justify-center bg-[#222] text-[#c9a84c] font-bold text-lg mb-3">
                        {session.user?.image ? (
                          <Image
                            src={session.user.image}
                            alt="Avatar"
                            width={56}
                            height={56}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          session.user?.name?.[0]?.toUpperCase() || "U"
                        )}
                      </div>
                      <p className="text-white text-sm font-semibold truncate w-full max-w-50">
                        {session.user?.name}
                      </p>
                      <p className="text-gray-500 text-xs truncate w-full max-w-50">
                        {session.user?.email}
                      </p>
                    </li>

                    <li className="w-full mb-3">
                      <Link
                        href="/dashboard/profile"
                        onClick={() => setDropdownOpen(false)}
                        className="flex justify-center items-center w-full py-2 text-sm text-[#c9a84c] border border-[#c9a84c] rounded-md hover:bg-[#c9a84c]/10 transition-all duration-200"
                      >
                        View Profile
                      </Link>
                    </li>

                    <li className="w-full border-t border-[#c9a84c]/10 pt-3 flex flex-col gap-1.5">
                      <button
                        onClick={handleLogoutAndClose}
                        className="text-red-400 hover:text-red-300 text-sm text-left px-2 py-1 rounded hover:bg-red-500/10 transition-all w-full cursor-pointer"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  href="/login"
                  className="py-1.5 px-4 text-sm font-medium border border-[#c9a84c] text-[#c9a84c] rounded hover:bg-[#c9a84c]/10 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="py-1.5 px-4 text-sm font-medium bg-[#c9a84c] text-[#111] rounded hover:bg-[#b8923e] transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

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

        <div className="mt-6 pt-6 border-t border-[#c9a84c]/20">
          {session ? (
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-3 mb-2 flex-row-reverse">
                <div className="w-12 h-12 rounded-full border-2 border-[#c9a84c] flex items-center justify-center bg-[#222] text-[#c9a84c] font-bold text-sm overflow-hidden shrink-0">
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="Avatar"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    session.user?.name?.[0]?.toUpperCase() || "U"
                  )}
                </div>
                <div className="text-right">
                  <p className="text-white text-sm font-medium truncate max-w-30">
                    {session.user?.name}
                  </p>
                  <p className="text-gray-500 text-xs truncate max-w-30">{session.user?.email}</p>
                </div>
              </div>
              <Link
                href="/dashboard/profile"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-2 text-sm border border-[#c9a84c] text-[#c9a84c] rounded hover:bg-[#c9a84c]/10 transition-all"
              >
                View Profile
              </Link>
              <button
                onClick={() => {
                  handleLogoutAndClose();
                  setMenuOpen(false);
                }}
                className="w-full py-2 text-sm text-red-400 border border-red-400/30 rounded hover:bg-red-400/10 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-2 text-sm border border-[#c9a84c] text-[#c9a84c] rounded hover:bg-[#c9a84c]/10 transition-all"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-2 text-sm bg-[#c9a84c] text-[#111] rounded hover:bg-[#b8923e] transition-all"
              >
                Sign Up
              </Link>
            </div>
          )}
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