import About from "../components/About";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import LetsConnect from "../components/LetsConnect";
const MainLayout = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <LetsConnect/>
    </div>
  );
};

export default MainLayout;
