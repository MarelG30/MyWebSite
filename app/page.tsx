import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import TextReveal from "./components/TextReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080d19]">
      <Navbar />
      <TextReveal>
        <Hero />
      </TextReveal>

      <TextReveal>
        <About />
      </TextReveal>

      <TextReveal>
        <Skills />
      </TextReveal>
      {/* <TextReveal>
        <Projects />
      </TextReveal> */}
      <TextReveal>
        <Contact />
      </TextReveal>

      <Footer />
    </main>
  );
}
