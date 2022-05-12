import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
