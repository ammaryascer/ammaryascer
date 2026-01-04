import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Languages } from "@/components/sections/Languages";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Qualifications } from "@/components/sections/Qualifications";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Skills />
      <Languages />
      <Experience />
      <Education />
      <Qualifications />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}
