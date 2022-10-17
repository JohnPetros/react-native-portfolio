import "./App.css";
import Header from "./components/Header";
import Bio from "./components/Bio";
import TeckStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Bio />
        <TeckStack />
        <Projects />
      </main>
    </>
  );
}

export default App;
