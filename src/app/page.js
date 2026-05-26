import Hero from "@/components/sections/Hero";
import About from "@/app/about/page";      
import Services from "@/app/(main)/services/page";
import Projects from "@/app/(main)/projects/page"; 
import Contact from "@/app/contact/page";         
import Blogs from "@/components/sections/Blogs";

export default function Home() {
  return (
    <main className="bg-[#0e0e0e]">
      <div id="home">
        <Hero />
      </div>

      <div id="services" className="scroll-mt-10">
        <Services />
      </div>

      <div id="projects" className="scroll-mt-20">
        <Projects />
      </div>

      <div id="about" className="scroll-mt-20">
        <About />
      </div>

      <div id="blogs" className="scroll-mt-20">
        <Blogs />
      </div>

      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>
    </main>
  );
}