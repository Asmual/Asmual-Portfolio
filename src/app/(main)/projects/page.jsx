import React from "react";
import Projects from "@/components/sections/Projects"; // তোমার প্রজেক্টস কম্পোনেন্টের সঠিক পাথ দাও
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// Next.js Server Side Metadata
export const metadata = {
  title: "Projects - Asmual Obaidul Hoque",
  description: "Explore the latest full-stack web development projects, tools, and clones built by Asmual.",
};


export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white pt-28 pb-16 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#c9a84c]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#c9a84c]/3 blur-[150px] rounded-full pointer-events-none" />

      {/* 1. HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase bg-[#c9a84c]/10 px-3 py-1 rounded-full border border-[#c9a84c]/20">
          Portfolio Archive
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 font-serif tracking-tight">
          Case Studies & <span className="text-[#c9a84c]">Works</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A curated collection of full-stack applications, real-time platform clones, and open-source projects built with precision, optimization, and scalable clean code.
        </p>
      </div>

      {/* 2. MAIN PROJECTS COMPONENT */}
      <div className="-mt-12"> 
        <Projects />
      </div>

      {/* 3. CALL TO ACTION (CTA) SECTION */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="bg-[#121316] border border-gray-800/60 rounded-2xl p-8 sm:p-12 text-center shadow-[0_15px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-[#c9a84c]/30 transition-all duration-300">
          
          {/* Card internal glow */}
          <div className="absolute inset-y-0 -right-20 w-48 bg-[#c9a84c]/5 blur-3xl rounded-full group-hover:bg-[#c9a84c]/10 transition-all duration-500" />
          
          <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">
            Have a project in mind or looking to hire?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            I am currently available for full-time roles or premium freelance projects. Let is create something extraordinary.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-linear-to-r from-[#c9a84c] to-[#9E7231] text-[#0e0e0e] rounded-lg hover:from-[#FFE0A3] hover:to-[#c9a84c] shadow-[0_4px_15px_rgba(201,168,76,0.15)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.25)] transition-all duration-200"
            >
              Let is Talk
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}