"use client";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb 
} from "react-icons/si";
import "animate.css";

const skillsData = [
  { 
    name: "React", 
    percent: 95, 
    subtitle: "Hooks, Context, Redux", 
    icon: <FaReact className="text-[#c9a84c] text-2xl" /> 
  },
  { 
    name: "JavaScript", 
    percent: 92, 
    subtitle: "ES6+, Async/Await, DOM", 
    icon: <FaJsSquare className="text-[#c9a84c] text-2xl" /> 
  },
  { 
    name: "HTML5", 
    percent: 90, 
    subtitle: "Semantic HTML, Accessibility", 
    icon: <FaHtml5 className="text-[#c9a84c] text-2xl" /> 
  },
  { 
    name: "CSS3", 
    percent: 88, 
    subtitle: "Flexbox, Grid, Animations", 
    icon: <FaCss3Alt className="text-[#c9a84c] text-2xl" /> 
  },
  { 
    name: "Tailwind CSS", 
    percent: 85, 
    subtitle: "Utility-first CSS, Responsive Design", 
    icon: <SiTailwindcss className="text-[#c9a84c] text-2xl" /> 
  },
  { 
    name: "Next.js", 
    percent: 80, 
    subtitle: "SSR, SSG, App Router", 
    icon: <SiNextdotjs className="text-[#c9a84c] text-2xl" /> 
  },
  { 
    name: "Node.js", 
    percent: 90, 
    subtitle: "Express, REST APIs, Middleware", 
    icon: <FaNodeJs className="text-[#c9a84c] text-2xl" /> 
  },
  { 
    name: "Express.js", 
    percent: 90, 
    subtitle: "Routing, Authentication, Security", 
    icon: <SiExpress className="text-[#c9a84c] text-2xl" /> 
  },
  { 
    name: "MongoDB", 
    percent: 85, 
    subtitle: "Mongoose, Aggregation, CRUD Operations", 
    icon: <SiMongodb className="text-[#c9a84c] text-2xl" /> 
  },
];

function SkillCard({ name, percent, subtitle, icon }) {
  return (
    <div className="bg-[#141414]/60 backdrop-blur-md border border-[#c9a84c]/10 rounded-xl p-5 flex flex-col gap-3 hover:border-[#c9a84c]/30 hover:bg-[#181818]/80 transition-all duration-300 group">
      
      {/* Top Section: Icon, Info and Percentage */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3.5">
          {/* Icon Wrap */}
          <div className="w-11 h-11 rounded-lg bg-[#c9a84c]/5 flex items-center justify-center border border-[#c9a84c]/10 group-hover:bg-[#c9a84c]/10 transition-all">
            {icon}
          </div>
          <div>
            <h4 className="text-white font-semibold text-base tracking-wide">{name}</h4>
            <p className="text-gray-500 text-xs mt-0.5">{subtitle}</p>
          </div>
        </div>
        {/* Percentage Badge */}
        <span className="text-[#c9a84c] text-sm font-semibold bg-[#c9a84c]/5 border border-[#c9a84c]/10 px-2 py-0.5 rounded text-right min-w-11.25">
          {percent}%
        </span>
      </div>

      {/* Progress Bar Section */}
      <div className="w-full h-1.5 bg-[#1f1f1f] rounded-full overflow-hidden mt-1">
        {/* Framer Motion progress bar with viewport trigger */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-[#c9a84c] rounded-full shadow-[0_0_12px_rgba(201,168,76,0.4)]" 
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#0e0e0e] pt-28 pb-16 px-4 relative overflow-hidden flex items-center justify-center">
      
      {/* SCREENSHOT GRID BACKGROUND EFFECT */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(to right, #c9a84c 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-[#c9a84c]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* SECTION TITLE */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 animate__animated animate__fadeInDown">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-8 h-px bg-[#c9a84c]/60" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.25em] uppercase bg-[#c9a84c]/5 px-3 py-1 rounded-full border border-[#c9a84c]/10">
              Expertise
            </span>
            <div className="w-8 h-px bg-[#c9a84c]/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
            My <span className="text-white">Skills</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl text-center mt-3 leading-relaxed">
            A comprehensive overview of my technical skills and expertise across different domains of software development.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 animate__animated animate__fadeInUp">
          {skillsData.map((skill) => (
            <SkillCard 
              key={skill.name} 
              name={skill.name} 
              percent={skill.percent} 
              subtitle={skill.subtitle}
              icon={skill.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}