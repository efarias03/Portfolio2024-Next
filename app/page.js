import NavBar from "./components/NavBar";

import ProjectsContent from "./components/Sections/Projects/ProjectsContent";
import HeroContent from "./components/Sections/Hero";
import ContactContent from "./components/Contact/ContactContent";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      {/* <div className="grained"></div> */}
      <NavBar />
      <HeroContent />
      <ProjectsContent />
      <ContactContent />
      <Footer />
      
    </>
  );
};

export default App;