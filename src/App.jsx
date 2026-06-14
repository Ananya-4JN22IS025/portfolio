import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Education />
      <Internship />
      <Projects />
      <Contact />
     
    </>
  );
}

export default App;