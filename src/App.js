import { useEffect } from "react";
import "./App.css";
import { About } from "./Components/About";
import { ContactMe } from "./Components/ContactMe";
import Hero from "./Components/Hero";
import { ProjectHeading } from "./Components/ProjectHeading";
import { Projects } from "./Components/Projects";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);

  return (
    <>
      <Hero />
      <About />
      <ProjectHeading />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
