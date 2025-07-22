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

      <section id="home" className="h-screen scroll-mt-16 flex items-center justify-center">
        <Home />
      </section>

      <section id="about" className="h-screen scroll-mt-16">
        <About />
      </section>

      <section id="skills" className="h-screen scroll-mt-32">
        <Skills />
      </section>

      <section id="projects" className="h-screen scroll-mt-16">
        <Projects /> 
      </section>

      <section id="contact" className="h-screen scroll-mt-16">
        <Contact />
      </section>

      <Footer/>
    </div>
  );
}


export default App;
