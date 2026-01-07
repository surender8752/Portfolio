import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import Reveal from "../components/Reveal";


const Home = () => {
  return (
    
    <>
    
    <Reveal/>
     

      <ScrollProgress />
     
    <Navbar/>
    
    <Hero />
     
      <About/>
      <Skills />
      
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
      <Footer/>
     
      
    
      
    </>
  );
};

export default Home;
