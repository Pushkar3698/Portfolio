import "./App.css";
import { About } from "./Components/About";
import { ContactMe } from "./Components/ContactMe";
import Hero from "./Components/Hero";
import { Projects } from "./Components/Projects";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
