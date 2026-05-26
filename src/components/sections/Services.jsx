"use client";

import React from "react";
import { FaCode, FaPaintBrush, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Web Development",
    description: "Building modern, fast, and responsive web applications using Next.js, React, and Tailwind CSS tailored to your business needs.",
  },
  {
    id: 2,
    icon: <FaPaintBrush />,
    title: "Frontend Design",
    description: "Crafting clean, premium, and eye-catching user interfaces with custom animations and pixel-perfect responsiveness.",
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "Full-Stack Solutions",
    description: "Integrating powerful backend systems and secure databases like MongoDB using modern authentication solutions.",
  },
  {
    id: 4,
    icon: <FaMobileAlt />,
    title: "Responsive Web Design",
    description: "Ensuring your website looks elegant and functions flawlessly across all device screens, from mobile phones to large desktops.",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] bg-[#0e0e0e] text-gray-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl font-bold text-[#c9a84c] tracking-tight mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            My Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            High-quality web development services focused on performance, stunning visuals, and exceptional user experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-[#161616] border border-[#c9a84c]/10 rounded-xl p-8 hover:border-[#c9a84c]/40 transition-all duration-300 group shadow-xl flex flex-col sm:flex-row gap-5 items-start"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] text-xl shrink-0 group-hover:bg-[#c9a84c] group-hover:text-[#111] transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-xl font-bold text-white mb-2 group-hover:text-[#c9a84c] transition-colors"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}