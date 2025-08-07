import React from 'react';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Skills from './sections/Skills';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="scroll-smooth">
      <Header />

      <section id="home" className="min-h-screen flex items-center justify-center  ">
        <Home />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center ">
        <About />
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center relative scroll-mt-16">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center relative scroll-mt-16">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center relative">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;

