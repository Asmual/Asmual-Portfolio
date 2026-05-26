/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCode, FaLaptopCode, FaPalette, FaServer } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import "animate.css";

const skills = [
  { name: "HTML & CSS", percent: 90 },
  { name: "JavaScript", percent: 85 },
  { name: "React & Next.js", percent: 80 },
  { name: "Node.js", percent: 75 },
  { name: "MongoDB", percent: 70 },
  { name: "Tailwind CSS", percent: 90 },
];

const services = [
  {
    icon: <FaCode className="text-2xl text-[#c9a84c]" />,
    title: "Web Development",
    desc: "Building fast, responsive, and modern websites using the latest technologies.",
  },
  {
    icon: <FaPalette className="text-2xl text-[#c9a84c]" />,
    title: "UI/UX Design",
    desc: "Designing clean and intuitive user interfaces with a focus on user experience.",
  },
  {
    icon: <FaLaptopCode className="text-2xl text-[#c9a84c]" />,
    title: "Frontend Development",
    desc: "Creating pixel-perfect, interactive frontends with React and Next.js.",
  },
  {
    icon: <FaServer className="text-2xl text-[#c9a84c]" />,
    title: "Backend Development",
    desc: "Building robust REST APIs and server-side applications with Node.js.",
  },
];

function SkillBar({ name, percent }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percent), 300);
    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <div className="flex flex-col gap-1.5 animate__animated animate__fadeInUp">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-sm">{name}</span>
        <span className="text-[#c9a84c] text-sm font-medium">{percent}%</span>
      </div>
      <div className="w-full h-1.5 bg-[#222] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#c9a84c] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-[#0e0e0e] py-16 px-4 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-[#c9a84c]/10 pointer-events-none animate__animated animate__pulse animate__infinite animate__slower" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-[#c9a84c]/10 pointer-events-none animate__animated animate__pulse animate__infinite animate__slower animate__delay-2s" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 animate__animated animate__fadeInDown">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">
              About Me
            </span>
            <div className="w-10 h-px bg-[#c9a84c]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Who I Am
          </h2>
        </div>

        {/* Top Section: Photo + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo */}
          <div className="flex justify-center animate__animated animate__fadeInLeft animate__slow">
            <div className="relative group">
              <div className="absolute -inset-3 rounded-2xl border border-[#c9a84c]/20 group-hover:border-[#c9a84c]/50 transition-all duration-300" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#c9a84c]" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#c9a84c]" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#c9a84c]/30">
                <div className="absolute inset-0 bg-linear-to-t from-[#0e0e0e]/50 via-transparent to-transparent z-10" />
                <Image
                  src="/images/Asmual-HeroPicture.png"
                  alt="Asmual"
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover object-top group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-6 animate__animated animate__fadeInRight animate__slow">
            <div>
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "Georgia, serif" }}
              >
                I&apos;m Asmual Obaidul Hoque
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                A passionate Full Stack Developer from Bangladesh with a strong
                focus on building beautiful, functional, and user-friendly web
                applications. I love turning ideas into reality through clean
                code and elegant design.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                With expertise in modern web technologies like React, Next.js,
                Node.js, and MongoDB, I strive to deliver high-quality solutions
                that make a real impact. I&apos;m always eager to learn new
                things and take on challenging projects.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Asmual Obaidul Hoque" },
                { label: "Location", value: "Cox's Bazar, Bangladesh" },
                { label: "Email", value: "asmualobaidulhoque@gmail.com" },
                { label: "Availability", value: "Open to Work" },
              ].map((item) => (
                <div key={item.label} className="animate__animated animate__fadeInUp animate__fast">
                  <p className="text-gray-500 text-xs uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-medium mt-0.5">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <a
              href="/Asmual-CV.pdf"
              download
              className="self-start flex items-center gap-2 py-3 px-6 text-sm font-medium bg-[#c9a84c] text-[#111] rounded hover:bg-[#b8923e] transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#c9a84c]/10"
            >
              <MdDownload className="text-lg" />
              Download CV
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">
                My Skills
              </span>
              <div className="w-10 h-px bg-[#c9a84c]" />
            </div>
            <h3
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              What I Know
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto px-4">
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percent={skill.percent}
              />
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">
                Services
              </span>
              <div className="w-10 h-px bg-[#c9a84c]" />
            </div>
            <h3
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              What I Do
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-[#161616] border border-[#c9a84c]/20 rounded-xl p-6 flex flex-col gap-4 hover:border-[#c9a84c]/50 hover:bg-[#1a1a1a] transition-all duration-300 group hover:-translate-y-1.5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-all">
                  {service.icon}
                </div>
                <h4
                  className="text-white font-semibold text-base"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {service.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}