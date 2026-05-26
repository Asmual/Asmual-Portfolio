"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowDown } from "react-icons/fa6"; 

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen lg:h-screen bg-[#0e0e0e] flex items-center justify-center overflow-hidden pb-10 sm:pb-15 lg:pb-0">
      
      {/* Wrapper: 6xl container centered */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-4 w-72 h-72 rounded-full border border-[#c9a84c]/10 " />
          <div className="absolute bottom-20 right-4 w-48 h-48 rounded-full border border-[#c9a84c]/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-[#c9a84c]/5" />
        </div>

        {/* Main Grid Content Area */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10 mt-2 ">
          
          {/* LEFT: Text Content */}
          <div
            className={`flex flex-col gap-5 sm:gap-6 transition-all duration-1000 transform
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {/* Tag */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">
                Web Developer
              </span>
            </div>

            {/* Heading with Fixed Typewriter (No Underline & No Cursor) */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight font-serif min-h-13.75 sm:min-h-auto">
              Hi,{" "}
              <span className="text-[#c9a84c] inline-block no-underline select-none">
                <Typewriter
                  words={["I'm Asmual"]}
                  loop={0} 
                  cursor={false}
                  typeSpeed={100}
                  deleteSpeed={60}
                  delaySpeed={1500}
                />
              </span>
            </h1>

            {/* Sub heading */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Passionate full-stack enthusiast focused on crafting clean, responsive, and elegant digital experiences. Specializing in modern React, Next.js, and Node.js ecosystems to deliver highly optimized web solutions.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-1">
              <div>
                <h3 className="text-2xl font-bold text-[#c9a84c] font-serif">1+</h3>
                <p className="text-gray-500 text-xs mt-1">Year Experience</p>
              </div>
              <div className="w-px bg-[#c9a84c]/20" />
              <div>
                <h3 className="text-2xl font-bold text-[#c9a84c] font-serif">15+</h3>
                <p className="text-gray-500 text-xs mt-1">Projects Done</p>
              </div>
              <div className="w-px bg-[#c9a84c]/20" />
              <div>
                <h3 className="text-2xl font-bold text-[#c9a84c] font-serif">Cox's Bazar</h3>
                <p className="text-gray-500 text-xs mt-1">Location</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/projects"
                className="px-6 py-3 text-sm font-medium bg-[#c9a84c] text-[#111] rounded hover:bg-[#b8923e] transition-all duration-200"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 text-sm font-medium border border-[#c9a84c] text-[#c9a84c] rounded hover:bg-[#c9a84c]/10 transition-all duration-200"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* RIGHT: Photo & Resume Download */}
          <div
            className={`flex flex-col items-center pr-5 lg:items-end gap-5 sm:gap-6 transition-all duration-1000 delay-300 transform
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <div className="relative">
              {/* Outer gold rings */}
              <div className="absolute -inset-3 rounded-full border border-[#c9a84c]/30" />
              <div className="absolute -inset-1 rounded-full border border-[#c9a84c]/20" />

              {/* Gold corner accents */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#c9a84c]" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#c9a84c]" />

              {/* Photo container */}
              <div className="relative w-44 h-56 sm:w-52 sm:h-68 lg:w-60 lg:h-76 rounded-2xl overflow-hidden border-2 border-[#c9a84c]/40 shadow-[0_0_30px_rgba(201,168,76,0.1)]">
                <div className="absolute inset-0 bg-linear-to-t from-[#0e0e0e]/60 via-transparent to-transparent z-10" />
                <Image
                  src="/images/Asmual-HeroPicture.png"
                  alt="Asmual Obaidul Hoque"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Download Resume Button with React Icon Component */}
            <a
              href="/Asmual_Obaidul_Hoque -Resume.pdf"
              download="Asmual_Obaidul_Hoque_Resume.pdf"
              className="group flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase border border-[#c9a84c]/40 text-[#c9a84c] rounded-xl bg-[#121316]/50 hover:bg-[#c9a84c] hover:text-[#0e0e0e] transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_rgba(201,168,76,0.3)] w-44 sm:w-52 lg:w-60 justify-center"
            >
              {/* Injecting a small style tag to gently overwrite the bounce distance to 2-3px */}
              <style>{`
                @keyframes gentleBounce {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-3px); }
                }
                .animate-gentle {
                  animation: gentleBounce 1.2s infinite;
                }
              `}</style>
              
              {/* Fixed: Icon now utilizes the custom gentle animation */}
              <FaArrowDown className="text-sm animate-gentle group-hover:animation-none group-hover:translate-y-0.5 transition-transform duration-200" />
              Download Resume
            </a>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#0e0e0e] to-transparent pointer-events-none" />
    </section>
  );
}