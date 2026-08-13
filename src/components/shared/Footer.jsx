import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const socials = [
    { Icon: FaFacebookF, url: "https://www.facebook.com/Asmuals" },
    { Icon: FaInstagram, url: "https://www.instagram.com/asmual_obaidul_hoque" },
    { Icon: FaTwitter, url: "https://x.com/Asmual_123" },
    { Icon: FaGithub, url: "https://github.com/Asmual" },
    { Icon: FaYoutube, url: "https://www.youtube.com/@AsmualObaidulHoque" },
    { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/asmual" },
  ];

  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  const services = [
    { name: "Frontend Development", href: "/#services" },
    { name: "Backend Development", href: "/#services" },
    { name: "Full Stack Solutions", href: "/#services" },
    { name: "UI/UX Optimization", href: "/#services" },
  ];

  return (
    <footer className="bg-[#0e0e0e] border-t border-[#c9a84c]/20 text-white relative overflow-hidden shadow-[0_-4px_30px_rgba(201,168,76,0.03)]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        
        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/images/MyLogo.png"
                  alt="Asmual Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold text-[#c9a84c] font-serif tracking-wide">
                Asmual
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specializing in professional web development, frontend architecture, 
              and creating interactive digital solutions with scalable, modern technologies.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <div className="relative pb-2 mb-5">
              <h3 className="text-[#c9a84c] text-lg font-semibold uppercase tracking-wider">
                Quick Links
              </h3>
              {/* Short Title Accent Bar */}
              <span className="absolute bottom-0 left-0 w-8 h-[2.5px] bg-[#c9a84c] rounded-full" />
            </div>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 hover:text-[#c9a84c] transition-colors duration-200"
                  >
                    <span className="text-[#c9a84c] font-bold text-xs transition-transform duration-200 group-hover:translate-x-1">
                      ›
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div>
            <div className="relative pb-2 mb-5">
              <h3 className="text-[#c9a84c] text-lg font-semibold uppercase tracking-wider">
                Services
              </h3>
              {/* Short Title Accent Bar */}
              <span className="absolute bottom-0 left-0 w-8 h-[2.5px] bg-[#c9a84c] rounded-full" />
            </div>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 hover:text-[#c9a84c] transition-colors duration-200"
                  >
                    <span className="text-[#c9a84c] font-bold text-xs transition-transform duration-200 group-hover:translate-x-1">
                      ›
                    </span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Links & Discreet Sign In */}
          <div>
            <div className="relative pb-2 mb-5">
              <h3 className="text-[#c9a84c] text-lg font-semibold uppercase tracking-wider">
                Follow Me
              </h3>
              {/* Short Title Accent Bar */}
              <span className="absolute bottom-0 left-0 w-8 h-[2.5px] bg-[#c9a84c] rounded-full" />
            </div>
            
            {/* Social Icons Container */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {socials.map(({ Icon, url }, index) => (
                <Link
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-[#c9a84c]/30 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#c9a84c] hover:text-black hover:border-[#c9a84c] transition-all duration-300 shadow-xs"
                >
                  <Icon className="text-xs" />
                </Link>
              ))}
            </div>

            {/* Subtle Authorized Login Link */}
            <div className="pt-3 border-t border-[#c9a84c]/10">
              <p className="text-xs text-gray-500">
                Authorized access?{" "}
                <Link
                  href="/login"
                  className="text-gray-400 underline underline-offset-2 hover:text-[#c9a84c] transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-[#c9a84c]/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs gap-3">
          <p>© 2026 Asmual. All Rights Reserved.</p>
          <p className="tracking-wide">Designed with precision & passion.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;