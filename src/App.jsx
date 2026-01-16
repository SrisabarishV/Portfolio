import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import Experience from "./Components/Expericence/Expericence";
import Education from "./Components/Education/Education";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience/>
       <Education/>
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
