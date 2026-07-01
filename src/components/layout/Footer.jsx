import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  // Configured social platform references matching the precise icons layout
  const socials = [
    { Icon: FaFacebookF, url: "https://www.facebook.com/Asmuals" },
    { Icon: FaInstagram, url: "https://www.instagram.com/asmual_obaidul_hoque" },
    { Icon: FaTwitter, url: "https://x.com/Asmual_123" },
    { Icon: FaGithub, url: "https://github.com/Asmual" },
    { Icon: FaYoutube, url: "https://www.youtube.com/@AsmualObaidulHoque" },
    { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/asmual" },
  ];

  return (
    <footer className="bg-[#0e0e0e] border-t border-[#c9a84c]/20 text-white shadow-[0_-4px_30px_rgba(201,168,76,0.03)]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-6">
        {/* Footer Navigation and Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Identity & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/AsmualLogo.png"
                  alt="Asmual Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold text-[#c9a84c] font-serif">
                Asmual
              </h2>
            </div>
            {/* Updated profile focus descriptor */}
            <p className="text-gray-400 leading-7">
              Specializing in professional web development, frontend architecture, 
              and creating interactive digital solutions with scalable, modern technologies.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-[#c9a84c] text-lg font-semibold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#c9a84c] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#c9a84c] transition">About</a></li>
              <li><a href="#" className="hover:text-[#c9a84c] transition">Projects</a></li>
              <li><a href="#" className="hover:text-[#c9a84c] transition">Contact</a></li>
            </ul>
          </div>

          {/* Professional Services Offered */}
          <div>
            <h3 className="text-[#c9a84c] text-lg font-semibold mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Full Stack Solutions</li>
              <li>UI/UX Optimization</li>
            </ul>
          </div>

          {/* Social Presence Section */}
          <div>
            <h3 className="text-[#c9a84c] text-lg font-semibold mb-5">
              Follow Me
            </h3>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#c9a84c]/40 rounded-full flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Attribution Bar */}
        <div className="border-t border-[#c9a84c]/10 mt-12 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <p>© 2026 Asmual. All Rights Reserved.</p>
          <p>Designed with precision & passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;