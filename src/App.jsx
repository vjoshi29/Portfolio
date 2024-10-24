import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Certificates from "./Components/Certificates/Certificates";

function App() {
  return (
    <div className="bg-slate-950 h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates/>
      <Footer />
    </div>
  );
}

export default App;
