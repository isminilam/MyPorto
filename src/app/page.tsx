import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Certifications from '@/components/sections/Certifications';
import Footer from '@/components/sections/Footer';
import SectionDivider from '@/components/ui/SectionDivider';
import ThreeBackground from '@/components/3d/ThreeBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Persistent 3D Interactive Three.js Constellation across all sections */}
      <ThreeBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Certifications />
        </main>
        <Footer />
      </div>
    </div>
  );
}
