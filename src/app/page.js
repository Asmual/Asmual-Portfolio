import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";      
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects"; 
import Contact from "@/components/sections/Contact";         
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="bg-[#0e0e0e]">
      <section id="home">
        <Hero />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

       <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="services" className="scroll-mt-20">
        <Services />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </main>
  );
}